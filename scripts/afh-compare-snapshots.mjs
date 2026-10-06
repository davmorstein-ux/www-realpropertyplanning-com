#!/usr/bin/env node
/**
 * Compare two directory snapshots (Oct 6, 2026) and write the licensing
 * changes between them to src/data/afh/changes/<from>_<to>.json.
 *
 *   node scripts/afh-compare-snapshots.mjs 2026-08-01 2026-09-14
 *
 * Only counties present in BOTH snapshots are compared, so a partial earlier
 * snapshot never makes a whole county look newly licensed.
 *
 * DSHS issues a new license number at a change of ownership. So a license that
 * appears at a street address where a different license disappeared is
 * reported as a likely change of ownership, not as a new home plus a closure.
 * Addresses are compared after normalising case, spacing and common street
 * suffixes; it is a best match, and the page says so.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { readableAfhName } from "./lib/afh-display-name.mjs";

const [from, to] = process.argv.slice(2);
if (!from || !to) {
  console.error("usage: node scripts/afh-compare-snapshots.mjs <from-date> <to-date>");
  process.exit(1);
}
const load = (d) => JSON.parse(readFileSync(`src/data/afh/snapshots/${d}.json`, "utf8"));
const A = load(from);
const B = load(to);
const shared = A.counties.filter((c) => B.counties.includes(c));
const inShared = (rec) => shared.includes(rec[0]);

const SUFFIX = { street: "st", avenue: "ave", road: "rd", drive: "dr", place: "pl", court: "ct", lane: "ln", boulevard: "blvd", way: "way", terrace: "ter", circle: "cir", parkway: "pkwy" };
const norm = (street, city) =>
  `${street} ${city}`
    .toLowerCase()
    .replace(/[.,#]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => SUFFIX[w] ?? w)
    .join(" ");

const added = Object.entries(B.homes).filter(([lic, r]) => inShared(r) && !A.homes[lic]);
const removed = Object.entries(A.homes).filter(([lic, r]) => inShared(r) && !B.homes[lic]);
const removedByAddr = new Map(removed.map(([lic, r]) => [norm(r[3], r[1]), [lic, r]]));

const view = ([lic, r]) => ({ license: lic, county: r[0], citySlug: r[1], slug: r[2], street: r[3], beds: r[4], name: readableAfhName(r[5]), city: r[6] ?? r[1] });
const newHomes = [];
const ownershipChanges = [];
const matchedRemoved = new Set();
for (const a of added) {
  const hit = removedByAddr.get(norm(a[1][3], a[1][1]));
  if (hit && !matchedRemoved.has(hit[0])) {
    matchedRemoved.add(hit[0]);
    ownershipChanges.push({ ...view(a), previousLicense: hit[0], previousName: readableAfhName(hit[1][5]) });
  } else newHomes.push(view(a));
}
const closed = removed.filter(([lic]) => !matchedRemoved.has(lic)).map(view);

const byNum = (a, b) => Number(b.license) - Number(a.license);
const out = {
  from,
  to,
  counties: shared,
  newHomes: newHomes.sort(byNum),
  ownershipChanges: ownershipChanges.sort(byNum),
  closed: closed.sort(byNum),
};
mkdirSync("src/data/afh/changes", { recursive: true });
writeFileSync(`src/data/afh/changes/${from}_${to}.json`, JSON.stringify(out, null, 1) + "\n");
console.log(`${from} -> ${to} (${shared.length} counties): ${newHomes.length} new, ${ownershipChanges.length} likely ownership changes, ${closed.length} no longer licensed`);
