/**
 * Readable display names for DSHS adult family home records (Oct 5, 2026).
 *
 * The DSHS export keeps whatever case the licensee typed, and about half the
 * names arrive in capitals ("CARING GROVE AFH LLC"). On the directory pages
 * those shouted at the reader. A name written ENTIRELY in capitals is put into
 * title case here; a name with any lower-case letters is the licensee's own
 * styling and is left alone. The raw DSHS name stays in the `name` field, and
 * slugs are lower-cased anyway, so no URL changes.
 *
 * Kept in capitals: business suffixes and AFH, Roman numerals, and short
 * vowel-less initials such as "JM" or "DJ". Pure, no imports: used by
 * scripts/import-dshs-export.mjs, scripts/parse-dshs-locator.mjs and
 * scripts/fix-afh-display-names.mjs, and tested in src/test/afhDisplayName.test.ts.
 */

const KEEP_UPPER = new Set([
  "LLC", "PLLC", "LLP", "AFH", "AFHS", "DBA", "USA", "LGBTQ",
  "II", "III", "IV", "VI", "VII", "VIII", "IX", "XI", "XII",
]);
const SMALL = new Set(["a", "an", "and", "at", "by", "for", "in", "of", "on", "or", "the", "to"]);
const SPECIAL = { INC: "Inc", CORP: "Corp", CO: "Co", ST: "St", MT: "Mt", NW: "NW", NE: "NE", SW: "SW", SE: "SE" };

function word(w, first) {
  const lead = w.match(/^[^A-Za-z0-9]*/)[0];
  const trail = w.match(/[^A-Za-z0-9]*$/)[0];
  const core = w.slice(lead.length, w.length - trail.length);
  if (!core) return w;
  const up = core.toUpperCase();
  let out;
  if (KEEP_UPPER.has(up)) out = up;
  else if (SPECIAL[up]) out = SPECIAL[up];
  else if (!first && SMALL.has(core.toLowerCase())) out = core.toLowerCase();
  else if (/^[A-Z]{2,3}$/.test(core) && !/[AEIOUY]/.test(core)) out = core; // initials: JM, DJ, KC
  else if (/^([A-Z])\1+$/.test(core)) out = core; // AAA
  else if (/^\d/.test(core)) out = core.toLowerCase(); // 1ST, 2ND
  else {
    // Title-case each part split by apostrophe or hyphen: MARY'S -> Mary's, A-1 -> A-1
    out = core
      .toLowerCase()
      .replace(/(^|[-])([a-z])/g, (_, p, c) => p + c.toUpperCase())
      .replace(/^Mc([a-z])/, (_, c) => "Mc" + c.toUpperCase());
  }
  return lead + out + trail;
}

/** True when a name has letters and none of them are lower-case. */
export const isAllCaps = (s) => {
  const t = s.replace(/\d+(st|nd|rd|th)\b/gi, ""); // "1st EDMONDS BOWL" still counts
  return /[A-Z]/.test(t) && !/[a-z]/.test(t);
};

/**
 * The name as the import scripts cleaned it before Oct 5, 2026. Page addresses
 * (slugs) are built from this, so tidying the displayed name never moves a URL.
 */
export const slugBaseName = (raw) => raw.replace(/^[\s#*·•\-–—]+/, "").replace(/\s{2,}/g, " ").trim();

/**
 * Remove the characters owners put in front of a name so it sorts first in the
 * DSHS locator ("1 # Angel's Nest", "! Hebron AFH", "001 Aspen", "1st* Hope").
 * Real numbers that are part of a name stay: "1st Choice", "7th Heaven",
 * "100 Acre", and branch numbers such as "Better Place AFH #2".
 */
export function stripSortPrefix(name) {
  let s = name
    .replace(/^[\s!*@#·•.\-–—]+/, "") // leading symbols
    .replace(/^0+\d*\s+/, "") // leading zeros: 00001, 001, 01
    .replace(/^1\s*[#*!][\s#*!]*/, "") // "1 # ", "1* ", "1 ! * "
    .replace(/^(1st)\s*\*+\s*/i, "$1 "); // "1st* Hope" -> "1st Hope"
  s = s.replace(/^[\s!*@#]+/, "").trim();
  if (s === name) return name; // nothing removed: keep the owner's own styling ("iCare")
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function readableAfhName(raw) {
  const clean = stripSortPrefix(slugBaseName(raw));
  if (!isAllCaps(clean)) return clean;
  return clean.split(" ").map((w, i) => word(w, i === 0)).join(" ");
}
