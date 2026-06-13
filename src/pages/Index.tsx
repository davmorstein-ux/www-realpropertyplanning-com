import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema, organizationSchema } from "@/lib/schema";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HomepageFunnel from "@/components/HomepageFunnel";
import HomepagePopularResources from "@/components/HomepagePopularResources";
import homepageHeroRpp from "@/assets/hero-homepage-v2.png.asset.json";
import rppLogoTransparent from "@/assets/rpp-logo-transparent.png.asset.json";

const jsonLd = [realEstateAgentSchema, organizationSchema];

const homepageFaqJsonLd = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a probate real estate agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A probate real estate agent specializes in selling homes that are part of a deceased person's estate. They understand the legal requirements, court timelines, and family sensitivities involved — and work alongside attorneys and executors to get the property sold properly."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a special agent to sell an inherited home in Washington State?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not legally required, but strongly recommended. Probate sales have specific legal steps, documentation requirements, and timelines. An agent with probate experience — especially one who is also a certified appraiser — can save families significant time, money, and stress."
      }
    },
    {
      "@type": "Question",
      "name": "What is a senior transition specialist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A senior transition specialist is a real estate professional trained to support older adults and their families when it's time to move from a longtime home."
      }
    },
    {
      "@type": "Question",
      "name": "What is an estate appraisal and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An estate appraisal is a certified valuation of a property at the time of the owner's death. It establishes fair market value for probate, tax, and equitable distribution purposes."
      }
    },
    {
      "@type": "Question",
      "name": "How is Real Property Planning different from a regular real estate agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real Property Planning combines a licensed real estate broker and a Washington State Certified Residential Appraiser under one platform."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Real Property Planning serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Western Washington and the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply call (206) 900-3015 or send an email to info@realpropertyplanning.com."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a cost to consult with Real Property Planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Initial consultations are free and carry no obligation. We typically respond within one business day."
      }
    }
  ]
}`;

const pageStyles = `
  /* ── HERO ── */
  .rpp-hero-section {
    position: relative !important;
    width: 100% !important;
    height: 560px !important;
    overflow: hidden !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: #f5f1ea !important;
  }
  @media (max-width: 768px) {
    .rpp-hero-section { height: 360px !important; }
  }
  .rpp-hero-section > img.rpp-hero-bg {
    position: absolute !important;
    top: 0 !important; left: 0 !important;
    width: 100% !important; height: 100% !important;
    object-fit: cover !important;
    object-position: center top !important;
    display: block !important;
    margin: 0 !important; padding: 0 !important;
  }
  .rpp-hero-band {
    background-color: #1a2744 !important;
    width: 100% !important;
    padding: 0.5rem 3.5rem !important;
    margin: 0 !important;
    display: flex !important;
    align-items: center !important;
    gap: 1.5rem !important;
    flex-wrap: wrap !important;
  }
  @media (max-width: 768px) {
    .rpp-hero-band {
      padding: 0.5rem 1.25rem !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.2rem !important;
    }
  }
  .rpp-hero-h1 {
    font-family: 'Cormorant Garamond', Georgia, serif !important;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    line-height: 1 !important;
    margin: 0 !important;
    padding: 0 !important;
    opacity: 1 !important;
    text-shadow: none !important;
    white-space: nowrap !important;
  }
  @media (max-width: 768px) {
    .rpp-hero-h1 { font-size: 1.2rem !important; white-space: normal !important; }
  }
  .rpp-hero-sub {
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 18px !important;
    font-weight: 600 !important;
    color: #ffffff !important;
    line-height: 1 !important;
    margin: 0 !important;
    padding: 0 !important;
    opacity: 1 !important;
    text-shadow: none !important;
    text-align: center !important;
    letter-spacing: 0.04em !important;
  }
  @media (max-width: 768px) {
    .rpp-hero-sub { font-size: 14px !important; }
  }

  /* ── QUICK LINKS ── */
  .rpp-ql-grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2.5rem !important;
  }
  @media (max-width: 900px) {
    .rpp-ql-grid { grid-template-columns: 1fr !important; }
  }
  .rpp-ql-col-heading {
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase !important;
    color: #b8963e !important;
    margin: 0 0 0.75rem 0 !important;
    padding-bottom: 0.6rem !important;
    border-bottom: 2px solid #e2ddd6 !important;
    display: block !important;
    opacity: 1 !important;
  }
  .rpp-ql-link {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    color: #1a2744 !important;
    text-decoration: none !important;
    padding: 0.35rem 0 !important;
    line-height: 1.3 !important;
    opacity: 1 !important;
    transition: color 0.15s ease !important;
  }
  .rpp-ql-link:hover { color: #b8963e !important; }
  .rpp-ql-view-all {
    display: inline-flex !important;
    align-items: center !important;
    gap: 5px !important;
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #b8963e !important;
    text-decoration: none !important;
    margin-top: 0.85rem !important;
    opacity: 1 !important;
    letter-spacing: 0.02em !important;
  }
  .rpp-ql-view-all:hover { opacity: 0.75 !important; }

  /* ── WAYFINDING STRIP ── */
  .rpp-wf-strip {
    background-color: #ffffff !important;
    border-top: 1px solid #e2ddd6 !important;
    border-bottom: 3px solid #1a2744 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: stretch !important;
    overflow-x: auto !important;
  }
  .rpp-wf-item {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    padding: 0.9rem 1.5rem !important;
    text-decoration: none !important;
    border-right: 1px solid #e2ddd6 !important;
    flex: 1 !important;
    min-width: 160px !important;
    transition: background-color 0.15s ease !important;
    white-space: nowrap !important;
  }
  .rpp-wf-item:hover { background-color: #f5f2ec !important; }
  .rpp-wf-item:last-child { border-right: none !important; }
  .rpp-wf-label {
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    color: #1a2744 !important;
    line-height: 1.2 !important;
    opacity: 1 !important;
  }
  .rpp-wf-cta {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 0.9rem 1.75rem !important;
    background-color: #1a2744 !important;
    text-decoration: none !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    transition: background-color 0.15s ease !important;
  }
  .rpp-wf-cta:hover { background-color: #243660 !important; }
  .rpp-wf-cta-text {
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #d4a843 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    opacity: 1 !important;
  }
`;

const GoldArrow = ({ size = 13 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="#b8963e"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const NavyArrow = ({ size = 13 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="#1a2744"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, opacity: 0.4 }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <style>{pageStyles}</style>
      <Helmet>
        <script type="application/ld+json">{homepageFaqJsonLd}</script>
      </Helmet>
      <SEOHead
        title="Real Property Planning | WA Probate & Senior Transitions"
        description="Washington State resource for probate real estate, estate sales, and senior transitions — guidance for families, executors, and attorneys statewide."
        canonical="https://realpropertyplanning.com"
        schemaJson={jsonLd}
      />
      <Header />
      <main id="main-content">
        {/* ── 1. HERO IMAGE (contains its own text/logo) with bottom fade + tagline ── */}
        <section
          className="rpp-hero-section"
          style={{ backgroundColor: "#f5f1ea" }}
        >
          <img
            className="rpp-hero-bg"
            src={homepageHeroRpp.url}
            width={1920}
            height={960}
            alt="Welcome to Real Property Planning — senior couple by a red convertible with a SOLD sign and moving truck at a craftsman home"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />

          {/* Bottom fade overlay only */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(245,241,234,0.2) 72%, rgba(245,241,234,0.6) 82%, rgba(245,241,234,0.9) 92%, #f5f1ea 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* RPP logo overlay centered */}
          <img
            src={rppLogoTransparent.url}
            alt="Real Property Planning"
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "380px",
              maxWidth: "50%",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Tagline + description */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontFamily: "inherit",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#1a3a6b",
              }}
            >
              Estate & Probate · Senior Transitions · Adult Family Homes Marketplace
            </div>
            <div
              style={{
                fontSize: "18px",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#3a3a3a",
                textAlign: "center",
                marginTop: "6px",
                letterSpacing: "0.5px",
              }}
            >
              A free educational resource and professional referral network serving Washington State families
            </div>
          </div>
        </section>

        {/* ── 3. WAYFINDING TILES + AFH CLUB ── */}
        <HomepageFunnel />

        {/* ── 4. QUICK LINKS — white background, dark text ── */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "3.5rem 0",
            borderTop: "1px solid #e2ddd6",
            borderBottom: "1px solid #e2ddd6",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div className="rpp-ql-grid">
              {/* Column 1 — Featured Resources */}
              <div>
                <span className="rpp-ql-col-heading">Featured Resources</span>
                {[
                  {
                    label: "Washington Executor's Checklist",
                    href: "/resources/washington-executors-10-step-checklist",
                  },
                  { label: "Senior Housing Guide", href: "/understanding-housing-care-options" },
                  { label: "Adult Family Home Resources", href: "/afh-club/afh-resources" },
                  { label: "Probate Real Estate Guide", href: "/guides/how-probate-real-estate-works" },
                  { label: "Estate Sale Planning Guide", href: "/guides/inherited-house-washington" },
                ].map((item) => (
                  <Link key={item.href} to={item.href} className="rpp-ql-link">
                    <NavyArrow size={13} />
                    {item.label}
                  </Link>
                ))}
                <Link to="/resources" className="rpp-ql-view-all">
                  View all resources <GoldArrow size={12} />
                </Link>
              </div>

              {/* Column 2 — Find a Professional */}
              <div>
                <span className="rpp-ql-col-heading">Find a Professional</span>
                {[
                  { label: "Elder Law Attorneys", href: "/elder-law-attorneys" },
                  { label: "CPAs & Tax Advisors", href: "/cpas-tax-advisors" },
                  { label: "Financial Planners", href: "/financial-planners" },
                  { label: "Aging Life Care Managers", href: "/aging-life-care-managers" },
                  { label: "Senior Living Advisors", href: "/senior-living-advisors" },
                  { label: "More Professionals", href: "/building-your-trusted-professional-team" },
                ].map((item) => (
                  <Link key={item.href} to={item.href} className="rpp-ql-link">
                    <NavyArrow size={13} />
                    {item.label}
                  </Link>
                ))}
                <Link to="/building-your-trusted-professional-team" className="rpp-ql-view-all">
                  Search directory <GoldArrow size={12} />
                </Link>
              </div>

              {/* Column 3 — AFH Opportunities */}
              <div>
                <span className="rpp-ql-col-heading">AFH Opportunities</span>
                {[
                  { label: "AFHs for Sale — Current Listings", href: "/afh-club/listings" },
                  { label: "Buyers Seeking AFHs", href: "/afh-club/afh-resources" },
                  { label: "Management Companies", href: "/afh-club/management-companies" },
                  { label: "Resources & Education", href: "/afh-club/afh-resources" },
                ].map((item) => (
                  <Link key={item.href} to={item.href} className="rpp-ql-link">
                    <NavyArrow size={13} />
                    {item.label}
                  </Link>
                ))}
                <Link to="/afh-club" className="rpp-ql-view-all">
                  View AFH Club <GoldArrow size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. POPULAR RESOURCES ── */}
        <HomepagePopularResources />

        {/* SEO description */}
        <section aria-label="Site description" className="bg-cream">
          <div className="container px-6 lg:px-8 py-6">
            <p className="text-center text-sm text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
              Real Property Planning is Washington State's free hub for probate real estate, estate sales, inherited
              property, and senior housing transitions. Serving Seattle, Bellevue, Kirkland, Tacoma, Everett, and
              communities throughout Western Washington and the Puget Sound region.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
