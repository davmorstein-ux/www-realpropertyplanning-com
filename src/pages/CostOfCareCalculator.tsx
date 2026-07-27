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
  padding: "1.25rem 1.4rem",
  marginBottom: 14,
};

const sectionLabel = (color: string): React.CSSProperties => ({
  fontSize: "18px",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color,
  fontWeight: 900,
  fontFamily: "'Raleway', sans-serif",
  marginBottom: 12,
  display: "flex",
  alignItems: "center",
  gap: 8,
  textShadow: "0 1px 0 rgba(255,255,255,0.8)",
});

const fieldLabel: React.CSSProperties = {
  display: "block",
  fontSize: "17px",
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 900,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#272421",
  marginBottom: 8,
};

const stepperBtn: React.CSSProperties = {
  width: 52,
  height: 52,
  borderRadius: 8,
  fontSize: "32px",
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
        {/* Hero */}
        <section style={{ background: "#f5f2ec", padding: "64px 24px 48px", borderBottom: "3px solid #6f2a30" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 13,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6f2a30",
                margin: "0 0 12px",
              }}
            >
              {t("costOfCarePage.hero.eyebrow")}
            </p>
            <h1
              style={{
                fontSize: "clamp(32px,5vw,50px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#272421",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              {t("costOfCarePage.hero.heading")}
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#342e28",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 680,
              }}
            >
              {t("costOfCarePage.hero.description")}
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section
          className="coc-no-print"
          style={{ background: "#f5f2ec", padding: "40px 24px 72px", width: "100%", boxSizing: "border-box" }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
            {/* Card 1: Care type */}
            <div style={card}>
              <div style={sectionLabel(TEAL)} className="coc-section-title">
                {t("costOfCarePage.card1.sectionTitle")}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
              </div>
              <div
                className="coc-toggle-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}
              >
                {CARE_TYPES.map((c) => {
                  const active = c.id === careTypeId;
                  const color = CARE_TYPE_COLORS[c.id] ?? "#903f46";
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCareTypeId(c.id)}
                      aria-pressed={active}
                      style={{
                        padding: "14px 6px",
                        borderRadius: 8,
                        textAlign: "center",
                        fontSize: "15px",
                        fontWeight: 700,
                        fontFamily: "'Raleway', sans-serif",
                        lineHeight: 1.25,
                        minHeight: 64,
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

            {/* Card 2: Your plan */}
            <div style={card}>
              <div style={sectionLabel(TEAL)} className="coc-section-title">
                {t("costOfCarePage.card2.sectionTitle")}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={fieldLabel}>{t("costOfCarePage.card2.currentAge")}</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                      padding: "10px 20px",
                      textAlign: "center",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "52px",
                        color: TEAL,
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      {currentAge}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#5e5954",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t("costOfCarePage.card2.yrsOld")}
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

              <div style={{ marginBottom: 18 }}>
                <label style={fieldLabel}>{t("costOfCarePage.card2.whenMightCareBegin")}</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {YEARS_OUT_OPTIONS.map((y) => (
                    <button
                      key={y}
                      onClick={() => setYearsOut(y)}
                      aria-pressed={y === yearsOut}
                      style={{ ...pillBtn(y === yearsOut, TEAL), flex: "1 1 80px" }}
                    >
                      {y === 0 ? t("costOfCarePage.card2.now") : `${y} ${t("costOfCarePage.card2.yrs")}`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={fieldLabel}>{t("costOfCarePage.card2.howManyYears")}</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                      padding: "10px 20px",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "52px",
                        color: TEAL,
                        lineHeight: 1,
                      }}
                    >
                      {yearsOfCareNeeded}
                    </span>{" "}
                    <span
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#5e5954",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
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

            {/* Inflation assumption — automatic by default, adjustable if desired */}
            <div style={{ ...card, background: "#f5f2ec" }}>
              <p
                style={{
                  fontSize: "18px",
                  fontFamily: "'Raleway', sans-serif",
                  color: "#272421",
                  margin: "0 0 16px",
                  lineHeight: 1.6,
                  fontWeight: 600,
                }}
              >
                {t("costOfCarePage.inflationCard.assumptionText", { rate: inflationRate })}
              </p>
              <button
                onClick={() => setShowInflationAdjust((s) => !s)}
                aria-expanded={showInflationAdjust}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: showInflationAdjust ? TEAL : "#ffffff",
                  color: showInflationAdjust ? "#ffffff" : TEAL,
                  border: `2px solid ${TEAL}`,
                  borderRadius: 8,
                  padding: "12px 22px",
                  fontWeight: 700,
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                {showInflationAdjust
                  ? t("costOfCarePage.inflationCard.hideOptions")
                  : t("costOfCarePage.inflationCard.changeOptions")}
              </button>
              {showInflationAdjust && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                  {INFLATION_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setInflationId(p.id)}
                      aria-pressed={p.id === inflationId}
                      style={{
                        ...pillBtn(p.id === inflationId, TEAL),
                        flex: "1 1 140px",
                        fontSize: "17px",
                        padding: "12px 14px",
                      }}
                    >
                      {t(`costOfCarePage.inflationPresets.${p.id}`)} ({p.value}%)
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results */}
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={sectionLabel(TEAL)} className="coc-section-title">
                  {t("costOfCarePage.results.sectionTitle")}
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button
                    onClick={() => setUnit("monthly")}
                    aria-pressed={unit === "monthly"}
                    style={pillBtn(unit === "monthly", TEAL)}
                  >
                    {t("costOfCarePage.results.monthly")}
                  </button>
                  <button
                    onClick={() => setUnit("annual")}
                    aria-pressed={unit === "annual"}
                    style={pillBtn(unit === "annual", TEAL)}
                  >
                    {t("costOfCarePage.results.annual")}
                  </button>
                </div>
              </div>

              <div
                className="coc-results-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 14 }}
              >
                <div
                  style={{
                    background: "#f5f2ec",
                    border: `2px solid ${TEAL}60`,
                    borderRadius: 10,
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#272421",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    {t("costOfCarePage.results.washington")}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(18px,3vw,24px)",
                      color: TEAL,
                    }}
                  >
                    <AnimatedValue
                      value={unit === "monthly" ? projectedWaMonthly : projectedWaAnnual}
                      formatter={formatCurrency}
                    />
                  </div>
                  <div
                    style={{ fontSize: "16px", fontWeight: 600, color: "#49443f", fontFamily: "'Raleway', sans-serif" }}
                  >
                    {unit === "monthly" ? t("costOfCarePage.results.perMonth") : t("costOfCarePage.results.perYear")}
                  </div>
                </div>
                <div
                  style={{
                    background: "#f5f2ec",
                    border: "1px solid #dccdce",
                    borderRadius: 10,
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#272421",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    {t("costOfCarePage.results.nationalMedian")}
                  </div>
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
                  <div
                    style={{ fontSize: "16px", fontWeight: 600, color: "#49443f", fontFamily: "'Raleway', sans-serif" }}
                  >
                    {unit === "monthly" ? t("costOfCarePage.results.perMonth") : t("costOfCarePage.results.perYear")}
                  </div>
                </div>
              </div>

              {/* Total cost banner */}
              <div
                style={{
                  background: "#f5f2ec",
                  border: `2px solid ${TEAL}60`,
                  borderRadius: 10,
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#272421",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    marginBottom: 6,
                  }}
                >
                  {t("costOfCarePage.results.totalPlan", { years: yearsOfCareNeeded })}
                </div>
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 700,
                    fontSize: "clamp(22px,3.5vw,30px)",
                    color: TEAL,
                  }}
                >
                  <AnimatedValue value={totalWaCost} formatter={formatCurrency} />
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#49443f",
                    fontFamily: "'Raleway', sans-serif",
                    marginTop: 4,
                  }}
                >
                  {t("costOfCarePage.results.inWashingtonVs", { amount: formatCurrency(totalNationalCost) })}
                </div>
              </div>

              {/* Context note */}
              <div
                style={{
                  background: "#ffffff",
                  border: `1px solid ${TEAL}40`,
                  borderLeft: `4px solid ${TEAL}`,
                  borderRadius: 10,
                  padding: "14px 18px",
                  marginTop: 14,
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Raleway', sans-serif",
                    color: "#272421",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: TEAL }}>{t(`costOfCarePage.careTypes.${careType.id}.label`)}</strong>{" "}
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

              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "'Raleway', sans-serif",
                  color: "#49443f",
                  lineHeight: 1.6,
                  textAlign: "center",
                  margin: "14px 0 0",
                }}
              >
                {t("costOfCarePage.results.figuresBasedOn")}
              </p>

              {/* Print button */}
              <div className="coc-no-print" style={{ textAlign: "center", marginTop: 20 }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 24px",
                    borderRadius: 8,
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#ffffff",
                    background: TEAL,
                    border: `1px solid ${TEAL}`,
                    cursor: "pointer",
                  }}
                >
                  <Printer size={18} />
                  {t("costOfCarePage.results.printButton")}
                </button>
              </div>
            </div>
          </div>

          <style>{`
            .coc-toggle-grid { grid-template-columns: repeat(2,1fr) !important; }
            .coc-results-grid { grid-template-columns: 1fr !important; }
            @media (min-width: 400px) {
              .coc-results-grid { grid-template-columns: 1fr 1fr !important; }
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
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>{t(`costOfCarePage.careTypes.${careType.id}.label`)}</p>
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
              yearWord:
                yearsOfCareNeeded === 1 ? t("costOfCarePage.card2.year") : t("costOfCarePage.card2.years"),
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
        <section style={{ background: "#f5f2ec", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 16,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6f2a30",
                margin: "0 0 14px",
              }}
            >
              {t("costOfCarePage.whyCostsVary.eyebrow")}
            </p>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,36px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#272421",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              {t("costOfCarePage.whyCostsVary.heading")}
            </h2>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#6f2a30",
                marginBottom: 28,
                marginTop: 16,
                borderRadius: 1,
                display: "block",
              }}
            />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#272421",
                lineHeight: 1.85,
                margin: "0 0 20px",
              }}
            >
              {t("costOfCarePage.whyCostsVary.paragraph1")}
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#302b26",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
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
