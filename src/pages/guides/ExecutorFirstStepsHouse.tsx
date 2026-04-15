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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const faqs = [
  { question: "Should I change the locks on the estate property?", answer: "Yes, this is generally one of the first things to do. You want to control access to the property and protect it from unauthorized entry. Change the locks and keep a record of who has keys." },
  { question: "Do I need to keep paying the mortgage?", answer: "If there is a mortgage on the property, payments should continue to be made from estate funds to avoid default and foreclosure. Consult the estate attorney about how to handle this within the estate administration." },
  { question: "Should I cancel utilities?", answer: "Generally, no — keep utilities on. You need heat or cooling to prevent damage, and you need electricity for maintenance visits and showings. Canceling utilities prematurely can lead to frozen pipes, mold, or other costly damage." },
  { question: "When should I start cleaning out the house?", answer: "You can begin planning immediately, but coordinate with heirs about personal items and family belongings first. The actual cleanout can begin once there is agreement on what to keep, donate, and discard. This process takes longer than most people expect." },
  { question: "Do I need to notify the insurance company?", answer: "Yes. Most homeowner's insurance policies have specific requirements when a property becomes unoccupied. You may need a vacancy rider or a different type of policy. Failure to notify the insurer could void coverage." },
];

const jsonLd = articleSchema({
  headline: "What Should an Executor Do First With a House?",
  description: "A practical guide to the first decisions an executor needs to make about estate property — from securing the home to planning for sale.",
  url: "/guides/executor-first-steps-house",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  about: ["Executor responsibilities", "Estate property management", "Probate house", "Executor first steps", "Estate administration"],
});

const ExecutorFirstStepsHouse = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Should an Executor Do First With a House? | Real Property Planning"
      description="A practical guide to the first decisions an executor needs to make about estate property — from securing the home to planning for sale."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Executor First Steps With a House", url: "/guides/executor-first-steps-house" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What Should an Executor Do First With a House?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Secure the property, confirm insurance, and begin documenting its condition. These three steps protect the estate and give you a foundation for every decision that follows.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Being named executor often comes with immediate pressure to make decisions about the house. This guide walks through what to do first — and what can wait.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* What This Means in Practice */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What This Means in Practice</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            When someone passes and leaves real property, the executor suddenly becomes responsible for a physical asset — often from a distance, during a difficult emotional time, and without clear guidance on what to do first.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The instinct is often to focus on selling the house as quickly as possible. That is understandable, but there are several important steps that need to happen first. Taking these steps in the right order protects you legally, protects the property physically, and sets the stage for a smoother process.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You do not need to do everything at once. Prioritize security, insurance, and documentation — then move to planning and coordination as you get oriented.
          </p>
        </div>
      </div>
    </section>

    {/* First Steps */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The First Five Steps</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            These should be addressed as soon as reasonably possible — ideally within the first week or two:
          </p>
          <ol className="space-y-6 list-decimal list-inside text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Secure the property.</strong> Change the locks, confirm that all doors and windows are secure, and control who has access. If the home will be vacant, consider setting lights on timers and having mail held or forwarded.
            </li>
            <li>
              <strong className="text-foreground">Confirm and update insurance.</strong> Contact the homeowner's insurance company to report the death and confirm coverage. Most policies have vacancy clauses that may require a rider or policy change. Do not let coverage lapse.
            </li>
            <li>
              <strong className="text-foreground">Keep utilities on.</strong> Heat, electricity, and water should remain active to prevent damage. Frozen pipes, mold, and deterioration can cost thousands of dollars and are easily preventable.
            </li>
            <li>
              <strong className="text-foreground">Document the property's condition.</strong> Take photos and video of every room, the exterior, the garage, and any outbuildings. This documentation serves as a baseline for insurance claims, estate records, and future planning.
            </li>
            <li>
              <strong className="text-foreground">Consult the estate attorney.</strong> Confirm how the property is titled, whether probate is required, and what authority you need before taking further action. This conversation sets the framework for everything that follows.
            </li>
          </ol>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Just Named as Executor?"
      body="The first few weeks can feel overwhelming. A short conversation with David can help you prioritize what matters most and understand the process ahead."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* What Can Wait */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Can Wait — and What Should Not</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Not everything needs to happen immediately. Here is a practical way to think about priorities:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Do now:</strong> Secure the property, confirm insurance, keep utilities on, begin documentation. These protect the estate from loss and liability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Do within the first month:</strong> Get a professional property assessment, begin conversations with heirs about the house, coordinate with the estate attorney on probate timeline and authority.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Can wait until you have authority:</strong> Listing the property, making major repairs, accepting offers. These require legal standing and should not be rushed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Should not wait:</strong> Do not delay getting a <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">professional valuation</Link>. Understanding the property's value early helps frame every subsequent conversation — with heirs, attorneys, and potential buyers.
          </p>
        </div>
      </div>
    </section>

    {/* Common Mistakes to Avoid */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-4">
            {[
              "Letting heirs or family members take items from the house before a proper inventory — this creates disputes and legal complications",
              "Canceling utilities to save money — the cost of water damage from frozen pipes far exceeds a few months of utility bills",
              "Accepting an offer from a neighbor or family friend without understanding the property's actual value",
              "Making expensive repairs before getting a professional assessment — some repairs add value, but many do not",
              "Trying to handle everything alone — executors who engage professionals early consistently have better outcomes and less stress",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Emotional Reality */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The Emotional Reality</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Being named executor is a responsibility that arrives during grief. You may be managing a family home full of memories while dealing with your own loss, family expectations, and legal obligations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            It is normal to feel overwhelmed. It is normal to feel uncertain. And it is completely reasonable to ask for help — not because you cannot handle it, but because this is a complex situation that benefits from experience and support.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The most effective executors are not the ones who do everything themselves. They are the ones who build a team of trusted professionals — an attorney, a CPA, and a broker who understands estate property — and let that team share the weight.
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
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do Before Selling</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/how-long-sell-probate-property" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Long to Sell Probate Property</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Executor First Steps FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "Can You Sell a House During Probate in Washington?", description: "Understand what authority is needed and how the sale process works.", href: "/guides/sell-house-during-probate-washington" },
        { title: "How Long Does It Take to Sell a Probate Property?", description: "Realistic timelines and what affects them.", href: "/guides/how-long-sell-probate-property" },
        { title: "What Executors Should Do Before Selling", description: "A step-by-step guide covering the five most important pre-sale decisions.", href: "/guides/what-executors-should-do" },
      ]}
    />

    <RelatedServices currentPath="/guides/executor-first-steps-house" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">If you're working through this situation and want help thinking it through, a short conversation can often bring clarity.</p>
          <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ExecutorFirstStepsHouse;
