import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const KitsapCounty = () => (
  <CountyPageTemplate
    countyName="Kitsap County"
    countyPath="/kitsap-county"
    countySlug="kitsap-county"
    seoTitle="Probate & Estate Real Estate in Kitsap County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Kitsap County. Serving Bremerton, Silverdale, Poulsbo, Bainbridge Island & more."
    heroH1="Kitsap County, WA"
    heroSubheading="Estate, probate, and senior transition real estate, priced for the peninsula the property actually sits on."
    belowHeroHeading="Serving Every Corner of Kitsap County"
    cities={[
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Port Orchard", "Kingston", "Suquamish",
    ]}
    localInsight={`Kitsap County is a peninsula market within Puget Sound: connected to Seattle by ferry, but with its own character and its own pricing. Bainbridge Island and Poulsbo have waterfront communities, Bremerton's market is shaped by the military, and Silverdale has grown as a suburb, so an estate property in each needs a price set for its own part of the peninsula. ${FEATURED_BROKER.Role} serves families, executors, trustees, and attorneys throughout Kitsap County as both a licensed real estate broker and a Washington State Certified Residential Appraiser.`}
    aeoQuestion="How do probate and estate property sales work in Kitsap County?"
    aeoAnswer={`The process follows Washington State probate law, but Kitsap County has its own probate court, local title companies, and local professionals, which ${FEATURED_BROKER.role} is familiar with. An estate property in Kitsap needs a price set for the peninsula's buyer pool, which includes Seattle commuters drawn by ferry access, military personnel, local buyers, and retirees looking for waterfront living at lower prices than in King County. ${FEATURED_BROKER.pronoun.Possessive} pricing and preparation plan takes all of these buyers into account.`}
    aeoSupportFaqs={[
      {
        question: "How does the ferry connection to Seattle affect Kitsap property values?",
        answer: `Significantly, and the effect depends on how close the property is to a ferry terminal and what the commute is like. Properties on Bainbridge Island and in Bremerton with practical ferry commutes to Seattle, and in Kingston with its ferry to Edmonds, command premiums that reflect that access. Properties farther from ferry routes have their own buyer pool and pricing. ${FEATURED_BROKER.Role}'s location-specific analysis accounts for these differences.`,
      },
      {
        question: "What makes Kitsap County estate sales unique?",
        answer: `Several factors: the island and peninsula geography creates natural boundaries and specific buyer pools; waterfront and water-view properties are more common than in most mainland markets; and the county's mix of military, tech-commuter, and local buyers creates more varied demand than in more uniform markets. ${FEATURED_BROKER.Role} accounts for each of these with the condition-adjusted, location-specific approach ${FEATURED_BROKER.pronoun.subject} uses in every county ${FEATURED_BROKER.pronoun.subject} serves.`,
      },
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Kitsap County, including:`}
    closingCtaBody={[
      `If you are handling an estate property in Kitsap County, or a probate sale there has already started, a short conversation with ${FEATURED_BROKER.name} can cover what the property is worth, what it needs before listing, and which buyers it is likely to draw.`,
    ]}
    countySpecificFaqs={[
      {
        question: "How does the ferry affect selling an inherited home on Bainbridge Island?",
        answer: `Ferry access shapes much of the Bainbridge Island buyer pool: commute patterns, showing logistics, and buyer expectations. ${FEATURED_BROKER.Role} accounts for how ferry proximity and schedules affect property value and marketing. ${FEATURED_BROKER.pronoun.Subject} coordinates showings and vendor access around ferry schedules so out-of-area executors do not need to manage these logistics themselves.`,
      },
      {
        question: "What should a military family in Bremerton know about selling an inherited home?",
        answer: `Military families in Bremerton and Silverdale often face deployment timelines, relocations, and coordination from a distance when managing inherited property. ${FEATURED_BROKER.Role} provides local coordination for these situations, handling property access, preparation, and the sale process and keeping families informed wherever they are stationed.`,
      },
      {
        question: "Are waterfront properties on the Kitsap Peninsula harder to price accurately?",
        answer: `Yes. Waterfront and water-view properties need assessments that account for shoreline type, view corridors, bulkhead condition, and access, factors that automated valuation tools often miss. ${FEATURED_BROKER.Role}'s certified appraiser credentials give ${FEATURED_BROKER.pronoun.object} training in evaluating these features, so executors and trustees can set prices based on the actual market.`,
      },
      {
        question: "Can a Kitsap County sale be managed if I live in Seattle or out of state?",
        answer: `Yes. Kitsap County's ferry-separated geography makes remote management common. ${FEATURED_BROKER.Role} handles property access, vendor coordination, preparation, showings, and the full sale process, with regular updates so you can carry out your executor or trustee duties from wherever you are.`,
      },
      {
        question: "What makes selling a home in Poulsbo or Kingston different from other Kitsap communities?",
        answer: `Poulsbo and Kingston attract buyers drawn to small-town character, Scandinavian heritage, and waterfront proximity. The buyer pool is smaller and more specific than in Bremerton or Silverdale, so accurate pricing and targeted marketing matter more. ${FEATURED_BROKER.Role}'s local market awareness and appraisal discipline help position these properties for the buyers most likely to want them.`,
      },
    ]}
  />
);

export default KitsapCounty;
