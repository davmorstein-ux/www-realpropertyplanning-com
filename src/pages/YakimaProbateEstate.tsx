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
    question: "Can David help with an inherited property in Yakima?",
    answer:
      "Yes. Our team works with executors, trustees, and families handling inherited and estate property throughout Washington State, including Yakima and the surrounding area. He coordinates the process remotely when needed and provides on-the-ground support for property assessment and preparation.",
  },
  {
    question: "What should I do first with an inherited house in Yakima?",
    answer:
      "Secure the property, confirm your legal authority to act, and get an honest assessment of the home's condition and realistic market value. Our team can walk through the property, identify what affects value, and help you understand your options before making any commitments.",
  },
  {
    question: "How does our team's appraisal background help with Yakima properties?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing grounded in actual condition assessment and local comparable data — not automated estimates. In Yakima, where property values are sensitive to condition and neighborhood, this dual perspective prevents costly pricing mistakes.",
  },
  {
    question: "Should I fix up the house before selling?",
    answer:
      "Not necessarily. Our team evaluates which repairs or improvements are likely to return more than they cost — and which ones aren't worth the investment. Many Yakima inherited homes benefit more from honest pricing and targeted preparation than from expensive renovations.",
  },
  {
    question: "What if family members disagree about what to do with the property?",
    answer:
      "This is common. Our team provides objective, valuation-based information that helps families make decisions grounded in facts rather than assumptions. Having clear data about the property's condition, realistic value, and available options often helps move conversations forward.",
  },
  {
    question: "How long does it take to sell an inherited home in Yakima?",
    answer:
      "Timelines depend on the probate or trust process, property condition, and market conditions. Once the property is ready and authority is established, well-priced Yakima homes typically sell within a reasonable timeframe. Our team helps set realistic expectations and builds a timeline around your situation.",
  },
];

const YakimaProbateEstate = () => {
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
        { "@type": "City", name: "Yakima", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Yakima, WA"
        description="Guidance for executors and families with inherited property in Yakima, WA. Property condition decisions, realistic pricing, coordinated steps."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Yakima", url: "/yakima-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Yakima, Yakima County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Practical Guidance for Inherited Property in Yakima
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Inherited homes in Yakima often come with practical questions — about condition, pricing, and what to do next. Having straightforward guidance from someone who understands the property and the process can make a real difference.
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
              When Families in Yakima Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Yakima property situations tend to be practical — families dealing with real houses that need real decisions. These are some of the situations that bring people to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Inherited a home that has been in the family for decades",
                "Property with deferred maintenance or uncertain condition",
                "Family members with different opinions about selling, keeping, or renting",
                "Uncertainty about what the property is actually worth in today's market",
                "Executor or trustee looking for honest guidance on preparation and pricing",
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
              Why Honest Pricing Matters in Yakima
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Yakima's real estate market is price-sensitive. Buyers here pay close attention to condition, and overpricing an inherited home — especially one that needs work — can lead to extended time on market and reduced offers. At the same time, underpricing means leaving money on the table for the estate or the family.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Neighborhoods across Yakima vary significantly. A home near Englewood Hill, in the West Valley, or closer to downtown each sits in a different pricing context. Inherited properties often reflect years of personal use — and the gap between what a family remembers and what the market sees can be substantial. Bridging that gap with honest data is where good decisions start.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning brings a condition-based, valuation-first perspective. This means pricing grounded in what the property actually is today — not what it was worth ten years ago or what an algorithm estimates from a distance.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have Questions About a Yakima Property?"
        body="Our team provides confidential consultations for executors, trustees, and families dealing with inherited or estate property in Yakima and surrounding areas. Whether you're local or managing from out of the area, a short conversation can help clarify your options."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Family Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Working Through Property Decisions as a Family
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Inherited property decisions in Yakima often involve multiple family members — sometimes with different priorities, different levels of involvement, and different ideas about what to do next. One person wants to sell quickly. Another wants to renovate. A third isn't sure the timing is right.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Our team provides objective, data-driven information that gives everyone a common set of facts to work from. When family members can see the property's actual condition, understand the realistic market value, and review the available options together, conversations tend to move forward more productively.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The role isn't to push a particular outcome — it's to provide the clarity that allows families to make decisions they feel good about, together.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Make Practical Decisions Easier
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach is consistent — straightforward, honest, and focused on getting you to a good outcome without unnecessary complication:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding Your Situation",
                  desc: "We start with a conversation about the property, the family, the legal context, and what you're trying to accomplish. No assumptions — just listening.",
                },
                {
                  title: "Assessing the Property Honestly",
                  desc: "I visit the property, document its condition, and identify the factors that actually affect its value. This includes deferred maintenance, structural issues, and neighborhood-level pricing context.",
                },
                {
                  title: "Developing a Realistic Strategy",
                  desc: "Using my appraisal background and local market data, I develop a pricing and preparation strategy that's grounded in reality — not inflated expectations or automated estimates.",
                },
                {
                  title: "Coordinating What Needs to Happen",
                  desc: "Whether it's a cleanout, targeted repairs, or vendor coordination, I manage the practical steps so the property is positioned well without unnecessary expense.",
                },
                {
                  title: "Guiding the Sale to Completion",
                  desc: "From listing through closing, I handle the details and keep everyone informed. Clear communication, realistic timelines, and no surprises.",
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
      <PageFAQ faqs={faqs} heading="Yakima Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/yakima-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Straightforward First Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you're dealing with an inherited property in Yakima and want honest guidance about condition, pricing, and next steps, a short conversation can help you move forward with confidence.
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

export default YakimaProbateEstate;

