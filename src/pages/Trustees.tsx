import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import RealClientSituations from "@/components/RealClientSituations";
import PageTestimonials from "@/components/PageTestimonials";
import MidPageCTA from "@/components/MidPageCTA";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ListenButton from "@/components/ListenButton";

const trusteeTestimonials = [
  {
    text: "David understood the fiduciary responsibilities I was dealing with as trustee. His valuation expertise gave me the documentation I needed to show beneficiaries that every decision was grounded in data.",
    attribution: "Karen L.",
    context: "Trustee · Trust-held property in King County",
    tag: "Fiduciary Support · Valuation",
  },
  {
    text: "I was managing a trust from out of state and had no idea how to handle the property. David coordinated everything locally — the cleanout, the repairs, the listing — and kept me informed the entire time.",
    attribution: "James R.",
    context: "Successor trustee · Inherited home in Pierce County",
    tag: "Out-of-State Trustee · Coordination",
  },
  {
    text: "Having someone with both appraisal credentials and real estate experience made all the difference. David gave us an honest, defensible price — not just a number to win the listing.",
    attribution: "Linda W.",
    context: "Trustee · Trust property sale in Snohomish County",
    tag: "Trust Administration · Honest Pricing",
  },
];

const trusteeCaseStudies = [
  {
    title: "Successor Trustee Managing from Out of State",
    label: "Out-of-State Trustee",
    situation: "A successor trustee living in Arizona needed to sell her late mother's home in King County as directed by the trust. The property had not been maintained in several years and was full of personal belongings.",
    challenge: "She had no local contacts, limited time to travel, and needed to fulfill her fiduciary duty to the beneficiaries with documented market support.",
    howHelped: "David assessed the property, coordinated a professional cleanout and targeted repairs, managed the listing and sale process, and provided regular updates and documentation throughout.",
    outcome: "The home sold within a month at a price supported by market data. The trustee was able to distribute proceeds to beneficiaries with full documentation of the process and pricing rationale.",
  },
  {
    title: "Trust Property With Multiple Beneficiaries",
    label: "Beneficiary Coordination",
    situation: "A trustee was responsible for selling a family home in Snohomish County held in a revocable living trust. Four beneficiaries had equal interests and different opinions about timing and price.",
    challenge: "One beneficiary wanted to sell immediately, one wanted to hold, and two were unsure. The trustee needed a defensible pricing strategy and clear communication to all parties.",
    howHelped: "David provided a detailed valuation-informed pricing analysis, held a group call with the trustee and beneficiaries to walk through market data, and outlined realistic options for each scenario.",
    outcome: "The beneficiaries reached consensus within two weeks. The property sold at a price everyone agreed was fair, and the trustee fulfilled their fiduciary obligations with documented support.",
  },
  {
    title: "Trust-Held Property With Significant Deferred Maintenance",
    label: "Valuation Strategy",
    situation: "A trustee needed to sell a Pierce County home held in trust that had a failing roof, outdated systems, and years of deferred maintenance.",
    challenge: "Two previous agents had declined the listing because of the property's condition. The trustee needed to demonstrate prudent management and document the basis for pricing decisions.",
    howHelped: "David evaluated each issue, estimated the cost impact on market value, and recommended a targeted preparation strategy — addressing safety concerns and cosmetic items while advising against costly renovations that would not deliver meaningful return.",
    outcome: "The property was priced accurately for its condition, attracted multiple offers, and closed smoothly. The trustee had full documentation to support their fiduciary decisions.",
  },
  {
    title: "Coordinating a Trust Sale with Attorney Oversight",
    label: "Professional Coordination",
    situation: "A corporate trustee managing a trust estate in Kitsap County needed to sell the trust's primary real estate asset. The trust attorney required regular updates and documentation at each stage.",
    challenge: "The corporate trustee needed a real estate professional who understood trust administration requirements and could provide the level of documentation and communication expected in a professional fiduciary context.",
    howHelped: "David worked directly with both the corporate trustee and the trust attorney, providing market analysis, preparation recommendations, and regular written updates. He managed the entire sale process while maintaining the documentation standards required.",
    outcome: "The sale closed on schedule with complete documentation. Both the corporate trustee and the attorney noted that David's process was well suited to the professional fiduciary environment.",
  },
  {
    title: "Helping a Trustee Navigate a Senior Transition and Property Sale",
    label: "Senior Transition",
    situation: "A daughter serving as successor trustee needed to sell her father's home after he moved to assisted living. The property was held in a revocable trust, and her father was still living but no longer able to manage the home.",
    challenge: "The transition was emotionally difficult, and the trustee was unsure how to balance her father's wishes with the practical need to prepare and sell the property.",
    howHelped: "David met with the family to understand the full picture — the move timeline, the property's condition, and the family's emotional readiness. He recommended a phased approach and coordinated all vendors and preparation.",
    outcome: "The home sold within a month of listing. The family described the experience as respectful and well-paced, and the trustee was able to fulfill her responsibilities with confidence.",
  },
  {
    title: "Providing Defensible Pricing for Trust Distribution",
    label: "Valuation Strategy",
    situation: "A trustee needed to sell a trust-held property in King County and had received two very different price opinions from other agents. Beneficiaries were asking pointed questions about pricing.",
    challenge: "The trustee needed a pricing strategy that was clearly defensible — not just an opinion, but a well-documented analysis that could withstand scrutiny from beneficiaries and their advisors.",
    howHelped: "David conducted a thorough property review and provided a valuation-informed pricing strategy with detailed comparable sales analysis, condition adjustments, and market context. He documented his methodology clearly.",
    outcome: "The trustee presented the analysis to beneficiaries with confidence. The home sold close to the supported price, and no pricing disputes arose during distribution.",
  },
];

const commonSituations = [
  "You have been named successor trustee and are responsible for managing or selling trust-held real estate",
  "You are managing trust property from out of state and need reliable local coordination",
  "The trust property has deferred maintenance, and you need to decide whether to repair or sell as-is",
  "The home is full of personal belongings, and you need help with cleanout and preparation",
  "Multiple beneficiaries have different opinions about what to do with the property",
  "You need to fulfill your fiduciary duty with documented, defensible pricing",
  "The trust attorney needs market data or a property assessment to support the administration",
  "You want honest, data-driven pricing — not an inflated number designed to win a listing",
];

const howIHelp = [
  "Evaluate the property's true condition and realistic market value",
  "Provide defensible pricing documentation suitable for fiduciary oversight",
  "Advise on whether to invest in repairs or sell as-is based on return on investment",
  "Coordinate cleanout, preparation, and vendor management so you do not have to",
  "Manage the listing, marketing, showings, and negotiations on your behalf",
  "Communicate clearly with you, the trust attorney, beneficiaries, and other stakeholders throughout",
];

const processSteps = [
  {
    number: "1",
    title: "We Talk",
    text: "Start with a phone call or meeting. David listens to your situation, answers your questions, and helps you understand what to expect when selling trust-held property.",
  },
  {
    number: "2",
    title: "David Assesses the Property",
    text: "He visits the home, reviews its condition, and gives you an honest picture of what the market will see — including any issues that could affect value or timing.",
  },
  {
    number: "3",
    title: "We Make a Plan Together",
    text: "Based on the property, your timeline, and the trust's requirements, David recommends a clear path forward — including pricing, preparation, and any coordination with your attorney.",
  },
  {
    number: "4",
    title: "David Handles the Details",
    text: "From cleanout coordination to listing, marketing, showings, negotiations, and closing — David manages the process so you can focus on your other fiduciary responsibilities.",
  },
  {
    number: "5",
    title: "You Stay Informed",
    text: "Regular updates keep you, the trust attorney, beneficiaries, and other stakeholders in the loop. Full documentation at every stage supports your fiduciary obligations.",
  },
];

const goodFitSituations = [
  "You have been named successor trustee and are not sure where to start with the property",
  "You need someone who understands both the real estate and the fiduciary responsibilities of trust administration",
  "You want honest, data-driven pricing from someone with appraisal credentials",
  "You are managing the trust from a distance and need a reliable local partner",
  "Your attorney or CPA has recommended getting a professional property assessment",
  "You want one person coordinating the entire real estate process — not a team of strangers",
  "You need documentation that supports defensible pricing decisions for beneficiary distribution",
];

const faqs = [
  {
    question: "How is selling trust property different from a normal home sale?",
    answer: "Trust sales involve fiduciary obligations, potential beneficiary oversight, documentation requirements, and sometimes attorney involvement that standard sales do not. David understands these dynamics and structures the process to account for them — reducing risk and providing the documentation trustees need.",
  },
  {
    question: "I live out of state — can David handle the property locally?",
    answer: "Absolutely. Many trustees manage trust property from a distance. David provides hands-on local coordination — property access, vendor management, preparation, and sale oversight — keeping you informed through regular updates without requiring you to be present.",
  },
  {
    question: "What documentation will I have to support my pricing decisions?",
    answer: "David provides detailed market analysis, comparable sales data, condition assessments, and written pricing rationale. His appraisal background means this documentation meets a higher standard than typical agent opinions — giving you defensible support for fiduciary decisions.",
  },
  {
    question: "Do I need court approval to sell trust property?",
    answer: "In most cases, trust property can be sold without court approval — unlike probate property, which may require court oversight. However, the specific trust terms and Washington State law govern the process. David works closely with trust attorneys to ensure the sale follows proper procedures.",
  },
  {
    question: "What if beneficiaries disagree about the sale?",
    answer: "This is common. David provides objective, data-driven pricing and market analysis that helps move the conversation from emotion to facts. His valuation-informed approach gives all parties a defensible basis for decision-making, which often resolves disagreements more effectively than opinions.",
  },
  {
    question: "Should I invest in repairs before selling trust property?",
    answer: "It depends on the property, the market, and the likely return on investment. Some improvements meaningfully increase value; others are not worth the cost or delay. David evaluates repair decisions with a practical, market-informed perspective so you can make prudent fiduciary decisions.",
  },
];

const jsonLd = articleSchema({
  headline: "Trust Property Guide for Trustees",
  description: "Practical, step-by-step real estate guidance for trustees, successor trustees, and trust administrators managing trust-held property sales throughout Washington State.",
  url: "/trustees",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  about: ["Trustees", "Successor trustees", "Trust administration", "Trust property", "Trust-held real estate"],
});

const Trustees = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What Trustees Need to Know About Selling Trust Property | David Stein"
        description="Step-by-step real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State. Licensed broker and certified appraiser."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Trustees", url: "/trustees" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl" id="trustees-hero-section">
            <div className="mb-5">
              <ListenButton targetId="trustees-hero-section" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Trustees & Successor Trustees
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Managing Trust Property Does Not Have to Be This Hard
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              If you've been named trustee or successor trustee, selling the trust's real estate can feel like one of the most complex responsibilities you face. David Stein works with trustees throughout Washington State to handle the property details — so you can focus on fulfilling your fiduciary duties with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="hover:-light px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Conversation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              Being a Trustee Comes With Real Responsibility
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              As a trustee, you have a fiduciary obligation to act in the best interest of the beneficiaries. When it comes to real estate, that means making informed pricing decisions, documenting your process, and managing the sale prudently — often while navigating family dynamics and emotional complexity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              David understands these responsibilities. He provides the kind of market analysis, property assessment, and documented pricing support that trustees need — along with hands-on coordination so the process runs smoothly from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Does This Sound Like Your Situation?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Many trustees find themselves in one of these situations and don't realize there's someone who handles this kind of work regularly. If any of these sound familiar, that's usually a good time to reach out:
            </p>
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

      {/* How I Help */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How David Helps Trustees
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              David holds both a real estate broker license and a Washington State certified residential appraiser credential — a combination that's uncommon in the industry. For trustees, that means you get someone who can evaluate property value with analytical rigor, provide defensible documentation, <em>and</em> manage the entire sale from first conversation to closing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here is what that actually looks like:
            </p>
            <ul className="space-y-4">
              {howIHelp.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              A Simple, Clear Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              No jargon, no surprises. Just a clear path from the first conversation to closing:
            </p>
            <div className="grid gap-5">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-xl px-7 py-6 flex gap-5 items-start">
                  <span className="text-gold font-serif text-3xl font-semibold leading-none pt-0.5 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Not Sure Where to Start?"
        body="Most trustees are navigating this for the first time. A short conversation with David can help you understand your options and plan next steps — with full confidence in your fiduciary obligations."
        buttonText="Schedule a Conversation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      <RealClientSituations studies={trusteeCaseStudies} background="bg-background" showCTA />

      <PageTestimonials testimonials={trusteeTestimonials} heading="What Trustees Are Saying" />

      {/* Trust Signals */}
      <section className="py-14 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-6 text-center">
              Why Trustees Trust David
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
              {[
                "Licensed Real Estate Broker",
                "Certified Residential Appraiser",
                "20+ Years of Experience",
                "King · Snohomish · Pierce · Kitsap Counties",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground font-medium">
                  <GoldCheck3D size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Good Fit */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              This May Be a Good Fit If…
            </h2>
            <ul className="space-y-4">
              {goodFitSituations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-8">
              Want to learn more? See <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">how the full process works</Link>, explore <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why accurate pricing matters</Link>, or visit the <Link to="/resources" className="text-accent hover:text-gold underline underline-offset-4">Resources</Link> section for trusted attorneys, CPAs, and other professionals.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Trustee FAQs" />

      {/* Educational Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Guides &amp; Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Families</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Appraisal vs. CMA</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate &amp; Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/testimonials" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Client Reviews</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/trustees" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Ready to Talk About Your Situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              It starts with a simple conversation. David will listen to what's going on, answer your questions honestly, and help you see a clear path forward — with full support for your fiduciary responsibilities.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              Whether you're just getting started or already feel behind, there's always a way to move forward from here.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Conversation
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

export default Trustees;
