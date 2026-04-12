import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { realEstateAgentSchema } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  {
    question: "How does selling an inherited home in Redmond work?",
    answer:
      "Selling inherited property in Redmond typically requires legal authority through probate or trust administration before the home can be listed. David coordinates with the estate attorney, trustee, or personal representative to assess the property, develop a defensible pricing strategy, manage preparation, and guide the sale — keeping all parties informed throughout.",
  },
  {
    question: "What should I do first with an inherited Redmond property?",
    answer:
      "Secure the property, review the legal authority with the estate attorney, and get a realistic assessment of the home's condition and current market value. David can evaluate the property, identify factors that affect value, and help you understand your options before committing to a course of action.",
  },
  {
    question: "How does David Stein's appraisal background benefit Redmond property sales?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing strategy grounded in actual condition assessment and neighborhood-level market analysis — not automated estimates. In Redmond's competitive market, this dual perspective helps protect families from costly pricing mistakes.",
  },
  {
    question: "Can David help if I'm relocating and need to sell an inherited property?",
    answer:
      "Yes. Relocation-driven property decisions are common in Redmond. Whether you're moving into or out of the area, David helps coordinate timing, preparation, and sale strategy so the property process aligns with your broader transition — reducing stress and keeping things organized.",
  },
  {
    question: "What if multiple family members are involved in the decision?",
    answer:
      "Multi-party situations are common in estate sales. David provides clear, documented communication so all decision-makers — whether local or out of state — have the same information. His appraisal-informed pricing approach also helps establish defensible value when consensus is needed.",
  },
  {
    question: "How long does it take to sell an estate property in Redmond?",
    answer:
      "Timelines depend on the legal process, property condition, and preparation needs. Once the property is ready and authority is established, well-priced Redmond homes typically sell quickly given the area's strong demand. David helps set realistic expectations and builds a plan around your specific situation.",
  },
];

const RedmondProbateEstate = () => {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const localSchema = {
      ...realEstateAgentSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Redmond", containedInPlace: { "@type": "State", name: "Washington" } },
        ...realEstateAgentSchema.areaServed,
      ],
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.setAttribute("data-page-jsonld", "faq");
    script1.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.setAttribute("data-page-jsonld", "local");
    script2.textContent = JSON.stringify(localSchema);
    document.head.appendChild(script2);

    return () => {
      document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate & Estate Real Estate in Redmond, Washington | Real Property Planning"
        description="Guidance for executors, trustees, and families handling inherited property in Redmond. Support for relocation, valuation, and coordinated decision-making."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "King County", url: "/king-county" },
          { name: "Redmond", url: "/redmond-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Redmond, King County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Navigate Inherited Property in Redmond
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Property decisions in Redmond often involve relocation, timing, and changing family circumstances. Clear guidance can help simplify what can otherwise feel complex.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families in Redmond Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Redmond's dynamic market and mobile population mean that property transitions often overlap with career moves, family changes, and geographic distance. These are the situations that most often bring families to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Relocation tied to career or life changes",
                "Inherited property during a transition",
                "Multiple decision-makers across different locations",
                "Questions about timing, pricing, and preparation",
                "Uncertainty about next steps",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={22} className="mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local Market */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Redmond Property Decisions Require Thoughtful Timing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Redmond's real estate market is shaped by strong demand, tech-sector employment patterns, and a steady flow of relocation activity. Neighborhoods like Education Hill, Grass Lawn, Bear Creek, and Overlake each carry their own pricing dynamics and buyer profiles. In estate situations, understanding these distinctions can meaningfully affect the outcome.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Timing and preparation are especially important in Redmond. A well-prepared home positioned correctly can attract competitive interest, while a property that enters the market without thoughtful pricing or preparation may underperform — costing families time and money during an already stressful period.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective that provides defensible pricing, organized communication, and greater confidence for families navigating property decisions during periods of change.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Redmond?"
        body="David provides confidential consultations for executors, attorneys, trustees, and families handling inherited or estate property in Redmond and throughout King County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Transition Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support During Periods of Change
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Redmond families often face property decisions during broader life transitions — a career-driven relocation, a parent moving into care, or a family restructuring after a loss. When the property decision is just one part of a larger change, having a reliable resource to coordinate the details makes the process far more manageable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David works with families to align property timing with relocation schedules, care transitions, and multi-party decision-making. He keeps all stakeholders informed with clear, consistent communication — whether they are local, across the state, or out of the country.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is simple: reduce uncertainty, stay organized, and help the family move forward at a pace that works for their situation.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Bring Structure to the Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, structured framework designed to reduce uncertainty:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understand Your Situation",
                  desc: "We start with a confidential conversation to understand who's involved, what authority exists, what the timeline looks like, and what matters most to the family.",
                },
                {
                  title: "Review the Property and Context",
                  desc: "I visit the property, assess its condition, review the neighborhood context, and identify factors that may affect value, preparation needs, or the overall approach.",
                },
                {
                  title: "Develop a Pricing and Preparation Strategy",
                  desc: "Using my appraisal background and Redmond neighborhood-level market data, I develop a pricing strategy that's defensible, realistic, and aligned with buyer expectations in the area.",
                },
                {
                  title: "Coordinate Next Steps",
                  desc: "I coordinate with attorneys, trustees, cleanout vendors, contractors, and other professionals — keeping the process organized and all parties aligned.",
                },
                {
                  title: "Guide the Process Through Completion",
                  desc: "From listing through closing, I manage the details with consistent communication, clear updates, and a structured approach that keeps the process moving toward resolution.",
                },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading="Redmond Inherited & Estate Property FAQ" />

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/executors", label: "For Executors" },
                { to: "/probate-estate-sales", label: "Probate & Estate Sales" },
                { to: "/for-attorneys", label: "For Attorneys" },
                { to: "/why-valuation-matters", label: "Why Valuation Matters" },
                { to: "/senior-transitions", label: "Senior Transitions" },
                { to: "/king-county", label: "King County Overview" },
                { to: "/how-the-process-works", label: "How the Process Works" },
                { to: "/cities-we-serve", label: "All Cities" },
              ].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cornerstone Guides */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" },
                { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" },
                { to: "/guides/inherited-house-washington", label: "Inherited House Guide" },
                { to: "/guides/out-of-state-families", label: "Out-of-State Families" },
                { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" },
                { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" },
              ].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/redmond-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Simple Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are dealing with a property in Redmond and navigating a transition, a short conversation can help clarify your options.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              No pressure. Just practical guidance.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Consultation
                </Button>
              </Link>
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

export default RedmondProbateEstate;
