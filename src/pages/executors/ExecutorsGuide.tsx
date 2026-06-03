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

const eyebrow: React.CSSProperties = {
  fontFamily: raleway,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: gold,
  marginBottom: 10,
};

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
    body: "Change the locks, forward the mail, and confirm insurance is active. An unoccupied home is a liability — vandalism, water damage, or lapse in coverage can create problems that complicate the sale later.",
  },
  {
    number: "02",
    title: "Obtain Letters Testamentary",
    body: "Before you can legally act on behalf of the estate, the probate court must issue Letters Testamentary (or Letters of Administration if there is no will). This document is what banks, title companies, and real estate agents require.",
  },
  {
    number: "03",
    title: "Commission a Date-of-Death Appraisal",
    body: "A certified appraisal establishes the property's fair market value as of the date of death. This figure is essential for the estate tax return, cost-basis calculations, and defending the sale price to beneficiaries or the IRS.",
  },
  {
    number: "04",
    title: "Decide: Sell, Transfer, or Hold",
    body: "Most estate properties are sold to close the estate and distribute cash to beneficiaries. But some families choose to transfer the home to a beneficiary or hold it temporarily. Each path has tax and timeline implications.",
  },
  {
    number: "05",
    title: "Prepare and List the Property",
    body: "Estate homes often need decluttering, cleaning, and minor repairs before going on market. Coordinate with a real estate broker experienced in estate sales — not every agent understands probate timelines, court approvals, or fiduciary constraints.",
  },
  {
    number: "06",
    title: "Close and Distribute Proceeds",
    body: "After debts, taxes, and costs of sale are satisfied, the remaining proceeds are distributed to beneficiaries according to the will or, if none exists, Washington State's intestacy laws.",
  },
];

const commonMistakes = [
  "Allowing utilities and insurance to lapse on the estate property",
  "Selling real estate without first obtaining Letters Testamentary",
  "Skipping the date-of-death appraisal and relying on Zillow estimates",
  "Making repairs or improvements that exceed what the estate can recover in sale price",
  "Distributing assets to beneficiaries before all debts and taxes are paid",
  "Failing to notify all heirs — even those not named in the will",
  "Mixing estate funds with personal accounts",
  "Accepting the first offer without understanding Washington's probate sale process",
];

const howWeHelp = [
  {
    icon: "📋",
    title: "Date-of-Death Appraisal",
    body: "A certified residential appraisal for estate and tax purposes, prepared by a Washington State Certified Residential Appraiser.",
  },
  {
    icon: "🏡",
    title: "Estate Property Sale",
    body: "Full-service real estate representation for probate and estate sales, from pricing strategy through closing — with experience navigating court timelines.",
  },
  {
    icon: "🤝",
    title: "Professional Coordination",
    body: "Connections to vetted probate attorneys, estate sale companies, property cleanout crews, and senior living specialists across Western Washington.",
  },
  {
    icon: "📞",
    title: "Out-of-State Support",
    body: "Many executors live outside Washington. We're accustomed to working remotely — handling the details on the ground while you manage from afar.",
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
            <div style={eyebrow}>Washington State Personal Representatives</div>
            <p style={bodyText}>
              Being named executor of an estate is an honor — and a responsibility that arrives at one of the hardest
              moments in a family's life. Washington State calls this role the Personal Representative. Whether
              the estate includes a family home, investment property, or a house full of decades of belongings, this guide
              covers what you need to know about the real estate portion of your duties.
            </p>
          </div>
        </div>
      </section>

      {/* Your Role */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div style={eyebrow}>Your Role</div>
            <h2 style={sectionHeading}>What an Executor Actually Does</h2>
            <p style={{ ...bodyText, marginBottom: 18 }}>
              An executor is named in a will to administer a deceased person's estate. If there is no will — or if the
              named executor cannot serve — the court appoints an administrator. Either way, the role carries the same
              legal weight: a fiduciary duty to act in the best interests of the estate and its beneficiaries.
            </p>
            <p style={bodyText}>
              For most estates, the largest and most complex asset is real property. A family home carries emotional
              weight, practical complications, and significant financial stakes. Getting it right — on timeline, on
              price, within legal bounds — is one of your most important jobs.
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
              <div style={{ ...eyebrow, marginBottom: 6 }}>Washington State Note</div>
              <p style={{ ...bodyText, fontSize: 14 }}>
                Washington uses the term <em>Personal Representative</em> rather than "executor." The role is
                governed by the Washington Probate Act (RCW Title 11). Washington is one of the few states that allows{" "}
                <em>non-intervention powers</em>, meaning most executors can act without court approval for each
                transaction — but this authority must be formally granted by the court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section style={{ background: cream, padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div style={eyebrow}>Step by Step</div>
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
            <div style={eyebrow}>What to Avoid</div>
            <h2 style={sectionHeading}>Common Executor Mistakes</h2>
            <p style={{ ...bodyText, marginBottom: 24 }}>
              Executors are held to a high standard — even when they're acting in good faith. These are the mistakes
              that most often create legal exposure, delay the estate, or damage family relationships.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0, listStyle: "none" }}>
              {commonMistakes.map((m) => (
                <li
                  key={m}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontFamily: georgia,
                    fontSize: 14,
                    color: bodyGray,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: crimson, fontWeight: 700, flexShrink: 0 }}>✕</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section style={{ background: cream, padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div style={eyebrow}>How We Can Help</div>
            <h2 style={sectionHeading}>Real Property Planning for Executors</h2>
            <p style={{ ...bodyText, marginBottom: 28 }}>
              We work alongside executors throughout Western Washington — providing the appraisal work, real estate
              expertise, and professional connections you need to fulfill your responsibilities with confidence.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {howWeHelp.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "24px",
                    border: `1px solid ${lightBorder}`,
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div
                    style={{
                      fontFamily: raleway,
                      fontSize: 13,
                      fontWeight: 700,
                      color: navy,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </div>
                  <p style={{ ...bodyText, fontSize: 13 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: navy, padding: "64px 0" }}>
        <div className="container px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div style={{ ...eyebrow, color: gold }}>Get in Touch</div>
            <h2
              style={{
                fontFamily: raleway,
                fontSize: 24,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Ready to Talk Through the Property?
            </h2>
            <p
              style={{
                fontFamily: georgia,
                fontSize: 15,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              No pressure. We're happy to walk through the situation, answer questions about timing and valuation, and help
              you understand your options — before you commit to anything.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: gold,
                  borderRadius: 8,
                  padding: "12px 28px",
                  fontFamily: raleway,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/executors"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 8,
                  padding: "12px 28px",
                  fontFamily: raleway,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                ← Back to All Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DisclaimerSection />
    </main>
  </div>
);

export default ExecutorsGuide;