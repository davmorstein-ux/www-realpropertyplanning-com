import { Link } from "react-router-dom";
import { FLOW_BY_SLUG, SELLING_PATH, DEADLINES_PATH } from "@/data/probateFlow";

/**
 * The probate flow chart (Oct 1, 2026). Plain HTML and CSS, so it reads top to
 * bottom on a phone and every box is an ordinary link for screen readers and
 * crawlers. Desktop: three branches side by side with connector lines; phones:
 * one column, the connectors become short downward lines.
 *
 * `current` highlights a box (used by the small "you are here" chart on each
 * branch page). Class prefix "pfc-" (index.css substring traps: avoid card,
 * tile, btn, cta).
 */
export const FLOW_ACCENT = "#25597e";
const A = FLOW_ACCENT;
const INK = "#14283a";

export const FLOW_CHART_CSS = `
.pfc { font-family: 'DM Sans', system-ui, sans-serif; color: ${INK}; }
.pfc .pfc-node { border-radius: 12px; padding: 14px 18px; text-align: center; }
.pfc .pfc-start { background: ${INK}; color: #ffffff; max-width: 420px; margin: 0 auto; }
.pfc .pfc-start b { display: block; font-size: 19px; font-weight: 700; }
.pfc .pfc-start span { display: block; font-size: 15px; opacity: 0.85; margin-top: 2px; }
.pfc .pfc-q { background: #fff7e0; border: 2px solid #d9a521; max-width: 420px; margin: 0 auto; font-size: 19px; font-weight: 700; }
.pfc .pfc-q small { display: block; font-size: 14px; font-weight: 500; color: #5b4a1c; margin-top: 2px; }
.pfc .pfc-line { width: 3px; height: 26px; background: #9fb4c4; margin: 0 auto; position: relative; }
.pfc .pfc-line::after { content: ""; position: absolute; left: 50%; bottom: -2px; transform: translateX(-50%); border: 7px solid transparent; border-top-color: #9fb4c4; border-bottom: 0; }
.pfc .pfc-branches { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; position: relative; }
.pfc .pfc-col { display: flex; flex-direction: column; align-items: stretch; }
.pfc .pfc-col + .pfc-col { margin-top: 8px; }
.pfc .pfc-col + .pfc-col::before { content: "or"; display: block; text-align: center; font-size: 15px; font-weight: 700; color: #3d4a55; margin: 0 0 8px; }
.pfc a.pfc-go { display: block; text-decoration: none !important; background: #ffffff; border: 2px solid ${A}; border-radius: 12px; padding: 14px 16px; text-align: center; color: ${INK} !important; transition: background .15s, color .15s; }
.pfc a.pfc-go b { display: block; font-size: 18px !important; font-weight: 700 !important; line-height: 1.3; color: inherit !important; }
.pfc a.pfc-go span { display: block; font-size: 15px !important; font-weight: 400 !important; line-height: 1.4; margin-top: 4px; color: #3f4a54 !important; }
.pfc a.pfc-go em { display: inline-block; font-style: normal; font-size: 15px !important; font-weight: 700 !important; margin-top: 8px; color: ${A} !important; }
@media (hover: hover) { .pfc a.pfc-go:hover { background: ${A}; color: #ffffff !important; } .pfc a.pfc-go:hover span, .pfc a.pfc-go:hover em { color: #ffffff !important; } }
.pfc a.pfc-go:focus-visible { outline: 3px solid #d9a521; outline-offset: 2px; }
.pfc a.pfc-go.pfc-here { background: ${A}; color: #ffffff !important; }
.pfc a.pfc-go.pfc-here span, .pfc a.pfc-go.pfc-here em { color: #ffffff !important; }
.pfc .pfc-note { background: #eef3f7; border: 1px dashed #9fb4c4; border-radius: 12px; padding: 12px 14px; text-align: center; font-size: 16px; font-weight: 700; }
.pfc .pfc-note small { display: block; font-size: 14px; font-weight: 500; color: #3f4a54; margin-top: 2px; }
.pfc .pfc-roles { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px; }
.pfc .pfc-merge { margin-top: 26px; }
.pfc .pfc-sell { max-width: 520px; margin: 0 auto; border-width: 3px; }
.pfc .pfc-always { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 22px; }
.pfc .pfc-always a { display: inline-flex; align-items: center; min-height: 44px; padding: 8px 18px; border-radius: 999px; border: 1px solid #b7cbd9; background: #ffffff; color: ${A} !important; font-size: 16px !important; font-weight: 700 !important; text-decoration: none !important; }
@media (hover: hover) { .pfc .pfc-always a:hover { background: ${A}; color: #ffffff !important; } }
.pfc .pfc-always-label { width: 100%; text-align: center; font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #3d4a55; }
@media (min-width: 900px) {
  .pfc .pfc-branches { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; padding-top: 26px; }
  .pfc .pfc-branches::before { content: ""; position: absolute; top: 0; left: calc(100% / 6); right: calc(100% / 6); height: 3px; background: #9fb4c4; }
  .pfc .pfc-col + .pfc-col { margin-top: 0; }
  .pfc .pfc-col + .pfc-col::before { content: none; }
  .pfc .pfc-col > .pfc-stub { display: block; }
  .pfc .pfc-col > .pfc-down { display: block; flex: 1 1 auto; min-height: 26px; width: 3px; background: #9fb4c4; margin: 0 auto; }
  .pfc .pfc-merge { margin-top: 0; }
  .pfc .pfc-merge::before { content: ""; display: block; height: 3px; background: #9fb4c4; margin: 0 calc(100% / 6) 0; }
}
.pfc .pfc-down { display: none; }
.pfc .pfc-stub { display: none; width: 3px; height: 26px; background: #9fb4c4; margin: -26px auto 0; }
`;

const box = (slug: string, sub: string, current?: string) => {
  const p = FLOW_BY_SLUG[slug];
  const here = current === slug;
  return (
    <Link to={p.path} className={`pfc-go${here ? " pfc-here" : ""}`} aria-current={here ? "page" : undefined}>
      <b>{p.box}</b>
      <span>{sub}</span>
      <em>{here ? "You are here" : "Open →"}</em>
    </Link>
  );
};

export default function ProbateFlowChart({ current }: { current?: string }) {
  return (
    <div className="pfc" role="group" aria-label="Probate flow chart: find your path">
      <div className="pfc-node pfc-start">
        <b>Someone died and there is a house</b>
        <span>Washington State</span>
      </div>
      <div className="pfc-line" aria-hidden="true" />
      <div className="pfc-node pfc-q">
        How was the house owned?
        <small>Check the deed if you are not sure</small>
      </div>
      <div className="pfc-line" aria-hidden="true" />

      <div className="pfc-branches">
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("house-in-a-trust", "No probate. The successor trustee handles it.", current)}
          <div className="pfc-down" aria-hidden="true" />
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          {box("no-probate-needed", "No probate. The house passes on its own.", current)}
          <div className="pfc-down" aria-hidden="true" />
        </div>
        <div className="pfc-col">
          <div className="pfc-stub" aria-hidden="true" />
          <div className="pfc-note">
            In their name alone
            <small>or not sure</small>
          </div>
          <div className="pfc-line" aria-hidden="true" />
          <div className="pfc-note">
            Probate is usually needed
            <small>What is your role?</small>
          </div>
          <div className="pfc-line" aria-hidden="true" />
          <div className="pfc-roles">
            {box("executor", "or personal representative", current)}
            {box("heir", "or beneficiary", current)}
          </div>
          <div className="pfc-down" aria-hidden="true" />
        </div>
      </div>

      <div className="pfc-merge" aria-hidden="true" />
      <div className="pfc-line" aria-hidden="true" />
      <div className="pfc-sell-wrap" style={{ maxWidth: 520, margin: "0 auto" }}>
        <Link to={SELLING_PATH} className={`pfc-go pfc-sell${current === "selling-the-house" ? " pfc-here" : ""}`} aria-current={current === "selling-the-house" ? "page" : undefined}>
          <b>Selling the house</b>
          <span>Every path ends here if the house will be sold</span>
          <em>{current === "selling-the-house" ? "You are here" : "Open →"}</em>
        </Link>
      </div>

      <div className="pfc-always">
        <div className="pfc-always-label">Any time</div>
        <Link to={DEADLINES_PATH}>Deadlines &amp; key rules</Link>
        <Link to="/probate-glossary">Glossary of terms</Link>
      </div>
    </div>
  );
}
