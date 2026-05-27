import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Gainesville, GA",
  description:
    "Expert painting and remodeling in Gainesville, GA. Serving Mundy Mill, Lake Lanier communities, and all of Hall County. Free estimates.",
};

export default function PaintingGainesvillePage() {
  return (
    <CityPageTemplate
      city="Gainesville"
      intro="Gainesville is growing fast, and Pro Araiza is right there with it. From the established Lake Lanier communities to the newer developments in Mundy Mill and south Hall County, we provide painting and remodeling services that match the quality these neighborhoods deserve. Lake homes face unique challenges — humidity, sun exposure, and the wear that comes with waterfront living. We use products specifically rated for these conditions. Whether you need an interior refresh, a full exterior repaint, or kitchen cabinets that look brand new, Pro Araiza is the team Gainesville homeowners call."
      neighborhoods={[
        "Mundy Mill",
        "Walnut Creek",
        "Lake Lanier communities",
        "Flowery Branch (south)",
        "Gainesville Country Club area",
        "Thompson Bridge Road corridor",
        "Downtown Gainesville",
        "Oakwood",
        "Chestnut Mountain",
        "Sardis",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Gainesville, GA?",
          a: "Painting costs in Gainesville are competitive with the greater North Georgia market. Interior rooms typically cost $250-$700 each, full home interiors $3,000-$7,500, and exteriors $3,500-$10,000 depending on size and condition.",
        },
        {
          q: "Who is the best painter in Gainesville, GA?",
          a: "Pro Araiza Remodeling & Painting has been serving Gainesville and Hall County homeowners for 10 years across 250+ projects. We are fully insured, locally operated out of Cumming, and handle everything from single rooms to full home transformations.",
        },
        {
          q: "Does Pro Araiza serve Gainesville and Hall County?",
          a: "Yes. We serve Gainesville, Flowery Branch, Oakwood, and the Lake Lanier communities throughout Hall County. Our team is based in Cumming — about 25 minutes from most Gainesville neighborhoods.",
        },
      ]}
    />
  );
}
