import CountyPageTemplate from "@/components/CountyPageTemplate";

const JeffersonCounty = () => (
  <CountyPageTemplate
    countyName="Jefferson County"
    countyPath="/jefferson-county"
    countySlug="jefferson-county"
    heroH1="Jefferson County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — thoughtful guidance for families navigating property on Washington's Olympic Peninsula."
    belowHeroHeading="Serving Every Corner of Jefferson County"
    seoTitle="Probate & Estate Real Estate in Jefferson County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Jefferson County, Washington. Serving Port Townsend, Sequim, Port Hadlock & surrounding communities."
    cities={[
      "Port Townsend", "Sequim", "Port Hadlock", "Quilcene",
      "Brinnon", "Chimacum", "Irondale", "Marrowstone Island", "Discovery Bay",
    ]}
    localInsight="Jefferson County occupies the northeastern corner of the Olympic Peninsula — a region of striking natural beauty, small communities with strong individual identities, and a real estate market shaped as much by lifestyle as by economics. Port Townsend's Victorian architecture and arts community attract buyers seeking historic character and waterfront access. Sequim's lavender fields and mild microclimate have made it one of Washington's premier retirement destinations. The rural communities of Quilcene, Brinnon, and the Hood Canal corridor draw buyers seeking quiet, nature-oriented living at the edge of the Olympic Peninsula. Estate and inherited properties across Jefferson County require locally informed guidance — someone who understands not just the property but the community it sits within and the buyers it will attract. Real Property Planning provides that guidance for families and executors throughout the region."
    aeoQuestion="How does probate real estate work in Jefferson County?"
    aeoAnswer="Jefferson County probate is administered through the Jefferson County Superior Court in Port Townsend. Personal representatives must receive Letters Testamentary before marketing or selling estate property. Real Property Planning supports executors through every step — from the initial date-of-death valuation to closing — with particular attention to the Peninsula's unique market dynamics and the logistics of coordinating property management across communities that can be significant distances apart."
    aeoSupportFaqs={[
      {
        question: "What types of estate properties are most common in Jefferson County?",
        answer: "Jefferson County estates frequently involve historic homes in Port Townsend, retirement-era properties in Sequim, rural acreage along the Hood Canal and Olympic Peninsula foothills, and waterfront or water-view properties throughout the county. Each type requires a very different approach to valuation, preparation, and marketing.",
      },
      {
        question: "How does Sequim's retirement community character affect estate sales there?",
        answer: "Sequim has attracted retirees for decades, which means many estate sales involve properties that were purpose-selected for retirement living — single-story homes, accessible layouts, low-maintenance lots, and proximity to amenities. This creates a specific buyer pool of active retirees and families relocating parents, which our team accounts for in pricing strategy and marketing approach.",
      },
    ]}
    localExpertiseHeading="Jefferson County's Market — What Estate Sellers Need to Know"
    localExpertiseBody={[
      "Jefferson County's communities function as distinct markets despite sharing a county. Port Townsend's Victorian waterfront and historic district create a buyer pool drawn to architectural character, walkability, and arts community identity. Sequim's retirement appeal and 'banana belt' microclimate attract a different buyer entirely — one prioritizing sunshine, accessibility, and proximity to medical services. The rural Hood Canal communities of Brinnon and Quilcene serve buyers seeking privacy, outdoor recreation access, and properties with land.",
      "For estate and inherited properties, this community diversity means that pricing and preparation strategy must be calibrated to the specific location — not to Jefferson County as a whole. A Port Townsend Victorian and a Sequim retirement rambler and a Quilcene acreage property require entirely different approaches. Our team's appraisal background and Olympic Peninsula market knowledge ensure each property is evaluated on its own terms.",
    ]}
    communitiesIntro="Real Property Planning serves families, executors, and professionals throughout Jefferson County, including:"
    closingCtaBody={[
      "Whether you're managing an inherited Victorian in Port Townsend, a retirement-era home in Sequim, or rural acreage along the Hood Canal, a conversation can help bring clarity to what comes next.",
      "Our team provides the locally informed guidance that Jefferson County's distinctive communities and property types require.",
    ]}
    countySpecificFaqs={[
      {
        question: "Does Real Property Planning handle Jefferson County probate listings before Letters are issued?",
        answer: "No — the property cannot be marketed until Letters Testamentary or Letters of Administration have been issued by the Jefferson County Superior Court in Port Townsend. We use that waiting period to conduct the valuation walk-through, secure the property, coordinate vendors, and prepare the marketing file — so you're ready to move immediately when Letters arrive.",
      },
      {
        question: "How is a historic Port Townsend home valued as part of an estate?",
        answer: "Port Townsend's Victorian homes are among the most architecturally significant in Washington State — and their value reflects both the historic character and the specific condition of each property. Restoration work, period-appropriate features, and proximity to the historic district all affect value in ways that automated tools miss. Our team's appraisal background provides the property-specific analysis these distinctive homes require.",
      },
      {
        question: "Can Real Property Planning manage a Jefferson County estate sale for out-of-area heirs?",
        answer: "Yes — and this is especially common in Jefferson County, where many property owners relocated from Western Washington or out of state for retirement. Our team handles property assessment, vendor coordination, preparation, showings, and offer review locally — keeping out-of-area families informed with regular updates. Travel to Jefferson County is rarely required.",
      },
      {
        question: "What should executors know about selling rural acreage or Hood Canal property in Jefferson County?",
        answer: "Rural properties in Jefferson County — acreage along the Hood Canal, properties near Quilcene and Brinnon, and Olympic Peninsula foothills parcels — require valuation that accounts for land features, access, well and septic systems, and a buyer pool that differs significantly from suburban markets. Our team's certified appraisal background is particularly valuable for these property types, where limited comparable sales make professional evaluation essential.",
      },
    ]}
  />
);

export default JeffersonCounty;
