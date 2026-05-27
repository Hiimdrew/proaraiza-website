"use client";

import Link from "next/link";

interface InlineCTAProps {
  /** Short, conversational headline. Keep under 70 chars. */
  headline?: string;
  /** Optional supporting line under the headline. */
  subtext?: string;
  /** Primary CTA button text. Defaults to "Get a Free Estimate". */
  primaryLabel?: string;
  /** Where the primary button links. Defaults to /contact. */
  primaryHref?: string;
  /** Variant — light or dark background. */
  variant?: "dark" | "light";
}

/**
 * Slim mid-page CTA strip designed for inline use between content sections.
 * Less heavy than CTABanner so it doesn't signal "page is ending" — instead
 * acts as a friction-breaker for users mid-scroll who are warming up.
 *
 * Use this AFTER trust moments (project showcase, testimonials, FAQ, gallery)
 * where intent is rising and a soft call-to-action converts at higher rate
 * than waiting for the final bottom-of-page CTABanner.
 */
export default function InlineCTA({
  headline = "Ready to start your project?",
  subtext = "Free written estimate in 24 hours. Call, text, or click.",
  primaryLabel = "Get a Free Estimate",
  primaryHref = "/contact",
  variant = "dark",
}: InlineCTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden ${isDark ? "bg-brand-black" : "bg-brand-gray"}`}
    >
      {/* Accent glow */}
      <div
        className={`pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? "bg-brand-gold/10" : "bg-brand-gold/15"
        }`}
      />
      <div
        className={`pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full blur-3xl ${
          isDark ? "bg-brand-copper/10" : "bg-brand-copper/15"
        }`}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-14">
        {/* Text */}
        <div className="max-w-2xl">
          <h3
            className={`text-2xl font-bold tracking-tight sm:text-3xl ${
              isDark ? "text-white" : "text-brand-black"
            }`}
          >
            {headline}
          </h3>
          {subtext && (
            <p
              className={`mt-2 text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-brand-text-light"
              }`}
            >
              {subtext}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:items-center">
          <Link
            href={primaryHref}
            className="rounded-lg bg-brand-gold px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-brand-black transition-all duration-300 hover:bg-brand-copper hover:shadow-lg hover:shadow-brand-gold/30"
          >
            {primaryLabel}
          </Link>
          <a
            href="tel:8434152437"
            className={`flex items-center justify-center gap-2 text-sm font-semibold transition ${
              isDark ? "text-gray-300 hover:text-brand-gold" : "text-brand-text hover:text-brand-gold"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Or call (843) 415-2437
          </a>
        </div>
      </div>
    </section>
  );
}
