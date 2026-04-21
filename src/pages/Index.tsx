import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema, organizationSchema } from "@/lib/schema";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import expRealtyLogo from "@/assets/exp-realty-real-estate-logo-washington.webp";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import HomepageLeadForm from "@/components/HomepageLeadForm";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import EducationalPathways from "@/components/EducationalPathways";
import WhatHappensNext from "@/components/WhatHappensNext";
import HomepageHero from "@/components/HomepageHero";
import HomepageFAQ from "@/components/HomepageFAQ";
import HomepageTeamSection from "@/components/HomepageTeamSection";
import HowWeHelpCards from "@/components/HowWeHelpCards";
import HomepageWarmStatement from "@/components/HomepageWarmStatement";

const serviceAreas = [
  { county: "King County", href: "/counties/king", cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Bothell, Shoreline, Mercer Island, Burien, Kent, Auburn, Federal Way" },
  { county: "Snohomish County", href: "/counties/snohomish", cities: "Everett, Edmonds, Lynnwood, Marysville, Mukilteo, Mill Creek, Mountlake Terrace, Monroe, Bothell, Woodinville" },
  { county: "Pierce County", href: "/counties/pierce", cities: "Tacoma, Puyallup, Lakewood, Gig Harbor, Bonney Lake, Sumner, Auburn, University Place" },
  { county: "Kitsap County", href: "/counties/kitsap", cities: "Bremerton, Silverdale, Poulsbo, Port Orchard, Bainbridge Island, Kingston" },
];

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
        title="Probate Real Estate & Senior Transitions | Puget Sound WA"
        description="Washington State resource for probate real estate, inherited home sales, and senior transitions — guidance for families, executors, and attorneys."
        canonical="https://www.realpropertyplanning.com"
        schemaJson={jsonLd}
      />
      <Header />
      <main id="main-content">

      {/* 1. HERO — PNW background, calm headline, two CTAs */}
      <HomepageHero />

      {/* 2. SERVICE NAV TILES */}
      <ServiceNavTiles />

      {/* HOW WE HELP */}
      <HowWeHelpCards />

      {/* WARM STATEMENT */}
      <HomepageWarmStatement />

      {/* TEAM SECTION */}
      <HomepageTeamSection />

      {/* 6. FAQ */}
      <HomepageFAQ />

      {/* 7. WHEN SHOULD YOU CALL */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Most people call because something happened — not because they have a plan. That's okay.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-10 h-10 mr-2.5 object-contain shrink-0" style={{ background: 'transparent' }}  loading="lazy"/>
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LEAD MAGNET */}
      <LeadMagnetBlock />

      {/* 9. AREAS SERVED */}
      <section className="py-14 lg:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 20 L130 80 L160 140 H40 L70 80 Z' fill='%23fff'/%3E%3Cpath d='M100 50 L120 90 L140 130 H60 L80 90 Z' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }} />
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-3">
              Serving Clients Across Washington State
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              Based in Western Washington with referral connections nationwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Link key={i} to={area.href} className="card-3d group p-6">
                <div className="flex items-center gap-3 mb-2">
                  <img src={mappin3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain shrink-0"  loading="lazy"/>
                  <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors">
                    {area.county}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">{area.cities}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/counties">
              <Button variant="gold" size="lg" className="focus-visible:ring-gold">
                View All Service Areas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT */}
      <section className="py-14 lg:py-20 bg-navy-dark">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Start With a Question
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-6">
                Confidential. Practical. No obligation. We typically respond within one business day.
              </p>
              <div className="space-y-4">
                <a href="tel:2069003015" className="flex items-center gap-3 text-primary-foreground hover:text-gold transition-colors">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain"  loading="lazy"/>
                  <span className="text-lg font-semibold">(206) 900-3015</span>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img src={expRealtyLogo} alt="eXp Realty — license held under eXp Realty (real estate license disclosure)" className="h-6 w-auto opacity-50" loading="lazy" />
                <span className="text-primary-foreground/40 text-sm">License held under eXp Realty · Appraisal via Stein Appraisal</span>
              </div>
            </div>
            <div>
              <WhatHappensNext variant="dark" />
            </div>
            <HomepageLeadForm />
          </div>
        </div>
      </section>

      {/* 11. EDUCATIONAL PATHWAYS */}
      <EducationalPathways />

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
