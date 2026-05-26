import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Joaquin Araiza | Owner & Craftsman of Pro Araiza",
  description:
    "Meet Joaquin Araiza — the owner and craftsman behind Pro Araiza Remodeling & Painting. 10 years, 250+ projects, North Atlanta homes. Punctual, clean, and proud of every brushstroke.",
};

const quickFacts = [
  { label: "Born", value: "Mexico" },
  { label: "Years in the Trade", value: "10+" },
  { label: "Pro Araiza Founded", value: "2016" },
  { label: "Homes Completed", value: "250+" },
  { label: "Top Service Areas", value: "Alpharetta · Marietta · Roswell" },
  { label: "Insurance", value: "Fully Covered" },
  { label: "Workmanship Warranty", value: "2 Years" },
  { label: "Preferred Brands", value: "Sherwin-Williams · Benjamin Moore" },
];

const valuesInAction = [
  {
    title: "Punctual",
    body: "We start when we say we'll start and we finish when we say we'll finish. If something on our end ever changes, you hear it from Joaquin first, not at the door.",
  },
  {
    title: "Clean",
    body: "Drop cloths on every floor. Plastic on every cabinet. Daily site cleanup. Final walkthrough before final payment. The home you let us into is the home we leave you with.",
  },
  {
    title: "Honest",
    body: "Written estimates with line items. 30-50% deposit to secure the job, balance only when you're 100% satisfied. No surprise charges at the end. Ever.",
  },
];

const serviceAreas = [
  "Cumming",
  "Alpharetta",
  "Marietta",
  "Roswell",
  "Buford",
  "Woodstock",
  "Duluth",
  "Gainesville",
  "Dacula",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <span className="inline-block self-start rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
              Meet the Owner
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              I&apos;m Joaquin Araiza.
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              And I&apos;m the one painting your home. Not a subcontractor, not a
              rotating crew &mdash; me, every project, every day. Ten years of craft,
              250+ homes across North Atlanta, and one promise: I treat every
              project like it&apos;s my own home.
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
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/joaquin-on-stilts.jpg"
              alt="Joaquin Araiza, owner of Pro Araiza Remodeling & Painting, on stilts in a customer's kitchen"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            How Pro Araiza Started
          </h2>
          <div className="mt-8 space-y-6 text-lg text-brand-text leading-relaxed">
            <p>
              I came to North Atlanta from Mexico, and I started painting at 22.
              What pulled me in was simple: I wanted to do something I could be
              proud of every day, and painting was the kind of work where you
              can see the result the moment you step back from the wall.
            </p>
            <p>
              I started as an assistant on someone else&apos;s crew. Within a few
              years, I knew enough about the trade to realize what was missing
              from it. Clients kept telling me the same things &mdash; painters who
              didn&apos;t show up on time, didn&apos;t clean up, didn&apos;t communicate,
              didn&apos;t stand behind their work. They were desperate for somebody
              honest.
            </p>
            <p>
              So in 2016, I founded Pro Araiza. The mission was straightforward:
              be the painter that homeowners actually want to recommend.
            </p>
            <p>
              Ten years later, we&apos;ve finished more than 250 homes across
              Cumming, Alpharetta, Marietta, Roswell, Buford, and the surrounding
              cities. We&apos;ve sprayed countless kitchen cabinets, painted brick
              and Hardie-plank exteriors, restored decks, and updated whole-home
              interiors. And every single one of those projects, I treated like
              it was my own home.
            </p>
            <p>
              That&apos;s not a marketing line. That&apos;s what I tell my crew every
              morning, and it&apos;s the standard we hold ourselves to. We protect
              your floors before we open a paint can. We mask your countertops
              and your hardware. We work clean. We finish what we start. And we
              don&apos;t ask for the final payment until you walk through with us
              and tell us you&apos;re 100% satisfied.
            </p>
            <p>
              Painting is no longer just a trade to me. It&apos;s my passion. And
              it&apos;s how I take care of my family. Thank you for considering us
              for your home.
            </p>
            <p className="font-semibold text-brand-black">— Joaquin</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-brand-gray py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Quick Facts
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {fact.label}
                </p>
                <p className="mt-2 text-lg font-bold text-brand-black">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              The Three Things
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
              Punctual. Clean. Honest.
            </h2>
            <p className="mt-6 text-lg text-brand-text leading-relaxed">
              Every homeowner asks the same three questions before hiring any
              contractor. Will they show up? Will the work be clean? Will I get
              charged fairly? Here is how we answer each one.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {valuesInAction.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-2xl font-bold text-brand-black">{value.title}</h3>
                <p className="mt-4 text-brand-text-light leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl text-brand-text-light">
            One craftsman team for everything from interior repaints to deck
            restoration. Light remodeling and drywall too.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Interior Painting", href: "/interior-painting" },
              { name: "Exterior Painting", href: "/exterior-painting" },
              { name: "Cabinet Refinishing", href: "/cabinet-painting" },
              { name: "Deck Staining", href: "/deck-staining" },
              { name: "Remodeling & Drywall", href: "/remodeling" },
              { name: "Commercial", href: "/commercial" },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-brand-gold"
              >
                <h3 className="text-lg font-semibold text-brand-black">
                  {service.name}
                </h3>
                <span className="mt-2 inline-block text-sm font-medium text-brand-gold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Where We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-text-light">
            We serve North Atlanta from Cumming to Marietta. For larger
            projects, we travel anywhere in Georgia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-brand-gray px-4 py-2 text-sm font-medium text-brand-black shadow-sm"
              >
                {area}, GA
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="h-16 lg:hidden" />
    </>
  );
}
