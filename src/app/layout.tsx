import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgressWrapper from "@/components/ScrollProgressWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pro Araiza Remodeling & Painting | Cumming, GA Painter",
    template: "%s | Pro Araiza Remodeling & Painting",
  },
  description:
    "Professional painting and remodeling in Cumming, GA. Interior, exterior, cabinet painting, and full remodeling. Fully insured, free estimates. Call (770) 624-0593.",
  metadataBase: new URL("https://proaraiza.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pro Araiza Remodeling & Painting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pro Araiza Remodeling & Painting",
  telephone: "(770) 624-0593",
  email: "Diangel23@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3419 Preston Pointe Way",
    addressLocality: "Cumming",
    addressRegion: "GA",
    postalCode: "30041",
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
    "Cumming", "Alpharetta", "Gainesville", "Buford",
    "Roswell", "Woodstock", "Duluth", "Suwanee",
    "Johns Creek", "Forsyth County",
  ],
  priceRange: "$$",
  url: "https://proaraiza.com",
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
        <ScrollProgressWrapper />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
