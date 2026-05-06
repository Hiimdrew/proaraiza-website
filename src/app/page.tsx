import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    name: "Interior Painting",
    href: "/interior-painting",
    description:
      "Walls, ceilings, trim, and more. Transform any room with a flawless paint job.",
  },
  {
    name: "Exterior Painting",
    href: "/exterior-painting",
    description:
      "Hardie board, wood, brick, and stucco. Protect and beautify your home's exterior.",
  },
  {
    name: "Cabinet Painting & Refinishing",
    href: "/cabinet-painting",
    description:
      "Give your kitchen a fresh look at a fraction of the cost of replacement.",
  },
  {
    name: "Remodeling & Drywall",
    href: "/remodeling",
    description:
      "Drywall repair, trim, flooring, carpentry, and full room renovations.",
  },
];

const trustItems = [
  { label: "15+ Years Experience", icon: "🔧" },
  { label: "Fully Insured", icon: "🛡️" },
  { label: "Free Estimates", icon: "📋" },
  { label: "Serving 6+ Cities", icon: "📍" },
];

const serviceAreas = [
  { name: "Cumming", href: "/painting-cumming-ga" },
  { name: "Alpharetta", href: "/painting-alpharetta-ga" },
  { name: "Gainesville", href: "/painting-gainesville-ga" },
  { name: "Buford", href: "/painting-buford-ga" },
  { name: "Roswell", href: "/painting-roswell-ga" },
  { name: "Woodstock", href: "/painting-woodstock-ga" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Painting &amp; Remodeling in{" "}
              <span className="text-brand-gold">Cumming, GA</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Trusted by Forsyth County homeowners for over 15 years. Interior
              and exterior painting, cabinet refinishing, and full remodeling
              services. Fully insured. Free estimates.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:7706240593"
                className="rounded-md border border-gray-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                Call (770) 624-0593
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-dark-gray py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 text-center">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-brand-text-light">From a single room to a full home transformation.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-xl border border-gray-200 p-6 transition hover:border-brand-gold hover:shadow-lg">
                <div className="aspect-[4/3] rounded-lg bg-brand-gray" />
                <h3 className="mt-4 text-lg font-semibold text-brand-black group-hover:text-brand-gold">{service.name}</h3>
                <p className="mt-2 text-sm text-brand-text-light">{service.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-gold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Recent Projects</h2>
            <p className="mt-4 text-brand-text-light">See the quality of our work across Forsyth County.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Interior Painting", location: "Cumming, GA", type: "Living Room Repaint" },
              { title: "Cabinet Refinishing", location: "Alpharetta, GA", type: "Kitchen Transformation" },
              { title: "Exterior Painting", location: "Roswell, GA", type: "Full Exterior Repaint" },
            ].map((project) => (
              <div key={project.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="aspect-[16/10] bg-gray-200" />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-gold">{project.type}</p>
                  <h3 className="mt-1 text-lg font-semibold text-brand-black">{project.title}</h3>
                  <p className="text-sm text-brand-text-light">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="text-sm font-medium text-brand-gold transition hover:text-brand-copper">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                Why Forsyth County Homeowners Choose Pro Araiza
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Family-owned and locally operated in Cumming, GA",
                  "Over 15 years of painting and remodeling experience",
                  "Fully insured for your protection",
                  "Interior, exterior, remodeling — one team for everything",
                  "Free estimates with honest, upfront pricing",
                  "Available 7 days a week, 7 AM to 7 PM",
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-text">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about" className="text-sm font-medium text-brand-gold transition hover:text-brand-copper">Learn More About Us →</Link>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Serving Cumming and the North Atlanta Suburbs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-text-light">
              Pro Araiza proudly serves homeowners across Forsyth County and the surrounding North Metro Atlanta communities.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
                <div>
                  <span className="text-lg font-semibold text-brand-black">{area.name}, GA</span>
                  <p className="text-sm text-brand-text-light">Painting & Remodeling Services</p>
                </div>
                <span className="text-brand-gold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">What Your Neighbors Are Saying</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "Pro Araiza did an amazing job on our interior painting. Professional, on time, and the quality was outstanding.", author: "Forsyth County Homeowner", source: "Nextdoor" },
              { quote: "Fully insured and professional. They handled our drywall repair and painting perfectly. Highly recommend.", author: "Cumming, GA Resident", source: "Nextdoor" },
              { quote: "Great work on our exterior trim and pressure washing. The house looks brand new. Fair pricing too.", author: "North Atlanta Homeowner", source: "Nextdoor" },
            ].map((t) => (
              <div key={t.author} className="rounded-xl border border-gray-200 p-6">
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-brand-black">{t.author}</p>
                  <p className="text-xs text-brand-text-light">via {t.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">Painting &amp; Remodeling Tips</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "How Much Does It Cost to Paint a House in Georgia?", excerpt: "A room-by-room breakdown of what Georgia homeowners actually pay for professional painting in 2026.", href: "/blog/cost-to-paint-house-georgia" },
              { title: "7 Questions to Ask Before Hiring a Painting Contractor", excerpt: "Protect yourself and your home with these essential questions every homeowner should ask.", href: "/blog/questions-to-ask-painting-contractor" },
              { title: "Best Time to Paint Your Home Exterior in Georgia", excerpt: "Spring, summer, or fall? Here is when Georgia weather gives you the best results.", href: "/blog/best-time-to-paint-exterior-georgia" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
                <div className="aspect-[16/9] bg-gray-200" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-gold">{post.title}</h3>
                  <p className="mt-2 text-sm text-brand-text-light">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-gold">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <div className="h-16 lg:hidden" />
    </>
  );
}
