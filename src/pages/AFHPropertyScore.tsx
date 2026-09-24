import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import BackToCalculators from "@/components/BackToCalculators";
import PageFAQ from "@/components/PageFAQ";
import AFHRunTheNumbers from "@/components/AFHRunTheNumbers";
import { countyIndex } from "@/data/afh/directory";
import {
  NOT_SURE, CATEGORIES, FLAG_LABEL, CURE_LABEL, BEFORE_YOU_COMMIT,
  activeQuestions, scoreProperty, scoreText, scoreLine, encodeAnswers, decodeAnswers,
  type Answers, type FlagLevel, type ScoreQuestion,
} from "@/data/afhPropertyScore";

/**
 * AFH Property Score (Sept 2026): a three to five minute screen of how well a
 * house could work as a Washington adult family home.
 *
 * ALL METHODOLOGY LIVES IN src/data/afhPropertyScore.ts. This file is only the
 * interface: one question per screen, results, the showing checklist, print.
 * To change a question, a point value, a flag or a band, edit the data file.
 *
 * Interface rules that must survive future edits:
 *   - The number never appears without its "items to investigate" count.
 *   - "Based solely on answers entered by the user" sits beside the score,
 *     on screen and in print, not only in a footer.
 *   - Nothing asks for contact details before showing the result.
 *   - No score is ever written onto a listing page.
 *   - Class names here avoid "card", "tile", "btn" and "cta": index.css has
 *     sitewide rules keyed to those substrings.
 *   - Spacing on <p> and headings is set in PAGE_CSS with !important, because
 *     index.css overrides inline margins on every p and h1-h4.
 *
 * Colour: plum, distinct from ROI (cobalt), valuation (green), financing
 * (teal) and cost by location (orange).
 */

const PLUM = "#6b3fa0";
const PLUM_DARK = "#4c2a78";
const INK = "#141210";
const FONT = "'DM Sans', system-ui, sans-serif";
const FLAG_COLOR: Record<FlagLevel, { fg: string; bg: string; dot: string }> = {
  green: { fg: "#14532d", bg: "#f0fdf4", dot: "#16a34a" },
  yellow: { fg: "#713f12", bg: "#fefce8", dot: "#ca8a04" },
  red: { fg: "#7f1d1d", bg: "#fef2f2", dot: "#dc2626" },
};

const PAGE_CSS = `
  .aps-root p { margin: 0 0 14px !important; line-height: 1.6 !important; }
  .aps-root p.aps-tight { margin: 0 !important; }
  /* index.css forces large sizes and tight margins on every h2/h3 with
     !important, so sizes here must be !important too or a question renders at
     ~42px on a phone and fills the screen. */
  .aps-h1.aps-h1 { font-size: clamp(30px, 4.2vw, 44px) !important; line-height: 1.15 !important; margin: 0 0 12px !important; }
  .aps-root h2.aps-h2 { font-size: 24px !important; line-height: 1.25 !important; margin: 0 0 12px !important; }
  .aps-root h3.aps-h3 { font-size: 20px !important; line-height: 1.3 !important; margin: 18px 0 8px !important; }
  .aps-root h2.aps-q { font-size: clamp(21px, 5.6vw, 27px) !important; line-height: 1.3 !important; margin: 22px 0 18px !important; }
  .aps-root h2.aps-score { font-size: clamp(46px, 13vw, 72px) !important; line-height: 1.05 !important; margin: 8px 0 6px !important; }
  .aps-root h2.aps-withheld { font-size: clamp(24px, 6vw, 30px) !important; line-height: 1.2 !important; margin: 10px 0 10px !important; }
  .aps-panel { background: #fff; border: 2px solid ${PLUM}; border-radius: 14px; padding: 1.6rem 1.4rem; box-shadow: 0 4px 24px rgba(0,0,0,0.08); max-width: 760px; margin: 0 auto 24px; }
  .aps-panel.aps-wide { max-width: 900px; }
  .aps-opt { display: block; width: 100%; text-align: left; min-height: 58px; padding: 14px 18px; margin: 0 0 10px; border-radius: 10px; border: 2px solid #cbbfdc; background: #fff; color: ${INK}; font-family: ${FONT}; font-size: 18px !important; font-weight: 600; line-height: 1.35; cursor: pointer; }
  /* Hover only where there is a mouse. On a touch screen the last-tapped spot
     keeps its hover state, which made the option under it on the NEXT question
     look pre-selected. */
  @media (hover: hover) { .aps-opt:hover { border-color: ${PLUM}; background: #f6f1fb; } }
  .aps-opt:focus-visible { border-color: ${PLUM}; background: #f6f1fb; outline: 3px solid #c9b3e6; outline-offset: 2px; }
  .aps-opt[aria-pressed="true"] { border-color: ${PLUM}; background: ${PLUM}; color: #fff; }
  .aps-opt.aps-unsure { font-weight: 500; border-style: dashed; color: #3b3630; }
  .aps-opt.aps-unsure[aria-pressed="true"] { color: #fff; border-style: solid; }
  .aps-go { display: inline-flex; align-items: center; justify-content: center; min-height: 54px; padding: 12px 26px; border-radius: 10px; border: 2px solid ${PLUM}; background: ${PLUM}; color: #fff !important; font-family: ${FONT}; font-size: 18px !important; font-weight: 700; cursor: pointer; text-decoration: none; }
  .aps-go.aps-ghost { background: #fff; color: ${PLUM_DARK} !important; }
  .aps-go:disabled { opacity: .45; cursor: not-allowed; }
  .aps-field { width: 100%; min-height: 52px; padding: 10px 12px; border-radius: 8px; border: 2px solid #cbbfdc; font-family: ${FONT}; font-size: 18px; background: #fff; color: ${INK}; box-sizing: border-box; }
  .aps-bar { height: 12px; border-radius: 6px; background: #e9e2f3; overflow: hidden; }
  .aps-bar > span { display: block; height: 100%; background: ${PLUM}; border-radius: 6px; }
  .aps-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .aps-printonly { display: none; }
  @media (max-width: 640px) { .aps-panel { padding: 1.25rem 1rem; } .aps-row > * { flex: 1 1 100%; } }
  @media print {
    header, footer, nav, .aps-noprint, [data-header-spacer] { display: none !important; }
    .aps-printonly { display: block !important; }
    /* Let sections flow down the page. Keeping every panel whole put one panel
       per sheet and ran the report to six pages, most of page one blank. Only
       the small pieces (a flag, a checklist line) are kept from splitting. */
    .aps-panel { box-shadow: none !important; border-width: 1px !important; max-width: none !important; margin: 0 0 10px !important; padding: 12px 16px !important; break-inside: auto; }
    .aps-panel li, .aps-flag { break-inside: avoid; }
    .aps-root h2.aps-score { font-size: 40px !important; margin: 2px 0 !important; }
    .aps-root p { margin: 0 0 6px !important; font-size: 13px !important; line-height: 1.4 !important; }
    .aps-root li, .aps-root li span, .aps-root li strong { font-size: 13px !important; line-height: 1.4 !important; }
    .aps-root h2.aps-h2 { font-size: 17px !important; margin: 0 0 6px !important; }
    .aps-root h3.aps-h3 { font-size: 14px !important; margin: 8px 0 4px !important; }
    .aps-root { background: #fff !important; padding: 0 !important; }
    body { background: #fff !important; }
  }
`;

const SECTION_LABEL = (q: ScoreQuestion) =>
  q.section === "framing" ? "About the home"
    : q.section === "feasibility" ? "Feasibility check"
    : q.section === "acquisition" ? "What you are buying"
    : CATEGORIES.find((c) => c.id === q.category)?.label ?? "";

const FAQS = [
  { question: "What is the AFH Property Score?", answer: "It is a free screening tool, three to five minutes long, that estimates how well a house could work physically as a Washington adult family home. It scores the real estate only, on a 100-point scale weighted by how expensive each shortfall is to fix, and separately lists feasibility items to investigate. It is not an inspection, an appraisal, or a licensing decision." },
  { question: "Does a high score mean the home can be licensed as an adult family home?", answer: "No. A high score means the property shows characteristics that are favorable for further evaluation. The home must still pass the local building official's adult family home inspection and meet DSHS licensing requirements, and the provider must qualify separately. Always review the items to investigate alongside the score." },
  { question: "Can a two-story house or a house with a basement be an adult family home?", answer: "Yes, but stairs limit who can live in a room. Under Washington rules, residents who need help evacuating must have an exit path with no stairs, and an elevator, chairlift, or platform lift does not count. A bedroom reached by stairs can be used only by residents who can get out on their own." },
  { question: "Are zoning or an HOA a problem for an adult family home in Washington?", answer: "Generally not. State law (RCW 70.128.140) says an adult family home must be treated as a residential use and is a permitted use in all areas zoned residential or commercial, including single-family zones. HOA rules that restrict adult family homes are also unenforceable under RCW 64.38.060, though an HOA can still apply ordinary rules that cover every home. Septic capacity, unpermitted additions, and fire access are the more common site questions." },
  { question: "What should I measure when I tour a house for adult family home use?", answer: "Bring a tape measure. Resident bedrooms need at least 80 square feet of usable floor for one resident or 120 for two. The required exit door needs 32 inches of clear width, and in a home licensed after September 20, 2026 every interior door residents use must be at least 27 inches wide. Bedroom escape windows need a sill no higher than 44 inches and a clear opening at least 24 inches high and 20 inches wide. Ramps can be no steeper than 1 inch of rise per foot, and a shower used for resident bathing must be at least 30 by 48 inches. The tool builds a checklist for the specific house." },
];

const AFHPropertyScore = () => {
  const cities = useMemo(() => [...countyIndex].sort((a, b) => a.city.localeCompare(b.city)), []);
  const [answers, setAnswers] = useState<Answers>({});
  const [citySlug, setCitySlug] = useState("");
  const [beds, setBeds] = useState("");
  const [address, setAddress] = useState("");
  const [view, setView] = useState<"intro" | "quiz" | "results">("intro");
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const questions = useMemo(() => activeQuestions(answers), [answers]);
  const result = useMemo(() => scoreProperty(answers), [answers]);
  const city = cities.find((c) => c.citySlug === citySlug) ?? null;

  // Reopen a saved link: ?a=answers&c=city&b=beds
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const saved = decodeAnswers(p.get("a"));
    if (Object.keys(saved).length === 0) return;
    setAnswers(saved);
    if (p.get("c")) setCitySlug(p.get("c") as string);
    if (p.get("b")) setBeds(p.get("b") as string);
    const complete = activeQuestions(saved).every((q) => saved[q.id] !== undefined);
    if (complete) setView("results");
    else { setView("quiz"); setStep(Math.max(0, activeQuestions(saved).findIndex((q) => saved[q.id] === undefined))); }
  }, []);

  // Keep the link current once there is a result, so it can be bookmarked or shared.
  useEffect(() => {
    if (view !== "results") return;
    const p = new URLSearchParams();
    p.set("a", encodeAnswers(answers));
    if (citySlug) p.set("c", citySlug);
    if (beds) p.set("b", beds);
    window.history.replaceState(null, "", `${window.location.pathname}?${p.toString()}`);
  }, [view, answers, citySlug, beds]);

  const toTop = () => {
    window.requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
      headingRef.current?.focus({ preventScroll: true });
    });
  };

  const choose = (q: ScoreQuestion, value: string) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    const list = activeQuestions(next);
    const idx = list.findIndex((x) => x.id === q.id);
    window.setTimeout(() => {
      if (idx + 1 < list.length) setStep(idx + 1);
      else setView("results");
      toTop();
    }, 170);
  };

  const restart = () => {
    setAnswers({}); setStep(0); setView("intro"); setCitySlug(""); setBeds(""); setAddress("");
    window.history.replaceState(null, "", window.location.pathname);
    toTop();
  };

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 2500); } catch { /* clipboard unavailable: the address bar still holds the link */ }
  };

  const q = questions[Math.min(step, questions.length - 1)];
  const bedsForHandoff = beds ? Number(beds) : ({ "3": 3, "4": 4, "5": 5, "6+": 6 } as Record<string, number>)[answers.mainBedrooms] ?? null;
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const label: React.CSSProperties = { display: "block", fontFamily: FONT, fontSize: 16, fontWeight: 700, color: INK, marginBottom: 6 };
  const h2: React.CSSProperties = { fontFamily: FONT, fontSize: 24, fontWeight: 700, color: PLUM_DARK, lineHeight: 1.25 };
  const body: React.CSSProperties = { fontFamily: FONT, fontSize: 18, color: INK };

  return (
    <>
      <SEOHead
        title="AFH Property Score: Could This House Work as an Adult Family Home? | AFH Club"
        description="A free screen for Washington adult family home buyers that takes three to five minutes. Answer questions from the listing and get a 100-point physical suitability score, a feasibility check, the likely conversion projects, and a tape-measure checklist for the showing."
        canonical="https://realpropertyplanning.com/afh-club/afh-property-score"
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "AFH Property Score",
          applicationCategory: "BusinessApplication",
          operatingSystem: "All",
          url: "https://realpropertyplanning.com/afh-club/afh-property-score",
          description: "Screens a residential property for physical suitability as a Washington adult family home and builds a showing checklist.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <style>{PAGE_CSS}</style>
      <Header />
      <main>
        <div className="aps-noprint" style={{ background: "#faf8f4", padding: "40px 24px 36px", borderBottom: `3px solid ${PLUM}` }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ marginBottom: 22 }}><BackToCalculators accent={PLUM} /></div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: PLUM_DARK, marginBottom: 10, fontFamily: FONT }}>For buyers, owners &amp; investors</p>
            <h1 className="aps-h1" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>AFH Property Score</h1>
            <p style={{ fontSize: 20, fontFamily: FONT, color: INK, lineHeight: 1.6, maxWidth: 680, margin: 0 }}>
              Could this house work as a Washington adult family home? A preliminary screen you can finish from the listing in three to five minutes.
            </p>
          </div>
        </div>

        <div className="aps-root" style={{ background: "#faf8f4", padding: "2rem 1rem 3rem" }}>
          <div ref={topRef} style={{ scrollMarginTop: "calc(var(--header-height, 120px) + 12px)" }} />

          {/* ---------------- INTRO ---------------- */}
          {view === "intro" && (
            <div className="aps-panel">
              <h2 ref={headingRef} tabIndex={-1} className="aps-h2" style={h2}>What you will get</h2>
              <ul style={{ ...body, margin: "0 0 18px", paddingLeft: 22, lineHeight: 1.7 }}>
                <li>A score out of 100 for how well the <strong>building</strong> suits this use</li>
                <li>A feasibility check of the things that can stop a project</li>
                <li>The conversion projects the house is likely to need</li>
                <li>A tape-measure checklist to take to the showing</li>
              </ul>
              <p style={body}>Every question is something you can see in a listing and its photos. Tap <strong>Not sure</strong> whenever you need to. It never blocks you.</p>

              <h3 className="aps-h3" style={h2}>Optional: about the property</h3>
              <div className="aps-row" style={{ marginBottom: 14 }}>
                <div style={{ flex: "2 1 260px" }}>
                  <label style={label} htmlFor="aps-city">City <span style={{ fontWeight: 400 }}>(adds a local market snapshot)</span></label>
                  <select id="aps-city" className="aps-field" value={citySlug} onChange={(e) => setCitySlug(e.target.value)}>
                    <option value="">Choose a city, or skip</option>
                    {cities.map((c) => <option key={c.citySlug} value={c.citySlug}>{c.city}</option>)}
                  </select>
                </div>
                <div style={{ flex: "1 1 160px" }}>
                  <label style={label} htmlFor="aps-beds">Residents you plan for</label>
                  <select id="aps-beds" className="aps-field" value={beds} onChange={(e) => setBeds(e.target.value)}>
                    <option value="">Not sure</option>
                    {[2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={label} htmlFor="aps-addr">Address or nickname <span style={{ fontWeight: 400 }}>(only printed on your report, never sent anywhere)</span></label>
                <input id="aps-addr" className="aps-field" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Optional" autoComplete="off" />
              </div>
              <button type="button" className="aps-go" onClick={() => { setView("quiz"); setStep(0); toTop(); }}>Start the score</button>
            </div>
          )}

          {/* ---------------- QUIZ ---------------- */}
          {view === "quiz" && q && (
            <div className="aps-panel">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 8, fontFamily: FONT }}>
                <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: PLUM_DARK }}>{SECTION_LABEL(q)}</span>
                <span style={{ fontSize: 16, color: "#3b3630", whiteSpace: "nowrap" }}>{step + 1} of {questions.length}</span>
              </div>
              <div className="aps-bar" role="progressbar" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={step + 1} aria-label="Progress">
                <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>

              <h2 ref={headingRef} tabIndex={-1} id="aps-q" className="aps-q" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>{q.prompt}</h2>

              <div role="radiogroup" aria-labelledby="aps-q">
                {q.options.map((o) => (
                  <button type="button" key={o.id} className="aps-opt" aria-pressed={answers[q.id] === o.id} onClick={() => choose(q, o.id)}>{o.label}</button>
                ))}
                {q.allowNotSure && (
                  <button type="button" className="aps-opt aps-unsure" aria-pressed={answers[q.id] === NOT_SURE} onClick={() => choose(q, NOT_SURE)}>Not sure</button>
                )}
              </div>

              <details style={{ ...body, fontSize: 17, margin: "8px 0 18px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: PLUM_DARK }}>Why this matters</summary>
                <p style={{ ...body, fontSize: 17, marginTop: 8 }}>{q.why}</p>
              </details>

              <div className="aps-row">
                <button type="button" className="aps-go aps-ghost" onClick={() => { if (step === 0) setView("intro"); else setStep(step - 1); toTop(); }}>Back</button>
                {answers[q.id] !== undefined && (
                  <button type="button" className="aps-go" onClick={() => { if (step + 1 < questions.length) setStep(step + 1); else setView("results"); toTop(); }}>
                    {step + 1 < questions.length ? "Next" : "See my score"}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ---------------- RESULTS ---------------- */}
          {view === "results" && (
            <>
              <div className="aps-panel aps-wide" style={{ textAlign: "center" }}>
                <div className="aps-printonly" style={{ ...body, textAlign: "left", marginBottom: 12 }}>
                  <strong>AFH Property Score report</strong> · realpropertyplanning.com/afh-club/afh-property-score<br />
                  {address ? <>{address}<br /></> : null}{city ? <>{city.city}, {city.county} County<br /></> : null}Prepared {today}
                </div>
                <p className="aps-tight" style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: PLUM_DARK, fontFamily: FONT }}>AFH Property Score{address ? ` · ${address}` : ""}</p>
                {result.withheld ? (
                  <>
                    <h2 ref={headingRef} tabIndex={-1} className="aps-withheld" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>Not enough is known yet for a score</h2>
                    <p style={body}>You marked {result.unknownIds.length} of {result.total} items "not sure." Use the checklist below at the showing, then come back with this link and fill in what you learned.</p>
                  </>
                ) : (
                  <>
                    <h2 ref={headingRef} tabIndex={-1} className="aps-score" style={{ fontFamily: FONT, fontWeight: 800, color: PLUM_DARK }}>
                      {scoreText(result)}<span style={{ fontSize: "0.4em", fontWeight: 700, color: "#3b3630" }}> / 100</span>
                    </h2>
                    <p style={{ ...body, fontSize: 20, fontWeight: 700 }}>
                      {result.flagsToInvestigate === 0 ? "No items to investigate" : `${result.flagsToInvestigate} item${result.flagsToInvestigate === 1 ? "" : "s"} to investigate`} · Conversion burden: {result.burden.level}
                    </p>
                    <p style={{ ...body, fontSize: 21, fontWeight: 700, color: INK }}>{result.band.label}</p>
                    <p style={{ ...body, maxWidth: 640, margin: "0 auto 14px" }}>{result.band.blurb}</p>
                    {result.low !== result.high && (
                      <p style={{ ...body, fontSize: 17, maxWidth: 640, margin: "0 auto 14px" }}>
                        The score is a range because {result.total - result.answered} of {result.total} {result.total - result.answered === 1 ? "items was" : "items were"} marked "not sure." It narrows to a single number once you know them.
                      </p>
                    )}
                  </>
                )}
                <p className="aps-tight" style={{ ...body, fontSize: 16, color: "#3b3630", maxWidth: 680, margin: "0 auto" }}>
                  <strong>A good score is not approval.</strong> Based solely on answers entered by the user. Not an inspection, an appraisal, or a building or licensing determination.
                </p>
              </div>

              {/* Feasibility */}
              <div className="aps-panel aps-wide">
                <h2 className="aps-h2" style={h2}>Feasibility check</h2>
                <p style={body}>These are the things that can change whether your plan works at all. They are separate from the score on purpose, so read them first.</p>
                {result.flags.slice().sort((a, b) => ["red", "yellow", "green"].indexOf(a.level) - ["red", "yellow", "green"].indexOf(b.level)).map((f) => (
                  <div key={f.id} className="aps-flag" style={{ background: FLAG_COLOR[f.level].bg, borderLeft: `6px solid ${FLAG_COLOR[f.level].dot}`, borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
                    <p className="aps-tight" style={{ ...body, fontWeight: 700, color: FLAG_COLOR[f.level].fg }}>
                      <span aria-hidden="true" style={{ display: "inline-block", width: 12, height: 12, borderRadius: 6, background: FLAG_COLOR[f.level].dot, marginRight: 8 }} />
                      {f.title} <span style={{ fontWeight: 500 }}>· {FLAG_LABEL[f.level]}</span>
                    </p>
                    {f.level !== "green" && <p className="aps-tight" style={{ ...body, fontSize: 17, paddingTop: 6 }}>{f.detail}</p>}
                  </div>
                ))}
                <p className="aps-tight" style={{ ...body, fontSize: 17 }}>
                  <strong>About zoning:</strong> Washington law treats an adult family home as a residential use and a permitted use in every residential and commercial zone (RCW 70.128.140). Zoning is rarely the obstacle; the items above are.
                </p>
              </div>

              {/* Categories + strengths */}
              {!result.withheld && (
                <div className="aps-panel aps-wide">
                  <h2 className="aps-h2" style={h2}>Where the points came from</h2>
                  {result.categories.map((c) => (
                    <div key={c.id} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, ...body, fontWeight: 700, marginBottom: 5 }}>
                        <span>{c.label}</span>
                        <span style={{ whiteSpace: "nowrap" }}>{c.low === c.high ? c.low : `${c.low} to ${c.high}`} / {c.max}</span>
                      </div>
                      <div className="aps-bar" aria-hidden="true"><span style={{ width: `${(c.low / c.max) * 100}%` }} /></div>
                    </div>
                  ))}
                  <p className="aps-tight" style={{ ...body, fontSize: 17 }}>Points follow cost to cure: a shortfall that is cheap to fix costs little, and one that needs an addition costs a lot. Paint, flooring, and finishes are not scored.</p>
                  {result.strengths.length > 0 && (
                    <>
                      <h3 className="aps-h3" style={h2}>Strengths</h3>
                      <ul style={{ ...body, margin: 0, paddingLeft: 22, lineHeight: 1.7 }}>{result.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
                    </>
                  )}
                </div>
              )}

              {/* Conversion burden */}
              <div className="aps-panel aps-wide">
                <h2 className="aps-h2" style={h2}>Conversion burden: {result.burden.level}</h2>
                <p style={body}>{result.burden.message}</p>
                {result.burden.projects.length > 0 && (
                  <ul style={{ ...body, margin: "0 0 12px", paddingLeft: 22, lineHeight: 1.7 }}>
                    {result.burden.projects.map((p) => <li key={p.project}><strong>{p.project}</strong>: {CURE_LABEL[p.cls]}</li>)}
                  </ul>
                )}
                <p className="aps-tight" style={{ ...body, fontSize: 16, color: "#3b3630" }}>Cost ranges are rough planning figures, not estimates for this house. Several moderate projects together can matter more than any single one.</p>
              </div>

              {/* Showing checklist */}
              <div className="aps-panel aps-wide">
                <h2 className="aps-h2" style={h2}>Your showing checklist</h2>
                <p style={body}><strong>Bring a tape measure and your phone.</strong> These {result.checklist.length} items are chosen from your answers.</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {result.checklist.map((c, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderTop: "1px solid #e5e0d6" }}>
                      <span aria-hidden="true" style={{ flex: "0 0 22px", width: 22, height: 22, border: `2px solid ${PLUM}`, borderRadius: 4, marginTop: 3 }} />
                      <span style={{ ...body, fontSize: 17, lineHeight: 1.5 }}>
                        <strong style={{ display: "block", fontSize: 18 }}>{c.title}</strong>
                        {c.text}{c.source ? <span style={{ color: "#3b3630", fontSize: 15 }}> ({c.source})</span> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Acquisition review */}
              {result.acquisition && (
                <div className="aps-panel aps-wide">
                  <h2 className="aps-h2" style={h2}>What you are buying</h2>
                  <div style={{ background: "#fff7ed", border: "2px solid #c2410c", borderRadius: 10, padding: "12px 14px", marginBottom: 16 }}>
                    <p className="aps-tight" style={{ ...body, fontWeight: 700 }}>The license does not come with the house. A buyer applies for their own.</p>
                  </div>
                  <p style={body}>None of this affects the score above. A property's physical suitability and a business's health are different questions.</p>
                  {result.acquisition.known.length > 0 && (<><h3 className="aps-h3" style={h2}>What you know</h3><ul style={{ ...body, margin: "0 0 16px", paddingLeft: 22, lineHeight: 1.7 }}>{result.acquisition.known.map((k) => <li key={k}>{k}</li>)}</ul></>)}
                  {result.acquisition.ask.length > 0 && (<><h3 className="aps-h3" style={h2}>Questions to ask the seller</h3><ul style={{ ...body, margin: "0 0 16px", paddingLeft: 22, lineHeight: 1.7 }}>{result.acquisition.ask.map((k) => <li key={k}>{k}</li>)}</ul></>)}
                  <p className="aps-tight aps-noprint" style={{ ...body, fontSize: 17 }}>
                    Helpful guides: {result.acquisition.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 ? " · " : ""}<Link to={l.href} style={{ color: PLUM_DARK, fontWeight: 700 }}>{l.label}</Link></React.Fragment>)}
                  </p>
                </div>
              )}

              {/* Before you commit */}
              <div className="aps-panel aps-wide">
                <h2 className="aps-h2" style={h2}>Before you commit</h2>
                <ul style={{ ...body, margin: 0, paddingLeft: 22, lineHeight: 1.7 }}>{BEFORE_YOU_COMMIT.map((b) => <li key={b} style={{ marginBottom: 8 }}>{b}</li>)}</ul>
              </div>

              {/* Market snapshot + run the numbers */}
              {city && (
                <div className="aps-panel aps-wide aps-noprint">
                  <h2 className="aps-h2" style={h2}>{city.city} market snapshot</h2>
                  <p style={body}>
                    DSHS lists <strong>{city.facilityCount.toLocaleString()}</strong> licensed adult family homes in {city.city}, with <strong>{city.totalBeds.toLocaleString()}</strong> licensed beds. This is information only and does not affect the score.
                  </p>
                  <AFHRunTheNumbers city={city.city} county={city.county} beds={bedsForHandoff} lead="buyer" heading="Run the numbers on this property" accent={PLUM} />
                </div>
              )}

              {/* Actions + CTA */}
              <div className="aps-panel aps-wide aps-noprint">
                <div className="aps-row" style={{ marginBottom: 22 }}>
                  <button type="button" className="aps-go" onClick={() => window.print()}>Print or save this report</button>
                  <button type="button" className="aps-go aps-ghost" onClick={copyLink}>{copied ? "Link copied" : "Copy a link to these results"}</button>
                  <button type="button" className="aps-go aps-ghost" onClick={() => { setView("quiz"); setStep(0); toTop(); }}>Change my answers</button>
                  <button type="button" className="aps-go aps-ghost" onClick={restart}>Score another property</button>
                </div>
                <p style={{ ...body, fontSize: 17 }}>Your answers are saved in the link above, not on a server. Bookmark it, and after the showing come back to replace each "not sure."{!city ? <> For local market figures and the ROI calculator, see <Link to="/afh-club/calculators" style={{ color: PLUM_DARK, fontWeight: 700 }}>AFH Calculators</Link>.</> : null}</p>
                <div style={{ background: "#f6f1fb", borderRadius: 12, padding: "18px 16px" }}>
                  <h3 className="aps-h3" style={h2}>Want a second set of eyes before you make an offer?</h3>
                  <p style={body}>Talk with an AFH expert resource about the real estate side of this property and the questions worth asking.</p>
                  <Link to="/contact?reason=afh-buy-sell" className="aps-go">Request a property review</Link>
                </div>
              </div>

              <p className="aps-printonly" style={{ ...body, fontSize: 14 }}>{scoreLine(result)}. Prepared {today}. Based solely on answers entered by the user.</p>
            </>
          )}

          <p style={{ ...body, fontSize: 16, color: "#2b2825", maxWidth: 900, margin: "8px auto 0", lineHeight: 1.6 }}>
            The AFH Property Score is an educational screening tool for comparing residential properties for possible adult family home use. It is based solely on information entered by the user and is not an appraisal, inspection, feasibility study, building-code determination, DSHS licensing determination, legal opinion, or assurance that a property can be licensed or operated as an adult family home. Requirements depend on the property, the residents served, and the jurisdiction. Verify everything with the local building official, DSHS, and qualified professionals before buying or modifying a property.
          </p>
        </div>

        <div className="aps-noprint">
          <PageFAQ faqs={FAQS} heading="AFH Property Score: Common Questions" eyebrow="Frequently Asked Questions" id="afh-property-score" />
          <BackToAFHClub />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AFHPropertyScore;
