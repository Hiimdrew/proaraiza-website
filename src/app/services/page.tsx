import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";

export const metadata: Metadata = {
  title: "Painting & Remodeling Services | North Atlanta",
  description:
    "Owner-led painting and remodeling across North Atlanta. Interior, exterior, cabinets, deck staining, light remodeling, and commercial. 10 years, 250+ projects, 2-year workmanship warranty.",
};

const services = [
  {
    name: "Interior Painting",
    href: "/interior-painting",
    image: "/images/projects/hallway-wainscoting.jpg",
    bullets: [
      "Walls, ceilings, trim, and accent walls",
      "Bedrooms, living rooms, kitchens, bathrooms",
      "Color consultation included",
      "Clean, fast, minimal disruption",
    ],
  },
  {
    name: "Exterior Painting",
    href: "/exterior-painting",
    image: "/images/projects/exterior-black-garage.jpg",
    bullets: [
      "Hardie board, wood, brick, stucco",
      "Trim, shutters, doors, garage doors",
      "Pressure washing included",
      "Products rated for Georgia humidity",
    ],
  },
  {
    name: "Cabinet Painting & Refinishing",
    href: "/cabinet-painting",
    image: "/images/projects/luxury-kitchen-chandelier.jpg",
    bullets: [
      "Full kitchen cabinet transformations",
      "Two-tone and single-color options",
      "Hardware upgrades available",
      "Save 80% vs. full replacement",
    ],
  },
  {
    name: "Deck Staining",
    href: "/deck-staining",
    image: "/images/projects/deck-timber-frame.jpg",
    bullets: [
      "Premium semi-transparent stains",
      "Strip, sand, brighten, seal",
      "Decks, railings, ceiling trusses",
      "5-7 years of protection",
    ],
  },
  {
    name: "Remodeling & Drywall",
    href: "/remodeling",
    image: "/images/projects/bare-wood-sanded.jpg",
    bullets: [
      "Drywall repair and installation",
      "Trim, molding, and wainscoting",
      "Hardwood floor refinishing",
      "Bathroom and kitchen renovations",
    ],
  },
  {
    name: "Commercial Painting",
    href: "/commercial",
    image: "/images/projects/commercial-hallway.jpg",
    bullets: [
      "Boutique retail, professional offices",
      "Medical suites and hospitality",
      "Night and weekend scheduling",
      "Commercial-grade washable finishes",
    ],
  },
];

const additionalServices = [
  "Pressure washing",
  "Deck staining",
  "Hardwood refinishing",
  "Door and window trim",
  "Carpentry",
  "Flooring installation",
  "Window repair",
  "Popcorn ceiling removal",
];

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every project begins with a free, no-obligation estimate. We will visit your home, discuss your goals, and provide a written quote within 24 hours.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Pro Araiza is fully insured for your protection. We carry general liability insurance and workers compensation coverage.",
  },
  {
    q: "How long does a typical painting project take?",
    a: "Most interior rooms take 1-2 days. A full home interior typically takes 3-5 days. Exterior projects range from 2-5 days depending on the size of the home and prep work needed.",
  },
  {
    q: "Do you do the work yourselves or use subcontractors?",
    a: "All work is completed by our own experienced crew. We never subcontract your project out to unknown workers.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Cumming, Alpharetta, Gainesville, Buford, Roswell, Woodstock, and the surrounding North Metro Atlanta communities.",
  },
];

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
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
              Painting &amp; Remodeling Services for North Atlanta
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              From a single accent wall to a full home transformation — owner-led,
              craftsman-run, and backed by a 2-year workmanship warranty on every
              project.
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

      {/* Service Cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-gray-200 p-6 transition hover:border-brand-gold hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-brand-black group-hover:text-brand-gold">
                  {service.name}
                </h2>
                <ul className="mt-4 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-brand-text">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block text-sm font-medium text-brand-gold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Additional Services
          </h2>
          <p className="mt-4 text-brand-text-light">
            Beyond our core services, we handle a wide range of home improvement projects.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm"
              >
                <svg
                  className="h-4 w-4 flex-shrink-0 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-brand-black">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="dark"
        headline="Not sure which service you need?"
        subtext="Tell us about your project. We&apos;ll help you scope it out, free of charge."
      />

      {/* FAQ */}
      <section className="py-16 lg:py-24">
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

      <CTABanner />
      <div className="h-16 lg:hidden" />
    </>
  );
}
