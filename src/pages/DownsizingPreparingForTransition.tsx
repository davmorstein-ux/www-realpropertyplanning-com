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
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
import wtdwHeroImage from "@/assets/what-to-do-with-the-house-hero-washington.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import ParallaxHero from "@/components/ParallaxHero";

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
    title: "Downsizing Before a Move",
    description:
      "Guidance for seniors and families preparing to move into smaller living arrangements, retirement communities, assisted living, or care environments.",
    href: "/senior-housing-transitions",
    icon: iconAssisted,
  },
  {
    letter: "2",
    title: "Preparing a Home for Sale",
    description:
      "Understanding how organizing, repairs, cleanout, and preparation may affect stress, timing, and future property decisions.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "3",
    title: "Helping a Parent or Loved One Downsize",
    description:
      "Support for adult children and caregivers navigating emotional conversations, resistance, family coordination, and transition planning.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "4",
    title: "Estate Cleanout & Organizing Belongings",
    description:
      "Guidance for inherited homes, probate situations, estate cleanout, donation coordination, and organizing personal belongings.",
    href: "/estate-liquidation",
    icon: iconExecutor,
  },
  {
    letter: "5",
    title: "Understanding What To Keep, Donate, Sell, or Distribute",
    description:
      "Helping families organize belongings thoughtfully while reducing overwhelm and family conflict.",
    href: "/estate-liquidation-learn-more",
    icon: iconBookOpen,
  },
  {
    letter: "6",
    title: "Building the Right Support Team",
    description:
      "Understanding how move managers, estate liquidators, care professionals, real estate professionals, appraisers, and advisors may help simplify the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconDocument,
  },
];

const challenges = [
  { title: "Emotional attachment to belongings", body: "Items often carry decades of memory. Honoring that makes letting go easier." },
  { title: "Feeling overwhelmed", body: "Starting with one drawer, one shelf, or one room is usually enough." },
  { title: "Family disagreements", body: "Clear communication and a written plan typically reduce friction." },
  { title: "Time pressure", body: "Most timelines feel tighter than they are. Small daily progress adds up." },
  { title: "Resistance to change", body: "Slowing down and including the senior in decisions usually softens resistance." },
  { title: "Caregiver exhaustion", body: "Recognizing burnout early prevents bigger problems later." },
  { title: "Fear of making mistakes", body: "Most decisions can be revisited. Perfection is not the goal." },
  { title: "Organizing decades of belongings", body: "Sorting by category — papers, photos, kitchen — usually works better than by room." },
  { title: "Preparing a home while managing emotions", body: "Separating practical tasks from emotional ones helps both move forward." },
  { title: "Coordinating multiple family members", body: "One shared plan and one point person reduce confusion." },
];

const considerations = [
  "Safety and timing",
  "Housing transitions",
  "Property preparation",
  "Organizing belongings",
  "Donation and distribution decisions",
  "Estate cleanout",
  "Family communication",
  "Emotional stress and burnout",
  "Future caregiving needs",
  "Building a trusted support team",
];

const faqs = [
  {
    question: "Where should families begin?",
    answer:
      "Most families start with a single category — papers, photos, or one room — and build momentum from there. Identifying the timeline and any safety concerns early helps shape the plan.",
  },
  {
    question: "How long does downsizing usually take?",
    answer:
      "Timelines vary widely. Some families work over many weeks or months; others compress the process when a move or health event creates urgency. Working in small, consistent sessions usually feels most manageable.",
  },
  {
    question: "What if a parent refuses to downsize?",
    answer:
      "Resistance is common and often about loss of control. Listening, including the senior in decisions, and introducing changes gradually typically opens the door more easily than pressing for action.",
  },
  {
    question: "Should the home be cleaned out before valuation?",
    answer:
      "Not necessarily. A certified appraiser or real estate professional can usually assess a home in its current condition. Cleaning out before listing may help — but valuation often comes first.",
  },
  {
    question: "What belongings should families keep?",
    answer:
      "There is no single right answer. Many families focus on items with strong personal meaning, useful daily objects, and a small number of pieces with financial or historical value.",
  },
  {
    question: "How do families avoid conflict during cleanout?",
    answer:
      "Agreeing in advance on how to handle sentimental items, valuables, and shared belongings — and putting decisions in writing — usually prevents most disagreements.",
  },
  {
    question: "What professionals may help coordinate the process?",
    answer:
      "Senior move managers, professional organizers, estate sale companies, property preparation teams, certified appraisers, and a real estate professional familiar with senior transitions often work together.",
  },
  {
    question: "How does downsizing connect to selling the home?",
    answer:
      "Downsizing often precedes or runs alongside preparing a home for sale. Decisions about belongings, repairs, and cleanout influence timing, presentation, and stress along the way.",
  },
  {
    question: "What if everything feels overwhelming?",
    answer:
      "That is normal. Slowing down, focusing on one decision at a time, and bringing in a small support team usually changes the experience quickly.",
  },
  {
    question: "How do families reduce stress during transitions?",
    answer:
      "Clear communication, realistic timelines, and coordinated guidance from a trusted team tend to replace pressure with a calmer, more manageable rhythm.",
  },
];

const continueJourney = [
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "Guidance for the emotional and logistical changes ahead.", icon: iconHeartHands },
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Compare assisted living, adult family homes, memory care, and more.", icon: iconAssisted },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconExecutor },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
  { href: "/preparing-home-for-sale-during-transition", title: "Preparing a Home for Sale During a Transition", description: "Practical guidance for repairs, cleanout, and readiness.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand the current transition and timing concerns",
  "Create a manageable downsizing plan",
  "Explore housing, property, and caregiving considerations",
  "Build the right support team",
  "Move through the process one step at a time",
];

const jsonLd = articleSchema({
  headline: "Downsizing & Preparing for a Transition",
  description:
    "A calm guided roadmap for seniors and families navigating downsizing, organizing belongings, preparing for a move, housing transitions, and property decisions in Washington.",
  url: "/downsizing-preparing-for-transition",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Downsizing", "Senior transitions", "Estate cleanout", "Move preparation", "Family planning"],
});

const DownsizingPreparingForTransition = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Downsizing & Preparing for a Transition | Real Property Planning"
        description="A calm guided roadmap for seniors and families navigating downsizing, organizing belongings, preparing for a move, housing transitions, and property decisions in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Downsizing & Preparing for a Transition", url: "/downsizing-preparing-for-transition" }]} />
      <Header />
      <main id="main-content">
        {/* WTDW Shared Hero */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <ParallaxHero src={wtdwHeroImage} alt="Quiet Washington street with craftsman homes" />
            <HeroBandTitle as="div">Downsizing & Transition</HeroBandTitle>
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
                Downsizing & Preparing for a Transition
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for seniors and families navigating downsizing,
                organizing belongings, preparing for a move, housing transitions,
                caregiving changes, and important property-related decisions.
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
            "A move to a smaller home or community is being considered",
            "Decades of belongings need to be sorted",
            "The family home needs to be cleared and prepared",
            "You feel overwhelmed by where to begin",
            "You want a calm, step-by-step plan"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Downsizing Is Often Emotional
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Homes hold decades of memory, routine, and family history. Feeling
                overwhelmed or unsure where to begin is normal. This guide is
                designed to make the process calmer and more manageable.
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
                  Most families are unsure where to begin, how long downsizing may take,
                  which professionals may help, or how housing and property decisions
                  overlap.
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

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="downsizing-preparing-for-transition"
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
                  Families preparing for a transition often continue exploring these next steps.
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

export default DownsizingPreparingForTransition;
