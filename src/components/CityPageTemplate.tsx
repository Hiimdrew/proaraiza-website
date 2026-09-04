"use client";

import Image from "next/image";
import Link from "next/link";
import CTABanner from "./CTABanner";
import InlineCTA from "./InlineCTA";
import type { City } from "@/lib/cities";
import { nearbyCities } from "@/lib/cities";

const PHONE_DISPLAY = "(843) 415-2437";
const PHONE_HREF = "tel:8434152437";
const BASE = "https://www.proaraizapainting.com";

function Eyebrow({ children }: { children: React.ReactNode }) {
  // Ruled eyebrow, not a pill badge. 15px / 600 is the legibility floor
  // for tracked uppercase labels.
  return (
    <span className="inline-block border-l-2 border-brand-gold pl-3 text-[15px] font-semibold uppercase tracking-[0.14em] text-brand-gold">
      {children}
    </span>
  );
}

export default function CityPageTemplate({ city }: { city: City }) {
  const nearby = nearbyCities(city);
  const url = `${BASE}/painting-${city.slug}-ga`;

  const services = [
    { name: "Interior Painting", href: "/interior-painting" },
    { name: "Exterior Painting", href: "/exterior-painting" },
    { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting" },
    { name: "Deck Staining", href: "/deck-staining" },
    { name: "Remodeling & Drywall", href: "/remodeling" },
    { name: "Commercial", href: "/commercial" },
  ];

  // Answer-engine + local-pack structured data.
  //
  // The graph resolves "painter in {city}" to one business with one set of
  // verifiable facts, and pins it geographically. GeoCoordinates and a
  // GeoCircle service area are what local ranking and AI geo attribution
  // actually read; a Service with no geometry is invisible to both.
  const BUSINESS = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BASE}/#business`,
    name: "Pro Araiza Remodeling & Painting",
    alternateName: "Pro Araiza Painting",
    founder: { "@type": "Person", name: "Joaquin Araiza" },
    telephone: "+1-843-415-2437",
    email: "Joaquin@proaraizapainting.com",
    url: BASE,
    image: `${BASE}/images/pa-logo-full.png`,
    logo: `${BASE}/images/pa-logo-full.png`,
    priceRange: "$$$",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      streetAddress: "302A Bald Ridge Rd",
      addressLocality: "Cumming",
      addressRegion: "GA",
      postalCode: "30040",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 34.2073, longitude: -84.1402 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Painter in ${city.name}, GA`,
        description: city.answer,
        isPartOf: { "@id": `${BASE}/#website` },
        about: { "@id": `${url}#service` },
        primaryImageOfPage: `${BASE}${city.image.src}`,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        // Voice assistants read this block first.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "[data-speakable]"],
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `House Painting in ${city.name}, GA`,
        serviceType: "Painting Contractor",
        description: city.answer,
        provider: {
          ...BUSINESS,
          // The radius the business will actually travel for this market.
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: city.coords.lat,
              longitude: city.coords.lng,
            },
            geoRadius: city.region === "statewide" ? "80000" : "40000",
          },
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          "@id": `${url}#place`,
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.coords.lat,
            longitude: city.coords.lng,
          },
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.county,
            containedInPlace: { "@type": "State", name: "Georgia" },
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Painting services in ${city.name}`,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, serviceType: s.name },
            areaServed: { "@type": "City", name: city.name },
          })),
        },
        // Pricing surfaced as data, not just as a table an engine has to parse.
        offers: city.pricing.map((p) => ({
          "@type": "Offer",
          name: p.service,
          description: p.note,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: p.range,
          },
          areaServed: { "@type": "City", name: city.name },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: city.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE}/service-areas` },
          { "@type": "ListItem", position: 3, name: `${city.name}, GA`, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero with a city-specific image behind it */}
      <section className="relative isolate overflow-hidden bg-brand-black">
        <Image
          src={city.image.src}
          alt={city.image.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-brand-gold">Home</Link>
            <span className="px-2">/</span>
            <Link href="/service-areas" className="hover:text-brand-gold">Service Areas</Link>
            <span className="px-2">/</span>
            <span className="text-gray-300">{city.name}</span>
          </nav>
          <div className="max-w-3xl">
            <Eyebrow>{city.county}</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Painter in {city.name}, GA
            </h1>
            <p data-speakable className="mt-6 text-lg leading-relaxed text-gray-300">{city.answer}</p>
            <p className="mt-4 text-sm text-gray-400">{city.driveTime}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                Get a Free Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="rounded-md border border-gray-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Local knowledge</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              Painting {city.name} homes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-text">{city.intro}</p>
          </div>
        </div>
      </section>

      {/* Housing stock: the depth that makes this page worth citing */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>What we work on</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              The homes in {city.name}
            </h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {city.housingStock.map((h) => (
              <div key={h.heading} className="border-t-2 border-brand-black/10 pt-6">
                <h3 className="text-xl font-semibold text-brand-black">{h.heading}</h3>
                <p className="mt-3 leading-relaxed text-brand-text">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local conditions */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Local conditions</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              What the weather here does to paint
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-text">{city.conditions}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Straight pricing</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              What painting costs in {city.name}
            </h2>
            <p className="mt-5 text-gray-400">
              Real ranges, not a lead-capture teaser. Every estimate we give is written and itemized
              so you can see what the prep is costing you separately from the paint.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 pr-6 text-[15px] font-semibold uppercase tracking-[0.14em] text-brand-gold">Service</th>
                  <th className="py-4 pr-6 text-[15px] font-semibold uppercase tracking-[0.14em] text-brand-gold">Typical range</th>
                  <th className="py-4 text-[15px] font-semibold uppercase tracking-[0.14em] text-brand-gold">What drives it</th>
                </tr>
              </thead>
              <tbody>
                {city.pricing.map((p) => (
                  <tr key={p.service} className="border-b border-white/10">
                    <td className="py-5 pr-6 font-semibold text-white">{p.service}</td>
                    <td className="py-5 pr-6 font-semibold tabular-nums text-brand-gold">{p.range}</td>
                    <td className="py-5 text-sm leading-relaxed text-gray-400">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              What we do in {city.name}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between border border-gray-200 bg-white p-6 transition hover:border-brand-gold"
              >
                <span className="font-semibold text-brand-black group-hover:text-brand-gold">{s.name}</span>
                <span aria-hidden="true" className="text-brand-gold">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods, with a real reason each one is listed */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              {city.name} neighborhoods
            </h2>
          </div>
          <dl className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {city.neighborhoods.map((n) => (
              <div key={n.name} className="border-b border-brand-black/10 pb-5">
                <dt className="font-semibold text-brand-black">{n.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-brand-text-light">{n.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-black text-balance sm:text-4xl">
              Painting in {city.name}, answered
            </h2>
          </div>
          <div className="mt-10 max-w-3xl divide-y divide-gray-200">
            {city.faqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-lg font-semibold text-brand-black">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-brand-text">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineCTA
        variant="dark"
        headline={`Have more questions about your ${city.name} project?`}
        subtext="We answer texts, calls, and emails within a few hours, seven days a week."
      />

      {/* Nearby cities: internal linking across the local-SEO cluster */}
      {nearby.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Eyebrow>Nearby</Eyebrow>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
                We also work in
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/painting-${n.slug}-ga`}
                  className="font-semibold text-brand-black underline decoration-brand-gold decoration-2 underline-offset-4 transition hover:text-brand-gold"
                >
                  {n.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="font-semibold text-brand-text-light underline decoration-gray-300 decoration-2 underline-offset-4 transition hover:text-brand-gold"
              >
                All service areas
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline={`Ready to get your ${city.name} project started?`}
        subtext="Free written estimate, itemized, with no pressure attached."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
