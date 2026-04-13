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

import warning3d from "@/assets/property-warning-guidance-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconProbateSales from "@/assets/icons/probate-property-sales-icon-washington.webp";
import ClientReviewsSection from "@/components/ClientReviewsSection";
import RealClientSituations from "@/components/RealClientSituations";

const probateReviews = [
  {
    text: "The dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable.",
    highlights: ["priced correctly", "complicated situation feel manageable"],
    attribution: "Family Member, King County",
    contextTag: "Probate · Valuation Strategy",
  },
  {
    text: "Real Property Planning guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful.",
    highlights: ["professionalism and genuine compassion", "valuation perspective"],
    attribution: "Estate Attorney, Seattle",
    contextTag: "Probate · Executor",
  },
  {
    text: "We appreciated the patience, thoughtful communication, and realistic guidance throughout the sale of our family property.",
    highlights: ["patience, thoughtful communication", "realistic guidance"],
    attribution: "Family Review",
    contextTag: "Inherited Property",
  },
];

const probateCaseStudies = [
  {
    title: "Out-of-State Executor With a Full House",
    label: "Out-of-State Coordination",
    situation: "An executor living in California was named personal representative for her father's estate in Snohomish County. The home had not been updated in 30 years and was filled with decades of belongings.",
    challenge: "No local contacts, no idea where to start, and no ability to travel frequently to manage the process.",
    howHelped: "Real Property Planning assessed the property, coordinated a professional cleanout team, managed minor repairs and landscaping, and handled the entire listing and sale process — providing regular photo updates so she never had to fly out.",
    outcome: "The home sold within three weeks of listing at a price that exceeded the executor's expectations.",
  },
  {
    title: "Estate Property With Significant Deferred Maintenance",
    label: "Valuation Strategy",
    situation: "A trustee needed to sell a Pierce County home that had a failing roof, outdated electrical, and years of deferred maintenance.",
    challenge: "Two previous agents had declined the listing because of the property's condition. The trustee needed to fulfill fiduciary obligations.",
    howHelped: "Real Property Planning evaluated each issue, estimated the cost impact on market value, and recommended a targeted preparation strategy — addressing safety concerns while advising against costly renovations that would not deliver meaningful return.",
    outcome: "The property was priced accurately for its condition, attracted multiple offers, and closed smoothly with documented market support.",
  },
  {
    title: "Coordinating a Probate Sale with Multiple Heirs",
    label: "Family Coordination",
    situation: "Four adult siblings inherited a family home in Kitsap County after their father passed. All four had equal ownership, and none lived near the property.",
    challenge: "The siblings had different views on timing — one wanted to hold, two wanted to sell quickly, and one was unsure. Confusion about the home's value made it harder to reach agreement.",
    howHelped: "Real Property Planning provided a clear, valuation-informed pricing assessment so everyone was working from the same numbers. He walked the family through market data, explained the cost of holding versus selling, and coordinated the preparation and sale with regular updates to all four siblings.",
    outcome: "The family reached agreement within two weeks. The home sold at a price everyone felt was fair, and the process was far less stressful than expected.",
  },
  {
    title: "Helping a Family Navigate a Senior Transition and Home Sale",
    label: "Senior Transition",
    situation: "A longtime homeowner in her early 80s was moving to assisted living. Her two adult children were helping coordinate the transition and sale of the family home in King County.",
    challenge: "The home held 40 years of memories. The family wasn't sure how to prepare the property, when to list, or how to manage the timeline alongside the move.",
    howHelped: "Real Property Planning recommended a phased approach: start with a gentle cleanout, address targeted improvements, and list at a time aligned with the transition. He coordinated vendors and kept everyone informed throughout.",
    outcome: "The home sold within a month of listing. The family described the experience as respectful and well-paced.",
  },
  {
    title: "Providing Clarity on Pricing an Inherited Property",
    label: "Valuation Strategy",
    situation: "An executor inherited a home in Snohomish County and had received two very different price opinions from other agents.",
    challenge: "One agent suggested listing high to 'test the market.' The other recommended a much lower price to sell fast. Neither was supported by detailed analysis.",
    howHelped: "Real Property Planning conducted a thorough property review and provided a valuation-informed pricing strategy — walking the executor through comparable sales, condition adjustments, and current market trends.",
    outcome: "The executor chose a well-supported list price. The home received strong interest and sold close to asking.",
  },
];

const probateVsInherited = [
  {
    label: "Probate Property",
    description: "Property being administered through court-supervised probate. Legal authority (letters testamentary or letters of administration) is typically required before a sale can proceed. Timelines, court requirements, and fiduciary duties all affect the process.",
  },
  {
    label: "Inherited Property (Non-Probate)",
    description: "Property that passes outside of probate — through a trust, joint tenancy, or beneficiary designation. These situations may have fewer legal hurdles but still involve condition concerns, family coordination, and pricing decisions.",
  },
];

const whatMakesDifferent = [
  "Legal authority and court requirements may dictate when and how a sale occurs",
  "Multiple decision-makers — executors, co-heirs, attorneys, trustees — must coordinate",
  "Properties often have years of deferred maintenance, clutter, or vacancy",
  "Pricing must account for condition, legal timelines, and realistic market expectations",
  "Emotional complexity can affect family communication and decision-making",
  "Preparation decisions (as-is vs. repair) have a direct impact on sale outcome",
];

const timingConsiderations = [
  {
    title: "Before Legal Authority Is Granted",
    text: "Real Property Planning can assess the property, discuss likely value, and help plan next steps — so you're ready to act as soon as authority is in place.",
  },
  {
    title: "During Active Probate",
    text: "Coordinate preparation, cleanout, pricing strategy, and listing timeline in alignment with legal proceedings and court requirements.",
  },
  {
    title: "Post-Probate or Trust Distribution",
    text: "Once authority is clear, David manages the full sale process — preparation, marketing, negotiation, and closing.",
  },
];

const faqs = [
  {
    question: "How long does it take to sell a probate property in Washington?",
    answer: "Timelines depend on legal authority, property condition, preparation needs, and market conditions. Some properties list within weeks of authority being granted; others need months of preparation. Real Property Planning helps create a realistic timeline based on your specific situation.",
  },
  {
    question: "Can an estate property be sold as-is?",
    answer: "Yes. Many probate and estate properties sell as-is, especially when time or budget constraints make preparation impractical. Real Property Planning evaluates whether an as-is sale or targeted improvements will produce the best overall result for the estate.",
  },
  {
    question: "What costs are involved in selling a probate property?",
    answer: "Common costs include cleanout, repairs, staging, real estate commissions, closing costs, and title-related expenses. Real Property Planning helps executors understand likely costs upfront so there are no surprises.",
  },
  {
    question: "Does the executor need court approval to sell in Washington?",
    answer: "It depends on the estate structure and the authority granted by the court or will. In many cases, a personal representative can sell without additional court confirmation. Legal questions should always be directed to the estate attorney.",
  },
  {
    question: "How is pricing different for probate property?",
    answer: "Estate properties often have condition issues that standard market comparisons don't account for. The appraisal background at Real Property Planning allows for evaluating the property more accurately — accounting for deferred maintenance, functional obsolescence, and realistic buyer expectations.",
  },
];

const jsonLd = articleSchema({
  headline: "Probate Property Sales & Estate Real Estate",
  description: "Experienced guidance for probate real estate sales, inherited property, and estate-related home transactions throughout Washington State.",
  url: "/probate-estate-sales",
  datePublished: "2025-01-15",
  dateModified: "2026-03-15",
  about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
});

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Home Sales in Washington State | Real Property Planning"
        description="Selling a home through probate in Washington State? We guide families and estates through the process with expertise, patience, and clear next steps. Licensed Broker & Certified Appraiser."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconProbateSales} alt="" aria-hidden="true" className="mx-auto w-60 h-auto object-contain mb-8"  loading="lazy"/>
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate & Estate Property Sales
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Probate Real Estate Sales in Washington State
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              When a home is part of a probate case, nothing about the sale follows the normal playbook. Court authority may need to be granted before the property can be listed. The house itself may have been vacant for months, with deferred maintenance that standard market comparisons cannot account for. And the executor, attorney, and family members all need to stay informed without stepping on each other's timelines.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              Real Property Planning brings valuation-informed real estate guidance to these situations — giving executors defensible pricing, attorneys a reliable point of coordination, and families the confidence that the property is being handled with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Probate vs Inherited */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Probate Property vs. Inherited Property — What's the Difference?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Not all inherited property goes through probate. Understanding the distinction helps determine the right approach:
            </p>
            <div className="space-y-6">
              {probateVsInherited.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.label}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes These Sales Different */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Makes Estate Property Sales Different
            </h2>
            <ul className="space-y-4">
              {whatMakesDifferent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timing and Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Timing and Coordination in Probate Sales
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Real Property Planning works with clients at every stage of the process — whether legal authority has been granted or not:
            </p>
            <div className="space-y-5">
              {timingConsiderations.map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Learn more about the complete <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">sale process from consultation to closing</Link>, or see why <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">accurate pricing is critical</Link> in estate situations.
            </p>
          </div>
        </div>
      </section>
      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Probate or Estate Property to Discuss?"
        body="A brief conversation can help you understand your options and decide on a practical next step."
        buttonText="Schedule a Conversation"
        variant="dark"
      />

      {/* Understanding the Executor's Role in Property Sales */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              The Real Estate Side of Estate Administration
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Selling estate property is rarely as simple as putting a sign in the yard. These homes often sit vacant for months while legal authority is established, insurance and utility issues need to be managed, and the property's condition may deteriorate. Meanwhile, carrying costs — taxes, insurance, maintenance, and HOA fees — continue to accumulate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Real Property Planning understands these pressures from working through them with hundreds of clients. We help executors, attorneys, and families develop a timeline that accounts for legal proceedings, property preparation, and market conditions — so the sale happens at the right time, not just the fastest time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For properties that need work before listing, Each potential improvement is evaluated through a return-on-investment lens informed by certified appraisal training. A $5,000 kitchen cleanup might add $15,000 in sale price; a $40,000 renovation might add only $20,000. These distinctions matter when estate funds are limited and fiduciary duties require defensible decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether the property is a mid-century rambler in Shoreline with decades of deferred maintenance or a waterfront home on Mercer Island held in a family trust, David brings the same structured approach: assess, plan, prepare, price, market, and close — with clear communication at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
              <img src={warning3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0 mt-0.5"  loading="lazy"/>
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Important Note</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Real Property Planning provides real estate guidance, market analysis, and property sale services. Legal advice regarding probate administration, estate law, fiduciary duties, and court procedures should be directed to a qualified attorney. Real Property Planning works collaboratively with your legal team to ensure the real estate side proceeds smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProofCallout
              quote="The dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable."
              attribution="Professional Referral"
              context="Probate property sale coordination"
              variant="accent"
            />
          </div>
        </div>
      </section>

      <ClientReviewsSection
        reviews={probateReviews}
        heading="Client Reviews & Experiences"
        subheading="Feedback from clients and professionals who worked with David on probate and estate property situations."
        background="bg-secondary"
      />

      <RealClientSituations
        studies={probateCaseStudies}
        heading="Real Client Situations"
        subheading="Examples of how David has helped executors and families handle complex probate property transitions."
        background="bg-background"
        showCTA
      />

      <PageFAQ faqs={faqs} heading="Probate & Estate Sale FAQs" />

      {/* Educational Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">All FAQs</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/resources" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Resources</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/probate-estate-sales" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need Experienced Help Selling a Probate or Estate Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              Real Property Planning provides a no-pressure consultation to review the property, discuss timing, and outline next steps.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              A short conversation to understand your situation, answer questions, and plan a practical path forward.
            </p>
            <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Schedule a Consultation
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

export default ProbateEstateSales;
