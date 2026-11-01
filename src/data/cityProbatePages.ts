/**
 * The city probate & estate real estate pages (one list, Nov 1, 2026).
 *
 * Read by the site map and by the county pages, which link each city name
 * that has its own page. Before this the city pages were linked only from the
 * site map, so visitors on a county page never found them. `city` must match
 * the name as written in that county page's `cities` list.
 */
export interface CityProbatePage {
  city: string;
  title: string;
  href: string;
  countySlug: string;
}

export const CITY_PROBATE_PAGES: CityProbatePage[] = [
  { city: "Seattle", title: "Seattle", href: "/seattle-probate-estate-real-estate", countySlug: "king-county" },
  { city: "Bellevue", title: "Bellevue", href: "/bellevue-probate-estate-real-estate", countySlug: "king-county" },
  { city: "Tacoma", title: "Tacoma", href: "/tacoma-probate-estate-real-estate", countySlug: "pierce-county" },
  { city: "Everett", title: "Everett", href: "/everett-probate-estate-real-estate", countySlug: "snohomish-county" },
  { city: "Olympia", title: "Olympia", href: "/olympia-probate-estate-real-estate", countySlug: "thurston-county" },
  { city: "Bellingham", title: "Bellingham", href: "/bellingham-probate-estate-real-estate", countySlug: "whatcom-county" },
  { city: "Spokane", title: "Spokane", href: "/spokane-probate-estate-real-estate", countySlug: "spokane-county" },
  { city: "Vancouver", title: "Vancouver, WA", href: "/vancouver-wa-probate-estate-real-estate", countySlug: "clark-county" },
];

export const cityPagesForCounty = (countySlug: string) => CITY_PROBATE_PAGES.filter((c) => c.countySlug === countySlug);
