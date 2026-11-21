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
 *   /guides/sell-inherited-house-as-is-or-fix (Nov 21, 2026, "selling" wording)
 *   /preparing-home-for-sale-during-transition (Nov 21, 2026, "selling" wording)
 *
 * Nov 21, 2026 (David): the homepage card was removed — the calculator belongs
 * beside the pages about selling a house, not on the homepage. The "selling"
 * wording is for pages that are not only about estate houses (senior moves
 * too), and for the as-is page, whose title already asks "fix it up or sell
 * as-is?".
 *
 * Coverage: the calculator has data for King, Snohomish and Pierce counties
 * only, so the note says so. Wording says "estimate" on purpose.
 */
import { Link } from "react-router-dom";

import RppArrow from "@/components/RppArrow";
const NAVY = "#1B3A6B";

const WORDING = {
  estate: {
    heading: "Fix it up or sell as-is?",
    lead: "Before spending money on an estate house, see what updates would likely add.",
  },
  selling: {
    heading: "Thinking about updates before listing?",
    lead: "Before spending money on a house you plan to sell, see what updates would likely add.",
  },
} as const;

export default function RemodelWorthCallout({
  style,
  wording = "estate",
}: {
  style?: React.CSSProperties;
  wording?: keyof typeof WORDING;
}) {
  const w = WORDING[wording];
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
        {w.heading}
      </p>
      <p className="rpp-remodel-callout-p">
        {w.lead} Look up the house, enter what each
        job would cost (paint, flooring, kitchen, roof) and get an estimate of the value afterward, from a broker's view
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
