/**
 * Points a guide's reader to the matching cost-of-care calculator (Oct 20,
 * 2026, David's go on the Search Console review: Nursing Homes and Senior
 * Transitions had no link to the calculators that answer their readers' next
 * question). Same look as RemodelWorthCallout.
 *
 * `slug` opens one calculator (a CARE_CALCULATORS slug); without it, the hub
 * where all six care types are compared. No dollar figures here on purpose:
 * the calculator pages keep them current, so this box never goes stale.
 *
 * Inline styles and doubled-class rules: index.css restyles classes
 * containing "card", "cta", "btn" or "tile" and floors bare p sizes in main.
 */
import { Link } from "react-router-dom";
import { CARE_CALCULATORS } from "@/lib/careCalculators";

const NAVY = "#1B3A6B";

export default function CareCostCallout({ slug, style }: { slug?: string; style?: React.CSSProperties }) {
  const calc = slug ? CARE_CALCULATORS.find((c) => c.slug === slug) : undefined;
  // How each care type reads inside a sentence ("the cost of a nursing home").
  const NOUN: Record<string, string> = {
    "nursing-home": "a nursing home",
    "adult-family-home": "an adult family home",
    "memory-care": "memory care",
    "assisted-living": "assisted living",
    "in-home-care": "in-home care",
    "independent-living": "independent living",
  };
  const noun = calc ? NOUN[calc.slug] ?? calc.shortLabel.toLowerCase() : "";
  const label = calc?.shortLabel.toLowerCase();
  const heading = calc ? `What would ${noun} cost?` : "What would each kind of care cost?";
  // Says only what the calculators do: Washington median vs national median,
  // and a total for the years chosen (start date and years are adjustable).
  const body = calc
    ? `See what ${noun} costs each month in Washington, how that compares with the national median, and what several years of care could add up to. Change when care might begin and how many years to plan for.`
    : "Compare what in-home care, assisted living, adult family homes, memory care, nursing homes and independent living cost each month in Washington, and what several years of care could add up to.";
  const href = calc ? `/cost-of-care-calculator/${calc.slug}` : "/cost-of-care-calculator";
  const button = calc ? `Open the ${label} calculator →` : "Compare care costs →";

  return (
    <aside
      aria-labelledby="care-cost-callout"
      data-track-block="care_cost_callout"
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
      <p id="care-cost-callout" className="rpp-carecost-h">
        {heading}
      </p>
      <p className="rpp-carecost-p">{body}</p>
      <Link
        to={href}
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
        {button}
      </Link>
    </aside>
  );
}

const CSS = `
main .rpp-carecost-h.rpp-carecost-h { font-size: 22px !important; font-weight: 700 !important; color: ${NAVY} !important; line-height: 1.3 !important; margin: 0 0 8px !important; }
main .rpp-carecost-p.rpp-carecost-p { font-size: 18px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 0 0 16px !important; }
`;
