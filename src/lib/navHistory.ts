/**
 * The page the visitor was on just before this one, inside the site (Sept 29, 2026).
 *
 * Kept in memory only: nothing is written to cookies or browser storage, so the
 * privacy page's list of what the site stores does not change. It resets on a
 * full page load, which is exactly when there is no in-site "previous page".
 * Recorded by ScrollToTop on every route change; read by BackToPreviousPage.
 */

export interface PreviousPage {
  path: string;
  title: string;
}

let previous: PreviousPage | null = null;

/** Page titles end in " | Real Property Planning" or " | AFH Club"; keep the name part. */
const cleanTitle = (t: string) => t.split(" | ")[0].trim();

export function recordPreviousPage(path: string, title: string) {
  previous = { path, title: cleanTitle(title) };
}

export function getPreviousPage(): PreviousPage | null {
  return previous;
}
