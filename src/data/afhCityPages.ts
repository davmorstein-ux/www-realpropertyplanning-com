/**
 * The /afh-club/for-sale/<slug> city pages, in one place.
 *
 * Used by the React city hub (nearby links, notify-me), the listing detail
 * page (breadcrumb), vite.config.ts (prerender routing), and the prerender
 * itself. Adding a city page means: add it here, add the ROUTE_METADATA entry
 * in vite.config.ts, add the page component and route, and add it to the
 * sitemap and site search index.
 *
 * `nearby` lists other city pages a buyer in this market would also look at.
 * Only slugs that exist in this list may appear. Keep to real neighbours —
 * a page that calls Spokane "near" Kennewick is the thing we are not doing.
 */
export interface AFHCityPage {
  city: string;
  slug: string;
  county: string;
  nearby: string[];
}

export const AFH_CITY_PAGES: AFHCityPage[] = [
  { city: "Seattle", slug: "seattle-wa", county: "King", nearby: ["bellevue-wa", "renton-wa", "kirkland-wa", "edmonds-wa", "lynnwood-wa"] },
  { city: "Bellevue", slug: "bellevue-wa", county: "King", nearby: ["kirkland-wa", "seattle-wa", "renton-wa"] },
  { city: "Kirkland", slug: "kirkland-wa", county: "King", nearby: ["bellevue-wa", "seattle-wa", "lynnwood-wa", "edmonds-wa"] },
  { city: "Renton", slug: "renton-wa", county: "King", nearby: ["kent-wa", "seattle-wa", "bellevue-wa", "federal-way-wa"] },
  { city: "Kent", slug: "kent-wa", county: "King", nearby: ["renton-wa", "auburn-wa", "federal-way-wa", "seattle-wa"] },
  { city: "Auburn", slug: "auburn-wa", county: "King", nearby: ["kent-wa", "federal-way-wa", "puyallup-wa", "renton-wa"] },
  { city: "Federal Way", slug: "federal-way-wa", county: "King", nearby: ["kent-wa", "auburn-wa", "tacoma-wa", "lakewood-wa"] },
  { city: "Tacoma", slug: "tacoma-wa", county: "Pierce", nearby: ["lakewood-wa", "puyallup-wa", "federal-way-wa", "auburn-wa"] },
  { city: "Lakewood", slug: "lakewood-wa", county: "Pierce", nearby: ["tacoma-wa", "puyallup-wa", "federal-way-wa"] },
  { city: "Puyallup", slug: "puyallup-wa", county: "Pierce", nearby: ["tacoma-wa", "bonney-lake-wa", "auburn-wa", "lakewood-wa"] },
  { city: "Bonney Lake", slug: "bonney-lake-wa", county: "Pierce", nearby: ["puyallup-wa", "auburn-wa", "tacoma-wa"] },
  { city: "Edmonds", slug: "edmonds-wa", county: "Snohomish", nearby: ["lynnwood-wa", "mukilteo-wa", "everett-wa", "seattle-wa"] },
  { city: "Lynnwood", slug: "lynnwood-wa", county: "Snohomish", nearby: ["edmonds-wa", "mukilteo-wa", "everett-wa", "kirkland-wa"] },
  { city: "Mukilteo", slug: "mukilteo-wa", county: "Snohomish", nearby: ["everett-wa", "lynnwood-wa", "edmonds-wa", "marysville-wa"] },
  { city: "Everett", slug: "everett-wa", county: "Snohomish", nearby: ["mukilteo-wa", "marysville-wa", "lynnwood-wa", "edmonds-wa"] },
  { city: "Marysville", slug: "marysville-wa", county: "Snohomish", nearby: ["everett-wa", "mukilteo-wa", "lynnwood-wa"] },
  { city: "Kennewick", slug: "kennewick-wa", county: "Benton", nearby: [] },
];

export const cityPageBySlug = (slug: string): AFHCityPage | undefined => AFH_CITY_PAGES.find((c) => c.slug === slug);

export const cityPageByCity = (city: string): AFHCityPage | undefined =>
  AFH_CITY_PAGES.find((c) => c.city.toLowerCase() === city.trim().toLowerCase());

/** Map of lower-case city name → route, for prerender routing. */
export const cityRoutes = (): Record<string, string> =>
  Object.fromEntries(AFH_CITY_PAGES.map((c) => [c.city.toLowerCase(), `/afh-club/for-sale/${c.slug}`]));
