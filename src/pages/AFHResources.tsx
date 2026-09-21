import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";
import AFHCarousel from "@/components/AFHCarousel";

const TOPICS = [
  {
    title: "Getting Started",
    href: "/afh-club/getting-started",
    img: "/afh-getting-started.webp",
    description:
      "What it takes to open an Adult Family Home in Washington State — licensing basics, qualifications, and first steps.",
  },
  {
    title: "Licensing & Certification",
    href: "/afh-club/licensing-certification",
    img: "/afh-licensing-certification.webp",
    description: "DSHS licensing requirements, application steps, and what certifications are required to operate.",
  },
  {
    title: "Training & Education",
    href: "/afh-club/training-education",
    img: "/afh-training-education.webp",
    description: "Required training hours, continuing education, and how to meet Washington State caregiver standards.",
  },
  {
    title: "Building & Inspection",
    href: "/afh-club/building-inspection",
    img: "/afh-building-inspection.webp",
    description: "WABO building requirements, fire safety standards, and what inspectors look for before licensing.",
  },
  {
    title: "What Is WABO?",
    href: "/afh-club/wabo-inspection-guide",
    img: "/wabo-overview-cover.webp",
    description: "A simple overview of WABO and the WABO inspection process — what it is, who inspects the home, and why it matters before buying.",
  },
  {
    title: "WABO Checklist & Technical Requirements",
    href: "/afh-club/wabo-technical-guide",
    img: "/wabo-technical-cover.webp",
    description: "The technical deep-dive: what the WABO checklist covers, common delays, and why passing does not mean licensed.",
  },
  {
    title: "Is It Really an Adult Family Home?",
    href: "/afh-club/afh-property-classifications",
    img: "/afh-property-classifications-cover.webp",
    description: "How to read 'AFH', 'AFH-ready', 'WABO-approved' and 'potential AFH' in a listing, the five labels AFH Club uses, and the documents to request before you buy.",
  },
  {
    title: "How to Check DSHS Violation History",
    href: "/afh-club/violation-history-lookup",
    img: "/afh-violation-history-cover.webp",
    description: "How to use the DSHS Adult Family Home Locator to check inspection reports, deficiencies, and enforcement history.",
  },
  {
    title: "Costs & Fees",
    href: "/afh-club/costs-fees",
    img: "/afh-costs-fees-v2.webp",
    description: "Startup costs, licensing fees, and ongoing operating expenses for running an AFH.",
  },
  {
    title: "How to Finance an AFH",
    href: "/afh-club/how-to-finance-an-afh",
    img: "/afh-how-to-finance-cover.webp",
    description: "Residential, SBA 7(a), SBA 504, or commercial — which loan fits, what the lender checks, and lenders that work with adult family homes.",
  },
  {
    title: "Which Tier? The AFH Payment Field Guide",
    href: "/afh-club/afh-payment-field-guide",
    img: "/afh-payment-field-guide-cover.webp",
    description: "A–E classifications, CBHS tiers, specialty contracts and private-pay levels are four different systems. Who sets each one, and which survive a sale.",
  },
  {
    title: "A Through E: CARE Classifications",
    href: "/afh-club/care-classifications-a-through-e",
    img: "/afh-care-classifications-cover.webp",
    description: "How a Medicaid resident's CARE classification sets the daily rate, why one bed can be worth very different revenue, and what buyers should verify.",
  },
  {
    title: "CBHS Tiers Explained",
    href: "/afh-club/cbhs-tiers",
    img: "/afh-cbhs-tiers-cover.webp",
    description: "The six supportive-supervision tiers behind some AFH income: who qualifies, how tiers are reviewed and re-tiered, and what to check before relying on it.",
  },
  {
    title: "Buying or Selling an AFH",
    href: "/afh-club/buying-selling",
    img: "/afh-buying-selling.webp",
    description:
      "The CHOW process, what transfers to a new owner, and real estate considerations for AFH transactions.",
  },
  {
    title: "Regulations & Compliance",
    href: "/afh-club/regulations-compliance",
    img: "/afh-regulations-compliance.webp",
    description: "Ongoing compliance obligations, inspections, and how to stay in good standing with DSHS.",
  },
  {
    title: "Find a Professional",
    href: "/afh-club/find-a-professional",
    img: "/afh-find-professional.webp",
    description: "Connect with attorneys, CPAs, lenders, and brokers experienced in Adult Family Home transactions.",
  },
  {
    title: "AFH Ownership: Individual or LLC?",
    href: "/afh-club/ownership-structure",
    img: "/afh-ownership-img.webp",
    description:
      "Should you buy an Adult Family Home as an individual or through an LLC? A guide to financing, liability, and Washington State licensing considerations.",
  },
  {
    title: "What Is an Adult Family Home?",
    href: "/afh-club/what-is-an-adult-family-home",
    img: "/afh-what-is-an-afh-cover.webp",
    description:
      "The definition, how it differs from assisted living, and what the same small care home is called in every other state.",
  },
];

const AFHResources = () => (
  <>
    <SEOHead
      title="AFH Resource Library | AFH Club | Real Property Planning"
      description="Everything you need to know about opening, operating, buying, or selling an Adult Family Home in Washington State — organized by topic."
      canonical="https://realpropertyplanning.com/afh-club/resources"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Resources", url: "https://realpropertyplanning.com/afh-club/resources" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: 680,
            }}
          >
            Everything you need to know about opening, operating, buying, or selling an Adult Family Home in Washington
            State — organized by topic so you can go straight to what matters most.
          </p>
        </div>
      </section>

      <HeroBandTitle as="h1">AFH Resource Library</HeroBandTitle>

      {/* Featured Articles Carousel */}
      <AFHCarousel
        categories={[
          {
            title: "Getting Started",
            href: "/afh-club/getting-started",
            img: "/afh-getting-started.webp",
            placeholder: "#3f3a35",
          },
          {
            title: "What Is an Adult Family Home?",
            href: "/afh-club/what-is-an-adult-family-home",
            img: "/afh-what-is-an-afh-cover.webp",
            placeholder: "#1f3350",
          },
          {
            title: "Licensing & Certification",
            href: "/afh-club/licensing-certification",
            img: "/afh-licensing-certification.webp",
            placeholder: "#433d37",
          },
          {
            title: "Training & Education",
            href: "/afh-club/training-education",
            img: "/afh-training-education.webp",
            placeholder: "#4b453f",
          },
          {
            title: "Building & Inspection",
            href: "/afh-club/building-inspection",
            img: "/afh-building-inspection.webp",
            placeholder: "#433d38",
          },
          {
            title: "What Is WABO?",
            href: "/afh-club/wabo-inspection-guide",
            img: "/wabo-overview-cover.webp",
            placeholder: "#3d3833",
          },
          {
            title: "WABO Checklist & Technical Requirements",
            href: "/afh-club/wabo-technical-guide",
            img: "/wabo-technical-cover.webp",
            placeholder: "#39342f",
          },
          {
            title: "Is It Really an Adult Family Home?",
            href: "/afh-club/afh-property-classifications",
            img: "/afh-property-classifications-cover.webp",
            placeholder: "#3a3f36",
          },
          {
            title: "How to Check DSHS Violation History",
            href: "/afh-club/violation-history-lookup",
            img: "/afh-violation-history-cover.webp",
            placeholder: "#352f2a",
          },
          {
            title: "Costs & Fees",
            href: "/afh-club/costs-fees",
            img: "/afh-costs-fees-v2.webp",
            placeholder: "#4e4842",
          },
          {
            title: "How to Finance an AFH",
            href: "/afh-club/how-to-finance-an-afh",
            img: "/afh-how-to-finance-cover.webp",
            placeholder: "#2f4f4a",
          },
          {
            title: "Which Tier? The AFH Payment Field Guide",
            href: "/afh-club/afh-payment-field-guide",
            img: "/afh-payment-field-guide-cover.webp",
            placeholder: "#3b2140",
          },
          {
            title: "A Through E: CARE Classifications",
            href: "/afh-club/care-classifications-a-through-e",
            img: "/afh-care-classifications-cover.webp",
            placeholder: "#2c3a33",
          },
          {
            title: "CBHS Tiers Explained",
            href: "/afh-club/cbhs-tiers",
            img: "/afh-cbhs-tiers-cover.webp",
            placeholder: "#4a3a30",
          },
          {
            title: "Buying or Selling an AFH",
            href: "/afh-club/buying-selling",
            img: "/afh-buying-selling.webp",
            placeholder: "#403a34",
          },
          {
            title: "Regulations & Compliance",
            href: "/afh-club/regulations-compliance",
            img: "/afh-regulations-compliance.webp",
            placeholder: "#49433d",
          },
          {
            title: "Find a Professional",
            href: "/afh-club/find-a-professional",
            img: "/afh-find-professional.webp",
            placeholder: "#524c46",
          },
          {
            title: "AFH Ownership: Individual or LLC?",
            href: "/afh-club/ownership-structure",
            img: "/afh-ownership-img.webp",
            placeholder: "#3a2a3a",
          },
        ]}
      />

      {/* Topic list */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 700,
            color: "#280a0c",
            lineHeight: 1.2,
            margin: "0 0 16px",
          }}
        >
          All Topics
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TOPICS.map((topic, i) => (
            <Link
              key={topic.href}
              to={topic.href}
              className="group"
              style={{
                display: "flex",
                gap: 24,
                padding: "24px 0",
                borderBottom: "1px solid #d0ccc4",
                borderTop: i === 0 ? "1px solid #d0ccc4" : "none",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 90,
                  height: 120,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "#3f3a35",
                }}
              >
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="rpp-cover-edge"
                  width={90}
                  height={120}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: "0 0 8px",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#5a5a5a",
                    lineHeight: 1.6,
                    margin: "0 0 10px",
                  }}
                >
                  {topic.description}
                </p>
                <span className="gold-cta">
                  Explore Topic
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHResources;
