import { Link } from "react-router-dom";
import { PROBATE_START_HERE as T } from "@/data/probateStartHere";

/**
 * One-line "New to probate? Start here" band, placed as the FIRST child of
 * <main> on the pages in src/data/probateStartHere.ts (Sept 30, 2026).
 *
 * Why the extra CSS: index.css zeroes the top and bottom padding of whatever
 * is first inside #main-content (the hero). With this band first, the hero is
 * second, so the same reset is re-applied to the element right after the band
 * and every hero renders exactly as before. The band's own padding lives on
 * its inner div for the same reason. Class prefix "psh-" avoids the index.css
 * substring traps (card, tile, btn, cta, BackTo).
 */
const CSS = `
#main-content > .psh-band + *,
#main-content > .psh-band + * > section { margin-top: 0 !important; padding-top: 0 !important; padding-bottom: 0 !important; }
.psh-band { background: #eef3f7; border-bottom: 1px solid #d3dfe8; }
.psh-band .psh-in { max-width: 1100px; margin: 0 auto; padding: 11px 16px; font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.55; color: #1c1917; text-align: center; }
.psh-band .psh-in strong { color: #14283a; font-weight: 700; }
.psh-band .psh-short { display: none; }
@media (max-width: 700px) {
  .psh-band .psh-full { display: none; }
  .psh-band .psh-short { display: inline; }
  .psh-band .psh-in { padding: 10px 16px; }
}
.psh-band a.psh-link { color: #1B3A6B !important; font-size: 16px !important; font-weight: 600; text-decoration: underline !important; text-underline-offset: 3px; }
`;

export default function ProbateStartHere() {
  return (
    <div className="psh-band" role="navigation" aria-label="Start here for probate">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="psh-in">
        <span className="psh-full">
          <strong>{T.lead}</strong> Start with the{" "}
          <Link className="psh-link" to={T.guide.href}>{T.guide.label}</Link>, or look up terms like{" "}
          <Link className="psh-link" to={T.terms[0].href}>{T.terms[0].label}</Link> and{" "}
          <Link className="psh-link" to={T.terms[1].href}>{T.terms[1].label}</Link> in the{" "}
          <Link className="psh-link" to={T.glossary.href}>{T.glossary.label}</Link>.
        </span>
        {/* Phones: two lines instead of five above the page heading. */}
        <span className="psh-short">
          <strong>{T.lead}</strong> Start with the{" "}
          <Link className="psh-link" to={T.guide.href}>{T.guide.short}</Link> or the{" "}
          <Link className="psh-link" to={T.glossary.href}>{T.glossary.short}</Link>.
        </span>
      </div>
    </div>
  );
}
