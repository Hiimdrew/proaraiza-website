import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Roswell, GA",
  description:
    "Professional painting and remodeling in Roswell, GA. Serving Historic Roswell, Riverside, and all of North Fulton. Free estimates.",
};

export default function PaintingRoswellPage() {
  return (
    <CityPageTemplate
      city="Roswell"
      intro="Roswell blends historic charm with modern living, and our painting and remodeling services reflect that range. From the century-old homes along Canton Street that need careful prep work and period-appropriate colors to the newer construction in East Roswell that benefits from modern color palettes — we tailor our approach to every home. Roswell homeowners value quality and attention to detail, which is exactly what Pro Araiza has delivered across North Fulton County for 10 years across 250+ projects. Interior updates, dramatic exterior transformations, and kitchen cabinet refinishing are our most requested services in this area."
      neighborhoods={[
        "Historic Roswell",
        "Riverside",
        "Crabapple area",
        "Martin's Landing",
        "Horseshoe Bend",
        "East Roswell",
        "Willeo Road area",
        "Mountain Park",
        "Hembree Road corridor",
        "Chattahoochee River area",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Roswell, GA?",
          a: "Roswell painting costs depend on home size, age, and condition. Interior rooms typically run $300-$800, full home interiors $3,500-$9,000, and exteriors $4,000-$12,000. Older homes in Historic Roswell may require additional prep work.",
        },
        {
          q: "Who is the best painter in Roswell, GA?",
          a: "Pro Araiza Remodeling & Painting serves Roswell homeowners with 10 years and 250+ completed projects. We are fully insured, handle both modern and older homes, and provide free estimates on all projects.",
        },
        {
          q: "Does Pro Araiza serve Roswell?",
          a: "Yes. We serve all of Roswell and North Fulton County, including Historic Roswell, East Roswell, and the Crabapple area. We are based in Cumming — about 20 minutes from most Roswell neighborhoods.",
        },
      ]}
    />
  );
}
