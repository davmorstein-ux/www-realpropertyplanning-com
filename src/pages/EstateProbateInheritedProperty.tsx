import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";

import heroImage from "@/assets/estate-probate-inherited-property-hero-washington.webp";
import { articleSchema } from "@/lib/schema";

const tiles = [
  {
    title: "First Steps After a Death",
    description: "Calm, practical actions to take in the early days — before any major decisions need to be made.",
    href: "/estate-probate-inherited-property/first-steps",
  },
  {
    title: "Understanding Probate & Legal Authority",
    description: "Who has the authority to make decisions — and what probate actually means for your family.",
    href: "/estate-probate-inherited-property/probate-and-legal-authority",
  },
  {
    title: "Understanding the Property's Value",
    description:
      "Estate valuation has unique requirements. Here's what a date-of-death appraisal is and why it matters.",
    href: "/estate-probate-inherited-property/property-value",
  },
  {
    title: "Deciding What to Do With the Property",
    description: "Sell, keep, rent, or transfer — how to think through the options carefully.",
    href: "/estate-probate-inherited-property/what-to-do-with-the-property",
  },
  {
    title: "Preparing the Property",
    description: "From cleanout to repairs — what to handle before the home goes to market.",
    href: "/estate-probate-inherited-property/preparing-the-property",
  },
  {
    title: "Building Your Professional Team",
    description: "Who you need, when to engage them, and how a coordinated team protects everyone.",
    href: "/estate-probate-inherited-property/professional-team",
  },
];

const faqs = [
  {
    question: "Does every estate in Washington have to go through probate?",
    answer:
      "Not necessarily. Whether probate is required depends on how property was titled, whether a living trust was in place, and the overall size of the estate. Washington also has a simplified process available for smaller estates. An estate or probate attorney can confirm what applies to your specific situation.",
  },
  {
    question: "How is a property's value determined for estate purposes?",
    answer:
      "A date-of-death appraisal, completed by a certified appraiser, establishes the property's fair market value as of the date the owner passed away. This figure matters for tax reporting and for dividing the estate fairly among heirs.",
  },
  {
    question: "Who actually has the authority to make decisions about the property?",
    answer:
      "Typically, the personal representative (sometimes called the executor) named in the will, or appointed by the court if there isn't a will, holds that authority. Until that authority is formally established, it's generally best to hold off on major decisions like listing the property for sale.",
  },
  {
    question: "Can the home be sold before probate is fully finished?",
    answer:
      "In many cases, yes, once the personal representative's authority is established — but the specifics depend on the estate and Washington's probate rules. It's worth confirming timing with the estate attorney handling the probate before moving forward.",
  },
  {
    question: "What if the heirs don't agree on selling versus keeping the property?",
    answer:
      "This comes up often. Starting from the same shared, objective information — an honest valuation and a clear picture of carrying costs — tends to make these conversations easier. In some cases a buyout between heirs, or bringing in a neutral third party, helps move things forward.",
  },
  {
    question: "How long does probate and settling the property typically take?",
    answer:
      "It varies quite a bit depending on the estate's complexity, but Washington probate commonly takes several months to a year or more. The property itself can often be prepared and marketed in parallel, once authority to act has been established.",
  },
];

const jsonLd = articleSchema({
  headline: "Managing an Estate, Probate, or Inherited Property",
  description:
    "Topics to explore for executors, families, and heirs navigating estate settlement, probate, inherited homes, and property decisions in Washington State.",
  url: "/estate-probate-inherited-property",
  datePublished: "2026-05-08",
  dateModified: "2026-05-14",
  about: ["Probate", "Estate administration", "Inherited property", "Executors", "Trustees"],
});

const EstateProbateInheritedProperty = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Managing an Estate, Probate, or Inherited Property | Real Property Planning"
        description="A guided resource for executors, trustees, heirs, and families navigating estate settlement, probate questions, inherited homes, and property decisions in Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Managing an Estate, Probate, or Inherited Property", url: "/estate-probate-inherited-property" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Managing an estate, probate, or inherited property in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1465}
            height={792}
          />
        </section>

        <HeroBandTitle as="h1">Estate, Probate & Inherited Property</HeroBandTitle>

        {/* TOPICS TO EXPLORE */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4">
                Topics to Explore
              </p>
              <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[44px] font-semibold text-navy leading-tight">
                Six areas most families need to think through
              </h2>
            </div>

            <p className="max-w-3xl mx-auto text-center text-navy/70 text-base leading-relaxed mb-8">
              Not sure where to start?{" "}
              <Link
                to="/contact"
                className="text-gold font-bold underline underline-offset-2 hover:text-[hsl(var(--gold-dark))]"
              >
                Reach out and we'll help you figure out the right first step.
              </Link>
            </p>

            <RoadmapDropdown topics={tiles} accentColor="#721d24" mode="list" currentPath={tiles[0].href} />
          </div>
        </section>

        <PageFAQ
          faqs={faqs}
          heading="Estate, Probate & Inherited Property: Common Questions"
          eyebrow="Frequently Asked Questions"
          id="estate-probate-inherited-property"
        />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default EstateProbateInheritedProperty;
