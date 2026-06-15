"use client";

import { useRef, useState, type FormEvent } from "react";
import Script from "next/script";

// Public site key (safe to ship to the browser). Env override allowed.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAADg82p14hFNakY3q";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold";
const labelClass = "block text-sm font-medium text-brand-black";

export default function ContactForm() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  function renderTurnstile() {
    if (
      typeof window !== "undefined" &&
      window.turnstile &&
      widgetRef.current &&
      widgetId.current === null
    ) {
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: SITE_KEY,
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    }
  }

  function resetTurnstile() {
    setToken("");
    if (window.turnstile && widgetId.current) {
      window.turnstile.reset(widgetId.current);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrMsg("");
    if (!token) {
      setErrMsg("Please complete the verification box, then try again.");
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: token }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrMsg(
          json.error || "Something went wrong. Please call (843) 415-2437.",
        );
        resetTurnstile();
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please call (843) 415-2437.");
      resetTurnstile();
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl bg-brand-gray p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-black">Thank you!</h2>
        <p className="mt-3 text-brand-text">
          Your request is in. Joaquin will reach out within 24 hours with your
          free estimate. Need us sooner? Call{" "}
          <a className="font-semibold text-brand-gold" href="tel:8434152437">
            (843) 415-2437
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
        onReady={renderTurnstile}
      />

      {/* Honeypot: hidden from real users; bots fill it and get dropped server-side. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input type="text" id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input type="tel" id="phone" name="phone" required className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input type="email" id="email" name="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="zip" className={labelClass}>
            Zip Code *
          </label>
          <input type="text" id="zip" name="zip" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service Type *
        </label>
        <select id="service" name="service" required className={fieldClass}>
          <option value="">Select a service...</option>
          <option value="interior">Interior Painting</option>
          <option value="exterior">Exterior Painting</option>
          <option value="cabinets">Cabinet Painting</option>
          <option value="remodeling">Remodeling</option>
          <option value="pressure-washing">Pressure Washing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>

      {/* Cloudflare Turnstile widget renders here */}
      <div ref={widgetRef} />

      {errMsg && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {errMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-black transition hover:bg-brand-copper disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Get My Free Estimate"}
      </button>
    </form>
  );
}
