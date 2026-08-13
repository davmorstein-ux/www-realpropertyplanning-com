import { useState, useMemo, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CARE_TYPES, formatCurrency, COC_TEAL } from "@/lib/careTypes";
import {
  CARE_INFLATION_RATE,
  CARE_INFLATION_VERIFIED,
  CARE_INFLATION_FIRST_YEAR,
  CARE_INFLATION_LAST_YEAR,
} from "@/lib/careInflation";

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
const INFLATION_MIN = 1;
const INFLATION_MAX = 8;
const INFLATION_STEP = 0.1;
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

  /* Reader-adjustable growth rate. Starts at the sourced default; the caption
     stops citing BLS the moment it moves, because past that point the number
     is the reader's assumption and not the Bureau's. Rounded on every change:
     floating point turns 3.5 + 0.1 into 3.6000000000000005, which would render
     literally. */
  const inflLabelId = useId();
  const [inflation, setInflation] = useState<number>(DEFAULT_INFLATION);
  const atDefault = Math.abs(inflation - DEFAULT_INFLATION) < 0.001;
  const nudge = (delta: number) =>
    setInflation((r) => {
      const next = Math.round((r + delta) * 10) / 10;
      return Math.min(INFLATION_MAX, Math.max(INFLATION_MIN, next));
    });
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
        {t(`costOfCarePage.careTypes.${careType.id}.label`)} — Washington vs. National
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

      {/* GROWTH RATE — arrows, with the bars as a readout only.
          The bars are deliberately NOT clickable. Two ways to set one value is
          exactly the confusion this control exists to avoid, and a drag target
          is the worst interaction for hands with tremor or arthritis: press,
          hold, move precisely, release, and any slip resets you. The arrows
          match the age and years steppers above, so this card has one
          interaction pattern rather than two.

          The marked bar pins the sourced default, so moving away from it reads
          as departing from the data rather than as an abstract number change. */}
      <div className="coc-infl" role="group" aria-labelledby={inflLabelId}>
        <div id={inflLabelId} className="coc-infl-label">
          {t("costOfCarePage.card2.growthRate", { defaultValue: "Annual Cost Growth" })}
        </div>

        <div className="coc-infl-row">
          <button
            type="button"
            className="coc-infl-btn"
            onClick={() => nudge(-INFLATION_STEP)}
            disabled={inflation <= INFLATION_MIN}
            aria-label={t("costOfCarePage.card2.decreaseRate", { defaultValue: "Decrease growth rate" })}
          >
            −
          </button>

          {/* role=spinbutton with aria-valuetext so a screen reader hears what
              the bars show sighted readers: the number AND whether it is still
              the sourced figure. */}
          <div
            className="coc-infl-value"
            role="spinbutton"
            tabIndex={0}
            aria-valuenow={inflation}
            aria-valuemin={INFLATION_MIN}
            aria-valuemax={INFLATION_MAX}
            aria-valuetext={`${inflation.toFixed(1)}% ${
              atDefault
                ? t("costOfCarePage.card2.rateAtDefault", { defaultValue: "historical average" })
                : t("costOfCarePage.card2.rateAdjusted", { defaultValue: "your own assumption" })
            }`}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp" || e.key === "ArrowRight") { e.preventDefault(); nudge(INFLATION_STEP); }
              if (e.key === "ArrowDown" || e.key === "ArrowLeft") { e.preventDefault(); nudge(-INFLATION_STEP); }
              if (e.key === "Home") { e.preventDefault(); setInflation(INFLATION_MIN); }
              if (e.key === "End") { e.preventDefault(); setInflation(INFLATION_MAX); }
            }}
          >
            {inflation.toFixed(1)}%
          </div>

          <button
            type="button"
            className="coc-infl-btn"
            onClick={() => nudge(INFLATION_STEP)}
            disabled={inflation >= INFLATION_MAX}
            aria-label={t("costOfCarePage.card2.increaseRate", { defaultValue: "Increase growth rate" })}
          >
            +
          </button>
        </div>

        {/* Decorative: the value and its meaning are both already announced by
            the spinbutton, so exposing 36 bars would be noise. */}
        <div className="coc-infl-bars" aria-hidden="true">
          {Array.from({ length: 36 }, (_, i) => {
            const barValue = INFLATION_MIN + i * ((INFLATION_MAX - INFLATION_MIN) / 35);
            const filled = barValue <= inflation + 0.0001;
            const isAnchor =
              Math.abs(barValue - DEFAULT_INFLATION) < (INFLATION_MAX - INFLATION_MIN) / 70;
            return (
              <span
                key={i}
                className={`coc-infl-bar${filled ? " is-filled" : ""}${isAnchor ? " is-anchor" : ""}`}
              />
            );
          })}
        </div>

        <div className="coc-infl-scale" aria-hidden="true">
          <span>{t("costOfCarePage.card2.rateSlower", { defaultValue: "Slower growth" })}</span>
          <span>{t("costOfCarePage.card2.rateFaster", { defaultValue: "Faster growth" })}</span>
        </div>

        {/* THE HONESTY LINE. Three states, and they must stay distinct:
              moved off default -> the reader's own assumption, cite nothing
              verified          -> name BLS and the years covered
              seed              -> an assumption, and it says so
            Never cite BLS for a number BLS did not produce. CARE_INFLATION_VERIFIED
            is false until scripts/fetch-care-inflation.mjs has actually run. */}
        <p className="coc-infl-source">
          {!atDefault
            ? t("costOfCarePage.card2.rateCustomNote", {
                defaultValue: "Your own assumption — not based on published data.",
              })
            : CARE_INFLATION_VERIFIED
            ? t("costOfCarePage.card2.rateSourceNote", {
                defaultValue: `Based on U.S. Bureau of Labor Statistics long-term care price data, ${CARE_INFLATION_FIRST_YEAR}–${CARE_INFLATION_LAST_YEAR}. Projections are estimates; actual costs vary.`,
              })
            : t("costOfCarePage.card2.rateAssumedNote", {
                defaultValue:
                  "A working assumption, not a published figure. Projections are estimates; actual costs vary.",
              })}
        </p>
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
        {/* careType.note is the English string in careTypes.ts. The same
            sentence exists translated under costOfCarePage.careTypes.<id>.note
            in all eight locales, so read it from there and fall back to the
            hardcoded copy only if a key is ever missing. */}
        {t(`costOfCarePage.careTypes.${careType.id}.note`, { defaultValue: careType.note })}
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
      `}</style>
    </div>
  );
};

export default CostOfCareEmbed;
