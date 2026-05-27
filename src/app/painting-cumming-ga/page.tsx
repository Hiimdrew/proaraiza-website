import type { Metadata } from "next";
import CityPageTemplate from "@/components/CityPageTemplate";

export const metadata: Metadata = {
  title: "Painter in Cumming, GA",
  description:
    "Your local painting and remodeling company in Cumming, GA. Interior, exterior, cabinets, and full remodeling. Serving Forsyth County. Free estimates.",
};

export default function PaintingCummingPage() {
  return (
    <CityPageTemplate
      city="Cumming"
      intro="Pro Araiza Remodeling & Painting is based right here in Cumming, GA — it is our home and our community. For 10 years and 250+ projects, we have been painting and remodeling homes throughout Forsyth County. From the established neighborhoods near Sawnee Mountain to the newer developments along GA-400, we know the homes here inside and out. Craftsman-style builds with Hardie board siding, open-concept interiors with tall ceilings, and white Shaker kitchens ready for a color refresh — these are the projects we handle every week. When you hire Pro Araiza, you are hiring your neighbors."
      neighborhoods={[
        "Polo Club",
        "Windermere",
        "Sawnee Mountain Preserve",
        "The Manor Golf & Country Club",
        "Coal Mountain",
        "Sharon Springs",
        "Vickery Village area",
        "Castleberry Hills",
        "Post Preserve",
        "Downtown Cumming",
      ]}
      faqs={[
        {
          q: "How much does painting cost in Cumming, GA?",
          a: "Interior rooms in Cumming typically cost $300-$800 each depending on size and prep work. Full home interiors range from $3,000-$8,000. Exteriors range from $3,500-$12,000 depending on the size and siding type of your home. We provide free written estimates.",
        },
        {
          q: "Who is the best painter in Cumming, GA?",
          a: "Pro Araiza Remodeling & Painting has served Cumming and Forsyth County homeowners for 10 years across 250+ projects. We are fully insured, locally owned, and available 7 days a week. Our work spans interior painting, exterior painting, cabinet refinishing, and full remodeling.",
        },
        {
          q: "Does Pro Araiza serve all of Forsyth County?",
          a: "Yes. We serve all of Forsyth County including Cumming, Coal Mountain, and the surrounding areas. We also serve Alpharetta, Gainesville, Buford, Roswell, and Woodstock.",
        },
      ]}
    />
  );
}
