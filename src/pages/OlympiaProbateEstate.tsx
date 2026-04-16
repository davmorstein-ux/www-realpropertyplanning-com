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
import { realEstateAgentSchema, areaServed } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  {
    question: "How does selling an inherited home in Olympia work?",
    answer:
      "Selling inherited property in Olympia typically requires legal authority through probate or trust administration before the home can be listed. David coordinates with the estate attorney, trustee, or personal representative to assess the property, develop a defensible pricing strategy, manage preparation, and guide the sale — keeping all parties informed throughout.",
  },
  {
    question: "What should I do first with an inherited Olympia property?",
    answer:
      "Secure the property, review the legal authority with the estate attorney, and get a realistic assessment of the home's condition and current market value. David can evaluate the property, identify factors that affect value, and help you understand your options before committing to a course of action.",
  },
  {
    question: "How does David Stein's appraisal background benefit Olympia property sales?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing strategy grounded in actual condition assessment and neighborhood-level market analysis. In Olympia, where many estate properties reflect decades of ownership, this dual perspective helps families avoid pricing mistakes tied to deferred maintenance or outdated improvements.",
  },
  {
    question: "Can David help with a property transition tied to retirement or senior living?",
    answer:
      "Yes. Many Olympia families reach out when a parent or loved one is transitioning into retirement, assisted living, or long-term care. David helps coordinate the timing of the property sale with the transition, working with families and professionals to keep the process organized and manageable.",
  },
  {
    question: "What if the property has been in the family for a long time and needs work?",
    answer:
      "Long-held properties often have deferred maintenance, outdated systems, or accumulated personal belongings. David evaluates what preparation is worth doing — and what isn't — based on the likely return, the timeline, and the family's goals. Not every home needs extensive renovation before sale.",
  },
  {
    question: "How long does it take to sell an estate property in Olympia?",
    answer:
      "Timelines depend on the legal process, property condition, and preparation needs. David helps set realistic expectations and builds a plan around your specific situation — including any coordination needed with family members, care transitions, or legal timelines.",
  },
];

const OlympiaProbateEstate = () => {
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
        { "@type": "City", name: "Olympia", containedInPlace: { "@type": "State", name: "Washington" } },
        ...areaServed,
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
        title="Probate & Estate Real Estate in Olympia, WA"
        description="Guidance for families, executors, and seniors with estate or inherited property in Olympia, WA. Support for transitions, timing, and next steps."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Thurston County", url: "/counties" },
          { name: "Olympia", url: "/olympia-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Olympia, Thurston County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Navigate Estate Property in Olympia
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              In Olympia, estate property decisions are often connected to retirement, downsizing, and long-term planning. A thoughtful approach can make the process much easier for everyone involved.
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
              When Families in Olympia Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Olympia families often face property decisions during retirement transitions, after a loss, or when long-held homes need thoughtful attention. These are the situations that most often bring families to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Transition into retirement or assisted living",
                "Inherited home following long-term ownership",
                "Family members working through next steps together",
                "Property needing preparation before sale",
                "Questions about timing and decision-making",
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
              Why Olympia Property Decisions Benefit From a Measured Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many estate properties in Olympia reflect decades of ownership — homes in neighborhoods like South Capitol, Eastside, and the greater Lacey-Tumwater corridor that have been well-loved but may need updating. Pacing and timing matter in these situations, because rushing a sale without proper preparation often leads to a lower outcome.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Property condition frequently reflects years of deferred maintenance, accumulated belongings, and systems that may need attention. A thoughtful assessment of what preparation is worth doing — and what isn't — can significantly improve both the sale price and the family's experience of the process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective that helps Olympia families understand their property's true position in the market — and make decisions grounded in realistic expectations rather than guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Olympia?"
        body="David provides confidential consultations for families, executors, and professionals handling estate or inherited property in Olympia and throughout Thurston County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Transition Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support Through Retirement and Life Transitions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many Olympia families reach out when a parent or loved one is moving into retirement, downsizing, or transitioning into assisted living or long-term care. These moments are deeply personal, and the property decisions that accompany them deserve a calm, patient approach.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David works with families to coordinate timing, simplify decision-making, and keep the process manageable. He communicates clearly with all family members and professionals involved — reducing confusion and helping everyone stay aligned.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether the timeline is flexible or driven by a care transition, having a steady, experienced resource who understands both the property and the emotional weight of the process can make a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Make the Process More Manageable
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, structured framework designed to reduce uncertainty:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understand Your Situation",
                  desc: "We start with a confidential conversation to understand who's involved, what the timeline looks like, and what matters most to the family.",
                },
                {
                  title: "Assess the Property and Needs",
                  desc: "I visit the property, evaluate its condition, and identify what preparation — if any — would meaningfully improve the outcome.",
                },
                {
                  title: "Develop a Clear Plan",
                  desc: "Using my appraisal background and local market knowledge, I develop a pricing and preparation strategy that's realistic, defensible, and aligned with the family's goals.",
                },
                {
                  title: "Coordinate Next Steps",
                  desc: "I coordinate with attorneys, family members, cleanout services, and contractors — keeping the process organized and all parties informed.",
                },
                {
                  title: "Guide the Process From Start to Finish",
                  desc: "From listing through closing, I manage the details with consistent communication, clear updates, and a patient approach that respects the family's pace.",
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
      <PageFAQ faqs={faqs} heading="Olympia Estate & Inherited Property FAQ" />

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

      <RelatedServices currentPath="/olympia-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Comfortable Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling a property in Olympia and want a steady, thoughtful approach, a short conversation can help you move forward with confidence.
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

export default OlympiaProbateEstate;

