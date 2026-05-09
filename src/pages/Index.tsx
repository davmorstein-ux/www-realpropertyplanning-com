
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
import HomepageNav from "@/components/HomepageNav";

import HomepageLeadForm from "@/components/HomepageLeadForm";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import EducationalPathways from "@/components/EducationalPathways";
import WhatHappensNext from "@/components/WhatHappensNext";
import HomepageHero from "@/components/HomepageHero";
import HomepageFAQ from "@/components/HomepageFAQ";


import HowWeHelpCards from "@/components/HowWeHelpCards";
import HomepageWarmStatement from "@/components/HomepageWarmStatement";
import SituationCards from "@/components/SituationCards";
import HomepageOrientation from "@/components/HomepageOrientation";

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
        title="Real Property Planning | Probate, Estate & Senior Transitions — Washington State"
        description="Washington State's trusted resource for probate real estate, estate sales, and senior transitions — connecting families, executors, and attorneys with professional guidance statewide."
        canonical="https://realpropertyplanning.com"
        schemaJson={jsonLd}
      />
      <main id="main-content">

      {/* 1. HERO — short, calm, clear */}
      <HomepageHero />

      {/* 2. SITUATION IDENTIFICATION */}
      <SituationCards />

      {/* 3. GUIDED PATHWAYS */}
      <HomepageNav />

      {/* 4. REASSURANCE / TRUST */}
      <HomepageWarmStatement />

      {/* 5. NEXT STEP — single primary CTA */}
      <section className="py-14 lg:py-20 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Not sure where to begin?
            </h2>
            <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-8">
              Start with a calm, no-pressure conversation. We typically respond within one business day.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-10 py-5 h-auto rounded-lg text-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-9 h-9 mr-2.5 object-contain shrink-0" loading="lazy" />
                Schedule a Conversation
              </Button>
            </Link>
            <div className="mt-5">
              <a href="tel:2069003015" className="text-gold hover:brightness-110 underline-offset-4 hover:underline text-base font-medium">
                Or call (206) 900-3015
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — kept for SEO/AEO discovery */}
      <HomepageFAQ />

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
