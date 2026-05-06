import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Transform Your Home?",
  subtext = "Get a free, no-obligation estimate today.",
}: CTABannerProps) {
  return (
    <section className="bg-brand-black py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {headline}
        </h2>
        <p className="mt-3 text-gray-400">{subtext}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:7706240593"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Or call (770) 624-0593
          </a>
        </div>
      </div>
    </section>
  );
}
