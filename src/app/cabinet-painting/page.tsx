import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cabinet Painting Cumming, GA | Kitchen Cabinet Refinishing",
  description:
    "Professional kitchen cabinet painting and refinishing in Cumming, GA. Two-tone, color transformations, hardware upgrades. Save 80% vs replacement. Free estimates.",
};

const process = [
  {
    step: "1",
    title: "Consultation & Color Selection",
    description:
      "We visit your kitchen, assess your cabinets, and discuss color options. We bring color samples so you can see exactly how the finished product will look.",
  },
  {
    step: "2",
    title: "Remove Doors & Hardware",
    description:
      "All doors, drawers, and hardware are carefully labeled and removed. This allows us to paint every surface evenly without drips or brush marks.",
  },
  {
    step: "3",
    title: "Clean, Sand & Prime",
    description:
      "We degrease, sand, and prime all surfaces. This step ensures the paint bonds properly and gives you a factory-smooth finish that lasts for years.",
  },
  {
    step: "4",
    title: "Paint & Reinstall",
    description:
      "Multiple coats of premium cabinet-grade paint are applied and cured. Then we reinstall everything, including new hardware if requested.",
  },
];

const faqs = [
  {
    q: "How much does it cost to paint kitchen cabinets in Georgia?",
    a: "Kitchen cabinet painting in the Cumming area typically costs $3,000-$7,000 depending on the number of cabinets, condition, and whether you choose one color or two-tone. This is 10-20% of the cost of full cabinet replacement.",
  },
  {
    q: "How long does cabinet painting take?",
    a: "Most kitchen cabinet projects take 5-7 days. This includes removal, prep, painting (with proper drying time between coats), and reinstallation. We work to minimize disruption to your kitchen.",
  },
  {
    q: "Is it worth painting cabinets instead of replacing them?",
    a: "If your cabinet boxes are structurally sound, painting is almost always the better value. You save 80% or more compared to replacement, avoid weeks of construction, and get a modern look that lasts 8-10 years with proper care.",
  },
  {
    q: "What paint is best for kitchen cabinets?",
    a: "We use premium cabinet-grade paints (Benjamin Moore Advance or Sherwin-Williams Emerald Urethane) that provide a hard, durable finish resistant to moisture, grease, and daily wear. These are purpose-built for cabinetry.",
  },
];

export default function CabinetPaintingPage() {
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
              Cabinet Painting &amp; Refinishing in Cumming, GA
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Give your kitchen a fresh, modern look at a fraction of the cost of
              new cabinets. Two-tone, single color, hardware upgrades — we do it
              all.
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

      {/* Why Paint vs Replace */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Why Paint Your Cabinets Instead of Replacing Them
              </h2>
              <div className="mt-6 space-y-4 text-brand-text leading-relaxed">
                <p>
                  New kitchen cabinets can cost $15,000-$40,000 and take weeks to
                  install. Cabinet painting delivers a dramatic transformation at
                  10-20% of that cost — usually in under a week.
                </p>
                <p>
                  If your cabinet boxes are solid and the layout works for you,
                  painting is the smart move. You get a factory-smooth finish in any
                  color you want, without the dust, noise, and disruption of a full
                  tear-out.
                </p>
              </div>
              <div className="mt-8 rounded-lg bg-brand-gray p-6">
                <h3 className="font-semibold text-brand-black">Cost Comparison</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text">Cabinet painting</span>
                    <span className="font-medium text-brand-black">$3,000 - $7,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text">Cabinet refacing</span>
                    <span className="font-medium text-brand-black">$8,000 - $15,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-text">Full replacement</span>
                    <span className="font-medium text-brand-black">$15,000 - $40,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Our Cabinet Painting Process
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

      {/* Trending Colors */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Trending Cabinet Colors for 2026
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            Two-tone kitchens are dominating North Atlanta — lighter uppers with a
            darker or contrasting island. Here are the most requested colors.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "White Dove", brand: "Benjamin Moore OC-17", hex: "#F3EDE3", note: "Most popular upper cabinet color" },
              { name: "Evergreen Fog", brand: "Sherwin-Williams SW 9130", hex: "#8E9585", note: "Trending green for islands" },
              { name: "Naval", brand: "Sherwin-Williams SW 6244", hex: "#2E3441", note: "Bold navy for statement islands" },
              { name: "Iron Ore", brand: "Sherwin-Williams SW 7069", hex: "#45433F", note: "Dramatic dark charcoal" },
              { name: "Alabaster", brand: "Sherwin-Williams SW 7008", hex: "#F0EDE5", note: "Clean warm white" },
              { name: "Hale Navy", brand: "Benjamin Moore HC-154", hex: "#3D4657", note: "Classic navy blue" },
            ].map((color) => (
              <div key={color.name} className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-4">
                  <div
                    className="h-12 w-12 flex-shrink-0 rounded-md border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-medium text-brand-black">{color.name}</p>
                    <p className="text-xs text-brand-text-light">{color.brand}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-brand-text-light">{color.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Tone Section */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-sm" />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Two-Tone Kitchen Cabinets
              </h2>
              <div className="mt-6 space-y-4 text-brand-text leading-relaxed">
                <p>
                  The biggest trend in North Atlanta kitchens right now: lighter
                  upper cabinets paired with a darker or contrasting island. It
                  adds depth, visual interest, and a designer look to any kitchen.
                </p>
                <p>
                  Popular combinations we paint most often:
                </p>
                <ul className="space-y-2">
                  {[
                    "White Dove uppers + Naval island",
                    "Alabaster uppers + Evergreen Fog island",
                    "White uppers + Iron Ore island",
                    "Agreeable Gray uppers + Hale Navy island",
                  ].map((combo) => (
                    <li key={combo} className="flex items-center gap-2">
                      <svg className="h-4 w-4 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{combo}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Related */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Related Services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Interior Painting", href: "/interior-painting" },
              { name: "Exterior Painting", href: "/exterior-painting" },
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
