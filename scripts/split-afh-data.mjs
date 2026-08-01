#!/usr/bin/env node
/**
 * Split a parsed county file into per-city chunks plus a small county index.
 *
 *   node scripts/split-afh-data.mjs src/data/afh/king-county.json src/data/afh/cities
 *
 * Why: King County alone is 1.3 MB of JSON. Importing that statically would put
 * it in the main bundle and make every page on the site slower to load — on a
 * site built for elderly visitors who are often on poor connections, that is not
 * an acceptable trade. Each city becomes its own file, loaded on demand only
 * when someone opens that city's directory.
 *
 * The county index carries only what the hub page needs to render its city list,
 * so the hub stays small no matter how many counties are added later.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const outDir = args.pop();
const inputs = args;
if (inputs.length === 0 || !outDir) {
  console.error("usage: node scripts/split-afh-data.mjs <county.json...> <out-dir>");
  console.error("  pass ALL county files at once — cities that span county lines");
  console.error("  must be written from a single combined pass");
  process.exit(1);
}

// Accepts one or more county JSON files so all counties are rebuilt together —
// four cities (Auburn, Bothell, Woodinville, Milton) straddle county lines, and
// splitting them one county at a time would overwrite the shared city file.
const facilities = inputs.flatMap((f) => JSON.parse(readFileSync(f, "utf8")));
mkdirSync(outDir, { recursive: true });

const byCity = new Map();
for (const f of facilities) {
  const key = f.address.citySlug;
  if (!byCity.has(key)) byCity.set(key, []);
  byCity.get(key).push(f);
}

const index = [];
let largest = { city: null, bytes: 0 };

for (const [citySlug, list] of [...byCity.entries()].sort()) {
  // Alphabetical within a city so the rendered list is stable between builds.
  list.sort((a, b) => a.displayName.localeCompare(b.displayName));

  const json = JSON.stringify(list);
  writeFileSync(join(outDir, `${citySlug}.json`), json + "\n");
  if (json.length > largest.bytes) largest = { city: citySlug, bytes: json.length };

  // A city split across two counties (e.g. Bothell in King and Snohomish) gets
  // one page containing all its homes — that is what a reader searching for
  // "adult family homes in Bothell" wants. Counties are listed in order of how
  // many of the city's homes fall in each, so the primary county reads first.
  const countyTally = new Map();
  list.forEach((f) => countyTally.set(f.address.county, (countyTally.get(f.address.county) ?? 0) + 1));
  const countiesForCity = [...countyTally.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);

  index.push({
    city: list[0].address.city,
    citySlug,
    county: countiesForCity[0],
    counties: countiesForCity,
    facilityCount: list.length,
    totalBeds: list.reduce((s, f) => s + f.licensedBeds, 0),
    // Counts the hub needs to label each city without loading the city file.
    behaviorSupport: list.filter((f) => f.contracts.includes("specializedBehaviorSupport")).length,
    developmentalDisabilities: list.filter((f) =>
      f.specialties.includes("developmentalDisabilities"),
    ).length,
    privatePay: list.filter((f) => !f.acceptsMedicaid).length,
    withReports: list.filter((f) => f.hasReports).length,
  });
}

index.sort((a, b) => b.facilityCount - a.facilityCount);
writeFileSync(join(outDir, "..", "county-index.json"), JSON.stringify(index, null, 2) + "\n");

console.error(`wrote ${byCity.size} city files + county-index.json`);
console.error(`largest city file: ${largest.city} (${(largest.bytes / 1024).toFixed(0)} KB)`);
console.error(`county index: ${(JSON.stringify(index).length / 1024).toFixed(1)} KB`);
