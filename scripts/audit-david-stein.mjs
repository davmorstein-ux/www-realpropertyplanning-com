#!/usr/bin/env node
/**
 * Sitewide audit: find every "David Stein" reference outside the approved
 * pages (About, Featured Realtor, Featured Real Estate Appraiser).
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
const TEXT_EXT = /\.(tsx?|jsx?|html|md|mdx|txt|json|css|svg)$/i;

const APPROVED = new Set([
  "src/pages/About.tsx",
  "src/pages/Realtor.tsx",
  "src/pages/RealEstateAppraiser.tsx",
]);

const PATTERNS = [
  /David Stein/i,
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
  content.split(/\r?\n/).forEach((line, i) => {
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
