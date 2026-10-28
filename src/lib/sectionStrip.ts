/**
 * Section strip (owner's idea, Oct 28, 2026): under the site menu on a page that
 * a dropdown links to, a row of every topic in that same dropdown, so a visitor
 * can move between related topics without going back up to the menu. The
 * current page is shown highlighted rather than left out, so the row never
 * changes shape from page to page and doubles as a "you are here" marker.
 *
 * Owner's decisions (Oct 28, 2026, from the canvas mock-up):
 * - Charcoal, one colour for every strip (not each menu's own colour; the site
 *   already has too much blue). Text-only pills, no icons or arrows.
 * - Topic menus only: Estate & Probate, Senior Transitions, Find a Professional,
 *   Guides & Tools. Not About. AFH Club already has its own quick-links bar
 *   (src/components/AFHClubQuickLinks.tsx), so no strip on any AFH Club page.
 * - Long menus (Find a Professional, 14 items) may run to two rows on a laptop.
 * - A page listed in two menus belongs to the first strip-bearing menu in
 *   PRIMARY_NAV order: "How the Process Works" shows Estate & Probate (About has
 *   no strip); the AFH directory is an AFH Club page and shows that bar instead.
 *
 * The topics come from src/lib/primaryNav.ts, so a page added to a dropdown
 * appears in its strip automatically. Only the shorter strip labels live here
 * (the full dropdown names do not fit on one row); a topic without a short
 * label shows its dropdown name.
 */
import { PRIMARY_NAV } from "@/lib/primaryNav";
import { isAFHClubPath } from "@/lib/afhQuickLinks";

/** Menus that get a strip, by the menu button's own href. */
export const STRIP_MENUS = ["/probate-estate-sales", "/senior-transitions", "/featured-professionals", "/guides-and-resources"];

/** Short labels for the strip, by page href. */
export const STRIP_LABELS: Record<string, string> = {
  // Estate & Probate
  "/washington-probate-guide": "Probate Guide",
  "/executors": "Executors",
  "/trustees": "Trustees",
  "/selling-an-inherited-home": "Inherited Homes",
  "/date-of-death-valuation-property-appraisals": "Valuations",
  "/how-the-process-works": "How It Works",
  // Senior Transitions
  "/understanding-housing-care-options": "Housing & Care Options",
  "/cost-of-care-calculator": "Cost of Care",
  "/aging-in-place-staying-home-safely": "Aging in Place",
  "/downsizing-preparing-for-transition": "Downsizing",
  // Find a Professional
  "/featured-professionals": "All Professionals",
  "/for-probate-attorneys": "Probate Attorneys",
  "/legal-plans-identity-protection": "Legal Plans",
  "/real-estate-appraiser": "Appraisers",
  "/realtor": "Brokers",
  "/for-cpas": "CPAs",
  // Guides & Tools
  "/guides-and-resources": "All Guides",
  "/calculators": "Calculators",
  "/whats-my-remodel-worth": "Remodel Value",
  "/articles": "Articles",
  "/articles/wills-trusts-other-options": "Wills & Trusts",
};

export interface StripLink {
  label: string;
  href: string;
  current: boolean;
}
export interface SectionStrip {
  heading: string;
  links: StripLink[];
}

const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

/** The strip for a page, or null when the page is in none of the strip menus. */
export const sectionStripFor = (pathname: string): SectionStrip | null => {
  const path = clean(pathname);
  if (isAFHClubPath(path)) return null;
  for (const menu of PRIMARY_NAV) {
    if (!STRIP_MENUS.includes(menu.href) || !menu.items) continue;
    // Anchor links (e.g. /newsletter#afh) point into another page; leave them out.
    // AFH Club pages stay as links (the AFH directory is a Senior Transitions topic)
    // but never show this strip themselves (checked above).
    const items = menu.items.filter((i) => !i.href.includes("#"));
    if (!items.some((i) => i.href === path)) continue;
    return {
      heading: menu.lines.join(" ").replace(/\s+/g, " "),
      links: items.map((i) => ({ label: STRIP_LABELS[i.href] ?? i.name, href: i.href, current: i.href === path })),
    };
  }
  return null;
};
