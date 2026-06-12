import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema, organizationSchema } from "@/lib/schema";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HomepageHero from "@/components/HomepageHero";
import HomepageFunnel from "@/components/HomepageFunnel";
import HomepagePopularResources from "@/components/HomepagePopularResources";

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
        "text": "A senior transition specialist is a real estate professional trained to support older adults and their families when it's time to move from a longtime home. They coordinate the process thoughtfully — from decluttering and downsizing support to finding appropriate housing and selling the home."
      }
    },
    {
      "@type": "Question",
      "name": "What is an estate appraisal and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An estate appraisal is a certified valuation of a property at the time of the owner's death. It's used to set a fair listing price, satisfy court requirements in probate, calculate estate taxes, and ensure heirs are treated fairly. Courts and the IRS have specific requirements — a certified appraiser ensures your appraisal holds up."
      }
    },
    {
      "@type": "Question",
      "name": "How is Real Property Planning different from a regular real estate agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real Property Planning brings two credentials most real estate practices don't combine: a licensed real estate broker and a Washington State Certified Residential Appraiser. That means properties can be valued with professional appraisal standards and sold with integrated guidance — under one platform families can trust."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Real Property Planning serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of Western Washington and the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties — cities like Seattle, Bellevue, Kirkland, Everett, Tacoma, Bainbridge Island, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply call (206) 900-3015 or send an email to info@realpropertyplanning.com. There's no pressure — just a calm, honest conversation about your situation."
      }
    },
    {
      "@type": "Question",
      "name": "Can Real Property Planning help out-of-state executors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common situations we work with. David Stein manages the full property process locally, including assessment, cleanout coordination, repairs, listing, and sale, with regular updates so out-of-state executors never need to be present for every step."
      }
    },
    {
      "@type": "Question",
      "name": "What professional organizations is Real Property Planning affiliated with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Real Property Planning is a Corporate Partner of the Aging Life Care Association (ALCA), a recognized member of the National Association of Senior Advocates, and a member of the National Association of Estate Planners & Councils."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a cost to consult with Real Property Planning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Initial consultations are free and carry no obligation. We typically respond within one business day. Call (206) 900-3015 or visit realpropertyplanning.com to get started."
      }
    }
  ]
}`;

/* ─────────────────────────────────────────────
   QUICK LINKS BAND — inlined here so no new
   file is needed in Lovable
───────────────────────────────────────────── */
const qlStyles = `
  .rpp-ql-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media (max-width: 900px) {
    .rpp-ql-grid { grid-template-columns: 1fr !important; }
  }
  .rpp-ql-col-heading {
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    letter-spacing: 0.16em !important;
    text-transform: uppercase !important;
    color: #d4a843 !important;
    margin: 0 0 1.25rem 0 !important;
    padding-bottom: 0.75rem !important;
    border-bottom: 1px solid rgba(212,168,67,0.35) !important;
    display: block !important;
  }
  .rpp-ql-link {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 17px !important;
    font-weight: 500 !important;
    color: #e8e4dc !important;
    text-decoration: none !important;
    padding: 0.6rem 0 !important;
    border-bottom: 1px solid rgba(255,255,255,0.07) !important;
    transition: color 0.15s ease !important;
  }
  .rpp-ql-link:last-of-type { border-bottom: none !important; }
  .rpp-ql-link:hover { color: #d4a843 !important; }
  .rpp-ql-view-all {
    display: inline-flex !important;
    align-items: center !important;
    gap: 6px !important;
    font-family: Inter, system-ui, sans-serif !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #d4a843 !important;
    text-decoration: none !important;
    margin-top: 1.25rem !important;
    transition: opacity 0.15s ease !important;
  }
  .rpp-ql-view-all:hover { opacity: 0.75 !important; }
`;

const QuickLinksSection = () => (
  <section style={{ backgroundColor: "#1a2744", padding: "3.5rem 0" }}>
    <style>{qlStyles}</style>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      <div className="rpp-ql-grid">
        {/* Column 1 — Featured Resources */}
        <div>
          <span className="rpp-ql-col-heading">Featured Resources</span>
          {[
            { label: "Washington Executor's Checklist", href: "/resources/washington-executors-10-step-checklist" },
            { label: "Senior Housing Guide", href: "/understanding-housing-care-options" },
            { label: "Adult Family Home Resources", href: "/afh-club/afh-resources" },
            { label: "Probate Real Estate Guide", href: "/guides/how-probate-real-estate-works" },
            { label: "Estate Sale Planning Guide", href: "/guides/inherited-house-washington" },
          ].map((item) => (
            <Link key={item.href} to={item.href} className="rpp-ql-link">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="#d4a843"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {item.label}
            </Link>
          ))}
          <Link to="/resources" className="rpp-ql-view-all">
            View all resources
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
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
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="#d4a843"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {item.label}
            </Link>
          ))}
          <Link to="/building-your-trusted-professional-team" className="rpp-ql-view-all">
            Search directory
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
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
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="#d4a843"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {item.label}
            </Link>
          ))}
          <Link to="/afh-club" className="rpp-ql-view-all">
            View AFH Club
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
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
        {/* 1. HERO */}
        <HomepageHero />

        {/* 2. WAYFINDING TILES + AFH CLUB FEATURE */}
        <HomepageFunnel />

        {/* 3. QUICK LINKS — 3-column navy band, inlined above */}
        <QuickLinksSection />

        {/* 4. POPULAR RESOURCES */}
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
