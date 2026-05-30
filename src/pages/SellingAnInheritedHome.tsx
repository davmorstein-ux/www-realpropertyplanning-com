import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
import wtdwHeroImage from "@/assets/what-to-do-with-the-house-hero-washington.webp";
import HeroBandTitle from "@/components/HeroBandTitle";

interface Pathway {
  letter: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

const pathways: Pathway[] = [
  {
    letter: "1",
    title: "Understanding Probate & Legal Authority",
    description:
      "Learn how probate, trusts, executors, trustees, and legal authority may affect inherited property decisions and timelines.",
    href: "/estate-probate-inherited-property",
    icon: iconDocument,
  },
  {
    letter: "2",
    title: "Understanding the Home's Value",
    description:
      "Guidance involving appraisals, date-of-death valuation, market analysis, property condition, and fair market value considerations.",
    href: "/date-of-death-valuation-property-appraisals",
    icon: iconBookOpen,
  },
  {
    letter: "3",
    title: "Deciding Whether To Sell, Keep, or Rent the Home",
    description:
      "Explore family goals, occupancy concerns, carrying costs, timing considerations, and future planning options.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "4",
    title: "Preparing the Home for Sale",
    description:
      "Guidance involving repairs, cleanout, downsizing, organization, inherited belongings, and market preparation decisions.",
    href: "/preparing-home-for-sale-during-transition",
    icon: iconHeartHands,
  },
  {
    letter: "5",
    title: "Coordinating With Family Members & Heirs",
    description:
      "Support for communication, expectations, documentation, timelines, and reducing conflict during inherited property decisions.",
    href: "/executor-responsibilities-first-steps",
    icon: iconExecutor,
  },
  {
    letter: "6",
    title: "Building the Right Professional Team",
    description:
      "Understanding how attorneys, CPAs, appraisers, real estate professionals, estate liquidators, and advisors may help guide the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconAssisted,
  },
];

const challenges = [
  { title: "Emotional attachment to the home", body: "Memories live in the walls. Honoring that attachment is part of moving forward." },
  { title: "Family disagreements", body: "Shared expectations and a clear written plan typically reduce friction." },
  { title: "Uncertainty about legal authority", body: "Knowing who can make decisions — and when — usually clarifies the path." },
  { title: "Occupancy concerns", body: "When someone still lives in the home, planning respects both the resident and the property." },
  { title: "Feeling overwhelmed", body: "One decision at a time, in a clear order, usually replaces overwhelm with progress." },
  { title: "Deciding whether repairs are worthwhile", body: "Not every repair adds value. A professional opinion clarifies what truly matters." },
  { title: "Organizing belongings", body: "Working room by room, in small sessions, usually feels more manageable." },
  { title: "Time pressure", body: "Most timelines are more flexible than they first appear. A short pause to plan often saves months." },
  { title: "Property maintenance and security", body: "Vacant homes need active care, insurance review, and a clear monitoring plan." },
  { title: "Fear of making expensive mistakes", body: "Most costly mistakes are avoidable with one good conversation early." },
];

const considerations = [
  "Legal authority",
  "Probate coordination",
  "Property valuation",
  "Repairs and preparation",
  "Occupancy concerns",
  "Family communication",
  "Timing and market conditions",
  "Tax and estate considerations",
  "Downsizing and cleanout",
  "Building a trusted support team",
];

const mistakes = [
  { title: "Making rushed property decisions", body: "Quick decisions made under stress often cost more than a short pause to plan." },
  { title: "Guessing the home's value", body: "A certified appraisal usually replaces guesswork with defensible clarity." },
  { title: "Ignoring probate or legal coordination", body: "Authority and process steps usually need to be clear before listing." },
  { title: "Spending too much on unnecessary repairs", body: "Many updates do not return their cost. Prioritization is essential." },
  { title: "Delaying communication between heirs", body: "Silence often becomes the source of the conflict families most want to avoid." },
  { title: "Ignoring insurance and maintenance issues", body: "Vacant property coverage, security, and basic upkeep protect the eventual sale." },
  { title: "Waiting too long to seek guidance", body: "A short conversation early usually prevents bigger problems later." },
  { title: "Trying to handle everything alone", body: "A small, coordinated team typically reduces stress and protects the outcome." },
];

const faqs = [
  {
    question: "Can we sell the home before probate?",
    answer:
      "It depends on how title is held and the state's process. Many estates require some level of probate authority before a sale can close. Families often consult an attorney to confirm.",
  },
  {
    question: "What if the property is in a trust?",
    answer:
      "Trust property is often handled by a trustee under the trust's terms, and probate may not be required. A qualified attorney can help clarify the trustee's authority.",
  },
  {
    question: "Do we need an appraisal?",
    answer:
      "A certified appraisal often supports estate filings, family decisions, and pricing — and may be required for tax or legal purposes depending on the situation.",
  },
  {
    question: "What is a date-of-death valuation?",
    answer:
      "It is a property valuation as of the owner's date of passing, frequently used for estate, tax, and basis purposes. A certified appraiser typically prepares it.",
  },
  {
    question: "Should we repair the home before selling?",
    answer:
      "Sometimes, but not always. Safety, water, roof, and major mechanical issues tend to matter most. A real estate professional can help prioritize what is worth doing.",
  },
  {
    question: "What if someone still lives in the property?",
    answer:
      "Occupancy affects timing, preparation, and marketing. Plans should respect the resident's needs while protecting the property and the eventual sale.",
  },
  {
    question: "What if heirs disagree?",
    answer:
      "Neutral information — a certified valuation, a written plan, and clear roles — often helps families find common ground. An attorney or mediator may also help.",
  },
  {
    question: "What professionals may help guide the process?",
    answer:
      "Families often work with an attorney, CPA, certified appraiser, real estate professional, estate liquidator, and — when relevant — a senior move manager.",
  },
  {
    question: "How long does the process usually take?",
    answer:
      "Timelines vary by state, the estate, occupancy, and preparation needs. Many families move from initial conversation to sale over several months, sometimes longer.",
  },
  {
    question: "What if everything feels overwhelming?",
    answer:
      "That is normal. Slowing down, focusing on one decision, and starting with a single conversation often changes the experience quickly.",
  },
];

const continueJourney = [
  { href: "/estate-probate-inherited-property", title: "Managing an Estate, Probate, or Inherited Property", description: "A guided overview for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation & Property Appraisals", description: "Understand how valuation supports estate decisions.", icon: iconBookOpen },
  { href: "/preparing-home-for-sale-during-transition", title: "Preparing a Home for Sale During a Transition", description: "Practical guidance for repairs, cleanout, and readiness.", icon: iconHeartHands },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconAssisted },
];

const nextSteps = [
  "Understand who has authority to make decisions",
  "Learn the property's approximate value and condition",
  "Explore selling, keeping, or rental considerations",
  "Build the right professional team",
  "Move through the process one step at a time",
];

const jsonLd = articleSchema({
  headline: "Selling an Inherited Home",
  description:
    "A calm guided roadmap for heirs, executors, trustees, and families navigating inherited property decisions, probate, valuation, preparation, and major life transitions in Washington.",
  url: "/selling-an-inherited-home",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Inherited property", "Probate", "Estate sales", "Property valuation", "Family transitions"],
});

const SellingAnInheritedHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Selling an Inherited Home | Real Property Planning"
        description="A calm guided roadmap for heirs, executors, trustees, and families navigating inherited property decisions, probate, valuation, and preparation in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Selling an Inherited Home", url: "/selling-an-inherited-home" }]} />
      <Header />
      <main id="main-content">
        {/* WTDW Shared Hero */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <div
  className="rpp-hero"
  role="img"
  aria-label="Quiet Washington street with craftsman homes"
  style={{ backgroundImage: `url(${wtdwHeroImage})`, height: "50vh" }}
/>
            <HeroBandTitle as="div">Selling Inherited Home</HeroBandTitle>
          </div>
        </section>
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Guided Roadmap
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                Selling an Inherited Home
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for heirs, executors, trustees, and families
                navigating inherited property decisions, probate questions, valuation
                concerns, property preparation, and major life transitions.
              </p>
              <a href="#pathways">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Start Here
                </Button>
              </a>
            </div>
          </div>
        </section>

        <JourneyOrientation
          tone="probate"
          items={[
            "You inherited a home and are unsure what to do next",
            "The property is going through probate or trust administration",
            "Multiple heirs are involved in the decision",
            "You want to understand taxes, basis, and timing",
            "You need a calm, organized roadmap to a sale"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Feel Overwhelmed by Inherited Property Decisions
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Inherited homes often involve emotional attachment, family
                coordination, legal questions, and uncertainty about where to begin.
                This guide is designed to simplify the process and provide a calmer
                path forward.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                {" "}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                {" "}
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                {" "}
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_2px_8px_-4px_rgba(27,43,75,0.10)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className="md:w-44 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-5 md:p-6 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl text-gold font-bold leading-none">
                        {p.letter}
                      </span>
                      <span className="text-cream uppercase tracking-widest text-xs font-bold">
                        Pathway {p.letter}
                      </span>
                    </div>
                    <div className="flex-1 p-5 md:p-6 flex items-center gap-5">
                      <img
                        src={p.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0 hidden sm:block"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-navy text-base md:text-lg leading-relaxed mb-2">
                          {p.description}
                        </p>
                        <span className="gold-cta mt-auto">
                          Learn More
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  You Are Not Alone
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Challenges Families Face
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what's hard often makes it easier to move forward.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {challenges.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO CONSIDER */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Educational Compass
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Many People Don't Know What Questions to Ask
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Most families are unsure how probate affects timing, when valuation
                  matters, or how preparation decisions connect to value.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_2px_8px_-4px_rgba(27,43,75,0.10)]">
                <p className="text-navy font-serif text-xl md:text-2xl font-semibold mb-5">
                  Families Often Need to Consider:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {considerations.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-cream border border-gold/20 rounded-xl px-4 py-3 min-h-[60px]"
                    >
                      <CheckCircle2 className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
                      <span className="text-navy font-semibold text-base md:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Avoid These Pitfalls
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what often goes wrong makes it easier to plan well.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div
                    key={m.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {m.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="selling-an-inherited-home"
        />

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Keep Going
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Continue Your Journey
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Families selling inherited property often continue exploring these next steps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all flex flex-col"
                  >
                    <img src={c.icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain mb-4" loading="lazy" />
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-4 flex-1">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE NEXT STEPS */}
        <section className="py-10 lg:py-14 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Simple Next Steps
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  A Calm, Clear Action Plan
                </h2>
              </div>
              <ol className="space-y-4">
                {nextSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-5 bg-white border border-gold/25 rounded-2xl p-5 shadow-[0_4px_14px_-8px_rgba(27,43,75,0.2)]"
                  >
                    <span className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-[hsl(var(--gold-dark))] text-white font-serif text-2xl font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-navy font-semibold text-lg md:text-xl leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Want to talk it through first?
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-7">
                A calm, no-pressure conversation can often clarify the very next step.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <img src={iconPhone} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain" loading="lazy" />
                  Start the Conversation
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

export default SellingAnInheritedHome;
