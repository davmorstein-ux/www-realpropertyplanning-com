import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const whyPlannersInvolveRE = [
  {
    heading: "Sale Versus Hold Decisions",
    text: (
      <>
        When a client inherits property or holds real estate in trust, the sell-versus-hold question has real financial consequences — and it's rarely straightforward. The answer depends on the property's realistic market value in its actual condition, current market conditions in the specific neighborhood, carrying costs, and the client's broader financial situation. David helps financial planners and their clients think through this decision with honest, condition-adjusted market analysis — not an estimate built to win a listing.
      </>
    ),
  },
  {
    heading: "Value and Marketability Questions",
    text: (
      <>
        Condition, location, buyer expectations, and preparation needs all affect what a property will actually sell for and how quickly. For financial planning purposes, the difference between a realistic market value and an optimistic listing estimate can be significant. David's background as a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> brings analytical rigor to these questions — giving financial planners a more reliable foundation for retirement income projections, estate planning, and client decision-making.
      </>
    ),
  },
  {
    heading: "Downsizing and Senior Housing Transitions",
    text: (
      <>
        When a senior client's home sale is part of a larger housing transition — a move to assisted living, a downsizing, or a relocation closer to family — the real estate decisions don't happen in isolation. Timing the sale relative to the transition, understanding what preparation is worth doing, and coordinating with the care team and family all affect the financial outcome. David works patiently with seniors and their families throughout this process, with an approach that respects both the emotional weight of the transition and the financial realities involved.
      </>
    ),
  },
  {
    heading: "Estate and Trust Property Transitions",
    text: (
      <>
        Inherited homes and trust-owned properties often require coordination among <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">attorneys</Link>, <Link to="/trustees" className="text-accent hover:text-gold underline underline-offset-4">trustees</Link>, family members, and financial advisors — each with different information and different priorities. David serves as the real estate point of coordination, keeping all parties aligned and ensuring that property decisions support rather than complicate the broader financial plan.
      </>
    ),
  },
];

const howHelpsBlocks = [
  {
    heading: "Practical, Honest Real Estate Guidance",
    text: "David helps clients understand what the property is, what realistic factors affect its value, and what sale strategy makes the most sense for their specific situation. The guidance is always honest — not designed to win a listing or justify a number that looks good on paper but doesn't reflect market reality.",
  },
  {
    heading: "Valuation-Informed Perspective",
    text: (
      <>
        Over 20 years of combined experience as a licensed broker and a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> means David brings genuine analytical depth to property valuation questions. For financial planners who need a reliable picture of what a client's property is worth — for planning, for decision-making, or for advisor conversations — David's assessment provides a defensible, methodology-based foundation.
      </>
    ),
  },
  {
    heading: "Preparation Strategy That Makes Financial Sense",
    text: "Some properties benefit from cleanup or targeted repairs before listing; others are best sold as-is. David evaluates each situation through a return-on-investment lens — helping clients avoid spending estate or retirement funds on improvements that won't pay off, while identifying the targeted investments that do. For financial planners managing clients' liquidity carefully, this distinction matters.",
  },
  {
    heading: "Senior Transition Coordination",
    text: (
      <>
        Real Property Planning has established relationships with senior move managers, care coordinators, and placement specialists throughout the Puget Sound area — including <a href="https://hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</a>, a division of Hansen Bros. Moving &amp; Storage. When a client's home sale is part of a broader <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link>, David coordinates the real estate side with the care team so the financial planner doesn't have to manage that communication directly.
      </>
    ),
  },
  {
    heading: "Local Market Knowledge",
    text: (
      <>
        David serves clients throughout <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">King County, Snohomish County, Pierce County, and Kitsap County</Link> — with neighborhood-level market knowledge across the Puget Sound region that supports accurate financial planning and realistic sale projections.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How does Real Property Planning support financial planners whose clients face property decisions?",
    answer: "David handles the property side — honest valuation analysis, sale strategy guidance, preparation coordination, and full sale management — while keeping the financial planner informed throughout. The goal is to make sure your client's property decisions are grounded in accurate, professionally developed market information that integrates with the financial planning work you're already doing.",
  },
  {
    question: "Can David help when a senior client is transitioning to assisted living?",
    answer: (
      <>
        Yes — and this is one of the most common situations Real Property Planning works with. David coordinates the home sale with the senior's transition timeline, working at the family's pace and in alignment with the care team's plan. His affiliations with the <a href="https://www.aginglifecare.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a> and the <a href="https://www.naosa.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">National Association of Senior Advocates</a> reflect a commitment to senior transitions that goes beyond standard real estate practice.
      </>
    ),
  },
  {
    question: "How does valuation-informed pricing differ from a standard listing agent's CMA?",
    answer: "A standard CMA reflects a general price range based on nearby sales. David's valuation-informed analysis applies certified appraisal methodology — accounting for the property's specific condition, making documented adjustments for condition factors, and producing a market value picture that is more reliable for financial planning purposes than a typical listing agent's price opinion.",
  },
  {
    question: "Do you work with financial planners whose clients are outside the immediate Seattle area?",
    answer: (
      <>
        Yes — David serves clients throughout Western Washington and the broader Puget Sound region. For clients with property outside Washington State, <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">eXp Realty's national referral network</Link> can connect them with trusted brokers in most U.S. markets.
      </>
    ),
  },
];

const ForFinancialPlannersLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Real Property Planning Supports Financial Planners With Property Decisions | Washington State"
      description="Valuation insight, senior transition support, and coordinated property guidance for financial planners whose clients face housing decisions in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "For Financial Planners", url: "/for-financial-planners" },
      { name: "Learn More", url: "/for-financial-planners/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Working With Financial Planners</h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            How Real Property Planning supports financial planners and their clients when property decisions affect broader planning goals.
          </p>
        </div>
      </div>
    </section>

    {/* Opening prose */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-4">
            Real property is often one of the largest assets in a client's financial picture — and decisions about what to do with it can have meaningful consequences for retirement income, estate planning, and overall financial health. When a client inherits a home, faces a <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior housing transition</Link>, or needs to decide what to do with trust-owned property, the financial implications go well beyond what the real estate side alone can address.
          </p>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            Real Property Planning works alongside financial planners to provide the property-side clarity that helps clients make informed decisions — with honest valuation, practical sale guidance, and coordinated communication that keeps everyone working from the same accurate information.
          </p>
        </div>
      </div>
    </section>

    {/* Why Financial Planners Involve RE */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">Why Financial Planners May Involve a Real Estate Professional</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {whyPlannersInvolveRE.map((card, i) => (
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
            If you have a client navigating an inherited property, a senior housing transition, or a trust-related real estate decision in Washington State, a brief conversation is the most efficient starting point.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            David works collaboratively with financial planners throughout the Puget Sound area — providing the honest, coordinated property guidance that helps your client's real estate decisions support rather than complicate their broader financial picture.
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

export default ForFinancialPlannersLearnMore;
