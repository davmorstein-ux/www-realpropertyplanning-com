import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import IntentCTA from "@/components/IntentCTA";
import AuthorByline from "@/components/AuthorByline";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import { REMODEL_FAQS, REMODEL_PAGE as P } from "@/data/remodelPage";
import { CONDITION_LABELS, GRADE_LABELS } from "@/data/remodelTiers";
import { SLIDER_MAX, SLIDER_STEP, SPEND_CATEGORIES } from "@/data/remodelCosts";
import { BASE_RATE, CURRENT_RATE, CURRENT_RATE_DATE, RATE_SENSITIVITY, rateFactor } from "@/data/mortgageRates";
/* Category icons and before/after art supplied by the owner, Oct 15, 2026. */
import icoKitchen from "@/assets/remodel/kitchen.webp";
import icoBaths from "@/assets/remodel/baths.webp";
import icoFlooring from "@/assets/remodel/flooring.webp";
import icoPaint from "@/assets/remodel/paint.webp";
import icoExterior from "@/assets/remodel/exterior.webp";
import icoExtPaint from "@/assets/remodel/exterior-paint.webp";
import icoFinishes from "@/assets/remodel/finishes.webp";
import icoRoof from "@/assets/remodel/roof.webp";
import icoGutters from "@/assets/remodel/gutters.webp";
import icoWindows from "@/assets/remodel/windows.webp";
import icoSystems from "@/assets/remodel/systems.webp";
import icoLandscaping from "@/assets/remodel/landscaping.webp";
import icoTheater from "@/assets/remodel/theater.webp";
import artLookup from "@/assets/remodel/lookup.webp";
import artBefore from "@/assets/remodel/house-before.webp";
import artAfter from "@/assets/remodel/house-after.webp";
import artStepToday from "@/assets/remodel/step-house-today.webp";
import artStepRemodel from "@/assets/remodel/step-remodel.webp";

const CATEGORY_ICONS: Record<string, string> = {
  kitchen: icoKitchen,
  baths: icoBaths,
  flooring: icoFlooring,
  paint: icoPaint,
  exterior: icoExterior,
  extpaint: icoExtPaint,
  finishes: icoFinishes,
  roof: icoRoof,
  gutters: icoGutters,
  windows: icoWindows,
  systems: icoSystems,
  landscaping: icoLandscaping,
  theater: icoTheater,
};
import {
  EMPTY_SPEND,
  estimateSpend,
  loadZip,
  countyOfKey,
  rangeOf,
  matchAddresses,
  rowToFacts,
  title as titleCase,
  type HomeFacts,
  type RemodelModel,
  type SpendInput,
  type ZipFile,
  type ZipRow,
} from "@/lib/remodelValue";

/**
 * What's My Remodel Worth? (Oct 13, 2026; Snohomish and Pierce counties added Oct 15). King, Snohomish and Pierce County homeowners look up their
 * house (or type its details), enter what they would spend (or spent) on each part
 * (sliders, Oct 15, 2026, replacing quality buttons), and get two values, a broker's view
 * and an appraiser's view, plus which spending paid off.
 * Math: estimateSpend in src/lib/remodelValue.ts. Spending table: src/data/remodelCosts.ts. Words and
 * FAQs: src/data/remodelPage.ts. Data: /public/data/remodel (King County Assessor).
 *
 * Scoped "rmv-" classes with !important to survive index.css; no class name
 * contains "section", "card", "tile", "btn" or "cta".
 */

const NAVY = "#1B3A6B";
const INK = "#141210";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const CSS = `
.rmv { background: #fff; font-family: ${FONT}; color: ${INK}; }
.rmv .rmv-wrap { max-width: 980px; margin: 0 auto; padding: 0 16px; }
.rmv p { font-family: ${FONT} !important; font-size: 18px !important; line-height: 1.65 !important; color: ${INK} !important; margin: 0 0 14px !important; }
.rmv p.rmv-small { font-size: 15.5px !important; color: #3f3a35 !important; }
.rmv .rmv-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: .15em !important; text-transform: uppercase; color: ${NAVY} !important; margin: 0 0 10px !important; }
.rmv h1.rmv-h1 { font-family: ${FONT} !important; font-size: clamp(32px, 4.8vw, 48px) !important; line-height: 1.12 !important; font-weight: 700 !important; color: ${INK} !important; margin: 0 0 14px !important; }
.rmv h2.rmv-h2 { font-family: ${FONT} !important; font-size: clamp(23px, 3vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: ${INK} !important; margin: 0 0 10px !important; }
.rmv h3.rmv-h3 { font-family: ${FONT} !important; font-size: 19px !important; line-height: 1.3 !important; font-weight: 700 !important; color: ${INK} !important; margin: 0 0 6px !important; }
.rmv .rmv-step { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: ${NAVY}; color: #fff; font-weight: 700; font-size: 16px; margin-right: 10px; flex: 0 0 32px; }
.rmv .rmv-steprow { display: flex; align-items: center; margin-bottom: 6px; }
.rmv .rmv-box { background: #fff; border: 1px solid #ddd8cf; border-radius: 12px; padding: 20px; }
.rmv .rmv-answer { background: #fff; border: 1px solid #cfd9ea; border-left: 5px solid ${NAVY}; border-radius: 10px; padding: 16px 20px; margin-top: 18px; }
.rmv label.rmv-label { display: block; font-size: 15px; font-weight: 700; color: #2b2825; margin-bottom: 4px; }
.rmv .rmv-in { width: 100%; box-sizing: border-box; font-family: ${FONT}; font-size: 17px; padding: 10px 12px; border: 1.5px solid #c9c2b6; border-radius: 8px; background: #fff; color: ${INK}; min-height: 46px; }
.rmv .rmv-in:focus { outline: 3px solid #b9c8e3; border-color: ${NAVY}; }
.rmv .rmv-grid { display: grid; gap: 14px; align-items: end; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (min-width: 760px) { .rmv .rmv-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.rmv .rmv-grid2 { display: grid; gap: 14px; grid-template-columns: 1fr; }
@media (min-width: 760px) { .rmv .rmv-grid2 { grid-template-columns: 1fr 1fr; } }
.rmv .rmv-sugg { list-style: none; margin: 6px 0 0; padding: 0; border: 1px solid #ddd8cf; border-radius: 8px; overflow: hidden; }
.rmv .rmv-sugg li { list-style: none; border-bottom: 1px solid #eee9e0; }
.rmv .rmv-sugg li:last-child { border-bottom: 0; }
.rmv .rmv-sugg button { display: block; width: 100%; text-align: left; background: #fff; border: 0; padding: 11px 14px; font-family: ${FONT}; font-size: 17px; color: ${INK}; cursor: pointer; }
@media (hover: hover) { .rmv .rmv-sugg button:hover { background: #eef2f9; } }
.rmv .rmv-link { background: none; border: 0; padding: 0; color: ${NAVY}; font-family: ${FONT}; font-size: 16.5px; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.rmv .rmv-part { padding: 14px 0; border-bottom: 1px solid #eee9e0; }
.rmv .rmv-part:last-child { border-bottom: 0; }
.rmv .rmv-picks { display: flex; flex-wrap: wrap; gap: 6px; margin: 6px 0 6px; }
.rmv .rmv-pick { font-family: ${FONT}; font-size: 15.5px; font-weight: 600; padding: 7px 13px; border-radius: 999px; border: 1.5px solid #c9c2b6; background: #fff; color: #2b2825; cursor: pointer; min-height: 38px; }
.rmv .rmv-pick[aria-pressed="true"] { background: ${NAVY}; border-color: ${NAVY}; color: #fff; }
.rmv .rmv-ex { font-size: 15.5px; color: #4a443d; line-height: 1.5; }
.rmv .rmv-results { display: grid; gap: 12px; grid-template-columns: 1fr; margin-top: 8px; }
@media (min-width: 760px) { .rmv .rmv-results { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.rmv .rmv-val { background: #fff; border: 1px solid #ddd8cf; border-top: 5px solid #8a8378; border-radius: 12px; padding: 16px 18px; }
.rmv .rmv-val.rmv-val-a { border-top-color: #0f5f57; }
.rmv .rmv-val.rmv-val-b { border-top-color: ${NAVY}; }
.rmv .rmv-val-k { font-size: 14px !important; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #4a443d; }
.rmv .rmv-val-n { font-size: clamp(30px, 4vw, 38px) !important; font-weight: 700 !important; line-height: 1.15 !important; margin: 6px 0 4px !important; color: ${INK} !important; font-variant-numeric: tabular-nums; }
.rmv .rmv-val-d { font-size: 17px !important; font-weight: 700 !important; }
.rmv .rmv-val-r { font-size: 15px !important; font-weight: 600; color: #4a443d; margin: 0 0 6px; }
.rmv .rmv-val-s { font-size: 15px; color: #4a443d; line-height: 1.5; margin-top: 6px; }
.rmv .rmv-warn { background: #fff7e6; border: 1px solid #f0d9a8; border-radius: 10px; padding: 14px 18px; margin-top: 14px; }
.rmv .rmv-spendname { display: flex; align-items: center; gap: 12px; min-width: 0; }
.rmv img.rmv-ico, .rmv .rmv-ico { width: 52px; height: 52px; flex: 0 0 52px; border-radius: 10px; object-fit: contain; background: #fff; }
.rmv .rmv-ico-empty { display: inline-block; background: #f3f1ec; }
.rmv img.rmv-stepart { width: 64px; height: 64px; margin-left: 12px; flex: 0 0 64px; object-fit: contain; }
.rmv img.rmv-valart { display: block; width: 88px; height: 88px; object-fit: contain; margin: 0 0 6px; }
.rmv .rmv-spendhead { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.rmv .rmv-spendnum { max-width: 150px; text-align: right; }
.rmv input.rmv-range { width: 100%; margin: 10px 0 6px; accent-color: ${NAVY}; height: 28px; }
.rmv label.rmv-spendlabel { font-family: ${FONT} !important; font-size: 19px !important; font-weight: 700 !important; color: ${INK} !important; }
@media (max-width: 600px) { .rmv .rmv-hide-sm { display: none; } .rmv table.rmv-table th, .rmv table.rmv-table td { padding: 8px 8px !important; font-size: 15px !important; } }
.rmv table.rmv-table { border-collapse: collapse; width: 100%; background: #fff; border: 1px solid #ddd8cf; margin-top: 8px; }
.rmv table.rmv-table th, .rmv table.rmv-table td { font-family: ${FONT}; font-size: 16px; padding: 9px 12px; text-align: left; border-bottom: 1px solid #eee9e0; color: ${INK}; vertical-align: top; }
.rmv table.rmv-table thead th { background: #f1f4f9; font-weight: 700; font-size: 15px; }
.rmv table.rmv-table tbody th { font-weight: 600; }
.rmv .rmv-th-sub { font-weight: 500; font-size: 13px; color: #4a443d; }
.rmv td.rmv-over { color: #8a3b12; font-weight: 700; }
.rmv tr.rmv-total th, .rmv tr.rmv-total td { font-weight: 700; background: #faf8f4; }
.rmv .rmv-ratebox { background: #fff; border: 1px solid #ddd8cf; border-radius: 12px; padding: 14px 20px; margin: 0 0 14px; }
.rmv .rmv-raterow { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.rmv .rmv-rateinput { display: flex; align-items: center; gap: 6px; font-size: 20px; font-weight: 700; }
.rmv .rmv-rateinput .rmv-in { width: 110px; text-align: right; font-size: 20px; font-weight: 700; }
.rmv .rmv-totalbox { background: #fff; border: 2px solid ${NAVY}; border-radius: 12px; padding: 16px 20px; margin: 0 0 26px; }
.rmv .rmv-totalrow { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.rmv .rmv-totallabel { font-family: ${FONT}; font-size: 20px !important; font-weight: 700; color: ${INK}; }
.rmv .rmv-totalnum { font-family: ${FONT}; font-size: clamp(28px, 4vw, 36px) !important; font-weight: 700; color: ${NAVY}; font-variant-numeric: tabular-nums; }
.rmv .rmv-totalparts { font-family: ${FONT}; font-size: 15.5px !important; color: #4a443d; line-height: 1.5; margin-top: 6px; }
.rmv .rmv-toggle { display: flex; gap: 8px; align-items: center; min-height: 46px; font-size: 17px; }
.rmv .rmv-toggle input { width: 20px; height: 20px; }
`;

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const fmtShort = (n: number) => (n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${Math.round(n / 1000)}K`);
const signed = (n: number) => (n >= 0 ? "+" : "−") + fmt(Math.abs(n));

const MANUAL_DEFAULTS: Omit<HomeFacts, "sk"> = {
  above: 2000, finBsmt: 0, unfinBsmt: 0, beds: 3, baths: 2, fp: 1, garage: true, lot: 7500,
  yrBuilt: 1980, yrRenovated: 0, cond: 3, grade: 7, views: 0, waterfront: false,
};

const VIEW_OPTIONS = [
  { v: 0, label: "No view" },
  { v: 2, label: "Some view (territorial, partial)" },
  { v: 4, label: "Good view" },
  { v: 7, label: "Excellent view (water, mountains, skyline)" },
];
const nearestView = (v: number) => VIEW_OPTIONS.reduce((b, o) => (Math.abs(o.v - v) < Math.abs(b.v - v) ? o : b)).v;

function NumField({ id, label, value, onChange, step = 1, min = 0 }: { id: string; label: string; value: number; onChange: (n: number) => void; step?: number; min?: number }) {
  return (
    <div>
      <label className="rmv-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="rmv-in"
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        value={Number.isFinite(value) ? value : ""}
        onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
      />
    </div>
  );
}

export default function RemodelValue() {
  const url = `https://realpropertyplanning.com${P.PATH}`;
  /* Oct 15, 2026: King, Snohomish and Pierce County models; each house uses its own county's. */
  const [king, setKing] = useState<RemodelModel | null>(null);
  const [sno, setSno] = useState<RemodelModel | null>(null);
  const [pie, setPie] = useState<RemodelModel | null>(null);
  const [modelError, setModelError] = useState(false);
  const [zip, setZip] = useState("");
  const [zipFile, setZipFile] = useState<ZipFile | null>(null);
  const [zipState, setZipState] = useState<"idle" | "loading" | "ok" | "missing">("idle");
  const [addr, setAddr] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [facts, setFacts] = useState<HomeFacts | null>(null);
  /* Oct 15, 2026 (owner): dollars spent per category, not quality levels. */
  const [scope, setScope] = useState<SpendInput>(EMPTY_SPEND);
  /* Oct 14, 2026: "Already remodeled" mode. The house facts then describe the house before the work. */
  const [mode, setMode] = useState<"plan" | "done">("plan");
  const [doneYear, setDoneYear] = useState(2020);
  /* Oct 15, 2026 (owner): the visitor's 30-year mortgage rate moves every value. */
  const [rate, setRate] = useState(CURRENT_RATE);
  const done = mode === "done";

  useEffect(() => {
    const get = (path: string) => fetch(path).then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))));
    get("/data/remodel/model.json").then(setKing).catch(() => setModelError(true));
    get("/data/remodel/model-sno.json").then(setSno).catch(() => setSno(null));
    get("/data/remodel/model-pie.json").then(setPie).catch(() => setPie(null));
  }, []);

  useEffect(() => {
    setZipFile(null);
    setPicked(null);
    if (!/^\d{5}$/.test(zip)) {
      setZipState("idle");
      return;
    }
    setZipState("loading");
    let live = true;
    loadZip(zip)
      .then((z: ZipFile) => {
        if (!live) return;
        setZipFile(z);
        setZipState("ok");
      })
      .catch(() => live && setZipState("missing"));
    return () => {
      live = false;
    };
  }, [zip]);

  const suggestions = useMemo(() => (zipFile && !picked ? matchAddresses(zipFile, addr) : []), [zipFile, addr, picked]);

  const pick = (r: ZipRow) => {
    if (!zipFile) return;
    setPicked(r[0]);
    setAddr(titleCase(r[0]));
    setFacts(rowToFacts(zipFile, r));
  };

  const startManual = () => {
    const m = [king, sno, pie].find((x) => x?.zipDefault[zip]) ?? null;
    if (!m) return;
    setPicked("manual");
    setFacts({ sk: m.zipDefault[zip], ...MANUAL_DEFAULTS, cond: m.condAvg ?? MANUAL_DEFAULTS.cond });
  };

  const set = <K extends keyof HomeFacts>(k: K, v: HomeFacts[K]) => setFacts((f) => (f ? { ...f, [k]: v } : f));
  const setSpent = (id: string, n: number) => setScope((s) => ({ ...s, spent: { ...s.spent, [id]: Math.max(0, Math.round(n)) } }));

  /** The model for the house in hand: Snohomish neighborhood keys start with "S", Pierce keys "P". */
  const county = facts ? countyOfKey(facts.sk) : "King";
  const model = county === "Snohomish" ? sno : county === "Pierce" ? pie : king;
  const isSno = county === "Snohomish";
  const isPie = county === "Pierce";
  const gradeLabels = model?.gradeLabels ?? GRADE_LABELS;
  const condLabels = model?.condLabels ?? CONDITION_LABELS;
  const baseRate = BASE_RATE[model?.county ?? "King"] ?? BASE_RATE.King;
  const rf = rateFactor(rate, baseRate);
  const result = useMemo(
    () => (model && facts ? estimateSpend(model, facts, { ...(done ? { ...scope, doneYear: doneYear > 1900 ? doneYear : undefined } : scope), rateFactor: rf }) : null),
    [model, facts, scope, done, doneYear, rf],
  );
  const range = (v: number) => {
    const r = model ? rangeOf(model, v) : null;
    return r ? <div className="rmv-val-r">Likely range {fmtShort(r[0])} – {fmtShort(r[1])}</div> : null;
  };
  const hood = model && facts ? model.subs[facts.sk] : undefined;
  const anyScope = Object.values(scope.spent).some((v) => v > 0) || scope.addAbove > 0 || scope.addFinBsmt > 0 || scope.addBaths > 0 || scope.addBeds > 0 || scope.addFp > 0 || scope.addGarage;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: P.TITLE,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    description: P.DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: articleAuthor,
    publisher: articlePublisher,
    datePublished: P.PUBLISHED,
    dateModified: P.REVIEWED,
  };

  return (
    <div className="rmv">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead title={P.SEO_TITLE} description={P.DESCRIPTION} canonical={url} schemaJson={schema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Calculators", url: "https://realpropertyplanning.com/calculators" },
          { name: P.TITLE, url },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* ---------- hero ---------- */}
        <div style={{ background: "#faf8f4", borderBottom: `3px solid ${NAVY}`, padding: "44px 0 34px" }}>
          <div className="rmv-wrap">
            <div style={{ maxWidth: 780 }}>
              <p className="rmv-eyebrow">Free tool · King, Snohomish &amp; Pierce County homes</p>
              <h1 className="rmv-h1">{P.TITLE}</h1>
              <p>
                Look up your house, choose what you would remodel and at what quality, and see what it could be worth afterward, two ways: what buyers pay, and what a refinance appraisal is likely to support.
              </p>
              <div className="rmv-answer">
                <p className="rmv-eyebrow" style={{ marginBottom: 6 }}>The short answer</p>
                <p style={{ marginBottom: 0 }}>{P.SHORT_ANSWER}</p>
              </div>
              <p className="rmv-small" style={{ marginTop: 12 }}>
                Built from {P.N_SALES} King County, {P.SNO_N_SALES} Snohomish County and {P.PIE_N_SALES} Pierce County home sales and the counties' public building records. No sign-up; nothing you type is saved.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- step 1 ---------- */}
        <div style={{ padding: "36px 0 10px" }}>
          <div className="rmv-wrap">
            <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">1</span><h2 className="rmv-h2" style={{ margin: 0 }}>Find your house</h2><img src={artLookup} alt="" aria-hidden="true" width={64} height={64} className="rmv-stepart" /></div>
            <p>Single-family homes in King, Snohomish and Pierce counties. Enter the ZIP code, then start typing the street address (number first).</p>
            {modelError && <p role="alert">The calculator's data did not load. Refresh the page to try again.</p>}
            <div className="rmv-box">
              <div className="rmv-grid2">
                <div>
                  <label className="rmv-label" htmlFor="rmv-zip">ZIP code</label>
                  <input id="rmv-zip" className="rmv-in" inputMode="numeric" autoComplete="postal-code" maxLength={5} placeholder="98040" value={zip} onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))} />
                </div>
                <div>
                  <label className="rmv-label" htmlFor="rmv-addr">Street address</label>
                  <input
                    id="rmv-addr"
                    className="rmv-in"
                    autoComplete="off"
                    placeholder={zipState === "ok" ? "e.g. 4210 86th Ave SE" : "Enter the ZIP code first"}
                    disabled={zipState !== "ok"}
                    value={addr}
                    onChange={(e) => {
                      setAddr(e.target.value);
                      setPicked(null);
                    }}
                    aria-describedby="rmv-addr-help"
                  />
                  {suggestions.length > 0 && (
                    <ul className="rmv-sugg" aria-label="Matching addresses">
                      {suggestions.map((r) => (
                        <li key={r[0]}><button type="button" onClick={() => pick(r)}>{titleCase(r[0])}</button></li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <p id="rmv-addr-help" className="rmv-small" style={{ marginTop: 12, marginBottom: 0 }}>
                {zipState === "loading" && "Loading homes in this ZIP code…"}
                {zipState === "missing" && "That ZIP code is not in King, Snohomish or Pierce County's records. This calculator covers those three counties for now."}
                {zipState === "ok" && zipFile && !picked && addr.trim().length >= 3 && suggestions.length === 0 && "No single-family house matches that address. Check the spelling, or enter the details yourself."}
                {zipState === "ok" && picked && picked !== "manual" && `Filled in from ${county} County's public building record. Change anything that is out of date.`}
                {zipState === "ok" && !picked && (
                  <>
                    Not listed, a condo or townhouse, or rather not look it up?{" "}
                    <button type="button" className="rmv-link" onClick={startManual} disabled={!king}>Enter the details yourself</button>
                  </>
                )}
                {zipState === "idle" && "Condos, townhouses and houses outside King, Snohomish and Pierce counties are not covered yet."}
              </p>
            </div>
          </div>
        </div>

        {facts && (
          <>
            {/* ---------- step 2 ---------- */}
            <div style={{ padding: "26px 0 10px" }}>
              <div className="rmv-wrap">
                <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">2</span><h2 className="rmv-h2" style={{ margin: 0 }}>{done ? "Your house before the remodel" : "Your house today"}</h2><img src={artStepToday} alt="" aria-hidden="true" width={64} height={64} className="rmv-stepart" /></div>
                {done && (
                  <p>
                    Describe the house as it was <strong>before</strong> the work you enter below.
                    {picked && picked !== "manual" && facts.yrRenovated >= doneYear
                      ? ` The county's record shows a renovation in ${facts.yrRenovated}, so it may already include this remodel: set the quality grade, condition, size and baths back to what they were before, and the year last renovated to 0 or the earlier renovation.`
                      : " The county's record may not include the remodel yet; if it does, set the grade, condition, size and baths back to what they were before."}
                  </p>
                )}
                {hood && hood.n >= 10 && (
                  <p>
                    {isSno ? "Your area" : `Your assessor neighborhood${hood.city ? ` in ${hood.city}` : ""}`}: median sale {fmtShort(hood.med)} across {hood.n} sales since {isSno ? "January 2024" : isPie ? P.PIE_SALES_FROM : P.SALES_FROM}.
                  </p>
                )}
                <div className="rmv-box">
                  <div className="rmv-grid">
                    <NumField id="f-above" label="Living area above ground (sq ft)" value={facts.above} onChange={(n) => set("above", n)} step={10} />
                    <NumField id="f-finb" label="Finished basement (sq ft)" value={facts.finBsmt} onChange={(n) => set("finBsmt", n)} step={10} />
                    <NumField id="f-unfb" label="Unfinished basement (sq ft)" value={facts.unfinBsmt} onChange={(n) => set("unfinBsmt", n)} step={10} />
                    <NumField id="f-lot" label="Lot size (sq ft)" value={facts.lot} onChange={(n) => set("lot", n)} step={100} />
                    <NumField id="f-beds" label="Bedrooms" value={facts.beds} onChange={(n) => set("beds", n)} />
                    <NumField id="f-baths" label="Bathrooms (½ = .5, ¾ = .75)" value={facts.baths} onChange={(n) => set("baths", n)} step={0.25} />
                    <NumField id="f-fp" label="Fireplaces" value={facts.fp} onChange={(n) => set("fp", n)} />
                    <div>
                      <label className="rmv-label" htmlFor="f-gar">Garage</label>
                      <select id="f-gar" className="rmv-in" value={facts.garage ? "y" : "n"} onChange={(e) => set("garage", e.target.value === "y")}>
                        <option value="y">Yes</option>
                        <option value="n">No</option>
                      </select>
                    </div>
                    <NumField id="f-yb" label="Year built" value={facts.yrBuilt} onChange={(n) => set("yrBuilt", n)} min={1850} />
                    {!model?.noRenovationYear && <NumField id="f-yr" label="Year last renovated (0 if never)" value={facts.yrRenovated} onChange={(n) => set("yrRenovated", n)} />}
                    <div>
                      <label className="rmv-label" htmlFor="f-grade">Quality grade</label>
                      <select id="f-grade" className="rmv-in" value={facts.grade} onChange={(e) => set("grade", Number(e.target.value))}>
                        {Object.entries(gradeLabels).map(([g, l]) => <option key={g} value={g}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="rmv-label" htmlFor="f-cond">Condition</label>
                      <select id="f-cond" className="rmv-in" value={facts.cond} onChange={(e) => set("cond", Number(e.target.value))}>
                        {Object.entries(condLabels).map(([c, l]) => <option key={c} value={c}>{l}</option>)}
                      </select>
                    </div>
                    {!model?.noViews && (
                      <>
                    <div>
                      <label className="rmv-label" htmlFor="f-view">View</label>
                      <select id="f-view" className="rmv-in" value={nearestView(facts.views)} onChange={(e) => set("views", Number(e.target.value))}>
                        {VIEW_OPTIONS.map((o) => <option key={o.v} value={o.v}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="rmv-label" htmlFor="f-wf">Waterfront</label>
                      <select id="f-wf" className="rmv-in" value={facts.waterfront ? "y" : "n"} onChange={(e) => set("waterfront", e.target.value === "y")}>
                        <option value="n">No</option>
                        <option value="y">Yes</option>
                      </select>
                    </div>
                      </>
                    )}
                  </div>
                  <p className="rmv-small" style={{ marginTop: 14, marginBottom: 0 }}>
                    {isPie ? (
                      <>
                        <strong>Quality</strong> is the Pierce County Assessor's rating of construction and finishes, from Low to Excellent; most houses are Average, Fair plus or Average plus. <strong>Condition</strong> is upkeep; nearly every house is Average. If the county's record is older than your last remodel, update both.
                      </>
                    ) : isSno ? (
                      <>
                        <strong>Quality</strong> is the Snohomish County Assessor's rating of construction and finishes; most houses are Average or Average plus. <strong>Condition</strong> is rated for the house's age; most are "above normal for its age." If the county's record is older than your last remodel, update both.
                      </>
                    ) : (
                      <>
                        <strong>Quality grade</strong> is the King County Assessor's 1–13 scale for construction and finishes; most houses are 7 (average) or 8 (good). <strong>Condition</strong> is upkeep, 1–5. If the county's record is older than your last remodel, update both.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- step 3 ---------- */}
            <div style={{ padding: "26px 0 10px" }}>
              <div className="rmv-wrap">
                <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">3</span><h2 className="rmv-h2" style={{ margin: 0 }}>The remodel</h2><img src={artStepRemodel} alt="" aria-hidden="true" width={64} height={64} className="rmv-stepart" /></div>
                <div className="rmv-picks" role="group" aria-label="Planning or already done" style={{ margin: "4px 0 12px" }}>
                  <button type="button" className="rmv-pick" aria-pressed={!done} onClick={() => setMode("plan")}>Planning a remodel</button>
                  <button type="button" className="rmv-pick" aria-pressed={done} onClick={() => setMode("done")}>Already remodeled</button>
                </div>
                {done ? (
                  <>
                    <p>Move each slider to what was spent, or type the amount. Leave the rest at $0.</p>
                    <div style={{ maxWidth: 260, marginBottom: 14 }}>
                      <NumField id="a-year" label="Year the work was finished" value={doneYear} onChange={setDoneYear} min={1950} />
                    </div>
                  </>
                ) : (
                  <p>Move each slider to what you would spend, or type the amount. Leave the rest at $0.</p>
                )}
                <div className="rmv-box">
                  {SPEND_CATEGORIES.map((c) => {
                    const v = scope.spent[c.id] ?? 0;
                    const cr = result?.categories.find((x) => x.id === c.id);
                    return (
                      <div key={c.id} className="rmv-part">
                        <div className="rmv-spendhead">
                          <div className="rmv-spendname">
                            {CATEGORY_ICONS[c.id] ? (
                              <img src={CATEGORY_ICONS[c.id]} alt="" aria-hidden="true" width={52} height={52} loading="lazy" className="rmv-ico" />
                            ) : (
                              <span className="rmv-ico rmv-ico-empty" aria-hidden="true" />
                            )}
                            <label className="rmv-spendlabel" htmlFor={`s-${c.id}`}>{c.label}</label>
                          </div>
                          <input
                            className="rmv-in rmv-spendnum"
                            type="number"
                            inputMode="numeric"
                            min={0}
                            step={SLIDER_STEP}
                            aria-label={`${c.label}, dollars`}
                            value={v || ""}
                            placeholder="$0"
                            onChange={(e) => setSpent(c.id, Number(e.target.value) || 0)}
                          />
                        </div>
                        <input
                          id={`s-${c.id}`}
                          className="rmv-range"
                          type="range"
                          min={0}
                          max={SLIDER_MAX}
                          step={SLIDER_STEP}
                          value={Math.min(v, SLIDER_MAX)}
                          onChange={(e) => setSpent(c.id, Number(e.target.value))}
                          aria-valuetext={fmt(v)}
                        />
                        <div className="rmv-ex">
                          {c.id === "baths" ? <>All bathrooms together: for $8,000 on each of 3 baths, enter $24,000</> : c.hint}
                          {cr && <> · A complete job on this house here: about {fmt(cr.fullJob)}</>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="rmv-box" style={{ marginTop: 14 }}>
                  <h3 className="rmv-h3">Adding space</h3>
                  <div className="rmv-grid" style={{ marginTop: 10 }}>
                    <NumField id="a-above" label="Added living area (sq ft)" value={scope.addAbove} onChange={(n) => setScope((s) => ({ ...s, addAbove: n }))} step={10} />
                    <NumField id="a-finb" label="Basement newly finished (sq ft)" value={scope.addFinBsmt} onChange={(n) => setScope((s) => ({ ...s, addFinBsmt: n }))} step={10} />
                    <NumField id="a-baths" label="Bathrooms added" value={scope.addBaths} onChange={(n) => setScope((s) => ({ ...s, addBaths: n }))} step={0.25} />
                    <NumField id="a-beds" label="Bedrooms added" value={scope.addBeds} onChange={(n) => setScope((s) => ({ ...s, addBeds: n }))} />
                    <NumField id="a-fp" label="Fireplaces added" value={scope.addFp} onChange={(n) => setScope((s) => ({ ...s, addFp: n }))} />
                    {!facts.garage && (
                      <div>
                        <label className="rmv-label" htmlFor="a-gar">Adding a garage</label>
                        <select id="a-gar" className="rmv-in" value={scope.addGarage ? "y" : "n"} onChange={(e) => setScope((s) => ({ ...s, addGarage: e.target.value === "y" }))}>
                          <option value="n">No</option>
                          <option value="y">Yes</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <p className="rmv-small" style={{ marginTop: 12, marginBottom: 0 }}>Added space is valued from the county's sales of houses that have it. Enter its cost in the categories above only for finishes, not the construction itself.</p>
                </div>
              </div>
            </div>

            {/* ---------- results ---------- */}
            <div style={{ padding: "30px 0 40px", background: "#faf8f4", marginTop: 26, borderTop: "1px solid #e6e0d6" }} aria-live="polite">
              <div className="rmv-wrap">
                {/* Mortgage rate (owner, Oct 15, 2026): every value moves with it. */}
                <div className="rmv-ratebox">
                  <div className="rmv-raterow">
                    <label className="rmv-totallabel" htmlFor="rmv-rate">30-year mortgage rate</label>
                    <div className="rmv-rateinput">
                      <input id="rmv-rate" className="rmv-in" type="number" inputMode="decimal" step={0.05} min={1} max={15} value={Number.isFinite(rate) ? rate : ""} onChange={(e) => setRate(e.target.value === "" ? NaN : Number(e.target.value))} />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="rmv-totalparts">
                    Freddie Mac's national average was {CURRENT_RATE.toFixed(2)}% on {CURRENT_RATE_DATE}; enter today's rate if it has changed. The sales behind these values went under contract at about {baseRate.toFixed(1)}%.{" "}
                    {Math.abs(rf - 1) < 0.0005 ? (
                      <>No rate adjustment.</>
                    ) : (
                      <strong>
                        Values {rf < 1 ? "lowered" : "raised"} {Math.abs((rf - 1) * 100).toFixed(1)}% for a rate {Math.abs(rate - baseRate).toFixed(2)} points {rate > baseRate ? "higher" : "lower"}.
                      </strong>
                    )}{" "}
                    Higher rates lower what buyers can pay; each point moves values about {Math.round(RATE_SENSITIVITY * 100)}% here.
                  </div>
                </div>
                {/* Total invested (owner, Oct 15, 2026): directly above the values, so a visitor can check the
                    categories add up to what they know they spent. */}
                {(() => {
                  const parts = SPEND_CATEGORIES.map((c) => ({ label: c.label, v: scope.spent[c.id] ?? 0 })).filter((x) => x.v > 0);
                  const total = parts.reduce((t, x) => t + x.v, 0);
                  return (
                    <div className="rmv-totalbox">
                      <div className="rmv-totalrow">
                        <span className="rmv-totallabel">{done ? "Total invested in updates" : "Total planned for updates"}</span>
                        <span className="rmv-totalnum">{fmt(total)}</span>
                      </div>
                      <div className="rmv-totalparts">
                        {parts.length
                          ? parts.map((x) => `${x.label} ${fmt(x.v)}`).join(" + ")
                          : "Move the sliders above. The total should match what you know you spent."}
                      </div>
                    </div>
                  );
                })()}
                <h2 className="rmv-h2">{done ? "What your remodel is worth today" : "What it could be worth"}</h2>
                {!result && <p>Enter the living area to see an estimate.</p>}
                {result && (
                  <>
                    <div className="rmv-results">
                      <div className="rmv-val">
                        <img src={artBefore} alt="" aria-hidden="true" width={88} height={88} className="rmv-valart" />
                        <div className="rmv-val-k">{done ? "Today, without the remodel" : "Today, as is"}</div>
                        <div className="rmv-val-n">{fmt(result.asIs)}</div>
                        {range(result.asIs)}
                        <div className="rmv-val-s">{done ? "What the house would sell for today had the work not been done." : `Estimated from your house's details and ${county} County sales.`}</div>
                      </div>
                      <div className="rmv-val rmv-val-a">
                        <img src={artAfter} alt="" aria-hidden="true" width={88} height={88} className="rmv-valart" />
                        <div className="rmv-val-k">{done ? "Appraiser's view, with it" : "Appraiser's view, after"}</div>
                        <div className="rmv-val-n">{fmt(result.appraiser)}</div>
                        {anyScope && range(result.appraiser)}
                        <div className="rmv-val-d" style={{ color: "#0f5f57" }}>{anyScope ? `${signed(result.appraiser - result.asIs)} added` : "Enter spending above"}</div>
                        <div className="rmv-val-s">What a refinance appraisal is likely to support: up to about {Math.round((result.ceilingAppraiser - 1) * 100)}% over the house unrenovated in this neighborhood.</div>
                      </div>
                      <div className="rmv-val rmv-val-b">
                        <img src={artAfter} alt="" aria-hidden="true" width={88} height={88} className="rmv-valart" />
                        <div className="rmv-val-k">{done ? "Broker's view, with it" : "Broker's view, after"}</div>
                        <div className="rmv-val-n">{fmt(result.broker)}</div>
                        {anyScope && range(result.broker)}
                        <div className="rmv-val-d" style={{ color: NAVY }}>{anyScope ? `${signed(result.broker - result.asIs)} added` : "Enter spending above"}</div>
                        <div className="rmv-val-s">What buyers have paid for houses like it, renovated: up to about {Math.round((result.ceilingBroker - 1) * 100)}% over the house unrenovated in this neighborhood. The best case if you sell.</div>
                      </div>
                    </div>

                    {result.totalSpent > 0 && (
                      <>
                        <div style={{ paddingTop: 28 }}><h3 className="rmv-h3">Which spending paid off</h3></div>
                        <div style={{ overflowX: "auto" }}>
                          <table className="rmv-table">
                            <thead>
                              <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Spent</th>
                                <th scope="col">Value added<br /><span className="rmv-th-sub">appraiser – broker</span></th>
                                <th scope="col" className="rmv-hide-sm">Back per $1</th>
                                <th scope="col">Pays back well up to</th>
                              </tr>
                            </thead>
                            <tbody>
                              {result.categories.filter((c) => c.spent > 0).map((c) => {
                                const over = c.spent > Math.max(c.paysBackTo, 1000) * 1.5;
                                return (
                                  <tr key={c.id}>
                                    <th scope="row">{c.label}</th>
                                    <td>{fmt(c.spent)}</td>
                                    <td>{fmtShort(c.appraiser)} – {fmtShort(c.broker)}</td>
                                    <td className="rmv-hide-sm">${(c.appraiser / c.spent).toFixed(2)} – ${(c.broker / c.spent).toFixed(2)}</td>
                                    <td className={over ? "rmv-over" : undefined}>{c.paysBackTo >= 1000 ? fmt(c.paysBackTo) : "Rarely pays back"}{over ? " · well past it" : ""}</td>
                                  </tr>
                                );
                              })}
                              <tr className="rmv-total">
                                <th scope="row">Total</th>
                                <td>{fmt(result.totalSpent)}</td>
                                <td>{fmtShort(result.categories.reduce((t, c) => t + c.appraiser, 0))} – {fmtShort(result.categories.reduce((t, c) => t + c.broker, 0))}</td>
                                <td className="rmv-hide-sm">${(result.categories.reduce((t, c) => t + c.appraiser, 0) / result.totalSpent).toFixed(2)} – ${(result.categories.reduce((t, c) => t + c.broker, 0) / result.totalSpent).toFixed(2)}</td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="rmv-small" style={{ marginTop: 10 }}>
                          <strong>Pays back well up to</strong>: spending up to this amount still returns at least 50 cents of value per dollar in the broker's view. Past it, each extra dollar adds less. Some work, like a roof or systems, rarely pays back at sale but avoids a buyer's deduction for a worn one.
                          {result.alreadyUpdated > 0.05 && <> This house is already partly updated, so new spending has less room to add value.</>}
                        </p>
                      </>
                    )}
                    {result.nearCeiling && (
                      <div className="rmv-warn">
                        <p style={{ marginBottom: 0 }}>
                          <strong>At about the most a full renovation adds.</strong> Unrenovated, this house would sell for about {fmt(result.unrenovated)}. In this neighborhood's price range a complete renovation has added up to about {Math.round((result.ceilingBroker - 1) * 100)}% to an unrenovated house in King County sales, and an appraiser credits about {Math.round((result.ceilingAppraiser - 1) * 100)}%, however much was spent.
                        </p>
                      </div>
                    )}
                    <p className="rmv-small" style={{ marginTop: 16 }}>
                      An automated estimate from public records, not an appraisal or a market analysis. <strong>Likely range:</strong> tested on sales it had not seen, 6 in 10 sold within a range this wide around its estimate; half within 8% and 88% within 20%. It cannot see layout, workmanship, unpermitted work, or anything the county's record misses.{" "}
                      <a href="#how-it-works" style={{ color: NAVY, fontWeight: 700 }}>How it works</a>
                    </p>
                  </>
                )}
              </div>
            </div>
          </>
        )}

        {/* ---------- how it works ---------- */}
        <div id="how-it-works" style={{ padding: "40px 0" }}>
          <div className="rmv-wrap">
            <div style={{ maxWidth: 780 }}>
              <h2 className="rmv-h2">How it works</h2>
              <p>
                <strong>The data.</strong> The King County Assessor publishes every recorded sale and a building record for every house. The calculator uses {P.N_SALES} ordinary market sales of single-family homes from {P.SALES_FROM} to {P.SALES_THROUGH}, each matched to its house: living area, finished basement, bedrooms, baths, fireplaces, garage, lot, view, waterfront, age, renovation, condition, and the assessor's quality grade. Family transfers, foreclosures and sales the assessor flagged as unusual are left out.
              </p>
              <p>
                <strong>Snohomish County.</strong> Houses there are priced by a separate model built the same way from the Snohomish County Assessor's open data: {P.SNO_N_SALES} valid market sales of single-family homes from {P.SNO_SALES_FROM} to {P.SNO_SALES_THROUGH} (the county already excludes quit claims, estate sales and gifts), matched to each house's improvement record, with location by ZIP code and tax area. The county rates quality in words and condition relative to the house's age, and publishes no view or renovation-year field. Tested on sales it had not seen, half its estimates were within 7% of the price. Its sales file is updated quarterly, so its market level is {P.SNO_MARKET_MONTHS}. The full-renovation ceiling and spending table are the same as King County's.
              </p>
              <p>
                <strong>Pierce County.</strong> Houses there are priced by a third model built the same way from the Pierce County Assessor-Treasurer's data downloads: {P.PIE_N_SALES} valid market sales of single-family homes from {P.PIE_SALES_FROM} to {P.PIE_SALES_THROUGH} (warranty and bargain-and-sale deeds the assessor marked valid, one parcel per sale), matched to each house's building record, with location by the assessor's neighborhood. The county rates quality in words from Low to Excellent and publishes view and waterfront ratings. Its "year remodeled" is a weighted year that moves for additions and partial work rather than the date of a renovation, so the calculator does not use it. Tested on sales it had not seen, half its estimates were within {P.PIE_MEDIAN_ERR} of the price and {P.PIE_WITHIN_20} within 20%. Pierce County does not publish ZIP codes for parcels, so each house is filed under the ZIP code whose center is nearest; near a ZIP boundary it is filed under both neighbors. The full-renovation ceiling and spending table are the same as King County's.
              </p>
              <p>
                <strong>The model.</strong> It learns from those sales what each feature has added to price in each of the assessor's neighborhoods, then prices your house as it is and as it would be after the remodel. Estimates are set at the level of the most recent three months of sales ({P.MARKET_MONTHS}), so they reflect today's mortgage rates and season rather than an average of the whole two years.
              </p>
              <p>
                <strong>Your spending.</strong> Each category carries a share of what a full renovation adds (the kitchen the most, about a quarter) and has a "complete job" cost for a house of your size in your neighborhood. Spending up to that cost earns most of the category's value; spending past it earns less and less. That is how the table shows which spending paid off. The shares and costs are the site author's working estimates for King County and will be refined.
              </p>
              <p>
                <strong>The full-renovation ceiling.</strong> A complete remodel lifts a house by a limited amount, measured from what the same house sells for unrenovated. In King County sales, houses resold after a recorded renovation gained a median 25% over the market in Kirkland's 98034 and up to about a third countywide; a 98034 split entry that sold for $985,000 unrenovated compares with a similar fully renovated one at $1,315,000. So in a neighborhood like that the broker's view stops at 30% above the unrenovated value and the appraiser's view at 20%. The ceiling rises with the neighborhood's price level, because King County buyers have paid a larger renovation premium in pricier neighborhoods: about 31% under a $700,000 neighborhood median, 36% around $1 million, and 43% over $1.7 million in the sales model. So it runs from about 26% / 17% in the least expensive neighborhoods to 36% / 24% in the most expensive. Added square feet, baths and bedrooms are priced on top.
              </p>
              <p>
                <strong>The new-construction ceiling.</strong> However much is redone, an older house is not priced above the same house built new. In King County sales, remodeled houses over 30 years old sold for about what the same house brings as new construction, and rarely more. The broker's view stops there and the appraiser's view at 95% of it.
              </p>
              <p>
                <strong>Mortgage rates.</strong> Higher rates shrink what a buyer can borrow for the same payment, so values fall; lower rates do the opposite. The values are built from sales that went under contract at about {BASE_RATE.King.toFixed(1)}% in King County ({P.MARKET_MONTHS} sales), {BASE_RATE.Snohomish.toFixed(1)}% in Snohomish County and {BASE_RATE.Pierce.toFixed(1)}% in Pierce County, Freddie Mac's 30-year averages at the time. Enter today's rate and every value moves about {Math.round(RATE_SENSITIVITY * 100)}% per percentage point, up to 15%. That is a deliberately modest assumption: a one-point rise cuts a buyer's loan by about 11% at the same payment, but prices have historically moved much less, because sellers hold and inventory tightens.
              </p>
              <p>
                <strong>Likely range.</strong> Every estimate misses some. Tested on King County sales it had not seen, 6 in 10 houses sold within the range shown under each value, so treat the range, not the single number, as the answer.
              </p>
              <p>
                <strong>Already remodeled?</strong> Choose "Already remodeled", describe the house as it was before the work, enter what was spent, and the calculator prices it today both ways. Work finished more than ten years ago earns about 60% of its value, because buyers pay less for an older renovation.
              </p>
              <p>
                <strong>Why two values.</strong> Buyers pay extra for a house that is freshly remodeled and move-in ready, and they will pay for quality up to what the neighborhood's best houses offer. A refinance appraisal is more conservative: it credits measurable change and gives little for quality past the neighborhood's best houses (appraisers call this conformity). If you plan to refinance rather than sell, plan around the appraiser's view.
              </p>
              <p className="rmv-small">
                Sources: King County Assessor public data downloads (sales, residential building and parcel records), downloaded October 13, 2026; Snohomish County Assessor open data (Recent Property Sales, Improvement Records, Assessor Roll), downloaded October 15, 2026; Pierce County Assessor-Treasurer data mart (sale, improvement, improvement built-as, appraisal account and tax account files), downloaded October 15, 2026. Lookups show only the public building record for an address; no owner names or individual sale prices are shown.
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 16px" }}>
          <AuthorByline context="home" />
        </div>
        <PageFAQ faqs={REMODEL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))} heading="Remodel Value: Common Questions" eyebrow="Frequently Asked Questions" id="remodel-value" />
        <IntentCTA
          heading="Planning a remodel, a refinance or a sale?"
          body="A calculator works from records. A broker walks through the house, looks at the sales that compare, and tells you which parts of a remodel buyers in your neighborhood actually pay for, before you spend the money."
          buttonText="Ask about your house"
          reason="sell-or-value"
          professional="broker"
        />
      </main>
      <Footer />
    </div>
  );
}
