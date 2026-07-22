import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";

const SERVICES = [
  { name: "24/7 Professional Staffing", detail: "Licensed nurses and caregivers available around the clock." },
  { name: "Medication Management", detail: "Careful administration and monitoring of all medications." },
  { name: "Memory Care & Dementia Support", detail: "Specialized programs for residents with cognitive challenges." },
  { name: "Personal Care Assistance", detail: "Help with bathing, dressing, grooming, and mobility." },
  { name: "Respite Care", detail: "Short-term care to give family caregivers a break." },
  { name: "Transportation Services", detail: "Safe transport to medical appointments and outings." },
  { name: "Music Therapy Sessions", detail: "Weekly sessions with professional music therapists." },
  {
    name: "In-house Doctor & Nurse Visits",
    detail: "Doctors, psychiatrist, and registered nurse — regular visits and on-call.",
  },
  { name: "Memory Care Programs", detail: "Specialized activities for cognitive wellness, daily." },
  { name: "Cultural Celebrations", detail: "Honoring diverse traditions and holidays, monthly." },
  { name: "Arts & Crafts", detail: "Creative expression through painting and crafts, every Thursday." },
  { name: "Garden & Nature Time", detail: "Outdoor activities and gardening for wellness, daily." },
];

const AFHManagementCompanies = () => (
  <>
    <SEOHead
      title="AFH Management Companies | AFH Club | Real Property Planning"
      description="Professional Adult Family Home management companies serving Washington State — Aura Living Care and other operators providing staffing, compliance, and care services."
      canonical="https://realpropertyplanning.com/afh-club/management-companies"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Management Companies", url: "https://realpropertyplanning.com/afh-club/management-companies" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Professional management companies help Adult Family Home owners operate compliantly and deliver exceptional
            care — handling staffing, medication management, DSHS compliance, and daily operations.
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#302b26",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Real Property Planning does not receive compensation for these listings. Companies are featured as an
            informational resource for the AFH community.
          </p>
        </div>
      </section>

      <HeroBandTitle as="h1">AFH Management Companies</HeroBandTitle>

      {/* Aura Living Care */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Featured Management Company
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            Aura Living Care
          </h2>

          {/* Provider card */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #dfc9cb",
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 40,
              boxShadow: "0 2px 16px rgba(10,22,40,0.07)",
            }}
          >
            {/* Top section */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
              {/* Left — headshot + logo */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 240,
                  background: "#edf0f3",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src="/afh-fengquan-song.webp"
                  alt="Fengquan Song, Owner of Aura Living Care"
                  width={120}
                  height={120}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "3px solid #b13a44",
                  }}
                  loading="lazy"
                />
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "Georgia, serif",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 6px",
                    }}
                  >
                    Fengquan Song
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "'Raleway', sans-serif",
                      color: "#302b26",
                      margin: "0 0 16px",
                    }}
                  >
                    Owner, Aura Living Care
                  </p>
                </div>
                <img
                  src="/aura-living-care-logo.webp"
                  alt="Aura Living Care logo"
                  width={140}
                  height={100}
                  style={{ width: 140, height: "auto", objectFit: "contain" }}
                  loading="lazy"
                />
              </div>

              {/* Right — contact + description */}
              <div style={{ flex: 1, minWidth: 240, padding: "36px 28px" }}>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 16px",
                  }}
                >
                  Premium Senior Care in Seattle
                </h3>
                <p
                  style={{
                    fontSize: "19px",
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.8,
                    margin: "0 0 24px",
                  }}
                >
                  Aura Living Care is a Seattle-based Adult Family Home operator providing personalized, holistic senior
                  care with a warm, home-centered approach. With 24/7 professional staffing, specialized memory care
                  programs, and a comprehensive range of support services, Aura Living Care is committed to health,
                  happiness, and dignity for every resident.
                </p>

                {/* Contact details */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#e0f5f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.52 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.44 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.29 6.29l1.27-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <a
                      href="tel:2142054091"
                      style={{
                        fontSize: "20px",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        color: "#280a0c",
                        textDecoration: "none",
                      }}
                    >
                      (214) 205-4091
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#e0f5f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <a
                      href="mailto:aura@auralivingcare.com"
                      style={{
                        fontSize: "19px",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 600,
                        color: "#280a0c",
                        textDecoration: "none",
                      }}
                    >
                      aura@auralivingcare.com
                    </a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#e0f5f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <p style={{ fontSize: "19px", fontFamily: "'Raleway', sans-serif", color: "#302b26", margin: 0 }}>
                      Mon–Sun: 9:00 AM – 6:00 PM
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#e0f5f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <p style={{ fontSize: "19px", fontFamily: "'Raleway', sans-serif", color: "#302b26", margin: 0 }}>
                      Seattle, WA
                    </p>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <a
                      href="https://auralivingcare.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "17px",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: "#0d9488",
                        padding: "12px 24px",
                        borderRadius: 4,
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Visit auralivingcare.com →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services grid */}
            <div style={{ borderTop: "1px solid #dfc9cb", padding: "32px 32px 36px", background: "#fff" }}>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "#280a0c",
                  margin: "0 0 24px",
                }}
              >
                Services & Programs
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                {SERVICES.map((svc) => (
                  <div key={svc.name} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#0d9488",
                        marginTop: 8,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "18px",
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 700,
                          color: "#280a0c",
                          margin: "0 0 4px",
                        }}
                      >
                        {svc.name}
                      </p>
                      <p
                        style={{
                          fontSize: "17px",
                          fontFamily: "'Raleway', sans-serif",
                          color: "#302b26",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {svc.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Looking to buy CTA — light background, dark readable text */}
          <div
            style={{
              background: "#edf0f3",
              border: "2px solid #b13a44",
              borderRadius: 8,
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#481216",
                margin: "0 0 14px",
              }}
            >
              Thinking About Buying an AFH?
            </p>
            <h3
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#280a0c",
                margin: "0 0 16px",
              }}
            >
              Work With Our AFH Real Estate Broker
            </h3>
            <p
              style={{
                fontSize: "19px",
                fontFamily: "'Raleway', sans-serif",
                color: "#302b26",
                lineHeight: 1.8,
                margin: "0 auto 28px",
                maxWidth: 560,
              }}
            >
              Purchasing an Adult Family Home requires a broker who understands both the real estate transaction and the
              DSHS licensing process. Our featured AFH broker can guide you through every step.
            </p>
            <Link
              to="/afh-club/real-estate-broker"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "17px",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#3f3a35",
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
                border: "2px solid #c3525c",
              }}
            >
              Meet Our AFH Broker →
            </Link>
          </div>
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHManagementCompanies;
