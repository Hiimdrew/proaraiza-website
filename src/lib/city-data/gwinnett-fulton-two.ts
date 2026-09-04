import type { City } from "../cities";

export const gwinnettFultonTwo: City[] = [
  {
    slug: "dacula",
    name: "Dacula",
    county: "Gwinnett County",
    coords: { lat: 33.9887, lng: -83.8985 },
    region: "north-metro",
    driveTime: "About 40 minutes from our Cumming shop",
    title: "Painter in Dacula, GA",
    description:
      "Interior, exterior, and cabinet painting in Dacula, GA. Established subdivisions, larger lots, deck staining. Fully insured, 10 years local. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Dacula, Georgia, roughly 40 minutes from the company's Cumming shop. Dacula work includes exterior repaints on 1990s and 2000s subdivisions, larger-lot properties, deck staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Dacula kept more of its rural character than the rest of central Gwinnett, and that shows up in the work. Lots are bigger, there are more outbuildings and fences, and the subdivisions that did go in during the 1990s and 2000s sit on larger parcels with more mature trees than a comparable Duluth neighborhood. The recurring job here is the second exterior cycle on 1990s homes, where the original wood or hardboard siding has reached the point of needing real carpentry rather than another coat.",
    housingStock: [
      {
        heading: "1990s subdivisions on larger lots",
        body: "These homes are now 30 years old and on their second or third exterior. Many used hardboard siding, which fails at the bottom edges and around fasteners when it has taken water. Replacing the failed boards is part of the job, not an upsell.",
      },
      {
        heading: "2000s fiber cement construction",
        body: "Later Dacula building used fiber cement, which holds up far better. On these the work concentrates on trim, fascia, and split caulk joints rather than the body of the house.",
      },
      {
        heading: "Rural parcels and outbuildings",
        body: "Dacula retains working acreage with barns, sheds, and fencing. That work takes solid-body stain rather than paint, and long fence runs get sprayed.",
      },
    ],
    conditions:
      "Larger lots and mature trees mean a mix of heavy shade and open exposure on the same property. In practice that means the north elevations grow mildew while the south and west chalk from UV, and a proper Dacula exterior often needs both a mildewcide wash on one side and heavier prep on the other.",
    neighborhoods: [
      { name: "Hamilton Mill", note: "Golf community shared with Buford, homes in the repaint cycle." },
      { name: "Apalachee Farms", note: "Established 1990s subdivision on larger lots." },
      { name: "Trophy Club", note: "Golf community with mature canopy." },
      { name: "Downtown Dacula", note: "Older core with a mix of housing ages." },
      { name: "Alcovy corridor", note: "Rural parcels with barns and fencing." },
      { name: "Rabbit Hill", note: "1990s homes with hardboard siding needing carpentry." },
      { name: "Harbins", note: "Larger lots with a mix of older and newer homes." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Standard north-metro range." },
      { service: "Exterior repaint", range: "$3,500 to $11,000", note: "Hardboard siding repair adds to this." },
      { service: "Siding repair and replacement", range: "Quoted per board", note: "Failed hardboard has to be replaced, not coated over." },
      { service: "Deck staining", range: "$800 to $3,000", note: "Larger lots often mean larger decks." },
    ],
    faqs: [
      { q: "My 1990s Dacula home has siding that is crumbling at the bottom edges. What is that?", a: "That is almost certainly hardboard siding that has taken water, usually because the bottom edge was never properly sealed or the grade is too close to it. Hardboard swells and delaminates once moisture gets in, and no amount of paint fixes it. Those boards have to be replaced before painting. We quote the replacement as a separate line so you can see exactly what the carpentry costs versus the coating." },
      { q: "How much does it cost to paint a house in Dacula, GA?", a: "Exteriors run $3,500 to $11,000 and interiors $3,000 to $8,000. On 1990s homes the exterior number often includes siding repair, which we itemize separately. A house needing twenty boards replaced is a different job from one needing none, and we would rather show you that clearly than bury it in a lump sum." },
      { q: "Why does one side of my house look fine and another looks terrible?", a: "Dacula's larger lots create both heavy shade and open exposure on the same property. North elevations stay damp under tree cover and grow mildew. South and west elevations take full UV and chalk. They are two different failures needing two different treatments, and a good estimate reflects that rather than pricing every wall the same." },
      { q: "Do you paint fencing and barns?", a: "Yes. Dacula still has real acreage out toward Alcovy and Harbins. We use solid-body stain on barns and fencing rather than paint, because stain lets the wood move seasonally without the film cracking, and long fence runs get sprayed so the linear footage stays affordable." },
      { q: "How long will an exterior repaint last here?", a: "Eight to twelve years on fiber cement with proper prep. On repaired hardboard, six to ten, provided the bottom edges are sealed and the grade is kept away from the siding. The shaded north side will always show wear first regardless of the material." },
      { q: "Can you provide proof of insurance before work starts?", a: "Yes, general liability, and we send the certificate before starting. For the gated and golf communities here we also arrange contractor registration and gate access ahead of the first day." },
    ],
    nearby: ["lawrenceville", "buford", "braselton", "duluth", "sugar-hill"],
    image: { src: "/images/cities/dacula.jpg", alt: "Two-story home on a large wooded lot in Dacula, Georgia" },
  },
  {
    slug: "sugar-hill",
    name: "Sugar Hill",
    county: "Gwinnett County",
    coords: { lat: 34.1065, lng: -84.0338 },
    region: "north-metro",
    driveTime: "About 25 minutes from our Cumming shop",
    title: "Painter in Sugar Hill, GA",
    description:
      "Interior, exterior, and cabinet painting in Sugar Hill, GA. Established subdivisions, lake-adjacent homes, decks. Fully insured. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Sugar Hill, Georgia from a shop in Cumming, about 25 minutes away. Sugar Hill work includes exterior repaints on established subdivisions, lake-adjacent deck and railing staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Sugar Hill sits between Buford and Suwanee with a slice of Lake Lanier frontage on its northern edge, and it has quietly become one of the more consistent markets we work. The housing is mostly 1990s and 2000s subdivision stock, well maintained, on lots with real tree cover. The revitalized downtown around the Bowl has brought newer construction and townhomes. The recurring jobs are the second exterior cycle on 1990s homes and cabinet refinishing in 2000s kitchens, which is about as predictable as this work gets.",
    housingStock: [
      {
        heading: "1990s and 2000s subdivisions",
        body: "Brick-front or siding bodies with wood and composite trim, now on their second exterior cycle. The trim, fascia, and split caulk joints carry the prep. Bodies are usually sound.",
      },
      {
        heading: "Lake-adjacent properties",
        body: "The northern edge touches Lanier, which brings the usual exterior wood load: decks, railings, and stairs that want stain on a shorter cycle than the house.",
      },
      {
        heading: "Downtown and the Bowl area",
        body: "Newer townhomes and infill construction where the work is interior finish quality rather than weather protection.",
      },
    ],
    conditions:
      "Sugar Hill has heavy mature canopy across most of its subdivisions plus lake humidity on the northern side. The combination makes shaded elevations the primary maintenance concern: mildew establishes fast and gets sealed under a fresh coat if the wash step is skipped.",
    neighborhoods: [
      { name: "Downtown Sugar Hill", note: "Newer townhomes and infill near the Bowl." },
      { name: "Whitfield", note: "Established 1990s subdivision in the repaint cycle." },
      { name: "Riverside", note: "Lake-adjacent homes with decks and railings." },
      { name: "Sycamore", note: "Family subdivisions with mature canopy." },
      { name: "Level Creek", note: "1990s homes with wood trim needing regular attention." },
      { name: "Lanier area", note: "Waterfront-adjacent properties, shorter finish cycles." },
      { name: "Suwanee Dam Road corridor", note: "Mix of established and newer construction." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Consistent housing stock keeps this predictable." },
      { service: "Exterior repaint", range: "$3,500 to $10,500", note: "Trim and fascia carry most of the prep." },
      { service: "Deck and railing staining", range: "$800 to $3,000", note: "Lake-adjacent wood is on a shorter cycle." },
      { service: "Kitchen cabinet refinishing", range: "$2,500 to $6,500", note: "Excellent return on 2000s stained cabinetry." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Sugar Hill, GA?", a: "Exteriors run $3,500 to $10,500 and interiors $3,000 to $8,000. Sugar Hill's housing is consistent enough that our estimates here tend to land in a tighter range than in mixed-age markets like Duluth or Marietta. Most of the exterior cost is trim, fascia, and re-caulking rather than the body of the house." },
      { q: "The shaded side of my house is green. Can you just paint over it?", a: "No, and anyone who says yes is going to cost you a repaint in two years. Mildew has to be washed off with a mildewcide and allowed to dry fully. Painting over live mildew seals it in and it bleeds back through the new coat within about two summers. Sugar Hill's mature canopy makes this the single most common exterior problem we see here." },
      { q: "Should I refinish or replace my kitchen cabinets?", a: "Refinish, if the boxes are solid, which the 2000s stained maple and cherry cabinets in most Sugar Hill homes are. We take the doors off and spray them off-site for a factory-grade finish, then do the boxes in place. It costs a fraction of replacement for the same visual result. Replacement only makes sense if you are changing the layout." },
      { q: "How often should I restain my deck?", a: "Every two to four years, and toward the shorter end if you are on the lake-adjacent side where the wood stays damp longer. Staying on the cycle is much cheaper than letting the finish fail, because a failed stain still recoats with a wash where a failed paint film has to be scraped off entirely." },
      { q: "When should I schedule exterior work?", a: "Late April through October, booking three to four weeks ahead. Fall is our busiest stretch because the weather is ideal, so if you want September or October, ask early rather than in September." },
      { q: "Do you carry liability insurance?", a: "Yes, general liability, with the certificate sent to you or your HOA before we start. Ask any contractor for their certificate before work starts. It is the document that actually protects you." },
    ],
    nearby: ["buford", "suwanee", "flowery-branch", "cumming", "duluth"],
    image: { src: "/images/cities/sugar-hill.jpg", alt: "Brick-front home with painted trim under mature trees in Sugar Hill, Georgia" },
  },
  {
    slug: "peachtree-corners",
    name: "Peachtree Corners",
    county: "Gwinnett County",
    coords: { lat: 33.97, lng: -84.2216 },
    region: "north-metro",
    driveTime: "About 40 minutes from our Cumming shop",
    title: "Painter in Peachtree Corners, GA",
    description:
      "Interior, exterior, and cabinet painting in Peachtree Corners, GA. 1970s and 1980s homes, mid-century ranches, cabinet refinishing. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Peachtree Corners, Georgia, roughly 40 minutes from the company's Cumming shop. Work here focuses on 1970s and 1980s home exteriors, mid-century ranch repaints, interior painting, and kitchen cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Peachtree Corners is older than most of the north metro and it changes what the work looks like. A lot of the housing went up in the 1970s and 1980s around the original Technology Park development, which means cedar siding, wood trim, real masonry, and mid-century ranch and split-level floor plans. These homes have been painted many times. The failures are in the older layers, the wood windows have usually had their glazing go, and the cedar bleeds tannin through anything but a proper blocking primer. It is more careful work than a 2005 subdivision, and it is worth doing properly because the houses themselves are well built.",
    housingStock: [
      {
        heading: "1970s and 1980s cedar and wood",
        body: "Cedar siding, wood trim, and wood windows carrying four or five layers of paint. The bond has failed somewhere in the middle layers, so the prep is scraping to a sound edge and spot-priming with a tannin blocker. Coating over it buys two years.",
      },
      {
        heading: "Mid-century ranches and split-levels",
        body: "Solid, well-built homes with masonry, wood siding, and often original single-pane windows. Painted brick is an increasingly common request here for the same reasons it is in Marietta, and it needs the same masonry-specific process.",
      },
      {
        heading: "Newer infill and townhomes",
        body: "The Town Center development brought newer construction where the work is interior finish quality: sprayed trim, built-ins, and accent walls.",
      },
    ],
    conditions:
      "Peachtree Corners sits near the Chattahoochee with very mature canopy, which makes it one of the damper, shadier markets in Gwinnett. Wood windows and door trim from the 1970s and 1980s are the recurring failure point: the glazing and caulk have gone, water sits in the joint, and any new coat fails at exactly that spot unless the joint is rebuilt first.",
    neighborhoods: [
      { name: "Technology Park area", note: "Original 1970s development, cedar and wood trim." },
      { name: "Peachtree Station", note: "1980s homes now needing restoration-grade prep." },
      { name: "Amberfield", note: "Established subdivision with mature canopy." },
      { name: "River Station", note: "Homes near the Chattahoochee, damp conditions." },
      { name: "Town Center", note: "Newer infill and townhomes, interior finish work." },
      { name: "Neely Farm", note: "1980s and 1990s homes with wood trim detail." },
      { name: "Spalding Corners", note: "Mid-century ranches and split-levels." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,500", note: "Older homes with heavy trim run toward the top." },
      { service: "Exterior, cedar or wood home", range: "$5,500 to $16,000", note: "Restoration prep is most of the cost." },
      { service: "Painting brick", range: "$4,000 to $12,000", note: "Masonry clean, bonding primer, breathable topcoat." },
      { service: "Window and trim repair", range: "Quoted on site", note: "Failed glazing and caulk must be rebuilt before coating." },
    ],
    faqs: [
      { q: "My cedar siding keeps peeling no matter how many times I paint it. Why?", a: "Two likely causes and often both. First, the failing lower layers were never removed, so the new paint is bonded to something that is already letting go. Second, cedar bleeds tannin, and a standard latex primer does not block it, so you also get brown staining coming through. The fix is scraping back to a sound edge and spot-priming bare wood with an oil-based or alkyd stain-blocking primer before any color goes on." },
      { q: "How much does it cost to paint a house in Peachtree Corners, GA?", a: "A cedar or wood-sided home runs $5,500 to $16,000 on the exterior, and most of that is prep rather than paint. Painting brick runs $4,000 to $12,000. Interiors run $3,000 to $8,500. Peachtree Corners costs more than a comparable-size newer home because the housing is 40-plus years old and the surfaces need real restoration." },
      { q: "Can you fix the wood windows before painting?", a: "Yes, and on a 1970s or 1980s Peachtree Corners home you generally have to. The glazing putty and caulk have failed, water sits in the joint, and a new coat applied over that fails in exactly the same place within a season or two. We rebuild the joint, re-glaze where needed, prime the repair, and then paint." },
      { q: "Can I paint the brick on my ranch?", a: "Yes, and it transforms a mid-century ranch. It is also permanent, so decide carefully. Done properly it means a masonry cleaning, a bonding primer made for brick, and a breathable acrylic topcoat so moisture in the wall can still escape. Done with standard exterior latex over unprepared brick, it blisters within about two years and you cannot go back." },
      { q: "Why is mildew worse at my house than my friend's?", a: "Canopy and proximity to the river. Peachtree Corners has very mature trees and sits near the Chattahoochee, so shaded elevations stay damp far longer. Mildew establishes, gets painted over, and bleeds back through. It has to be washed with a mildewcide and fully dried before coating, every time." },
      { q: "What insurance do you carry?", a: "Yes, general liability, certificate sent before we start. On pre-1978 homes, which includes a lot of Peachtree Corners housing, we also handle lead-safe containment properly rather than dry-scraping into the yard." },
    ],
    nearby: ["duluth", "johns-creek", "dunwoody", "sandy-springs", "lawrenceville"],
    image: { src: "/images/cities/peachtree-corners.jpg", alt: "Mid-century ranch home with cedar siding and mature trees in Peachtree Corners, Georgia" },
  },
];
