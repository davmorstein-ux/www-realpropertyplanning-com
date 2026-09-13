#!/usr/bin/env node
/**
 * Convert a DSHS Adult Family Home Advanced Lookup *download* into the same
 * typed JSON that parse-dshs-locator.mjs produces from a pasted results page.
 *
 * The Advanced Lookup (https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx)
 * can search by county and, under Output Options, download the results as a
 * CSV/Excel file. Leave every Specific Criteria checkbox unticked — ticking any
 * of them restricts the search rather than widening it. The file is actually
 * tab-separated with a header row; this script accepts tab or comma.
 *
 *   node scripts/import-dshs-export.mjs raw/benton.csv > src/data/afh/benton-county.json
 *
 * Like the paste parser, this is strict: unknown contract or specialty values,
 * a missing county, or a row with no license number is reported to stderr and
 * the run fails, rather than writing a half-filled public record.
 */

import { readFileSync } from "node:fs";

const SPECIALTY_MAP = {
  "dementia": "dementia",
  "mental health": "mentalHealth",
  "developmental disabilities": "developmentalDisabilities",
};

const CONTRACT_MAP = {
  "adult family home": "adultFamilyHome",
  "specialized behavior support": "specializedBehaviorSupport",
  "expanded community services": "expandedCommunityServices",
  "private duty nursing": "privateDutyNursing",
  "afh respite": "afhRespite",
  "wa cares fund adult family home": "waCaresFund",
  "wa cares fund adult family home respite": "waCaresFundRespite",
  "wcf private duty nursing": "wcfPrivateDutyNursing",
  "dda specialty afh pilot": "ddaSpecialtyPilot",
  "dda meaningful day": "ddaMeaningfulDay",
  "hcs meaningful day": "hcsMeaningfulDay",
  "wcf afh sow": "wcfAfhSow",
  "wcf respite": "waCaresFundRespite",
  "adult family home (afh)": "adultFamilyHome",
};

const CITY_CORRECTIONS = {
  "federal wa": "Federal Way",
};

/* Same helpers as parse-dshs-locator.mjs so slugs stay identical across sources. */
function toDisplayName(raw) {
  return raw.replace(/^[\s#*·•\-–—]+/, "").replace(/\s{2,}/g, " ").trim();
}
function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function toFacilitySlug(displayName, licenseNumber) {
  const trimmed = displayName.replace(
    /[\s,]+(l\.?l\.?c\.?|l\.?l\.?p\.?|inc\.?|corp(oration)?\.?|limited liability (co|company)\.?)$/i,
    "",
  );
  return `${slugify(trimmed)}-${licenseNumber}`;
}

/**
 * The locator's on-screen results present addresses in title case ("7339 Ne
 * 140th St"); the download preserves whatever case the licensee typed, often
 * ALL CAPS. Normalise to the on-screen style so the three original counties and
 * the downloaded ones read the same, and so address matching against NWMLS
 * listings behaves.
 */
function titleCase(s) {
  return s
    .toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\b(\d+)(St|Nd|Rd|Th)\b/g, (_, n, suf) => n + suf.toLowerCase())
    .replace(/\s+/g, " ")
    .trim();
}

function normCity(raw) {
  const t = titleCase(raw);
  return CITY_CORRECTIONS[t.toLowerCase()] ?? t;
}

function splitList(cell) {
  return (cell ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Minimal RFC-4180 reader: quoted fields, doubled quotes, embedded delimiters and newlines. */
function parseDelimited(text, delim) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === delim) {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.some((c) => c.trim() !== "")) rows.push(row);
      row = [];
    } else field += ch;
  }
  if (field !== "" || row.length) {
    row.push(field);
    if (row.some((c) => c.trim() !== "")) rows.push(row);
  }
  return rows;
}

export function importExport(text, { retrievedAt = new Date().toISOString().slice(0, 10) } = {}) {
  const clean = text.replace(/^\uFEFF/, "");
  const firstLine = clean.split(/\r?\n/, 1)[0];
  const delim = firstLine.includes("\t") ? "\t" : ",";
  const rows = parseDelimited(clean, delim);
  if (rows.length < 2) throw new Error("export has no data rows");
  const header = rows[0].map((h) => h.trim());
  const col = (name) => {
    const i = header.indexOf(name);
    if (i === -1) throw new Error(`export is missing the "${name}" column`);
    return i;
  };
  const C = {
    specialty: col("Speciality"),
    contract: col("contract"),
    license: col("LicenseNumber"),
    type: col("FacilityType"),
    name: col("FacilityName"),
    status: col("FacilityStatus"),
    street: col("LocationAddress"),
    city: col("LocationCity"),
    state: col("LocationState"),
    zip: col("LocationZipCode"),
    county: col("LocationCounty"),
    phone: col("TelephoneNmbr"),
    region: col("RCSRegionUnit"),
    poc: col("FacilityPOC"),
    beds: col("LicensedBedCount"),
    hasReports: col("Has Reports?"),
  };

  const problems = [];
  const out = [];
  const seen = new Set();
  rows.slice(1).forEach((cells, idx) => {
    const row = idx + 2;
    const get = (i) => (cells[i] ?? "").trim();
    if (get(C.type) !== "AF") {
      problems.push(`row ${row}: facility type "${get(C.type)}" is not AF (adult family home)`);
      return;
    }
    if (get(C.status) !== "OP") {
      problems.push(`row ${row}: status "${get(C.status)}" is not OP — skipped`);
      return;
    }
    const licenseNumber = get(C.license);
    if (!/^\d+$/.test(licenseNumber)) {
      problems.push(`row ${row}: bad license number "${licenseNumber}"`);
      return;
    }
    if (seen.has(licenseNumber)) {
      problems.push(`row ${row}: duplicate license ${licenseNumber}`);
      return;
    }
    seen.add(licenseNumber);
    const county = get(C.county);
    if (!county) problems.push(`row ${row}: license ${licenseNumber} has no county`);
    const specialties = [];
    for (const s of splitList(get(C.specialty))) {
      if (/^(none|no speciali?ty)$/i.test(s)) continue;
      const key = SPECIALTY_MAP[s.toLowerCase()];
      if (!key) problems.push(`row ${row}: unknown specialty "${s}"`);
      else if (!specialties.includes(key)) specialties.push(key);
    }
    const contracts = [];
    for (const c of splitList(get(C.contract))) {
      const key = CONTRACT_MAP[c.toLowerCase()];
      if (!key) problems.push(`row ${row}: unknown contract "${c}"`);
      else if (!contracts.includes(key)) contracts.push(key);
    }
    if (get(C.beds) === "") {
      // A handful of brand-new licenses are exported before DSHS records a bed
      // count. A public page saying "0 beds" would be wrong, so hold the record
      // until the next export carries the number.
      problems.push(`row ${row}: license ${licenseNumber} (${get(C.name)}) has no bed count yet — skipped`);
      return;
    }
    const beds = Number(get(C.beds));
    if (!Number.isInteger(beds) || beds < 1 || beds > 8) problems.push(`row ${row}: bed count "${get(C.beds)}" out of range`);
    const name = get(C.name);
    const displayName = toDisplayName(name);
    const city = normCity(get(C.city));
    const phone = get(C.phone) || null;
    out.push({
      licenseNumber,
      name,
      displayName,
      slug: toFacilitySlug(displayName, licenseNumber),
      address: {
        street: titleCase(get(C.street)),
        city,
        citySlug: slugify(city),
        state: get(C.state) || "WA",
        zip: get(C.zip),
        county,
      },
      contactName: get(C.poc) || null,
      phone,
      regionUnit: get(C.region) || null,
      licensedBeds: beds,
      specialties,
      contracts,
      acceptsMedicaid: contracts.length > 0,
      hasReports: /^y/i.test(get(C.hasReports)),
      retrievedAt,
    });
  });
  out.sort((a, b) => a.displayName.localeCompare(b.displayName));
  return { facilities: out, problems };
}

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop());
if (isMain) {
  const [file] = process.argv.slice(2);
  if (!file) {
    console.error("usage: node scripts/import-dshs-export.mjs <export.csv> > county.json");
    process.exit(1);
  }
  const { facilities, problems } = importExport(readFileSync(file, "utf8"));
  const skips = problems.filter((p) => p.includes("skipped"));
  const errors = problems.filter((p) => !p.includes("skipped"));
  for (const p of problems) console.error(p);
  if (errors.length) {
    console.error(`\n${errors.length} problem(s); nothing written.`);
    process.exit(1);
  }
  console.error(`${facilities.length} facilities${skips.length ? `, ${skips.length} rows skipped (see above)` : ""}`);
  process.stdout.write(JSON.stringify(facilities, null, 2) + "\n");
}
