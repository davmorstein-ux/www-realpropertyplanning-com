import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-find-a-professional.mp3.asset.json";
import ProviderTile from "@/components/ProviderTile";
import { ACTIVE_AFH_PROFESSIONAL_GROUPS, type AFHProfessional } from "@/data/afhProfessionals";

/** One person, shown with the same tile used for professionals across the site. */
const Tile = ({ person }: { person: AFHProfessional }) => (
  <ProviderTile
    name={person.name}
    title={person.title}
    company={person.company}
    photo={person.photo}
    photoAlt={person.photoAlt}
    logo={person.logo}
    logoAlt={person.logoAlt}
    phone={person.phone}
    email={person.email}
    website={person.website}
    specialty={person.specialty}
    bio={person.bio}
  />
);

const PROFESSIONAL_CATEGORIES = [
  {
    title: "Real Estate Brokers",
    icon: "🏡",
    description:
      "AFH transactions are unlike standard residential sales. A broker experienced in AFH properties understands DSHS requirements, CHOW procedures, how to value the business component alongside the real estate, and how to coordinate the sale timeline with the licensing process.",
    lookFor: [
      "Experience with CHOW transactions",
      "Understanding of DSHS licensing timelines",
      "Familiarity with AFH valuation beyond residential comps",
      "Network of AFH-related professionals",
    ],
    link: { label: "Real Property Planning — AFH Real Estate Services", href: "/afh-club/real-estate-broker" },
  },
  {
    title: "Certified Residential Appraisers",
    icon: "📋",
    description:
      "Appraising an AFH requires understanding both the residential market and the business operations that give the property its licensed value. A certified residential appraiser with AFH experience can provide credible valuations for sales, financing, estate settlement, or tax purposes.",
    lookFor: [
      "State-certified residential or general appraiser credential",
      "AFH or group home appraisal experience",
      "Understanding of DSHS licensing and bed capacity",
      "Familiarity with income approaches for licensed care facilities",
    ],
    link: { label: "Real Property Planning — Appraisal Services", href: "/real-estate-appraiser" },
  },
  {
    title: "AFH Management Companies",
    icon: "🏢",
    description:
      "Management companies handle day-to-day operations, staffing, compliance, and administration for AFH owners who want to invest in the business without operating it directly. Services vary widely — some manage everything from licensing to caregiver hiring; others focus on compliance and record-keeping.",
    lookFor: [
      "Washington State operating experience",
      "DSHS compliance track record",
      "Staffing and caregiver management services",
      "Transparent fee structure",
    ],
    link: null,
  },
  {
    title: "CPAs Familiar with AFH Operations",
    icon: "📊",
    description:
      "AFH tax and accounting has unique considerations — business income mixed with residential property, Medicaid rate structures, depreciation on modifications, payroll for caregivers, and licensing fee deductibility. A CPA with AFH experience will save you money and help you avoid costly errors.",
    lookFor: [
      "Experience with Medicaid-contracted small businesses",
      "Understanding of AFH-specific deductions",
      "Payroll services for caregiving staff",
      "Estate and business transition planning",
    ],
    link: { label: "Find a CPA — Resources Page", href: "/resources/cpas-financial-advisors" },
  },
  {
    title: "Elder Law & Business Attorneys",
    icon: "⚖️",
    description:
      "An attorney experienced in both elder law and small business matters can help with entity formation, CHOW purchase agreements, resident contracts, DSHS appeal processes, and succession planning. AFH providers operating as entities should have legal counsel involved from the start.",
    lookFor: [
      "Washington State elder law or healthcare licensing experience",
      "Business entity formation for care providers",
      "DSHS regulatory appeal experience",
      "AFH resident agreement drafting",
    ],
    link: { label: "Find an Attorney — Resources Page", href: "/for-attorneys" },
  },
  {
    title: "AFH Inspectors & Compliance Consultants",
    icon: "🔍",
    description:
      "Independent consultants and former DSHS licensors can conduct pre-inspection walkthroughs to identify compliance gaps before an official DSHS inspection. They can also assist with corrective action plans, record-keeping systems, and staff training compliance.",
    lookFor: [
      "DSHS inspection or licensing background",
      "Current knowledge of WAC 388-76",
      "Pre-inspection audit services",
      "Corrective action plan support",
    ],
    link: null,
  },
];

const AFHFindProfessional = () => (
  <>
    <SEOHead
      title="Find an AFH Professional | AFH Club | Real Property Planning"
      description="Professionals who work with Washington adult family homes, each one met with and vetted personally: an AFH expert real estate broker and a bookkeeper, with more to come. No one pays to be listed. Plus what to look for when hiring a broker, appraiser, management company, CPA, attorney, or compliance consultant."
      canonical="https://realpropertyplanning.com/afh-club/find-a-professional"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Find a Professional", url: "https://realpropertyplanning.com/afh-club/find-a-professional" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Find a Professional
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Find an AFH Professional
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Running an Adult Family Home successfully requires a team of specialists who understand the unique
            intersection of residential real estate, small business operations, and DSHS regulation. This page
            introduces professionals we have met with and vetted personally, then explains what to look for when
            choosing each kind of specialist.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#302b26",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Listings here are a courtesy. No one pays to be featured, and Real Property Planning receives nothing
            if you hire them. The one exception is noted on the broker's listing below.
          </p>
        </div>
      </section>

      {/* FEATURED PROFESSIONALS (Sept 2026).
          Real people, grouped by role, from src/data/afhProfessionals.ts. Only groups
          with someone in them are rendered: never an empty category, never a "coming
          soon". Each person is shown with the same ProviderTile used across the site.
          The guide further down (and its audio narration) is unchanged: it explains
          what to look for in each KIND of professional, which is a different job. */}
      <style>{`
        .rpp-afhpro h2.rpp-afhpro-h2 { font-size: clamp(24px, 3vw, 32px) !important; line-height: 1.2 !important; margin: 0 0 10px !important; }
        .rpp-afhpro h3.rpp-afhpro-h3 { font-size: clamp(20px, 2.4vw, 24px) !important; line-height: 1.25 !important; margin: 0 0 8px !important; }
        .rpp-afhpro p.rpp-afhpro-p { font-size: 18px !important; line-height: 1.75 !important; margin: 0 0 22px !important; }
        .rpp-afhpro p.rpp-afhpro-note { font-size: 16px !important; line-height: 1.65 !important; margin: 14px 0 0 !important; }
        .rpp-afhpro-jump { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin: 0 0 8px; padding: 0; }
        .rpp-afhpro-jump a.rpp-afhpro-chip.rpp-afhpro-chip { display: inline-block; padding: 9px 16px; border: 2px solid #3f3a35; border-radius: 999px; background: #fff; color: #280a0c !important; font-family: 'DM Sans', system-ui, sans-serif; font-size: 16px !important; font-weight: 600 !important; text-decoration: none !important; }
        @media (hover: hover) { .rpp-afhpro-jump a.rpp-afhpro-chip.rpp-afhpro-chip:hover { background: #3f3a35; color: #fff !important; } }
        .rpp-afhpro-group { scroll-margin-top: calc(var(--header-height, 120px) + 12px); }
        .rpp-afhpro-people { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 420px)); }
        /* A group with ONE person: explanation and card side by side on wide screens, so the
           card is not stranded beside empty space. Two or more people: text above, grid below. */
        .rpp-afhpro-solo { display: grid; gap: 28px; grid-template-columns: 1fr; align-items: start; }
        @media (min-width: 900px) { .rpp-afhpro-solo { grid-template-columns: minmax(0, 1fr) minmax(340px, 400px); gap: 48px; } }
      `}</style>
      <section className="rpp-afhpro" style={{ background: "#ffffff", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#481216", margin: "0 0 10px" }}>
            Met with and vetted
          </p>
          <h2 className="rpp-afhpro-h2" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c" }}>
            Featured professionals
          </h2>
          <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', sans-serif", color: "#302b26", maxWidth: 720 }}>
            A short list on purpose. Everyone here is someone we have sat down with. The list grows as more people earn a place on it.
          </p>
          {ACTIVE_AFH_PROFESSIONAL_GROUPS.length > 1 && (
            <ul className="rpp-afhpro-jump" aria-label="Jump to a kind of professional">
              {ACTIVE_AFH_PROFESSIONAL_GROUPS.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="rpp-afhpro-chip bg-transparent">{g.label}</a>
                </li>
              ))}
            </ul>
          )}
          {ACTIVE_AFH_PROFESSIONAL_GROUPS.map((g) => (
            <div key={g.id} id={g.id} className="rpp-afhpro-group" style={{ marginTop: 44 }}>
              {g.people.length === 1 ? (
                <div className="rpp-afhpro-solo">
                  <div>
                    <h3 className="rpp-afhpro-h3" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c" }}>{g.label}</h3>
                    <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', sans-serif", color: "#302b26" }}>{g.why}</p>
                    {g.people[0].note && (
                      <p className="rpp-afhpro-note" style={{ fontFamily: "'DM Sans', sans-serif", color: "#3b3630", borderLeft: "4px solid #3f3a35", paddingLeft: 14 }}>{g.people[0].note}</p>
                    )}
                    {g.people[0].morePath && (
                      <p className="rpp-afhpro-note" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <Link to={g.people[0].morePath} className="bg-transparent" style={{ color: "#7f2028", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 }}>{g.people[0].moreLabel}</Link>
                      </p>
                    )}
                  </div>
                  <Tile person={g.people[0]} />
                </div>
              ) : (
                <>
                  <h3 className="rpp-afhpro-h3" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c" }}>{g.label}</h3>
                  <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', sans-serif", color: "#302b26", maxWidth: 760 }}>{g.why}</p>
                  <div className="rpp-afhpro-people">
                    {g.people.map((person) => (
                      <div key={person.id}>
                        <Tile person={person} />
                        {person.note && (
                          <p className="rpp-afhpro-note" style={{ fontFamily: "'DM Sans', sans-serif", color: "#3b3630", borderLeft: "4px solid #3f3a35", paddingLeft: 14 }}>{person.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The guide: what to look for in each kind of professional. Narrated by the audio below. */}
      <section className="rpp-afhpro" style={{ background: "#edf0f3", padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 className="rpp-afhpro-h2" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 700, color: "#280a0c" }}>
            What to look for in each kind of professional
          </h2>
          <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', sans-serif", color: "#302b26" }}>
            Whoever you hire, these are the questions that separate someone who knows adult family homes from someone who does not.
          </p>
        </div>
      </section>

      {/* Audio Player */}
      <section style={{ background: "#edf0f3", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer audioSrc={audioAsset.url} />
        </div>
      </section>

      {/* Professional Categories */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {PROFESSIONAL_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "4px solid #3f3a35",
                  borderRadius: 6,
                  padding: "32px 28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 36, flexShrink: 0 }}>{cat.icon}</div>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <h2
                      style={{
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontWeight: 700,
                        color: "#280a0c",
                        margin: "0 0 14px",
                      }}
                    >
                      {cat.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 18,
                        fontFamily: "'DM Sans', sans-serif",
                        color: "#302b26",
                        lineHeight: 1.8,
                        margin: "0 0 20px",
                      }}
                    >
                      {cat.description}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#481216",
                        margin: "0 0 10px",
                      }}
                    >
                      What to Look For
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: cat.link ? 20 : 0 }}>
                      {cat.lookFor.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div
                            style={{
                              flexShrink: 0,
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#b13a44",
                              marginTop: 8,
                            }}
                          />
                          <p
                            style={{
                              fontSize: 16,
                              fontFamily: "'DM Sans', sans-serif",
                              color: "#302b26",
                              lineHeight: 1.65,
                              margin: 0,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    {cat.link &&
                      (cat.link.href.startsWith("/") ? (
                        <Link
                          to={cat.link.href}
                          style={{
                            fontSize: 16,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#481216",
                            textDecoration: "none",
                            borderBottom: "1px solid #b13a44",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </Link>
                      ) : (
                        <a
                          href={cat.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 16,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#481216",
                            textDecoration: "none",
                            borderBottom: "1px solid #b13a44",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are You a Professional CTA */}
      <section style={{ background: "#edf0f3", padding: "64px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 16px",
            }}
          >
            Are You a Professional?
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Join the Real Property Planning Network
          </h2>
          <div style={{ width: 40, height: 2, background: "#b13a44", margin: "0 auto 24px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            Real Property Planning connects professionals who serve the AFH community with owners, buyers, and families
            throughout Washington State. If you work with Adult Family Homes and would like to be considered for a
            listing in this directory, contact us to learn more.
          </p>
          <Link
            to="/join-the-network"
            style={{
              display: "inline-block",
              fontSize: 16,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#3f3a35",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Join the Network
          </Link>
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHFindProfessional;
