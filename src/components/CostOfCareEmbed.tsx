import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CARE_TYPES, formatCurrency, COC_TEAL } from "@/lib/careTypes";

const NAVY = "#1a2744";
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
  border: "1px solid #ddd8cc",
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
  fontFamily: "'Raleway', sans-serif",
  color: active ? "#ffffff" : NAVY,
  background: active ? COC_TEAL : "#f5f2ec",
  border: `1px solid ${active ? COC_TEAL : "#ddd8cc"}`,
  cursor: "pointer",
});

const CostOfCareEmbed = ({ careTypeId }: CostOfCareEmbedProps) => {
  const [currentAge, setCurrentAge] = useState(75);
  const [yearsOut, setYearsOut] = useState(0);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);

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
        border: "2px solid #ddd8cc",
        borderRadius: 14,
        padding: "1.5rem",
        maxWidth: 640,
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: 17,
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#b8963e",
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
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: NAVY,
              marginBottom: 8,
            }}
          >
            Current Age
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
              aria-label="Increase age"
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
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: NAVY,
              marginBottom: 8,
            }}
          >
            Years of Care Needed
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
              aria-label="Increase years of care"
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
            fontFamily: "'Raleway', sans-serif",
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
              fontFamily: "'Raleway', sans-serif",
              marginBottom: 4,
            }}
          >
            Washington
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
          <div style={{ fontSize: 17, fontWeight: 600, color: "#374151", fontFamily: "'Raleway', sans-serif" }}>
            per month
          </div>
        </div>
        <div
          style={{
            background: "#f5f2ec",
            border: "1px solid #ddd8cc",
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
              fontFamily: "'Raleway', sans-serif",
              marginBottom: 4,
            }}
          >
            National Median
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
          <div style={{ fontSize: 17, fontWeight: 600, color: "#374151", fontFamily: "'Raleway', sans-serif" }}>
            per month
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
            fontFamily: "'Raleway', sans-serif",
            marginBottom: 4,
          }}
        >
          Total · {yearsOfCareNeeded}-Year Plan
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
          style={{ fontSize: 17, fontWeight: 600, color: "#374151", fontFamily: "'Raleway', sans-serif", marginTop: 2 }}
        >
          in Washington · vs. {formatCurrency(totalNationalCost)} nationally
        </div>
      </div>

      <p
        style={{
          fontSize: 17,
          fontFamily: "'Raleway', sans-serif",
          color: "#374151",
          margin: "0 0 16px",
          lineHeight: 1.5,
        }}
      >
        Assumes {DEFAULT_INFLATION}% annual cost growth. {careType.note}
      </p>

      <div style={{ textAlign: "center" }}>
        <Link
          to={`/cost-of-care-calculator?care=${careTypeId}`}
          className="marquee-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "'Raleway', sans-serif",
            color: COC_TEAL,
            background: "#ffffff",
            border: `2px solid ${COC_TEAL}`,
            borderRadius: 8,
            padding: "12px 20px",
            textDecoration: "none",
          }}
        >
          Open Full Calculator (Adjust Inflation, Compare Care Types) →
        </Link>
      </div>

      <style>{`
        @media (max-width: 420px) {
          .coc-embed-results { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CostOfCareEmbed;
