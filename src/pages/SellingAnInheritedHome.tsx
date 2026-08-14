import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconDocument from "@/assets/icons/probate-document-icon-washington.webp";
import iconExecutor from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
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
    title: "Understanding Probate & Legal Authority",
    description:
      "Learn how probate, trusts, executors, trustees, and legal authority may affect inherited property decisions and timelines.",
    href: "/estate-probate-inherited-property",
    icon: iconDocument,
  },
  {
    letter: "2",
    title: "Understanding the Home's Value",
    description:
      "Guidance involving appraisals, date-of-death valuation, market analysis, property condition, and fair market value considerations.",
    href: "/date-of-death-valuation-property-appraisals",
    icon: iconBookOpen,
  },
  {
    letter: "3",
    title: "Deciding Whether To Sell, Keep, or Rent the Home",
    description:
      "Explore family goals, occupancy concerns, carrying costs, timing considerations, and future planning options.",
    href: "/what-to-do-with-the-house",
    icon: iconHome,
  },
  {
    letter: "4",
    title: "Preparing the Home for Sale",
    description:
      "Guidance involving repairs, cleanout, downsizing, organization, inherited belongings, and market preparation decisions.",
    href: "/preparing-home-for-sale-during-transition",
    icon: iconHeartHands,
  },
  {
    letter: "5",
    title: "Coordinating With Family Members & Heirs",
    description:
      "Support for communication, expectations, documentation, timelines, and reducing conflict during inherited property decisions.",
    href: "/executor-responsibilities-first-steps",
    icon: iconExecutor,
  },
  {
    letter: "6",
    title: "Building the Right Professional Team",
    description:
      "Understanding how attorneys, CPAs, appraisers, real estate professionals, estate liquidators, and advisors may help guide the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconAssisted,
  },
];




const faqs = [
  {
    question: "Can we sell the home before probate?",
    answer:
      "It depends on how title is held and the state's process. Many estates require some level of probate authority before a sale can close. Families often consult an attorney to confirm.",
  },
  {
    question: "What if the property is in a trust?",
    answer:
      "Trust property is often handled by a trustee under the trust's terms, and probate may not be required. A qualified attorney can help clarify the trustee's authority.",
  },
  {
    question: "Do we need an appraisal?",
    answer:
      "A certified appraisal often supports estate filings, family decisions, and pricing — and may be required for tax or legal purposes depending on the situation.",
  },
  {
    question: "What is a date-of-death valuation?",
    answer:
      "It is a property valuation as of the owner's date of passing, frequently used for estate, tax, and basis purposes. A certified appraiser typically prepares it.",
  },
  {
    question: "Should we repair the home before selling?",
    answer:
      "Sometimes, but not always. Safety, water, roof, and major mechanical issues tend to matter most. A real estate professional can help prioritize what is worth doing.",
  },
  {
    question: "What if someone still lives in the property?",
    answer:
      "Occupancy affects timing, preparation, and marketing. Plans should respect the resident's needs while protecting the property and the eventual sale.",
  },
  {
    question: "What if heirs disagree?",
    answer:
      "Neutral information — a certified valuation, a written plan, and clear roles — often helps families find common ground. An attorney or mediator may also help.",
  },
  {
    question: "What professionals may help guide the process?",
    answer:
      "Families often work with an attorney, CPA, certified appraiser, real estate professional, estate liquidator, and — when relevant — a senior move manager.",
  },
  {
    question: "How long does the process usually take?",
    answer:
      "Timelines vary by state, the estate, occupancy, and preparation needs. Many families move from initial conversation to sale over several months, sometimes longer.",
  },
  {
    question: "What if everything feels overwhelming?",
    answer:
      "That is normal. Slowing down, focusing on one decision, and starting with a single conversation often changes the experience quickly.",
  },
];

const continueJourney = [
  { href: "/estate-probate-inherited-property", title: "Managing an Estate, Probate, or Inherited Property", description: "A guided overview for executors, trustees, and heirs.", icon: iconExecutor },
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconHome },
  { href: "/date-of-death-valuation-property-appraisals", title: "Date-of-Death Valuation & Property Appraisals", description: "Understand how valuation supports estate decisions.", icon: iconBookOpen },
  { href: "/preparing-home-for-sale-during-transition", title: "Preparing a Home for Sale During a Transition", description: "Practical guidance for repairs, cleanout, and readiness.", icon: iconHeartHands },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconAssisted },
];

const nextSteps = [
  "Understand who has authority to make decisions",
  "Learn the property's approximate value and condition",
  "Explore selling, keeping, or rental considerations",
  "Build the right professional team",
  "Move through the process one step at a time",
];

const jsonLd = articleSchema({
  headline: "Selling an Inherited Home",
  description:
    "A calm guided roadmap for heirs, executors, trustees, and families navigating inherited property decisions, probate, valuation, preparation, and major life transitions in Washington.",
  url: "/selling-an-inherited-home",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Inherited property", "Probate", "Estate sales", "Property valuation", "Family transitions"],
});

const SellingAnInheritedHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Selling an Inherited Home | Real Property Planning"
        description="A calm guided roadmap for heirs, executors, trustees, and families navigating inherited property decisions, probate, valuation, and preparation in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Selling an Inherited Home", url: "/selling-an-inherited-home" }]} />
      <Header />
      <main id="main-content">
        {/* HERO — brought into line with the rest of the site.
            This page kept the old two-part pattern long after everything else
            moved on: an eyebrow-sized band (HeroBandTitle as="div" renders the
            15px uppercase variant, NOT the title band) stacked above a second
            navy hero carrying its own h1. Two banners, two titles, and the
            band read as the wrong element entirely.

            Now one canonical h1 band, matching every other page, with the
            intro and CTA on the cream body below it. The old block also said
            "Selling Inherited Home" in the band and "Selling an Inherited
            Home" in the h1 — the same page announcing itself twice, slightly
            differently. */}
        <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
          <HeroBandTitle as="h1">Selling an Inherited Home</HeroBandTitle>
        </section>

        <section className="bg-secondary pt-6 md:pt-8 pb-8">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Guided Roadmap
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-7 max-w-2xl" style={{ color: "#3f3a35" }}>
                A guided roadmap for heirs, executors, trustees, and families
                navigating inherited property decisions, probate questions, valuation
                concerns, property preparation, and major life transitions.
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
            "You inherited a home and are unsure what to do next",
            "The property is going through probate or trust administration",
            "Multiple heirs are involved in the decision",
            "You want to understand taxes, basis, and timing",
            "You need a calm, organized roadmap to a sale"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Families Feel Overwhelmed by Inherited Property Decisions
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                Inherited homes often involve emotional attachment, family
                coordination, legal questions, and uncertainty about where to begin.
                This guide is designed to simplify the process and provide a calmer
                path forward.
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
                  className="marquee-hover group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_2px_8px_-4px_rgba(27,43,75,0.10)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all overflow-hidden"
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
                        loading="lazy" sizes="(max-width: 768px) 90px, 90px" decoding="async"/>
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

        {/* Four sections were removed here and the page is better for it.

            CHALLENGES and COMMON MISTAKES were relocated, item by item, to the
            six sub-pages they actually concern — see
            src/lib/inheritedPropertyGuidance.ts and GuidanceGrid.tsx. They
            were moved rather than deleted because the text is indexed and
            carries real search value.

            "EDUCATIONAL COMPASS" and "SIMPLE NEXT STEPS" were deleted outright:
            both were lists restating the six pathways in different words, so
            the page said the same thing three times.

            "CONTINUE YOUR JOURNEY" was also deleted — it linked to THE SAME SIX
            PAGES as the pathway cards above, so every visitor met the identical
            set of links twice on one page.

            This is a hub. Its job is the six titles, not the content behind
            them. Resist adding explanatory sections here; they belong on the
            page for that step. */}

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="selling-an-inherited-home"
        />

        {/* Removed: a navy CTA band reading "Want to talk it through first? /
            A calm, no-pressure conversation can often clarify the very next
            step." with a "Start the Conversation" button.

            Same reasoning as the line cut from EstateProbateInheritedProperty.
            It was an open-ended offer of a personal conversation, placed at
            the end of pages about probate, inherited property, downsizing and
            aging in place — where readers arrive during a decline or a death
            in the family. Soliciting contact at that moment asks something of
            someone at their least resourced.

            Deliberately NOT replaced with a softer CTA. The footer and
            /contact remain available to anyone who goes looking. */}

        {/* FIRST PLACEMENT of the newsletter signup — deliberately one page
            only until a real end-to-end signup has been confirmed. Rolling it
            to every article before testing would mean discovering a broken
            edge function on three hundred pages instead of one.

            "probate" variant: this reader has just finished a guide on selling
            an inherited home, so the copy matches what they were reading.
            Placed after the article body and before the disclaimer — the
            invitation belongs at the end, once they have had the guidance,
            not before it. */}
        <NewsletterSignup variant="probate" />

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SellingAnInheritedHome;
