import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Pro Araiza | Family-Owned Painter in Cumming, GA",
  description:
    "Meet the team behind Pro Araiza Remodeling & Painting. Family-owned, 15+ years of experience, fully insured. Proudly serving Cumming and Forsyth County.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every surface gets proper prep, premium paint, and careful attention to detail. No shortcuts.",
  },
  {
    title: "Honest Pricing",
    description:
      "We give you a clear, written estimate upfront. No hidden fees, no surprise add-ons.",
  },
  {
    title: "Reliable Communication",
    description:
      "We show up when we say we will. You will always know the status of your project.",
  },
];

const serviceAreas = [
  "Cumming",
  "Alpharetta",
  "Gainesville",
  "Buford",
  "Roswell",
  "Woodstock",
  "Duluth",
  "Suwanee",
  "Johns Creek",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Pro Araiza Remodeling &amp; Painting
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              A family business built on quality work and honest service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-brand-text leading-relaxed">
                <p>
                  Pro Araiza Remodeling &amp; Painting is a family-owned business
                  proudly serving Cumming, GA and the surrounding North Atlanta
                  communities. With over 15 years of hands-on experience, we have
                  built our reputation one project at a time — through quality
                  craftsmanship, fair pricing, and reliable communication.
                </p>
                <p>
                  What started as a passion for transforming homes has grown into a
                  full-service painting and remodeling company trusted by homeowners
                  across Forsyth County. From interior and exterior painting to
                  cabinet refinishing and complete room renovations, we bring the
                  same level of care to every project — large or small.
                </p>
                <p>
                  We are fully insured and stand behind every job. When you work with
                  Pro Araiza, you get one team that handles everything from start to
                  finish. No subcontractors, no runaround.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
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
            One team for everything — painting, cabinets, and remodeling under one
            roof.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Interior Painting", href: "/interior-painting" },
              { name: "Exterior Painting", href: "/exterior-painting" },
              { name: "Cabinet Painting", href: "/cabinet-painting" },
              { name: "Remodeling & Drywall", href: "/remodeling" },
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

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/10">
                  <svg
                    className="h-7 w-7 text-brand-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            Areas We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-text-light">
            Pro Araiza proudly serves homeowners across Forsyth County and the
            surrounding North Metro Atlanta communities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-black shadow-sm"
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
