import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Woodstock, GA",
  description:
    "Expert painting and remodeling in Woodstock, GA. Serving Towne Lake, Eagle Watch, BridgeMill, and all of Cherokee County. Free estimates.",
};

export default function PaintingWoodstockPage() {
  return (
    <CityPageTemplate
      city="Woodstock"
      intro="Woodstock has become one of the most desirable communities in the North Atlanta suburbs, and the homes here reflect that. From the established Towne Lake and Eagle Watch neighborhoods to the newer builds in BridgeMill, Pro Araiza brings professional painting and remodeling to Cherokee County homeowners who expect quality. The outdoor-focused lifestyle here means decks, exterior trim, and front porches get heavy use — we use products that hold up to sun, rain, and Georgia humidity. Inside, Woodstock homes are trending toward warm neutrals and dramatic cabinet transformations. We handle it all."
      neighborhoods={[
        "Towne Lake",
        "Eagle Watch",
        "BridgeMill",
        "Downtown Woodstock",
        "The Woodlands",
        "Olde Rope Mill",
        "Woodstock Knoll",
        "Governor's Preserve",
        "Arnold Mill Road area",
        "Reformation Brewery area",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Woodstock, GA?",
          a: "Woodstock painting costs are competitive with the Cherokee County market. Interior rooms typically run $300-$750 each, full home interiors $3,000-$8,000, and exterior projects $3,500-$11,000 depending on home size and siding type.",
        },
        {
          q: "Who is the best painter in Woodstock, GA?",
          a: "Pro Araiza Remodeling & Painting has served Woodstock and Cherokee County homeowners for 10 years across 250+ projects. We are fully insured, family-owned, and available 7 days a week for painting, remodeling, and cabinet refinishing.",
        },
        {
          q: "Does Pro Araiza serve Woodstock?",
          a: "Yes. Woodstock is one of our primary service areas. We cover Towne Lake, Eagle Watch, BridgeMill, downtown Woodstock, and all surrounding Cherokee County neighborhoods.",
        },
      ]}
    />
  );
}
