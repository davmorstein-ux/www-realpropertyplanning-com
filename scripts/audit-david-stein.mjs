#!/usr/bin/env node
/**
 * Sitewide audit: find every literal "David Stein" reference outside the
 * approved files.
 *
 * Since Sept 22, 2026 the featured broker and appraiser are defined ONCE, in
 * src/data/featuredProfessionals.ts (and their photos/bios in
 * src/data/featuredProfessionalAssets.ts). Every disclosure, CTA, byline,
 * credential line, contact tool and schema entity reads from there, so the
 * name may appear literally only in those two files, in the About page's
 * founder story, and in the old /about-david-stein redirect. Everything the
 * audit lists as a violation is page prose that still names him as the actor
 * ("David handles…", "Can David Stein appraise…") — the remaining rewrite
 * work, to be reworded so the actor is the featured broker or a licensed
 * professional, or made to read the record.
 *
 * Testimonial quotes that say "David" are in approved files; they are the
 * featured broker's reviews and move with him.
 *
 * Usage:
 *   node scripts/audit-david-stein.mjs           # human-readable report
 *   node scripts/audit-david-stein.mjs --json    # machine-readable JSON
 *   node scripts/audit-david-stein.mjs --strict  # exit 1 if violations exist
 */
import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "public"];
const EXTRA_FILES = ["index.html"];
const TEXT_EXT = /\.(tsx?|jsx?|html|md|mdx|txt|css)$/i; // JSON (DSHS data, other Davids) and SVG art are not copy

const APPROVED = new Set([
  "src/data/featuredProfessionals.ts",
  "src/data/featuredProfessionalAssets.ts",
  "src/pages/About.tsx",
  "src/App.tsx", // /about-david-stein redirect only
  "src/data/sitemap-data.ts", // same redirect
  "src/data/afhListings.ts", // provenance comment: who reviewed the closed-sales data, when
  "src/data/afhPrivatePayRanges.ts", // provenance comment: whose working bands these are
  "src/components/ZillowReviewsCarousel.tsx", // the featured broker's own Zillow reviews, quoted
  "public/llms.txt", // static; src/test/featuredProfessionals.test.ts checks it still matches the record
]);

// Lines the audit ignores: code comments (decision notes such as "David said…"),
// other people named David, the speech-synthesis voice, this audit's own tests,
// and the featured broker's quoted Zillow reviews in the two files that carry them.
const IGNORE_LINE = [
  /^\s*(\/\/|\*|\/\*|\{\/\*)/,
  /Microsoft David/,
  /David Ketter/,
];
const TESTIMONIAL_FILES = new Set(["src/pages/Realtor.tsx", "src/pages/AFHRealEstateBroker.tsx"]);

const PATTERNS = [
  /David Stein/i,
  /\bDavid\b/, // the first name alone, in prose that makes him the actor
  /davidStein/,
  /david-stein/,
  /daveHeadshot/,
  /david\.stein/i,
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (TEXT_EXT.test(p)) out.push(p);
  }
  return out;
}

const files = [
  ...SCAN_DIRS.flatMap((d) => walk(join(ROOT, d))),
  ...EXTRA_FILES.map((f) => join(ROOT, f)),
];

const hits = [];
for (const file of files) {
  let content;
  try { content = readFileSync(file, "utf8"); } catch { continue; }
  const rel = relative(ROOT, file);
  let inBlock = false; // inside a /* … */ block that started on an earlier line
  content.split(/\r?\n/).forEach((line, i) => {
    const wasInBlock = inBlock;
    if (/\/\*/.test(line) && !/\*\//.test(line.slice(line.indexOf("/*")))) inBlock = true;
    if (/\*\//.test(line)) inBlock = false;
    if (wasInBlock) return;
    if (IGNORE_LINE.some((re) => re.test(line))) return;
    if (TESTIMONIAL_FILES.has(rel) && /^\s*text: "/.test(line)) return;
    if (rel.startsWith("src/test/")) return;
    if (PATTERNS.some((re) => re.test(line))) {
      hits.push({ file: rel, line: i + 1, text: line.trim().slice(0, 240) });
    }
  });
}

const violations = hits.filter((h) => !APPROVED.has(h.file));
const approved = hits.filter((h) => APPROVED.has(h.file));

if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ violations, approved }, null, 2));
} else {
  const byFile = (arr) => arr.reduce((m, h) => ((m[h.file] ??= []).push(h), m), {});
  const print = (label, group) => {
    console.log(`\n## ${label}\n`);
    for (const [f, items] of Object.entries(group)) {
      console.log(`### ${f}  (${items.length})`);
      for (const it of items) console.log(`  L${it.line}: ${it.text}`);
      console.log();
    }
  };
  console.log(`David Stein audit — ${hits.length} matches in ${new Set(hits.map(h=>h.file)).size} files`);
  print("APPROVED (keep)", byFile(approved));
  print("VIOLATIONS (remove / rewrite as 'Real Property Planning')", byFile(violations));
  console.log(`Total violations: ${violations.length}`);
}

if (process.argv.includes("--strict") && violations.length) process.exit(1);
