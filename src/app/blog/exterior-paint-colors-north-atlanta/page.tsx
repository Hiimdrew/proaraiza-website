import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Best Exterior Paint Colors for North Atlanta Homes (2026)",
  description:
    "The exterior paint colors that look best on North Atlanta homes in 2026, from a local painter. Warm whites, greiges, navies, charcoals, and sage greens, plus the exact Sherwin-Williams and Benjamin Moore shades and how Georgia's climate should shape your pick.",
};

const palettes = [
  {
    name: "Warm whites",
    colors: "SW Alabaster, BM White Dove",
    bestFor:
      "Farmhouse and traditional homes, brick trim, and anyone who wants clean without going stark.",
  },
  {
    name: "Greige and warm neutrals",
    colors: "SW Accessible Beige, SW Agreeable Gray, BM Revere Pewter",
    bestFor:
      "The safest broad-appeal choice. Works on stucco, Hardie board, and most brick.",
  },
  {
    name: "Deep navy",
    colors: "SW Naval, BM Hale Navy",
    bestFor:
      "Shutters, front doors, and board-and-batten accents. A full navy body works well on a shaded lot.",
  },
  {
    name: "Soft charcoal and near-black",
    colors: "SW Urbane Bronze, SW Iron Ore",
    bestFor:
      "Modern farmhouse trim, window frames, and doors. The look behind most new builds in the area.",
  },
  {
    name: "Earthy sage and green",
    colors: "SW Privilege Green, SW Rosemary",
    bestFor:
      "Craftsman and cottage styles, especially on wooded lots where green sits naturally against the trees.",
  },
];

const homeTypes = [
  {
    title: "Brick",
    desc: "Painted brick in a warm white or greige is one of the most requested updates we do. If you are keeping the brick, pull your trim and door color from it instead of fighting it. Warm whites and soft blacks sit well against most North Georgia brick.",
  },
  {
    title: "Hardie board and fiber cement",
    desc: "Holds color beautifully and suits almost anything. Greige, navy, and charcoal all wear well on it, which is part of why most newer homes here use it.",
  },
  {
    title: "Stucco",
    desc: "Warm neutrals are the reliable pick. Stucco moves with temperature, so a premium acrylic or elastomeric coating matters as much as the color you choose.",
  },
  {
    title: "Wood and cedar",
    desc: "Earthy greens and warm earth tones look natural against a wooded lot. Wood needs the most upkeep in our climate, so plan on staying ahead of it.",
  },
];

const faqs = [
  {
    q: "What are the most popular exterior paint colors in North Atlanta for 2026?",
    a: "Warm whites (Sherwin-Williams Alabaster, Benjamin Moore White Dove), greiges (Accessible Beige, Agreeable Gray, Revere Pewter), deep navies (Naval, Hale Navy), soft charcoals (Urbane Bronze, Iron Ore), and earthy sage greens (Privilege Green, Rosemary) are the colors we get asked for most across Cumming, Alpharetta, Roswell, and Marietta.",
  },
  {
    q: "Do dark exterior colors fade faster in Georgia?",
    a: "They can. Dark colors like navy and charcoal absorb more heat and UV, which puts more stress on the paint film and can lead to earlier fading, especially on walls that take direct afternoon sun. They still look great and last well when you use a premium UV-resistant exterior paint and keep the darkest colors on shaded walls or accents.",
  },
  {
    q: "What is the best white paint for a house exterior in North Atlanta?",
    a: "A warm white like Sherwin-Williams Alabaster or Benjamin Moore White Dove. Our heavy tree cover throws a lot of cool, filtered light, and a stark cool white can end up looking gray or blue in it. Warm whites keep their warmth and depth in that same light.",
  },
  {
    q: "Do I need HOA approval to repaint my house in Alpharetta or Cumming?",
    a: "In most planned communities, yes. Many North Atlanta HOAs require written approval before you change an exterior color, and the review can take two to four weeks. Check your community's approved palette and submit your color before scheduling the work.",
  },
  {
    q: "What paint brands does Pro Araiza use?",
    a: "We paint with Sherwin-Williams and Benjamin Moore. For North Atlanta exteriors we lean on their premium lines, Sherwin-Williams Duration and Emerald and Benjamin Moore Aura, for better UV resistance, color retention, and mildew protection in our heat and humidity.",
  },
];

export default function ExteriorColorsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Best Exterior Paint Colors for North Atlanta Homes (2026)",
    author: { "@type": "Person", name: "Joaquin Araiza" },
    publisher: {
      "@type": "Organization",
      name: "Pro Araiza Remodeling & Painting",
    },
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    image:
      "https://www.proaraizapainting.com/images/blog/exterior-paint-colors-north-atlanta.jpg",
    mainEntityOfPage:
      "https://www.proaraizapainting.com/blog/exterior-paint-colors-north-atlanta",
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
              <time>May 30, 2026</time>
              <span>·</span>
              <span>By Joaquin Araiza</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Best Exterior Paint Colors for North Atlanta Homes (2026)
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              A local painter's guide to the shades that actually look right on
              Georgia homes, and hold up in our heat, humidity, and tree-shade.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-brand-text leading-relaxed">
            The exterior colors performing best on North Atlanta homes right now
            are warm whites, greiges, deep navies, soft charcoals, and earthy
            sage greens. The pattern behind that list matters more than the list
            itself. Warm, muted tones read better than cool grays under our heavy
            tree cover, and lighter shades take Georgia's heat and UV better over
            the years. Here are the exact colors we reach for, and where each one
            fits.
          </p>

          {/* Palettes */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            The exterior colors winning in North Atlanta right now
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            These are the five palettes we get asked about most, with the
            specific shades that hold up here.
          </p>
          <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand-gray">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-brand-black">
                    Palette
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-brand-black">
                    Go-to colors
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-brand-black">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {palettes.map((p) => (
                  <tr key={p.name}>
                    <td className="px-4 py-3 font-medium text-brand-black">
                      {p.name}
                    </td>
                    <td className="px-4 py-3 text-brand-text">{p.colors}</td>
                    <td className="px-4 py-3 text-brand-text-light">
                      {p.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tree-shade */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            Why warm tones look better in our tree-shaded light
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            North Atlanta is covered in mature hardwoods, and that changes how
            exterior color reads. All those leaves filter sunlight into a cooler,
            greener cast, and a cool gray or a stark white can pick that up and
            look flat or faintly blue, especially on a north-facing wall that
            never gets direct sun. Warm whites and greiges hold their warmth in
            that same light. It is the most common reason a color that looked
            perfect on the chip looks wrong once it is on the house.
          </p>

          {/* Dark colors */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            Dark colors and Georgia heat
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            Dark navies and charcoals are the biggest shift in exterior color
            over the last few years, and they look sharp. There is a tradeoff
            worth knowing before you commit. Dark colors absorb more heat and UV
            than light ones, which stresses the paint film and can lead to fading
            sooner, particularly on walls that take direct afternoon sun.
          </p>
          <p className="mt-4 text-brand-text leading-relaxed">
            None of that means you should skip them. It just means using a
            premium, UV-resistant exterior paint and being smart about placement.
            A dark body color holds up best on a shaded lot, and dark trim,
            doors, and shutters give you the same look with far less sun
            exposure.
          </p>

          {/* By home type */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            Best colors by home type
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            Your siding matters as much as your taste. Here is how we think about
            color for the homes we see most around Forsyth County and the North
            Atlanta suburbs.
          </p>
          <div className="mt-6 space-y-4">
            {homeTypes.map((h) => (
              <div key={h.title} className="rounded-lg bg-brand-gray p-4">
                <h3 className="font-semibold text-brand-black">{h.title}</h3>
                <p className="mt-1 text-sm text-brand-text-light">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* HOA */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            A quick word on HOA approval
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            If you live in a planned community in Alpharetta, Cumming, Roswell, or
            anywhere with an active HOA, check your covenants before you fall in
            love with a color. Many require written approval for an exterior color
            change, and the review can run two to four weeks. Pull your
            community's approved palette, submit your choice, and get the approval
            in writing before you schedule. It is the easiest way to avoid
            painting twice.
          </p>

          {/* Paint we use */}
          <h2 className="mt-12 text-2xl font-bold text-brand-black">
            The paint we actually use
          </h2>
          <p className="mt-4 text-brand-text leading-relaxed">
            We paint North Atlanta homes with Sherwin-Williams and Benjamin
            Moore. For exteriors in our climate we lean on their premium lines,
            Sherwin-Williams Duration and Emerald and Benjamin Moore Aura,
            because they hold color longer and resist the UV, mildew, and
            humidity that wear cheaper paint down fast here. The color gets the
            compliments. The product is what keeps it looking good in year seven.
          </p>

          {/* Internal Links */}
          <div className="mt-12 rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-brand-black">Related Pages</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/exterior-painting"
                  className="text-sm text-brand-gold hover:text-brand-copper"
                >
                  Exterior Painting Services in North Atlanta →
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/best-time-to-paint-exterior-georgia"
                  className="text-sm text-brand-gold hover:text-brand-copper"
                >
                  Best Time to Paint Your Home Exterior in Georgia →
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/questions-to-ask-painting-contractor"
                  className="text-sm text-brand-gold hover:text-brand-copper"
                >
                  7 Questions to Ask Before Hiring a Painting Contractor →
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-brand-gold hover:text-brand-copper"
                >
                  Get a Free Estimate →
                </Link>
              </li>
            </ul>
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
        headline="Still Deciding on a Color?"
        subtext="We help every client choose colors that fit their home and our climate. Book a free estimate."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
