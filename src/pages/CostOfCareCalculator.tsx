import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Printer } from "lucide-react";
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
    id: "adult-family-home",
    label: "Adult Family Home",
    waMonthly: 6500,
    nationalMonthly: 5500,
    unit: "monthly fee",
    note: "Often a more affordable, home-like alternative to assisted living, with 24/7 care bundled into one rate.",
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
    label: "Nursing Home — Semi-Private",
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
  {
    id: "ccrc",
    label: "CCRC",
    waMonthly: 3353,
    nationalMonthly: 3353,
    unit: "monthly service fee",
    note: "CCRCs also require a separate one-time entrance fee — commonly $400,000 or more nationally.",
  },
];

const CARE_TYPE_COLORS: Record<string, string> = {
  "in-home": "#3f7690",
  "adult-day": "#4f8268",
  "adult-family-home": "#1c9e90",
  "assisted-living": "#535f8c",
  "memory-care": "#73567a",
  "nursing-semi": "#54616c",
  "nursing-private": "#723a48",
  ccrc: "#7c6840",
};

const ACTUAL_US_INFLATION_RATE = 4.2;
const ACTUAL_INFLATION_AS_OF = "May 2026 report";
const YEARS_OUT_OPTIONS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const INFLATION_OPTIONS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
const YEARS_OF_CARE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SHORT_CARE_LABELS: Record<string, string> = {
  "in-home": "In-Home Care",
  "adult-day": "Adult Day Care",
  "adult-family-home": "Adult Family Home",
  "assisted-living": "Assisted Living",
  "memory-care": "Memory Care",
  "nursing-semi": "Nursing — Semi",
  "nursing-private": "Nursing — Private",
  ccrc: "CCRC",
};

const PLANNING_FOR_OPTIONS = [
  { id: "self", label: "Myself", phrase: "your" },
  { id: "parent", label: "A Parent", phrase: "your parent's" },
  { id: "spouse", label: "Partner/Spouse", phrase: "your partner's" },
  { id: "family", label: "Family Member", phrase: "your family member's" },
] as const;

const MARITAL_STATUS_OPTIONS = [
  { id: "single", label: "Single" },
  { id: "married", label: "Married" },
  { id: "divorced", label: "Divorced" },
  { id: "widowed", label: "Widowed" },
] as const;

const MARITAL_STATUS_NOTES: Record<string, string> = {
  single:
    "As a single applicant, Medicaid asset and income limits apply directly to one person's finances — an elder law attorney can walk through eligibility and planning options.",
  married:
    "Married couples often have additional Medicaid planning options, such as spousal asset protections, worth discussing with an elder law attorney.",
  divorced:
    "Divorce settlements and any spousal support can affect countable assets for Medicaid planning — worth reviewing with an elder law attorney.",
  widowed:
    "Losing a spouse often changes income and asset eligibility for benefit programs — an elder law attorney can help reassess the picture.",
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const TEAL = "#0d9488";
const TEAL_LIGHT = "#2dd9c4";
const ELECTRIC_BLUE = "#2979ff";
const ELECTRIC_BLUE_LIGHT = "#7eb6ff";
const ELECTRIC_BLUE_RGB = "41,121,255";

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

// Shared card style
const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #ddd8cc",
  borderRadius: 12,
  padding: "1.25rem 1.4rem",
  marginBottom: 14,
};

const sectionLabel = (color: string): React.CSSProperties => ({
  fontSize: "15px",
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color,
  fontWeight: 800,
  fontFamily: "'Raleway', sans-serif",
  marginBottom: 12,
  display: "flex",
  alignItems: "center",
  gap: 8,
});

const fieldLabel: React.CSSProperties = {
  display: "block",
  fontSize: "16px !important" as any,
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#1a2744",
  marginBottom: 8,
};

const CostOfCareCalculator = () => {
  const [careTypeId, setCareTypeId] = useState("assisted-living");
  const [yearsOut, setYearsOut] = useState(0);
  const [inflationRate, setInflationRate] = useState(3);
  const [unit, setUnit] = useState<"monthly" | "annual">("monthly");
  const [planningFor, setPlanningFor] = useState<(typeof PLANNING_FOR_OPTIONS)[number]["id"]>("self");
  const [maritalStatus, setMaritalStatus] = useState<(typeof MARITAL_STATUS_OPTIONS)[number]["id"]>("married");
  const [currentAge, setCurrentAge] = useState(75);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);

  const knobRef = useRef<HTMLDivElement>(null);

  const KNOB_TICK_ANGLES = [210, 247.5, 285, 322.5, 360, 397.5, 435, 472.5, 510];

  const setInflationFromPointer = (clientX: number, clientY: number) => {
    const rect = knobRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const raw = (((Math.atan2(dx, -dy) * (180 / Math.PI)) % 360) + 360) % 360;
    const circDist = (a: number, b: number) => {
      const d = Math.abs(a - (b % 360)) % 360;
      return Math.min(d, 360 - d);
    };
    let bestIdx = 0,
      bestDist = Infinity;
    KNOB_TICK_ANGLES.forEach((angle, i) => {
      const d = circDist(raw, angle);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    setInflationRate(INFLATION_OPTIONS[bestIdx]);
  };

  const handleKnobPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInflationFromPointer(e.clientX, e.clientY);
  };
  const handleKnobPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    setInflationFromPointer(e.clientX, e.clientY);
  };

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);
  const sortedByCost = useMemo(() => [...CARE_TYPES].sort((a, b) => a.waMonthly - b.waMonthly), []);
  const minCost = sortedByCost[0].waMonthly;
  const maxCost = sortedByCost[sortedByCost.length - 1].waMonthly;
  const gaugePct = useMemo(() => (careType.waMonthly - minCost) / (maxCost - minCost), [careType, minCost, maxCost]);
  const gaugeLabel = useMemo(() => {
    const rank = sortedByCost.findIndex((c) => c.id === careType.id);
    const total = sortedByCost.length;
    if (rank === 0) return "Lowest-cost option in Washington";
    if (rank === total - 1) return "Highest-cost option in Washington";
    const frac = rank / (total - 1);
    if (frac < 0.4) return "Below-average cost in Washington";
    if (frac < 0.6) return "Mid-range cost in Washington";
    return "Above-average cost in Washington";
  }, [careType, sortedByCost]);

  const inflationIndex = INFLATION_OPTIONS.indexOf(inflationRate);
  const yearsOutIndex = YEARS_OUT_OPTIONS.indexOf(yearsOut);
  const yearsOfCareIndex = YEARS_OF_CARE_OPTIONS.indexOf(yearsOfCareNeeded);
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

  const planningPhrase = PLANNING_FOR_OPTIONS.find((p) => p.id === planningFor)?.phrase ?? "your";
  const planningLabel = PLANNING_FOR_OPTIONS.find((p) => p.id === planningFor)?.label ?? "Myself";
  const maritalLabel = MARITAL_STATUS_OPTIONS.find((m) => m.id === maritalStatus)?.label ?? "Married";

  const pillBtn = (active: boolean, color: string) => ({
    padding: "9px 10px",
    borderRadius: 8,
    fontSize: "16px !important" as any,
    fontWeight: 700,
    fontFamily: "'Raleway', sans-serif",
    color: active ? "#ffffff" : "#1a2744",
    background: active ? color : "#f5f2ec",
    border: `1px solid ${active ? color : "#ddd8cc"}`,
    cursor: "pointer",
    transition: "all .15s ease",
  });

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
            {/* Row 1: Planning Profile + Care Type side by side */}
            <div className="coc-row1" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginBottom: 0 }}>
              {/* Planning Profile */}
              <div style={card}>
                <div style={sectionLabel(TEAL)}>
                  Planning Profile
                  <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
                </div>
                {/* Planning For + Marital Status — stacks to 1-col on mobile via class */}
                <div
                  className="coc-profile-grid"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}
                >
                  <div>
                    <label style={fieldLabel}>Planning For</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {PLANNING_FOR_OPTIONS.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPlanningFor(p.id)}
                          style={pillBtn(p.id === planningFor, TEAL)}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={fieldLabel}>Marital Status</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {MARITAL_STATUS_OPTIONS.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMaritalStatus(m.id)}
                          style={pillBtn(m.id === maritalStatus, TEAL)}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label style={fieldLabel}>Current Age</label>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button
                      onClick={() => setCurrentAge((a) => Math.max(18, a - 1))}
                      style={{
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
                      }}
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
                          color: "#5a6a7a",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        yrs old
                      </span>
                    </div>
                    <button
                      onClick={() => setCurrentAge((a) => Math.min(105, a + 1))}
                      style={{
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
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Care Type */}
              <div style={card}>
                <div style={sectionLabel(TEAL)}>
                  Select Care Type
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
            </div>

            {/* Row 2: Care Timeline + Inflation Rate side by side */}
            <div className="coc-row2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 14 }}>
              {/* Care Timeline */}
              <div style={card}>
                <div style={sectionLabel(TEAL)}>
                  Care Timeline
                  <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
                </div>
                {/* Timeline inner — stacks on mobile via class */}
                <div className="coc-timeline-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Visual stepper */}
                  <div>
                    {[
                      { label: "TODAY", sub: `Age ${currentAge}` },
                      { label: "CARE BEGINS", sub: `Age ${ageAtCareStart} · ${currentYear + yearsOut}` },
                      { label: "CARE ENDS", sub: `Age ${ageAtCareEnd}` },
                    ].map((m, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 16 }}>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              flexShrink: 0,
                              background: i === 1 ? TEAL : "#c8c0b0",
                              border: "2px solid #f5f2ec",
                            }}
                          />
                          {i < 2 && (
                            <div
                              style={{
                                width: 3,
                                flex: 1,
                                minHeight: 28,
                                background: i === 0 ? TEAL : "#e0d8c8",
                                borderRadius: 2,
                                margin: "3px 0",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ paddingBottom: i < 2 ? 14 : 0 }}>
                          <div
                            style={{
                              fontSize: "15px !important" as any,
                              fontWeight: 800,
                              color: i === 1 ? TEAL : "#1a2744",
                              fontFamily: "'Raleway', sans-serif",
                              marginBottom: 2,
                            }}
                          >
                            {m.label}
                          </div>
                          <div
                            style={{
                              fontSize: "17px",
                              fontWeight: 600,
                              color: "#374151",
                              fontFamily: "'Raleway', sans-serif",
                            }}
                          >
                            {m.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Sliders */}
                  <div>
                    <label style={{ ...fieldLabel, marginBottom: 6 }}>When will care begin?</label>
                    <div
                      style={{
                        background: "#f5f2ec",
                        border: "1px solid #ddd8cc",
                        borderRadius: 8,
                        padding: "10px 14px",
                        textAlign: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontWeight: 700,
                          fontSize: "22px !important" as any,
                          color: TEAL,
                        }}
                      >
                        {yearsOut === 0 ? "TODAY" : `IN ${yearsOut} YRS`}
                      </span>
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: 600,
                          color: "#374151",
                          marginLeft: 8,
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Age {ageAtCareStart}
                      </span>
                    </div>
                    <input
                      type="range"
                      className="coc-range"
                      min={0}
                      max={YEARS_OUT_OPTIONS.length - 1}
                      step={1}
                      value={yearsOutIndex}
                      onChange={(e) => setYearsOut(YEARS_OUT_OPTIONS[Number(e.target.value)])}
                      style={{ width: "100%", marginBottom: 4 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#374151",
                        fontFamily: "'Raleway', sans-serif",
                        marginBottom: 16,
                      }}
                    >
                      <span>Today</span>
                      <span>50 yrs</span>
                    </div>
                    <label style={{ ...fieldLabel, marginBottom: 6 }}>How long will care be needed?</label>
                    <div
                      style={{
                        background: "#f5f2ec",
                        border: "1px solid #ddd8cc",
                        borderRadius: 8,
                        padding: "10px 14px",
                        textAlign: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontWeight: 700,
                          fontSize: "22px !important" as any,
                          color: TEAL,
                        }}
                      >
                        {yearsOfCareNeeded} {yearsOfCareNeeded === 1 ? "YR" : "YRS"}
                      </span>
                      <span
                        style={{
                          fontSize: "17px",
                          fontWeight: 600,
                          color: "#374151",
                          marginLeft: 8,
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Through age {ageAtCareEnd}
                      </span>
                    </div>
                    <input
                      type="range"
                      className="coc-range"
                      min={0}
                      max={YEARS_OF_CARE_OPTIONS.length - 1}
                      step={1}
                      value={yearsOfCareIndex}
                      onChange={(e) => setYearsOfCareNeeded(YEARS_OF_CARE_OPTIONS[Number(e.target.value)])}
                      style={{ width: "100%", marginBottom: 4 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#374151",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <span>1 yr</span>
                      <span>10 yrs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inflation Rate */}
              <div style={{ ...card, display: "flex", flexDirection: "column" }}>
                <div style={sectionLabel(TEAL)}>
                  Inflation Rate
                  <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${TEAL}40, transparent)` }} />
                </div>

                {/* Actual CPI readout */}
                <div
                  style={{
                    background: "#f5f2ec",
                    border: `1px solid ${TEAL}50`,
                    borderRadius: 8,
                    padding: "10px 16px",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: 700,
                      fontSize: "48px !important" as any,
                      lineHeight: 1.05,
                      color: ELECTRIC_BLUE,
                    }}
                  >
                    {ACTUAL_US_INFLATION_RATE.toFixed(1)}%
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#374151",
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Actual U.S. CPI · {ACTUAL_INFLATION_AS_OF}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#1a2744",
                    fontFamily: "'Raleway', sans-serif",
                    textAlign: "center",
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  Use the knob or bars below to set your projection rate.
                </p>

                {/* Knob (left) + LED readout (right) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 28,
                    marginBottom: 24,
                    marginTop: 8,
                  }}
                >
                  {/* Knob */}
                  <div
                    ref={knobRef}
                    onPointerDown={handleKnobPointerDown}
                    onPointerMove={handleKnobPointerMove}
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      position: "relative",
                      flexShrink: 0,
                      cursor: "grab",
                      touchAction: "none",
                      background: "radial-gradient(circle at 32% 28%, #e8e2d9, #c8c0b0 55%, #a8a099 80%)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15), 0 0 0 3px #f5f2ec, 0 0 0 4px #ddd8cc",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 6,
                        borderRadius: "50%",
                        background:
                          "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0deg 3deg, transparent 3deg 9deg)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 3,
                        height: "38%",
                        background: `linear-gradient(180deg,${TEAL_LIGHT},${TEAL})`,
                        borderRadius: "3px 3px 0 0",
                        transformOrigin: "50% 100%",
                        transform: `translate(-50%, -100%) rotate(${KNOB_TICK_ANGLES[inflationIndex]}deg)`,
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: TEAL,
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 2,
                      }}
                    />
                  </div>

                  {/* LED digital readout */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 220,
                        height: 140,
                        flexShrink: 0,
                        background: "#0a0e14",
                        borderRadius: 12,
                        border: `2px solid ${ELECTRIC_BLUE}60`,
                        boxShadow: `0 0 14px ${ELECTRIC_BLUE}40, inset 0 0 18px rgba(0,0,0,0.6)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 14px",
                      }}
                    >
                      <div
                        id="coc-led-number"
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontWeight: 900,
                          fontSize: "110px",
                          color: ELECTRIC_BLUE,
                          lineHeight: 1,
                          textShadow: `0 0 4px ${ELECTRIC_BLUE}`,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {inflationRate.toFixed(1)}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: ELECTRIC_BLUE,
                        letterSpacing: "0.22em",
                        textShadow: `0 0 6px ${ELECTRIC_BLUE}`,
                      }}
                    >
                      % / YR
                    </div>
                  </div>
                </div>

                {/* Bar graph — red fills from left as rate increases, no % labels */}
                <div style={{ marginTop: 8 }}>
                  <div
                    style={{ display: "flex", alignItems: "flex-end", gap: 5, justifyContent: "center", height: 52 }}
                  >
                    {INFLATION_OPTIONS.map((rate, i) => {
                      const barHeight = 14 + (i / (INFLATION_OPTIONS.length - 1)) * 34;
                      const isLit = rate <= inflationRate;
                      return (
                        <button
                          key={rate}
                          onClick={() => setInflationRate(rate)}
                          aria-label={`Set inflation rate to ${rate}%`}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          <div
                            style={{
                              width: 14,
                              height: barHeight,
                              borderRadius: 3,
                              background: isLit ? `linear-gradient(180deg, #ff6b6b, #dc2626)` : "#ddd8cc",
                              boxShadow: isLit ? "0 0 6px rgba(220,38,38,0.5)" : "none",
                              transition: "background 0.15s ease, box-shadow 0.15s ease",
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Cost Intensity Gauge + Results side by side */}
            <div className="coc-row3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 14 }}>
              {/* Cost Intensity Gauge */}
              <div style={card}>
                <div style={sectionLabel(ELECTRIC_BLUE)}>
                  Cost Intensity Gauge
                  <span
                    style={{
                      flex: 1,
                      height: 1,
                      background: `linear-gradient(90deg, rgba(${ELECTRIC_BLUE_RGB},0.3), transparent)`,
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <svg width="240" height="175" viewBox="0 0 260 185">
                    {Array.from({ length: 48 }).map((_, i) => {
                      const t0 = 180 - (i / 48) * 180;
                      const t1 = 180 - ((i + 1) / 48) * 180;
                      const rad0 = (t0 * Math.PI) / 180;
                      const rad1 = (t1 * Math.PI) / 180;
                      const x0 = 130 + 110 * Math.cos(rad0);
                      const y0 = 140 - 110 * Math.sin(rad0);
                      const x1 = 130 + 110 * Math.cos(rad1);
                      const y1 = 140 - 110 * Math.sin(rad1);
                      const progress = i / 47;
                      const width = 5 + progress * 21;
                      const filled = i / 48 < Math.max(0, Math.min(1, gaugePct));
                      return (
                        <path
                          key={i}
                          d={`M ${x0.toFixed(2)} ${y0.toFixed(2)} A 110 110 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`}
                          stroke={filled ? ELECTRIC_BLUE : "#e0d8c8"}
                          strokeWidth={width}
                          fill="none"
                          strokeLinecap="round"
                          style={{ transition: "stroke 0.4s ease" }}
                        />
                      );
                    })}
                    <g
                      style={{ transition: "transform 0.6s ease" }}
                      transform={`translate(130,140) rotate(${-90 + Math.max(0, Math.min(1, gaugePct)) * 180})`}
                    >
                      <polygon points="0,-86 4,0 -4,0" fill={ELECTRIC_BLUE} />
                    </g>
                    <circle cx={130} cy={140} r={9} fill="#f5f2ec" stroke="#ddd8cc" strokeWidth={2} />
                    <text
                      x={10}
                      y={183}
                      textAnchor="start"
                      fill={ELECTRIC_BLUE}
                      fontWeight={700}
                      fontFamily="Raleway"
                      style={{ fontSize: "14px !important" as any }}
                    >
                      LOW
                    </text>
                    <text
                      x={250}
                      y={183}
                      textAnchor="end"
                      fill={ELECTRIC_BLUE}
                      fontWeight={700}
                      fontFamily="Raleway"
                      style={{ fontSize: "14px !important" as any }}
                    >
                      HIGH
                    </text>
                  </svg>
                  <div
                    style={{
                      fontSize: "15px !important" as any,
                      color: "#1a2744",
                      textAlign: "center",
                      fontFamily: "'Raleway', sans-serif",
                      marginTop: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    <div>
                      <strong style={{ color: ELECTRIC_BLUE }}>{careType.label}</strong>
                    </div>
                    <div>
                      <strong>{gaugeLabel.replace("washington", "Washington")}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unit toggle + Results */}
              <div style={card}>
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}
                >
                  <span
                    style={{
                      fontSize: "15px !important" as any,
                      color: unit === "monthly" ? TEAL : "#5a6a7a",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Monthly
                  </span>
                  <div
                    onClick={() => setUnit(unit === "monthly" ? "annual" : "monthly")}
                    style={{
                      width: 72,
                      height: 28,
                      borderRadius: 14,
                      position: "relative",
                      cursor: "pointer",
                      background: "#e0d8c8",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 3,
                        left: unit === "monthly" ? 3 : 38,
                        width: 32,
                        height: 22,
                        borderRadius: 11,
                        transition: "left .2s ease",
                        background: TEAL,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "15px !important" as any,
                      color: unit === "annual" ? TEAL : "#5a6a7a",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Annual
                  </span>
                </div>
                {/* WA vs National results — stacks to 1-col on mobile via class */}
                <div
                  className="coc-results-grid"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}
                >
                  <div
                    style={{
                      borderRadius: 10,
                      padding: "16px 12px",
                      textAlign: "center",
                      background: "#f5f2ec",
                      border: `2px solid ${TEAL}50`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px !important" as any,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        fontWeight: 700,
                        marginBottom: 6,
                        color: "#1a2744",
                        fontFamily: "'Raleway', sans-serif",
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
                      style={{
                        fontSize: "13px !important" as any,
                        color: "#5a6a7a",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      per {unit === "monthly" ? "month" : "year"}
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: 10,
                      padding: "16px 12px",
                      textAlign: "center",
                      background: "#f5f2ec",
                      border: "1px solid #ddd8cc",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px !important" as any,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        fontWeight: 700,
                        marginBottom: 6,
                        color: "#1a2744",
                        fontFamily: "'Raleway', sans-serif",
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
                      style={{
                        fontSize: "13px !important" as any,
                        color: "#5a6a7a",
                        fontFamily: "'Raleway', sans-serif",
                      }}
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
                      fontSize: "13px !important" as any,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "#1a2744",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      marginBottom: 6,
                    }}
                  >
                    Total · {planningPhrase} {yearsOfCareNeeded}-Year Plan
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
                      fontSize: "13px !important" as any,
                      color: "#5a6a7a",
                      fontFamily: "'Raleway', sans-serif",
                      marginTop: 4,
                    }}
                  >
                    in Washington · vs. <AnimatedValue value={totalNationalCost} formatter={formatCurrency} />{" "}
                    nationally
                  </div>
                </div>
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
                  fontSize: "16px !important" as any,
                  fontFamily: "'Raleway', sans-serif",
                  color: "#1a2744",
                  lineHeight: 1.65,
                  margin: "0 0 10px",
                }}
              >
                <strong style={{ color: TEAL }}>{careType.label}</strong> for {planningPhrase} care in Washington
                currently runs about{" "}
                <strong>
                  {percentAboveNational > 0
                    ? `${percentAboveNational}% above`
                    : `${Math.abs(percentAboveNational)}% below`}
                </strong>{" "}
                the national median. {careType.note}
              </p>
              <p
                style={{
                  fontSize: "15px !important" as any,
                  fontFamily: "'Raleway', sans-serif",
                  color: "#5a6a7a",
                  lineHeight: 1.6,
                  margin: 0,
                  paddingTop: 10,
                  borderTop: "1px solid #e0d8c8",
                }}
              >
                {MARITAL_STATUS_NOTES[maritalStatus]}
              </p>
            </div>

            <p
              style={{
                fontSize: "14px !important" as any,
                fontFamily: "'Raleway', sans-serif",
                color: "#5a6a7a",
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
                  fontSize: "16px !important" as any,
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

          <style>{`
            /* ── Outer row grids: 1-col mobile → 2-col at 640px ── */
            @media (min-width: 640px) {
              .coc-row1 { grid-template-columns: 1fr 1fr !important; }
              .coc-row2 { grid-template-columns: 1fr 1fr !important; }
              .coc-row3 { grid-template-columns: 1fr 1fr !important; }
            }

            /* ── Care type toggle: 2-col at every size (wider tiles) ── */
            .coc-toggle-grid { grid-template-columns: repeat(2,1fr) !important; }

            /* ── Planning Profile inner grid: 1-col mobile → 2-col at 520px ── */
            .coc-profile-grid { grid-template-columns: 1fr !important; }
            @media (min-width: 520px) {
              .coc-profile-grid { grid-template-columns: 1fr 1fr !important; }
            }

            /* ── Care Timeline inner grid: 1-col mobile → 2-col at 520px ── */
            .coc-timeline-grid { grid-template-columns: 1fr !important; }
            @media (min-width: 520px) {
              .coc-timeline-grid { grid-template-columns: 1fr 1fr !important; }
            }

            /* ── Results WA/National: 1-col mobile → 2-col at 400px ── */
            .coc-results-grid { grid-template-columns: 1fr !important; }
            @media (min-width: 400px) {
              .coc-results-grid { grid-template-columns: 1fr 1fr !important; }
            }

            /* ── Print rules ── */
            .coc-print-summary { display: none; }
            @media print {
              header, footer, nav { display: none !important; }
              .coc-no-print { display: none !important; }
              .coc-print-summary { display: block !important; font-family: Arial, Helvetica, sans-serif; color: #111; background: #fff; }
            }

            /* ── Range slider styling ── */
            .coc-range { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 4px; background: linear-gradient(90deg,${TEAL},${TEAL_LIGHT}); outline: none; }
            .coc-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff, #d9d9d9 30%, #8a8d92 70%); box-shadow: 0 2px 5px rgba(0,0,0,0.3), 0 0 0 2px ${TEAL}40; cursor: pointer; }
            .coc-range::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff, #d9d9d9 30%, #8a8d92 70%); box-shadow: 0 2px 5px rgba(0,0,0,0.3); cursor: pointer; border: none; }
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
            Planning Profile
          </h3>
          <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Planning for: {planningLabel}</p>
          <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Marital status: {maritalLabel}</p>
          <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>Current age: {currentAge}</p>
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
                fontSize: 13,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.22em",
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
            <div style={{ width: 40, height: 3, background: "#b8963e", marginBottom: 28, borderRadius: 1 }} />
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
