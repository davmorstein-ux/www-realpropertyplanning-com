/**
 * WHAT'S MY REMODEL WORTH? — the math (Oct 13, 2026).
 *
 * THE DATA. King County Assessor public data downloads (Real Property Sales,
 * Residential Building, Parcel), downloaded by the site owner on Oct 13, 2026.
 * scripts/remodel-data/ rebuilds everything from fresh downloads; refresh
 * quarterly. Outputs, served from /public:
 *   /data/remodel/model.json      the fitted model and neighborhood effects
 *   /data/remodel/zip/<zip>.bin   gzip-compressed JSON: public building facts for every single-family
 *                                 house in that ZIP, for the address lookup
 * No owner, buyer or seller names and no individual sale prices are published.
 *
 * THE MODEL. Ordinary market sales of single-family homes (statutory or
 * bargain-and-sale deed, no assessor sale warning, over $150,000, one house on
 * the lot) from the last 24 months, matched to each house's building record.
 * log(price) is fitted on size, finished-basement share, assessor grade, lot,
 * age, renovation, condition, view, waterfront, garage, fireplaces, baths,
 * bedrooms and quarter of sale, with an effect for each of the assessor's
 * neighborhoods (area + sub-area, shrunk toward the area when sales are few).
 *
 * TODAY'S MARKET (Oct 14, 2026, after the owner found his own house priced a
 * little high): estimates are set at the level of the LATEST QUARTER of sales
 * (model.json "marketQuarter"), not a straight-line trend. Recent sales already
 * reflect current mortgage rates and the season; the straight line had missed
 * the summer 2026 dip and ran about 2% high. coef.mo is kept at 0 for that reason.
 * Tested on a 20% hold-out it had never seen: half of estimates within 8% (7.8%)
 * of the actual price, 88% within 20%.
 *
 * THE TWO VIEWS.
 *   Broker's view: what buyers have paid. Includes the premium for a recent
 *     renovation (about +21% in the fit, an upper bound: renovated houses are
 *     also better houses in ways the records miss), and credits quality above the
 *     neighborhood's top tenth at half value.
 *   Appraiser's view: what a refinance appraisal is likely to support. Credits
 *     measurable change only (grade, condition, added space and baths), gives no
 *     "newly remodeled" premium, and stops crediting quality at the
 *     neighborhood's top tenth (the conformity principle).
 */
import { REMODEL_PARTS, TIER_GRADE, type Tier } from "@/data/remodelTiers";

export interface RemodelModel {
  asOf: { salesThrough: string; salesFrom: string; nSales: number; built: string };
  /** The quarter of sales today's estimates are priced at, e.g. "2026Q3". */
  marketQuarter?: string;
  /** Likely range: 6 in 10 hold-out sales sold between these multiples of the estimate (20th and 80th percentiles). */
  band?: [number, number];
  coef: Record<string, number>;
  moNow: number;
  /** "area-subarea" → location effect, 90th-percentile grade, sales count, city, median sale. */
  subs: Record<string, { e: number; g90: number; n: number; city: string; med: number }>;
  areas: Record<string, { e: number; g90: number; n: number }>;
  zipDefault: Record<string, string>;
}

export interface HomeFacts {
  /** "area-subarea" assessor neighborhood. */
  sk: string;
  above: number;
  finBsmt: number;
  unfinBsmt: number;
  beds: number;
  baths: number;
  fp: number;
  garage: boolean;
  lot: number;
  yrBuilt: number;
  yrRenovated: number;
  cond: number;
  grade: number;
  views: number;
  waterfront: boolean;
}

export interface RemodelScope {
  tiers: Partial<Record<string, Tier | null>>;
  /**
   * "Already remodeled" mode (Oct 14, 2026): the year the work was finished. The house facts then
   * describe the house BEFORE the work, and the broker's renovation premium is the one buyers paid
   * for work of that age: the "within 10 years" premium if it is 10 years old or less, the smaller
   * "renovated longer ago" premium if older. Omit when planning a remodel.
   */
  doneYear?: number;
  addAbove: number;
  addFinBsmt: number;
  addBaths: number;
  addBeds: number;
  addFp: number;
  addGarage: boolean;
}

export const EMPTY_SCOPE: RemodelScope = { tiers: {}, addAbove: 0, addFinBsmt: 0, addBaths: 0, addBeds: 0, addFp: 0, addGarage: false };

/** The year "age" and "renovated in the last 10 years" are measured from. */
export const MODEL_YEAR = 2026;
/** Share of the house redone where the broker's "newly renovated" premium starts, and where it is full. */
export const RENEW_START = 0.25;
export const RENEW_FULL = 0.7;
/**
 * NEW-CONSTRUCTION CEILING (Oct 14, 2026, after the owner priced his own house with
 * every part redone at premium and got more than new construction sells for nearby).
 * Cause: the assessor rates EVERY new house condition 3 (100% of sales 0-10 years
 * old); conditions 4-5 only describe older houses, relative to their age. So raising
 * an old house's condition toward 5 and adding the renovation premium priced it above
 * the same house built new. King County check: houses over 30 years old remodeled
 * since 2016 sold for a median 0.995x the model's value of the same house as new
 * construction (25th percentile 0.913x; n=899, Oct 2024-Sept 2026).
 * So after a remodel: the broker's view stops at 1.00x the same house built new
 * (same size, lot, view, grade after the remodel, condition 3, no renovation flag),
 * and the appraiser's view at 0.95x, between that median and the 25th percentile.
 */
export const NEW_BUILD_CAP_BROKER = 1.0;
export const NEW_BUILD_CAP_APPRAISER = 0.95;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

interface Features {
  liv: number;
  finBsmt: number;
  grade: number;
  lot: number;
  yrBuilt: number;
  ren10: number;
  renOld: number;
  cond: number;
  views: number;
  waterfront: boolean;
  garage: boolean;
  fp: number;
  baths: number;
  beds: number;
}

const location = (m: RemodelModel, sk: string) => m.subs[sk]?.e ?? m.areas[sk.split("-")[0]]?.e ?? null;

function logPrice(m: RemodelModel, sk: string, f: Features): number | null {
  const loc = location(m, sk);
  if (loc === null || f.liv <= 0) return null;
  const c = m.coef;
  const age = clamp(MODEL_YEAR - f.yrBuilt, 0, 120);
  return (
    loc +
    c.lliv * Math.log(f.liv) +
    c.finshare * clamp(f.finBsmt / f.liv, 0, 1) +
    c.grade * f.grade +
    c.llot * Math.log(clamp(f.lot, 1000, 200000)) +
    c.age * age +
    c.age2 * (age * age) / 100 +
    c.ren10 * f.ren10 +
    c.ren_old * f.renOld +
    c.cond * f.cond +
    c.vw * clamp(f.views, 0, 12) +
    c.wfb * (f.waterfront ? 1 : 0) +
    c.gar * (f.garage ? 1 : 0) +
    c.fp * clamp(f.fp, 0, 3) +
    c.baths * clamp(f.baths, 0, 8) +
    c.beds * clamp(f.beds, 0, 8) +
    c.mo * m.moNow
  );
}

const asIsFeatures = (h: HomeFacts): Features => ({
  liv: h.above + h.finBsmt,
  finBsmt: h.finBsmt,
  grade: h.grade,
  lot: h.lot,
  yrBuilt: h.yrBuilt,
  ren10: h.yrRenovated >= MODEL_YEAR - 10 ? 1 : 0,
  renOld: h.yrRenovated > 0 && h.yrRenovated < MODEL_YEAR - 10 ? 1 : 0,
  cond: h.cond,
  views: h.views,
  waterfront: h.waterfront,
  garage: h.garage,
  fp: h.fp,
  baths: h.baths,
  beds: h.beds,
});

/** Share of the house redone, 0–1, from the weights of the parts chosen. */
export const coverageOf = (s: RemodelScope) =>
  REMODEL_PARTS.reduce((t, p) => t + (s.tiers[p.id] ? p.weight : 0), 0);

/** The whole-house grade after the remodel, before any neighborhood cap. */
export function gradeAfter(grade: number, s: RemodelScope): number {
  let g = grade;
  for (const p of REMODEL_PARTS) {
    const t = s.tiers[p.id];
    if (t) g += p.weight * (TIER_GRADE[t] - grade);
  }
  return clamp(g, 4, 13);
}

export interface RemodelResult {
  asIs: number;
  broker: number;
  appraiser: number;
  /** The assessor neighborhood's 90th-percentile grade: quality above it is over-improvement. */
  neighborhoodTopGrade: number;
  newGrade: number;
  newCond: number;
  coverage: number;
  /** True when the remodel's quality goes past what the neighborhood's best houses have. */
  overImproved: boolean;
  /** The same house after the remodel, built new (condition 3, no renovation): the ceiling. */
  newBuild: number;
  /** True when the new-construction ceiling lowered the broker's or the appraiser's value. */
  cappedAtNew: boolean;
}

/** A value's likely range from the model's tested error (null when the model has no band). */
export const rangeOf = (m: RemodelModel, v: number): [number, number] | null =>
  m.band ? [Math.round((v * m.band[0]) / 5000) * 5000, Math.round((v * m.band[1]) / 5000) * 5000] : null;

export function estimate(m: RemodelModel, h: HomeFacts, s: RemodelScope): RemodelResult | null {
  const base = asIsFeatures(h);
  const lp0 = logPrice(m, h.sk, base);
  if (lp0 === null) return null;

  const coverage = coverageOf(s);
  const rawGrade = gradeAfter(h.grade, s);
  const top = Math.max(m.subs[h.sk]?.g90 ?? m.areas[h.sk.split("-")[0]]?.g90 ?? 13, h.grade);
  const overImproved = rawGrade > top + 0.05;
  const brokerGrade = rawGrade <= top ? rawGrade : top + 0.5 * (rawGrade - top);
  const appraiserGrade = Math.min(rawGrade, top);
  const newCond = coverage > 0 ? clamp(h.cond + (5 - h.cond) * coverage, 1, 5) : h.cond;

  const added: Features = {
    ...base,
    liv: base.liv + Math.max(0, s.addAbove) + Math.max(0, s.addFinBsmt),
    finBsmt: base.finBsmt + Math.max(0, s.addFinBsmt),
    baths: base.baths + Math.max(0, s.addBaths),
    beds: base.beds + Math.max(0, s.addBeds),
    fp: base.fp + Math.max(0, s.addFp),
    garage: base.garage || s.addGarage,
    cond: newCond,
  };

  // The "newly renovated" premium starts once more than a quarter of the house is
  // redone and is full at 70% (a kitchen alone earns none; kitchen + baths about a third).
  const renew = clamp((coverage - RENEW_START) / (RENEW_FULL - RENEW_START), 0, 1);
  const lpB = logPrice(m, h.sk, {
    ...added,
    grade: brokerGrade,
    ...(s.doneYear && MODEL_YEAR - s.doneYear > 10
      ? // work older than 10 years earns the "renovated longer ago" premium, not the recent one
        { ren10: base.ren10, renOld: Math.max(base.renOld, renew) }
      : { ren10: Math.max(base.ren10, renew), renOld: base.renOld * (1 - renew) }),
  })!;
  const lpA = logPrice(m, h.sk, { ...added, grade: appraiserGrade })!;

  // The new-construction ceiling (see NEW_BUILD_CAP_BROKER). A remodel never lowers the value
  // below as-is through the cap; only a downgrade (economy finishes in a better house) can.
  const asNew = (grade: number) => logPrice(m, h.sk, { ...added, grade, yrBuilt: MODEL_YEAR, cond: 3, ren10: 0, renOld: 0 })!;
  const capB = asNew(brokerGrade) + Math.log(NEW_BUILD_CAP_BROKER);
  const capA = asNew(appraiserGrade) + Math.log(NEW_BUILD_CAP_APPRAISER);
  const brokerLp = coverage > 0 || lpB > lp0 ? Math.min(lpB, Math.max(capB, Math.min(lp0, lpB))) : lpB;
  const appraiserLp0 = coverage > 0 || lpA > lp0 ? Math.min(lpA, Math.max(capA, Math.min(lp0, lpA))) : lpA;
  const appraiserLp = Math.min(appraiserLp0, brokerLp);

  const round = (v: number) => Math.round(v / 1000) * 1000;
  const asIs = round(Math.exp(lp0));
  return {
    asIs,
    broker: round(Math.exp(brokerLp)),
    appraiser: round(Math.exp(appraiserLp)),
    newBuild: round(Math.exp(asNew(brokerGrade))),
    cappedAtNew: brokerLp < lpB - 1e-9 || appraiserLp0 < lpA - 1e-9,
    neighborhoodTopGrade: top,
    newGrade: rawGrade,
    newCond,
    coverage,
    overImproved,
  };
}

/**
 * Load one ZIP code's homes. The files are gzip-compressed JSON (Oct 14, 2026: the
 * uncompressed files totalled 28 MB and publishing failed, likely on size; compressed
 * they are about 6 MB). Named .bin so no host treats them as pre-encoded; if a host
 * decompresses them anyway, the gzip check below falls through to plain JSON.
 */
export async function loadZip(zip: string): Promise<ZipFile> {
  const r = await fetch(`/data/remodel/zip/${zip}.bin`);
  if (!r.ok) throw new Error(String(r.status));
  const buf = new Uint8Array(await r.arrayBuffer());
  if (buf[0] === 0x1f && buf[1] === 0x8b) {
    const stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream("gzip"));
    return JSON.parse(await new Response(stream).text()) as ZipFile;
  }
  return JSON.parse(new TextDecoder().decode(buf)) as ZipFile;
}

/** One row of a ZIP file, in its column order. */
export type ZipRow = [string, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
export interface ZipFile {
  keys: string[];
  homes: ZipRow[];
}

export const rowToFacts = (z: ZipFile, r: ZipRow): HomeFacts => ({
  sk: z.keys[r[1]],
  above: r[2],
  finBsmt: r[3],
  unfinBsmt: r[4],
  beds: r[5],
  baths: r[6],
  fp: r[7],
  garage: r[8] === 1,
  lot: r[9],
  yrBuilt: r[10],
  yrRenovated: r[11],
  cond: r[12],
  grade: r[13],
  views: r[14],
  waterfront: r[15] === 1,
});

/** Addresses in a ZIP that start with what the visitor typed (number first, then street). */
export function matchAddresses(z: ZipFile, typed: string, limit = 8): ZipRow[] {
  const q = typed.toUpperCase().replace(/[.,#]/g, " ").replace(/\s+/g, " ").trim();
  if (q.length < 2) return [];
  const out: ZipRow[] = [];
  for (const r of z.homes) {
    if (r[0].startsWith(q)) {
      out.push(r);
      if (out.length >= limit) break;
    }
  }
  return out;
}

export const title = (addr: string) => addr.toLowerCase().replace(/\b([a-z])/g, (c) => c.toUpperCase()).replace(/\b(Ne|Nw|Se|Sw|N|S|E|W)\b/g, (d) => d.toUpperCase());
