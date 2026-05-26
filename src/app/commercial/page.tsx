import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Commercial Painting | North Atlanta Offices, Retail & Small Business",
  description:
    "Commercial painting for offices, retail, medical suites, and small businesses across North Atlanta. Night and weekend scheduling. Brand-aligned color, durable commercial-grade finishes. 2-year warranty. Free estimates.",
};

const offerings = [
  {
    title: "Professional Offices",
    description:
      "Corporate suites, law firms, accounting offices, and professional service spaces. We work around your hours so your clients never see a drop cloth.",
  },
  {
    title: "Retail & Boutique",
    description:
      "Storefronts, dressing rooms, restaurants, and boutique spaces where the paint is part of the brand. We help you pick finishes that hold up to high-touch traffic.",
  },
  {
    title: "Medical & Healthcare",
    description:
      "Dental offices, urgent care, chiropractic and wellness suites. Low-VOC products, antimicrobial finishes where required, and respectful of patient privacy.",
  },
  {
    title: "Hospitality & Hotels",
    description:
      "Boutique hotels, event venues, and short-term rentals. Refined finishes, careful scheduling around bookings, and a finish that looks expensive.",
  },
];

const reasons = [
  {
    title: "Schedule around your business, not ours",
    body: "Nights, weekends, off-hours, holidays — we plan around when your business is closed so you never lose a minute of revenue.",
  },
  {
    title: "Brand-aware color and finish",
    body: "We don't just paint walls — we read your space. Color decisions and sheen selection that protect your brand and elevate your customer experience.",
  },
  {
    title: "Commercial-grade products",
    body: "Sherwin-Williams ProMar 200 and equivalent Benjamin Moore commercial lines. Built for high-traffic, repeated cleaning, and demanding environments.",
  },
  {
    title: "Insured, licensed, and bonded",
    body: "We carry the coverage your property manager or landlord needs. Certificates of insurance available on request for any commercial project.",
  },
];

const faqs = [
  {
    q: "Do you offer after-hours and weekend painting for commercial spaces?",
    a: "Yes. Most of our commercial work happens nights and weekends so your business never has to close. We coordinate with your operations manager or property manager to find the right window — and we stick to it.",
  },
  {
    q: "What products do you use for commercial environments?",
    a: "We use commercial-grade Sherwin-Williams ProMar 200 and Benjamin Moore Ultra Spec or higher across most projects. These are built for high-traffic, repeated cleaning, and the kind of wear-and-tear residential paints can't handle. For medical and food-service environments we use low-VOC and antimicrobial-rated products as needed.",
  },
  {
    q: "Do you provide certificates of insurance?",
    a: "Yes. We carry liability and workers' compensation coverage and we'll provide a certificate of insurance to your landlord, property manager, or general contractor for any commercial project.",
  },
  {
    q: "How quickly can you start a commercial project?",
    a: "Most small commercial projects can start within 1-2 weeks of contract. Larger multi-space projects we typically schedule 2-4 weeks out. For emergencies — water damage, pre-listing prep, last-minute brand updates — we make every effort to be there sooner.",
  },
  {
    q: "Can you match our brand colors exactly?",
    a: "Yes. Bring us your brand standards (Pantone, hex codes, or branded materials) and we'll get a precise match using premium paint brands' custom-tinting capabilities. We can also help you translate brand colors into wall, trim, and accent finishes that work in a physical space.",
  },
];

export default function CommercialPage() {
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
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/projects/commercial-hallway.jpg"
            className="h-full w-full object-cover opacity-50"
          >
            <source src="/videos/projects/commercial-hallway.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
              Commercial &amp; Small Business
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Commercial Painting for North Atlanta Businesses
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Boutique retail. Professional offices. Medical suites. Hospitality
              spaces. We paint nights and weekends to keep your doors open, use
              commercial-grade finishes built for the wear, and treat your space
              like the brand it is.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Request a Commercial Quote
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

      {/* What we paint */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Spaces We Paint
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            From single-suite offices to multi-room retail buildouts, our
            commercial portfolio covers most small business environments in
            North Atlanta.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-8">
                <h3 className="text-xl font-bold text-brand-black">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-text-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/projects/commercial-hallway.jpg"
                alt="Premium commercial office hallway with deep navy walls and marble floors painted by Pro Araiza"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Why Local Businesses Hire Us
              </h2>
              <div className="mt-8 space-y-6">
                {reasons.map((r) => (
                  <div key={r.title}>
                    <h3 className="text-lg font-semibold text-brand-black">{r.title}</h3>
                    <p className="mt-2 text-sm text-brand-text-light leading-relaxed">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <CTABanner headline="Plan your commercial project with a free site visit" subtext="We'll walk your space, discuss timing, and give you a clear, written estimate within 48 hours." />
      <div className="h-16 lg:hidden" />
    </>
  );
}
