import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CARE_TYPES, formatCurrency, COST_SOURCE_LINE, COST_SOURCE_URL } from "@/lib/careTypes";
import { CARE_INFLATION_RATE } from "@/lib/careInflation";
import { CARE_CALCULATORS } from "@/lib/careCalculators";
import { monthlyIn, totalCareCost, shade } from "@/lib/careCostMath";
import AFHCostByLocationCard from "@/components/AFHCostByLocationCard";

/**
 * Cost of Care calculator card (redesigned Oct 3, 2026 from the owner-approved
 * mockup): a header band in the care type's own colour with a gold house-and-
 * heart icon, two steppers, Washington vs the national median (care-type colour
 * vs gold) with a bar comparison, and the total on a tinted panel as the one
 * hero number. Each care type's colour comes from src/lib/careCalculators.ts,
 * the same colours as the "Compare another option" cards.
 *
 * Totals price each year of care at that year's cost (src/lib/careCostMath.ts);
 * the old card multiplied the first year's cost by the number of years.
 *
 * Rendered on the six /cost-of-care-calculator/:slug pages and embedded in
 * several guides. index.css forces font-size and colour on bare div, span, p
 * and button with !important, so every rule below is on a doubled "coc2-"
 * class with !important (and no class contains card, tile, btn or cta).
 */

const DEFAULT_INFLATION = CARE_INFLATION_RATE;
const GOLD = "#B8862B"; // national median: large figure and bar
const GOLD_TEXT = "#8A6110"; // national median: small text (darker for contrast)
const GOLD_ICON = "#E3B85C";
const FALLBACK = "#1b3a6b";

/* careTypes.ts ids (9) → careCalculators.ts slugs (6). Written out because
   the two lists do not line up; adult day and CCRC have no calculator. */
const ID_TO_SLUG: Record<string, string> = {
  "independent-living": "independent-living",
  "adult-family-home": "adult-family-home",
  "assisted-living": "assisted-living",
  "memory-care": "memory-care",
  "in-home": "in-home-care",
  "nursing-semi": "nursing-home",
  "nursing-private": "nursing-home",
};

interface CostOfCareEmbedProps {
  /** Must match an id in src/lib/careTypes.ts */
  careTypeId: string;
}

const HouseHeart = ({ color }: { color: string }) => (
  <svg width="54" height="54" viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M8 30 L32 9 L56 30" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 26 V54 H50 V26" stroke={color} strokeWidth="4.5" strokeLinejoin="round" />
    <path d="M32 46 C24 40 21 36.5 21 32.5 C21 29.5 23.3 27.3 26 27.3 C28.4 27.3 30.4 28.8 32 31 C33.6 28.8 35.6 27.3 38 27.3 C40.7 27.3 43 29.5 43 32.5 C43 36.5 40 40 32 46 Z" stroke={color} strokeWidth="3.5" strokeLinejoin="round" />
  </svg>
);

const CostOfCareEmbed = ({ careTypeId }: CostOfCareEmbedProps) => {
  const [yearsOut, setYearsOut] = useState(0);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);
  const calculatorSlug = ID_TO_SLUG[careType.id];
  const option = CARE_CALCULATORS.find((o) => o.slug === calculatorSlug);
  const color = option?.color ?? FALLBACK;
  const deep = shade(color, 0.38);
  const tint = shade(color, -0.9);

  /* The growth rate is fixed at the sourced default (reader control removed
     Sept 2026). The "open the full calculator" link is hidden on the
     calculator page itself, where it would point at the page being read. */
  const inflation = DEFAULT_INFLATION;
  const onCalculatorPage = pathname.includes("/cost-of-care-calculator");
  /* Adult family homes are a Washington license type: no national median. */
  const hasNational = careType.nationalMonthly !== null;
  const NO_NATIONAL = "No national figure";

  const projectedWaMonthly = monthlyIn(careType.waMonthly, inflation, yearsOut);
  const projectedNationalMonthly = monthlyIn(careType.nationalMonthly ?? 0, inflation, yearsOut);
  const currentYear = new Date().getFullYear();
  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const totalWaCost = totalCareCost(careType.waMonthly, inflation, yearsOut, yearsOfCareNeeded);
  const totalNationalCost = totalCareCost(careType.nationalMonthly ?? 0, inflation, yearsOut, yearsOfCareNeeded);
  const averageMonthly = totalWaCost / (12 * yearsOfCareNeeded);
  const diffPct = hasNational ? Math.round((careType.waMonthly / (careType.nationalMonthly as number) - 1) * 100) : 0;
  const maxMonthly = Math.max(projectedWaMonthly, hasNational ? projectedNationalMonthly : 0);
  /* English uses the short names from the mockup ("Assisted Living", not
     "Assisted Living Community"); other locales keep their translated label. */
  const careLabel =
    (i18n.language ?? "en").startsWith("en") && option
      ? option.shortLabel
      : t(`costOfCarePage.careTypes.${careType.id}.label`, { defaultValue: careType.label });
  const yearsWord = (n: number) => `${n} ${n === 1 ? "year" : "years"}`;

  return (
    <div className="coc2" style={{ ["--c" as string]: color, ["--deep" as string]: deep, ["--tint" as string]: tint } as React.CSSProperties}>
      <div className="coc2-head">
        <HouseHeart color={GOLD_ICON} />
        <div className="coc2-headtext">
          <div className="coc2-eyebrow">Cost of Care Calculator</div>
          <h2 className="coc2-title">{careLabel} in Washington</h2>
          <div className="coc2-sub">
            {hasNational ? "What care could cost, compared with the national median" : "What care could cost in Washington"}
          </div>
        </div>
      </div>

      <div className="coc2-body">
        <div className="coc2-controls">
          <div className="coc2-ctrl">
            <div className="coc2-label" id="coc2-begin">When might care begin?</div>
            <div className="coc2-stepper" role="group" aria-labelledby="coc2-begin">
              <button type="button" className="coc2-step" onClick={() => setYearsOut((y) => Math.max(0, y - 1))} aria-label="Care begins one year sooner" disabled={yearsOut === 0}>−</button>
              <div className="coc2-val" aria-live="polite">{yearsOut === 0 ? "Now" : `In ${yearsWord(yearsOut)}`}</div>
              <button type="button" className="coc2-step" onClick={() => setYearsOut((y) => Math.min(20, y + 1))} aria-label="Care begins one year later" disabled={yearsOut === 20}>+</button>
            </div>
          </div>
          <div className="coc2-ctrl">
            <div className="coc2-label" id="coc2-years">How many years of care?</div>
            <div className="coc2-stepper" role="group" aria-labelledby="coc2-years">
              <button type="button" className="coc2-step" onClick={() => setYearsOfCareNeeded((y) => Math.max(1, y - 1))} aria-label={t("costOfCarePage.card2.decreaseYears", { defaultValue: "One year fewer" })} disabled={yearsOfCareNeeded === 1}>−</button>
              <div className="coc2-val" aria-live="polite">{yearsOfCareNeeded}</div>
              <button type="button" className="coc2-step" onClick={() => setYearsOfCareNeeded((y) => Math.min(10, y + 1))} aria-label={t("costOfCarePage.card2.increaseYears", { defaultValue: "One year more" })} disabled={yearsOfCareNeeded === 10}>+</button>
            </div>
          </div>
        </div>

        <div className={`coc2-compare${hasNational ? "" : " coc2-single"}`}>
          <div className="coc2-fig">
            <div className="coc2-figlabel">Washington</div>
            <div className="coc2-fignum coc2-wa">{formatCurrency(projectedWaMonthly)}</div>
            <div className="coc2-figper">per month{yearsOut > 0 ? ` in ${currentYear + yearsOut}` : ""}</div>
          </div>
          {hasNational && (
            <div className="coc2-fig">
              <div className="coc2-figlabel">National median</div>
              <div className="coc2-fignum coc2-nat">{formatCurrency(projectedNationalMonthly)}</div>
              <div className="coc2-figper">per month{yearsOut > 0 ? ` in ${currentYear + yearsOut}` : ""}</div>
            </div>
          )}
        </div>

        {hasNational ? (
          <div className="coc2-bars" aria-hidden="true">
            <div className="coc2-barrow">
              <div className="coc2-barname">Washington</div>
              <div className="coc2-track"><div className="coc2-bar" style={{ width: `${(projectedWaMonthly / maxMonthly) * 100}%`, background: "var(--c)" }} /></div>
              <div className="coc2-barval coc2-wa">{formatCurrency(projectedWaMonthly)}</div>
            </div>
            <div className="coc2-barrow">
              <div className="coc2-barname">National median</div>
              <div className="coc2-track"><div className="coc2-bar" style={{ width: `${(projectedNationalMonthly / maxMonthly) * 100}%`, background: GOLD }} /></div>
              <div className="coc2-barval coc2-natsmall">{formatCurrency(projectedNationalMonthly)}</div>
            </div>
            <div className="coc2-diff">
              Washington is about <strong>{Math.abs(diffPct)}% {diffPct >= 0 ? "higher" : "lower"}</strong>
            </div>
          </div>
        ) : (
          <p className="coc2-note">{NO_NATIONAL}: adult family homes are a Washington license type, so there is no national median to compare.</p>
        )}

        <div className="coc2-result">
          <div className="coc2-reslabel">Estimated total · {yearsWord(yearsOfCareNeeded)}</div>
          <div className="coc2-total" aria-live="polite">{formatCurrency(totalWaCost)}</div>
          {hasNational && <div className="coc2-vs">vs. {formatCurrency(totalNationalCost)} at the national median</div>}
          <div className="coc2-avg">
            About {formatCurrency(averageMonthly)} a month on average{yearsOfCareNeeded > 1 ? ", with costs rising each year" : ""}.
          </div>
        </div>

        {/* AFH only: the statewide figure hides a wide county spread, so the
            city/county lookup sits directly under the calculator. */}
        {careType.id === "adult-family-home" && (
          <div className="coc-no-print coc2-afh">
            <div className="coc2-afhhead">Now check your city or county</div>
            <AFHCostByLocationCard compact />
          </div>
        )}

        <div className="coc2-foot">
          <p className="coc2-source">
            {careType.estimate && <>{careType.note} </>}
            <a href={COST_SOURCE_URL} target="_blank" rel="noopener noreferrer">{COST_SOURCE_LINE}</a> Includes a {inflation}% yearly
            increase in costs. Actual prices vary by community and level of care.
          </p>
          <div className="coc2-actions coc-no-print">
            <button type="button" className="coc2-print" onClick={() => window.print()}>
              {t("costOfCarePage.printSummary.printButton", { defaultValue: "Print this summary" })} →
            </button>
            {!onCalculatorPage && (
              <Link className="coc2-open" to={calculatorSlug ? `/cost-of-care-calculator/${calculatorSlug}` : "/cost-of-care-calculator"}>
                {calculatorSlug ? "Open the full calculator →" : "Compare care costs →"}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* PRINT SUMMARY — restored from 0274a1aa^ (the Aug 6 Lovable rewrite
          that cut CostOfCareCalculator.tsx from 1,110 lines to 233 and took
          this with it). Its ~20 translation keys survived that deletion intact
          in all eight locales, so this is a restore rather than a rebuild.

          It lives here, in the embed, rather than on the page: this component
          owns every number the summary reports, and putting it here means all
          six calculator pages get it without six copies to keep in sync.

          Hidden on screen, shown only by the @media print block below. The
          growth rate printed is whatever the reader set, not the default —
          if they adjusted it, the printout must say what they actually used.

          NOTE: dates render with toLocaleDateString("en-US") even in other
          locales. Worth revisiting, but a wrong-format date beats a crash. */}
      <div className="coc-print-summary" style={{ padding: "24px" }}>
        <h2 style={{ fontSize: "22px", margin: "0 0 4px", color: "#111" }}>
          {t("costOfCarePage.printSummary.title")}
        </h2>
        <p style={{ fontSize: "12px", color: "#222", margin: "0 0 18px" }}>
          {t("costOfCarePage.printSummary.preparedVia", {
            date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          })}
        </p>
        <h3
          style={{
            fontSize: "16px",
            color: "#111",
            margin: "16px 0 6px",
            borderBottom: "1px solid #ccc",
            paddingBottom: 4,
          }}
        >
          {t("costOfCarePage.printSummary.careType")}
        </h3>
        <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
          {t(`costOfCarePage.careTypes.${careType.id}.label`)}
        </p>
        <h3
          style={{
            fontSize: "16px",
            color: "#111",
            margin: "16px 0 6px",
            borderBottom: "1px solid #ccc",
            paddingBottom: 4,
          }}
        >
          {t("costOfCarePage.printSummary.careTimeline")}
        </h3>
        <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>
          {yearsOut === 0
            ? `Care begins now (${currentYear}).`
            : `Care begins in ${yearsOut} ${yearsOut === 1 ? "year" : "years"} (${currentYear + yearsOut}).`}
        </p>
        <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
          {`Planned for ${yearsOfCareNeeded} ${yearsOfCareNeeded === 1 ? "year" : "years"} of care, through ${currentYear + yearsOut + yearsOfCareNeeded}.`}
        </p>
        <h3
          style={{
            fontSize: "16px",
            color: "#111",
            margin: "16px 0 6px",
            borderBottom: "1px solid #ccc",
            paddingBottom: 4,
          }}
        >
          {t("costOfCarePage.printSummary.costAssumption")}
        </h3>
        <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
          {t("costOfCarePage.printSummary.annualGrowth", { rate: inflation })}
        </p>
        <h3
          style={{
            fontSize: "16px",
            color: "#111",
            margin: "16px 0 6px",
            borderBottom: "1px solid #ccc",
            paddingBottom: 4,
          }}
        >
          {t("costOfCarePage.printSummary.projectedCost")}
        </h3>
        <table
          style={{ width: "100%", fontSize: "14px", color: "#222", borderCollapse: "collapse", marginBottom: 8 }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid #999", paddingBottom: 4 }}></th>
              <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>
                {t("costOfCarePage.printSummary.colWashington")}
              </th>
              <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>
                {t("costOfCarePage.printSummary.colNational")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "4px 0" }}>{t("costOfCarePage.printSummary.rowPerMonth")}</td>
              <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaMonthly)}</td>
              <td style={{ textAlign: "right" }}>{hasNational ? formatCurrency(projectedNationalMonthly) : NO_NATIONAL}</td>
            </tr>
            <tr>
              <td style={{ padding: "4px 0" }}>{t("costOfCarePage.printSummary.rowPerYear")}</td>
              <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaAnnual)}</td>
              <td style={{ textAlign: "right" }}>{hasNational ? formatCurrency(projectedNationalAnnual) : NO_NATIONAL}</td>
            </tr>
            <tr>
              <td style={{ padding: "4px 0", fontWeight: 700 }}>
                {t("costOfCarePage.printSummary.rowTotal", { years: yearsOfCareNeeded })}
              </td>
              <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalWaCost)}</td>
              <td style={{ textAlign: "right", fontWeight: 700 }}>{hasNational ? formatCurrency(totalNationalCost) : NO_NATIONAL}</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{ fontSize: "11px", color: "#333", margin: "20px 0 0", borderTop: "1px solid #ccc", paddingTop: 8 }}
        >
          {/* Hard-coded: en.json's printSummary.footer credits every figure to
              CareScout/Genworth, which is not true of the estimate rows. */}
          {COST_SOURCE_LINE} Actual costs vary by area, provider, and level of care. For general planning only.
          Courtesy of Real Property Planning — realpropertyplanning.com.
        </p>
      </div>

      <style>{`
        .coc2.coc2 { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(20,40,58,0.08); max-width: 760px; margin: 0 auto; width: 100%; box-sizing: border-box; font-family: 'DM Sans', system-ui, sans-serif; color: #14283a; }
        .coc2 .coc2-head { display: flex; align-items: center; gap: 18px; background: var(--deep); padding: 22px 26px; }
        .coc2 .coc2-head svg { flex: 0 0 auto; }
        .coc2 .coc2-headtext { min-width: 0; }
        .coc2 .coc2-eyebrow.coc2-eyebrow { font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.18em !important; text-transform: uppercase; color: ${GOLD_ICON} !important; margin: 0 0 4px !important; }
        .coc2 h2.coc2-title.coc2-title { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.4vw, 34px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #ffffff !important; margin: 0 !important; text-wrap: balance; }
        .coc2 .coc2-sub.coc2-sub { font-size: 16px !important; color: rgba(255,255,255,0.88) !important; margin-top: 6px !important; line-height: 1.35 !important; }
        .coc2 .coc2-body { padding: 24px 26px 20px; }
        .coc2 .coc2-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; position: relative; }
        .coc2 .coc2-ctrl { display: flex; flex-direction: column; align-items: center; min-width: 0; }
        .coc2 .coc2-label.coc2-label { font-size: 17px !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 10px !important; text-align: center; }
        .coc2 .coc2-stepper { display: flex; align-items: stretch; border: 1px solid #c9d7e2; border-radius: 12px; overflow: hidden; background: #ffffff; }
        .coc2 button.coc2-step.coc2-step { width: 54px; min-height: 54px; display: flex; align-items: center; justify-content: center; background: #eef3f7 !important; color: var(--deep) !important; font-size: 28px !important; font-weight: 500 !important; line-height: 1 !important; border: 0 !important; cursor: pointer !important; padding: 0 !important; }
        .coc2 button.coc2-step.coc2-step:hover:not(:disabled) { background: #dfe8ef !important; }
        .coc2 button.coc2-step.coc2-step:disabled { color: #a3b1bc !important; cursor: default !important; }
        .coc2 button.coc2-step.coc2-step:focus-visible { outline: 3px solid var(--c); outline-offset: -3px; }
        .coc2 .coc2-val.coc2-val { min-width: 96px; padding: 0 12px; display: flex; align-items: center; justify-content: center; border-left: 1px solid #c9d7e2; border-right: 1px solid #c9d7e2; font-size: 22px !important; font-weight: 700 !important; color: #14283a !important; font-variant-numeric: tabular-nums; white-space: nowrap; }
        .coc2 .coc2-compare { display: grid; grid-template-columns: 1fr 1fr; margin: 26px 0 18px; }
        .coc2 .coc2-compare.coc2-single { grid-template-columns: 1fr; }
        .coc2 .coc2-fig { text-align: center; padding: 0 10px; }
        .coc2 .coc2-fig + .coc2-fig { border-left: 1px solid #dfe5ea; }
        .coc2 .coc2-figlabel.coc2-figlabel { font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #14283a !important; margin-bottom: 4px !important; }
        .coc2 .coc2-fignum.coc2-fignum { font-size: clamp(28px, 4vw, 38px) !important; font-weight: 700 !important; line-height: 1.1 !important; font-variant-numeric: tabular-nums; }
        .coc2 .coc2-wa.coc2-wa { color: var(--c) !important; }
        .coc2 .coc2-nat.coc2-nat { color: ${GOLD} !important; }
        .coc2 .coc2-natsmall.coc2-natsmall { color: ${GOLD_TEXT} !important; }
        .coc2 .coc2-figper.coc2-figper { font-size: 16px !important; color: #1f2933 !important; margin-top: 2px !important; }
        .coc2 .coc2-bars { margin: 0 0 20px; }
        .coc2 .coc2-barrow { display: grid; grid-template-columns: 150px minmax(0, 1fr) 76px; align-items: center; gap: 12px; margin-bottom: 8px; }
        .coc2 .coc2-barname.coc2-barname { font-size: 16px !important; font-weight: 600 !important; color: #14283a !important; white-space: nowrap; }
        .coc2 .coc2-track { height: 16px; background: #f1f4f6; border-radius: 4px; overflow: hidden; }
        .coc2 .coc2-bar { height: 100%; border-radius: 4px; transition: width 200ms ease; }
        .coc2 .coc2-barval.coc2-barval { font-size: 16px !important; font-weight: 700 !important; font-variant-numeric: tabular-nums; text-align: right; }
        .coc2 .coc2-diff.coc2-diff { text-align: center; font-size: 16px !important; color: #1f2933 !important; margin-top: 6px !important; }
        .coc2 .coc2-diff strong { color: #14283a !important; font-size: 16px !important; }
        .coc2 .coc2-result { background: var(--tint); border-radius: 14px; padding: 20px 18px 18px; text-align: center; }
        .coc2 .coc2-reslabel.coc2-reslabel { font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: var(--deep) !important; }
        .coc2 .coc2-total.coc2-total { font-size: clamp(44px, 7.5vw, 68px) !important; font-weight: 800 !important; line-height: 1.05 !important; color: #14283a !important; font-variant-numeric: tabular-nums; margin: 6px 0 4px !important; letter-spacing: -0.01em; }
        .coc2 .coc2-vs.coc2-vs { font-size: 17px !important; color: #1f2933 !important; }
        .coc2 .coc2-avg.coc2-avg { font-size: 17px !important; font-weight: 400 !important; color: #14283a !important; margin-top: 8px !important; }
        .coc2 p.coc2-note.coc2-note { font-size: 15px !important; color: #1f2933 !important; text-align: center; margin: 0 0 16px !important; }
        .coc2 .coc2-afh { margin-top: 18px; }
        .coc2 .coc2-afhhead.coc2-afhhead { font-size: 15px !important; font-weight: 700 !important; letter-spacing: 0.1em !important; text-transform: uppercase; color: var(--deep) !important; text-align: center; margin-bottom: 10px !important; }
        .coc2 .coc2-foot { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 20px; margin-top: 18px; padding-top: 14px; border-top: 1px solid #dfe5ea; }
        .coc2 p.coc2-source.coc2-source { flex: 1 1 340px; margin: 0 !important; padding-left: 12px; border-left: 4px solid #8a1c2b; font-size: 14px !important; font-weight: 500 !important; line-height: 1.5 !important; color: #1f2933 !important; }
        .coc2 p.coc2-source a { color: #1f2933 !important; font-size: 14px !important; font-weight: 400 !important; text-decoration: underline; text-underline-offset: 2px; }
        .coc2 .coc2-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .coc2 button.coc2-print.coc2-print, .coc2 a.coc2-open.coc2-open { background: none !important; border: 0 !important; padding: 4px 0 !important; min-height: 32px; font-family: 'DM Sans', sans-serif !important; font-size: 16px !important; font-weight: 600 !important; color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; cursor: pointer !important; }
        @media (max-width: 560px) {
          .coc2 .coc2-head { padding: 18px 16px; gap: 12px; }
          .coc2 .coc2-head svg { width: 42px; height: 42px; }
          .coc2 .coc2-body { padding: 18px 14px 16px; }
          .coc2 .coc2-controls { gap: 12px 8px; }
          .coc2 .coc2-label.coc2-label { font-size: 15px !important; }
          .coc2 button.coc2-step.coc2-step { width: 44px; min-height: 48px; font-size: 24px !important; }
          .coc2 .coc2-val.coc2-val { min-width: 64px; padding: 0 6px; font-size: 18px !important; }
          .coc2 .coc2-barrow { grid-template-columns: 76px minmax(0, 1fr) 62px; gap: 8px; }
          .coc2 .coc2-barname.coc2-barname, .coc2 .coc2-barval.coc2-barval { font-size: 14px !important; line-height: 1.25 !important; }
          .coc2 .coc2-barname.coc2-barname { white-space: normal; }
          .coc2 .coc2-actions { align-items: flex-start; }
        }
        @media (max-width: 400px) {
          .coc2 .coc2-controls { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) { .coc2 .coc2-bar { transition: none; } }
        .coc-print-summary { display: none; }
        @media print {
          .coc-no-print { display: none !important; }
          .coc-print-summary { display: block !important; font-family: Arial, Helvetica, sans-serif; color: #111; background: #fff; }
        }
      `}</style>
    </div>
  );
};

export default CostOfCareEmbed;
