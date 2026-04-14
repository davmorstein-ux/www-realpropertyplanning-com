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
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
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

const faqs = [
  {
    question: "What is the first thing I should do as executor when there is real estate involved?",
    answer: "Three things, in order: secure the property, confirm your legal authority to act, and get an honest assessment of the home's condition and value. Securing the property means making sure it's locked, insured, and that utilities are being managed — vacant homes can deteriorate quickly, and estate insurance requirements are different from standard homeowner policies. Confirming your legal authority means working with your estate attorney to ensure you have letters testamentary or letters of administration before signing any listing agreements. And getting an honest assessment means talking to a real estate professional who will tell you what the home is actually worth in its current condition — not what sounds good. David can walk through all three of these with you in a single conversation.",
  },
  {
    question: "I live out of state — can you handle the property locally?",
    answer: "Yes — and this is one of the most common situations David works with. Many executors are managing Washington State estate property from California, Texas, Arizona, or across the country. David can assess the property, coordinate cleanout and repairs, manage the listing and showings, and handle everything through closing — providing regular photo and written updates so you're never in the dark. You don't need to fly out for every step. Most out-of-state executors find that a combination of video calls, email updates, and digital document signing makes the process entirely manageable from a distance.",
  },
  {
    question: "Should I invest in repairs before selling?",
    answer: "It depends on the property, the market, and the estate's financial situation — and the honest answer isn't always obvious. David evaluates every potential improvement through a return-on-investment lens informed by his certified appraisal training. A $4,000 carpet replacement might add $12,000 in perceived value; a $30,000 kitchen remodel might add only $15,000. These are the distinctions that matter when estate funds are limited and your fiduciary duties require defensible decision-making. In some cases, selling as-is is clearly the right answer. In others, targeted improvements make a meaningful difference. David will tell you which situation you're in — not what maximizes his commission.",
  },
  {
    question: "How is selling estate property different from a normal home sale?",
    answer: "In several important ways. Legal authority — letters testamentary or letters of administration — may need to be in place before a listing agreement can be signed. Court approval may be required in certain probate situations. The property may have been vacant for months, creating insurance and maintenance complications. Multiple decision-makers — co-executors, attorneys, heirs — may all need to be kept informed. And the emotional complexity of the situation can affect family communication in ways that a standard transaction simply doesn't involve. David understands these dynamics from years of working with executors, and he structures his communication and process accordingly.",
  },
  {
    question: "What if I am a first-time executor?",
    answer: "Most executors are. Being named to this role doesn't come with a manual, and the learning curve during an already difficult time can feel overwhelming. David works with first-time executors regularly and takes the time to explain each step — what it means, why it matters, and what comes next. The goal is never to rush you through a process you don't understand. It's to make sure you feel informed and confident at every decision point.",
  },
  {
    question: "How do you handle significant deferred maintenance?",
    answer: "Honestly and methodically. David has worked with estate properties in every condition — homes that haven't been updated in 40 years, properties with failing roofs or outdated systems, houses filled with decades of belongings. His appraisal background means he can assess each issue, estimate its impact on market value, and help you make a clear decision about what to address and what to leave. He also has relationships with trusted local contractors, cleanout crews, and estate liquidators throughout the Puget Sound area — so you're not starting from scratch trying to find reliable vendors on your own.",
  },
];

const ExecutorsLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Executors Need to Know About Selling Estate Property in Washington | Real Property Planning"
      description="Step-by-step guidance for executors and personal representatives selling inherited real estate in Washington State. Case studies, FAQs, and practical next steps."
    />
    <BreadcrumbSchema items={[
      { name: "Executors", url: "/executors" },
      { name: "Learn More", url: "/executors/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-3 md:pt-4 pb-10 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">
            What Executors Need to Know About Selling Estate Property in Washington
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Detailed guidance on selling estate property — situations, process, case studies, and frequently asked questions.
          </p>
        </div>
      </div>
    </section>

    <DirectAnswerBlock
      question="What should an executor do when there is real estate in the estate?"
      answer="Start by securing the property, confirming your legal authority to act, and getting an honest assessment of the home's condition and realistic market value. Those three steps — secure, confirm authority, assess — create the foundation for everything that follows. As both a licensed real estate broker and a Washington State Certified Residential Appraiser, David Stein brings something most agents can't offer: a valuation-based understanding of what the home is actually worth in its current condition, not an inflated listing estimate designed to win your business. That distinction matters enormously when you have fiduciary duties to fulfill and family members watching every decision. Real Property Planning works with executors throughout Washington State — handling the full sale process from property evaluation through closing, with clear communication to you, your attorney, and any family members who need to stay informed."
      supportSteps={[
        { label: "We Talk", desc: "David listens to your situation, answers your questions, and helps you understand your options before you commit to anything." },
        { label: "We Assess", desc: "David visits the property and gives you an honest picture of condition, realistic value, and what (if anything) is worth doing before listing." },
        { label: "We Handle It", desc: "Cleanout coordination, repairs, pricing, marketing, showings, negotiation, and closing — managed for you, with regular updates throughout." },
      ]}
    />

    {/* Common Situations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Common Situations</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.85] mb-8">
            Executors reach out from many different starting points. Some have legal authority already in hand and are ready to list. Others are still working through{" "}
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">probate</Link>{" "}
            and need guidance on what to do in the meantime. David works with executors throughout Western Washington in situations including:
          </p>
          <ul className="space-y-4">
            {[
              "A parent or loved one has passed and you've been named executor or personal representative",
              "You're managing an estate from out of state and need a trusted local professional on the ground",
              "The home has years of deferred maintenance or hasn't been updated in decades",
              "The house is full of personal belongings with no clear plan for cleanout",
              "Multiple family members have different opinions about the property, pricing, or timing",
              "You need to fulfill a fiduciary obligation but have never sold a home before",
              <>The <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">estate attorney</Link> needs current market data or a professional property assessment</>,
              "You've already received listing pitches from other agents and want an honest second opinion",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground text-[17px] leading-[1.85]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* How Real Property Planning Helps Executors */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How Real Property Planning Helps Executors</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.85] mb-8">
            David's dual background as a licensed real estate broker and a Washington State{" "}
            <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">Certified Residential Appraiser</Link>{" "}
            shapes every part of how he works with executors. Most listing agents give you a price they think will win your business. David gives you a defensible number grounded in methodology — the kind of analysis that holds up if family members push back, attorneys ask questions, or the court requires documentation.
          </p>
          <p className="text-muted-foreground text-[17px] leading-[1.85] mb-8">
            Beyond valuation, Real Property Planning manages the entire property side of estate administration:
          </p>
          <ul className="space-y-4">
            {[
              "Honest property assessment — condition, realistic value, and options explained clearly",
              "Repair vs. as-is guidance — a cost-benefit analysis of what's worth doing before listing",
              "Cleanout and vendor coordination — connecting you with trusted local professionals so you don't have to manage it yourself",
              "Listing and marketing — professional presentation, accurate pricing, and full sale management",
              "Multi-party communication — regular updates to you, the estate attorney, co-executors, and family members",
              "Out-of-state coordination — remote management of the full process so you don't need to be present for every step",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground text-[17px] leading-[1.85]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <MidPageCTA heading="Not Sure Where to Start?" body="A short conversation can help you understand your options." buttonText="Schedule a Conversation" />

    {/* Real Client Situations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] leading-[1.85] mb-6">
            Every estate property situation is different. These are real examples of how David has helped executors, trustees, and families work through complex property transitions throughout Washington State.
          </p>
        </div>
      </div>
      <RealClientSituations studies={executorCaseStudies} background="bg-background" showCTA />
    </section>

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
            <span className="text-muted-foreground/40">·</span>
            <Link to="/terminology" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate Terms</Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/executors" />

    {/* Closing CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">Ready to Talk?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If you're dealing with inherited property in Washington State — whether{" "}
            <Link to="/probate-estate-sales" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
            is just beginning or you're already several months in — a short conversation can help bring clarity.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            David works with executors throughout{" "}
            <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State. There's no pressure, no obligation, and no sales pitch. Just honest guidance for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
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

export default ExecutorsLearnMore;
