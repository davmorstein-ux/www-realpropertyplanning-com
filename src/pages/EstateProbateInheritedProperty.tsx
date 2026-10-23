import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";

import { articleSchema } from "@/lib/schema";
import GuidanceGrid from "@/components/GuidanceGrid";
import IntentCTA from "@/components/IntentCTA";
import JourneyShortcuts from "@/components/JourneyShortcuts";
import { Link } from "react-router-dom";
import SimpleHubChoices from "@/components/SimpleHubChoices";
import { ESTATE_HUB_CHOICES, ESTATE_NOT_SURE } from "@/lib/estate-simple";

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
      "At least four months: an estate generally cannot be closed until the creditor claim period has run, four months after the notice to creditors is first published (RCW 11.40.051). Beyond that it depends on the estate's complexity. The house does not have to wait for the estate to close: with nonintervention powers the personal representative can prepare, list and sell it once appointed.",
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
      <main id="main-content" className="apf">
        <HeroBandTitle as="h1">Estate, Probate & Inherited Property</HeroBandTitle>

        {/* Simplified hub (Oct 23, 2026, same pattern as Helping an Aging
            Parent): six photo buttons, two per row on phones and three per
            row on computers, then one full-width "Not sure where to start?"
            bar. Labels and images: src/lib/estate-simple.ts. The old topic
            list (RoadmapDropdown) and the removed "Not sure? Reach out and
            we'll help" line are gone; see git history for the reasons the
            latter was removed. */}
        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="apf-ask">What do you need to know?</p>
            <SimpleHubChoices choices={ESTATE_HUB_CHOICES} notSure={ESTATE_NOT_SURE} />
            <p className="apf-more-links">
              New to probate? Read the{" "}
              <Link to="/washington-probate-guide">Washington Probate &amp; Estate Property Guide</Link> or look up a
              word in the <Link to="/probate-glossary">Probate &amp; Estate Glossary</Link>.
            </p>
            <JourneyShortcuts lead="Looking for a quick answer?" questions="estate" style={{ margin: "32px auto 0" }} />
          </div>
        </section>

        <PageFAQ
          faqs={faqs}
          heading="Estate, Probate & Inherited Property: Common Questions"
          eyebrow="Frequently Asked Questions"
          id="estate-probate-inherited-property"
        />

        {/* Guidance relocated here from /selling-an-inherited-home, which had
            grown into a single page answering what its six sub-pages exist to
            answer. Items live in src/lib/inheritedPropertyGuidance.ts and are
            filtered by this slug — do not paste them inline.

            Both this and the disclaimer below previously sat AFTER </main>,
            outside the main landmark, which put real page content somewhere
            assistive technology does not reach via the skip link and screen
            readers do not include when navigating by landmark. The
            professional disclosure in particular is content that needs to
            travel with the page, not sit adrift beside it. */}
        <GuidanceGrid page="estate-probate-inherited-property" />

        <IntentCTA
          heading="Dealing with an estate property?"
          body="Whether you are the executor, an heir, or the attorney, the property side has its own timeline, valuation questions, and decisions about repairs and sale. Ask, and be pointed to the right guide or the right licensed professional."
          buttonText="Get connected about an estate property"
          reason="estate-property"
          professional="broker"
        />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default EstateProbateInheritedProperty;
