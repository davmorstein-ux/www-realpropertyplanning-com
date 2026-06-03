import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";

const navy = "#1B3A6B";
const gold = "#C9A84C";
const crimson = "#8B0000";
const cream = "#FAF8F4";
const bodyGray = "#4a5568";
const lightBorder = "rgba(0,0,0,0.08)";
const raleway = "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif";
const georgia = "Georgia, 'Times New Roman', serif";

const sectionHeading: React.CSSProperties = {
  fontFamily: raleway,
  fontSize: 22,
  fontWeight: 800,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: navy,
  marginBottom: 14,
};

const bodyText: React.CSSProperties = {
  fontFamily: georgia,
  fontSize: 15,
  color: bodyGray,
  lineHeight: 1.8,
  margin: 0,
};

const firstSteps = [
  {
    number: "01",
    title: "Secure the Property Immediately",
    body: "Change the locks, forward the mail, and confirm insurance is active. An unoccupied home is a liability — vandalism, water damage, or a lapsed policy can create problems that complicate the sale later.",
  },
  {
    number: "02",
    title: "Obtain Letters Testamentary",
    body: "Before acting on behalf of the estate, the probate court must issue Letters Testamentary (or Letters of Administration if there is no will). Banks, title companies, and real estate agents all require this document.",
  },
  {
    number: "03",
    title: "Commission a Date-of-Death Appraisal",
    body: "A certified appraisal establishes the property's fair market value as of the date of death. This figure is essential for the estate tax return, cost-basis calculations, and defending the sale price to beneficiaries or the IRS.",
  },
  {
    number: "04",
    title: "Decide: Sell, Transfer, or Hold",
    body: "Most estate properties are sold to close the estate and distribute cash to beneficiaries. Some families choose to transfer the home to a beneficiary or hold it temporarily. Each path has tax and timeline implications.",
  },
  {
    number: "05",
    title: "Prepare and List the Property",
    body: "Estate homes often need decluttering, cleaning, and minor repairs before going on market. Work with a real estate broker experienced in estate sales — not every agent understands probate timelines, court approvals, or fiduciary constraints.",
  },
  {
    number: "06",
    title: "Close and Distribute Proceeds",
    body: "After debts, taxes, and costs of sale are satisfied, remaining proceeds are distributed to beneficiaries according to the will — or, if none exists, Washington State's intestacy laws.",
  },
];

const commonMistakes = [
  "Allowing utilities and insurance to lapse on the estate property",
  "Selling real estate without first obtaining Letters Testamentary",
  "Skipping the date-of-death appraisal and relying on Zillow estimates",
  "Making repairs that exceed what the estate can recover in sale price",
  "Distributing assets to beneficiaries before all debts and taxes are paid",
  "Failing to notify all heirs — even those not named in the will",
  "Mixing estate funds with personal accounts",
  "Accepting the first offer without understanding Washington's probate sale process",
];

const professionals = [
  {
    title: "Probate Attorney",
    body: "A probate attorney guides the legal process — filing with the court, obtaining Letters Testamentary, and ensuring distributions are made correctly. This is the most important professional to engage first.",
    link: "/professionals/probate-attorneys",
    label: "Find Probate Attorneys",
  },
  {
    title: "Certified Real Estate Appraiser",
    body: "A Washington State certified residential appraiser provides the date-of-death valuation required for tax purposes. This must be an independent, certified appraisal — not an online estimate.",
    link: "/resources/probate-estate-attorneys",
    label: "Find Appraisers",
  },
  {
    title: "Estate-Experienced Real Estate Broker",
    body: "Not every agent understands the constraints of a probate sale. Look for a broker with specific experience handling estate properties, court timelines, and fiduciary requirements.",
    link: "/professionals/probate-attorneys",
    label: "Find Real Estate Brokers",
  },
  {
    title: "Estate Sale Company",
    body: "Before the property can be sold, the contents often need to be cleared. An estate sale company handles pricing, marketing, and selling personal property — saving the executor significant time and effort.",
    link: "/resources/estate-sale-companies",
    label: "Find Estate Sale Companies",
  },
];

const ExecutorsGuide = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Executor's Guide | Real Property Planning"
      description="A practical guide for Washington State executors and Personal Representatives managing real estate in an estate."
      canonical="https://realpropertyplanning.com/executors/executors-guide"
    />
    <BreadcrumbSchema
      items={[
        { name: "Executors, POAs & Trustees", url: "/executors" },
        { name: "Executor's Guide", url: "/executors/executors-guide" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Executor's Guide</HeroBandTitle>

      {/* Intro */}
      <section style={{ background: cream, padding: "48px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p style={bodyText}>
              Being named executor of an estate is an honor — and a responsibility that arrives at one of the hardest
              moments in a family's life. Washington State calls this role the Personal Representative. Whether
              the estate includes a family home, investment property, or a house full of decades of belongings, this guide
              covers what to know about the real estate portion of the role.
            </p>
          </div>
        </div>
      </section>

      {/* Your Role */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 style={sectionHeading}>What an Executor Actually Does</h2>
            <p style={{ ...bodyText, marginBottom: 18 }}>
              An executor is named in a will to administer a deceased person's estate. If there is no will — or if
              the named executor cannot serve — the court appoints an administrator. Either way, the role carries the
              same legal weight: a fiduciary duty to act in the best interests of the estate and its beneficiaries.
            </p>
            <p style={bodyText}>
              For most estates, the largest and most complex asset is real property. A family home carries emotional
              weight, practical complications, and significant financial stakes. Getting it right — on timeline, on
              price, within legal bounds — is one of the executor's most important responsibilities.
            </p>

            <div
              style={{
                marginTop: 32,
                padding: "20px 24px",
                background: cream,
                borderRadius: 12,
                borderLeft: `4px solid ${gold}`,
              }}
            >
              <p style={{ ...bodyText, fontSize: 14 }}>
                Washington uses the term <em>Personal Representative</em> rather than "executor." The role is
                governed by the Washington Probate Act (RCW Title 11). Washington allows non-intervention
                powers, meaning most executors can act without court approval for each transaction — but this
                authority must be formally granted by the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section style={{ background: cream, padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 style={sectionHeading}>Managing Estate Real Estate: Six Key Steps</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }}>
              {firstSteps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    gap: 18,
                    padding: "22px 24px",
                    background: "#fff",
                    borderRadius: 12,
                    border: `1px solid ${lightBorder}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: raleway,
                      fontSize: 24,
                      fontWeight: 800,
                      color: gold,
                      lineHeight: 1,
                      flexShrink: 0,
                      width: 40,
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: raleway,
                        fontSize: 14,
                        fontWeight: 700,
                        color: navy,
                        marginBottom: 6,
                      }}
                    >
                      {step.title}
                    </div>
                    <p style={{ ...bodyText, fontSize: 14 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 style={sectionHeading}>Common Executor Mistakes</h2>
            <p style={{ ...bodyText, marginBottom: 18 }}>
              Executors are held to a high standard — even when acting in good faith. These are the mistakes that most
              often create legal exposure, delay the estate, or damage family relationships.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {commonMistakes.map((m) => (
                <div
                  key={m}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "14px 18px",
                    background: cream,
                    borderRadius: 10,
                    border: `1px solid ${lightBorder}`,
                  }}
                >
                  <span style={{ color: crimson, fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✕</span>
                  <span style={{ ...bodyText, fontSize: 14 }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professionals */}
      <section style={{ background: cream, padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 style={sectionHeading}>Professionals an Executor Will Need</h2>
            <p style={{ ...bodyText, marginBottom: 24 }}>
              Executors are not expected to handle everything alone. These are the key professionals involved in most
              Washington State estate real estate situations.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
              {professionals.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "22px 24px",
                    background: "#fff",
                    borderRadius: 12,
                    border: `1px solid ${lightBorder}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: raleway,
                      fontSize: 14,
                      fontWeight: 700,
                      color: navy,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </div>
                  <p style={{ ...bodyText, fontSize: 14, marginBottom: 12 }}>{item.body}</p>
                  <Link
                    to={item.link}
                    style={{
                      fontFamily: raleway,
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: gold,
                      textDecoration: "none",
                    }}
                  >
                    {item.label} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={sectionHeading}>Find the Right Professionals</h2>
            <p style={{ ...bodyText, marginBottom: 28 }}>
              The Real Property Planning network connects executors with experienced probate attorneys, appraisers, estate
              sale companies, and real estate brokers across Washington State.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/professionals"
                style={{
                  display: "inline-block",
                  fontFamily: raleway,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: navy,
                  padding: "14px 32px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Browse Professionals
              </Link>
              <Link
                to="/executors"
                style={{
                  display: "inline-block",
                  fontFamily: raleway,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: navy,
                  background: "transparent",
                  padding: "14px 32px",
                  borderRadius: 8,
                  border: `2px solid ${navy}`,
                  textDecoration: "none",
                }}
              >
                ← Back to All Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <DisclaimerSection />
  </div>
);

export default ExecutorsGuide;