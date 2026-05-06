import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Painting & Remodeling Tips | Blog",
  description:
    "Expert painting and remodeling tips for Georgia homeowners. Cost guides, contractor advice, and seasonal painting insights from Pro Araiza in Cumming, GA.",
};

const posts = [
  {
    title: "How Much Does It Cost to Paint a House in Georgia?",
    excerpt:
      "A room-by-room breakdown of what Georgia homeowners actually pay for professional painting in 2026. Interior and exterior costs, factors that affect price, and when it makes sense to hire a pro.",
    href: "/blog/cost-to-paint-house-georgia",
    date: "2026-01-15",
    readTime: "8 min read",
  },
  {
    title: "7 Questions to Ask Before Hiring a Painting Contractor",
    excerpt:
      "Protect yourself and your home with these essential questions every homeowner should ask before signing a contract. How to verify insurance, check references, and spot red flags.",
    href: "/blog/questions-to-ask-painting-contractor",
    date: "2026-02-01",
    readTime: "6 min read",
  },
  {
    title: "Best Time to Paint Your Home Exterior in Georgia",
    excerpt:
      "Spring, summer, or fall? Here is when Georgia weather gives you the best results for exterior painting. Temperature, humidity, and seasonal considerations for North Atlanta homeowners.",
    href: "/blog/best-time-to-paint-exterior-georgia",
    date: "2026-02-15",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Painting &amp; Remodeling Tips
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Expert advice for Georgia homeowners from the Pro Araiza team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group overflow-hidden rounded-xl border border-gray-200 transition hover:border-brand-gold hover:shadow-lg"
              >
                <div className="aspect-[16/9] bg-gray-200" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-text-light">
                    <time>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-brand-black group-hover:text-brand-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text-light">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-brand-gold">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  );
}
