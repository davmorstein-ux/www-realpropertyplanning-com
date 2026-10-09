import { Link } from "react-router-dom";

/**
 * The AFH buyer's decision sequence, made explicit (Sept 2026 audit): the five
 * AFH tools already map onto it one-for-one, so this turns five independent
 * calculators into one workflow. `current` highlights the step the visitor is
 * on; omit it for the overview on the calculators and buying pages.
 */
export const AFH_BUYER_STEPS = [
  { n: 1, label: "Find a property", href: "/afh-club/listings", hint: "Current listings and what has sold", icon: "/afh-step-find.webp" },
  { n: 2, label: "Score the property", href: "/afh-club/afh-property-score", hint: "Layout, licensing fit, condition", icon: "/afh-step-score.webp" },
  { n: 3, label: "Estimate revenue", href: "/afh-club/afh-roi-calculator", hint: "Census, rates, and operating margin", icon: "/afh-step-revenue.webp" },
  { n: 4, label: "Estimate value", href: "/afh-club/afh-valuation-estimator", hint: "Real estate and business, separately", icon: "/afh-step-value.webp" },
  { n: 5, label: "Test the financing", href: "/afh-club/afh-financing-calculator", hint: "Occupancy needed to carry the loan", icon: "/afh-step-financing.webp" },
  { n: 6, label: "Get connected", href: "/contact?reason=afh-buy-sell", hint: "Talk it through before you make an offer", icon: "/afh-step-connect.webp" },
] as const;

/* Oct 8, 2026: AFH Club hunter green replaces the retired maroon (#0a5648), and the
   hints go from 12.5px to 15px (sitewide no-faint-text rule). Also now on /afh-club,
   right under "What brings you here?", and on the AFH guide's buying page. */
const AFHBuyerSteps = ({ current, compact = false, title }: { current?: number; compact?: boolean; title?: string }) => (
  <nav aria-label="Buying an adult family home, step by step" className={`rpp-afhsteps${compact ? " rpp-afhsteps-compact" : ""}`}>
    {!compact && <p className="rpp-afhsteps-title">{title ?? "Thinking about buying an adult family home? Take it in order."}</p>}
    <ol>
      {AFH_BUYER_STEPS.map((s) => {
        const isCurrent = s.n === current;
        return (
          <li key={s.n} className={isCurrent ? "is-current" : undefined} aria-current={isCurrent ? "step" : undefined}>
            <Link to={s.href} className="bg-transparent">
              {!compact && <img className="rpp-afhsteps-ico" src={s.icon} alt="" width={120} height={120} loading="lazy" decoding="async" />}
              <span className="rpp-afhsteps-n">{s.n}</span>
              <span className="rpp-afhsteps-label">{s.label}</span>
              {!compact && <span className="rpp-afhsteps-hint">{s.hint}</span>}
            </Link>
          </li>
        );
      })}
    </ol>
    <style dangerouslySetInnerHTML={{ __html: `
      .rpp-afhsteps { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; margin: 0 auto; max-width: 1100px; }
      /* Some pages lay out nav as a flex row; this one is always a block with the title on top (Oct 8, 2026). */
      nav.rpp-afhsteps.rpp-afhsteps { display: block !important; width: 100%; }
      .rpp-afhsteps * { overflow-wrap: normal; word-break: normal; }
      /* Step icons (owner's art, Oct 8, 2026), full band only, not the compact bar.
         Files are public/afh-step-<step>.webp, 240px square, trimmed and centred so
         all six sit at the same scale; any replacement needs the same treatment. */
      .rpp-afhsteps img.rpp-afhsteps-ico { display: block; width: 84px; height: 84px; object-fit: contain; margin: 0 auto 4px; }
      .rpp-afhsteps p.rpp-afhsteps-title { display: block; width: 100%; max-width: none !important; text-align: center !important; }
      /* index.css squeezes link line-height to 16px; give the box text room. */
      .rpp-afhsteps ol > li > a { line-height: 1.3 !important; }
      .rpp-afhsteps:not(.rpp-afhsteps-compact) ol > li > a { padding: 14px 10px 16px !important; }
      .rpp-afhsteps .rpp-afhsteps-label { line-height: 1.25 !important; }
      .rpp-afhsteps .rpp-afhsteps-hint { line-height: 1.4 !important; }
      .rpp-afhsteps ol > li { display: flex !important; width: 100%; min-width: 0; }
      .rpp-afhsteps ol > li > a { flex: 1 1 auto; width: 100% !important; height: auto !important; box-sizing: border-box; }
      .rpp-afhsteps .rpp-afhsteps-title { font-size: clamp(18px, 1.6vw, 22px); font-weight: 700; color: #272421; text-align: center; margin: 0 0 1rem !important; }
      .rpp-afhsteps ol { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      @media (min-width: 700px) { .rpp-afhsteps ol { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
      @media (min-width: 1000px) { .rpp-afhsteps ol { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
      .rpp-afhsteps li { margin: 0; }
      .rpp-afhsteps a { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; padding: 14px 10px; border: 1.5px solid #ddd6cc; border-radius: 12px; background: #fff; color: #272421 !important; text-decoration: none !important; height: 100%; }
      .rpp-afhsteps .rpp-afhsteps-n { width: 28px; height: 28px; border-radius: 50%; background: #0a5648; color: #fff; font-weight: 700; font-size: 14px; display: inline-flex; align-items: center; justify-content: center; }
      .rpp-afhsteps .rpp-afhsteps-label { font-weight: 700; font-size: 16px !important; line-height: 1.2; }
      .rpp-afhsteps .rpp-afhsteps-hint { font-size: 15px !important; line-height: 1.35; color: #1c1917; }
      .rpp-afhsteps li.is-current a { border-color: #0a5648; background: #eef5f2; }
      @media (hover: hover) { .rpp-afhsteps a:hover { border-color: #0a5648; } }
      /* Phones: one step per row, number on the left, so words never break mid-letter. */
      @media (max-width: 599px) {
        .rpp-afhsteps:not(.rpp-afhsteps-compact) ol { grid-template-columns: 1fr; gap: 8px; }
        .rpp-afhsteps:not(.rpp-afhsteps-compact) ol > li > a { display: grid !important; grid-template-columns: 32px 1fr; column-gap: 12px; row-gap: 2px; align-items: center; text-align: left; padding: 12px 14px !important; }
        .rpp-afhsteps:not(.rpp-afhsteps-compact) .rpp-afhsteps-n { grid-row: 1 / span 2; grid-column: 2; }
        .rpp-afhsteps:not(.rpp-afhsteps-compact) ol > li > a { grid-template-columns: 56px 32px 1fr !important; }
        .rpp-afhsteps img.rpp-afhsteps-ico { width: 56px; height: 56px; margin: 0; grid-row: 1 / span 2; grid-column: 1; }
        .rpp-afhsteps:not(.rpp-afhsteps-compact) .rpp-afhsteps-label, .rpp-afhsteps:not(.rpp-afhsteps-compact) .rpp-afhsteps-hint { grid-column: 3; text-align: left; }
      }
      .rpp-afhsteps-compact ol { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
      @media (min-width: 700px) { .rpp-afhsteps-compact ol { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
      .rpp-afhsteps-compact a { flex-direction: row; justify-content: center; gap: 8px; padding: 8px 10px; border-radius: 999px; }
      .rpp-afhsteps-compact .rpp-afhsteps-n { width: 22px; height: 22px; font-size: 12px; }
      .rpp-afhsteps.rpp-afhsteps-compact .rpp-afhsteps-label { font-size: 15px !important; font-weight: 600; text-align: left; }
      @media (max-width: 599px) { .rpp-afhsteps.rpp-afhsteps-compact ol { grid-template-columns: repeat(2, minmax(0, 1fr)); } .rpp-afhsteps-compact ol > li > a { justify-content: flex-start; padding: 8px 12px; } }
    ` }} />
  </nav>
);

export default AFHBuyerSteps;
