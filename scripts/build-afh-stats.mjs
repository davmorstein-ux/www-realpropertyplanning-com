#!/usr/bin/env node
/**
 * Washington AFH statistics (Sept 28, 2026).
 *
 * Reads every licensed home in src/data/afh/*-county.json (the DSHS Adult
 * Family Home Locator exports, see /research-methodology) and writes:
 *   - src/data/afh/stats.json                  what the data page renders
 *   - public/data/washington-afh-by-county.csv  the downloadable table
 *
 * Counts only; nothing is estimated or inferred. Run it after every directory
 * refresh:  node scripts/build-afh-stats.mjs
 * src/test/afhStats.test.ts fails if stats.json no longer matches the data.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "src/data/afh");

export function computeAfhStats(dir = dataDir) {
  const files = readdirSync(dir).filter((f) => f.endsWith("-county.json")).sort();
  const homes = files.flatMap((f) => JSON.parse(readFileSync(path.join(dir, f), "utf8")));
  const manifest = JSON.parse(readFileSync(path.join(dir, "counties.json"), "utf8"));

  const has = (h, list, key) => (h[list] ?? []).includes(key);
  const pct = (n, d) => (d ? Math.round((n / d) * 1000) / 10 : 0);

  const summarize = (list) => {
    const beds = list.reduce((s, h) => s + (h.licensedBeds || 0), 0);
    return {
      homes: list.length,
      beds,
      medicaid: list.filter((h) => h.acceptsMedicaid).length,
      dementia: list.filter((h) => has(h, "specialties", "dementia")).length,
      mentalHealth: list.filter((h) => has(h, "specialties", "mentalHealth")).length,
      developmentalDisabilities: list.filter((h) => has(h, "specialties", "developmentalDisabilities")).length,
      ecs: list.filter((h) => has(h, "contracts", "expandedCommunityServices")).length,
      sbs: list.filter((h) => has(h, "contracts", "specializedBehaviorSupport")).length,
    };
  };

  const state = summarize(homes);

  const bedSizes = {};
  for (const h of homes) bedSizes[h.licensedBeds] = (bedSizes[h.licensedBeds] || 0) + 1;

  const contracts = {};
  for (const h of homes) for (const c of h.contracts ?? []) contracts[c] = (contracts[c] || 0) + 1;

  const counties = manifest
    .map((m) => {
      const list = homes.filter((h) => h.address?.county === m.county);
      return { county: m.county, slug: m.slug, ...summarize(list) };
    })
    .sort((a, b) => a.county.localeCompare(b.county));

  const cityMap = new Map();
  for (const h of homes) {
    const key = `${h.address.city}|${h.address.county}`;
    if (!cityMap.has(key)) cityMap.set(key, { city: h.address.city, county: h.address.county, citySlug: h.address.citySlug, list: [] });
    cityMap.get(key).list.push(h);
  }
  const topCities = [...cityMap.values()]
    .map((c) => ({ city: c.city, county: c.county, citySlug: c.citySlug, homes: c.list.length, beds: c.list.reduce((s, h) => s + h.licensedBeds, 0) }))
    .sort((a, b) => b.homes - a.homes || a.city.localeCompare(b.city))
    .slice(0, 15);

  const dates = [...new Set(homes.map((h) => h.retrievedAt))].sort();

  return {
    retrievedFrom: dates[0],
    retrievedTo: dates[dates.length - 1],
    state: { ...state, counties: counties.filter((c) => c.homes > 0).length, avgBeds: Math.round((state.beds / state.homes) * 100) / 100 },
    shares: {
      medicaid: pct(state.medicaid, state.homes),
      dementia: pct(state.dementia, state.homes),
      mentalHealth: pct(state.mentalHealth, state.homes),
      developmentalDisabilities: pct(state.developmentalDisabilities, state.homes),
      ecs: pct(state.ecs, state.homes),
      sbs: pct(state.sbs, state.homes),
    },
    bedSizes: Object.entries(bedSizes)
      .map(([beds, n]) => ({ beds: Number(beds), homes: n, share: pct(n, state.homes) }))
      .sort((a, b) => a.beds - b.beds),
    contracts: Object.entries(contracts)
      .map(([id, n]) => ({ id, homes: n, share: pct(n, state.homes) }))
      .sort((a, b) => b.homes - a.homes),
    counties,
    topCities,
  };
}

function toCsv(stats) {
  const head = [
    "county", "licensed_homes", "licensed_beds", "share_of_state_homes_pct", "avg_beds_per_home",
    "homes_accepting_medicaid", "homes_with_dementia_designation", "homes_with_mental_health_designation",
    "homes_with_developmental_disabilities_designation", "homes_with_ecs_contract", "homes_with_sbs_contract",
  ];
  const rows = stats.counties.map((c) => [
    c.county, c.homes, c.beds,
    stats.state.homes ? ((c.homes / stats.state.homes) * 100).toFixed(1) : "0.0",
    c.homes ? (c.beds / c.homes).toFixed(2) : "",
    c.medicaid, c.dementia, c.mentalHealth, c.developmentalDisabilities, c.ecs, c.sbs,
  ]);
  const s = stats.state;
  rows.push(["Washington (total)", s.homes, s.beds, "100.0", (s.beds / s.homes).toFixed(2), s.medicaid, s.dementia, s.mentalHealth, s.developmentalDisabilities, s.ecs, s.sbs]);
  const note = `# Source: DSHS Adult Family Home Locator, retrieved ${stats.retrievedFrom} to ${stats.retrievedTo}. Compiled by Real Property Planning (AFH Club). Methodology: https://realpropertyplanning.com/research-methodology`;
  return [note, head.join(","), ...rows.map((r) => r.join(","))].join("\n") + "\n";
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const stats = computeAfhStats();
  writeFileSync(path.join(dataDir, "stats.json"), JSON.stringify(stats, null, 2) + "\n");
  mkdirSync(path.join(root, "public/data"), { recursive: true });
  writeFileSync(path.join(root, "public/data/washington-afh-by-county.csv"), toCsv(stats));
  console.log(`AFH stats: ${stats.state.homes} homes, ${stats.state.beds} beds, ${stats.state.counties} counties (retrieved ${stats.retrievedFrom} to ${stats.retrievedTo})`);
}
