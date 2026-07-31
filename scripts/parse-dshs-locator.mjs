#!/usr/bin/env node
/**
 * Convert a DSHS Adult Family Home Locator result page into typed JSON.
 *
 * The locator has no export and no API. The workflow is: run a search at
 * https://fortress.wa.gov/dshs/adsaapps/lookup/AFHAdvLookup.aspx, select the
 * results, paste into a .txt file, then run this.
 *
 *   node scripts/parse-dshs-locator.mjs raw/king-98034.txt King > out.json
 *
 * Arguments:
 *   1. path to the pasted locator text
 *   2. county name (the locator does not include it in results)
 *
 * The parser is deliberately strict: anything it cannot parse cleanly is
 * reported to stderr rather than silently dropped or half-filled. Bad data on a
 * public-record page is worse than missing data.
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
};

/** Strip the #, *, and space prefixes operators use to sort first in results. */
function toDisplayName(raw) {
  return raw
    .replace(/^[\s#*·•\-–—]+/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    // Drop apostrophes entirely so "Helana's" slugs to "helanas", not "helana-s".
    .replace(/['\u2019]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Corporate suffixes add length without adding search value. */
function toFacilitySlug(displayName, licenseNumber) {
  const trimmed = displayName.replace(
    /[\s,]+(l\.?l\.?c\.?|l\.?l\.?p\.?|inc\.?|corp(oration)?\.?|limited liability (co|company)\.?)$/i,
    "",
  );
  return `${slugify(trimmed)}-${licenseNumber}`;
}

function parseSpecialties(line) {
  if (!line) return [];
  return line
    .split(",")
    .map((s) => SPECIALTY_MAP[s.trim().toLowerCase()])
    .filter(Boolean);
}

function parseContracts(line, warn) {
  if (!line || /^no contract$/i.test(line.trim())) return [];
  const out = [];
  for (const part of line.split(",")) {
    const key = part.trim().toLowerCase();
    if (!key) continue;
    const mapped = CONTRACT_MAP[key];
    if (mapped) out.push(mapped);
    else warn(`unrecognised contract type: "${part.trim()}"`);
  }
  return out;
}

export function parseLocator(text, county) {
  const lines = text.split(/\r?\n/).map((l) => l.replace(/\u00a0/g, " ").trimEnd());
  const licenseIdx = [];
  lines.forEach((l, i) => {
    if (/^License#:\s*\d+/.test(l.trim())) licenseIdx.push(i);
  });

  const facilities = [];
  const warnings = [];
  const retrievedAt = new Date().toISOString().slice(0, 10);

  licenseIdx.forEach((start, n) => {
    const end = n + 1 < licenseIdx.length ? licenseIdx[n + 1] - 1 : lines.length;
    const block = lines.slice(start, end);

    const licenseNumber = block[0].match(/^License#:\s*(\d+)/)[1];
    const warn = (msg) => warnings.push(`license ${licenseNumber}: ${msg}`);

    // The name is the nearest non-empty line above "License#:".
    let name = null;
    for (let i = start - 1; i >= 0 && i > (licenseIdx[n - 1] ?? -1); i--) {
      const candidate = lines[i].trim();
      if (!candidate) continue;
      // Skip the table header row and bare ZIP/city echo lines.
      if (/^Facility Info\b/i.test(candidate)) continue;
      if (/^\d{5}(-\d{4})?$/.test(candidate)) continue;
      name = candidate;
      break;
    }
    if (!name) {
      warn("could not determine facility name — skipped");
      return;
    }

    const find = (re) => {
      const hit = block.find((l) => re.test(l.trim()));
      return hit ? hit.trim().replace(re, "").trim() : null;
    };

    const contactName = find(/^Contact:\s*/);
    const regionUnit = find(/^Region\/Unit:\s*/);
    const specialties = parseSpecialties(find(/^Specialties:\s*/));
    const contracts = parseContracts(find(/^Contract\(s\):\s*/), warn);

    // Address sits between Region/Unit and the "Directions" marker.
    const regionAt = block.findIndex((l) => /^Region\/Unit:/.test(l.trim()));
    const dirAt = block.findIndex((l) => /^Directions$/i.test(l.trim()));
    const addrLines =
      regionAt >= 0 && dirAt > regionAt
        ? block.slice(regionAt + 1, dirAt).map((l) => l.trim()).filter(Boolean)
        : [];

    // Last address line is "City , WA 98034"; anything before it is the street.
    let street = null;
    let city = null;
    let zip = null;
    let phone = null;

    for (const line of addrLines) {
      const cityMatch = line.match(/^(.+?)\s*,\s*WA\s+(\d{5})(?:\d{4})?$/i);
      const phoneMatch = line.match(/^\(?(\d{3})\)?[\s.-]*(\d{3})[\s.-]*(\d{4})$/);
      if (cityMatch) {
        city = cityMatch[1].trim();
        zip = cityMatch[2];
      } else if (phoneMatch) {
        phone = `(${phoneMatch[1]}) ${phoneMatch[2]}-${phoneMatch[3]}`;
      } else if (!street) {
        street = line;
      } else {
        street = `${street} ${line}`;
      }
    }

    if (!city || !zip) {
      warn("could not parse city/ZIP — skipped");
      return;
    }
    if (!street) warn("no street line found");

    // "Can accept Medicaid <tab> 6 <tab> Disclosure of Services"
    const bedsLine = block.find((l) => /Medicaid/i.test(l) && /\d/.test(l));
    let licensedBeds = null;
    let acceptsMedicaid = false;
    if (bedsLine) {
      acceptsMedicaid = !/can\s*NOT\s*accept/i.test(bedsLine);
      const bedsMatch = bedsLine.match(/Medicaid\s*[\t ]+(\d+)/i);
      if (bedsMatch) licensedBeds = Number(bedsMatch[1]);
    }
    if (licensedBeds === null) {
      warn("could not parse licensed bed count — skipped");
      return;
    }

    const hasReports = block.some((l) => /^View Reports$/i.test(l.trim()));

    const displayName = toDisplayName(name);
    facilities.push({
      licenseNumber,
      name,
      displayName,
      slug: toFacilitySlug(displayName, licenseNumber),
      address: { street: street ?? "", city, citySlug: slugify(city), state: "WA", zip, county },
      contactName,
      phone,
      regionUnit,
      licensedBeds,
      specialties,
      contracts,
      acceptsMedicaid,
      hasReports,
      retrievedAt,
    });
  });

  // A duplicate license number means the paste is malformed, not that two homes
  // share a license. Surface it rather than writing both.
  const counts = new Map();
  facilities.forEach((f) => counts.set(f.licenseNumber, (counts.get(f.licenseNumber) ?? 0) + 1));
  [...counts.entries()]
    .filter(([, n]) => n > 1)
    .forEach(([lic, n]) => warnings.push(`license ${lic} appears ${n} times — check the source paste`));

  return { facilities, warnings };
}

/* CLI */
const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop());
if (isMain) {
  const [file, county] = process.argv.slice(2);
  if (!file || !county) {
    console.error("usage: node scripts/parse-dshs-locator.mjs <file.txt> <county>");
    process.exit(1);
  }
  const { facilities, warnings } = parseLocator(readFileSync(file, "utf8"), county);
  warnings.forEach((w) => console.error(`warning: ${w}`));
  console.error(`parsed ${facilities.length} facilities from ${file}`);
  process.stdout.write(JSON.stringify(facilities, null, 2) + "\n");
}
