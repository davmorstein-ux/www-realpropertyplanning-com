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
        <section className="w-full overflow-hidden">
          {/* Watercolor image */}
          <div className="relative w-full" style={{ display: 'block', lineHeight: 0 }}>
            <img
              src="/assets/start_hero_clean_v2.png"
              alt="Begin your journey — Real Property Planning"
              className="w-full h-auto object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <HeroBandTitle as="p">
            A simple starting point for families, seniors, executors, and loved ones<br />
            navigating major life, housing, estate, probate, and property decisions.
          </HeroBandTitle>
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
