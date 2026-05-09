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

import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";

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
    title: "Understanding Powers of Attorney",
    description:
      "Learn how powers of attorney may help families manage financial, legal, healthcare, and decision-making responsibilities during periods of incapacity or transition.",
    href: "/power-of-attorney",
    icon: iconDocument,
  },
  {
    letter: "2",
    title: "Understanding Estate Planning Basics",
    description:
      "Explore common planning topics involving wills, trusts, beneficiary planning, guardianship considerations, and future decision-making.",
    href: "/wills",
    icon: iconBookOpen,
  },
  {
    letter: "3",
    title: "Planning Before a Crisis",
    description:
      "Guidance for families trying to prepare before a medical event, housing transition, caregiving concern, or emergency creates pressure.",
    href: "/understanding-senior-transitions",
    icon: iconHeartHands,
  },
  {
    letter: "4",
    title: "Planning for Housing & Care Decisions",
    description:
      "Understand how legal planning may connect to assisted living, memory care, caregiving support, downsizing, and property decisions.",
    href: "/understanding-housing-care-options",
    icon: iconAssisted,
  },
  {
    letter: "5",
    title: "Understanding Property & Asset Decisions",
    description:
      "Learn how homes, inherited property, ownership questions, and future property transitions may connect to estate planning.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "6",
    title: "Building the Right Professional Team",
    description:
      "Understand how attorneys, financial planners, CPAs, appraisers, real estate professionals, and care advisors may help support planning decisions.",
    href: "/professionals",
    icon: iconExecutor,
  },
];

const considerations = [
  "Decision-making authority",
  "Powers of attorney",
  "Healthcare planning",
  "Housing transitions",
  "Property ownership",
  "Family communication",
  "Caregiving responsibilities",
  "Financial planning",
  "Estate coordination",
  "Building a trusted professional team",
];

const mistakes = [
  { title: "Waiting until a crisis", body: "Urgency limits options. Early conversations preserve choice." },
  { title: "Assuming family members automatically have authority", body: "Without documents, even a spouse or adult child may lack legal authority." },
  { title: "Avoiding difficult planning conversations", body: "Silence often causes the confusion families most want to avoid." },
  { title: "Failing to coordinate legal and financial planning", body: "Documents work best when attorneys, planners, and CPAs are aligned." },
  { title: "Ignoring housing transition considerations", body: "Care, housing, and property decisions are deeply connected." },
  { title: "Failing to update documents", body: "Life changes — marriages, deaths, moves — can quietly outdate a plan." },
  { title: "Allowing confusion between siblings or heirs", body: "Clarity in writing reduces disagreement and protects relationships." },
  { title: "Waiting too long to build a professional team", body: "A small team assembled early often prevents larger problems later." },
];

const faqs = [
  {
    question: "What is a power of attorney?",
    answer:
      "A power of attorney is a legal document that allows one person to make certain decisions on behalf of another — often involving finances, property, or healthcare. The specific authority granted depends on the document, and a qualified legal professional may help clarify what fits a family's situation.",
  },
  {
    question: "When should families begin planning?",
    answer:
      "Families often discuss planning well before a crisis, when conversations can happen calmly and without pressure. Earlier planning generally creates more options and less stress later.",
  },
  {
    question: "What happens if no planning exists?",
    answer:
      "Without documents in place, families may face court involvement, delays, and confusion about who can make decisions. The right approach depends on the situation, and a qualified attorney can help explain available paths.",
  },
  {
    question: "How do powers of attorney connect to housing decisions?",
    answer:
      "When a loved one can no longer manage their affairs, the agent under a power of attorney is often the person navigating senior housing, care arrangements, and property decisions on their behalf.",
  },
  {
    question: "Can planning help avoid family conflict?",
    answer:
      "Clear documents, open communication, and coordinated professional guidance often reduce confusion and disagreement among siblings, heirs, and extended family.",
  },
  {
    question: "What professionals should families speak with?",
    answer:
      "Families often work with an estate planning or elder law attorney, a financial planner or CPA, and — when property is involved — a real estate professional and certified appraiser familiar with senior and estate situations.",
  },
  {
    question: "How do estate plans connect to property ownership?",
    answer:
      "Wills, trusts, and titling decisions all influence how a home or other property transfers. Aligning these with the family's broader plan often prevents complications later.",
  },
  {
    question: "What if a parent resists planning discussions?",
    answer:
      "Resistance is common and often about loss of control. Slowing down, listening, and including the senior in decisions usually opens the door more easily than pressing for answers.",
  },
  {
    question: "What planning issues commonly affect senior transitions?",
    answer:
      "Authority to act, healthcare directives, housing decisions, property ownership, and coordination among advisors are recurring themes during senior transitions.",
  },
  {
    question: "How do families avoid rushed decisions later?",
    answer:
      "Gathering information early, confirming authority, and building a small trusted team in advance typically removes much of the pressure when something does change.",
  },
];

const continueJourney = [
  { href: "/helping-aging-parents", title: "Helping an Aging Parent or Loved One", description: "A calm roadmap for senior transitions and family decisions.", icon: iconHeartHands },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconHome },
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Compare assisted living, adult family homes, memory care, and more.", icon: iconAssisted },
  { href: "/estate-probate-inherited-property", title: "Estate, Probate & Inherited Property", description: "A guided path for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconDocument },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand current family and planning concerns",
  "Learn what legal and decision-making tools may help",
  "Explore how planning connects to housing and property decisions",
  "Build the right professional team",
  "Make informed decisions before a crisis creates pressure",
];

const jsonLd = articleSchema({
  headline: "Estate Planning & Powers of Attorney",
  description:
    "A guided educational roadmap for families and seniors exploring estate planning, powers of attorney, decision-making authority, housing transitions, and property considerations in Washington.",
  url: "/estate-planning-powers-of-attorney",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Estate planning", "Powers of attorney", "Family planning", "Senior transitions", "Property decisions"],
});

const EstatePlanningPowersOfAttorney = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estate Planning & Powers of Attorney | Real Property Planning"
        description="A calm guided roadmap for families and seniors exploring estate planning, powers of attorney, decision-making authority, and how planning connects to housing and property in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Estate Planning & Powers of Attorney", url: "/estate-planning-powers-of-attorney" }]} />
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
                Estate Planning & Powers of Attorney
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for families and seniors exploring legal planning,
                decision-making authority, future caregiving concerns, housing
                transitions, and important property-related decisions.
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
            "You do not have a will or power of attorney in place",
            "A parent's documents may be outdated",
            "You are unsure who should serve as executor or agent",
            "You want to protect your family from probate confusion",
            "You are planning ahead — calmly, before a crisis"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Wait Until a Crisis
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Planning conversations often begin only after a health event, caregiving
                concern, or housing transition creates urgency. Starting earlier may
                help reduce confusion, stress, delays, and family conflict later.
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
                What Type of Planning Question Are You Facing?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the topic closest to your situation. Each opens a calm, guided overview.
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

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="estate-planning-powers-of-attorney"
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
                  Most families are unsure which documents exist, who has authority
                  to act, how caregiving and housing connect, how property is
                  affected, or how quickly a situation can change.
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

        {/* COMMON MISTAKES */}
        <section className="py-10 lg:py-14 bg-secondary">
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
                  Families exploring estate planning often continue with these next steps.
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

export default EstatePlanningPowersOfAttorney;
