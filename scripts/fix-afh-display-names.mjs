#!/usr/bin/env node
/**
 * One pass over the stored directory data (Oct 5, 2026): rewrite every
 * "displayName" through readableAfhName, so names that DSHS exported in
 * capitals read normally without waiting for the next DSHS import. Only the
 * displayName values change; the raw `name`, slugs and file formatting stay.
 *
 *   node scripts/fix-afh-display-names.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { readableAfhName } from "./lib/afh-display-name.mjs";

const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".json")) files.push(p);
  }
};
walk("src/data/afh");
let changed = 0;
for (const f of files) {
  const s = readFileSync(f, "utf8");
  const out = s.replace(/("displayName"\s*:\s*)"((?:[^"\\]|\\.)*)"/g, (m, k, v) => {
    const r = readableAfhName(JSON.parse(`"${v}"`));
    const enc = JSON.stringify(r).slice(1, -1);
    if (enc !== v) changed++;
    return `${k}"${enc}"`;
  });
  if (out !== s) writeFileSync(f, out);
}
console.log(`display names rewritten: ${changed} values across ${files.length} files`);
