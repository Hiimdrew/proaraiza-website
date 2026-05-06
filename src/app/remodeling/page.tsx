import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Remodeling & Drywall Services Cumming, GA",
  description:
    "Drywall repair, trim installation, hardwood refinishing, carpentry, and full remodeling in Cumming, GA. One team for every project. Free estimates.",
};

const serviceCategories = [
  {
    title: "Drywall Repair & Installation",
    items: [
      "Hole and crack repair",
      "Water damage restoration",
      "Texture matching (knockdown, orange peel, smooth)",
      "New drywall installation",
      "Popcorn ceiling removal",
    ],
  },
  {
    title: "Trim, Molding & Wainscoting",
    items: [
      "Crown molding installation",
      "Baseboard replacement",
      "Wainscoting and board-and-batten",
      "Door and window casings",
      "Chair rail installation",
    ],
  },
  {
    title: "Hardwood Floor Refinishing",
    items: [
      "Sanding and staining",
      "Polyurethane coating",
      "Scratch and gouge repair",
      "Color changes",
      "LVP and tile installation",
    ],
  },
  {
    title: "Carpentry & Custom Work",
    items: [
      "Custom built-in shelving",
      "Closet systems",
      "Deck building and repair",
      "Door and window installation",
      "Structural repairs",
    ],
  },
  {
    title: "Bathroom & Kitchen Remodeling",
    items: [
      "Full bathroom renovations",
      "Kitchen updates and layouts",
      "Tile installation (floor, shower, backsplash)",
      "Vanity and countertop replacement",
      "Fixture upgrades",
    ],
  },
];

const faqs = [
  {
    q: "How much does drywall repair cost?",
    a: "Small patches (nail holes, minor cracks) typically cost $100-$300. Larger repairs like water damage or hole patching range from $300-$800 depending on size and texture matching required.",
  },
  {
    q: "Do you handle permits for remodeling work?",
    a: "Yes. For projects that require permits (bathroom/kitchen remodels, structural changes), we handle the permitting process and schedule all required inspections.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "A basic bathroom update (new vanity, fixtures, paint) takes 3-5 days. A full gut remodel with new tile, plumbing, and layout changes typically takes 2-4 weeks.",
  },
  {
    q: "Can you match existing trim and molding?",
    a: "Yes. We carry profiles that match most standard trim styles found in Forsyth County homes. For older or custom profiles, we can mill matching pieces or source exact replacements.",
  },
];

export default function RemodelingPage() {
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
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Remodeling &amp; Drywall Services in Cumming, GA
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Drywall repair, trim work, flooring, carpentry, and full room
              renovations. One team for everything your home needs.
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

      {/* Service Categories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`grid gap-12 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
                    {category.title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg className="h-4 w-4 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-brand-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] rounded-xl bg-brand-gray ${idx % 2 === 1 ? "lg:order-1" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-gray-200">
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
              { name: "Interior Painting", href: "/interior-painting" },
              { name: "Exterior Painting", href: "/exterior-painting" },
              { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting" },
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
