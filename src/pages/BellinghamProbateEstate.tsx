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
    question: "Can you get help with an inherited property in Bellingham if I live out of the area?",
    answer:
      `Yes. ${FEATURED_BROKER.Role} works with families managing Bellingham properties from Seattle, from other states, or from farther away. ${FEATURED_BROKER.pronoun.Subject} coordinates property access, vendor management, preparation, and the sale process, and keeps you updated so you don't need to make unnecessary trips.`,
  },
  {
    question: "What makes Bellingham's real estate market different from the rest of Washington?",
    answer:
      "Bellingham's market is shaped by Western Washington University and by its closeness to the San Juan Islands and the Canadian border. Property types range from historic Lettered Streets homes to rural acreage outside city limits. Prices and buyer expectations vary a good deal by neighborhood, and automated estimates often miss these differences.",
  },
  {
    question: "How does an appraisal background help with Bellingham properties?",
    answer:
      `As both a licensed Washington State real estate broker and a state-certified residential appraiser, ${FEATURED_BROKER.role} provides pricing based on the property's actual condition and local market data. That matters in Bellingham, where unusual property types and location can affect value considerably.`,
  },
  {
    question: "Should I prepare an inherited Bellingham home before selling?",
    answer:
      `It depends on the property's condition, your timeline, and your goals. ${FEATURED_BROKER.Role} evaluates which improvements are likely to return more than they cost, and which aren't worth doing. For families managing from a distance, knowing this before work starts can save time and money.`,
  },
  {
    question: "How long does it typically take to sell an estate property in Bellingham?",
    answer:
      `Timelines depend on the probate or trust process, property condition, and seasonal market factors. Once the property is ready and legal authority is established, well-priced Bellingham homes generally sell within a reasonable time. ${FEATURED_BROKER.Role} can give you a realistic estimate for your property.`,
  },
  {
    question: "What if the inherited property is a second home or vacation property?",
    answer:
      `Second homes and vacation properties are common in the Bellingham area. These properties may have deferred maintenance, shared ownership, or unusual features that affect pricing. ${FEATURED_BROKER.Role} assesses the property's condition and where it sits in the market, and plans the sale around those factors.`,
  },
];

const BellinghamProbateEstate = () => {
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
        { "@type": "City", name: "Bellingham", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Bellingham, WA"
        description="Guidance for executors and families with inherited or estate property in Bellingham, WA. Out-of-area support and coordinated decisions."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Bellingham", url: "/bellingham-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Helping Families Handle Inherited Property in Bellingham</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Bellingham estate properties often involve distance, a local market unlike Seattle's, and homes that have been in one family for a long time. It helps to have someone who knows both the property and the process.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families With Bellingham Property Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bellingham sits apart from the Puget Sound metro, and the families who own property here often live somewhere else. These are typical situations in which people contact {FEATURED_BROKER.role}:
            </p>
            <ul className="space-y-4">
              {[
                "Inherited a family home or second property in Bellingham while living elsewhere",
                "Out-of-area owner unsure about property condition, local pricing, or next steps",
                "Vacation or second home that needs preparation and a realistic market strategy",
                "Multiple family members with different ideas about what to do with the property",
                "Estate or trust property requiring coordination with attorneys or other professionals",
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
              Why Bellingham Properties Require Local Understanding
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Bellingham's market works differently from Seattle's or the Eastside's. It is shaped by Western Washington University, the nearby San Juan Islands, outdoor recreation, and a strong local identity. Property values, buyer expectations, and seasonal patterns don't follow the same rules as the metro areas to the south.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Property types vary widely, from walkable Lettered Streets Victorians and South Hill craftsmen to rural parcels in the county. Inherited and estate homes here have often been owned for decades, and their condition ranges from well maintained to years of put-off maintenance. Working out what a property is worth as it stands takes an in-person look at it.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, {FEATURED_BROKER.role} prices from the property's actual condition and comparable sales, not from automated estimates that miss Bellingham's local differences.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Handling a Bellingham Property From a Distance?"
        body={`${FEATURED_BROKER.name}, a licensed real estate broker, offers confidential property consultations for executors, trustees, and families dealing with inherited or estate property in Bellingham and Whatcom County, for local owners and for those managing from out of the area.`}
        buttonText="Schedule a Consultation"
        microcopy="No obligation. The conversation covers the practical property questions."
      />

      {/* Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Out-of-Area Owners and Second-Home Situations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Bellingham estate properties often belong to families who don't live nearby. The owner may have retired here, used the property as a vacation home, or held it for decades before passing it to the next generation. Either way, the family handling it now has the same problem: deciding what to do with a home they can't easily visit.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} acts as the local coordinator: visiting the property, assessing its condition, managing cleanout crews and contractors, and keeping in touch with attorneys and family members. The aim is to take the local logistics off your hands so you can decide without repeated trips.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Second homes and vacation properties often raise other questions: seasonal access, shared ownership, deferred maintenance, or unusual features that affect how easily the property sells. {FEATURED_BROKER.Role} looks at these factors and plans the sale around the property's actual condition and place in the market.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help With Bellingham Property Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The work usually follows the same five steps:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding Your Situation",
                  desc: `${FEATURED_BROKER.Role} starts with a conversation about the property, the people involved, the legal context, and what you want to happen, from a straightforward sale to something that needs more coordination.`,
                },
                {
                  title: "Assessing the Property",
                  desc: `${FEATURED_BROKER.pronoun.Subject} visits the property, documents its condition, identifies issues that affect value, and gives a view of what preparation, if any, makes sense for your goals and timeline.`,
                },
                {
                  title: "Understanding the Local Market",
                  desc: `Using ${FEATURED_BROKER.pronoun.possessive} appraisal background and Bellingham-specific data, ${FEATURED_BROKER.pronoun.subject} sets a price that reflects the property's actual condition, its location, and the current market rather than automated estimates.`,
                },
                {
                  title: "Coordinating Locally",
                  desc: `${FEATURED_BROKER.pronoun.Subject} works with cleanout crews, contractors, and other vendors as needed. For out-of-area families, ${FEATURED_BROKER.pronoun.subject} handles the local logistics so you don't have to make repeated trips to Bellingham.`,
                },
                {
                  title: "Guiding the Sale to Completion",
                  desc: `From listing through closing, ${FEATURED_BROKER.pronoun.subject} manages the details and sends regular updates.`,
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
      <PageFAQ faqs={faqs} heading="Bellingham Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/bellingham-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Grounded First Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you're handling a Bellingham property, locally or from a distance, a short conversation can help you understand where the property stands and what your options are.
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

export default BellinghamProbateEstate;

