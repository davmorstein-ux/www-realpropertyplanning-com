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
import JourneyOrientation from "@/components/JourneyOrientation";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/understanding-housing-care-options-hero-washington.webp";

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
    title: "Independent Living",
    description:
      "For active seniors seeking convenience, community, reduced maintenance, and lifestyle support while remaining largely independent.",
    href: "/senior-living/independent-living",
    icon: iconHeartHands,
  },
  {
    letter: "2",
    title: "Assisted Living",
    description:
      "For seniors who may benefit from help with daily activities, meals, medication reminders, transportation, or personal support.",
    href: "/senior-living/assisted-living-communities",
    icon: iconAssisted,
  },
  {
    letter: "3",
    title: "Adult Family Homes",
    description:
      "Smaller residential care settings that often provide more personalized support in a home-like environment.",
    href: "/senior-living/adult-family-homes",
    icon: iconHome,
  },
  {
    letter: "4",
    title: "Memory Care",
    description:
      "Specialized environments designed for individuals experiencing Alzheimer's disease, dementia, or cognitive decline.",
    href: "/senior-living/memory-care",
    icon: iconExecutor,
  },
  {
    letter: "5",
    title: "In-Home Care & Aging in Place",
    description:
      "Options for seniors who wish to remain at home while receiving caregiving, safety, and support services.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "6",
    title: "Temporary or Transitional Care",
    description:
      "Short-term rehabilitation, recovery support, respite care, or transitional care situations.",
    href: "/senior-living/nursing-and-skilled-care",
    icon: iconAssisted,
  },
];

const faqs = [
  {
    question: "How do we know what level of care may be appropriate?",
    answer:
      "Most families start by observing daily activities — bathing, eating, medication, mobility, and memory. A care manager, nurse, or physician can help assess the level of support that may be appropriate.",
  },
  {
    question: "What are the differences between assisted living and adult family homes?",
    answer:
      "Assisted living communities are typically larger, with 30+ residents and structured amenities. Adult family homes are smaller — often 4 to 6 residents in a residential home — and may provide more personalized attention.",
  },
  {
    question: "When is memory care typically considered?",
    answer:
      "Memory care is often considered when a person experiences progressive cognitive decline, wandering, safety concerns, or care needs that exceed what assisted living can safely provide.",
  },
  {
    question: "Can a parent remain safely at home?",
    answer:
      "Many seniors can remain at home with the right combination of in-home caregivers, home modifications, and family support. A safety assessment can help determine what may be needed.",
  },
  {
    question: "How do families usually begin this process?",
    answer:
      "Most families begin with a conversation, then consult a senior housing advisor, care manager, or trusted professional. Touring a few communities or homes is often a helpful early step.",
  },
  {
    question: "What costs should families prepare for?",
    answer:
      "Costs vary widely by setting, location, and care level. Families often consult a financial planner or elder law attorney to understand options including private pay, long-term care insurance, VA benefits, and Medicaid.",
  },
  {
    question: "What if a parent resists change?",
    answer:
      "Resistance is common and usually about loss of control, not the option itself. Slowing down, listening, and including the senior in tours and decisions often eases the transition.",
  },
  {
    question: "What professionals can help guide these decisions?",
    answer:
      "A senior housing advisor, geriatric care manager, elder law attorney, financial planner, and a real estate professional familiar with senior transitions can each play an important role.",
  },
  {
    question: "What happens to the home during a transition?",
    answer:
      "Families typically choose to sell, rent, keep, or transfer the home. Timing and approach often depend on care costs, family goals, and tax or estate considerations.",
  },
  {
    question: "How quickly do families usually need to make decisions?",
    answer:
      "Sometimes urgently — after a hospital stay or safety event. Other times slowly, over months or years. Either way, having information ready helps families act calmly when the moment arrives.",
  },
];

const considerations = [
  "Safety concerns",
  "Daily support needs",
  "Mobility and medical considerations",
  "Social isolation",
  "Cognitive changes",
  "Family caregiver burnout",
  "Financial planning",
  "Legal authority and planning",
  "Future housing transitions",
  "Property and downsizing decisions",
];

const continueJourney = [
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "An overview of the most common life-stage moves.", icon: iconHeartHands },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconHome },
  { href: "/estate-planning-powers-of-attorney", title: "Estate Planning & Powers of Attorney", description: "Understand the legal documents most families need.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconExecutor },
];

const nextSteps = [
  "Understand the senior's current needs and concerns",
  "Learn the differences between available housing and care options",
  "Consider safety, finances, caregiving, and long-term planning",
  "Build a trusted support team",
  "Make informed decisions at a manageable pace",
];

const jsonLd = articleSchema({
  headline: "Understanding Housing & Care Options",
  description:
    "A guided roadmap for families and seniors exploring assisted living, adult family homes, memory care, independent living, in-home care, and other housing decisions in Washington.",
  url: "/understanding-housing-care-options",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Senior housing", "Assisted living", "Memory care", "Adult family homes", "Aging in place"],
});

const UnderstandingHousingCareOptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Understanding Housing & Care Options | Real Property Planning"
        description="A calm guided roadmap for families and seniors exploring assisted living, adult family homes, memory care, independent living, and in-home care in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Understanding Housing & Care Options", url: "/understanding-housing-care-options" }]} />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="w-full overflow-hidden">
          <img
            src={heroImage}
            alt="Family touring a Washington senior living community to understand housing and care options"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover"
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
          />
        </section>
        <HeroBandTitle>UNDERSTANDING&nbsp;&nbsp;HOUSING&nbsp;&nbsp;AND&nbsp;&nbsp;CARE&nbsp;&nbsp;OPTIONS</HeroBandTitle>

        {/* INTRO */}
        <section className="bg-background pt-10 pb-8 lg:pt-14 lg:pb-10">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Guided Roadmap
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-7">
                A guided roadmap for families and seniors exploring assisted living,
                adult family homes, memory care, independent living, caregiving
                support, and other important housing decisions.
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
          tone="caregiving"
          items={[
            "You are comparing assisted living, memory care, or in-home support",
            "A parent's needs are changing",
            "You are unsure what level of care is appropriate",
            "You want to understand costs and tradeoffs",
            "You need help knowing what questions to ask"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Feel Overwhelmed at First
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Families often begin this process unsure what type of care or housing
                may be appropriate. Many people do not know the differences between
                the available options, what level of support may be needed, or what
                questions they should ask first. This guide is designed to help
                simplify the process step-by-step.
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
                What Type of Support Are You Exploring?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the option closest to your situation. Each opens a calm,
                educational overview.
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
                        Option {p.letter}
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
          id="understanding-housing-care-options"
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
                  Many People Do Not Know What Questions to Ask
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Most families don't initially know what level of care is appropriate,
                  what warning signs to look for, how housing decisions affect property
                  decisions, how finances and legal planning may connect, or which
                  professionals may help guide the process.
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
                  Families exploring housing and care options often need help
                  understanding these next steps.
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

export default UnderstandingHousingCareOptions;
