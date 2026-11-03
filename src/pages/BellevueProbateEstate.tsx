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
    question: "How does selling an inherited home in Bellevue work?",
    answer:
      `An inherited Bellevue home usually can't be listed until someone has legal authority to sell it, through probate or trust administration. ${FEATURED_BROKER.Role} then works with the estate attorney, trustee, or personal representative on the property assessment, a defensible price, preparation, and the sale itself, and keeps all parties updated.`,
  },
  {
    question: "What should a trustee do first with a Bellevue property?",
    answer:
      `Secure the property, go over the trust terms with the estate attorney, and get a realistic read on the home's condition and current market value. ${FEATURED_BROKER.Role} can tour the home, point out what affects value, and explain your options before you settle on a plan.`,
  },
  {
    question: `How does ${FEATURED_BROKER.role}'s appraisal background benefit Bellevue property sales?`,
    answer:
      `As both a licensed Washington State real estate broker and a state-certified residential appraiser, ${FEATURED_BROKER.role} bases pricing on a condition assessment and neighborhood-level market analysis instead of automated estimates. At Bellevue price levels a small pricing error is a large dollar amount, and that kind of review can help families and fiduciaries avoid one.`,
  },
  {
    question: "Can you get help if multiple beneficiaries are involved?",
    answer:
      `Yes. Bellevue estate and trust sales often involve several parties. ${FEATURED_BROKER.Role} keeps communication clear and documented so every party, local or out of state, has the same information. Pricing based on certified appraisal methodology can also help establish a defensible value when the parties need to agree.`,
  },
  {
    question: "What preparation is typically needed before selling a Bellevue estate property?",
    answer:
      `It depends on the property's condition, the neighborhood, and buyer expectations. Bellevue buyers often expect well-presented homes. Drawing on ${FEATURED_BROKER.pronoun.possessive} appraisal background, ${FEATURED_BROKER.role} weighs whether targeted preparation (cleaning, repairs, or staging) would add more to the price than it costs in money and time.`,
  },
  {
    question: "How long does it take to sell an estate property in Bellevue?",
    answer:
      `Timelines depend on the legal process, property condition, and preparation needs. When the home is prepared and the seller's authority is settled, a well-priced Bellevue listing typically sells within a few weeks. ${FEATURED_BROKER.Role} can plan around your particular constraints and tell you what to expect.`,
  },
];

const BellevueProbateEstate = () => {
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
        { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Bellevue, WA"
        description="Guidance for executors, trustees, and families with inherited or trust-owned property in Bellevue, WA. Discreet support across Eastside neighborhoods."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "King County", url: "/king-county" },
          { name: "Bellevue", url: "/bellevue-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">
        <ProbateStartHere />

      {/* Hero */}
      <HeroBandTitle as="h1">Bellevue Estate & Trust Property Sales: Built for Higher-Value Homes</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Bellevue estate sales often involve trust-owned property, multiple beneficiaries, and homes in the $1.5M–$5M range, where a 2% pricing error reaches six figures at the top end. Bridle Trails, Somerset, West Bellevue, and Newport Shores each have their own buyer expectations, and the preparation that suits a Medina view home is rarely what suits a Crossroads condo.
          </p>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families and Fiduciaries in Bellevue Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bellevue property transitions often involve high values, several parties, and sensitive family matters. Families and professionals usually contact Real Property Planning for one of these reasons:
            </p>
            <ul className="space-y-4">
              {[
                "Trust-owned or inherited property requiring careful valuation",
                "Multiple family members or beneficiaries involved in decisions",
                "High-value property where pricing mistakes can be costly",
                "Home needing preparation before sale to meet Bellevue buyer expectations",
                "Attorney or fiduciary looking for a local Eastside real estate contact",
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
              Why Bellevue Properties Often Require a More Careful Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Bellevue homes often carry higher values and more pricing sensitivity than homes in surrounding communities. A mid-century rambler in Enatai, newer construction in West Bellevue, and a family estate in Somerset each come with different opportunities and risks, and an estate or trust sale has to account for those differences before a price is set.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Buyer expectations are higher too. Condition, presentation, and timing all affect the result. Listing before the property is properly prepared, or pricing it without a clear read on the neighborhood market, can cost a family tens of thousands of dollars.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, {FEATURED_BROKER.role} begins with valuation. That supports defensible pricing and organized communication with attorneys and trustees when a lot of money rides on the decision.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Bellevue?"
        body={`${FEATURED_BROKER.name}, a licensed real estate broker, offers confidential property consultations for executors, attorneys, trustees, and families handling inherited or trust-owned property in Bellevue and throughout King County.`}
        buttonText="Schedule a Consultation"
        microcopy="The consultation carries no obligation and stays on the practical property questions."
      />

      {/* Coordination Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Families, Trustees, and Busy Professionals
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Bellevue estate and trust property transitions often involve busy professionals, out-of-state beneficiaries, attorneys, and trustees who need a local contact. {FEATURED_BROKER.Role} serves as a central point of coordination and handles the local details.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              In practice that means keeping all parties informed, coordinating vendors for cleanout, repairs, and staging, overseeing preparation, and handling the process with discretion. {FEATURED_BROKER.Role} keeps the work organized for a trustee balancing the role with a demanding job, an attorney advising a client, or a family member going through a hard transition.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Multiple beneficiaries, sensitive family dynamics, and properties that need significant preparation are handled the same way: carefully and with discretion.
            </p>
          </div>
        </div>
      </section>

      {/* How a featured broker helps (third person since Sept 27, 2026: the hub does not do this work) */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How {FEATURED_BROKER.roleTitle} Can Help With High-Stakes Property Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Each engagement differs in its details. The sequence is usually this:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: `The first step is a confidential conversation in which ${FEATURED_BROKER.role} learns who's involved, what authority exists, what the timeline looks like, and what each party needs from the sale.`,
                },
                {
                  title: "Reviewing the Property and Ownership Context",
                  desc: `${FEATURED_BROKER.pronoun.Subject} inspects the home in person, reviews the ownership structure, and identifies factors that may affect value, preparation needs, or the sales approach.`,
                },
                {
                  title: "Eastside Pricing Strategy",
                  desc: `Pricing comes from certified appraisal methods and Bellevue neighborhood-level market data, with the aim of a figure that is realistic, defensible, and fair to all parties.`,
                },
                {
                  title: "Coordinating Preparation and Next Steps",
                  desc: `${FEATURED_BROKER.pronoun.Subject} keeps attorneys, trustees, cleanout vendors, contractors, and stagers on the same schedule so the parties stay aligned.`,
                },
                {
                  title: "Guiding the Sale Through Closing",
                  desc: `${FEATURED_BROKER.pronoun.Subject} manages the listing and closing details, keeps every party updated, and keeps the sale moving until it closes.`,
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
      <PageFAQ faqs={faqs} heading="Bellevue Estate & Trust Property FAQ" />

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

      <RelatedServices currentPath="/bellevue-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Clear Next Step for Bellevue Property Decisions
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling an inherited or trust-owned property in Bellevue, a short conversation can cover the value questions, the parties involved, and what to do first.
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

export default BellevueProbateEstate;

