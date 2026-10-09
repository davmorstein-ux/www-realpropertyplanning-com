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
import { CalcShell, CalcSection, CalcField, CalcHero, CalcStats, CalcBars, CalcWaiting, CalcFoot, AFH_TOOL_COLOR } from "@/components/calc/CalcKit";

/**
 * AFH Valuation Estimator (rebuilt Oct 3, 2026 on the premium calculator kit,
 * in AFH green). Live results from React state; the maths is unchanged:
 * business value = net income ÷ a risk-adjusted cap rate (15% base, moved by
 * payer mix, tenure, occupancy, staffing and license standing, ±2 points for
 * the range, bounded 10–25%), plus the property value if it is included.
 */
const C = AFH_TOOL_COLOR;
const num = (s: string) => {
  const n = parseFloat(s.replace(/[$,\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
};
const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const pct = (n: number) => `${(Math.round(n * 10) / 10).toFixed(1)}%`;

type Payer = "private" | "mixed" | "medicaid";
type Staff = "full" | "partial" | "none";
type Dshs = "active" | "conditions" | "expired" | "none";

export function valuation(i: { net: number; rev: number; beds: number; occ: number; yrs: number; payer: Payer; staff: Staff; prop: number; dshs: Dshs }) {
  let adj = 0;
  if (i.payer === "private") adj -= 0.02;
  else if (i.payer === "medicaid") adj += 0.02;
  if (i.yrs >= 7) adj -= 0.015;
  else if (i.yrs <= 1) adj += 0.025;
  if (i.occ >= 100) adj -= 0.01;
  else if (i.occ <= 50) adj += 0.02;
  if (i.staff === "full") adj -= 0.01;
  else if (i.staff === "none") adj += 0.015;
  if (i.dshs === "active") adj -= 0.005;
  else if (i.dshs === "conditions" || i.dshs === "expired") adj += 0.03;
  const lowCap = Math.max(0.1, 0.15 + adj - 0.02);
  const highCap = Math.min(0.25, 0.15 + adj + 0.02);
  const midCap = (lowCap + highCap) / 2;
  const bizMid = i.net / midCap;
  const totalMid = bizMid + i.prop;
  return {
    midCap,
    bizMid,
    totalMid,
    totalLow: i.net / highCap + i.prop,
    totalHigh: i.net / lowCap + i.prop,
    margin: i.rev > 0 ? (i.net / i.rev) * 100 : null,
    perBed: i.beds > 0 ? totalMid / i.beds : null,
    grm: i.rev > 0 ? totalMid / i.rev : null,
  };
}

const AFHValuationEstimator = () => {
  const [net, setNet] = useState("");
  const [rev, setRev] = useState("");
  const [beds, setBeds] = useState("6");
  const [occ, setOcc] = useState("83");
  const [yrs, setYrs] = useState("3");
  const [payer, setPayer] = useState<Payer>("private");
  const [staff, setStaff] = useState<Staff>("full");
  const [prop, setProp] = useState("");
  const [dshs, setDshs] = useState<Dshs>("active");

  const ready = num(net) > 0;
  const v = valuation({ net: num(net), rev: num(rev), beds: num(beds), occ: num(occ), yrs: num(yrs), payer, staff, prop: num(prop), dshs });

  const notes: { lead: string; text: string }[] = [];
  if (payer === "private") notes.push({ lead: "Private-pay mix", text: "lowers the risk premium, which supports value." });
  if (payer === "medicaid") notes.push({ lead: "Medicaid-heavy", text: "reimbursement risk raises the cap rate a buyer will use." });
  if (num(yrs) >= 7) notes.push({ lead: "Established operation", text: "tenure signals stability and lowers the cap rate." });
  if (num(occ) >= 100) notes.push({ lead: "Full occupancy", text: "shows demand at the home's maximum revenue." });
  if (num(occ) <= 50) notes.push({ lead: "Low occupancy", text: "a buyer will price in the risk of filling beds." });
  if (staff === "full") notes.push({ lead: "Full staff retained", text: "reduces transition risk for a buyer." });
  if (dshs === "conditions" || dshs === "expired") notes.push({ lead: "License issues", text: "significantly affect marketability." });
  if (v.margin !== null && v.margin > 40) notes.push({ lead: `Strong operating margin (${Math.round(v.margin)}%)`, text: "well positioned for the market." });
  else if (v.margin !== null && v.margin <= 30) notes.push({ lead: `Thin margin (${Math.round(v.margin)}%)`, text: "review expenses before listing." });

  const label = { private: "Private pay", mixed: "Mixed", medicaid: "Medicaid" };
  const o = num(occ);
  const y = num(yrs);

  return (
    <>
      <SEOHead
        title="Adult Family Home Valuation Estimator | Washington State | Real Property Planning"
        description="Free valuation estimator for Washington adult family homes. Estimate what an AFH business and property may be worth based on licensed capacity, occupancy, revenue, and operating expenses."
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Adult Family Home Valuation Estimator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "All",
          url: "https://realpropertyplanning.com/afh-club/afh-valuation-estimator",
          description: "Estimate the value of a Washington State adult family home business and property.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <Header />
      <main>
        <AFHStepsBar current={4} />
        <div style={{ background: "#faf8f4", padding: "48px 24px 36px", borderBottom: `3px solid ${C}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <BackToCalculators accent={C} />
            </div>
            <ArticleCover src="/afh-valuation-estimator-cover-v3.webp" alt="Cover art: AFH Valuation Estimator" width={1024} height={1365} />
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: C, marginBottom: 10, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>For sellers</p>
            <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontWeight: 700, color: "#272421", marginBottom: 12, lineHeight: 1.2 }}>AFH Valuation Estimator</h1>
            <p style={{ fontSize: 18, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", color: "#1c1917", lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
              Know what your AFH is worth before you list. Estimate business and property value using income capitalization.
            </p>
          </div>
        </div>

        <div style={{ background: "#faf8f4", padding: "2.5rem 1rem 3rem" }}>
          <CalcShell color={C} icon="scale" eyebrow="AFH Club Calculator" title="What an Adult Family Home Is Worth" subtitle="The business by income capitalization, plus the property if it is included">
            <CalcSection title="Business financials">
              <AFHRevenueBuilder
                accent={C}
                onApply={(b) => {
                  setRev(String(Math.round(b.annualOccupied)));
                  if (b.beds >= 3 && b.beds <= 8) setBeds(String(b.beds));
                  setOcc(String(b.occupancy));
                  document.getElementById("v-rev")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              />
              <div className="ck-grid" style={{ marginTop: 14 }}>
                <CalcField label="Annual net income" htmlFor="v-net" hint="After expenses, before the owner's salary.">
                  <input id="v-net" className="ck-input" inputMode="decimal" placeholder="124,000" value={net} onChange={(e) => setNet(e.target.value)} />
                </CalcField>
                <CalcField label="Annual gross revenue" htmlFor="v-rev">
                  <input id="v-rev" className="ck-input" inputMode="decimal" placeholder="288,000" value={rev} onChange={(e) => setRev(e.target.value)} />
                </CalcField>
              </div>
              <div className="ck-grid3" style={{ marginTop: 16 }}>
                <CalcField label="Licensed capacity" htmlFor="v-cap">
                  <select id="v-cap" className="ck-input" value={beds} onChange={(e) => setBeds(e.target.value)}>
                    {[3, 4, 5, 6, 7, 8].map((b) => (
                      <option key={b} value={b}>{b} beds</option>
                    ))}
                  </select>
                </CalcField>
                <CalcField label="Occupancy (%)" htmlFor="v-occ">
                  <input id="v-occ" className="ck-input" inputMode="decimal" value={occ} onChange={(e) => setOcc(e.target.value)} />
                </CalcField>
                <CalcField label="Years operating" htmlFor="v-yrs">
                  <select id="v-yrs" className="ck-input" value={yrs} onChange={(e) => setYrs(e.target.value)}>
                    <option value="1">Under 2 years</option>
                    <option value="3">2–5 years</option>
                    <option value="7">5–10 years</option>
                    <option value="12">10+ years</option>
                  </select>
                </CalcField>
              </div>
              <div className="ck-grid" style={{ marginTop: 16 }}>
                <CalcField label="Payer mix" htmlFor="v-payer">
                  <select id="v-payer" className="ck-input" value={payer} onChange={(e) => setPayer(e.target.value as Payer)}>
                    <option value="private">Primarily private pay</option>
                    <option value="mixed">Mixed private / Medicaid</option>
                    <option value="medicaid">Primarily Medicaid</option>
                  </select>
                </CalcField>
                <CalcField label="Staffing" htmlFor="v-staff">
                  <select id="v-staff" className="ck-input" value={staff} onChange={(e) => setStaff(e.target.value as Staff)}>
                    <option value="full">Full staff in place</option>
                    <option value="partial">Partial staff available</option>
                    <option value="none">No staff included</option>
                  </select>
                </CalcField>
              </div>
            </CalcSection>

            <CalcSection title="Property (if included)">
              <div className="ck-grid">
                <CalcField label="Property value" htmlFor="v-prop" hint="Leave blank if selling the business only.">
                  <input id="v-prop" className="ck-input" inputMode="decimal" placeholder="650,000" value={prop} onChange={(e) => setProp(e.target.value)} />
                </CalcField>
                <CalcField label="DSHS license status" htmlFor="v-dshs">
                  <select id="v-dshs" className="ck-input" value={dshs} onChange={(e) => setDshs(e.target.value as Dshs)}>
                    <option value="active">Active, good standing</option>
                    <option value="conditions">Active, with conditions</option>
                    <option value="expired">Expired</option>
                    <option value="none">Never licensed</option>
                  </select>
                </CalcField>
              </div>
            </CalcSection>

            {ready ? (
              <>
                <CalcHero
                  label={num(prop) > 0 ? "Estimated total value" : "Estimated business value"}
                  value={usd(v.totalMid)}
                  sub={`Range ${usd(v.totalLow)} to ${usd(v.totalHigh)}`}
                />
                <CalcStats
                  items={[
                    { label: "Business value", value: usd(v.bizMid) },
                    { label: "Property value", value: num(prop) > 0 ? usd(num(prop)) : "Not included" },
                    { label: "Implied cap rate", value: pct(v.midCap * 100) },
                    { label: "Operating margin", value: v.margin !== null ? pct(v.margin) : "—" },
                    { label: "Value per bed", value: v.perBed !== null ? usd(v.perBed) : "—" },
                    { label: "Gross revenue multiple", value: v.grm !== null ? `${v.grm.toFixed(1)}x` : "—" },
                  ]}
                />
                <CalcBars
                  items={[
                    { label: "Payer mix", pct: payer === "private" ? 90 : payer === "mixed" ? 65 : 40, value: label[payer] },
                    { label: "Occupancy", pct: o, value: `${Math.round(o)}%` },
                    { label: "Operating tenure", pct: y >= 7 ? 90 : y >= 3 ? 65 : 30, value: y >= 12 ? "10+ yrs" : y >= 7 ? "5–10 yrs" : y >= 3 ? "2–5 yrs" : "<2 yrs" },
                    { label: "Staffing continuity", pct: staff === "full" ? 90 : staff === "partial" ? 55 : 25, value: staff === "full" ? "Full" : staff === "partial" ? "Partial" : "None" },
                    { label: "License standing", pct: dshs === "active" ? 95 : dshs === "conditions" ? 50 : 10, value: dshs === "active" ? "Active" : "Issues", gold: dshs !== "active" },
                  ]}
                />
                {notes.length > 0 && (
                  <ul className="ck-notes">
                    {notes.map((n) => (
                      <li key={n.lead}>
                        <strong>{n.lead}</strong>: {n.text}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <CalcWaiting>Enter the home's annual net income to see an estimated value.</CalcWaiting>
            )}

            <CalcFoot
              actions={
                <>
                  <Link to="/afh-club/afh-roi-calculator">Check a buyer's return →</Link>
                  <Link to="/contact">Ask {FEATURED_BROKER.role} for a valuation →</Link>
                </>
              }
            >
              An income-capitalization estimate using Washington AFH market assumptions, for planning only. It is not an appraisal or
              a broker opinion of value.
            </CalcFoot>
          </CalcShell>
        </div>

        <BackToAFHClub />
        <IntentCTA
          heading="Not sure the estimate is right for this home?"
          body="A licensed care home is valued on its real estate and its operation separately, and the two often point in different directions. Ask which one is driving the price you are looking at."
          buttonText="Ask about the valuation"
          reason="afh-buy-sell"
          professional="broker"
        />
      </main>
      <Footer />
    </>
  );
};

export default AFHValuationEstimator;
