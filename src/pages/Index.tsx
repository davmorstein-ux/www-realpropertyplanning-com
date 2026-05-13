import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema, organizationSchema } from "@/lib/schema";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import HomepageHero from "@/components/HomepageHero";
import HomepageFAQ from "@/components/HomepageFAQ";
import SituationCards from "@/components/SituationCards";
import HomepageNav from "@/components/HomepageNav";


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

      {/* 1. HERO — short, calm, clear */}
      <HomepageHero />

      {/* 2. SITUATION-BASED GUIDANCE — Where Are You In The Process? */}
      <SituationCards />

      {/* 3. FAQ — supports immediate questions before broader pathways */}
      <HomepageFAQ />

      {/* 4. BROADER CATEGORY ORIENTATION — secondary navigation pathways */}
      <HomepageNav />

      {/* 4.5 — GUIDED ENTRY POINT */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
              Not Sure Where to Start?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Answer a Few Quick Questions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Answer a few quick questions and we'll point you in the right direction.
            </p>
            <Link to="/where-to-start" className="gold-cta">
              Help Me Find My Way
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. NEXT STEP — quieter Tier 2 CTA strip */}
      <section className="py-10 lg:py-12 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div>
              <h2 className="font-serif text-2xl md:text-[28px] text-primary-foreground font-semibold leading-snug mb-1">
                Not sure where to begin?
              </h2>
              <p className="text-primary-foreground text-base md:text-lg">
                Start with a calm, no-pressure conversation.
              </p>
            </div>
            <Link to="/contact" className="gold-cta shrink-0">
              Schedule a Conversation
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
