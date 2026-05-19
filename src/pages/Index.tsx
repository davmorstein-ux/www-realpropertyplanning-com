import Footer from "@/components/Footer";
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
        "text": "Yes — this is one of the most common situations we work with. Our team manages the full property process locally, including assessment, cleanout coordination, repairs, listing, and sale, with regular updates so out-of-state executors never need to be present for every step."
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

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Helmet>
        <script type="application/ld+json">{homepageFaqJsonLd}</script>
      </Helmet>
      <SEOHead
        title="Real Property Planning | Probate, Estate & Senior Transitions — Washington State"
        description="Washington State's trusted resource for probate real estate, estate sales, and senior transitions — connecting families, executors, and attorneys with professional guidance statewide."
        canonical="https://realpropertyplanning.com"
        schemaJson={jsonLd}
      />
      <main id="main-content">

      {/* 1. HERO — cinematic image with overlaid headline + CTAs */}
      <HomepageHero />

      {/* 2. GUIDED ENTRY — Where are you in the process? (3 tiles) */}
      <HomepageFunnel />

      {/* 3. IDENTITY ANCHOR — what Real Property Planning is */}
      <HomepageIdentityAnchor />

      {/* 4. REASSURANCE — You Don't Have To Navigate This Alone */}
      <HomepageReassurance />

      {/* 4. HOW WE HELP — clean visual icon row */}
      <HomepageHowWeHelpRow />

      {/* 5. TRUST STRIP — affiliations, licenses, memberships */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container px-6 lg:px-8">
          <h2
            className="font-serif text-navy text-center mb-10"
            style={{ fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.3, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Trusted Memberships &amp; Affiliations
          </h2>
          <AffiliationBadgeGrid />
        </div>
      </section>


      {/* TESTIMONIALS — social proof above the footer */}
      <HomepageTestimonials />

      {/* SEO description — visible to crawlers, visually subtle for users */}
      <section aria-label="Site description" className="bg-cream">
        <div className="container px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            Real Property Planning is Washington State's free hub for probate real estate, estate sales, inherited property, and senior housing transitions. Serving Seattle, Bellevue, Kirkland, Tacoma, Everett, and communities throughout Western Washington and the Puget Sound region.
          </p>
        </div>
      </section>





      </main>
      <Footer />
    </div>
  );
};

export default Index;
