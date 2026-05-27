import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Buford, GA",
  description:
    "Professional painting and remodeling in Buford, GA. Serving Hamilton Mill, Sugar Hill, and the Lake Lanier area. Free estimates.",
};

export default function PaintingBufordPage() {
  return (
    <CityPageTemplate
      city="Buford"
      intro="Buford has seen tremendous growth over the past decade, and many of those homes are now ready for their first refresh. Whether it is a Hamilton Mill home that needs an updated exterior color scheme, a newer build near Mall of Georgia that could use cabinet refinishing, or a lakefront property needing weather-resistant exterior work — Pro Araiza handles it all. We understand the mix of styles in this area, from traditional Georgia brick homes to modern farmhouse builds. Buford homeowners trust us for quality work, honest pricing, and reliable scheduling."
      neighborhoods={[
        "Hamilton Mill",
        "Mall of Georgia area",
        "Sugar Hill (adjacent)",
        "Lake Lanier Islands area",
        "Shadburn Ferry",
        "Ivy Creek",
        "Buford Highway corridor",
        "Downtown Buford",
        "Sterling on the Lake",
        "Reunion Country Club",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Buford, GA?",
          a: "Buford painting costs are in line with the greater Gwinnett/Forsyth area. Interior rooms run $300-$750, full home interiors $3,000-$8,000, and exterior projects $3,500-$11,000 depending on home size and siding type.",
        },
        {
          q: "Who is the best painter in Buford, GA?",
          a: "Pro Araiza Remodeling & Painting has 10 years of experience and 250+ completed projects serving Buford and the surrounding communities. We are fully insured, locally owned, and offer free estimates on all painting and remodeling projects.",
        },
        {
          q: "Does Pro Araiza serve Buford?",
          a: "Yes. Buford is one of our regular service areas. We cover Hamilton Mill, the Mall of Georgia area, Sugar Hill, and all surrounding neighborhoods in southern Forsyth and northern Gwinnett counties.",
        },
      ]}
    />
  );
}
