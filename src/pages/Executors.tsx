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

const executorTestimonials = [
  {
    text: "David brought clarity, professionalism, and calm guidance during a very difficult property transition. His valuation perspective and market knowledge were incredibly helpful.",
    attribution: "Margaret T.",
    context: "Executor · Estate property in King County",
  },
  {
    text: "I was completely overwhelmed as a first-time executor. David walked me through every step, handled the cleanout and repairs, and made the entire process feel manageable. I could not have done it without him.",
    attribution: "Robert K.",
    context: "Personal representative · Inherited home in Snohomish County",
  },
  {
    text: "David gave us honest, straightforward pricing when other agents were telling us what we wanted to hear. His appraisal background made all the difference — we knew the number was real.",
    attribution: "Susan M.",
    context: "Executor · Probate property sale",
  },
];

const executorCaseStudies = [
  {
    title: "Out-of-State Executor With a Full House",
    situation: "An executor living in California was named personal representative for her father's estate in Snohomish County. The home had not been updated in 30 years and was filled with decades of belongings. She had no local contacts and no idea where to start.",
    approach: "David assessed the property, coordinated a professional cleanout team, managed minor repairs and landscaping, and handled the entire listing and sale process — providing regular photo updates and phone calls so she never had to fly out.",
    outcome: "The home sold within three weeks of listing at a price that exceeded the executor's expectations. She later referred David to her estate attorney for future client situations.",
  },
  {
    title: "Siblings Who Disagreed on Pricing",
    situation: "Three adult children inherited their mother's home in King County. One wanted to sell quickly, one believed the home was worth significantly more than market data supported, and one was not sure what to do.",
    approach: "David presented a detailed property assessment and comparable sales analysis — drawing on his appraisal background to explain how condition, location, and market timing affected realistic value. He met with all three siblings to answer questions and address concerns.",
    outcome: "The family agreed on a pricing strategy grounded in data rather than emotion. The home sold at a fair price with minimal conflict, and all three siblings felt the process was handled professionally.",
  },
  {
    title: "Estate Property With Significant Deferred Maintenance",
    situation: "A trustee needed to sell a Pierce County home that had a failing roof, outdated electrical, and years of deferred maintenance. Two previous agents had declined the listing because of the property's condition.",
    approach: "David evaluated each issue, estimated the cost impact on market value, and recommended a targeted preparation strategy — addressing safety concerns and cosmetic items that would affect buyer perception while advising against costly renovations that would not deliver meaningful return.",
    outcome: "The property was priced accurately for its condition, attracted multiple offers from investors and renovation buyers, and closed smoothly. The trustee fulfilled their fiduciary obligation with documented market support.",
  },
];

const commonSituations = [
  "A parent or loved one has passed away, and you have been named executor or personal representative",
  "You are managing an estate from out of state and need local help with the property",
  "The home has years of deferred maintenance, and you are unsure whether to repair or sell as-is",
  "The house is full of personal belongings, and you do not know where to start",
  "Multiple family members have different opinions about what to do with the property",
  "You need to satisfy a fiduciary obligation but have never sold a home before",
  "The estate attorney needs market data or a property assessment to move things forward",
  "You want honest pricing — not an inflated number designed to win a listing",
];

const howIHelp = [
  "Evaluate the property's true condition and realistic market value",
  "Advise on whether to invest in repairs or sell as-is based on return on investment",
  "Coordinate cleanout, preparation, and vendor management so you do not have to",
  "Price the home using appraiser-level analysis, not guesswork",
  "Manage the listing, marketing, showings, and negotiations on your behalf",
  "Communicate clearly with you, the attorney, and other stakeholders throughout",
];

const processSteps = [
  {
    number: "1",
    title: "We Talk",
    text: "Start with a phone call or meeting. David listens to your situation, answers your questions, and helps you understand what to expect.",
  },
  {
    number: "2",
    title: "David Assesses the Property",
    text: "He visits the home, reviews its condition, and gives you an honest picture of what the market will see — including any issues that could affect value or timing.",
  },
  {
    number: "3",
    title: "We Make a Plan Together",
    text: "Based on the property, your timeline, and the estate's needs, David recommends a clear path forward — including pricing, preparation, and any coordination with your attorney.",
  },
  {
    number: "4",
    title: "David Handles the Details",
    text: "From cleanout coordination to listing, marketing, showings, negotiations, and closing — David manages the process so you can focus on your other responsibilities.",
  },
  {
    number: "5",
    title: "You Stay Informed",
    text: "Regular updates keep you, the attorney, and other stakeholders in the loop. No surprises — just clear communication from start to finish.",
  },
];

const goodFitSituations = [
  "You have been named executor or personal representative and are not sure where to start with the property",
  "You need someone who understands both the real estate and the emotional side of estate transitions",
  "You want honest, data-driven pricing from someone with appraisal credentials",
  "You are managing the estate from a distance and need a reliable local partner",
  "Your attorney or CPA has recommended getting a professional property assessment",
  "You want one person coordinating the entire real estate process — not a team of strangers",
];

const faqs = [
  {
    question: "What is the first thing I should do as executor when there is real estate involved?",
    answer: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and likely market value. David can handle the property evaluation while you work with the estate attorney on the legal requirements.",
  },
  {
    question: "I live out of state — can David handle the property locally?",
    answer: "Absolutely. Many executors and trustees manage property from a distance. David provides hands-on local coordination — property access, vendor management, inspections, preparation, and sale oversight — keeping you informed through regular updates without requiring you to be present.",
  },
  {
    question: "Should I invest in repairs before selling the estate property?",
    answer: "It depends on the property, the market, and the likely return on investment. Some improvements meaningfully increase value; others are not worth the cost or delay. David evaluates repair decisions with a practical, market-informed perspective so you make the right call.",
  },
  {
    question: "How is selling estate property different from a normal home sale?",
    answer: "Estate sales often involve legal timelines, multiple decision-makers, deferred maintenance, personal property cleanout, and emotional complexity. David understands these dynamics and structures the process to account for them — reducing stress and avoiding costly missteps.",
  },
  {
    question: "What if I am a first-time executor and have no idea where to start?",
    answer: "That is completely normal — most executors are handling this for the first time. David walks you through the real estate side step by step, explains what to expect at each stage, and handles the coordination so you can focus on the other responsibilities of estate administration.",
  },
  {
    question: "How does David handle situations where the property has significant deferred maintenance?",
    answer: "David assesses the property's condition honestly and helps you understand which issues affect value, which need to be disclosed, and which are worth addressing before listing. His appraisal experience means he can estimate the impact of condition issues on market value — giving you data to make informed decisions rather than guesses.",
  },
];

const jsonLd = articleSchema({
  headline: "Estate Property Guide for Executors & Trustees",
  description: "Practical, step-by-step real estate guidance for executors, personal representatives, trustees, and families managing inherited property and estate home sales throughout Washington State.",
  url: "/executors",
  datePublished: "2025-01-15",
  dateModified: "2026-03-23",
  about: ["Executors", "Trustees", "Personal representatives", "Estate property", "Inherited home sales"],
});

const Executors = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Help for Executors Selling Estate Property | David Stein | Washington State"
        description="David Stein provides step-by-step guidance for executors and personal representatives selling inherited homes and estate property throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Executors & Personal Representatives
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              You Do Not Have to Figure This Out Alone
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Selling a loved one's home during estate administration is one of the hardest things you will do. David Stein works with executors throughout Washington State to handle the real estate details — so you can focus on the people and responsibilities that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Conversation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
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
              Most Executors Are Doing This for the First Time
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              There is no training manual for being an executor. You are managing legal paperwork, coordinating with family, and making decisions about a property you may not have visited in years — all while processing loss.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              That is exactly why David does what he does. He takes the real estate burden off your plate, explains each step clearly, and handles the coordination so you do not have to become a real estate expert overnight. You just need someone in your corner who already is one.
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
              If any of these feel familiar, you are in the right place:
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
              How David Helps Executors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              David is both a licensed real estate broker and a Washington State certified residential appraiser with over 20 years of experience. That combination means you get someone who can evaluate property value with analytical precision <em>and</em> manage the entire sale process from start to finish.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here is what that looks like in practice:
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
              No surprises. No jargon. Just a straightforward path from your first conversation to closing:
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
        body="Most executors are doing this for the first time. A short conversation with David can help you understand your options and plan next steps."
        buttonText="Schedule a Conversation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      <RealClientSituations studies={executorCaseStudies} background="bg-background" />

      <PageTestimonials testimonials={executorTestimonials} heading="What Executors Are Saying" />

      {/* Trust Signals */}
      <section className="py-14 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-6 text-center">
              Why Executors Trust David
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

      <PageFAQ faqs={faqs} heading="Executor & Trustee FAQs" />

      <RelatedServices currentPath="/executors" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Ready to Talk About Your Situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              Start with a simple conversation. David will listen, answer your questions, and outline practical next steps — no pressure, no obligation.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              Whether you are just beginning or already feel behind, there is always a clear path forward.
            </p>
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
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

export default Executors;
