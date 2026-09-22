import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import PageFAQ from "@/components/PageFAQ";
import { LANES, LENDERS, SBA_RATE_BOX, type LaneId } from "@/data/afhLenders";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

/**
 * How to Finance an Adult Family Home in Washington (Sept 2026).
 *
 * Educational first, directory second. Opens with the one idea everything
 * hangs on (a house that runs a licensed business falls between residential
 * and commercial lending), asks the reader what they are buying, routes them
 * to a financing lane, explains the lender's coverage test, and only then
 * lists lenders — grouped by lane, quoted from their published information,
 * with a "confirmed" date once David has spoken to them.
 */

const TEAL = "#0f766e";
const TEAL_DARK = "#0b5b55";
const NAVY = "#1B3A6B";
const INK = "#141210";

const fmtDate = (iso: string) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const SITUATIONS: { label: string; lane: LaneId; note: string }[] = [
  { label: "The home only — and I will live there and run it", lane: "residential", note: "You are the buyer residential lenders can work with. Start with the owner-occupied lane; if the seller is also charging for the business, plan to pay that in cash or on seller terms." },
  { label: "The home plus the existing licensed AFH business", lane: "sba7a", note: "You are buying a business with real estate attached. SBA 7(a) is built for exactly this and is the only route that finances the business portion." },
  { label: "An AFH as an investment — someone else will operate it", lane: "portfolio", note: "Residential owner-occupied programs and most SBA structures are off the table. Portfolio or commercial lending is the lane, and expect to bring real cash." },
  { label: "A house I will convert and license as an AFH", lane: "residential", note: "If you will live there, an owner-occupied residential loan — possibly a renovation program — is the usual start. There is no business to finance yet; the licence comes after the work." },
  { label: "Another location — I already own and run an AFH", lane: "sba7a", note: "Experienced operators have the widest choice: SBA 7(a) for a purchase with the business, 504 for the real estate, or portfolio lending if speed matters more than the down payment." },
];

const FAQS = [
  { question: "Why do most AFH buyers use an SBA loan instead of a regular mortgage?", answer: "Because an adult family home is a house that runs a licensed business, and that puts it in a gap: most residential programs treat the care business as commercial use and will not count its revenue, while commercial lenders want 25–35% down and will not finance the business portion at all. The SBA guarantee lets a bank accept about 10% down, a 25-year term, and a loan that includes the business. The price is a higher, variable rate." },
  { question: "Can I get a regular home mortgage on an adult family home?", answer: "Sometimes. A handful of Puget Sound lenders write owner-occupied residential mortgages on licensed AFHs for buyers who will live in the home and can qualify on their own income and credit. It is the cheapest money available and the lowest down payment, but it finances the house, not the business, and not every lender will do it." },
  { question: "What is the difference between SBA 7(a) and SBA 504?", answer: "7(a) is the general-purpose loan: one lender, about 10% down, up to 25 years, and it can include the business, working capital and closing costs. 504 pairs a bank with a Certified Development Company to finance owner-occupied real estate at a lower fixed rate, but it cannot finance the business portion." },
  { question: "What does the lender check before approving an AFH loan?", answer: "Whether the home's income covers the loan payment. The lender takes last year's net operating income — after operating costs and, for a buyer who will hire staff, the wages to replace the owners' own hours — and divides it by the annual debt service. Most want at least 1.25 times. Occupancy on the tax returns moves this more than anything else." },
  { question: "Does Real Property Planning recommend these lenders or get paid by them?", answer: `No. The list is informational and unpaid. Each lender is included because it publishes information showing it understands adult family homes; entries marked 'confirmed' are ones ${FEATURED_BROKER.name} has spoken with about their current AFH lending. RPP does not guarantee financing or terms, and a buyer's actual loan depends on the lender and the file.` },
];

const HowToFinanceAnAFH = () => {
  const [situation, setSituation] = useState<number | null>(null);
  const chosen = situation === null ? null : SITUATIONS[situation];
  const laneFor = (id: LaneId) => LANES.find((l) => l.id === id)!;

  const h2: React.CSSProperties = { fontSize: 28, fontWeight: 700, color: NAVY, margin: "40px 0 12px", lineHeight: 1.25, fontFamily: "'DM Sans', system-ui, sans-serif" };
  const h3: React.CSSProperties = { fontSize: 22, fontWeight: 700, color: TEAL_DARK, margin: "24px 0 8px", lineHeight: 1.3, fontFamily: "'DM Sans', system-ui, sans-serif" };
  const p: React.CSSProperties = { fontSize: 19, lineHeight: 1.7, color: INK, margin: "0 0 16px", fontFamily: "'DM Sans', system-ui, sans-serif" };
  const li: React.CSSProperties = { fontSize: 18, lineHeight: 1.6, color: INK, marginBottom: 6 };
  const card: React.CSSProperties = { background: "#fff", border: `2px solid ${TEAL}`, borderRadius: 14, padding: "1.5rem 1.4rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" };

  return (
    <>
      <SEOHead
        title="How to Finance an Adult Family Home in Washington | Residential, SBA 7(a), 504 and Commercial | AFH Club"
        description="How buyers finance a Washington adult family home: owner-occupied residential mortgages, SBA 7(a) business acquisition loans, SBA 504, and portfolio lending — what each requires, what the lender checks, current SBA rate ceilings, and lenders that work with AFHs."
        schemaJson={{ "@context": "https://schema.org", "@type": "Article", headline: "How to Finance an Adult Family Home in Washington", author: { "@type": "Person", name: `${FEATURED_BROKER.name}` }, dateModified: "2026-09-18", url: "https://realpropertyplanning.com/afh-club/how-to-finance-an-afh" }}
      />
      <Header />
      <main>
        <div style={{ background: "#f5f2ec", padding: "48px 24px 40px", borderBottom: `3px solid ${TEAL}` }}>
          <div style={{ maxWidth: 900, margin: "0 auto", paddingTop: "var(--header-height, 100px)" }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: TEAL_DARK, marginBottom: 10, fontFamily: "'DM Sans', system-ui, sans-serif" }}>For buyers, sellers &amp; new operators</p>
            <h1 style={{ fontSize: "clamp(30px,4.2vw,44px)", fontWeight: 700, color: INK, marginBottom: 12, lineHeight: 1.2, fontFamily: "'DM Sans', system-ui, sans-serif" }}>How to Finance an Adult Family Home in Washington</h1>
            <p style={{ ...p, maxWidth: 720, margin: 0 }}>Residential mortgage, SBA 7(a), SBA 504, or a commercial loan — which one fits depends on one question: are you buying a house, or a business that comes with a house?</p>
          </div>
        </div>

        <div style={{ background: "#f5f2ec", padding: "2rem 1rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            {/* The one idea */}
            <div style={card}>
              <h2 style={{ ...h2, marginTop: 0 }}>Why an AFH is hard to finance the normal way</h2>
              <p style={p}>An adult family home is a house that runs a licensed business. When you buy a house to live in, the lender looks at your income and the house's value. When you buy an adult family home, the house is what produces the income — through a business with residents, staff, and state contracts. That puts it in a gap between two kinds of lending.</p>
              <p style={p}><strong>Residential lenders</strong> write loans against your personal income and a home you occupy. Many treat a licensed care business in the house as commercial use and decline; those that will lend generally do not count the AFH's revenue as your income. <strong>Commercial lenders</strong> write loans against a business's income, but on business terms: shorter loans, bigger down payments, and no appetite for the intangible part of the purchase — the licence, the contracts, the residents — that a seller is charging for.</p>
              <p style={{ ...p, marginBottom: 0 }}>The SBA programs exist to fill exactly that gap, which is why they finance most AFH sales. But they are not the only lane, and the cheapest one is often overlooked.</p>
            </div>

            {/* Chooser */}
            <div style={{ ...card, marginTop: 24, background: "#e6f2f0" }}>
              <h2 style={{ ...h2, marginTop: 0 }}>What are you buying?</h2>
              <p style={p}>Pick the one that fits. The lane it points to is where to start — not the only door, but the one most likely to open.</p>
              <div style={{ display: "grid", gap: 10 }}>
                {SITUATIONS.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSituation(i)}
                    aria-pressed={situation === i}
                    style={{
                      textAlign: "left",
                      fontSize: 18,
                      fontWeight: 700,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: `2px solid ${situation === i ? TEAL : "#b7ccc8"}`,
                      background: situation === i ? TEAL : "#ffffff",
                      color: situation === i ? "#ffffff" : INK,
                      cursor: "pointer",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              {chosen && (
                <div style={{ marginTop: 16, background: "#fff", borderLeft: `6px solid ${TEAL}`, borderRadius: 8, padding: "14px 16px" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: TEAL_DARK, marginBottom: 4 }}>Start with: {laneFor(chosen.lane).title}</div>
                  <div style={{ fontSize: 18, lineHeight: 1.6, color: INK }}>{chosen.note}</div>
                  <a href={`#lane-${chosen.lane}`} style={{ display: "inline-block", marginTop: 8, fontSize: 18, fontWeight: 700, color: TEAL }}>Read about this lane and see lenders ↓</a>
                </div>
              )}
            </div>

            {/* Lanes */}
            <h2 style={h2}>The four ways an AFH gets financed</h2>
            {LANES.map((lane) => (
              <div key={lane.id} id={`lane-${lane.id}`} style={{ ...card, marginBottom: 20, scrollMarginTop: 120 }}>
                <h3 style={{ ...h3, marginTop: 0, fontSize: 24 }}>{lane.title}</h3>
                <p style={{ ...p, fontWeight: 700, color: TEAL_DARK }}>{lane.who}</p>
                <p style={p}>{lane.summary}</p>
                <div className="fin-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: INK, marginBottom: 6 }}>Typically</div>
                    <ul style={{ margin: 0, paddingLeft: 22 }}>{lane.typical.map((t) => <li key={t} style={li}>{t}</li>)}</ul>
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: INK, marginBottom: 6 }}>Trade-offs</div>
                    <ul style={{ margin: 0, paddingLeft: 22 }}>{lane.tradeoffs.map((t) => <li key={t} style={li}>{t}</li>)}</ul>
                  </div>
                </div>
                {/* Lenders in this lane */}
                {LENDERS.filter((l) => l.lane === lane.id).length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: INK, marginBottom: 10, borderTop: `1px solid ${TEAL}55`, paddingTop: 14 }}>Lenders that publish AFH lending in this lane</div>
                    <div style={{ display: "grid", gap: 12 }}>
                      {LENDERS.filter((l) => l.lane === lane.id).map((l) => (
                        <div key={l.name} style={{ background: "#f5f2ec", border: "1px solid #dccdce", borderRadius: 10, padding: "14px 16px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, alignItems: "baseline" }}>
                            <div style={{ fontSize: 20, fontWeight: 700, color: NAVY }}>{l.name} <span style={{ fontSize: 16, fontWeight: 600, color: "#3b3733" }}>· {l.location}</span></div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: l.verified ? "#15803d" : "#7a4a00", background: l.verified ? "#dcfce7" : "#fef3c7", borderRadius: 999, padding: "3px 10px" }}>
                              {l.verified ? `Confirmed ${fmtDate(l.verified)}` : "From published information — not yet confirmed"}
                            </div>
                          </div>
                          {l.publishedTerms && <div style={{ fontSize: 17, lineHeight: 1.55, color: INK, marginTop: 8 }}>{l.publishedTerms} <span style={{ color: "#3b3733" }}>(lender's published terms as of {fmtDate(l.termsAsOf)})</span></div>}
                          <div style={{ fontSize: 17, lineHeight: 1.55, color: INK, marginTop: 6 }}><strong>Best fit:</strong> {l.bestFit}</div>
                          {l.note && <div style={{ fontSize: 16, color: "#7a4a00", marginTop: 6 }}>{l.note}</div>}
                          {(l.contacts.length > 0 || l.phone) && (
                            <div style={{ fontSize: 17, color: INK, marginTop: 8, lineHeight: 1.6 }}>
                              {l.contacts.map((c) => (
                                <div key={c.name}>
                                  <strong>{c.name}</strong>{c.role ? `, ${c.role}` : ""}{c.phone ? ` · ${c.phone}` : ""}{c.nmls ? ` · NMLS ${c.nmls}` : ""}
                                </div>
                              ))}
                              {l.phone && <div>{l.phone}</div>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Rate ceiling box */}
            <div style={{ ...card, background: "#fff", borderColor: NAVY }}>
              <h2 style={{ ...h2, marginTop: 0, fontSize: 24 }}>Current SBA 7(a) variable-rate ceiling</h2>
              <p style={p}>SBA caps the variable rate a lender may charge at a base rate plus a spread that depends on loan size. With the WSJ Prime rate at <strong>{SBA_RATE_BOX.primeRate.toFixed(2)}%</strong> (as of {fmtDate(SBA_RATE_BOX.primeAsOf)}), the ceilings are:</p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", fontSize: 18, borderCollapse: "collapse", color: INK }}>
                  <thead>
                    <tr style={{ borderBottom: `2px solid ${NAVY}` }}>
                      <th style={{ textAlign: "left", padding: "8px 6px" }}>Loan amount</th>
                      <th style={{ textAlign: "center", padding: "8px 6px" }}>Maximum spread</th>
                      <th style={{ textAlign: "center", padding: "8px 6px" }}>Maximum rate today</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SBA_RATE_BOX.spreads.map((s) => (
                      <tr key={s.band} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "8px 6px" }}>{s.band}</td>
                        <td style={{ padding: "8px 6px", textAlign: "center" }}>Prime + {s.spread.toFixed(2)}%</td>
                        <td style={{ padding: "8px 6px", textAlign: "center", fontWeight: 700 }}>{(SBA_RATE_BOX.primeRate + s.spread).toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ ...p, marginTop: 12, marginBottom: 0, fontSize: 17 }}>For a typical AFH purchase — a loan over $350,000 — the ceiling is <strong>{(SBA_RATE_BOX.primeRate + 3).toFixed(2)}%</strong>. That is a maximum, not a quote; strong files price below it. SBA publishes a separate table for fixed-rate 7(a) loans. Last verified {fmtDate(SBA_RATE_BOX.verifiedOn)}.</p>
            </div>

            {/* Lender's test */}
            <h2 style={h2}>What every lender checks</h2>
            <p style={p}>Whichever lane, the lender's central question is the same: <strong>will the home's income cover the loan payment?</strong> They take last year's net operating income — after operating costs and, for a buyer who will hire staff, the wages needed to replace the hours the current owners work — and divide it by the annual loan payment. Most want at least <strong>1.25×</strong>: income one and a quarter times the payment.</p>
            <p style={p}>Three things about that test surprise newcomers. It uses <strong>last year's tax returns</strong>, not projections. It counts <strong>every</strong> loan payment on the deal — house, business, seller note — because they are all paid from the same income. And it treats an <strong>owner-operator</strong> who will work in the home very differently from an <strong>investor</strong> who will hire staff; the same home supports a much higher price for the first.</p>
            <p style={p}>Occupancy moves this test more than anything else. Each additional resident adds a full year of rate while adding little to costs. Two residents can be the difference between a lender declining and approving at full price. <Link to="/afh-club/afh-financing-calculator" style={{ color: TEAL, fontWeight: 700 }}>Our Occupancy &amp; Financing Calculator</Link> shows this for any home.</p>

            {/* Checklists */}
            <div className="fin-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 8 }}>
              <div style={card}>
                <h3 style={{ ...h3, marginTop: 0 }}>If you're buying</h3>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  <li style={li}>Get pre-qualified in your lane before you shop. SBA closes in 45–90 days; start early.</li>
                  <li style={li}>Ask for two years of tax returns and the resident roster with payer types. That is what your lender will underwrite.</li>
                  <li style={li}>Ask about the contracts. ECS, SBS, Meaningful Day and DDA contracts do not transfer on a sale — confirm you can qualify for your own before you price them in.</li>
                  <li style={li}>Ask for a price allocation between house and business. It decides what you can finance and how.</li>
                  <li style={li}>Consider asking for seller financing on the business. It replaces your most expensive loan.</li>
                </ul>
              </div>
              <div style={card}>
                <h3 style={{ ...h3, marginTop: 0 }}>If you're selling</h3>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  <li style={li}>Price for the SBA buyer — most of the market. Their lender underwrites your returns and occupancy, not your hopes.</li>
                  <li style={li}>Fill the beds before you list, or during it. Every resident on the returns raises the approvable price.</li>
                  <li style={li}>State the allocation between house and business in the listing.</li>
                  <li style={li}>Offer to carry the business portion. It widens the buyer pool and costs you little.</li>
                  <li style={li}>Know which buyer can keep your contracts, and market to them.</li>
                </ul>
              </div>
            </div>

            <p style={{ ...p, marginTop: 28 }}>
              Ready to look at what is on the market? See <Link to="/afh-club/listings" style={{ color: TEAL, fontWeight: 700 }}>adult family homes for sale in Washington</Link>: properties, businesses, and leases, each labeled by what is actually being sold.
            </p>

            {/* Disclaimer */}
            <p style={{ ...p, fontSize: 17, color: "#2b2825", marginTop: 28 }}>
              Real Property Planning receives no compensation from any lender listed and does not endorse or guarantee any lender, program, rate, or approval. Lenders are listed because they publish information showing they work with adult family homes; "confirmed" entries are ones {FEATURED_BROKER.name} has spoken with about their current AFH lending. Published terms change; verify everything with the lender. This page is general information, not lending or financial advice.
            </p>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .fin-two { grid-template-columns: 1fr !important; } }`}</style>
        <PageFAQ faqs={FAQS} heading="Financing an Adult Family Home: Common Questions" eyebrow="Frequently Asked Questions" id="afh-how-to-finance" />
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default HowToFinanceAnAFH;
