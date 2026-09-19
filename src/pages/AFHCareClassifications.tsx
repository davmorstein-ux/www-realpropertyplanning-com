import { Link } from "react-router-dom";
import PaymentGuideShell, { GUIDES, Table, gs } from "@/components/afh/PaymentGuideShell";
import { AFH_MEDICAID_RATES, AFH_RATE_REGION_LABELS, medicaidRange } from "@/data/afhMedicaidRates";

/**
 * A Through E: How CARE Classifications Set an Adult Family Home's Medicaid
 * Income (Sept 2026). Part of the three-part payment series.
 *
 * Every dollar figure on this page is computed from src/data/afhMedicaidRates.ts,
 * so when that table is updated each July 1 (and sometimes January 1) this page
 * follows automatically — the spread, the six-bed example, and the rate table.
 * Do not hard-code rates here.
 *
 * Group definitions checked against WAC 388-106-0115 on Sept 18, 2026. Note that
 * for residential settings Group B is mood/behavior only; cognition is what
 * separates D from C. (The in-home rule, 388-106-0125, differs.)
 */

const usd = (n: number, digits = 0) => n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: digits, maximumFractionDigits: digits });
const roundTo = (n: number, step: number) => Math.round(n / step) * step;

const effective = new Date(AFH_MEDICAID_RATES.effective + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const high = medicaidRange("highCost");
const std = medicaidRange("standard");
const spreadDaily = high.maxDaily - high.minDaily;
const spreadYearly = spreadDaily * 365;
const stdSpreadYearly = (std.maxDaily - std.minDaily) * 365;

const rateOf = (c: string) => AFH_MEDICAID_RATES.levels.find((l) => l.classification === c)!.highCost;
const EX_LOW = "B Med";
const EX_HIGH = "D Med-High";
const sixLow = rateOf(EX_LOW) * 6 * 365;
const sixHigh = rateOf(EX_HIGH) * 6 * 365;

const FAQS = [
  { question: "What are the A through E classifications for Washington adult family homes?", answer: "They are the five groups in DSHS's CARE assessment system, which places every Medicaid long-term care client into one of seventeen residential classifications, from A Low to E High. The classification, together with the county, sets the daily Medicaid rate the adult family home is paid for that resident." },
  { question: "Is A through E a ladder that residents move up over time?", answer: "No. The letters describe different combinations of need, not steps. Group E is exceptional care, D is clinical complexity with significant cognitive impairment, C is clinical complexity without it, B is qualifying mood and behavior needs, and A is everyone else. A physically frail resident with no behavioral or medical complexity can be A High, while a physically capable resident with serious behaviors is a B." },
  { question: "How much difference does a resident's classification make to AFH income?", answer: `At the rates effective ${effective}, the gap between the lowest and highest classification in King, Pierce and Snohomish counties is ${usd(spreadDaily, 2)} per day, or about ${usd(roundTo(spreadYearly, 100))} per year for a single bed.` },
  { question: "Can a resident's classification change?", answer: "Yes. A classification reflects current assessed need. Residents are reassessed, including when their condition changes significantly, and the rate can go down as well as up. A buyer should not value a home by simply annualizing the current month's Medicaid deposits." },
  { question: "What should an AFH buyer request about classifications in due diligence?", answer: "A de-identified resident schedule showing payer type, current CARE classification, daily rate, any add-ons, and the date of the most recent assessment. Then reconcile it: roster, to classification, to authorized rate, to actual deposits." },
];

const AFHCareClassifications = () => (
  <PaymentGuideShell
    id="care"
    seoTitle="CARE Classifications A Through E: How Medicaid Pays Washington Adult Family Homes | AFH Club"
    seoDescription="How DSHS's CARE assessment places Medicaid residents into seventeen classifications from A Low to E High, what each group means, current daily rates, why classification mix matters as much as occupancy, and what AFH buyers should verify in due diligence."
    eyebrow="For buyers, sellers & owners"
    lede="When a Medicaid client moves into an adult family home, the home does not set the price. An assessment produces a classification, and the classification sets the daily rate. One bed can be worth very different amounts."
    cover={{ src: "/afh-care-classifications-cover.webp", alt: "A Through E: One Bed, Very Different Revenue — how CARE classifications affect adult family home income" }}
    dateModified="2026-09-18"
    faqs={FAQS}
    faqHeading="CARE Classifications: Common Questions"
    disclaimer={`This page is general educational information for people buying, selling, or operating an adult family home. It is not legal, financial, or reimbursement advice. Rates shown are DSHS base adult family home rates effective ${effective}; they change each July 1 and sometimes January 1. Confirm current figures with DSHS.`}
  >
    <h2 style={gs.h2}>How a resident is classified</h2>
    <p style={gs.p}>
      A DSHS case manager completes a CARE assessment. CARE weighs five things: cognitive performance, clinical complexity, mood and behavior, activities of daily living (ADLs), and exceptional care criteria. It places the person in a group first, then assigns a sub-level from their ADL or behavior score, working from the highest possible group down to the lowest the person qualifies for. The result is one of seventeen residential classifications.
    </p>

    <Table
      head={["Group", "What places a resident here", "Sub-levels"]}
      rows={[
        ["E", "Meets the exceptional care criteria", "Medium, High"],
        ["D", "Clinically complex, with significant cognitive impairment (cognitive performance score of 4 to 6)", "Low, Medium, Medium-High, High"],
        ["C", "Clinically complex, without that level of cognitive impairment", "Low, Medium, Medium-High, High"],
        ["B", "Qualifies on mood and behavior, but not for C, D, or E", "Low, Medium, Medium-High, High"],
        ["A", "Not clinically complex and no qualifying mood or behavior needs", "Low, Medium, High"],
      ]}
    />

    <p style={gs.p}>
      Within a group, the ADL score generally sets the sub-level. In Group C, for example, High is an ADL score of 25 to 28, Medium-High is 18 to 24, and Medium is 9 to 17.
    </p>

    <div style={gs.card}>
      <h3 style={{ ...gs.h3, marginTop: 0 }}>The letters are not a ladder</h3>
      <p style={{ ...gs.p, marginBottom: 0 }}>
        Residents do not progress from A to B to C. The letters describe different combinations of need. A physically frail resident with no behavioral or medical complexity can be A High, while a physically capable resident with serious behaviors is a B. And these are classifications, not "tiers": the numbered tiers owners talk about are a separate program, covered in <Link to={GUIDES.cbhs.href} style={gs.link}>CBHS Tiers Explained</Link>.
      </p>
    </div>

    <h2 style={gs.h2}>What the classifications pay</h2>
    <p style={gs.p}>
      Rates effective {effective}. In {AFH_RATE_REGION_LABELS.highCost}, the base adult family home rate runs from {usd(high.minDaily, 2)} to {usd(high.maxDaily, 2)} per day. In all other Washington counties it runs from {usd(std.minDaily, 2)} to {usd(std.maxDaily, 2)}.
    </p>

    <div style={gs.callout}>
      <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", margin: "0 0 10px", color: "#9fe3dc" }}>One bed, very different revenue</p>
      <p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, fontWeight: 600 }}>
        The gap between the lowest and highest classification in the high-cost counties is {usd(spreadDaily, 2)} per day. That is about {usd(roundTo(spreadYearly, 100))} per year for a single bed{" "}
        <span style={{ fontWeight: 400 }}>(about {usd(roundTo(stdSpreadYearly, 100))} elsewhere in the state).</span>
      </p>
    </div>

    <p style={gs.p}>
      Scale that to a whole home. Six Medicaid residents at {EX_LOW} ({usd(rateOf(EX_LOW), 2)} per day) bring in about {usd(roundTo(sixLow, 1000))} a year. The same six beds at {EX_HIGH} ({usd(rateOf(EX_HIGH), 2)}) bring in about {usd(roundTo(sixHigh, 1000))}. Same house, same occupancy, a difference of roughly {usd(roundTo(sixHigh - sixLow, 1000))}. <strong>Occupancy tells you how many beds are full. Classification mix tells you what they are worth.</strong>
    </p>
    <p style={gs.p}>
      Higher rates are not free money. A D or E resident requires more staff time, more skill, and often more overnight coverage. Look at revenue and staffing cost together.
    </p>

    <details style={{ ...gs.card, borderWidth: 1 }}>
      <summary style={{ ...gs.h3, margin: 0, cursor: "pointer" }}>All seventeen base daily rates, effective {effective}</summary>
      <Table
        head={["Classification", AFH_RATE_REGION_LABELS.highCost, AFH_RATE_REGION_LABELS.standard]}
        rows={AFH_MEDICAID_RATES.levels.map((l) => [l.classification, usd(l.highCost, 2), usd(l.standard, 2)])}
      />
      <p style={{ ...gs.p, fontSize: 16, marginBottom: 0 }}>
        Source: <a href={AFH_MEDICAID_RATES.source} target="_blank" rel="noopener noreferrer" style={gs.link}>{AFH_MEDICAID_RATES.sourceLabel}</a>. Base rate only; add-ons are not included. The rate is what the home is paid per day for the resident's care; a Medicaid resident contributes most of their own income toward it.
      </p>
    </details>

    <h2 style={gs.h2}>Classifications move</h2>
    <p style={gs.p}>
      A classification reflects current need, not a permanent label. Residents are reassessed, including when their condition changes significantly, and a rate can go down as well as up. A resident who recovers function after a hospital stay may drop a level. Income that depends on one or two high-classification residents is more fragile than the same income spread across six.
    </p>

    <h2 style={gs.h2}>What buyers should ask for</h2>
    <p style={gs.p}>Request a de-identified resident schedule showing, for each resident:</p>
    <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
      <li style={gs.li}>Payer type: private pay, Medicaid, or other</li>
      <li style={gs.li}>Current CARE classification and daily rate, for Medicaid residents</li>
      <li style={gs.li}>Any add-ons, and which program each comes from</li>
      <li style={gs.li}>The date of the most recent assessment</li>
    </ul>
    <p style={gs.p}>
      Then reconcile it: <strong>roster, to classification, to authorized rate, to actual deposits.</strong> If those four don't agree, find out why before you value the business. The <Link to="/afh-club/afh-valuation-estimator" style={gs.link}>AFH Valuation Estimator</Link> will show you how much the answer moves the price.
    </p>

    <h2 style={gs.h2}>What sits on top of the base rate</h2>
    <p style={gs.p}>
      The base rate is only the first layer. Some residents carry a <Link to={GUIDES.cbhs.href} style={gs.link}>CBHS tier</Link>, and some homes hold specialty contracts such as ECS or SBS. Each has its own durability questions in a sale. Specialty contracts in particular do not transfer to a new owner. The <Link to={GUIDES.hub.href} style={gs.link}>Field Guide</Link> lays all four systems side by side.
    </p>
  </PaymentGuideShell>
);

export default AFHCareClassifications;
