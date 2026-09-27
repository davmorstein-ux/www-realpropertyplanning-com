/**
 * The two visitor site maps (Sept 27, 2026):
 *   /sitemap            Real Property Planning: families, executors, trustees, professionals
 *   /afh-club/site-map  AFH Club: adult family home buyers, sellers, owners and operators
 *
 * The standing audience rule decides which map a page belongs on: AFH Club is
 * for operators and investors; anything for a family placing a parent is on the
 * Real Property Planning side (so /senior-living/adult-family-homes and
 * /adult-family-home-costs are on the family map, not AFH Club's).
 *
 * BUILT FROM THE LISTS THE SITE ALREADY KEEPS, so a page added to the header
 * menus, the guide library or the calculator index appears here without anyone
 * touching this file. Only pages none of those lists cover are written out by
 * hand below. src/test/siteMaps.test.ts fails if a live route is on neither
 * map and not in SITE_MAP_EXCLUDED, so a new page cannot quietly go missing.
 *
 * Each address appears once per map: the first section that lists it keeps it.
 *
 * Node-safe (no React, relative imports) so the build and tests can load it.
 */

import { PRIMARY_NAV } from "../lib/primaryNav";
import { GUIDE_LIBRARY } from "../data/guideLibrary";
import { CARE_CALCULATORS } from "../lib/careCalculators";
import { AFH_CALCULATORS } from "./calculatorIndex";
import { AFH_CITY_PAGES } from "./afhCityPages";

export interface SiteMapLink {
  title: string;
  href: string;
}

export interface SiteMapGroup {
  /** Sub-heading within a section. Omit when the section has one group. */
  label?: string;
  links: SiteMapLink[];
}

export interface SiteMapSection {
  id: string;
  label: string;
  /** One plain sentence on who the section is for. */
  blurb?: string;
  groups: SiteMapGroup[];
}

const nav = (href: string) => {
  const entry = PRIMARY_NAV.find((e) => e.href === href);
  if (!entry) throw new Error(`siteMaps: no header menu at ${href}`);
  return (entry.items ?? []).map((i) => ({ title: i.name, href: i.href }));
};

const titleCase = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w === "wa" ? "WA" : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

/** Drop repeats within one map, keeping the first; drop empty groups and sections. */
function dedupe(sections: SiteMapSection[]): SiteMapSection[] {
  const seen = new Set<string>();
  return sections
    .map((s) => ({
      ...s,
      groups: s.groups
        .map((g) => ({
          ...g,
          links: g.links.filter((l) => {
            if (seen.has(l.href)) return false;
            seen.add(l.href);
            return true;
          }),
        }))
        .filter((g) => g.links.length > 0),
    }))
    .filter((s) => s.groups.length > 0);
}

/* ------------------------------------------------------------------ */
/* Real Property Planning                                               */
/* ------------------------------------------------------------------ */

const COUNTIES = [
  "king", "snohomish", "pierce", "kitsap", "skagit", "clark", "spokane", "thurston", "whatcom", "benton",
  "cowlitz", "grays-harbor", "island", "jefferson", "lewis", "mason", "pacific", "san-juan", "skamania",
  "wahkiakum", "yakima", "franklin",
];

const CITY_PAGES: SiteMapLink[] = [
  { title: "Seattle", href: "/seattle-probate-estate-real-estate" },
  { title: "Bellevue", href: "/bellevue-probate-estate-real-estate" },
  { title: "Tacoma", href: "/tacoma-probate-estate-real-estate" },
  { title: "Everett", href: "/everett-probate-estate-real-estate" },
  { title: "Olympia", href: "/olympia-probate-estate-real-estate" },
  { title: "Bellingham", href: "/bellingham-probate-estate-real-estate" },
  { title: "Spokane", href: "/spokane-probate-estate-real-estate" },
  { title: "Vancouver, WA", href: "/vancouver-wa-probate-estate-real-estate" },
];

const LANGUAGES: SiteMapLink[] = [
  { title: "Español (Spanish)", href: "/es" },
  { title: "Română (Romanian)", href: "/ro" },
  { title: "ትግርኛ (Tigrinya)", href: "/ti" },
  { title: "Tagalog", href: "/tl" },
  { title: "Tiếng Việt (Vietnamese)", href: "/vi" },
  { title: "简体中文 (Simplified Chinese)", href: "/zh-cn" },
  { title: "繁體中文 (Traditional Chinese)", href: "/zh-tw" },
];

export const RPP_SITE_MAP: SiteMapSection[] = dedupe([
  {
    id: "estate-probate",
    label: "Estate & Probate",
    blurb: "For executors, trustees and families handling a loved one's home.",
    groups: [
      {
        links: [
          ...nav("/probate-estate-sales"),
          { title: "Estate Liquidation & Estate Sales Explained", href: "/estate-liquidation/learn-more" },
          { title: "10 Steps Every Executor Should Know", href: "/resources/washington-executors-10-step-checklist" },
          { title: "Roles & Responsibilities", href: "/roles" },
          { title: "Planning & Next Steps", href: "/planning" },
          { title: "Planning Before a Crisis: How This Resource Helps", href: "/planning-before-a-crisis/how-we-can-help" },
        ],
      },
    ],
  },
  {
    id: "senior-transitions",
    label: "Senior Transitions",
    blurb: "For families weighing a move, a change in care, or staying at home.",
    groups: [
      {
        links: [
          ...nav("/senior-transitions"),
          { title: "Adult Family Homes: A Guide for Families", href: "/senior-living/adult-family-homes" },
          { title: "Adult Family Home Costs by City & County", href: "/adult-family-home-costs" },
        ],
      },
    ],
  },
  {
    id: "professionals",
    label: "Find a Professional",
    blurb: "Attorneys, appraisers, brokers, advisors and other specialists who work with families.",
    groups: [
      { links: nav("/featured-professionals") },
      {
        label: "More professionals",
        links: [
          { title: "Aging Life Care Managers", href: "/aging-life-care-managers" },
          { title: "Medicare Providers", href: "/medicare-providers" },
          { title: "Title & Escrow Services", href: "/title-and-escrow" },
          { title: "Featured Senior Move Managers", href: "/featured-senior-move-managers" },
          { title: "Bookkeeping Services", href: "/bookkeeping-services" },
          { title: "Financing & Long-Term Planning", href: "/lenders-and-financing-specialists" },
          { title: "Reverse Mortgages & Retirement Financing", href: "/retirement-reverse-mortgage" },
          { title: "Building Your Professional Team", href: "/professionals" },
          { title: "Professionals & Services", href: "/professionals-services" },
          { title: "Legal Professionals", href: "/professionals/attorneys" },
          { title: "Probate Attorneys in Western Washington", href: "/professionals/probate-attorneys" },
          { title: "Aging Life Care Managers & Social Workers", href: "/professionals/care-managers" },
          { title: "Estate Sale & Personal Property Specialists", href: "/professionals/estate-sale" },
          { title: "Home Preparation & Staging", href: "/professionals/home-preparation" },
          { title: "Senior Housing Advisors", href: "/professionals/senior-housing-advisors" },
          { title: "Elder Law Attorney", href: "/attorneys/for-elder-law-attorneys" },
          { title: "Family Law Attorney", href: "/attorneys/for-family-law-attorneys" },
          { title: "Real Estate Attorney", href: "/attorneys/for-real-estate-attorney" },
        ],
      },
      {
        label: "Statewide directories",
        links: [
          { title: "All Directories", href: "/resources" },
          { title: "Probate & Estate Attorneys", href: "/resources/probate-estate-attorneys" },
          { title: "CPAs & Financial Advisors", href: "/resources/cpas-financial-advisors" },
          { title: "Estate Sale Companies", href: "/resources/estate-sale-companies" },
          { title: "Moving & Relocation Services", href: "/resources/moving-relocation-services" },
          { title: "Property Preparation Services", href: "/resources/property-preparation-services" },
          { title: "Senior Living Communities", href: "/resources/senior-living-communities" },
        ],
      },
      {
        label: "For professionals",
        links: [
          { title: "For Probate & Estate Attorneys", href: "/for-attorneys" },
          { title: "How Real Property Planning Works With Attorneys", href: "/for-attorneys/how-it-works" },
          { title: "For Financial Planners", href: "/for-financial-planners" },
          { title: "Join the Professional Network", href: "/join-the-network" },
        ],
      },
    ],
  },
  {
    id: "guides",
    label: "Guides & Articles",
    blurb: "Plain-language explanations, grouped by topic.",
    groups: [
      { links: nav("/guides-and-resources") },
      ...GUIDE_LIBRARY.map((g) => ({
        label: g.label,
        links: [...(g.landing ? [{ title: g.landing.label.replace(/^Start here:\s*/i, "Start here: "), href: g.landing.href }] : []), ...g.pieces],
      })),
    ],
  },
  {
    id: "calculators",
    label: "Cost of Care Calculators",
    blurb: "Estimate what each kind of care costs in Washington.",
    groups: [
      {
        links: [
          { title: "Cost of Care Calculator (all care types)", href: "/cost-of-care-calculator" },
          ...CARE_CALCULATORS.map((c) => ({ title: `${c.shortLabel} Cost Calculator`, href: `/cost-of-care-calculator/${c.slug}` })),
        ],
      },
    ],
  },
  {
    id: "local",
    label: "Service Areas",
    blurb: "Local pages for Washington counties and cities.",
    groups: [
      { label: "Counties", links: [{ title: "All Service Areas", href: "/counties" }, ...COUNTIES.map((c) => ({ title: `${titleCase(c)} County`, href: `/${c}-county` }))] },
      { label: "Cities", links: CITY_PAGES },
    ],
  },
  {
    id: "about",
    label: "About & Contact",
    groups: [
      {
        links: [
          ...nav("/about"),
          { title: "Search the Site", href: "/search" },
          { title: "Privacy Policy", href: "/privacy" },
          { title: "Disclaimer", href: "/disclaimer" },
        ],
      },
    ],
  },
  {
    id: "languages",
    label: "Other Languages",
    blurb: "Key pages translated into seven languages.",
    groups: [{ links: LANGUAGES }],
  },
]);

/* ------------------------------------------------------------------ */
/* AFH Club                                                              */
/* ------------------------------------------------------------------ */

/** The calculator index still lists one tool by an address that now redirects. */
const AFH_CALC_ADDRESS_FIX: Record<string, string> = {
  "/afh-club/cost-by-location": "/adult-family-home-costs",
};

export const AFH_SITE_MAP: SiteMapSection[] = dedupe([
  {
    id: "start",
    label: "Start Here",
    groups: [
      {
        links: [
          { title: "AFH Club Home", href: "/afh-club" },
          { title: "Is an Adult Family Home Right for You?", href: "/afh-club/getting-started" },
          { title: "What Is an Adult Family Home?", href: "/afh-club/what-is-an-adult-family-home" },
          { title: "AFH Resource Library", href: "/afh-club/resources" },
        ],
      },
    ],
  },
  {
    id: "buying-selling",
    label: "Buying & Selling",
    groups: [
      {
        links: [
          { title: "Buying or Selling an Adult Family Home", href: "/afh-club/buying-selling" },
          { title: "Is It Really an Adult Family Home? Reading AFH Listings", href: "/afh-club/afh-property-classifications" },
          { title: "How to Look Up DSHS Violations & Inspection Reports", href: "/afh-club/violation-history-lookup" },
          { title: "How to Finance an AFH", href: "/afh-club/how-to-finance-an-afh" },
          { title: "Buying as an Individual or Through an LLC", href: "/afh-club/ownership-structure" },
          { title: "Selling Your AFH Business at Retirement", href: "/afh-club/selling-your-business-at-retirement" },
          { title: "Thinking of Selling Your AFH?", href: "/afh-submit" },
        ],
      },
    ],
  },
  {
    id: "listings",
    label: "Homes for Sale & Directory",
    groups: [
      {
        links: [
          { title: "All AFH Listings in Washington", href: "/afh-club/listings" },
          { title: "Properties for Sale", href: "/afh-club/listings/properties" },
          { title: "Businesses for Sale", href: "/afh-club/listings/businesses" },
          { title: "For Lease", href: "/afh-club/listings/for-lease" },
          { title: "Recent AFH Sales", href: "/afh-club/sold" },
          { title: "Directory of Licensed Adult Family Homes", href: "/afh-club/homes" },
        ],
      },
      {
        label: "For sale by city",
        links: AFH_CITY_PAGES.map((c) => ({ title: c.city, href: `/afh-club/for-sale/${c.slug}` })),
      },
    ],
  },
  {
    id: "licensing",
    label: "Licensing, Building & Compliance",
    groups: [
      {
        links: [
          { title: "AFH Licensing & Certification", href: "/afh-club/licensing-certification" },
          { title: "Training & Education Requirements", href: "/afh-club/training-education" },
          { title: "Building Requirements & Inspections", href: "/afh-club/building-inspection" },
          { title: "What Is WABO? A Simple Overview", href: "/afh-club/wabo-inspection-guide" },
          { title: "WABO Checklist & Technical Requirements", href: "/afh-club/wabo-technical-guide" },
          { title: "DSHS Inspections & Compliance", href: "/afh-club/regulations-compliance" },
          { title: "AFH Costs & Fees", href: "/afh-club/costs-fees" },
        ],
      },
    ],
  },
  {
    id: "payment",
    label: "How AFHs Get Paid",
    groups: [
      {
        links: [
          { title: "The AFH Payment Field Guide", href: "/afh-club/afh-payment-field-guide" },
          { title: "A Through E: CARE Classifications", href: "/afh-club/care-classifications-a-through-e" },
          { title: "CBHS Tiers Explained", href: "/afh-club/cbhs-tiers" },
        ],
      },
    ],
  },
  {
    id: "calculators",
    label: "Calculators & Tools",
    groups: [
      {
        links: [
          { title: "All AFH Calculators", href: "/afh-club/calculators" },
          ...AFH_CALCULATORS.map((c) => ({ title: c.title, href: AFH_CALC_ADDRESS_FIX[c.href] ?? c.href })),
        ],
      },
    ],
  },
  {
    id: "professionals",
    label: "Professionals",
    groups: [
      {
        links: [
          { title: "AFH Club Featured Professionals", href: "/afh-club/find-a-professional" },
          { title: "AFH Real Estate Broker", href: "/afh-club/real-estate-broker" },
          { title: "AFH Management Companies", href: "/afh-club/management-companies" },
        ],
      },
    ],
  },
]);

/**
 * Live routes that are on neither map, each with the reason. The test fails on
 * any live route missing from both maps and from this list.
 */
export const SITE_MAP_EXCLUDED: Record<string, string> = {
  "/": "the homepage; both maps link to it from their introductions",
  "/sitemap": "this page",
  "/afh-club/site-map": "this page",
  ...Object.fromEntries(
    COUNTIES.map((c) => [`/counties/${c}`, `duplicate address of /${c}-county (same page); the map lists the one the Service Areas page links to`]),
  ),
  ...Object.fromEntries(
    ["es", "ro", "ti", "tl", "vi", "zh-cn", "zh-tw"].flatMap((l) =>
      ["afh-club", "contact", "cost-of-care-calculator", "probate-estate-sales", "senior-transitions"].map((p) => [
        `/${l}/${p}`,
        "translated page; reached from its language's home page, which the map lists",
      ]),
    ),
  ),
};
