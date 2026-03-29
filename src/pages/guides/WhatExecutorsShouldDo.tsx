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
import ProofCallout from "@/components/ProofCallout";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ListenButton from "@/components/ListenButton";

const immediateSteps = [
  { title: "Secure the Property", text: "Change locks if needed, verify insurance coverage, and make sure utilities remain active. A vacant home is vulnerable to weather damage, vandalism, and liability issues." },
  { title: "Confirm Your Legal Authority", text: "Work with the estate attorney to obtain letters testamentary or letters of administration. Until this authority is granted, you generally cannot sell the property — but you can begin planning." },
  { title: "Document the Property's Condition", text: "Take photos and notes of every room, including the exterior, garage, and yard. Note obvious maintenance issues, personal property, and anything that may affect sale value or require attention." },
  { title: "Identify Key Stakeholders", text: "Determine who needs to be involved in decisions — co-executors, beneficiaries, attorneys, CPAs. Clear communication early prevents disagreements later." },
  { title: "Get a Professional Property Assessment", text: "Contact a broker experienced in estate property to visit the home and provide a realistic assessment of condition, likely market value, and preparation needs. This is different from an online estimate." },
];

const faqs = [
  { question: "Can I start working on the property before probate is filed?", answer: "You can secure the property, maintain insurance, and begin planning. However, selling, making major modifications, or disposing of significant personal property should generally wait until your legal authority is established. Consult the estate attorney for guidance specific to your situation." },
  { question: "Should I clean out the home before getting it assessed?", answer: "Not necessarily. A broker experienced in estate property can assess the home in its current condition. In fact, seeing the property before cleanout helps David understand the full scope of work needed and provide more accurate timeline and cost estimates." },
  { question: "What if I live out of state?", answer: "Many executors manage properties from a distance. David serves as the local point of contact — coordinating property access, vendor management, preparation, and the sale process while keeping you informed through regular updates. Learn more about out-of-state property coordination." },
  { question: "How do I know if the property needs repairs before selling?", answer: "David evaluates each potential repair or improvement through a return-on-investment lens, informed by his certified appraisal background. Some improvements significantly increase sale price; others are not worth the cost or delay. This analysis helps you make smart decisions with estate funds." },
];

const jsonLd = articleSchema({
  headline: "What Executors Should Do Before Selling an Inherited Home",
  description: "A practical guide for executors and personal representatives — from securing the property to understanding value, coordinating with attorneys, and preparing for sale.",
  url: "/guides/what-executors-should-do",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Executor responsibilities", "Inherited home", "Estate property", "Property preparation", "Probate real estate"],
});

const WhatExecutorsShouldDo = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Executors Should Do Before Selling an Inherited Home | Real Property Planning"
      description="A practical step-by-step guide for executors and personal representatives — from securing the property and confirming authority to pricing, preparation, and managing the sale."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "What Executors Should Do", url: "/guides/what-executors-should-do" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl" id="executors-guide-hero">
          <div className="mb-5">
            <ListenButton targetId="executors-guide-hero" />
          </div>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What Executors Should Do Before Selling an Inherited Home
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            If you have been named executor or personal representative and the estate includes real property, there are several important steps to take before the home can be listed for sale. Taking these steps in the right order protects the estate, prevents costly mistakes, and sets the stage for a smoother sale process.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide covers the practical first steps — from securing the property through getting a professional assessment — so you know what to do, when to do it, and who to involve.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Immediate Steps */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The First Five Steps Every Executor Should Take</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            These steps apply whether you live nearby or across the country, and whether the estate is simple or complex:
          </p>
          <div className="grid gap-5">
            {immediateSteps.map((step, i) => (
              <div key={i} className="bg-card border border-border rounded-xl px-7 py-6 flex gap-5 items-start">
                <span className="text-gold font-serif text-3xl font-semibold leading-none pt-0.5 select-none shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Understanding Value */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Understanding the Property's Value Matters Early</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            One of the biggest mistakes executors make is relying on online estimates or family opinions to determine what an inherited home is worth. Estate properties are almost always in non-standard condition — which means automated valuation tools are unreliable and even well-intentioned family estimates can be significantly off.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Getting a professional property assessment early in the process helps with multiple decisions: whether to invest in repairs before selling, how to set realistic expectations with beneficiaries, how to plan the estate's finances during administration, and how to respond to early inquiries from potential buyers or neighbors.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            David's dual background as a broker and <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">certified residential appraiser</Link> means you get valuation insight grounded in professional methodology — not guesswork.
          </p>
        </div>
      </div>
    </section>

    {/* Proof callout */}
    <section className="py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ProofCallout
            quote="We didn't know where to start. David made the entire process manageable and kept us informed every step of the way."
            attribution="Executor, Snohomish County"
            context="Inherited property sale"
            variant="accent"
          />
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Not Sure Where to Start?"
      body="Most executors are doing this for the first time. A short conversation with David can help you understand your options, assess the property, and plan practical next steps."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* Preparation and Vendors */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Repairs, Cleanout, and Sale Preparation</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Inherited homes often need significant preparation before they are ready for the market. The personal belongings need to be sorted, donated, or removed. Deferred maintenance may need to be addressed. Landscaping, cleaning, and sometimes light staging are needed to present the property effectively.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The key question is which improvements are worth the investment. A $5,000 kitchen cleanup might add $15,000 in sale price. A $40,000 renovation might add only $20,000. David evaluates each potential improvement using his appraisal background to estimate the likely return — helping you spend estate funds wisely.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            David coordinates the entire preparation process — scheduling <Link to="/resources/estate-sale-companies" className="text-accent hover:text-gold underline underline-offset-4">estate sale companies</Link>, cleanout crews, handymen, and <Link to="/resources/property-preparation-services" className="text-accent hover:text-gold underline underline-offset-4">property preparation services</Link> — so you don't have to manage contractors yourself.
          </p>
        </div>
      </div>
    </section>

    {/* Coordinating With Others */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Coordinating With Attorneys, Heirs, and Other Stakeholders</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Estate property sales involve multiple people with different interests, timelines, and emotional states. The estate attorney needs the real estate process to align with legal proceedings. Beneficiaries want to understand value and timing. Co-executors need to agree on decisions. CPAs may need information for tax planning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            David acts as a single point of contact for the real estate side of the equation — communicating clearly with all parties, providing regular updates, and ensuring that decisions are documented and defensible. This reduces the executor's communication burden and keeps the process moving forward.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn more about how David works with <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">attorneys and fiduciaries</Link> or explore the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">full sale process from consultation to closing</Link>.
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
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What to Do With an Inherited House</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Family Guide</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Executor FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "How Probate Real Estate Works in Washington", description: "Understand the legal process, timeline, and key decisions involved in selling property through probate.", href: "/guides/how-probate-real-estate-works" },
        { title: "Inherited House Guide", description: "Explore your options — sell, keep, rent, or buy out — with key financial and legal considerations.", href: "/guides/inherited-house-washington" },
        { title: "Out-of-State Family Guide", description: "How to manage, prepare, and sell a Washington property when you live in another state.", href: "/guides/out-of-state-families" },
      ]}
    />

    <RelatedServices currentPath="/guides/what-executors-should-do" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">Ready to Talk About Your Situation?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">Start with a simple conversation. David will listen, answer your questions, and outline practical next steps.</p>
          <p className="text-primary-foreground/50 text-base mb-8">Whether you are just beginning or already feel behind, there is always a clear path forward.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />Schedule a Conversation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    <Footer />
  </div>
);

export default WhatExecutorsShouldDo;
