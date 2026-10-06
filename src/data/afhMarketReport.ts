/**
 * Washington AFH Market Report and newly licensed homes (Oct 6, 2026).
 *
 * Each edition is a frozen JSON file in src/data/afh/market/, written by
 * scripts/build-afh-market-report.mjs; the licensing changes behind it are in
 * src/data/afh/changes/, written by scripts/afh-compare-snapshots.mjs. Monthly
 * steps are in docs/afh-market-report.md. To publish a new edition, add its
 * import to EDITIONS below (newest first) and point LATEST_CHANGES at the new
 * changes file.
 *
 * Used by the pages and by vite.config.ts (prerender): no React, no "@/".
 */
import oct2026 from "./afh/market/2026-10.json";
import changes20260914 from "./afh/changes/2026-08-01_2026-09-14.json";

export type MarketEdition = typeof oct2026;
export type LicensingChanges = typeof changes20260914;
export type ChangedHome = LicensingChanges["newHomes"][number];

export const EDITIONS: MarketEdition[] = [oct2026];
export const LATEST: MarketEdition = EDITIONS[0];
export const LATEST_CHANGES: LicensingChanges = changes20260914;

export const REPORT_HUB = "/afh-club/market-report";
export const NEW_LICENSES_PATH = "/afh-club/new-licenses";
export const editionPath = (e: MarketEdition) => `${REPORT_HUB}/${e.edition}`;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const editionTitle = (e: MarketEdition) => {
  const [y, m] = e.edition.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};
export const longDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};
export const usd = (n: number | null) => (n == null ? "n/a" : `$${n.toLocaleString("en-US")}`);
export const num = (n: number) => n.toLocaleString("en-US");
const countyList = (cs: string[]) => (cs.length < 3 ? cs.join(" and ") : `${cs.slice(0, -1).join(", ")} and ${cs[cs.length - 1]}`);

export const homePath = (h: { citySlug: string; slug: string }) => `/afh-club/homes/${h.citySlug}/${h.slug}`;

/** One-paragraph summary, used at the top of the edition, on the hub and in the prerender. */
export function editionSummary(e: MarketEdition): string {
  const s = e.sales;
  const l = e.licensing;
  return (
    `Washington had ${num(e.dshs.homes)} licensed adult family homes with ${num(e.dshs.beds)} beds in DSHS records as of ${longDate(e.dshs.asOf)}. ` +
    `In ${countyList(l.counties)} counties, ${l.newHomes} homes were newly licensed between ${longDate(l.from)} and ${longDate(l.to)}, ` +
    `${l.ownershipChanges} homes took a new license at the same address (usually a change of ownership), and ${l.closed} licenses ended. ` +
    `On the sales side, ${s.sold.count} adult family home properties reviewed on AFH Club sold in the 12 months to ${longDate(s.asOf)}, at a median price of ${usd(s.sold.medianPrice)}; ` +
    `${s.onMarket} were on the market and ${s.pending} pending.`
  );
}

/** Plain-text sections for the edition page's prerender (vite.config.ts). */
export function editionSections(e: MarketEdition): string[] {
  const s = e.sales;
  const l = e.licensing;
  return [
    `Licensed homes statewide — ${num(e.dshs.homes)} licensed adult family homes and ${num(e.dshs.beds)} licensed beds in ${e.dshs.counties} counties (DSHS records, ${longDate(e.dshs.asOf)}); an average of ${e.dshs.avgBeds} beds per home. ${e.dshs.shares.medicaid}% accept Medicaid, ${e.dshs.shares.dementia}% hold the dementia specialty, ${e.dshs.shares.mentalHealth}% mental health and ${e.dshs.shares.developmentalDisabilities}% developmental disabilities; ${e.dshs.shares.ecs}% hold an Expanded Community Services contract and ${e.dshs.shares.sbs}% Specialized Behavior Support. Largest counties: ${e.dshs.topCounties.map((c) => `${c.county} ${num(c.homes)}`).join(", ")}.`,
    `Licensing changes — Between ${longDate(l.from)} and ${longDate(l.to)} in ${countyList(l.counties)} counties: ${l.newHomes} newly licensed homes, ${l.ownershipChanges} new licenses at an address that had a different license (usually a change of ownership), and ${l.closed} licenses that ended. ${l.byCounty.map((c) => `${c.county}: ${c.newHomes} new, ${c.ownershipChanges} ownership changes, ${c.closed} ended`).join("; ")}.`,
    `Sales — ${s.sold.count} adult family home properties sold between ${longDate(s.since)} and ${longDate(s.asOf)}, median ${usd(s.sold.medianPrice)} (range ${usd(s.sold.lowPrice)} to ${usd(s.sold.highPrice)}), median ${s.sold.medianDaysOnMarket} days on market. Homes licensed at the time of sale: ${s.soldLicensed.count} sales, median ${usd(s.soldLicensed.medianPrice)}, ${s.soldLicensed.medianDaysOnMarket} days. Former, AFH-ready and other properties: ${s.soldOther.count} sales, median ${usd(s.soldOther.medianPrice)}, ${s.soldOther.medianDaysOnMarket} days. ${s.soldWithBusiness} sold with the business included. On the market as of ${longDate(s.asOf)}: ${s.onMarket} active and ${s.pending} pending in ${s.onMarketCities} cities.`,
    `About the figures — Licensing figures come from DSHS adult family home licensing records downloaded by Real Property Planning. A new license at an address where a different license ended is counted as an ownership change, because DSHS issues a new license at a change of ownership; it is a best match on the street address. Sales figures cover the NWMLS adult family home sales reviewed and classified on AFH Club, not every sale in the state; small numbers move a median, so read them as a direction, not a price for any one home.`,
  ];
}
