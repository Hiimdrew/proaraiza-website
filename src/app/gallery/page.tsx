"use client";

import { useState } from "react";
import type { Metadata } from "next";

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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            See the quality of our painting and remodeling projects across Forsyth
            County and the North Atlanta suburbs.
          </p>
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

      <div className="h-16 lg:hidden" />
    </>
  );
}
