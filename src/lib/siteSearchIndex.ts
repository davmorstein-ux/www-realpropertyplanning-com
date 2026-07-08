/**
 * Lightweight in-memory index of pages for the always-visible site search
 * bar. Add entries here as new pages ship. Keep labels short and
 * human-readable — this is what visitors type against.
 */
export type SiteSearchEntry = {
  label: string;
  path: string;
};

export const siteSearchIndex: SiteSearchEntry[] = [
  { label: "Home", path: "/" },
  { label: "Planning Before a Crisis", path: "/planning-before-a-crisis" },
  { label: "Helping Aging Parents", path: "/helping-aging-parents" },
  { label: "Estate & Probate / Inherited Property", path: "/estate-probate-inherited-property" },
  { label: "Building Your Trusted Professional Team", path: "/building-your-trusted-professional-team" },
  { label: "Executors", path: "/executors" },
  { label: "Attorneys", path: "/attorneys" },
  { label: "CPAs", path: "/cpas" },
  { label: "Financial Planners", path: "/financial-planners" },
  { label: "Senior Housing Transitions", path: "/senior-housing-transitions" },
  { label: "AFH Club", path: "/afh-club" },
  { label: "Guides & Resources", path: "/guides-and-resources" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
  { label: "Search", path: "/search" },
];
