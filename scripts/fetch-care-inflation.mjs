#!/usr/bin/env node
/**
 * fetch-care-inflation.mjs
 *
 * Pulls the BLS Consumer Price Index series for long-term care and writes the
 * trailing growth rate into src/lib/careInflation.ts, which the Cost of Care
 * calculator reads as its default assumption.
 *
 * WHY A BUILD-TIME SCRIPT AND NOT A LIVE FETCH
 * --------------------------------------------
 * The calculator projects costs up to 20 years out, and families print the
 * result and take it to siblings or an attorney. A number fetched at page load
 * would mean the printout stops matching the screen the moment BLS publishes an
 * update, and it would put an external API in the critical path of a page that
 * has to work. Running this annually gives current, sourced figures with no
 * runtime dependency, no API key in the browser, no CORS, and identical output
 * for every visitor.
 *
 * USAGE
 *   node scripts/fetch-care-inflation.mjs            # fetch, validate, write
 *   node scripts/fetch-care-inflation.mjs --dry-run  # print, write nothing
 *   BLS_API_KEY=xxxx node scripts/fetch-care-inflation.mjs
 *
 * The v2 API works without a key at a low daily quota, which is ample for a
 * script run once a year. Registering for a free key raises the limit.
 *
 * ---------------------------------------------------------------------------
 * !! THE SERIES ID BELOW HAS NOT BEEN VERIFIED AGAINST A LIVE BLS RESPONSE !!
 *
 * This script was written in an environment with no network access to
 * api.bls.gov, so SERIES_ID is a best recollection, not a confirmed value. BLS
 * item codes change between CPI revisions. Before trusting the first run:
 *
 *   1. Run with --dry-run.
 *   2. Check the printed seriesID and catalog title actually describe nursing
 *      home / long-term care costs.
 *   3. Sanity-check the computed rate. Long-term care has historically run
 *      above headline CPI; a result below general inflation suggests the wrong
 *      series.
 *
 * If the series is wrong, find the right ID at https://data.bls.gov/toppicks
 * or via the CPI item code tables, and update SERIES_ID. The script validates
 * shape and plausibility but CANNOT tell you it fetched the wrong subject.
 * ---------------------------------------------------------------------------
 */

import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, "../src/lib/careInflation.ts");

/* CPI-U, US city average, nursing homes and adult day services, not
   seasonally adjusted. See the verification warning in the header. */
const SERIES_ID = "CUUR0000SEMF03";
const SERIES_LABEL = "Nursing homes and adult day services";

/* Ten years smooths out single-year spikes. The calculator projects decades,
   so one hot year is noise — using it would swing a 20-year projection wildly
   for no gain in accuracy. */
const YEARS = 10;

/* A rate outside this range means something is wrong: the wrong series, a
   parsing error, or an economic situation this calculator should not be
   quietly extrapolating. The script refuses to write rather than publish a
   number nobody looked at. Matches the calculator's own 1-8% bounds. */
const MIN_PLAUSIBLE = 1.0;
const MAX_PLAUSIBLE = 8.0;

const dryRun = process.argv.includes("--dry-run");

function fail(msg) {
  console.error(`\n  FAILED: ${msg}\n`);
  console.error("  src/lib/careInflation.ts was NOT modified.");
  console.error("  The calculator keeps using whatever value is already there.\n");
  process.exit(1);
}

async function main() {
  const endYear = new Date().getFullYear();
  const startYear = endYear - YEARS;

  const body = {
    seriesid: [SERIES_ID],
    startyear: String(startYear),
    endyear: String(endYear),
    catalog: true,
  };
  if (process.env.BLS_API_KEY) body.registrationkey = process.env.BLS_API_KEY;

  console.log(`\n  Fetching ${SERIES_ID} (${startYear}-${endYear})...`);

  let json;
  try {
    const res = await fetch("https://api.bls.gov/publicAPI/v2/timeseries/data/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) fail(`BLS returned HTTP ${res.status}`);
    json = await res.json();
  } catch (err) {
    fail(`Could not reach api.bls.gov — ${err.message}`);
  }

  if (json.status !== "REQUEST_SUCCEEDED") {
    fail(`BLS status "${json.status}": ${(json.message || []).join("; ")}`);
  }

  const series = json.Results?.series?.[0];
  if (!series) fail("Response contained no series.");
  if (series.seriesID !== SERIES_ID) {
    fail(`Asked for ${SERIES_ID}, got ${series.seriesID}.`);
  }

  const title = series.catalog?.series_title || "(no catalog title returned)";
  console.log(`  Series title: ${title}`);

  /* Annual averages only (M13), falling back to December readings. Mixing
     monthly and annual points would distort the compound calculation. */
  const byYear = new Map();
  for (const d of series.data || []) {
    const year = Number(d.year);
    const value = Number(d.value);
    if (!Number.isFinite(value)) continue;
    if (d.period === "M13" || d.periodName === "Annual") {
      byYear.set(year, value);
    } else if (d.period === "M12" && !byYear.has(year)) {
      byYear.set(year, value);
    }
  }

  const years = [...byYear.keys()].sort((a, b) => a - b);
  if (years.length < 5) {
    fail(`Only ${years.length} annual data points returned; need at least 5.`);
  }

  const firstYear = years[0];
  const lastYear = years[years.length - 1];
  const firstValue = byYear.get(firstYear);
  const lastValue = byYear.get(lastYear);
  const span = lastYear - firstYear;

  if (span < 4) fail(`Data spans only ${span} years.`);
  if (!(firstValue > 0) || !(lastValue > 0)) fail("Non-positive index values.");

  /* Compound annual growth rate, not the mean of yearly percentage changes.
     Averaging yearly rates overstates growth — the calculator compounds, so
     the input must be a compound rate for the projection to be self-consistent. */
  const cagr = (Math.pow(lastValue / firstValue, 1 / span) - 1) * 100;
  const rate = Math.round(cagr * 10) / 10;

  console.log(`  ${firstYear}: ${firstValue}   ${lastYear}: ${lastValue}`);
  console.log(`  Compound annual growth over ${span} years: ${rate}%`);

  if (rate < MIN_PLAUSIBLE || rate > MAX_PLAUSIBLE) {
    fail(
      `Computed ${rate}%, outside the plausible ${MIN_PLAUSIBLE}-${MAX_PLAUSIBLE}% range. ` +
        `Check the series is correct before overriding this guard.`
    );
  }

  if (existsSync(OUT_PATH)) {
    const prev = readFileSync(OUT_PATH, "utf8").match(/CARE_INFLATION_RATE = ([\d.]+)/);
    if (prev) {
      const delta = Math.abs(rate - Number(prev[1]));
      console.log(`  Previous value: ${prev[1]}%  (change of ${delta.toFixed(1)} points)`);
      if (delta > 1.5) {
        console.log("  NOTE: that is a large single-year revision. Worth a look.");
      }
    }
  }

  const asOf = new Date().toISOString().slice(0, 10);
  const out = `/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 * Written by scripts/fetch-care-inflation.mjs. Rerun that script to update.
 *
 * Source: U.S. Bureau of Labor Statistics, Consumer Price Index,
 * "${SERIES_LABEL}" (series ${SERIES_ID}).
 * Compound annual growth rate over ${span} years, ${firstYear}-${lastYear}.
 *
 * The Cost of Care calculator uses this as its DEFAULT growth assumption.
 * Readers can adjust it; when they do, the caption must stop citing BLS,
 * because at that point the number is theirs and not the Bureau's.
 */

export const CARE_INFLATION_RATE = ${rate};
export const CARE_INFLATION_SERIES_ID = ${JSON.stringify(SERIES_ID)};
export const CARE_INFLATION_SERIES_LABEL = ${JSON.stringify(SERIES_LABEL)};
export const CARE_INFLATION_FIRST_YEAR = ${firstYear};
export const CARE_INFLATION_LAST_YEAR = ${lastYear};
export const CARE_INFLATION_RETRIEVED = ${JSON.stringify(asOf)};
`;

  if (dryRun) {
    console.log("\n  --dry-run: nothing written. Output would be:\n");
    console.log(out);
    return;
  }

  writeFileSync(OUT_PATH, out, "utf8");
  console.log(`\n  Wrote ${OUT_PATH}`);
  console.log(`  CARE_INFLATION_RATE = ${rate}\n`);
}

main();
