import type { MetadataRoute } from "next";

const BASE = "https://www.proaraizapainting.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep the form API endpoint out of the index — it's a POST handler, not a page.
      disallow: ["/api/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
