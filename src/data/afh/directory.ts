/**
 * Directory access layer for the adult family home data.
 *
 * Two rules hold this together:
 *
 * 1. The county index is small (~5 KB) and imported statically — the hub page
 *    needs it immediately. Individual city files are 20–150 KB and are loaded on
 *    demand, so opening the Kirkland directory never downloads Kent's 285 homes.
 *
 * 2. Filters are defined once, here. Every filter that appears in a URL, in
 *    navigation, or in a page heading comes from this list, so a filter can
 *    never exist in one place and not another.
 */

import countyIndexRaw from "./county-index.json";
import type { AFHFacility } from "./types";

export interface AFHCityIndexEntry {
  city: string;
  citySlug: string;
  county: string;
  facilityCount: number;
  totalBeds: number;
  behaviorSupport: number;
  developmentalDisabilities: number;
  privatePay: number;
  withReports: number;
}

export const countyIndex = countyIndexRaw as AFHCityIndexEntry[];

/* ------------------------------------------------------------------ */
/* Filters                                                             */
/* ------------------------------------------------------------------ */

/**
 * Only genuinely selective attributes become filters.
 *
 * Dementia (98% of King County homes) and Medicaid acceptance (92%) are
 * deliberately NOT filters. A "dementia care" page would return almost every
 * home in the city and duplicate the city page itself. Medicaid is inverted
 * instead: the scarce, meaningful segment is the 8% that are private-pay only.
 */
export interface AFHFilter {
  slug: string;
  /** Used in headings: "Adult family homes in Kent {label}" */
  label: string;
  /** Short explanation shown on the filtered page. Plain language, for families. */
  explanation: string;
  matches: (f: AFHFacility) => boolean;
}

export const AFH_FILTERS: AFHFilter[] = [
  {
    slug: "specialized-behavior-support",
    label: "with Specialized Behavior Support",
    explanation:
      "These homes hold a Specialized Behavior Support contract with DSHS, which covers residents whose behavioral needs require additional staff training and planning. Fewer than one home in six carries it, and placements for residents with significant behavioral needs are among the hardest to find.",
    matches: (f) => f.contracts.includes("specializedBehaviorSupport"),
  },
  {
    slug: "developmental-disabilities",
    label: "serving developmental disabilities",
    explanation:
      "These homes carry the DSHS developmental disabilities specialty designation, meaning the provider has completed the additional training the state requires to serve residents with developmental disabilities.",
    matches: (f) => f.specialties.includes("developmentalDisabilities"),
  },
  {
    slug: "expanded-community-services",
    label: "with Expanded Community Services",
    explanation:
      "An Expanded Community Services contract covers residents transitioning from psychiatric hospitalization or with higher behavioral health needs, at an enhanced rate that funds the extra support required.",
    matches: (f) => f.contracts.includes("expandedCommunityServices"),
  },
  {
    slug: "private-pay",
    label: "that are private pay only",
    explanation:
      "These homes hold no DSHS contract and cannot accept Medicaid. Residents pay privately. They are a small share of the market and are worth identifying early, because a home that cannot accept Medicaid becomes a problem if a resident later spends down their assets.",
    matches: (f) => !f.acceptsMedicaid,
  },
  {
    slug: "more-than-six-beds",
    label: "licensed for more than six residents",
    explanation:
      "Washington licenses most adult family homes for a maximum of six residents. DSHS grants capacity above six only to providers who meet additional requirements, so these are typically longer-established operators.",
    matches: (f) => f.licensedBeds > 6,
  },
];

const FILTER_BY_SLUG = new Map(AFH_FILTERS.map((f) => [f.slug, f]));

export const getFilter = (slug: string | undefined): AFHFilter | null =>
  slug ? FILTER_BY_SLUG.get(slug) ?? null : null;

/**
 * Resolve the second URL segment under /afh-club/homes/:citySlug/.
 *
 * Facility slugs always end in the DSHS license number, so they end in digits;
 * filter slugs never do. That makes the two unambiguous without a extra path
 * segment cluttering the URL.
 */
export const isFilterSlug = (slug: string): boolean => FILTER_BY_SLUG.has(slug);

/* ------------------------------------------------------------------ */
/* City loading                                                        */
/* ------------------------------------------------------------------ */

const cityLoaders = import.meta.glob<{ default: AFHFacility[] }>("./cities/*.json");
const cache = new Map<string, AFHFacility[]>();

export const cityExists = (citySlug: string): boolean =>
  countyIndex.some((c) => c.citySlug === citySlug);

export const getCityIndexEntry = (citySlug: string): AFHCityIndexEntry | null =>
  countyIndex.find((c) => c.citySlug === citySlug) ?? null;

/**
 * Load one city's facilities. Resolves to an empty array for an unknown city so
 * callers can render a "not found" state rather than handling a rejection.
 */
export async function loadCity(citySlug: string): Promise<AFHFacility[]> {
  const cached = cache.get(citySlug);
  if (cached) return cached;

  const loader = cityLoaders[`./cities/${citySlug}.json`];
  if (!loader) return [];

  const mod = await loader();
  const list = mod.default;
  cache.set(citySlug, list);
  return list;
}

/** Find one facility by its slug within a city. */
export async function loadFacility(
  citySlug: string,
  facilitySlug: string,
): Promise<AFHFacility | null> {
  const list = await loadCity(citySlug);
  return list.find((f) => f.slug === facilitySlug) ?? null;
}
