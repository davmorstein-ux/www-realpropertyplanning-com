import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Printer } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import {
  CARE_TYPES,
  CARE_TYPE_COLORS,
  INFLATION_PRESETS,
  YEARS_OUT_OPTIONS,
  YEARS_OF_CARE_OPTIONS,
  formatCurrency,
  COC_TEAL,
} from "@/lib/careTypes";

const TEAL = COC_TEAL;

const AnimatedValue = ({ value, formatter }: { value: number; formatter: (n: number) => string }) => {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);
  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    if (Math.abs(end - start) < 0.5) {
      setDisplay(end);
      prevValue.current = end;
      return;
    }
    // Respect a reduced-motion preference: jump straight to the value.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(end);
      prevValue.current = end;
      return;
    }
    const startTime = performance.now();
    const duration = 500;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + (end - start) * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevValue.current = end;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{formatter(display)}</>;
};

// Shared style tokens
const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #dccdce",
  borderRadius: 12,
  padding: "1.1rem 1.25rem",
  marginBottom: 12,
};

const stepperBtn: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: 8,
  fontSize: "28px",
  fontWeight: 700,
  color: "#272421",
  background: "#f5f2ec",
  border: "1px solid #dccdce",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const pillBtn = (active: boolean, color: string): React.CSSProperties => ({
  padding: "10px 12px",
  borderRadius: 8,
  fontSize: "16px",
  fontWeight: 700,
  fontFamily: "'Raleway', sans-serif",
  color: active ? "#ffffff" : "#272421",
  background: active ? color : "#f5f2ec",
  border: `1px solid ${active ? color : "#dccdce"}`,
  cursor: "pointer",
  transition: "all .15s ease",
});

const CostOfCareCalculator = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [careTypeId, setCareTypeId] = useState<string>(() => {
    const requested = searchParams.get("care");
    return requested && CARE_TYPES.some((c) => c.id === requested) ? requested : "assisted-living";
  });
  const [currentAge, setCurrentAge] = useState(75);
  const [yearsOut, setYearsOut] = useState(0);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);
  const [unit, setUnit] = useState<"monthly" | "annual">("monthly");
  const [inflationId, setInflationId] = useState<(typeof INFLATION_PRESETS)[number]["id"]>("average");
  const [showInflationAdjust, setShowInflationAdjust] = useState(false);

  // The whole calculator adopts the selected care type's color, so the
  // results visibly belong to the choice made above. Falls back to the
  // house teal if an id has no assigned color.
  const accent = CARE_TYPE_COLORS[careTypeId] ?? TEAL;

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);
  const inflationRate = INFLATION_PRESETS.find((p) => p.id === inflationId)?.value ?? 3.5;

  const currentYear = new Date().getFullYear();
  const ageAtCareStart = currentAge + yearsOut;
  const ageAtCareEnd = ageAtCareStart + yearsOfCareNeeded;

  const projectedWaMonthly = useMemo(
    () => careType.waMonthly * Math.pow(1 + inflationRate / 100, yearsOut),
    [careType, yearsOut, inflationRate],
  );
  const projectedNationalMonthly = useMemo(
    () => careType.nationalMonthly * Math.pow(1 + inflationRate / 100, yearsOut),
    [careType, yearsOut, inflationRate],
  );
  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const totalWaCost = projectedWaMonthly * 12 * yearsOfCareNeeded;
  const totalNationalCost = projectedNationalMonthly * 12 * yearsOfCareNeeded;
  const percentAboveNational = Math.round(
    ((careType.waMonthly - careType.nationalMonthly) / careType.nationalMonthly) * 100,
  );

  return (
    <>
      <SEOHead
        title={t("costOfCarePage.seo.title")}
        description={t("costOfCarePage.seo.description")}
        canonical="https://realpropertyplanning.com/cost-of-care-calculator"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Cost of Care Calculator", url: "https://realpropertyplanning.com/cost-of-care-calculator" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero — trimmed so the calculator itself is nearer the fold */}
        <section style={{ background: "#f5f2ec", padding: "36px 24px 28px", borderBottom: "3px solid #6f2a30" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="coc-eyebrow">{t("costOfCarePage.hero.eyebrow")}</p>
            <h1
              style={{
                fontSize: "clamp(28px,4vw,42px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#272421",
                lineHeight: 1.15,
                margin: "0 0 12px",
              }}
            >
              {t("costOfCarePage.hero.heading")}
            </h1>
            <p className="coc-hero-desc">{t("costOfCarePage.hero.description")}</p>
          </div>
        </section>

        {/* Calculator */}
        <section
          className="coc-no-print"
          style={{ background: "#f5f2ec", padding: "28px 24px 48px", width: "100%", boxSizing: "border-box" }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
            {/* Card 1: Care type — 2 columns on phones, 4 on wider screens,
                which turns four stacked rows into two. */}
            <div style={card}>
              <div className="coc-section-title coc-section-label">
                {t("costOfCarePage.card1.sectionTitle")}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${accent}40, transparent)` }} />
              </div>
              <div className="coc-toggle-grid">
                {CARE_TYPES.map((c) => {
                  const active = c.id === careTypeId;
                  const color = CARE_TYPE_COLORS[c.id] ?? "#903f46";
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCareTypeId(c.id)}
                      aria-pressed={active}
                      style={{
                        padding: "12px 6px",
                        borderRadius: 8,
                        textAlign: "center",
                        fontSize: "15px",
                        fontWeight: 700,
                        fontFamily: "'Raleway', sans-serif",
                        lineHeight: 1.25,
                        minHeight: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: active ? "#ffffff" : "#272421",
                        background: active ? color : "#f5f2ec",
                        border: `1px solid ${active ? color : "#dccdce"}`,
                        cursor: "pointer",
                        transition: "all .15s ease",
                      }}
                    >
                      {t(`costOfCarePage.careTypes.${c.id}.shortLabel`)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Card 2: Your plan — the two steppers sit side by side on
                wider screens, and the inflation control is folded in here
                rather than occupying a card of its own. */}
            <div style={card}>
              <div className="coc-section-title coc-section-label">
                {t("costOfCarePage.card2.sectionTitle")}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${accent}40, transparent)` }} />
              </div>

              <div className="coc-plan-grid">
                <div>
                  <label className="coc-field-label">{t("costOfCarePage.card2.currentAge")}</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                        padding: "8px 14px",
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <span className="coc-stepper-number">{currentAge}</span>
                      <span className="coc-stepper-unit">{t("costOfCarePage.card2.yrsOld")}</span>
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
                  <label className="coc-field-label">{t("costOfCarePage.card2.howManyYears")}</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
                        padding: "8px 14px",
                        textAlign: "center",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <span className="coc-stepper-number">{yearsOfCareNeeded}</span>
                      <span className="coc-stepper-unit">
                        {yearsOfCareNeeded === 1 ? t("costOfCarePage.card2.year") : t("costOfCarePage.card2.years")}
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

              <div style={{ marginTop: 16 }}>
                <label className="coc-field-label">{t("costOfCarePage.card2.whenMightCareBegin")}</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {YEARS_OUT_OPTIONS.map((y) => (
                    <button
                      key={y}
                      onClick={() => setYearsOut(y)}
                      aria-pressed={y === yearsOut}
                      style={{ ...pillBtn(y === yearsOut, accent), flex: "1 1 80px" }}
                    >
                      {y === 0 ? t("costOfCarePage.card2.now") : `${y} ${t("costOfCarePage.card2.yrs")}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inflation assumption — automatic by default, adjustable */}
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: "1px solid #ece4e5",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <p className="coc-inflation-text">
                  {t("costOfCarePage.inflationCard.assumptionText", { rate: inflationRate })}
                </p>
                <button
                  onClick={() => setShowInflationAdjust((s) => !s)}
                  aria-expanded={showInflationAdjust}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: showInflationAdjust ? accent : "#ffffff",
                    color: showInflationAdjust ? "#ffffff" : accent,
                    border: `2px solid ${accent}`,
                    borderRadius: 8,
                    padding: "10px 18px",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "17px",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  {showInflationAdjust
                    ? t("costOfCarePage.inflationCard.hideOptions")
                    : t("costOfCarePage.inflationCard.changeOptions")}
                </button>
              </div>
              {showInflationAdjust && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                  {INFLATION_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setInflationId(p.id)}
                      aria-pressed={p.id === inflationId}
                      style={{
                        ...pillBtn(p.id === inflationId, accent),
                        flex: "1 1 140px",
                        fontSize: "17px",
                        padding: "11px 14px",
                      }}
                    >
                      {t(`costOfCarePage.inflationPresets.${p.id}`)} ({p.value}%)
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results — the three figures run across one row on wider
                screens instead of stacking. */}
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div className="coc-section-title coc-section-label" style={{ marginBottom: 0 }}>
                  {t("costOfCarePage.results.sectionTitle")}
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button
                    onClick={() => setUnit("monthly")}
                    aria-pressed={unit === "monthly"}
                    style={pillBtn(unit === "monthly", accent)}
                  >
                    {t("costOfCarePage.results.monthly")}
                  </button>
                  <button
                    onClick={() => setUnit("annual")}
                    aria-pressed={unit === "annual"}
                    style={pillBtn(unit === "annual", accent)}
                  >
                    {t("costOfCarePage.results.annual")}
                  </button>
                </div>
              </div>

              <div className="coc-results-grid">
                <div
                  style={{
                    background: "#f5f2ec",
                    border: `2px solid ${accent}60`,
                    borderRadius: 10,
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <div className="coc-result-label">{t("costOfCarePage.results.washington")}</div>
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(18px,3vw,24px)",
                      color: accent,
                    }}
                  >
                    <AnimatedValue
                      value={unit === "monthly" ? projectedWaMonthly : projectedWaAnnual}
                      formatter={formatCurrency}
                    />
                  </div>
                  <div className="coc-result-unit">
                    {unit === "monthly" ? t("costOfCarePage.results.perMonth") : t("costOfCarePage.results.perYear")}
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
                  <div className="coc-result-label">{t("costOfCarePage.results.nationalMedian")}</div>
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(18px,3vw,24px)",
                      color: "#272421",
                    }}
                  >
                    <AnimatedValue
                      value={unit === "monthly" ? projectedNationalMonthly : projectedNationalAnnual}
                      formatter={formatCurrency}
                    />
                  </div>
                  <div className="coc-result-unit">
                    {unit === "monthly" ? t("costOfCarePage.results.perMonth") : t("costOfCarePage.results.perYear")}
                  </div>
                </div>

                <div
                  className="coc-total-cell"
                  style={{
                    background: "#f5f2ec",
                    border: `2px solid ${accent}60`,
                    borderRadius: 10,
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <div className="coc-result-label">
                    {t("costOfCarePage.results.totalPlan", { years: yearsOfCareNeeded })}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(20px,3.2vw,28px)",
                      color: accent,
                    }}
                  >
                    <AnimatedValue value={totalWaCost} formatter={formatCurrency} />
                  </div>
                  <div className="coc-result-unit">
                    {t("costOfCarePage.results.inWashingtonVs", { amount: formatCurrency(totalNationalCost) })}
                  </div>
                </div>
              </div>

              {/* Context note */}
              <div
                style={{
                  background: "#ffffff",
                  border: `1px solid ${accent}40`,
                  borderLeft: `4px solid ${accent}`,
                  borderRadius: 0,
                  padding: "12px 16px",
                  marginTop: 12,
                }}
              >
                <p className="coc-context-note">
                  <strong style={{ color: accent }}>{t(`costOfCarePage.careTypes.${careType.id}.label`)}</strong>{" "}
                  {t("costOfCarePage.results.currentlyRunsIn")}{" "}
                  <strong>
                    {percentAboveNational === 0
                      ? t("costOfCarePage.results.aboutTheSameAs")
                      : percentAboveNational > 0
                        ? t("costOfCarePage.results.aboutAbove", { percent: percentAboveNational })
                        : t("costOfCarePage.results.aboutBelow", { percent: Math.abs(percentAboveNational) })}
                  </strong>{" "}
                  {t("costOfCarePage.results.theNationalMedian", {
                    note: t(`costOfCarePage.careTypes.${careType.id}.note`),
                  })}
                </p>
              </div>

              <div
                className="coc-no-print"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginTop: 14,
                }}
              >
                <p className="coc-source-note">{t("costOfCarePage.results.figuresBasedOn")}</p>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 22px",
                    borderRadius: 8,
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#ffffff",
                    background: accent,
                    border: `1px solid ${accent}`,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <Printer size={18} />
                  {t("costOfCarePage.results.printButton")}
                </button>
              </div>
            </div>
          </div>

          {/* Scoped styles. Doubled class names plus !important are needed to
              beat two global rules in index.css: `main p { font-size: ... }`
              and the `[style*="text-transform: uppercase"]` attribute
              selector that forces font-weight 600 on inline declarations —
              which is why every uppercase label here is a class, not an
              inline style. */}
          <style>{`
            .coc-toggle-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
            }

            /* Switching care type recolors the page; ease it rather than
               snapping, and skip it for reduced-motion users. */
            .coc-results-grid > div,
            .coc-section-label.coc-section-label,
            .coc-stepper-number {
              transition: color 220ms ease, border-color 220ms ease, background-color 220ms ease;
            }
            @media (prefers-reduced-motion: reduce) {
              .coc-results-grid > div,
              .coc-section-label.coc-section-label,
              .coc-stepper-number {
                transition: none;
              }
            }
            @media (min-width: 720px) {
              .coc-toggle-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
            }

            .coc-plan-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 720px) {
              .coc-plan-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
            }

            .coc-results-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 10px;
            }
            @media (min-width: 480px) {
              .coc-results-grid { grid-template-columns: 1fr 1fr; }
              .coc-total-cell { grid-column: 1 / -1; }
            }
            @media (min-width: 800px) {
              .coc-results-grid { grid-template-columns: 1fr 1fr 1.2fr; }
              .coc-total-cell { grid-column: auto; }
            }

            .coc-section-label.coc-section-label {
              font-size: 18px;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: ${accent};
              font-weight: 900;
              font-family: 'Raleway', sans-serif;
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              gap: 8px;
              text-shadow: 0 1px 0 rgba(255,255,255,0.8);
            }
            .coc-field-label.coc-field-label {
              display: block;
              font-size: 17px;
              font-family: 'Raleway', sans-serif;
              font-weight: 900;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #272421;
              margin-bottom: 8px;
            }
            .coc-eyebrow.coc-eyebrow {
              font-size: 14px !important;
              font-family: 'Raleway', sans-serif;
              font-weight: 700 !important;
              letter-spacing: 0.22em;
              text-transform: uppercase;
              color: #6f2a30 !important;
              margin: 0 0 10px !important;
            }
            .coc-hero-desc.coc-hero-desc {
              font-size: 18px !important;
              font-family: 'Raleway', sans-serif;
              color: #342e28 !important;
              line-height: 1.65 !important;
              margin: 0 !important;
              max-width: 720px;
            }
            .coc-stepper-number {
              font-family: 'Courier New', monospace;
              font-weight: 700;
              font-size: 40px;
              color: ${accent};
              line-height: 1;
              display: block;
            }
            .coc-stepper-unit.coc-stepper-unit {
              font-family: 'Raleway', sans-serif;
              font-size: 15px;
              font-weight: 600;
              color: #5e5954;
              letter-spacing: 0.06em;
              text-transform: uppercase;
            }
            .coc-inflation-text.coc-inflation-text {
              flex: 1 1 260px;
              font-size: 17px !important;
              font-family: 'Raleway', sans-serif;
              color: #272421 !important;
              margin: 0 !important;
              line-height: 1.5 !important;
              font-weight: 600 !important;
            }
            .coc-result-label.coc-result-label {
              font-size: 13px;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #272421;
              font-weight: 700;
              font-family: 'Raleway', sans-serif;
              margin-bottom: 4px;
            }
            .coc-result-unit.coc-result-unit {
              font-size: 15px;
              font-weight: 600;
              color: #49443f;
              font-family: 'Raleway', sans-serif;
              margin-top: 2px;
            }
            .coc-context-note.coc-context-note {
              font-size: 16px !important;
              font-family: 'Raleway', sans-serif;
              color: #272421 !important;
              line-height: 1.6 !important;
              margin: 0 !important;
            }
            .coc-source-note.coc-source-note {
              flex: 1 1 240px;
              font-size: 15px !important;
              font-family: 'Raleway', sans-serif;
              color: #49443f !important;
              line-height: 1.5 !important;
              margin: 0 !important;
            }

            .coc-print-summary { display: none; }
            @media print {
              header, footer, nav { display: none !important; }
              .coc-no-print { display: none !important; }
              .coc-print-summary { display: block !important; font-family: Arial, Helvetica, sans-serif; color: #111; background: #fff; }
            }
          `}</style>
        </section>

        {/* Print-only summary */}
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
            {t("costOfCarePage.printSummary.today", { age: currentAge })}
          </p>
          <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>
            {yearsOut === 0
              ? t("costOfCarePage.printSummary.careBeginsToday", {
                  age: ageAtCareStart,
                  year: currentYear + yearsOut,
                })
              : t("costOfCarePage.printSummary.careBeginsIn", {
                  years: yearsOut,
                  age: ageAtCareStart,
                  year: currentYear + yearsOut,
                })}
          </p>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
            {t("costOfCarePage.printSummary.careEnds", {
              years: yearsOfCareNeeded,
              yearWord: yearsOfCareNeeded === 1 ? t("costOfCarePage.card2.year") : t("costOfCarePage.card2.years"),
              age: ageAtCareEnd,
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
            {t("costOfCarePage.printSummary.costAssumption")}
          </h3>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
            {t("costOfCarePage.printSummary.annualGrowth", { rate: inflationRate })}
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

        {/* Why costs vary */}
        <section style={{ background: "#f5f2ec", padding: "48px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p className="coc-eyebrow">{t("costOfCarePage.whyCostsVary.eyebrow")}</p>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,34px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#272421",
                lineHeight: 1.2,
                margin: "0 0 16px",
              }}
            >
              {t("costOfCarePage.whyCostsVary.heading")}
            </h2>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#6f2a30",
                marginBottom: 20,
                borderRadius: 1,
                display: "block",
              }}
            />
            <p className="coc-hero-desc" style={{ marginBottom: "16px" }}>
              {t("costOfCarePage.whyCostsVary.paragraph1")}
            </p>
            <p className="coc-hero-desc">
              {t("costOfCarePage.whyCostsVary.paragraph2Before")}{" "}
              <Link to="/afh-club" style={{ color: "#9e2c35" }}>
                {t("costOfCarePage.whyCostsVary.afhClubLink")}
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default CostOfCareCalculator;
