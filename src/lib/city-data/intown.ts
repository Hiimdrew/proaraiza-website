import type { City } from "../cities";

// Intown and inner-perimeter Atlanta. The existing 25 skew north of the
// perimeter; these five open the highest-value renovation markets in the metro.
export const intown: City[] = [
  {
    slug: "buckhead",
    name: "Buckhead",
    county: "Fulton County",
    schemaType: "Place",
    parentCity: "Atlanta",
    coords: { lat: 33.8484, lng: -84.3781 },
    region: "intown",
    driveTime: "About 50 minutes from our Cumming shop",
    title: "Painter in Buckhead, GA",
    description:
      "High-end interior, exterior, and cabinet painting in Buckhead, Atlanta. Estate homes, trim and millwork finishing, painted brick. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting works in Buckhead, Atlanta, traveling from a shop in Cumming about 50 minutes north. Buckhead work is weighted toward high-end interior finishing, millwork and trim conversions, cabinet refinishing, and estate exteriors. The company is fully insured and provides free written estimates.",
    intro:
      "Buckhead is the most demanding market in Georgia for finish quality, and that is the honest reason to talk about it separately. The homes are large, the millwork is real, and the people paying for the work have seen good painting before and can tell the difference. A brushed trim finish that would pass without comment in a subdivision gets rejected here. Almost everything we do in Buckhead is sprayed, sanded between coats, and sprayed again, and the schedule reflects that. It is slower and it costs more, and that is the whole point.",
    housingStock: [
      {
        heading: "Estate homes and traditional manors",
        body: "Large brick, stucco, and stone homes with substantial exterior trim, dentil molding, and multi-story elevations that need lift or scaffold access. Exterior projects here run multi-week and the prep is where the money goes.",
      },
      {
        heading: "Interior millwork and paneling",
        body: "Coffered ceilings, wainscoting, paneled libraries, and built-in cabinetry are standard. This is spray work, not brush work: degrease, sand, bonding primer, spray, sand, spray again. A brushed finish on a paneled Buckhead library reads as a shortcut from across the room.",
      },
      {
        heading: "Mid-century homes and teardown-era renovations",
        body: "Alongside the estates there is significant 1950s and 1960s stock being renovated rather than replaced. Painted brick, trim conversions from stained to painted, and full interior repaints are the recurring projects.",
      },
    ],
    conditions:
      "Buckhead's mature hardwood canopy is among the densest inside the perimeter, which keeps north and east elevations damp and makes mildew the primary exterior maintenance issue. On the interior, the constraint is not weather but occupancy: most of this work happens in furnished, lived-in homes, so containment, dust control, and daily cleanup matter as much as the finish itself.",
    neighborhoods: [
      { name: "Tuxedo Park", note: "Estate homes with substantial exterior trim and multi-story elevations." },
      { name: "Garden Hills", note: "1920s and 1930s homes with original millwork and wood windows." },
      { name: "Peachtree Heights", note: "Traditional homes with heavy interior trim detail." },
      { name: "Chastain Park", note: "Mix of mid-century ranches and newer builds, strong renovation activity." },
      { name: "Brookwood Hills", note: "Historic bungalows and cottages with original wood." },
      { name: "Paces", note: "Large estate lots, multi-week exterior projects." },
      { name: "Argonne Forest", note: "Established homes under dense hardwood canopy." },
      { name: "Pine Hills", note: "Mid-century stock being actively renovated." },
    ],
    pricing: [
      { service: "Full home interior", range: "$6,000 to $20,000", note: "Buckhead square footage and trim detail sit well above the metro average." },
      { service: "Millwork and paneling finishing", range: "$4,000 to $15,000", note: "Sprayed, sanded between coats, and sprayed again." },
      { service: "Estate exterior repaint", range: "$10,000 to $35,000", note: "Driven by elevation height, material mix, and lift access." },
      { service: "Cabinet refinishing", range: "$3,500 to $10,000", note: "Large kitchens, butler's pantries, and islands to match." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Buckhead?", a: "Interiors run $6,000 to $20,000 and estate exteriors $10,000 to $35,000. Buckhead sits above the rest of the metro for two reasons: the homes are substantially larger, and the finish standard is higher. Most of the interior work here is sprayed rather than brushed, which means more masking, more setup, and more labor hours for the same square footage." },
      { q: "Do you spray or brush trim and millwork?", a: "Spray, on essentially every Buckhead project. A brushed finish leaves visible brush marks that read as a shortcut on coffered ceilings, paneled rooms, and built-ins. Our process is degrease, sand, bonding primer, spray, sand between coats, then spray the finish. It takes longer and it is the only way to get a finish that matches the quality of the millwork underneath." },
      { q: "Can you work in an occupied, furnished home?", a: "Yes, and most Buckhead interior work is exactly that. It means real containment: plastic and zip walls around the work area, floor protection on every path, HEPA dust control when we are sanding, and the space put back every evening rather than at the end of the job. A crew that leaves a furnished Buckhead house dusty will not be invited back, correctly." },
      { q: "Can you paint the brick on my Buckhead home?", a: "Yes, and it is a common request on the mid-century stock. It is permanent, so it deserves a slow decision. Done correctly it means a masonry cleaning, a bonding primer formulated for brick, and a breathable acrylic topcoat so moisture in the wall can still escape. Done with a standard exterior latex over unprepared brick it blisters within about two years and cannot be reversed." },
      { q: "How far in advance should I book?", a: "Four to six weeks for interior work of any scale, and longer for a full estate exterior, because these projects are measured in weeks rather than days and we do not stack them. If you have a date driven by an event or a move, tell us early and we will work backward from it rather than promising a window we cannot hold." },
      { q: "Do you carry liability insurance?", a: "Yes, general liability, and we send the certificate to you or your property manager before we start. Many Buckhead homes predate 1978, so we also handle lead-safe containment properly on exterior prep rather than sanding or scraping without controls." },
    ],
    nearby: ["sandy-springs", "brookhaven", "decatur", "dunwoody", "smyrna"],
    image: { src: "/images/cities/buckhead.jpg", alt: "Large traditional brick estate home with mature hardwoods in Buckhead, Atlanta" },
  },
  {
    slug: "decatur",
    name: "Decatur",
    county: "DeKalb County",
    coords: { lat: 33.7748, lng: -84.2963 },
    region: "intown",
    driveTime: "About 55 minutes from our Cumming shop",
    title: "Painter in Decatur, GA",
    description:
      "Interior and exterior painting in Decatur, GA. Craftsman bungalows, historic wood siding, trim restoration, cabinet refinishing. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting works in Decatur, Georgia, traveling from a shop in Cumming. Decatur work centers on craftsman bungalow exteriors, historic wood siding restoration, interior repaints, and cabinet refinishing. The company is fully insured and provides free written estimates.",
    intro:
      "Decatur is bungalow country, and bungalows are a specific kind of painting problem. The housing is largely 1910s through 1940s craftsman and cottage stock with original wood siding, deep eaves, exposed rafter tails, tapered porch columns, and wood windows. All of that detail is exactly where paint fails first and exactly where a fast crew cuts corners. Decatur homeowners also tend to be preservation-minded, which we appreciate, because the right answer on a hundred-year-old house is almost always to repair the original wood rather than wrap or replace it.",
    housingStock: [
      {
        heading: "Craftsman bungalows",
        body: "Original wood siding with deep eaves, exposed rafter tails, and tapered porch columns on masonry piers. The rafter tails and column bases are the first things to fail because they take direct weather and hold moisture. Prep here is scraping, consolidating soft wood, and rebuilding rather than covering.",
      },
      {
        heading: "Wood windows and original trim",
        body: "Most Decatur bungalows still have their original double-hung wood windows. Failed glazing putty lets water sit in the sash, and a new coat over that fails at exactly the same spot. Re-glazing is part of doing the job properly, not an upsell.",
      },
      {
        heading: "Additions and renovated interiors",
        body: "A large share of Decatur homes have been added onto or opened up. That leaves interiors with a mix of original plaster, newer drywall, and trim profiles from two or three eras that all need to read as one finish.",
      },
    ],
    conditions:
      "Decatur's tree canopy is dense and the lots are small, so houses sit close together with limited sun on the side elevations. Those walls stay damp and grow mildew. Homes built before 1978, which is nearly all of the historic stock, are very likely to have lead in the lower paint layers, which changes containment and disposal on every exterior scrape.",
    neighborhoods: [
      { name: "Oakhurst", note: "Dense bungalow stock with original wood siding and porches." },
      { name: "Winnona Park", note: "1920s and 1930s homes with deep eaves and rafter tails." },
      { name: "Great Lakes", note: "Craftsman cottages, many with original wood windows." },
      { name: "Ponce de Leon Heights", note: "Historic homes with substantial trim detail." },
      { name: "Downtown Decatur", note: "Older housing close together, limited sun on side elevations." },
      { name: "Medlock Park", note: "Post-war ranches and cottages in active renovation." },
      { name: "Lenox Place", note: "Bungalows with masonry porch piers and column bases." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,500 to $10,000", note: "Mixed plaster and drywall with multi-era trim adds labor." },
      { service: "Bungalow exterior repaint", range: "$7,000 to $20,000", note: "Prep on eaves, rafter tails, and columns is most of the cost." },
      { service: "Wood window re-glazing", range: "Quoted per sash", note: "Failed glazing must be rebuilt before painting." },
      { service: "Cabinet refinishing", range: "$2,500 to $7,000", note: "Common in renovated Decatur kitchens." },
    ],
    faqs: [
      { q: "How much does it cost to paint a bungalow in Decatur, GA?", a: "A full exterior runs $7,000 to $20,000, and the spread is almost entirely prep. A bungalow has deep eaves, exposed rafter tails, tapered columns, and original wood windows, and every one of those details takes hand work that a flat-sided subdivision house does not. Interiors run $3,500 to $10,000. Any bid on a Decatur bungalow that comes in near subdivision pricing is not planning to do the prep." },
      { q: "Should I replace my original wood windows or repair them?", a: "Repair them, in almost every case. Original old-growth wood windows are better material than most replacements and they can be re-glazed and made tight for far less than replacement. What has usually failed is the glazing putty and the paint seal, not the sash itself. We re-glaze, prime, and paint them as part of the exterior job." },
      { q: "What about lead paint?", a: "Assume it is there. Nearly all of Decatur's historic stock predates 1978, which means lead in the lower paint layers is likely. That changes how the surface is prepared and how debris is contained and disposed of. If you see a crew dry-scraping a Decatur bungalow with no containment and no drop protection, that is a real problem for your yard and your household, and you should stop the work." },
      { q: "Why do my rafter tails and porch columns fail before the rest of the house?", a: "Because they take the most direct weather and hold moisture the longest. Rafter tails are end grain pointed at the sky, and column bases sit on masonry piers where water collects. Both need the soft wood consolidated or replaced and properly primed before coating. Painting over failing end grain buys you one season." },
      { q: "Can you match the trim between the original house and the addition?", a: "Yes, and it is a common Decatur request. Most of these homes have been added onto, so you end up with plaster in the front rooms, drywall in the back, and trim profiles from two or three eras. The goal is one continuous finish so the seams do not read, which is mostly about surface prep and consistent sheen rather than color." },
      { q: "What insurance do you carry?", a: "Yes, general liability, with the certificate sent before we start. On pre-1978 homes we also handle lead-safe containment properly, which is the part of this work that actually protects your soil and your family." },
    ],
    nearby: ["brookhaven", "buckhead", "dunwoody", "tucker", "smyrna"],
    image: { src: "/images/cities/decatur.jpg", alt: "Craftsman bungalow with a deep front porch and tapered columns in Decatur, Georgia" },
  },
  {
    slug: "brookhaven",
    name: "Brookhaven",
    county: "DeKalb County",
    coords: { lat: 33.8651, lng: -84.3366 },
    region: "intown",
    driveTime: "About 50 minutes from our Cumming shop",
    title: "Painter in Brookhaven, GA",
    description:
      "Interior, exterior, and cabinet painting in Brookhaven, GA. Mid-century ranches, trim conversions, painted brick, new construction. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting works in Brookhaven, Georgia, traveling from a shop in Cumming. Brookhaven work includes mid-century ranch repaints, stained-trim-to-painted conversions, painted brick, new-construction finishing, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Brookhaven is in the middle of a long renovation cycle and the work reflects it. The original 1950s and 1960s ranch and split-level stock is either being updated or replaced outright, so on the same street you will find a mid-century ranch getting its brick painted and a brand-new build needing interior finish work. Both are good work and they need completely different processes. What Brookhaven does not have much of is the middle: straightforward maintenance repaints on twenty-year-old subdivision houses are rare here.",
    housingStock: [
      {
        heading: "Mid-century ranches and split-levels",
        body: "1950s and 1960s brick and wood homes with original stained trim and dated kitchens. The two highest-return projects are painting the brick and converting the interior trim from stained to painted, both of which change the whole character of the house.",
      },
      {
        heading: "Teardown-replacement new construction",
        body: "A significant share of Brookhaven lots now carry new homes with cabinet-grade millwork and built-ins. That work is finish quality: sprayed trim, painted paneling, and accent work that the builder's grade of paint does not deliver.",
      },
      {
        heading: "1990s and 2000s infill",
        body: "Between the two eras there is traditional infill construction with brick fronts and siding elsewhere, needing conventional exterior repaints.",
      },
    ],
    conditions:
      "Brookhaven has mature canopy and small-to-medium lots inside the perimeter, so shaded elevations hold moisture and mildew establishes quickly. The other local factor is that renovation activity is constant, which means neighboring construction dust is a real consideration when scheduling exterior finish work on an occupied home.",
    neighborhoods: [
      { name: "Historic Brookhaven", note: "Larger established homes with substantial trim detail." },
      { name: "Ashford Park", note: "Mid-century ranches in heavy renovation, painted-brick candidates." },
      { name: "Drew Valley", note: "1950s stock with original stained interior trim." },
      { name: "Brookhaven Fields", note: "Mix of renovated ranches and new construction." },
      { name: "Lynwood Park", note: "Active teardown and rebuild, new-construction finishing." },
      { name: "Osborne Park", note: "Established homes under dense canopy." },
      { name: "Town Brookhaven area", note: "Newer infill and townhomes." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,500 to $11,000", note: "Trim conversions add real labor over a straight repaint." },
      { service: "Stained trim to painted", range: "$2,500 to $8,000", note: "Degrease, sand, bonding primer, sprayed finish." },
      { service: "Painting brick", range: "$4,500 to $13,000", note: "Masonry clean, bonding primer, breathable acrylic. Permanent." },
      { service: "New construction finishing", range: "Quoted per project", note: "Sprayed millwork and built-ins beyond builder grade." },
    ],
    faqs: [
      { q: "Should I paint the brick on my Brookhaven ranch?", a: "It is the single biggest visual change available on a 1950s or 1960s ranch, and it is permanent, so decide slowly and then have it done properly. Correct means a masonry cleaning, a bonding primer made for brick, and a breathable acrylic topcoat that lets moisture in the wall escape. Wrong means a standard exterior latex over unprepared brick, which blisters within about two years and cannot be undone." },
      { q: "Can you paint my stained trim white?", a: "Yes, and in Brookhaven's mid-century stock it transforms the interior more than a wall color ever will. The process is degrease, sand, bonding primer formulated for previously finished surfaces, then a sprayed topcoat. The bonding primer is the entire job. Without it the paint scratches off with a fingernail, which is why most DIY trim conversions fail inside a year." },
      { q: "How much does it cost to paint a house in Brookhaven, GA?", a: "Interiors run $3,500 to $11,000, and higher when you are converting stained trim to painted because that is genuinely more labor. Painting brick runs $4,500 to $13,000. Cabinet refinishing runs $2,500 to $7,000. We itemize the estimate so the prep is visible separately from the paint." },
      { q: "Can you handle finish work on a new build?", a: "Yes. A lot of Brookhaven lots now carry new construction where the builder's single thin coat does not match the quality of the millwork it is covering. Sprayed trim, painted built-ins, and paneled walls need a different process than a repaint, and it is worth doing before you move furniture in." },
      { q: "The shaded side of my house keeps going green. Why?", a: "Mature canopy and close lot spacing mean those elevations barely see sun and stay damp. Mildew establishes, gets painted over, and bleeds back through within two summers. It has to be washed with a mildewcide and dried completely before coating, and the finish coat should carry a mildew-resistant additive." },
      { q: "Do you send an insurance certificate before starting?", a: "Yes, general liability, with the certificate sent before we start. Much of Brookhaven's original housing predates 1978, so lead-safe containment applies on exterior prep and we handle it properly." },
    ],
    nearby: ["buckhead", "decatur", "dunwoody", "sandy-springs", "tucker"],
    image: { src: "/images/cities/brookhaven.jpg", alt: "Renovated mid-century ranch with painted brick in Brookhaven, Georgia" },
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    county: "Cobb County",
    coords: { lat: 33.884, lng: -84.5144 },
    region: "intown",
    driveTime: "About 55 minutes from our Cumming shop",
    title: "Painter in Smyrna, GA",
    description:
      "Interior, exterior, and cabinet painting in Smyrna, GA. Craftsman infill, 1990s subdivisions, townhomes, cabinet refinishing. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting works in Smyrna, Georgia, traveling from a shop in Cumming. Smyrna work includes craftsman infill exteriors, 1990s subdivision repaints, townhome finishing, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Smyrna rebuilt itself over the last twenty-five years, and the housing tells that story clearly. Around the Market Village and through the Village Green area there is a dense band of newer craftsman infill on small lots, tall and narrow with a lot of painted trim per square foot of house. Further out there is 1990s subdivision stock and a large number of townhomes. The infill homes are the interesting ones: three stories on a narrow lot means the side elevations are tight to the property line and access, not surface area, drives the exterior number.",
    housingStock: [
      {
        heading: "Craftsman infill on narrow lots",
        body: "Tall, narrow, three-story homes with heavy painted trim, shake accents, and front porches, built close to the property line. Access is the constraint: the side elevations often have only a few feet of clearance, which rules out standard staging and slows the work considerably.",
      },
      {
        heading: "Townhomes and attached housing",
        body: "Smyrna has a large townhome stock where the painted surface is usually the front elevation, the trim, and the rear deck or balcony. HOA color approval is almost always required and often the whole building has to match.",
      },
      {
        heading: "1990s subdivisions",
        body: "Standard Cobb County stock with hardboard or early composite siding that fails at the bottom edges once water gets in. Failed boards get replaced rather than coated.",
      },
    ],
    conditions:
      "Smyrna sits lower and warmer than the northern suburbs, which lengthens the exterior season slightly. The dominant constraint is not weather but geometry: narrow-lot infill homes have side elevations too tight for conventional staging, so those walls take longer and cost more per square foot than the open front and back.",
    neighborhoods: [
      { name: "Market Village", note: "Dense newer craftsman infill on narrow lots." },
      { name: "Village Green", note: "Three-story infill homes with heavy painted trim." },
      { name: "Vinings Estates", note: "Larger homes with mixed-material elevations." },
      { name: "Williams Park", note: "Mix of older cottages and newer infill." },
      { name: "Jonquil", note: "Established homes in active renovation." },
      { name: "Argyle", note: "1990s subdivision stock with hardboard siding issues." },
      { name: "Belmont", note: "Townhomes and attached housing with HOA color approval." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $9,000", note: "Three-story infill homes have more stairwell and trim than the footprint suggests." },
      { service: "Exterior, infill home", range: "$4,500 to $13,000", note: "Narrow side-lot access drives this more than square footage." },
      { service: "Townhome exterior", range: "Quoted per building", note: "HOA usually requires the whole building to match." },
      { service: "Cabinet refinishing", range: "$2,500 to $6,500", note: "Strong return on 1990s and 2000s kitchens." },
    ],
    faqs: [
      { q: "Why is my Smyrna exterior quote higher than a similar-sized house elsewhere?", a: "Almost always the side elevations. Smyrna's newer infill homes are three stories on narrow lots, sometimes with only a few feet to the property line. That clearance is too tight for conventional staging, so those walls take significantly longer per square foot than the open front and rear. Two houses with identical floor plans can differ by thousands based purely on lot width." },
      { q: "How much does it cost to paint a house in Smyrna, GA?", a: "Exteriors run $4,500 to $13,000 on infill homes and interiors $3,000 to $9,000. A three-story infill house also has more stairwell wall and more linear feet of trim than its footprint suggests, so interior numbers run higher than the square footage alone would predict." },
      { q: "Can you paint my townhome?", a: "Yes, and the first question is always what the HOA requires. Most Smyrna townhome associations require the entire building to match and the color approved in advance, which means coordinating with your neighbors and the board before anything starts. We will prepare the submission and schedule around the approval." },
      { q: "My 1990s Smyrna house has siding crumbling at the bottom. What is it?", a: "Hardboard siding that has absorbed water, usually because mulch or grade is piled against it or the gutters have been overflowing. Once it swells and delaminates no coating will hold it together, so those boards get replaced and the grade gets pulled back so it does not repeat." },
      { q: "How long does an infill exterior take?", a: "One to two weeks, and more of that time goes to the tight side elevations than you would expect. We would rather tell you that up front than promise five days and then be there for twelve." },
      { q: "Can I see your insurance certificate?", a: "Yes, general liability, with the certificate sent to you or your HOA before we start. Townhome and managed communities in Smyrna typically require contractor registration, which we handle ahead of the first day." },
    ],
    nearby: ["marietta", "buckhead", "sandy-springs", "kennesaw", "brookhaven"],
    image: { src: "/images/cities/smyrna.jpg", alt: "Tall narrow craftsman infill homes with painted trim and front porches in Smyrna, Georgia" },
  },
  {
    slug: "tucker",
    name: "Tucker",
    county: "DeKalb County",
    coords: { lat: 33.8545, lng: -84.2171 },
    region: "intown",
    driveTime: "About 50 minutes from our Cumming shop",
    title: "Painter in Tucker, GA",
    description:
      "Interior, exterior, and cabinet painting in Tucker, GA. Post-war ranches, split-levels, wood siding restoration, cabinet refinishing. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting works in Tucker, Georgia, traveling from a shop in Cumming. Tucker work includes post-war ranch and split-level repaints, wood siding restoration, interior painting, trim conversions, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Tucker is one of the better-value renovation markets inside the perimeter and the housing is remarkably consistent: post-war ranches and split-levels from the 1950s through the 1970s on generous, heavily wooded lots. These are solid houses with good bones that have mostly been maintained rather than gutted, which means the paint history is long. Four or five layers on original wood siding and trim is normal, and somewhere in that stack the bond has failed. The honest Tucker estimate includes more scraping than most homeowners expect and less drama than they fear.",
    housingStock: [
      {
        heading: "Post-war ranches and split-levels",
        body: "1950s through 1970s construction with brick, wood siding, and original trim. Structurally sound and heavily painted. The failure is in the lower layers, so prep means scraping back to a sound edge rather than washing and coating.",
      },
      {
        heading: "Original wood siding and trim",
        body: "Much of Tucker still has its original wood siding, fascia, and window trim. Where gutters have overflowed the fascia has usually taken water, and those boards need replacing before anything is painted.",
      },
      {
        heading: "Dated interiors with stained trim",
        body: "Stained wood trim, doors, and paneling are common and converting them to painted is the highest-impact interior project available. It needs degreasing, sanding, and a bonding primer to hold.",
      },
    ],
    conditions:
      "Tucker's lots are large and very heavily wooded, which makes shade and organic load the dominant exterior issue. North elevations under dense canopy stay damp, grow mildew, and collect debris from the trees. The other recurring item is fascia rot behind overflowing gutters, which on a house with mature trees overhead is close to universal.",
    neighborhoods: [
      { name: "Downtown Tucker", note: "Older core with a mix of housing ages." },
      { name: "Smoke Rise", note: "Large wooded lots with 1960s and 1970s homes." },
      { name: "Midvale", note: "Post-war ranches with original wood siding." },
      { name: "Lakeside", note: "Split-levels under heavy canopy." },
      { name: "Livsey", note: "Established homes with stained interior trim." },
      { name: "Brockett", note: "1960s stock in active renovation." },
      { name: "Chamblee-Tucker corridor", note: "Mix of older homes and newer infill." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $9,000", note: "Trim conversions push toward the upper end." },
      { service: "Exterior repaint", range: "$4,000 to $12,000", note: "Layered paint means real scraping, and fascia repair is common." },
      { service: "Fascia and trim repair", range: "Quoted per board", note: "Rot behind overflowing gutters is close to universal here." },
      { service: "Stained trim to painted", range: "$2,500 to $7,000", note: "Degrease, sand, bonding primer, sprayed finish." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Tucker, GA?", a: "Exteriors run $4,000 to $12,000 and interiors $3,000 to $9,000. Tucker exteriors carry more prep than a newer suburb because these houses have been painted every eight to ten years since the 1960s and at some point one of those layers lost its bond. Fascia repair is also common enough here that we check it on every estimate rather than treating it as a surprise." },
      { q: "Why does my fascia keep rotting?", a: "Overflowing gutters, in nearly every case. Tucker's lots are heavily wooded, gutters fill with leaves, water backs up over the edge and runs down the fascia board continuously. Replacing the board without fixing the gutter just resets the clock. We will tell you when the gutter is the actual problem, because painting a new board under a failing gutter is money you will spend twice." },
      { q: "Can you paint my stained trim and paneling?", a: "Yes, and on Tucker's 1960s and 1970s interiors it is the change that makes the biggest difference. Degrease, sand, bonding primer made for previously finished surfaces, then a sprayed finish. The bonding primer is what makes it durable. Paint applied straight over varnish scratches off with a fingernail." },
      { q: "Why is the north side of my house always green?", a: "Dense canopy over a large lot means that elevation barely sees direct sun and stays damp, plus it collects organic debris from the trees overhead. Mildew establishes and, if it gets painted over, bleeds back through within two summers. It has to be washed off with a mildewcide and fully dried before coating." },
      { q: "Is my older Tucker house likely to have lead paint?", a: "If it was built before 1978, assume yes in the lower layers, and a lot of Tucker housing qualifies. That changes how the surface is prepared and how debris is contained and disposed of. We handle it properly rather than scraping into the yard." },
      { q: "Are your painters insured?", a: "Yes, general liability, with the certificate sent directly to you before work starts. Ask any contractor for their certificate before work starts. It is the document that actually protects you." },
    ],
    nearby: ["decatur", "brookhaven", "dunwoody", "peachtree-corners", "buckhead"],
    image: { src: "/images/cities/tucker.jpg", alt: "Post-war brick ranch home on a large wooded lot in Tucker, Georgia" },
  },
];
