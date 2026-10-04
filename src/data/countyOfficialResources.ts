/**
 * Official county offices a family settling an estate actually deals with
 * (Oct 4, 2026). Shown on the King, Snohomish and Pierce county pages and in
 * their prerendered HTML, so AI and search crawlers can tie each county page to
 * the court, recorder, assessor and treasurer it names.
 *
 * Every link was opened and checked on Oct 4, 2026. County sites move pages:
 * re-check these when a county redesigns its site. Official .gov pages only.
 * No phone numbers (they change more often than the pages).
 * Used by the page and vite.config.ts, so no React and no "@/" imports.
 */

export interface CountyResource {
  office: string;
  /** What a family uses it for, in one plain sentence. */
  use: string;
  href: string;
}

export const COUNTY_OFFICIAL_RESOURCES: Record<string, { checked: string; items: CountyResource[] }> = {
  "king-county": {
    checked: "2026-10-04",
    items: [
      {
        office: "King County Superior Court: Ex Parte and Probate",
        use: "Where a King County probate is opened and where orders that need no hearing are presented, at the Seattle or Kent courthouse. The page also explains filing the original will with the Clerk.",
        href: "https://kingcounty.gov/en/court/superior-court/courts-jails-legal-system/ex-parte-probate/procedures",
      },
      {
        office: "King County Recorder's Office: records search",
        use: "Look up the deed and other recorded documents on a property, such as liens, transfer on death deeds and earlier conveyances.",
        href: "https://kingcounty.gov/en/dept/executive-services/certificates-permits-licenses/records-licensing/recorders-office/records-search",
      },
      {
        office: "King County property research (Assessor's eReal Property)",
        use: "Find a parcel by address or parcel number to see its assessed value, characteristics and sales history.",
        href: "https://kingcounty.gov/en/dept/kcit/data-information-services/gis-center/property-research",
      },
      {
        office: "King County Treasury: property taxes",
        use: "Check what is owed on the property and pay the April 30 and October 31 installments online.",
        href: "https://kingcounty.gov/en/dept/executive-services/buildings-property/treasury-operations/property-tax",
      },
    ],
  },
  "snohomish-county": {
    checked: "2026-10-04",
    items: [
      {
        office: "Snohomish County Superior Court Clerk: filing documents",
        use: "How to file Superior Court documents, including probate filings, electronically, in person in Everett or by mail. Some documents cannot be e-filed under local rule SCLR 30.",
        href: "https://snohomishcountywa.gov/5542/Filing-Information",
      },
      {
        office: "Snohomish County Auditor: search recorded documents",
        use: "Look up the deed and other recorded land records on a property, back to July 1976.",
        href: "https://snohomishcountywa.gov/5840/Search-Recorded-Documents",
      },
      {
        office: "Snohomish County Assessor: property search",
        use: "Find a parcel by address to see its value, characteristics, sales and maps (including the SCOPI map).",
        href: "https://snohomishcountywa.gov/3093/Find",
      },
      {
        office: "Snohomish County Treasurer: tax payment options",
        use: "Check what is owed on the property and pay the April 30 and October 31 installments online or by phone.",
        href: "https://snohomishcountywa.gov/221/Tax-Payment-Options",
      },
    ],
  },
  "pierce-county": {
    checked: "2026-10-04",
    items: [
      {
        office: "Pierce County Superior Court Clerk: probate",
        use: "What to bring to the Clerk's Office to open a probate in Pierce County: the petition, order, original will if there is one, and a notarized oath.",
        href: "https://www.piercecountywa.gov/7785/Probate",
      },
      {
        office: "Pierce County Auditor: recording",
        use: "Search the deed and other recorded documents on a property through the Auditor's recorded document search.",
        href: "https://www.piercecountywa.gov/359/Recording",
      },
      {
        office: "Pierce County Assessor-Treasurer: parcel and property information",
        use: "Pierce County combines the assessor and treasurer: look up a parcel's value, taxes owed and comparable sales in one place.",
        href: "https://www.piercecountywa.gov/969/Parcel-Property-Information",
      },
    ],
  },
};

export const countyResourcesPrerender = (slug: string): string[] => {
  const r = COUNTY_OFFICIAL_RESOURCES[slug];
  if (!r) return [];
  return [`Official county resources — ${r.items.map((i) => `${i.office} (${i.href}): ${i.use}`).join(" ")}`];
};
