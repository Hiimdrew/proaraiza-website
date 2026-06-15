import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Best Time to Paint Your Home Exterior in Georgia",
  description:
    "When is the best time to paint your home exterior in Georgia? Spring vs fall, humidity tips, and why timing matters. From Pro Araiza in Cumming, GA.",
};

const seasons = [
  {
    name: "Spring (March - May)",
    rating: "Excellent",
    ratingColor: "text-green-600",
    description:
      "Spring is one of the best windows for exterior painting in Georgia. Temperatures are mild (55-80°F), humidity is moderate before summer arrives, and rain frequency is manageable with proper scheduling. Late April and May are particularly good.",
    pros: ["Moderate temperatures", "Lower humidity than summer", "Long daylight hours", "Paint cures evenly"],
    cons: ["Pollen can affect adhesion if not cleaned first", "April showers require flexible scheduling"],
  },
  {
    name: "Summer (June - August)",
    rating: "Fair",
    ratingColor: "text-yellow-600",
    description:
      "Georgia summers are hot and humid — not ideal for exterior painting. High humidity can cause paint to dry too slowly and trap moisture. Extreme heat can cause paint to dry too fast, leading to brush marks and poor adhesion. Early morning work is possible, but midday heat limits productivity.",
    pros: ["Predictable weather patterns", "Longest daylight hours"],
    cons: ["Extreme heat (90°F+) causes fast drying issues", "High humidity slows curing", "Afternoon thunderstorms", "Heat makes ladder work unsafe"],
  },
  {
    name: "Fall (September - November)",
    rating: "Best",
    ratingColor: "text-green-600",
    description:
      "Fall is the gold standard for exterior painting in North Georgia. Temperatures drop into the ideal 50-75°F range, humidity decreases significantly, and rain becomes less frequent. September through mid-November provides the most consistent painting conditions of the year.",
    pros: ["Ideal temperature range", "Low humidity", "Less rain", "Paint cures perfectly", "Most consistent weather"],
    cons: ["High demand — book early", "Daylight hours begin to shorten in November"],
  },
  {
    name: "Winter (December - February)",
    rating: "Limited",
    ratingColor: "text-red-600",
    description:
      "Georgia winters are mild compared to northern states, but temperatures can still drop below the 50°F minimum required for most exterior paints. Some days are warm enough to paint, but short daylight hours and unpredictable cold snaps make scheduling difficult.",
    pros: ["Lowest contractor demand — easier scheduling", "Some warm days (55°F+) are usable"],
    cons: ["Temperatures often below paint minimum", "Short daylight hours", "Morning dew/frost delays start time", "Inconsistent day-to-day conditions"],
  },
];

const faqs = [
  {
    q: "What is the best time to paint a house exterior in Atlanta?",
    a: "The best months for exterior painting in the Atlanta area are September, October, April, and May. These months offer mild temperatures (50-80°F) and lower humidity, which allows paint to cure properly. Fall is generally preferred over spring due to more consistent conditions.",
  },
  {
    q: "Can you paint a house exterior in winter in Georgia?",
    a: "It depends on the day. Georgia winters are mild enough that some days reach the 50-55°F minimum required for exterior paint. However, cold mornings, short days, and unpredictable temperature swings make winter painting inconsistent. Most professionals recommend waiting for spring if possible.",
  },
  {
    q: "What temperature is too hot to paint outside?",
    a: "Most paint manufacturers recommend applying exterior paint when temperatures are between 50-85°F. Above 90°F, paint dries too quickly and can develop brush marks, poor adhesion, and uneven coverage. In Georgia summer, early morning (7-11 AM) may be the only viable window.",
  },
];

export default function BestTimePaintPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Time to Paint Your Home Exterior in Georgia",
    author: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    publisher: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
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
              <time>February 15, 2026</time>
              <span>·</span>
              <span>5 min read</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Best Time to Paint Your Home Exterior in Georgia
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Timing matters. Here is when Georgia weather gives you the best
              results for exterior painting.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-brand-text leading-relaxed">
            Georgia's climate presents unique challenges for exterior painting.
            Summer humidity, spring pollen, and winter cold snaps all affect how
            paint adheres and cures. Choosing the right time of year can mean the
            difference between a paint job that lasts 10 years and one that starts
            peeling in 2.
          </p>
          <p className="mt-4 text-brand-text leading-relaxed">
            The short answer: <strong>fall is the best time</strong> (September
            through mid-November), followed closely by late spring (April-May).
            Here is the full breakdown by season.
          </p>

          {/* Seasons */}
          <div className="mt-12 space-y-10">
            {seasons.map((season) => (
              <div key={season.name} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-brand-black">{season.name}</h2>
                  <span className={`text-sm font-semibold ${season.ratingColor}`}>
                    {season.rating}
                  </span>
                </div>
                <p className="mt-4 text-brand-text leading-relaxed">{season.description}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-600">Pros</p>
                    <ul className="mt-2 space-y-1">
                      {season.pros.map((pro) => (
                        <li key={pro} className="flex items-center gap-2 text-sm text-brand-text-light">
                          <span className="text-green-500">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Cons</p>
                    <ul className="mt-2 space-y-1">
                      {season.cons.map((con) => (
                        <li key={con} className="flex items-center gap-2 text-sm text-brand-text-light">
                          <span className="text-red-500">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 rounded-lg bg-brand-gray p-6">
            <h2 className="text-lg font-bold text-brand-black">Key Takeaways</h2>
            <ul className="mt-4 space-y-2">
              {[
                "Fall (September-November) offers the most consistent conditions",
                "Late spring (April-May) is the second-best window",
                "Avoid mid-summer heat and humidity when possible",
                "Temperature should be 50-85°F during application and for 24 hours after",
                "Book fall appointments early — it is peak season for good reason",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-brand-text">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal Links */}
          <div className="mt-12 rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-brand-black">Related Pages</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/exterior-painting" className="text-sm text-brand-gold hover:text-brand-copper">
                  Exterior Painting Services in Cumming, GA →
                </Link>
              </li>
              <li>
                <Link href="/blog/exterior-paint-colors-north-atlanta" className="text-sm text-brand-gold hover:text-brand-copper">
                  Best Exterior Paint Colors for North Atlanta Homes →
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-brand-gold hover:text-brand-copper">
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
        headline="Ready to Schedule Your Exterior Painting?"
        subtext="Book now for the best fall availability."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
