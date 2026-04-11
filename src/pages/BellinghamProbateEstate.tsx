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
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const faqs = [
  {
    question: "Can David help with an inherited property in Bellingham if I live out of the area?",
    answer:
      "Yes. David regularly works with families managing Bellingham properties from Seattle, out of state, or farther. He coordinates property access, vendor management, preparation, and the sale process — keeping you informed without requiring unnecessary trips.",
  },
  {
    question: "What makes Bellingham's real estate market different from the rest of Washington?",
    answer:
      "Bellingham has a distinct local market shaped by its proximity to Western Washington University, the San Juan Islands, and the Canadian border. Property types range from historic Lettered Streets homes to rural acreage outside city limits. Pricing and buyer expectations vary significantly by neighborhood, and automated estimates often miss these differences.",
  },
  {
    question: "How does David's appraisal background help with Bellingham properties?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing grounded in actual condition assessment and local market data. This is especially important in Bellingham, where unique property types and location-specific factors can significantly affect value.",
  },
  {
    question: "Should I prepare an inherited Bellingham home before selling?",
    answer:
      "It depends on the property's condition, your timeline, and your goals. David evaluates which improvements are likely to return more than they cost — and which aren't worth the investment. For families managing from a distance, this honest assessment saves both time and money.",
  },
  {
    question: "How long does it typically take to sell an estate property in Bellingham?",
    answer:
      "Timelines depend on the probate or trust process, property condition, and seasonal market factors. Once the property is ready and legal authority is established, well-priced Bellingham homes generally sell within a reasonable timeframe. David helps set realistic expectations based on your specific situation.",
  },
  {
    question: "What if the inherited property is a second home or vacation property?",
    answer:
      "Second homes and vacation properties are common in the Bellingham area. These properties may have deferred maintenance, shared ownership, or unique characteristics that affect pricing. David assesses the property's condition and market positioning to develop a strategy that accounts for these factors.",
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
      ...realEstateAgentSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Bellingham", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Bellingham, Washington | Real Property Planning"
        description="Guidance for executors and families handling inherited or estate property in Bellingham. Support for out-of-area ownership, unique market conditions, and coordinated property decisions."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Bellingham", url: "/bellingham-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Bellingham, Whatcom County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Handle Inherited Property in Bellingham
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Bellingham estate properties often involve distance, unique local market conditions, and homes that have been in families for a long time. Having someone who understands both the property and the process can make a real difference.
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
              When Families With Bellingham Property Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Bellingham sits apart from the Puget Sound metro — and the families who own property here often live somewhere else entirely. These are some of the situations that bring people to Real Property Planning:
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
              Bellingham's market operates differently from Seattle or the Eastside. The city has its own rhythm — influenced by Western Washington University, proximity to the San Juan Islands, outdoor recreation culture, and a strong local identity. Property values, buyer expectations, and seasonal patterns don't follow the same rules as the metro areas to the south.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Property types vary widely — from walkable Lettered Streets Victorians and South Hill craftsmen to rural parcels in the county. Inherited and estate homes here often reflect decades of ownership, and condition can range from well-maintained to significantly deferred. Understanding what a property is actually worth in its current state requires honest, on-the-ground assessment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective grounded in actual property condition and comparable market data — not automated estimates that miss Bellingham's local nuances.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Handling a Bellingham Property From a Distance?"
        body="David provides confidential consultations for executors, trustees, and families dealing with inherited or estate property in Bellingham and Whatcom County — whether you're local or managing from out of the area."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support for Out-of-Area Owners and Second-Home Situations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              A significant number of Bellingham estate properties belong to families who don't live nearby. The owner may have retired here, used the property as a vacation home, or held it for decades before passing it to the next generation. In any case, the family handling the property now often faces the same challenge: making sound decisions about a home they can't easily visit.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David serves as your local point of coordination — visiting the property, assessing its condition, managing cleanout crews and contractors, and communicating with attorneys and family members. The goal is to reduce the logistical burden so you can make informed decisions without unnecessary stress or travel.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For second homes and vacation properties, there are often additional considerations — seasonal access, shared ownership, deferred maintenance, or unique features that affect marketability. David evaluates these factors honestly and builds a strategy around the property's actual condition and positioning.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Bring Clarity to Bellingham Property Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every property and family situation is different, but the approach follows a clear framework designed to keep things grounded and moving forward:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding Your Situation",
                  desc: "We start with a conversation about the property, the people involved, the legal context, and what you're hoping to accomplish — whether that's a straightforward sale or something that requires more coordination.",
                },
                {
                  title: "Assessing the Property",
                  desc: "I visit the property, document its condition, identify issues that affect value, and provide an honest evaluation of what preparation — if any — makes sense given your goals and timeline.",
                },
                {
                  title: "Understanding the Local Market",
                  desc: "Using my appraisal background and Bellingham-specific data, I develop a pricing strategy that reflects the property's actual condition, location, and the current market — not wishful thinking or automated guesses.",
                },
                {
                  title: "Coordinating Locally",
                  desc: "I manage cleanout crews, contractors, and other vendors as needed. For out-of-area families, I handle the local logistics so you don't have to make repeated trips to Bellingham.",
                },
                {
                  title: "Guiding the Sale to Completion",
                  desc: "From listing through closing, I manage the details and keep you informed with clear, consistent updates. No surprises — just a calm, organized process.",
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

      <RelatedServices currentPath="/bellingham-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Grounded First Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you're handling a Bellingham property — whether you're local or managing from a distance — a short conversation can help you understand the property's situation and your options.
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

export default BellinghamProbateEstate;
