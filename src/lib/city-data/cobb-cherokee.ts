import type { City } from "../cities";

export const cobbCherokee: City[] = [
  {
    slug: "marietta",
    name: "Marietta",
    county: "Cobb County",
    region: "west-metro",
    driveTime: "About 45 minutes from our Cumming shop",
    title: "Painter in Marietta, GA | Pro Araiza",
    description:
      "Interior and exterior painting in Marietta, GA. Historic square homes, 1970s ranches, brick-and-siding subdivisions, cabinet refinishing. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Marietta, Georgia, roughly 45 minutes from the company's Cumming shop. Marietta work spans historic homes near the square, 1960s and 1970s ranch repaints, subdivision exteriors, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Marietta has the deepest housing history of anywhere we work. Around the square there are antebellum and Victorian homes with original wood siding and profile trim that cannot be bought off a shelf. Move out a few miles and you are in 1960s and 1970s brick ranches, then 1980s and 1990s subdivisions, then newer infill. Each era has its own failure mode, and pricing Marietta work means knowing which one you are standing in front of. The ranches in particular are an underrated project: painted brick has become the most requested exterior change we get in Cobb County.",
    housingStock: [
      {
        heading: "Historic homes near the square",
        body: "Antebellum and Victorian stock with original wood siding, milled trim profiles, and layered paint going back a century. Anything pre-1978 may carry lead in the lower layers. The work is restoration: scrape to a sound edge, stabilize, spot-prime, and match profiles where a piece has to be replaced.",
      },
      {
        heading: "1960s and 1970s brick ranches",
        body: "Cobb County is full of solid brick ranches. The most common request now is painting the brick, which permanently changes the wall and has to be done correctly: a proper masonry cleaning, a bonding primer made for brick, and a breathable acrylic so trapped moisture can still escape. Done wrong it blisters within two years and cannot be undone.",
      },
      {
        heading: "1980s to 2000s subdivisions",
        body: "Standard metro repaint work. Brick or siding bodies with wood or composite trim, where the caulk joints and the fascia carry the prep time.",
      },
    ],
    conditions:
      "Marietta sits slightly lower and warmer than the Forsyth side, and the older neighborhoods have very mature canopy. On historic homes the recurring issue is water sitting in failed trim joints and window glazing. On painted brick, the recurring issue is moisture that cannot escape because someone used a non-breathable coating.",
    neighborhoods: [
      { name: "Marietta Square", note: "Historic homes with original siding and milled trim." },
      { name: "Whitlock Avenue", note: "Historic corridor, restoration-grade exterior work." },
      { name: "East Cobb", note: "1980s and 1990s subdivisions in the repaint window." },
      { name: "Kennesaw Mountain area", note: "Mature canopy, heavy shade on north elevations." },
      { name: "Indian Hills", note: "Established golf community with 1970s and 1980s homes." },
      { name: "Sprayberry", note: "Brick ranches, many now candidates for painted brick." },
      { name: "Sope Creek", note: "Wooded lots with recurring shade-side mildew." },
      { name: "Chestnut Hill", note: "Traditional subdivisions with wood trim detail." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,500", note: "Historic homes with heavy trim run toward the top." },
      { service: "Exterior, subdivision home", range: "$3,500 to $11,000", note: "Standard prep and coating." },
      { service: "Exterior, historic home", range: "$8,000 to $25,000", note: "Restoration prep and lead-safe handling where it applies." },
      { service: "Painting brick", range: "$4,000 to $12,000", note: "Masonry clean, bonding primer, breathable acrylic. Permanent." },
    ],
    faqs: [
      { q: "Can you paint the brick on my Marietta ranch?", a: "Yes, and it is our most requested exterior change in Cobb County. It has to be done correctly because it is permanent: the brick gets a proper masonry cleaning, then a bonding primer made for masonry, then a breathable acrylic that lets trapped moisture escape. A standard exterior latex over unprepared brick blisters within about two years, and once brick is painted you cannot go back." },
      { q: "How much does it cost to paint a house in Marietta, GA?", a: "A subdivision exterior runs $3,500 to $11,000. A historic home near the square runs $8,000 to $25,000 because the prep is restoration work. Painting brick runs $4,000 to $12,000. Interiors run $3,000 to $8,500. The spread is wide here because Marietta's housing spans a century." },
      { q: "Do you work on historic Marietta homes?", a: "Yes. Around the square the work is restoration rather than repaint: scraping back to sound paint, feathering, spot-priming bare wood, and matching milled trim profiles when a piece is too far gone to save. Homes built before 1978 may have lead in the lower layers, which changes containment and disposal, and we handle that properly." },
      { q: "Is painted brick a mistake?", a: "It is permanent, which is the honest thing to say about it first. If you like the look and the work is done with the right primer and a breathable topcoat, it holds up well and it transforms a dated ranch. If it is done with the wrong products it traps moisture, blisters, and leaves you with a far worse problem than the brick you started with. Decide slowly, then have it done properly." },
      { q: "How far do you travel for Marietta jobs?", a: "We are based in Cumming, about 45 minutes out. We work across Cobb regularly and the distance does not change our pricing. For larger jobs we stage the crew to minimize the back and forth, which keeps the schedule tight." },
      { q: "Are you licensed and insured?", a: "We carry general liability insurance and will send the certificate to you before work starts. Georgia does not license residential painters at the state level, so the insurance certificate is the document that actually matters. Ask every contractor you talk to for it." },
    ],
    nearby: ["kennesaw", "roswell", "woodstock", "sandy-springs", "canton"],
    image: { src: "/images/cities/marietta.jpg", alt: "Painted brick ranch home with mature trees in Marietta, Georgia" },
  },
  {
    slug: "woodstock",
    name: "Woodstock",
    county: "Cherokee County",
    region: "north-metro",
    driveTime: "About 40 minutes from our Cumming shop",
    title: "Painter in Woodstock, GA | Pro Araiza",
    description:
      "Interior, exterior, and cabinet painting in Woodstock, GA. Craftsman subdivisions, downtown infill, decks. Fully insured, 10 years local. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Woodstock, Georgia, about 40 minutes from the company's Cumming base. Woodstock work centers on 2000s craftsman subdivision repaints, downtown-area infill construction, deck staining, and cabinet refinishing. Fully insured with free written estimates.",
    intro:
      "Woodstock grew the same way Suwanee did, quickly and mostly in one architectural language: craftsman and traditional homes built between 2000 and 2015 with fiber cement bodies, shake gables, and covered porches. The difference is Cherokee County's terrain. Woodstock lots roll, and a house on a sloped lot often has a walk-out basement and a two-story deck on the back, which means more exterior wood and harder access than the same house would have in flatter Forsyth. Those back elevations are where Woodstock exteriors get expensive, and they are the part homeowners forget to mention on the phone.",
    housingStock: [
      {
        heading: "2000s craftsman subdivisions",
        body: "Fiber cement bodies with painted trim and shake accents in the gables. The body holds paint well. The trim, the shake, and the porch columns carry the prep, and by year 15 the caulk at the trim joints has usually split.",
      },
      {
        heading: "Sloped lots and walk-out basements",
        body: "Cherokee terrain means a lot of homes sit on a grade with a walk-out basement and a two-story deck behind. That back elevation may be 30 feet tall at the low corner, which needs staging or a lift and turns what looked like a simple repaint into a more serious access problem.",
      },
      {
        heading: "Downtown Woodstock infill",
        body: "The revitalized downtown brought townhomes and newer single-family construction where the work is interior finish quality rather than weather protection.",
      },
    ],
    conditions:
      "Cherokee County gets the same rainfall as the rest of the north metro, but the sloped lots change how water behaves. Grade that falls toward a house keeps the lower siding courses damp, and that is where rot starts. We check the bottom courses on the low side of every Woodstock house before quoting, because that is where the surprises live.",
    neighborhoods: [
      { name: "Downtown Woodstock", note: "Newer infill and townhomes, interior finish work." },
      { name: "Towne Lake", note: "Large 1990s and 2000s community now in its repaint cycle." },
      { name: "Bradshaw Farm", note: "Established subdivision with mature canopy." },
      { name: "Eagle Watch", note: "Golf community, sloped lots with tall rear elevations." },
      { name: "Woodstock Knoll", note: "Craftsman stock with shake gables and porch columns." },
      { name: "River Park", note: "Homes on grade with walk-out basements and two-story decks." },
      { name: "Deer Run", note: "1990s homes on wooded, sloping lots." },
      { name: "Serenade", note: "Newer construction with cabinet-grade millwork." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Typical Woodstock craftsman home." },
      { service: "Exterior repaint", range: "$3,500 to $12,000", note: "Sloped-lot rear elevations push this higher." },
      { service: "Deck staining", range: "$800 to $3,500", note: "Two-story decks on walk-out basements cost more for access." },
      { service: "Kitchen cabinet refinishing", range: "$2,500 to $6,500", note: "Strong return on 2000s-era stained cabinets." },
    ],
    faqs: [
      { q: "Why is my Woodstock exterior quote higher than my neighbor's?", a: "Usually the back of the house. Cherokee lots roll, so a home on a grade can have a rear elevation that is 30 feet tall at the low corner with a two-story deck attached. That needs staging or a lift rather than ladders, and it adds real labor. Two houses with the same floor plan can differ by thousands based purely on what the lot does behind them." },
      { q: "How much does it cost to paint a house in Woodstock, GA?", a: "Exteriors run $3,500 to $12,000 and interiors $3,000 to $8,000. The exterior spread is wider than it looks because access on sloped lots varies so much. We walk the whole perimeter before quoting, specifically the low side, rather than pricing off the front elevation." },
      { q: "Do you check for rot on sloped lots?", a: "Yes, and it is the first thing we look at in Woodstock. When grade falls toward the house the bottom siding courses stay damp and rot starts there. We check the low side and every trim termination during the estimate, because rot discovered mid-job is what wrecks a schedule and a budget." },
      { q: "Should I stain or paint my deck?", a: "Stain. Paint forms a film on top of a horizontal board, traps moisture underneath, and peels, and then you are scraping an entire deck to fix it. Stain penetrates, lets the wood shed water, and recoats with a wash rather than a strip. On the two-story decks common in Woodstock that difference is worth a lot of money over time." },
      { q: "Can you refinish my kitchen cabinets?", a: "Yes, and it is the best-value project in Woodstock's 2000s housing stock. The stained maple and cherry cabinets in these homes are structurally sound and just look dated. We remove the doors and spray them off-site for a factory-grade finish, then do the boxes in place, for a fraction of replacement cost." },
      { q: "How soon can you start?", a: "Exterior work in the April to October window usually books three to four weeks out, with fall being the busiest stretch. Interior work is more flexible. Tell us your target date early and we will work backward from it rather than promising something we cannot hold." },
    ],
    nearby: ["canton", "marietta", "kennesaw", "milton", "acworth"],
    image: { src: "/images/cities/woodstock.jpg", alt: "Craftsman home on a sloped lot with a two-story rear deck in Woodstock, Georgia" },
  },
  {
    slug: "canton",
    name: "Canton",
    county: "Cherokee County",
    region: "north-metro",
    driveTime: "About 35 minutes from our Cumming shop",
    title: "Painter in Canton, GA | Pro Araiza",
    description:
      "Painting contractor serving Canton, GA. New construction, established subdivisions, decks, cabinet refinishing. Fully insured. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Canton, Georgia from a shop in Cumming, roughly 35 minutes away. Canton work includes new-construction interior finishing, exterior repaints on established subdivisions, deck staining, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Canton is where Cherokee County is still actively growing, so the work splits cleanly between brand-new and genuinely old with less in between than the rest of the metro. On the new side there are subdivisions going up now where the job is interior finish work and the occasional builder-grade repaint that the homeowner wants upgraded. On the old side, downtown Canton and the mill village have real historic housing with wood siding that needs restoration. The middle-aged subdivision stock that dominates Alpharetta or Suwanee is thinner here.",
    housingStock: [
      {
        heading: "Active new construction",
        body: "Canton is still building. Newer homes come with a single thin coat of builder-grade paint that covers but does not last, and a lot of our work here is upgrading that within the first few years: a proper two-coat application in a quality product, plus painted trim and accent work the builder did not include.",
      },
      {
        heading: "Downtown and mill village historic homes",
        body: "Older Canton housing near downtown and the former mill village has original wood siding and trim with layered paint. Pre-1978 homes may carry lead in the lower layers. This is restoration work: scrape, stabilize, spot-prime, and match profiles.",
      },
      {
        heading: "Rural and larger-lot properties",
        body: "Outside the city there are larger lots with outbuildings, barns, and fencing. That work is closer to what we do in Milton than what we do in a subdivision, and it is usually stain rather than paint.",
      },
    ],
    conditions:
      "Canton sits at the northern edge of the metro where elevation is slightly higher and overnight temperatures run a few degrees cooler than Atlanta proper. In practice that shortens the exterior painting season at both ends: you want to be past the last 50-degree nights in spring and finished before they return in the fall. It is a real constraint on scheduling here.",
    neighborhoods: [
      { name: "Downtown Canton", note: "Historic homes with original wood siding and trim." },
      { name: "Mill village", note: "Older housing, restoration-grade prep, possible lead layers." },
      { name: "BridgeMill", note: "Large established community now in the repaint window." },
      { name: "River Green", note: "Newer construction with builder-grade paint worth upgrading." },
      { name: "Great Sky", note: "Active newer subdivision, interior finish work." },
      { name: "Hickory Flat", note: "Mix of subdivisions and larger-lot properties." },
      { name: "Sixes Road corridor", note: "Growing area with ongoing construction." },
      { name: "Ball Ground area", note: "Rural properties with barns, fencing, and outbuildings." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "New construction upgrades often cost less than a full repaint." },
      { service: "Exterior repaint", range: "$3,500 to $11,000", note: "Standard subdivision pricing." },
      { service: "Exterior, historic home", range: "$7,000 to $20,000", note: "Restoration prep drives the number." },
      { service: "Barns and fencing", range: "Quoted on site", note: "Usually solid-body stain rather than paint." },
    ],
    faqs: [
      { q: "My Canton house is new but the paint already looks thin. Is that normal?", a: "Unfortunately yes. Builders typically apply one thin coat of a low-grade paint, which covers the drywall for the walkthrough but scuffs and marks almost immediately and cannot be cleaned without burnishing. Upgrading to a proper two-coat application in a washable product is one of the most common jobs we do in Canton's newer subdivisions, and it usually costs less than people expect because the surface is already smooth and needs almost no prep." },
      { q: "How much does it cost to paint a house in Canton, GA?", a: "Interiors run $3,000 to $8,000 and subdivision exteriors $3,500 to $11,000. A historic home downtown or in the mill village runs $7,000 to $20,000 because the prep is restoration rather than a wash and coat. We quote after seeing the house, not off square footage." },
      { q: "When can you paint the outside of my house in Canton?", a: "Canton sits a little higher and runs a few degrees cooler overnight than Atlanta proper, which shortens the exterior season at both ends. We want overnight lows staying above 50 degrees, so realistically late April through October, and we watch the fall forecast closely because the first cold nights arrive here before they arrive south of the city." },
      { q: "Do you paint barns, fencing, and outbuildings?", a: "Yes. Out toward Hickory Flat and Ball Ground there are a lot of larger-lot properties with outbuildings. We usually recommend a solid-body stain over paint on barns and fencing, because stain lets the wood move seasonally without the film cracking and recoats without scraping." },
      { q: "Do you work on historic homes downtown?", a: "Yes. Downtown Canton and the mill village have genuinely old housing where the work is restoration: scraping to a sound edge, stabilizing the existing layers, spot-priming bare wood, and matching trim profiles. Anything pre-1978 may have lead in the lower layers, which changes how we contain and dispose of the debris." },
      { q: "Are you insured?", a: "Yes, general liability, and we send the certificate before we start. On new-construction neighborhoods some builders and HOAs also require contractor registration, which we handle ahead of the first day." },
    ],
    nearby: ["woodstock", "milton", "kennesaw", "cumming", "acworth"],
    image: { src: "/images/cities/canton.jpg", alt: "Newly built home with fiber cement siding in a Canton, Georgia subdivision" },
  },
];
