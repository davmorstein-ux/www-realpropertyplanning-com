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
import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHandshake from "@/assets/icons/real-estate-agent-handshake-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
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
    letter: "A",
    title: "Helping an Aging Parent or Loved One",
    description:
      "Guidance for senior transitions, care planning, downsizing, and important housing and property decisions.",
    href: "/helping-aging-parents",
    icon: iconHeartHands,
  },
  {
    letter: "B",
    title: "Managing an Estate, Probate, or Inherited Property",
    description:
      "Resources for executors, trustees, heirs, and families handling estate property and next-step decisions.",
    href: "/estate-probate-inherited-property",
    icon: iconExecutor,
  },
  {
    letter: "C",
    title: "Trying to Understand Housing & Care Options",
    description:
      "Learn the differences between assisted living, adult family homes, memory care, and other senior housing options.",
    href: "/senior-living-and-relocation",
    icon: iconAssisted,
  },
  {
    letter: "D",
    title: "Trying to Decide What to Do With a Home",
    description:
      "Guidance for families deciding whether to keep, sell, rent, transfer, or prepare a property.",
    href: "/guides/inherited-house-washington",
    icon: iconHome,
  },
  {
    letter: "E",
    title: "Looking for Trusted Professionals & Resources",
    description:
      "Connect with experienced professionals and educational guidance for important transition decisions.",
    href: "/professionals",
    icon: iconHandshake,
  },
];

const faqs = [
  {
    question: "Where do we even begin?",
    answer:
      "Start by naming the situation: aging parent, estate, inherited home, or housing decision. The pathway cards above are organized that way. Choose the one that feels closest — you can always switch paths later.",
  },
  {
    question: "What should families do first after a major transition?",
    answer:
      "In the first weeks, focus on safety, paperwork, and decision-makers — not big decisions. Secure the home, locate important documents, and identify who has authority to act. Major property choices come later.",
  },
  {
    question: "How do we know what type of help is needed?",
    answer:
      "Most families need a small team: a legal advisor (probate, estate, or elder law), a real estate professional familiar with transitions, and depending on the situation, a CPA, senior housing advisor, or move manager.",
  },
  {
    question: "What if our family disagrees?",
    answer:
      "Disagreements are common and rarely about the house itself. Neutral information — a written valuation, a clear timeline, or a calm professional advisor — usually helps families find common ground.",
  },
  {
    question: "How do we avoid costly mistakes?",
    answer:
      "The most expensive mistakes come from acting before authority is confirmed, guessing at value, or making large repairs without input. Slow down and assemble the right team first — it almost always pays for itself.",
  },
  {
    question: "What professionals are usually involved?",
    answer:
      "An attorney, a real estate professional, and often a CPA. Senior situations may add a housing advisor and move manager. Estate situations may add an appraiser and an estate liquidator.",
  },
  {
    question: "What happens to the home?",
    answer:
      "Families typically choose to sell, keep, rent, or transfer the home. The right answer depends on care costs, family goals, taxes, and timing. There is no single correct path — only the one that fits your situation.",
  },
  {
    question: "What if we feel overwhelmed?",
    answer:
      "That's normal. The site is built so you can take one calm step at a time. Read what's relevant, skip what isn't, and reach out when you're ready for a no-pressure conversation.",
  },
];

const understand = [
  "Housing & care options",
  "Legal authority & planning",
  "Property decisions",
  "Downsizing & cleanout",
  "Financial & tax considerations",
  "Family coordination",
  "Building a trusted team",
];

const continueJourney = [
  { href: "/helping-aging-parents", title: "Helping an Aging Parent", description: "A calm roadmap for senior transitions and family decisions.", icon: iconHeartHands },
  { href: "/estate-probate-inherited-property", title: "Estate, Probate & Inherited Property", description: "A guided path for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Compare assisted living, adult family homes, memory care, and more.", icon: iconAssisted },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "Sell, keep, rent, or transfer — compare your options.", icon: iconHome },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconHandshake },
];

const nextSteps = [
  "Understand your situation",
  "Learn what questions to ask",
  "Explore your options",
  "Build your trusted team",
  "Make informed decisions at your own pace",
];

const jsonLd = articleSchema({
  headline: "What Should We Do First?",
  description:
    "A calm starting point for families, seniors, executors, and trustees navigating major life, housing, estate, probate, and property decisions in Washington State.",
  url: "/what-should-we-do-first",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Family guidance", "Senior transitions", "Estate decisions", "Probate", "First steps"],
});

const WhatShouldWeDoFirst = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What Should We Do First? | Real Property Planning"
        description="A calm starting point for families, seniors, executors, and loved ones navigating major life, housing, estate, probate, and property decisions in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "What Should We Do First?", url: "/what-should-we-do-first" }]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Start Here
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                What Should We Do First?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A simple starting point for families, seniors, executors, and loved
                ones navigating major life, housing, estate, probate, and property
                decisions.
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
                You Are Not Expected to Have All the Answers
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Most people arrive here unsure where to begin. This site is designed to
                help you understand the process, learn what questions to ask, avoid
                common mistakes, and connect with trusted professionals — at your own
                pace.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Choose Your Path
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                What Best Describes Your Situation?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the closest match. Each pathway opens a calm, guided roadmap.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.href + p.letter}
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
                        <p className="text-navy text-base md:text-lg leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
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
          heading="Questions People Often Have First"
          eyebrow="Common Questions"
          id="what-should-we-do-first"
        />

        {/* WHAT TO UNDERSTAND */}
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
                  Confusion is normal. Most families don't initially know what order
                  things happen, which professionals to involve, or what options exist.
                  These are the areas families typically need to understand.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
                <p className="text-navy font-serif text-xl md:text-2xl font-semibold mb-5">
                  Families Often Need to Understand:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {understand.map((item) => (
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
                  Explore the next steps that best fit your situation.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href}
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
                A calm, no-pressure conversation can often clarify the very first step.
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

export default WhatShouldWeDoFirst;
