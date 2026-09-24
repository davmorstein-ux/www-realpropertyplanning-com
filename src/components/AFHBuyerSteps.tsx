import { Link } from "react-router-dom";

/**
 * The AFH buyer's decision sequence, made explicit (Sept 2026 audit): the five
 * AFH tools already map onto it one-for-one, so this turns five independent
 * calculators into one workflow. `current` highlights the step the visitor is
 * on; omit it for the overview on the calculators and buying pages.
 */
export const AFH_BUYER_STEPS = [
  { n: 1, label: "Find a property", href: "/afh-club/listings", hint: "Current listings and what has sold" },
  { n: 2, label: "Score the property", href: "/afh-club/afh-property-score", hint: "Layout, licensing fit, condition" },
  { n: 3, label: "Estimate revenue", href: "/afh-club/afh-roi-calculator", hint: "Census, rates, and operating margin" },
  { n: 4, label: "Estimate value", href: "/afh-club/afh-valuation-estimator", hint: "The real estate and the business, separately" },
  { n: 5, label: "Test the financing", href: "/afh-club/afh-financing-calculator", hint: "Occupancy needed to carry the loan" },
  { n: 6, label: "Get connected", href: "/contact?reason=afh-buy-sell", hint: "Talk it through before you make an offer" },
] as const;

const AFHBuyerSteps = ({ current, compact = false }: { current?: number; compact?: boolean }) => (
  <nav aria-label="Buying an adult family home, step by step" className={`rpp-afhsteps${compact ? " rpp-afhsteps-compact" : ""}`}>
    {!compact && <p className="rpp-afhsteps-title">Thinking about buying an adult family home? Take it in order.</p>}
    <ol>
      {AFH_BUYER_STEPS.map((s) => {
        const isCurrent = s.n === current;
        return (
          <li key={s.n} className={isCurrent ? "is-current" : undefined} aria-current={isCurrent ? "step" : undefined}>
            <Link to={s.href} className="bg-transparent">
              <span className="rpp-afhsteps-n">{s.n}</span>
              <span className="rpp-afhsteps-label">{s.label}</span>
              {!compact && <span className="rpp-afhsteps-hint">{s.hint}</span>}
            </Link>
          </li>
        );
      })}
    </ol>
    <style>{`
      .rpp-afhsteps { font-family: 'DM Sans', system-ui, sans-serif; margin: 0 auto; max-width: 1100px; }
      .rpp-afhsteps .rpp-afhsteps-title { font-size: clamp(18px, 1.6vw, 22px); font-weight: 700; color: #272421; text-align: center; margin: 0 0 1rem !important; }
      .rpp-afhsteps ol { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      @media (min-width: 700px) { .rpp-afhsteps ol { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      @media (min-width: 1000px) { .rpp-afhsteps ol { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
      .rpp-afhsteps li { margin: 0; }
      .rpp-afhsteps a { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; padding: 14px 10px; border: 1.5px solid #ddd6cc; border-radius: 12px; background: #fff; color: #272421 !important; text-decoration: none !important; height: 100%; }
      .rpp-afhsteps .rpp-afhsteps-n { width: 28px; height: 28px; border-radius: 50%; background: #7f2028; color: #fff; font-weight: 700; font-size: 14px; display: inline-flex; align-items: center; justify-content: center; }
      .rpp-afhsteps .rpp-afhsteps-label { font-weight: 700; font-size: 15px; line-height: 1.2; }
      .rpp-afhsteps .rpp-afhsteps-hint { font-size: 12.5px; line-height: 1.35; color: #5a534b; }
      .rpp-afhsteps li.is-current a { border-color: #7f2028; background: #fdf6f4; }
      @media (hover: hover) { .rpp-afhsteps a:hover { border-color: #7f2028; } }
      .rpp-afhsteps-compact ol { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
      @media (min-width: 700px) { .rpp-afhsteps-compact ol { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
      .rpp-afhsteps-compact a { flex-direction: row; justify-content: center; gap: 8px; padding: 8px 10px; border-radius: 999px; }
      .rpp-afhsteps-compact .rpp-afhsteps-n { width: 22px; height: 22px; font-size: 12px; }
      .rpp-afhsteps-compact .rpp-afhsteps-label { font-size: 13px; font-weight: 600; }
    `}</style>
  </nav>
);

export default AFHBuyerSteps;
