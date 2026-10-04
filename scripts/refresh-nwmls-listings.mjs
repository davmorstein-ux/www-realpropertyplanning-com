#!/usr/bin/env node
/**
 * Refresh the NWMLS listings in src/data/afhListings.ts from a Matrix export.
 *
 * Export the current MLS numbers from Matrix with the "Full" export format
 * (tab-delimited), then run:
 *
 *   node scripts/refresh-nwmls-listings.mjs <export.txt>          # report only
 *   node scripts/refresh-nwmls-listings.mjs <export.txt> --apply  # write changes
 *   node scripts/refresh-nwmls-listings.mjs --numbers              # MLS numbers to paste into Matrix
 *
 * What it does, for every NWMLS listing in the export:
 *   - Active / Pending price changes      -> updates price
 *   - Active -> Pending                   -> marketStatus "pending", statusChanged
 *   - Active/Pending -> Sold              -> marketStatus "sold", soldPrice, soldDate, statusChanged;
 *                                            photo removed (sold records carry none)
 *   - Expired / Cancelled / Withdrawn     -> deletes the record and its photo, adds a
 *                                            301 redirect to /afh-club/listings (IDX rule)
 *   - Listing broker changed              -> updates broker and phone, CLEARS the email
 *                                            (it must be copied from the new broker's roster card)
 *   - Every listing found                 -> lastVerified = today
 *
 * It never invents an email. Anything it can't decide (an unfamiliar status, a
 * listing missing from the export) is reported for a person to look at.
 * Phone numbers follow the existing rule: the agent's cell from the export,
 * else the listing office phone.
 */
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LISTINGS = resolve(ROOT, "src/data/afhListings.ts");
const REDIRECTS = resolve(ROOT, "src/data/redirects.ts");
const PHOTOS = resolve(ROOT, "public");

const [, , exportPath, flag] = process.argv;

if (exportPath === "--numbers") {
  // Live NWMLS listings (sold ones are final and don't need rechecking).
  const text = readFileSync(LISTINGS, "utf8");
  const live = text.split(/\n  \{\n/).filter((b) => /source: "nwmls"/.test(b) && /marketStatus: "(active|pending)"/.test(b))
    .map((b) => b.match(/mlsNum: "([^"]+)"/)[1]);
  console.log(`${live.length} live NWMLS listings:\n${live.join(",")}`);
  process.exit(0);
}
if (!exportPath) {
  console.error("Usage: node scripts/refresh-nwmls-listings.mjs <matrix-full-export.txt> [--apply]");
  process.exit(1);
}
const APPLY = flag === "--apply";
const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });

/* ---------- read the export ---------- */
function parseTsv(text) {
  const rows = [];
  let field = "", row = [], q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"' && field === "") q = true;
    else if (c === "\t") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some((v) => v !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? "").trim()])));
}

const exportRows = parseTsv(readFileSync(exportPath, "latin1"));
if (!exportRows.length || !("Listing Number" in exportRows[0]) || !("Status" in exportRows[0])) {
  console.error("This doesn't look like a Matrix \"Full\" export (no Listing Number / Status columns).");
  process.exit(1);
}
const byMls = new Map(exportRows.map((r) => [r["Listing Number"], r]));

/* ---------- helpers ---------- */
const money = (v) => {
  const n = Math.round(Number(String(v).replace(/[$,]/g, "")));
  return Number.isFinite(n) && n > 0 ? "$" + n.toLocaleString("en-US") : null;
};
const isoDate = (v) => {
  if (!v) return null;
  if (/^\d{4}-\d{2}-\d{2}/.test(v)) return v.slice(0, 10);
  const m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  return m ? `${m[3]}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}` : null;
};
const phone = (v) => {
  const d = String(v || "").replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : null;
};
/** Matrix status -> site status. null = needs a person. */
function mapStatus(s) {
  const t = s.toLowerCase();
  if (t === "active") return "active";
  if (t.startsWith("pending") || t.startsWith("contingent")) return "pending";
  if (t === "sold") return "sold";
  if (t === "expired") return "expired";
  if (t === "cancelled" || t === "canceled" || t === "withdrawn") return "withdrawn";
  return null;
}
const field = (block, name) => block.match(new RegExp(`\\n    ${name}: "([^"]*)",`))?.[1];
const setField = (block, name, value, after) => {
  const line = `    ${name}: "${value}",`;
  if (new RegExp(`\\n    ${name}: `).test(block)) return block.replace(new RegExp(`\\n    ${name}: [^\\n]*`), "\n" + line);
  return block.replace(new RegExp(`(\\n    ${after}: [^\\n]*)`), `$1\n${line}`);
};
const dropField = (block, name) => block.replace(new RegExp(`\\n    ${name}: [^\\n]*`), "");
const slug = (city, num) =>
  `${city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}-nwmls-${num.toLowerCase()}`;

/* ---------- walk the listings ---------- */
const src = readFileSync(LISTINGS, "utf8");
const start = src.indexOf("export const afhListings: AFHListing[] = [");
const end = src.indexOf("\n];", start);
const head = src.slice(0, start), body = src.slice(start, end), tail = src.slice(end);
const parts = body.split(/(?=\n  \{\n)/);

const report = { price: [], status: [], removed: [], broker: [], notFound: [], unknown: [], verified: 0 };
const redirects = [];
const photosToDelete = [];

const out = parts.map((block) => {
  if (!/\n  \{\n/.test(block) || !/source: "nwmls"/.test(block)) return block;
  const mls = field(block, "mlsNum");
  const where = `${mls} ${field(block, "address")}, ${field(block, "city")}`;
  const cur = field(block, "marketStatus");
  const row = byMls.get(mls);
  if (!row) {
    if (cur !== "sold") report.notFound.push(`${where} (${cur})`);
    return block;
  }
  const next = mapStatus(row["Status"]);
  if (!next) { report.unknown.push(`${where}: Matrix status "${row["Status"]}"`); return block; }

  if (next === "expired" || next === "withdrawn") {
    report.removed.push(`${where}: ${row["Status"]}`);
    redirects.push(`  { from: "/afh-club/listings/${slug(field(block, "city"), mls)}", to: "/afh-club/listings" },`);
    const photo = field(block, "photo");
    if (photo) photosToDelete.push(photo);
    return "";
  }

  let b = block;
  const changed = isoDate(row["Status Change Date"]) || today;
  if (next !== cur && !(cur === "sold")) {
    report.status.push(`${where}: ${cur} -> ${next}`);
    b = setField(b, "marketStatus", next, "id");
    b = setField(b, "statusChanged", changed, "lastVerified");
    if (next === "sold") {
      const sp = money(row["Selling Price"]), sd = isoDate(row["Selling Date"]);
      if (sp) b = setField(b, "soldPrice", sp, "statusChanged");
      if (sd) b = setField(b, "soldDate", sd, sp ? "soldPrice" : "statusChanged");
      if (!sp || !sd) report.unknown.push(`${where}: sold, but the export has no ${!sp ? "selling price" : "selling date"}`);
      // Sold records carry no photo (site convention for closed NWMLS sales).
      const photo = field(b, "photo");
      if (photo) { photosToDelete.push(photo); b = b.replace(/\n    photo: "[^"]*",/, "\n    photo: null,"); }
    }
  }
  if (next === "active" || next === "pending") {
    const p = money(row["Current Price"] || row["Listing Price"]);
    if (p && p !== field(b, "price")) { report.price.push(`${where}: ${field(b, "price")} -> ${p}`); b = setField(b, "price", p, "sqft"); }
  }
  const agent = row["Listing Agent Full Name"];
  if (agent && field(b, "broker") && agent !== field(b, "broker") && cur !== "sold") {
    const firm = row["Listing Office Name"];
    const firmNote = firm && firm !== field(b, "brokerage") ? `; firm set to "${firm}" (export's short name — use the full firm name from the roster card)` : "";
    report.broker.push(`${where}: ${field(b, "broker")} -> ${agent} (ID ${row["Listing Agent ID"]}) — email cleared; copy it from the roster card${firmNote}`);
    b = setField(b, "broker", agent, "photo");
    if (firmNote) b = setField(b, "brokerage", firm, "broker");
    const ph = phone(row["Listing Agent Cellular"]) || phone(row["Listing Office Phone"]);
    if (ph) b = setField(b, "listingContactPhone", ph, "brokerage");
    b = dropField(b, "listingContactEmail");
  }
  b = setField(b, "lastVerified", today, "marketStatus");
  report.verified++;
  return b;
});

/* ---------- report ---------- */
const section = (title, list) => list.length && console.log(`\n${title} (${list.length})\n  ${list.join("\n  ")}`);
console.log(`NWMLS refresh — ${exportRows.length} rows in export, ${report.verified} listings verified${APPLY ? "" : " (report only; add --apply to write)"}`);
section("Removed — expired or cancelled (record, photo and page deleted; redirected)", report.removed);
section("Status changes", report.status);
section("Price changes", report.price);
section("Listing broker changed — NEEDS the new broker's roster email", report.broker);
section("Live listings NOT in this export — check them in Matrix", report.notFound);
section("Needs a person", report.unknown);
const newInExport = exportRows.filter((r) => !src.includes(`mlsNum: "${r["Listing Number"]}"`)).map((r) => `${r["Listing Number"]} ${r["Status"]} ${r["City"]}`);
section("In the export but not on the site (new? add by hand)", newInExport);

if (!APPLY) process.exit(0);

let listings = head + out.join("") + tail;
writeFileSync(LISTINGS, listings);
for (const p of photosToDelete) {
  const f = resolve(PHOTOS, p.replace(/^\//, ""));
  if (existsSync(f)) unlinkSync(f);
}
if (redirects.length) {
  let r = readFileSync(REDIRECTS, "utf8");
  const fresh = redirects.filter((line) => !r.includes(line.trim()));
  if (fresh.length) {
    const close = r.lastIndexOf("\n];");
    r = r.slice(0, close) +
      `\n  /* AFH listings that expired or were cancelled (${today}). Removed under NWMLS IDX rules. */\n` +
      fresh.join("\n") + r.slice(close);
    writeFileSync(REDIRECTS, r);
  }
}
console.log("\nWritten. Next: npx tsc --noEmit -p tsconfig.app.json && npx vitest run");
