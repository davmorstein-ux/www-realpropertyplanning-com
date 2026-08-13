#!/usr/bin/env node
/**
 * check-sitemap.mjs
 *
 * Reconciles the routes declared in src/App.tsx against public/sitemap.xml and
 * reports anything that has drifted apart. Run it after adding a route.
 *
 *   node scripts/check-sitemap.mjs
 *
 * Exits 1 when it finds a problem, so it can gate a build or a commit hook.
 *
 * WHY THIS IS A CHECKER AND NOT A GENERATOR
 * -----------------------------------------
 * The sitemap header used to reference scripts/generate-sitemap.mjs and warn
 * against hand-editing. That script was never committed, so the file has in
 * fact been hand-maintained for months — which is how
 * /legal-plans-identity-protection stayed out of the sitemap, and out of
 * Google, for weeks after it went live.
 *
 * The obvious fix is to write the missing generator. That would be wrong. The
 * sitemap holds information App.tsx does not and cannot:
 *
 *   - xhtml:link hreflang blocks on 48 entries, hand-curated
 *   - per-page <priority>, reflecting editorial judgement about what matters
 *   - <lastmod> dates that track real content changes, not file mtimes
 *
 * A generator would either discard all of that or need it supplied from a
 * side-file, at which point the side-file is the thing being maintained by
 * hand and nothing has been gained. Regenerating would trade a rare, visible
 * omission for the silent loss of real curation.
 *
 * So: the sitemap stays hand-maintained, and this script makes the drift
 * impossible to miss. At the time of writing it reports exactly one gap
 * (/share-your-experience) and zero dead entries, which is the correct shape
 * of answer — small, specific, actionable.
 */

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = resolve(__dirname, "../src/App.tsx");
const SITEMAP = resolve(__dirname, "../public/sitemap.xml");
const ORIGIN = "https://realpropertyplanning.com";

/* Routes that are intentionally absent from the sitemap. Add here WITH A
   REASON rather than silencing the whole check — an unexplained exclusion is
   indistinguishable from the bug this script exists to catch. */
const INTENTIONALLY_EXCLUDED = {
  "*": "catch-all 404 route",
  "/sitemap": "human-readable sitemap page; the XML is the crawlable one",
};

if (!existsSync(APP) || !existsSync(SITEMAP)) {
  console.error("Could not find src/App.tsx or public/sitemap.xml. Run from the repo root.");
  process.exit(1);
}

const appSrc = readFileSync(APP, "utf8");
const sitemapSrc = readFileSync(SITEMAP, "utf8");

/* Every <Route path="...">, then the subset that are <Navigate> redirects.
   Redirects must NOT be in the sitemap — listing a URL that 301s away wastes
   crawl budget and muddles which URL is canonical. */
const allRoutes = new Set();
for (const m of appSrc.matchAll(/<Route\s+path=\{?"([^"]+)"/g)) allRoutes.add(m[1]);

const redirects = new Set();
for (const m of appSrc.matchAll(/<Route\s+path=\{?"([^"]+)"\}?\s+element=\{<Navigate/g)) {
  redirects.add(m[1]);
}

const dynamic = [...allRoutes].filter((p) => p.includes(":"));
const staticRoutes = [...allRoutes].filter(
  (p) => !p.includes(":") && !p.includes("*") && !redirects.has(p)
);

const sitemapUrls = [...sitemapSrc.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].startsWith(ORIGIN) ? m[1].slice(ORIGIN.length) || "/" : m[1]
);
const sitemapSet = new Set(sitemapUrls);

/* A sitemap URL is legitimate if it matches a static route OR fits a dynamic
   pattern — the county and adult family home pages are generated from data and
   have no literal route of their own. */
const dynamicPatterns = dynamic.map(
  (d) => new RegExp("^" + d.replace(/:[^/]+/g, "[^/]+").replace(/\//g, "\\/") + "$")
);
const matchesDynamic = (p) => dynamicPatterns.some((rx) => rx.test(p));

const missing = staticRoutes.filter((p) => !sitemapSet.has(p) && !(p in INTENTIONALLY_EXCLUDED));
const dead = sitemapUrls.filter((p) => !allRoutes.has(p) && !matchesDynamic(p));
const redirected = [...redirects].filter((p) => sitemapSet.has(p));
const duplicates = sitemapUrls.filter((p, i) => sitemapUrls.indexOf(p) !== i);

console.log(`\n  routes in App.tsx : ${allRoutes.size}  (${redirects.size} redirects, ${dynamic.length} dynamic)`);
console.log(`  URLs in sitemap   : ${sitemapUrls.length}\n`);

let problems = 0;

if (missing.length) {
  problems += missing.length;
  console.log(`  MISSING FROM SITEMAP (${missing.length}) — live but not crawlable:`);
  for (const p of missing) console.log(`    ${p}`);
  console.log("");
}

if (dead.length) {
  problems += dead.length;
  console.log(`  DEAD SITEMAP ENTRIES (${dead.length}) — listed but no route, these 404:`);
  for (const p of dead) console.log(`    ${p}`);
  console.log("");
}

if (redirected.length) {
  problems += redirected.length;
  console.log(`  REDIRECTS IN SITEMAP (${redirected.length}) — remove, they 301 away:`);
  for (const p of redirected) console.log(`    ${p}`);
  console.log("");
}

if (duplicates.length) {
  problems += duplicates.length;
  console.log(`  DUPLICATE ENTRIES (${duplicates.length}):`);
  for (const p of [...new Set(duplicates)]) console.log(`    ${p}`);
  console.log("");
}

if (!problems) {
  console.log("  No drift. Every live route is listed and every listed URL resolves.\n");
  process.exit(0);
}

console.log(`  ${problems} problem(s). Edit public/sitemap.xml by hand — alphabetically,`);
console.log("  matching the format of neighbouring entries.\n");
process.exit(1);
