import type { NextRequest } from "next/server";

// Pro Araiza lead router.
// Branded form -> this server function -> Resend (email). All protections live
// here once: honeypot, Cloudflare Turnstile verify, rate limiting, server-side
// validation. Secrets come from env (never the client/repo).

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_VERIFY =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Delivery targets (not secret). Leads go to both of Joaquin's inboxes so he
// never misses one while he's still living in Outlook, with Drew CC'd.
const LEAD_TO = ["Joaquin@proaraizapainting.com", "Proaraiza93@outlook.com"];
const LEAD_CC = ["dmays83@gmail.com"];
// Until proaraizapainting.com is verified in Resend, send from Resend's shared
// sender. Flip this to leads@proaraizapainting.com once the domain is verified.
const LEAD_FROM = "Pro Araiza Website <onboarding@resend.dev>";

// --- Best-effort per-IP rate limit (Turnstile is the real bot wall) ----------
// In-memory: persists within a warm instance. Upgrade to Vercel KV / Upstash if
// abuse ever shows up.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function str(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== "unknown") body.append("remoteip", ip);
  try {
    const res = await fetch(TURNSTILE_VERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const ip = clientIp(request);

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // 1) Honeypot — a hidden field real users never see. If filled, it's a bot.
  // Return a fake success so the bot doesn't learn it was caught.
  if (str(payload.company)) {
    return Response.json({ ok: true });
  }

  // 2) Rate limit (best-effort per-IP).
  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  // 3) Cloudflare Turnstile.
  const token = str(payload.turnstileToken, 4000);
  if (!token || !(await verifyTurnstile(token, ip))) {
    return Response.json(
      { ok: false, error: "Verification failed. Please retry." },
      { status: 400 },
    );
  }

  // 4) Validate + sanitize.
  const name = str(payload.name, 120);
  const phone = str(payload.phone, 40);
  const email = str(payload.email, 200);
  const zip = str(payload.zip, 15);
  const service = str(payload.service, 60);
  const message = str(payload.message, 4000);

  if (!name || !phone || !zip || !service) {
    return Response.json(
      { ok: false, error: "Please fill in the required fields." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 },
    );
  }

  // 5) Deliver via Resend.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "Server not configured." }, { status: 500 });
  }

  const html = `
    <h2 style="margin:0 0 12px">New estimate request &mdash; Pro Araiza</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Phone:</strong> ${esc(phone)}</p>
    <p><strong>Email:</strong> ${email ? esc(email) : "(not provided)"}</p>
    <p><strong>Zip:</strong> ${esc(zip)}</p>
    <p><strong>Service:</strong> ${esc(service)}</p>
    <p><strong>Project details:</strong><br>${
      message ? esc(message).replace(/\n/g, "<br>") : "(none)"
    }</p>
    <hr>
    <p style="color:#888;font-size:12px">Submitted via the proaraizapainting.com contact form. IP ${esc(
      ip,
    )}.</p>
  `;
  const text = [
    "New estimate request - Pro Araiza",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "(not provided)"}`,
    `Zip: ${zip}`,
    `Service: ${service}`,
    `Project details: ${message || "(none)"}`,
  ].join("\n");

  const emailBody: Record<string, unknown> = {
    from: LEAD_FROM,
    to: LEAD_TO,
    cc: LEAD_CC,
    subject: `New estimate request: ${name} (${service})`,
    html,
    text,
  };
  if (email) emailBody.reply_to = email;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", res.status, detail);
      return Response.json(
        { ok: false, error: "Could not send right now. Please call (843) 415-2437." },
        { status: 502 },
      );
    }
  } catch (e) {
    console.error("Resend exception:", e);
    return Response.json(
      { ok: false, error: "Could not send right now. Please call (843) 415-2437." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
