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
    question: "How does selling an inherited home work in Tacoma?",
    answer:
      `Selling an inherited home in Tacoma usually means confirming legal authority (through probate or trust administration), evaluating the property's condition, and settling on a realistic pricing and preparation plan. ${FEATURED_BROKER.Role} coordinates the work from the first assessment through closing and keeps everyone involved updated on the timeline.`,
  },
  {
    question: "What should a Tacoma executor do first with an inherited property?",
    answer:
      `Start by securing the property and confirming that you have legal authority to act. Then get an honest read on its condition and value. Inherited homes in Tacoma often have years of deferred maintenance. ${FEATURED_BROKER.Role} can walk through the property, identify issues that affect value, and lay out your options before you choose a course.`,
  },
  {
    question: `How does ${FEATURED_BROKER.role}'s appraisal background help with Tacoma properties?`,
    answer:
      `As both a licensed Washington State real estate broker and a state-certified residential appraiser, ${FEATURED_BROKER.role} prices from a condition assessment and neighborhood-level market data rather than automated estimates. That helps in Tacoma, where property values can change considerably from one neighborhood to the next.`,
  },
  {
    question: "Can you get help if I live out of state but the property is in Tacoma?",
    answer:
      `Yes. ${FEATURED_BROKER.Role} works with out-of-state executors and family members who manage Tacoma properties remotely. ${FEATURED_BROKER.pronoun.Subject} coordinates property access, vendors, preparation, and the sale, and sends updates along the way, which saves you trips you would otherwise have to make.`,
  },
  {
    question: "Should I fix up an inherited home in Tacoma before selling?",
    answer:
      `That turns on three things: the home's condition, your budget, and your timeline. ${FEATURED_BROKER.Role} uses ${FEATURED_BROKER.pronoun.possessive} appraisal background to judge which improvements are likely to raise the sale price by more than they cost, and which aren't worth it. Sometimes selling as-is makes sense; other times a few targeted repairs make a real difference.`,
  },
  {
    question: "How long does it take to sell an estate property in Tacoma?",
    answer:
      `Timelines vary based on the probate or trust administration process, property condition, and current market conditions. Well-priced Tacoma homes typically sell within a few weeks once authority is in place and the property is ready. ${FEATURED_BROKER.Role} can give you a realistic schedule for your own property.`,
  },
];

const TacomaProbateEstate = () => {
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
        { "@type": "City", name: "Tacoma", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Tacoma, WA"
        description={`Guidance for executors, trustees, and families with inherited property in Tacoma, WA. Local Pierce County expertise from ${FEATURED_BROKER.role}, from start to finish.`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Pierce County", url: "/pierce-county" },
          { name: "Tacoma", url: "/tacoma-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Inherited Tacoma Homes: North End Craftsmans to South End Ramblers</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Many Tacoma estate homes were built before 1950 and carry decades of deferred maintenance: older character houses in the North End and Stadium District, mid-century ramblers in the South End, and post-war homes across Hilltop and Eastside. Fixing everything is rarely the answer. The useful question is which repairs Tacoma buyers will actually pay for, and which ones to skip.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families in Tacoma Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tacoma families and professionals usually get in touch with {FEATURED_BROKER.role} in situations like these:
            </p>
            <ul className="space-y-4">
              {[
                "Inherited family home with years of deferred maintenance",
                "Executor or family member unsure what to do first",
                "Siblings deciding whether to sell or keep the property",
                "Home needing cleanup, repairs, or sale preparation",
                "Questions about pricing, timing, and next steps in Tacoma's market",
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
              Why Tacoma Estate Properties Need a Practical Strategy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Tacoma covers a wide range of neighborhoods, price points, and property conditions, from the historic homes of Stadium District and Old Town to the mid-century ramblers of South Tacoma and the waterfront properties of Ruston and Point Defiance. What works in one area may not apply in another, and inherited homes often raise problems that standard marketing doesn't address.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many inherited properties in Tacoma have been lived in for decades. Deferred maintenance, dated systems, and personal belongings are common. Knowing when to spend on preparation and when to sell as-is matters as much as marketing, and getting it wrong can cost a family time and money.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, {FEATURED_BROKER.role} starts from value: the property's actual condition and neighborhood-level market data. That supports pricing that can be defended and clearer communication with attorneys and courts.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Tacoma?"
        body={`${FEATURED_BROKER.name}, a licensed real estate broker, offers confidential property consultations for executors, trustees, and families dealing with inherited or estate property in Tacoma and throughout Pierce County.`}
        buttonText="Schedule a Consultation"
        microcopy="There is no obligation; the call is about the practical property questions."
      />

      {/* Out-of-State / Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Families Handling Property From a Distance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Families managing Tacoma estate property often live elsewhere: across the state, across the country, or abroad. Coordinating vendors, getting into the property, understanding local conditions, and running a sale remotely is a lot to take on from a distance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              {FEATURED_BROKER.Role} serves as a local point of coordination. {FEATURED_BROKER.pronoun.Subject} handles access to the house, lines up cleanout crews, contractors, and preparation vendors, stays in contact with attorneys and other parties, and keeps you updated. That cuts down on travel and makes it less likely that a task gets missed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The arrangement is the same from Portland, Phoenix, or the other side of the country: {FEATURED_BROKER.role} aims to keep the process clear and manageable wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help Bring Structure to the Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Each estate differs in its details, though the work generally runs in this order:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: `${FEATURED_BROKER.Role} begins with a conversation (not a sales pitch) to learn who's involved, what authority exists, what the property looks like, and what the goals are.`,
                },
                {
                  title: "Evaluating the Property",
                  desc: `${FEATURED_BROKER.pronoun.Subject} visits the property, assesses its condition, identifies issues that affect value, and notes which preparation might be worthwhile and which isn't worth the cost or delay.`,
                },
                {
                  title: "Tacoma Pricing Strategy",
                  desc: `Drawing on certified appraisal experience and Tacoma-specific market data, ${FEATURED_BROKER.role} develops pricing that's defensible, realistic, and tailored to the neighborhood and condition of the home.`,
                },
                {
                  title: "Coordinating Preparation and Next Steps",
                  desc: `${FEATURED_BROKER.pronoun.Subject} works with attorneys, co-executors, cleanout crews, contractors, and other parties to keep everyone aligned, the timeline clear, and the process moving forward.`,
                },
                {
                  title: "Guiding the Process From Start to Finish",
                  desc: `${FEATURED_BROKER.pronoun.Subject} handles the details from listing through closing and sends updates as the sale progresses.`,
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
      <PageFAQ faqs={faqs} heading="Tacoma Probate & Estate Property FAQ" />

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
                { to: "/pierce-county", label: "Pierce County Overview" },
                { to: "/for-attorneys", label: "For Attorneys" },
                { to: "/why-valuation-matters", label: "Why Valuation Matters" },
                { to: "/how-the-process-works", label: "How the Process Works" },
                { to: "/resources/property-preparation-services", label: "Property Preparation" },
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

      <RelatedServices currentPath="/tacoma-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Practical Next Step for Tacoma Families
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are dealing with an inherited or estate property in Tacoma and need help deciding what to do next, a short conversation can help sort out what to do first.
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

export default TacomaProbateEstate;

