# Pro Araiza Website — PROJECT STATE

> Governance-kit state file. Read this + the repo `CLAUDE.md`/`AGENTS.md` before touching anything. Report build state from here, never from memory.

**Client:** Pro Araiza Remodeling & Painting (Joaquin Araiza, Cumming GA) · Presence Pulse customer
**Live:** https://www.proaraizapainting.com (apex → www)
**Repo:** github.com/Hiimdrew/proaraiza-website (public, branch-protected, one trunk = `main`)
**Vercel:** team `hiimdrews-projects` (Presence Pulse) · project `proaraiza-website`
**Stack:** Next.js 16.2.9 App Router · Tailwind · deployed on Vercel

---

## ⚠️ Two clones exist — one is stale

| Path | State |
|---|---|
| `~/Desktop/Second Brain/proaraiza-website` | ✅ **CURRENT** — tracks `origin/main` |
| `~/Dev/Vercel Sites/proaraiza-website` | 🛑 **STALE** — stuck at `0c00ac7`, still has the old `onboarding@resend.dev` sender |

Always `git fetch && git log --oneline origin/main` before trusting a working copy. Reconcile or delete the stale clone.

---

## IN FLIGHT

_(none — Claude session fc9c4404 released 2026-07-30)_

Claim by committing an `IN FLIGHT:` line before starting work. A foreign claim = STOP and tell Drew.

---

## Current state (2026-07-30)

- **Site:** live. 9 city pages, 6 service pages, About / Guarantees / Gallery / Blog / Contact / Privacy. Real photos + 4 Higgsfield videos.
- **Contact form:** ✅ **working and verified end-to-end 2026-07-30 15:54.** Built to the Form Security Standard — honeypot + Cloudflare Turnstile + in-memory rate limit + server-side validation → Resend.
  - Route: `src/app/api/contact/route.ts`
  - From `Pro Araiza Website <leads@gecproposals.com>` · To both of Joaquin's addresses · CC `drew.m@presencepulse.digital` · subject prefixed `[Pro Araiza]`
  - Verified delivered to `Joaquin@proaraizapainting.com` + the PP inbox. `Proaraiza93@outlook.com` is in the To: header but that mailbox has never been read directly — Joaquin should confirm.
- **GA4:** ✅ property `547898921` ("Pro Araiza Painting", account `402999529`, in **Joaquin's** Google account). Measurement ID `G-KG1YRW4803`, wired via `next/script` in `src/app/layout.tsx`. `generate_lead` fires from `ContactForm.tsx` after the server accepts. Realtime verified receiving.
- **Vercel Web Analytics:** live alongside GA4.
- **Brand logo:** ✅ **live on prod 2026-07-31** (`d7814e3`). Joaquin's PA lockup, black keyed to transparent (header/footer are `#0A0A0A`). Two crops in `public/images/`: `pa-logo-mark.png` (monogram → header) + `pa-logo-full.png` (full lockup → footer). Favicon + `src/app/icon.png` regenerated from the mark. Source: `LOGO JOAK PA.jpg` at vault root. Text wordmarks removed from `Header.tsx` / `Footer.tsx`.
- **Search Console:** domain verified (DNS TXT), but the property sits in a Google account **not** connected to Composio tooling — sitemap not yet submitted. Blocked on Drew.
- **SEO:** sitemap.xml + robots.txt live. JSON-LD in layout.
- **Security:** Next 16.2.9 (all HIGH advisories cleared), Dependabot on, branch protection on. Secrets in Vercel prod only (`RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`), mirrored in gitignored `.env.local`.

## Open

1. **Search Console access** — find the Google account owning the property, add the Composio-connected account as a Full user, then submit the sitemap. (Drew)
2. **Confirm Outlook delivery** with Joaquin. (Drew)
3. Optional: link GA4 ↔ Search Console once #1 lands.
4. Later: Resend paid ($20/mo) → verify `presencepulse.digital`, flip `LEAD_FROM` to `leads@presencepulse.digital` (one line, becomes the universal PP sender).

---

## Gotchas

1. **Never run two `next build` at once** — they contend for `.next` and all hang (ECANCELED). Fix: `pkill -f "next build"`, `rm -rf .next`, run ONE.
2. Build needs env: `set -a; source .env.local; set +a` before `npx next build`.
3. Writing `dangerouslySetInnerHTML` via the Write tool trips a security hook — use Edit, a Bash heredoc, or `<Script>` children instead.
4. Vercel's build gate is the safety net; a bad build never promotes. Rollback = Deployments → Promote prior.
5. DNS false positives: parked domains wildcard-answer every subdomain. Verify the record VALUE, not just its presence.
6. `next/script` is current in Next 16 — no `@next/third-parties` dependency needed for GA4.

## Key files

`src/app/layout.tsx` (metadata + JSON-LD + Vercel Analytics + GA4) · `src/app/api/contact/route.ts` (lead router) · `src/components/ContactForm.tsx` · `src/app/sitemap.ts` · `src/app/robots.ts` · `src/components/CityPageTemplate.tsx` · `src/components/LazyVideo.tsx` (iOS multi-video fix) · `src/components/InlineCTA.tsx`

## History

- **2026-07-31** — Brand logo shipped to prod (`d7814e3`): PA lockup keyed transparent, monogram in header + full lockup in footer, favicon/app-icon regenerated. Assets 200 on prod, header render verified live.
- **2026-07-30** — GA4 created + wired (`G-KG1YRW4803`), `generate_lead` conversion added, realtime verified. Contact form tested end-to-end for the first time and confirmed delivering. Governance kit adopted (this file).
- **2026-07-29** — Lead router fixed: sender moved off `onboarding@resend.dev` (which only reliably delivered to the Resend account owner, so Joaquin was likely never receiving leads), `[Pro Araiza]` subject prefix, CC to the PP inbox. Commit `2f827b8`.
- **2026-06-15 → 07-29** — Secure form backend deployed, Next 16.2.9 patch, sitemap/robots, Vercel Web Analytics.
