/**
 * Title, description and heading for the statewide listings pages
 * (/afh-club/listings and its three typed views), in ONE place (Oct 19, 2026).
 *
 * Before this, the prerendered HTML (vite.config.ts) and the live React page
 * (AFHListings.tsx) said different things: the live page's heading was
 * "Adult Family Home Listings" and its title had no count. Google reads the
 * live page, so it saw a page that never said "for sale" in its heading.
 * Both now call listingsPageMeta().
 *
 * Search Console, Sept 20 – Oct 17, 2026: "adult family home for sale",
 * "afh for sale", "afh for sale in washington state" and "adult family home
 * business for sale" sat at positions 8–43, and were often matched to
 * directory pages (Bothell, the AFH Club home page) instead of the listings.
 * Hence "(AFH)" in the title — people search the abbreviation — and the
 * properties view no longer shares the main page's title wording.
 *
 * Browser-safe: imports only afhListings.ts.
 */
import { afhListings, isLive, type AFHListingType } from "./afhListings";

export type ListingsView = "all" | AFHListingType;

export interface ListingCounts {
  live: number;
  active: number;
  pending: number;
  cities: number;
  sold: number;
}

/** Same rule as the pages: live = active or pending; sold = closed sales. */
export function listingCounts(type?: AFHListingType, city?: string): ListingCounts {
  const match = (l: (typeof afhListings)[number]) =>
    (!type || l.listingType === type) && (!city || l.city.toLowerCase() === city.toLowerCase());
  const live = afhListings.filter((l) => isLive(l) && match(l));
  return {
    live: live.length,
    active: live.filter((l) => l.marketStatus === "active").length,
    pending: live.filter((l) => l.marketStatus === "pending").length,
    cities: new Set(live.map((l) => l.city.toLowerCase())).size,
    sold: afhListings.filter((l) => l.marketStatus === "sold" && match(l)).length,
  };
}

/** "37 " — or nothing at all when there are none, so a title never says "0 … for sale". */
const lead = (n: number) => (n > 0 ? `${n} ` : "");

export function listingsPageMeta(view: ListingsView): { title: string; description: string; h1: string } {
  const c = listingCounts(view === "all" ? undefined : view);
  switch (view) {
    case "all":
      return {
        title: `${lead(c.live)}Adult Family Homes (AFH) for Sale in Washington State | AFH Club`,
        description: `${c.live} adult family homes for sale in Washington right now (${c.active} active, ${c.pending} pending, in ${c.cities} cities), plus ${c.sold} closed sales with prices. AFH houses, operating AFH businesses and leases from NWMLS, RMLS, BizBuySell and owners, with licensing status and price per bed.`,
        h1: "Adult Family Homes for Sale in Washington State",
      };
    case "realEstate":
      return {
        title: `${lead(c.live)}AFH Houses for Sale in Washington: Licensed & AFH-Ready Real Estate | AFH Club`,
        description:
          "The real estate only: houses for sale in Washington that are operating adult family homes, formerly licensed, WABO-ready, or marketed for AFH use, with price, capacity, licensing status and listing broker.",
        h1: "Adult Family Home Properties for Sale",
      };
    case "business":
      return {
        title: `${lead(c.live)}Adult Family Home Businesses for Sale in Washington | AFH Club`,
        description:
          "Operating adult family home businesses for sale in Washington State: the residents, staff and contracts, sold separately from, or together with, the real estate.",
        h1: "Adult Family Home Businesses for Sale",
      };
    case "lease":
      return {
        title: "Adult Family Homes for Lease in Washington | AFH Club",
        description:
          "Licensed and AFH-ready houses available for lease to adult family home operators in Washington State, with monthly rent, term and licensing status.",
        h1: "Adult Family Homes for Lease",
      };
  }
}
