import { Link } from "react-router-dom";
import { CARE_CALCULATORS, careTypeFor } from "@/lib/careCalculators";
import { formatCurrency } from "@/lib/careTypes";

/**
 * The list of other calculators — as a grid on the hub, and as a narrow rail
 * beside the calculator on each option's page. One component for both so the
 * two can never drift apart.
 *
 * Pass `currentSlug` on a calculator page and that option is left out — there
 * is no reason to offer someone the page they are already reading. Omit it on
 * the hub and all six render.
 *
 * Text and figures rather than photographs: six images beside every calculator
 * is a lot of weight for what is navigation, and the monthly figure is the
 * thing a reader is actually comparing. It also scales with the browser text
 * size, which photographs of text would not.
 *
 * index.css carries global !important rules on link colour and underlines that
 * defeat Tailwind classes, so the styling is done with doubled class selectors
 * and the bg-transparent token satisfies main a:not([class*="bg-"]).
 */
interface Props {
  /** Slug of the page being viewed, so it can be omitted from the list. */
  currentSlug?: string;
  /** Heading above the list. */
  heading?: string;
  /**
   * "grid" spreads the cards across the width — used on the hub, where they
   * are the main content. "rail" stacks them in a single narrow column for
   * the sidebar beside a calculator, where a full-width block below the tool
   * pushed the page down for no gain.
   */
  layout?: "grid" | "rail";
}

const CareCalculatorSwitcher = ({ currentSlug, heading, layout = "grid" }: Props) => {
  const options = CARE_CALCULATORS.filter((o) => o.slug !== currentSlug);

  return (
    <div className="rpp-calcswitch">
      <style>{`
        .rpp-calcswitch-grid.rpp-calcswitch-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .rpp-calcswitch-grid.rpp-calcswitch-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .rpp-calcswitch-grid.rpp-calcswitch-grid { grid-template-columns: 1fr 1fr 1fr; }
        }

        /* Rail stays one column at every width — it lives in a 300px sidebar,
           so the grid breakpoints above must not apply to it. */
        .rpp-calcswitch-grid.rpp-calcswitch-grid.is-rail { grid-template-columns: 1fr; }
        @media (min-width: 640px) {
          .rpp-calcswitch-grid.rpp-calcswitch-grid.is-rail { grid-template-columns: 1fr; }
        }
        @media (min-width: 1024px) {
          .rpp-calcswitch-grid.rpp-calcswitch-grid.is-rail { grid-template-columns: 1fr; }
        }
        .rpp-calcswitch-grid.rpp-calcswitch-grid.is-rail { gap: 10px; }
        .rpp-calcswitch-grid.is-rail .rpp-calcswitch-card.rpp-calcswitch-card {
          padding: 0.85rem 1rem;
        }
        .rpp-calcswitch-grid.is-rail .rpp-calcswitch-blurb.rpp-calcswitch-blurb {
          display: none;
        }

        .rpp-calcswitch-card.rpp-calcswitch-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: #ffffff;
          border: 2px solid #d6cdbf;
          /* The option's own colour marks its left edge, so the six are told
             apart before the label is read. */
          border-left: 6px solid var(--cc-color, #1B3A6B);
          border-radius: 12px;
          padding: 1.1rem 1.2rem;
          text-decoration: none !important;
          transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
        }
        .rpp-calcswitch-card.rpp-calcswitch-card:hover {
          border-color: var(--cc-color, #1B3A6B);
          box-shadow: 0 4px 14px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }
        .rpp-calcswitch-card.rpp-calcswitch-card:focus-visible {
          outline: 3px solid #1B3A6B;
          outline-offset: 3px;
        }

        .rpp-calcswitch-name.rpp-calcswitch-name {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 19px !important;
          font-weight: 700;
          color: var(--cc-color, #1B3A6B) !important;
          line-height: 1.25;
        }
        .rpp-calcswitch-price.rpp-calcswitch-price {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 22px !important;
          font-weight: 700;
          color: #272421 !important;
          line-height: 1.2;
        }
        .rpp-calcswitch-per.rpp-calcswitch-per {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px !important;
          font-weight: 600;
        }
        .rpp-calcswitch-blurb.rpp-calcswitch-blurb {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px !important;
          font-weight: 400;
          color: #4a4540 !important;
          line-height: 1.4;
          margin-top: 2px;
        }
      `}</style>

      {heading ? (
        <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-6">{heading}</h2>
      ) : null}

      <div className={`rpp-calcswitch-grid rpp-calcswitch-grid${layout === "rail" ? " is-rail" : ""}`}>
        {options.map((o) => {
          const care = careTypeFor(o);
          return (
            <Link
              key={o.slug}
              to={`/cost-of-care-calculator/${o.slug}`}
              className="rpp-calcswitch-card rpp-calcswitch-card bg-transparent"
              style={{ ["--cc-color" as string]: o.color }}
            >
              <span className="rpp-calcswitch-name rpp-calcswitch-name">{o.shortLabel}</span>
              <span className="rpp-calcswitch-price rpp-calcswitch-price">
                {formatCurrency(care.waMonthly)}
                <span className="rpp-calcswitch-per rpp-calcswitch-per">&nbsp;/ month</span>
              </span>
              <span className="rpp-calcswitch-blurb rpp-calcswitch-blurb">{o.blurb}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CareCalculatorSwitcher;
