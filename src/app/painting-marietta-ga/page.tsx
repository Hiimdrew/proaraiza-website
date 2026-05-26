import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Marietta, GA",
  description:
    "Owner-led painting and remodeling in Marietta, GA. Interior, exterior, cabinet refinishing, deck staining. Serving East Cobb, West Cobb, Indian Hills, and Marietta Square. 10 years, 250+ projects, fully insured. Call (843) 415-2437.",
};

export default function PaintingMariettaPage() {
  return (
    <CityPageTemplate
      city="Marietta"
      intro="Marietta is one of Joaquin Araiza's three top service areas, and it shows in our portfolio. From the historic homes off Whitlock Avenue and the streets surrounding Marietta Square to the newer construction throughout East Cobb and West Cobb, Marietta's mix of architectural styles demands a painter who knows the difference between prepping a 1920s brick bungalow and a 2015 Hardie-plank build in Sprayberry. We have painted in nearly every Marietta neighborhood — Indian Hills country club homes, the cul-de-sacs of West Cobb, the Historic District near the Square, the Roswell Road corridor, and the established communities along Powder Springs Road. Whether your project is a full exterior repaint on a brick traditional, a kitchen cabinet refinish in an East Cobb custom, a deck restoration on a Kennesaw Mountain property, or a whole-home interior update before listing, we treat every Marietta job like it is our own home."
      neighborhoods={[
        "Indian Hills Country Club",
        "East Cobb",
        "West Cobb",
        "Marietta Square Historic District",
        "Whitlock Avenue corridor",
        "Kennesaw Mountain area",
        "Roswell Road corridor",
        "Powder Springs Road area",
        "Sandy Plains",
        "Sprayberry",
        "Macland",
        "Smyrna border",
      ]}
      faqs={[
        {
          q: "How much does it cost to paint a house in Marietta, GA?",
          a: "Interior rooms in Marietta typically run $300-$800 each depending on size and prep. Full home interiors range from $3,500-$10,000 for most Cobb County homes. Exterior painting runs $4,000-$15,000 depending on size, siding material (brick, Hardie plank, wood, or stucco), and height. We give every Marietta homeowner a free written estimate before any work begins.",
        },
        {
          q: "Who is the best painter in Marietta, GA?",
          a: "Pro Araiza Remodeling & Painting has finished 250+ projects across North Atlanta since 2016, and Marietta is one of our top three service areas. Joaquin Araiza is on every job personally — no subcontractors, no rotating crews. We are fully insured, offer a 2-year workmanship warranty, and use only Sherwin-Williams and Benjamin Moore premium paints.",
        },
        {
          q: "Do you paint homes in East Cobb and West Cobb?",
          a: "Yes — East Cobb and West Cobb are some of our most-served Marietta areas. From Indian Hills custom homes to the newer subdivisions along Sandy Plains and Sprayberry, we paint everything from full-home repaints to single-room accent work. We also serve the entire Roswell Road corridor and the Whitlock Avenue side of town.",
        },
        {
          q: "Can you handle historic homes near Marietta Square?",
          a: "Absolutely. Historic Marietta homes often have older wood siding, lead-safe prep requirements, and detailed millwork that demand careful surface preparation and premium products. We have painted multiple homes in the Historic District and we use techniques and paint systems chosen specifically for older substrates so the finish lasts as long as the warranty says it will.",
        },
        {
          q: "Do you offer cabinet refinishing in Marietta?",
          a: "Yes. Cabinet refinishing is one of our most-requested services in East Cobb and West Cobb. We remove every door and drawer, sand and prime properly, and spray-finish in our dust-controlled setup for a true factory-quality look. White, off-white, navy, sage, and two-tone finishes are all popular in Marietta kitchens right now.",
        },
      ]}
    />
  );
}
