import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import BackToResources from "@/components/BackToResources";
import HeroBandTitle from "@/components/HeroBandTitle";
import PhotoSteps from "@/components/PhotoSteps";
import imgWhat from "@/assets/estate/probate-1.webp";
import imgWho from "@/assets/estate/probate-2.webp";
import imgTiming from "@/assets/estate/property-value-2.webp";
import imgSpecialist from "@/assets/estate/professional-team-1.webp";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import AuthorByline from "@/components/AuthorByline";
import ProbateStartHere from "@/components/ProbateStartHere";

import NextQuestions from "@/components/NextQuestions";
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
      `Executors and personal representatives have a fiduciary duty to act in the best interest of the estate, which generally means achieving fair market value. ${FEATURED_BROKER.Role}'s dual credentials as a broker and certified appraiser help ensure pricing decisions are defensible and well-supported by market data.`,
  },
  {
    question: "What happens if heirs disagree about selling?",
    answer:
      `Disagreements among heirs are common in probate situations. When pricing disputes arise, ${FEATURED_BROKER.role} provides objective, data-driven market analysis that can help move the conversation forward. Legal questions about authority and heir rights should be directed to the estate attorney.`,
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

const GOLD = "#1B3A6B";

const HowProbateRealEstateWorks = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Probate Real Estate Sales Work in Washington | Real Property Planning"
      description="Real Property Planning explains how probate real estate sales work in Washington State."
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
      <ProbateStartHere />
      
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
<HeroBandTitle as="h1">How Probate Real Estate Works</HeroBandTitle>
        </div>
      </section>

      {/* Clean prose section */}
      <section style={{ padding: "56px 24px", background: "#faf8f4" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif" }}>
          {/* Oct 27, 2026: a photo beside each section (the site's square estate set), as on the
              simplified topic pages. The "specialist" wording is unchanged pending David's
              review of a neutral rewrite. */}
          <PhotoSteps
            as="h2"
            label="How probate real estate works"
            steps={[
              {
                title: "What Is Probate Real Estate?",
                image: imgWhat,
                body: "When someone passes away owning property, that property often must pass through probate before it can be sold. Probate is the court process for settling an estate — establishing legal authority, settling debts, and distributing assets to heirs.",
              },
              {
                title: "Who Has Authority to Sell?",
                image: imgWho,
                body: "The personal representative — also called the executor — named in the will, or appointed by the court, holds legal authority to sell estate property. This authority is documented through letters testamentary, which must be in place before a property can be listed or transferred.",
              },
              {
                title: "Why Timing Matters",
                image: imgTiming,
                body: "Probate properties often sit vacant while legal authority is being established, accumulating carrying costs — utilities, insurance, maintenance, and property taxes. Coordinating the real estate timeline with the legal process from the start is critical to protecting the estate's value and minimizing unnecessary expense.",
              },
              {
                title: "Why Work With a Specialist?",
                image: imgSpecialist,
                body: "Probate sales require pricing expertise, court-defensible valuations, and close coordination with estate attorneys. A broker who specializes in probate and holds certified appraiser credentials handles all of this in one place — reducing the burden on executors and protecting the interests of every heir involved.",
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading="Probate Real Estate FAQs" />

      <BackToResources />
      <AuthorByline context="estate" />
      {/* "Your next questions" (Oct 21, 2026): entries in src/data/nextQuestions.ts. */}
      <NextQuestions />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default HowProbateRealEstateWorks;
