import CountyPageTemplate from "@/components/CountyPageTemplate";

const LewisCounty = () => (
  <CountyPageTemplate
    countyName="Lewis County"
    countyPath="/lewis-county"
    countySlug="lewis-county"
    heroH1="Lewis County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — practical guidance for families navigating inherited property along the I-5 corridor and into the Cascade foothills."
    belowHeroHeading="Serving Every Corner of Lewis County"
    seoTitle="Probate & Estate Real Estate in Lewis County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Lewis County, Washington. Serving Chehalis, Centralia, Morton & surrounding communities."
    cities={[
      "Chehalis", "Centralia", "Morton", "Winlock", "Napavine",
      "Toledo", "Vader", "Pe Ell", "Randle", "Packwood",
    ]}
    localInsight="Lewis County stretches from the twin cities of Chehalis and Centralia along the I-5 corridor to the rural communities of the Cascade foothills and the Cowlitz River valley. It is a county of genuine contrasts — the commercial activity of Centralia and Chehalis, the quiet agricultural communities of Toledo and Winlock, and the mountain-gateway towns of Morton, Randle, and Packwood near Mount Rainier. Estate and inherited properties here span a wide range: older homes in established neighborhoods, rural acreage with outbuildings, agricultural parcels, and properties in communities where comparable sales are limited and local knowledge is essential. Real Property Planning provides the condition-based pricing and practical coordination that Lewis County estate situations require."
    aeoQuestion="How does probate real estate work in Lewis County?"
    aeoAnswer="Lewis County probate is administered through the Lewis County Superior Court in Chehalis. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors through every step — from the initial date-of-death valuation through closing — with particular attention to the rural property characteristics and community-specific market dynamics that are common throughout Lewis County."
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Lewis County?",
        answer: "Lewis County estates frequently involve older single-family homes in Centralia and Chehalis, rural acreage and agricultural parcels throughout the county, properties in small communities with limited comparable sales, and mountain-area homes near Morton, Randle, and Packwood. Each type requires a different valuation and preparation approach.",
      },
      {
        question: "How does Real Property Planning handle rural Lewis County properties with acreage or outbuildings?",
        answer: "Rural properties with acreage, barns, shops, or agricultural features require hands-on evaluation that automated tools cannot provide. Our team's certified appraisal background is particularly valuable for these property types, where land characteristics, outbuilding condition, and access all affect value in ways that standard residential comparisons miss.",
      },
    ]}
    localExpertiseHeading="Lewis County's Real Estate Market — What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Lewis County's real estate market reflects its geography. Centralia and Chehalis serve as the county's commercial and residential hub, with a practical, value-oriented buyer pool and housing stock that ranges from older established homes to newer construction on the cities' edges. These communities have steady local demand and some spillover from buyers priced out of Pierce and Thurston County markets to the north.",
      "The rural communities — Toledo, Winlock, Vader, Pe Ell, and the foothills towns — operate in a different market entirely. Limited comparable sales, rural property characteristics, and a smaller buyer pool mean that pricing accuracy is especially important and automated estimates are especially unreliable. Estate and inherited properties in these communities benefit most from the kind of on-the-ground, condition-based evaluation that Real Property Planning provides.",
    ]}
    communitiesIntro="Real Property Planning serves families, executors, and professionals throughout Lewis County, including:"
    closingCtaBody={[
      "Whether you're managing an inherited home in Centralia, rural acreage near Toledo, or a foothills property near Morton, a conversation can help bring clarity to what comes next.",
      "Our team provides the locally informed, condition-based guidance that Lewis County's varied property types require.",
    ]}
    countySpecificFaqs={[
      {
        question: "Does Real Property Planning handle Lewis County probate listings before Letters are issued?",
        answer: "No — the property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the Lewis County Superior Court in Chehalis. We use that waiting period to conduct the valuation walk-through, secure the property, coordinate cleanout vendors, and prepare the marketing file — so you're ready to move the moment Letters arrive.",
      },
      {
        question: "How are agricultural or acreage properties valued in a Lewis County estate?",
        answer: "Agricultural and acreage properties in Lewis County require valuation that accounts for land quality, outbuildings, irrigation or water rights, access, and the specific buyer pool for that type of property in that area. Our team's certified appraisal background provides the property-specific analysis these situations require — not a desktop estimate derived from residential comparables that don't apply.",
      },
      {
        question: "Can Real Property Planning coordinate a Lewis County estate sale for out-of-area heirs?",
        answer: "Yes — and this is especially common in Lewis County, where many property owners have family living in the Seattle metro area or out of state. Our team handles property assessment, vendor coordination, preparation, showings, and offer review locally — with regular updates so families don't need to travel to Lewis County to manage the process.",
      },
      {
        question: "What should executors know about selling property in Lewis County's smaller communities?",
        answer: "In smaller Lewis County communities — Pe Ell, Vader, Randle, Packwood — the buyer pool is limited and comparable sales may be sparse. This makes professional, on-the-ground valuation especially important and makes realistic pricing expectations critical from the start. Our team's experience with rural and small-community markets helps executors understand what their property will realistically attract and at what price.",
      },
    ]}
  />
);

export default LewisCounty;
