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
    question: "How does selling an inherited home in Kirkland work?",
    answer:
      "Selling inherited property in Kirkland typically requires legal authority through probate or trust administration. David coordinates with the estate attorney, trustee, or personal representative to assess the property, develop a defensible pricing strategy, manage preparation, and guide the sale — keeping all parties informed throughout the process.",
  },
  {
    question: "What makes Kirkland properties different in estate situations?",
    answer:
      "Kirkland's market includes a mix of waterfront properties, higher-value neighborhoods like Juanita, Houghton, and Moss Bay, and homes with location-specific premiums. Pricing these properties requires neighborhood-level awareness and an understanding of how condition, view, and lot characteristics affect value — not just automated estimates.",
  },
  {
    question: "How does David Stein's appraisal background help with Kirkland property sales?",
    answer:
      "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing strategy grounded in actual condition assessment and neighborhood-level market analysis. In Kirkland's higher-value market, this dual perspective helps protect families and fiduciaries from costly pricing mistakes.",
  },
  {
    question: "Can David help if the family is downsizing or transitioning into senior living?",
    answer:
      "Yes. Many Kirkland families reach out when a parent is moving into assisted living, independent living, or memory care. David helps coordinate the timing of the property sale with the transition, working with families, care professionals, and attorneys to keep the process organized and manageable.",
  },
  {
    question: "What if multiple family members are involved in the decision?",
    answer:
      "Multi-party situations are common in Kirkland estate and trust sales. David provides clear, documented communication so all parties — whether local or out of state — have the same information. His appraisal-informed pricing approach also helps establish defensible value when consensus is needed.",
  },
  {
    question: "How long does it take to sell an estate property in Kirkland?",
    answer:
      "Timelines depend on the legal process, property condition, and preparation needs. Once the property is ready and authority is established, well-priced Kirkland homes typically sell within a few weeks. David helps set realistic expectations and builds a plan around your specific situation and constraints.",
  },
];

const KirklandProbateEstate = () => {
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
        { "@type": "City", name: "Kirkland", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Kirkland, Washington | Real Property Planning"
        description="Guidance for executors, trustees, and families handling inherited or estate property in Kirkland. Valuation-informed strategy for higher-value homes and downsizing transitions."
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: "King County", url: "/king-county" },
          { name: "Kirkland", url: "/kirkland-probate-estate-real-estate" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Kirkland, King County
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Helping Families Navigate Estate Property in Kirkland
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Estate and inherited property decisions in Kirkland often involve higher-value homes, downsizing transitions, and property-specific considerations. Clear guidance can help families move forward with confidence.
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
              When Families in Kirkland Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Property transitions in Kirkland often involve elevated values, unique property characteristics, and families navigating life changes. These are the situations that most often bring families and professionals to Real Property Planning:
            </p>
            <ul className="space-y-4">
              {[
                "Inherited home in a high-value neighborhood",
                "Downsizing or transition into assisted or independent living",
                "Multiple heirs involved in decision-making",
                "Waterfront or unique property requiring careful pricing",
                "Questions about preparation and timing",
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
              Why Kirkland Properties Require a More Nuanced Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Kirkland's real estate market spans a wide range — from waterfront properties along Lake Washington and Juanita Bay to established family neighborhoods in Houghton, Moss Bay, and Norkirk. Each area carries its own pricing dynamics, buyer expectations, and preparation considerations. In estate situations, understanding these distinctions is essential to protecting the family's financial interests.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Higher price points increase sensitivity to pricing strategy. A home priced too high may sit on the market, raising questions from beneficiaries and courts. A home priced too low leaves money on the table. Waterfront and location-specific differences compound this challenge — view corridors, lot access, and proximity to amenities all influence value in ways that automated tools cannot reliably capture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective that provides defensible pricing, organized communication with attorneys and trustees, and greater confidence for families navigating complex property decisions in Kirkland.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading="Have a Property Situation in Kirkland?"
        body="David provides confidential consultations for executors, attorneys, trustees, and families handling inherited or estate property in Kirkland and throughout King County."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Transition Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Support During Downsizing and Life Transitions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many Kirkland families reach out when a parent or loved one is transitioning into assisted living, independent living, or memory care. These situations are often emotionally complex, and the property decisions that accompany them can feel overwhelming — especially when timing, family dynamics, and financial considerations are all in play.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David works with families to coordinate the timing of the property sale with the transition itself, ensuring that move plans, care arrangements, and sale preparation are aligned. He also communicates clearly with all family members and professionals involved, reducing confusion and keeping the process moving forward.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether the transition is planned or sudden, having a calm, experienced resource who understands both the property and the human side of the process can make a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              How I Help Bring Clarity to Complex Decisions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every situation is different, but the approach follows a clear, structured framework designed to reduce uncertainty:
            </p>
            <ol className="space-y-6">
              {[
                {
                  title: "Understand Your Situation",
                  desc: "We start with a confidential conversation to understand who's involved, what authority exists, what the timeline looks like, and what matters most to the family.",
                },
                {
                  title: "Evaluate the Property and Its Positioning",
                  desc: "I visit the property, assess its condition, review location-specific factors — including waterfront, view, and lot characteristics — and identify elements that may affect value and preparation needs.",
                },
                {
                  title: "Develop a Pricing and Preparation Strategy",
                  desc: "Using my appraisal background and Kirkland neighborhood-level market data, I develop a pricing strategy that's defensible, realistic, and aligned with buyer expectations in the specific area.",
                },
                {
                  title: "Coordinate Next Steps",
                  desc: "I coordinate with attorneys, trustees, cleanout vendors, contractors, and staging professionals — keeping the process organized and all parties aligned.",
                },
                {
                  title: "Guide the Process From Start to Finish",
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
      <PageFAQ faqs={faqs} heading="Kirkland Estate & Inherited Property FAQ" />

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

      <RelatedServices currentPath="/kirkland-probate-estate-real-estate" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Clear Next Step
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
              If you are handling a property in Kirkland and want a clear, informed perspective, a short conversation can help you move forward with confidence.
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

export default KirklandProbateEstate;
