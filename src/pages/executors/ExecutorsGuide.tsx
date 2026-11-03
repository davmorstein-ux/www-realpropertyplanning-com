import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";
import ProbateStartHere from "@/components/ProbateStartHere";

import NextQuestions from "@/components/NextQuestions";
import RppArrow from "@/components/RppArrow";
import BackLink from "@/components/BackLink";
const navy = "#1B3A6B";
const gold = "#6b84ad";
const crimson = "#8B0000";
const cream = "#FAF8F4";
const bodyGray = "#1c1917";
const lightBorder = "rgba(0,0,0,0.08)";
const raleway = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";
const georgia = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

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
    body: "Change the locks, forward the mail, and confirm insurance is active. Vandalism, water damage or a lapsed policy on an empty house can complicate the sale later.",
  },
  {
    number: "02",
    title: "Obtain Letters Testamentary",
    body: "If the estate goes through probate, the court must issue Letters Testamentary (or Letters of Administration if there is no will) before you can act for it. Banks, title companies and real estate agents will ask for them. Property held in a trust or passing by a transfer on death deed or survivorship follows its own route.",
  },
  {
    number: "03",
    title: "Commission a Date-of-Death Appraisal",
    body: "A certified appraisal establishes the property's fair market value as of the date of death. That figure sets the heirs' stepped-up tax basis, is needed for an estate tax return if the estate is large enough to owe one, and supports the sale price if beneficiaries or the IRS question it.",
  },
  {
    number: "04",
    title: "Decide: Sell, Transfer, or Hold",
    body: "Most estate properties are sold to close the estate and distribute cash to beneficiaries. Some families transfer the home to a beneficiary or hold it for a while instead. Each option has different tax and timeline consequences.",
  },
  {
    number: "05",
    title: "Prepare and List the Property",
    body: "Estate homes often need decluttering, cleaning, and minor repairs before going on market. Use a real estate broker experienced in estate sales; not every agent understands probate timelines, when court approval is needed, or fiduciary constraints.",
  },
  {
    number: "06",
    title: "Close and Distribute Proceeds",
    body: "After debts, taxes and costs of sale are paid, the remaining proceeds go to the beneficiaries under the will or, if there is no will, under Washington State's intestacy laws.",
  },
];

const commonMistakes = [
  "Allowing utilities and insurance to lapse on the estate property",
  "Selling real estate without first obtaining Letters Testamentary",
  "Skipping the date-of-death appraisal and relying on Zillow estimates",
  "Making repairs that exceed what the estate can recover in sale price",
  "Distributing assets to beneficiaries before all debts and taxes are paid",
  "Failing to notify all heirs, including those not named in the will",
  "Mixing estate funds with personal accounts",
  "Accepting the first offer without understanding Washington's probate sale process",
];

const professionals = [
  {
    title: "Probate Attorney",
    body: "A probate attorney handles the legal process: filing with the court, obtaining Letters Testamentary, and making sure distributions are made correctly. This is the professional to engage first.",
    link: "/professionals/probate-attorneys",
    label: "Find Probate Attorneys",
  },
  {
    title: "Certified Real Estate Appraiser",
    body: "A Washington State certified residential appraiser provides the date-of-death valuation used for tax basis and the estate inventory. An independent appraisal holds up far better than an online estimate if the value is ever questioned.",
    link: "/real-estate-appraiser",
    label: "Find Appraisers",
  },
  {
    title: "Estate-Experienced Real Estate Broker",
    body: "Not every agent understands the constraints of a probate sale. Look for a broker with specific experience handling estate properties, court timelines, and fiduciary requirements.",
    link: "/realtor",
    label: "Find Real Estate Brokers",
  },
  {
    title: "Estate Sale Company",
    body: "Before the property can be sold, the contents often need to be cleared. An estate sale company prices, markets and sells the personal property, which saves the executor a great deal of time.",
    link: "/estate-liquidators",
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
      <ProbateStartHere />
      <HeroBandTitle as="h1">Executor's Guide</HeroBandTitle>

      {/* Intro */}
      <section style={{ background: cream, padding: "48px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p style={bodyText}>
              This guide covers the real estate side of serving as executor of a Washington estate, from securing the
              house to distributing the sale proceeds. Washington State calls this role the Personal Representative. The
              same steps apply whether the estate holds a family home, an investment property or a house full of
              decades of belongings.
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
              An executor is named in a will to administer a deceased person's estate. If there is no will, or if
              the named executor cannot serve, the court appoints an administrator. Either way, the role carries the
              same legal weight: a fiduciary duty to act in the best interests of the estate and its beneficiaries.
            </p>
            <p style={bodyText}>
              In most estates, real property is the largest and most complex asset. A family home has to be secured,
              valued and usually sold, often while relatives disagree about it. Handling the house on time, at a fair
              price and within the law is among the executor's main responsibilities.
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
                governed by the Washington Probate Act (RCW Title 11). Washington courts can grant
                nonintervention powers to the personal representative of a solvent estate, so they can act without
                court approval for each transaction (RCW 11.68.011); the court must grant this authority.
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
                      color: "#1B3A6B",
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
              Executors are held to a high standard, even when they act in good faith. These mistakes most often
              create legal exposure, delay the estate or damage family relationships.
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
              Most Washington estates that include real estate involve these four professionals. Executors are not
              expected to handle everything alone.
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
                      color: "#1B3A6B",
                      textDecoration: "none",
                    }}
                  >
                    {item.label} <RppArrow />
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
            <h2 style={sectionHeading}>Find Professionals</h2>
            <p style={{ ...bodyText, marginBottom: 28 }}>
              Real Property Planning's Find a Professional page lists independent professionals, including an appraiser, a
              broker and an estate liquidation service, whom you contact and hire directly. Choose a probate attorney yourself.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/building-your-professional-team"
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
              <BackLink to="/executors" label="All Roles" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    {/* "Your next questions" (Oct 21, 2026): entries in src/data/nextQuestions.ts. */}
    <NextQuestions />
    <DisclaimerSection />
  </div>
);

export default ExecutorsGuide;