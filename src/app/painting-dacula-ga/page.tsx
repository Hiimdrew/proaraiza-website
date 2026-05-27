import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Dacula, GA",
  description:
    "Professional painting and remodeling in Dacula, GA. Interior, exterior, cabinet painting, and full remodeling. Serving Gwinnett County. Fully insured, free estimates. Call (843) 415-2437.",
};

export default function PaintingDaculaPage() {
  return (
    <CityPageTemplate
      city="Dacula"
      image={{ src: "/images/downtown-dacula.jpg", alt: "Downtown Dacula, Georgia" }}
      intro="Pro Araiza Remodeling & Painting has been serving Dacula homeowners for 10 years across 250+ projects. Dacula sits in the northeast corner of Gwinnett County where established neighborhoods meet newer construction along Highway 29 and Fence Road. You will find everything here from 1980s split-levels near Dacula City Park to newer two-story traditionals in the Rabbit Hill and Apalachee Farms subdivisions. Many homes along Harbins Road and Old Peachtree have original trim and siding that need updating after decades of Georgia sun and humidity. Whether it is a full exterior repaint on a brick ranch, a kitchen cabinet refinish in a Hamilton Mill townhome, or drywall repair and interior color updates in a Hedgerow home, we handle it. We know Dacula — the mix of rural lots and subdivision living, the HOA communities that require specific color palettes, and the older properties near downtown that need careful prep before a brush ever touches the surface."
      neighborhoods={[
        "Hamilton Mill",
        "Rabbit Hill",
        "Apalachee Farms",
        "Hedgerow",
        "Harbins Road corridor",
        "Old Peachtree area",
        "Dacula City Park area",
        "Fence Road corridor",
        "Alcovy Road area",
        "Winder Highway corridor",
        "Downtown Dacula",
        "Mulberry River Estates",
      ]}
      faqs={[
        {
          q: "How much does it cost to paint a house in Dacula, GA?",
          a: "Interior rooms in Dacula typically cost $300-$800 each depending on size and prep work. Full home interiors range from $3,000-$8,000. Exterior painting ranges from $3,500-$12,000 depending on your home's size, siding material, and height. We provide free written estimates for every project.",
        },
        {
          q: "Who is the best painter in Dacula, GA?",
          a: "Pro Araiza Remodeling & Painting has been serving Dacula and Gwinnett County homeowners for 10 years across 250+ projects. We are fully insured, locally owned, and available 7 days a week from 7 AM to 7 PM. We handle interior painting, exterior painting, cabinet refinishing, drywall repair, and full remodeling.",
        },
        {
          q: "Do you serve the Hamilton Mill area?",
          a: "Yes. We serve all Dacula neighborhoods including Hamilton Mill, Rabbit Hill, Apalachee Farms, Hedgerow, Harbins Road, and the surrounding Gwinnett County communities. We also serve Cumming, Alpharetta, Buford, Duluth, Roswell, Gainesville, and Woodstock.",
        },
        {
          q: "Can you match HOA-approved colors for Dacula subdivisions?",
          a: "Absolutely. Many Dacula subdivisions have HOA color guidelines. We work with your HOA-approved palette and can help you choose from approved options that modernize your home while staying within community standards. We handle all the coordination.",
        },
        {
          q: "Do you offer cabinet painting in Dacula?",
          a: "Yes. Kitchen cabinet refinishing is one of our most popular services in the Dacula area. We spray-finish cabinets for a smooth, factory-quality result at a fraction of the cost of full cabinet replacement. White, gray, navy, and two-tone finishes are all trending in Gwinnett County kitchens right now.",
        },
      ]}
    />
  );
}
