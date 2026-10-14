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
import { CONDITION_LABELS, GRADE_LABELS, REMODEL_PARTS, TIERS, type Tier } from "@/data/remodelTiers";
import {
  EMPTY_SCOPE,
  estimate,
  loadZip,
  matchAddresses,
  rowToFacts,
  title as titleCase,
  type HomeFacts,
  type RemodelModel,
  type RemodelScope,
  type ZipFile,
  type ZipRow,
} from "@/lib/remodelValue";

/**
 * What's My Remodel Worth? (Oct 13, 2026). King County homeowners look up their
 * house (or type its details), choose what they would remodel and at what
 * quality, and get two values: a broker's view and an appraiser's view.
 * Math: src/lib/remodelValue.ts. Tier table: src/data/remodelTiers.ts. Words and
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
.rmv .rmv-val-s { font-size: 15px; color: #4a443d; line-height: 1.5; margin-top: 6px; }
.rmv .rmv-warn { background: #fff7e6; border: 1px solid #f0d9a8; border-radius: 10px; padding: 14px 18px; margin-top: 14px; }
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
  const [model, setModel] = useState<RemodelModel | null>(null);
  const [modelError, setModelError] = useState(false);
  const [zip, setZip] = useState("");
  const [zipFile, setZipFile] = useState<ZipFile | null>(null);
  const [zipState, setZipState] = useState<"idle" | "loading" | "ok" | "missing">("idle");
  const [addr, setAddr] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const [facts, setFacts] = useState<HomeFacts | null>(null);
  const [scope, setScope] = useState<RemodelScope>(EMPTY_SCOPE);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    fetch("/data/remodel/model.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setModel)
      .catch(() => setModelError(true));
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
    if (!model) return;
    const sk = model.zipDefault[zip];
    if (!sk) return;
    setPicked("manual");
    setFacts({ sk, ...MANUAL_DEFAULTS });
  };

  const set = <K extends keyof HomeFacts>(k: K, v: HomeFacts[K]) => setFacts((f) => (f ? { ...f, [k]: v } : f));
  const setTier = (part: string, t: Tier | null) => setScope((s) => ({ ...s, tiers: { ...s.tiers, [part]: t } }));

  const result = useMemo(() => (model && facts ? estimate(model, facts, scope) : null), [model, facts, scope]);
  const hood = model && facts ? model.subs[facts.sk] : undefined;
  const anyScope = Object.values(scope.tiers).some(Boolean) || scope.addAbove > 0 || scope.addFinBsmt > 0 || scope.addBaths > 0 || scope.addBeds > 0 || scope.addFp > 0 || scope.addGarage;

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
              <p className="rmv-eyebrow">Free tool · King County homes</p>
              <h1 className="rmv-h1">{P.TITLE}</h1>
              <p>
                Look up your house, choose what you would remodel and at what quality, and see what it could be worth afterward, two ways: what buyers pay, and what a refinance appraisal is likely to support.
              </p>
              <div className="rmv-answer">
                <p className="rmv-eyebrow" style={{ marginBottom: 6 }}>The short answer</p>
                <p style={{ marginBottom: 0 }}>{P.SHORT_ANSWER}</p>
              </div>
              <p className="rmv-small" style={{ marginTop: 12 }}>
                Built from {P.N_SALES} King County home sales, {P.SALES_FROM} to {P.SALES_THROUGH}, and the county's public building records. No sign-up; nothing you type is saved.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- step 1 ---------- */}
        <div style={{ padding: "36px 0 10px" }}>
          <div className="rmv-wrap">
            <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">1</span><h2 className="rmv-h2" style={{ margin: 0 }}>Find your house</h2></div>
            <p>King County single-family homes. Enter the ZIP code, then start typing the street address (number first).</p>
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
                {zipState === "missing" && "That ZIP code is not in King County's records. This calculator covers King County only for now."}
                {zipState === "ok" && zipFile && !picked && addr.trim().length >= 3 && suggestions.length === 0 && "No single-family house matches that address. Check the spelling, or enter the details yourself."}
                {zipState === "ok" && picked && picked !== "manual" && "Filled in from King County's public building record. Change anything that is out of date."}
                {zipState === "ok" && !picked && (
                  <>
                    Not listed, a condo or townhouse, or rather not look it up?{" "}
                    <button type="button" className="rmv-link" onClick={startManual} disabled={!model}>Enter the details yourself</button>
                  </>
                )}
                {zipState === "idle" && "Condos, townhouses and houses outside King County are not covered yet."}
              </p>
            </div>
          </div>
        </div>

        {facts && (
          <>
            {/* ---------- step 2 ---------- */}
            <div style={{ padding: "26px 0 10px" }}>
              <div className="rmv-wrap">
                <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">2</span><h2 className="rmv-h2" style={{ margin: 0 }}>Your house today</h2></div>
                {hood && hood.n >= 10 && (
                  <p>
                    Your assessor neighborhood{hood.city ? ` in ${hood.city}` : ""}: median sale {fmtShort(hood.med)} across {hood.n} sales since {P.SALES_FROM}. Its best houses (top tenth) are grade {model!.subs[facts.sk].g90}.
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
                    <NumField id="f-yr" label="Year last renovated (0 if never)" value={facts.yrRenovated} onChange={(n) => set("yrRenovated", n)} />
                    <div>
                      <label className="rmv-label" htmlFor="f-grade">Quality grade</label>
                      <select id="f-grade" className="rmv-in" value={facts.grade} onChange={(e) => set("grade", Number(e.target.value))}>
                        {Object.entries(GRADE_LABELS).map(([g, l]) => <option key={g} value={g}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="rmv-label" htmlFor="f-cond">Condition</label>
                      <select id="f-cond" className="rmv-in" value={facts.cond} onChange={(e) => set("cond", Number(e.target.value))}>
                        {Object.entries(CONDITION_LABELS).map(([c, l]) => <option key={c} value={c}>{l}</option>)}
                      </select>
                    </div>
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
                  </div>
                  <p className="rmv-small" style={{ marginTop: 14, marginBottom: 0 }}>
                    <strong>Quality grade</strong> is the King County Assessor's 1–13 scale for construction and finishes; most houses are 7 (average) or 8 (good). <strong>Condition</strong> is upkeep, 1–5. If the county's record is older than your last remodel, update both.
                  </p>
                </div>
              </div>
            </div>

            {/* ---------- step 3 ---------- */}
            <div style={{ padding: "26px 0 10px" }}>
              <div className="rmv-wrap">
                <div className="rmv-steprow"><span className="rmv-step" aria-hidden="true">3</span><h2 className="rmv-h2" style={{ margin: 0 }}>The remodel</h2></div>
                <p>Choose each part you would redo and the quality. Leave the rest at "Not changing".</p>
                <div className="rmv-box">
                  {REMODEL_PARTS.map((p) => {
                    const t = scope.tiers[p.id] ?? null;
                    return (
                      <div key={p.id} className="rmv-part">
                        <h3 className="rmv-h3" id={`part-${p.id}`}>{p.label}</h3>
                        <div className="rmv-picks" role="group" aria-labelledby={`part-${p.id}`}>
                          <button type="button" className="rmv-pick" aria-pressed={t === null} onClick={() => setTier(p.id, null)}>Not changing</button>
                          {TIERS.map((x) => (
                            <button key={x.id} type="button" className="rmv-pick" aria-pressed={t === x.id} onClick={() => setTier(p.id, x.id)}>{x.label}</button>
                          ))}
                        </div>
                        {t && <div className="rmv-ex">{p.examples[t]}</div>}
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
                    <NumField id="a-cost" label="Remodel cost, optional ($)" value={cost} onChange={setCost} step={1000} />
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- results ---------- */}
            <div style={{ padding: "30px 0 40px", background: "#faf8f4", marginTop: 26, borderTop: "1px solid #e6e0d6" }} aria-live="polite">
              <div className="rmv-wrap">
                <h2 className="rmv-h2">What it could be worth</h2>
                {!result && <p>Enter the living area to see an estimate.</p>}
                {result && (
                  <>
                    <div className="rmv-results">
                      <div className="rmv-val">
                        <div className="rmv-val-k">Today, as is</div>
                        <div className="rmv-val-n">{fmt(result.asIs)}</div>
                        <div className="rmv-val-s">Estimated from your house's details and King County sales.</div>
                      </div>
                      <div className="rmv-val rmv-val-a">
                        <div className="rmv-val-k">Appraiser's view, after</div>
                        <div className="rmv-val-n">{fmt(result.appraiser)}</div>
                        <div className="rmv-val-d" style={{ color: "#0f5f57" }}>{anyScope ? `${signed(result.appraiser - result.asIs)} added` : "Choose a remodel above"}</div>
                        <div className="rmv-val-s">What a refinance appraisal is likely to support: measurable changes only, capped at the neighborhood's best houses.</div>
                      </div>
                      <div className="rmv-val rmv-val-b">
                        <div className="rmv-val-k">Broker's view, after</div>
                        <div className="rmv-val-n">{fmt(result.broker)}</div>
                        <div className="rmv-val-d" style={{ color: NAVY }}>{anyScope ? `${signed(result.broker - result.asIs)} added` : "Choose a remodel above"}</div>
                        <div className="rmv-val-s">What buyers have paid for houses like it, freshly remodeled. The best case if you sell.</div>
                      </div>
                    </div>
                    {anyScope && (
                      <p className="rmv-small" style={{ marginTop: 20 }}>
                        Quality grade {facts.grade} → {result.newGrade.toFixed(1)}; condition {facts.cond} → {result.newCond.toFixed(1)}.
                        {cost > 0 && (
                          <> For each $1 spent: about ${((result.appraiser - result.asIs) / cost).toFixed(2)} in the appraiser's view and ${((result.broker - result.asIs) / cost).toFixed(2)} in the broker's view.</>
                        )}
                      </p>
                    )}
                    {result.overImproved && (
                      <div className="rmv-warn">
                        <p style={{ marginBottom: 0 }}>
                          <strong>Past the neighborhood's best houses.</strong> These choices take the house to grade {result.newGrade.toFixed(1)}; the best tenth of houses sold in this neighborhood are grade {result.neighborhoodTopGrade}. The appraiser's view gives no credit past that point and the broker's view half credit. Buyers here have not paid much more for it.
                        </p>
                      </div>
                    )}
                    <p className="rmv-small" style={{ marginTop: 16 }}>
                      An automated estimate from public records, not an appraisal or a market analysis. Tested on sales it had not seen, half its estimates were within 8% of the price and 88% within 20%. It cannot see layout, workmanship, unpermitted work, or anything the county's record misses.{" "}
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
                <strong>The model.</strong> It learns from those sales what each feature has added to price in each of the assessor's neighborhoods, then prices your house as it is and as it would be after the remodel. Estimates are set at the level of the most recent three months of sales ({P.MARKET_MONTHS}), so they reflect today's mortgage rates and season rather than an average of the whole two years.
              </p>
              <p>
                <strong>Your remodel choices.</strong> The county's records do not know window brands or roof shingles. They grade a whole house's quality on a 1–13 scale. Each part of the house carries a share of that grade (the kitchen the most), and each quality level aims at a grade: economy 7, standard 8, premium 10, luxury 12. Redoing everything at premium makes a house grade 10. Economy finishes in a better house pull its grade down.
              </p>
              <p>
                <strong>Why two values.</strong> Buyers pay extra for a house that is freshly remodeled and move-in ready, and they will pay for quality up to what the neighborhood's best houses offer. A refinance appraisal is more conservative: it credits measurable change and gives little for quality past the neighborhood's best houses (appraisers call this conformity). If you plan to refinance rather than sell, plan around the appraiser's view.
              </p>
              <p className="rmv-small">
                Source: King County Assessor public data downloads (sales, residential building and parcel records), downloaded October 13, 2026. Lookups show only the public building record for an address; no owner names or individual sale prices are shown.
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
