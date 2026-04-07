import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ServicePageNav from "@/components/ServicePageNav";

const faqs = [
  { question: "Is it worth fixing up an inherited house before selling?", answer: "It depends on the property's condition, the local market, and the cost of repairs relative to the expected return. In some cases, targeted improvements yield a strong return. In others, the time and money invested do not come back at sale. A professional assessment helps determine which approach makes sense." },
  { question: "What repairs should you always make?", answer: "Safety issues (electrical hazards, structural problems, water damage) should always be addressed. Beyond safety, focus on high-impact, low-cost improvements: deep cleaning, fresh paint, landscaping cleanup, and removing clutter. These create the strongest impression for the lowest investment." },
  { question: "Will buyers pay less for an as-is property?", answer: "Generally, yes — buyers discount for uncertainty. When a property is sold as-is, buyers factor in the cost of repairs plus a risk premium. However, the discount is sometimes smaller than the cost of making the repairs yourself, especially for older homes with extensive deferred maintenance." },
  { question: "How do you decide between as-is and fixing up?", answer: "Get a professional assessment that includes estimated repair costs, projected return on investment, and a realistic timeline. Compare the expected net proceeds from both approaches. Factor in carrying costs — mortgage, insurance, utilities, and taxes — for the additional time repairs would take." },
  { question: "Can you sell an inherited house as-is in Washington State?", answer: "Yes. There is no legal requirement to make repairs before selling. However, Washington law does require sellers to disclose known material defects. The executor must complete a seller disclosure form to the best of their knowledge. Working with a broker who understands estate property helps ensure proper disclosure." },
];

const jsonLd = articleSchema({
  headline: "Should You Sell an Inherited House As-Is or Fix It Up?",
  description: "A practical guide to deciding whether to sell an inherited property as-is or invest in repairs. Understand the financial trade-offs, timing considerations, and when each approach makes sense.",
  url: "/guides/sell-inherited-house-as-is-or-fix",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  about: ["Inherited property repairs", "Sell house as-is", "Estate property preparation", "Property condition assessment", "Inherited house sale"],
});

const SellInheritedHouseAsIsOrFix = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Should You Sell an Inherited House As-Is or Fix It Up? | Real Property Planning"
      description="A practical guide to deciding whether to sell an inherited property as-is or invest in repairs. Understand the trade-offs and when each approach makes sense."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Sell As-Is or Fix Up?", url: "/guides/sell-inherited-house-as-is-or-fix" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Should You Sell an Inherited House As-Is or Fix It Up?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            There is no single right answer. The best approach depends on the property's condition, the local market, repair costs, and how much time and money the estate can invest. In many cases, a middle path — targeted improvements rather than full renovation — produces the best outcome.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide helps you think through the decision using practical criteria rather than guesswork.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* What This Means in Practice */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What This Means in Practice</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Inherited properties often come with years of deferred maintenance. The carpet may be worn, the kitchen outdated, the roof aging. Family members may feel pressure to "fix everything" before selling, while others push to sell immediately and move on.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Both instincts have merit, but neither is always correct. The decision should be based on numbers and professional assessment — not emotion, family pressure, or assumptions about what buyers want.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The key question is not "should we fix it up?" — it is "which improvements, if any, will return more than they cost, given the timeline and market conditions?"
          </p>
        </div>
      </div>
    </section>

    {/* Factors That Affect the Decision */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Factors That Affect the Decision</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Property condition.</strong> A home that needs only cosmetic updates is a strong candidate for targeted improvements. A home with structural issues, major systems failures, or environmental problems may be better sold as-is to a buyer prepared for renovation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Local market conditions.</strong> In a strong seller's market, even as-is properties sell competitively. In a slower market, presentation matters more, and well-prepared homes stand out.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Time constraints.</strong> Repairs take time — and time costs money in mortgage payments, insurance, utilities, and property taxes. If the estate needs liquidity quickly, a faster sale as-is may net more after carrying costs than a delayed sale with improvements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Available funds.</strong> If the estate does not have cash available for repairs, the as-is path may be the only practical option. Some executors fund improvements from estate accounts, but this requires careful documentation and sometimes court approval.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Neighborhood comparison.</strong> A professional <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">property assessment</Link> that includes comparable sales analysis reveals what similar homes in the neighborhood are selling for — and what level of condition buyers in that market expect.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Not Sure What Makes Sense?"
      body="A professional property assessment can show you the numbers — estimated repair costs, projected returns, and realistic market value in current and improved condition."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* The Middle Path */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The Middle Path: Targeted Improvements</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            In many estate situations, the best outcome comes from a strategic middle path — not a full renovation, but targeted improvements that create the strongest impression for the lowest cost:
          </p>
          <ul className="space-y-4">
            {[
              "Professional deep cleaning — including carpets, windows, and exterior",
              "Fresh paint in neutral colors — one of the highest-return improvements",
              "Landscaping cleanup — curb appeal is the first impression and sets buyer expectations",
              "Decluttering and staging — removing decades of belongings transforms how a home shows",
              "Minor repairs — leaky faucets, broken light fixtures, sticky doors, loose handrails",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            These improvements typically cost a few thousand dollars and can add significantly more to the sale price. A broker experienced in estate property can identify which specific improvements make sense for your home and market.
          </p>
        </div>
      </div>
    </section>

    {/* Common Mistakes to Avoid */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-4">
            {[
              "Renovating to personal taste rather than market appeal — estate properties should be prepared for broad buyer appeal, not customized",
              "Over-improving for the neighborhood — a $50,000 kitchen remodel does not make sense if the neighborhood price ceiling is $400,000",
              "Underestimating the timeline — even simple improvements can take weeks when contractors are involved, and delays add carrying costs",
              "Making decisions without a professional assessment — gut feelings about what buyers want are often inaccurate",
              "Ignoring the as-is option out of pride — sometimes the smartest financial decision is selling without improvements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* When to Get Professional Guidance */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When to Get Professional Guidance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            This is a decision that benefits from objective, data-driven advice. A broker who understands estate property and has appraisal expertise can provide:
          </p>
          <ul className="space-y-3">
            {[
              "A realistic assessment of the property's current market value",
              "Estimated value after targeted improvements",
              "Repair cost estimates from trusted vendors",
              "A comparison of net proceeds under both scenarios",
              "Timeline projections for each approach",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            This information transforms the decision from a stressful guessing game into a clear, informed choice.
          </p>
        </div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/estate-property-repairs-before-sale" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Estate Property Repairs Guide</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/pricing-house-trust-estate" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Pricing a House in Trust or Estate</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="As-Is vs. Fix-Up FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "What Should an Executor Do First With a House?", description: "The first decisions an executor needs to make about estate property.", href: "/guides/executor-first-steps-house" },
        { title: "What Taxes Apply When Selling an Inherited House?", description: "Understanding capital gains, stepped-up basis, and other tax considerations.", href: "/guides/taxes-selling-inherited-house-washington" },
        { title: "How Long Does It Take to Sell a Probate Property?", description: "Realistic timelines and what affects them.", href: "/guides/how-long-sell-probate-property" },
      ]}
    />

    <RelatedServices currentPath="/guides/sell-inherited-house-as-is-or-fix" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">If you're working through this situation and want help thinking it through, a short conversation can often bring clarity.</p>
          <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <ServicePageNav />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default SellInheritedHouseAsIsOrFix;
