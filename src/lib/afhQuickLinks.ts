/**
 * AFH Club quick links (owner, Oct 1, 2026): the seven AFH Club pages shown in
 * a row under the site menu on every AFH Club page. Owner's choice: AFH Club
 * Home plus the core six. Read by src/components/AFHClubQuickLinks.tsx and by
 * vite.config.ts (static HTML). No React, no "@/" imports: Node loads this.
 */
export interface AFHQuickLink {
  label: string;
  href: string;
  /** Other address prefixes that belong to this section (highlighted as current). */
  alsoActive?: string[];
}

export const AFH_QUICK_LINKS: AFHQuickLink[] = [
  { label: "AFH Club Home", href: "/afh-club" },
  { label: "Start Here", href: "/afh-club/washington-adult-family-home-guide" },
  { label: "Listings for Sale", href: "/afh-club/listings", alsoActive: ["/afh-club/listings/", "/afh-club/sold"] },
  { label: "Home Directory", href: "/afh-club/homes", alsoActive: ["/afh-club/homes/"] },
  { label: "Find a Professional", href: "/afh-club/find-a-professional" },
  {
    label: "Calculators",
    href: "/afh-club/calculators",
    alsoActive: ["/afh-club/afh-roi-calculator", "/afh-club/afh-valuation-estimator", "/afh-club/afh-financing-calculator", "/afh-club/afh-property-score"],
  },
  { label: "Resources & Articles", href: "/afh-club/resources" },
];

/** AFH Club pages: everything under /afh-club, plus the listing submission form. */
export const isAFHClubPath = (pathname: string) =>
  pathname === "/afh-club" || pathname.startsWith("/afh-club/") || pathname === "/afh-submit";

export const isActiveQuickLink = (link: AFHQuickLink, pathname: string) => {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === link.href) return true;
  return (link.alsoActive ?? []).some((pre) => p.startsWith(pre));
};
