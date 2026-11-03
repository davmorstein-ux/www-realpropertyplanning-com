import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const SanJuanCounty = () => (
  <CountyPageTemplate
    countyName="San Juan County"
    countyPath="/san-juan-county"
    countySlug="san-juan-county"
    heroH1="San Juan County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited property on San Juan, Orcas, Lopez, and the other islands of the archipelago."
    belowHeroHeading="Serving Every Corner of San Juan County"
    seoTitle="Probate & Estate Real Estate in San Juan County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout San Juan County, Washington. Serving San Juan Island, Orcas Island, Lopez Island & surrounding communities."
    cities={[
      "Friday Harbor", "Eastsound", "Lopez Island", "Deer Harbor",
      "Roche Harbor", "Olga", "Shaw Island", "Stuart Island",
    ]}
    localInsight={`San Juan County is Washington's only county with no road connection to the mainland: an archipelago of 172 named islands reached only by Washington State Ferry, private boat, or small aircraft. Its four main islands (San Juan, Orcas, Lopez, and Shaw) each have their own communities and real estate markets. Friday Harbor on San Juan Island is the county seat, the only incorporated town, and the primary commercial center. Eastsound is the main village on Orcas Island, known for its arts community and Moran State Park. Lopez Island draws buyers who want a quiet, agricultural setting and its cycling culture. Estate and inherited properties here come with island logistics, ferry-dependent access, few comparable sales, and a buyer pool drawn from across the Pacific Northwest and beyond. ${FEATURED_BROKER.Role} coordinates locally on these points for families handling an island estate.`}
    aeoQuestion="How does probate real estate work in San Juan County?"
    aeoAnswer="San Juan County probates are usually filed in the San Juan County Superior Court in Friday Harbor on San Juan Island, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families through the full process, with particular attention to ferry logistics, island-specific property characteristics, and the mainland coordination that out-of-area families almost always need."
    aeoSupportFaqs={[
      {
        question: "What makes selling estate property in the San Juan Islands different from mainland sales?",
        answer: `Ferry schedules affect vendor access and showings, the small island market limits comparable sales, waterfront premiums vary widely by location, and buyers come from across the region and beyond. These sales go more smoothly with someone who knows the islands and can coordinate locally. ${FEATURED_BROKER.Role} handles the full process so mainland families don't have to work out island logistics on their own.`,
      },
      {
        question: "How are San Juan Islands properties valued for estate purposes?",
        answer: `Automated tools have a hard time valuing San Juan Islands properties. Waterfront access, ferry proximity, view quality, the character of the island, and the small number of comparable sales all affect value, and they need a hands-on, island-specific evaluation. ${FEATURED_BROKER.Role}'s certified appraisal background supports that property-specific analysis.`,
      },
    ]}
    localExpertiseHeading="San Juan County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Inventory in San Juan County is always limited: the islands have finite land, and developable waterfront is especially scarce. Well-positioned properties attract buyers from across the Pacific Northwest and from out of state, but condition, preparation, and accurate pricing still matter a great deal. An overpriced or poorly presented estate property will sit even in a supply-constrained market, because the pool of motivated buyers for any one island property is smaller than it looks.",
      "Each island is its own submarket. The Friday Harbor area on San Juan Island has the broadest buyer appeal and the most active market. Orcas Island has the county's highest prices, particularly for waterfront and view properties near Moran State Park and Eastsound's amenities. Lopez Island's quieter, agricultural setting attracts a particular buyer, one looking for simplicity, community, and the island's cycling and farming culture. Estate properties on each island should be priced and presented for that island's buyer rather than with a generic island-property approach.",
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout San Juan County, including:`}
    closingCtaBody={[
      "If you are responsible for an inherited property on San Juan Island, Orcas Island, Lopez Island, or one of the smaller islands, a conversation can cover how the sale would work from the mainland.",
      `${FEATURED_BROKER.Role} coordinates the full process, including the ferry and island logistics, for families who are managing the sale from off the island.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a San Juan County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the San Juan County Superior Court in Friday Harbor). ${FEATURED_BROKER.Role} uses that waiting period for the date-of-death valuation walk-through, securing the property, coordinating cleanout vendors, and preparing the marketing file, planning around ferry schedules and island logistics throughout.`,
      },
      {
        question: "How does ferry access affect estate property sales in the San Juan Islands?",
        answer: `Ferry schedules affect most parts of an island estate sale: vendor access for cleanout and repairs, showings for buyers coming from the mainland, and the timeline for inspections and appraisals. ${FEATURED_BROKER.Role} coordinates this locally and builds ferry schedules into the preparation and marketing plan from the start.`,
      },
      {
        question: "Can a San Juan County estate sale be managed for mainland families?",
        answer: `Yes. Mainland coordination is the usual case for San Juan County estate sales. Most island property owners have family based in King, Snohomish, or Pierce County, or out of state. ${FEATURED_BROKER.Role} handles the work on the island (property assessment, vendor coordination, preparation, showings, and closing) and sends regular updates, so families seldom need to take the ferry for any step.`,
      },
      {
        question: "Are there different considerations for estate properties on Orcas Island versus San Juan Island?",
        answer: "Yes. Each island has its own market, buyer pool, and pricing. Orcas Island has the county's highest prices and attracts buyers looking for premium waterfront and view properties near Moran State Park and Eastsound's amenities. Friday Harbor on San Juan Island has the broadest market activity and the most accessible comparable sales. Lopez Island attracts a quieter, more specific buyer. Estate properties on each island should be evaluated and positioned for that island's market.",
      },
    ]}
  />
);

export default SanJuanCounty;
