"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";

const categories = [
  "All",
  "Interior Painting",
  "Exterior Painting",
  "Cabinets",
  "Deck Staining",
  "Trim & Detail",
  "Commercial",
];

const projects = [
  {
    title: "Modern Kitchen & Dining",
    category: "Interior Painting",
    city: "Cumming, GA",
    image: "/images/projects/kitchen-gray-walls.jpg",
    description: "Light neutral gray walls with matte finish — bright, clean, and a fresh dining backdrop.",
  },
  {
    title: "Premium Hallway with Wainscoting",
    category: "Interior Painting",
    city: "Roswell, GA",
    image: "/images/projects/hallway-wainscoting.jpg",
    description: "Custom built-in bench, wainscoting, and crown molding in semi-gloss white with a soft cream upper wall.",
  },
  {
    title: "Luxury Kitchen Cabinet Refinishing",
    category: "Cabinets",
    city: "Alpharetta, GA",
    image: "/images/projects/luxury-kitchen-chandelier.jpg",
    description: "Factory-quality white cabinet refinishing with recessed LED lighting and a custom pendant chandelier.",
  },
  {
    title: "Warm White Cabinets",
    category: "Cabinets",
    city: "Marietta, GA",
    image: "/images/projects/cabinets-warm-white.jpg",
    description: "Smooth professional warm white cabinets with satin sheen against a greige wall and crisp flat-white ceiling.",
  },
  {
    title: "Satin Black Exterior Trim",
    category: "Exterior Painting",
    city: "Cumming, GA",
    image: "/images/projects/exterior-black-garage.jpg",
    description: "Garage doors, decorative arches, gutters, and trim in premium satin black — bold contrast against the brick.",
  },
  {
    title: "Stucco Exterior Repaint",
    category: "Exterior Painting",
    city: "Alpharetta, GA",
    image: "/images/projects/stucco-exterior.jpg",
    description: "Uniform neutral stucco walls with crisp white trim, moldings, and garage doors.",
  },
  {
    title: "Timber-Frame Deck Restoration",
    category: "Deck Staining",
    city: "Marietta, GA",
    image: "/images/projects/deck-timber-frame.jpg",
    description: "Premium semi-transparent stain on the entire deck — flooring, railings, and exposed ceiling trusses.",
  },
  {
    title: "Natural Wood Restoration",
    category: "Trim & Detail",
    city: "Cumming, GA",
    image: "/images/projects/bare-wood-sanded.jpg",
    description: "Flawless sanding down to bare wood, clear water-based sealer, satin/matte sheen. Modern, bright, and built to last.",
  },
  {
    title: "Commercial Office Hallway",
    category: "Commercial",
    city: "North Atlanta, GA",
    image: "/images/projects/commercial-hallway.jpg",
    description: "High-contrast palette of deep navy and crisp off-white for a premium professional office corridor.",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Work
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              250+ painting and remodeling projects across North Atlanta.
              Interiors, exteriors, cabinets, decks, and full renovations —
              every project led personally by Joaquin Araiza.
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

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === cat
                    ? "bg-brand-gold text-brand-black"
                    : "bg-brand-gray text-brand-text-light hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-200 transition hover:shadow-lg hover:border-brand-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-brand-black">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-text-light">{project.city}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-brand-text-light">
              No projects in this category yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <InlineCTA
        variant="dark"
        headline="See a finish you love? Let&apos;s make yours next."
        subtext="Free written estimate within 24 hours. Most projects start within 2 weeks."
      />

      <CTABanner
        headline="Ready to Transform Your Home?"
        subtext="Tell us about your project. We respond within 24 hours, 7 days a week."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
