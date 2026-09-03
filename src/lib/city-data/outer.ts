import type { City } from "../cities";

export const outer: City[] = [
  {
    slug: "dawsonville",
    name: "Dawsonville",
    county: "Dawson County",
    region: "north-metro",
    driveTime: "About 25 minutes from our Cumming shop",
    title: "Painter in Dawsonville, GA",
    description:
      "Interior, exterior, and cabinet painting in Dawsonville, GA. Mountain-area homes, cabins, larger lots, deck staining. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Dawsonville, Georgia from a shop in Cumming, about 25 minutes away. Dawsonville work includes exterior repaints and stain work on mountain-area homes and cabins, larger-lot properties, deck staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Dawsonville sits where the metro gives way to the North Georgia mountains, and the housing changes with it. There are standard subdivisions near GA-400 and the outlets, and then there are cabins, timber-frame homes, and houses on wooded acreage as you head north toward Amicalola. That second category is real stain work rather than paint work: cedar, log, and heavy timber that needs a penetrating finish, not a film. It is close enough to our shop that we work here constantly, and it is some of the more interesting work we do.",
    housingStock: [
      {
        heading: "Cabins and timber homes",
        body: "Log, cedar, and heavy timber construction wants a penetrating stain rather than paint. A film-forming paint on log or timber cracks as the wood moves seasonally and then peels, and stripping a failed film off a log home is an expensive, miserable job. Stain moves with the wood and recoats with a wash.",
      },
      {
        heading: "Wooded-acreage homes",
        body: "Larger lots with heavy tree cover mean serious shade, sustained damp on north elevations, and more organic load on the siding than an open subdivision sees. Washing matters more here than almost anywhere.",
      },
      {
        heading: "GA-400 corridor subdivisions",
        body: "Near the highway and the outlets there is standard modern subdivision stock where the work looks like Cumming: fiber cement bodies, composite trim, straightforward repaints.",
      },
    ],
    conditions:
      "Dawsonville sits higher and colder than the rest of the metro, which meaningfully shortens the exterior season. Overnight lows drop below the 50-degree threshold earlier in the fall and later in the spring than they do in Atlanta, so the workable window is narrower and needs to be planned for rather than assumed.",
    neighborhoods: [
      { name: "Amicalola area", note: "Cabins and timber homes, stain rather than paint." },
      { name: "Big Canoe area", note: "Mountain community with cedar and timber construction." },
      { name: "GA-400 corridor", note: "Standard modern subdivisions near the outlets." },
      { name: "Lake Lanier north end", note: "Waterfront-adjacent homes with deck and dock work." },
      { name: "Dawson Forest", note: "Wooded acreage with heavy shade elevations." },
      { name: "Downtown Dawsonville", note: "Older homes near the historic courthouse." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Standard range for subdivision homes." },
      { service: "Exterior repaint", range: "$3,500 to $11,000", note: "Fiber cement subdivision homes." },
      { service: "Cabin or log home staining", range: "$4,000 to $15,000", note: "Penetrating stain, quoted by surface area and access." },
      { service: "Deck staining", range: "$800 to $3,500", note: "Wooded lots often mean larger, multi-level decks." },
    ],
    faqs: [
      { q: "Should I paint or stain my log or cabin exterior?", a: "Stain, and this is not a close call. Log and heavy timber move seasonally with moisture, and a film-forming paint cannot move with them, so it cracks and then peels. Stripping failed paint off a log home is one of the most expensive exterior jobs there is. A penetrating stain soaks into the wood, moves with it, and recoats with a wash and a fresh coat." },
      { q: "How much does it cost to paint a house in Dawsonville, GA?", a: "A subdivision exterior runs $3,500 to $11,000 and interiors $3,000 to $8,000. Cabin and log home staining runs $4,000 to $15,000 depending on surface area and how hard the building is to get around, which on a wooded mountain lot can be the biggest factor of all." },
      { q: "When can you paint outside in Dawsonville?", a: "The window is narrower here than in the rest of the metro. Dawsonville sits higher and colder, so overnight lows fall below the 50-degree threshold earlier in the fall and stay there later in the spring. Realistically that means May through early October, and we watch the forecast closely at both ends rather than pushing into weather the paint cannot cure in." },
      { q: "Why does the shaded side of my house look so much worse?", a: "Heavy tree cover on wooded lots keeps north elevations damp for most of the day, and organic material from the canopy settles on the siding. That combination grows mildew and algae quickly. It has to be washed off properly with a mildewcide before coating, otherwise the new paint seals it in and it comes back through." },
      { q: "Do you work on decks up here?", a: "Constantly. Wooded lots mean big multi-level decks, and they take stain rather than paint for the same reason cabins do. Expect a two to four year recoat cycle on a deck that gets real sun and weather." },
      { q: "Are you insured?", a: "Yes, general liability, with the certificate sent before we start. For gated mountain communities we arrange access and any required contractor registration ahead of the first day." },
    ],
    nearby: ["cumming", "gainesville", "canton", "milton", "flowery-branch"],
    image: { src: "/images/cities/dawsonville.jpg", alt: "Timber and cedar mountain home on a wooded lot near Dawsonville, Georgia" },
  },
  {
    slug: "acworth",
    name: "Acworth",
    county: "Cobb County",
    region: "west-metro",
    driveTime: "About 55 minutes from our Cumming shop",
    title: "Painter in Acworth, GA",
    description:
      "Interior, exterior, and cabinet painting in Acworth, GA. Lake Allatoona homes, 1990s subdivisions, decks and docks. Fully insured. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Acworth, Georgia, roughly 55 minutes from the company's Cumming shop. Acworth work includes lake-adjacent exteriors, 1990s and 2000s subdivision repaints, deck and dock staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Acworth is shaped by Lake Allatoona the way Buford is shaped by Lanier. The lake-adjacent homes carry a heavy load of exterior wood in decks, docks, stairs, and screened porches, and they take reflected sun off the water on top of everything else. Away from the lake it is standard Cobb County subdivision stock from the 1990s and 2000s, which brings the same hardboard siding issues we see in Kennesaw. Downtown Acworth has a small older core with genuinely historic housing.",
    housingStock: [
      {
        heading: "Lake Allatoona homes",
        body: "Reflected UV off the water plus direct sun shortens finish life on exposed elevations. More importantly these homes carry substantial exterior wood: decks, stairs to the water, railings, and docks, all of which want stain on a shorter cycle than the house itself.",
      },
      {
        heading: "1990s hardboard subdivisions",
        body: "The same Cobb County story as Kennesaw. Hardboard siding fails at the bottom edges and around fasteners once water gets past the paint, and failed boards get replaced rather than coated.",
      },
      {
        heading: "Downtown Acworth older homes",
        body: "A small historic core with older wood-sided housing where the prep is restoration rather than a wash and coat.",
      },
    ],
    conditions:
      "Lake Allatoona raises humidity across the area and keeps horizontal wood damp, which is the main constraint on finish life here. On the subdivision side, the recurring cause of siding failure is grade or mulch sitting against the hardboard, keeping the bottom courses permanently wet.",
    neighborhoods: [
      { name: "Lake Allatoona shoreline", note: "Reflected UV, heavy deck and dock work." },
      { name: "Downtown Acworth", note: "Small historic core with older wood housing." },
      { name: "Brookstone", note: "Golf community shared with Kennesaw." },
      { name: "Governors Towne Club", note: "Gated community with larger homes and HOA approvals." },
      { name: "Bentwater", note: "Large subdivision now in the repaint cycle." },
      { name: "Centennial Lakes", note: "1990s and 2000s homes with hardboard siding issues." },
      { name: "Cedarcrest corridor", note: "Newer construction with fiber cement bodies." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Standard Cobb County range." },
      { service: "Exterior repaint", range: "$3,500 to $11,000", note: "Hardboard replacement quoted separately." },
      { service: "Deck and dock staining", range: "$800 to $4,000", note: "Dock access and water level drive the labor." },
      { service: "Siding repair and replacement", range: "Quoted per board", note: "Failed hardboard cannot be painted over." },
    ],
    faqs: [
      { q: "How often should I restain my dock on Lake Allatoona?", a: "Every two to four years. A dock takes direct sun, reflected UV off the water, and constant moisture, which is the harshest combination exterior wood faces anywhere. Staying on the cycle is far cheaper than letting the finish fail, because stain recoats with a wash while a failed finish has to be stripped back first." },
      { q: "How much does it cost to paint a house in Acworth, GA?", a: "Exteriors run $3,500 to $11,000 and interiors $3,000 to $8,000. On 1990s homes the exterior figure often includes hardboard siding replacement, which we quote per board and itemize separately, because a house needing five boards is a completely different job from one needing forty." },
      { q: "My siding is swelling at the bottom edges. What is happening?", a: "That is hardboard siding that has taken water, and it is very common in 1990s Cobb County subdivisions. The usual cause is soil or mulch piled against the siding, or gutters that have been overflowing. Once the board delaminates no coating will save it, so those boards get replaced and the grade gets pulled back so it does not happen again." },
      { q: "Should I paint or stain my deck?", a: "Stain. Paint sits on top of a horizontal board, traps moisture underneath, and peels, leaving you to scrape the whole deck. Stain penetrates, sheds water, and recoats easily. On a lake property where the wood rarely fully dries, that difference is worth a great deal over the life of the deck." },
      { q: "Do you travel to Acworth from Cumming?", a: "Yes. We are about 55 minutes out, and it does not change our pricing. On larger jobs we stage the crew to cut the daily back and forth, which keeps the schedule tight rather than losing hours to the drive each morning." },
      { q: "Are you insured?", a: "Yes, general liability, with the certificate sent to you or your HOA before starting. Governors Towne Club and other gated Acworth communities require contractor registration and gate access arranged in advance, which we handle ahead of time." },
    ],
    nearby: ["kennesaw", "marietta", "woodstock", "canton"],
    image: { src: "/images/cities/acworth.jpg", alt: "Lake Allatoona home with a multi-level wood deck in Acworth, Georgia" },
  },
];
