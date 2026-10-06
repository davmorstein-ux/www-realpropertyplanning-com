#!/usr/bin/env node
/**
 * Save a compact snapshot of the licensed-home directory (Oct 6, 2026), so the
 * next DSHS import can be compared with this one for the monthly market report
 * and the newly licensed homes page.
 *
 *   node scripts/afh-snapshot.mjs 2026-09-14
 *
 * Run it right after each DSHS import (import-dshs-export.mjs, then
 * split-afh-data.mjs), with the date the export was downloaded. It reads the
 * county files in src/data/afh and writes src/data/afh/snapshots/<date>.json:
 * { asOf, counties: [...], homes: { <license>: [county, citySlug, slug, street, beds, name, city] } }.
 * Everything in it is already public on the directory pages.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";

const asOf = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(asOf ?? "")) {
  console.error("usage: node scripts/afh-snapshot.mjs YYYY-MM-DD");
  process.exit(1);
}
const dir = "src/data/afh";
const homes = {};
const counties = new Set();
for (const f of readdirSync(dir).filter((f) => f.endsWith("-county.json"))) {
  for (const h of JSON.parse(readFileSync(`${dir}/${f}`, "utf8"))) {
    counties.add(h.address.county);
    homes[h.licenseNumber] = [h.address.county, h.address.citySlug, h.slug, h.address.street, h.licensedBeds, h.displayName, h.address.city];
  }
}
mkdirSync(`${dir}/snapshots`, { recursive: true });
const out = { asOf, counties: [...counties].sort(), homes };
writeFileSync(`${dir}/snapshots/${asOf}.json`, JSON.stringify(out) + "\n");
console.log(`snapshot ${asOf}: ${Object.keys(homes).length} homes in ${counties.size} counties`);
