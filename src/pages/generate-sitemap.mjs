#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 *
 * Regenerates public/sitemap.xml from src/App.tsx so the sitemap can never
 * silently drift from the router again.
 *
 * Why this exists:
 *   The hand-maintained sitemap had drifted to 244 URLs against 288 canonical
 *   routes. Every translated URL (7 locales x 6 pages) was missing entirely,
 *   and the site emitted no hreflang annotations anywhere — so Google had no
 *   way to associate the translations with their English originals and could
 *   reasonably have treated them as duplicate content.
 *
 * What it does:
 *   1. Parses every static <Route path="..."> out of App.tsx
 *   2. Drops wildcards, params, and <Navigate> redirect routes (redirects must
 *      not appear in a sitemap)
 *   3. Preserves the lastmod and priority already assigned to any URL in the
 *      current sitemap, so prior tuning is not lost
 *   4. Assigns sensible defaults to URLs that are new
 *   5. Emits xhtml:link rel="alternate" hreflang blocks linking each English
 *      page to all of its translations and vice versa, plus x-default
 *
 * Usage:  node scripts/generate-sitemap.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://realpropertyplanning.com";

const APP = path.join(ROOT, "src/App.tsx");
const SITEMAP = path.join(ROOT, "public/sitemap.xml");

/** Locale prefixes that mirror English pages. Keep in sync with src/i18n/config. */
const LOCALES = {
  es: "es",
  ro: "ro",
  ti: "ti",
  tl: "tl",
  vi: "vi",
  "zh-cn": "zh-Hans",
  "zh-tw": "zh-Hant",
};
const PREFIXES = Object.keys(LOCALES);

// ---------------------------------------------------------------- parse routes

const app = readFileSync(APP, "utf8");

// Routes rendered via <Navigate> are redirects and must be excluded.
const redirects = new Set(
  [...app.matchAll(/path="([^"]+)"\s+element=\{<Navigate/g)].map((m) => m[1]),
);

const routes = [
  ...new Set(
    [...app.matchAll(/path="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((r) => r.startsWith("/") && !r.includes("*") && !r.includes(":"))
      .filter((r) => !redirects.has(r)),
  ),
].sort();

// ------------------------------------------------- preserve existing metadata

let existing = new Map();
try {
  const xml = readFileSync(SITEMAP, "utf8");
  for (const m of xml.matchAll(
    /<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]*)<\/lastmod>)?\s*(?:<changefreq>([^<]*)<\/changefreq>)?\s*(?:<priority>([^<]*)<\/priority>)?/g,
  )) {
    const pathname = m[1].replace(ORIGIN, "") || "/";
    existing.set(pathname.replace(/\/$/, "") || "/", {
      lastmod: m[2],
      changefreq: m[3],
      priority: m[4],
    });
  }
} catch {
  /* first run — no prior sitemap */
}

const TODAY = new Date().toISOString().slice(0, 10);

function localeOf(route) {
  const seg = route.split("/")[1];
  return PREFIXES.includes(seg) ? seg : null;
}

/** English equivalent of a translated route ("/es/contact" -> "/contact"). */
function englishOf(route) {
  const loc = localeOf(route);
  if (!loc) return route;
  const rest = route.slice(loc.length + 1);
  return rest === "" ? "/" : rest;
}

function defaultPriority(route) {
  if (route === "/") return "1.0";
  const depth = route.split("/").filter(Boolean).length;
  if (localeOf(route)) return "0.6";
  if (/^\/(probate-estate-sales|senior-transitions|afh-club)$/.test(route)) return "0.95";
  if (route.startsWith("/afh-club")) return depth > 2 ? "0.7" : "0.85";
  if (route.startsWith("/articles") || route.startsWith("/guides")) return "0.7";
  return depth >= 3 ? "0.6" : "0.75";
}

// --------------------------------------------- build hreflang alternate groups

/** englishPath -> { en: url, es: url, ... } */
const groups = new Map();
for (const r of routes) {
  const en = englishOf(r);
  if (!groups.has(en)) groups.set(en, {});
  const loc = localeOf(r);
  groups.get(en)[loc ?? "en"] = r;
}

function alternatesFor(route) {
  const group = groups.get(englishOf(route));
  if (!group) return "";
  // Only annotate pages that genuinely have translations.
  const translated = Object.keys(group).filter((k) => k !== "en");
  if (translated.length === 0) return "";

  const lines = [];
  if (group.en) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${group.en === "/" ? "/" : group.en}"/>`,
    );
  }
  for (const p of PREFIXES) {
    if (group[p]) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${LOCALES[p]}" href="${ORIGIN}${group[p]}"/>`);
    }
  }
  if (group.en) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${group.en === "/" ? "/" : group.en}"/>`,
    );
  }
  return "\n" + lines.join("\n");
}

// ------------------------------------------------------------------ emit XML

const out = [];
out.push('<?xml version="1.0" encoding="UTF-8"?>');
out.push(
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
);
out.push(`  <!-- Generated by scripts/generate-sitemap.mjs on ${TODAY}. Do not hand-edit. -->`);
out.push(`  <!-- ${routes.length} canonical URLs (${redirects.size} redirect routes excluded). -->`);
out.push("");

for (const route of routes) {
  const key = route.replace(/\/$/, "") || "/";
  const prev = existing.get(key) ?? {};
  const loc = `${ORIGIN}${route === "/" ? "/" : route}`;
  const lastmod = prev.lastmod || TODAY;
  const changefreq = prev.changefreq || "monthly";
  const priority = prev.priority || defaultPriority(route);
  const alts = alternatesFor(route);

  if (alts) {
    out.push(`  <url>`);
    out.push(`    <loc>${loc}</loc>`);
    out.push(`    <lastmod>${lastmod}</lastmod>`);
    out.push(`    <changefreq>${changefreq}</changefreq>`);
    out.push(`    <priority>${priority}</priority>${alts}`);
    out.push(`  </url>`);
  } else {
    out.push(
      `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
    );
  }
}

out.push("</urlset>");
writeFileSync(SITEMAP, out.join("\n") + "\n", "utf8");

const withAlts = routes.filter((r) => alternatesFor(r)).length;
console.log(`sitemap.xml written`);
console.log(`  canonical URLs : ${routes.length}`);
console.log(`  redirects excl.: ${redirects.size}`);
console.log(`  with hreflang  : ${withAlts}`);
console.log(`  preserved meta : ${routes.filter((r) => existing.has(r.replace(/\/$/, "") || "/")).length}`);
