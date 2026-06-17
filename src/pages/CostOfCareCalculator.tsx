import { useState, useMemo } from "react";
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

const CostOfCareCalculator = () => {
  const [careTypeId, setCareTypeId] = useState(CARE_TYPES[2].id);
  const [yearsOut, setYearsOut] = useState(0);
  const [inflationRate, setInflationRate] = useState(3);

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);

  const projectedWaMonthly = useMemo(() => {
    return careType.waMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedNationalMonthly = useMemo(() => {
    return careType.nationalMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const percentAboveNational = Math.round(((careType.waMonthly - careType.nationalMonthly) / careType.nationalMonthly) * 100);

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
              Compare the cost of senior care in Washington State against national averages, and see how those
              costs may grow over time. Use this as a starting point for planning — actual costs vary by location,
              provider, and level of care needed.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section style={{ background: "#f7f4ef", padding: "56px 24px 72px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #ddd8cc",
                borderRadius: 10,
                padding: "32px 28px",
                boxShadow: "0 4px 24px rgba(10,22,40,0.06)",
              }}
            >
              {/* Care type selector */}
              <label
                style={{
                  display: "block",
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#5a3200",
                  marginBottom: 10,
                }}
              >
                Type of Care
              </label>
              <select
                value={careTypeId}
                onChange={(e) => setCareTypeId(e.target.value)}
                style={{
                  width: "100%",
                  fontSize: 18,
                  fontFamily: "'Raleway', sans-serif",
                  color: "#1a2530",
                  padding: "14px 16px",
                  borderRadius: 6,
                  border: "1.5px solid #c8b98a",
                  background: "#fff",
                  marginBottom: 28,
                  cursor: "pointer",
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
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#5a3200",
                  marginBottom: 10,
                }}
              >
                Project Future Cost: {yearsOut === 0 ? "Today" : `${yearsOut} years from now`}
              </label>
              <input
                type="range"
                min={0}
                max={YEARS_OUT_OPTIONS.length - 1}
                step={1}
                value={YEARS_OUT_OPTIONS.indexOf(yearsOut)}
                onChange={(e) => setYearsOut(YEARS_OUT_OPTIONS[Number(e.target.value)])}
                style={{ width: "100%", marginBottom: 8, accentColor: "#b87333" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  fontFamily: "'Raleway', sans-serif",
                  color: "#8a8478",
                  marginBottom: 28,
                }}
              >
                <span>Today</span>
                <span>50 years</span>
              </div>

              {/* Inflation rate */}
              <label
                style={{
                  display: "block",
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#5a3200",
                  marginBottom: 10,
                }}
              >
                Annual Inflation Rate
              </label>
              <div style={{ display: "flex", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                {INFLATION_OPTIONS.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setInflationRate(rate)}
                    style={{
                      flex: "1 1 60px",
                      padding: "10px 0",
                      fontSize: 16,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                      borderRadius: 6,
                      border: inflationRate === rate ? "2px solid #b87333" : "1.5px solid #d8d2c4",
                      background: inflationRate === rate ? "#b87333" : "#fff",
                      color: inflationRate === rate ? "#fff" : "#1a2530",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
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
                marginTop: 28,
              }}
            >
              <div
                style={{
                  background: "#2c3a48",
                  borderRadius: 10,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#b87333",
                    margin: "0 0 10px",
                  }}
                >
                  Washington State
                </p>
                <p
                  style={{
                    fontSize: "clamp(26px, 4vw, 36px)",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  {formatCurrency(projectedWaMonthly)}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#c8c2b8",
                    margin: "0 0 14px",
                  }}
                >
                  per month
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#e8e2d9",
                    margin: 0,
                  }}
                >
                  {formatCurrency(projectedWaAnnual)} / year
                </p>
              </div>

              <div
                style={{
                  background: "#edf0f3",
                  border: "1px solid #d0ccc4",
                  borderRadius: 10,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5a3200",
                    margin: "0 0 10px",
                  }}
                >
                  National Median
                </p>
                <p
                  style={{
                    fontSize: "clamp(26px, 4vw, 36px)",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#1a2530",
                    margin: "0 0 4px",
                    lineHeight: 1.1,
                  }}
                >
                  {formatCurrency(projectedNationalMonthly)}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#5a5a5a",
                    margin: "0 0 14px",
                  }}
                >
                  per month
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#1e2a38",
                    margin: 0,
                  }}
                >
                  {formatCurrency(projectedNationalAnnual)} / year
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#e8f2f9",
                border: "1px solid #2c6e9e",
                borderLeft: "4px solid #2c6e9e",
                borderRadius: 6,
                padding: "16px 20px",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontFamily: "'Raleway', sans-serif",
                  color: "#1a2a3a",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                <strong>{careType.label}</strong> in Washington currently runs about{" "}
                <strong>{percentAboveNational > 0 ? `${percentAboveNational}% above` : `${Math.abs(percentAboveNational)}% below`}</strong>{" "}
                the national median. {careType.note}
              </p>
            </div>

            <p
              style={{
                fontSize: 13,
                fontFamily: "'Raleway', sans-serif",
                color: "#8a8478",
                lineHeight: 1.6,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              Figures based on the CareScout/Genworth Cost of Care Survey and related industry sources. Actual costs
              vary by region, provider, and level of care. This tool is for general planning purposes only.
            </p>
          </div>
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
              Washington State consistently ranks above the national median across nearly every category of senior
              care. Higher regional labor costs, a competitive caregiving job market, and higher costs of living in
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
              Costs also vary significantly within the state itself. Families in lower-cost areas such as Walla
              Walla or Yakima often find meaningfully lower rates than those in the Puget Sound region. An Adult
              Family Home is frequently a more affordable alternative to assisted living or nursing home care while
              still providing a high level of personalized support — worth exploring through our{" "}
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
              Real Property Planning connects families with senior living advisors, financial planners, and
              resources to help fund the cost of care — including options like selling a home to fund senior living.
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
