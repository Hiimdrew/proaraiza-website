import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Duluth, GA",
  description:
    "Professional painting and remodeling in Duluth, GA. Interior, exterior, cabinet painting, and full remodeling. Serving Gwinnett County. Fully insured, free estimates. Call (770) 624-0593.",
};

export default function PaintingDuluthPage() {
  return (
    <CityPageTemplate
      city="Duluth"
      intro="Pro Araiza Remodeling & Painting has been serving Duluth homeowners for over 15 years. Duluth sits right at the heart of Gwinnett County with a mix of well-established neighborhoods and newer townhome communities. Whether you have a 1990s traditional with dated trim colors, a newer build in Sugarloaf that needs a refresh, or an older ranch near downtown Duluth ready for a full exterior repaint, we handle it all. We know the building styles here — from the brick-front colonials along Peachtree Industrial to the Hardie-plank craftsman builds near Parsons Road. Interior repaints, cabinet refinishing, drywall repair, and full room renovations are all part of what we do every week in this area."
      neighborhoods={[
        "Sugarloaf Country Club",
        "St. Ives Country Club",
        "Chattahoochee River Club",
        "Berkeley Lake area",
        "Peachtree Corners (adjacent)",
        "Rogers Bridge area",
        "Downtown Duluth",
        "Abbotts Bridge Road corridor",
        "Parsons at Duluth",
        "River Club at Johns Creek border",
        "Satellite Boulevard area",
        "Pleasant Hill corridor",
      ]}
      faqs={[
        {
          q: "How much does it cost to paint a house in Duluth, GA?",
          a: "Interior rooms in Duluth typically cost $300-$800 each depending on size and prep work. Full home interiors range from $3,000-$8,000. Exterior painting ranges from $3,500-$12,000 depending on your home's size, siding material, and height. We provide free written estimates for every project.",
        },
        {
          q: "Who is the best painter in Duluth, GA?",
          a: "Pro Araiza Remodeling & Painting has been serving Duluth and Gwinnett County homeowners for over 15 years. We are fully insured, locally owned, and available 7 days a week from 7 AM to 7 PM. We handle interior painting, exterior painting, cabinet refinishing, drywall repair, and full remodeling.",
        },
        {
          q: "Do you serve the Sugarloaf and Berkeley Lake areas?",
          a: "Yes. We serve all Duluth neighborhoods including Sugarloaf Country Club, St. Ives, Berkeley Lake, downtown Duluth, and the surrounding Gwinnett County communities. We also serve Cumming, Alpharetta, Buford, Roswell, Gainesville, and Woodstock.",
        },
        {
          q: "Can you paint the exterior of older Duluth homes with brick and wood?",
          a: "Absolutely. Many Duluth homes built in the 1980s and 1990s have a combination of brick, wood trim, and sometimes vinyl. We prep and paint all siding types and can modernize the look of an older home with updated trim colors and a fresh exterior coat. Brick can be painted or limewashed depending on the look you want.",
        },
        {
          q: "Do you offer cabinet painting in Duluth?",
          a: "Yes. Kitchen cabinet refinishing is one of our most popular services in the Duluth area. We spray-finish cabinets for a smooth, factory-quality result at a fraction of the cost of full cabinet replacement. White, gray, navy, and two-tone finishes are all trending in Gwinnett County kitchens right now.",
        },
      ]}
    />
  );
}
