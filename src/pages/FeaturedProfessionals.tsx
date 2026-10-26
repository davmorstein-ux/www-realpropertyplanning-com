import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";

import { PROFESSIONAL_GROUPS as groups } from "@/data/familyProfessionals";

import RppArrow from "@/components/RppArrow";
const wrap = { maxWidth: 1080, margin: "0 auto" };

const FeaturedProfessionals = () => (
  <>
    <SEOHead
      title="Featured Professionals | Real Property Planning"
      description="Meet the professionals in Real Property Planning's network — real estate, appraisal, aging life care management, senior move management, estate liquidation, senior living advisors, elder law, family law, legal plans and identity protection, financial planning, mortgage lending, Medicare guidance, and CPAs serving Washington State families."
      canonical="https://realpropertyplanning.com/featured-professionals"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Featured Professionals", url: "https://realpropertyplanning.com/featured-professionals" },
      ]}
    />
    <Header />
    <main id="main-content">
      
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
<HeroBandTitle as="h1">Featured Professionals</HeroBandTitle>
        </div>
      </section>
      <section style={{ background: "#edf0f3", padding: "40px 24px 56px", borderBottom: "3px solid #1B3A6B" }}>
        <div style={wrap}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#142c52",
              margin: "0 0 14px",
            }}
          >
            The Professional Network
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: 680,
            }}
          >
            Independent specialists across Washington State, each met with personally by the site's owner. You contact
            and hire them directly; nobody pays to be listed. Each professional below is featured elsewhere on this site — click through to learn more and see their full
            profile.
          </p>
        </div>
      </section>

      {/* Groups */}
      {groups.map((group) => (
        <section key={group.category} style={{ padding: "56px 24px", borderBottom: "1px solid #e7e0da" }}>
          <div style={wrap}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                fontWeight: 700,
                color: "#292521",
                margin: "0 0 28px",
              }}
            >
              {group.category}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                alignItems: "stretch",
                gap: 24,
              }}
            >
              {group.professionals.map((pro, idx) => (
                <Link
                  key={`${pro.name}-${idx}`}
                  to={pro.href}
                  className="marquee-hover"
                  style={{
                    /* Flex column + height 100% lets the "View Full Profile"
                       link pin to the card bottom via marginTop:auto, so every
                       card in a row ends at the same baseline regardless of how
                       much specialty text it carries. */
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "#ffffff",
                    border: "1px solid #e7e0da",
                    borderRadius: 10,
                    padding: 24,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {/* flex-start (not center) keeps every headshot at the same
                      vertical offset — with center, a two-line name pushed its
                      photo down relative to neighbouring cards. minHeight
                      reserves room for the longest name/role combination so the
                      company line below starts at the same height across a row. */}
                  {/* Each person is a self-contained [photo][name/role] pair.
                      Two pairs sit side by side for firms represented by two
                      people; flexWrap lets the second pair drop to its own row
                      if the card is too narrow to hold both. */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 20,
                      alignItems: "flex-start",
                      minHeight: 104,
                      marginBottom: 14,
                    }}
                  >
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <img
                        src={pro.photo}
                        alt={`Photo of ${pro.name}`}
                        style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div style={{ minWidth: 0 }}>
                        <p
                          style={{
                            fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "#292521",
                            margin: "0 0 2px",
                          }}
                        >
                          {pro.name}
                        </p>
                        <p style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", fontSize: 14, color: "#1B3A6B", margin: 0 }}>
                          {pro.role}
                        </p>
                      </div>
                    </div>

                    {pro.name2 && (
                      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                        {pro.photo2 && (
                          <img
                            src={pro.photo2}
                            alt={`Photo of ${pro.name2}`}
                            style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                              fontWeight: 700,
                              fontSize: 16,
                              color: "#292521",
                              margin: "0 0 2px",
                            }}
                          >
                            {pro.name2}
                          </p>
                          <p style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", fontSize: 14, color: "#1B3A6B", margin: 0 }}>
                            {pro.role2}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#1c1917",
                      margin: "0 0 10px",
                    }}
                  >
                    {pro.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      fontSize: 14,
                      color: "#1c1917",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {pro.specialty}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1B3A6B",
                      margin: "14px 0 0",
                      marginTop: "auto",
                      paddingTop: 14,
                    }}
                  >
                    View Full Profile <RppArrow />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </>
);

export default FeaturedProfessionals;
