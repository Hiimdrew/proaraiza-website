"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Interior Painting", href: "/interior-painting" },
  { name: "Exterior Painting", href: "/exterior-painting" },
  { name: "Cabinet Painting & Refinishing", href: "/cabinet-painting" },
  { name: "Remodeling & Drywall", href: "/remodeling" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", children: services },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight lg:text-2xl">
              <span className="text-white">PRO</span>{" "}
              <span className="text-brand-gold">ARAIZA</span>
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-300 transition hover:text-brand-gold"
                  >
                    {item.name}
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="w-64 rounded-lg bg-white p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-4 py-2.5 text-sm text-brand-text transition hover:bg-brand-gray"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-brand-gold"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href="tel:8434152437"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              (843) 415-2437
            </a>
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-black transition hover:bg-brand-copper"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-800 lg:hidden">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-gray-300"
                  >
                    {item.name}
                    <svg className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-gray-400 hover:text-brand-gold"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-300 hover:text-brand-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-gray-800">
              <a
                href="tel:8434152437"
                className="block py-2 text-sm font-medium text-brand-gold"
              >
                Call (843) 415-2437
              </a>
              <Link
                href="/contact"
                className="mt-2 block rounded-md bg-brand-gold px-5 py-2.5 text-center text-sm font-semibold text-brand-black"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
