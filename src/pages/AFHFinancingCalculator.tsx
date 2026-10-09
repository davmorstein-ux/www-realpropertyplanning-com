import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AFHStepsBar from "@/components/AFHStepsBar";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import BackToCalculators from "@/components/BackToCalculators";
import PageFAQ from "@/components/PageFAQ";
import { Link } from "react-router-dom";
import { confirmedPrivatePayBands, privatePayBandByMarket } from "@/data/afhPrivatePayRanges";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import { CalcShell, CalcSection, CalcField, CalcHero, CalcStats, CalcFoot, AFH_TOOL_COLOR, CK_GOLD } from "@/components/calc/CalcKit";
import IntentCTA from "@/components/IntentCTA";

/**
 * AFH Occupancy & Financing Calculator (Sept 2026).
 *
 * Answers the question a seller rarely hears until a deal dies: at this
 * price, with this many residents, can a buyer get the loan? A lender divides
 * the home's net operating income (after paying staff to replace the owners'
 * own hours) by the annual debt service and wants at least ~1.25x. Below
 * that the loan is declined or reduced and the buyer must offer less.
 *
 * Generalised from a real lender-style analysis of a six-bed home: net
 * operating income against annual debt service, by occupancy and price.
 * Redesigned Oct 3, 2026 on the premium calculator kit in AFH green (all AFH
 * tools share it): the headline answer is the coverage ratio at today's
 * occupancy, against the lender's requirement. Maths unchanged.
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
      "Yes, more than almost anything else. Each additional resident adds a full year of rate to the top line while adding little to costs, because the house, license, insurance and base staff are already paid for. Two residents can move a home from a loan the lender declines to one it approves at full price. Lenders underwrite last year's tax returns, so occupancy must be real, not projected.",
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

const TEAL = AFH_TOOL_COLOR; // name kept from the teal era; AFH green since Oct 3, 2026
const INK = "#14283a";

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
  // Business financing (optional). The business — license, contracts, residents —
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
  /* Starting values from a listing (Oct 9, 2026): ?price=1600000&beds=6&market=snohomish,
     sent by the "Can you get a loan at this price?" button on listing pages.
     Read once on arrival; everything stays editable. Unknown values are ignored. */
  const [params] = useSearchParams();
  const [fromListing, setFromListing] = useState(false);
  useEffect(() => {
    const p = Number(params.get("price"));
    if (Number.isFinite(p) && p >= 50_000 && p <= 50_000_000) {
      setPriceProperty(Math.round(p));
      setFromListing(true);
    }
    const b = Number(params.get("beds"));
    if (Number.isInteger(b) && b >= 1 && b <= 8) setBeds(b);
    const m = params.get("market");
    if (m && privatePayBandByMarket(m)) pickMarket(m);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  /** A numeric field in the calculator kit's style. Money fields echo the amount with commas. */
  const field = (id: string, lbl: string, value: number, set: (v: number) => void, opts: { step?: number; min?: number; max?: number; note?: string } = {}) => {
    const isMoney = lbl.includes("($");
    return (
      <CalcField
        label={lbl.replace(" ($)", "").replace(" ($/yr)", "")}
        htmlFor={id}
        hint={opts.note}
        suffix={isMoney ? `= ${money(value)}` : undefined}
      >
        <input id={id} type="number" className="ck-input" value={value} onChange={num(set)} step={opts.step ?? 1} min={opts.min} max={opts.max} onFocus={(e) => e.currentTarget.select()} />
      </CalcField>
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
  const W = 760, H = 330, PL = 60, PR = 118, PT = 34, PB = 50;
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
  const seriesColors = ["#9aa5ae", CK_GOLD, AFH_TOOL_COLOR, "#14283a"];

  // Headline: the coverage ratio at today's occupancy
  const todayRow = rows.find((r) => r.n === filledCount);
  const todayGross = monthlyTotal * 12;
  const todayNOI = todayGross - fixed - filledCount * variable - wages;
  const todayRatio = debtService > 0 ? todayNOI / debtService : 0;
  const todayOk = debtService > 0 && todayRatio >= dscr;
  const firstOk = rows.find((r) => r.ok);
  const perResident = avgRate * 12 - variable;
  const shortBy = perResident > 0 ? Math.max(0, Math.ceil((needNOI - todayNOI) / perResident)) : 0;
  const otherWages = buyerType === "investor" ? 0 : wagesInput;
  const otherNOI = todayGross - fixed - filledCount * variable - otherWages;
  const otherMax = Math.max(0, principalFor(Math.max(0, otherNOI / dscr - taxIns - carryPI), loanRate / 100, term) / (1 - down / 100) - bizIncluded);
  const thisMax = todayRow?.maxPrice ?? 0;

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
        <AFHStepsBar current={5} />
        <div style={{ background: "#faf8f4", padding: "48px 24px 36px", borderBottom: `3px solid ${TEAL}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
              <BackToCalculators accent={TEAL} />
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL, marginBottom: 10, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
              For sellers &amp; buyers
            </p>
            <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontWeight: 700, color: "#272421", marginBottom: 12, lineHeight: 1.2 }}>
              AFH Occupancy &amp; Financing Calculator
            </h1>
            <p style={{ fontSize: 18, fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", color: "#1c1917", lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
              At this price, with this many residents, can a buyer get the loan? A lender divides the home's net operating income by
              the annual loan payment and wants at least <strong>1.25×</strong>. Below that, the loan is declined or reduced and the
              buyer has to offer less. New to this? Start with{" "}
              <Link to="/afh-club/how-to-finance-an-afh" style={{ color: TEAL, fontWeight: 700, textDecoration: "underline" }}>How to Finance an Adult Family Home</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: "#faf8f4", padding: "2.5rem 1rem 3rem" }}>
          <CalcShell color={TEAL} icon="key" eyebrow="AFH Club Calculator" title="Can a Buyer Get the Loan?" subtitle="Lender coverage by price and occupancy, for an owner-operator or an investor">
            <CalcSection title="The home">
              <div className="ck-grid">
                <CalcField label="Market (sets a typical rate)" htmlFor="f-market">
                  <select id="f-market" className="ck-input" value={market} onChange={(e) => pickMarket(e.target.value)}>
                    {bands.map((b) => (
                      <option key={b.market} value={b.market}>
                        {b.market.startsWith("king-") ? `King, ${b.label.replace(/ \(.*\)$/, "")}` : b.label}
                      </option>
                    ))}
                  </select>
                </CalcField>
                {field("f-beds", "Licensed beds", beds, setBeds, { min: 1, max: 8, note: "Sets how many bed boxes appear below." })}
              </div>
              <div className="ck-field" style={{ marginTop: 16 }}>
                <div className="ck-label" style={{ display: "block", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 6 }}>Monthly rate for each bed (leave empty beds blank)</div>
                <div className="fin-beds" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(beds, 4)}, minmax(0, 1fr))`, gap: 10 }}>
                  {Array.from({ length: beds }, (_, i) => (
                    <div key={i}>
                      <label className="ck-label" htmlFor={`f-bed-${i}`} style={{ fontSize: 13 }}>Bed {i + 1}</label>
                      <input
                        id={`f-bed-${i}`}
                        type="number"
                        inputMode="numeric"
                        placeholder="Empty"
                        className="ck-input"
                        style={{ textAlign: "center" }}
                        value={bedRates[i] === 0 ? "" : bedRates[i]}
                        step={50}
                        min={0}
                        onFocus={(e) => e.currentTarget.select()}
                        onChange={(e) => setBedRate(i, e.target.value === "" ? 0 : fmtIn(parseFloat(e.target.value)))}
                      />
                    </div>
                  ))}
                </div>
                <div className="ck-hint">
                  Today: <strong>{money(monthlyTotal)}</strong> a month from {filledCount} of {beds} beds ({money(monthlyTotal * 12)} a year). Empty beds are modelled at today's average rate ({money(avgRate)}) when residents are added.
                </div>
              </div>
              <div className="ck-grid" style={{ marginTop: 16 }}>
                {field("f-fixed", "Fixed operating costs per year ($)", fixed, setFixed, { step: 1000, note: "Costs that do not change with one more resident: base staff, insurance, utilities, license, maintenance." })}
                {field("f-var", "Variable cost per resident per year ($)", variable, setVariable, { step: 500, note: "Extra food, supplies and care hours for each added resident." })}
              </div>
            </CalcSection>

            <CalcSection title="Who is the buyer?">
              <div className="ck-grid">
                <CalcField
                  label="Buyer type"
                  htmlFor="f-buyer"
                  hint="An owner-operator does the work, so a lender counts all the income. An investor hires staff for it, so the lender subtracts those wages first."
                >
                  <select id="f-buyer" className="ck-input" value={buyerType} onChange={(e) => setBuyerType(e.target.value as "operator" | "investor")}>
                    <option value="operator">Owner-operator (will work in the home)</option>
                    <option value="investor">Investor (will hire staff to run it)</option>
                  </select>
                </CalcField>
                {buyerType === "investor" && field("f-wages", "Replacement wages for the owners' work ($/yr)", wagesInput, setWagesInput, { step: 1000, note: "What the investor pays staff to replace the hours the current owners work." })}
              </div>
            </CalcSection>

            <CalcSection title="Price and financing">
              <div className="ck-grid">
                {field("f-price", "Property price ($)", priceProperty, setPriceProperty, { step: 5000, note: fromListing ? "Started from the listing's asking price. The house. This is the price the calculator tests." : "The house. This is the price the calculator tests." })}
                {field("f-down", "Buyer down payment (%)", down, setDown, { step: 1, min: 0, max: 100, note: "SBA 7(a): typically 10%. Conventional on a house: 20–25%." })}
                {field("f-rate", "Loan interest rate (%)", loanRate, setLoanRate, { step: 0.05, note: "SBA 7(a) is Prime plus a spread; conventional on the house alone is lower." })}
                {field("f-term", "Loan term (years)", term, setTerm, { min: 1, max: 30 })}
                {field("f-taxins", "Annual property tax + insurance ($)", taxIns, setTaxIns, { step: 500 })}
                {field("f-dscr", "Lender coverage requirement (×)", dscr, setDscr, { step: 0.05, note: "Most SBA lenders want 1.25×; some accept 1.15×." })}
              </div>
            </CalcSection>

            <CalcSection title="Is the buyer also financing the business?">
              <div className="ck-grid">
                <CalcField label="Business financing" htmlFor="f-biz" hint="Any loan on the license, contracts and residents is repaid from the same income, so a lender counts it too.">
                  <select id="f-biz" className="ck-input" value={bizMode} onChange={(e) => setBizMode(e.target.value as "cash" | "sameLoan" | "carry")}>
                    <option value="cash">No, buyer pays cash for the business</option>
                    <option value="sameLoan">Yes, in the same loan as the house</option>
                    <option value="carry">Yes, seller carries a note on the business</option>
                  </select>
                </CalcField>
                {field("f-bizprice", "Business price ($)", priceBusiness, setPriceBusiness, { step: 5000, note: bizMode === "cash" ? "Paid in cash: does not add to the buyer's loan payments." : bizMode === "carry" ? "Financed on a separate note from the seller, on the terms below." : "Added to the main loan at the rate and term above." })}
                {bizMode === "carry" && field("f-carryrate", "Seller-carry interest rate (%)", carryRate, setCarryRate, { step: 0.25, note: "Usually below the SBA rate; that is the point of carrying it." })}
                {bizMode === "carry" && field("f-carryterm", "Seller-carry term (years)", carryTerm, setCarryTerm, { min: 1, max: 15, note: "Short notes mean higher payments; 5–7 years is common." })}
              </div>
            </CalcSection>

            {warnings.length > 0 && (
              <div role="alert" className="fin-warn">
                <strong>Check your inputs:</strong>
                <ul>
                  {warnings.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            )}

            <CalcHero
              label={`Coverage ratio today · ${filledCount} of ${beds} beds`}
              value={`${todayRatio.toFixed(2)}×`}
              tone={todayOk ? undefined : "bad"}
              sub={
                todayOk
                  ? `The lender needs ${dscr.toFixed(2)}×: the loan works today.`
                  : firstOk
                    ? `The lender needs ${dscr.toFixed(2)}×: ${shortBy} more resident${shortBy === 1 ? "" : "s"} short. It first works at ${firstOk.n} residents.`
                    : `The lender needs ${dscr.toFixed(2)}×: short even with every bed filled.`
              }
              note={
                <>
                  Most a lender would finance at today's occupancy: <strong>{money(thisMax)}</strong> for {buyerType === "operator" ? "an owner-operator" : "an investor"}, versus {money(otherMax)} for {buyerType === "operator" ? "an investor who hires staff" : "an owner-operator"}.
                </>
              }
            />
            <CalcStats
              items={[
                { label: "Net income needed", value: money(needNOI) },
                { label: "Net income today", value: money0(todayNOI), tone: todayOk ? undefined : "bad" },
                { label: "Annual debt service", value: money(debtService) },
                { label: "Property price", value: money(priceProperty) },
                { label: "Total deal", value: money(dealTotal) },
                { label: "Max financeable today", value: money(thisMax) },
              ]}
            />

            <div className="ck-grouphead" style={{ display: "flex", margin: "8px 0 10px" }}>
              <h3 className="ck-grouptitle">By occupancy</h3>
            </div>
            <div className="fin-tablewrap">
              <table className="fin-table">
                <thead>
                  <tr>
                    <th scope="col">At this property price</th>
                    {rows.map((r) => (
                      <th key={r.n} scope="col" className={r.n === filledCount ? "fin-today" : undefined}>
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
                    ["Lender approves?", (r: (typeof rows)[0]) => (r.ok ? "Yes" : "No")],
                    ["Cash to buyer after debt service", (r: (typeof rows)[0]) => money0(r.cash)],
                    ["Most a lender would finance (property)", (r: (typeof rows)[0]) => money(r.maxPrice)],
                  ].map(([k, fn], i) => (
                    <tr key={k as string}>
                      <th scope="row">{k as string}</th>
                      {rows.map((r) => (
                        <td key={r.n} className={`${r.n === filledCount ? "fin-today" : ""}${i === 3 ? (r.ok ? " fin-yes" : " fin-no") : ""}`}>
                          {(fn as (r: (typeof rows)[0]) => string)(r)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ck-grouphead" style={{ display: "flex", margin: "22px 0 10px" }}>
              <h3 className="ck-grouptitle">Coverage by property price</h3>
            </div>
            <div className="fin-slider">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                <label className="ck-label" htmlFor="f-slider">Slide to change the property price</label>
                <div className="fin-sliderval">{money(priceProperty)}</div>
              </div>
              <input
                id="f-slider"
                type="range"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                step={5000}
                value={Math.min(SLIDER_MAX, Math.max(SLIDER_MIN, priceProperty))}
                onChange={(e) => setPriceProperty(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: TEAL, height: 32, cursor: "pointer" }}
              />
              <div className="fin-scale"><span>$500,000</span><span>$3,000,000</span></div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Coverage ratio at each purchase price for each occupancy, against the lender requirement" style={{ display: "block", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
              <text x={W - PR} y={PT - 8} fontSize="13" fontWeight="700" textAnchor="end" fill="#9b1c1c">- - -  Lender requirement {dscr.toFixed(2)}×</text>
              {[0, 0.5, 1, 1.5, 2, 2.5, 3].filter((v) => v <= yMax).map((v) => (
                <g key={v}>
                  <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="#e1e7ec" />
                  <text x={PL - 8} y={y(v) + 4} fontSize="13" fontWeight="600" textAnchor="end" fill={INK}>{v.toFixed(2)}×</text>
                </g>
              ))}
              <line x1={PL} x2={W - PR} y1={y(dscr)} y2={y(dscr)} stroke="#9b1c1c" strokeWidth="2" strokeDasharray="6 4" />
              {grid.map((g, i) => (i % 2 === 0 ? (
                <text key={g.p} x={x(i)} y={H - PB + 18} fontSize="13" fontWeight="600" textAnchor="middle" fill={INK}>{"$" + (g.p / 1e6).toFixed(1) + "M"}</text>
              ) : null))}
              {(() => {
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
                      <text x={x(grid.length - 1) + 8} y={placed[si] + 5} fontSize="14" fill={col === "#9aa5ae" ? "#2b3640" : col} fontWeight="700">
                        {r.n} beds{r.n === filledCount ? " (today)" : ""}
                      </text>
                    </g>
                  );
                });
              })()}
              {inRange && (
                <g>
                  <line x1={xPrice(priceProperty)} x2={xPrice(priceProperty)} y1={PT} y2={H - PB} stroke="#14283a" strokeWidth="2" strokeDasharray="3 3" />
                  <text x={xPrice(priceProperty)} y={PT - 8} fontSize="13" fontWeight="700" textAnchor="middle" fill="#14283a">Your property price {money(priceProperty)}</text>
                  {(() => {
                    const vals = rows.map((r) => ratioAt(r.noi, priceProperty));
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
                      const col = ok ? "#14663f" : "#9b1c1c";
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
              <text x={(PL + W - PR) / 2} y={H - 6} fontSize="13" fontWeight="600" textAnchor="middle" fill={INK}>Property price</text>
            </svg>
            <div className="fin-legend">
              {rows.map((r, si) => {
                const col = seriesColors[(si + 4 - rows.length) % 4];
                return (
                  <div key={r.n}>
                    <span aria-hidden="true" style={{ display: "inline-block", width: 30, height: 6, borderRadius: 3, background: col }} />
                    {r.n} of {beds} beds{r.n === filledCount ? " (today)" : ""}
                  </div>
                );
              })}
              <div>
                <span aria-hidden="true" style={{ display: "inline-block", width: 30, height: 0, borderTop: "3px dashed #9b1c1c" }} />
                Lender requirement ({dscr.toFixed(2)}×)
              </div>
            </div>
            <ul className="ck-notes" style={{ marginTop: 14 }}>
              {rows.map((r) => {
                const v = ratioAt(r.noi, priceProperty);
                const ok = v >= dscr;
                return (
                  <li key={r.n}>
                    <strong>{r.n} beds{r.n === filledCount ? " (today)" : ""}</strong>: {v.toFixed(2)}×,{" "}
                    {ok ? "above the requirement; a lender can approve" : "below the requirement"}
                    {!ok && r.maxPrice > 0 ? <>; works at {money(Math.floor(r.maxPrice / 5000) * 5000)} or less</> : null}
                    {!ok && r.maxPrice <= 0 ? <>; does not work at any price</> : null}
                  </li>
                );
              })}
            </ul>

            <CalcFoot
              actions={
                <>
                  <Link to="/afh-club/how-to-finance-an-afh">How AFH financing works →</Link>
                  <Link to="/contact">Ask {FEATURED_BROKER.role} about financing →</Link>
                </>
              }
            >
              Working estimates for discussion. SBA 7(a) rates are Prime plus a spread and change with the market; a buyer's actual
              terms depend on their lender and file. Not a loan quote or an appraisal. Private-pay defaults come from{" "}
              {FEATURED_BROKER.role}'s reviewed ranges for King, Snohomish and Pierce counties.
            </CalcFoot>
          </CalcShell>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .ck .fin-warn { background: #fef2f2; border: 1px solid #e3a1a1; border-radius: 12px; padding: 12px 16px; margin: 0 0 14px; font-size: 16px; line-height: 1.5; color: #7f1d1d; }
          .ck .fin-warn ul { margin: 6px 0 0; padding-left: 20px; }
          .ck .fin-tablewrap { overflow-x: auto; border: 1px solid #e1e7ec; border-radius: 12px; }
          .ck table.fin-table { width: 100%; border-collapse: collapse; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px; color: ${INK}; }
          .ck table.fin-table th, .ck table.fin-table td { padding: 10px 12px; border-bottom: 1px solid #eef1f4; text-align: center; white-space: nowrap; font-variant-numeric: tabular-nums; }
          .ck table.fin-table thead th { background: #f6f8fa; font-size: 14px; font-weight: 700; }
          .ck table.fin-table tbody th { text-align: left; font-weight: 600; white-space: normal; min-width: 180px; }
          .ck table.fin-table td { font-weight: 700; }
          .ck table.fin-table .fin-today { background: var(--tint); }
          .ck table.fin-table .fin-yes { color: #14663f; }
          .ck table.fin-table .fin-no { color: #9b1c1c; }
          .ck table.fin-table tr:last-child th, .ck table.fin-table tr:last-child td { border-bottom: 0; }
          .ck .fin-slider { background: var(--tint); border-radius: 12px; padding: 14px 16px 10px; margin: 0 0 12px; }
          .ck .fin-sliderval { font-size: 26px; font-weight: 800; color: var(--deep); font-variant-numeric: tabular-nums; }
          .ck .fin-scale { display: flex; justify-content: space-between; font-size: 14px; color: #1f2933; font-weight: 600; }
          .ck .fin-legend { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 10px; font-size: 15px; color: ${INK}; font-weight: 600; }
          .ck .fin-legend > div { display: flex; align-items: center; gap: 8px; }
          @media (max-width: 640px) { .fin-beds { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        ` }} />
        <PageFAQ faqs={FAQS} heading="Financing an Adult Family Home: Common Questions" eyebrow="Frequently Asked Questions" id="afh-financing" />
        <BackToAFHClub />
        <IntentCTA
          heading="Testing whether the loan will carry?"
          body="Occupancy assumptions, SBA terms, and the CHOW timeline decide whether a purchase works. Ask how lenders will read this home before you go to them."
          buttonText="Ask about financing"
          reason="afh-buy-sell"
          professional="broker"
        />
      </main>
      <Footer />
    </>
  );
};

export default AFHFinancingCalculator;
