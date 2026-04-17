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
    question: "How does selling an inherited home in Bellevue work?",
    answer:
      "Selling inherited property in Bellevue typically requires legal authority through probate or trust administration before the home can be listed. Our team coordinates with the estate attorney, trustee, or personal representative to assess the property, develop a defensible pricing strategy, manage preparation, and guide the sale — keeping all parties informed throughout.",
  },
  {
    question: "What should a trustee do first with a Bellevue property?",
    answer:
      "Secure the property, review the trust terms with the estate attorney, and get a realistic assessment of the home's condition and current market value. Our team can evaluate the property, identify factors that affect value, and help you understand your options before committing to a course of action.",
  },
  {
    question: "How does Real Property Planning's appraisal background benefit Bellevue property sales?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing strategy grounded in actual condition assessment and neighborhood-level market analysis — not automated estimates. In Bellevue's higher-value market, this dual perspective helps protect families and fiduciaries from costly pricing mistakes.",
  },
  {
    question: "Can our team help if multiple beneficiaries are involved?",
    answer:
      "Yes. Multi-party situations are common in Bellevue estate and trust sales. Our team provides clear, documented communication so all parties — whether local or out of state — have the same information. Pricing grounded in certified appraisal methodology also helps establish defensible value when consensus is needed.",
  },
  {
    question: "What preparation is typically needed before selling a Bellevue estate property?",
    answer:
      "It depends on the property's condition, the neighborhood, and buyer expectations. Bellevue buyers often expect well-presented homes. Our team evaluates whether targeted preparation — cleaning, repairs, or staging — is likely to increase the sale price enough to justify the cost and delay, using his appraisal background to make that assessment.",
  },
  {
    question: "How long does it take to sell an estate property in Bellevue?",
    answer:
      "Timelines depend on the legal process, property condition, and preparation needs. Once the property is ready and authority is established, well-priced Bellevue homes typically sell within a few weeks. Our team helps set realistic expectations and builds a plan around your specific situation and constraints.",
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
      ...realEstateAgentSchema,
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

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Bellevue, King County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Bellevue Estate &amp; Trust Property Sales — Built for Higher-Value Homes
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Bellevue estate sales often involve trust-owned property, multiple beneficiaries, and homes in the $1.5M–$5M range where a 2% pricing error becomes a six-figure mistake. Bridle Trails, Somerset, West Bellevue, and Newport Shores each carry their own buyer expectations — and the prep that makes sense for a Medina view home is rarely the prep that makes sense for a Crossroads condo.
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
              When Families and Fiduciaries in Bellevue Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Property transitions in Bellevue often involve higher stakes, more parties, and greater sensitivity. These are the situations that most often bring families and professionals to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Trust-owned or inherited property requiring careful valuation",
                "Multiple family members or beneficiaries involved in decisions",
                "High-value property where pricing mistakes can be costly",
                "Home needing preparation before sale to meet Bellevue buyer expectations",
                "Attorney or fiduciary seeking a reliable Eastside real estate resource",
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
              Bellevue properties frequently carry higher values and greater pricing sensitivity than homes in surrounding communities. A mid-century rambler in Enatai, a newer construction in West Bellevue, and a family estate in Somerset each present very different opportunities — and risks. In estate and trust situations, understanding these distinctions is essential.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Buyer expectations in Bellevue are also higher. Condition, presentation, and timing all influence the outcome. Listing a property before it's properly prepared — or pricing it without a clear understanding of the neighborhood market — can cost families tens of thousands of dollars.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning brings a valuation-first perspective that provides defensible pricing, organized communication with attorneys and trustees, and greater confidence for families navigating high-stakes property decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Bellevue?"
        body="Our team provides confidential consultations for executors, attorneys, trustees, and families handling inherited or trust-owned property in Bellevue and throughout King County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Coordination Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Families, Trustees, and Busy Professionals
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Bellevue estate and trust property transitions often involve busy professionals, out-of-state beneficiaries, attorneys, and trustees who need a reliable local resource they can count on. Our team serves as a central point of coordination — managing the details so no one has to do it alone.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              That means clear communication with all parties, coordinating vendors for cleanout, repairs, and staging, overseeing property preparation, and handling the process with discretion. Whether you're a trustee managing responsibilities alongside a demanding career, an attorney advising a client, or a family member navigating an emotional transition, our team keeps things organized and moving forward.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Complex situations — multiple beneficiaries, sensitive family dynamics, or properties that require significant preparation — are handled with professionalism and care.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Simplify High-Stakes Property Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, structured framework designed to reduce uncertainty:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: "We start with a confidential conversation to understand who's involved, what authority exists, what the timeline looks like, and what matters most to the parties involved.",
                },
                {
                  title: "Reviewing the Property and Ownership Context",
                  desc: "I visit the property, assess its condition, review ownership structure, and identify factors that may affect value, preparation needs, or the sales approach.",
                },
                {
                  title: "Eastside Pricing Strategy",
                  desc: "Drawing on certified appraisal experience and Bellevue neighborhood-level market data, we develop pricing that's defensible, realistic, and designed to protect the interests of all parties.",
                },
                {
                  title: "Coordinating Preparation and Next Steps",
                  desc: "I coordinate with attorneys, trustees, cleanout vendors, contractors, and staging professionals — keeping the process organized and all parties aligned.",
                },
                {
                  title: "Guiding the Sale With Clarity and Professionalism",
                  desc: "From listing through closing, I manage the details with consistent communication, clear updates, and a calm approach that keeps the process moving toward resolution.",
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

      <RelatedServices currentPath="/bellevue-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Clear Next Step for Bellevue Property Decisions
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling an inherited or trust-owned property in Bellevue and want a calm, informed perspective, a short conversation can often bring immediate clarity.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              No pressure. Just practical guidance for your situation.
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

export default BellevueProbateEstate;

