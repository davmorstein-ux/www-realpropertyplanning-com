import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CARE_TYPES, formatCurrency, COC_TEAL } from "@/lib/careTypes";
import { CARE_INFLATION_RATE } from "@/lib/careInflation";
import AFHCostByLocationCard from "@/components/AFHCostByLocationCard";

const NAVY = "#272421";
/* The default growth rate now comes from src/lib/careInflation.ts, which
   scripts/fetch-care-inflation.mjs writes from the BLS Consumer Price Index.
   Until that script has run, the module ships a 3.5% seed with
   CARE_INFLATION_VERIFIED = false, and the caption below must not cite BLS —
   3.5% is the figure this calculator always assumed, not a sourced one.

   Bounds exist because arrows without them let someone hold a key down and
   land on 47%, producing a total that destroys the page's credibility. 8% is
   already far above any sustained historical run. */
const DEFAULT_INFLATION = CARE_INFLATION_RATE;
const INFLATION_STEP = 0.1;
const YEARS_OF_CARE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

interface CostOfCareEmbedProps {
  /** Must match an id in src/lib/careTypes.ts */
  careTypeId: string;
}

const ctrlLabel: React.CSSProperties = {
  display: "block",
  fontSize: 17,
  fontWeight: 700,
  fontFamily: "'DM Sans', sans-serif",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#272421",
  marginBottom: 8,
  textAlign: "center",
};
const valueBox: React.CSSProperties = {
  background: "#f5f2ec",
  border: "2px solid #dccdce",
  borderRadius: 8,
  padding: "4px 10px",
  textAlign: "center",
  minWidth: 60,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const valueText: React.CSSProperties = { fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 18, color: "#0d5c63", lineHeight: 1 };
const stepperBtn: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 8,
  fontSize: "26px",
  fontWeight: 700,
  color: NAVY,
  background: "#f5f2ec",
  border: "1px solid #dccdce",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};


const CostOfCareEmbed = ({ careTypeId }: CostOfCareEmbedProps) => {
  const [yearsOut, setYearsOut] = useState(0);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);

  /* This CTA used to point at /cost-of-care-calculator?care=<id>. That route
     takes a PATH segment (/cost-of-care-calculator/:careSlug), not a query
     string, so the param was ignored, the bare path matched, and every reader
     who clicked "Open Full Calculator" was dumped back on the six-option hub.

     Correcting the URL shape alone would not have been enough. Two separate
     vocabularies are in play and they do not line up:

       careTypes.ts     — 9 ids, drives this embed
       careCalculators.ts — 6 slugs, all the :careSlug route will accept

     Four ids happen to equal their slug. The rest need translating, and two
     care types have no calculator at all. Mapping by string manipulation
     would silently break again the moment either list changes, so the pairs
     are written out.

     If a calculator is ever built for adult day services or CCRCs, add the
     slug here as well as in careCalculators.ts, or the link stays on the hub. */
  /* True when this embed is rendered on the full calculator page itself.
     Matched from the path rather than passed as a prop deliberately: six
     article pages render this component, and a prop would mean six chances to
     forget it. The check is locale-agnostic — /es/cost-of-care-calculator/...
     and the other six translated paths all contain the same segment. */
  /* i18n rewired 2026-08-12. The costOfCarePage namespace holds 99 keys,
     translated into all eight locales — and after the Aug 6 rewrite of
     CostOfCareCalculator.tsx (commit 0274a1aa) not one of them was referenced
     by any code. Six calculator pages and seven translated locale routes were
     rendering hardcoded English on top of translations that already existed.
     Use these keys; do not reintroduce literal strings here. */
  const { t } = useTranslation();
  const { pathname } = useLocation();

  /* Growth rate is fixed at the sourced default; the reader-adjustable
     control was removed in Sept 2026 as more confusing than useful. */
  const inflation = DEFAULT_INFLATION;
  const onCalculatorPage = pathname.includes("/cost-of-care-calculator");

  const calculatorSlug = useMemo(() => {
    const ID_TO_SLUG: Record<string, string> = {
      "independent-living": "independent-living",
      "adult-family-home": "adult-family-home",
      "assisted-living": "assisted-living",
      "memory-care": "memory-care",
      /* Named differently in the two files. */
      "in-home": "in-home-care",
      /* Both nursing tiers share one calculator; it covers semi-private and
         private rooms internally. */
      "nursing-semi": "nursing-home",
      "nursing-private": "nursing-home",
      /* "adult-day" and "ccrc" are deliberately absent — no calculator exists
         for either. They fall through to the hub, which is the honest
         destination, and the CTA label changes to match. */
    };
    return ID_TO_SLUG[careType.id];
  }, [careType.id]);

  const projectedWaMonthly = useMemo(
    () => careType.waMonthly * Math.pow(1 + inflation / 100, yearsOut),
    [careType, yearsOut, inflation],
  );
  const projectedNationalMonthly = useMemo(
    () => careType.nationalMonthly * Math.pow(1 + inflation / 100, yearsOut),
    [careType, yearsOut, inflation],
  );
  /* Derived values for the print summary. Restored alongside it from
     0274a1aa^ — the Aug 6 Lovable rewrite deleted the summary and these with
     it, while leaving 20-odd translated printSummary keys orphaned in all
     eight locales. */
  const currentYear = new Date().getFullYear();
  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const totalWaCost = projectedWaMonthly * 12 * yearsOfCareNeeded;
  const totalNationalCost = projectedNationalMonthly * 12 * yearsOfCareNeeded;

  return (
    <div
      style={{
        background: "#ffffff",
        border: "2px solid #dccdce",
        borderRadius: 14,
        padding: "1.5rem",
        maxWidth: 640,
        margin: "0 auto",
      }}
    >
      {/* Same structure as the Cost by City & County card's header so the two
          titles render identically: eyebrow, centred h2, tracking subtitle. */}
      <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <div style={{ fontSize: 13, letterSpacing: ".25em", textTransform: "uppercase", color: "#b62733", marginBottom: 8, fontWeight: 700 }}>
          {t(`costOfCarePage.careTypes.${careType.id}.label`)}
        </div>
        <h2 className="coc-card-title" style={{ fontSize: 28, fontWeight: 700, color: "#272421", margin: 0 }}>
          Cost of <span style={{ color: "#b62733" }}>Care Calculator</span>
        </h2>
        <div style={{ fontSize: 13, color: "#5f6b66", marginTop: 6, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>
          Washington vs. National Average
        </div>
      </div>

      <div className="coc-controls" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 12px", margin: "32px 0 18px" }}>
        {/* Left: when care begins (0–20 years). */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }}>
          <label style={{ ...ctrlLabel }}>When Might Care Begin?</label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => setYearsOut((y) => Math.max(0, y - 1))} style={stepperBtn} aria-label="Care begins one year sooner">
              −
            </button>
            <div className="coc-value" style={valueBox}>
              <span style={valueText}>{yearsOut === 0 ? "Now" : `${yearsOut} ${yearsOut === 1 ? "yr" : "yrs"}`}</span>
            </div>
            <button onClick={() => setYearsOut((y) => Math.min(20, y + 1))} style={stepperBtn} aria-label="Care begins one year later">
              +
            </button>
          </div>
        </div>

        {/* Right: years of care (1–10). */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0 }}>
          <label style={{ ...ctrlLabel }}>{t("costOfCarePage.card2.howManyYears")}</label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => setYearsOfCareNeeded((y) => Math.max(1, y - 1))} style={stepperBtn} aria-label={t("costOfCarePage.card2.decreaseYears")}>
              −
            </button>
            <div className="coc-value" style={valueBox}>
              <span style={valueText}>{yearsOfCareNeeded}</span>
            </div>
            <button onClick={() => setYearsOfCareNeeded((y) => Math.min(10, y + 1))} style={stepperBtn} aria-label={t("costOfCarePage.card2.increaseYears")}>
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className="coc-embed-results"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}
      >
        <div
          style={{
            background: "#f5f2ec",
            border: `2px solid ${COC_TEAL}b3`,
            borderRadius: 10,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 2,
              lineHeight: 1.3,
            }}
          >
            {t("costOfCarePage.results.washington")}
          </div>
          <div style={{ lineHeight: 1.25, display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: "clamp(18px,2.6vw,22px)", color: COC_TEAL }}>
              {formatCurrency(projectedWaMonthly)}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif" }}>
              {t("costOfCarePage.results.perMonth")}
            </span>
          </div>
        </div>
        <div
          style={{
            background: "#f5f2ec",
            border: `2px solid ${COC_TEAL}b3`,
            borderRadius: 10,
            padding: "10px 12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: NAVY,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 2,
              lineHeight: 1.3,
            }}
          >
            {t("costOfCarePage.results.nationalMedian")}
          </div>
          <div style={{ lineHeight: 1.25, display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: "clamp(18px,2.6vw,22px)", color: NAVY }}>
              {formatCurrency(projectedNationalMonthly)}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif" }}>
              {t("costOfCarePage.results.perMonth")}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f5f2ec",
          border: `2px solid ${COC_TEAL}b3`,
          borderRadius: 10,
          padding: "10px 12px",
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: NAVY,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 2,
            lineHeight: 1.3,
          }}
        >
          {t("costOfCarePage.results.totalPlan", { years: yearsOfCareNeeded })}
        </div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontWeight: 700,
            fontSize: "clamp(20px,3vw,26px)",
            color: COC_TEAL,
            lineHeight: 1.2,
          }}
        >
          {formatCurrency(totalWaCost)}
        </div>
        <div
          style={{ fontSize: 16, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif", marginTop: 2, lineHeight: 1.3 }}
        >
          {t("costOfCarePage.results.inWashingtonVs", { amount: formatCurrency(totalNationalCost) })}
        </div>
      </div>

      {/* Growth-rate control and its source sentence removed Sept 2026 at
          David's request. Projections still grow at DEFAULT_INFLATION; the
          care-type note is also dropped here so the card ends on one line. */}
      <p className="coc-infl-source" style={{ margin: "6px 0 16px", textAlign: "center" }}>
        Projections are estimates; actual costs vary.
      </p>

      {/* AFH only: the statewide median above hides a wide county spread, so
          the city/county lookup itself sits directly under this calculator. */}
      {careType.id === "adult-family-home" && (
        <div className="coc-no-print" style={{ marginBottom: 18 }}>
          {/* Divider with a label so the lookup reads as a second, related tool
              rather than a continuation of the projection above. */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "22px 0 18px" }}>
            <span style={{ flex: 1, height: 3, background: COC_TEAL }} />
            <div className="coc-divider-label">Now check your city or county</div>
            <span style={{ flex: 1, height: 3, background: COC_TEAL }} />
          </div>
          <AFHCostByLocationCard compact />
        </div>
      )}

      {/* The CTA is suppressed when this embed is rendered ON the full
          calculator page, because there it points at the page you are already
          reading. That was the actual bug behind two different reports: with
          the old ?care= link it silently dropped the param and bounced the
          reader to the six-option hub; once the link was correct it navigated
          to the identical route, so the button looked dead.

          CostOfCareDetail renders this embed as its calculator body, so the
          "open the full calculator" invitation is meaningless there. On the
          six article pages that embed it, the CTA is the whole point. */}
      {!onCalculatorPage && (
        <div style={{ textAlign: "center" }}>
        <Link
          to={calculatorSlug ? `/cost-of-care-calculator/${calculatorSlug}` : "/cost-of-care-calculator"}
          className="marquee-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            color: COC_TEAL,
            background: "#ffffff",
            border: `2px solid ${COC_TEAL}`,
            borderRadius: 8,
            padding: "12px 20px",
            textDecoration: "none",
          }}
        >
          {calculatorSlug
            ? "Open Full Calculator (Adjust Inflation, Compare Care Types) →"
            : "Compare Care Costs →"}
        </Link>
        </div>
      )}

      {/* Print button. coc-no-print hides it from the printout itself —
          a button rendered on paper is noise. */}
      <div className="coc-no-print" style={{ textAlign: "center", marginBottom: 18 }}>
        <button
          type="button"
          className="coc-print-btn"
          onClick={() => window.print()}
        >
          {t("costOfCarePage.printSummary.printButton", { defaultValue: "Print this summary" })}
        </button>
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
        <p style={{ fontSize: "12px", color: "#555", margin: "0 0 18px" }}>
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
              <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalMonthly)}</td>
            </tr>
            <tr>
              <td style={{ padding: "4px 0" }}>{t("costOfCarePage.printSummary.rowPerYear")}</td>
              <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaAnnual)}</td>
              <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalAnnual)}</td>
            </tr>
            <tr>
              <td style={{ padding: "4px 0", fontWeight: 700 }}>
                {t("costOfCarePage.printSummary.rowTotal", { years: yearsOfCareNeeded })}
              </td>
              <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalWaCost)}</td>
              <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalNationalCost)}</td>
            </tr>
          </tbody>
        </table>
        <p
          style={{ fontSize: "11px", color: "#777", margin: "20px 0 0", borderTop: "1px solid #ccc", paddingTop: 8 }}
        >
          {t("costOfCarePage.printSummary.footer")}
        </p>
      </div>

      <style>{`
        /* Narrow cards (phones, and the calculator column at tablet widths):
           keep the two steppers side by side by shrinking them, never by
           stacking. Buttons stay at the 40px tap floor. */
        @media (max-width: 560px) {
          .coc-controls { gap: 12px 8px !important; }
          .coc-controls button { width: 40px !important; height: 40px !important; font-size: 22px !important; }
          .coc-controls .coc-value { min-width: 48px !important; height: 40px !important; padding: 2px 6px !important; }
          .coc-controls .coc-value span { font-size: 16px !important; }
          .coc-controls label { font-size: 14px !important; letter-spacing: 0.04em !important; }
        }
        @media (max-width: 420px) {
          .coc-embed-results { grid-template-columns: 1fr !important; }
        }

        /* GROWTH RATE CONTROL.
           Doubled selectors: index.css sets font-size and colour on bare
           div/span/p/button with !important. */
        .coc-infl.coc-infl {
          margin: 4px 0 18px;
          padding: 14px 16px;
          background: #f9f7f3;
          border: 1px solid #e2d8cd;
          border-radius: 10px;
        }
        .coc-infl-label.coc-infl-label {
          font-family: "DM Sans", sans-serif !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          color: #1B3A6B !important;
          margin-bottom: 8px !important;
        }
        .coc-infl-row { display: flex; align-items: center; gap: 8px; }
        /* 44px minimum: these sit under the same standard as every other tap
           target on the site, and this control is used by people with arthritis. */
        .coc-infl-btn.coc-infl-btn {
          min-width: 44px;
          min-height: 44px;
          font-size: 22px !important;
          font-weight: 700 !important;
          line-height: 1 !important;
          color: #1B3A6B !important;
          background: #ffffff !important;
          border: 2px solid #dccdce !important;
          border-radius: 8px !important;
          cursor: pointer !important;
        }
        .coc-infl-btn.coc-infl-btn:hover:not(:disabled) { background: #f2ece4 !important; }
        .coc-infl-btn.coc-infl-btn:disabled { opacity: 0.4; cursor: default !important; }
        .coc-infl-btn.coc-infl-btn:focus-visible,
        .coc-infl-value.coc-infl-value:focus-visible {
          outline: 3px solid #1B3A6B !important;
          outline-offset: 2px !important;
        }
        .coc-infl-value.coc-infl-value {
          font-family: "Courier New", monospace !important;
          font-weight: 700 !important;
          font-size: 24px !important;
          color: #14655f !important;
          background: #f5f2ec !important;
          border: 2px solid #dccdce !important;
          border-radius: 8px !important;
          padding: 6px 14px !important;
          min-width: 84px;
          text-align: center;
        }
        .coc-infl-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 26px;
          margin: 12px 0 4px;
        }
        .coc-infl-bar {
          flex: 1;
          height: 60%;
          border-radius: 2px;
          background: #ded5c9;
          transition: background 140ms ease, height 140ms ease;
        }
        .coc-infl-bar.is-filled { background: #14655f; height: 100%; }
        /* The anchor bar marks the sourced default. Height and colour BOTH
           change, so it is not signalled by colour alone. */
        .coc-infl-bar.is-anchor {
          background: #6b1b22;
          height: 100%;
        }
        .coc-infl-scale {
          display: flex;
          justify-content: space-between;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          color: #6b635b;
        }
        .coc-infl-source.coc-infl-source {
          font-family: "DM Sans", sans-serif !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
          color: #6b635b !important;
          margin: 10px 0 0 !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .coc-infl-bar { transition: none !important; }
        }

        /* The summary is the print artefact; the interactive card is not.
           Families print this and take it to siblings or an attorney, so it
           has to stand alone on paper without steppers or buttons. */
        .coc-print-btn.coc-print-btn {
          min-height: 44px;
          padding: 10px 20px !important;
          font-family: "DM Sans", sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #14655f !important;
          background: #ffffff !important;
          border: 2px solid #14655f !important;
          border-radius: 8px !important;
          cursor: pointer !important;
        }
        .coc-print-btn.coc-print-btn:hover { background: #f2ece4 !important; }
        .coc-print-btn.coc-print-btn:focus-visible {
          outline: 3px solid #14655f !important;
          outline-offset: 3px !important;
        }
        .coc-print-summary { display: none; }
        @media print {
          .coc-no-print { display: none !important; }
          .coc-print-summary {
            display: block !important;
            font-family: Arial, Helvetica, sans-serif;
            color: #111;
            background: #fff;
          }
        }
      `}</style>
    </div>
  );
};

export default CostOfCareEmbed;
