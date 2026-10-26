/**
 * "Fix it up or sell as-is?" — points estate and inherited-house readers to
 * What's My Remodel Worth? (owner's decision, Oct 18, 2026).
 *
 * The question heirs face most with an inherited house is whether updates
 * before a sale will pay for themselves; the calculator answers it with a
 * broker's and an appraiser's view from county sales. Shown on:
 *   /estate-probate-inherited-property/preparing-the-property
 *   /estate-probate-inherited-property/what-to-do-with-the-property
 *   /selling-an-inherited-home
 *   /guides/inherited-house-washington
 *   /washington-probate-guide/selling-the-house
 *   /guides/repairs-before-selling-probate-home-washington (Oct 20, 2026)
 * The homepage keeps its own link for general homeowners.
 *
 * Coverage: the calculator has data for King, Snohomish and Pierce counties
 * only, so the note says so. Wording says "estimate" on purpose.
 */
import { Link } from "react-router-dom";

import RppArrow from "@/components/RppArrow";
const NAVY = "#1B3A6B";

export default function RemodelWorthCallout({ style }: { style?: React.CSSProperties }) {
  return (
    <aside
      aria-labelledby="remodel-worth-callout"
      data-track-block="remodel_callout"
      style={{
        maxWidth: 760,
        margin: "32px auto",
        padding: "24px 22px",
        background: "#ffffff",
        border: "1px solid #ddd6cc",
        borderLeft: `4px solid ${NAVY}`,
        borderRadius: 8,
        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
        ...style,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <p id="remodel-worth-callout" className="rpp-remodel-callout-h">
        Fix it up or sell as-is?
      </p>
      <p className="rpp-remodel-callout-p">
        Before spending money on an estate house, see what updates would likely add. Look up the house, enter what each
        job would cost — paint, flooring, kitchen, roof — and get an estimate of the value afterward, from a broker's view
        and from what a buyer's appraiser is likely to support. For houses in King, Snohomish and Pierce counties.
      </p>
      <Link
        to="/whats-my-remodel-worth"
        className="rpp-link-large rpp-filled"
        style={{
          ["--rpp-fill" as string]: NAVY,
          display: "inline-flex",
          alignItems: "center",
          minHeight: 52,
          padding: "12px 22px",
          borderRadius: 6,
        } as React.CSSProperties}
      >
        See what updates would add <RppArrow />
      </Link>
      <p className="rpp-remodel-callout-fine">
        An estimate from public sales records, not an appraisal.
      </p>
    </aside>
  );
}

/* Doubled class selectors with !important: index.css sets size, line height
   and margin on every bare p inside main with !important. */
const CSS = `
.rpp-remodel-callout-h.rpp-remodel-callout-h { font-size: 24px !important; font-weight: 600 !important; line-height: 1.25 !important; color: #272421 !important; margin: 0 0 10px !important; }
.rpp-remodel-callout-p.rpp-remodel-callout-p { font-size: 18px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 0 0 18px !important; }
.rpp-remodel-callout-fine.rpp-remodel-callout-fine { font-size: 16px !important; line-height: 1.5 !important; color: #1c1917 !important; margin: 14px 0 0 !important; }
`;
