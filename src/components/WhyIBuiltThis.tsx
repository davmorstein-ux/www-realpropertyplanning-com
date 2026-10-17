import type { CSSProperties } from "react";
import { FOUNDER_SIGNATURE, WHY_HEADING } from "@/data/calculatorNotes";
import { FOUNDER_PHOTO, FOUNDER_PHOTO_ALT } from "@/data/featuredProfessionalAssets";

/**
 * "Why I built this" — the founder's short note at the top of each calculator
 * (Oct 16, 2026). Text lives in src/data/calculatorNotes.ts; this only draws it.
 *
 * index.css traps this avoids: every <p> is forced to line-height 1.4 and a
 * 0.6rem bottom margin with !important, so the scoped rules below use a class +
 * element selector with !important to win; no <span> (forced to 16px inside
 * cards), no letter-spacing or uppercase (forced to 14px "eyebrow" text), no
 * "btn"/"cta" in class names (forced maroon), and no <h2> (forced to 36px).
 */
const CSS = `
.rpp-why{max-width:760px;margin:0 auto;background:#fff;border:1px solid #e5e1da;border-radius:12px;padding:22px 24px;display:flex;gap:18px;align-items:flex-start;box-sizing:border-box;font-family:'DM Sans','DM Sans Fallback',system-ui,sans-serif;text-align:left}
.rpp-why img.rpp-why-photo{width:72px;height:72px;border-radius:50%;object-fit:cover;object-position:center top;flex:0 0 72px;border:2px solid #fff;box-shadow:0 0 0 1px #d9d4cc}
.rpp-why .rpp-why-text{min-width:0;flex:1 1 auto}
.rpp-why p.rpp-why-heading{font-size:20px !important;font-weight:700;color:#1c1917;margin:0 0 6px !important;line-height:1.3 !important}
.rpp-why p.rpp-why-body{font-size:18px !important;color:#1c1917;margin:0 0 10px !important;line-height:1.6 !important}
.rpp-why p.rpp-why-sign{font-size:17px !important;font-weight:600;color:#3f3a35;margin:0 !important;line-height:1.4 !important}
@media (max-width:520px){
  .rpp-why{padding:18px 18px;display:block}
  .rpp-why img.rpp-why-photo{width:56px;height:56px;float:left;margin:0 14px 4px 0}
  .rpp-why p.rpp-why-heading{min-height:56px;display:flex;align-items:center;margin:0 0 12px !important}
  .rpp-why p.rpp-why-body{clear:both}
  .rpp-why .rpp-why-text::after{content:"";display:block;clear:both}
}
`;

interface Props {
  /** The note itself, from calculatorNotes.ts. */
  note: string;
  /** The page's accent colour, drawn as the left edge of the card. */
  accent?: string;
  /** Outer spacing set by the page (each page sits the note in a different place). */
  style?: CSSProperties;
}

const WhyIBuiltThis = ({ note, accent = "#1B3A6B", style }: Props) => (
  <section className="rpp-why" aria-label={WHY_HEADING} style={{ borderLeft: `5px solid ${accent}`, ...style }}>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <img className="rpp-why-photo" src={FOUNDER_PHOTO} alt={FOUNDER_PHOTO_ALT} width={72} height={72} loading="lazy" />
    <div className="rpp-why-text">
      <p className="rpp-why-heading">{WHY_HEADING}</p>
      <p className="rpp-why-body">{note}</p>
      <p className="rpp-why-sign">— {FOUNDER_SIGNATURE}</p>
    </div>
  </section>
);

export default WhyIBuiltThis;
