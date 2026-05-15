import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
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

const continueJourney = [
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation", description: "Learn when an estate valuation or appraisal may be needed.", icon: iconDocument },
  { href: "/preparing-home-for-sale-during-transition", title: "Preparing a Home for Sale", description: "Practical guidance for repairs, cleanout, and readiness.", icon: iconHome },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconExecutor },
  { href: "/downsizing-preparing-for-transition", title: "Downsizing & Preparing for a Transition", description: "A calm, practical roadmap for organizing and moving.", icon: iconHeartHands },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconBookOpen },
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
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={heroImage}
              alt="Quiet Washington street with craftsman homes — deciding what to do with an inherited or family home"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle>What To Do With the House</HeroBandTitle>
          </div>
        </section>

        {/* DECISIONS */}
        <section id="decisions" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                What Decision Are You Facing?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Choose the option closest to your situation for a calm, practical overview.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisions.map((d) => (
                <Link
                  key={d.letter}
                  to={d.href}
                  className="group flex flex-col bg-white rounded-xl p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_-8px_rgba(27,43,75,0.22)] hover:-translate-y-1 transition-all duration-300 ease-out font-sans"
                >
                  <img
                    src={d.icon}
                    alt=""
                    aria-hidden="true"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4"
                    loading="lazy"
                  />
                  <h3 className="font-sans text-xl md:text-2xl text-navy font-bold mb-3 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                    {d.title}
                  </h3>
                  <p className="font-sans text-navy text-base leading-relaxed font-normal mb-5 flex-1">
                    {d.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-bold text-sm mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Continue Your Journey
                </h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default WhatToDoWithTheHouse;
