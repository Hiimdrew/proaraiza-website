"use client";

import Image from "next/image";
import Link from "next/link";
import CTABanner from "./CTABanner";
import { useLanguage } from "@/i18n/LanguageContext";

interface CityPageProps {
  city: string;
  intro: string;
  introEs?: string;
  neighborhoods: string[];
  faqs: { q: string; a: string; qEs?: string; aEs?: string }[];
  image?: { src: string; alt: string };
}

export default function CityPageTemplate({ city, intro, introEs, neighborhoods, faqs, image }: CityPageProps) {
  const { t, locale } = useLanguage();

  const displayIntro = locale === "es" && introEs ? introEs : intro;

  const services = [
    { name: locale === "es" ? t.nav.interiorPainting : "Interior Painting", href: "/interior-painting", description: t.city.interiorDesc },
    { name: locale === "es" ? t.nav.exteriorPainting : "Exterior Painting", href: "/exterior-painting", description: t.city.exteriorDesc },
    { name: locale === "es" ? t.nav.cabinetPainting : "Cabinet Painting & Refinishing", href: "/cabinet-painting", description: t.city.cabinetDesc },
    { name: locale === "es" ? t.nav.remodeling : "Remodeling & Drywall", href: "/remodeling", description: t.city.remodelingDesc },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t.city.heroTitle} {city}, GA
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              {t.city.trustedBy} {city} {t.city.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-md bg-brand-gold px-8 py-3.5 text-center text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
              >
                {t.city.getQuote}
              </Link>
              <a
                href="tel:8434152437"
                className="rounded-md border border-gray-600 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
              >
                {t.city.call} (843) 415-2437
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                {t.city.localPainter} {city}, GA
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">{displayIntro}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
                >
                  {t.city.getEstimate}
                </Link>
              </div>
            </div>
            {image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-xl bg-brand-gray" />
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            {t.city.servicesTitle} {city}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-gold">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-brand-text-light">{service.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-brand-gold">
                  {t.city.learnMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            {t.city.neighborhoodsTitle} {city}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="rounded-full bg-brand-gray px-4 py-2 text-sm font-medium text-brand-black"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
            {t.city.faqTitle}
          </h2>
          <div className="mt-10 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-lg font-semibold text-brand-black">
                  {locale === "es" && faq.qEs ? faq.qEs : faq.q}
                </h3>
                <p className="mt-2 text-brand-text-light">
                  {locale === "es" && faq.aEs ? faq.aEs : faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`${t.city.readyTitle} ${city}${t.city.readyTitleSuffix}`}
        subtext={t.city.readySubtext}
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
