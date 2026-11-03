import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { hubOrganizationSchema, areaServed } from "@/lib/schema";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import ProbateStartHere from "@/components/ProbateStartHere";

const SITE_URL = "https://realpropertyplanning.com";

const faqs = [
  {
    question: "How does selling a home in probate work in Seattle?",
    answer:
      `A Seattle home going through probate can't be listed until the court has given the personal representative authority to sell it. ${FEATURED_BROKER.Role} then handles the property side with the estate attorney and the personal representative: evaluating the house, managing preparation, setting a price from local sales data, and running the sale, with every party kept up to date.`,
  },
  {
    question: "What should an executor do first with a Seattle property?",
    answer:
      `Lock up and secure the house first. Next, confirm that your legal authority to act is in place, then find out what condition the home is in and roughly what it is worth on the market. ${FEATURED_BROKER.Role} can tour the property, point out problems that would affect the price, and lay out the choices before you commit to one.`,
  },
  {
    question: `How does ${FEATURED_BROKER.role}'s appraisal background benefit Seattle sellers?`,
    answer:
      `${FEATURED_BROKER.Role} is licensed in Washington as a real estate broker and certified by the state as a residential appraiser, so the price starts from the home's actual condition and recent sales in its own neighborhood, not from an automated estimate. That matters in Seattle, where prices can differ considerably between neighborhoods.`,
  },
  {
    question: "Can you get help if I live out of state but the property is in Seattle?",
    answer:
      `Yes. ${FEATURED_BROKER.Role} works with executors, trustees, and heirs who are handling a Seattle property from another state. ${FEATURED_BROKER.pronoun.Subject} can arrange access to the house, schedule vendors, oversee preparation, and handle the sale, sending updates as each step is done, which can save you trips to Seattle.`,
  },
  {
    question: "What should be done before listing an inherited home in Seattle?",
    answer:
      `The answer turns on the home's condition, where it sits, and how much time you have. ${FEATURED_BROKER.Role} weighs selling as-is against doing selected work first, and draws on ${FEATURED_BROKER.pronoun.possessive} appraisal background to estimate whether a given improvement would bring back more than it costs, counting the delay.`,
  },
  {
    question: "How long does it take to sell a probate property in Seattle?",
    answer:
      `It depends on where the probate stands, the condition of the house, and the market at the time. Once the authority to sell is in place and the home is ready, well-priced Seattle homes often sell within 2–4 weeks. ${FEATURED_BROKER.Role} can sketch a realistic schedule for your property.`,
  },
];

const SeattleProbateEstate = () => {
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
      ...hubOrganizationSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Seattle, WA"
        description="Guidance for executors, trustees, and families with inherited property in Seattle, WA. Hands-on local coordination from listing through closing."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "King County", url: "/king-county" },
          { name: "Seattle", url: "/seattle-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Selling an Inherited Seattle Home: From Ballard to Beacon Hill</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Inside Seattle city limits, an estate home is best priced from its own neighborhood's sales rather than citywide averages. A Capitol Hill condo, a West Seattle craftsman, and a Magnolia view home are three different sales, each with its own buyers, preparation decisions, and price ceiling.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families in Seattle Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Seattle property questions that families and professionals bring to {FEATURED_BROKER.role} usually fall into one of these groups:
            </p>
            <ul className="space-y-4">
              {[
                "Executor living out of state with a Seattle house to look after",
                "Family home owned for decades, with repairs put off for years",
                "Several heirs deciding whether to sell, keep, or divide the property",
                "House that needs some preparation before it is listed",
                "Uncertainty around pricing, valuation, and timing in Seattle's shifting market",
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
              Why Seattle Properties Require Careful Strategy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Prices in Seattle can change sharply from one neighborhood to the next, and that matters when the property belongs to an estate. A mid-century house in Ballard, a split-level in Rainier Beach, and a view home on Queen Anne attract different buyers and call for different decisions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Getting the list price right matters. A home priced too high can sit unsold and draw questions from the court or the other parties; one priced too low costs the heirs value they are entitled to. Estate and probate sales often leave less room for error.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {FEATURED_BROKER.Role} is a licensed Washington State real estate broker who is also a state-certified residential appraiser, and starts from the property's value. The aim is a price that can be explained and defended, clearer reporting to attorneys and the court, and firmer footing for families facing hard choices.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Seattle?"
        body={`Executors, attorneys, trustees, and families with inherited or estate property in Seattle or anywhere in King County can ask ${FEATURED_BROKER.name}, a licensed real estate broker, for a confidential property consultation.`}
        buttonText="Schedule a Consultation"
        microcopy="There's no obligation, and the conversation stays on the property itself."
      />

      {/* Out-of-State */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Out-of-State Executors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Executors and trustees for Seattle property often live hundreds or thousands of miles away. Lining up vendors, getting someone into the house, reading the local market, and selling from far away takes time and attention, at a point when you may also be grieving.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} can act as your contact on the ground in Seattle. {FEATURED_BROKER.pronoun.Subject} arranges entry to the house, coordinates cleanout crews, contractors, and stagers, talks with the attorneys and anyone else involved, and reports back as each piece is done. That means fewer trips for you and fewer loose ends to track from a distance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The arrangement does not change if you live in California, Texas, New York, or overseas; {FEATURED_BROKER.role}'s goal is a sale you can follow and manage from home.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help Simplify the Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The details change from estate to estate. The order of the work usually doesn't:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: `${FEATURED_BROKER.Role} begins by talking through who is involved, who has authority to act, and what the family wants from the sale. It is a conversation, not a sales pitch.`,
                },
                {
                  title: "Property Review",
                  desc: `${FEATURED_BROKER.pronoun.Subject} walks through the house in person, records its condition and anything likely to affect value, and notes which preparation could pay off.`,
                },
                {
                  title: "Pricing Strategy",
                  desc: `${FEATURED_BROKER.pronoun.Subject} sets a price from recent sales in the same Seattle neighborhood and the home's condition, applying ${FEATURED_BROKER.pronoun.possessive} appraisal training so the number is realistic and can be explained to everyone involved.`,
                },
                {
                  title: "Coordination",
                  desc: `${FEATURED_BROKER.pronoun.Subject} keeps the attorneys, co-executors, cleanout crews, and contractors on a shared schedule so no one is left waiting on someone else.`,
                },
                {
                  title: "Guiding the Process to Completion",
                  desc: `${FEATURED_BROKER.pronoun.Subject} runs the listing, the offers, and the closing, and keeps you posted until the sale is final.`,
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
      <PageFAQ faqs={faqs} heading="Seattle Probate & Estate Property FAQ" />

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/executors", label: "For Executors" },
                { to: "/probate-estate-sales", label: "Probate & Estate Sales" },
                { to: "/senior-transitions", label: "Senior Transitions" },
                { to: "/king-county", label: "King County Overview" },
                { to: "/for-attorneys", label: "For Attorneys" },
                { to: "/why-valuation-matters", label: "Why Valuation Matters" },
                { to: "/how-the-process-works", label: "How the Process Works" },
                { to: `/counties`, label: "All Cities" },
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

      <RelatedServices currentPath="/seattle-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Calm, Clear Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you have a Seattle property to deal with and no clear next step, a short conversation is often enough to settle the first decision.
            </p>
            <div className="flex justify-center">
              <Link to="/contact?reason=estate-property">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
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

export default SeattleProbateEstate;

