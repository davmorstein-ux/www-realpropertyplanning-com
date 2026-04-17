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
import RealClientSituations from "@/components/RealClientSituations";

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
    description: (
      <>
        Property being administered through court-supervised probate. Legal authority (<Link to="/terminology" className="text-accent hover:text-gold underline underline-offset-4">letters testamentary or letters of administration</Link>) is typically required before a sale can proceed. Timelines, court requirements, and fiduciary duties all affect the process.
      </>
    ),
  },
  {
    label: "Inherited Property (Non-Probate)",
    description: "Property that passes outside of probate — through a trust, joint tenancy, or beneficiary designation. These situations may have fewer legal hurdles but still involve condition concerns, family coordination, and pricing decisions.",
  },
];

const whatMakesDifferent = [
  "Legal authority and court requirements may dictate when and how a sale can occur",
  "Multiple decision-makers — executors, co-heirs, attorneys, trustees — must coordinate without conflict",
  "Properties often have years of deferred maintenance, personal belongings, or extended vacancy",
  "Pricing must account for actual condition, legal timelines, and realistic market expectations — not automated estimates",
  "Emotional complexity can affect family communication and slow the decision-making process",
  "Preparation decisions (as-is vs. selective repairs) have a direct and measurable impact on sale outcome and fiduciary defensibility",
];

const timingConsiderations = [
  {
    title: "Before Legal Authority Is Granted",
    text: "Many executors and families don't realize help is available before legal authority is formally in place. Real Property Planning can assess the property, provide a realistic picture of likely value and condition, and help you plan next steps — so you're ready to act the moment authority is granted. This early groundwork often saves weeks once probate is officially underway.",
  },
  {
    title: "During Active Probate",
    text: "Once legal authority is established, Our team coordinates preparation, cleanout, pricing strategy, and the listing timeline — always in alignment with the legal proceedings and any court requirements. Attorneys receive regular updates and have a single reliable point of contact for all property-related questions. Family members stay informed without being overwhelmed.",
  },
  {
    title: "Post-Probate or Trust Distribution",
    text: "Once authority is clear and the estate is ready to move forward, Our team manages the full sale process — preparation, professional marketing, negotiation, and closing. For properties that need work, each improvement is evaluated for return on investment before any money is spent.",
  },
];

const commonQuestionsFaqs = [
  {
    question: "What specific Washington court forms or filings affect when we can list the property?",
    answer: "In a typical Washington probate, the personal representative needs Letters Testamentary (with a will) or Letters of Administration (without one) before listing. If the will grants Nonintervention Powers — which is common in Washington — the PR can usually sell without further court approval. If the estate is supervised, you may need a court order authorizing the sale and confirming the price. We coordinate directly with the estate attorney so the listing date, the offer-acceptance date, and the closing date all line up with whatever order the court requires.",
  },
  {
    question: "Can we accept the first reasonable offer, or do we need to follow a court bidding process?",
    answer: "It depends on the type of probate. With Nonintervention Powers, the PR can negotiate and accept like a normal seller. In supervised probates — and in some judicial-confirmation situations — the accepted offer may be subject to overbid at a court hearing. We structure the listing strategy and disclosures around whichever standard applies, so heirs and the attorney are not surprised at the hearing.",
  },
  {
    question: "How do you protect an executor from later claims that the home was sold for too little?",
    answer: "This is fiduciary defensibility, and it is why we lead with a documented, valuation-based pricing analysis rather than a marketing CMA. The PR's file includes condition photos, comparable-sales adjustments, marketing exposure records, every offer received, and the rationale for the accepted price — the same documentation an appraiser would produce. If a beneficiary later questions the sale price, the answer is in the file.",
  },
  {
    question: "The house is full of belongings and hasn't been touched in years. Where do you even start?",
    answer: "We start with a walk-through to separate the property questions from the contents questions. For contents, we coordinate vetted estate-sale companies, donation pickups, and full cleanout crews — and tell you which approach actually nets more for the estate. For the property itself, we identify the small set of repairs that move the appraised value (and therefore the sale price) and the larger set that do not. Most estate homes need far less work than families assume.",
  },
  {
    question: "How does selling during probate affect our tax situation as heirs?",
    answer: "Inherited property generally receives a stepped-up basis to fair market value as of the date of death — which is why a defensible date-of-death valuation matters. If the property sells reasonably close to that value, capital-gains exposure for the heirs is usually minimal. We are not tax advisors, but we coordinate closely with your CPA or estate attorney and can produce the valuation documentation they need.",
  },
  {
    question: "Can you start working with us before the estate attorney is even hired?",
    answer: "Yes. Many families call us first because the property is the most visible, most stressful piece. We will tell you honestly whether you need an attorney (almost always yes for Washington probate) and refer you to several experienced probate attorneys in your county if you don't have one. Then we work alongside whichever attorney you choose — they handle the legal proceeding, we handle the property.",
  },
];

const jsonLd = articleSchema({
  headline: "Probate Real Estate Sales in Washington State",
  description: "Valuation-informed probate real estate guidance for executors, attorneys, and families throughout Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/probate-estate-sales",
  datePublished: "2025-01-15",
  dateModified: "2026-04-15",
  about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
});

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate in Washington State | Selling an Estate Home"
        description="Washington probate property sales handled with court-aligned timelines, fiduciary-defensible pricing, and full coordination with your estate attorney. King, Snohomish, Pierce & Kitsap."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconProbateSales} alt="Probate real estate sales guidance Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate & Estate Property Sales
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Selling a Home Through Probate in Washington State
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-4">
              A probate sale runs on the court's clock, not the market's — and a typical listing agent isn't built for it.
            </p>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-4">
              The property usually can't be listed until Letters Testamentary or Letters of Administration are issued. Pricing has to hold up to fiduciary scrutiny, not just attract showings. The{" "}
              <Link to="/executors" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">personal representative</Link>, the{" "}
              <Link to="/for-attorneys" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">estate attorney</Link>, and out-of-state heirs all need the same information at the same time. And the property keeps costing the estate money — taxes, insurance, utilities — every week it sits.
            </p>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-5">
              Real Property Planning handles probate listings as their own discipline. Real Property Planning's dual credential as a licensed broker and a Washington State Certified Residential Appraiser means the price you bring to the court file is the same price the market will support — and the documentation is already in your fiduciary record. Serving{" "}
              <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King, Snohomish, Pierce, and Kitsap Counties</Link>, with statewide coordination for out-of-state executors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Talk Through Your Estate
                </Button>
              </Link>
              <Link to="/guides/sell-house-during-probate-washington">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Read the Probate Sale Guide
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              This distinction matters more than most people realize. Understanding which situation you're in determines your legal authority, your timeline, and your options before you can take any action on the property.
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
            <p className="text-muted-foreground text-[17px] leading-[1.85] mb-8">
              Estate property sales are genuinely different from standard real estate transactions — and treating them like ordinary listings is where families and executors most often run into trouble. The challenges are legal, logistical, emotional, and financial — often all at once.
            </p>
            <ul className="space-y-4 mb-8">
              {whatMakesDifferent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-[17px] leading-[1.85]">
              our team's dual background as a licensed broker and a{" "}
              <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link>{" "}
              means he approaches these situations differently than a standard listing agent. Every pricing decision is grounded in methodology. Every repair recommendation is evaluated through a{" "}
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">return-on-investment</Link>{" "}
              lens. And every communication is structured to keep attorneys, executors, and family members aligned — not competing.
            </p>
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

      {/* The Real Estate Side of Estate Administration */}
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
              Real Property Planning understands these pressures from working through them with hundreds of clients. We help{" "}
              <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link>, attorneys, and families develop a timeline that accounts for legal proceedings, property preparation, and market conditions — so the sale happens at the right time, not just the fastest time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For properties that need work before listing, each potential improvement is evaluated through a{" "}
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">return-on-investment</Link>{" "}
              lens informed by{" "}
              <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraisal</Link>{" "}
              training. A $5,000 kitchen cleanup might add $15,000 in sale price; a $40,000 renovation might add only $20,000. These distinctions matter when estate funds are limited and fiduciary duties require defensible decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Families and executors throughout the Puget Sound area — from Seattle and Bellevue in King County to Everett and Edmonds in Snohomish County, Tacoma and Puyallup in Pierce County, and Bremerton and Silverdale in Kitsap County — face these same challenges. Real Property Planning's approach is the same regardless of location: assess the property honestly, develop a preparation strategy based on return on investment, price it correctly for its actual condition, and manage the sale with clear communication throughout.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For{" "}
              <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold underline underline-offset-4">executors managing property from out of state</Link>, the entire process can be handled remotely — with photo updates, digital document signing, and regular calls to keep you informed without requiring you to travel for every step.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether the property is a mid-century rambler in Shoreline with decades of deferred maintenance or a waterfront home on Mercer Island held in a family trust, Our team brings the same structured approach: assess, plan, prepare, price, market, and close — with clear communication at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Common Questions About Probate Real Estate */}
      <PageFAQ faqs={commonQuestionsFaqs} heading="Common Questions About Probate Real Estate Sales in Washington State" />

      {/* Legal Disclaimer */}
      <section className="py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
              <img src={warning3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0 mt-0.5" loading="lazy"/>
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

      <RealClientSituations
        studies={probateCaseStudies}
        heading="Real Client Situations"
        subheading="Examples of how Our team has helped executors and families handle complex probate property transitions."
        background="bg-background"
        showCTA
      />

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
              Ready to Talk?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              Whether{" "}
              <Link to="/terminology" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
              is just beginning, actively underway, or nearing completion, a short conversation can help you understand your options and develop a practical next step.
            </p>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Our team works with{" "}
              <Link to="/executors" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">executors</Link>,{" "}
              <Link to="/for-attorneys" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">attorneys</Link>, and families throughout{" "}
              <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State. Through eXp Realty's national referral network, he can also connect{" "}
              <Link to="/guides/out-of-state-families" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">out-of-state</Link>{" "}
              families with trusted brokers in other states.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+12069003015">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
};

export default ProbateEstateSales;
