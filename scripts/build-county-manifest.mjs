#!/usr/bin/env node
/**
 * Summarise every <county>-county.json into src/data/afh/counties.json so the
 * site can say which counties have been checked against DSHS, when, and how
 * many licensed homes each had — including counties that came back empty.
 *
 *   node scripts/build-county-manifest.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "src/data/afh";
const rows = readdirSync(dir)
  .filter((f) => f.endsWith("-county.json"))
  .map((f) => {
    const facilities = JSON.parse(readFileSync(join(dir, f), "utf8"));
    const slug = f.replace(/-county\.json$/, "");
    const county = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
    return {
      county,
      slug,
      facilityCount: facilities.length,
      totalBeds: facilities.reduce((s, x) => s + x.licensedBeds, 0),
      retrievedAt: facilities[0]?.retrievedAt ?? new Date().toISOString().slice(0, 10),
    };
  })
  .sort((a, b) => a.county.localeCompare(b.county));
writeFileSync(join(dir, "counties.json"), JSON.stringify(rows, null, 2) + "\n");
console.log(`${rows.length} counties, ${rows.reduce((s, r) => s + r.facilityCount, 0)} homes; ${rows.filter((r) => r.facilityCount === 0).map((r) => r.county).join(", ") || "none"} empty`);
