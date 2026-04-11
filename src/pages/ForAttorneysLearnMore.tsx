import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import RealClientSituations from "@/components/RealClientSituations";
import PageFAQ from "@/components/PageFAQ";
import StatewideSupport from "@/components/StatewideSupport";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";

const attorneyReviews = [
  { text: "Real Property Planning guided our family through a very difficult time with professionalism and genuine compassion.", highlights: ["professionalism and genuine compassion"], attribution: "Estate Attorney, Seattle", contextTag: "Probate · Executor" },
  { text: "The dual background in brokerage and appraisal gave us confidence that the property was priced correctly.", highlights: ["priced correctly"], attribution: "Professional Referral", contextTag: "Valuation Strategy" },
  { text: "We didn't know where to start. The team made the entire process manageable.", highlights: ["entire process manageable"], attribution: "Executor, Snohomish County", contextTag: "Out-of-State Coordination" },
];

const attorneyCaseStudies = [
  { title: "Out-of-State Executor With a Full House", label: "Out-of-State Executor", situation: "An executor living in California was named personal representative for her father's estate in Snohomish County.", challenge: "No local contacts, property hadn't been updated in 30 years.", howHelped: "Coordinated cleanout, managed repairs, handled the entire listing and sale remotely.", outcome: "Home sold within three weeks at a price exceeding expectations." },
  { title: "Siblings Who Disagreed on Pricing", label: "Family Coordination", situation: "Three adult children inherited their mother's home in King County.", challenge: "One wanted to sell quickly, one believed the home was worth far more.", howHelped: "Presented detailed assessment and comparable sales analysis grounded in appraisal methodology.", outcome: "Family agreed on a data-driven price with minimal conflict." },
  { title: "Senior Transition With Family Coordination", label: "Senior Transition", situation: "An elder law attorney's client needed to sell the family home as part of a move to assisted living.", challenge: "Emotional attachment and out-of-state children needing regular communication.", howHelped: "Worked with the family to set a realistic timeline, coordinated preparation and staging.", outcome: "Home sold at a fair price with a smooth, well-coordinated transition." },
  { title: "Providing Clarity on Pricing", label: "Valuation Strategy", situation: "An estate planning attorney's client had received conflicting price opinions from two agents.", challenge: "Neither provided detailed analysis to support their recommendation.", howHelped: "Conducted a thorough property review and presented a valuation-informed pricing strategy with clear comparable data.", outcome: "The executor chose a well-supported list price and the home sold close to asking." },
];

const attorneyFaqs = [
  { question: "How does Real Property Planning support attorneys during probate property sales?", answer: "We handle the real estate side — property assessment, preparation, pricing, marketing, and sale — while coordinating directly with the attorney and personal representative." },
  { question: "What is the difference between a CMA and a formal appraisal?", answer: "A CMA is a broker's opinion of value. A formal appraisal is a certified, independent valuation. Real Property Planning provides market analysis informed by appraisal-level discipline." },
  { question: "Can you help with valuation disputes among heirs?", answer: "Yes. We present data-driven pricing supported by comparable sales analysis and market context to help resolve disagreements." },
  { question: "Do you work with attorneys outside of Western Washington?", answer: "Real Property Planning serves clients throughout Washington State. For properties outside Washington, we can connect attorneys with trusted brokers through our referral network." },
];

const ForAttorneysLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Attorney Guide — Real Estate Support for Legal Professionals | Real Property Planning"
      description="In-depth real estate support for attorneys handling probate, estate, and family law property matters in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "For Attorneys", url: "/for-attorneys" },
      { name: "Learn More", url: "/for-attorneys/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Working With Attorneys</h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            How Real Property Planning supports attorneys with estate, probate, and family law property matters — case studies, reviews, and FAQs.
          </p>
        </div>
      </div>
    </section>

    <DirectAnswerBlock
      question="How does Real Property Planning support attorneys with estate and probate real estate?"
      answer="Real Property Planning handles the real estate side — property assessment, valuation-informed pricing, preparation coordination, and sale management — so attorneys and their clients can focus on legal and financial priorities."
      supportSteps={[
        { label: "You Refer", desc: "Send us the client situation — probate, estate, trust, or family law property." },
        { label: "We Handle It", desc: "Property assessment, preparation, pricing, marketing, and sale — managed end to end." },
        { label: "You Stay Informed", desc: "Regular updates keep you and your client in the loop through closing." },
      ]}
    />

    <MidPageCTA heading="Have a Client Who Needs Property Guidance?" body="A quick call is usually the fastest way to determine how we can support the situation." buttonText="Discuss a Client Situation" />

    <section className="py-10 lg:py-12 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ProofCallout quote="Real Property Planning guided our family through a very difficult time with professionalism and genuine compassion." attribution="Estate Attorney, Seattle" context="Probate property transition" variant="accent" />
        </div>
      </div>
    </section>

    <ClientReviewsSection reviews={attorneyReviews} heading="Client Reviews" subheading="Feedback from attorneys, executors, and families." background="bg-background" />
    <RealClientSituations studies={attorneyCaseStudies} heading="Real Client Situations" subheading="Examples of how Real Property Planning has supported attorneys." background="bg-secondary" showCTA />
    <PageFAQ faqs={attorneyFaqs} heading="Attorney FAQs" />
    <StatewideSupport background="bg-cream" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">A Reliable Resource for Your Practice</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">When you have a client situation involving property, Real Property Planning can handle the real estate side.</p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Discuss a Client Situation
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

export default ForAttorneysLearnMore;
