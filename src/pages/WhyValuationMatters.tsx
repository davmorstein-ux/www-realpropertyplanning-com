import GoldCheck3D from "@/components/GoldCheck3D";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import MidPageCTA from "@/components/MidPageCTA";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import warning3d from "@/assets/property-warning-guidance-icon-washington.webp";
import scale3d from "@/assets/appraisal-scale-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconHomeValue from "@/assets/icons/real-estate-property-value-icon-washington.webp";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";

const whyMatters = [
  "Supports confident pricing decisions that reflect the property's true condition and market position",
  "Reduces disagreements among heirs, co-owners, or family members about what a home is worth",
  "Clarifies whether repairs or improvements will meaningfully affect the sale outcome",
  "Helps attorneys, executors, and trustees fulfill fiduciary responsibilities with better-informed recommendations",
  "Improves sale planning by aligning price expectations with realistic market conditions",
];

const pricingMistakes = [
  {
    title: "Overpricing an Estate Property",
    consequence: "The home sits on the market for months, accumulating carrying costs, losing buyer interest, and eventually selling for less than it would have at a realistic price. Heirs and executors grow frustrated.",
  },
  {
    title: "Underpricing an Inherited Home",
    consequence: "The property sells quickly, but the estate leaves tens of thousands of dollars on the table. In fiduciary situations, this can create legal and ethical concerns.",
  },
  {
    title: "Ignoring Condition in Pricing",
    consequence: "A price based on comparable homes that are in updated condition leads to appraisal failures, buyer financing issues, and deals that fall apart after weeks under contract.",
  },
  {
    title: "Using Online Estimates for Estate Property",
    consequence: "Automated valuation tools do not account for deferred maintenance, functional obsolescence, or the unique challenges of estate properties. The resulting number may be misleading to families and decision-makers.",
  },
];

const situations = [
  "Inherited homes with outdated kitchens, bathrooms, or systems",
  "Family buyout discussions where siblings disagree on value",
  "Trust-owned properties that need a sale or distribution plan",
  "Homes with deferred maintenance that standard comparisons don't capture",
  "Properties where the decision is whether to sell as-is or invest in improvements",
  "Estate properties where the executor needs defensible pricing for fiduciary purposes",
];

const faqs = [
  {
    question: "What is the difference between a CMA, a BPO, and an appraisal — and which one do I need?",
    answer: "A CMA (Comparative Market Analysis) is a listing agent's pricing opinion based on recent comparable sales — useful for marketing, but not a formal valuation. A BPO is a broker's price opinion, often used by lenders and asset managers. An appraisal is a USPAP-compliant valuation by a state-licensed or certified appraiser, with documented adjustments and a supportable conclusion. For probate, trust accounting, divorce, or any situation where the number has to defend itself, you want an appraisal — or at minimum a CMA built by someone trained as an appraiser.",
  },
  {
    question: "Do you do date-of-death appraisals for stepped-up basis?",
    answer: "Yes. A date-of-death valuation establishes the home's fair market value as of the day the owner passed away — the basis the IRS uses to calculate stepped-up basis for heirs. We can produce this as a formal appraisal report when the CPA or attorney requires one, or as a documented broker valuation when the situation allows for less formality.",
  },
  {
    question: "We've already had two agents give us very different prices. How do we know which one to trust?",
    answer: "Ask both agents to show you the comparables they used and the specific dollar adjustments they made for condition, age, and features. A defensible price has math behind it. A guess has a number behind it. We're happy to do a third opinion that walks you through the actual adjustments — and tells you honestly if one of the first two was right.",
  },
  {
    question: "If you're an appraiser, can you also be the listing agent — isn't that a conflict?",
    answer: "Real Property Planning provides brokerage services as the listing agent, drawing on appraiser training to inform pricing. When a formal, USPAP-compliant appraisal report is required (for example, for tax filings, court, or trust accounting), that work is done as a separate engagement under appraiser independence rules — not bundled with the listing.",
  },
];

const WhyValuationMatters = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estate Property Valuation in Washington State"
        description="Defensible pricing for probate, trust, and inherited Washington homes — from a licensed broker and Washington State Certified Residential Appraiser."
        jsonLd={articleSchema({
          headline: "Why Pricing & Valuation Matter in Estate Property Sales",
          description: "How broker and certified appraiser expertise prevents costly pricing mistakes in estate property.",
          url: "/why-valuation-matters",
          datePublished: "2025-01-15",
          dateModified: "2026-03-15",
          about: ["Property valuation", "Estate pricing", "Certified appraiser", "Probate property pricing", "Inherited home value"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "Why Valuation Matters", url: "/why-valuation-matters" }]} />
      <Header />
      <main id="main-content">
      <style>{`
        #valuation-quick-answer-accordion [data-valuation-trigger],
        #valuation-quick-answer-accordion [data-valuation-trigger] span {
          font-size: 18px !important;
          font-weight: 600 !important;
          line-height: 1.5 !important;
        }

        #valuation-quick-answer-accordion [data-valuation-label] {
          font-size: 13px !important;
        }

        #valuation-quick-answer-accordion [data-valuation-main-answer] {
          font-size: 1rem !important;
          line-height: 1.7 !important;
        }

        #valuation-quick-answer-accordion [data-valuation-sub-question] {
          font-size: 16px !important;
          font-weight: 600 !important;
        }

        #valuation-quick-answer-accordion [data-valuation-sub-answer] {
          font-size: 1rem !important;
          line-height: 1.7 !important;
        }
      `}</style>

      {/* HERO */}
      <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <div
  className="rpp-hero"
  role="img"
  aria-label="Why Valuation Matters — Real Property Planning"
  style={{ backgroundImage: `url("/assets/valuation_hero_clean.webp")`, height: "50vh" }}
/>
        <HeroBandTitle>Pricing &amp; Valuation Expertise</HeroBandTitle>
      </section>

      {/* Quick Answer accordion */}
      <section className="py-10 lg:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion id="valuation-quick-answer-accordion" type="single" collapsible className="bg-card border border-border rounded-2xl shadow-sm">
              <AccordionItem value="quick-answer" className="border-0">
                <AccordionTrigger data-valuation-trigger className="px-6 md:px-8 py-5 hover:no-underline [&]:!text-[18px] [&]:!font-semibold">
                  <span className="text-left font-serif text-foreground !text-[18px] !font-semibold !leading-[1.5]">
                    Why does property valuation matter?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6 !text-[16px] !leading-[1.6]">
                  <p data-valuation-label className="text-gold font-bold tracking-[0.15em] uppercase mb-2 !text-[13px]">Quick Answer</p>
                  <p data-valuation-main-answer className="text-muted-foreground !leading-[1.7] text-base">
                    Accurate valuation helps prevent two costly estate-property mistakes: pricing too high, which can create carrying costs and lost buyer interest, or pricing too low, which can leave significant value behind. Real Property Planning connects executors, attorneys, and trustees with valuation-informed guidance and qualified professionals who can help support defensible pricing decisions based on property condition, market context, and estate objectives.
                  </p>
                  <div className="mt-5 pt-5 border-t border-border space-y-4">
                    <div>
                      <p data-valuation-sub-question className="text-foreground mb-1 !text-[16px] !leading-[1.6] !font-semibold">Why can't I just use an online estimate?</p>
                      <p data-valuation-sub-answer className="text-muted-foreground !leading-[1.7] text-base">Automated tools miss deferred maintenance, condition issues, and estate-specific factors that significantly affect what buyers will actually pay.</p>
                    </div>
                    <div>
                      <p data-valuation-sub-question className="text-foreground mb-1 !text-[16px] !leading-[1.6] !font-semibold">Who benefits from valuation expertise?</p>
                      <p data-valuation-sub-answer className="text-muted-foreground !leading-[1.7] text-base">Executors, trustees, and attorneys who need defensible pricing — especially in multi-heir situations or court-supervised sales.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Accurate Value Guidance Matters */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              Why Does Accurate Value Guidance Matter in Estate Sales?
            </h2>
            <ul className="space-y-2.5">
              {whyMatters.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground !text-[16px] !leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Can Go Wrong */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <img src={warning3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain mb-5" loading="lazy"/>
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-3">
              What Happens When Estate Property Pricing Goes Wrong?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Pricing mistakes in estate situations create consequences that go beyond just dollars:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pricingMistakes.map((mistake, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-serif text-base text-foreground font-semibold mb-1.5">{mistake.title}</h3>
                  <p className="text-muted-foreground !text-[16px] !leading-[1.6]">{mistake.consequence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations Where Valuation Is Critical */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              When Does Valuation Expertise Become Critical?
            </h2>
            <ul className="space-y-3">
              {situations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground !text-[16px] !leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 !text-[16px] !leading-[1.6]">
              Real Property Planning connects executors, trustees, and attorneys with qualified professionals throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Valuation & Pricing FAQs" />

      <RelatedServices
        currentPath="/why-valuation-matters"
        links={["probateSales", "seniorTransitions", "executors"]}
        heading="Related Resources"
        intro=""
      />

      <DisclaimerSection />

      <MidPageCTA
        heading="Need Help Pricing an Estate or Inherited Property?"
        body="Real Property Planning provides valuation-informed pricing strategy grounded in dual broker and appraiser experience."
        buttonText="Discuss a Property"
        microcopy="No pressure. Just honest, market-grounded guidance."
      />

      </main>
      <Footer />
    </div>
  );
};

export default WhyValuationMatters;
