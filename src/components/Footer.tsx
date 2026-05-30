"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceAreas = [
  { name: "Cumming", href: "/painting-cumming-ga" },
  { name: "Alpharetta", href: "/painting-alpharetta-ga" },
  { name: "Marietta", href: "/painting-marietta-ga" },
  { name: "Roswell", href: "/painting-roswell-ga" },
  { name: "Buford", href: "/painting-buford-ga" },
  { name: "Woodstock", href: "/painting-woodstock-ga" },
  { name: "Duluth", href: "/painting-duluth-ga" },
  { name: "Gainesville", href: "/painting-gainesville-ga" },
  { name: "Dacula", href: "/painting-dacula-ga" },
];

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-brand-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">PRO</span>{" "}
              <span className="text-brand-gold">ARAIZA</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">{t.footer.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-brand-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.serviceAreas}
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-sm transition hover:text-brand-gold"
                  >
                    {area.name}, GA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactUs}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:8434152437" className="transition hover:text-brand-gold">
                  (843) 415-2437
                </a>
              </li>
              <li>
                <a href="mailto:Proaraiza93@outlook.com" className="transition hover:text-brand-gold">
                  Proaraiza93@outlook.com
                </a>
              </li>
              <li>302A Bald Ridge Rd<br />Cumming, GA 30040</li>
              <li>Mon-Sun: 7:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p className="text-gray-400">
            Locally owned. Hispanic-owned. Family-run since 2016.
          </p>
          <p className="mt-3">
            &copy; {new Date().getFullYear()} PROARAIZA LLC Remodeling & Painting.{" "}
            {t.footer.rights}
          </p>
          <p className="mt-1">{t.footer.serving} · All work backed by our 2-year workmanship warranty.</p>
          <p className="mt-3">
            <Link href="/privacy-policy" className="transition hover:text-brand-gold">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
