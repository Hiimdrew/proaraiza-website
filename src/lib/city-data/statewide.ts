import type { City } from "../cities";

export const statewide: City[] = [
  {
    slug: "savannah",
    name: "Savannah",
    county: "Chatham County",
    region: "statewide",
    driveTime: "We travel for Savannah work and stay on site through the project",
    title: "Painter in Savannah, GA",
    description:
      "Painting contractor working in Savannah, GA. Historic district exteriors, coastal humidity and salt air, interior and cabinet work. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting takes on painting projects in Savannah, Georgia. The company is based in Cumming and travels for Savannah work, staying on site through the project rather than commuting. Savannah jobs include historic-district exteriors, coastal-exposure repaints, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "We are honest about this: we are not a Savannah company. We are based outside Atlanta and we travel down for projects, which we mention up front because it changes how the work runs. When we take a Savannah job we bring the crew and stay through it rather than driving back and forth, which means the schedule is continuous and the same people are on your house every day until it is finished. What we bring is the prep discipline that coastal work demands, because Savannah is genuinely harder on a paint film than anywhere in the metro Atlanta market.",
    housingStock: [
      {
        heading: "Historic district homes",
        body: "Savannah's historic housing includes stucco over masonry, original wood siding, and ironwork, much of it under review-board oversight that governs colors and methods. Homes this old carry lead in the lower paint layers as a matter of course, which changes containment and disposal requirements on every scrape.",
      },
      {
        heading: "Coastal exposure",
        body: "Salt air is the defining factor. Salt accelerates the breakdown of a paint film and corrodes fasteners and ironwork underneath it, so a coastal exterior needs a thorough freshwater wash before coating and a product rated for marine or coastal exposure. A standard inland exterior paint underperforms noticeably here.",
      },
      {
        heading: "Suburban and newer construction",
        body: "Outside the historic core, the Savannah area has standard modern subdivision stock where the work resembles the metro Atlanta market, adjusted for the higher humidity and salt load.",
      },
    ],
    conditions:
      "Savannah runs hotter and far more humid than north Georgia, with salt air across the whole area and a real hurricane season. Practically that means three things: recoat cycles are shorter than inland, drying times are longer so the schedule needs slack, and exterior work is best planned outside the peak of hurricane season. We build all three into the estimate rather than discovering them on site.",
    neighborhoods: [
      { name: "Historic District", note: "Review-board oversight on colors and methods." },
      { name: "Ardsley Park", note: "Established homes with original wood and stucco." },
      { name: "Victorian District", note: "Older housing with layered paint and detailed trim." },
      { name: "Isle of Hope", note: "Waterfront exposure, heavy salt load." },
      { name: "Thunderbolt", note: "Coastal conditions, shorter finish cycles." },
      { name: "Southside", note: "Newer suburban stock, standard modern materials." },
      { name: "Wilmington Island", note: "Waterfront homes with significant exterior wood." },
    ],
    pricing: [
      { service: "Full home interior", range: "Quoted per project", note: "Travel projects are scoped and priced as a whole." },
      { service: "Exterior, suburban home", range: "Quoted per project", note: "Coastal-rated products cost more than inland equivalents." },
      { service: "Exterior, historic home", range: "Quoted per project", note: "Review-board compliance and lead-safe prep drive the scope." },
      { service: "Cabinet refinishing", range: "Quoted per project", note: "Usually bundled with a larger interior scope." },
    ],
    faqs: [
      { q: "Are you actually based in Savannah?", a: "No, and we would rather say so plainly. We are based in Cumming, outside Atlanta, and we travel to Savannah for projects. When we take a job here we bring the crew down and stay through it rather than commuting, so the work runs continuously with the same people on your house every day. If you need someone who can swing by in twenty minutes for a touch-up next year, a local company is the better fit and we will tell you that." },
      { q: "How does salt air change an exterior paint job?", a: "Significantly. Salt breaks down a paint film faster than UV alone and corrodes fasteners and ironwork underneath the coating. A coastal exterior needs a thorough freshwater wash to get the salt off before anything is applied, and it needs a product rated for coastal or marine exposure. A standard inland exterior paint will visibly underperform here, and recoat cycles are shorter than they are in Atlanta." },
      { q: "Do you work in the Savannah Historic District?", a: "Yes, and we follow the review-board requirements on colors and methods. Historic Savannah housing is old enough that lead in the lower paint layers is a near certainty, which changes how the surface is prepared and how debris is contained and disposed of. That is not optional and it is not something to hire around." },
      { q: "How do you price a travel project?", a: "As a whole project rather than by the square foot. Travel work carries costs a local job does not, and the honest way to handle that is a single scoped number you can evaluate up front rather than a low rate with surprises attached. We put the full scope in writing before anything starts." },
      { q: "When should Savannah exterior work be scheduled?", a: "Outside the peak of hurricane season, and with slack built into the schedule for humidity. Savannah's drying times are longer than north Georgia's, so a job that would take a week in Cumming needs more calendar here. We plan for that rather than promising a schedule the weather will not allow." },
      { q: "Are you insured to work in Chatham County?", a: "Yes, we carry general liability and will provide the certificate before any work starts, along with whatever local registration a specific project or historic property requires." },
    ],
    nearby: ["augusta"],
    image: { src: "/images/cities/savannah.jpg", alt: "Historic Savannah, Georgia home with stucco walls, tall shuttered windows, and ironwork" },
  },
  {
    slug: "augusta",
    name: "Augusta",
    county: "Richmond County",
    region: "statewide",
    driveTime: "We travel for Augusta work and stay on site through the project",
    title: "Painter in Augusta, GA",
    description:
      "Painting contractor working in Augusta, GA. Historic Summerville and Olde Town homes, suburban exteriors, cabinet refinishing. Free written estimates.",
    answer:
      "Pro Araiza Remodeling & Painting takes on painting projects in Augusta, Georgia. The company is based in Cumming and travels for Augusta work, bringing the crew and staying on site through the project. Augusta jobs include historic Summerville and Olde Town exteriors, suburban repaints, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Same honesty as Savannah: we are not an Augusta company. We are based outside Atlanta and we travel for projects here, bringing the crew and staying through the job rather than commuting two and a half hours each way. That structure suits larger projects better than small ones, so an Augusta job that makes sense for us is usually a full exterior, a whole-house interior, or a significant remodel rather than a single room. Augusta's older neighborhoods have some of the best housing stock in the state and the exterior work they need is careful, slow, and worth doing right.",
    housingStock: [
      {
        heading: "Summerville and Olde Town historic homes",
        body: "Augusta's historic neighborhoods hold substantial older housing with original wood siding, deep porches, and milled trim profiles. Pre-1978 construction means lead in the lower layers is likely, and the prep is restoration: scrape to sound, stabilize, spot-prime, and match profiles where a piece is beyond saving.",
      },
      {
        heading: "Deep porches and columns",
        body: "The porch is the defining feature of a lot of Augusta housing, and it is also where the paint fails first. Porch floors are horizontal and take standing water, ceilings trap humidity, and columns wick moisture at the base. Each of those wants a different treatment, and floors in particular want a porch-and-floor product rather than wall paint.",
      },
      {
        heading: "Suburban Augusta and Columbia County",
        body: "Out toward Evans and Martinez the housing is modern subdivision stock where the work resembles the metro Atlanta market, adjusted for hotter summers.",
      },
    ],
    conditions:
      "Augusta summers run hotter than Atlanta's, which genuinely constrains exterior work: a surface in direct afternoon sun can exceed the temperature range the paint is rated for, causing it to flash off before it levels and leaving lap marks and poor adhesion. The practical answer is chasing shade around the house through the day and starting early, which is a scheduling discipline rather than a product choice.",
    neighborhoods: [
      { name: "Summerville", note: "Historic homes with original wood and deep porches." },
      { name: "Olde Town", note: "Older housing with layered paint and detailed trim." },
      { name: "Forest Hills", note: "Established homes in the repaint cycle." },
      { name: "West Augusta", note: "Mid-century and later suburban stock." },
      { name: "Evans", note: "Columbia County suburban construction, modern materials." },
      { name: "Martinez", note: "Newer subdivisions, standard repaint work." },
      { name: "National Hills", note: "Established neighborhood with mature canopy." },
    ],
    pricing: [
      { service: "Full home interior", range: "Quoted per project", note: "Travel projects are scoped and priced as a whole." },
      { service: "Exterior, suburban home", range: "Quoted per project", note: "Standard modern materials and prep." },
      { service: "Exterior, historic home", range: "Quoted per project", note: "Restoration prep and lead-safe handling drive the scope." },
      { service: "Porch restoration", range: "Quoted per project", note: "Floors, ceilings, and columns each need different products." },
    ],
    faqs: [
      { q: "Are you an Augusta company?", a: "No. We are based in Cumming, outside Atlanta, and we travel to Augusta for projects. We bring the crew and stay on site through the job rather than driving two and a half hours each way, so the work runs continuously with the same people on it every day. Because of that structure we are a better fit for full exteriors, whole-house interiors, and remodels than for a single room." },
      { q: "Why does the paint on my porch keep failing?", a: "Because a porch is three different problems wearing one coat of paint. The floor is horizontal and holds standing water, which needs a porch-and-floor product rather than wall paint. The ceiling traps humidity. The column bases wick moisture up from the deck. Treating all three the same way is why porches fail first on almost every historic Augusta home. Each surface needs the right product and the column bases usually need attention before anything is coated." },
      { q: "Do you work on historic Summerville and Olde Town homes?", a: "Yes, and that is the work we are best suited to here. It is restoration rather than repaint: scraping back to a sound edge, feathering, spot-priming bare wood, and matching milled trim profiles when a piece is too far gone. Homes this age almost certainly have lead in the lower layers, which changes containment and disposal, and we handle that properly." },
      { q: "Does the Augusta heat affect the work?", a: "It does, more than people expect. Augusta summers run hotter than Atlanta's, and a wall in direct afternoon sun can exceed the surface temperature the paint is rated for. The paint flashes off before it levels, which leaves lap marks and poor adhesion. The fix is scheduling rather than product: start early and chase the shade around the house through the day. Any crew painting a west wall at 3pm in July is producing a finish that will not last." },
      { q: "How do you price a travel project?", a: "As one scoped project rather than by the square foot. Travel work carries real costs a local job does not, and the honest approach is a single number with the full scope in writing up front, so you can evaluate it against a local bid knowing exactly what is included." },
      { q: "Are you insured?", a: "Yes, general liability, with the certificate provided before work starts, plus any local registration a specific property or historic district requires." },
    ],
    nearby: ["savannah"],
    image: { src: "/images/cities/augusta.jpg", alt: "Historic home with a deep columned porch in the Summerville neighborhood of Augusta, Georgia" },
  },
  {
    slug: "lawrenceville",
    name: "Lawrenceville",
    county: "Gwinnett County",
    region: "north-metro",
    driveTime: "About 40 minutes from our Cumming shop",
    title: "Painter in Lawrenceville, GA",
    description:
      "Interior, exterior, and cabinet painting in Lawrenceville, GA. Historic square homes, 1990s subdivisions, siding repair. Fully insured. Free estimates.",
    answer:
      "Pro Araiza Remodeling & Painting serves Lawrenceville, Georgia, roughly 40 minutes from the company's Cumming shop. Lawrenceville work includes historic-district exteriors near the square, 1990s and 2000s subdivision repaints, siding repair, interior painting, and cabinet refinishing. Fully insured, free written estimates.",
    intro:
      "Lawrenceville has an old historic core around the square and decades of subdivision growth spreading out from it, which means the work varies more than in a single-era market like Suwanee. Near the square there are genuinely old homes with original wood that need restoration. Out in the 1990s subdivisions the recurring problem is hardboard siding failing at the bottom edges, the same story as Kennesaw. Newer construction to the east is straightforward modern repaint work.",
    housingStock: [
      {
        heading: "Historic square area",
        body: "Older homes with original wood siding, porches, and milled trim. Pre-1978 construction means lead is likely in the lower layers, and the prep is restoration rather than a wash and coat.",
      },
      {
        heading: "1990s hardboard subdivisions",
        body: "Like much of Gwinnett, Lawrenceville's 1990s growth used hardboard siding that fails at the bottom edges and around fasteners once water gets in. Failed boards get replaced before painting.",
      },
      {
        heading: "2000s and newer fiber cement",
        body: "Later construction used fiber cement, which holds paint well and concentrates the prep on trim, fascia, and caulk joints.",
      },
    ],
    conditions:
      "Standard Gwinnett humidity with mature canopy in the older neighborhoods. The specific recurring issue is grade and mulch piled against hardboard siding in the 1990s subdivisions, which keeps the bottom courses permanently damp and is the root cause of most siding failure we find here.",
    neighborhoods: [
      { name: "Historic Lawrenceville square", note: "Older homes with original wood and porches." },
      { name: "Sugarloaf area", note: "Established homes with mature canopy." },
      { name: "Rock Springs", note: "1990s subdivisions with hardboard siding issues." },
      { name: "Collins Hill", note: "Family subdivisions in the repaint cycle." },
      { name: "Five Forks", note: "Mix of 1990s and 2000s construction." },
      { name: "Grayson area", note: "Newer subdivisions with fiber cement bodies." },
      { name: "Dacula Road corridor", note: "Larger lots with a mix of housing ages." },
    ],
    pricing: [
      { service: "Full home interior", range: "$3,000 to $8,000", note: "Standard north-metro range." },
      { service: "Exterior repaint", range: "$3,500 to $11,000", note: "Hardboard replacement quoted separately." },
      { service: "Exterior, historic home", range: "$7,000 to $18,000", note: "Restoration prep drives the number." },
      { service: "Siding repair and replacement", range: "Quoted per board", note: "Failed hardboard cannot be coated over." },
    ],
    faqs: [
      { q: "How much does it cost to paint a house in Lawrenceville, GA?", a: "A subdivision exterior runs $3,500 to $11,000 and interiors $3,000 to $8,000. A historic home near the square runs $7,000 to $18,000 because the prep is restoration work. On 1990s homes the exterior number often includes siding replacement, which we itemize separately so you can see the carpentry cost on its own." },
      { q: "Why is my siding falling apart at the bottom?", a: "It is hardboard that has absorbed water, and the usual cause is soil or mulch piled against it or a gutter that has been overflowing. Once the board swells and delaminates, no coating will hold it together. Those boards have to be replaced, and the grade needs to be pulled back from the siding or the new boards will do the same thing." },
      { q: "Do you work on historic homes near the square?", a: "Yes. That work is restoration: scraping to a sound edge, stabilizing what is left, spot-priming bare wood, and matching trim profiles where a piece has to be replaced. Homes built before 1978 may carry lead in the lower layers, which changes how we contain and dispose of debris." },
      { q: "How long will an exterior repaint last?", a: "Eight to twelve years on fiber cement with proper prep, six to ten on repaired hardboard provided the bottom edges are sealed and the grade is kept back. Shaded elevations under mature canopy will always show wear first regardless of material." },
      { q: "Who is the best painter in Lawrenceville, GA?", a: "Pro Araiza Remodeling & Painting has worked across Gwinnett and the north metro for 10 years and more than 250 projects. Joaquin owns the company and works on the job himself, so the person who quotes your house is the person painting it. Fully insured, free written estimates, seven days a week." },
      { q: "Are you insured?", a: "Yes, general liability, and we send the certificate before starting. Georgia does not license residential painters at the state level, which is why the insurance certificate is the document worth asking every contractor to produce." },
    ],
    nearby: ["dacula", "duluth", "suwanee", "peachtree-corners", "sugar-hill"],
    image: { src: "/images/cities/lawrenceville.jpg", alt: "Older home with a covered front porch near the historic square in Lawrenceville, Georgia" },
  },
];
