import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import PageFAQ from "@/components/PageFAQ";
import { Link } from "react-router-dom";
import executorImg from "@/assets/executors/executor-tile.webp";
import poaImg from "@/assets/executors/power-of-attorney-tile.webp";
import trusteeImg from "@/assets/executors/trustee-tile.webp";

const roles = [
  {
    title: "Executors",
    subtitle: "Personal Representatives",
    href: "/executors/executors-guide",
    image: executorImg,
    alt: "Executor reviewing estate documents at a desk",
    description:
      "An executor — called a Personal Representative in Washington — is named in a will or appointed by the court to manage a deceased person's estate, including securing and eventually selling real property.",
    responsibilities: [
      "Secure and inventory estate assets, including real property",
      "Obtain court authority (Letters Testamentary)",
      "Arrange a date-of-death property valuation",
      "Manage, prepare, and sell estate real estate",
    ],
  },
  {
    title: "Powers of Attorney",
    subtitle: "Acting on behalf of a living person",
    href: "/executors/power-of-attorney-guide",
    image: poaImg,
    alt: "Power of attorney document with pen and estate planning book",
    description:
      "A Power of Attorney lets one person (the agent) make decisions — including real estate decisions — on behalf of another person (the principal) who can no longer manage their own affairs.",
    responsibilities: [
      "Make financial and legal decisions on the principal's behalf",
      "Manage, maintain, or sell the principal's real property",
      "Act strictly in the principal's best interest",
      "Keep detailed records of all decisions",
    ],
  },
  {
    title: "Trustees",
    subtitle: "Administering assets held in trust",
    href: "/executors/trustees-guide",
    image: trusteeImg,
    alt: "Trustee meeting with beneficiaries outside a family home",
    description:
      "A trustee manages assets held in a trust — including real property — on behalf of the trust's beneficiaries, outside of court supervision.",
    responsibilities: [
      "Administer trust assets according to the trust document",
      "Manage, maintain, and sell trust-owned real property",
      "Treat all beneficiaries impartially",
      "Obtain independent valuations before selling trust property",
    ],
  },
];

const Executors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Executors, Powers of Attorney & Trustees | Real Property Planning"
      description="Guidance for Washington State executors, agents under power of attorney, and trustees managing estate and trust real property."
      canonical="https://realpropertyplanning.com/executors"
    />
    <BreadcrumbSchema items={[{ name: "Executors, POAs & Trustees", url: "/executors" }]} />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Executors, Powers of Attorney &amp; Trustees</HeroBandTitle>

      <DirectAnswerBlock
        question="What does an executor need to know about handling real estate in Washington State?"
        answer="An executor — legally called a Personal Representative — must secure the property, obtain court authority, arrange a date-of-death appraisal, and manage the sale carefully to protect both the estate and themselves from later disputes."
        supportSteps={[
          { label: "Executor", desc: "Named in a will or appointed by the court to administer the estate." },
          { label: "Power of Attorney", desc: "Acts on behalf of a living person, often before probate begins." },
          { label: "Trustee", desc: "Administers trust-owned property outside of court supervision." },
        ]}
      />

      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              When someone is named to manage another person's property — whether through a will, a legal document, or a
              trust — they take on a fiduciary role with real responsibilities. This page explains the three most common
              roles and links to detailed guidance for each.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div
                key={role.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Photo — sits cleanly above content, no overlap */}
                <div style={{ width: "100%", height: 200, overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={role.image}
                    alt={role.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                    sizes="100vw"
                    decoding="async"
                  />
                </div>

                {/* Title bar — navy background makes it the clear focal point.
                    Fixed height so all 3 cards align regardless of subtitle length. */}
                <div
                  style={{
                    padding: "14px 20px",
                    minHeight: 106,
                    background: "linear-gradient(180deg, #24406e 0%, #1B3A6B 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    flexShrink: 0,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                      fontSize: 34,
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      marginBottom: 6,
                    }}
                  >
                    {role.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                      color: "#c9d4e8",
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {role.subtitle}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                  <p
                    style={{
                      fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                      fontSize: 19,
                      color: "#111827",
                      lineHeight: 1.6,
                      margin: 0,
                      minHeight: 190,
                    }}
                  >
                    {role.description}
                  </p>
                  <div>
                    <div
                      style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: 15,
                        fontWeight: 900,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: "#1B3A6B",
                        marginBottom: 10,
                        lineHeight: 1.2,
                      }}
                    >
                      Key Responsibilities
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {role.responsibilities.map((r) => (
                        <li
                          key={r}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 9,
                            fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                            fontSize: 18,
                            color: "#111827",
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: "#1B3A6B", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>›</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "0 20px 22px", flexShrink: 0 }}>
                  <Link
                    to={role.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "linear-gradient(180deg, #24406e 0%, #1B3A6B 55%, #142c52 100%)",
                      boxShadow: "0 3px 0 0 #0f2140, 0 5px 12px rgba(27,58,107,0.35)",
                      borderRadius: 8,
                      padding: "13px 16px",
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {role.title} Guide
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFAQ
        id="executors"
        eyebrow="Quick Answers"
        heading="Executor, POA & Trustee Questions"
        faqs={[
          {
            question: "What is a Personal Representative in Washington State?",
            answer:
              "Personal Representative is Washington's legal term for what many people call an executor — the person named in a will, or appointed by the court, to administer a deceased person's estate. The role carries a fiduciary duty to act in the best interests of the estate and its beneficiaries, and it's governed by the Washington Probate Act (RCW Title 11).",
          },
          {
            question: "Does an executor need court approval to sell a house in Washington?",
            answer:
              "Washington allows non-intervention powers, which let most executors act — including selling estate real estate — without seeking separate court approval for each transaction, once that authority has been formally granted by the court. Confirm your specific authority with a probate attorney, since not every estate qualifies.",
          },
          {
            question: "What is a date-of-death appraisal, and why does an executor need one?",
            answer:
              "A date-of-death appraisal is a certified valuation of the property as of the date the person passed away. It establishes the estate's tax basis, supports the estate tax return if one is required, and gives the executor a defensible record if a beneficiary later questions the sale price.",
          },
          {
            question: "What's the difference between an executor, a Power of Attorney, and a trustee?",
            answer:
              "An executor administers a deceased person's estate under court supervision. A Power of Attorney agent acts on behalf of a living person who can no longer manage their own affairs. A trustee manages assets already placed in a trust, generally outside of court oversight. Each role carries its own fiduciary duties and real estate responsibilities.",
          },
          {
            question: "What's the biggest mistake executors make with estate real estate?",
            answer:
              "Skipping the date-of-death appraisal and relying on an online estimate instead. Without an independent, certified valuation, an executor has little defense if a beneficiary later claims the property was sold below market value — and that gap in documentation is one of the most common sources of executor liability.",
          },
        ]}
      />

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default Executors;
