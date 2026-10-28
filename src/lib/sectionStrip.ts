/**
 * Section strip (owner's idea, Oct 28, 2026): under the site menu on a page that
 * a dropdown links to, a row of every topic in that same dropdown, so a visitor
 * can move between related topics without going back up to the menu. The
 * current page is shown highlighted rather than left out, so the row never
 * changes shape from page to page and doubles as a "you are here" marker.
 *
 * Owner's decisions (Oct 28, 2026, from the canvas mock-up):
 * - Charcoal, one colour for every strip (not each menu's own colour; the site
 *   already has too much blue). Text tabs, the current page in brick red #B0352A
 *   with a bar under it (pills were the first version; the owner found them busy).
 * - Each section has its own photo band (owner's option "E"): a long, narrow
 *   photo with a 25% cream fade and a soft cream glow behind the page title.
 *   It replaces the dark title band on strip pages and sits between the site
 *   menu and the tabs. Photos made by the owner in ChatGPT, cut by Claude to
 *   1920x225 (computers) and 1170x390 (phones) in src/assets/section-bands/.
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

/** Which photo each section's band uses, by menu href. */
export type BandPhoto = "estate" | "senior" | "professional" | "guides";
export const STRIP_PHOTOS: Record<string, BandPhoto> = {
  "/probate-estate-sales": "estate",
  "/senior-transitions": "senior",
  "/featured-professionals": "professional",
  "/guides-and-resources": "guides",
};

/**
 * Strip pages whose title is NOT the shared HeroBandTitle band (they have their
 * own custom headers). On these, the header draws the photo band (without a
 * title) and the tabs above the page's own heading. Every other strip page gets
 * both from HeroBandTitle, with the page title on the photo. A strip page must
 * be in exactly one of the two groups, or it shows the band twice or not at
 * all — checked against the built pages (see the commit for Oct 28, 2026).
 */
export const CUSTOM_HEADER_ROUTES = [
  "/washington-probate-guide",
  "/long-term-care",
  "/downsizing-preparing-for-transition",
  "/calculators",
  "/newsletter",
  "/whats-my-remodel-worth",
  "/articles",
  "/probate-glossary",
];

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
  photo: BandPhoto;
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
      photo: STRIP_PHOTOS[menu.href],
      links: items.map((i) => ({ label: STRIP_LABELS[i.href] ?? i.name, href: i.href, current: i.href === path })),
    };
  }
  return null;
};

/** True when this page's strip is drawn by the header (custom-header pages). */
export const stripInHeader = (pathname: string) => CUSTOM_HEADER_ROUTES.includes(clean(pathname));
