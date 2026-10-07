/**
 * Shared styles for the probate section (Oct 1, 2026): the flow chart start
 * page, the five branch pages, and Deadlines & Key Rules. Moved here from
 * src/pages/ProbatePillarGuide.tsx so every page looks the same.
 *
 * index.css traps handled here: `main h2`, `main p` and `main a` are forced, so
 * every rule is scoped under .prp with !important; <nav> is styled as the site
 * header, so jump bars are divs with role="navigation".
 */
export const A = "#25597e"; // the Estate & Probate menu colour
export const PROBATE_CSS = `
.prp { background: #ffffff; }
.prp .prp-wrap { max-width: 960px; margin: 0 auto; }
.prp .prp-narrow { max-width: 760px; }
.prp .prp-hero { display: grid; gap: 28px; align-items: start; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 900px) { .prp .prp-hero { grid-template-columns: minmax(0, 1fr) 250px; } }
.prp .prp-cover { width: 100%; max-width: 300px; height: auto; aspect-ratio: 3 / 4; border-radius: 8px; box-shadow: 0 12px 30px rgba(18,45,66,0.25); justify-self: center; }
.prp p { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 18px !important; line-height: 1.7 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.prp .prp-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 12px !important; }
.prp h1.prp-h1 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(30px, 4.6vw, 46px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 18px !important; text-wrap: balance; }
.prp h2.prp-h2 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.2vw, 30px) !important; line-height: 1.2 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 14px !important; text-wrap: balance; scroll-margin-top: 180px; }
.prp h3.prp-h3 { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: 21px !important; line-height: 1.3 !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 6px !important; }
.prp .prp-answer { background: #ffffff; border: 1px solid #d3dfe8; border-left: 5px solid ${A}; border-radius: 10px; padding: 18px 22px; margin: 4px 0 0; }
.prp .prp-answer p { font-size: 19px !important; margin: 0 !important; }
.prp .prp-answer .prp-answer-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${A} !important; margin: 0 0 6px !important; }
.prp .prp-figs { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 22px 0 8px; }
@media (min-width: 820px) { .prp .prp-figs { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.prp .prp-fig { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 10px; padding: 14px 16px; }
.prp .prp-fig .prp-fig-n { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: clamp(26px, 3.4vw, 34px) !important; font-weight: 700 !important; color: #14283a; line-height: 1.1; font-variant-numeric: tabular-nums; }
.prp .prp-fig .prp-fig-l { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 15px !important; color: #2b2825; line-height: 1.35; margin-top: 6px; }
.prp ul.prp-list { list-style: disc !important; margin: 0 0 0 22px; padding: 0; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 18px; line-height: 1.7; color: #1c1917; }
.prp ul.prp-list li { display: list-item !important; list-style: disc !important; margin-bottom: 8px; }
.prp ul.prp-list li::marker { color: ${A}; }
.prp .prp-tablewrap { overflow-x: auto; border: 1px solid #e2ddd5; border-radius: 10px; background: #ffffff; }
.prp table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px; color: #1c1917; }
.prp th { text-align: left; font-weight: 700; background: #eef3f7; padding: 10px 14px; border-bottom: 1px solid #d3dfe8; }
.prp td { padding: 11px 14px; border-bottom: 1px solid #eee9e1; vertical-align: top; line-height: 1.5; overflow-wrap: break-word; }
.prp tr:last-child td { border-bottom: 0; }
.prp td.prp-topic { font-weight: 700; width: 24%; min-width: 130px; }
.prp td.prp-src { white-space: nowrap; font-size: 15px; }
@media (max-width: 640px) {
  .prp table, .prp tbody, .prp tr, .prp td { display: block; width: 100% !important; }
  .prp thead { display: none; }
  .prp tr { padding: 12px 14px; border-bottom: 1px solid #eee9e1; }
  .prp tr:last-child { border-bottom: 0; }
  .prp td { padding: 0; border: 0; }
  .prp td.prp-topic { min-width: 0; margin-bottom: 4px; }
  .prp td.prp-src { margin-top: 6px; white-space: normal; }
}
.prp a.prp-link, .prp td a, .prp .prp-small a { color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.prp .prp-jump { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 0; }
.prp .prp-jump a { display: inline-flex; align-items: center; min-height: 44px; padding: 8px 16px; border-radius: 999px; background: #ffffff; border: 1px solid #b7cbd9; color: ${A} !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px !important; font-weight: 600; text-decoration: none !important; }
@media (hover: hover) { .prp .prp-jump a:hover { background: ${A}; color: #ffffff !important; } }
.prp .prp-jump a:focus-visible { background: ${A}; color: #ffffff !important; }
.prp .prp-paths { display: grid; gap: 18px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 820px) { .prp .prp-paths { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.prp .prp-path { background: #ffffff; border: 1px solid #ddd6cc; border-top: 4px solid ${A}; border-radius: 10px; padding: 20px 22px; scroll-margin-top: 180px; }
.prp .prp-path .prp-who { font-size: 16px !important; color: #4a443e !important; margin: 0 0 12px !important; }
.prp ol.prp-steps { margin: 0; padding: 0 0 0 22px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; }
.prp ol.prp-steps li { margin-bottom: 12px; font-size: 16px !important; line-height: 1.45 !important; color: #3f3a35; }
.prp ol.prp-steps li::marker { color: ${A}; font-weight: 700; }
.prp ol.prp-steps a { display: inline; color: #1B3A6B !important; font-weight: 700; font-size: 17px !important; text-decoration: underline !important; text-underline-offset: 3px; }
.prp ol.prp-steps span { display: block; font-size: 16px !important; line-height: 1.45; margin-top: 2px; }
.prp .prp-qa { display: grid; gap: 34px; }
.prp .prp-more { font-size: 16px !important; margin-top: 4px !important; }
.prp dl.prp-terms { display: grid; gap: 14px 28px; grid-template-columns: minmax(0, 1fr); margin: 0 0 16px; }
@media (min-width: 760px) { .prp dl.prp-terms { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.prp dl.prp-terms dt { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-weight: 700; font-size: 18px; color: #14283a; }
.prp dl.prp-terms dt span { font-weight: 500; color: #4a443e; font-size: 15px; }
.prp dl.prp-terms dd { margin: 4px 0 0; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px; line-height: 1.55; color: #2b2825; }
.prp .prp-small { font-size: 15px !important; color: #3f3a35 !important; }
.prp .prp-note { background: #f7f4ef; border: 1px solid #e2ddd5; border-radius: 10px; padding: 16px 20px; }
`;

export const PROBATE_CSS_EXTRA = `
.prp .prp-trail { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 0 0 14px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 15px; color: #3f4a54; }
.prp .prp-trail a { color: #1B3A6B !important; font-size: 15px !important; font-weight: 600; text-decoration: underline !important; text-underline-offset: 3px; }
.prp .prp-trail .prp-sep { color: #8a97a3; }
.prp ol.prp-big { list-style: none !important; margin: 0; padding: 0; counter-reset: prpstep; display: grid; gap: 12px; }
.prp ol.prp-big li { counter-increment: prpstep; display: grid !important; grid-template-columns: 44px minmax(0, 1fr); gap: 14px; align-items: start; background: #ffffff; border: 1px solid #d3dfe8; border-radius: 12px; padding: 14px 16px; }
.prp ol.prp-big li::before { content: counter(prpstep); display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: ${A}; color: #ffffff; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-weight: 700; font-size: 19px; }
.prp ol.prp-big a { display: inline; color: #1B3A6B !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-weight: 700 !important; font-size: 19px !important; line-height: 1.35; text-decoration: underline !important; text-underline-offset: 3px; }
.prp ol.prp-big span { display: block; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px !important; line-height: 1.45; color: #3f3a35; margin-top: 4px; }
.prp .prp-watch { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 820px) { .prp .prp-watch { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.prp .prp-watch > div { background: #fffaf0; border: 1px solid #ecd9a8; border-top: 4px solid #d9a521; border-radius: 10px; padding: 14px 16px; }
.prp .prp-watch p { font-size: 16px !important; line-height: 1.5 !important; margin: 0 0 8px !important; }
.prp .prp-watch p.prp-watch-lead { font-weight: 700 !important; color: #14283a !important; font-size: 17px !important; margin-bottom: 4px !important; }
.prp .prp-watch a { color: #1B3A6B !important; font-size: 15px !important; font-weight: 600; text-decoration: underline !important; text-underline-offset: 3px; }
.prp .prp-nextrow { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; }
.prp a.prp-next { display: inline-flex; align-items: center; min-height: 52px; padding: 10px 22px; border-radius: 10px; background: ${A}; color: #ffffff !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 18px !important; font-weight: 700 !important; text-decoration: none !important; }
@media (hover: hover) { .prp a.prp-next:hover { background: #1b4562; } }
.prp a.prp-back { display: inline-flex; align-items: center; min-height: 52px; padding: 10px 18px; border-radius: 10px; border: 2px solid ${A}; background: #ffffff; color: ${A} !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 17px !important; font-weight: 700 !important; text-decoration: none !important; }
.prp details.prp-fold { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 12px; }
.prp details.prp-fold + details.prp-fold { margin-top: 10px; }
.prp details.prp-fold > summary { cursor: pointer; list-style: none; padding: 16px 48px 16px 18px; position: relative; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 19px; font-weight: 700; color: #14283a; }
.prp details.prp-fold > summary::-webkit-details-marker { display: none; }
.prp details.prp-fold > summary::after { content: "+"; position: absolute; right: 18px; top: 50%; transform: translateY(-50%); font-size: 26px; font-weight: 400; color: ${A}; }
.prp details.prp-fold[open] > summary::after { content: "–"; }
.prp details.prp-fold > div { padding: 0 18px 16px; }
`;
