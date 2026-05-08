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

import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

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
    title: "Aging in Place",
    description:
      "Guidance for seniors wishing to remain at home while exploring support services, safety concerns, caregiving options, and future planning.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "2",
    title: "Downsizing",
    description:
      "Understanding the emotional and practical challenges of reducing belongings, preparing a move, and simplifying living arrangements.",
    href: "/senior-housing-transitions",
    icon: iconHome,
  },
  {
    letter: "3",
    title: "Transitioning to Assisted Living or Care",
    description:
      "Guidance for families exploring assisted living, adult family homes, memory care, or increased support needs.",
    href: "/understanding-housing-care-options",
    icon: iconAssisted,
  },
  {
    letter: "4",
    title: "Caring for a Parent or Loved One",
    description:
      "Support for adult children and caregivers managing caregiving stress, difficult conversations, safety concerns, and planning responsibilities.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "5",
    title: "Managing a Home During a Transition",
    description:
      "Guidance for families trying to decide whether to keep, sell, rent, transfer, or prepare a property during a major life transition.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "6",
    title: "Planning Ahead Before a Crisis",
    description:
      "Understanding how early planning may reduce stress, confusion, and rushed decisions later.",
    href: "/power-of-attorney",
    icon: iconDocument,
  },
];

const challenges = [
  { title: "Emotional attachment to the home", body: "Decades of memories make change feel like loss. This is normal and worth honoring." },
  { title: "Fear of losing independence", body: "Most resistance is really about control. Including the senior in decisions helps." },
  { title: "Family disagreements", body: "Siblings often see the same situation differently. Neutral information usually helps." },
  { title: "Caregiver burnout", body: "Caregiving is invisible work. Recognizing the strain early prevents crisis." },
  { title: "Financial stress", body: "Costs are often unclear at first. A financial advisor can help map realistic options." },
  { title: "Safety concerns", body: "Falls, medications, and isolation are common signals worth taking seriously." },
  { title: "Resistance to change", body: "Slowing down, listening, and giving choices typically softens resistance." },
  { title: "Decision fatigue", body: "Too many choices at once paralyze families. One step at a time is enough." },
  { title: "Timing pressure", body: "Hospital stays and safety events compress timelines. Preparation reduces panic." },
  { title: "Feeling unprepared", body: "Most families have never done this before. You are not behind — you are starting." },
];

const considerations = [
  "Safety and caregiving needs",
  "Housing options",
  "Property decisions",
  "Downsizing and cleanout",
  "Legal planning and powers of attorney",
  "Financial considerations",
  "Family communication",
  "Future planning",
  "Building a trusted support team",
];

const faqs = [
  {
    question: "When should families begin planning?",
    answer:
      "The best time is before a crisis. Conversations about preferences, paperwork, and care wishes are much easier when no one is rushed. If a transition is already underway, starting today is still helpful.",
  },
  {
    question: "How do we know when additional support may be needed?",
    answer:
      "Watch for changes in safety, hygiene, medication, mobility, weight, mood, and home upkeep. A care manager, nurse, or physician can help assess what level of support may be appropriate.",
  },
  {
    question: "What if a parent refuses help?",
    answer:
      "Resistance is common and usually about loss of control. Listening, including the senior in decisions, and introducing changes gradually often eases the path forward.",
  },
  {
    question: "How do housing decisions affect the home?",
    answer:
      "A move often raises questions about whether to sell, rent, keep, or transfer the property. Timing and approach depend on care costs, family goals, and tax or estate considerations.",
  },
  {
    question: "What if siblings disagree?",
    answer:
      "Disagreements are normal. A written care plan, neutral valuations, and a calm professional advisor can help families find common ground.",
  },
  {
    question: "How do families usually begin downsizing?",
    answer:
      "Most families start with a single room or category, work at the senior's pace, and bring in a senior move manager when the work feels too large to handle alone.",
  },
  {
    question: "What professionals may help guide the process?",
    answer:
      "A senior housing advisor, geriatric care manager, elder law attorney, financial planner, and a real estate professional familiar with senior transitions can each play a role.",
  },
  {
    question: "How do we avoid rushed decisions?",
    answer:
      "Slow down where you can, gather information early, and confirm authority and options before acting. Most decisions feel less urgent once the facts are in front of you.",
  },
  {
    question: "What if everything feels overwhelming?",
    answer:
      "That's normal. The site is built so you can take one calm step at a time. Read what's relevant, skip what isn't, and reach out when you're ready for a no-pressure conversation.",
  },
];

const continueJourney = [
  { href: "/downsizing-preparing-for-transition", title: "Downsizing & Preparing for a Transition", description: "A calm, practical roadmap for organizing and moving.", icon: iconHeartHands },
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Compare assisted living, adult family homes, memory care, and more.", icon: iconAssisted },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
];

const nextSteps = [
  "Understand the current situation and concerns",
  "Explore available housing, caregiving, and support options",
  "Discuss property, financial, and legal considerations",
  "Build a trusted support team",
  "Make informed decisions one step at a time",
];

const jsonLd = articleSchema({
  headline: "Understanding Senior Transitions",
  description:
    "A guided roadmap for families and seniors navigating housing changes, caregiving concerns, downsizing, emotional decisions, and property questions during major life transitions in Washington.",
  url: "/understanding-senior-transitions",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Senior transitions", "Aging in place", "Downsizing", "Caregiving", "Family planning"],
});

const UnderstandingSeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Understanding Senior Transitions | Real Property Planning"
        description="A calm guided roadmap for families and seniors navigating housing, caregiving, downsizing, property, and emotional decisions during major life transitions in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Understanding Senior Transitions", url: "/understanding-senior-transitions" }]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Guided Roadmap
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                Understanding Senior Transitions
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for families and seniors navigating housing changes,
                caregiving concerns, downsizing, emotional decisions, property
                questions, and major life transitions.
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

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Transitions Can Feel Overwhelming
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Major transitions later in life often involve emotional, financial,
                family, housing, caregiving, and property-related decisions happening
                at the same time. Many families feel overwhelmed, uncertain, or
                unprepared for the number of decisions involved. This guide is
                designed to help simplify the process and provide a calmer path
                forward.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Choose a Pathway
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                What Type of Transition Are You Facing?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the situation closest to yours. Each opens a calm, guided
                overview.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all overflow-hidden"
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
                  Many Families Do Not Know What Questions to Ask
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Most people don't initially know how housing decisions connect to
                  property decisions, what legal planning may be needed, how
                  caregiving impacts families emotionally, how quickly situations
                  may change, or which professionals may help guide the process.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
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
          heading="Questions People Often Ask"
          eyebrow="Common Questions"
          id="understanding-senior-transitions"
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
                  Families navigating senior transitions often continue exploring
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

export default UnderstandingSeniorTransitions;
