import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const serviceAreas = [
  { name: "Cumming", href: "/painting-cumming-ga" },
  { name: "Alpharetta", href: "/painting-alpharetta-ga" },
  { name: "Gainesville", href: "/painting-gainesville-ga" },
  { name: "Buford", href: "/painting-buford-ga" },
  { name: "Roswell", href: "/painting-roswell-ga" },
  { name: "Woodstock", href: "/painting-woodstock-ga" },
  { name: "Duluth", href: "/painting-duluth-ga" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">PRO</span>{" "}
              <span className="text-brand-gold">ARAIZA</span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Remodeling & Painting</p>
            <p className="mt-4 text-sm leading-relaxed">
              Professional painting and remodeling services for homeowners in
              Cumming, GA and the North Atlanta suburbs. Fully insured, free
              estimates.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
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
              Service Areas
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
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:7706240593" className="transition hover:text-brand-gold">
                  (770) 624-0593
                </a>
              </li>
              <li>
                <a href="mailto:Diangel23@hotmail.com" className="transition hover:text-brand-gold">
                  Diangel23@hotmail.com
                </a>
              </li>
              <li>3419 Preston Pointe Way<br />Cumming, GA 30041</li>
              <li>Mon-Sun: 7:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Pro Araiza Remodeling & Painting.
            All rights reserved.
          </p>
          <p className="mt-1">
            Proudly serving Forsyth County and the North Atlanta suburbs.
          </p>
        </div>
      </div>
    </footer>
  );
}
