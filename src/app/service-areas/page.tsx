import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Service Areas | Pro Araiza Painting",
  description:
    "Pro Araiza Remodeling & Painting serves North Metro Atlanta and takes project work across Georgia. Find your city for local pricing, neighborhoods, and answers.",
  alternates: { canonical: "https://www.proaraizapainting.com/service-areas" },
};

const GROUPS: { key: string; label: string; blurb: string }[] = [
  {
    key: "north-metro",
    label: "North Metro Atlanta",
    blurb:
      "Our home territory, all within about an hour of the Cumming shop. This is where we work every week.",
  },
  {
    key: "west-metro",
    label: "West Metro Atlanta",
    blurb: "Cobb County and the western suburbs. Regular work, no change in pricing for the drive.",
  },
  {
    key: "statewide",
    label: "Across Georgia",
    blurb:
      "We travel for larger projects and stay on site through the job. Better suited to full exteriors and whole-house work than single rooms.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block border-l-2 border-brand-gold pl-3 text-[15px] font-semibold uppercase tracking-[0.14em] text-brand-gold">
              Service areas
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Where Pro Araiza works
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              We are based in Cumming and most of our work is within an hour of the shop. Each city
              page below has real pricing ranges, the neighborhoods we work in, what the local
              housing stock actually needs, and answers to the questions homeowners there ask us
              most.
            </p>
          </div>
        </div>
      </section>

      {GROUPS.map((g, i) => {
        const cities = CITIES.filter((c) => c.region === g.key);
        if (cities.length === 0) return null;
        return (
          <section key={g.key} className={i % 2 === 1 ? "bg-brand-gray py-16 lg:py-20" : "py-16 lg:py-20"}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
                  {g.label}
                </h2>
                <p className="mt-4 text-brand-text">{g.blurb}</p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/painting-${c.slug}-ga`}
                    className="group border border-gray-200 bg-white p-6 transition hover:border-brand-gold"
                  >
                    <h3 className="text-lg font-semibold text-brand-black group-hover:text-brand-gold">
                      {c.name}, GA
                    </h3>
                    <p className="mt-1 text-sm text-brand-text-light">{c.county}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-text-light">{c.driveTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        headline="Do not see your city?"
        subtext="Call us anyway. If we can get there and do it right, we will tell you. If we cannot, we will say so."
      />
      <div className="h-16 lg:hidden" />
    </>
  );
}
