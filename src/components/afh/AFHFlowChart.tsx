import { Link } from "react-router-dom";
import { AFH_FLOW_BY_SLUG, AFH_RULES_PATH } from "@/data/afhFlow";

/**
 * The AFH Club flow chart (Oct 1, 2026). Same building blocks and classes as
 * the probate chart (FLOW_CHART_CSS in src/components/probate/ProbateFlowChart.tsx,
 * recoloured by flowCss()), plus a five-column layout. Every box is a plain
 * link; on phones the choices stack with "or" between them.
 */
export const AFH_FLOW_CHART_CSS = `
.pfc .pfc-five { display: grid; grid-template-columns: minmax(0, 1fr); position: relative; }
.pfc .pfc-five > .pfc-col + .pfc-col { margin-top: 8px; }
.pfc .pfc-sub { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; }
.pfc p.pfc-then { text-align: center !important; font-family: 'DM Sans', sans-serif !important; font-size: 14px !important; line-height: 1.4 !important; color: #3f4a54 !important; margin: 8px 0 0 !important; font-weight: 500 !important; }
.pfc p.pfc-then a { color: #0a5648 !important; font-size: 14px !important; font-weight: 700 !important; text-decoration: underline !important; text-underline-offset: 3px; white-space: nowrap; }
@media (min-width: 900px) {
  .pfc .pfc-five { grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; padding-top: 26px; }
  .pfc .pfc-five::before { content: ""; position: absolute; top: 0; left: 10%; right: 10%; height: 3px; background: #9fb4c4; }
  .pfc .pfc-five > .pfc-col + .pfc-col { margin-top: 0; }
  .pfc .pfc-five > .pfc-col + .pfc-col::before { content: none; }
  .pfc .pfc-five > .pfc-col > .pfc-stub { display: block; }
  .pfc .pfc-sub { grid-template-columns: minmax(0, 1fr); }
  .pfc .pfc-five a.pfc-go b { font-size: 17px !important; }
}
`;

const box = (slug: string, sub: string, current?: string, label?: string) => {
  const p = AFH_FLOW_BY_SLUG[slug];
  const here = current === slug && !label;
  return (
    <Link to={p.path} className={`pfc-go${here ? " pfc-here" : ""}`} aria-current={here ? "page" : undefined}>
      <b>{label ?? p.box}</b>
      <span>{sub}</span>
      <em>{here ? "You are here" : "Open →"}</em>
    </Link>
  );
};

export default function AFHFlowChart({ current }: { current?: string }) {
  const running = AFH_FLOW_BY_SLUG.running.path;
  return (
    <div className="pfc" role="group" aria-label="Adult family home flow chart: find your path">
      <div className="pfc-node pfc-start">
        <b>Adult family homes in Washington</b>
        <span>For owners, buyers, sellers and investors</span>
      </div>
      <div className="pfc-line" aria-hidden="true" />
      <div className="pfc-node pfc-q">
        What do you want to do?
        <small>Pick the one closest to you</small>
      </div>
      <div className="pfc-line" aria-hidden="true" />

      <div className="pfc-five">
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("opening", "Become a licensed provider", current)}
          <p className="pfc-then">Once licensed → <Link to={running}>Running a home</Link></p>
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          <div className="pfc-note">
            Buy one
            <small>What are you buying?</small>
          </div>
          <div className="pfc-line" aria-hidden="true" />
          <div className="pfc-sub">
            {box("buying", "House and business", current)}
            {box("opening", "Start the license from scratch", undefined, "A house to convert")}
          </div>
          <p className="pfc-then">Once licensed → <Link to={running}>Running a home</Link></p>
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("selling", "The house, the business or both", current)}
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("running", "Compliance, inspections and pay", current)}
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("evaluating", "Calculators and market data", current)}
        </div>
      </div>

      <div className="pfc-always">
        <div className="pfc-always-label">Any time</div>
        <Link to={AFH_RULES_PATH}>Rules &amp; key figures</Link>
        <Link to="/afh-club/washington-afh-rule-changes">Rule changes</Link>
        <Link to="/afh-club/glossary">Glossary</Link>
      </div>
    </div>
  );
}
