import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CARE_TYPES, formatCurrency, COC_TEAL } from "@/lib/careTypes";

const NAVY = "#272421";
const DEFAULT_INFLATION = 3.5;
const YEARS_OUT_OPTIONS = [0, 5, 10, 15, 20];
const YEARS_OF_CARE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];

interface CostOfCareEmbedProps {
  /** Must match an id in src/lib/careTypes.ts */
  careTypeId: string;
}

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

const pillBtn = (active: boolean): React.CSSProperties => ({
  padding: "8px 10px",
  borderRadius: 8,
  fontSize: "15px",
  fontWeight: 700,
  fontFamily: "'DM Sans', sans-serif",
  color: active ? "#ffffff" : NAVY,
  background: active ? COC_TEAL : "#f5f2ec",
  border: `1px solid ${active ? COC_TEAL : "#dccdce"}`,
  cursor: "pointer",
});

const CostOfCareEmbed = ({ careTypeId }: CostOfCareEmbedProps) => {
  const [currentAge, setCurrentAge] = useState(75);
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
    () => careType.waMonthly * Math.pow(1 + DEFAULT_INFLATION / 100, yearsOut),
    [careType, yearsOut],
  );
  const projectedNationalMonthly = useMemo(
    () => careType.nationalMonthly * Math.pow(1 + DEFAULT_INFLATION / 100, yearsOut),
    [careType, yearsOut],
  );
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
      <p
        style={{
          fontSize: 17,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#6f2a30",
          margin: "0 0 6px",
        }}
      >
        Cost of Care Calculator
      </p>
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(20px,2.6vw,26px)",
          fontWeight: 700,
          color: NAVY,
          margin: "0 0 20px",
        }}
      >
        {careType.label} — Washington vs. National
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 18 }}>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 17,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: NAVY,
              marginBottom: 8,
            }}
          >
            {t("costOfCarePage.card2.currentAge")}
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setCurrentAge((a) => Math.max(18, a - 1))}
              style={stepperBtn}
              aria-label={t("costOfCarePage.card2.decreaseAge")}
            >
              −
            </button>
            <div
              style={{
                background: "#f5f2ec",
                border: "2px solid #dccdce",
                borderRadius: 8,
                padding: "6px 14px",
                textAlign: "center",
                minWidth: 60,
              }}
            >
              <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 24, color: COC_TEAL }}>
                {currentAge}
              </span>
            </div>
            <button
              onClick={() => setCurrentAge((a) => Math.min(105, a + 1))}
              style={stepperBtn}
              aria-label={t("costOfCarePage.card2.increaseAge")}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label
            style={{
              display: "block",
              fontSize: 17,
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: NAVY,
              marginBottom: 8,
            }}
          >
            {t("costOfCarePage.card2.howManyYears")}
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setYearsOfCareNeeded((y) => Math.max(1, y - 1))}
              style={stepperBtn}
              aria-label={t("costOfCarePage.card2.decreaseYears")}
            >
              −
            </button>
            <div
              style={{
                background: "#f5f2ec",
                border: "2px solid #dccdce",
                borderRadius: 8,
                padding: "6px 14px",
                textAlign: "center",
                minWidth: 60,
              }}
            >
              <span style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 24, color: COC_TEAL }}>
                {yearsOfCareNeeded}
              </span>
            </div>
            <button
              onClick={() => setYearsOfCareNeeded((y) => Math.min(10, y + 1))}
              style={stepperBtn}
              aria-label={t("costOfCarePage.card2.increaseYears")}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            display: "block",
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: NAVY,
            marginBottom: 8,
          }}
        >
          When Might Care Begin?
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {YEARS_OUT_OPTIONS.map((y) => (
            <button key={y} onClick={() => setYearsOut(y)} style={pillBtn(y === yearsOut)}>
              {y === 0 ? "Now" : `${y} yrs`}
            </button>
          ))}
        </div>
      </div>

      <div
        className="coc-embed-results"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}
      >
        <div
          style={{
            background: "#f5f2ec",
            border: `2px solid ${COC_TEAL}60`,
            borderRadius: 10,
            padding: "12px",
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
              marginBottom: 4,
            }}
          >
            {t("costOfCarePage.results.washington")}
          </div>
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              fontSize: "clamp(16px,2.6vw,20px)",
              color: COC_TEAL,
            }}
          >
            {formatCurrency(projectedWaMonthly)}
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif" }}>
            {t("costOfCarePage.results.perMonth")}
          </div>
        </div>
        <div
          style={{
            background: "#f5f2ec",
            border: "1px solid #dccdce",
            borderRadius: 10,
            padding: "12px",
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
              marginBottom: 4,
            }}
          >
            {t("costOfCarePage.results.nationalMedian")}
          </div>
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              fontSize: "clamp(16px,2.6vw,20px)",
              color: NAVY,
            }}
          >
            {formatCurrency(projectedNationalMonthly)}
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif" }}>
            {t("costOfCarePage.results.perMonth")}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f5f2ec",
          border: `2px solid ${COC_TEAL}60`,
          borderRadius: 10,
          padding: "12px",
          textAlign: "center",
          marginBottom: 16,
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
            marginBottom: 4,
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
          }}
        >
          {formatCurrency(totalWaCost)}
        </div>
        <div
          style={{ fontSize: 17, fontWeight: 600, color: "#49443f", fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}
        >
          {t("costOfCarePage.results.inWashingtonVs", { amount: formatCurrency(totalNationalCost) })}
        </div>
      </div>

      <p
        style={{
          fontSize: 17,
          fontFamily: "'DM Sans', sans-serif",
          color: "#49443f",
          margin: "0 0 16px",
          lineHeight: 1.5,
        }}
      >
        Assumes {DEFAULT_INFLATION}% annual cost growth. {careType.note}
      </p>

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

      <style>{`
        @media (max-width: 420px) {
          .coc-embed-results { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CostOfCareEmbed;
