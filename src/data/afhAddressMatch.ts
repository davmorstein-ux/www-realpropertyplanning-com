/**
 * Matches for-sale/sold listings (afhListings.ts) to DSHS licensing records by
 * street address. Shared by the React pages and the build-time prerender, so
 * it must stay free of Node and Vite imports.
 *
 * Addresses come from two different systems (NWMLS and the DSHS locator) and
 * differ in case, suffix spelling, and directionals ("Ave" vs "Avenue",
 * "SE" vs "Se"). Both sides are normalised to "number + street tokens" before
 * comparing; undisclosed listings never match.
 */
import { afhListings, type AFHListing } from "./afhListings";

const SUFFIX: Record<string, string> = {
  avenue: "ave", av: "ave", street: "st", drive: "dr", road: "rd", place: "pl", court: "ct", lane: "ln",
  boulevard: "blvd", way: "wy", circle: "cir", terrace: "ter", parkway: "pkwy", highway: "hwy",
};

export const normalizeStreet = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[.,#]/g, " ")
    .replace(/\b(unit|apt|ste|suite)\b.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => SUFFIX[t] ?? t)
    .join(" ")
    .trim();

export const isUndisclosed = (address: string) => /upon request|undisclosed/i.test(address);

export interface FacilityLike {
  displayName: string;
  slug: string;
  licensedBeds: number;
  address: { street: string; city: string; citySlug: string };
}

/** Listings (any status) at the same street address and city as a licensed home. */
export const listingsForFacility = (f: FacilityLike): AFHListing[] => {
  const key = normalizeStreet(f.address.street);
  const city = f.address.city.toLowerCase();
  return afhListings
    .filter((l) => !isUndisclosed(l.address) && l.city.toLowerCase() === city && normalizeStreet(l.address) === key)
    .sort((a, b) => (b.soldDate ?? b.statusChanged ?? b.lastVerified).localeCompare(a.soldDate ?? a.statusChanged ?? a.lastVerified));
};

/** The licensed home, if any, at a listing's address. */
export const facilityForListing = <F extends FacilityLike>(l: AFHListing, facilities: F[]): F | undefined => {
  if (isUndisclosed(l.address)) return undefined;
  const key = normalizeStreet(l.address);
  const city = l.city.toLowerCase();
  return facilities.find((f) => f.address.city.toLowerCase() === city && normalizeStreet(f.address.street) === key);
};
