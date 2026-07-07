import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import {
  CARE_TYPES,
  CARE_TYPE_COLORS,
  SHORT_CARE_LABELS,
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
  border: "1px solid #ddd8cc",
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
  color: "#1a2744",
  marginBottom: 8,
};

const stepperBtn: React.CSSProperties = {
  width: 52,
  height: 52,
  borderRadius: 8,
  fontSize: "32px",
  fontWeight: 700,
  color: "#1a2744",
  background: "#f5f2ec",
  border: "1px solid #ddd8cc",
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
  color: active ? "#ffffff" : "#1a2744",
  background: active ? color : "#f5f2ec",
  border: `1px solid ${active ? color : "#ddd8cc"}`,
  cursor: "pointer",
  transition: "all .15s ease",
});

const CostOfCareCalculator = () => {
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
        title="Cost of Care Calculator | Washington State Long-Term Care Costs"
        description="Compare the cost of in-home care, assisted living, memory care, and nursing homes in Washington State versus national averages, with future cost projections."
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
        <section style={{ background: "#f5f2ec", padding: "64px 24px 48px", borderBottom: "3px solid #b8963e" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 13,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#b8963e",
                margin: "0 0 12px",
              }}
            >
              Senior Transitions · Cost of Care
            </p>
            <h1
              style={{
                fontSize: "clamp(32px,5vw,50px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#1a2744",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              Cost of Care Calculator
            </h1>
            <div style={{ width: 48, height: 3, background: "#b8963e", marginBottom: 24, borderRadius: 1 }} />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2e3e",
                lineHeight: 1.8,
                margin: 0,
                maxWidth: 680,
              }}
            >
              Compare the cost of senior care in Washington State against national averages, and see how those costs may
              grow over time.
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
                1. Select Type of Care
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
              </div>
              <div
                className="coc-toggle-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}
              >
                {CARE_TYPES.map((c) => {
                  const active = c.id === careTypeId;
                  const color = CARE_TYPE_COLORS[c.id] ?? "#3f7690";
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCareTypeId(c.id)}
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
                        color: active ? "#ffffff" : "#1a2744",
                        background: active ? color : "#f5f2ec",
                        border: `1px solid ${active ? color : "#ddd8cc"}`,
                        cursor: "pointer",
                        transition: "all .15s ease",
                      }}
                    >
                      {SHORT_CARE_LABELS[c.id] ?? c.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Card 2: Your plan */}
            <div style={card}>
              <div style={sectionLabel(TEAL)} className="coc-section-title">
                2. Your Care Plan
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={fieldLabel}>Current Age</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setCurrentAge((a) => Math.max(18, a - 1))}
                    style={stepperBtn}
                    aria-label="Decrease age"
                  >
                    −
                  </button>
                  <div
                    style={{
                      background: "#f5f2ec",
                      border: "2px solid #ddd8cc",
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
                        color: "#4a5568",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      yrs old
                    </span>
                  </div>
                  <button
                    onClick={() => setCurrentAge((a) => Math.min(105, a + 1))}
                    style={stepperBtn}
                    aria-label="Increase age"
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={fieldLabel}>When Might Care Begin?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {YEARS_OUT_OPTIONS.map((y) => (
                    <button
                      key={y}
                      onClick={() => setYearsOut(y)}
                      style={{ ...pillBtn(y === yearsOut, TEAL), flex: "1 1 80px" }}
                    >
                      {y === 0 ? "Now" : `${y} yrs`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={fieldLabel}>How Many Years of Care?</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setYearsOfCareNeeded((y) => Math.max(1, y - 1))}
                    style={stepperBtn}
                    aria-label="Decrease years of care"
                  >
                    −
                  </button>
                  <div
                    style={{
                      background: "#f5f2ec",
                      border: "2px solid #ddd8cc",
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
                        color: "#4a5568",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {yearsOfCareNeeded === 1 ? "year" : "years"}
                    </span>
                  </div>
                  <button
                    onClick={() => setYearsOfCareNeeded((y) => Math.min(10, y + 1))}
                    style={stepperBtn}
                    aria-label="Increase years of care"
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
                  fontSize: "17px",
                  fontFamily: "'Raleway', sans-serif",
                  color: "#374151",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                This estimate assumes long-term care costs rise about{" "}
                <strong style={{ color: "#1a2744" }}>{inflationRate}% a year</strong>, in line with recent historical
                trends.{" "}
                <button
                  onClick={() => setShowInflationAdjust((s) => !s)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: TEAL,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "17px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {showInflationAdjust ? "Hide options" : "Adjust this assumption"}
                </button>
              </p>
              {showInflationAdjust && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                  {INFLATION_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setInflationId(p.id)}
                      style={{ ...pillBtn(p.id === inflationId, TEAL), flex: "1 1 140px" }}
                    >
                      {p.label} ({p.value}%)
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results */}
            <div style={card}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={sectionLabel(TEAL)} className="coc-section-title">
                  3. Estimated Cost
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => setUnit("monthly")} style={pillBtn(unit === "monthly", TEAL)}>
                    Monthly
                  </button>
                  <button onClick={() => setUnit("annual")} style={pillBtn(unit === "annual", TEAL)}>
                    Annual
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
                      color: "#1a2744",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    Washington
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
                    style={{ fontSize: "16px", fontWeight: 600, color: "#374151", fontFamily: "'Raleway', sans-serif" }}
                  >
                    per {unit === "monthly" ? "month" : "year"}
                  </div>
                </div>
                <div
                  style={{
                    background: "#f5f2ec",
                    border: "1px solid #ddd8cc",
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
                      color: "#1a2744",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    National Median
                  </div>
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(18px,3vw,24px)",
                      color: "#1a2744",
                    }}
                  >
                    <AnimatedValue
                      value={unit === "monthly" ? projectedNationalMonthly : projectedNationalAnnual}
                      formatter={formatCurrency}
                    />
                  </div>
                  <div
                    style={{ fontSize: "16px", fontWeight: 600, color: "#374151", fontFamily: "'Raleway', sans-serif" }}
                  >
                    per {unit === "monthly" ? "month" : "year"}
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
                    color: "#1a2744",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    marginBottom: 6,
                  }}
                >
                  Total · {yearsOfCareNeeded}-Year Plan
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
                    color: "#374151",
                    fontFamily: "'Raleway', sans-serif",
                    marginTop: 4,
                  }}
                >
                  in Washington · vs. <AnimatedValue value={totalNationalCost} formatter={formatCurrency} /> nationally
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
                    color: "#1a2744",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: TEAL }}>{careType.label}</strong> in Washington currently runs{" "}
                  <strong>
                    {percentAboveNational === 0
                      ? "about the same as"
                      : percentAboveNational > 0
                        ? `about ${percentAboveNational}% above`
                        : `about ${Math.abs(percentAboveNational)}% below`}
                  </strong>{" "}
                  the national median. {careType.note}
                </p>
              </div>

              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "'Raleway', sans-serif",
                  color: "#374151",
                  lineHeight: 1.6,
                  textAlign: "center",
                  margin: "14px 0 0",
                }}
              >
                Figures based on the CareScout/Genworth Cost of Care Survey and related industry sources. Actual costs
                vary by region, provider, and level of care.
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
                  Print or Save as PDF
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
            Senior Living Cost Calculator — Results Summary
          </h2>
          <p style={{ fontSize: "12px", color: "#555", margin: "0 0 18px" }}>
            Prepared via realpropertyplanning.com on{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
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
            Care Type
          </h3>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>{careType.label}</p>
          <h3
            style={{
              fontSize: "16px",
              color: "#111",
              margin: "16px 0 6px",
              borderBottom: "1px solid #ccc",
              paddingBottom: 4,
            }}
          >
            Care Timeline
          </h3>
          <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Today: age {currentAge}</p>
          <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>
            Care begins: {yearsOut === 0 ? "today" : `in ${yearsOut} years`} (age {ageAtCareStart}, year{" "}
            {currentYear + yearsOut})
          </p>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
            Care ends: after {yearsOfCareNeeded} {yearsOfCareNeeded === 1 ? "year" : "years"} (age {ageAtCareEnd})
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
            Cost Assumption
          </h3>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>Annual cost growth: {inflationRate}%</p>
          <h3
            style={{
              fontSize: "16px",
              color: "#111",
              margin: "16px 0 6px",
              borderBottom: "1px solid #ccc",
              paddingBottom: 4,
            }}
          >
            Projected Cost
          </h3>
          <table
            style={{ width: "100%", fontSize: "14px", color: "#222", borderCollapse: "collapse", marginBottom: 8 }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "left", borderBottom: "1px solid #999", paddingBottom: 4 }}></th>
                <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>Washington</th>
                <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>National</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "4px 0" }}>Per month</td>
                <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaMonthly)}</td>
                <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalMonthly)}</td>
              </tr>
              <tr>
                <td style={{ padding: "4px 0" }}>Per year</td>
                <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaAnnual)}</td>
                <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalAnnual)}</td>
              </tr>
              <tr>
                <td style={{ padding: "4px 0", fontWeight: 700 }}>Total over {yearsOfCareNeeded}-year plan</td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalWaCost)}</td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalNationalCost)}</td>
              </tr>
            </tbody>
          </table>
          <p
            style={{ fontSize: "11px", color: "#777", margin: "20px 0 0", borderTop: "1px solid #ccc", paddingTop: 8 }}
          >
            Figures based on the CareScout/Genworth Cost of Care Survey. Actual costs vary by region, provider, and
            level of care. This tool is for general planning purposes only. Courtesy of Real Property Planning —
            realpropertyplanning.com.
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
                color: "#b8963e",
                margin: "0 0 14px",
              }}
            >
              Key Concept
            </p>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,36px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#1a2744",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              Why Washington Costs More Than the National Average
            </h2>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#b8963e",
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
                color: "#1a2744",
                lineHeight: 1.85,
                margin: "0 0 20px",
              }}
            >
              Washington State consistently ranks above the national median across nearly every category of senior care.
              Higher regional labor costs, a competitive caregiving job market, and higher costs of living in
              metropolitan areas all contribute to this gap.
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              An Adult Family Home is frequently a more affordable alternative to assisted living or nursing home care —
              worth exploring through our{" "}
              <Link to="/afh-club" style={{ color: "#2c6e9e" }}>
                AFH Club
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
