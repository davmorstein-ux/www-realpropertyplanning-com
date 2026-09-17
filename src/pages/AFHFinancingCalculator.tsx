import React, { useMemo, useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import BackToCalculators from "@/components/BackToCalculators";
import { confirmedPrivatePayBands, privatePayBandByMarket } from "@/data/afhPrivatePayRanges";

/**
 * AFH Occupancy & Financing Calculator (Sept 2026).
 *
 * Answers the question a seller rarely hears until a deal dies: at this
 * price, with this many residents, can a buyer get the loan? A lender divides
 * the home's net operating income (after paying staff to replace the owners'
 * own hours) by the annual debt service and wants at least ~1.25x. Below
 * that the loan is declined or reduced and the buyer must offer less.
 *
 * Built from the Cedar View (Edmonds) analysis: the same model as the
 * spreadsheet David used with the owner, generalised for any home.
 * Colour: teal, distinct from ROI (cobalt) and valuation (green).
 */

const TEAL = "#0f766e";
const TEAL_DARK = "#0b5b55";
const INK = "#272421";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const money0 = (n: number) => (n < 0 ? "(" + money(-n) + ")" : money(n));

/** Annual P&I on a fully amortising loan. */
const annualPI = (principal: number, rate: number, years: number) => {
  if (principal <= 0) return 0;
  const r = rate / 12;
  const n = years * 12;
  if (r === 0) return principal / years;
  return (principal * r) / (1 - Math.pow(1 + r, -n)) * 12;
};
/** Loan principal supportable by a given annual P&I. */
const principalFor = (annualPayment: number, rate: number, years: number) => {
  if (annualPayment <= 0) return 0;
  const r = rate / 12;
  const n = years * 12;
  if (r === 0) return (annualPayment / 12) * n;
  return ((annualPayment / 12) * (1 - Math.pow(1 + r, -n))) / r;
};

const AFHFinancingCalculator = () => {
  const bands = useMemo(() => confirmedPrivatePayBands(), []);

  // Inputs
  const [market, setMarket] = useState("snohomish");
  const [rate, setRate] = useState(7000);
  const [beds, setBeds] = useState(6);
  const [fixed, setFixed] = useState(150000);
  const [variable, setVariable] = useState(18000);
  const [wages, setWages] = useState(90000);
  const [priceProperty, setPriceProperty] = useState(1500000);
  const [priceBusiness, setPriceBusiness] = useState(150000);
  const [down, setDown] = useState(10);
  const [loanRate, setLoanRate] = useState(9.5);
  const [term, setTerm] = useState(25);
  const [taxIns, setTaxIns] = useState(14000);
  const [dscr, setDscr] = useState(1.25);

  const pickMarket = (m: string) => {
    setMarket(m);
    const b = privatePayBandByMarket(m);
    if (b) setRate(Math.round((b.low + b.high) / 2 / 50) * 50);
  };

  // Derived
  const total = priceProperty + priceBusiness;
  const loan = total * (1 - down / 100);
  const pi = annualPI(loan, loanRate / 100, term);
  const debtService = pi + taxIns;
  const needNOI = debtService * dscr;

  const rows = useMemo(() => {
    const out = [];
    const from = Math.max(1, beds - 3);
    for (let n = from; n <= beds; n++) {
      const gross = n * rate * 12;
      const noi = gross - fixed - n * variable - wages;
      const ratio = debtService > 0 ? noi / debtService : 0;
      const maxPrincipal = principalFor(Math.max(0, noi / dscr - taxIns), loanRate / 100, term);
      const maxPrice = maxPrincipal / (1 - down / 100);
      out.push({ n, gross, noi, ratio, ok: ratio >= dscr, cash: noi - debtService, maxPrice });
    }
    return out;
  }, [beds, rate, fixed, variable, wages, debtService, dscr, taxIns, loanRate, term, down]);

  // Price sensitivity: 7 prices centred on the entered total
  const grid = useMemo(() => {
    const step = 100000;
    const start = Math.max(step, Math.round(total / step) * step - 3 * step);
    const prices = Array.from({ length: 7 }, (_, i) => start + i * step);
    return prices.map((p) => {
      const ds = annualPI(p * (1 - down / 100), loanRate / 100, term) + taxIns;
      return { p, ratios: rows.map((r) => (ds > 0 ? r.noi / ds : 0)) };
    });
  }, [total, down, loanRate, term, taxIns, rows]);

  const fmtIn = (v: number) => (Number.isFinite(v) ? v : 0);
  const num = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(fmtIn(parseFloat(e.target.value)));

  const label: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: INK,
    marginBottom: 7,
    fontWeight: 700,
    fontFamily: "'DM Sans', system-ui, sans-serif",
  };
  const input: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: `1.5px solid ${TEAL}55`,
    borderRadius: 6,
    color: INK,
    fontSize: 16,
    padding: "10px 12px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    boxSizing: "border-box",
    display: "block",
  };
  const section: React.CSSProperties = {
    fontSize: 14,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: TEAL_DARK,
    marginBottom: 14,
    fontWeight: 700,
  };
  const card: React.CSSProperties = {
    background: "#fff",
    border: `2px solid ${TEAL}40`,
    borderRadius: 14,
    padding: "1.5rem 1.25rem",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    maxWidth: 900,
    margin: "0 auto 24px",
  };
  const field = (lbl: string, value: number, set: (v: number) => void, opts: { step?: number; min?: number; max?: number; note?: string } = {}) => (
    <div>
      <label style={label}>{lbl}</label>
      <input type="number" style={input} value={value} onChange={num(set)} step={opts.step ?? 1} min={opts.min} max={opts.max} />
      {opts.note && <div style={{ fontSize: 15, color: "#5f6b66", marginTop: 6, lineHeight: 1.4 }}>{opts.note}</div>}
    </div>
  );

  // Chart geometry (inline SVG, responsive via viewBox)
  const W = 760, H = 300, PL = 56, PR = 16, PT = 20, PB = 46;
  const yMax = Math.max(2, dscr * 1.2, ...grid.flatMap((g) => g.ratios));
  const x = (i: number) => PL + (i / (grid.length - 1)) * (W - PL - PR);
  const y = (v: number) => PT + (1 - Math.min(v, yMax) / yMax) * (H - PT - PB);
  const seriesColors = ["#9ca3af", "#f59e0b", "#0f766e", "#1B3A6B"];

  return (
    <>
      <SEOHead
        title="Adult Family Home Occupancy & Financing Calculator | Can a buyer get the loan? | AFH Club"
        description="See whether a buyer can finance an adult family home at a given price and occupancy. Models net operating income, SBA debt service, and lender coverage (DSCR) by number of residents, with a price-sensitivity chart."
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Adult Family Home Occupancy & Financing Calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "All",
          url: "https://realpropertyplanning.com/afh-club/afh-financing-calculator",
          description: "Shows at what occupancy and price a lender will finance a Washington adult family home purchase.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <Header />
      <main>
        <div style={{ background: "#f5f2ec", padding: "48px 24px 40px", borderBottom: `3px solid ${TEAL}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto", paddingTop: "var(--header-height, 100px)" }}>
            <div style={{ marginBottom: 24 }}>
              <BackToCalculators accent={TEAL} />
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL_DARK, marginBottom: 10, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              For sellers &amp; buyers
            </p>
            <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2 }}>
              AFH Occupancy &amp; Financing Calculator
            </h1>
            <p style={{ fontSize: 18, fontFamily: "'DM Sans', system-ui, sans-serif", color: "#302b26", lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
              At this price, with this many residents, can a buyer get the loan? See how each empty bed changes what a lender will finance.
            </p>
          </div>
        </div>

        <div style={{ background: "#f5f2ec", padding: "2.5rem 1rem 3rem" }}>
          {/* Inputs */}
          <div style={card}>
            <div style={section}>The home</div>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 20 }}>
              <div>
                <label style={label}>Market (sets a typical rate)</label>
                <select style={input} value={market} onChange={(e) => pickMarket(e.target.value)}>
                  {bands.map((b) => (
                    <option key={b.market} value={b.market}>
                      {b.market.startsWith("king-") ? `King — ${b.label.replace(/ \(.*\)$/, "")}` : b.label}
                    </option>
                  ))}
                </select>
              </div>
              {field("Average monthly rate per resident ($)", rate, setRate, { step: 50, note: "Private-pay, Medicaid and specialty-contract residents averaged together. Use the rate sheet if you have it." })}
              {field("Licensed beds", beds, setBeds, { min: 1, max: 8 })}
              {field("Fixed operating costs per year ($)", fixed, setFixed, { step: 1000, note: "Costs that do not change with one more resident: base staff, insurance, utilities, licence, maintenance." })}
              {field("Variable cost per resident per year ($)", variable, setVariable, { step: 500, note: "Extra food, supplies and care hours for each added resident." })}
              {field("Replacement wages for owners' own work ($/yr)", wages, setWages, { step: 1000, note: "What a buyer must pay staff to replace the hours the owners work themselves. Lenders add this back." })}
            </div>

            <div style={section}>Price and financing</div>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {field("Price — property ($)", priceProperty, setPriceProperty, { step: 5000 })}
              {field("Price — business ($)", priceBusiness, setPriceBusiness, { step: 5000, note: "Licence, contracts and residents. Stating the split lets a buyer finance each part correctly." })}
              {field("Buyer down payment (%)", down, setDown, { step: 1, min: 0, max: 100, note: "SBA 7(a): typically 10%." })}
              {field("Loan interest rate (%)", loanRate, setLoanRate, { step: 0.05, note: "SBA 7(a) is Prime plus a spread; conventional on the house alone is lower." })}
              {field("Loan term (years)", term, setTerm, { min: 1, max: 30 })}
              {field("Annual property tax + insurance ($)", taxIns, setTaxIns, { step: 500 })}
              {field("Lender coverage requirement (×)", dscr, setDscr, { step: 0.05, note: "Net operating income ÷ annual debt service. Most SBA lenders want 1.25×; some accept 1.15×." })}
            </div>
          </div>

          {/* Results */}
          <div style={card}>
            <div style={section}>What the lender sees</div>
            <div className="fin-tiles" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 20 }}>
              {[
                ["Total price", money(total)],
                ["Annual debt service", money(debtService)],
                ["Net income the lender needs", money(needNOI)],
              ].map(([k, v]) => (
                <div key={k} style={{ background: "#f5f2ec", border: `2px solid ${TEAL}40`, borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 14, letterSpacing: ".1em", textTransform: "uppercase", color: "#5f6b66", fontWeight: 700 }}>{k}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: TEAL, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", fontSize: 16, borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${TEAL}` }}>
                    <th style={{ textAlign: "left", padding: "8px 6px" }}>By occupancy</th>
                    {rows.map((r) => (
                      <th key={r.n} style={{ padding: "8px 6px", textAlign: "center", whiteSpace: "nowrap" }}>
                        {r.n} of {beds} beds
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Annual gross income", (r: (typeof rows)[0]) => money(r.gross)],
                    ["Net operating income to a buyer", (r: (typeof rows)[0]) => money0(r.noi)],
                    ["Coverage ratio", (r: (typeof rows)[0]) => r.ratio.toFixed(2) + "×"],
                    ["Lender approves at this price?", (r: (typeof rows)[0]) => (r.ok ? "YES" : "NO")],
                    ["Cash to buyer after debt service", (r: (typeof rows)[0]) => money0(r.cash)],
                    ["Most a lender would finance", (r: (typeof rows)[0]) => money(r.maxPrice)],
                  ].map(([k, fn], i) => (
                    <tr key={k as string} style={{ borderBottom: "1px solid #eee", background: i === 3 || i === 5 ? "#f5f2ec" : undefined }}>
                      <td style={{ padding: "9px 6px", fontWeight: i === 2 || i === 3 || i === 5 ? 700 : 400 }}>{k as string}</td>
                      {rows.map((r) => (
                        <td
                          key={r.n}
                          style={{
                            padding: "9px 6px",
                            textAlign: "center",
                            fontWeight: 700,
                            color: i === 3 ? (r.ok ? TEAL : "#b91c1c") : INK,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {(fn as (r: (typeof rows)[0]) => string)(r)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 16, color: "#302b26", lineHeight: 1.6, margin: "16px 0 0" }}>
              A lender divides the home's net operating income by the annual loan payment and wants at least {dscr.toFixed(2)}×. Net operating income here is what a <strong>buyer</strong> nets — after paying staff to replace the owners' own hours — which is why it is lower than what an owner-operator takes home. The last row is the most a lender would finance at each occupancy; compare it to the price to see the gap each resident closes.
            </p>
          </div>

          {/* Chart */}
          <div style={card}>
            <div style={section}>Coverage ratio by purchase price</div>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Coverage ratio at each purchase price for each occupancy, against the lender requirement" style={{ display: "block", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              {[0, 0.5, 1, 1.5, 2, 2.5, 3].filter((v) => v <= yMax).map((v) => (
                <g key={v}>
                  <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="#e5e7eb" />
                  <text x={PL - 8} y={y(v) + 4} fontSize="12" textAnchor="end" fill="#5f6b66">{v.toFixed(2)}×</text>
                </g>
              ))}
              <line x1={PL} x2={W - PR} y1={y(dscr)} y2={y(dscr)} stroke="#b91c1c" strokeWidth="2" strokeDasharray="6 4" />
              <text x={W - PR} y={y(dscr) - 6} fontSize="12" textAnchor="end" fill="#b91c1c" fontWeight="700">Lender requirement {dscr.toFixed(2)}×</text>
              {grid.map((g, i) => (
                <text key={g.p} x={x(i)} y={H - PB + 18} fontSize="12" textAnchor="middle" fill="#5f6b66">{"$" + (g.p / 1e6).toFixed(2) + "M"}</text>
              ))}
              {rows.map((r, si) => {
                const pts = grid.map((g, i) => `${x(i)},${y(g.ratios[si])}`).join(" ");
                const col = seriesColors[(si + 4 - rows.length) % 4];
                return (
                  <g key={r.n}>
                    <polyline points={pts} fill="none" stroke={col} strokeWidth="3" strokeLinejoin="round" />
                    {grid.map((g, i) => <circle key={i} cx={x(i)} cy={y(g.ratios[si])} r="3.5" fill={col} />)}
                    <text x={x(grid.length - 1) + 6} y={y(grid[grid.length - 1].ratios[si]) + 4} fontSize="12" fill={col} fontWeight="700">{r.n} beds</text>
                  </g>
                );
              })}
              <text x={(PL + W - PR) / 2} y={H - 6} fontSize="12" textAnchor="middle" fill="#5f6b66">Total purchase price</text>
            </svg>
            <p style={{ fontSize: 16, color: "#302b26", lineHeight: 1.6, margin: "12px 0 0" }}>
              Each line is one occupancy level. Where a line sits above the dashed requirement, a lender can approve that price. The chart re-centres on the price you enter.
            </p>
          </div>

          <p style={{ maxWidth: 900, margin: "0 auto", fontSize: 15, color: "#5f6b66", lineHeight: 1.6 }}>
            Working estimates for discussion. SBA 7(a) rates are Prime plus a spread and change with the market; a buyer's actual terms depend on their lender and file. Not a loan quote or an appraisal. Private-pay defaults come from David Stein's reviewed ranges for King, Snohomish and Pierce counties.
          </p>
        </div>
        <style>{`@media (max-width: 640px) { .fin-grid { grid-template-columns: 1fr !important; } .fin-tiles { grid-template-columns: 1fr !important; } }`}</style>
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHFinancingCalculator;
