/**
 * The header's primary navigation: five buttons, four of which open a menu.
 *
 * SINGLE SOURCE OF TRUTH. Header.tsx reads this for the compact layout and
 * PrimaryNav.tsx reads it for the desktop dropdowns, so the two cannot drift.
 *
 * `lines` are the button label split into explicit lines. Nothing here should
 * ever be more than two: the labels wrapped to three when the browser chose
 * the break points, which is why they are listed rather than left to wrap.
 *
 * `href` is where the button itself goes. It is also repeated as the first
 * item in each menu ("Overview"), because a button that only opens a menu
 * makes its own landing page unreachable.
 *
 * `color` is the category accent — used for the menu heading and the hover
 * marker on each item, mirroring the WaterfallNav drawer. All four clear
 * 4.5:1 on white, so the heading is legible text rather than decoration.
 *
 * About has no `items` and so renders as a plain link. A menu holding one
 * entry is worse than no menu.
 *
 * The link lists are drawn from the CATEGORIES array in WaterfallNav.jsx.
 * If you add a page there, add it here too — they are deliberately separate
 * (the drawer groups by profession, the header groups by what a visitor is
 * trying to do) but they should not contradict each other.
 */
export interface PrimaryNavItem {
  name: string;
  href: string;
}

export interface PrimaryNavEntry {
  lines: string[];
  href: string;
  color?: string;
  items?: PrimaryNavItem[];
}

export const PRIMARY_NAV: PrimaryNavEntry[] = [
  {
    lines: ["About"],
    href: "/about",
  },
  {
    lines: ["Probate &", "Estate Sales"],
    href: "/probate-estate-sales",
    color: "#25597e",
    items: [
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "For Executors", href: "/executors" },
      { name: "For Trustees", href: "/trustees" },
      { name: "Selling an Inherited Home", href: "/selling-an-inherited-home" },
      { name: "Date-of-Death Valuations", href: "/date-of-death-valuation-property-appraisals" },
      { name: "Estate Liquidation", href: "/estate-liquidation" },
      { name: "How the Process Works", href: "/how-the-process-works" },
    ],
  },
  {
    lines: ["Senior Housing &", "Transitions"],
    href: "/senior-transitions",
    color: "#1d7239",
    items: [
      { name: "Senior Transitions", href: "/senior-transitions" },
      { name: "Understanding Housing & Care Options", href: "/understanding-housing-care-options" },
      { name: "Adult Family Home Directory", href: "/afh-club/homes" },
      { name: "Cost of Care Calculators", href: "/cost-of-care-calculator" },
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
      { name: "Aging in Place", href: "/aging-in-place-staying-home-safely" },
      { name: "Downsizing & Preparing to Move", href: "/downsizing-preparing-for-transition" },
      { name: "Long-Term Care", href: "/long-term-care" },
    ],
  },
  {
    lines: ["Articles & Guides"],
    href: "/guides-and-resources",
    color: "#6b30a6",
    items: [
      { name: "All Guides & Articles", href: "/guides-and-resources" },
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Aging in Place", href: "/articles/aging-in-place" },
      { name: "Wills, Trusts & Other Options", href: "/articles/wills-trusts-other-options" },
      { name: "Terminology", href: "/terminology" },
    ],
  },
  {
    lines: ["Real Estate &", "Legal Professionals"],
    href: "/for-attorneys",
    color: "9c5000",
    items: [
      { name: "Find a Professional", href: "/featured-professionals" },
      { name: "Estate Planning Attorneys", href: "/for-estate-planning-attorneys" },
      { name: "Probate & Estate Attorneys", href: "/for-probate-attorneys" },
      { name: "Elder Law Attorneys", href: "/for-elder-law-attorneys" },
      { name: "Real Estate Attorneys", href: "/real-estate-attorneys" },
      { name: "Family Law Attorneys", href: "/for-family-law-attorneys" },
      { name: "Divorce Attorneys", href: "/for-divorce-attorneys" },
      { name: "Legal Plans & ID Protection", href: "/legal-plans-identity-protection" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "CPAs & Accountants", href: "/for-cpas" },
      { name: "Financial Planners", href: "/professionals/financial-planners" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
];
