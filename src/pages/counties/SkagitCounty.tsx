import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const SkagitCounty = () => (
  <CountyPageTemplate
    countyName="Skagit County"
    countyPath="/skagit-county"
    countySlug="skagit-county"
    seoTitle="Skagit County Probate & Estate Real Estate | Real Property Planning"
    seoDescription="Probate, inherited property, and senior transitions across Skagit County — Mount Vernon, Burlington, Anacortes, La Conner, and more."
    heroH1="Probate & Estate Real Estate in Skagit County, WA"
    heroSubheading="Experienced guidance for executors, families, and attorneys selling property throughout Skagit County, including waterfront, agricultural, and rural properties."
    cities={[
      "Mount Vernon", "Burlington", "Anacortes", "Sedro-Woolley",
      "La Conner", "Concrete", "Bow-Edison",
    ]}
    localInsight={`Skagit County mixes property types more than most of the Puget Sound region. Working farmland borders waterfront communities, and a property in Anacortes has entirely different value drivers than acreage near Burlington or a historic home in La Conner. Pricing estate and inherited property here takes more than comparable sales: it takes an understanding of agricultural zoning, rural acreage valuation, water access premiums, and the buyer pool each property type attracts. ${FEATURED_BROKER.Role} serves families, executors, trustees, and attorneys throughout Skagit County as both a licensed real estate broker and a Washington State Certified Residential Appraiser. For families in the greater Puget Sound area managing Skagit County estate property, ${FEATURED_BROKER.role} provides full local coordination so the process can be managed without constant trips north.`}
    aeoQuestion="How do you price a property with agricultural zoning in the Skagit Valley?"
    aeoAnswer={`Agricultural zoning brings in valuation factors that a standard residential comparable analysis doesn't capture: soil classification, water rights, farm income potential, conservation easements, and the difference between active farmland and rural residential land that happens to be zoned agricultural. ${FEATURED_BROKER.Role}'s certified appraisal background means these factors are evaluated methodically rather than estimated. For estate properties with agricultural zoning, getting the valuation right from the start matters. Priced too high, the property sits; priced without accounting for the agricultural premium, the heirs leave money on the table. ${FEATURED_BROKER.pronoun.Possessive} analysis accounts for both the residential and agricultural sides of Skagit Valley property to arrive at a defensible, accurate market value.`}
    aeoSupportFaqs={[
      {
        question: "What makes selling a waterfront home in Anacortes different from other Skagit County sales?",
        answer: `Anacortes waterfront is its own market, driven by Puget Sound access, boating, proximity to the San Juan Islands, and a buyer pool that extends well beyond Skagit County to Seattle, the Eastside, and out of state. Premiums for true waterfront, water view, and marina-adjacent properties in Anacortes can be significant, but they vary considerably with the specific location, type of water access, and property condition. ${FEATURED_BROKER.Role}'s condition-adjusted, location-specific analysis reflects these premiums in the estate sale strategy rather than applying a blanket waterfront markup that may not match the property's actual market position.`,
      },
      {
        question: "My family inherited a property with acreage near Burlington — how do we decide whether to subdivide or sell as-is?",
        answer: `The answer depends on the current zoning, the feasibility and cost of subdivision, the timeline the estate can support, and what the market will pay in each scenario. Subdivision can add value, but it also adds time, cost, permitting complexity, and fiduciary risk if it extends the estate administration. ${FEATURED_BROKER.Role} helps families compare what the property is worth as-is with what a subdivision would likely yield net of costs and time, so the decision rests on actual numbers rather than assumptions.`,
      },
      {
        question: "Can a Skagit County estate sale be coordinated if the family lives in Seattle?",
        answer: `Yes. This is a common situation for ${FEATURED_BROKER.role} in Skagit County: many families managing Skagit estate property live in Seattle, the Eastside, or out of state. ${FEATURED_BROKER.pronoun.Subject} coordinates the full process locally (property assessment, cleanout coordination, vendor management, listing, and sale) with regular written and photo updates, so the family stays informed without driving north for every step. Digital document signing means most of the process can be completed remotely.`,
      },
      {
        question: "What should I know about selling an inherited home in a small Skagit community like La Conner or Edison?",
        answer: `Small-community sales call for a different approach than suburban or urban estate sales. In La Conner and Edison, the buyer pool is smaller and more specific: buyers drawn to these communities are typically choosing the community first and the property second. Presentation therefore matters a great deal. Homes that fit the community, are priced for their actual condition, and are marketed to the right buyers tend to sell well. Overpriced or poorly presented homes can sit for long periods because few buyers will pay a premium. ${FEATURED_BROKER.Role}'s analysis of small Skagit community properties is calibrated to actual buyer demand in those locations rather than to broader county averages that don't reflect these markets.`,
      },
    ]}
    localExpertiseHeading="What Makes Skagit County Estate Properties Different"
    localExpertiseBody={[
      "Skagit County property doesn't fit neatly into the residential analysis that works well in King or Snohomish County. The county includes farmland, acreage, and rural residential properties with agricultural zoning, and valuing them means accounting for soil quality, water rights, easements, and land use, which residential comparable analysis alone cannot capture accurately.",
      "Waterfront and island-adjacent communities like Anacortes carry premiums driven by boating access, San Juan Islands proximity, and a buyer pool that comes from well beyond the immediate area. Pricing these properties accurately requires understanding both the local market and the broader buyer geography.",
      "Small historic communities like La Conner, Edison, Bow, and Concrete each have their own community character and buyer pool. Estate properties in these communities need to be positioned for the buyers who seek out that character, not priced against suburban comparable sales that don't apply.",
      `Some Skagit County estate properties don't fit cleanly into residential or agricultural categories: rural homes on large lots, properties with outbuildings, or parcels that could have multiple uses. These require the kind of flexible, methodology-based analysis that ${FEATURED_BROKER.role}'s appraisal training provides.`,
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Skagit County, including:`}
    closingCtaBody={[
      `For a straightforward inherited home in Mount Vernon or a complex agricultural property near Burlington, a short conversation with ${FEATURED_BROKER.name} can clarify your options and a realistic next step.`,
      `${FEATURED_BROKER.Role} serves Skagit County families and executors directly and can point those who need help beyond real estate brokerage and appraisal to independent professionals throughout the county and region.`,
    ]}
    countySpecificFaqs={[
      {
        question: "How do you price a property with agricultural zoning in the Skagit Valley?",
        answer: `Agricultural zoning brings in valuation factors that a standard residential comparable analysis doesn't capture: soil classification, water rights, farm income potential, conservation easements, and the difference between active farmland and rural residential land that happens to be zoned agricultural. ${FEATURED_BROKER.Role}'s certified appraisal background means these factors are evaluated methodically rather than estimated. For estate properties with agricultural zoning, getting the valuation right from the start matters. Priced too high, the property sits; priced without accounting for the agricultural premium, the heirs leave money on the table. ${FEATURED_BROKER.pronoun.Possessive} analysis accounts for both the residential and agricultural sides of Skagit Valley property to arrive at a defensible, accurate market value.`,
      },
      {
        question: "What makes selling a waterfront home in Anacortes different from other Skagit County sales?",
        answer: `Anacortes waterfront is its own market, driven by Puget Sound access, boating, proximity to the San Juan Islands, and a buyer pool that extends well beyond Skagit County to Seattle, the Eastside, and out of state. Premiums for true waterfront, water view, and marina-adjacent properties in Anacortes can be significant, but they vary considerably with the specific location, type of water access, and property condition. ${FEATURED_BROKER.Role}'s condition-adjusted, location-specific analysis reflects these premiums in the estate sale strategy rather than applying a blanket waterfront markup that may not match the property's actual market position.`,
      },
      {
        question: "My family inherited a property with acreage near Burlington — how do we decide whether to subdivide or sell as-is?",
        answer: `The answer depends on the current zoning, the feasibility and cost of subdivision, the timeline the estate can support, and what the market will pay in each scenario. Subdivision can add value, but it also adds time, cost, permitting complexity, and fiduciary risk if it extends the estate administration. ${FEATURED_BROKER.Role} helps families compare what the property is worth as-is with what a subdivision would likely yield net of costs and time, so the decision rests on actual numbers rather than assumptions.`,
      },
      {
        question: "Can a Skagit County estate sale be coordinated if the family lives in Seattle?",
        answer: `Yes. This is a common situation for ${FEATURED_BROKER.role} in Skagit County: many families managing Skagit estate property live in Seattle, the Eastside, or out of state. ${FEATURED_BROKER.pronoun.Subject} coordinates the full process locally (property assessment, cleanout coordination, vendor management, listing, and sale) with regular written and photo updates, so the family stays informed without driving north for every step. Digital document signing means most of the process can be completed remotely.`,
      },
      {
        question: "What should I know about selling an inherited home in a small Skagit community like La Conner or Edison?",
        answer: `Small-community sales call for a different approach than suburban or urban estate sales. In La Conner and Edison, the buyer pool is smaller and more specific: buyers drawn to these communities are typically choosing the community first and the property second. Presentation therefore matters a great deal. Homes that fit the community, are priced for their actual condition, and are marketed to the right buyers tend to sell well. Overpriced or poorly presented homes can sit for long periods because few buyers will pay a premium. ${FEATURED_BROKER.Role}'s analysis of small Skagit community properties is calibrated to actual buyer demand in those locations rather than to broader county averages that don't reflect these markets.`,
      },
    ]}
  />
);

export default SkagitCounty;
