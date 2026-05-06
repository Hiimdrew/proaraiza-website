import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Exterior Painting Cumming, GA",
  description:
    "Expert exterior painting for Cumming, GA homes. Hardie board, wood, brick — all siding types. Fully insured, free estimates. Call (770) 624-0593.",
};

const sidingTypes = [
  "Hardie board / fiber cement",
  "Wood siding & shakes",
  "Brick (painting & staining)",
  "Stucco & EIFS",
  "Vinyl (specialty coatings)",
  "Trim, fascia & soffits",
  "Shutters & garage doors",
  "Front doors & entry accents",
];

const process = [
  {
    step: "1",
    title: "Inspection & Estimate",
    description:
      "We inspect every surface of your exterior — siding, trim, soffits, and more. You get a detailed written estimate within 24 hours.",
  },
  {
    step: "2",
    title: "Pressure Washing & Prep",
    description:
      "A clean surface is critical. We pressure wash, scrape loose paint, sand rough areas, caulk gaps, and prime bare wood.",
  },
  {
    step: "3",
    title: "Priming & Painting",
    description:
      "We use exterior-grade paints rated for Georgia humidity and UV exposure. Two coats minimum on all surfaces for maximum durability.",
  },
  {
    step: "4",
    title: "Final Inspection & Cleanup",
    description:
      "Walk the entire exterior with us. We check every angle, touch up any imperfections, and leave your landscaping clean.",
  },
];

const faqs = [
  {
    q: "How much does exterior painting cost in Georgia?",
    a: "Most single-story homes in the Cumming area cost between $3,500-$7,000 for a full exterior repaint. Two-story homes typically range from $5,000-$12,000. Price depends on square footage, siding type, condition, and prep work needed.",
  },
  {
    q: "How long does exterior paint last in Georgia humidity?",
    a: "With proper preparation and quality paint, an exterior paint job in Georgia should last 7-10 years. Hardie board holds paint longest. Wood siding in shaded or damp areas may need refreshing sooner.",
  },
  {
    q: "What is the best time of year to paint a house exterior in Georgia?",
    a: "Late spring (April-May) and early fall (September-October) are ideal. Temperatures between 50-85°F with low humidity give paint the best curing conditions. We can work through most of the year, but avoid the peak humidity of July-August when possible.",
  },
  {
    q: "Do you pressure wash before painting?",
    a: "Always. Pressure washing removes dirt, mildew, and loose paint that would prevent new paint from adhering properly. It is included in every exterior painting project at no extra charge.",
  },
  {
    q: "Is it better to spray or roll exterior paint in humid climates?",
    a: "We use a combination of both — spraying for broad surfaces and back-rolling to work paint into the texture of the siding. This gives you the speed of spraying with the adhesion benefits of rolling, which is especially important in Georgia's humid climate.",
  },
];

export default function ExteriorPaintingPage() {
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
              Exterior Painting Services in Cumming, GA
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Protect and beautify your home with a professional exterior paint job
              built to last in Georgia weather.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:7706240593"
                className="rounded-md border border-gray-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                Call (770) 624-0593
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Siding Types We Paint
              </h2>
              <p className="mt-4 text-brand-text-light">
                Whatever your home is made of, we have the products and techniques
                to make it look brand new.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sidingTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-brand-text">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Our Exterior Painting Process
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

      {/* Exterior Colors */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Best Exterior Paint Colors for Georgia Homes
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            North Atlanta homeowners are choosing classic, timeless exteriors that
            blend with the natural landscape and hold up to Southern sun.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Alabaster", brand: "Sherwin-Williams SW 7008", hex: "#F0EDE5" },
              { name: "Agreeable Gray", brand: "Sherwin-Williams SW 7029", hex: "#CBC5BA" },
              { name: "Iron Ore", brand: "Sherwin-Williams SW 7069", hex: "#45433F" },
              { name: "Naval", brand: "Sherwin-Williams SW 6244", hex: "#2E3441" },
              { name: "Evergreen Fog", brand: "Sherwin-Williams SW 9130", hex: "#8E9585" },
              { name: "Hale Navy", brand: "Benjamin Moore HC-154", hex: "#3D4657" },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-4 rounded-lg border border-gray-200 p-4">
                <div
                  className="h-12 w-12 flex-shrink-0 rounded-md border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="font-medium text-brand-black">{color.name}</p>
                  <p className="text-xs text-brand-text-light">{color.brand}</p>
                </div>
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
              { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting" },
              { name: "Remodeling & Drywall", href: "/remodeling" },
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
