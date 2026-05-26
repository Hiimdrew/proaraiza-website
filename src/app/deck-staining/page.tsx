import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import LazyVideo from "@/components/LazyVideo";

export const metadata: Metadata = {
  title: "Deck Staining & Wood Restoration | Cumming & North Atlanta",
  description:
    "Premium deck staining and wood restoration in Cumming, GA and North Atlanta. Semi-transparent stains that protect for 5-7 years. Decks, railings, exposed ceiling trusses. 2-year warranty. Free estimates.",
};

const process = [
  {
    step: "1",
    title: "Inspection & Consultation",
    description:
      "We walk your deck, check for damaged boards, loose railings, and substrate issues. We talk through color, stain type, and what kind of finish will work best for how your space gets used.",
  },
  {
    step: "2",
    title: "Strip & Sand",
    description:
      "Old finishes get stripped or sanded down to bare wood. We address any rough spots, splinters, and weathered grain. Proper prep is the difference between a finish that lasts 7 years and one that peels in 2.",
  },
  {
    step: "3",
    title: "Clean & Brighten",
    description:
      "After sanding, the wood gets a deep clean and a wood brightener treatment. This opens the grain so stain absorbs evenly and gets you a uniform, rich color across every plank.",
  },
  {
    step: "4",
    title: "Apply Premium Stain",
    description:
      "We apply professional-grade semi-transparent or solid stain in multiple coats, depending on the product and look you want. We protect every adjacent surface, work in good weather windows, and back the work with our 2-year warranty.",
  },
];

const faqs = [
  {
    q: "How much does deck staining cost in North Atlanta?",
    a: "Most residential decks in Forsyth, Fulton, and Cobb counties run $1,200-$3,500 for a complete stain or restain. Larger covered porches and decks with extensive railings, balusters, or exposed ceiling trusses run higher — usually $3,500-$6,500. We give every homeowner a free written estimate before any work begins.",
  },
  {
    q: "How long does deck staining last in Georgia's climate?",
    a: "Semi-transparent stains typically last 5-7 years on horizontal surfaces (the deck floor) and 7-10 years on vertical surfaces (railings, posts, ceilings) when properly prepped and applied. Solid stains last longer. Georgia's humidity and UV exposure are demanding, which is why prep matters more than the brand of stain.",
  },
  {
    q: "Should I choose solid stain or semi-transparent?",
    a: "Semi-transparent shows off the natural wood grain and ages gracefully — it's our recommendation for cedar, redwood, and pressure-treated pine in good condition. Solid stain hides imperfections and lasts longer but covers the grain. We'll walk you through the trade-offs based on the age and condition of your wood.",
  },
  {
    q: "Do you stain timber-frame ceilings and exposed trusses?",
    a: "Yes — that's some of our most rewarding work. Premium covered decks and outdoor living spaces with exposed trusses or timber-frame ceilings need careful prep at height and proper product selection so the finish stays uniform on overhead surfaces. We've done these projects throughout North Atlanta.",
  },
  {
    q: "What about pressure washing — can't I just power-wash and re-stain?",
    a: "Pressure washing alone is rarely the answer. Aggressive pressure can damage the wood fibers and create a 'fuzzy' surface that takes stain poorly. We use controlled low-pressure washing combined with proper sanding and brightening — the way to get a finish that actually lasts.",
  },
];

export default function DeckStainingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-brand-black">
        <div className="absolute inset-0">
          <LazyVideo
            src="/videos/projects/deck-timber-frame.mp4"
            poster="/images/projects/deck-timber-frame.jpg"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
              Premium Outdoor Restoration
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Deck Staining &amp; Wood Restoration
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Premium semi-transparent stains that bring out the natural grain of
              your wood and protect it from Georgia humidity, UV, and rain for 5
              to 7 years. We strip, sand, and seal every plank — railings and
              exposed ceiling trusses included.
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

      {/* Why proper prep matters */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Why Proper Deck Prep Beats Premium Stain
              </h2>
              <div className="mt-6 space-y-4 text-brand-text leading-relaxed">
                <p>
                  Most failed deck stains aren&apos;t failures of the stain — they&apos;re
                  failures of the prep. Stain on top of a dirty, fuzzy, or
                  poorly sanded deck will peel within a year no matter what
                  brand it is.
                </p>
                <p>
                  We treat prep as the project. Stripping old finishes, light
                  sanding to open the grain, deep cleaning, wood brightening,
                  and finally applying premium stain in proper weather windows.
                  That&apos;s how you get 5-7 years of beautiful color from a single
                  application.
                </p>
                <p>
                  And for premium covered decks with exposed timber frames or
                  ceiling trusses — we stain those too. Same standards, just
                  more masking and scaffolding.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/projects/deck-timber-frame.jpg"
                alt="Premium covered deck with stained timber-frame ceiling in North Atlanta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Our Deck Staining Process
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stain Types */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Semi-Transparent vs. Solid Stain
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            The right choice depends on the age of your wood, the look you want,
            and how long you want between maintenance cycles.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-brand-black">Semi-Transparent</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand-gold">Lasts 5-7 years</p>
              <p className="mt-4 text-sm text-brand-text-light leading-relaxed">
                Lets the natural wood grain show through. Best for cedar,
                redwood, and well-maintained pressure-treated pine. Ages
                gracefully — touch-ups blend seamlessly. The premium look for
                premium decks.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-brand-black">Solid Stain</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand-gold">Lasts 7-10 years</p>
              <p className="mt-4 text-sm text-brand-text-light leading-relaxed">
                Opaque coverage that hides imperfections and weathered grain.
                Best for older decks with mismatched boards or surfaces you want
                to look uniform. Longer lifespan, but covers the natural wood
                character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-gray-300">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-semibold text-brand-black">{faq.q}</h3>
                <p className="mt-2 text-brand-text-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Exterior Painting", href: "/exterior-painting" },
              { name: "Cabinet Painting", href: "/cabinet-painting" },
              { name: "Interior Painting", href: "/interior-painting" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="rounded-lg border border-gray-200 p-5 transition hover:border-brand-gold hover:shadow-md">
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
