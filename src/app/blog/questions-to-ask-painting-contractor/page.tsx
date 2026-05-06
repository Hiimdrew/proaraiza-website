import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "7 Questions to Ask Before Hiring a Painting Contractor",
  description:
    "Hiring a painter? Ask these 7 questions first. How to verify insurance, check references, and avoid common mistakes. From Pro Araiza in Cumming, GA.",
};

const questions = [
  {
    number: 1,
    title: "Are you licensed and insured?",
    body: "This is the single most important question. Ask for proof of general liability insurance and workers compensation. If a painter does not carry insurance and someone gets injured on your property, you could be liable. In Georgia, painting contractors are not required to hold a state license, which makes insurance verification even more critical.",
    tip: "Ask for a certificate of insurance and verify it is current. Any professional contractor will provide this without hesitation.",
  },
  {
    number: 2,
    title: "How long have you been in business?",
    body: "Experience matters in painting. A contractor who has been in business for 5+ years has survived because their work quality and customer service earned repeat business and referrals. Newer contractors can do good work, but longevity is a strong signal of reliability.",
    tip: "Check their online presence — Google Business Profile, Nextdoor, social media. Consistent activity over years is harder to fake than a few recent reviews.",
  },
  {
    number: 3,
    title: "Do you do the work yourselves or use subcontractors?",
    body: "Some painting companies are actually brokers — they take your deposit and hand the job to whoever is available that week. You want to know exactly who will be in your home. The best companies use their own trained crews who work together regularly.",
    tip: "Ask who specifically will be painting your home and whether those same people will be there from start to finish.",
  },
  {
    number: 4,
    title: "What is your preparation process?",
    body: "Preparation is 80% of a great paint job. A quality painter will describe their process in detail: filling holes, sanding, taping, priming, covering furniture and floors. If a contractor cannot clearly describe their prep process, that is a red flag.",
    tip: "Ask specifically about furniture moving, floor protection, and how they handle trim and edge work.",
  },
  {
    number: 5,
    title: "What paint brands and products do you use?",
    body: "Professional painters typically use Sherwin-Williams or Benjamin Moore products. These brands offer better coverage, durability, and color accuracy than big-box store paints. Ask what specific product line they recommend for your project and why.",
    tip: "Be cautious of contractors who want to use the cheapest paint available. The cost difference between a good paint and a great paint is minimal compared to the labor cost — but the longevity difference is years.",
  },
  {
    number: 6,
    title: "Can I see examples of your recent work?",
    body: "Every professional painter should be able to show you photos of recent projects or provide references from recent customers. Look for clean lines, even coverage, and attention to detail areas like trim and edges. Even better — ask if you can drive by a recent exterior job.",
    tip: "Look for photos that show detail work, not just wide-angle room shots. Clean cut lines where walls meet ceilings and trim are the mark of a skilled painter.",
  },
  {
    number: 7,
    title: "What does your estimate include — and what does it not include?",
    body: "A good estimate should be detailed and in writing. It should specify: the areas being painted, number of coats, paint brand and color, prep work included, timeline, payment schedule, and warranty. Ask what would cause the price to change after the job starts.",
    tip: "Watch out for estimates that seem too low. If one bid is 40% below the others, that contractor is cutting corners somewhere — usually on prep work, paint quality, or number of coats.",
  },
];

const faqs = [
  {
    q: "What should I look for when hiring a painting contractor?",
    a: "Look for: proof of insurance (general liability + workers comp), 5+ years in business, their own crews (not subcontractors), a detailed written estimate, examples of recent work, clear communication, and willingness to answer all your questions without pressure.",
  },
  {
    q: "What is the difference between a painting contractor and a handyman?",
    a: "A painting contractor specializes in painting — they have dedicated equipment, trained crews, and deep expertise in surface preparation, product selection, and application techniques. A handyman offers general services and may paint occasionally, but typically lacks the specialized training, equipment, and insurance coverage that a dedicated painting contractor carries.",
  },
  {
    q: "How do I know if a painter did a good job?",
    a: "Signs of quality work: clean, straight cut lines where walls meet ceilings and trim; even coverage with no visible brush or roller marks; smooth caulking at trim joints; no paint drips or splatters; furniture and floors left clean; and a final walkthrough where they point out their work and offer touch-ups.",
  },
];

export default function HiringGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "7 Questions to Ask Before Hiring a Painting Contractor",
    author: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    publisher: { "@type": "Organization", name: "Pro Araiza Remodeling & Painting" },
    datePublished: "2026-02-01",
    dateModified: "2026-02-01",
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
              <time>February 1, 2026</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              7 Questions to Ask Before Hiring a Painting Contractor
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Protect yourself and your home with these essential questions every
              homeowner should ask before signing a contract.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-brand-text leading-relaxed">
            Hiring a painting contractor is one of the most common home improvement
            decisions — and one of the easiest to get wrong. The barrier to entry
            is low, which means there are many operators with limited experience,
            inadequate insurance, or questionable business practices. These seven
            questions help you separate the professionals from the rest.
          </p>

          <div className="mt-12 space-y-12">
            {questions.map((q) => (
              <div key={q.number}>
                <h2 className="text-xl font-bold text-brand-black">
                  {q.number}. {q.title}
                </h2>
                <p className="mt-4 text-brand-text leading-relaxed">{q.body}</p>
                <div className="mt-4 rounded-lg bg-brand-gray p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-brand-gold">Pro tip:</span>{" "}
                    <span className="text-brand-text-light">{q.tip}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-16 rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-brand-black">Related Pages</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-brand-gold hover:text-brand-copper">
                  Our Services →
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-brand-gold hover:text-brand-copper">
                  About Pro Araiza →
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
        headline="Looking for a Painter You Can Trust?"
        subtext="Pro Araiza is fully insured, locally owned, and happy to answer all 7 questions."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
