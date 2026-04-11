import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RealClientSituations from "@/components/RealClientSituations";
import PageTestimonials from "@/components/PageTestimonials";
import MidPageCTA from "@/components/MidPageCTA";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";

const executorTestimonials = [
  { text: "Real Property Planning brought clarity, professionalism, and calm guidance during a very difficult property transition.", attribution: "Margaret T.", context: "Executor · Estate property in King County", tag: "Estate Administration" },
  { text: "I was completely overwhelmed as a first-time executor. The team walked me through every step and made the entire process feel manageable.", attribution: "Robert K.", context: "Personal representative · Snohomish County", tag: "First-Time Executor" },
  { text: "We received honest, straightforward pricing when other agents were telling us what we wanted to hear.", attribution: "Susan M.", context: "Executor · Probate property sale", tag: "Honest Pricing" },
];

const executorCaseStudies = [
  { title: "Out-of-State Executor With a Full House", label: "Out-of-State", situation: "An executor in California was named personal representative for her father's estate in Snohomish County.", challenge: "No local contacts, property hadn't been updated in 30 years.", howHelped: "Real Property Planning assessed the property, coordinated cleanout, managed repairs, and handled the entire listing and sale — providing regular updates.", outcome: "The home sold within three weeks at a price exceeding expectations." },
  { title: "Siblings Who Disagreed on Pricing", label: "Family Coordination", situation: "Three adult children inherited their mother's home in King County with different opinions.", challenge: "Conflicting opinions about value and timeline created tension.", howHelped: "A detailed property assessment and comparable sales analysis grounded in appraisal methodology helped the family align.", outcome: "The family agreed on a data-driven price and the home sold with minimal conflict." },
  { title: "Estate Property With Deferred Maintenance", label: "Valuation Strategy", situation: "A trustee needed to sell a Pierce County home with significant deferred maintenance.", challenge: "Two previous agents had declined the listing.", howHelped: "Each issue was evaluated, cost impact on value was estimated, and a targeted preparation strategy was recommended.", outcome: "The property was priced accurately, attracted multiple offers, and closed smoothly." },
  { title: "Coordinating a Probate Sale with Multiple Heirs", label: "Family Coordination", situation: "Four siblings inherited a family home in Kitsap County with none living nearby.", challenge: "Different views on timing and confusion about value.", howHelped: "A valuation-informed pricing assessment was provided and a group call walked through the data.", outcome: "Agreement reached within two weeks. The home sold at a fair price." },
  { title: "Helping a Family Navigate a Senior Transition", label: "Senior Transition", situation: "A homeowner in her early 80s was moving to assisted living.", challenge: "40 years of memories made the decision emotionally difficult.", howHelped: "A phased approach was recommended: gentle cleanout, targeted improvements, and listing aligned with the transition.", outcome: "The home sold within a month and the family described the experience as respectful." },
  { title: "Providing Clarity on Pricing", label: "Valuation Strategy", situation: "An executor had received two conflicting price opinions from other agents.", challenge: "Neither opinion was supported by detailed analysis.", howHelped: "A valuation-informed pricing strategy with clear comparable data was provided.", outcome: "The home sold close to asking price." },
];

const commonSituations = [
  "A parent or loved one has passed away, and you have been named executor",
  "You are managing an estate from out of state and need local help",
  "The home has years of deferred maintenance",
  "The house is full of personal belongings",
  "Multiple family members have different opinions about the property",
  "You need to satisfy a fiduciary obligation but have never sold a home before",
  "The estate attorney needs market data or a property assessment",
  "You want honest pricing — not an inflated number designed to win a listing",
];

const howWeHelp = [
  "Evaluate the property's true condition and realistic market value",
  "Advise on whether to invest in repairs or sell as-is",
  "Coordinate cleanout, preparation, and vendor management",
  "Price the home using valuation-informed analysis",
  "Manage the listing, marketing, showings, and negotiations",
  "Communicate clearly with you, the attorney, and other stakeholders",
];

const faqs = [
  { question: "What is the first thing I should do as executor when there is real estate involved?", answer: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and likely market value." },
  { question: "I live out of state — can you handle the property locally?", answer: "Absolutely. Real Property Planning provides hands-on local coordination — property access, vendor management, preparation, and sale oversight — keeping you informed through regular updates." },
  { question: "Should I invest in repairs before selling?", answer: "It depends on the property and the likely return on investment. We evaluate repair decisions with a practical, market-informed perspective." },
  { question: "How is selling estate property different from a normal home sale?", answer: "Estate sales often involve legal timelines, multiple decision-makers, deferred maintenance, personal property cleanout, and emotional complexity." },
  { question: "What if I am a first-time executor?", answer: "That is completely normal. Real Property Planning walks you through the real estate side step by step and handles the coordination." },
  { question: "How do you handle significant deferred maintenance?", answer: "We assess the condition honestly and help you understand which issues affect value, which need disclosure, and which are worth addressing before listing." },
];

const ExecutorsLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Executor Guide — Selling Estate Property in Washington | Real Property Planning"
      description="In-depth guidance for executors selling inherited homes and estate property throughout Washington State. Case studies, FAQs, and process overview."
    />
    <BreadcrumbSchema items={[
      { name: "Executors", url: "/executors" },
      { name: "Learn More", url: "/executors/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            What Executors Need to Know
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Detailed guidance on selling estate property — situations, process, case studies, and frequently asked questions.
          </p>
        </div>
      </div>
    </section>

    <DirectAnswerBlock
      question="What should an executor do when there is real estate in the estate?"
      answer="Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and market value. Real Property Planning works with executors throughout Washington State to handle the full sale process — from property evaluation through closing."
      supportSteps={[
        { label: "We Talk", desc: "We listen to your situation and answer your questions." },
        { label: "We Assess", desc: "We visit the property and give you an honest picture." },
        { label: "We Handle It", desc: "Cleanout, prep, pricing, marketing, and closing — managed for you." },
      ]}
    />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Common Situations</h2>
          <ul className="space-y-4">
            {commonSituations.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">How Real Property Planning Helps Executors</h2>
          <ul className="space-y-4">
            {howWeHelp.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <MidPageCTA heading="Not Sure Where to Start?" body="A short conversation can help you understand your options." buttonText="Schedule a Conversation" />

    <RealClientSituations studies={executorCaseStudies} background="bg-background" showCTA />
    <PageTestimonials testimonials={executorTestimonials} heading="What Executors Are Saying" />
    <PageFAQ faqs={faqs} heading="Executor FAQs" />

    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Guides</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Families</Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/executors" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">Ready to Talk?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">It starts with a simple conversation.</p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Schedule a Conversation
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

export default ExecutorsLearnMore;
