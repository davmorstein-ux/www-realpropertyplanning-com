import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "Every engagement begins with a conversation about the property, the people involved, and the circumstances driving the decision. David listens to understand the full picture — legal authority, family dynamics, timeline pressures, and financial goals. Whether you are an executor managing your first estate, an attorney referring a client, or a family navigating a senior transition, this conversation establishes the foundation for everything that follows.",
    details: "There is no cost or obligation for this initial discussion. The goal is to determine whether Real Property Planning is the right fit and to outline a practical path forward.",
  },
  {
    number: "02",
    title: "Property Review and Valuation-Informed Pricing Discussion",
    text: "David visits the property to assess its condition, identify features that affect value, and evaluate what the market is likely to see. Unlike a standard comparative market analysis, David's assessment draws on over 20 years of certified appraisal experience — giving you a realistic pricing perspective that accounts for deferred maintenance, outdated systems, unusual layouts, and condition-related factors that automated tools consistently miss.",
    details: "This step often includes a candid conversation about what the property is worth in its current condition versus what it could be worth with targeted preparation — helping you make informed decisions about where to invest time and money.",
  },
  {
    number: "03",
    title: "Coordination of Cleanout, Repairs, and Vendor Management",
    text: "Many estate and inherited homes need significant work before they are ready for the market. Personal belongings need to be sorted and removed. Deferred repairs need to be addressed. Landscaping, cleaning, and sometimes light staging are needed to present the property effectively. David coordinates this entire process — scheduling vendors, managing timelines, and overseeing the work so you do not have to be on-site or manage contractors yourself.",
    details: "David works with trusted local professionals including move managers, estate sale companies, cleanout crews, handymen, and staging teams. He evaluates which improvements offer meaningful return on investment and advises against spending money on work that will not meaningfully affect the sale price.",
  },
  {
    number: "04",
    title: "Listing Preparation and Marketing Strategy",
    text: "Once the property is ready, David develops a marketing plan tailored to the home's specific strengths, target buyer profile, and local market conditions. This includes professional photography, compelling listing descriptions, strategic pricing, and targeted exposure through MLS, online platforms, and agent networks.",
    details: "The marketing approach varies based on property type and buyer pool. A waterfront home on Bainbridge Island requires a different strategy than a mid-century rambler in Everett or a condominium in downtown Bellevue. David adjusts the approach based on what will generate the strongest buyer interest for each specific property.",
  },
  {
    number: "05",
    title: "Offer Review, Negotiation, and Contract Management",
    text: "When offers arrive, David reviews each one thoroughly — evaluating not just the price, but the terms, contingencies, financing strength, and closing timeline. He presents the options clearly, explains the tradeoffs, and negotiates on your behalf to protect the estate's interests. In multi-offer situations, David helps you navigate competing bids with a strategy focused on certainty of closing and net proceeds.",
    details: "For probate and trust transactions, David pays particular attention to terms that affect fiduciary obligations — ensuring that the transaction structure supports the legal requirements of the sale.",
  },
  {
    number: "06",
    title: "Escrow and Closing Coordination",
    text: "From accepted offer to closing day, David manages the transaction details — inspection responses, appraisal coordination, title issues, repair negotiations, and communication with all parties including the buyer's agent, escrow officer, and your attorney if applicable. He tracks deadlines, anticipates problems, and keeps the transaction moving toward a successful close.",
    details: "David provides regular status updates so you always know where things stand. If complications arise — and in estate transactions, they sometimes do — he addresses them promptly and communicates solutions rather than just problems.",
  },
  {
    number: "07",
    title: "Post-Sale Support",
    text: "After closing, David remains available for questions about final documentation, tax-related inquiries you may want to discuss with your CPA, or any loose ends related to the property. For clients managing ongoing estate matters or families with additional properties, David provides continuity and a single point of contact for future real estate needs.",
    details: "Many clients return for help with additional properties, and many attorneys continue to refer clients based on the experience of working together on a previous matter.",
  },
];

import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
const faqs = [
  {
    question: "What is the typical process for selling an inherited or probate property?",
    answer: "The process generally follows seven steps: initial consultation, property evaluation and pricing discussion, preparation coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support. David Stein guides clients through each step with clear communication and practical next-step guidance.",
  },
  {
    question: "How long does the entire process take from start to closing?",
    answer: "Timelines vary depending on property condition, legal authority, preparation needs, and market conditions. Simple situations may take 2-3 months; more complex matters with significant cleanup, repairs, or multi-party coordination may take longer. David helps set realistic expectations early and adjusts the plan as circumstances evolve.",
  },
  {
    question: "Do I need to be local to work with David Stein?",
    answer: "No. Many clients — especially executors and trustees — are managing property from out of state. David provides hands-on local coordination and keeps clients informed through regular updates so they can participate in decisions without needing to be physically present.",
  },
  {
    question: "What happens if the property needs major repairs?",
    answer: "David evaluates repair decisions with a practical, cost-benefit perspective. Some improvements meaningfully increase sale price; others are not worth the cost or delay. He coordinates vendors, obtains estimates, and helps you decide which investments make sense based on the property's market position and your timeline.",
  },
  {
    question: "How is this different from working with a regular real estate agent?",
    answer: "Most agents focus on listing and selling. David's process starts earlier — with property assessment, valuation analysis, preparation coordination, and family communication — and continues through closing and beyond. His certified appraisal background also provides pricing depth that standard agents cannot offer.",
  },
];

const HowTheProcessWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How Estate Property Sales Work | Step-by-Step Guide"
        description="Learn the process for selling inherited or estate real estate, from property evaluation to listing, marketing, and closing."
        jsonLd={articleSchema({
          headline: "How the Process Works — Estate Property Sales",
          description: "A seven-step process for selling estate, probate, and inherited property in Western Washington.",
          url: "/how-the-process-works",
          datePublished: "2025-01-15",
          dateModified: "2026-03-16",
          about: ["Estate sale process", "Probate property sales", "Real estate consultation", "Property preparation", "Offer negotiation", "Closing coordination"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "How the Process Works", url: "/how-the-process-works" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-[96px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              A Clear and Organized Approach
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              How the Process Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Estate property sales can feel overwhelming — especially when you are managing legal requirements, family expectations, and a property that may need significant work. David Stein follows a clear, seven-step process designed to bring order to complexity and keep everyone informed at every stage.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              Each engagement is structured around practical milestones: assess the property, align on strategy, prepare the home, price it accurately, market it effectively, negotiate with confidence, and close with certainty. Post-sale support ensures nothing falls through the cracks.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-medium px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
                    <p className="text-muted-foreground/80 text-sm leading-relaxed italic">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Process Different */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What Makes This Process Different From a Standard Home Sale
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In a conventional home sale, the homeowner decides to sell, a listing agent provides a price opinion, the home goes on the market, and a transaction closes in 30 to 45 days. The process is relatively predictable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estate, probate, and senior transition sales are fundamentally different. The decision-maker may not live locally. Legal authority may not yet be established. The property may have been vacant for months and need significant work before it can be shown. Family members may disagree about timing, pricing, or whether to sell at all. And the emotional weight of the situation — grief, guilt, uncertainty — affects every conversation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David's process is designed for these realities. He starts earlier than most agents — often before the property is ready to list — because early planning prevents the most common and costly mistakes. He coordinates more broadly, managing relationships with attorneys, family members, vendors, and care professionals. And he communicates more deliberately, because in these situations, silence creates anxiety and uncertainty.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every situation is different. Some clients need immediate sale guidance. Others need time, planning, family coordination, or valuation-related clarity before taking the next step. David adapts this process to fit your circumstances — whether that means a compressed timeline for a court-ordered sale or a longer runway that allows for thorough preparation and family decision-making.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Process FAQs" />

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
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Schedule a Consultation
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

export default HowTheProcessWorks;
