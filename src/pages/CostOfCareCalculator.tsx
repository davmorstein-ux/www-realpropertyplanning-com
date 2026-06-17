import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";

interface CareType {
  id: string;
  label: string;
  waMonthly: number;
  nationalMonthly: number;
  unit: string;
  note: string;
}

const CARE_TYPES: CareType[] = [
  {
    id: "in-home",
    label: "In-Home Care (Non-Medical)",
    waMonthly: 8580,
    nationalMonthly: 6717,
    unit: "~44 hrs/week",
    note: "Washington averages $45/hour versus the national median of about $35/hour.",
  },
  {
    id: "adult-day",
    label: "Adult Day Care",
    waMonthly: 5395,
    nationalMonthly: 2057,
    unit: "5 days/week",
    note: "The most affordable long-term care option, providing daytime supervision and activities.",
  },
  {
    id: "assisted-living",
    label: "Assisted Living Community",
    waMonthly: 7600,
    nationalMonthly: 6200,
    unit: "monthly fee",
    note: "Washington runs about 23% above the national median.",
  },
  {
    id: "memory-care",
    label: "Memory Care",
    waMonthly: 9500,
    nationalMonthly: 7750,
    unit: "monthly fee",
    note: "Typically runs about 25% above standard assisted living rates.",
  },
  {
    id: "nursing-semi",
    label: "Nursing Home — Semi-Private Room",
    waMonthly: 13155,
    nationalMonthly: 9581,
    unit: "monthly",
    note: "Washington runs about 37% above the national median.",
  },
  {
    id: "nursing-private",
    label: "Nursing Home — Private Room",
    waMonthly: 14800,
    nationalMonthly: 10798,
    unit: "monthly",
    note: "Private rooms carry a premium over semi-private accommodations.",
  },
];

const YEARS_OUT_OPTIONS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const INFLATION_OPTIONS = [1, 2, 3, 4, 5];

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const GOLD = "#d4a843";

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
    const duration = 600;
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

const CostOfCareCalculator = () => {
  const [careTypeId, setCareTypeId] = useState(CARE_TYPES[2].id);
  const [yearsOut, setYearsOut] = useState(0);
  const [inflationRate, setInflationRate] = useState(3);

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let t = 0;
    let animId: number;
    const sp = 30;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      const cols = Math.ceil(canvas.width / sp) + 1;
      const rows = Math.ceil(canvas.height / sp) + 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const w = Math.sin(i * 0.4 + j * 0.3 + t) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(i * sp, j * sp, 1.5 + w * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,168,67,${0.15 + w * 0.45})`;
          ctx.fill();
        }
      }
      t += 0.01;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const projectedWaMonthly = useMemo(() => {
    return careType.waMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedNationalMonthly = useMemo(() => {
    return careType.nationalMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const percentAboveNational = Math.round(
    ((careType.waMonthly - careType.nationalMonthly) / careType.nationalMonthly) * 100,
  );

  return (
    <>
      <SEOHead
        title="Cost of Care Calculator | Washington State Long-Term Care Costs"
        description="Compare the cost of in-home care, assisted living, memory care, and nursing homes in Washington State versus national averages, with future cost projections based on inflation."
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
        <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b87333" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5a3200",
                margin: "0 0 14px",
              }}
            >
              Senior Transitions · Cost of Care
            </p>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 50px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#1a2530",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              Cost of Care Calculator
            </h1>
            <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#1e2e3e",
                lineHeight: 1.85,
                margin: "0 0 16px",
                maxWidth: 680,
              }}
            >
              Compare the cost of senior care in Washington State against national averages, and see how those costs may
              grow over time. Use this as a starting point for planning — actual costs vary by location, provider, and
              level of care needed.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section
          style={{
            background: "linear-gradient(180deg,#0a0e18,#05070d)",
            padding: "64px 24px 76px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.4,
            }}
          />
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div
              style={{
                background: "linear-gradient(170deg,#172441,#0a0f1c)",
                border: "1px solid rgba(212,168,67,0.45)",
                borderRadius: 16,
                padding: "2.5rem 2rem",
                boxShadow:
                  "0 1px 0 rgba(212,168,67,0.35), 0 30px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(212,168,67,0.12)",
              }}
            >
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: GOLD,
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  Senior Transitions · Cost of Care
                </div>
                <h2
                  style={{
                    fontSize: 30,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Cost of <span style={{ color: GOLD, textShadow: "0 0 30px rgba(212,168,67,0.5)" }}>Care</span>{" "}
                  Calculator
                </h2>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: "'Raleway', sans-serif",
                    color: GOLD,
                    marginTop: 8,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Know your costs · Plan with confidence
                </div>
              </div>

              {/* Care details panel */}
              <div
                style={{
                  border: "1px solid rgba(212,168,67,0.3)",
                  borderRadius: 12,
                  padding: "1.6rem 1.6rem 1.4rem",
                  marginBottom: 18,
                  background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.25))",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: 14,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Care Details
                </div>
                <div
                  style={{
                    height: 1,
                    background: "linear-gradient(90deg,transparent,rgba(212,168,67,0.3),transparent)",
                    marginBottom: 20,
                  }}
                />

                {/* Care type selector */}
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: 9,
                  }}
                >
                  Type of Care
                </label>
                <select
                  value={careTypeId}
                  onChange={(e) => setCareTypeId(e.target.value)}
                  style={{
                    width: "100%",
                    fontSize: 16,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#fff",
                    padding: "13px 16px",
                    borderRadius: 8,
                    border: "1.5px solid rgba(212,168,67,0.45)",
                    background: "rgba(5,8,14,0.75)",
                    marginBottom: 26,
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  {CARE_TYPES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>

                {/* Years out slider */}
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: 12,
                  }}
                >
                  Project Future Cost: {yearsOut === 0 ? "Today" : `${yearsOut} years from now`}
                </label>
                <input
                  type="range"
                  className="coc-range"
                  min={0}
                  max={YEARS_OUT_OPTIONS.length - 1}
                  step={1}
                  value={YEARS_OUT_OPTIONS.indexOf(yearsOut)}
                  onChange={(e) => setYearsOut(YEARS_OUT_OPTIONS[Number(e.target.value)])}
                  style={{ width: "100%", marginBottom: 8 }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 26,
                  }}
                >
                  <span>Today</span>
                  <span>50 years</span>
                </div>

                {/* Inflation rate */}
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: 12,
                  }}
                >
                  Annual Inflation Rate
                </label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {INFLATION_OPTIONS.map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setInflationRate(rate)}
                      style={{
                        flex: "1 1 60px",
                        padding: "10px 0",
                        fontSize: 15,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        borderRadius: 7,
                        border: inflationRate === rate ? `1.5px solid ${GOLD}` : "1.5px solid rgba(255,255,255,0.15)",
                        background: inflationRate === rate ? GOLD : "rgba(5,8,14,0.6)",
                        color: inflationRate === rate ? "#1a1206" : "rgba(255,255,255,0.8)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: inflationRate === rate ? "0 0 16px rgba(212,168,67,0.45)" : "none",
                      }}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(160deg,rgba(212,168,67,0.14),rgba(0,0,0,0.35))",
                    border: `1.5px solid ${GOLD}`,
                    borderRadius: 12,
                    padding: "24px 18px",
                    textAlign: "center",
                    boxShadow: "0 0 30px rgba(212,168,67,0.18)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: GOLD,
                      margin: "0 0 10px",
                    }}
                  >
                    Washington State
                  </p>
                  <p
                    className="coc-glow"
                    style={{
                      fontSize: "clamp(24px, 4vw, 34px)",
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 4px",
                      lineHeight: 1.1,
                    }}
                  >
                    <AnimatedValue value={projectedWaMonthly} formatter={formatCurrency} />
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontFamily: "'Raleway', sans-serif",
                      color: "rgba(255,255,255,0.55)",
                      margin: "0 0 14px",
                    }}
                  >
                    per month
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontFamily: "'Raleway', sans-serif",
                      color: "rgba(255,255,255,0.8)",
                      margin: 0,
                    }}
                  >
                    <AnimatedValue value={projectedWaAnnual} formatter={formatCurrency} /> / year
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "24px 18px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      margin: "0 0 10px",
                    }}
                  >
                    National Median
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(24px, 4vw, 34px)",
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.85)",
                      margin: "0 0 4px",
                      lineHeight: 1.1,
                    }}
                  >
                    <AnimatedValue value={projectedNationalMonthly} formatter={formatCurrency} />
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontFamily: "'Raleway', sans-serif",
                      color: "rgba(255,255,255,0.45)",
                      margin: "0 0 14px",
                    }}
                  >
                    per month
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontFamily: "'Raleway', sans-serif",
                      color: "rgba(255,255,255,0.65)",
                      margin: 0,
                    }}
                  >
                    <AnimatedValue value={projectedNationalAnnual} formatter={formatCurrency} /> / year
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(212,168,67,0.08)",
                  border: "1px solid rgba(212,168,67,0.35)",
                  borderLeft: `4px solid ${GOLD}`,
                  borderRadius: 8,
                  padding: "16px 20px",
                  marginBottom: 22,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: GOLD }}>{careType.label}</strong> in Washington currently runs about{" "}
                  <strong style={{ color: GOLD }}>
                    {percentAboveNational > 0
                      ? `${percentAboveNational}% above`
                      : `${Math.abs(percentAboveNational)}% below`}
                  </strong>{" "}
                  the national median. {careType.note}
                </p>
              </div>

              <p
                style={{
                  fontSize: 12,
                  fontFamily: "'Raleway', sans-serif",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Figures based on the CareScout/Genworth Cost of Care Survey and related industry sources. Actual costs
                vary by region, provider, and level of care. This tool is for general planning purposes only.
              </p>
            </div>
          </div>

          <style>{`
            .coc-range {
              -webkit-appearance: none;
              appearance: none;
              height: 6px;
              border-radius: 3px;
              background: rgba(212,168,67,0.18);
              outline: none;
            }
            .coc-range::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #d4a843;
              border: 2px solid #0a0f1c;
              box-shadow: 0 0 12px rgba(212,168,67,0.85), 0 0 0 4px rgba(212,168,67,0.15);
              cursor: pointer;
            }
            .coc-range::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #d4a843;
              border: 2px solid #0a0f1c;
              box-shadow: 0 0 12px rgba(212,168,67,0.85);
              cursor: pointer;
            }
            .coc-range::-moz-range-track {
              background: rgba(212,168,67,0.18);
              height: 6px;
              border-radius: 3px;
            }
            .coc-glow {
              animation: coc-glow-pulse 3.2s ease-in-out infinite;
            }
            @keyframes coc-glow-pulse {
              0%, 100% { text-shadow: 0 0 18px rgba(212,168,67,0.45); }
              50% { text-shadow: 0 0 32px rgba(212,168,67,0.8); }
            }
          `}</style>
        </section>

        {/* Why costs vary */}
        <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5a3200",
                margin: "0 0 14px",
              }}
            >
              Key Concept
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#0a1628",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              Why Washington Costs More Than the National Average
            </h2>
            <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
                lineHeight: 1.85,
                margin: "0 0 20px",
              }}
            >
              Washington State consistently ranks above the national median across nearly every category of senior care.
              Higher regional labor costs, a competitive caregiving job market, and higher costs of living in
              metropolitan areas like Seattle, Bellevue, and Bellingham all contribute to this gap.
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
              Costs also vary significantly within the state itself. Families in lower-cost areas such as Walla Walla or
              Yakima often find meaningfully lower rates than those in the Puget Sound region. An Adult Family Home is
              frequently a more affordable alternative to assisted living or nursing home care while still providing a
              high level of personalized support — worth exploring through our{" "}
              <Link to="/afh-club" style={{ color: "#2c6e9e" }}>
                AFH Club
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#2c3a48", padding: "64px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#b87333",
                margin: "0 0 16px",
              }}
            >
              Plan Ahead
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#e8e2d9",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              Need Help Planning for Care Costs?
            </h2>
            <div style={{ width: 40, height: 2, background: "#b87333", margin: "0 auto 24px", borderRadius: 1 }} />
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#e8e2d9",
                lineHeight: 1.85,
                margin: "0 0 32px",
              }}
            >
              Real Property Planning connects families with senior living advisors, financial planners, and resources to
              help fund the cost of care — including options like selling a home to fund senior living.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/senior-living-advisors"
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#e8e2d9",
                  background: "#b87333",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Talk to a Senior Living Advisor
              </Link>
              <Link
                to="/sell-house-fund-senior-living"
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#e8e2d9",
                  background: "transparent",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "1px solid #4a5a6a",
                }}
              >
                Funding Care With Home Equity
              </Link>
            </div>
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
