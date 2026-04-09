import GoldCheck3D from "@/components/GoldCheck3D";
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

import warning3d from "@/assets/warning-3d.png";
import scale3d from "@/assets/scale-3d.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
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
    question: "Why is valuation expertise especially important in probate situations?",
    answer: "Probate properties are often in non-standard condition — outdated, cluttered, vacant, or in need of repair. Standard comparative market analyses may not account for these factors. David's dual credentials as a broker and certified appraiser allow him to evaluate properties with greater accuracy and nuance.",
  },
  {
    question: "Does David provide formal appraisals?",
    answer: "David is a Washington state certified residential appraiser and can discuss valuation matters in depth. In most client engagements, his primary role is as a real estate broker providing pricing strategy and sale execution. Formal appraisal services are available separately when needed.",
  },
  {
    question: "How does David's appraisal background improve the sale process?",
    answer: "Understanding how appraisers evaluate property helps David anticipate buyer financing challenges, price properties more accurately, and identify condition issues that could affect value — all before the property reaches the market. This reduces surprises and improves outcomes.",
  },
  {
    question: "Can David help when family members disagree about a property's value?",
    answer: "Yes. Pricing disagreements are common in inherited and estate situations. David provides objective, market-grounded perspective that helps families move past disagreement toward a realistic plan — often by explaining the factors that drive actual buyer behavior and appraised value.",
  },
];

const WhyValuationMatters = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Why Valuation Matters in Probate & Estate Property Sales | David Stein"
        description="Learn why accurate property valuation is critical in probate, estate, and inherited home sales — and how a broker with certified appraisal credentials prevents costly pricing mistakes."
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

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Pricing & Valuation Expertise
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Why Accurate Pricing Is the Most Important Decision in Estate Property Sales
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Every estate property sale hinges on one question: what is this home actually worth in its current condition? Not what Zillow says. Not what the neighbors sold for after a full remodel. The real answer — factoring in deferred maintenance, functional issues, and realistic buyer behavior — is what determines whether the sale protects the estate or costs it.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              David Stein is one of the few professionals in Washington State who holds both a broker license and a state certified residential appraiser credential. That dual lens means he evaluates properties the way an appraiser would, then markets and sells them the way a seasoned broker does — giving executors, attorneys, and families a level of pricing confidence that most agents cannot deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Discuss a Property
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question="Why does property valuation matter in estate and probate sales?"
        answer="Accurate valuation prevents the two most expensive mistakes in estate property sales: overpricing that leads to months of carrying costs and lost buyer interest, and underpricing that leaves tens of thousands of dollars on the table. David Stein's dual credentials as a licensed broker and certified residential appraiser allow him to evaluate properties based on actual condition, not automated estimates — giving executors, attorneys, and trustees defensible pricing that protects the estate."
      />

      <TrustStrip />

      {/* Why Accurate Value Guidance Matters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={scale3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Does Accurate Value Guidance Matter in Estate Sales?
            </h2>
            <ul className="space-y-4">
              {whyMatters.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Can Go Wrong */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={warning3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What Happens When Estate Property Pricing Goes Wrong?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pricing mistakes in estate situations create consequences that go beyond just dollars:
            </p>
            <div className="space-y-5">
              {pricingMistakes.map((mistake, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{mistake.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mistake.consequence}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations Where Valuation Is Critical */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              When Does Valuation Expertise Become Critical?
            </h2>
            <ul className="space-y-4">
              {situations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Executors and trustees can learn more about <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">how David supports the sale process</Link>. Attorneys may also find value in the <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">attorney referral resources</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How the Dual Credential Works in Practice */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How the Dual Credential Works in Practice
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Most real estate agents base their pricing recommendations on a comparative market analysis — a review of recent sales of similar homes in the area. This works well for standard residential transactions where homes are in typical condition and the market provides clean comparables.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estate properties are different. The home may have an original 1960s kitchen, a furnace that should have been replaced a decade ago, water damage in the basement, or a roof with five years of remaining life. These are not cosmetic issues — they directly affect what buyers will pay and what lenders will finance. Standard comparables do not account for these realities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David's appraisal training means he evaluates properties the way a lender's appraiser would — assessing functional utility, physical depreciation, and effective age alongside location and square footage. This allows him to anticipate appraisal challenges before they derail a deal, price properties in a way that attracts serious buyers while protecting the estate's value, and advise families on which repairs will actually move the needle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result is fewer surprises, faster closings, and pricing decisions that hold up under scrutiny — whether that scrutiny comes from a buyer's lender, a probate court, or family members with different expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground text-lg italic leading-relaxed mb-4">
              "David's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable."
            </p>
            <p className="text-muted-foreground text-[15px] font-medium">— Professional Referral · Probate property sale coordination</p>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Need Help Pricing an Estate or Inherited Property?"
        body="David provides valuation-informed pricing strategy grounded in over 20 years of dual broker and appraiser experience."
        buttonText="Discuss a Property"
        microcopy="No pressure. Just honest, market-grounded guidance."
      />

      <PageFAQ faqs={faqs} heading="Valuation & Pricing FAQs" />

      {/* Related Resources */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">All FAQs</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/why-valuation-matters" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need experienced pricing guidance for an estate, inherited, or trust-owned property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David provides honest, market-grounded assessments that help clients and fiduciaries make confident pricing decisions.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Discuss a Property
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default WhyValuationMatters;
