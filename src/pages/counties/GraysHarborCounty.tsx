import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const GraysHarborCounty = () => (
  <CountyPageTemplate
    countyName="Grays Harbor County"
    countyPath="/grays-harbor-county"
    countySlug="grays-harbor-county"
    heroH1="Grays Harbor County, WA"
    heroSubheading="Probate, estate, and senior transition real estate for families handling inherited property on Washington's coast."
    belowHeroHeading="Serving Every Corner of Grays Harbor County"
    seoTitle="Probate & Estate Real Estate in Grays Harbor County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Grays Harbor County, Washington. Serving Aberdeen, Hoquiam, Ocean Shores & surrounding communities."
    cities={[
      "Aberdeen", "Hoquiam", "Ocean Shores", "Westport", "Montesano",
      "Elma", "McCleary", "Cosmopolis", "Oakville",
    ]}
    localInsight={`Grays Harbor County stretches from the timber-rich interior to the Pacific coastline. Its communities include the urban twin cities of Aberdeen and Hoquiam, the coastal resort community of Ocean Shores, and the county seat, Montesano. Estate and probate properties here range from historic downtown homes to coastal cottages to rural timber parcels, and each needs a different approach to valuation, preparation, and marketing. ${FEATURED_BROKER.Role} applies certified appraisal methodology and broker experience to each property and gives families and executors a plain assessment of what it is worth and what it needs.`}
    aeoQuestion="How does probate real estate work in Grays Harbor County?"
    aeoAnswer="Grays Harbor County probates are usually filed in the Grays Harbor County Superior Court in Montesano, though Washington allows filing in any county. Personal representatives must obtain Letters Testamentary (or, without a will, Letters of Administration) before listing or selling estate property. The featured Washington licensed broker, who is also a certified residential appraiser, can support executors and families from the initial date-of-death valuation to closing, with local coordination that keeps the sale moving when heirs live far away."
    aeoSupportFaqs={[
      {
        question: "What kinds of estate properties are most common in Grays Harbor County?",
        answer: "Grays Harbor estates frequently include older single-family homes in Aberdeen and Hoquiam, coastal cottages and vacation properties near Ocean Shores and Westport, rural acreage and timber parcels in the county interior, and occasionally historic properties with unusual valuation considerations. Each property type needs its own approach to pricing and preparation.",
      },
      {
        question: "Are coastal properties in Grays Harbor County harder to sell as estate properties?",
        answer: `Coastal properties like those in Ocean Shores and Westport have their own buyer pool (often second-home buyers or retirees) and their own considerations: flood zones, HOA rules, seasonal demand, and condition. ${FEATURED_BROKER.Role}'s appraisal background helps price these properties for their specific location and condition, not on inland comparables.`,
      },
    ]}
    localExpertiseHeading="Grays Harbor County's Market: What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Geography shapes Grays Harbor County's real estate market. Aberdeen and Hoquiam are the county's urban core, with a practical, value-oriented buyer pool and older homes that often carry significant deferred maintenance. Ocean Shores and Westport attract a different buyer, one looking for coastal living, recreation, and a seasonal retreat.",
      `For estate properties, one approach does not fit the whole county. A Hoquiam craftsman bungalow and an Ocean Shores beach cottage need different marketing, pricing methods, and preparation plans. ${FEATURED_BROKER.Role} uses local knowledge and valuation experience to price and present each property for its own market from the start.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Grays Harbor County, including:`}
    closingCtaBody={[
      "If you are managing an inherited home in Aberdeen or a coastal property in Ocean Shores, start with a condition-based price: what the property is worth as it stands and which repairs, if any, are worth making before a sale.",
      `${FEATURED_BROKER.Role} handles Grays Harbor County estate sales from the first walk-through to closing, including for heirs who live out of state.`,
    ]}
    countySpecificFaqs={[
      {
        question: "Can a Grays Harbor County probate property be listed before Letters are issued?",
        answer: `No. The property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the superior court handling the estate (usually the Grays Harbor County Superior Court in Montesano). ${FEATURED_BROKER.Role} uses that waiting period to conduct the valuation walk-through, secure the property, line up cleanout vendors, and prepare the marketing file, so the listing can begin as soon as Letters arrive.`,
      },
      {
        question: "How are timber or rural parcels valued in a Grays Harbor County estate?",
        answer: `Rural and timber parcels in Grays Harbor County need a specialized valuation that accounts for timber value, land use designations, access, and regional market conditions for rural property. ${FEATURED_BROKER.Role}'s certified appraisal background is useful for these property types, where automated estimates are often inaccurate and comparable sales need careful analysis.`,
      },
      {
        question: "Can you handle a Grays Harbor County estate sale if all heirs live outside Washington?",
        answer: `Yes. Out-of-state heirs are a common situation for ${FEATURED_BROKER.role}. ${FEATURED_BROKER.pronoun.Subject} handles the local work: the property walk-through, vendor coordination, cleanout, photography, showings, and offer review. ${FEATURED_BROKER.pronoun.Subject} keeps heirs informed with regular updates and makes digital document signing available, so travel to Grays Harbor County is rarely required.`,
      },
      {
        question: "What should I know about selling an Ocean Shores or Westport property as part of an estate?",
        answer: `Coastal properties in Ocean Shores and Westport have their own considerations: HOA rules and fees, flood zone designations, seasonal buyer demand, and a market that can move differently from inland communities. These properties should be priced from the coastal market, not from inland comparables. ${FEATURED_BROKER.Role}'s valuation background supports that analysis.`,
      },
    ]}
  />
);

export default GraysHarborCounty;
