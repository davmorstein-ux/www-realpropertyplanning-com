import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { trackPlannerCompleted } from "@/lib/siteTracking";
import {
  CHECKLIST_PDF,
  OFFICIAL_SOURCES,
  SITUATIONS,
  buildPlan,
  decodePlan,
  encodePlan,
  isComplete,
  visibleQuestions,
  type Answers,
  type PlanQuestion,
  type Situation,
} from "@/data/myPlan";

/**
 * /my-plan — My Real Property Plan (Oct 18, 2026). A few questions, then a
 * step-by-step plan built from the site's own guides. Questions, rules and every
 * link live in src/data/myPlan.ts; this file only renders them.
 *
 * Owner's decisions: no AI (fixed rules over reviewed pages), never gated, email
 * optional. Answers stay in the browser, in the URL fragment so the plan can be
 * bookmarked; nothing about them is sent anywhere.
 *
 * Class names use an mp- prefix and avoid "card", "tile", "section", "btn" and
 * "cta" (sitewide substring rules in index.css). Choices are buttons with
 * role="radio", not <label>s, because index.css forces every label in main to 14px.
 */

const NAVY = "#1B3A6B";
const MAGENTA = "#a10149";
const INK = "#1c1917";
const CREAM = "#faf8f4";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const PAGE_CSS = `
  .mp { font-family: ${FONT}; color: ${INK}; }
  .mp-wrap { max-width: 860px; margin: 0 auto; padding: 0 20px; }
  .mp h1.mp-h1 { font-size: clamp(32px, 5vw, 48px) !important; line-height: 1.12 !important; margin: 0 0 14px !important; color: ${INK} !important; }
  .mp h2.mp-h2 { font-size: clamp(24px, 3vw, 32px) !important; line-height: 1.22 !important; margin: 0 0 10px !important; color: ${INK} !important; }
  .mp h3.mp-h3 { font-size: 21px !important; line-height: 1.3 !important; margin: 0 0 6px !important; color: ${INK} !important; }
  .mp p.mp-p { font-size: 19px !important; line-height: 1.6 !important; margin: 0 0 16px !important; color: ${INK} !important; }
  .mp p.mp-kicker { font-size: 14px !important; font-weight: 700 !important; letter-spacing: .14em; text-transform: uppercase; color: ${NAVY} !important; margin: 0 0 10px !important; }
  .mp p.mp-small { font-size: 16px !important; line-height: 1.5 !important; margin: 0 !important; color: ${INK} !important; }
  .mp-rule { width: 56px; height: 4px; background: ${MAGENTA}; margin: 0 0 18px; border-radius: 2px; }
  .mp-hero { background: ${CREAM}; border-bottom: 3px solid ${NAVY}; padding: 40px 0 34px; }
  .mp-block { padding: 32px 0; }
  .mp-panel { background: #fff; border: 1px solid #d9d2c7; border-radius: 12px; padding: 24px 20px; }
  .mp-q + .mp-q { margin-top: 26px; padding-top: 22px; border-top: 1px solid #ebe5dc; }
  .mp p.mp-qtext { font-size: 20px !important; font-weight: 700 !important; line-height: 1.35 !important; margin: 0 0 6px !important; }
  .mp p.mp-hint { font-size: 16px !important; line-height: 1.45 !important; margin: 0 0 10px !important; color: #1c1917 !important; }
  .mp-qnum { color: ${NAVY}; margin-right: 6px; }
  .mp-choices { display: grid; gap: 10px; grid-template-columns: 1fr; margin-top: 10px; }
  @media (min-width: 700px) { .mp-choices.mp-two { grid-template-columns: 1fr 1fr; } }
  .mp button.mp-choice { min-height: 58px; width: 100%; text-align: left; padding: 12px 16px !important; border: 2px solid #c9beb4 !important; border-radius: 10px !important; background: #fff !important; color: ${INK} !important; font-family: ${FONT} !important; font-size: 18px !important; font-weight: 600 !important; line-height: 1.3 !important; cursor: pointer; display: flex; align-items: center; gap: 12px; }
  .mp button.mp-choice .mp-dot { flex: 0 0 22px; width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${NAVY}; background: #fff; box-shadow: inset 0 0 0 4px #fff; }
  .mp button.mp-choice[aria-checked="true"] { border-color: ${NAVY} !important; background: #eef2f8 !important; }
  .mp button.mp-choice[aria-checked="true"] .mp-dot { background: ${NAVY}; }
  @media (hover: hover) { .mp button.mp-choice:hover { border-color: ${NAVY} !important; } }
  .mp button.mp-choice:focus-visible, .mp button.mp-action:focus-visible { outline: 3px solid ${NAVY} !important; outline-offset: 2px !important; }
  .mp button.mp-big { flex-direction: column; align-items: flex-start; gap: 4px; padding: 18px 18px !important; min-height: 96px; }
  .mp button.mp-big .mp-big-t { font-size: 20px; font-weight: 700; }
  .mp button.mp-big .mp-big-s { font-size: 16px; font-weight: 400; line-height: 1.45; color: #1c1917; }
  .mp-plan { list-style: none; counter-reset: mp; margin: 0; padding: 0; }
  .mp-plan > li { counter-increment: mp; position: relative; padding: 0 0 0 52px; margin: 0 0 26px; }
  .mp-plan > li::before { content: counter(mp); position: absolute; left: 0; top: -2px; width: 36px; height: 36px; border-radius: 50%; background: ${NAVY}; color: #fff; font-weight: 700; font-size: 18px; display: flex; align-items: center; justify-content: center; }
  .mp-links { list-style: none; margin: 8px 0 0; padding: 0; display: grid; gap: 8px; }
  .mp a.mp-link { display: block; background: #fff; border: 1px solid #c9d3e3; border-radius: 8px; padding: 12px 14px; font-size: 18px !important; font-weight: 700; color: ${NAVY} !important; text-decoration: none !important; line-height: 1.35; }
  .mp a.mp-link::after { content: " →"; }
  @media (hover: hover) { .mp a.mp-link:hover { border-color: ${NAVY}; text-decoration: underline !important; } }
  .mp a.mp-inline { color: ${NAVY} !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
  .mp-result { background: #eef2f8; border-left: 5px solid ${NAVY}; border-radius: 10px; padding: 24px 20px; }
  .mp-result:focus { outline: none; }
  .mp-actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 22px; }
  .mp button.mp-action { min-height: 52px; padding: 10px 18px !important; border-radius: 8px !important; font-family: ${FONT} !important; font-size: 18px !important; font-weight: 700 !important; cursor: pointer; border: 2px solid ${NAVY} !important; background: #fff !important; color: ${NAVY} !important; }
  .mp button.mp-action.mp-primary { background: ${NAVY} !important; color: #fff !important; }
  .mp-sources { background: #fff; border: 1px solid #c9d3e3; border-radius: 10px; padding: 18px 18px 16px; margin-top: 8px; }
  .mp-srclist { list-style: none; margin: 0 0 12px; padding: 0; display: grid; gap: 10px; }
  .mp-srclist li { font-size: 17px; line-height: 1.5; }
  .mp-srcnote { color: #1c1917; }
  .mp-print-only { display: none; }
  @media print {
    header, footer, nav, .mp-noprint, .rpp-news { display: none !important; }
    .mp-print-only { display: block; }
    .mp-result { background: #fff; border: none; padding: 0; }
    .mp a.mp-link { border: none; padding: 2px 0; font-size: 14px !important; }
    .mp a.mp-link::after { content: " — realpropertyplanning.com" attr(data-href); font-weight: 400; color: #444; }
    .mp-plan > li { break-inside: avoid; }
    .mp-sources { border: 1px solid #999; break-inside: avoid; }
    .mp-srclist a.mp-inline::after { content: " (" attr(data-href) ")"; font-weight: 400; color: #444; font-size: 13px; word-break: break-all; }
  }
`;

function Choices({ q, n, value, onPick }: { q: PlanQuestion; n: number; value: string | undefined; onPick: (v: string) => void }) {
  const labelId = `mp-${q.id}-label`;
  return (
    <div className="mp-q">
      <p className="mp-qtext" id={labelId}>
        <span className="mp-qnum">{n}.</span>
        {q.prompt}
      </p>
      {q.hint && <p className="mp-hint">{q.hint}</p>}
      <div className={`mp-choices${q.options.length === 4 ? " mp-two" : ""}`} role="radiogroup" aria-labelledby={labelId}>
        {q.options.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={value === o.value} className="mp-choice" onClick={() => onPick(o.value)}>
            <span className="mp-dot" aria-hidden="true" />
            <span>{o.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const MyPlan = () => {
  const [situation, setSituation] = useState<Situation | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const reported = useRef(false);

  // A saved or shared plan arrives in the URL fragment (on load, or when a
  // link to a different plan is followed while already on this page).
  useEffect(() => {
    const load = () => {
      const saved = decodePlan(window.location.hash);
      if (saved) {
        setSituation(saved.situation);
        setAnswers(saved.answers);
      }
    };
    load();
    window.addEventListener("hashchange", load);
    return () => window.removeEventListener("hashchange", load);
  }, []);

  const questions = situation ? visibleQuestions(situation, answers) : [];
  const done = !!situation && isComplete(situation, answers);
  const plan = useMemo(() => (done && situation ? buildPlan(situation, answers) : []), [done, situation, answers]);

  // Keep the fragment in step, so the address bar always holds this plan.
  useEffect(() => {
    if (!situation) return;
    try {
      window.history.replaceState(null, "", `${window.location.pathname}${encodePlan(situation, answers)}`);
    } catch {
      /* some embedded browsers refuse; the plan still works */
    }
  }, [situation, answers]);

  useEffect(() => {
    if (done && !reported.current) {
      reported.current = true;
      trackPlannerCompleted(); // records only that a plan was made; never the answers
    }
  }, [done]);

  const pick = (id: string, v: string) => {
    setCopied(false);
    setAnswers((prev) => {
      const next = { ...prev, [id]: v };
      // Drop answers to questions no longer shown (e.g. the court question once the house is in a trust).
      if (situation) {
        const keep = new Set(visibleQuestions(situation, next).map((q) => q.id));
        for (const k of Object.keys(next)) if (!keep.has(k)) delete next[k];
      }
      return next;
    });
  };

  const choose = (s: Situation) => {
    setSituation(s);
    setAnswers({});
    setCopied(false);
    reported.current = false;
  };

  const startOver = () => {
    setSituation(null);
    setAnswers({});
    setCopied(false);
    reported.current = false;
    try {
      window.history.replaceState(null, "", window.location.pathname);
    } catch {
      /* ignore */
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
      window.prompt("Copy this link to come back to your plan:", window.location.href);
    }
  };

  // When the plan appears, move focus to it so keyboard and screen-reader users land there.
  const wasDone = useRef(false);
  useEffect(() => {
    if (done && !wasDone.current) resultRef.current?.focus({ preventScroll: true });
    wasDone.current = done;
  }, [done]);

  const title = situation === "estate" ? "Your plan for the house" : "Your plan for your parent's housing";

  return (
    <>
      <SEOHead
        title="My Real Property Plan: a Free Step-by-Step Plan for Washington Families | Real Property Planning"
        description="Answer a few questions about an inherited house or a parent's housing and get a free, step-by-step plan built from Washington guides. No email needed. Print it or save the link."
        canonical="https://realpropertyplanning.com/my-plan"
      />
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <Header />
      <main className="mp">
        <div className="mp-hero mp-noprint">
          <div className="mp-wrap">
            <p className="mp-kicker">Free · about two minutes · no email needed</p>
            <h1 className="mp-h1">My Real Property Plan</h1>
            <div className="mp-rule" />
            <p className="mp-p" style={{ maxWidth: 680, marginBottom: 0 }}>
              Answer a few questions and get a step-by-step plan for your situation, with the Washington guides and tools for each
              step. Print it, or save the link and come back to it.
            </p>
          </div>
        </div>

        <div className="mp-print-only mp-wrap" style={{ paddingTop: 20 }}>
          <p style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>My Real Property Plan</p>
          <p style={{ fontSize: 14, margin: "4px 0 16px" }}>realpropertyplanning.com/my-plan · general information, not legal, tax or financial advice</p>
        </div>

        <div className="mp-block mp-noprint">
          <div className="mp-wrap">
            <div className="mp-panel">
              <p className="mp-qtext" id="mp-situation-label">What brings you here?</p>
              <div className="mp-choices mp-two" role="radiogroup" aria-labelledby="mp-situation-label">
                {SITUATIONS.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    role="radio"
                    aria-checked={situation === s.value}
                    className="mp-choice mp-big"
                    onClick={() => choose(s.value)}
                  >
                    <span className="mp-big-t">{s.label}</span>
                    <span className="mp-big-s">{s.sub}</span>
                  </button>
                ))}
              </div>
              <p className="mp-small" style={{ marginTop: 14 }}>
                Buying an adult family home? <Link className="mp-inline" to="/afh-club">AFH Club</Link> has its own buyer's steps.
              </p>
            </div>

            {situation && (
              <div className="mp-panel" style={{ marginTop: 20 }}>
                {questions.map((q, i) => (
                  <Choices key={q.id} q={q} n={i + 1} value={answers[q.id]} onPick={(v) => pick(q.id, v)} />
                ))}
              </div>
            )}
            {situation && !done && (
              <p className="mp-small" style={{ marginTop: 12 }}>
                Your plan appears below as soon as every question is answered. Your answers stay on this page and are not sent anywhere.
              </p>
            )}
          </div>
        </div>

        <div aria-live="polite">
          {done && (
            <div className="mp-block" style={{ paddingTop: 0 }}>
              <div className="mp-wrap">
                <div className="mp-result" ref={resultRef} tabIndex={-1}>
                  <p className="mp-kicker mp-noprint">Your plan</p>
                  <h2 className="mp-h2">{title}</h2>
                  <p className="mp-p">
                    {plan.length} steps, roughly in order. Each links to a guide that explains it for Washington.
                  </p>
                  <div className="mp-actions mp-noprint">
                    <button type="button" className="mp-action mp-primary" onClick={() => window.print()}>
                      Print or save as PDF
                    </button>
                    <button type="button" className="mp-action" onClick={copyLink}>
                      {copied ? "Link copied" : "Copy link to this plan"}
                    </button>
                    <button type="button" className="mp-action" onClick={startOver}>
                      Start over
                    </button>
                  </div>
                  <ol className="mp-plan">
                    {plan.map((step) => (
                      <li key={step.id}>
                        <h3 className="mp-h3">{step.title}</h3>
                        <p className="mp-p" style={{ marginBottom: 6 }}>{step.why}</p>
                        <ul className="mp-links">
                          {step.links.map((l) => (
                            <li key={l.href}>
                              <Link className="mp-link" to={l.href} data-href={l.href}>
                                {l.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                  {/* Official sources (Oct 20, 2026): src/data/myPlan.ts OFFICIAL_SOURCES. */}
                  <div className="mp-sources">
                    <h3 className="mp-h3" style={{ marginTop: 0 }}>Where to confirm this</h3>
                    <p className="mp-p" style={{ marginBottom: 10 }}>
                      These plans follow Washington law and agency rules. The official sources:
                    </p>
                    <ul className="mp-srclist">
                      {OFFICIAL_SOURCES[situation!].map((src) => (
                        <li key={src.title}>
                          {src.href ? (
                            <a className="mp-inline" href={src.href} target="_blank" rel="noopener noreferrer" data-href={src.href}>
                              {src.title}
                            </a>
                          ) : (
                            <strong>{src.title}</strong>
                          )}
                          <span className="mp-srcnote">: {src.note}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mp-small" style={{ marginBottom: 0 }}>
                      General information, not legal, tax or financial advice. Rules and figures change; confirm with these sources or a
                      professional before acting. The guides explain when it's worth calling one.
                    </p>
                  </div>
                </div>

                <div className="mp-noprint" style={{ marginTop: 28 }}>
                  <NewsletterSignup
                    list="family"
                    source="my-plan"
                    copy={
                      situation === "parent"
                        ? {
                            heading: "Free: the family home planning checklist",
                            body: "Seven steps, four printable pages, written for Washington: who can sign, how the home is owned, and when to sell. You'll also get the occasional Real Property Planning newsletter. Unsubscribe any time.",
                            cta: "Send me the checklist",
                          }
                        : {
                            heading: "Stay ahead of the next step",
                            body: "Join the free Real Property Planning newsletter for plain-English notes on Washington probate, inherited homes and selling an estate house. No ads. Unsubscribe any time.",
                            cta: "Join the newsletter",
                          }
                    }
                    doneMessage={
                      situation === "parent" ? (
                        <>
                          <p style={{ margin: "0 0 14px", fontSize: 19, fontWeight: 700 }}>Your checklist is ready.</p>
                          <p style={{ margin: "0 0 14px" }}>
                            <a href={CHECKLIST_PDF} target="_blank" rel="noopener" style={{ fontSize: 19, fontWeight: 700, color: NAVY, textDecoration: "underline" }}>
                              Download the 7-step checklist (PDF)
                            </a>
                          </p>
                          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55 }}>
                            <strong>One more step for the newsletter:</strong> a link to confirm your address has been emailed to you. Nothing else is sent until you click it.
                          </p>
                        </>
                      ) : undefined
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MyPlan;
