import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/probate-real-estate-sales-washington-guide.webp";
import probateTimeline from "@/assets/probate-timeline.webp";
import probateRealEstateHero from "@/assets/probate-real-estate-hero.png";
import HeroBandTitle from "@/components/HeroBandTitle";

const faqs = [
  {
    question: "How long does it take to sell a house in probate in Washington?",
    answer: "Timelines vary widely depending on court processing, property condition, and preparation needs. Once legal authority is established, the listing-to-closing process can take 60 to 120 days — but the full probate timeline may extend several months or longer. Starting the real estate planning process early helps avoid unnecessary delays.",
  },
  {
    question: "Can an executor sell property before probate is completed?",
    answer: "In most cases, the executor or personal representative needs legal authority (letters testamentary) before the property can be listed and sold. However, pre-probate planning — including property assessment, vendor coordination, and pricing strategy — can begin immediately to reduce the overall timeline.",
  },
  {
    question: "Does probate property have to be sold at fair market value?",
    answer: "Executors and personal representatives have a fiduciary duty to act in the best interest of the estate, which generally means achieving fair market value. David Stein's dual credentials as a broker and certified appraiser help ensure pricing decisions are defensible and well-supported by market data.",
  },
  {
    question: "What happens if heirs disagree about selling?",
    answer: "Disagreements among heirs are common in probate situations. When pricing disputes arise, David Stein provides objective, data-driven market analysis that can help move the conversation forward. Legal questions about authority and heir rights should be directed to the estate attorney.",
  },
  {
    question: "Do I need a specialized agent for probate real estate?",
    answer: "Probate sales involve unique legal requirements, emotional complexity, and property condition challenges that most residential agents rarely encounter. Working with a broker who understands court timelines, fiduciary obligations, and estate property conditions can prevent costly mistakes and delays.",
  },
];

const jsonLd = articleSchema({
  headline: "How Probate Real Estate Sales Work in Washington State",
  description: "A comprehensive guide to selling property through probate in Washington — including legal authority, timing, valuation, preparation, and what executors and attorneys need to know.",
  url: "/guides/how-probate-real-estate-works",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Probate real estate", "Washington probate sales", "Estate property", "Executor responsibilities", "Court-supervised property sales"],
});

const HowProbateRealEstateWorks = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Probate Real Estate Sales Work in Washington | Real Property Planning"
      description="Real Property Planning explains how probate real estate sales work in Washington State. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "How Probate Real Estate Works", url: "/guides/how-probate-real-estate-works" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Shared Hero (image + navy band) */}
    <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      <div style={{ lineHeight: 0 }}>
        <img
          src={probateRealEstateHero}
          alt="The Probate Shop — vintage MG service garage with executor, family, and classic red convertible representing probate real estate guidance"
          className="w-full h-auto object-cover object-center block"
          loading="eager"
        />
        <HeroBandTitle as="div">How Probate Real Estate Works</HeroBandTitle>
      </div>
    </section>


    {/* Key Topics — 2x2 tile grid */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "What Is Probate Real Estate?",
              description:
                "When someone passes away owning property, that property often must pass through probate before it can be sold. Probate is the court-supervised process of settling an estate.",
            },
            {
              title: "Who Has Authority to Sell?",
              description:
                "The personal representative (executor) named in the will — or appointed by the court — has legal authority to sell estate property, documented through letters testamentary.",
            },
            {
              title: "Why Timing Matters",
              description:
                "Probate properties sit vacant while legal authority is established, accumulating costs. Coordinating the real estate timeline with the legal process is critical to protecting the estate.",
            },
            {
              title: "Why Use a Specialist?",
              description:
                "Probate sales require pricing expertise, court-defensible valuations, and coordination with attorneys. A broker who specializes in probate handles all of this in one place.",
            },
          ].map((tile) => (
            <div key={tile.title} className="interior-tile tile-white h-full">
              <div className="tile-white__inner h-full">
                <div className="tile-white__face h-full">
                  <div className="flex h-full flex-col px-6 pb-6 pt-8 sm:px-7 sm:pb-7 sm:pt-9">
                    <h3
                      className="mb-3 font-serif text-xl sm:text-[1.38rem] font-extrabold leading-snug text-foreground"
                      style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
                    >
                      {tile.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <PageFAQ faqs={faqs} heading="Probate Real Estate FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "What Executors Should Do First", description: "A step-by-step guide to the first 30 days of managing estate property as a personal representative.", href: "/guides/what-executors-should-do" },
        { title: "Inherited House Guide for Washington Families", description: "Explore your options — sell, keep, rent, or buy out co-inheritors — with key considerations.", href: "/guides/inherited-house-washington" },
        { title: "Appraisal vs. CMA: Which Do You Need?", description: "Learn when a formal appraisal is required versus a comparative market analysis.", href: "/guides/appraisal-vs-cma" },
      ]}
    />

    <RelatedServices currentPath="/guides/how-probate-real-estate-works" />


    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default HowProbateRealEstateWorks;
