import { isFilterSlug } from "../data/afh/directory";

/**
 * The city slug when a path is a city directory page that renders the city's
 * full list (/afh-club/homes/<city> or /afh-club/homes/<city>/<filter>), else
 * null. The build loads that city's data before rendering such a page to HTML,
 * and main.tsx loads it before hydrating, so the page appears whole and does
 * not jump (Oct 7, 2026). Facility pages and county pages are not included.
 */
export function cityDataSlug(pathname: string): string | null {
  const m = pathname.replace(/\/+$/, "").match(/^\/afh-club\/homes\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/);
  if (!m) return null;
  const [, city, segment] = m;
  if (city === "county") return null;
  if (segment && !isFilterSlug(segment)) return null;
  return city;
}
