/**
 * Local guide on each city's directory page, /afh-club/homes/<city>
 * (Oct 19, 2026): what care costs there, what the dementia designation means,
 * and links to the nearby cities in the same county.
 *
 * Search Console (Sept 20 – Oct 17, 2026, Bothell page): the real searches
 * behind these pages were "adult family homes bothell", "care homes bothell"
 * and "care home for dementia / alzheimers bothell", at positions 11–24. The
 * pages were a bare list, so they gave Google little to rank. Every
 * sentence here is built from data already on the site; nothing is invented
 * per city:
 *   - Private pay: afhPrivatePayRanges.ts (David's reviewed bands; shown only
 *     when `confirmed`).
 *   - Medicaid: afhMedicaidRates.ts (DSHS daily rates by region).
 *   - Counts: the DSHS licensing records behind the page.
 *
 * Used by AFHCityGuide.tsx (live page) and prerender.ts (static HTML), so both
 * say the same thing. No "@/" imports: vite.config.ts loads this at build time.
 */
import { privatePayBandForPlace } from "../afhPrivatePayRanges";
import { FEATURED_APPRAISER } from "../featuredProfessionals";
import { AFH_MEDICAID_RATES, medicaidRange, monthly, rateRegionForCounty } from "../afhMedicaidRates";

/** A run of text, or a link. */
export type Seg = string | { href: string; text: string };

export interface CityGuideInput {
  city: string;
  citySlug: string;
  county: string;
  facilityCount: number;
  /** Homes that accept Medicaid. */
  medicaid: number;
  /** Homes with the DSHS dementia specialty designation. */
  dementia: number;
  /** Homes with the DSHS mental health specialty designation. */
  mentalHealth: number;
}

export interface CityIndexLike {
  city: string;
  citySlug: string;
  county: string;
  counties?: string[];
  facilityCount: number;
}

export interface CityGuide {
  heading: string;
  sections: { heading: string; paragraphs: Seg[][] }[];
  nearby: { href: string; text: string }[];
  countyLink: { href: string; text: string };
}

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;
const countySlug = (name: string) => name.toLowerCase().replace(/\s+county$/, "").replace(/[^a-z0-9]+/g, "-");
const monthYear = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
const longDay = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const of = (n: number, total: number, one: string, many: string) =>
  total > 1 && n === total ? `All ${total} ${many}` : n === 0 && total > 1 ? `None of the ${total} ${many}` : `${n} of the ${total} ${total === 1 ? one : many}`;

export function cityGuide(c: CityGuideInput, index: CityIndexLike[]): CityGuide {
  const { city, county, facilityCount: total } = c;

  /* ---- Cost ---- */
  const band = privatePayBandForPlace(city, county);
  const region = rateRegionForCounty(county);
  const { minDaily, maxDaily } = medicaidRange(region);
  const cost: Seg[][] = [];
  if (band.confirmed) {
    const memory = band.tiers.find((t) => /memory/i.test(t.label));
    cost.push([
      `Private pay for a private room with moderate care typically runs ${usd(band.low)} to ${usd(band.high)} a month per resident across ${band.label}.`,
      memory
        ? ` Memory care usually starts around ${usd(memory.low)} and can run ${memory.openEnded ? `past ${usd(memory.high)}` : `to ${usd(memory.high)}`}.`
        : "",
      ` Each home sets its own rate, so ask every home for its rate sheet. These ranges come from Real Property Planning founder ${FEATURED_APPRAISER.name}'s brokerage and appraisal work with operating homes (reviewed ${monthYear(band.reviewed)}).`,
    ]);
  }
  cost.push([
    `For a resident on Medicaid, DSHS pays ${city} homes ${usd(minDaily)} to ${usd(maxDaily)} a day (about ${usd(monthly(minDaily))} to ${usd(monthly(maxDaily))} a month), depending on the resident's care level. `,
    `The resident contributes most of their own income toward it; the family doesn't pay the daily rate. `,
    `${of(c.medicaid, total, "home", "homes")} in ${city} accept Medicaid. Rates are DSHS's ${region === "highCost" ? "King, Pierce and Snohomish" : "standard"} rates, effective ${longDay(AFH_MEDICAID_RATES.effective)}. `,
    { href: "/adult-family-home-costs", text: "Costs for any Washington city or county" },
    ".",
  ]);
  cost.push([
    "Paying for care with the family house? ",
    { href: "/my-plan#parent:", text: "Make a free step-by-step plan" },
    " for your parent's care and home.",
  ]);

  /* ---- Dementia and mental health ---- */
  const care: Seg[][] = [
    [
      `${of(c.dementia, total, "home", "homes")} in ${city} carry the DSHS dementia specialty designation, and ${c.mentalHealth} carry the mental health designation. `,
      "A designation means the provider completed the extra training the state requires. It is not a quality rating, and it doesn't say how many residents with dementia a home serves today. ",
      "On a visit, ask how the home handles wandering, nights and changes in care needs, and read its DSHS inspection record first. ",
      { href: "/senior-living/choosing-an-adult-family-home", text: "How to choose an adult family home" },
      ".",
    ],
  ];

  /* ---- Nearby cities: same county, most homes first ---- */
  const nearby = index
    .filter((x) => x.citySlug !== c.citySlug && (x.county === county || x.counties?.includes(county)))
    .sort((a, b) => b.facilityCount - a.facilityCount)
    .slice(0, 8)
    .map((x) => ({ href: `/afh-club/homes/${x.citySlug}`, text: `${x.city} (${x.facilityCount})` }));

  return {
    heading: `Adult family home care in ${city}`,
    sections: [
      { heading: `What adult family homes cost in ${city}`, paragraphs: cost },
      { heading: `Dementia and memory care in ${city}`, paragraphs: care },
    ],
    nearby,
    countyLink: { href: `/afh-club/homes/county/${countySlug(county)}`, text: `All adult family homes in ${county} County` },
  };
}
