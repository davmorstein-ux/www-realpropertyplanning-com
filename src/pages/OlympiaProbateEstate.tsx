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

const faqs = [
  {
    question: "How does selling an inherited home in Olympia work?",
    answer:
      `Selling inherited property in Olympia usually requires legal authority through probate or trust administration before the home can be listed. ${FEATURED_BROKER.Role} works with the estate attorney, trustee, or personal representative to assess the property, set a defensible price, manage preparation, and handle the sale, keeping everyone informed along the way.`,
  },
  {
    question: "What should I do first with an inherited Olympia property?",
    answer:
      `Secure the property, review the legal authority with the estate attorney, and get a realistic assessment of the home's condition and current market value. ${FEATURED_BROKER.Role} can evaluate the property, identify factors that affect value, and talk through the choices with you before anything is decided.`,
  },
  {
    question: `How does ${FEATURED_BROKER.role}'s appraisal background benefit Olympia property sales?`,
    answer:
      `As both a licensed Washington State real estate broker and a state-certified residential appraiser, ${FEATURED_BROKER.role} sets prices from what the property's condition and neighborhood-level sales actually show. Many Olympia estate properties reflect decades of ownership, and looking at them with an appraiser's eye can help families avoid pricing mistakes tied to deferred maintenance or outdated improvements.`,
  },
  {
    question: "Can you get help with a property transition tied to retirement or senior living?",
    answer:
      `Yes. Olympia families often get in touch when a parent or other relative is moving into retirement, assisted living, or long-term care. ${FEATURED_BROKER.Role} helps time the property sale around the move and works with the family and other professionals to keep things organized.`,
  },
  {
    question: "What if the property has been in the family for a long time and needs work?",
    answer:
      `Long-held properties often have deferred maintenance, outdated systems, or accumulated personal belongings. ${FEATURED_BROKER.Role} evaluates which preparation is worth doing, and which isn't, based on the likely return, the timeline, and the family's goals. Not every home needs extensive renovation before sale.`,
  },
  {
    question: "How long does it take to sell an estate property in Olympia?",
    answer:
      `Timelines depend on the legal process, property condition, and preparation needs. ${FEATURED_BROKER.Role} can estimate a realistic schedule and plan the sale around it, including any coordination needed with family members, care transitions, or legal timelines.`,
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
      ...hubOrganizationSchema,
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
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Helping Families With Estate Property in Olympia</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            In Olympia, estate property decisions are often tied to retirement, downsizing, and long-term planning, so the timing of a sale deserves as much thought as the price.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families in Olympia Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Property questions in Olympia tend to come up at a retirement move, after a death, or when a long-held home needs work. These are the usual reasons families contact Real Property Planning:
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
              Many estate properties in Olympia reflect decades of ownership. Homes in neighborhoods like South Capitol and Eastside, and across the greater Lacey-Tumwater corridor, have often been well cared for but may need updating. Pacing matters here, because rushing a sale without proper preparation often leads to a lower price.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Condition often shows years of deferred maintenance, accumulated belongings, and systems that may need attention. A careful look at which preparation is worth paying for, and which isn't, can improve the sale price and make the process easier on the family.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, {FEATURED_BROKER.role} begins with value. Olympia families then have a realistic picture of where the property stands in the market and can decide from evidence rather than guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Olympia?"
        body={`${FEATURED_BROKER.name}, a licensed real estate broker, offers confidential property consultations for families, executors, and professionals handling estate or inherited property in Olympia and throughout Thurston County.`}
        buttonText="Schedule a Consultation"
        microcopy="No obligation to proceed. Expect a practical conversation about the property."
      />

      {/* Transition Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support Through Retirement and Life Transitions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              A common reason for the first call in Olympia is a parent's move: into retirement, into a smaller home, or into assisted living or long-term care. These are personal decisions, and the property side rarely benefits from being rushed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} works with families to coordinate timing, simplify decisions, and keep the process manageable. {FEATURED_BROKER.pronoun.Subject} keeps the family members and professionals involved informed, so everyone works from the same information.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Some timelines are flexible; others are set by a move into care. In either case it helps to have one local contact who understands the property and the family's circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help Make the Process More Manageable
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A typical sale moves through five stages, paced to the family's timing:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understand Your Situation",
                  desc: `${FEATURED_BROKER.Role} starts with a confidential conversation to understand who's involved, what the timeline looks like, and what matters most to the family.`,
                },
                {
                  title: "Assess the Property and Needs",
                  desc: `${FEATURED_BROKER.pronoun.Subject} visits the property, evaluates its condition, and identifies any preparation likely to improve the result.`,
                },
                {
                  title: "Develop a Clear Plan",
                  desc: `Using ${FEATURED_BROKER.pronoun.possessive} appraisal background and local market knowledge, ${FEATURED_BROKER.pronoun.subject} develops a pricing and preparation strategy that's realistic, defensible, and aligned with the family's goals.`,
                },
                {
                  title: "Coordinate Next Steps",
                  desc: `Attorneys, family members, cleanout services, and contractors all have a part; ${FEATURED_BROKER.pronoun.subject} coordinates them so the process stays organized and everyone stays informed.`,
                },
                {
                  title: "Guide the Process From Start to Finish",
                  desc: `Through listing and closing, ${FEATURED_BROKER.pronoun.subject} manages the details, sends regular updates, and moves at a pace the family can keep up with.`,
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

      <RelatedServices currentPath="/olympia-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Comfortable Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling a property in Olympia, a short conversation can help you decide what to do first, and when.
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

export default OlympiaProbateEstate;

