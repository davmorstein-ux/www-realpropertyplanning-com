import { useState } from "react";
import AFHStepsBar from "@/components/AFHStepsBar";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import AFHRevenueBuilder from "@/components/AFHRevenueBuilder";
import BackToCalculators from "@/components/BackToCalculators";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import IntentCTA from "@/components/IntentCTA";
import ArticleCover from "@/components/ArticleCover";
import { CalcShell, CalcSection, CalcField, CalcSegment, CalcHero, CalcStats, CalcBars, CalcWaiting, CalcFoot, AFH_TOOL_COLOR } from "@/components/calc/CalcKit";

/**
 * AFH ROI Calculator (rebuilt Oct 3, 2026 on the premium calculator kit,
 * src/components/calc/CalcKit.tsx, in AFH green).
 *
 * Was DOM-scripted with a "Calculate" button, a browser alert for missing
 * fields and a random-number "odometer". Now plain React state: results update
 * as soon as purchase price, down payment and revenue are entered. The maths is
 * unchanged: standard amortised mortgage; NOI = revenue × occupancy − expenses;
 * cash-on-cash = (NOI − annual debt service) ÷ cash invested.
 */
const C = AFH_TOOL_COLOR;
const num = (s: string) => {
  const n = parseFloat(s.replace(/[$,\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
};
const usd = (n: number) => (n < 0 ? "−" : "") + "$" + Math.round(Math.abs(n)).toLocaleString("en-US");
const pct = (n: number) => `${(Math.round(n * 10) / 10).toFixed(1)}%`;

export function roiResults(i: { price: number; downPct: number; rate: number; term: number; rev: number; exp: number; occ: number }) {
  const down = i.price * (i.downPct / 100);
  const loan = i.price - down;
  const mr = i.rate / 100 / 12;
  const n = i.term * 12;
  const mortgage = loan <= 0 ? 0 : mr === 0 ? loan / n : (loan * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1);
  const annualDebt = mortgage * 12;
  const revenue = i.rev * (i.occ / 100);
  const noi = revenue - i.exp;
  const cashFlow = noi - annualDebt;
  return {
    down,
    mortgage,
    noi,
    cashFlow,
    roi: down > 0 ? (cashFlow / down) * 100 : 0,
    capRate: i.price > 0 ? (noi / i.price) * 100 : 0,
    margin: revenue > 0 ? (noi / revenue) * 100 : 0,
    dscr: annualDebt > 0 ? noi / annualDebt : 0,
  };
}

const AFHROICalculator = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("7.25");
  const [term, setTerm] = useState("30");
  const [downMode, setDownMode] = useState<"pct" | "usd">("pct");
  const [down, setDown] = useState("25");
  const [rev, setRev] = useState("");
  const [exp, setExp] = useState("");
  const [beds, setBeds] = useState("6");
  const [occ, setOcc] = useState("83");

  const p = num(price);
  const downPct = downMode === "pct" ? num(down) : p > 0 ? (num(down) / p) * 100 : 0;
  const ready = p > 0 && num(rev) > 0 && downPct > 0;
  const r = roiResults({ price: p, downPct, rate: num(rate), term: num(term) || 30, rev: num(rev), exp: num(exp), occ: num(occ) || 0 });

  const switchMode = (m: "pct" | "usd") => {
    if (m === downMode) return;
    if (p > 0 && num(down) > 0) setDown(m === "usd" ? String(Math.round(p * (num(down) / 100))) : String(Math.round((num(down) / p) * 1000) / 10));
    setDownMode(m);
  };

  return (
    <>
      <SEOHead
        title="Adult Family Home ROI Calculator | Washington State | Real Property Planning"
        description="Free ROI calculator for Washington adult family homes. Estimate cash flow, cap rate, and return on an AFH purchase using resident capacity, private-pay and Medicaid rates, staffing, and financing costs."
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Adult Family Home ROI Calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "All",
          url: "https://realpropertyplanning.com/afh-club/afh-roi-calculator",
          description: "Estimate cash flow, cap rate, and return on investment for a Washington State adult family home purchase.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <Header />
      <main>
        <AFHStepsBar current={3} />
        <div style={{ background: "#faf8f4", padding: "48px 24px 36px", borderBottom: `3px solid ${C}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <BackToCalculators accent={C} />
            </div>
            <ArticleCover src="/afh-roi-calculator-cover-v2.webp" alt="Cover art: AFH ROI Calculator" width={1024} height={1365} />
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C, marginBottom: 10, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
              For buyers &amp; investors
            </p>
            <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontWeight: 700, color: "#272421", marginBottom: 12, lineHeight: 1.2 }}>
              AFH ROI Calculator
            </h1>
            <p style={{ fontSize: 18, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", color: "#1c1917", lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
              Know your numbers before you commit. Analyze cash-on-cash return, cap rate, NOI, and monthly cash flow.
            </p>
          </div>
        </div>

        <div style={{ background: "#faf8f4", padding: "2.5rem 1rem 3rem" }}>
          <CalcShell color={C} icon="chart" eyebrow="AFH Club Calculator" title="Return on an Adult Family Home" subtitle="Cash flow, cap rate and cash-on-cash return for a purchase">
            <CalcSection title="The purchase">
              <div className="ck-grid">
                <CalcField label="Purchase price" htmlFor="r-price">
                  <input id="r-price" className="ck-input" inputMode="decimal" placeholder="850,000" value={price} onChange={(e) => setPrice(e.target.value)} />
                </CalcField>
                <CalcField
                  label="Down payment"
                  htmlFor="r-down"
                  suffix={p > 0 && num(down) > 0 ? (downMode === "pct" ? `= ${usd(p * (num(down) / 100))}` : `= ${pct(downPct)}`) : undefined}
                >
                  <input id="r-down" className="ck-input" inputMode="decimal" value={down} onChange={(e) => setDown(e.target.value)} />
                  <CalcSegment label="Down payment as" value={downMode} onChange={switchMode} options={[{ value: "pct", label: "%" }, { value: "usd", label: "$" }]} />
                </CalcField>
                <CalcField label="Interest rate (%)" htmlFor="r-rate">
                  <input id="r-rate" className="ck-input" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} />
                </CalcField>
                <CalcField label="Loan term" htmlFor="r-term">
                  <select id="r-term" className="ck-input" value={term} onChange={(e) => setTerm(e.target.value)}>
                    {[30, 25, 20, 15].map((y) => (
                      <option key={y} value={y}>{y} years</option>
                    ))}
                  </select>
                </CalcField>
              </div>
            </CalcSection>

            <CalcSection title="Revenue & operations">
              <AFHRevenueBuilder
                accent={C}
                onApply={(b) => {
                  setRev(String(Math.round(b.annualFull)));
                  if (b.beds >= 1 && b.beds <= 8) setBeds(String(b.beds));
                  setOcc(String(b.occupancy));
                  document.getElementById("r-rev")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              />
              <div className="ck-grid" style={{ marginTop: 14 }}>
                <CalcField label="Annual revenue at full occupancy" htmlFor="r-rev" hint="Use the builder above, or the seller's actual P&L figure. Occupancy is applied to it.">
                  <input id="r-rev" className="ck-input" inputMode="decimal" placeholder="288,000" value={rev} onChange={(e) => setRev(e.target.value)} />
                </CalcField>
                <CalcField label="Annual operating expenses" htmlFor="r-exp" hint="Staff, food, utilities, insurance, license fees. Not the mortgage.">
                  <input id="r-exp" className="ck-input" inputMode="decimal" placeholder="164,000" value={exp} onChange={(e) => setExp(e.target.value)} />
                </CalcField>
                <CalcField label="Licensed capacity" htmlFor="r-cap">
                  <select id="r-cap" className="ck-input" value={beds} onChange={(e) => setBeds(e.target.value)}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((b) => (
                      <option key={b} value={b}>{b} {b === 1 ? "bed" : "beds"}</option>
                    ))}
                  </select>
                </CalcField>
                <CalcField label="Occupancy (%)" htmlFor="r-occ">
                  <input id="r-occ" className="ck-input" inputMode="decimal" value={occ} onChange={(e) => setOcc(e.target.value)} />
                </CalcField>
              </div>
            </CalcSection>

            {ready ? (
              <>
                <CalcHero
                  label="Estimated cash-on-cash return"
                  value={pct(r.roi)}
                  tone={r.roi < 0 ? "bad" : undefined}
                  sub={`${usd(r.cashFlow / 12)} a month in cash flow after the mortgage`}
                  note={num(exp) === 0 ? "No operating expenses entered yet, so this is far too high. Add them above." : undefined}
                />
                <CalcStats
                  items={[
                    { label: "Annual NOI", value: usd(r.noi), tone: r.noi < 0 ? "bad" : undefined },
                    { label: "Cap rate", value: pct(r.capRate) },
                    { label: "Monthly mortgage", value: usd(r.mortgage) },
                    { label: "Cash invested", value: usd(r.down) },
                    { label: "Operating margin", value: pct(r.margin) },
                    { label: "Debt coverage", value: r.dscr > 0 ? `${r.dscr.toFixed(2)}x` : "—", tone: r.dscr > 0 && r.dscr < 1 ? "bad" : undefined },
                  ]}
                />
                <CalcBars
                  items={[
                    { label: "Cash-on-cash ROI", pct: (Math.max(0, r.roi) / 30) * 100, value: pct(r.roi) },
                    { label: "Cap rate", pct: (r.capRate / 20) * 100, value: pct(r.capRate) },
                    { label: "Operating margin", pct: Math.max(0, r.margin), value: pct(r.margin) },
                    { label: "Debt coverage", pct: (r.dscr / 2) * 100, value: r.dscr > 0 ? `${r.dscr.toFixed(2)}x` : "—", gold: true },
                  ]}
                />
              </>
            ) : (
              <CalcWaiting>Enter the purchase price, down payment and annual revenue to see the return.</CalcWaiting>
            )}

            <CalcFoot
              actions={
                <>
                  <Link to="/afh-club/afh-valuation-estimator">Estimate the value →</Link>
                  <Link to="/contact">Ask {FEATURED_BROKER.role} about a deal →</Link>
                </>
              }
            >
              Estimates for planning only. Actual returns depend on financing terms, occupancy, staffing costs, rates, rules and the
              market. Bars are scaled to 30% for return, 20% for cap rate and 2.0x for debt coverage.
            </CalcFoot>
          </CalcShell>
        </div>

        <BackToAFHClub />
        <IntentCTA
          heading="Considering an AFH purchase?"
          body="The numbers here are only as good as the census and rates behind them. Ask how to separate the real estate value from the business opportunity before you commit."
          buttonText="Ask about the numbers"
          reason="afh-buy-sell"
          professional="broker"
        />
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;
