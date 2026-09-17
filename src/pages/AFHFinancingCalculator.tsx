import React, { useMemo, useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import BackToCalculators from "@/components/BackToCalculators";
import PageFAQ from "@/components/PageFAQ";
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

const FAQS = [
  {
    question: "How much income does an adult family home need for a buyer to get an SBA loan?",
    answer:
      "Lenders divide the home's net operating income by the annual loan payment (principal, interest, property tax and insurance) and want the result to be at least about 1.25× — one and a quarter times the payment. So the minimum net income is roughly 1.25 times the annual debt service at the proposed price. For a $2 million purchase financed with a 10%-down SBA 7(a) loan at current rates, that is in the region of $250,000 a year.",
  },
  {
    question: "Why is the income lower than what the owner takes home?",
    answer:
      "Most adult family homes are owner-operated: the owners provide many of the care hours themselves. A buyer who will not work those hours has to pay staff to cover them, so lenders subtract replacement wages before they count the income. A home that nets $150,000 to its owners may net far less to a buyer on paper.",
  },
  {
    question: "Does occupancy really change whether a buyer can get financing?",
    answer:
      "Yes, more than almost anything else. Each additional resident adds a full year of rate to the top line while adding little to costs, because the house, licence, insurance and base staff are already paid for. Two residents can move a home from a loan the lender declines to one it approves at full price. Lenders underwrite last year's tax returns, so occupancy must be real, not projected.",
  },
  {
    question: "What is an SBA 7(a) loan and why do AFH buyers use it?",
    answer:
      "It is a bank loan partly guaranteed by the U.S. Small Business Administration, which lets the bank accept about 10% down and terms up to 25 years when real estate is included. The rate is variable, set at the WSJ Prime rate plus a spread. Buyers use it because few can put 25% down on a $2 million home. The SBA 504 program is an alternative for the real estate portion at a lower fixed rate.",
  },
  {
    question: "What can a seller do if the numbers do not work at the asking price?",
    answer:
      "Fill empty beds before or during the listing; state the price split between property and business so each can be financed correctly; and consider carrying the business portion on seller financing, which removes the buyer's most expensive loan. Lowering the price is the last lever, not the first.",
  },
];

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
  const [beds, setBeds] = useState(6);
  // Monthly rate for each bed; 0 = empty. Six filled by default at a typical Snohomish rate.
  const [bedRates, setBedRates] = useState<number[]>([7000, 7000, 7000, 7000, 0, 0, 0, 0]);
  const [fixed, setFixed] = useState(150000);
  const [variable, setVariable] = useState(18000);
  const [buyerType, setBuyerType] = useState<"operator" | "investor">("operator");
  const [wagesInput, setWagesInput] = useState(90000);
  // An owner-operator does the owners' work themselves, so a lender does not
  // subtract replacement wages. An investor hires staff for it.
  const wages = buyerType === "investor" ? wagesInput : 0;
  const [priceProperty, setPriceProperty] = useState(1500000);
  // Business financing (optional). The business — licence, contracts, residents —
  // is often priced separately from the house. However it is paid for, any loan
  // on it is serviced from the same income, so a lender counts that payment too.
  const [priceBusiness, setPriceBusiness] = useState(150000);
  const [bizMode, setBizMode] = useState<"cash" | "sameLoan" | "carry">("sameLoan");
  const [carryRate, setCarryRate] = useState(7);
  const [carryTerm, setCarryTerm] = useState(5);
  const [down, setDown] = useState(10);
  const [loanRate, setLoanRate] = useState(9.5);
  const [term, setTerm] = useState(25);
  const [taxIns, setTaxIns] = useState(14000);
  const [dscr, setDscr] = useState(1.25);

  const pickMarket = (m: string) => {
    setMarket(m);
    const b = privatePayBandByMarket(m);
    if (b) {
      const typical = Math.round((b.low + b.high) / 2 / 50) * 50;
      // Only re-fill beds that already have an amount; empty beds stay empty.
      setBedRates((prev) => prev.map((v) => (v > 0 ? typical : 0)));
    }
  };
  const setBedRate = (i: number, v: number) => setBedRates((prev) => prev.map((x, k) => (k === i ? Math.max(0, v) : x)));

  // Today's census from the per-bed boxes
  const filled = bedRates.slice(0, beds).filter((v) => v > 0).sort((a, b) => b - a);
  const filledCount = filled.length;
  const monthlyTotal = filled.reduce((a, b) => a + b, 0);
  const avgRate = filledCount > 0 ? monthlyTotal / filledCount : 0;
  /** Monthly gross at n residents: today's rates first, then the average of today's rates for each added bed. */
  const monthlyAt = (n: number) =>
    n <= filledCount ? filled.slice(0, n).reduce((a, b) => a + b, 0) : monthlyTotal + (n - filledCount) * avgRate;
  const rate = avgRate;

  // Derived
  const bizIncluded = bizMode === "sameLoan" ? priceBusiness : 0;
  const total = priceProperty + bizIncluded; // amount on the main loan
  const loan = total * (1 - down / 100);
  const pi = annualPI(loan, loanRate / 100, term);
  // Seller carry on the business: typically 100% financed on its own note
  const carryPI = bizMode === "carry" ? annualPI(priceBusiness, carryRate / 100, carryTerm) : 0;
  const debtService = pi + taxIns + carryPI;
  const dealTotal = priceProperty + priceBusiness;
  const needNOI = debtService * dscr;

  // Computed on every render: cheap, and it guarantees the table and chart
  // follow every input (a memo with a missed dependency here once left the
  // chart looking frozen).
  const rows = (() => {
    const out = [];
    const from = Math.max(1, beds - 3);
    for (let n = from; n <= beds; n++) {
      const gross = monthlyAt(n) * 12;
      const noi = gross - fixed - n * variable - wages;
      const ratio = debtService > 0 ? noi / debtService : 0;
      // Most a lender would finance on the main loan, then expressed as a property price
      const maxPrincipal = principalFor(Math.max(0, noi / dscr - taxIns - carryPI), loanRate / 100, term);
      const maxPrice = Math.max(0, maxPrincipal / (1 - down / 100) - bizIncluded);
      out.push({ n, gross, noi, ratio, ok: ratio >= dscr, cash: noi - debtService, maxPrice });
    }
    return out;
  })();

  // Price sensitivity across a FIXED axis matching the slider ($500K–$3M).
  // A fixed axis is what lets the slider feel smooth: only the marker moves,
  // never the chart under it. (An earlier version re-centred the axis on the
  // entered price in $100K steps, which made the marker jump.)
  const SLIDER_MIN = 500000, SLIDER_MAX = 3000000;
  const gridStep = 250000;
  const dsAtProperty = (p: number) => annualPI((p + bizIncluded) * (1 - down / 100), loanRate / 100, term) + taxIns + carryPI;
  const grid = Array.from({ length: (SLIDER_MAX - SLIDER_MIN) / gridStep + 1 }, (_, i) => SLIDER_MIN + i * gridStep).map((p) => {
    const ds = dsAtProperty(p);
    return { p, ratios: rows.map((r) => (ds > 0 ? r.noi / ds : 0)) };
  });

  const fmtIn = (v: number) => (Number.isFinite(v) ? v : 0);
  const num = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(fmtIn(parseFloat(e.target.value)));

  // Rendered as a <div>, not <label>: index.css forces every <label> in main
  // down to 14px "eyebrow" size, which made this page hard to read.
  const label: React.CSSProperties = {
    display: "block",
    fontSize: 17,
    color: "#141210",
    marginBottom: 7,
    fontWeight: 700,
    fontFamily: "'DM Sans', system-ui, sans-serif",
  };
  const input: React.CSSProperties = {
    width: "100%",
    background: "#fff",
    border: `2px solid ${TEAL}`,
    borderRadius: 6,
    color: "#141210",
    fontSize: 18,
    padding: "11px 12px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    boxSizing: "border-box",
    display: "block",
  };
  const section: React.CSSProperties = {
    fontSize: 22,
    color: TEAL_DARK,
    marginBottom: 14,
    fontWeight: 700,
    borderBottom: `2px solid ${TEAL}`,
    paddingBottom: 6,
  };
  const card: React.CSSProperties = {
    background: "#fff",
    border: `2px solid ${TEAL}`,
    borderRadius: 14,
    padding: "1.5rem 1.25rem",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    maxWidth: 900,
    margin: "0 auto 24px",
  };
  const field = (lbl: string, value: number, set: (v: number) => void, opts: { step?: number; min?: number; max?: number; note?: string } = {}) => {
    const isMoney = lbl.includes("($");
    return (
      <div>
        <div style={label}>{lbl}</div>
        <input type="number" aria-label={lbl} style={input} value={value} onChange={num(set)} step={opts.step ?? 1} min={opts.min} max={opts.max} onFocus={(e) => e.currentTarget.select()} />
        {isMoney && (
          <div style={{ fontSize: 17, fontWeight: 700, color: TEAL_DARK, marginTop: 5 }}>= {money(value)}{lbl.includes("/yr") || lbl.includes("per year") || lbl.includes("Annual") ? " a year" : ""}</div>
        )}
        {opts.note && <div style={{ fontSize: 17, color: "#2b2825", marginTop: 4, lineHeight: 1.5 }}>{opts.note}</div>}
      </div>
    );
  };
  // Sanity checks: catch a stray zero before it produces nonsense
  const grossToday = monthlyTotal * 12;
  const costsToday = fixed + filledCount * variable + wages;
  const warnings: string[] = [];
  if (grossToday > 0 && fixed > grossToday) warnings.push(`Fixed operating costs (${money(fixed)}) are larger than everything the home takes in a year (${money(grossToday)}). Check the fixed-cost figure — it is usually 25–45% of gross.`);
  else if (grossToday > 0 && costsToday > grossToday) warnings.push(`Costs (${money(costsToday)}) are larger than the home's gross income (${money(grossToday)}). Check the fixed costs, variable cost and replacement wages.`);
  if (avgRate > 0 && variable > avgRate * 12) warnings.push(`Variable cost per resident (${money(variable)} a year) is more than a resident pays (${money(avgRate * 12)} a year). Check the figure.`);
  if (loanRate > 20) warnings.push("Interest rate looks too high — enter it as a percentage, e.g. 9.5.");
  if (down > 60) warnings.push("Down payment looks too high — enter it as a percentage, e.g. 10.");

  // Chart geometry (inline SVG, responsive via viewBox)
  const W = 760, H = 320, PL = 60, PR = 118, PT = 24, PB = 50;
  const yMax = Math.max(2, dscr * 1.2, ...grid.flatMap((g) => g.ratios));
  const x = (i: number) => PL + (i / (grid.length - 1)) * (W - PL - PR);
  const y = (v: number) => PT + (1 - Math.min(Math.max(v, 0), yMax) / yMax) * (H - PT - PB);
  const xPrice = (p: number) => PL + ((p - grid[0].p) / (grid[grid.length - 1].p - grid[0].p)) * (W - PL - PR);
  /** Coverage ratio for a given occupancy row at an arbitrary price. */
  const ratioAt = (noi: number, p: number) => {
    const ds = dsAtProperty(p);
    return ds > 0 ? noi / ds : 0;
  };
  const inRange = priceProperty >= grid[0].p && priceProperty <= grid[grid.length - 1].p;
  const seriesColors = ["#6b7280", "#d97706", "#0f766e", "#1B3A6B"];

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
            <p style={{ fontSize: 19, fontFamily: "'DM Sans', system-ui, sans-serif", color: "#141210", lineHeight: 1.7, maxWidth: 640, margin: 0 }}>
              At this price, with this many residents, can a buyer get the loan? See how each empty bed changes what a lender will finance.
            </p>
          </div>
        </div>

        <div style={{ background: "#f5f2ec", padding: "2.5rem 1rem 3rem" }}>
          {/* How lenders decide */}
          <div style={{ ...card, background: "#ffffff" }}>
            <div style={section}>How a lender decides</div>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "#141210", margin: "0 0 12px" }}>
              When a buyer applies for a loan to purchase an adult family home, the lender does not ask what the home <em>could</em> earn. It takes last year's income, subtracts operating costs and the wages needed to replace the hours the owners work themselves, and divides what is left by the annual loan payment. That number is the <strong>coverage ratio</strong>, and most SBA lenders want it to be at least <strong>1.25×</strong> — the income must be one and a quarter times the loan payment. (It is a multiple, not a percentage.)
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: "#141210", margin: 0 }}>
              Below that, the loan is declined or reduced — and the buyer has to offer less. This calculator shows the minimum income a lender needs at a given price, how close the home is at each occupancy, and the most a lender would finance with the residents it has today — for an owner-operator who will work in the home, or for an investor who will hire staff. Those two buyers get very different answers for the same home.
            </p>
          </div>

          {/* Inputs */}
          <div style={card}>
            <div style={section}>The home</div>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 20 }}>
              <div>
                <div style={label}>Market (sets a typical rate)</div>
                <select aria-label="Market" style={input} value={market} onChange={(e) => pickMarket(e.target.value)}>
                  {bands.map((b) => (
                    <option key={b.market} value={b.market}>
                      {b.market.startsWith("king-") ? `King — ${b.label.replace(/ \(.*\)$/, "")}` : b.label}
                    </option>
                  ))}
                </select>
              </div>
              {field("Licensed beds", beds, setBeds, { min: 1, max: 8, note: "Sets how many bed boxes appear below." })}
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={label}>Monthly rate for each bed ($) — leave empty beds blank</div>
              <div className="fin-beds" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(beds, 4)}, 1fr)`, gap: 12 }}>
                {Array.from({ length: beds }, (_, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: TEAL_DARK, marginBottom: 4 }}>Bed {i + 1}</div>
                    {/* Empty bed shows as an empty box, not "0", so typing "8000" gives
                        8000 rather than "08000". Selecting on focus makes overtyping easy. */}
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="0"
                      style={{ ...input, textAlign: "center", fontWeight: 700, fontSize: 18 }}
                      value={bedRates[i] === 0 ? "" : bedRates[i]}
                      step={50}
                      min={0}
                      onFocus={(e) => e.currentTarget.select()}
                      onChange={(e) => setBedRate(i, e.target.value === "" ? 0 : fmtIn(parseFloat(e.target.value)))}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, background: "#f5f2ec", border: `2px solid ${TEAL}`, borderRadius: 10, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: INK }}>
                  Total monthly income today: <span style={{ color: TEAL, fontSize: 24 }}>{money(monthlyTotal)}</span>
                </div>
                <div style={{ fontSize: 18, color: "#141210", fontWeight: 600 }}>
                  {filledCount} of {beds} beds filled · {money(monthlyTotal * 12)} a year
                </div>
              </div>
              <div style={{ fontSize: 17, color: "#2b2825", marginTop: 8, lineHeight: 1.5 }}>
                Empty beds are modelled at the average of today's rates ({money(avgRate)}) when the table adds residents.
              </div>
            </div>

            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 20 }}>
              {field("Fixed operating costs per year ($)", fixed, setFixed, { step: 1000, note: "Costs that do not change with one more resident: base staff, insurance, utilities, licence, maintenance." })}
              {field("Variable cost per resident per year ($)", variable, setVariable, { step: 500, note: "Extra food, supplies and care hours for each added resident." })}
            </div>

            <div style={{ ...section, marginTop: 24 }}>Who is the buyer?</div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#141210", margin: "0 0 12px" }}>
              This changes the answer more than anything else. An <strong>owner-operator</strong> does the care and management work themselves, so a lender counts all of the home's income. An <strong>investor</strong> hires staff to do that work, so the lender subtracts those wages first — and the same home supports a much lower price.
            </p>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 20 }}>
              <div>
                <div style={label}>Buyer type</div>
                <select aria-label="Buyer type" style={input} value={buyerType} onChange={(e) => setBuyerType(e.target.value as "operator" | "investor")}>
                  <option value="operator">Owner-operator — will work in the home</option>
                  <option value="investor">Investor — will hire staff to run it</option>
                </select>
              </div>
              {buyerType === "investor" && field("Replacement wages for the owners' work ($/yr)", wagesInput, setWagesInput, { step: 1000, note: "What the investor must pay staff to replace the hours the current owners work themselves." })}
            </div>

            <div style={section}>Price and financing</div>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {field("Property price ($)", priceProperty, setPriceProperty, { step: 5000, note: "The house. This is the price the calculator tests." })}
              {field("Buyer down payment (%)", down, setDown, { step: 1, min: 0, max: 100, note: "SBA 7(a): typically 10%. Conventional on a house: 20–25%." })}
              {field("Loan interest rate (%)", loanRate, setLoanRate, { step: 0.05, note: "SBA 7(a) is Prime plus a spread; conventional on the house alone is lower." })}
              {field("Loan term (years)", term, setTerm, { min: 1, max: 30 })}
              {field("Annual property tax + insurance ($)", taxIns, setTaxIns, { step: 500 })}
              {field("Lender coverage requirement (×)", dscr, setDscr, { step: 0.05, note: "Net operating income ÷ annual debt service. Most SBA lenders want 1.25×; some accept 1.15×." })}
            </div>

            <div style={{ ...section, marginTop: 24 }}>Is the buyer also financing the business?</div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#141210", margin: "0 0 12px" }}>
              The licence, contracts and residents are often priced separately from the house. However the buyer pays for them, any loan on the business is repaid from the same income — so a lender counts that payment too. Choose how it is handled:
            </p>
            <div className="fin-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div>
                <div style={label}>Business financing</div>
                <select aria-label="Business financing" style={input} value={bizMode} onChange={(e) => setBizMode(e.target.value as "cash" | "sameLoan" | "carry")}>
                  <option value="cash">No — buyer pays cash for the business</option>
                  <option value="sameLoan">Yes — in the same loan as the house</option>
                  <option value="carry">Yes — seller carries a note on the business</option>
                </select>
              </div>
              {field("Business price ($)", priceBusiness, setPriceBusiness, { step: 5000, note: bizMode === "cash" ? "Paid in cash: does not add to the buyer's loan payments." : bizMode === "carry" ? "Financed on a separate note from the seller, on the terms below." : "Added to the main loan at the rate and term above." })}
              {bizMode === "carry" && field("Seller-carry interest rate (%)", carryRate, setCarryRate, { step: 0.25, note: "Usually below the SBA rate — that is the point of carrying it." })}
              {bizMode === "carry" && field("Seller-carry term (years)", carryTerm, setCarryTerm, { min: 1, max: 15, note: "Short notes mean higher payments; 5–7 years is common." })}
            </div>
          </div>

          {/* Results */}
          <div style={card}>
            <div style={section}>What the lender sees</div>
            {warnings.length > 0 && (
              <div role="alert" style={{ background: "#fef2f2", border: "2px solid #b91c1c", borderRadius: 8, padding: "12px 16px", marginBottom: 16, fontSize: 17, lineHeight: 1.55, color: "#7f1d1d" }}>
                <strong>Check your inputs:</strong>
                <ul style={{ margin: "6px 0 0", paddingLeft: 22 }}>
                  {warnings.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
            {(() => {
              // The other kind of buyer, for comparison, at today's occupancy
              const otherWages = buyerType === "investor" ? 0 : wagesInput;
              const otherNOI = monthlyTotal * 12 - fixed - filledCount * variable - otherWages;
              const otherMax = Math.max(0, principalFor(Math.max(0, otherNOI / dscr - taxIns - carryPI), loanRate / 100, term) / (1 - down / 100) - bizIncluded);
              const thisMax = rows.find((r) => r.n === filledCount)?.maxPrice ?? 0;
              const todayGross = monthlyTotal * 12;
              const todayNOI = todayGross - fixed - filledCount * variable - wages;
              const todayOk = debtService > 0 && todayNOI / debtService >= dscr;
              const first = rows.find((r) => r.ok);
              const perResident = avgRate * 12 - variable;
              const shortBy = perResident > 0 ? Math.max(0, Math.ceil((needNOI - todayNOI) / perResident)) : 0;
              return (
                <div style={{ background: "#e6f2f0", borderLeft: `6px solid ${TEAL}`, borderRadius: 8, padding: "16px 18px", marginBottom: 20, fontSize: 20, lineHeight: 1.6, color: INK }}>
                  At a property price of <strong>{money(priceProperty)}</strong>{bizMode !== "cash" ? <> (plus {money(priceBusiness)} for the business, {bizMode === "carry" ? "seller-carried" : "in the same loan"})</> : null}, a lender needs about <strong>{money(needNOI)}</strong> of net income a year. With today's <strong>{filledCount} of {beds}</strong> beds filled, this home produces <strong>{money0(todayNOI)}</strong>
                  {todayOk ? (
                    <> — <strong style={{ color: TEAL }}>the loan works today</strong>.</>
                  ) : first ? (
                    <> — <strong style={{ color: "#b91c1c" }}>{shortBy} more resident{shortBy === 1 ? "" : "s"}</strong> short. The loan first works at <strong>{first.n} residents</strong>.</>
                  ) : (
                    <> — short even with every bed filled. Lower the price, raise rates, or reduce costs.</>
                  )}
                  <div style={{ marginTop: 10, fontSize: 18, borderTop: `1px solid ${TEAL}55`, paddingTop: 10 }}>
                    Most a lender would finance at today's occupancy: <strong>{money(thisMax)}</strong> for {buyerType === "operator" ? "an owner-operator" : "an investor"} versus <strong>{money(otherMax)}</strong> for {buyerType === "operator" ? "an investor who hires staff" : "an owner-operator who works in the home"}.
                    {buyerType === "investor" && otherMax > thisMax ? " Marketing to owner-operators reaches the buyers who can pay more." : ""}
                  </div>
                </div>
              );
            })()}
            <div className="fin-tiles" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
              {[
                ["Property price", money(priceProperty)],
                ["Buyer's annual debt service", money(debtService)],
                ["Net income the lender needs", money(needNOI)],
                ["Total the buyer pays (house + business)", money(dealTotal)],
              ].map(([k, v]) => (
                <div key={k} style={{ background: "#f5f2ec", border: `2px solid ${TEAL}`, borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 17, color: "#141210", fontWeight: 700 }}>{k}</div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: TEAL, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", fontSize: 18, borderCollapse: "collapse", color: "#141210" }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${TEAL}` }}>
                    <th style={{ textAlign: "left", padding: "8px 6px" }}>By occupancy</th>
                    {rows.map((r) => (
                      <th key={r.n} style={{ padding: "8px 6px", textAlign: "center", whiteSpace: "nowrap", background: r.n === filledCount ? "#e6f2f0" : undefined }}>
                        {r.n} of {beds} beds{r.n === filledCount ? " (today)" : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Annual gross income", (r: (typeof rows)[0]) => money(r.gross)],
                    ["Net operating income to a buyer", (r: (typeof rows)[0]) => money0(r.noi)],
                    ["Coverage ratio", (r: (typeof rows)[0]) => r.ratio.toFixed(2) + "×"],
                    ["Lender approves at this property price?", (r: (typeof rows)[0]) => (r.ok ? "YES" : "NO")],
                    ["Cash to buyer after debt service", (r: (typeof rows)[0]) => money0(r.cash)],
                    ["Most a lender would finance — property price", (r: (typeof rows)[0]) => money(r.maxPrice)],
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
            <p style={{ fontSize: 18, color: "#141210", lineHeight: 1.6, margin: "16px 0 0" }}>
              A lender divides the home's net operating income by the annual loan payment and wants at least {dscr.toFixed(2)}×. Net operating income here is what the <strong>buyer you selected</strong> nets. For an investor that is after paying staff to replace the current owners' hours, which is why it is lower than what an owner-operator takes home. The last row is the highest property price a lender would finance at each occupancy, after any business financing; compare it to your asking price to see the gap each resident closes.
            </p>
          </div>

          {/* Chart */}
          <div style={card}>
            <div style={section}>Coverage ratio by property price</div>
            {/* Price slider — bound to the same property price as the input above */}
            <div style={{ background: "#e6f2f0", border: `2px solid ${TEAL}`, borderRadius: 10, padding: "14px 16px 10px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#141210" }}>Slide to change the property price</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: TEAL }}>{money(priceProperty)}</div>
              </div>
              <input
                type="range"
                aria-label="Property price"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                step={5000}
                value={Math.min(SLIDER_MAX, Math.max(SLIDER_MIN, priceProperty))}
                onChange={(e) => setPriceProperty(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: TEAL, height: 32, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, color: "#2b2825", fontWeight: 600 }}>
                <span>$500,000</span>
                <span>$3,000,000</span>
              </div>
              <div style={{ fontSize: 17, color: "#141210", marginTop: 6 }}>
                Every number on this page — the table, the verdict and the chart — follows the slider.
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Coverage ratio at each purchase price for each occupancy, against the lender requirement" style={{ display: "block", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              {[0, 0.5, 1, 1.5, 2, 2.5, 3].filter((v) => v <= yMax).map((v) => (
                <g key={v}>
                  <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="#d1d5db" />
                  <text x={PL - 8} y={y(v) + 4} fontSize="13" fontWeight="600" textAnchor="end" fill="#141210">{v.toFixed(2)}×</text>
                </g>
              ))}
              <line x1={PL} x2={W - PR} y1={y(dscr)} y2={y(dscr)} stroke="#b91c1c" strokeWidth="2" strokeDasharray="6 4" />
              {(() => {
                // Label on a white pill so the series lines never run through it
                const txt = `Lender requirement ${dscr.toFixed(2)}×`;
                const w = txt.length * 7.6 + 14, h = 20;
                const lx = PL + 6, ly = y(dscr) - 8 - h;
                return (
                  <g>
                    <rect x={lx} y={ly} width={w} height={h} rx="5" fill="#ffffff" stroke="#b91c1c" strokeWidth="1.5" />
                    <text x={lx + 7} y={ly + 14} fontSize="13" textAnchor="start" fill="#b91c1c" fontWeight="700">{txt}</text>
                  </g>
                );
              })()}
              {grid.map((g, i) => (i % 2 === 0 ? (
                <text key={g.p} x={x(i)} y={H - PB + 18} fontSize="13" fontWeight="600" textAnchor="middle" fill="#141210">{"$" + (g.p / 1e6).toFixed(1) + "M"}</text>
              ) : null))}
              {(() => {
                // Right-hand labels: start at each line's end, then push apart
                // (top to bottom) so no two are closer than 18px.
                const endY = rows.map((_, si) => y(grid[grid.length - 1].ratios[si]));
                const order = endY.map((v, i) => [v, i] as [number, number]).sort((a, b) => a[0] - b[0]);
                const placed: number[] = new Array(rows.length);
                let last = -Infinity;
                for (const [v, i] of order) {
                  const yy = Math.max(v, last + 18);
                  placed[i] = yy;
                  last = yy;
                }
                return rows.map((r, si) => {
                  const pts = grid.map((g, i) => `${x(i)},${y(g.ratios[si])}`).join(" ");
                  const col = seriesColors[(si + 4 - rows.length) % 4];
                  return (
                    <g key={r.n}>
                      <polyline points={pts} fill="none" stroke={col} strokeWidth="4" strokeLinejoin="round" />
                      <text x={x(grid.length - 1) + 8} y={placed[si] + 5} fontSize="14" fill={col} fontWeight="700">
                        {r.n} beds{r.n === filledCount ? " (today)" : ""}
                      </text>
                    </g>
                  );
                });
              })()}
              {inRange && (
                <g>
                  <line x1={xPrice(priceProperty)} x2={xPrice(priceProperty)} y1={PT} y2={H - PB} stroke="#1B3A6B" strokeWidth="2" strokeDasharray="3 3" />
                  <text x={xPrice(priceProperty)} y={PT - 8} fontSize="13" fontWeight="700" textAnchor="middle" fill="#1B3A6B">Your property price {money(priceProperty)}</text>
                  {(() => {
                    const vals = rows.map((r) => ratioAt(r.noi, priceProperty));
                    // Labels alternate right/left of the marker; within each side, push apart vertically.
                    const sides = vals.map((_, i) => (i % 2 === 0 ? 1 : -1));
                    const placed: number[] = new Array(vals.length);
                    for (const side of [1, -1]) {
                      const idx = vals.map((v, i) => [y(v), i] as [number, number]).filter(([, i]) => sides[i] === side).sort((a, b) => a[0] - b[0]);
                      let last = -Infinity;
                      for (const [yy, i] of idx) {
                        const py = Math.max(yy, last + 17);
                        placed[i] = py;
                        last = py;
                      }
                    }
                    return rows.map((r, i) => {
                      const v = vals[i];
                      const ok = v >= dscr;
                      const col = ok ? "#15803d" : "#b91c1c";
                      const mx = xPrice(priceProperty);
                      const tx = sides[i] === 1 ? mx + 12 : mx - 12;
                      const txt = v.toFixed(2) + "×";
                      const w = txt.length * 7.4 + 10;
                      return (
                        <g key={r.n}>
                          <circle cx={mx} cy={y(v)} r="7" fill={col} stroke="#fff" strokeWidth="2" />
                          <rect x={sides[i] === 1 ? tx - 5 : tx - w + 5} y={placed[i] - 10} width={w} height={18} rx="4" fill="#ffffff" opacity="0.9" />
                          <text x={tx} y={placed[i] + 4} fontSize="13" fontWeight="700" fill={col} textAnchor={sides[i] === 1 ? "start" : "end"}>{txt}</text>
                        </g>
                      );
                    });
                  })()}
                </g>
              )}
              <text x={(PL + W - PR) / 2} y={H - 6} fontSize="13" fontWeight="600" textAnchor="middle" fill="#141210">Property price</text>
            </svg>
            {/* Legend — HTML rather than SVG so it wraps cleanly on phones */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", marginTop: 14, fontSize: 18, color: "#141210", fontWeight: 600 }}>
              {rows.map((r, si) => {
                const col = seriesColors[(si + 4 - rows.length) % 4];
                return (
                  <div key={r.n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span aria-hidden="true" style={{ display: "inline-block", width: 34, height: 6, borderRadius: 3, background: col }} />
                    {r.n} of {beds} beds filled{r.n === filledCount ? " (today)" : ""}
                  </div>
                );
              })}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span aria-hidden="true" style={{ display: "inline-block", width: 34, height: 0, borderTop: "3px dashed #b91c1c" }} />
                Lender requirement ({dscr.toFixed(2)}×)
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span aria-hidden="true" style={{ display: "inline-block", width: 34, height: 0, borderTop: "3px dashed #1B3A6B" }} />
                The price you entered
              </div>
            </div>
            <div style={{ marginTop: 16, background: "#e6f2f0", borderLeft: `6px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px", fontSize: 18, lineHeight: 1.6, color: "#141210" }}>
              <strong>At your property price of {money(priceProperty)}:</strong>
              <ul style={{ margin: "6px 0 0", paddingLeft: 22 }}>
                {rows.map((r) => {
                  const v = ratioAt(r.noi, priceProperty);
                  const ok = v >= dscr;
                  // Highest price (to the nearest $5K) at which this occupancy still clears the requirement
                  const maxOk = r.maxPrice;
                  return (
                    <li key={r.n} style={{ marginBottom: 4 }}>
                      <strong>{r.n} beds</strong>{r.n === filledCount ? " (today)" : ""}: {v.toFixed(2)}× —{" "}
                      <span style={{ color: ok ? "#15803d" : "#b91c1c", fontWeight: 700 }}>{ok ? "above the requirement, lender can approve" : "below the requirement"}</span>
                      {!ok && maxOk > 0 ? <> · works at <strong>{money(Math.floor(maxOk / 5000) * 5000)}</strong> or less</> : null}
                      {!ok && maxOk <= 0 ? <> · does not work at any price</> : null}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p style={{ fontSize: 18, color: "#141210", lineHeight: 1.6, margin: "14px 0 0" }}>
              <strong>How to read it:</strong> each line shows how the home's coverage ratio changes as the purchase price goes up, for one number of residents. Where a line is <strong>above</strong> the red dashed requirement, a lender can approve that price at that occupancy; where it is <strong>below</strong>, the buyer would have to offer less or fill more beds. Find your price on the bottom axis and look up.
            </p>
          </div>

          <p style={{ maxWidth: 900, margin: "0 auto", fontSize: 17, color: "#2b2825", lineHeight: 1.6 }}>
            Working estimates for discussion. SBA 7(a) rates are Prime plus a spread and change with the market; a buyer's actual terms depend on their lender and file. Not a loan quote or an appraisal. Private-pay defaults come from David Stein's reviewed ranges for King, Snohomish and Pierce counties.
          </p>
        </div>
        <style>{`@media (max-width: 640px) { .fin-grid { grid-template-columns: 1fr !important; } .fin-tiles { grid-template-columns: 1fr !important; } .fin-beds { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        <PageFAQ faqs={FAQS} heading="Financing an Adult Family Home: Common Questions" eyebrow="Frequently Asked Questions" id="afh-financing" />
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHFinancingCalculator;
