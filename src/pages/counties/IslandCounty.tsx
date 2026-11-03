import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const IslandCounty = () => (
  <CountyPageTemplate
    countyName="Island County"
    countyPath="/island-county"
    countySlug="island-county"
    heroH1="Island County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited and estate property on Whidbey and Camano Islands."
    belowHeroHeading="Serving Every Corner of Island County"
    seoTitle="Probate & Estate Real Estate in Island County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Island County, Washington. Serving Whidbey Island, Camano Island, Oak Harbor, Coupeville & surrounding communities."
    cities={[
      "Oak Harbor", "Coupeville", "Langley", "Freeland", "Clinton",
      "Camano Island", "Greenbank", "Bayview", "Maxwelton",
    ]}
    localInsight={`Island County includes Whidbey Island, the longest island in the contiguous United States, and Camano Island. The two have different characters and different real estate markets. Oak Harbor's naval-adjacent economy and family-oriented housing stock differ considerably from Coupeville's historic town, Langley's arts community, and the rural stretches of central and south Whidbey. Camano Island attracts retirees and second-home owners who want waterfront access and a quieter pace. An estate or inherited property in Island County needs guidance that accounts for island logistics, waterfront premiums, seasonal buyer patterns, and the community the property sits in. ${FEATURED_BROKER.Role} coordinates the full process for families, executors, and attorneys, including the practical work of managing an island property from the mainland.`}
    aeoQuestion="How does probate real estate work in Island County?"
    aeoAnswer="Island County probates are usually filed in the Island County Superior Court in Coupeville, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can assist executors and families with date-of-death valuations, property preparation, and the full sale process, with particular attention to island logistics and the mainland coordination that out-of-area families often need."
    aeoSupportFaqs={[
      {
        question: "What makes selling estate property on Whidbey or Camano Island different from the mainland?",
        answer: `Island properties involve logistics that mainland sales don't: ferry schedules, vendor access, and a buyer pool drawn partly from the mainland and partly from the island communities themselves. Seasonal demand patterns also differ from Puget Sound suburban markets. ${FEATURED_BROKER.Role} coordinates this locally so families managing the sale from Seattle or farther away don't have to.`,
      },
      {
        question: "How are waterfront properties on the islands valued for estate purposes?",
        answer: `Waterfront properties on Whidbey and Camano Islands vary significantly with bank height, beach access, views, bulkhead condition, and community character. Automated estimates are especially unreliable for island waterfront. ${FEATURED_BROKER.Role}'s certified appraisal background supports the on-site, property-specific evaluation these properties need.`,
      },
    ]}
    localExpertiseHeading="Island County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Island County's real estate market is shaped by geography as much as economics. Whidbey Island is over 55 miles long from north to south, so Oak Harbor, Coupeville, Greenbank, Freeland, Langley, and Clinton each work as separate communities with their own buyer pools and pricing. An estate property in Oak Harbor competes in a military-influenced market. One in Langley appeals to arts-community buyers and retirees who want a small-town setting, and one in Freeland or Greenbank serves a different mix again.",
      "Camano Island is a separate market too. It is connected to the mainland by a bridge but keeps an island character that attracts retirees, second-home buyers, and families who want waterfront access without depending on a ferry. Estate and inherited properties on Camano often sit on larger lots with mature landscaping and older construction, so they need an honest condition assessment and preparation matched to what Camano buyers expect.",
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Island County, including:`}
    closingCtaBody={[
      "If you are handling an inherited property in Oak Harbor, a senior move out of a Langley cottage, or estate property on Camano Island, a short conversation can lay out what has to happen before the property is listed.",
      `${FEATURED_BROKER.Role} can handle property access, vendors, and showings on the island when the family lives on the mainland or out of state.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can an Island County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Island County Superior Court in Coupeville). ${FEATURED_BROKER.Role} uses that waiting period for the date-of-death valuation walk-through, securing the property, coordinating cleanout vendors, and preparing the marketing file, so the listing can go ahead once Letters arrive.`,
      },
      {
        question: "How does Naval Air Station Whidbey Island affect real estate in Oak Harbor?",
        answer: `NAS Whidbey Island is the dominant economic force in Oak Harbor. It creates a military-influenced buyer pool with specific traits: VA loan eligibility, PCS-related relocation timelines, and familiarity with life near the base. Estate properties in Oak Harbor often attract military buyers, which affects marketing, financing, and realistic pricing. ${FEATURED_BROKER.Role} accounts for these factors.`,
      },
      {
        question: "Can an island estate sale be managed for out-of-state heirs?",
        answer: `Yes. This is a common situation for ${FEATURED_BROKER.role} in Island County. Managing an estate property on Whidbey or Camano Island from the mainland or out of state takes someone on the ground for property access, vendor coordination, ferry logistics, and regular updates. ${FEATURED_BROKER.pronoun.Subject} handles this so heirs rarely need to be on the island for any step of the process.`,
      },
      {
        question: "How is a waterfront estate property on Whidbey or Camano Island priced?",
        answer: `Waterfront pricing on the islands depends on factors that vary from property to property: bank height and beach access, bulkhead condition, view orientation, community character, and proximity to amenities. Comparable sales from other parts of Puget Sound often don't apply. ${FEATURED_BROKER.Role}'s certified appraisal background helps price island waterfront on its actual characteristics, not borrowed comparables.`,
      },
    ]}
  />
);

export default IslandCounty;
