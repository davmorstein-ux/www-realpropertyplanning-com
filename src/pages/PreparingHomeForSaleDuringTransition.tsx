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
    title: "Understanding What Preparation Actually Matters",
    description:
      "Learn how families often evaluate repairs, updates, cleanout, safety issues, and market readiness before selling.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "2",
    title: "Deciding Whether Repairs Are Worth Doing",
    description:
      "Guidance for understanding when repairs, updates, or improvements may help — and when they may create unnecessary stress or expense.",
    href: "/insights-guidance/repairs-before-selling-probate-home-washington",
    icon: iconDocument,
  },
  {
    letter: "3",
    title: "Cleaning Out & Organizing the Home",
    description:
      "Support for organizing belongings, reducing overwhelm, estate cleanout, donations, and preparing the property gradually.",
    href: "/downsizing-preparing-for-transition",
    icon: iconHeartHands,
  },
  {
    letter: "4",
    title: "Preparing an Inherited or Estate Property",
    description:
      "Guidance involving probate, inherited homes, executor coordination, occupancy concerns, valuation, and family communication.",
    href: "/estate-probate-inherited-property",
    icon: iconExecutor,
  },
  {
    letter: "5",
    title: "Understanding As-Is vs Prepared Sales",
    description:
      "Learn how different preparation levels may affect timing, stress, convenience, and marketability.",
    href: "/insights-guidance/sell-inherited-house-as-is-or-fix",
    icon: iconBookOpen,
  },
  {
    letter: "6",
    title: "Building the Right Support Team",
    description:
      "Understanding how real estate professionals, appraisers, estate liquidators, move managers, contractors, attorneys, and advisors may help simplify the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconAssisted,
  },
];

const challenges = [
  { title: "Emotional attachment to the home", body: "Decades of memory live in the walls. That attachment is real and worth honoring." },
  { title: "Feeling overwhelmed by belongings", body: "Working in small sessions, one room or category at a time, usually feels manageable." },
  { title: "Family disagreements", body: "A written plan and shared expectations typically reduce friction." },
  { title: "Deciding what repairs are worthwhile", body: "Not every repair adds value. A professional opinion clarifies what truly matters." },
  { title: "Time pressure", body: "Most timelines are more flexible than they first appear. A pause to plan often saves time later." },
  { title: "Caregiver stress", body: "Recognizing burnout early prevents larger problems for the family and the property." },
  { title: "Uncertainty about property value", body: "A certified appraisal or market analysis usually replaces guessing with clarity." },
  { title: "Occupancy concerns", body: "Vacant or partially occupied homes need active care, insurance, and a clear plan." },
  { title: "Coordinating inherited property decisions", body: "Authority, valuation, and family alignment usually come before preparation begins." },
  { title: "Fear of making costly mistakes", body: "Most mistakes are avoidable with one good conversation before spending money." },
];

const considerations = [
  "Property condition",
  "Safety concerns",
  "Repairs and updates",
  "Cleanout and organization",
  "Downsizing support",
  "Valuation and market conditions",
  "Family communication",
  "Occupancy issues",
  "Timing considerations",
  "Building a trusted support team",
];

const mistakes = [
  { title: "Spending too much on unnecessary repairs", body: "Many updates do not return their cost. A professional opinion helps prioritize." },
  { title: "Delaying decisions because the process feels overwhelming", body: "Small, steady steps usually move things forward faster than waiting for clarity." },
  { title: "Throwing away important belongings too quickly", body: "Sentimental and valuable items deserve a careful first pass before disposal." },
  { title: "Ignoring safety or maintenance concerns", body: "Roof, water, and security issues compound quickly when left unaddressed." },
  { title: "Guessing the property's value", body: "A certified appraisal protects family decisions and supports defensible choices." },
  { title: "Failing to coordinate family communication", body: "Silence often becomes the source of the conflict families most want to avoid." },
  { title: "Waiting too long to seek professional guidance", body: "A short conversation early usually prevents bigger problems later." },
  { title: "Trying to handle everything alone", body: "A small, coordinated team typically reduces stress and protects the outcome." },
];

const faqs = [
  {
    question: "Should we clean everything out first?",
    answer:
      "Not always. Valuation and a professional walk-through can usually happen with belongings still in place. Cleanout often happens in stages alongside other preparation.",
  },
  {
    question: "Which repairs are usually worth doing?",
    answer:
      "Safety, water, roof, and major mechanical issues tend to matter most. Cosmetic upgrades vary by market. A real estate professional familiar with senior and estate property can help prioritize.",
  },
  {
    question: "What if the home is outdated?",
    answer:
      "Many homes sell well as-is, especially in strong markets or when buyers are looking for projects. Updating is rarely all-or-nothing.",
  },
  {
    question: "Should we sell as-is?",
    answer:
      "It depends on the property, the family's energy, and the timeline. As-is can simplify the process; targeted preparation may improve the outcome. A short consult usually clarifies which path fits.",
  },
  {
    question: "What if family members disagree?",
    answer:
      "Neutral information — a certified valuation, a written preparation plan, and clear roles — typically helps families find common ground.",
  },
  {
    question: "What if someone is still living in the home?",
    answer:
      "Occupancy affects timing, preparation, and marketing. The plan should always respect the resident's needs while protecting the property and the eventual sale.",
  },
  {
    question: "Should valuation happen before repairs?",
    answer:
      "Often, yes. Valuation in the home's current condition usually informs which repairs are worth doing — and which are not.",
  },
  {
    question: "What professionals may help coordinate the process?",
    answer:
      "A real estate professional, certified appraiser, senior move manager, estate liquidator, trusted contractor, and — when applicable — an attorney and CPA often work together.",
  },
  {
    question: "How do families reduce stress during preparation?",
    answer:
      "Realistic timelines, one decision at a time, and a small trusted team usually replace pressure with a calmer rhythm.",
  },
  {
    question: "What if everything feels overwhelming?",
    answer:
      "That is normal. Slowing down, focusing on one room or one category, and starting with a single conversation often changes the experience quickly.",
  },
];

const continueJourney = [
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconExecutor },
  { href: "/downsizing-preparing-for-transition", title: "Downsizing & Preparing for a Transition", description: "A calm, practical roadmap for organizing and moving.", icon: iconHeartHands },
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation & Property Appraisals", description: "Understand how valuation supports estate decisions.", icon: iconDocument },
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand the property's condition and transition needs",
  "Decide what preparation may actually be worthwhile",
  "Organize belongings and reduce overwhelm gradually",
  "Build the right support team",
  "Move through the process one step at a time",
];

const jsonLd = articleSchema({
  headline: "Preparing a Home for Sale During a Transition",
  description:
    "A calm guided roadmap for families and seniors preparing a home for sale during downsizing, senior transitions, probate, inherited property, and major life changes in Washington.",
  url: "/preparing-home-for-sale-during-transition",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Home preparation", "Senior transitions", "Estate property", "Downsizing", "Inherited property"],
});

const PreparingHomeForSaleDuringTransition = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Preparing a Home for Sale During a Transition | Real Property Planning"
        description="A calm guided roadmap for families and seniors preparing a home for sale during downsizing, senior transitions, probate, inherited property, and major life changes in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Preparing a Home for Sale During a Transition", url: "/preparing-home-for-sale-during-transition" }]} />
      <Header />
      <main id="main-content">
        {/* WTDW Shared Hero */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={wtdwHeroImage}
              alt="Quiet Washington street with craftsman homes"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle as="div">Preparing For Sale</HeroBandTitle>
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
                Preparing a Home for Sale During a Transition
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for families and seniors preparing a home for sale
                during downsizing, senior transitions, probate situations, inherited
                property decisions, and major life changes.
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
          tone="transition"
          items={[
            "A home needs to be prepared for sale during a major life change",
            "The property is part of an estate, probate, or downsizing move",
            "You are unsure which repairs are worth doing",
            "You need help coordinating cleanout, repairs, and staging",
            "You are managing the process from out of state"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Feel Overwhelmed by the Process
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Preparing a longtime family home often involves emotional decisions,
                belongings, repairs, and timing concerns at the same time. This guide
                is designed to help families avoid expensive mistakes and move forward
                more calmly.
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
                  Most families are unsure how much preparation is necessary, which
                  repairs matter, or how valuation connects to the decisions ahead.
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
          id="preparing-home-for-sale-during-transition"
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
                  Families preparing a home for sale often continue exploring these next steps.
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

export default PreparingHomeForSaleDuringTransition;
