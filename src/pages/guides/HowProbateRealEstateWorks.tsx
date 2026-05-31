import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import BackToResources from "@/components/BackToResources";
import HeroBandTitle from "@/components/HeroBandTitle";
import probateRealEstateHero from "@/assets/probate-real-estate-hero.webp";

const faqs = [
  {
    question: "How long does it take to sell a house in probate in Washington?",
    answer:
      "Timelines vary widely depending on court processing, property condition, and preparation needs. Once legal authority is established, the listing-to-closing process can take 60 to 120 days — but the full probate timeline may extend several months or longer. Starting the real estate planning process early helps avoid unnecessary delays.",
  },
  {
    question: "Can an executor sell property before probate is completed?",
    answer:
      "In most cases, the executor or personal representative needs legal authority (letters testamentary) before the property can be listed and sold. However, pre-probate planning — including property assessment, vendor coordination, and pricing strategy — can begin immediately to reduce the overall timeline.",
  },
  {
    question: "Does probate property have to be sold at fair market value?",
    answer:
      "Executors and personal representatives have a fiduciary duty to act in the best interest of the estate, which generally means achieving fair market value. David Stein's dual credentials as a broker and certified appraiser help ensure pricing decisions are defensible and well-supported by market data.",
  },
  {
    question: "What happens if heirs disagree about selling?",
    answer:
      "Disagreements among heirs are common in probate situations. When pricing disputes arise, David Stein provides objective, data-driven market analysis that can help move the conversation forward. Legal questions about authority and heir rights should be directed to the estate attorney.",
  },
  {
    question: "Do I need a specialized agent for probate real estate?",
    answer:
      "Probate sales involve unique legal requirements, emotional complexity, and property condition challenges that most residential agents rarely encounter. Working with a broker who understands court timelines, fiduciary obligations, and estate property conditions can prevent costly mistakes and delays.",
  },
];

const jsonLd = articleSchema({
  headline: "How Probate Real Estate Sales Work in Washington State",
  description:
    "A comprehensive guide to selling property through probate in Washington — including legal authority, timing, valuation, preparation, and what executors and attorneys need to know.",
  url: "/guides/how-probate-real-estate-works",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: [
    "Probate real estate",
    "Washington probate sales",
    "Estate property",
    "Executor responsibilities",
    "Court-supervised property sales",
  ],
});

const GOLD = "#8B6914";

const HowProbateRealEstateWorks = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Probate Real Estate Sales Work in Washington | Real Property Planning"
      description="Real Property Planning explains how probate real estate sales work in Washington State. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/guides-and-resources" },
        { name: "How Probate Real Estate Works", url: "/guides/how-probate-real-estate-works" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
          <img
            src={probateRealEstateHero}
            alt="Probate real estate guidance for Washington families"
            className="w-full h-auto object-cover object-center block"
            loading="eager"
          />
          <HeroBandTitle as="div">How Probate Real Estate Works</HeroBandTitle>
        </div>
      </section>

      {/* Clean prose section */}
      <section style={{ padding: "56px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", fontFamily: "Georgia, serif" }}>
          <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: `1px solid #e0d8c8` }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>
              What Is Probate Real Estate?
            </h2>
            <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.8, margin: 0 }}>
              When someone passes away owning property, that property often must pass through probate before it can be
              sold. Probate is the court-supervised process of settling an estate — establishing legal authority,
              settling debts, and distributing assets to heirs.
            </p>
          </div>

          <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: `1px solid #e0d8c8` }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>
              Who Has Authority to Sell?
            </h2>
            <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.8, margin: 0 }}>
              The personal representative — also called the executor — named in the will, or appointed by the court,
              holds legal authority to sell estate property. This authority is documented through letters testamentary,
              which must be in place before a property can be listed or transferred.
            </p>
          </div>

          <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: `1px solid #e0d8c8` }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>Why Timing Matters</h2>
            <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.8, margin: 0 }}>
              Probate properties often sit vacant while legal authority is being established, accumulating carrying
              costs — utilities, insurance, maintenance, and property taxes. Coordinating the real estate timeline with
              the legal process from the start is critical to protecting the estate's value and minimizing unnecessary
              expense.
            </p>
          </div>

          <div style={{ marginBottom: 0 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0a1628", marginBottom: 12 }}>
              Why Work With a Specialist?
            </h2>
            <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.8, margin: 0 }}>
              Probate sales require pricing expertise, court-defensible valuations, and close coordination with estate
              attorneys. A broker who specializes in probate and holds certified appraiser credentials handles all of
              this in one place — reducing the burden on executors and protecting the interests of every heir involved.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading="Probate Real Estate FAQs" />

      <BackToResources />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default HowProbateRealEstateWorks;
