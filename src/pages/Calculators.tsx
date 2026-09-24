import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareCalculatorSwitcher from "@/components/CareCalculatorSwitcher";
import { AFH_CALCULATORS, CALCULATOR_COUNT } from "@/data/calculatorIndex";
import { CARE_CALCULATORS } from "@/lib/careCalculators";

/**
 * /calculators (Sept 2026): every calculator on the site, in two groups.
 *
 * The homepage says the site has "10+ calculators". Until this page existed a
 * visitor could not check that, or find them all in one place. It is the
 * destination for that homepage figure.
 *
 * Nothing is defined here. The family calculators come from CARE_CALCULATORS
 * (rendered by CareCalculatorSwitcher, the same component their own hub uses)
 * and the adult family home tools from src/data/calculatorIndex.ts. Add a tool
 * in those files and it appears here.
 *
 * The two groups are kept visibly separate on purpose: families choosing care
 * and people buying or running an adult family home are different audiences
 * with different questions. Each group links on to its own hub.
 *
 * Class names avoid "card", "tile", "btn" and "cta" (sitewide substring rules
 * in index.css), and heading and paragraph spacing is set in PAGE_CSS with
 * !important because index.css overrides inline margins on every p and h1-h4.
 */

const NAVY = "#1B3A6B";
const PLUM = "#4c2a78";
const INK = "#141210";
const FONT = "'DM Sans', system-ui, sans-serif";

const PAGE_CSS = `
  .rpp-calcs h1.rpp-calcs-h1 { font-size: clamp(30px, 4.2vw, 44px) !important; line-height: 1.15 !important; margin: 0 0 12px !important; }
  .rpp-calcs h2.rpp-calcs-h2 { font-size: clamp(23px, 2.6vw, 30px) !important; line-height: 1.25 !important; margin: 0 0 8px !important; }
  .rpp-calcs p.rpp-calcs-p { font-size: 18px !important; line-height: 1.65 !important; margin: 0 0 22px !important; }
  .rpp-calcs p.rpp-calcs-kicker { font-size: 13px !important; letter-spacing: .15em; text-transform: uppercase; font-weight: 700; margin: 0 0 8px !important; }
  .rpp-calcs-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; grid-template-columns: 1fr; }
  @media (min-width: 760px) { .rpp-calcs-list { grid-template-columns: 1fr 1fr; } }
  .rpp-calcs-item.rpp-calcs-item { display: block; height: 100%; background: #fff; border: 1px solid #ddd5e8; border-left: 5px solid ${PLUM}; border-radius: 10px; padding: 16px 18px; text-decoration: none !important; box-sizing: border-box; }
  @media (hover: hover) { .rpp-calcs-item.rpp-calcs-item:hover { border-color: ${PLUM}; box-shadow: 0 8px 22px -12px rgba(76,42,120,.45); } }
  .rpp-calcs-item.rpp-calcs-item:focus-visible { outline: 3px solid #c9b3e6; outline-offset: 2px; }
  .rpp-calcs-item .rpp-calcs-name { display: block; font-family: ${FONT}; font-size: 19px; font-weight: 700; color: ${PLUM}; line-height: 1.3; margin-bottom: 4px; }
  .rpp-calcs-item .rpp-calcs-blurb { display: block; font-family: ${FONT}; font-size: 16.5px; line-height: 1.55; color: ${INK}; }
  .rpp-calcs-more.rpp-calcs-more { display: inline-block; margin-top: 18px; font-family: ${FONT}; font-size: 17px; font-weight: 700; text-decoration: underline !important; text-underline-offset: 4px; }
  .rpp-calcs-section { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
`;

const Calculators = () => (
  <>
    <SEOHead
      title="Calculators: Cost of Care and Adult Family Home Tools | Real Property Planning"
      description={`All ${CALCULATOR_COUNT} free calculators in one place. For Washington families: what care costs by care type. For adult family home buyers, owners and investors: property score, ROI, valuation, financing, and cost by city and county.`}
      canonical="https://realpropertyplanning.com/calculators"
    />
    <style>{PAGE_CSS}</style>
    <Header />
    <main className="rpp-calcs">
      <div style={{ background: "#faf8f4", borderBottom: `3px solid ${NAVY}` }}>
        <div className="rpp-calcs-section" style={{ paddingTop: 44, paddingBottom: 36 }}>
          <p className="rpp-calcs-kicker" style={{ color: NAVY, fontFamily: FONT }}>Free tools</p>
          <h1 className="rpp-calcs-h1" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>Calculators</h1>
          <p className="rpp-calcs-p" style={{ fontFamily: FONT, color: INK, maxWidth: 720 }}>
            {CALCULATOR_COUNT} calculators, in two groups. Each is free, asks for no contact details, and uses Washington figures.
          </p>
        </div>
      </div>

      {/* ---------- families ---------- */}
      <section style={{ background: "#ffffff" }}>
        <div className="rpp-calcs-section">
          <p className="rpp-calcs-kicker" style={{ color: "#0f5f57", fontFamily: FONT }}>For families</p>
          <h2 className="rpp-calcs-h2" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>What will care cost?</h2>
          <p className="rpp-calcs-p" style={{ fontFamily: FONT, color: INK, maxWidth: 760 }}>
            {CARE_CALCULATORS.length} calculators, one for each kind of care. Pick the setting you are considering and see what it is likely to cost per month and over time.
          </p>
          <CareCalculatorSwitcher layout="grid" />
          <Link to="/cost-of-care-calculator" className="rpp-calcs-more bg-transparent" style={{ color: "#0f5f57" }}>
            Compare all care options side by side
          </Link>
        </div>
      </section>

      {/* ---------- adult family home buyers, owners, investors ---------- */}
      <section style={{ background: "#faf8f4" }}>
        <div className="rpp-calcs-section">
          <p className="rpp-calcs-kicker" style={{ color: PLUM, fontFamily: FONT }}>For adult family home buyers, owners &amp; investors</p>
          <h2 className="rpp-calcs-h2" style={{ fontFamily: FONT, fontWeight: 700, color: INK }}>Is this home a good purchase?</h2>
          <p className="rpp-calcs-p" style={{ fontFamily: FONT, color: INK, maxWidth: 760 }}>
            {AFH_CALCULATORS.length} tools from AFH Club, for people buying, selling, financing, or running an adult family home in Washington.
          </p>
          <ul className="rpp-calcs-list">
            {AFH_CALCULATORS.map((c) => (
              <li key={c.href}>
                <Link to={c.href} className="rpp-calcs-item bg-transparent">
                  <span className="rpp-calcs-name">{c.title}</span>
                  <span className="rpp-calcs-blurb">{c.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/afh-club/calculators" className="rpp-calcs-more bg-transparent" style={{ color: PLUM }}>
            Go to AFH Calculators in AFH Club
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Calculators;
