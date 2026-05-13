import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/executor-trustee-hero-washington.webp";
import { articleSchema } from "@/lib/schema";

import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
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
    title: "Understanding the Executor Role",
    description:
      "Learn what responsibilities executors commonly manage during estate administration and settlement.",
    href: "/executors",
    icon: iconExecutor,
  },
  {
    letter: "2",
    title: "First Steps After a Death",
    description:
      "Guidance involving immediate responsibilities, important documents, securing property, notifications, and early organization.",
    href: "/what-should-we-do-first",
    icon: iconDocument,
  },
  {
    letter: "3",
    title: "Understanding Probate & Legal Coordination",
    description:
      "Learn how probate, legal authority, timelines, and attorney guidance may connect to estate responsibilities.",
    href: "/estate-probate-inherited-property",
    icon: iconBookOpen,
  },
  {
    letter: "4",
    title: "Managing the Home & Property",
    description:
      "Guidance involving inherited homes, insurance, security, valuation, maintenance, cleanout, occupancy, and property decisions.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "5",
    title: "Coordinating With Family Members & Heirs",
    description:
      "Support for communication, organization, expectations, documentation, and reducing conflict during the process.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "6",
    title: "Building the Right Professional Team",
    description:
      "Understanding how attorneys, CPAs, appraisers, real estate professionals, financial planners, and advisors may help guide the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconAssisted,
  },
];

const firstSteps = [
  "Locate important legal documents",
  "Secure the property",
  "Notify appropriate parties",
  "Understand who has authority",
  "Organize financial and property information",
  "Speak with qualified professionals",
  "Understand probate considerations",
  "Maintain documentation and records",
  "Coordinate with family members",
  "Avoid rushed decisions",
];

const considerations = [
  "Legal authority",
  "Probate coordination",
  "Property security and insurance",
  "Date-of-death valuation",
  "Estate documentation",
  "Family communication",
  "Property decisions",
  "Tax and financial coordination",
  "Downsizing and cleanout",
  "Building a trusted professional team",
];

const mistakes = [
  { title: "Waiting too long to organize documents", body: "Early organization usually prevents bigger problems later." },
  { title: "Making rushed property decisions", body: "A short pause to gather information almost always pays off." },
  { title: "Ignoring insurance or property maintenance", body: "Vacant homes need active care to remain insured and protected." },
  { title: "Failing to communicate with family members", body: "Silence often creates the conflict families most want to avoid." },
  { title: "Guessing property value", body: "A certified appraisal protects the executor and the estate." },
  { title: "Avoiding professional guidance", body: "A small, coordinated team usually saves time, stress, and money." },
  { title: "Poor record keeping", body: "Clear records protect the executor and reassure heirs." },
  { title: "Allowing family conflict to escalate", body: "Addressing disagreements early is far easier than untangling them later." },
];

const faqs = [
  {
    question: "What does an executor actually do?",
    answer:
      "An executor generally identifies and protects estate assets, communicates with heirs, manages debts and notifications, coordinates property decisions, and works with professionals to settle the estate. The exact responsibilities depend on the will and applicable law.",
  },
  {
    question: "What should happen first?",
    answer:
      "Most executors begin by locating key documents, securing the home and any valuables, notifying close family, and confirming who has legal authority before making major decisions. Families often consult a qualified attorney early in the process.",
  },
  {
    question: "Do all estates go through probate?",
    answer:
      "Not always. Whether probate is required depends on how assets are titled, what documents exist, and the size and nature of the estate. A qualified legal professional may help clarify what applies.",
  },
  {
    question: "What happens to the home?",
    answer:
      "The home is often one of the largest decisions. Executors typically secure and insure the property, gather valuation information, and then evaluate whether to keep, rent, transfer, or sell — based on the will, the heirs, and the estate's needs.",
  },
  {
    question: "Should the property be appraised?",
    answer:
      "Many estates benefit from a certified date-of-death appraisal. It documents fair market value for tax and estate purposes and supports defensible decision-making when heirs are involved.",
  },
  {
    question: "What if family members disagree?",
    answer:
      "Disagreements are common. Clear documentation, neutral valuations, and early conversations — sometimes guided by an attorney or mediator — usually help families find common ground.",
  },
  {
    question: "What professionals may help?",
    answer:
      "A probate attorney, CPA, certified appraiser, financial planner, and a real estate professional familiar with estate property often work together to support the executor.",
  },
  {
    question: "What if the process feels overwhelming?",
    answer:
      "That is normal. Slowing down, focusing on one step at a time, and assembling a small trusted team usually changes the experience quickly.",
  },
  {
    question: "How long does estate administration usually take?",
    answer:
      "Timelines vary based on complexity, probate requirements, property decisions, and family coordination. The right process depends on the situation, and an attorney can help estimate a realistic timeline.",
  },
  {
    question: "How do executors avoid mistakes?",
    answer:
      "Strong documentation, consistent communication, qualified professional guidance, and avoiding rushed decisions are the most common safeguards.",
  },
];

const continueJourney = [
  { href: "/estate-probate-inherited-property", title: "Estate, Probate & Inherited Property", description: "A guided path for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation & Property Appraisals", description: "Understand how valuation supports estate decisions.", icon: iconDocument },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconHome },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand the executor's responsibilities and authority",
  "Organize important documents and information",
  "Secure the property and understand estate considerations",
  "Build the right professional team",
  "Move through the process one step at a time",
];

const jsonLd = articleSchema({
  headline: "Executor Responsibilities & First Steps",
  description:
    "A calm guided roadmap for executors, trustees, and families navigating estate responsibilities, probate, inherited property, and important first-step decisions in Washington.",
  url: "/executor-responsibilities-first-steps",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Executor responsibilities", "Probate", "Inherited property", "Estate administration", "Family planning"],
});

const ExecutorResponsibilitiesFirstSteps = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Executor Responsibilities & First Steps | Real Property Planning"
        description="A calm guided roadmap for executors, trustees, and families navigating estate responsibilities, probate, inherited property, and important first-step decisions in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Executor Responsibilities & First Steps", url: "/executor-responsibilities-first-steps" }]} />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Serving as executor and trustee — guidance for Washington families"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>SERVING&nbsp; AS&nbsp; EXECUTOR&nbsp; &amp;&nbsp; TRUSTEE</HeroBandTitle>

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Executors Feel Overwhelmed at First
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Most people have never served as an executor before. Legal paperwork,
                financial coordination, property decisions, and family communication
                often arrive all at once. This guide is designed to make the path
                forward feel calmer and more organized.
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
                What Part of the Process Are You Trying to Understand?
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

        {/* FIRST STEPS — ordered checklist */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  First Steps
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  First Steps Many Executors Take
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  A calm sequence is usually more important than speed.
                </p>
              </div>
              <ol className="grid sm:grid-cols-2 gap-4">
                {firstSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 bg-white border-2 border-gold/25 rounded-2xl p-5 shadow-[0_4px_14px_-8px_rgba(27,43,75,0.2)]"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-gold to-[hsl(var(--gold-dark))] text-white font-serif text-xl font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-navy font-semibold text-base md:text-lg leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
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
                  Many Executors Don't Know What Questions to Ask
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Most are unsure what order things happen, how property and probate
                  decisions connect, which professionals may help, or how quickly
                  responsibilities can arrive.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
                <p className="text-navy font-serif text-xl md:text-2xl font-semibold mb-5">
                  Executors Often Need to Understand:
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
          heading="Questions Executors Often Ask"
          eyebrow="Common Questions"
          id="executor-responsibilities-first-steps"
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
                  Executors and families often continue exploring these next steps.
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

export default ExecutorResponsibilitiesFirstSteps;
