import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const MasonCounty = () => (
  <CountyPageTemplate
    countyName="Mason County"
    countyPath="/mason-county"
    countySlug="mason-county"
    heroH1="Mason County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited property along Hood Canal and across this eastern edge of the Olympic Peninsula."
    belowHeroHeading="Serving Every Corner of Mason County"
    seoTitle="Probate & Estate Real Estate in Mason County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Mason County, Washington. Serving Shelton, Belfair, Union, Hoodsport & surrounding communities."
    cities={[
      "Shelton", "Belfair", "Union", "Hoodsport", "Allyn",
      "Grapeview", "Matlock", "Potlatch", "Lilliwaup", "Tahuya",
    ]}
    localInsight={`Mason County sits on the Olympic Peninsula, with Shelton as its county seat and commercial center and Hood Canal along its eastern edge. The county draws retirees, second-home buyers, and families who want waterfront access, rural privacy, and a slower pace than the Puget Sound suburbs. Estate and inherited properties here follow the same pattern: waterfront cabins and homes along Hood Canal, rural acreage in the surrounding hills, and established homes in Shelton's residential neighborhoods. Each type is valued differently, and because many parts of the county have few comparable sales, an on-site evaluation matters more than usual. ${FEATURED_BROKER.Role} works with all three property types in Mason County.`}
    aeoQuestion="How does probate real estate work in Mason County?"
    aeoAnswer="Mason County probates are usually filed in the Mason County Superior Court in Shelton, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from date-of-death valuation through closing, with particular attention to waterfront features, rural market conditions, and the logistics of managing an estate property that may be a long drive from Seattle."
    aeoSupportFaqs={[
      {
        question: "How are Hood Canal waterfront properties valued for estate purposes?",
        answer: `Automated valuation tools handle Hood Canal waterfront poorly, because the features that drive its value vary from lot to lot. Bank height, tideland ownership, oyster lease rights, bulkhead condition, view orientation, and the character of the community all affect value, and they have to be seen in person. ${FEATURED_BROKER.Role}'s certified appraisal background supports that property-specific analysis.`,
      },
      {
        question: "What types of estate properties are most common in Mason County?",
        answer: "Mason County estates frequently involve Hood Canal waterfront or water-view properties, rural acreage in the county's forested interior, established homes in Shelton's residential neighborhoods, and recreational or second-home properties throughout the county. Each requires a different valuation and preparation strategy.",
      },
    ]}
    localExpertiseHeading="Mason County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Mason County's real estate market is defined by Hood Canal. Properties with canal frontage, canal views, or canal access command significant premiums that vary with the specific waterfront characteristics, and those premiums are hard to measure without an on-site evaluation of the property. Buyers for Hood Canal waterfront come from across Western Washington and beyond, looking for second homes, retirement homes, and recreational properties.",
      `Shelton's residential market works differently. Demand is steady and mostly local, and prices reflect the county's timber and manufacturing employment base. Estate homes in Shelton's established neighborhoods need an honest condition assessment and a preparation plan matched to what local buyers expect. Rural properties in the county's interior (acreage, forested parcels, homes on well and septic systems) need rural valuation experience, which ${FEATURED_BROKER.role}'s appraisal background provides.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Mason County, including:`}
    closingCtaBody={[
      "If you are responsible for a Hood Canal waterfront property, rural acreage near Matlock, or a longtime family home in Shelton, a conversation can sort out the next steps.",
      `${FEATURED_BROKER.Role} gives condition-based advice on Mason County estate properties.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Mason County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Mason County Superior Court in Shelton). ${FEATURED_BROKER.Role} uses that waiting period for the date-of-death valuation walk-through, securing the property, coordinating cleanout vendors, and preparing the marketing file, so the listing can go ahead as soon as Letters arrive.`,
      },
      {
        question: "How does tideland ownership or oyster lease rights affect Hood Canal property values?",
        answer: `Tideland ownership and oyster lease rights can add meaningful value to Hood Canal waterfront properties, but they also complicate the sale: title questions come up, and buyers need them explained. ${FEATURED_BROKER.Role}'s appraisal background and familiarity with Hood Canal waterfront transactions help executors and families understand how these features affect value and what buyers will need to know.`,
      },
      {
        question: "Can a Mason County estate sale be managed for families in the Seattle area?",
        answer: `Yes. This is a common situation for ${FEATURED_BROKER.role} in Mason County. Many Hood Canal and Mason County properties are owned by families based in King, Pierce, or Snohomish County. ${FEATURED_BROKER.pronoun.Subject} handles the full process locally (property assessment, vendor coordination, preparation, showings, and closing) with regular updates so families don't need to make repeated trips to the peninsula.`,
      },
      {
        question: "What should I know about selling a rural Mason County property as part of an estate?",
        answer: `Rural properties in Mason County, such as forested acreage, homes on well and septic systems, and parcels with limited road access, need a valuation that accounts for the land, the condition of those systems, and a buyer pool that differs significantly from suburban markets. ${FEATURED_BROKER.Role}'s certified appraisal credentials support that property-specific analysis.`,
      },
    ]}
  />
);

export default MasonCounty;
