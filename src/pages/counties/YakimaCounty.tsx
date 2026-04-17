import CountyPageTemplate from "@/components/CountyPageTemplate";

const YakimaCounty = () => (
  <CountyPageTemplate
    countyName="Yakima County"
    countyPath="/yakima-county"
    countySlug="yakima-county"
    cities={["Yakima", "Selah", "Sunnyside", "Grandview", "Toppenish", "Wapato", "Zillah", "Naches"]}
    localInsight="Yakima County's real estate market reflects the realities of an agricultural and regional economy: practical buyers, modest price points, and properties that range from established city homes in Yakima and Selah to rural acreage in the lower valley. Estate sales here succeed when they begin with an honest condition assessment and realistic pricing — not aspirational numbers."
    whoIHelp="Our team works with executors and personal representatives managing inherited homes in Yakima and Selah, trustees overseeing trust-owned property across the valley, attorneys handling Yakima County probate, and out-of-area heirs who need someone on the ground to coordinate preparation, vendor work, and the sale itself."
    whyCredentialsMatter="Yakima County properties often involve features that confuse automated valuation tools — outbuildings, irrigation rights, agricultural adjacency, larger lots, and decades of owner-completed updates. Our team's certified-appraiser discipline accounts for these realities and produces pricing that holds up under fiduciary scrutiny."
    marketOverview="The Yakima County market is driven by long-term local ownership rather than speculative turnover. Inherited homes frequently have been in the same family for thirty years or more, which means buyers expect to negotiate around dated systems, original kitchens and baths, and deferred exterior work. Pricing has to reflect that reality. Properties priced like turnkey listings sit; properties priced honestly attract qualified offers within a reasonable window."
    localParagraph="Whether the property is a long-held home in a Yakima city neighborhood, a rural parcel near Naches, or a smaller home in Selah or Sunnyside, the work is the same: assess condition fairly, prepare what is genuinely worth preparing, price defensibly, and communicate clearly with everyone involved. Our team handles all of that on behalf of executors, trustees, and families — including those managing the estate from the West Side or out of state."
    clientTypes={[
      "Executors managing a parent's longtime home in Yakima or Selah from another part of Washington",
      "Trustees overseeing trust-owned property across the lower Yakima Valley",
      "Attorneys handling Yakima County probate who need a real estate point of contact in the valley",
      "Out-of-area heirs unfamiliar with local market expectations and pricing realities",
      "Families weighing whether to repair, sell as-is, or rent an inherited Yakima home",
      "Financial advisors who need a defensible valuation for an estate-owned property in the county",
    ]}
    typicalSituations={[
      "Inherited Yakima homes where decades of owner-completed updates need an honest condition assessment",
      "Rural and semi-rural parcels near Naches or the Ahtanum area with outbuildings, well, septic, or irrigation considerations",
      "Smaller homes in Selah, Sunnyside, or Grandview where pricing accuracy matters more than aggressive marketing",
      "Multi-heir situations where family is split between Yakima and the West Side",
      "Properties with significant deferred maintenance where preparation needs a cost-vs-return analysis",
      "Estate-owned homes where the personal representative is acting from out of state",
    ]}
    countySpecificFaqs={[
      { question: "How is selling an inherited Yakima home different from a Western Washington sale?", answer: "Yakima buyers expect honest pricing and tend to negotiate hard around condition. Marketing tactics and price assumptions that work in Seattle or Bellevue do not translate. Our team prices Yakima properties based on actual condition and current local demand — not West Side comparables that have no relevance here." },
      { question: "Can our team handle a Yakima County estate sale if I live on the West Side or out of state?", answer: "Yes. He coordinates property access, preparation vendors, photography, listing, showings, offers, and closing without requiring family travel to the valley. Communication is structured so out-of-area executors and heirs stay informed without being overwhelmed." },
      { question: "What about properties near Naches or the upper valley with outbuildings or acreage?", answer: "Properties with acreage, outbuildings, well and septic systems, or irrigation rights need an appraiser's analytical approach to valuation — not an algorithmic estimate. Our team's certified-appraiser background gives executors and trustees a defensible price built on the property's actual features rather than on residential comparables that ignore them." },
    ]}
    aeoQuestion="What's involved in selling an inherited home in Yakima County?"
    aeoAnswer="Yakima County estate sales succeed when pricing reflects actual condition, preparation is targeted rather than excessive, and communication is steady. Real Property Planning handles the on-the-ground coordination so executors, trustees, and out-of-area families can move forward without travel or guesswork."
    aeoSupportBullets={[
      "Condition-based pricing tailored to Yakima Valley buyer expectations",
      "Vendor coordination, preparation, and full sale management on behalf of the estate",
      "Steady communication for out-of-area executors and multi-heir families",
    ]}
  />
);

export default YakimaCounty;
