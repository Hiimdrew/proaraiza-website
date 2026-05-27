import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Alpharetta, GA",
  description:
    "Professional painting and remodeling in Alpharetta, GA. Serving Windward, Avalon, Crabapple and all of North Fulton. Free estimates.",
};

export default function PaintingAlpharettaPage() {
  return (
    <CityPageTemplate
      city="Alpharetta"
      intro="Alpharetta homeowners expect precision and quality — and that is exactly what Pro Araiza delivers. From the executive homes in Windward to the charming renovations near downtown Crabapple, we bring the same attention to detail to every project. Alpharetta's mix of newer construction and established neighborhoods means we handle everything from fresh builder-grade upgrades to full exterior repaints on mature homes. Whether you are refreshing your kitchen cabinets before selling or giving your exterior a modern update, we are the team North Fulton County trusts."
      neighborhoods={[
        "Windward",
        "Avalon area",
        "Crabapple",
        "Downtown Alpharetta",
        "Cogburn Road corridor",
        "Ocee",
        "Webb Bridge",
        "Milton (North Alpharetta)",
        "Alpharetta Country Club",
        "The Park at Windward",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Alpharetta, GA?",
          a: "Painting costs in Alpharetta are similar to the greater North Atlanta area. Interior rooms run $300-$800 each, full home interiors $3,500-$9,000, and exteriors $4,000-$12,000 depending on home size and siding type.",
        },
        {
          q: "Who is the best painter in Alpharetta, GA?",
          a: "Pro Araiza Remodeling & Painting serves Alpharetta and the surrounding North Fulton communities. With 10 years and 250+ completed projects, full insurance coverage, and a focus on quality craftsmanship, we are the painting and remodeling team Alpharetta homeowners rely on.",
        },
        {
          q: "Does Pro Araiza serve Alpharetta?",
          a: "Yes. Alpharetta is one of our primary service areas. We serve all of North Fulton County including Windward, Crabapple, downtown Alpharetta, Milton, and the surrounding neighborhoods.",
        },
      ]}
    />
  );
}
