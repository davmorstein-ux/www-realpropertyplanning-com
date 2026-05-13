import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2, AlertTriangle } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/what-to-do-with-the-house-hero-washington.webp";

interface Decision {
  letter: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

const decisions: Decision[] = [
  {
    letter: "1",
    title: "Should We Sell the Home?",
    description:
      "Understand when selling may make sense, what timing issues matter, and what should be considered before listing.",
    href: "/guides/inherited-house-washington",
    icon: iconHome,
  },
  {
    letter: "2",
    title: "Should We Keep the Home?",
    description:
      "Explore family use, future occupancy, estate planning, carrying costs, maintenance, and long-term responsibilities.",
    href: "/estate-probate-inherited-property",
    icon: iconExecutor,
  },
  {
    letter: "3",
    title: "Should We Rent the Home?",
    description:
      "Consider rental income, property management, repairs, legal obligations, taxes, and family agreement.",
    href: "/guides/inherited-house-washington",
    icon: iconHome,
  },
  {
    letter: "4",
    title: "Should We Transfer Ownership?",
    description:
      "Learn why legal, tax, estate, and family considerations should be reviewed before transferring title.",
    href: "/guides/who-has-authority-sell-probate-property",
    icon: iconDocument,
  },
  {
    letter: "5",
    title: "Should We Clean Out or Repair First?",
    description:
      "Understand how cleanout, repairs, safety, and presentation may affect value, timing, and family stress.",
    href: "/guides/repairs-before-selling-probate-home-washington",
    icon: iconHome,
  },
  {
    letter: "6",
    title: "Do We Need an Appraisal or Valuation?",
    description:
      "Learn when families may need a date-of-death valuation, estate valuation, market analysis, or appraisal guidance.",
    href: "/real-estate-appraiser",
    icon: iconDocument,
  },
];

const faqs = [
  {
    question: "Who has authority to decide what happens to the house?",
    answer:
      "Authority depends on how title is held and the stage of any estate process. A surviving spouse, trustee, personal representative, or court-appointed executor may have authority. A qualified attorney can help clarify who can act, when, and on what terms.",
  },
  {
    question: "Should we get the home valued before making decisions?",
    answer:
      "In most situations, yes. Families often consult a qualified real estate professional or appraiser to understand current value, condition, and a realistic price range. Knowing the numbers makes every other decision easier.",
  },
  {
    question: "Is it better to sell the home as-is or make repairs?",
    answer:
      "The right answer depends on condition, market, timing, and family resources. Some homes sell well as-is; others benefit from light updates. A walk-through with an experienced agent can help compare options before spending money.",
  },
  {
    question: "What if family members disagree?",
    answer:
      "Disagreements are common. Neutral information — a written valuation, a clear timeline, or a calm professional conversation — usually helps. When needed, an attorney can clarify legal rights and decision-making authority.",
  },
  {
    question: "What if someone is living in the home?",
    answer:
      "Occupancy adds legal, emotional, and practical considerations. Families often consult an attorney before asking anyone to move, and explore options that respect both the resident and the estate's needs.",
  },
  {
    question: "Should we clean everything out before speaking with professionals?",
    answer:
      "Usually not. Important documents, valuables, or items with sentimental or estate value can be lost. Many professionals recommend pausing, documenting what's there, and getting guidance before a major cleanout.",
  },
  {
    question: "What carrying costs should we consider?",
    answer:
      "Mortgage, insurance, utilities, property taxes, HOA dues, maintenance, and security all continue while a home sits. These costs add up and often influence timing decisions.",
  },
  {
    question: "What tax or estate issues might matter?",
    answer:
      "Stepped-up basis, capital gains, estate tax thresholds, and trust or probate rules can all affect outcomes. A qualified CPA or tax attorney can help clarify what applies to your specific situation.",
  },
  {
    question: "What professionals should be involved before deciding?",
    answer:
      "Most families benefit from a small team: an attorney (probate, estate, or elder law), a real estate professional familiar with transitions, and often a CPA. Additional support may include an appraiser, move manager, or estate liquidator.",
  },
];

const mistakes = [
  "Making decisions before understanding authority",
  "Guessing the home's value",
  "Spending too much on repairs without guidance",
  "Emptying the home too quickly without documenting items",
  "Letting family conflict delay important steps",
  "Ignoring carrying costs",
  "Forgetting insurance, security, and maintenance",
  "Waiting too long to involve professionals",
];

const checklist = [
  "Confirm who has authority to make decisions",
  "Understand the property's current condition",
  "Estimate value before and after repairs",
  "Review carrying costs",
  "Discuss family goals and concerns",
  "Consider tax, legal, and estate issues",
  "Understand timing needs",
  "Build the right professional team",
];

const continueJourney = [
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation", description: "Learn when an estate valuation or appraisal may be needed.", icon: iconDocument },
  { href: "/preparing-home-for-sale-during-transition", title: "Preparing a Home for Sale", description: "Practical guidance for repairs, cleanout, and readiness.", icon: iconHome },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconExecutor },
  { href: "/downsizing-preparing-for-transition", title: "Downsizing & Preparing for a Transition", description: "A calm, practical roadmap for organizing and moving.", icon: iconHeartHands },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand who has authority to make decisions",
  "Learn the home's approximate value and condition",
  "Compare selling, keeping, renting, or transferring",
  "Consider legal, tax, family, and timing issues",
  "Build the right team before making major decisions",
];

const jsonLd = articleSchema({
  headline: "What To Do With the House",
  description:
    "A guided decision roadmap for families, seniors, executors, trustees, and heirs facing decisions about a home during a senior transition, estate, probate, or inherited property situation.",
  url: "/what-to-do-with-the-house",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Inherited home", "Estate property", "Probate", "Senior transitions", "Property decisions"],
});

const WhatToDoWithTheHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What To Do With the House | Real Property Planning"
        description="A calm decision roadmap for families, seniors, executors, and heirs deciding whether to sell, keep, rent, transfer, clean out, repair, or appraise a home in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "What To Do With the House", url: "/what-to-do-with-the-house" }]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Decision Roadmap
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                What To Do With the House
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for families, seniors, executors, trustees, and heirs
                facing important decisions about a home during a senior transition,
                estate matter, probate situation, or inherited property process.
              </p>
              <a href="#decisions">
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
            "Your family is deciding whether to sell or keep a home",
            "You are unsure whether repairs are worthwhile",
            "The property may be inherited or part of an estate",
            "You feel overwhelmed by the preparation process",
            "Family members have different opinions",
            "You want an unbiased valuation before deciding"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                You Do Not Have to Decide Everything Today
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Many families feel pressure to make quick decisions about a home before
                they fully understand their options. This guide is designed to help you
                slow down, understand the major choices, and consider what information
                may be needed before making a decision.
              </p>
            </div>
          </div>
        </section>

        {/* DECISIONS */}
        <section id="decisions" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Choose a Decision
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                What Decision Are You Facing?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the question closest to where you are. Each opens a calm,
                guided overview.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {decisions.map((d) => (
                <Link
                  key={d.letter}
                  to={d.href}
                  className="group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className="md:w-44 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-5 md:p-6 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl text-gold font-bold leading-none">
                        {d.letter}
                      </span>
                      <span className="text-cream uppercase tracking-widest text-xs font-bold">
                        Decision {d.letter}
                      </span>
                    </div>
                    <div className="flex-1 p-5 md:p-6 flex items-center gap-5">
                      <img
                        src={d.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0 hidden sm:block"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                          {d.title}
                        </h3>
                        <p className="text-navy text-base md:text-lg leading-relaxed mb-2">
                          {d.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                          Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Do Not Know to Ask"
          eyebrow="Common Questions"
          id="what-to-do-with-the-house"
        />

        {/* MISTAKES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <AlertTriangle className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Avoid These
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Knowing what to watch for helps families protect time, money, and
                  relationships.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div
                    key={m}
                    className="flex items-start gap-3 bg-white border-2 border-gold/25 rounded-2xl p-5 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <AlertTriangle className="w-6 h-6 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-navy font-semibold text-base md:text-lg leading-snug">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Decision Checklist
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Before Deciding What To Do With the House
                </h2>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {checklist.map((item) => (
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
                  People making decisions about a home often need help understanding
                  these next steps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all flex flex-col"
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

export default WhatToDoWithTheHouse;
