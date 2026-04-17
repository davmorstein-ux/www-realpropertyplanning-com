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
    question: "What should I do first with an inherited home in Everett?",
    answer:
      "Secure the property, confirm your legal authority to act, and get an honest assessment of its condition and value. Many Everett inherited homes have years of deferred maintenance. Our team can walk through the property, identify issues that affect value, and help you understand your options before you commit to anything.",
  },
  {
    question: "How does our team help with homes that need a lot of work?",
    answer:
      "our team uses his appraisal background to evaluate which repairs and improvements are likely to increase the sale price enough to justify the cost — and which ones aren't worth the investment. Sometimes selling as-is is the right call; other times, targeted preparation makes a meaningful difference. The key is making that decision based on data, not guesswork.",
  },
  {
    question: "How does our team's dual expertise benefit Everett sellers?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing grounded in actual condition assessment and neighborhood-level market data. This dual perspective is especially valuable with older Everett homes where condition, location, and lot characteristics can significantly affect value.",
  },
  {
    question: "What if family members disagree about what to do with the property?",
    answer:
      "This is common. Our team provides objective, data-driven information — condition assessment, realistic pricing, and a clear explanation of options — so families can make decisions based on facts rather than assumptions. Having a neutral, professional perspective often helps move conversations forward.",
  },
  {
    question: "Can our team help if I don't live in the Everett area?",
    answer:
      "Yes. Our team regularly works with executors and family members managing Everett properties from outside the area. He coordinates property access, vendor management, preparation, and the sale process — keeping you informed at every step so you don't need to make unnecessary trips.",
  },
  {
    question: "How long does it take to sell an inherited home in Everett?",
    answer:
      "Timelines depend on the probate or trust process, property condition, and how much preparation is needed. Once the property is ready and authority is established, well-priced Everett homes typically sell within a few weeks. Our team helps set realistic expectations and builds a timeline around your specific situation.",
  },
];

const EverettProbateEstate = () => {
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
        { "@type": "City", name: "Everett", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Everett, WA"
        description="Guidance for executors and families handling inherited homes in Everett, WA. Practical preparation help, realistic pricing, clear next steps."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Snohomish County", url: "/snohomish-county" },
          { name: "Everett", url: "/everett-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Everett, Snohomish County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Everett Families Navigate Inherited Homes
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Inherited homes in Everett often come with practical realities — deferred maintenance, personal belongings, and decisions that need to be made before the property can move forward. Having someone who understands these situations can make the process much less overwhelming.
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
              When Everett Families Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most families don't plan for the moment they inherit a home or become responsible for selling one. These are some of the situations that bring Everett families to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Long-held family home with years of deferred maintenance and personal belongings",
                "Executor or family member unsure where to start or what the home is worth",
                "Siblings or heirs with different opinions about whether to sell, keep, or rent",
                "Property needing cleanup, repairs, or targeted preparation before sale",
                "Uncertainty about pricing in Everett's varied neighborhoods and market conditions",
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
              Why Everett Inherited Homes Need a Practical Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Everett's housing stock includes a wide range of property types and conditions — from early-century craftsman homes in the Port Gardner neighborhood to mid-century ramblers in Boulevard Bluffs, newer construction in Silver Lake, and everything in between. Each neighborhood carries different buyer expectations, pricing dynamics, and preparation considerations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many inherited homes in Everett have been lived in for decades. Roofs, plumbing, electrical systems, and cosmetic finishes may be significantly dated. Knowing which issues are deal-breakers for buyers, which improvements justify the cost, and which ones aren't worth the delay requires honest, condition-based assessment — not guesswork or generic advice.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning brings a practical, valuation-first perspective to every property. This dual expertise helps families make realistic decisions about preparation, pricing, and timing — grounded in what the data actually shows.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Dealing With an Inherited Home in Everett?"
        body="Our team provides confidential consultations for executors, trustees, and families handling inherited or estate property in Everett and throughout Snohomish County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Family Decision-Making */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support When Families Need to Make Decisions Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Inherited property decisions are rarely simple — especially when multiple family members are involved. Siblings may have different memories of the home, different financial situations, and different ideas about what should happen next. These conversations can be emotional, and they benefit from objective, data-driven information.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Our team provides a clear, professional perspective: an honest assessment of the property's condition, realistic pricing based on local market data, and a straightforward explanation of the options. This kind of neutral, fact-based guidance often helps families move past uncertainty and toward a decision everyone can understand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether family members are local, scattered across the state, or across the country, our team keeps everyone informed with consistent communication throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Everett Families Move Forward
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, practical framework:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Situation",
                  desc: "We start with a conversation about the property, the people involved, the timeline, and any concerns. No pressure, no sales pitch — just an honest starting point.",
                },
                {
                  title: "Evaluating the Property",
                  desc: "I visit the home, assess its condition, identify issues that affect value, and note what preparation might be worthwhile — and what isn't worth the cost or delay.",
                },
                {
                  title: "Realistic Pricing Strategy",
                  desc: "Using my appraisal background and Everett-specific market data, I develop a pricing strategy that reflects the home's actual condition, location, and neighborhood context.",
                },
                {
                  title: "Coordinating Preparation",
                  desc: "I coordinate cleanout, contractors, and preparation vendors as needed — keeping the process organized and the timeline realistic.",
                },
                {
                  title: "Guiding the Sale to Completion",
                  desc: "From listing through closing, I manage the details and keep all parties informed. Clear updates, no surprises, and a steady path to resolution.",
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
      <PageFAQ faqs={faqs} heading="Everett Inherited Property FAQ" />

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
                { to: "/snohomish-county", label: "Snohomish County Overview" },
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

      <RelatedServices currentPath="/everett-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Practical Next Step for Everett Families
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you've inherited a home in Everett and aren't sure what to do next, a short conversation can often bring clarity and help you understand your options.
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

export default EverettProbateEstate;

