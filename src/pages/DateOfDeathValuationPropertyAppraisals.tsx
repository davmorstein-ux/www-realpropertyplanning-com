import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2, AlertTriangle } from "lucide-react";
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
import wtdwHeroImage from "@/assets/what-to-do-with-the-house-hero-washington.webp";
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
    title: "What Is a Date-of-Death Valuation?",
    description:
      "Understanding how property value may be determined as of the date someone passed away and why this may matter for estate and tax purposes.",
    href: "/real-estate-appraiser",
    icon: iconDocument,
  },
  {
    letter: "2",
    title: "When Is an Appraisal Needed?",
    description:
      "Guidance for families trying to understand when appraisals, market analyses, or professional valuation opinions may be appropriate.",
    href: "/why-valuation-matters",
    icon: iconDocument,
  },
  {
    letter: "3",
    title: "Understanding Fair Market Value",
    description:
      "Learn how market value is typically determined and why online estimates alone may not tell the full story.",
    href: "/guides/appraisal-vs-cma",
    icon: iconBookOpen,
  },
  {
    letter: "4",
    title: "Valuation Before Selling, Cleaning, or Repairing",
    description:
      "Understanding why timing, condition, occupancy, repairs, and cleanout decisions may affect valuation considerations.",
    href: "/guides/repairs-before-selling-probate-home-washington",
    icon: iconHome,
  },
  {
    letter: "5",
    title: "Family Disagreements About Value",
    description:
      "Guidance for situations where heirs, siblings, or family members may have different opinions regarding a property's value.",
    href: "/guides/heirs-disagree-selling",
    icon: iconExecutor,
  },
  {
    letter: "6",
    title: "Building the Right Professional Team",
    description:
      "Understanding how appraisers, attorneys, CPAs, real estate professionals, and financial advisors may help guide the process.",
    href: "/professionals",
    icon: iconBookOpen,
  },
];

const faqs = [
  {
    question: "What is a date-of-death appraisal?",
    answer:
      "It is a property valuation that estimates fair market value as of the date someone passed away. Families often consult an appraiser or CPA to understand whether and how this valuation may be used for estate or tax purposes.",
  },
  {
    question: "Is an appraisal always required?",
    answer:
      "Not always. The right approach depends on the estate, the property, and applicable tax or legal considerations. A qualified attorney or CPA can help clarify when a formal appraisal is appropriate.",
  },
  {
    question: "What is the difference between an appraisal and a market analysis?",
    answer:
      "An appraisal is a formal valuation prepared by a licensed appraiser. A market analysis (CMA) is typically prepared by a real estate professional and reflects current market positioning. Each has its own use.",
  },
  {
    question: "When should valuation occur?",
    answer:
      "Timing matters. Many families benefit from understanding value early — before major repairs, cleanout, or decisions about selling, keeping, or transferring the property.",
  },
  {
    question: "Should the property be cleaned out first?",
    answer:
      "Usually not before valuation. Important documents, valuables, and items with sentimental or estate value can be lost. Many professionals recommend documenting contents before a major cleanout.",
  },
  {
    question: "What if repairs are needed?",
    answer:
      "The right approach depends on condition, market, and timing. Some properties benefit from light updates; others sell well as-is. A walk-through with an experienced professional can help compare options.",
  },
  {
    question: "What if family members disagree on value?",
    answer:
      "Disagreements are common. A neutral, professionally prepared valuation often helps families align on a shared number and move forward calmly.",
  },
  {
    question: "Can online estimates be inaccurate?",
    answer:
      "Yes. Online estimates rely on public data and may miss condition, layout, location nuances, and recent comparable sales. They are a starting point, not a substitute for professional valuation.",
  },
  {
    question: "What professionals should families speak with?",
    answer:
      "Families often consult an attorney, CPA, real estate professional, and — when appropriate — a licensed appraiser. Each plays a different role in helping families make informed decisions.",
  },
  {
    question: "How does valuation affect estate decisions?",
    answer:
      "Valuation influences tax considerations, equitable distribution among heirs, sale pricing, and timing. Understanding value early often makes every other decision easier.",
  },
];

const mistakes = [
  "Guessing the property's value",
  "Relying only on online estimates",
  "Waiting too long to understand valuation",
  "Making major repairs before understanding market impact",
  "Cleaning out the property without documenting important items",
  "Allowing family disagreements to delay important decisions",
  "Confusing tax value with market value",
  "Failing to coordinate professionals early",
];

const understand = [
  "Date-of-death valuation",
  "Fair market value",
  "Property condition",
  "Timing considerations",
  "Family coordination",
  "Tax and estate considerations",
  "Selling vs keeping the property",
  "Professional guidance",
  "Market conditions",
  "Documentation and records",
];

const continueJourney = [
  { href: "/executor-responsibilities-first-steps", title: "Executor Responsibilities & First Steps", description: "A first-step roadmap for executors and families.", icon: iconExecutor },
  { href: "/selling-an-inherited-home", title: "Selling an Inherited Home", description: "How estate sales differ from ordinary listings.", icon: iconHome },
  { href: "/estate-probate-inherited-property", title: "Estate, Probate & Inherited Property", description: "A guided path for executors, trustees, and heirs.", icon: iconDocument },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for the home.", icon: iconAssisted },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconBookOpen },
];

const nextSteps = [
  "Understand why accurate valuation may matter",
  "Learn the differences between valuation options",
  "Consider timing, condition, and family concerns",
  "Build the right professional team",
  "Make informed property decisions with better information",
];

const jsonLd = articleSchema({
  headline: "Understanding Date-of-Death Valuation & Property Appraisals",
  description:
    "A guided roadmap for families, executors, trustees, heirs, and professionals trying to understand property valuation during estate settlement, probate, and inherited property decisions in Washington.",
  url: "/date-of-death-valuation-property-appraisals",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Date-of-death valuation", "Property appraisal", "Estate", "Probate", "Fair market value"],
});

const DateOfDeathValuationPropertyAppraisals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Date-of-Death Valuation & Property Appraisals | Real Property Planning"
        description="A calm guided roadmap to date-of-death valuation, fair market value, and property appraisals for families, executors, trustees, and heirs in Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Date-of-Death Valuation & Property Appraisals", url: "/date-of-death-valuation-property-appraisals" }]} />
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
            <HeroBandTitle as="div">Date Of Death Valuation</HeroBandTitle>
          </div>
        </section>

        <JourneyOrientation
          tone="valuation"
          items={[
            "You need a date-of-death value for tax or estate filings",
            "You inherited property and need a stepped-up basis",
            "An attorney or CPA asked for a certified appraisal",
            "You are settling an estate or trust",
            "You want a credentialed valuation — not just a Zillow estimate"
          ]}
        />


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

            <div className="max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all flex flex-col items-center justify-center text-center"
                >
                  <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-navy text-base leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <span className="gold-cta mt-auto">
                    Learn More
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={[...faqs].sort((a, b) => a.question.length - b.question.length)}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="date-of-death-valuation"
          plain
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
                  Families exploring valuation and property decisions often
                  continue with these next steps.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all flex flex-col items-center justify-center text-center"
                  >
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 text-center group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-4 flex-1 text-center">
                      {c.description}
                    </p>
                    <span className="gold-cta mt-auto font-bold">
                      <strong className="date-valuation-cta-text">Continue</strong>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>


        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default DateOfDeathValuationPropertyAppraisals;
