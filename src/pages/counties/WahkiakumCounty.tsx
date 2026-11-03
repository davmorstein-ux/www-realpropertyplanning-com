import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER, SAME_PERSON } from "@/data/featuredProfessionals";

const WahkiakumCounty = () => (
  <CountyPageTemplate
    countyName="Wahkiakum County"
    countyPath="/wahkiakum-county"
    countySlug="wahkiakum-county"
    heroH1="Wahkiakum County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families with inherited property in Washington's most rural river-delta county."
    belowHeroHeading="Serving Every Corner of Wahkiakum County"
    seoTitle="Probate & Estate Real Estate in Wahkiakum County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Wahkiakum County, Washington. Serving Cathlamet, Skamokawa & surrounding communities."
    cities={[
      "Cathlamet", "Skamokawa", "Puget Island", "Grays River",
      "Rosburg", "Altoona",
    ]}
    localInsight={`Wahkiakum County is one of Washington's least populated counties: a rural county along the Columbia River delta with a small real estate market of its own. Cathlamet, the county seat, is a small historic town on the Columbia's north bank with roots in the region's fishing and timber industries. Skamokawa's historic buildings and river setting draw buyers looking for rural Pacific Northwest living. Puget Island, connected to Cathlamet by bridge and to Westport, Oregon by the Wahkiakum County ferry, is one of Washington's largest river islands and a farming community. Many estate and inherited properties here don't fit standard residential templates, so pricing and presenting them depends on knowing who the buyers are and what they value. ${FEATURED_BROKER.Role} works with estate properties throughout Wahkiakum County.`}
    aeoQuestion="How does probate real estate work in Wahkiakum County?"
    aeoAnswer={`Wahkiakum County probates are usually filed in the Wahkiakum County Superior Court in Cathlamet, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker${SAME_PERSON ? ", who is also a certified residential appraiser," : ""} can support executors and families from date-of-death valuation through closing, with particular attention to the county's rural property characteristics, very limited comparable sales, and the practical work of managing estate property in a remote county.`}
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Wahkiakum County?",
        answer: "Wahkiakum County estates frequently involve historic homes in Cathlamet, rural residential and agricultural properties throughout the county, river-view and Columbia River access properties, farming operations on Puget Island, and properties in small communities like Skamokawa and Grays River with strong local character. All of these need an in-person valuation based on the local market rather than an automated estimate.",
      },
      {
        question: "How are properties valued in a county with very limited comparable sales?",
        answer: `Limited comparable sales are the main valuation challenge in Wahkiakum County. When few properties have sold recently, and the ones that have may differ a good deal from the property being valued, professional judgment, condition-based analysis, and knowledge of the local buyer pool matter more. ${FEATURED_BROKER.Role}'s certified appraisal background supports pricing Wahkiakum County properties when comparable data is sparse.`,
      },
    ]}
    localExpertiseHeading="Wahkiakum County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Wahkiakum County's market is shaped by its remoteness, its river history, and the buyers it attracts. Buyers here have usually sought the county out for its quiet, its rural setting, and its Columbia River character. Estate properties that are priced and presented for those buyers will find them. Properties that are overpriced or poorly positioned for the local market will sit, because the buyer pool is small.",
      `Cathlamet's historic homes carry architectural and community significance that affects value in ways automated tools don't capture. Skamokawa's character as a heritage destination creates specific buyer interest in its older properties. On Puget Island, agricultural operations, island access by a single bridge, and a close-knit community all factor into how properties are valued and sold. ${FEATURED_BROKER.Role} evaluates properties in each of these communities against their own local market.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Wahkiakum County, including:`}
    closingCtaBody={[
      "If you are managing an inherited home in Cathlamet, a farm on Puget Island, or a river-view property near Skamokawa, start with a conversation about what the property needs.",
      `${FEATURED_BROKER.Role} gives condition-based advice on Wahkiakum County estate properties, whatever their size or location in the county.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Wahkiakum County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Wahkiakum County Superior Court in Cathlamet). ${FEATURED_BROKER.Role} uses that waiting period to conduct the valuation walk-through, secure the property, line up cleanout vendors, and prepare the marketing file, so the listing can go ahead as soon as Letters arrive.`,
      },
      {
        question: "How is a Puget Island farm or agricultural property valued in an estate?",
        answer: `Puget Island agricultural properties need a valuation that accounts for farmland quality, drainage, outbuildings, island access, and a buyer pool specifically interested in island farming and rural Columbia River living. Standard residential comparable analysis does not handle these properties well. ${FEATURED_BROKER.Role}'s certified appraisal background supports the property-specific evaluation they need.`,
      },
      {
        question: "Can a Wahkiakum County estate sale be managed for out-of-area families?",
        answer: `Yes. Given the county's remoteness, nearly every Wahkiakum County estate sale involves coordinating with family out of the area. ${FEATURED_BROKER.Role} handles property assessment, vendor coordination, preparation, showings, and closing locally, with regular updates so families based in Portland, Seattle, or out of state can manage the process without repeated trips to the Columbia River delta.`,
      },
      {
        question: "What makes Wahkiakum County different from other rural Washington counties for estate sales?",
        answer: `Its size. Wahkiakum County is one of Washington's least populated counties, so the buyer pool for any given property is small, and getting the pricing and presentation right matters more than in larger markets. There is very little room for error when the pool of motivated buyers is limited. ${FEATURED_BROKER.Role}'s approach (honest condition assessment, realistic pricing, and marketing aimed at the buyers most likely to value what the property offers) suits a market this small.`,
      },
    ]}
  />
);

export default WahkiakumCounty;
