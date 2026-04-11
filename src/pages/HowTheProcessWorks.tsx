import Header from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconTheProcess from "@/assets/icons/icon-the-process.png";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";


const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "Every engagement begins with a conversation about the property, the people involved, and the circumstances driving the decision. Real Property Planning listens to understand the full picture — legal authority, family dynamics, timeline pressures, and financial goals. Whether you are an executor managing your first estate, an attorney referring a client, or a family navigating a senior transition, this conversation establishes the foundation for everything that follows.",
    details: "There is no cost or obligation for this initial discussion. The goal is to determine whether Real Property Planning is the right fit and to outline a practical path forward.",
  },
  {
    number: "02",
    title: "Property Review and Valuation-Informed Pricing Discussion",
    text: "Real Property Planning visits the property to assess its condition, identify features that affect value, and evaluate what the market is likely to see. Unlike a standard comparative market analysis, the assessment draws on certified appraisal experience — giving you a realistic pricing perspective that accounts for deferred maintenance, outdated systems, unusual layouts, and condition-related factors that automated tools consistently miss.",
    details: "This step often includes a candid conversation about what the property is worth in its current condition versus what it could be worth with targeted preparation — helping you make informed decisions about where to invest time and money.",
  },
  {
    number: "03",
    title: "Coordination of Cleanout, Repairs, and Vendor Management",
    text: "Many estate and inherited homes need significant work before they are ready for the market. Personal belongings need to be sorted and removed. Deferred repairs need to be addressed. Landscaping, cleaning, and sometimes light staging are needed to present the property effectively. Real Property Planning coordinates this entire process — scheduling vendors, managing timelines, and overseeing the work so you do not have to be on-site or manage contractors yourself.",
    details: "Real Property Planning works with trusted local professionals including move managers, estate sale companies, cleanout crews, handymen, and staging teams. The team evaluates which improvements offer meaningful return on investment and advises against spending money on work that will not meaningfully affect the sale price.",
  },
  {
    number: "04",
    title: "Listing Preparation and Marketing Strategy",
    text: "Once the property is ready, Real Property Planning develops a marketing plan tailored to the home's specific strengths, target buyer profile, and local market conditions. This includes professional photography, compelling listing descriptions, strategic pricing, and targeted exposure through MLS, online platforms, and agent networks.",
    details: "The marketing approach varies based on property type and buyer pool. A waterfront home on Bainbridge Island requires a different strategy than a mid-century rambler in Everett or a condominium in downtown Bellevue. The approach adjusts based on what will generate the strongest buyer interest for each specific property.",
  },
  {
    number: "05",
    title: "Offer Review, Negotiation, and Contract Management",
    text: "When offers arrive, Real Property Planning reviews each one thoroughly — evaluating not just the price, but the terms, contingencies, financing strength, and closing timeline. The options are presented clearly, explains the tradeoffs, and negotiates on your behalf to protect the estate's interests. In multi-offer situations, Real Property Planning helps you navigate competing bids with a strategy focused on certainty of closing and net proceeds.",
    details: "For probate and trust transactions, Real Property Planning pays particular attention to terms that affect fiduciary obligations — ensuring that the transaction structure supports the legal requirements of the sale.",
  },
  {
    number: "06",
    title: "Escrow and Closing Coordination",
    text: "From accepted offer to closing day, Real Property Planning manages the transaction details — inspection responses, appraisal coordination, title issues, repair negotiations, and communication with all parties including the buyer's agent, escrow officer, and your attorney if applicable. The team tracks deadlines, anticipates problems, and keeps the transaction moving toward a successful close.",
    details: "Real Property Planning provides regular status updates so you always know where things stand. If complications arise — and in estate transactions, they sometimes do — they are addressed promptly and communicates solutions rather than just problems.",
  },
  {
    number: "07",
    title: "Post-Sale Support",
    text: "After closing, Real Property Planning remains available for questions about final documentation, tax-related inquiries you may want to discuss with your CPA, or any loose ends related to the property. For clients managing ongoing estate matters or families with additional properties, Real Property Planning provides continuity and a single point of contact for future real estate needs.",
    details: "Many clients return for help with additional properties, and many attorneys continue to refer clients based on the experience of working together on a previous matter.",
  },
];

const faqs = [
  {
    question: "What is the typical process for selling an inherited or probate property?",
    answer: "The process generally follows seven steps: initial consultation, property evaluation and pricing discussion, preparation coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support. Real Property Planning guides clients through each step with clear communication and practical next-step guidance.",
  },
  {
    question: "How long does the entire process take from start to closing?",
    answer: "Timelines vary depending on property condition, legal authority, preparation needs, and market conditions. Simple situations may take 2-3 months; more complex matters with significant cleanup, repairs, or multi-party coordination may take longer. Real Property Planning helps set realistic expectations early and adjusts the plan as circumstances evolve.",
  },
  {
    question: "Do I need to be local to work with Real Property Planning?",
    answer: "No. Many clients — especially executors and trustees — are managing property from out of state. Real Property Planning provides hands-on local coordination and keeps clients informed through regular updates so they can participate in decisions without needing to be physically present.",
  },
  {
    question: "What happens if the property needs major repairs?",
    answer: "Real Property Planning evaluates repair decisions with a practical, cost-benefit perspective. Some improvements meaningfully increase sale price; others are not worth the cost or delay. The team coordinates vendors, obtains estimates, and helps you decide which investments make sense based on the property's market position and your timeline.",
  },
  {
    question: "How is this different from working with a regular real estate agent?",
    answer: "Most agents focus on listing and selling. Real Property Planning's process starts earlier — with property assessment, valuation analysis, preparation coordination, and family communication — and continues through closing and beyond. The certified appraisal background also provides pricing depth that standard agents cannot offer.",
  },
];

const HowTheProcessWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How Estate & Probate Property Sales Work — 7-Step Process | Real Property Planning"
        description="Real Property Planning's step-by-step process for selling estate, probate, and inherited property in Washington State — from initial consultation through closing and post-sale support."
        jsonLd={articleSchema({
          headline: "How the Process Works — Estate Property Sales",
          description: "A seven-step process for selling estate, probate, and inherited property in Washington State.",
          url: "/how-the-process-works",
          datePublished: "2025-01-15",
          dateModified: "2026-03-16",
          about: ["Estate sale process", "Probate property sales", "Real estate consultation", "Property preparation", "Offer negotiation", "Closing coordination"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "How the Process Works", url: "/how-the-process-works" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconTheProcess} alt="" aria-hidden="true" className="mx-auto w-60 h-auto object-contain mb-8"  loading="lazy"/>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              A Clear and Organized Approach
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              How the Process Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-[30px]">
              Real Property Planning follows a clear, seven-step process — from consultation through closing — designed for the unique complexity of estate, probate, and senior transition sales.
            </p>
            <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light font-medium px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question="How do estate and probate property sales work in Washington State?"
        answer="Real Property Planning follows a clear seven-step process: initial consultation, property evaluation and valuation-informed pricing, preparation and vendor coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support. Each step is designed for the unique complexity of estate, probate, and senior transition sales — where legal requirements, family dynamics, and property condition all shape the timeline."
        supportSteps={[
          { label: "Evaluate", desc: "Property assessment and valuation-informed pricing discussion" },
          { label: "Prepare", desc: "Cleanout, repairs, and vendor coordination managed for you" },
          { label: "Sell", desc: "Marketing, negotiation, escrow, and closing — handled end to end" },
        ]}
      />

      <TrustStrip />

      {/* Seven Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <div className="grid gap-5 lg:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-muted-foreground/30 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75] mb-3">{step.text}</p>
                    <p className="text-muted-foreground/80 text-[15px] leading-relaxed italic">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Process Different — Accordion */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How Is Selling Estate Property Different From a Standard Home Sale?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Estate, probate, and senior transition sales are fundamentally different from conventional transactions. Here's why:
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { value: "complexity", q: "Why are estate sales more complex?", a: "The decision-maker may not live locally. Legal authority may not yet be established. The property may have been vacant for months. Family members may disagree about timing, pricing, or whether to sell at all." },
                { value: "early", q: "Why does David start earlier than most agents?", a: "Early planning prevents the most common and costly mistakes. David often begins before the property is ready to list — assessing condition, coordinating with attorneys, and helping families align on strategy." },
                { value: "adapt", q: "How does the process adapt to each situation?", a: "Some clients need immediate sale guidance. Others need time, planning, family coordination, or valuation-related clarity. David adapts — whether that means a compressed timeline for a court-ordered sale or a longer runway for family decision-making." },
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value} className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors">
                  <AccordionTrigger className="text-left font-serif text-base md:text-lg font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Ready to Get Started?"
        body="Whether you are an executor, attorney, trustee, or family member — David can walk you through the process and help you plan next steps."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      <PageFAQ faqs={faqs} heading="Process FAQs" />

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
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">All FAQs</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/how-the-process-works" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Want to talk through your situation and next steps?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Whether you are an executor, trustee, attorney, or family member — David is available for a no-obligation conversation about your property and circumstances.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
                  Schedule a Consultation
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
};

export default HowTheProcessWorks;
