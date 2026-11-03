import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const SkamaniaCounty = () => (
  <CountyPageTemplate
    countyName="Skamania County"
    countyPath="/skamania-county"
    countySlug="skamania-county"
    heroH1="Skamania County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families handling inherited property in the Columbia River Gorge."
    belowHeroHeading="Serving Every Corner of Skamania County"
    seoTitle="Probate & Estate Real Estate in Skamania County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Skamania County, Washington. Serving Stevenson, North Bonneville, Carson & surrounding communities."
    cities={[
      "Stevenson", "North Bonneville", "Carson",
      "Underwood", "Cook", "Home Valley", "Stabler",
    ]}
    localInsight={`Skamania County occupies the Washington side of the Columbia River Gorge, and geography shapes much of its real estate market. Stevenson is the county seat and primary community, a small town with a strong tourism connection to the Gorge's outdoor recreation. North Bonneville sits near the Bonneville Dam, and Carson and the surrounding communities draw residents looking for rural living with Columbia River access. Estate and inherited properties throughout Skamania County need local knowledge: the Gorge's scenic designation affects land use and development, comparable sales are limited, and the buyer pool is made up of people drawn to the area's setting and outdoor recreation. ${FEATURED_BROKER.Role} gives condition-based pricing and preparation advice on Skamania County estate properties.`}
    aeoQuestion="How does probate real estate work in Skamania County?"
    aeoAnswer="Skamania County probates are usually filed in the Skamania County Superior Court in Stevenson, though Washington allows filing in any county. Personal representatives must receive Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from date-of-death valuation through closing, with particular attention to the Gorge's land use rules, limited comparable sales, and the logistics of managing an estate property in a rural county."
    aeoSupportFaqs={[
      {
        question: "How does the Columbia River Gorge National Scenic Area designation affect property values in Skamania County?",
        answer: `The Gorge's National Scenic Area designation restricts certain types of development and land use throughout much of Skamania County. This affects both what can be done with a property and how it is valued. Buyers who know the Gorge accept and often value these restrictions, while buyers unfamiliar with them may be surprised. ${FEATURED_BROKER.Role} accounts for these land use rules in the valuation and in explaining them to buyers.`,
      },
      {
        question: "What types of estate properties are most common in Skamania County?",
        answer: "Skamania County estates frequently involve rural residential properties near Stevenson and Carson, riverfront or river-view homes and cabins along the Columbia, recreational properties in the surrounding forests, and older homes in established small communities. Limited comparable sales throughout the county make an on-site professional valuation especially important.",
      },
    ]}
    localExpertiseHeading="Skamania County's Real Estate Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "The Columbia River Gorge drives Skamania County's real estate market. Properties with river views, Columbia River access, or proximity to the Gorge's outdoor recreation (windsurfing, hiking, climbing, and skiing at nearby Mount Hood) attract buyers from Portland, Vancouver, and the broader Pacific Northwest. This buyer pool is specific and motivated, but it is smaller than suburban markets, so estate properties need accurate pricing and patient marketing.",
      "Stevenson's small downtown and the surrounding communities are the county's residential core, with practical housing stock and limited market activity compared to larger Washington counties. Estate properties here need an honest condition assessment and a price based on the local buyer pool, not on Gorge-lifestyle premiums that may not apply to the specific property. Rural and recreational properties throughout the county need a rural valuation that accounts for land, access, and the Gorge's land use framework.",
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Skamania County, including:`}
    closingCtaBody={[
      "If you are managing an inherited home in Stevenson, a riverfront cabin near Carson, or rural acreage in the Columbia River Gorge, find out early what the Scenic Area rules allow on that parcel, because they affect both the price and who will buy it.",
      `${FEATURED_BROKER.Role} takes those rules and the county's limited comparable sales into account when pricing a Skamania County estate property.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Skamania County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Skamania County Superior Court in Stevenson). ${FEATURED_BROKER.Role} uses that waiting period to conduct the valuation walk-through, secure the property, coordinate cleanout vendors, and prepare the marketing file, so the property can be listed promptly once Letters arrive.`,
      },
      {
        question: "How is a Columbia River view or riverfront property valued in a Skamania County estate?",
        answer: `River views and Columbia River access carry real premiums in Skamania County, but those premiums vary significantly with the quality of the view, the type of access, bank height, and proximity to communities and amenities. Automated estimates are especially unreliable for these properties. ${FEATURED_BROKER.Role}'s certified appraisal background supports the on-site, property-specific evaluation that Gorge waterfront and view properties need.`,
      },
      {
        question: "Can a Skamania County estate sale be managed for families in Portland or Seattle?",
        answer: `Yes. This is a common situation in Skamania County, where many property owners have family based in the Portland metro area, Vancouver, or the Seattle region. ${FEATURED_BROKER.Role} handles property assessment, vendor coordination, preparation, showings, and closing locally, with regular updates so families don't need to make repeated trips to the Gorge.`,
      },
      {
        question: "What should I know about land use restrictions when selling estate property in Skamania County?",
        answer: `The Columbia River Gorge National Scenic Area designation affects a significant portion of Skamania County, creating land use restrictions that buyers need to understand and that affect how properties can be developed or modified. ${FEATURED_BROKER.Role}'s familiarity with Gorge-area real estate helps executors and families communicate these considerations clearly to prospective buyers and price properties appropriately given the regulatory context.`,
      },
    ]}
  />
);

export default SkamaniaCounty;
