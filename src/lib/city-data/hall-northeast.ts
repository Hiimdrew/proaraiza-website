import type { City } from "../cities";

export const hallNortheast: City[] = [
  {
    slug: "gainesville",
    name: "Gainesville",
    county: "Hall County",
    coords: { lat: 34.2979, lng: -83.8241 },
    region: "north-metro",
    driveTime: "About 30 minutes from our Cumming shop",
    title: "Painter in Gainesville, GA",
    description:
      "Interior, exterior, and cabinet painting in Gainesville, GA. Lake Lanier homes, historic districts, decks and docks. Fully insured. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Gainesville, Georgia from a shop in Cumming, about 30 minutes away. Gainesville work includes lakefront home exteriors, historic-district restoration, deck and dock staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Gainesville is two markets that barely overlap. There is the lake, where homes take reflected sun and constant moisture and carry an enormous amount of exterior wood in decks, docks, and screened porches. Then there are the historic districts around Green Street and downtown, where the housing is genuinely old, the trim is milled to profiles you cannot buy, and the prep is restoration work. We do a lot of deck and dock staining here and a steady amount of careful older-home exterior work, and those two jobs have almost nothing in common except the truck they arrive in.",
    housingStock: [
      {
        heading: "Lake Lanier waterfront",
        body: "Reflected UV off the water plus direct sun ages the exposed elevations faster than an inland home. The bigger issue is the volume of exterior wood: decks, stairs down to the water, railings, and docks, all horizontal or near-horizontal surfaces that need stain on a two to four year cycle.",
      },
      {
        heading: "Green Street and historic districts",
        body: "Gainesville has significant historic housing with original wood siding, milled trim, and layered paint. Pre-1978 homes may carry lead. Restoration prep, profile matching, and careful stabilization rather than wholesale stripping.",
      },
      {
        heading: "Established subdivisions and newer builds",
        body: "Away from the lake and the historic core, Hall County has standard subdivision stock from the 1990s onward plus ongoing new construction, which is normal repaint and finish work.",
      },
    ],
    conditions:
      "Lake Lanier raises the ambient humidity across the whole area, and that shortens finish life on anything horizontal. Gainesville also sits far enough north that the exterior season closes earlier in the fall than it does in the southern metro. Between the two, the practical advice is to book lake exterior work early in the season rather than gambling on October.",
    neighborhoods: [
      { name: "Green Street historic district", note: "Significant older homes, restoration-grade exterior work." },
      { name: "Lake Lanier waterfront", note: "Reflected UV, heavy deck and dock work." },
      { name: "Chattahoochee Country Club", note: "Established homes with mature canopy." },
      { name: "Downtown Gainesville", note: "Older housing near the square with original wood." },
      { name: "Chicopee Village", note: "Historic mill village housing." },
      { name: "Oakwood area", note: "Newer subdivisions and ongoing construction." },
      { name: "Flat Creek", note: "Family subdivisions in the repaint window." },
      { name: "Lanier Islands area", note: "Lake-adjacent homes with extensive exterior wood." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,500", note: "Historic homes with heavy trim run higher." },
      { service: "Exterior repaint", range: "$3,500 to $12,000", note: "Lakefront elevations may need shorter recoat cycles." },
      { service: "Exterior, historic home", range: "$8,000 to $22,000", note: "Restoration prep and profile matching." },
      { service: "Deck and dock staining", range: "$800 to $4,000", note: "Dock access and water level drive the labor." },
    ],
    faqs: [
      { q: "How often should I restain my dock on Lake Lanier?", a: "Every two to four years depending on exposure. A dock takes direct sun, reflected UV off the water, and constant moisture, which is the harshest combination any exterior wood faces. Staying on a regular stain cycle is far cheaper than letting it go gray and having to strip and rebuild the finish, and stain recoats with a wash rather than a scrape." },
      { q: "How much does it cost to paint a house in Gainesville, GA?", a: "Exteriors run $3,500 to $12,000 for a standard home, and $8,000 to $22,000 for a historic one where the prep is restoration work. Interiors run $3,000 to $8,500. Lake homes usually carry separate deck and dock line items, which we quote individually so you can decide what to do this season." },
      { q: "Do you work on historic homes on Green Street?", a: "Yes. That work is restoration: scraping back to sound paint, feathering the transitions, spot-priming bare wood, and matching milled trim profiles when a piece has to be replaced. Homes built before 1978 may have lead in the lower layers, which changes containment and disposal requirements, and we handle that properly rather than dry-scraping into the yard." },
      { q: "When should I schedule exterior work in Gainesville?", a: "Earlier than you think. Gainesville sits far enough north that the exterior season closes sooner in the fall than it does south of Atlanta, and the humidity off the lake slows drying in midsummer. Late spring and early fall are the sweet spots, and lake work in particular should be booked early rather than gambling on late October weather." },
      { q: "Should I paint or stain my deck?", a: "Stain, without hesitation on a lake property. Paint sits on top of the board, traps moisture on a horizontal surface, and peels, leaving you to scrape the entire deck. Stain penetrates, sheds water, and recoats easily. Near Lanier, where the wood never really dries out, that difference is the whole ballgame." },
      { q: "Are you insured for lakefront and dock work?", a: "Yes, we carry general liability and send the certificate before starting. For dock work we also confirm community and Corps of Engineers access requirements ahead of the first day rather than discovering them on site." },
    ],
    nearby: ["flowery-branch", "buford", "braselton", "cumming", "dawsonville"],
    image: { src: "/images/cities/gainesville.jpg", alt: "Lakefront home with a wood dock and deck on Lake Lanier near Gainesville, Georgia" },
  },
  {
    slug: "flowery-branch",
    name: "Flowery Branch",
    county: "Hall County",
    coords: { lat: 34.1848, lng: -83.9254 },
    region: "north-metro",
    driveTime: "About 30 minutes from our Cumming shop",
    title: "Painter in Flowery Branch, GA",
    description:
      "Interior, exterior, and deck work in Flowery Branch, GA. Lake-adjacent homes, newer subdivisions, cabinet refinishing. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Flowery Branch, Georgia from a shop in Cumming, about 30 minutes away. Work here includes exterior repaints on newer subdivisions, lake-adjacent deck and railing staining, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Flowery Branch has grown quickly along the southern end of Lake Lanier, and most of the housing is newer than what we see in Gainesville proper. That means fewer restoration jobs and more of two things: first repaints on 2000s and 2010s subdivisions where the builder paint has finally given out, and steady deck and railing work on the lake-adjacent side. It is a straightforward market to work in, which is worth saying plainly. The homes are consistent, the materials are modern, and the jobs run on schedule more reliably here than in the older parts of the metro.",
    housingStock: [
      {
        heading: "2000s and 2010s subdivisions",
        body: "Fiber cement and vinyl bodies with composite or wood trim. These homes are hitting their first real repaint now. The body is usually fine and the work concentrates on trim, fascia, soffit, and the caulk joints that have split.",
      },
      {
        heading: "Lake-adjacent homes and decks",
        body: "The southern Lanier shoreline brings the same exterior wood load as Gainesville and Buford: decks, railings, stairs, and screened porches that want stain rather than paint and want it on a shorter cycle than the house.",
      },
      {
        heading: "Newer construction",
        body: "Ongoing building means a steady stream of builder-grade interior paint that homeowners want upgraded to a proper two-coat washable finish within the first few years.",
      },
    ],
    conditions:
      "Southern Lake Lanier humidity is the dominant factor. It slows drying in midsummer, keeps horizontal wood damp, and encourages mildew on shaded elevations. The practical rules are the same as elsewhere on the lake: wash before coating, add a mildewcide on shade sides, and stain rather than paint anything horizontal.",
    neighborhoods: [
      { name: "Sterling on the Lake", note: "Large newer community, first repaint cycle now." },
      { name: "Lake Lanier shoreline", note: "Deck, railing, and dock work on a short recoat cycle." },
      { name: "Royal Lakes", note: "Golf community with established homes." },
      { name: "Reunion Country Club", note: "Newer construction with cabinet-grade interior millwork." },
      { name: "Downtown Flowery Branch", note: "Older core with a mix of housing ages." },
      { name: "Cinnamon Cove", note: "Lake-adjacent homes with extensive exterior wood." },
      { name: "Village at Deaton Creek", note: "Active-adult community, consistent housing stock." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Consistent newer housing keeps this predictable." },
      { service: "Exterior repaint", range: "$3,500 to $10,000", note: "Modern materials mean less prep than older markets." },
      { service: "Deck and railing staining", range: "$800 to $3,500", note: "Lake-adjacent wood is on a two to four year cycle." },
      { service: "Kitchen cabinet refinishing", range: "$2,500 to $6,500", note: "Strong return on 2000s stained cabinetry." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Flowery Branch, GA?", a: "Exteriors run $3,500 to $10,000 and interiors $3,000 to $8,000. Flowery Branch sits at the lower end of the metro range because the housing is newer and built from modern materials that need less prep than the older stock in Roswell or Marietta." },
      { q: "My house is about 15 years old. Is it time to repaint?", a: "Probably yes on the trim, and possibly not yet on the body. Fiber cement and vinyl bodies hold paint for a long time, but the caulk at the trim joints splits around year 12 to 15 and the fascia behind the gutters is usually where water has been getting in. We often quote a trim-and-fascia job rather than a full repaint, which costs considerably less and addresses the part that is actually failing." },
      { q: "Should I stain or paint my deck?", a: "Stain. On the lake side of Flowery Branch the wood never fully dries out, and paint on a horizontal board traps that moisture and peels. Stain penetrates and sheds water, and recoating is a wash and a fresh coat rather than scraping the whole deck back." },
      { q: "Can you upgrade the builder paint in my new home?", a: "Yes, and it is common here. Builders apply one thin coat that covers for the walkthrough but scuffs immediately and burnishes when you try to clean it. A proper two-coat application in a washable product costs less than most people expect because the drywall is already smooth and needs almost no prep." },
      { q: "How far in advance should I book exterior work?", a: "Three to four weeks in the April to October season, and earlier if you want a specific window. Lake-adjacent work should be booked earlier rather than later, because the humidity in midsummer slows drying and the season closes sooner this far north." },
      { q: "Do you send an insurance certificate before starting?", a: "Yes, general liability, and the certificate goes to you or your HOA before we start. Sterling on the Lake and several other Flowery Branch communities require contractor registration, which we take care of ahead of the first day." },
    ],
    nearby: ["gainesville", "buford", "braselton", "sugar-hill", "cumming"],
    image: { src: "/images/cities/flowery-branch.jpg", alt: "Newer subdivision home with fiber cement siding near Lake Lanier in Flowery Branch, Georgia" },
  },
  {
    slug: "braselton",
    name: "Braselton",
    county: "Jackson, Hall, Barrow, and Gwinnett Counties",
    counties: ["Jackson County", "Hall County", "Barrow County", "Gwinnett County"],
    coords: { lat: 34.109, lng: -83.7638 },
    region: "north-metro",
    driveTime: "About 40 minutes from our Cumming shop",
    title: "Painter in Braselton, GA",
    description:
      "Interior, exterior, and cabinet painting in Braselton, GA. Chateau Elan area homes, newer subdivisions, larger lots. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Braselton, Georgia, roughly 40 minutes from the company's Cumming shop. Braselton work includes exterior repaints on newer subdivisions, larger-property exteriors around Chateau Elan, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Braselton is unusual because it sits across four counties and the housing varies with which side of town you are on. The Chateau Elan area brings larger homes on bigger lots with mixed-material elevations, closer in character to Milton than to a standard Gwinnett subdivision. Elsewhere it is newer subdivision stock from the 2000s and 2010s that is only now reaching its first repaint. There is also more genuinely rural property here than most people expect, with outbuildings and fencing that need stain rather than paint.",
    housingStock: [
      {
        heading: "Chateau Elan area estates",
        body: "Larger homes on bigger lots with stucco, stone, and cedar in the same elevation. These are multi-week exteriors that need lift access and different products for each material, and the HOA and architectural review requirements are strict.",
      },
      {
        heading: "2000s and 2010s subdivisions",
        body: "Standard modern construction with fiber cement bodies and composite trim, reaching the first real repaint now. The trim joints and fascia carry the prep.",
      },
      {
        heading: "Rural properties and outbuildings",
        body: "Braselton still has working acreage. Barns, sheds, and fencing here take solid-body stain rather than paint so the wood can move without the film cracking.",
      },
    ],
    conditions:
      "Braselton sits northeast of the metro where overnight temperatures run cooler than Atlanta proper, which shortens the exterior season at both ends. The larger lots mean more sun exposure on average than the canopy-heavy older suburbs, so south and west elevations chalk faster here than they do in Roswell or Duluth.",
    neighborhoods: [
      { name: "Chateau Elan", note: "Estate homes, mixed materials, strict architectural review." },
      { name: "Reunion", note: "Golf community with larger homes and HOA approvals." },
      { name: "Cresswind", note: "Active-adult community, consistent housing stock." },
      { name: "Mulberry Park", note: "Newer subdivisions in the first repaint window." },
      { name: "Braselton Village", note: "Town center area with a mix of housing ages." },
      { name: "Hoschton area", note: "Rural properties with barns and fencing." },
      { name: "Legends of Braselton", note: "2000s construction with original builder cabinetry." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,200 to $10,000", note: "Chateau Elan area homes run considerably larger." },
      { service: "Exterior, subdivision home", range: "$3,500 to $11,000", note: "Modern materials, standard prep." },
      { service: "Exterior, estate home", range: "$8,000 to $25,000", note: "Mixed materials and lift access drive the number." },
      { service: "Barns and fencing", range: "Quoted on site", note: "Solid-body stain, sprayed for pace on long runs." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Braselton, GA?", a: "A subdivision exterior runs $3,500 to $11,000. An estate home in the Chateau Elan area runs $8,000 to $25,000 because the elevations mix stucco, stone, and cedar, each needing a different product, and because the height requires lift access rather than ladders. Interiors run $3,200 to $10,000." },
      { q: "Do you work with the Chateau Elan architectural review board?", a: "Yes. Chateau Elan and Reunion both require color approval before any exterior work starts. We prepare sample boards, submit for review, and schedule the crew around the approval timeline so you are not paying for downtime while a board meets." },
      { q: "Why do my south and west walls fade faster than the rest?", a: "Braselton's larger lots mean less tree canopy than the older, shadier suburbs, so the sun-facing elevations take a much heavier UV load. It is normal for the south and west faces to chalk years before the north side shows anything. On some homes it makes sense to recoat just those elevations rather than the whole house, and we will tell you when that is the right call." },
      { q: "Do you paint barns and fencing?", a: "Yes. Braselton still has real acreage out toward Hoschton. We use solid-body stain rather than paint on barns and fencing because stain lets the wood move seasonally without cracking, and long fence runs get sprayed rather than brushed so the linear footage stays affordable." },
      { q: "When is the best time for exterior work here?", a: "Late April through October. Braselton runs cooler overnight than Atlanta proper, so the season closes earlier in the fall. We watch the forecast for the first sustained sub-50 nights, because paint applied below that does not form a proper film no matter what the daytime high was." },
      { q: "Can I see your insurance certificate?", a: "Yes, general liability, with the certificate sent to you or your HOA before we start. Gated communities here also require contractor registration and gate access arranged in advance, which we handle ahead of time." },
    ],
    nearby: ["flowery-branch", "gainesville", "buford", "dacula", "sugar-hill"],
    image: { src: "/images/cities/braselton.jpg", alt: "Large home with stucco and stone elevation on a wide lot in Braselton, Georgia" },
  },
];
