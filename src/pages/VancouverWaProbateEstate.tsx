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
    question: "How does selling an inherited home work in Vancouver, WA?",
    answer:
      "Selling an inherited home in Vancouver requires confirming legal authority (through probate or trust administration), evaluating the property's condition, and developing a pricing and preparation strategy. David coordinates the entire process — from initial assessment through closing — keeping all parties informed and the timeline on track.",
  },
  {
    question: "What if the family is split between Washington and Oregon?",
    answer:
      "This is common in the Vancouver area. David works with families where some members live in Portland, others out of state, and the property is in Clark County. He coordinates communication across all parties, manages local logistics, and ensures the process moves forward smoothly regardless of where each person is located.",
  },
  {
    question: "How does David's appraisal background help with Vancouver properties?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing grounded in actual condition assessment and local market data — not automated estimates. This dual perspective is especially valuable in Vancouver, where proximity to Portland creates unique pricing dynamics that require careful local analysis.",
  },
  {
    question: "Can David help coordinate a sale alongside a senior transition or relocation?",
    answer:
      "Yes. Many Vancouver families are managing a property sale at the same time as a move to senior living, a relocation to be closer to family, or a transition between Washington and Oregon. David coordinates the sale timeline with the broader transition — working with moving companies, family members, and other professionals to keep everything aligned.",
  },
  {
    question: "Should I prepare the home before selling?",
    answer:
      "It depends on the property's condition, your timeline, and the transition situation. David evaluates which improvements are likely to increase the sale price enough to justify the cost and delay — and which aren't. When timing is tight due to a move or transition, he helps prioritize what matters most.",
  },
  {
    question: "How long does it take to sell an estate property in Vancouver?",
    answer:
      "Timelines vary based on the probate or trust process, property condition, and market conditions. Once the property is ready and authority is established, well-priced Vancouver homes typically sell within a few weeks. David helps set realistic expectations and coordinates the sale timeline with any broader transition plans.",
  },
];

const VancouverWaProbateEstate = () => {
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
        { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Vancouver, Washington | Real Property Planning"
        description="Guidance for families, executors, and trustees handling inherited property in Vancouver, WA. Support for relocation, timing, and coordinated transitions."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "Vancouver", url: "/vancouver-wa-probate-estate-real-estate" },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Vancouver, Clark County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Navigate Property Transitions in Vancouver
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Vancouver property decisions often involve timing, relocation, and coordination across state lines. Clear guidance can help simplify what can otherwise feel complex.
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
              When Families in Vancouver Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vancouver sits at a unique crossroads — geographically and personally. Many of the families who reach out are managing property transitions that involve timing, coordination, and decisions that stretch across state lines:
            </p>
            <ul className="space-y-4">
              {[
                "Relocating between Washington and Oregon",
                "Inherited home during a move or transition",
                "Executor balancing timing of sale and relocation",
                "Coordinating property decisions with multiple family members",
                "Questions about pricing and next steps",
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
              Why Timing and Coordination Matter in Vancouver
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Vancouver's proximity to Portland creates unique dynamics for estate and transition property sales. Buyers often cross state lines, tax considerations differ between Washington and Oregon, and families frequently have ties to both sides of the river. These factors make timing and coordination especially important.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Whether the property is in Salmon Creek, Felida, the Heights, or closer to downtown, neighborhood-level pricing differences matter. Inherited and estate homes often need thoughtful preparation — and when a move or transition is happening simultaneously, the sequencing of decisions becomes critical.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective grounded in actual property condition and local market data. This dual expertise provides defensible pricing, clearer communication with attorneys and family members, and greater confidence for families managing complex transitions.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Navigating a Property Transition in Vancouver?"
        body="David provides confidential consultations for executors, trustees, and families managing inherited property, estate sales, or transition-related decisions in Vancouver and Clark County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support Through Transition and Relocation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many Vancouver property situations involve more than just selling a home. A parent may be moving to senior living while the family home needs to be prepared and sold. An executor in Portland may be managing a Clark County estate. A family may be relocating out of state and needs the sale coordinated with their move timeline.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David serves as a central point of coordination — managing property access, working with cleanout crews, contractors, moving companies, and other vendors, communicating with attorneys and family members, and keeping the timeline aligned with the broader transition.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is to reduce the logistical burden so families can focus on the people and decisions that matter most — not the day-to-day details of preparing and selling a property.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Simplify Transition-Driven Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every transition is different, but the approach follows a clear framework designed to keep things moving without adding pressure:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understanding the Full Picture",
                  desc: "We start with a conversation about the property, the people involved, the timeline, and any transition or relocation factors that affect the process.",
                },
                {
                  title: "Assessing the Property",
                  desc: "I visit the property, assess its condition, identify issues that affect value, and evaluate what preparation makes sense given your timeline and goals.",
                },
                {
                  title: "Aligning the Timeline",
                  desc: "When a sale needs to coordinate with a move, a senior transition, or a cross-state relocation, I build a realistic timeline that accounts for all the moving parts.",
                },
                {
                  title: "Valuation-Informed Pricing",
                  desc: "Using my appraisal background and Vancouver-specific market data, I develop a pricing strategy that's defensible, realistic, and aligned with the property's actual condition and location.",
                },
                {
                  title: "Guiding the Process to Completion",
                  desc: "From preparation through closing, I manage the details and keep all parties informed. Clear updates, no surprises, and a calm path to resolution.",
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
      <PageFAQ faqs={faqs} heading="Vancouver Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/vancouver-wa-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Clear Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling a Vancouver property during a transition or relocation, a short conversation can help clarify the path forward.
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

export default VancouverWaProbateEstate;
