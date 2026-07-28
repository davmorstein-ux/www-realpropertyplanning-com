import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";
import contactHero from "@/assets/contact-hero-soundview-coffee.webp";

import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import scottPhoto from "@/assets/providers/elder-law-scott-schill-mercer-island.webp";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import lauraPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import jennipherPhotoAsset from "@/assets/providers/jennipher-ama-family-first-at-home.webp.asset.json";
import nicolePhotoAsset from "@/assets/providers/nicole-aging-wisdom.webp.asset.json";
import ericPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abigailPhoto from "@/assets/abigail-mckee-ginnys-girls-manager.webp";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import purpleGroupPhoto from "@/assets/providers/cpa-purple-group-tenly-jessica-seattle.webp";
import dominikPhoto from "@/assets/dominik-musafia-divorce-attorney-seattle.avif";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import hansWestermarkPhoto from "@/assets/providers/real-estate-lenders-hans-westermark-washington.webp";
import heidiPhoto from "@/assets/heidi-bolton-medicare-advisor-spears-agency.webp";
import jrGillespiePhoto from "@/assets/jr-gillespie-medicare-advisor-allstar-financial.webp";

const jennipherPhoto = jennipherPhotoAsset.url;
const nicolePhoto = nicolePhotoAsset.url;

interface Professional {
  name: string;
  role: string;
  company: string;
  specialty: string;
  photo: string;
  href: string;
  /** Optional second person, for tiles covering two people at the same firm. */
  name2?: string;
  role2?: string;
  photo2?: string;
}

interface CategoryGroup {
  category: string;
  professionals: Professional[];
}

const groups: CategoryGroup[] = [
  {
    category: "Real Estate & Appraisal",
    professionals: [
      {
        name: "David Stein",
        role: "Washington State Licensed Real Estate Broker",
        company: "eXp Realty",
        specialty: "Probate, estate, and trust property sales throughout Washington State.",
        photo: davidSteinPhoto,
        href: "/realtor",
      },
      {
        name: "David Stein",
        role: "Certified Residential Appraiser",
        company: "Stein Appraisal",
        specialty: "Date-of-death valuations, estate appraisals, and residential appraisal services.",
        photo: davidSteinPhoto,
        href: "/real-estate-appraiser",
      },
    ],
  },
  {
    category: "Aging Life Care Management",
    professionals: [
      {
        name: "Laura A. Silverstein, MSW",
        role: "Aging Life Care Manager",
        company: "Silver & Sage Consulting, LLC",
        specialty: "Care coordination and advocacy for older adults and families navigating aging-related decisions.",
        photo: lauraPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Jennipher Ama",
        role: "President, RN, CMC",
        company: "Family First at Home",
        specialty: "Registered nurse and certified care manager supporting families through in-home care planning.",
        photo: jennipherPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Nicole Amico Kane, MSW, LICSW, CMC",
        role: "Director of Care Management",
        company: "Aging Wisdom",
        specialty: "Certified care manager specializing in complex family dynamics and long-term care planning.",
        photo: nicolePhoto,
        href: "/aging-life-care-managers",
      },
    ],
  },
  {
    category: "Senior Move Management",
    professionals: [
      {
        name: "Eric Rovner",
        role: "Vice President of Marketing",
        company: "HB Move Management · Hansen Bros. Moving",
        specialty: "Full-service senior relocation and move management throughout the Puget Sound region.",
        photo: ericPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Tina Baril",
        role: "Owner",
        company: "Monarch Transitions · Senior Move Managers",
        specialty: "Compassionate move management and downsizing support for older adults and their families.",
        photo: tinaBarilPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Meriann Roberts",
        role: "Owner",
        company: "Ginny's Girls Estate Services",
        specialty: "Estate sales, downsizing, and move-out services for families in transition.",
        photo: meriannPhoto,
        href: "/senior-move-managers",
      },
    ],
  },
  {
    category: "Estate Liquidation Services",
    professionals: [
      {
        // Meriann and Abigail are the same firm with identical specialty copy,
        // so they share one tile rather than rendering two duplicate cards.
        name: "Meriann Roberts",
        role: "Owner",
        name2: "Abigail McKee",
        role2: "Manager",
        company: "Ginny's Girls Estate Services",
        specialty:
          "Estate sales, senior move management, residential clear-outs, and ISA-certified personal property appraisals throughout North King and Snohomish Counties.",
        photo: meriannPhoto,
        photo2: abigailPhoto,
        href: "/estate-liquidators",
      },
    ],
  },
  {
    category: "Senior Living Advisors",
    professionals: [
      {
        name: "Abby Durr",
        role: "Owner & Founder",
        company: "Silver Age Senior Living Advisors",
        specialty: "Free, personalized guidance matching families with the right senior living community.",
        photo: abbyPhoto,
        href: "/senior-living-advisors",
      },
    ],
  },
  {
    category: "Elder Law",
    professionals: [
      {
        name: "Scott R. Schill",
        role: "Elder Law Attorney",
        company: "S.R. Schill & Associates — Financial and Longevity Advisors",
        specialty: "Elder law, Medicaid planning, and long-term care legal strategy in Washington State.",
        photo: scottPhoto,
        href: "/for-elder-law-attorneys",
      },
    ],
  },
  {
    category: "Family Law & Divorce",
    professionals: [
      {
        name: "Dominik Musafia",
        role: "Divorce & Family Law Attorney",
        company: "Seattle Divorce Options, PLLC",
        specialty:
          "Collaborative divorce and family law, with additional expertise in business and real property matters.",
        photo: dominikPhoto,
        href: "/for-divorce-attorneys",
      },
    ],
  },
  {
    category: "Financial Planning",
    professionals: [
      {
        name: "Tiffany Lane",
        role: "Financial Professional",
        company: "New York Life — Seattle General Office",
        specialty: "Financial planning for families navigating major life and estate transitions.",
        photo: tiffanyPhoto,
        href: "/for-financial-planners",
      },
    ],
  },
  {
    category: "Mortgage & Reverse Mortgage Lending",
    professionals: [
      {
        name: "Daniel Bartel",
        role: "Retirement Mortgage Specialist · Reverse Mortgage Lender",
        company: "C2 Financial",
        specialty: "Reverse mortgages and retirement planning for seniors.",
        photo: danBartelPhoto,
        href: "/mortgage-lenders",
      },
      {
        name: "Jeff McGinnis",
        role: "Senior Loan Officer",
        company: "CrossCountry Mortgage",
        specialty: "25+ years of mortgage lending experience.",
        photo: jeffMcGinnisPhoto,
        href: "/mortgage-lenders",
      },
      {
        name: "Hans Westermark",
        role: "President & Senior Loan Officer",
        company: "Family First Mortgage",
        specialty: "Home loans, refinancing, and real estate transitions.",
        photo: hansWestermarkPhoto,
        href: "/mortgage-lenders",
      },
    ],
  },
  {
    category: "Medicare Guidance",
    professionals: [
      {
        name: "Heidi Bolton",
        role: "Medicare Advisor",
        company: "Spears Agency",
        specialty:
          "Medicare planning and coverage guidance for individuals turning 65, retiring, or reviewing existing coverage.",
        photo: heidiPhoto,
        href: "/medicare-providers",
      },
      {
        name: "J. R. Gillespie",
        role: "Medicare Advisor",
        company: "ALLSTAR Financial Insurance",
        specialty: "Medicare guidance for individuals, families, and small businesses across the Puget Sound region.",
        photo: jrGillespiePhoto,
        href: "/medicare-providers",
      },
    ],
  },
  {
    category: "CPAs & Tax Planning",
    professionals: [
      {
        name: "Tenly Krakoff & Jessica Simons, CPAs",
        role: "Co-Founders",
        company: "The Purple Group",
        specialty: "Tax planning, estate and trust taxation, and financial strategy for individuals and families.",
        photo: purpleGroupPhoto,
        href: "/for-cpas",
      },
    ],
  },
];

const wrap = { maxWidth: 1080, margin: "0 auto" };

const FeaturedProfessionals = () => (
  <>
    <SEOHead
      title="Featured Professionals | Real Property Planning"
      description="Meet the professionals in Real Property Planning's network — real estate, appraisal, aging life care management, senior move management, estate liquidation, senior living advisors, elder law, family law, financial planning, mortgage lending, Medicare guidance, and CPAs serving Washington State families."
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
      {/* Hero */}
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
          <img
            src={contactHero}
            alt="Seniors enjoying coffee at a waterfront café in Washington State — Real Property Planning's professional network"
            className="w-full h-auto block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1983}
            height={583}
          />
          <HeroBandTitle as="h1">Featured Professionals</HeroBandTitle>
        </div>
      </section>
      <section style={{ background: "#edf0f3", padding: "40px 24px 56px", borderBottom: "3px solid #7f1d1d" }}>
        <div style={wrap}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Our Professional Network
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'Raleway', sans-serif",
              color: "#302b26",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: 680,
            }}
          >
            Real Property Planning connects families with independent, trusted specialists across Washington State. Each
            professional below is featured elsewhere on this site — click through to learn more and see their full
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
                fontFamily: "Georgia, serif",
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
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "#292521",
                            margin: "0 0 2px",
                          }}
                        >
                          {pro.name}
                        </p>
                        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "#7f1d1d", margin: 0 }}>
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
                              fontFamily: "'Raleway', sans-serif",
                              fontWeight: 700,
                              fontSize: 16,
                              color: "#292521",
                              margin: "0 0 2px",
                            }}
                          >
                            {pro.name2}
                          </p>
                          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "#7f1d1d", margin: 0 }}>
                            {pro.role2}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#5a5147",
                      margin: "0 0 10px",
                    }}
                  >
                    {pro.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 14,
                      color: "#5a5147",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {pro.specialty}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#7f1d1d",
                      margin: "14px 0 0",
                      marginTop: "auto",
                      paddingTop: 14,
                    }}
                  >
                    View Full Profile →
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
