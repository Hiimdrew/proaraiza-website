import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Interior Painting | North Atlanta — Cumming, Alpharetta, Marietta, Roswell",
  description:
    "Owner-led interior painting for North Atlanta homes. Whole-home repaints, accent walls, trim, ceilings. Sherwin-Williams & Benjamin Moore. 2-year warranty. Free estimates. Call (843) 415-2437.",
};

const rooms = [
  "Living rooms & family rooms",
  "Bedrooms & nurseries",
  "Kitchens & dining rooms",
  "Bathrooms & laundry rooms",
  "Hallways & stairwells",
  "Ceilings & crown molding",
  "Trim, baseboards & doors",
  "Accent walls & feature walls",
];

const process = [
  {
    step: "1",
    title: "Consultation & Color Selection",
    description:
      "We visit your home, discuss your vision, and help you choose the perfect colors. Free color consultation included.",
  },
  {
    step: "2",
    title: "Surface Preparation",
    description:
      "Proper prep is 80% of a great paint job. We fill holes, sand surfaces, tape edges, and protect your floors and furniture.",
  },
  {
    step: "3",
    title: "Priming & Painting",
    description:
      "We use premium paints from Sherwin-Williams and Benjamin Moore. Two coats minimum on every surface for lasting coverage.",
  },
  {
    step: "4",
    title: "Final Walkthrough",
    description:
      "We walk the project with you room by room. Touch-ups, cleanup, and furniture moved back — we handle it all.",
  },
];

const faqs = [
  {
    q: "How much does interior painting cost in Cumming, GA?",
    a: "Most rooms cost between $300-$800 depending on size, ceiling height, and prep work required. A full home interior typically ranges from $3,000-$8,000. We provide free written estimates for every project.",
  },
  {
    q: "How long does it take to paint a room?",
    a: "A standard bedroom or living room takes 1-2 days including prep work and two coats. Larger rooms, rooms with high ceilings, or rooms needing significant repair work may take longer.",
  },
  {
    q: "What paint finish is best for bathrooms and kitchens?",
    a: "We recommend satin or semi-gloss finishes for bathrooms and kitchens. These finishes resist moisture and are easy to wipe clean. For living areas and bedrooms, eggshell or matte finishes provide a sophisticated look.",
  },
  {
    q: "Do I need to move my furniture before you arrive?",
    a: "No. We move furniture to the center of the room and cover everything with drop cloths. When the job is done, we move everything back. Your only job is to pick the color.",
  },
  {
    q: "How long does it take to paint a 2000 sq ft house interior?",
    a: "A full 2000 sq ft interior typically takes 3-5 days for a professional crew. This includes proper preparation, priming, two coats of paint, and final cleanup.",
  },
];

export default function InteriorPaintingPage() {
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
              Interior Painting for North Atlanta Homes
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Whole-home repaints, accent walls, trim, ceilings, and detailed
              millwork. We protect your floors and furnishings, work clean every
              day, and don&apos;t leave until you walk the project and say it&apos;s
              perfect.
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

      {/* Rooms We Paint */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Rooms We Paint
              </h2>
              <p className="mt-4 text-brand-text-light">
                No room is too big or too small. We paint every surface in your home
                with the same level of care and precision.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {rooms.map((room) => (
                  <li key={room} className="flex items-center gap-2">
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
                    <span className="text-sm text-brand-text">{room}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/projects/hallway-wainscoting.jpg"
                alt="Premium interior hallway with custom wainscoting and crown molding painted by Pro Araiza"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Our Interior Painting Process
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Popular Interior Colors in Forsyth County
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            These are the colors we paint most often in Cumming and the North
            Atlanta suburbs. Warm neutrals and rich accents are leading the way in
            2026.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Accessible Beige", brand: "Sherwin-Williams SW 7036", hex: "#D2C4A8" },
              { name: "Agreeable Gray", brand: "Sherwin-Williams SW 7029", hex: "#CBC5BA" },
              { name: "Alabaster", brand: "Sherwin-Williams SW 7008", hex: "#F0EDE5" },
              { name: "Revere Pewter", brand: "Benjamin Moore HC-172", hex: "#C2B9A7" },
              { name: "Edgecomb Gray", brand: "Benjamin Moore HC-173", hex: "#C8BDA8" },
              { name: "Iron Ore", brand: "Sherwin-Williams SW 7069", hex: "#45433F" },
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

      {/* Related Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Exterior Painting", href: "/exterior-painting" },
              { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting" },
              { name: "Remodeling & Drywall", href: "/remodeling" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-lg border border-gray-200 p-5 transition hover:border-brand-gold hover:shadow-md"
              >
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
