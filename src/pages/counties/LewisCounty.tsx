import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const LewisCounty = () => (
  <CountyPageTemplate
    countyName="Lewis County"
    countyPath="/lewis-county"
    countySlug="lewis-county"
    heroH1="Lewis County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited property along the I-5 corridor and into the Cascade foothills."
    belowHeroHeading="Serving Every Corner of Lewis County"
    seoTitle="Probate & Estate Real Estate in Lewis County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Lewis County, Washington. Serving Chehalis, Centralia, Morton & surrounding communities."
    cities={[
      "Chehalis", "Centralia", "Morton", "Winlock", "Napavine",
      "Toledo", "Vader", "Pe Ell", "Randle", "Packwood",
    ]}
    localInsight={`Lewis County stretches from the twin cities of Chehalis and Centralia along the I-5 corridor to the rural communities of the Cascade foothills and the Cowlitz River valley. Its communities differ: Centralia and Chehalis are the commercial centers, Toledo and Winlock are quiet agricultural communities, and Morton, Randle, and Packwood are mountain-gateway towns near Mount Rainier. Estate and inherited properties here include older homes in established neighborhoods, rural acreage with outbuildings, agricultural parcels, and properties in communities where comparable sales are limited and local knowledge matters. ${FEATURED_BROKER.Role} provides condition-based pricing and practical coordination for Lewis County estate properties.`}
    aeoQuestion="How does probate real estate work in Lewis County?"
    aeoAnswer="Lewis County probates are usually filed in the Lewis County Superior Court in Chehalis, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from the initial date-of-death valuation through closing, with particular attention to the rural property characteristics and community-specific market conditions common throughout Lewis County."
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Lewis County?",
        answer: "Lewis County estates frequently involve older single-family homes in Centralia and Chehalis, rural acreage and agricultural parcels throughout the county, properties in small communities with limited comparable sales, and mountain-area homes near Morton, Randle, and Packwood. Each type requires a different valuation and preparation approach.",
      },
      {
        question: "How are rural Lewis County properties with acreage or outbuildings handled in an estate sale?",
        answer: `Rural properties with acreage, barns, shops, or agricultural features need a hands-on evaluation that automated tools cannot provide. ${FEATURED_BROKER.Role}'s certified appraisal background helps with these property types, where land characteristics, outbuilding condition, and access all affect value in ways that standard residential comparisons miss.`,
      },
    ]}
    localExpertiseHeading="Lewis County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Lewis County's real estate market reflects its geography. Centralia and Chehalis serve as the county's commercial and residential hub, with a practical, value-oriented buyer pool and housing stock that ranges from older established homes to newer construction on the cities' edges. These communities have steady local demand and some spillover from buyers priced out of Pierce and Thurston County markets to the north.",
      `The rural communities (Toledo, Winlock, Vader, Pe Ell, and the foothills towns) operate in a different market. Limited comparable sales, rural property characteristics, and a smaller buyer pool make accurate pricing especially important and automated estimates especially unreliable. Estate and inherited properties in these communities benefit most from an on-the-ground, condition-based evaluation, which ${FEATURED_BROKER.role} provides.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Lewis County, including:`}
    closingCtaBody={[
      "If you are managing an inherited home in Centralia, rural acreage near Toledo, or a foothills property near Morton, a conversation can cover its likely sale price and the work it needs first.",
      `${FEATURED_BROKER.Role} can walk through a Lewis County property in person before any price is set.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Lewis County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Lewis County Superior Court in Chehalis). ${FEATURED_BROKER.Role} uses that waiting period for the valuation walk-through, securing the property, coordinating cleanout vendors, and preparing the marketing file, so the property can go on the market soon after Letters arrive.`,
      },
      {
        question: "How are agricultural or acreage properties valued in a Lewis County estate?",
        answer: `Agricultural and acreage properties in Lewis County require valuation that accounts for land quality, outbuildings, irrigation or water rights, access, and the specific buyer pool for that type of property in that area. ${FEATURED_BROKER.Role}'s certified appraisal background supports the property-specific analysis these properties need, rather than a desktop estimate based on residential comparables that don't apply.`,
      },
      {
        question: "Can a Lewis County estate sale be managed for out-of-area heirs?",
        answer: `Yes. This is especially common in Lewis County, where many property owners have family living in the Seattle metro area or out of state. ${FEATURED_BROKER.Role} handles property assessment, vendor coordination, preparation, showings, and offer review locally, and sends regular updates so families don't need to travel to Lewis County to manage the process.`,
      },
      {
        question: "What should executors know about selling property in Lewis County's smaller communities?",
        answer: `In smaller Lewis County communities such as Pe Ell, Vader, Randle, and Packwood, the buyer pool is limited and comparable sales may be sparse. That makes an on-the-ground valuation especially important and realistic pricing expectations critical from the start. ${FEATURED_BROKER.Role} works with rural and small-community markets and can help executors understand what their property is likely to attract, and at what price.`,
      },
    ]}
  />
);

export default LewisCounty;
