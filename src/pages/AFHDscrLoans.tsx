import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import AuthorByline from "@/components/AuthorByline";
import PageFAQ from "@/components/PageFAQ";
import ArticleCover from "@/components/ArticleCover";
import LenderCard from "@/components/afh/LenderCard";
import { Table, gs, TEAL, TEAL_DARK, NAVY, INK } from "@/components/afh/PaymentGuideShell";
import { LENDERS } from "@/data/afhLenders";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import { DSCR_LOANS, DSCR_FAQS, DSCR_QUESTIONS, EXAMPLE, computeExample, usd, x } from "@/data/afhDscrLoans";

/**
 * Can You Get a DSCR Loan for an Adult Family Home? (Oct 9, 2026).
 * Sources, what is confirmed and what is deliberately left out: see the header
 * of src/data/afhDscrLoans.ts. Every number on this page is computed there.
 * Lenders come from src/data/afhLenders.ts (entries with a `dscrNote`).
 */

const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const AFHDscrLoans = () => {
  const c = computeExample();
  const dscrLenders = LENDERS.filter((l) => l.dscrNote);
  const url = `https://realpropertyplanning.com${DSCR_LOANS.PATH}`;

  return (
    <>
      <SEOHead
        title={DSCR_LOANS.SEO_TITLE}
        description={DSCR_LOANS.DESCRIPTION}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: DSCR_LOANS.TITLE,
          author: { "@type": "Person", name: FEATURED_BROKER.name },
          datePublished: DSCR_LOANS.PUBLISHED,
          dateModified: DSCR_LOANS.REVIEWED,
          url,
          ...(DSCR_LOANS.COVER ? { image: `https://realpropertyplanning.com${DSCR_LOANS.COVER}` } : {}),
        }}
      />
      <Header />
      <main>
        <div style={{ background: "#faf8f4", padding: "48px 24px 40px", borderBottom: `3px solid ${TEAL}` }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {DSCR_LOANS.COVER && <ArticleCover src={DSCR_LOANS.COVER} alt="Cover art: DSCR Loans for Adult Family Homes" width={1086} height={1448} />}
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL_DARK, marginBottom: 10, fontFamily: FONT }}>AFH financing · For buyers &amp; investors</p>
            <h1 style={{ fontSize: "clamp(30px,4.2vw,44px)", fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2, fontFamily: FONT }}>{DSCR_LOANS.TITLE}</h1>
            <p style={{ ...gs.p, maxWidth: 720, margin: 0 }}>How DSCR loans work for a Washington adult family home, and why the income a lender counts matters more than the name of the loan.</p>
          </div>
        </div>

        <div style={{ background: "#faf8f4", padding: "2rem 1rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={gs.card}>
              <h2 style={{ ...gs.h2, marginTop: 0 }}>The short answer</h2>
              <p style={{ ...gs.p, marginBottom: 0 }}>{DSCR_LOANS.SHORT_ANSWER}</p>
            </div>

            <h2 style={gs.h2}>What "DSCR" means</h2>
            <p style={gs.p}>
              DSCR stands for <strong>debt service coverage ratio</strong>: the income a lender counts, divided by the loan payment. $15,000 of monthly income against a $10,000 payment is a ratio of <strong>1.50</strong>: the income covers the payment one and a half times.
            </p>
            <p style={gs.p}>
              The ratio is simple. What goes on top of it, the income, is where adult family home loans differ, and it is the first thing to ask any lender.
            </p>

            <h2 style={gs.h2}>Three ways a lender can count an AFH's income</h2>
            <Table
              head={["Method", "What is counted", "Who tends to use it"]}
              wrapFirst
              rows={[
                ["Gross income", "Everything residents pay, before any costs", "Some DSCR programs that treat each resident's agreement like a lease"],
                ["Net operating income", "Resident income minus caregivers, food, insurance and other costs", "SBA and commercial lenders"],
                ["Rent", "Market rent for the house, or a lease from an operator", "Ordinary rental-property DSCR programs, many of which exclude care homes"],
              ]}
            />
            <p style={gs.p}>For an adult family home, the first two can be far apart, because care costs money. Caregiver wages alone often take a large share of what residents pay.</p>

            <h2 style={gs.h2}>The same home, measured three ways</h2>
            <p style={gs.p}>
              A full six-bed home with residents paying an average of {usd(EXAMPLE.avgMonthlyRate)} a month:
            </p>
            <Table
              head={["Each month", "Amount"]}
              wrapFirst
              rows={[
                ["Resident income (gross)", usd(c.gross)],
                ["Caregivers, payroll taxes, benefits", <span key="caregivers" style={{ whiteSpace: "nowrap" }}>−{usd(EXAMPLE.caregivers)}</span>],
                ["Food, supplies, utilities", <span key="foodSuppliesUtilities" style={{ whiteSpace: "nowrap" }}>−{usd(EXAMPLE.foodSuppliesUtilities)}</span>],
                ["Business insurance, licensing, administration, other", <span key="insuranceAdminOther" style={{ whiteSpace: "nowrap" }}>−{usd(EXAMPLE.insuranceAdminOther)}</span>],
                [<strong key="n">Net operating income</strong>, <strong key="nv">{usd(c.noi)}</strong>],
                ["A replacement salary for the owner's own work", <span key="ownerReplacementPay" style={{ whiteSpace: "nowrap" }}>−{usd(EXAMPLE.ownerReplacementPay)}</span>],
                [<strong key="a">Net after the owner's pay</strong>, <strong key="av">{usd(c.afterOwner)}</strong>],
              ]}
            />
            <p style={gs.p}>
              The loan: a {usd(EXAMPLE.price)} purchase with {Math.round(EXAMPLE.downPct * 100)}% down, {usd(c.loan)} borrowed at {EXAMPLE.ratePct}% over {EXAMPLE.years} years, plus taxes and insurance, comes to <strong>{usd(c.payment)} a month</strong>.
            </p>
            <div className="dscr-three" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, margin: "8px 0 16px" }}>
              {[
                { label: "On gross income", value: c.grossRatio, tone: "#7a4a00", bg: "#fef3c7" },
                { label: "On net operating income", value: c.noiRatio, tone: TEAL_DARK, bg: "#e6f2f0" },
                { label: "After the owner's pay", value: c.afterOwnerRatio, tone: NAVY, bg: "#e8eef7" },
              ].map((r) => (
                <div key={r.label} style={{ background: r.bg, borderRadius: 12, padding: "16px 14px", textAlign: "center", fontFamily: FONT }}>
                  <div style={{ fontSize: 40, fontWeight: 700, color: r.tone, lineHeight: 1.1 }}>{x(r.value)}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: INK, marginTop: 6 }}>{r.label}</div>
                </div>
              ))}
            </div>
            <p style={{ ...gs.p, fontSize: 17 }}><em>All figures are illustrations, not Washington averages or a loan quote.</em></p>
            <div style={gs.warn}>
              <p style={{ ...gs.p, margin: 0 }}>
                <strong>What this shows:</strong> the home passes easily on gross income and far more narrowly once the cost of running it is counted. A gross-income test can make a purchase look much more comfortable than it is. Before relying on any lender's ratio, run the home's real expenses through the{" "}
                <Link to="/afh-club/afh-financing-calculator" style={gs.link}>Occupancy &amp; Financing Calculator</Link> or the <Link to="/afh-club/afh-roi-calculator" style={gs.link}>AFH ROI Calculator</Link>.
              </p>
            </div>

            <h2 style={gs.h2}>How one Washington AFH lender counts income</h2>
            <p style={gs.p}>A Washington lender that finances adult family homes described its method to us in October 2026:</p>
            <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={gs.li}><strong>What it counts:</strong> gross income, documented by the agreement each resident signs for their bed.</li>
              <li style={gs.li}><strong>Over what period:</strong> the average of the past two years.</li>
              <li style={gs.li}><strong>What it does not do:</strong> qualify the loan on beds filled today, or on what the home could earn full.</li>
            </ul>
            <p style={gs.p}>
              <strong>Why the two-year average matters.</strong> A home that grossed {usd(EXAMPLE.priorYearGross)} one year and {usd(EXAMPLE.recentYearGross)} the next averages {usd(c.twoYearAvgAnnual)}, or {usd(c.twoYearAvgMonthly)} a month, even though it is earning {usd(EXAMPLE.recentYearGross / 12)} a month now. A recent improvement only half counts, and a home that has been half empty is judged on the half-empty year too.
            </p>
            <p style={gs.p}>
              Ask any lender using this method <strong>whose</strong> two years count: the seller's, yours, or both. For someone buying an established home, it is usually the home's record that matters, but lenders differ.
            </p>

            <h2 style={gs.h2}>How SBA lenders count income</h2>
            <p style={gs.p}>SBA 7(a) loans are the other common way to buy an established adult family home, and they can include the business, not just the house. Under SBA procedures for applications from October 1, 2026:</p>
            <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={gs.li}><strong>Income after expenses.</strong> The test uses earnings after operating costs, not gross resident income.</li>
              <li style={gs.li}><strong>At least 1.25.</strong> For a first business purchase, income must cover all of the business's debt payments at least 1.25 times.</li>
              <li style={gs.li}><strong>History, not projections.</strong> The income is the last full year or a two-year average. Expected growth cannot be used to reach the minimum.</li>
            </ul>
            <p style={gs.p}>For down payments and the full SBA picture, see <Link to="/afh-club/how-to-finance-an-afh" style={gs.link}>How to Finance an Adult Family Home</Link>.</p>

            <h2 style={gs.h2}>Read the terms, not just the rate</h2>
            <p style={gs.p}>DSCR and commercial loans come in several shapes: 3-, 5- and 7-year adjustable rates, 10-year fixed, and fully fixed. Three numbers that sound alike are different things:</p>
            <ul style={{ margin: "0 0 16px", paddingLeft: 22 }}>
              <li style={gs.li}><strong>Rate period:</strong> how long the interest rate stays fixed.</li>
              <li style={gs.li}><strong>Amortization:</strong> the number of years the payment is calculated over.</li>
              <li style={gs.li}><strong>Maturity:</strong> when the remaining balance is due.</li>
            </ul>
            <p style={gs.p}>
              A loan can have a rate fixed for 10 years, a payment based on 25 years, and the balance due at 15. That last payment is a <strong>balloon</strong>, and it means refinancing. For an adult family home that matters more than for a rental: the next lender will look at the home's license, occupancy and two years of income as they are then.
            </p>
            <p style={gs.p}>A longer fixed period gives steadier payments; an adjustable rate may start lower but can reset upward. Whichever you choose, know all three numbers before comparing rates.</p>

            <h2 style={gs.h2}>Which buyers a DSCR loan fits</h2>
            <Table
              head={["Buyer", "Fit", "Why"]}
              wrapFirst
              rows={[
                ["Buying an established, licensed home with two steady years", "Good", "The track record is exactly what is underwritten"],
                ["Buying a home that was recently half empty", "Weak", "The average pulls the income down"],
                ["Buying a house to convert into an AFH", "Poor", "No income history to count; other loans fit better"],
                ["Investor buying the building to lease to an operator", "Depends on the lender", "Many rental DSCR programs exclude care homes; ask first"],
              ]}
            />

            <h2 style={gs.h2}>The license does not come with the house</h2>
            <p style={gs.p}>
              When an adult family home changes hands, the buyer applies for a new license, and some specialty contracts, such as Expanded Community Services and Specialized Behavior Support, do not pass to the new owner automatically. Two years of the seller's income can therefore overstate the first months under new ownership. See <Link to="/afh-club/care-classifications-a-through-e" style={gs.link}>A Through E</Link> and the <Link to="/afh-club/afh-payment-field-guide" style={gs.link}>AFH Payment Field Guide</Link>.
            </p>

            <h2 style={gs.h2}>Never hide the plan</h2>
            <p style={gs.p}>
              If you intend to run an adult family home, tell the lender. Financing a property as an ordinary rental while planning a licensed care home can conflict with the loan terms, the insurance, and the statements you sign.
            </p>

            <div className="rpp-dark-surface" style={gs.callout}>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 12px", lineHeight: 1.3, fontFamily: FONT }}>Questions to ask any lender</h2>
              <ol style={{ margin: 0, paddingLeft: 0 }}>
                {/* Numbers written out: index.css strips list markers inside main. */}
                {DSCR_QUESTIONS.map((q, i) => (
                  <li key={q} style={{ listStyle: "none", display: "flex", gap: 10, fontSize: 19, lineHeight: 1.55, marginBottom: 8, color: "#fff", fontFamily: FONT }}>
                    <span style={{ fontWeight: 700, flex: "0 0 26px", whiteSpace: "nowrap" }}>{i + 1}.</span><span>{q}</span>
                  </li>
                ))}
              </ol>
            </div>

            <h2 style={gs.h2}>Lenders that publish AFH or DSCR programs</h2>
            <p style={gs.p}>
              From the AFH Club lender directory. Each is listed because its own published information mentions adult family home or DSCR lending, not because its terms have been confirmed. Real Property Planning receives no compensation from any lender.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {dscrLenders.map((l) => <LenderCard key={l.name} lender={l} why={l.dscrNote} />)}
            </div>
            <p style={{ ...gs.p, marginTop: 14 }}>
              The full directory, grouped by type of loan, is on <Link to="/afh-club/how-to-finance-an-afh" style={gs.link}>How to Finance an Adult Family Home</Link>. Looking for homes? See <Link to="/afh-club/listings" style={gs.link}>adult family homes for sale in Washington</Link>.
            </p>

            <p style={{ ...gs.p, fontSize: 17, color: "#2b2825", marginTop: 28 }}>
              This page is general educational information for people buying, selling or investing in an adult family home. It is not lending, financial or legal advice. Lender programs and SBA rules change; confirm current terms with the lender. Real Property Planning does not endorse or guarantee any lender, program, rate or approval.
            </p>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 560px) { .dscr-three { grid-template-columns: 1fr !important; } }` }} />
        <div style={{ padding: "0 16px" }}>
          <AuthorByline context="afh" />
        </div>
        <PageFAQ faqs={DSCR_FAQS} heading="DSCR Loans for Adult Family Homes: Common Questions" eyebrow="Frequently Asked Questions" id="afh-dscr-loans" />
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHDscrLoans;
