import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";

import { articleSchema } from "@/lib/schema";
import GuidanceGrid from "@/components/GuidanceGrid";
import { estateProbateTopics } from "@/lib/estateProbateTopics";

/* Descriptions live here, not in the shared topic list, on purpose.
   RoadmapDropdown's "list" mode switches its grid from two columns to one
   as soon as ANY topic carries a description. The six sub-pages render the
   same list as a compact two-column rail and should stay that way, so the
   descriptions belong to the hub alone.

   Titles and hrefs, though, are now derived from estateProbateTopics rather
   than retyped. Those two lists were maintained separately and were one
   careless edit away from the hub and its own sub-pages disagreeing about
   what the six topics are called. Keyed by href so a reordering in the lib
   cannot silently pair the wrong blurb with the wrong topic. */
const DESCRIPTIONS: Record<string, string> = {
  "/estate-probate-inherited-property/first-steps":
    "Calm, practical actions to take in the early days — before any major decisions need to be made.",
  "/estate-probate-inherited-property/probate-and-legal-authority":
    "Who has the authority to make decisions — and what probate actually means for your family.",
  "/estate-probate-inherited-property/property-value":
    "Estate valuation has unique requirements. Here's what a date-of-death appraisal is and why it matters.",
  "/estate-probate-inherited-property/what-to-do-with-the-property":
    "Sell, keep, rent, or transfer — how to think through the options carefully.",
  "/estate-probate-inherited-property/preparing-the-property":
    "From cleanout to repairs — what to handle before the home goes to market.",
  "/estate-probate-inherited-property/professional-team":
    "Who you need, when to engage them, and how a coordinated team protects everyone.",
};

const tiles = estateProbateTopics.map((topic) => ({
  ...topic,
  description: DESCRIPTIONS[topic.href],
}));

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

            {/* Removed: "Not sure where to start? Reach out and we'll help you
                figure out the right first step."

                Two problems. It attributed the help to Real Property Planning,
                which is a neutral educational hub and does not provide
                services — the same misattribution corrected in
                ForAttorneysHowItWorks. And it was an unbounded promise of
                individual guidance to every visitor on a page about probate
                and inherited property, where readers arrive in distress and at
                all hours.

                Deliberately not replaced with a softer version. The topic list
                below is the page doing its job; a call to action here would be
                asking for contact at the moment of highest vulnerability. The
                footer and /contact remain available to anyone who wants them. */}

            {/* No currentPath. This previously passed tiles[0].href, which told
                RoadmapDropdown the reader was standing on "First Steps" — so
                that one entry rendered in active blue (#1f6fb2) on a page the
                reader was not on, while the other five stayed burgundy. On a
                hub, nothing in the list is current; the prop is optional and
                omitting it leaves every topic in its resting state. */}
            <RoadmapDropdown topics={tiles} accentColor="#721d24" mode="list" />
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

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default EstateProbateInheritedProperty;
