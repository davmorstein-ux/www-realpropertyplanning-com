#!/usr/bin/env node
/**
 * Write one edition of the Washington AFH Market Report (Oct 6, 2026).
 *
 *   node scripts/build-afh-market-report.mjs 2026-10 2026-08-01_2026-09-14
 *
 * Inputs: the DSHS statistics (src/data/afh/stats.json), a licensing-changes
 * file from afh-compare-snapshots.mjs, and the reviewed NWMLS listing and sale
 * records in src/data/afhListings.ts as they stand today. Output:
 * src/data/afh/market/<edition>.json, frozen, so an edition never changes after
 * it is published even as listings move on. Every figure on the report page
 * comes from that file. Sales figures are aggregates only (counts, medians);
 * no listing details.
 */
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const [edition, changesKey] = process.argv.slice(2);
if (!/^\d{4}-\d{2}$/.test(edition ?? "") || !changesKey) {
  console.error("usage: node scripts/build-afh-market-report.mjs YYYY-MM <from>_<to>");
  process.exit(1);
}

const bundled = await build({
  entryPoints: ["src/data/afhListings.ts"],
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  alias: { "@": "./src" },
  loader: { ".webp": "empty", ".png": "empty", ".jpg": "empty" },
  logLevel: "silent",
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString("base64")}`);
const listings = mod.AFH_LISTINGS ?? mod.afhListings ?? Object.values(mod).find((v) => Array.isArray(v) && v[0]?.mlsNum);
if (!listings) throw new Error("could not find the listings array");

const stats = JSON.parse(readFileSync("src/data/afh/stats.json", "utf8"));
const changes = JSON.parse(readFileSync(`src/data/afh/changes/${changesKey}.json`, "utf8"));

const money = (s) => Number(String(s).replace(/[^0-9.]/g, ""));
const median = (xs) => {
  const a = [...xs].sort((x, y) => x - y);
  if (!a.length) return null;
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : Math.round((a[m - 1] + a[m]) / 2);
};
const days = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);

const asOf = listings.map((l) => l.lastVerified).filter(Boolean).sort().pop();
const yearAgo = new Date(asOf);
yearAgo.setUTCFullYear(yearAgo.getUTCFullYear() - 1);
const since = yearAgo.toISOString().slice(0, 10);

const sold = listings.filter((l) => l.marketStatus === "sold" && l.soldPrice && l.soldDate && l.soldDate > since);
const licensed = (l) => l.afhStatus === "operating" || l.afhStatus === "licensedNotOperating";
const group = (xs) => ({
  count: xs.length,
  medianPrice: median(xs.map((l) => money(l.soldPrice))),
  lowPrice: xs.length ? Math.min(...xs.map((l) => money(l.soldPrice))) : null,
  highPrice: xs.length ? Math.max(...xs.map((l) => money(l.soldPrice))) : null,
  medianDaysOnMarket: median(xs.filter((l) => l.listedDate).map((l) => days(l.listedDate, l.soldDate))),
  withDaysOnMarket: xs.filter((l) => l.listedDate).length,
});
const quarters = {};
for (const l of sold) {
  const d = new Date(l.soldDate);
  const q = `${d.getUTCFullYear()} Q${Math.floor(d.getUTCMonth() / 3) + 1}`;
  quarters[q] = (quarters[q] ?? 0) + 1;
}
const cityCounts = {};
for (const l of sold) cityCounts[l.city] = (cityCounts[l.city] ?? 0) + 1;

const live = listings.filter((l) => l.marketStatus === "active" || l.marketStatus === "pending");
const report = {
  edition,
  published: new Date().toISOString().slice(0, 10),
  dshs: {
    asOf: stats.retrievedTo,
    homes: stats.state.homes,
    beds: stats.state.beds,
    counties: stats.state.counties,
    avgBeds: stats.state.avgBeds,
    shares: stats.shares,
    topCounties: [...stats.counties].sort((a, b) => b.homes - a.homes).slice(0, 8).map((c) => ({ county: c.county, slug: c.slug, homes: c.homes, beds: c.beds })),
  },
  licensing: {
    from: changes.from,
    to: changes.to,
    counties: changes.counties,
    newHomes: changes.newHomes.length,
    ownershipChanges: changes.ownershipChanges.length,
    closed: changes.closed.length,
    byCounty: changes.counties.map((c) => ({
      county: c,
      newHomes: changes.newHomes.filter((h) => h.county === c).length,
      ownershipChanges: changes.ownershipChanges.filter((h) => h.county === c).length,
      closed: changes.closed.filter((h) => h.county === c).length,
    })),
    changesFile: changesKey,
  },
  sales: {
    asOf,
    since,
    onMarket: live.filter((l) => l.marketStatus === "active").length,
    pending: live.filter((l) => l.marketStatus === "pending").length,
    onMarketCities: new Set(live.map((l) => l.city)).size,
    sold: group(sold),
    soldLicensed: group(sold.filter(licensed)),
    soldOther: group(sold.filter((l) => !licensed(l))),
    soldWithBusiness: sold.filter((l) => l.businessIncluded === "yes").length,
    byQuarter: Object.entries(quarters).sort().map(([quarter, count]) => ({ quarter, count })),
    topCities: Object.entries(cityCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 6).map(([city, count]) => ({ city, count })),
  },
};
mkdirSync("src/data/afh/market", { recursive: true });
writeFileSync(`src/data/afh/market/${edition}.json`, JSON.stringify(report, null, 1) + "\n");
console.log(JSON.stringify(report, null, 1));
