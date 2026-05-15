import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2, Users } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
import ProfessionalNetworkGrid from "@/components/ProfessionalNetworkGrid";
import wtdwHeroImage from "@/assets/building-trusted-professional-team-hero.png";
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
    title: "Estate Planning & Elder Law Attorneys",
    description:
      "Guidance involving powers of attorney, wills, trusts, legal planning, guardianship concerns, and future decision-making.",
    href: "/estate-planning-powers-of-attorney",
    icon: iconDocument,
  },
  {
    letter: "2",
    title: "Probate & Estate Attorneys",
    description:
      "Support for probate, estate administration, inherited property questions, and legal coordination after a death.",
    href: "/for-attorneys",
    icon: iconExecutor,
  },
  {
    letter: "3",
    title: "CPAs & Financial Professionals",
    description:
      "Guidance involving taxes, estate coordination, financial planning, property considerations, and long-term planning.",
    href: "/for-cpas",
    icon: iconBookOpen,
  },
  {
    letter: "4",
    title: "Senior Living & Care Advisors",
    description:
      "Support for housing transitions, assisted living, memory care, caregiving concerns, and aging-related planning.",
    href: "/understanding-housing-care-options",
    icon: iconAssisted,
  },
  {
    letter: "5",
    title: "Real Estate Brokers & Appraisers",
    description:
      "Guidance involving property value, inherited homes, downsizing, market conditions, estate property preparation, and housing transitions.",
    href: "/real-estate-appraiser",
    icon: iconHome,
  },
  {
    letter: "6",
    title: "Downsizing, Move Management & Estate Cleanout",
    description:
      "Support for organizing belongings, coordinating transitions, preparing homes, and reducing overwhelm during major life changes.",
    href: "/senior-move-managers",
    icon: iconHeartHands,
  },
  {
    letter: "7",
    title: "Caregiving & Support Professionals",
    description:
      "Guidance involving caregiving coordination, aging-in-place concerns, family support, and quality-of-life planning.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
];

const flowStages = [
  {
    stage: "Early Planning",
    pros: ["Estate planning attorney", "Financial planner / CPA", "Senior care advisor"],
  },
  {
    stage: "Transition or Crisis",
    pros: ["Elder law attorney", "Care manager", "Senior living advisor", "Real estate professional"],
  },
  {
    stage: "Housing & Property",
    pros: ["Real estate broker", "Certified appraiser", "Move manager", "Property preparation team"],
  },
  {
    stage: "After a Death",
    pros: ["Probate attorney", "CPA", "Executor or trustee support", "Estate property professionals"],
  },
];

const considerations = [
  "Legal planning",
  "Probate and estate coordination",
  "Property decisions",
  "Housing transitions",
  "Caregiving support",
  "Financial considerations",
  "Downsizing and cleanout",
  "Valuation and appraisal questions",
  "Family communication",
  "Building a coordinated support team",
];

const faqs = [
  {
    question: "Who should families contact first?",
    answer:
      "It depends on the situation. Legal questions often start with an attorney, financial questions with a CPA or planner, and housing or property questions with a real estate professional or care advisor. A short conversation can usually point families toward the right starting place.",
  },
  {
    question: "What professionals are commonly involved?",
    answer:
      "Common roles include estate planning or elder law attorneys, probate attorneys, CPAs and financial planners, senior living and care advisors, certified appraisers, real estate brokers, move managers, and caregiving support professionals.",
  },
  {
    question: "How do attorneys, CPAs, and property professionals work together?",
    answer:
      "Each professional handles a specialized piece — legal authority, tax and financial impact, valuation, and property decisions. When they share information, decisions tend to move forward more smoothly and with fewer surprises.",
  },
  {
    question: "What if a family is overwhelmed?",
    answer:
      "Most families feel that way at the start. Beginning with one calm conversation, identifying the most urgent question, and adding professionals as needed often reduces the pressure quickly.",
  },
  {
    question: "What if siblings disagree?",
    answer:
      "Disagreements are common. Neutral information, a written plan, and coordinated professional guidance often help families find common ground.",
  },
  {
    question: "How do caregiving and housing decisions connect?",
    answer:
      "Care needs frequently drive housing changes, and housing changes often influence property and financial decisions. Coordinating across these areas helps families avoid rushed or conflicting choices.",
  },
  {
    question: "What professionals help with downsizing?",
    answer:
      "Senior move managers, estate sale companies, professional organizers, and property preparation teams often work alongside the real estate professional to make a transition feel manageable.",
  },
  {
    question: "When should valuation or appraisal questions be addressed?",
    answer:
      "Valuation often becomes important early — for planning, estate documentation, date-of-death values, equitable decisions among heirs, or preparing a property for sale.",
  },
  {
    question: "What if families do not know what questions to ask?",
    answer:
      "That is the most common starting point. A calm, no-pressure conversation usually surfaces the right questions and clarifies which professional may help next.",
  },
  {
    question: "How can coordinated guidance reduce stress?",
    answer:
      "When professionals share context, families avoid repeating their story, missing steps, or making decisions without seeing the full picture. Coordination tends to replace confusion with clarity.",
  },
];

const continueJourney = [
  { href: "/helping-aging-parents", title: "Helping an Aging Parent or Loved One", description: "A calm roadmap for senior transitions and family decisions.", icon: iconHeartHands },
  { href: "/estate-probate-inherited-property", title: "Estate, Probate & Inherited Property", description: "A guided path for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconDocument },
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "An overview of the most common life-stage moves.", icon: iconAssisted },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand the situation and major concerns",
  "Identify which professionals may help guide the process",
  "Learn how housing, legal, financial, and property decisions connect",
  "Build a coordinated support team",
  "Make informed decisions one step at a time",
];

const jsonLd = articleSchema({
  headline: "Building Your Trusted Professional Team",
  description:
    "A guided roadmap for families and professionals navigating senior transitions, estate matters, probate, housing decisions, caregiving, and property planning in Washington.",
  url: "/building-your-trusted-professional-team",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Professional team", "Senior transitions", "Estate planning", "Probate", "Coordinated guidance"],
});

const BuildingYourTrustedProfessionalTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Building Your Trusted Professional Team | Real Property Planning"
        description="A calm guided roadmap for families navigating senior transitions, estate matters, probate, housing, and property planning with a coordinated team of trusted professionals in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Building Your Trusted Professional Team", url: "/building-your-trusted-professional-team" }]} />
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
            <HeroBandTitle as="div">Your Professional Team</HeroBandTitle>
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
                Building Your Trusted Professional Team
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for families and professionals navigating senior
                transitions, estate matters, probate, housing decisions, caregiving
                concerns, and important property-related planning.
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
          tone="valuation"
          items={[
            "You are unsure which professionals you actually need",
            "You want vetted referrals — not cold internet searches",
            "You are coordinating attorneys, CPAs, lenders, or care providers",
            "You want one calm point of contact",
            "You are supporting a family member from out of state"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Don't Know Who to Call First
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Legal, financial, caregiving, housing, downsizing, and property questions
                often overlap. Coordinated guidance from a small, trusted team usually
                reduces stress and brings clarity faster than tackling each piece alone.
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
                What Type of Guidance Are You Looking For?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the area closest to your situation. Each opens a calm, guided overview.
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

        {/* HOW PROFESSIONALS WORK TOGETHER — flow */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Coordinated Guidance
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  How Professionals Often Work Together
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Different experts often help at different stages. You don't need to
                  solve everything alone.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 md:gap-3 items-stretch">
                {flowStages.map((s, i) => (
                  <div key={s.stage} className="relative flex">
                    <div className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-gold to-[hsl(var(--gold-dark))] text-white font-serif text-lg font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <h3 className="font-serif text-lg md:text-xl text-navy font-semibold leading-tight">
                          {s.stage}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {s.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-navy text-base leading-snug">
                            <Users className="w-4 h-4 text-gold mt-1 shrink-0" aria-hidden="true" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {i < flowStages.length - 1 && (
                      <ArrowRight
                        className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-gold"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-navy text-base md:text-lg leading-relaxed text-center mt-6 max-w-3xl mx-auto">
                The same professionals often appear across stages. Coordinating early
                usually means fewer surprises later.
              </p>
            </div>
          </div>
        </section>

        {/* Full Professional Network — ~30 tiles in 5 categories */}
        <ProfessionalNetworkGrid />

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="building-your-trusted-professional-team"
        />

        {/* WHAT TO CONSIDER */}
        <section className="py-10 lg:py-14 bg-background">
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
                  Most families are unsure which professionals are needed, the order
                  decisions usually happen, or how legal, caregiving, housing, and
                  property issues overlap.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
                <p className="text-navy font-serif text-xl md:text-2xl font-semibold mb-5">
                  Families Often Need Guidance With:
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

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-secondary">
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
                  Families building a trusted support team often continue exploring
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

export default BuildingYourTrustedProfessionalTeam;
