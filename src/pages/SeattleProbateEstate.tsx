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
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { realEstateAgentSchema } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const SITE_URL = "https://realpropertyplanning.com";

const faqs = [
  {
    question: "How does selling a home in probate work in Seattle?",
    answer:
      "Probate property sales in Seattle require court-granted authority before listing. David coordinates with the estate attorney and personal representative to evaluate the property, manage preparation, develop a pricing strategy grounded in local market data, and guide the sale from start to finish — keeping all parties informed throughout.",
  },
  {
    question: "What should an executor do first with a Seattle property?",
    answer:
      "Secure the property, confirm your legal authority to act, and get an honest assessment of the home's condition and market value. David can walk through the property, identify issues that affect value, and help you understand your options before you commit to anything.",
  },
  {
    question: "How does David Stein's appraisal background benefit Seattle sellers?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing strategy rooted in actual condition assessment and neighborhood-level market data — not automated estimates. This dual perspective is especially valuable in Seattle, where neighborhood pricing differences can be significant.",
  },
  {
    question: "Can David help if I live out of state but the property is in Seattle?",
    answer:
      "Yes. David regularly works with out-of-state executors, trustees, and heirs managing Seattle properties remotely. He coordinates property access, vendor management, preparation, and the entire sale process — keeping you informed at every step so you don't need to make unnecessary trips.",
  },
  {
    question: "What should be done before listing an inherited home in Seattle?",
    answer:
      "It depends on the property's condition, location, and your timeline. David evaluates whether to sell as-is or invest in targeted preparation — using his appraisal background to determine which improvements are likely to increase the sale price enough to justify the cost and delay.",
  },
  {
    question: "How long does it take to sell a probate property in Seattle?",
    answer:
      "Timelines vary depending on the probate process, property condition, and market conditions. Once the property is ready and authority is established, well-priced Seattle homes often sell within 2–4 weeks. David helps set realistic expectations and builds a timeline around your specific situation.",
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
      ...realEstateAgentSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Seattle, Washington | Real Property Planning"
        description="Guidance for executors, trustees, and families handling inherited property in Seattle. Valuation-informed strategy, clear communication, and full coordination."
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

      {/* Hero */}
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Seattle, King County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Navigate Inherited Property in Seattle
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              When a home becomes part of an estate, the decisions that follow can feel overwhelming — especially in a market like Seattle where pricing, timing, and property condition can significantly impact the outcome.
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
              When Families in Seattle Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most people don't plan for the moment they inherit a property or become responsible for selling one. These are some of the situations that bring families and professionals to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Out-of-state executor managing a Seattle property from a distance",
                "Long-held family home with years of deferred maintenance",
                "Multiple heirs deciding whether to sell, keep, or divide the property",
                "Property needing strategic preparation before going to market",
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
              Seattle is not a one-size-fits-all market. A mid-century home in Ballard, a split-level in Rainier Beach, and a view property on Queen Anne each present different opportunities and challenges. Neighborhood-level pricing differences can be dramatic — and they matter enormously when the property is part of an estate.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Pricing strategy is critical. List too high and the property sits, raising questions from the court or other parties. Price too low and heirs lose value they're entitled to. In estate and probate situations, there's often less room for error.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective that provides defensible pricing, clearer communication with attorneys and courts, and greater confidence for families making difficult decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Seattle?"
        body="David provides confidential consultations for executors, attorneys, trustees, and families dealing with inherited or estate property in Seattle and throughout King County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Out-of-State */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Out-of-State Executors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many executors and trustees managing Seattle property live hundreds or thousands of miles away. Coordinating vendors, accessing the property, understanding local conditions, and managing a sale remotely is stressful — especially when you're also grieving.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David serves as a local point of coordination. He manages property access, works with cleanout crews, contractors, and staging vendors, communicates with attorneys and other parties, and keeps you informed throughout the process — reducing unnecessary travel and giving you confidence that nothing is falling through the cracks.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're in California, Texas, New York, or overseas, David's goal is to make the process as clear and manageable as possible from wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Simplify the Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, repeatable framework:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: "We start with a conversation — no pressure, no sales pitch. I want to understand who's involved, what authority exists, and what the goals are.",
                },
                {
                  title: "Property Review",
                  desc: "I visit the property and assess its condition, identify issues that may affect value, and note what preparation might be worthwhile.",
                },
                {
                  title: "Pricing Strategy",
                  desc: "Using my appraisal background and local market data, I develop a pricing strategy that's defensible, realistic, and tailored to the neighborhood and condition.",
                },
                {
                  title: "Coordination",
                  desc: "I coordinate with attorneys, co-executors, cleanout crews, contractors, and other parties — keeping everyone aligned and the process moving.",
                },
                {
                  title: "Guiding the Process to Completion",
                  desc: "From listing through closing, I manage the details so you can focus on what matters most. Clear updates, no surprises, and a calm path to resolution.",
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

      <RelatedServices currentPath="/seattle-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Calm, Clear Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you're dealing with a property in Seattle and aren't sure what to do next, a short conversation can often bring immediate clarity.
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

export default SeattleProbateEstate;
