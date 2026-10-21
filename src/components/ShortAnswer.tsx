/**
 * "The short answer" box at the top of a guide (Oct 21, 2026). Same look as
 * the Medicaid and the Family Home page. Text: src/data/shortAnswers.ts.
 * Renders nothing for a page with no entry.
 *
 * Own class names and doubled-class rules: index.css floors bare p sizes in
 * main and shrinks uppercase "eyebrow" text to 14px.
 */
import { SHORT_ANSWERS } from "@/data/shortAnswers";

const NAVY = "#1B3A6B";

export default function ShortAnswer({ path, style }: { path: string; style?: React.CSSProperties }) {
  const entry = SHORT_ANSWERS[path];
  if (!entry) return null;
  return (
    <div
      className="rpp-short-answer"
      style={{
        maxWidth: 820,
        margin: "0 auto",
        background: "#ffffff",
        border: "1px solid #d3dfe8",
        borderLeft: `5px solid ${NAVY}`,
        borderRadius: 10,
        padding: "18px 22px",
        textAlign: "left",
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        ...style,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <p className="rpp-sa-label">The short answer</p>
      <p className="rpp-sa-text">{entry.a}</p>
    </div>
  );
}

const CSS = `
.rpp-short-answer .rpp-sa-label.rpp-sa-label { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: ${NAVY} !important; margin: 0 0 6px !important; }
.rpp-short-answer .rpp-sa-text.rpp-sa-text { font-size: 19px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 0 !important; }
`;
