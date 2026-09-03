import { outer } from "./city-data/outer";
import { forsythNorthFulton } from "./city-data/forsyth-north-fulton";
import { northFulton } from "./city-data/north-fulton";
import { gwinnett } from "./city-data/gwinnett";
import { cobbCherokee } from "./city-data/cobb-cherokee";
import { hallNortheast } from "./city-data/hall-northeast";
import { gwinnettFultonTwo } from "./city-data/gwinnett-fulton-two";
import { intownWest } from "./city-data/intown-west";
import { statewide } from "./city-data/statewide";

// Central data model for every local-SEO city page.
//
// Depth is the whole point: answer engines (and Google) reward pages that carry
// specific, verifiable local detail over pages that swap a city name into a
// template. Every field below exists to be genuinely different per city.

export interface CityPricing {
  service: string;
  range: string;
  note: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  /** URL slug, without the /painting- prefix or -ga suffix. */
  slug: string;
  name: string;
  county: string;
  /** Metro grouping, drives the "nearby" internal-link block. */
  region: "north-metro" | "west-metro" | "east-metro" | "statewide";
  /** Drive time from the Cumming shop, written for humans. */
  driveTime: string;
  /** Meta title, under 60 chars. */
  title: string;
  /** Meta description, 150-160 chars. */
  description: string;
  /** The AEO direct-answer paragraph. First thing on the page after the H1. */
  answer: string;
  /** Long-form local intro. Specific streets, landmarks, builders, eras. */
  intro: string;
  /** Housing stock: what the homes are actually made of and built like here. */
  housingStock: { heading: string; body: string }[];
  /** Local conditions that change how paint behaves or fails. */
  conditions: string;
  /** Neighborhoods and subdivisions, each with a real reason it is listed. */
  neighborhoods: { name: string; note: string }[];
  pricing: CityPricing[];
  faqs: CityFaq[];
  /** Slugs of nearby cities for internal linking. */
  nearby: string[];
  /** Hero image path + alt. */
  image: { src: string; alt: string };
}

export const CITIES: City[] = [
  ...forsythNorthFulton,
  ...northFulton,
  ...gwinnett,
  ...cobbCherokee,
  ...hallNortheast,
  ...gwinnettFultonTwo,
  ...intownWest,
  ...statewide,
  ...outer,
].sort((a, b) => a.name.localeCompare(b.name));

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function nearbyCities(city: City): City[] {
  return city.nearby
    .map((s) => getCity(s))
    .filter((c): c is City => Boolean(c));
}

export const CITY_SLUGS = () => CITIES.map((c) => c.slug);
