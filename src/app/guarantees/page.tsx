import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Guarantees & Credentials | Pro Araiza Remodeling & Painting",
  description:
    "Fully licensed and insured. 2-year workmanship warranty on every painting and remodeling project. Sherwin-Williams and Benjamin Moore premium paints. Honest payment terms — 30-50% deposit, balance on satisfaction.",
};

const credentials = [
  {
    title: "Fully Licensed",
    body: "Pro Araiza operates as PROARAIZA LLC, fully licensed to perform painting and remodeling work in the State of Georgia.",
  },
  {
    title: "Liability Insurance",
    body: "We carry general liability coverage that protects your property if anything goes wrong on the job. Certificates of insurance available on request.",
  },
  {
    title: "Workers' Compensation",
    body: "Every member of our team is covered by workers' comp. You are never liable for a worker injury on your property.",
  },
  {
    title: "Bonded for Commercial Work",
    body: "For commercial projects, we provide bonding documentation as required by your landlord, property manager, or general contractor.",
  },
];

const warrantyDetails = [
  "All interior and exterior painting workmanship — covered for 2 years against peeling, blistering, and chipping caused by application defects.",
  "Cabinet refinishing — covered for 2 years against finish failure, chipping, and adhesion issues.",
  "Deck staining — covered for product-appropriate longevity (5-7 years for semi-transparent, 7-10 for solid stains) when our recommended maintenance schedule is followed.",
  "Drywall and trim repair work — covered against re-cracking and seam failure for 2 years.",
];

const exclusions = [
  "Damage caused by severe weather, lightning, hail, or natural disaster.",
  "Damage from impact, vandalism, settling of the structure, or pre-existing substrate issues we disclosed before the project began.",
  "Surfaces or paints not recommended by us (if a customer insists on a budget product against our advice, the warranty on that paint is whatever the manufacturer offers).",
];

const paymentTerms = [
  {
    label: "Deposit to secure your job",
    value: "30-50%",
    detail: "Depending on project size and material requirements. Smaller projects start at the lower end.",
  },
  {
    label: "Balance due on completion",
    value: "When you say so",
    detail: "We don't ask for the remaining balance until you walk the project with us and confirm you're 100% satisfied. That's the standard.",
  },
  {
    label: "No hidden fees",
    value: "$0",
    detail: "Our written estimate is what you pay. Any changes during the project come with a clear, written change order before any work happens.",
  },
];

const materials = [
  {
    brand: "Sherwin-Williams",
    note: "Emerald, ProClassic, ProMar 200, SuperPaint, and Cabinet Coat — chosen based on substrate and environment.",
  },
  {
    brand: "Benjamin Moore",
    note: "Advance, Aura, Regal Select, and Ultra Spec Commercial — premium lines for high-touch areas, cabinets, and commercial work.",
  },
  {
    brand: "Specialty Coatings",
    note: "Deck stains from Sherwin-Williams Super Deck and Benjamin Moore Arborcoat. Low-VOC and antimicrobial products available for medical and food-service environments.",
  },
];

export default function GuaranteesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
              Guarantees &amp; Credentials
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The Standards We Hold Ourselves To
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Every promise on this site is a promise we have written down,
              insured, and warranty-backed. Here is exactly what you are getting
              when you hire Pro Araiza — in plain language, with the
              fine print included.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:8434152437"
                className="rounded-md border border-gray-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                Call (843) 415-2437
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workmanship warranty */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Our promise</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                2-Year Workmanship Warranty
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">
                We stand behind every project for two full years. If our
                workmanship fails — paint peels, cabinets chip, drywall seams
                crack — we come back and fix it at no cost.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="font-semibold text-brand-black">What&apos;s covered</h3>
                <ul className="mt-4 space-y-3">
                  {warrantyDetails.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-brand-text">
                      <svg className="h-5 w-5 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 font-semibold text-brand-black">What is not covered</h3>
                <ul className="mt-4 space-y-3">
                  {exclusions.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-brand-text-light">
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License & Insurance */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            License &amp; Insurance Coverage
          </h2>
          <p className="mt-4 max-w-3xl text-brand-text-light">
            Verification is a phone call away. We&apos;ll provide certificates of
            insurance and license documentation on request for any project.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {credentials.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-brand-black">{c.title}</h3>
                <p className="mt-2 text-sm text-brand-text-light leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Honest pricing</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Payment Terms
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">
                Clear, fair, and the same for every customer. No surprises at
                the end of the job.
              </p>
            </div>
            <div className="space-y-4 lg:col-span-2">
              {paymentTerms.map((p) => (
                <div key={p.label} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-brand-black">{p.label}</h3>
                    <span className="text-2xl font-bold text-brand-gold">{p.value}</span>
                  </div>
                  <p className="mt-2 text-sm text-brand-text-light">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Materials We Use
          </h2>
          <p className="mt-4 max-w-3xl text-brand-text-light">
            We only use premium paint lines from the two manufacturers that
            consistently produce the best durability, color retention, and
            long-term performance.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {materials.map((m) => (
              <div key={m.brand} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-brand-black">{m.brand}</h3>
                <p className="mt-3 text-sm text-brand-text-light leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What treating your home like our own means */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Operating standards</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              What &ldquo;Treat Your Home Like Our Own&rdquo; Actually Means
            </h2>
            <p className="mt-6 text-brand-text leading-relaxed">
              It&apos;s easy to put a slogan on a website. Here is what we actually
              do on every single project — without exception.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Drop cloths on every floor surface before we open a paint can.",
              "Plastic and tape on every cabinet, countertop, and adjacent surface.",
              "All hardware removed and labeled — never painted around.",
              "Daily site cleanup. We sweep, vacuum, and dispose of trash every evening.",
              "Sanding and dust controlled with shop vacuums and air filtration.",
              "End-of-day walkthroughs so you always know what tomorrow looks like.",
              "Final satisfaction walkthrough — we don't ask for final payment until you sign off.",
              "Touch-up paint left for you in a labeled container for future repairs.",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm text-brand-text">
                <svg className="h-5 w-5 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Ready to See What We Do?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Our Services", href: "/services" },
              { name: "Recent Projects", href: "/gallery" },
              { name: "About Joaquin", href: "/about" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="rounded-lg border border-gray-200 bg-white p-5 transition hover:border-brand-gold hover:shadow-md">
                <h3 className="font-semibold text-brand-black">{s.name}</h3>
                <span className="mt-2 inline-block text-sm text-brand-gold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="h-16 lg:hidden" />
    </>
  );
}
