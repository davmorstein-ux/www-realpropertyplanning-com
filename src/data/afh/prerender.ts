/**
 * Build-time prerender for the adult family home directory.
 *
 * The directory routes (/afh-club/homes/...) are generated from data, not from
 * ROUTE_METADATA in vite.config.ts, so until now they shipped to crawlers as an
 * empty <div id="root">. Googlebot executes JavaScript and eventually sees them;
 * GPTBot, ClaudeBot, and PerplexityBot generally do not. This module produces a
 * static HTML body and JSON-LD for every hub, city, filter, and facility page so
 * an AI engine reading the raw response gets the same facts a visitor does.
 *
 * Runs in Node during `vite build` (imported by vite.config.ts). It reads the
 * city JSON files directly from disk — it must not import anything that relies
 * on Vite-only features like import.meta.glob.
 *
 * The React pages replace this content on hydration; the prose here mirrors
 * what the components render so the two never disagree.
 */

import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

/* ------------------------------------------------------------------ */
/* Minimal local types (kept independent of ./types to avoid Vite-only  */
/* imports; field names match src/data/afh/types.ts exactly).           */
/* ------------------------------------------------------------------ */

interface Facility {
  licenseNumber: string;
  displayName: string;
  slug: string;
  address: { street: string; city: string; citySlug: string; zip: string; county: string };
  contactName: string | null;
  phone: string | null;
  licensedBeds: number;
  specialties: string[];
  contracts: string[];
  acceptsMedicaid: boolean;
  hasReports: boolean;
  retrievedAt: string;
}

interface CityIndexEntry {
  city: string;
  citySlug: string;
  county: string;
  counties?: string[];
  facilityCount: number;
  totalBeds: number;
  behaviorSupport: number;
  developmentalDisabilities: number;
  privatePay: number;
  withReports: number;
}

export interface PrerenderedRoute {
  route: string;
  title: string;
  description: string;
  /** Inner HTML for <div id="root">. Includes an inline JSON-LD script. */
  body: string;
}

/* Mirrors AFH_FILTERS in ./directory.ts — slug, heading label, and predicate. */
const FILTERS: Array<{ slug: string; label: string; explanation: string; matches: (f: Facility) => boolean }> = [
  {
    slug: "specialized-behavior-support",
    label: "with Specialized Behavior Support",
    explanation:
      "These homes hold a Specialized Behavior Support contract with DSHS, which covers residents whose behavioral needs require additional staff training and planning.",
    matches: (f) => f.contracts.includes("specializedBehaviorSupport"),
  },
  {
    slug: "developmental-disabilities",
    label: "serving developmental disabilities",
    explanation:
      "These homes carry the DSHS developmental disabilities specialty designation, meaning the provider has completed the additional training the state requires.",
    matches: (f) => f.specialties.includes("developmentalDisabilities"),
  },
  {
    slug: "expanded-community-services",
    label: "with Expanded Community Services",
    explanation:
      "An Expanded Community Services contract covers residents transitioning from psychiatric hospitalization or with higher behavioral health needs.",
    matches: (f) => f.contracts.includes("expandedCommunityServices"),
  },
  {
    slug: "private-pay",
    label: "that are private pay only",
    explanation: "These homes hold no DSHS contract and cannot accept Medicaid. Residents pay privately.",
    matches: (f) => !f.acceptsMedicaid,
  },
  {
    slug: "more-than-six-beds",
    label: "licensed for more than six residents",
    explanation:
      "Washington licenses most adult family homes for a maximum of six residents. DSHS grants capacity above six only to providers who meet additional requirements.",
    matches: (f) => f.licensedBeds > 6,
  },
];

const SPECIALTY_LABELS: Record<string, string> = {
  dementia: "Dementia",
  mentalHealth: "Mental Health",
  developmentalDisabilities: "Developmental Disabilities",
};

const CONTRACT_LABELS: Record<string, string> = {
  adultFamilyHome: "Adult Family Home (Medicaid)",
  specializedBehaviorSupport: "Specialized Behavior Support",
  expandedCommunityServices: "Expanded Community Services",
  privateDutyNursing: "Private Duty Nursing",
  waCaresFund: "WA Cares Fund",
  waCaresFundRespite: "WA Cares Fund Respite",
};

const SITE = "https://realpropertyplanning.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const attr = (s: string) => esc(s);

const ld = (obj: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const longDate = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
};

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);
const num = (n: number) => n.toLocaleString("en-US");

/* Shared wrapper so every prerendered page has the same footprint as the
   existing ROUTE_METADATA SSG block (system font, 800px column). */
const WRAP_OPEN =
  '<div id="ssg-content" style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:40px 20px;line-height:1.6;color:#222">';
const WRAP_CLOSE = "</div>";

const h1 = (t: string) => `<h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px">${esc(t)}</h1>`;
const h2 = (t: string) => `<h2 style="font-size:1.3rem;margin:28px 0 8px">${esc(t)}</h2>`;
const p = (t: string) => `<p style="margin:0 0 12px">${t}</p>`;
const a = (href: string, text: string) => `<a href="${attr(href)}" style="color:#1a365d">${esc(text)}</a>`;

const breadcrumbs = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.url}`,
  })),
});

const facilitySchema = (f: Facility, url: string) => ({
  "@type": "ResidentialCareFacility",
  name: f.displayName,
  identifier: f.licenseNumber,
  url,
  ...(f.phone ? { telephone: f.phone } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: f.address.street,
    addressLocality: f.address.city,
    addressRegion: "WA",
    postalCode: f.address.zip,
    addressCountry: "US",
  },
});

const sourceNote = (retrievedAt: string) =>
  p(
    `Licensing information is sourced from Washington State DSHS public records and was retrieved on ${esc(
      longDate(retrievedAt),
    )}. Specialty designations reflect provider training required by the state; they are not quality ratings and are not endorsements. Verify current licensing status directly with DSHS before relying on this information. Real Property Planning is an independent educational resource and does not operate, own, or manage any adult family home.`,
  );

const facilityRow = (f: Facility) => {
  const url = `/afh-club/homes/${f.address.citySlug}/${f.slug}`;
  const spec = f.specialties.length
    ? f.specialties.map((s) => SPECIALTY_LABELS[s] ?? s).join(" · ")
    : "No specialty designations on file";
  return (
    `<li style="border-top:1px solid #d9dede;padding:14px 0">` +
    `<h3 style="margin:0;font-size:1.1rem">${a(url, f.displayName)}</h3>` +
    `<p style="margin:4px 0 0;color:#374151">${esc(f.address.street)}, ${esc(f.address.city)}, WA ${esc(
      f.address.zip,
    )} — licensed for ${f.licensedBeds}</p>` +
    `<p style="margin:4px 0 0;color:#4b5563">${esc(spec)} — ${
      f.acceptsMedicaid ? "accepts Medicaid" : "private pay only"
    }</p>` +
    `<p style="margin:4px 0 0;color:#6b7280;font-size:0.95rem">DSHS license ${esc(f.licenseNumber)}</p>` +
    `</li>`
  );
};

/* ------------------------------------------------------------------ */
/* Page builders                                                        */
/* ------------------------------------------------------------------ */

function cityStats(facilities: Facility[]) {
  const medicaid = facilities.filter((f) => f.acceptsMedicaid).length;
  const dementia = facilities.filter((f) => f.specialties.includes("dementia")).length;
  const mental = facilities.filter((f) => f.specialties.includes("mentalHealth")).length;
  const dd = facilities.filter((f) => f.specialties.includes("developmentalDisabilities")).length;
  const over6 = facilities.filter((f) => f.licensedBeds > 6).length;
  const retrievedAt = facilities.reduce((m, f) => (f.retrievedAt > m ? f.retrievedAt : m), "");
  return { medicaid, dementia, mental, dd, over6, retrievedAt };
}

/** The opening paragraph. Written once here and mirrored in CityDirectory.tsx. */
export function citySummarySentence(
  city: string,
  facilityCount: number,
  totalBeds: number,
  s: ReturnType<typeof cityStats>,
) {
  return (
    `${city} has ${num(facilityCount)} licensed adult family ${plural(facilityCount, "home", "homes")} ` +
    `with ${num(totalBeds)} licensed beds, according to Washington State DSHS records. ` +
    `${s.medicaid} ${plural(s.medicaid, "accepts", "accept")} Medicaid, ` +
    `${s.dementia} ${plural(s.dementia, "carries", "carry")} the dementia specialty designation, ` +
    `${s.mental} ${plural(s.mental, "carries", "carry")} the mental health designation, ` +
    `and ${s.dd} ${plural(s.dd, "serves", "serve")} developmental disabilities. ` +
    `${s.over6} ${plural(s.over6, "is", "are")} licensed for more than six residents.`
  );
}

function buildCityPage(entry: CityIndexEntry, facilities: Facility[], filter?: (typeof FILTERS)[number]): PrerenderedRoute {
  const { city, citySlug } = entry;
  const shown = filter ? facilities.filter(filter.matches) : facilities;
  const route = filter ? `/afh-club/homes/${citySlug}/${filter.slug}` : `/afh-club/homes/${citySlug}`;
  const heading = filter
    ? `Adult family homes in ${city} ${filter.label}`
    : `Licensed adult family homes in ${city}, Washington`;
  const s = cityStats(facilities);

  const title = `${heading} | Real Property Planning`;
  const description = filter
    ? `${shown.length} ${city}, Washington adult family homes ${filter.label}, from Washington State DSHS licensing records. Capacity, specialty designations, and Medicaid status for each home.`
    : `All ${entry.facilityCount} licensed adult family homes in ${city}, Washington, from DSHS records. Capacity, specialty designations, Medicaid status, and inspection history.`;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: heading,
    numberOfItems: shown.length,
    itemListElement: shown.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: facilitySchema(f, `${SITE}/afh-club/homes/${citySlug}/${f.slug}`),
    })),
  };

  const crumbs = breadcrumbs([
    { name: "AFH Club", url: "/afh-club" },
    { name: "Adult Family Homes", url: "/afh-club/homes" },
    { name: city, url: `/afh-club/homes/${citySlug}` },
    ...(filter ? [{ name: filter.label, url: route }] : []),
  ]);

  const parts: string[] = [WRAP_OPEN, h1(heading)];
  parts.push(p(esc(citySummarySentence(city, entry.facilityCount, entry.totalBeds, s))));
  parts.push(p(`Records current as of ${esc(longDate(s.retrievedAt))}.`));
  if (filter) parts.push(p(esc(filter.explanation)));

  parts.push(h2("Narrow these homes"));
  parts.push(
    `<p style="margin:0 0 12px">` +
      [a(`/afh-club/homes/${citySlug}`, `All ${entry.facilityCount}`)]
        .concat(
          FILTERS.filter((f) => facilities.some(f.matches)).map((f) =>
            a(`/afh-club/homes/${citySlug}/${f.slug}`, f.label.replace(/^(with|serving|that are|licensed for) /, "")),
          ),
        )
        .join(" · ") +
      `</p>`,
  );

  parts.push(h2(`${shown.length} ${plural(shown.length, "home", "homes")}${filter ? ` of ${entry.facilityCount}` : ""}`));
  parts.push(`<ul style="list-style:none;padding:0;margin:0">${shown.map(facilityRow).join("")}</ul>`);
  parts.push(h2("About this data"));
  parts.push(sourceNote(s.retrievedAt));
  parts.push(ld(itemList), ld(crumbs), WRAP_CLOSE);

  return { route, title, description, body: parts.join("") };
}

function buildFacilityPage(entry: CityIndexEntry, f: Facility): PrerenderedRoute {
  const citySlug = f.address.citySlug;
  const route = `/afh-club/homes/${citySlug}/${f.slug}`;
  const url = `${SITE}${route}`;
  const ad = f.address;

  const title = `${f.displayName} — Adult Family Home in ${ad.city}, WA | Real Property Planning`;
  const description = `DSHS licensing record for ${f.displayName}, an adult family home at ${ad.street}, ${ad.city}, Washington. License ${f.licenseNumber}, licensed for ${f.licensedBeds} residents.`;

  const rows: Array<[string, string]> = [
    ["License number", f.licenseNumber],
    ["Licensed capacity", `${f.licensedBeds} residents`],
    [
      "Specialty designations",
      f.specialties.length ? f.specialties.map((s) => SPECIALTY_LABELS[s] ?? s).join(", ") : "None on file",
    ],
    ["DSHS contracts", f.contracts.length ? f.contracts.map((c) => CONTRACT_LABELS[c] ?? c).join(", ") : "No contract"],
    ["Medicaid", f.acceptsMedicaid ? "Accepted" : "Not accepted — private pay only"],
    ...(f.contactName ? ([["Provider contact", f.contactName]] as Array<[string, string]>) : []),
    ...(f.phone ? ([["Phone", f.phone]] as Array<[string, string]>) : []),
    ["Address", `${ad.street}, ${ad.city}, WA ${ad.zip}`],
    ["County", `${ad.county} County`],
    ["Record retrieved", longDate(f.retrievedAt)],
  ];

  const parts: string[] = [WRAP_OPEN, h1(f.displayName)];
  parts.push(
    p(
      `${esc(f.displayName)} is a licensed adult family home at ${esc(ad.street)}, ${esc(ad.city)}, Washington, licensed by DSHS for ${f.licensedBeds} ${plural(
        f.licensedBeds,
        "resident",
        "residents",
      )}. It ${f.acceptsMedicaid ? "accepts Medicaid" : "is private pay only"}${
        f.specialties.length
          ? ` and carries the ${f.specialties.map((s) => SPECIALTY_LABELS[s] ?? s).join(", ")} specialty ${plural(
              f.specialties.length,
              "designation",
              "designations",
            )}`
          : ""
      }.`,
    ),
  );
  parts.push(h2("DSHS licensing record"));
  parts.push(
    `<table style="width:100%;border-collapse:collapse"><tbody>` +
      rows
        .map(
          ([k, v]) =>
            `<tr><th scope="row" style="text-align:left;padding:8px 12px 8px 0;border-top:1px solid #d9dede;color:#4b5563;font-weight:600;width:40%">${esc(
              k,
            )}</th><td style="padding:8px 0;border-top:1px solid #d9dede">${esc(v)}</td></tr>`,
        )
        .join("") +
      `</tbody></table>`,
  );
  parts.push(
    p(
      f.hasReports
        ? "DSHS has inspection or enforcement documents on file for this home. Those records are published by the state and can be viewed through the DSHS Adult Family Home Locator."
        : "DSHS shows no inspection or enforcement documents on file for this home as of the retrieval date above.",
    ),
  );
  parts.push(p(a(`/afh-club/homes/${citySlug}`, `All ${entry.facilityCount} licensed adult family homes in ${ad.city} →`)));
  parts.push(h2("About this data"));
  parts.push(sourceNote(f.retrievedAt));
  parts.push(
    ld({ "@context": "https://schema.org", ...facilitySchema(f, url) }),
    ld(
      breadcrumbs([
        { name: "AFH Club", url: "/afh-club" },
        { name: "Adult Family Homes", url: "/afh-club/homes" },
        { name: ad.city, url: `/afh-club/homes/${citySlug}` },
        { name: f.displayName, url: route },
      ]),
    ),
    WRAP_CLOSE,
  );

  return { route, title, description, body: parts.join("") };
}

function buildHubPage(index: CityIndexEntry[], retrievedAt: string): PrerenderedRoute {
  const route = "/afh-club/homes";
  const total = index.reduce((s, c) => s + c.facilityCount, 0);
  const beds = index.reduce((s, c) => s + c.totalBeds, 0);
  const countyNames = [...new Set(index.map((c) => c.county))].sort();
  const byCounty = countyNames
    .map((n) => ({
      county: n,
      cities: index.filter((c) => (c.counties ?? [c.county]).includes(n)).sort((x, y) => y.facilityCount - x.facilityCount),
    }))
    .sort((x, y) => y.cities.reduce((s, c) => s + c.facilityCount, 0) - x.cities.reduce((s, c) => s + c.facilityCount, 0));

  const parts: string[] = [WRAP_OPEN, h1("Licensed adult family homes by city")];
  parts.push(
    p(
      esc(
        `This directory lists ${num(total)} licensed adult family homes with ${num(beds)} licensed beds across ${index.length} cities in ${countyNames.length > 1 ? countyNames.slice(0, -1).join(", ") + ", and " + countyNames.at(-1) : countyNames[0]} ${plural(countyNames.length, "County", "counties")}, Washington, from Washington State DSHS licensing records current as of ${longDate(
          retrievedAt,
        )}. Each city page lists every licensed home with capacity, specialty designations, Medicaid status, and a link to its DSHS record.`,
      ),
    ),
  );
  for (const { county, cities } of byCounty) {
    const n = cities.reduce((s, c) => s + c.facilityCount, 0);
    parts.push(h2(`${county} County — ${num(n)} homes in ${cities.length} cities`));
    parts.push(
      `<ul style="columns:2;padding-left:20px">` +
        cities
          .map((c) => `<li>${a(`/afh-club/homes/${c.citySlug}`, `${c.city} (${c.facilityCount})`)}</li>`)
          .join("") +
        `</ul>`,
    );
  }
  parts.push(h2("About this data"));
  parts.push(sourceNote(retrievedAt));
  parts.push(
    ld({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Licensed adult family homes in Washington by city",
      numberOfItems: index.length,
      itemListElement: index.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.city}, WA — ${c.facilityCount} licensed adult family homes`,
        url: `${SITE}/afh-club/homes/${c.citySlug}`,
      })),
    }),
    ld(
      breadcrumbs([
        { name: "AFH Club", url: "/afh-club" },
        { name: "Adult Family Homes", url: route },
      ]),
    ),
    WRAP_CLOSE,
  );

  return {
    route,
    title: "Licensed Adult Family Homes in Washington by City | Real Property Planning",
    description: `Every licensed adult family home in King, Pierce, and Snohomish counties, Washington — ${num(total)} homes across ${index.length} cities, from DSHS licensing records. Capacity, specialty designations, and Medicaid status for each.`,
    body: parts.join(""),
  };
}

/* ------------------------------------------------------------------ */
/* Entry point                                                          */
/* ------------------------------------------------------------------ */

/**
 * Enumerate every directory route with its static HTML.
 *
 * @param dataDir absolute path to src/data/afh
 */
export function buildAfhDirectoryRoutes(dataDir: string): PrerenderedRoute[] {
  const index = JSON.parse(readFileSync(path.join(dataDir, "county-index.json"), "utf8")) as CityIndexEntry[];
  const citiesDir = path.join(dataDir, "cities");
  const out: PrerenderedRoute[] = [];
  let latest = "";

  for (const entry of index) {
    const file = path.join(citiesDir, `${entry.citySlug}.json`);
    let facilities: Facility[];
    try {
      facilities = JSON.parse(readFileSync(file, "utf8")) as Facility[];
    } catch {
      continue;
    }
    for (const f of facilities) if (f.retrievedAt > latest) latest = f.retrievedAt;

    out.push(buildCityPage(entry, facilities));
    for (const filter of FILTERS) {
      if (facilities.some(filter.matches)) out.push(buildCityPage(entry, facilities, filter));
    }
    for (const f of facilities) out.push(buildFacilityPage(entry, f));
  }

  out.unshift(buildHubPage(index, latest));
  return out;
}
