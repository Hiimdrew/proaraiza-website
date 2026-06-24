import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgressWrapper from "@/components/ScrollProgressWrapper";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pro Araiza Remodeling & Painting | Owner-Led Painting for North Atlanta",
    template: "%s | Pro Araiza Remodeling & Painting",
  },
  description:
    "Owner-led, high-end painting and remodeling for North Atlanta's finest homes. 10 years, 250+ projects, 2-year workmanship warranty. Fully insured. Sherwin-Williams & Benjamin Moore. Call (843) 415-2437.",
  metadataBase: new URL("https://www.proaraizapainting.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pro Araiza Remodeling & Painting",
    title: "Pro Araiza Remodeling & Painting | Owner-Led Painting for North Atlanta",
    description:
      "Owner-led, high-end painting for North Atlanta's finest homes. 10 years, 250+ projects, 2-year workmanship warranty. Call (843) 415-2437.",
    url: "https://www.proaraizapainting.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Araiza Remodeling & Painting | Owner-Led Painting for North Atlanta",
    description:
      "Owner-led, high-end painting and remodeling. 10 years, 250+ projects, fully insured, 2-year warranty.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pro Araiza Remodeling & Painting",
  legalName: "PROARAIZA LLC REMODELING & PAINTING",
  founder: {
    "@type": "Person",
    name: "Joaquin Araiza",
  },
  foundingDate: "2016",
  telephone: "(843) 415-2437",
  email: "Proaraiza93@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "302A Bald Ridge Rd",
    addressLocality: "Cumming",
    addressRegion: "GA",
    postalCode: "30040",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "34.2073",
    longitude: "-84.1402",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
  areaServed: [
    "Cumming", "Alpharetta", "Marietta", "Roswell",
    "Buford", "Woodstock", "Duluth", "Gainesville",
    "Dacula", "Suwanee", "Johns Creek",
    "Forsyth County", "North Atlanta",
  ],
  priceRange: "$$$",
  url: "https://www.proaraizapainting.com",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting & Remodeling Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cabinet Painting & Refinishing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck Staining" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodeling & Drywall" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting" } },
    ],
  },
  makesOffer: {
    "@type": "Offer",
    description: "2-year workmanship warranty on all painting and remodeling work",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Providers>
          <ScrollProgressWrapper />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyBar />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
