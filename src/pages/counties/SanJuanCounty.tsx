import CountyPageTemplate from "@/components/CountyPageTemplate";

const SanJuanCounty = () => (
  <CountyPageTemplate
    countyName="San Juan County"
    countyPath="/san-juan-county"
    countySlug="san-juan-county"
    heroH1="San Juan County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — specialized guidance for families navigating inherited property in one of Washington's most distinctive and sought-after island communities."
    belowHeroHeading="Serving Every Corner of San Juan County"
    seoTitle="Probate & Estate Real Estate in San Juan County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout San Juan County, Washington. Serving San Juan Island, Orcas Island, Lopez Island & surrounding communities."
    cities={[
      "Friday Harbor", "Eastsound", "Lopez Island", "Deer Harbor",
      "Roche Harbor", "Olga", "Shaw Island", "Stuart Island",
    ]}
    localInsight="San Juan County is Washington's only island county — an archipelago of 172 named islands accessible only by Washington State Ferry, private boat, or small aircraft. The county's four main islands — San Juan, Orcas, Lopez, and Shaw — each have distinct characters, communities, and real estate markets. San Juan Island's Friday Harbor serves as the county seat and primary commercial center. Orcas Island's Eastsound is the largest community in the archipelago, known for its arts community and Moran State Park. Lopez Island attracts those seeking quiet, agricultural character and cycling culture. Estate and inherited properties throughout San Juan County require specialized knowledge — island logistics, ferry-dependent access, limited comparable sales, and a buyer pool drawn from across the Pacific Northwest and beyond. Real Property Planning provides the experienced, locally coordinated guidance that island estate situations uniquely demand."
    aeoQuestion="How does probate real estate work in San Juan County?"
    aeoAnswer="San Juan County probate is administered through the San Juan County Superior Court in Friday Harbor on San Juan Island. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors and families through the full process — with particular attention to the ferry logistics, island-specific property characteristics, and the mainland coordination that out-of-area families almost always need."
    aeoSupportFaqs={[
      {
        question: "What makes selling estate property in the San Juan Islands different from mainland sales?",
        answer: "Everything about island estate sales is distinct — ferry schedules affect vendor access and showing logistics, comparable sales are limited by the small island market, waterfront premiums vary dramatically by specific location, and the buyer pool is drawn from across the region and beyond. Managing all of this requires someone with island-specific experience and local coordination capacity. Real Property Planning handles the full process so mainland families don't have to figure out island logistics on their own.",
      },
      {
        question: "How are San Juan Islands properties valued for estate purposes?",
        answer: "San Juan Islands properties are among the most difficult in Washington State to value with automated tools. Waterfront access, ferry proximity, view quality, island character, and the limited number of comparable sales all affect value in ways that require hands-on, island-specific evaluation. Our team's certified appraisal background provides the property-specific analysis these distinctive properties require.",
      },
    ]}
    localExpertiseHeading="San Juan County's Real Estate Market — What Estate Sellers Need to Know"
    localExpertiseBody={[
      "San Juan County's real estate market operates by its own rules. Inventory is perpetually limited — the islands have finite land, and developable waterfront is especially scarce. This creates a market where well-positioned properties attract buyers from across the Pacific Northwest and from out of state, but where condition, preparation, and pricing accuracy still matter enormously. An estate property that is overpriced or poorly presented will sit even in a supply-constrained market, because the motivated buyer pool for any specific island property is smaller than it appears.",
      "Each island functions as its own submarket. San Juan Island's Friday Harbor area has the broadest buyer appeal and the most active market. Orcas Island commands the county's highest prices, particularly for waterfront and view properties with access to Moran State Park and Eastsound's amenities. Lopez Island's quieter, agricultural character attracts a specific buyer — one seeking simplicity, community, and the island's unique cycling and farming culture. Estate properties on each island need to be priced and presented with the specific buyer in mind, not with a generic island-property approach.",
    ]}
    communitiesIntro="Real Property Planning serves families, executors, and professionals throughout San Juan County, including:"
    closingCtaBody={[
      "Whether you're managing an inherited property on San Juan Island, Orcas Island, Lopez Island, or one of the smaller islands in the archipelago, a conversation can help bring clarity to what comes next.",
      "Our team coordinates the full process — including the island logistics that make San Juan County estate sales uniquely complex — so families managing from the mainland don't have to figure it out alone.",
    ]}
    countySpecificFaqs={[
      {
        question: "Does Real Property Planning handle San Juan County probate listings before Letters are issued?",
        answer: "No — the property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the San Juan County Superior Court in Friday Harbor. We use that waiting period to conduct the date-of-death valuation walk-through, secure the property, coordinate cleanout vendors, and prepare the marketing file — accounting for ferry schedules and island logistics throughout.",
      },
      {
        question: "How does ferry access affect estate property sales in the San Juan Islands?",
        answer: "Ferry schedules affect almost every aspect of an island estate sale — vendor access for cleanout and repairs, showing logistics for buyers traveling from the mainland, and the timeline for inspections and appraisals. Real Property Planning coordinates all of this locally, building ferry schedules into the preparation and marketing plan from the start rather than treating them as an afterthought.",
      },
      {
        question: "Can Real Property Planning manage a San Juan County estate sale for mainland families?",
        answer: "Yes — and mainland coordination is the norm for San Juan County estate sales, not the exception. Most island property owners have family based in King, Snohomish, or Pierce County, or out of state. Our team handles everything on the island — property assessment, vendor coordination, preparation, showings, and closing — with regular updates so families rarely need to take the ferry for any step of the process.",
      },
      {
        question: "Are there different considerations for estate properties on Orcas Island versus San Juan Island?",
        answer: "Yes — each island has its own market character, buyer pool, and pricing dynamics. Orcas Island commands the county's highest prices and attracts buyers seeking premium waterfront and view properties with access to Moran State Park and Eastsound's amenities. San Juan Island's Friday Harbor has the broadest market activity and the most accessible comparable sales. Lopez Island attracts a quieter, more specific buyer. Estate properties on each island need to be evaluated and positioned with that specific island's market in mind.",
      },
    ]}
  />
);

export default SanJuanCounty;
