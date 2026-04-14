import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const whyCPAsInvolveRE = [
  {
    heading: "Understanding Realistic Market Value",
    text: (
      <>
        Automated valuation tools — Zillow, Redfin, and similar platforms — are built for typical homes in typical condition. Estate properties are rarely typical. They often have deferred maintenance, dated interiors, or condition issues that these tools cannot account for accurately. When a client needs a defensible picture of what an inherited or estate property is actually worth, a valuation-informed professional who understands both the market and the methodology gives you — and your client — a more reliable foundation for financial decision-making.
      </>
    ),
  },
  {
    heading: "Evaluating Sale Timing and Strategy",
    text: (
      <>
        For CPAs, the timing of a property sale can have direct tax implications — and the right sale strategy isn't always obvious from a real estate standpoint alone. Some properties are best sold as-is immediately; others benefit from targeted preparation that meaningfully improves outcome. David helps clients think through these decisions with an honest cost-benefit analysis grounded in current market conditions in <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">King, Snohomish, Pierce, and Kitsap Counties</Link> — so the strategy reflects both financial and market realities.
      </>
    ),
  },
  {
    heading: "Helping Clients Understand Condition",
    text: (
      <>
        Inherited homes and estate properties are often not in move-in-ready condition. Decades of deferred maintenance, outdated systems, or simply 40 years of accumulated belongings can make the property feel overwhelming to a client who has never navigated this before. David helps clients understand what the property's condition means for value and marketability — and what, if anything, is worth addressing before listing.
      </>
    ),
  },
  {
    heading: "Supporting Coordinated Decision-Making",
    text: (
      <>
        Estate and inherited property situations almost always involve multiple professionals — <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">attorneys</Link>, <Link to="/trustees" className="text-accent hover:text-gold underline underline-offset-4">trustees</Link>, heirs, fiduciaries, and family members — all of whom may have different information and different priorities. David serves as the real estate point of coordination, keeping all parties working from the same accurate property information and reducing the back-and-forth that slows these situations down.
      </>
    ),
  },
];

const howHelpsBlocks = [
  {
    heading: "Valuation-Informed Perspective",
    text: (
      <>
        As a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> with over 20 years of experience, David brings a level of analytical rigor to property valuation that goes well beyond a standard comparative market analysis. When a CPA needs a defensible understanding of market value — for estate tax purposes, financial planning, or client decision-making — David's assessment provides a condition-adjusted, methodology-based picture that holds up to professional scrutiny.
      </>
    ),
  },
  {
    heading: "Practical Guidance on Sale Strategy",
    text: "Not every inherited property should be renovated before listing. Not every estate property should be sold as-is. The right answer depends on the property's specific condition, the current market in that specific neighborhood, the estate's financial constraints, and the family's timeline. David evaluates each situation individually and gives clients an honest recommendation — with the reasoning behind it explained clearly.",
  },
  {
    heading: "Full Support for Inherited and Probate Property",
    text: (
      <>
        Inherited homes and <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">probate</Link> properties involve complexity that standard real estate transactions don't — legal authority requirements, multi-party coordination, condition challenges, and emotional dynamics that affect decision-making. David has worked with these situations throughout his career and understands both the practical and interpersonal dimensions of managing them well.
      </>
    ),
  },
  {
    heading: "Local Market Knowledge Across the Puget Sound Region",
    text: (
      <>
        David serves clients throughout <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">King County</Link> (Seattle, Bellevue, Kirkland, Redmond, Renton, Bothell), Snohomish County (Everett, Edmonds, Lynnwood, Woodinville), Pierce County (Tacoma, Puyallup, Gig Harbor), and Kitsap County (Bremerton, Silverdale, Bainbridge Island) — with deep familiarity with neighborhood-level market conditions across the region.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How does Real Property Planning support CPAs during estate and inherited property situations?",
    answer: "David handles the real estate side — honest property assessment, valuation-informed pricing, preparation coordination, listing, and sale management — while keeping the CPA and other advisors informed throughout. The goal is to make sure the property decisions your client faces are supported by accurate, professionally developed market information that integrates cleanly with the financial picture you're managing.",
  },
  {
    question: "Can David provide a valuation that supports tax or estate planning purposes?",
    answer: "David provides valuation-informed market analysis grounded in his certified appraisal methodology — a condition-adjusted, comparable-supported assessment of likely market value. For situations requiring a formal USPAP-compliant appraisal (such as date-of-death valuations for estate tax purposes), David can discuss appropriate resources. For many CPA-client situations involving general planning, decision-making, or sale strategy, his market analysis provides the practical foundation needed.",
  },
  {
    question: "What is the difference between a CMA and the analysis David provides?",
    answer: "A standard comparative market analysis (CMA) is typically produced by a listing agent to support a pricing conversation. It reflects a general price range based on nearby sales, without necessarily accounting for the property's specific condition in a documented, methodology-based way. David's valuation-informed analysis combines certified appraisal training with current market data — producing a condition-adjusted assessment that is more reliable for professional planning purposes than a standard CMA.",
  },
  {
    question: "Do you work with CPAs whose clients are outside the Puget Sound area?",
    answer: "David's primary service area is Western Washington and the Puget Sound region. For clients with property in other parts of Washington State, he can discuss referral connections. For out-of-state property, eXp Realty's national network can connect clients with trusted local brokers in most U.S. markets.",
  },
];

const ForCPAsLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Real Property Planning Supports CPAs With Estate & Inherited Property | Washington State"
      description="Valuation insight, sale strategy, and coordinated property guidance for CPAs advising clients through inherited property, probate, and estate transitions in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "For CPAs", url: "/for-cpas" },
      { name: "Learn More", url: "/for-cpas/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Working With CPAs</h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            How Real Property Planning supports CPAs and their clients when property decisions are part of the financial picture.
          </p>
        </div>
      </div>
    </section>

    {/* Opening prose */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-4">
            When a client inherits property, the questions that arrive on your desk are rarely simple. What is the home actually worth — not what Zillow says, but a defensible, condition-adjusted value that can support tax calculations and financial decisions? Should the property be sold quickly or prepared carefully? What are the realistic carrying costs if the family holds it? How does the timing of a sale interact with the client's broader tax situation?
          </p>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            These are exactly the situations where a trusted real estate professional — one who brings both brokerage expertise and certified appraisal methodology — becomes a meaningful part of your client's advisory team.
          </p>
        </div>
      </div>
    </section>

    {/* Why CPAs Involve RE */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">Why CPAs May Involve a Real Estate Professional</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {whyCPAsInvolveRE.map((card, i) => (
              <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{card.heading}</h3>
                <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* How RPP Helps */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">How Real Property Planning Helps</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {howHelpsBlocks.map((block, i) => (
              <div key={i} className="bg-secondary border border-border rounded-[18px] px-7 py-8">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{block.heading}</h3>
                <p className="text-muted-foreground leading-[1.75]">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <PageFAQ
      heading="Frequently Asked Questions"
      faqs={faqs}
    />

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">Discuss a Client Situation</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If you have a client navigating an inherited property, estate settlement, or trust-related real estate decision in Washington State, a brief conversation is usually the most efficient starting point.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            David works collaboratively with CPAs throughout the Puget Sound area — providing the honest, valuation-informed property guidance that helps your client's financial picture stay accurate and complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-7 py-4 h-auto rounded-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForCPAsLearnMore;
