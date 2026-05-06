import Link from "next/link";
import CTABanner from "./CTABanner";

interface CityPageProps {
  city: string;
  intro: string;
  neighborhoods: string[];
  faqs: { q: string; a: string }[];
}

const services = [
  { name: "Interior Painting", href: "/interior-painting", description: "Walls, ceilings, trim, accent walls, and full room repaints." },
  { name: "Exterior Painting", href: "/exterior-painting", description: "Hardie board, wood, brick, stucco, trim, and shutters." },
  { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting", description: "Kitchen cabinet transformations at a fraction of replacement cost." },
  { name: "Remodeling & Drywall", href: "/remodeling", description: "Drywall repair, trim, flooring, carpentry, and renovations." },
];

export default function CityPageTemplate({ city, intro, neighborhoods, faqs }: CityPageProps) {
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
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Painting &amp; Remodeling in {city}, GA
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Trusted by {city} homeowners. Fully insured. Free estimates.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Get a Free Quote
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

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Your Local Painter in {city}, GA
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">{intro}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Services Available in {city}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-gold">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-brand-text-light">{service.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-gold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Neighborhoods We Serve in {city}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full bg-brand-gray px-4 py-2 text-sm font-medium text-brand-black"
              >
                {n}
              </span>
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

      <CTABanner
        headline={`Ready to Transform Your ${city} Home?`}
        subtext="Get a free, no-obligation estimate today."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
