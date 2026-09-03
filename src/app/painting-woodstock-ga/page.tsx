import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageTemplate from "@/components/CityPageTemplate";
import { getCity } from "@/lib/cities";

const SLUG = "woodstock";
const city = getCity(SLUG);

export const metadata: Metadata = city
  ? {
      title: city.title,
      description: city.description,
      alternates: { canonical: `https://www.proaraizapainting.com/painting-${SLUG}-ga` },
      openGraph: {
        title: city.title,
        description: city.description,
        url: `https://www.proaraizapainting.com/painting-${SLUG}-ga`,
        type: "website",
      },
    }
  : {};

export default function Page() {
  if (!city) notFound();
  return <CityPageTemplate city={city} />;
}
