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
    question: "How does selling an inherited home work in Tacoma?",
    answer:
      "Selling an inherited home in Tacoma typically requires confirming legal authority (through probate or trust administration), evaluating the property's condition, and developing a realistic pricing and preparation strategy. Our team coordinates the entire process — from initial assessment through closing — keeping all parties informed and the timeline on track.",
  },
  {
    question: "What should a Tacoma executor do first with an inherited property?",
    answer:
      "Secure the property, confirm your legal authority, and get an honest assessment of its condition and value. Many Tacoma inherited homes have years of deferred maintenance. Our team can walk through the property, identify issues that affect value, and help you understand your options before committing to any course of action.",
  },
  {
    question: "How does Real Property Planning's appraisal background help with Tacoma properties?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing grounded in actual condition assessment and neighborhood-level market data — not automated estimates. This is especially valuable in Tacoma, where property values can vary significantly from one neighborhood to the next.",
  },
  {
    question: "Can our team help if I live out of state but the property is in Tacoma?",
    answer:
      "Yes. Our team regularly works with out-of-state executors and family members managing Tacoma properties remotely. He coordinates property access, vendor management, preparation, and the sale process — keeping you informed at every step so you don't need to make unnecessary trips.",
  },
  {
    question: "Should I fix up an inherited home in Tacoma before selling?",
    answer:
      "It depends on the home's condition, your budget, and your timeline. Our team uses his appraisal background to evaluate which improvements are likely to increase the sale price enough to justify the cost — and which ones aren't worth the investment. Sometimes selling as-is is the right call; other times, targeted preparation makes a meaningful difference.",
  },
  {
    question: "How long does it take to sell an estate property in Tacoma?",
    answer:
      "Timelines vary based on the probate or trust administration process, property condition, and current market conditions. Once the property is ready and authority is established, well-priced Tacoma homes typically sell within a few weeks. Our team helps set realistic expectations and builds a timeline around your specific situation.",
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
      ...realEstateAgentSchema,
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
        description="Guidance for executors, trustees, and families with inherited property in Tacoma, WA. Local Pierce County expertise from start to finish."
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

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Tacoma, Pierce County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Inherited Tacoma Homes — North End Craftsmans to South End Ramblers
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Many Tacoma estate homes were built before 1950 and carry decades of deferred maintenance — character-rich houses in the North End and Stadium District, mid-century ramblers in the South End, and post-war homes across Hilltop and Eastside. The right move is rarely "fix everything"; it's knowing which targeted repairs the Tacoma buyer pool will actually pay for, and which ones to skip.
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
              When Families in Tacoma Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Inheriting a property or becoming responsible for selling one is rarely something families plan for. These are some of the situations that bring Tacoma families and professionals to Real Property Planning:
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
              Tacoma includes a wide range of neighborhoods, price points, and property conditions — from the historic homes of Stadium District and Old Town to the mid-century ramblers of South Tacoma and the waterfront properties of Ruston and Point Defiance. What works in one area may not apply in another, and inherited homes often come with unique challenges that standard marketing doesn't address.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many inherited properties in Tacoma have been lived in for decades. Deferred maintenance, dated systems, and personal belongings are common. Practical strategy — knowing when to invest in preparation and when to sell as-is — matters as much as marketing. The wrong approach can cost families time, money, and unnecessary stress.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning brings a valuation-first perspective grounded in actual property condition and neighborhood-level market data. This dual expertise provides defensible pricing, clearer communication with attorneys and courts, and greater confidence for families navigating difficult decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Tacoma?"
        body="Our team provides confidential consultations for executors, trustees, and families dealing with inherited or estate property in Tacoma and throughout Pierce County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Out-of-State / Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Families Handling Property From a Distance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many families managing Tacoma estate property live elsewhere — across the state, across the country, or even internationally. Coordinating vendors, accessing the property, understanding local conditions, and managing a sale remotely adds significant stress during an already difficult time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Our team serves as a local point of coordination. He manages property access, works with cleanout crews, contractors, and preparation vendors, communicates with attorneys and other parties, and keeps you informed throughout the process — reducing unnecessary travel and giving you confidence that nothing is falling through the cracks.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're managing from Portland, Phoenix, or across the country, our team's goal is to make the process as clear and manageable as possible from wherever you are.
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
              Every situation is different, but the approach follows a clear, repeatable framework:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: "We start with a conversation — no pressure, no sales pitch. I want to understand who's involved, what authority exists, what the property looks like, and what the goals are.",
                },
                {
                  title: "Evaluating the Property",
                  desc: "I visit the property and assess its condition, identify issues that affect value, and note what preparation might be worthwhile — and what isn't worth the cost or delay.",
                },
                {
                  title: "Tacoma Pricing Strategy",
                  desc: "Drawing on certified appraisal experience and Tacoma-specific market data, we develop pricing that's defensible, realistic, and tailored to the neighborhood and condition of the home.",
                },
                {
                  title: "Coordinating Preparation and Next Steps",
                  desc: "I coordinate with attorneys, co-executors, cleanout crews, contractors, and other parties — keeping everyone aligned, the timeline clear, and the process moving forward.",
                },
                {
                  title: "Guiding the Process From Start to Finish",
                  desc: "From listing through closing, I manage the details so you can focus on what matters most. Clear updates, no surprises, and a calm, structured path to resolution.",
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

      <RelatedServices currentPath="/tacoma-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Practical Next Step for Tacoma Families
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are dealing with an inherited or estate property in Tacoma and need help deciding what to do next, a short conversation can often make the path forward much clearer.
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

export default TacomaProbateEstate;

