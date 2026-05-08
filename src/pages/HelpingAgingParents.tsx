import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Compass } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconAdultFamily from "@/assets/icons/senior-adult-family-home-icon-washington.webp";
import iconIndependent from "@/assets/icons/senior-independent-living-icon-washington.webp";
import iconMemory from "@/assets/icons/senior-memory-care-balanced-icon-washington.webp";
import iconMovers from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconPOA from "@/assets/icons/attorney-power-of-attorney-icon-washington.webp";
import iconElder from "@/assets/icons/attorney-elder-law-icon-washington.webp";
import iconAppraisal from "@/assets/icons/property-appraisal-valuation-icon-washington.webp";
import iconHandshake from "@/assets/icons/real-estate-agent-handshake-icon-washington.webp";
import iconBriefcase from "@/assets/icons/real-estate-agent-briefcase-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconPlacement from "@/assets/icons/senior-placement-advisor-icon-washington.webp";

const SITE_URL = "https://realpropertyplanning.com";

interface Stage {
  letter: string;
  title: string;
  description: string;
  items: { label: string; href: string; icon: string }[];
}

const stages: Stage[] = [
  {
    letter: "A",
    title: "Understanding Care & Housing Options",
    description:
      "Learn the differences between senior living options so the right fit becomes clear.",
    items: [
      { label: "Assisted Living", href: "/senior-living/assisted-living-communities", icon: iconAssisted },
      { label: "Adult Family Homes", href: "/senior-living/adult-family-homes", icon: iconAdultFamily },
      { label: "Independent Living", href: "/senior-living/independent-living", icon: iconIndependent },
      { label: "Memory Care", href: "/senior-living/memory-care", icon: iconMemory },
    ],
  },
  {
    letter: "B",
    title: "Preparing for a Transition",
    description:
      "Practical help with downsizing, moving, sorting belongings, and clearing the home.",
    items: [
      { label: "Downsizing & Move Management", href: "/senior-transitions", icon: iconMovers },
      { label: "Senior Move Managers", href: "/resources/senior-move-managers", icon: iconPlacement },
      { label: "Estate Cleanout", href: "/resources/property-preparation-services", icon: iconHome },
      { label: "Estate Liquidation", href: "/estate-liquidation", icon: iconBriefcase },
    ],
  },
  {
    letter: "C",
    title: "Financial & Legal Planning",
    description:
      "Connect with the legal and financial professionals who help families plan ahead.",
    items: [
      { label: "Estate Planning Attorneys", href: "/for-estate-planning-attorneys", icon: iconDocument },
      { label: "Power of Attorney", href: "/power-of-attorney", icon: iconPOA },
      { label: "Elder Law Guidance", href: "/for-elder-law-attorneys", icon: iconElder },
      { label: "CPAs & Financial Planning", href: "/for-financial-planners", icon: iconBriefcase },
    ],
  },
  {
    letter: "D",
    title: "Understanding Property Decisions",
    description:
      "Clear, unbiased information about the most common options for the family home.",
    items: [
      { label: "Selling the Home", href: "/probate-estate-sales", icon: iconHome },
      { label: "Funding Senior Living from a Sale", href: "/sell-house-fund-senior-living", icon: iconBriefcase },
      { label: "Property Appraisal & Valuation", href: "/real-estate-appraiser", icon: iconAppraisal },
      { label: "Inherited or Family Transfer", href: "/guides/inherited-house-washington", icon: iconBookOpen },
    ],
  },
  {
    letter: "E",
    title: "Building Your Trusted Team",
    description:
      "A coordinated network of professionals who work together on behalf of your family.",
    items: [
      { label: "Realtor", href: "/realtor", icon: iconHandshake },
      { label: "Appraiser", href: "/real-estate-appraiser", icon: iconAppraisal },
      { label: "Attorneys", href: "/for-attorneys", icon: iconDocument },
      { label: "Senior Housing Advisors", href: "/professionals/senior-housing-advisors", icon: iconPlacement },
    ],
  },
];

const resources = [
  {
    href: "/guides/senior-transition-differences",
    title: "How Senior Sales Differ from Ordinary Sales",
    description: "What families should expect when helping a parent sell a longtime home.",
  },
  {
    href: "/senior-living-and-relocation",
    title: "Senior Living & Relocation Overview",
    description: "Compare housing options and understand how transitions typically unfold.",
  },
  {
    href: "/guides/out-of-state-families",
    title: "Managing a Property from Out of State",
    description: "Guidance for families coordinating from a distance.",
  },
  {
    href: "/guides/what-executors-should-do",
    title: "When Planning Becomes Estate Administration",
    description: "First steps if a loved one has passed and a home is involved.",
  },
];

const continueJourney = [
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Compare assisted living, adult family homes, memory care, and more.", icon: iconAssisted },
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "An overview of the most common life-stage moves.", icon: iconHeartHands },
  { href: "/aging-in-place-staying-home-safely", title: "Aging in Place & Staying at Home Safely", description: "Plan ahead for safety, support, and independence at home.", icon: iconIndependent },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the family home.", icon: iconHome },
  { href: "/estate-planning-powers-of-attorney", title: "Estate Planning & Powers of Attorney", description: "Understand the legal documents most families need.", icon: iconPOA },
];

const faqs = [
  {
    question: "When is it time to consider additional care?",
    answer:
      "Common signals include difficulty with daily tasks, safety concerns at home, increased forgetfulness, isolation, or caregiver burnout. A conversation with a senior housing advisor or care manager can help your family weigh the options without pressure.",
  },
  {
    question: "What are the differences between senior housing options?",
    answer:
      "Independent living suits active seniors who want community without medical care. Assisted living adds daily-living support. Adult family homes offer small, residential settings. Memory care is designed for cognitive conditions. Skilled nursing provides higher medical needs.",
  },
  {
    question: "What happens to the home during a transition?",
    answer:
      "Families typically choose to sell, rent, or transfer the home. The right answer depends on care costs, family goals, tax implications, and timing. A real estate professional experienced with senior transitions can help you evaluate each option calmly.",
  },
  {
    question: "Should we sell or keep the property?",
    answer:
      "There is no single right answer. Selling can fund care and simplify estate matters; keeping can preserve a family asset or generate rental income. We help families compare valuations, costs, and outcomes so the decision fits the whole picture.",
  },
  {
    question: "What professionals should families talk to first?",
    answer:
      "Most families benefit from speaking early with an estate planning or elder law attorney, a senior housing advisor, and a real estate professional familiar with transitions. These three roles together cover the legal, housing, and property sides.",
  },
];

const nextSteps = [
  "Learn about your options",
  "Understand the transition process",
  "Build your trusted team",
  "Make informed decisions at your pace",
];

const jsonLd = articleSchema({
  headline: "Helping an Aging Parent or Loved One",
  description:
    "A guided roadmap for families navigating senior transitions, housing decisions, caregiving, downsizing, and important property decisions in Washington State.",
  url: "/helping-aging-parents",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Senior transitions", "Aging parents", "Senior housing", "Downsizing", "Estate planning"],
});

const HelpingAgingParents = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Helping an Aging Parent or Loved One | Real Property Planning"
        description="A calm, guided roadmap for Washington families navigating senior transitions, housing decisions, downsizing, legal planning, and important property decisions."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Helping an Aging Parent or Loved One", url: "/helping-aging-parents" }]}
      />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Family Journey Hub
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-6">
                Helping an Aging Parent or Loved One
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl">
                Guidance for families navigating senior transitions, housing decisions,
                caregiving concerns, downsizing, and important property decisions.
              </p>
              <a href="#roadmap">
                <Button
                  variant="gold"
                  size="lg"
                  className="px-8 h-[56px] text-base rounded-lg"
                >
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Start Here
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* YOU ARE NOT ALONE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                You Are Not Alone
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Families across Washington face the same uncertainty you may be feeling
                right now. Decisions about care, housing, and a longtime family home are
                rarely simple — and they don't have to be made all at once. This page is
                organized to help you take one calm step at a time.
              </p>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Guided Roadmap
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-4">
                Where Would You Like to Begin?
              </h2>
              <p className="text-navy/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Choose any stage of the journey. Each one is a checkpoint with the
                resources, options, and people who can help.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {stages.map((stage) => (
                <article
                  key={stage.letter}
                  className="bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Stage marker */}
                    <div className="md:w-48 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-6 md:p-8 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl md:text-6xl text-gold font-bold leading-none">
                        {stage.letter}
                      </span>
                      <span className="text-cream/80 uppercase tracking-widest text-xs font-bold">
                        Stage {stage.letter}
                      </span>
                    </div>

                    {/* Stage content */}
                    <div className="flex-1 p-6 md:p-8">
                      <h3 className="font-serif text-2xl md:text-[1.6rem] text-navy font-semibold mb-3">
                        {stage.title}
                      </h3>
                      <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-6">
                        {stage.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {stage.items.map((item) => (
                          <Link
                            key={item.href + item.label}
                            to={item.href}
                            className="group flex items-center gap-3 bg-cream hover:bg-white border border-gold/20 hover:border-gold/50 rounded-xl px-4 py-3 min-h-[60px] transition-all hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <img
                              src={item.icon}
                              alt=""
                              aria-hidden="true"
                              className="w-9 h-9 object-contain shrink-0"
                              loading="lazy"
                            />
                            <span className="font-semibold text-navy text-base flex-1 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                              {item.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Common Questions Families Ask"
          eyebrow="Family FAQs"
          id="aging-parents"
        />

        {/* HELPFUL RESOURCES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Education
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  Helpful Resources
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {resources.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="group bg-white border-2 border-gold/20 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all"
                  >
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-navy/75 text-base leading-relaxed mb-3">
                      {r.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Read more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED PROFESSIONAL NETWORK */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={iconHandshake}
                alt=""
                aria-hidden="true"
                className="w-16 h-16 object-contain mx-auto mb-5"
                loading="lazy"
              />
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-5">
                A Trusted Professional Network
              </h2>
              <p className="text-navy/85 text-lg leading-relaxed mb-8">
                Real Property Planning works alongside attorneys, CPAs, financial
                planners, senior housing advisors, move managers, and care
                professionals. You don't have to assemble the team alone — we help
                families connect with the right people at the right moment.
              </p>
              <Link to="/professionals">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  Meet the Network
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SIMPLE NEXT STEPS */}
        <section className="py-10 lg:py-14 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
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
                    className="flex items-center gap-5 bg-white border border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_4px_14px_-8px_rgba(27,43,75,0.2)]"
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
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
                Ready to talk it through?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Reach out for a calm, no-pressure conversation about where your family is
                in the journey — and where to go next.
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

export default HelpingAgingParents;
