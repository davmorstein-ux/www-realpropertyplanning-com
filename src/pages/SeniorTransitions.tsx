import GoldCheck3D from "@/components/GoldCheck3D";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import people3d from "@/assets/real-estate-agent-team-icon-washington.webp";
import heart3d from "@/assets/senior-care-heart-icon-washington.webp";
import seniorHomeSalesIcon from "@/assets/icons/senior-home-sales-for-sale-icon-washington.webp";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import seniorTransitionsHero from "@/assets/senior-transitions-hero.png";

import HeroBandTitle from "@/components/HeroBandTitle";

const transitionSituations = [
  "A parent moving to assisted living, memory care, or an independent senior community",
  "Downsizing from a longtime family home to something more manageable",
  "Selling after a health event, hospitalization, or change in care needs",
  "A planned transition the family has been preparing for over months or years",
  "Managing a sale while simultaneously coordinating with care professionals, attorneys, and financial advisors",
  "Out-of-state family members who need a trusted local professional to handle the property",
];

const whatFamiliesNeed = [
  "A patient, respectful approach — someone who understands that this home holds 30 or 40 years of a family's life",
  "Honest guidance on timing — when to list, what to fix, and what to leave alone",
  "Realistic market insight — what the home is worth in its actual condition, without inflated projections",
  "Practical coordination — help connecting the right people: move managers, cleanout crews, contractors, attorneys",
  "Clear communication — regular updates in plain language, so no one feels left out or surprised",
  "No pressure — a professional who moves at the family's pace, not a commission deadline",
];

const coordinationPartners = [
  {
    title: "Family Members",
    description: "Adult children, spouses, and extended family members are almost always involved — and they don't always agree. Some family members want to sell quickly; others want to hold on. Some are local; others are managing everything from another state. Real Property Planning works with all of them, providing consistent communication and clear guidance that keeps the process moving without pressure.",
  },
  {
    title: "Care Professionals",
    description: (
      <>
        Senior move managers, care coordinators, social workers, and placement specialists are often working alongside families during a transition. Real Property Planning coordinates with the care team to make sure the real estate timeline fits the broader plan — not the other way around. Real Property Planning has established relationships with senior move professionals in the Puget Sound area, including{" "}
        <a href="https://hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</a>, a division of Hansen Bros. Moving &amp; Storage, one of the most experienced senior moving services in Western Washington.
      </>
    ),
  },
  {
    title: "Trusted Advisors",
    description: (
      <>
        Attorneys, financial planners, CPAs, and fiduciaries need the real estate side of a senior transition handled with accuracy and professionalism. A background as a{" "}
        <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraiser</Link> means advisors receive reliable valuation guidance — not listing estimates — which matters for financial planning, Medicaid planning, and estate documentation purposes.
      </>
    ),
  },
];

const jsonLd = articleSchema({
  headline: "Senior Housing Transitions in Washington State",
  description: "Patient, experienced guidance for families helping a senior sell their home in Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/senior-transitions",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Senior transitions", "Downsizing", "Assisted living", "Senior home sales", "Family housing decisions"],
});

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Home Sales & Downsizing in Washington | Family-Paced Guidance"
        description="Help for Washington families selling a longtime home during a move to assisted living, memory care, or downsizing. Coordinated with care teams, attorneys, and out-of-state siblings."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />
      <main id="main-content">

      {/* Hero image + brand band — matches site-wide HeroBandTitle pattern */}
      <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <img
          src={seniorTransitionsHero}
          alt="Senior couple in front of their longtime Washington home with a Real Property Planning For Sale sign"
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
          loading="eager"
          fetchPriority="high"
        />
        <HeroBandTitle as="h2">Selling A Senior's Home</HeroBandTitle>
      </section>

      {/* What Goes Into a Senior Transition */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Goes Into a Senior Transition?
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              When a senior leaves a longtime home — whether moving to assisted living, a memory care community, a smaller residence, or closer to family — it rarely involves just real estate. It's a coordinated process that touches nearly every part of a family's life. Real Property Planning connects families and professionals to the right people for each step.
            </p>
          </div>
        </div>
      </section>

      {/* Who Helps With a Senior Transition */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4 text-center">
              Who Helps With a Senior Transition?
            </h2>
            <p className="text-foreground text-base leading-[1.7] text-center mb-10">
              Tap any role below to learn more about what they do and how they fit into a senior transition.
            </p>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {[
                {
                  title: "Senior Move Managers",
                  description: "Specialists who handle the physical side of a move — sorting, packing, coordinating movers, and setting up the new home. They work at the family's pace and are trained to handle the emotional weight of leaving a longtime residence.",
                  linkText: "Find a Senior Move Manager",
                  href: "/senior-move-managers",
                },
                {
                  title: "Senior Living Advisors",
                  description: "Professionals who help families evaluate and choose the right next home — whether that's independent living, assisted living, memory care, or in-home support. They know local communities, availability, and costs.",
                  linkText: "Find a Senior Living Advisor",
                  href: "/senior-placement",
                },
                {
                  title: "Estate Sale & Liquidation Services",
                  description: "When a home contains decades of belongings, estate sale professionals help families sort, value, and sell or donate items — clearing the home efficiently and respectfully before it goes on the market.",
                  linkText: "Learn more",
                  href: "/estate-liquidation",
                },
                {
                  title: "Real Estate Broker (Probate & Senior Transition Specialist)",
                  description: "A broker experienced in senior transitions understands condition-based pricing, family dynamics, and the need for patience. Real Property Planning connects families with brokers who specialize in this work throughout Washington State.",
                  linkText: "Learn more",
                  href: "/realtor",
                },
                {
                  title: "Certified Residential Appraiser",
                  description: "An independent appraisal gives families an honest, defensible value for the home — separate from any listing pressure. Useful for estate planning, trust administration, or simply knowing where you stand before making decisions.",
                  linkText: "Learn more",
                  href: "/real-estate-appraiser",
                },
                {
                  title: "Estate Attorneys",
                  description: "Many senior transitions intersect with trust administration, power of attorney, or estate planning. An attorney ensures the legal side of the transition is handled properly alongside the real estate process.",
                  linkText: "Find an Estate Attorney",
                  href: "/for-attorneys",
                },
                {
                  title: "Financial Advisors & CPAs",
                  description: "Selling a longtime home has tax implications — capital gains, stepped-up basis, trust distributions. A financial planner or CPA helps families understand the financial picture before and after the sale.",
                  linkText: "Find a Financial Advisor or CPA",
                  href: "/for-financial-planners",
                },
              ].map((card, idx) => (
                <AccordionItem
                  key={card.title}
                  value={`item-${idx}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="font-serif text-xl text-foreground font-semibold hover:no-underline text-left">
                    {card.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-foreground text-base leading-[1.7] mb-4">{card.description}</p>
                    <Link to={card.href} className="text-accent hover:text-gold font-semibold underline underline-offset-4 inline-block">
                      {card.linkText} →
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-8">
              Most families don't know which professional they need first. That's okay. Real Property Planning helps you figure out the right sequence and connects you with trusted professionals throughout the Puget Sound area.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeniorTransitions;
