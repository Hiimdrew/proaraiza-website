"use client";

import { useState } from "react";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";

const categories = [
  "All",
  "Interior Painting",
  "Exterior Painting",
  "Cabinets",
  "Remodeling",
  "Trim & Detail",
];

const projects = [
  { title: "Living Room Repaint", category: "Interior Painting", city: "Cumming, GA" },
  { title: "Master Bedroom Accent Wall", category: "Interior Painting", city: "Alpharetta, GA" },
  { title: "Kitchen & Dining Refresh", category: "Interior Painting", city: "Roswell, GA" },
  { title: "Full Exterior Repaint", category: "Exterior Painting", city: "Cumming, GA" },
  { title: "Hardie Board Siding", category: "Exterior Painting", city: "Woodstock, GA" },
  { title: "Brick Home Exterior", category: "Exterior Painting", city: "Buford, GA" },
  { title: "White Dove Kitchen Cabinets", category: "Cabinets", city: "Cumming, GA" },
  { title: "Two-Tone Kitchen Transformation", category: "Cabinets", city: "Alpharetta, GA" },
  { title: "Navy Island + White Uppers", category: "Cabinets", city: "Roswell, GA" },
  { title: "Board-and-Batten Hallway", category: "Remodeling", city: "Cumming, GA" },
  { title: "Bathroom Tile & Vanity", category: "Remodeling", city: "Gainesville, GA" },
  { title: "Basement Finishing", category: "Remodeling", city: "Woodstock, GA" },
  { title: "Crown Molding Install", category: "Trim & Detail", city: "Cumming, GA" },
  { title: "Wainscoting & Chair Rail", category: "Trim & Detail", city: "Alpharetta, GA" },
  { title: "Custom Built-In Shelving", category: "Trim & Detail", city: "Roswell, GA" },
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
                className="overflow-hidden rounded-xl border border-gray-200 transition hover:shadow-md"
              >
                <div className="aspect-[4/3] bg-gray-200" />
                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-brand-black">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-text-light">{project.city}</p>
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
