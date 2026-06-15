import type { MetadataRoute } from "next";

const BASE = "https://www.proaraizapainting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage — top priority.
  const home = [
    { url: BASE, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
  ];

  // Service pages — core offering, high priority.
  const services = [
    "/services",
    "/interior-painting",
    "/exterior-painting",
    "/cabinet-painting",
    "/deck-staining",
    "/remodeling",
    "/commercial",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // City pages — the local-SEO engine. High priority, these drive "painter in [city]" traffic.
  const cities = [
    "/painting-cumming-ga",
    "/painting-alpharetta-ga",
    "/painting-marietta-ga",
    "/painting-roswell-ga",
    "/painting-buford-ga",
    "/painting-woodstock-ga",
    "/painting-duluth-ga",
    "/painting-gainesville-ga",
    "/painting-dacula-ga",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Trust + conversion pages.
  const trust = [
    "/about",
    "/guarantees",
    "/gallery",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog — index + posts.
  const blog = [
    "/blog",
    "/blog/best-time-to-paint-exterior-georgia",
    "/blog/exterior-paint-colors-north-atlanta",
    "/blog/questions-to-ask-painting-contractor",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Legal.
  const legal = [
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [...home, ...services, ...cities, ...trust, ...blog, ...legal];
}
