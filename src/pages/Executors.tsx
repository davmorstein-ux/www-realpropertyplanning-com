import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";
import executorImg from "@/assets/executors/executor-tile.webp";
import poaImg from "@/assets/executors/power-of-attorney-tile.webp";
import trusteeImg from "@/assets/executors/trustee-tile.webp";

const roles = [
  {
    title: "Executors",
    subtitle: "Also called Personal Representatives in Washington State",
    href: "/executors/executors-guide",
    image: executorImg,
    alt: "Executor reviewing estate documents at a desk",
    description:
      "An executor is a person named in a will — or appointed by a court — to administer a deceased person's estate. In Washington State, this role is formally called a Personal Representative. The executor is responsible for identifying and securing assets, paying debts and taxes, communicating with beneficiaries, and ultimately distributing what remains according to the will or state law.",
    responsibilities: [
      "Secure and inventory estate assets, including real property",
      "Obtain Letters Testamentary or Letters of Administration from the court",
      "Arrange date-of-death valuations for tax and accounting purposes",
      "Manage, prepare, and sell estate real estate",
      "Pay valid debts, taxes, and estate expenses",
      "Distribute remaining assets to beneficiaries",
      "Maintain a defensible fiduciary record throughout",
    ],
  },
  {
    title: "Powers of Attorney",
    subtitle: "Acting on behalf of a living person",
    href: "/executors/power-of-attorney-guide",
    image: poaImg,
    alt: "Power of attorney document with pen and estate planning book",
    description:
      "A Power of Attorney (POA) is a legal document that grants one person — the agent — the authority to act on behalf of another — the principal — while the principal is still alive. A Durable Power of Attorney remains in effect even if the principal becomes incapacitated. Agents under a POA often face real estate decisions when a senior can no longer manage their own affairs.",
    responsibilities: [
      "Make financial and legal decisions on the principal's behalf",
      "Manage, maintain, or sell the principal's real property",
      "Pay bills, manage bank accounts, and file taxes",
      "Coordinate with care providers and family members",
      "Act strictly in the principal's best interest at all times",
      "Keep detailed records of all decisions and transactions",
    ],
  },
  {
    title: "Trustees",
    subtitle: "Administering assets held in trust",
    href: "/executors/trustees-guide",
    image: trusteeImg,
    alt: "Trustee meeting with beneficiaries outside a family home",
    description:
      "A trustee is a person or institution appointed to manage assets held in a trust on behalf of the trust's beneficiaries. Unlike an executor, a trustee operates outside of court supervision — but carries an equally serious fiduciary duty. Trust-owned real estate must be managed and sold in accordance with the trust document and in the best interests of all beneficiaries.",
    responsibilities: [
      "Administer trust assets according to the trust document",
      "Manage, maintain, and sell trust-owned real property",
      "Distribute income and principal to beneficiaries as directed",
      "Keep accurate records and provide accountings",
      "Treat all beneficiaries impartially and act without self-interest",
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
            {roles.map((role, index) => (
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
                {/* Photo */}
                <div style={{ width: "100%", height: 200, overflow: "hidden" }}>
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
                  />
                </div>

                {/* Title bar */}
                <div style={{ padding: "18px 24px 14px", borderBottom: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                  <h2
                    style={{
                      fontFamily: "'Raleway', 'Gill Sans', 'Century Gothic', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#1B3A6B",
                      marginBottom: 4,
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                  >
                    {role.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#8B6914",
                      textAlign: "center",
                    }}
                  >
                    {role.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div style={{ padding: "16px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                  <p 
                    className={index === 0 || index === 1 ? "text-lg" : "text-base"}
                    style={{ fontFamily: "Georgia, serif", color: "#4a5568", lineHeight: 1.75 }}
                  >
                    {role.description}
                  </p>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#8B6914",
                        marginBottom: 10,
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
                        gap: 7,
                      }}
                    >
                      {role.responsibilities.map((r) => (
                        <li
                          key={r}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            fontFamily: "Georgia, serif",
                            fontSize: 13,
                            color: "#4a5568",
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: "#C9A84C", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>›</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "0 24px 24px" }}>
                  <Link
                    to={role.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      background: "#C9A84C",
                      borderRadius: 8,
                      padding: "10px 16px",
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {role.title} Guide
                    <svg
                      viewBox="0 0 24 24"
                      width="13"
                      height="13"
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

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default Executors;
