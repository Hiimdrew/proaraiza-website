import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Paint a House in Georgia? (2026 Guide)",
  description:
    "What Georgia homeowners actually pay for interior and exterior painting in 2026. Room-by-room pricing, cost factors, and when to hire a pro.",
};

const interiorCosts = [
  { room: "Bedroom (standard)", range: "$300 - $600" },
  { room: "Living room / family room", range: "$400 - $800" },
  { room: "Kitchen", range: "$400 - $700" },
  { room: "Bathroom", range: "$250 - $500" },
  { room: "Hallway / stairwell", range: "$300 - $600" },
  { room: "Ceiling (per room)", range: "$150 - $350" },
  { room: "Full home interior (2000 sq ft)", range: "$3,000 - $8,000" },
];

const exteriorCosts = [
  { type: "Small ranch (under 1500 sq ft)", range: "$2,500 - $4,500" },
  { type: "Medium home (1500-2500 sq ft)", range: "$3,500 - $7,000" },
  { type: "Large home (2500-4000 sq ft)", range: "$5,000 - $10,000" },
  { type: "Two-story / 4000+ sq ft", range: "$7,000 - $14,000" },
  { type: "Trim only", range: "$1,500 - $3,500" },
  { type: "Front door", range: "$150 - $400" },
];

const faqs = [
  {
    q: "How much does it cost to paint a room in Georgia?",
    a: "Most rooms in Georgia cost between $300-$800 for professional painting. This includes prep work, two coats of paint, and cleanup. Larger rooms with high ceilings or extensive trim will be at the higher end.",
  },
  {
    q: "Is it cheaper to paint yourself or hire a professional?",
    a: "DIY painting saves on labor costs but takes significantly longer, requires purchasing equipment, and risks a lower quality finish. Professional painters in Georgia charge $1.50-$3.50 per square foot. For most homeowners, the time savings and quality difference make professional painting the better value.",
  },
  {
    q: "What factors affect painting cost the most?",
    a: "The biggest cost factors are: square footage, ceiling height, condition of surfaces (repair work needed), number of colors, quality of paint selected, and accessibility (multi-story exteriors, vaulted ceilings).",
  },
  {
    q: "How often should you repaint your home interior?",
    a: "Most interior rooms should be repainted every 5-7 years. High-traffic areas like hallways and kitchens may need refreshing sooner. Bedrooms and formal living rooms can often go 7-10 years between repaints.",
  },
];

export default function CostGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does It Cost to Paint a House in Georgia?",
    author: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    publisher: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article>
        {/* Hero */}
        <header className="bg-brand-black py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <time>January 15, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How Much Does It Cost to Paint a House in Georgia?
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              A room-by-room breakdown of what Georgia homeowners actually pay for
              professional painting in 2026.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-brand-text leading-relaxed">
              Whether you are refreshing a single room or repainting your entire
              home, understanding what painting actually costs in Georgia helps you
              budget accurately and avoid surprises. Prices vary based on square
              footage, ceiling height, surface condition, and paint quality — but
              here are the ranges we see most often across Forsyth County and the
              North Atlanta suburbs.
            </p>

            {/* Interior Costs */}
            <h2 className="mt-12 text-2xl font-bold text-brand-black">
              Interior Painting Costs in Georgia
            </h2>
            <p className="mt-4 text-brand-text leading-relaxed">
              Interior painting costs in the Cumming and North Atlanta area
              typically run $1.50-$3.50 per square foot of wall space, or $300-$800
              per room for standard-sized rooms with 8-9 foot ceilings.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-brand-gray">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black">Room / Project</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black">Typical Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {interiorCosts.map((item) => (
                    <tr key={item.room}>
                      <td className="px-4 py-3 text-brand-text">{item.room}</td>
                      <td className="px-4 py-3 font-medium text-brand-black">{item.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exterior Costs */}
            <h2 className="mt-12 text-2xl font-bold text-brand-black">
              Exterior Painting Costs in Georgia
            </h2>
            <p className="mt-4 text-brand-text leading-relaxed">
              Exterior painting costs depend heavily on home size, number of
              stories, siding material, and how much prep work is needed. Georgia
              homes face additional challenges from humidity and sun exposure that
              can affect surface condition.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-brand-gray">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black">Home Size</th>
                    <th className="px-4 py-3 text-left font-semibold text-brand-black">Typical Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {exteriorCosts.map((item) => (
                    <tr key={item.type}>
                      <td className="px-4 py-3 text-brand-text">{item.type}</td>
                      <td className="px-4 py-3 font-medium text-brand-black">{item.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Factors */}
            <h2 className="mt-12 text-2xl font-bold text-brand-black">
              Factors That Affect Your Painting Cost
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { title: "Square footage and ceiling height", desc: "More wall space means more paint and more labor. Rooms with 10+ foot ceilings cost 20-30% more than standard height." },
                { title: "Surface condition", desc: "Walls with holes, cracks, or peeling paint require repair work before painting. Significant drywall repair can add $200-$500 per room." },
                { title: "Number of colors", desc: "Each additional color adds taping, cutting in, and cleanup time. Accent walls, two-tone rooms, and contrasting trim all affect price." },
                { title: "Paint quality", desc: "Builder-grade paint costs less upfront but fades faster and requires more coats. Premium paints (Sherwin-Williams Emerald, Benjamin Moore Regal) cost more per gallon but last longer and cover better." },
                { title: "Accessibility", desc: "Vaulted ceilings, multi-story exteriors, and hard-to-reach areas require scaffolding or specialized equipment that adds to the project cost." },
              ].map((factor) => (
                <div key={factor.title} className="rounded-lg bg-brand-gray p-4">
                  <h3 className="font-semibold text-brand-black">{factor.title}</h3>
                  <p className="mt-1 text-sm text-brand-text-light">{factor.desc}</p>
                </div>
              ))}
            </div>

            {/* When to hire a pro */}
            <h2 className="mt-12 text-2xl font-bold text-brand-black">
              When to Hire a Professional Painter
            </h2>
            <p className="mt-4 text-brand-text leading-relaxed">
              DIY painting can work for small, simple projects — a single accent
              wall or a small bathroom. But for larger projects, hiring a
              professional painter saves time, delivers better results, and often
              costs less than you would expect once you factor in equipment,
              materials, and the value of your weekend.
            </p>
            <p className="mt-4 text-brand-text leading-relaxed">
              Consider hiring a pro when: the project involves multiple rooms, you
              have high ceilings or difficult access, surfaces need repair work,
              you want a flawless finish on trim or cabinets, or the project is
              exterior work that requires ladders and pressure washing.
            </p>

            {/* Internal Links */}
            <div className="mt-12 rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-brand-black">Related Pages</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/interior-painting" className="text-sm text-brand-gold hover:text-brand-copper">
                    Interior Painting Services in Cumming, GA →
                  </Link>
                </li>
                <li>
                  <Link href="/exterior-painting" className="text-sm text-brand-gold hover:text-brand-copper">
                    Exterior Painting Services in Cumming, GA →
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-brand-gold hover:text-brand-copper">
                    Get a Free Estimate →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-brand-black">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-5">
                  <h3 className="font-semibold text-brand-black">{faq.q}</h3>
                  <p className="mt-2 text-sm text-brand-text-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner
        headline="Want an Exact Quote for Your Home?"
        subtext="We provide free, no-obligation estimates with transparent pricing."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
