import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
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
    question: "Can David help if I live outside Spokane?",
    answer:
      "Yes. David regularly works with executors, trustees, and family members who live outside the Spokane area — whether across the state, across the country, or internationally. He coordinates property access, vendor management, preparation, and the sale process so you don't need to make unnecessary trips.",
  },
  {
    question: "What should an executor do first with a Spokane inherited property?",
    answer:
      "Secure the property, confirm your legal authority to act, and get an honest assessment of its condition and market value. David can walk through the property on your behalf, identify issues that affect value, and help you understand your options before you commit to anything.",
  },
  {
    question: "How does David's appraisal background help with Spokane properties?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing grounded in actual condition assessment and local market data — not automated estimates. This dual perspective is especially valuable when families are making decisions from a distance and need confidence in the numbers.",
  },
  {
    question: "How long does it take to sell an inherited home in Spokane?",
    answer:
      "Timelines depend on the probate or trust administration process, property condition, and market conditions. Once the property is ready and authority is established, well-priced Spokane homes typically sell within a few weeks. David helps set realistic expectations and builds a timeline around your specific situation.",
  },
  {
    question: "Should I fix up an inherited property in Spokane before selling?",
    answer:
      "It depends on the home's condition, your budget, and your timeline. David evaluates which improvements are likely to increase the sale price enough to justify the cost — and which ones aren't worth the investment. When you're managing from a distance, this kind of honest guidance saves time and money.",
  },
  {
    question: "How does David coordinate the process for remote families?",
    answer:
      "David serves as your local point of coordination. He manages property access, works with cleanout crews, contractors, and preparation vendors, communicates with attorneys and other parties, and provides clear updates throughout — so you always know where things stand without needing to be there in person.",
  },
];

const SpokaneProbateEstate = () => {
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
        { "@type": "City", name: "Spokane", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Spokane, Washington | Real Property Planning"
        description="Guidance for executors and families handling inherited property in Spokane. Local coordination, clear communication, and valuation-informed strategy for out-of-area decision-makers."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Spokane", url: "/spokane-probate-estate-real-estate" },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Spokane, Washington
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Manage Inherited Property in Spokane
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Many Spokane estate properties are handled by families who live outside the area. When you are not local, having reliable, on-the-ground support can make the process far more manageable.
            </p>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question="How does David Stein help families manage inherited property in Spokane?"
        answer="Many Spokane estate properties are managed by families who live outside the area. David Stein provides reliable, on-the-ground coordination — property assessment, preparation, pricing, and sale management — so out-of-area executors and trustees can make confident decisions without needing to be on-site."
        supportBullets={[
          "Clear guidance for out-of-state executors managing Spokane property from a distance",
          "Valuation-informed pricing based on Spokane's neighborhood-level market dynamics",
          "Full-service coordination from cleanout through closing with regular updates",
        ]}
      />

      <TrustStrip />

      {/* Situations */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When Families Handling Spokane Property Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Estate property situations in Spokane often involve distance, uncertainty, and the need for someone local to help move things forward. These are some of the situations that bring families to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Out-of-state executor managing a Spokane home from a distance",
                "Family unsure how to handle an inherited property without local knowledge",
                "Inherited home needing inspection, preparation, or cleanout coordination",
                "Limited understanding of Spokane's neighborhoods and pricing ranges",
                "Need for trusted local coordination so decisions can be made with confidence",
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
              Why Spokane Property Decisions Require Local Awareness
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Spokane's real estate market includes a wide range of neighborhoods, property types, and pricing — from the tree-lined streets of South Hill to the historic homes near Browne's Addition and the more affordable areas of North Spokane and the Valley. For families managing from a distance, understanding these differences is essential to making sound decisions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Property condition plays a major role in Spokane estate sales. Many inherited homes have been lived in for decades and may need repairs, cleanout, or preparation before they're ready for market. Knowing which improvements are worth the investment — and which aren't — requires honest, condition-based assessment rather than guesswork.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective grounded in actual property condition and local market data. This dual expertise is especially valuable when families are coordinating from outside the area and need confidence that the pricing strategy and preparation decisions are sound.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Managing a Spokane Property From a Distance?"
        body="David provides confidential consultations for executors, trustees, and families dealing with inherited or estate property in Spokane — even when you're managing from outside the area."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Out-of-State / Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              On-the-Ground Support for Out-of-Area Families
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              One of the most common challenges with Spokane estate properties is distance. The executor, trustee, or primary decision-maker often lives in Western Washington, out of state, or even overseas. Managing vendors, accessing the property, and making informed decisions from afar is stressful — especially when you're also managing grief or family dynamics.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David serves as your boots-on-the-ground coordinator. He manages property access, works with cleanout crews, contractors, and preparation vendors, communicates with attorneys and other parties, and provides clear, consistent updates — so you always know where things stand without needing to be there in person.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is simple: minimize your travel, reduce your stress, and give you confidence that the process is moving forward thoughtfully and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Bring Clarity From a Distance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, repeatable framework — designed to work smoothly even when you can't be there in person:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: "We start with a conversation — by phone or video — to understand who's involved, what authority exists, where the property stands, and what the goals are.",
                },
                {
                  title: "Assessing the Property",
                  desc: "I visit the property on your behalf, assess its condition, document issues that affect value, and provide an honest evaluation of what preparation might be worthwhile.",
                },
                {
                  title: "Coordinating Next Steps",
                  desc: "I line up cleanout crews, contractors, and other vendors as needed — managing the logistics locally so you don't have to make unnecessary trips or phone calls.",
                },
                {
                  title: "Developing a Pricing Strategy",
                  desc: "Using my appraisal background and Spokane-specific market data, I develop a pricing strategy that's defensible, realistic, and aligned with the property's actual condition and location.",
                },
                {
                  title: "Guiding the Sale Process",
                  desc: "From listing through closing, I manage the details and keep you informed with clear updates. No surprises — just a calm, structured path to resolution.",
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
      <PageFAQ faqs={faqs} heading="Spokane Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/spokane-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Simple First Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you're managing a Spokane property from outside the area, a short conversation can help you understand your options and next steps.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              No pressure. Just practical guidance for your situation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default SpokaneProbateEstate;
