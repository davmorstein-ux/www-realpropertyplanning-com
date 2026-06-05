import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import AFHCarousel from "@/components/AFHCarousel";

const AFHClub = () => (
  <>
    <SEOHead
      title="AFH Club | Adult Family Home Resource Network | Real Property Planning"
      description="Washington State's premier resource network for Adult Family Home owners, prospective providers, buyers, and the professionals who serve them."
      canonical="https://realpropertyplanning.com/afh-club"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section
        style={{
          background: "#1e2830",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ marginBottom: 40 }}>
            <img
              src="/afh-club-badge.webp"
              alt="AFH Club — Washington State Adult Family Home Resource Network"
              style={{
                width: "100%",
                maxWidth: 220,
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
              loading="eager"
            />
          </div>

          {/* Eyebrow */}
          <p
            style={{
              fontSize: 11,
              fontFamily: "'Raleway', 'Gill Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#b87333",
              marginBottom: 16,
              margin: "0 0 16px",
            }}
          >
            Real Property Planning
          </p>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#e8e2d9",
              lineHeight: 1.15,
              margin: "0 0 8px",
            }}
          >
            AFH Club
          </h1>

          <p
            style={{
              fontSize: 18,
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              color: "#b87333",
              letterSpacing: "0.08em",
              margin: "0 0 28px",
            }}
          >
            Washington State Adult Family Home Resource Network
          </p>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "#b87333",
              margin: "0 auto 32px",
              borderRadius: 1,
            }}
          />

          {/* Intro copy */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#8fa0af",
              lineHeight: 1.8,
              margin: "0 auto 20px",
              maxWidth: 640,
            }}
          >
            Adult Family Homes are among Washington State's most vital — and most complex — care environments. Whether
            you are exploring the business for the first time, navigating licensing and building requirements, looking
            to buy or sell an AFH, or searching for qualified professionals, AFH Club exists as a neutral resource
            network for everyone in the AFH community.
          </p>

          <p
            style={{
              fontSize: 16,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#6a7a8a",
              lineHeight: 1.8,
              margin: "0 auto",
              maxWidth: 580,
            }}
          >
            No memberships. No fees. Simply a curated collection of resources, directories, and connections — organized
            so you can find exactly what you need.
          </p>
        </div>
      </section>

      {/* Topic divider */}
      <div
        style={{
          background: "#161e26",
          padding: "20px 24px",
          textAlign: "center",
          borderTop: "1px solid #2a3a4a",
          borderBottom: "1px solid #2a3a4a",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#4a5a6a",
          }}
        >
          Select a topic below to explore
        </p>
      </div>

      {/* Carousel */}
      <AFHCarousel />

      {/* What is an AFH section */}
      <section
        style={{
          background: "#f7f4ef",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8B6914",
              marginBottom: 16,
              margin: "0 0 16px",
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#0a1628",
              lineHeight: 1.2,
              margin: "0 0 24px",
            }}
          >
            What Is an Adult Family Home?
          </h2>
          <div
            style={{
              width: 40,
              height: 2,
              background: "#8B6914",
              marginBottom: 32,
              borderRadius: 1,
            }}
          />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#4a5060",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            An Adult Family Home (AFH) is a private residence licensed by the Washington State Department of Social and
            Health Services (DSHS) to provide personal care, room, and board for up to six adults who are unrelated to
            the service provider. In certain circumstances, an existing licensed AFH may be expanded to serve up to
            eight residents.
          </p>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#4a5060",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            AFHs are permitted in all single-family residential zoning districts throughout Washington State and are
            regulated under WAC 388-76 and RCW 70.128. They represent one of the most personal and community-integrated
            forms of long-term care available — and one of the most regulated.
          </p>
          <p
            style={{
              fontSize: 17,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#4a5060",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            DSHS licensors conduct unannounced inspections on a regular cycle. Providers must maintain continuous
            compliance with licensing, training, building, and care standards — which is precisely why having access to
            organized, reliable information matters.
          </p>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHClub;
