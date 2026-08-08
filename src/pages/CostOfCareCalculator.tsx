/**
 * Cost figures for the Cost of Care Calculator tile.
 *
 * This used to rotate through six figures three at a time, with a fade, a
 * pause button, a reduced-motion branch, and a screen-reader mirror list.
 * All of that existed only to make the animation safe. The figures are now
 * static, so none of it is needed and it has been removed:
 *
 *   - No timers, no fade, no pause control. WCAG 2.2.2 only applies to
 *     content that auto-updates; nothing here does any more.
 *   - No aria-hidden display plus hidden list. The figures are plain text
 *     now, so assistive tech reads the same thing everyone else sees.
 *
 * If a rotation is ever wanted again, restore it from git history rather
 * than rebuilding it — the accessibility handling was the hard part.
 *
 * FIGURES
 * Three values only. The three previously shown were the confirmed ones;
 * the other three carried "TODO: confirm" and have been dropped rather
 * than published unverified. Add them back only with real numbers.
 *
 * COLOURS
 * Deliberately three different hues — green, blue, red — so the figures
 * are told apart by hue and not just by position. Every colour must reach
 * 4.5:1 on white; these measure 6.45, 11.27 and 10.02 respectively.
 */

export interface CareCost {
  label: string;
  amount: string;
  /** Accent colour for the figure. Each must reach 4.5:1 on white. */
  color: string;
}

const DEFAULT_COSTS: CareCost[] = [
  { label: "Adult Family Home", amount: "$6,500", color: "#0f6b56" },
  { label: "Assisted Living", amount: "$7,600", color: "#1B3A6B" },
  { label: "Memory Care", amount: "$9,500", color: "#7f1d1d" },
];

interface Props {
  costs?: CareCost[];
}

const CostOfCareRotator = ({ costs = DEFAULT_COSTS }: Props) => (
  <div className="rpp-cost-figures">
    <div className="rpp-cost-page">
      {costs.map((c) => (
        <div key={c.label} className="rpp-cost-item">
          <span className="rpp-cost-label">{c.label}</span>
          <span className="rpp-cost-amount" style={{ color: c.color }}>
            {c.amount}
            <span className="rpp-cost-per">&nbsp;/ month</span>
          </span>
        </div>
      ))}
    </div>

    <style>{`
      .rpp-cost-figures { position: relative; }

      .rpp-cost-page {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .rpp-cost-item { display: flex; flex-direction: column; }

      .rpp-cost-label {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 17px !important;
        font-weight: 600;
        color: #1B3A6B;
        line-height: 1.3;
      }
      .rpp-cost-amount {
        font-family: Georgia, 'Times New Roman', serif;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.15;
      }
      /* "/ month" is smaller and lighter so the number stays the thing you
         read first, but it inherits the figure's colour rather than going
         grey — grey secondary text is what forced the earlier contrast
         fixes elsewhere on the site. */
      .rpp-cost-per {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 17px;
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default CostOfCareRotator;
