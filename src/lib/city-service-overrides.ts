// ═══════════════════════════════════════════════════════════════════════
// CITY-SPECIFIC OVERRIDE LAYER
// Eliminates same-tone duplication by providing unique content for each
// city within the same tone group. Sits ABOVE the tone×service system.
// ═══════════════════════════════════════════════════════════════════════

interface CityServiceOverride {
  intro?: string;
  scenarios?: string[];
  howWeHelp?: string[];
  whyLocal?: string;
}

// Keyed by citySlug → serviceSlug → override content
const cityServiceOverrides: Record<string, Record<string, CityServiceOverride>> = {

  // ═══════════════════════════════════════════════════════════════════
  // PREMIUM TONE GROUP — Bellevue, Mercer Island, Bainbridge Island
  // ═══════════════════════════════════════════════════════════════════

  // ── BELLEVUE ────────────────────────────────────────────────────
  // Identity: Eastside tech hub, rapid development, corporate relocation,
  // wide spectrum from Crossroads ramblers to West Bellevue estates
  bellevue: {
    "probate-estate-sales": {
      intro: "Bellevue's real estate market spans a wide range — from mid-century ramblers in Crossroads and Wilburton to multimillion-dollar estates in West Bellevue and Vuecrest. When a probate or estate sale involves Bellevue property, pricing accuracy matters because the gap between neighborhoods can be dramatic. Real Property Planning provides the Eastside-specific valuation insight that executors, attorneys, and families need to handle estate property in Bellevue's competitive, fast-moving market.",
      scenarios: [
        "A family estate in West Bellevue or Meydenbauer where the home has appreciated significantly but needs updates to meet current buyer expectations",
        "Multiple heirs — some local, some out of state — who need objective valuation of a Bellevue property they remember differently than the market sees it",
        "An estate property in Crossroads or Wilburton where the land value may approach or exceed the structure value due to redevelopment interest",
        "An executor coordinating with a probate attorney on a Bellevue property where tech-industry buyer expectations create unique pricing dynamics",
        "A longtime family home on the Eastside where decades of personal belongings require professional cleanout before the property can be shown",
      ],
      howWeHelp: [
        "Neighborhood-level valuation that distinguishes between Bellevue's dramatically different submarkets — West Bellevue, Crossroads, Somerset, Bridle Trails",
        "Assessment of whether redevelopment interest or lot value affects the estate property's optimal sale strategy",
        "Coordination with the probate attorney on court documentation, timeline management, and sale procedures",
        "Management of high-standard property preparation appropriate for Bellevue's buyer expectations",
        "Clear communication with multiple heirs, attorneys, and financial advisors — especially when parties are dispersed across time zones",
        "Full-service transaction management navigating Bellevue's competitive market pace",
      ],
      whyLocal: "Bellevue's market is shaped by tech-industry demand, rapid development, and a wide spread between neighborhoods. An estate property in Bridle Trails faces entirely different buyer expectations than one in Factoria or Lake Hills. Automated tools frequently miss these neighborhood-level distinctions, especially for properties with deferred maintenance competing against the new construction that dominates parts of the Eastside. David Stein's on-site assessment accounts for how Bellevue's specific submarket dynamics, lot characteristics, and condition factors affect realistic pricing.",
    },
    "senior-transitions": {
      intro: "Many Bellevue seniors have lived in their homes for decades — watching the Eastside transform from a quiet suburb into one of the most competitive real estate markets in the state. When it's time to transition from a longtime Bellevue home to assisted living, independent living, or a smaller residence, the sale involves both significant financial stakes and deeply personal decisions. Real Property Planning helps Bellevue families navigate this process with experienced pricing, practical coordination, and a pace that respects the family's timeline.",
      scenarios: [
        "A senior couple in Somerset or Bridle Trails whose large home has appreciated substantially but needs strategic preparation for today's buyer expectations",
        "An adult child coordinating a parent's move from a Bellevue home to an Eastside assisted living community while managing the property sale remotely",
        "A longtime Bellevue homeowner whose property competes against newer construction and needs honest guidance on which updates matter",
        "A family balancing a parent's care needs with the financial complexity of selling a high-value Eastside property",
        "A senior in a Bellevue neighborhood affected by development pressure, where the home's value may include significant lot premium",
      ],
      howWeHelp: [
        "Condition-based valuation that accounts for how Bellevue's Eastside buyer pool evaluates older homes versus newer construction",
        "Strategic preparation recommendations tailored to Bellevue's specific market — which investments maximize return in this price range",
        "Sale timeline coordination aligned with the move to a senior living community, family home, or smaller Eastside residence",
        "Patient, experienced communication with seniors and adult children who may be managing the process from different cities",
        "Vendor coordination for cleanout, repairs, staging, and high-standard presentation appropriate for Bellevue's market",
        "Full-service management so the family can focus on the transition rather than the transaction logistics",
      ],
      whyLocal: "Bellevue seniors often own homes that have appreciated dramatically — but the home's current condition may not match what today's Eastside buyers expect. The gap between a home's emotional value to the family and its realistic market position requires honest, condition-based analysis. David Stein's appraisal background helps Bellevue families understand exactly where their property stands — which updates matter, which don't, and how to price a well-loved home in a market driven by newer construction and tech-industry buyer expectations.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Bellevue face a market where property values are often significant, buyer expectations are high, and the pace of transactions is fast. Whether the estate property is a mid-century rambler in Lake Hills or a view home in Somerset, executors need locally grounded guidance to price accurately, prepare strategically, and coordinate the sale alongside legal and fiduciary requirements. Real Property Planning provides the Eastside expertise and steady communication that Bellevue executors need.",
      scenarios: [
        "A newly appointed executor managing a high-value Bellevue estate property while living out of state and unfamiliar with Eastside market dynamics",
        "An estate property in a Bellevue neighborhood experiencing redevelopment pressure, where the land value may exceed the structure value",
        "Co-executors who disagree on the property's value and need defensible, appraisal-informed pricing to resolve the discussion",
        "An estate home in Bellevue that has been vacant and needs assessment, cleanout, and preparation before it can compete with updated listings",
        "An executor coordinating with multiple professionals — probate attorney, CPA, financial advisor — on a Bellevue property with significant value at stake",
      ],
      howWeHelp: [
        "Property-specific assessment that accounts for Bellevue's neighborhood-level pricing differences — from Crossroads to West Bellevue to Bridle Trails",
        "Clear guidance on whether the property's highest value is as a residence, a renovation opportunity, or a redevelopment site",
        "Defensible pricing documentation using appraisal-level methodology — suitable for beneficiary review, court records, and attorney files",
        "Coordination of property cleanout, preparation, and staging appropriate for Bellevue's buyer expectations",
        "Regular communication and status updates for executors managing from out of area",
        "End-to-end transaction management from initial property assessment through closing and distribution coordination",
      ],
      whyLocal: "Bellevue executors face a market where mispricing carries significant financial consequences. Overprice and the property sits while the estate accumulates costs; underprice and beneficiaries may question the executor's judgment. David Stein's dual credentials provide the defensible, neighborhood-specific pricing analysis that Bellevue estate situations require — accounting for the Eastside's development dynamics, submarket differences, and the realistic cost of bringing a deferred-maintenance property to competitive condition.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters on the Eastside need a real estate partner who understands Bellevue's competitive market dynamics, the range of property types across the city's neighborhoods, and the documentation standards that legal proceedings require. Real Property Planning works with Bellevue-area legal professionals as a responsive, credentialed resource for estate, trust, probate, divorce, and guardianship property matters.",
      scenarios: [
        "A probate attorney managing a Bellevue estate where the property's value is contested by beneficiaries with different expectations",
        "A trustee overseeing a trust-held property in Bellevue's premium market who needs defensible pricing that meets fiduciary standards",
        "An estate planning attorney advising a Bellevue client on property disposition strategy where development potential complicates the analysis",
        "A family law attorney handling a divorce involving a high-value Bellevue property where both parties need objective pricing",
        "An elder law attorney coordinating a client's property sale alongside a transition to assisted living on the Eastside",
      ],
      howWeHelp: [
        "Defensible property assessments that distinguish between Bellevue's dramatically different submarkets and property types",
        "Responsive communication calibrated to legal timelines and the professional expectations of Eastside attorneys",
        "Pricing documentation grounded in appraisal-level methodology — suitable for court proceedings, beneficiary review, and settlement negotiations",
        "Strategic guidance on property preparation and market positioning appropriate for Bellevue's competitive buyer environment",
        "Coordination across legal, financial, and family stakeholders with clear, professional reporting",
        "A consistent, locally expert point of contact for ongoing property-related referrals on the Eastside",
      ],
      whyLocal: "Bellevue's legal professionals deal with property matters that range from multimillion-dollar estate settlements to trust dispositions in neighborhoods undergoing rapid change. They need a broker who can provide defensible pricing opinions that hold up to scrutiny — not aspirational estimates. David Stein's certified appraisal background produces the property-specific analysis that Eastside attorneys and fiduciaries rely on for court filings, settlement discussions, and fiduciary reporting.",
    },
  },

  // ── MERCER ISLAND ───────────────────────────────────────────────
  // Identity: Exclusive island, limited inventory, Lake Washington,
  // I-90 access, island-specific buyer pool, privacy-oriented
  "mercer-island": {
    "probate-estate-sales": {
      intro: "Mercer Island is one of the most exclusive residential communities in the Pacific Northwest — a small island where limited land, lake access, and privacy create pricing dynamics unlike anywhere else on the Eastside. When a probate or estate sale involves Mercer Island property, the stakes are uniquely high. Real Property Planning provides the island-specific valuation insight and discreet coordination that executors and families need for estate property in this distinctive market.",
      scenarios: [
        "A longtime family estate on Mercer Island where the property includes waterfront access, mature grounds, or architectural significance that standard comparables don't capture",
        "An inherited island property where out-of-state heirs need objective valuation from someone who understands Mercer Island's limited-inventory dynamics",
        "An estate home on the east or west side of the island where view corridors, lake proximity, and lot size create complex pricing considerations",
        "A probate property on Mercer Island where the family needs discretion and professional coordination in a community where privacy matters",
        "An estate where the Mercer Island property is one of several assets, and the executor needs clear, defensible valuation to support equitable distribution",
      ],
      howWeHelp: [
        "Island-specific valuation that accounts for Mercer Island's limited inventory, lakefront premiums, and the unique characteristics that drive value property by property",
        "Discreet coordination appropriate for a private island community where seller circumstances are visible",
        "Assessment of how waterfront access, views, lot topography, and mature landscaping interact in Mercer Island's pricing",
        "Clear documentation suitable for beneficiaries, probate court, and attorneys — with defensible pricing rationale",
        "Management of estate property preparation at the standard Mercer Island buyers expect",
        "Full-service transaction coordination from assessment through closing, minimizing family burden during a difficult time",
      ],
      whyLocal: "Mercer Island's real estate market operates differently from the broader Eastside — limited land area, a distinct buyer pool, and island-specific factors like lake access quality and east-versus-west-side positioning create pricing dynamics that automated tools consistently misjudge. David Stein's on-site evaluation accounts for the characteristics that make each Mercer Island property unique, providing executors and families with the island-specific insight that estate sales here require.",
    },
    "senior-transitions": {
      intro: "Many Mercer Island seniors have spent decades on the island — raising families, building community connections, and watching their properties appreciate in one of the region's most desirable neighborhoods. When it's time to transition to a smaller home, assisted living, or a community closer to family, the sale of a Mercer Island property requires careful positioning in a market where every property has distinctive characteristics. Real Property Planning provides the island-focused guidance these families need.",
      scenarios: [
        "A senior couple leaving a longtime Mercer Island home for a retirement community on the Eastside or closer to adult children out of state",
        "An adult child helping a parent transition from a large island home, coordinating the sale alongside care planning and relocation logistics",
        "A Mercer Island homeowner whose property has unique features — lake views, waterfront access, or architectural distinction — that require nuanced pricing beyond automated estimates",
        "A family managing a parent's transition from the island where the emotional weight of leaving a decades-long home adds sensitivity to the sale process",
        "A senior whose Mercer Island home needs thoughtful preparation to present well in a market where buyers expect premium condition",
      ],
      howWeHelp: [
        "Property-specific valuation accounting for Mercer Island's distinctive market — lake proximity, view quality, lot characteristics, and island-specific buyer expectations",
        "Strategic preparation guidance calibrated to what Mercer Island buyers expect and where preparation investment delivers measurable return",
        "Timeline coordination that aligns the property sale with the family's transition plan, care arrangements, and emotional readiness",
        "Sensitive, patient communication with seniors and adult children navigating a significant life change",
        "Vendor coordination for cleanout, updates, and staging at the standard the island market requires",
        "Full-service management that allows the family to focus on the personal aspects of the transition",
      ],
      whyLocal: "Mercer Island seniors often own homes with characteristics that don't translate neatly into automated valuations — mature landscaping, lake access variations, or mid-century architecture that some buyers prize and others discount. Understanding how these features interact in the island's limited-inventory market requires property-specific assessment, not algorithm output. David Stein helps families see their island home through the market's eyes while respecting the personal significance of the transition.",
    },
    "executor-support": {
      intro: "Serving as executor for a Mercer Island estate property carries unique responsibility — the property is likely high-value, the market operates with limited inventory and particular buyer expectations, and the community's private character adds sensitivity. Real Property Planning provides executors with island-specific valuation expertise, professional coordination, and the discreet handling that Mercer Island estate situations require.",
      scenarios: [
        "An out-of-state executor managing a Mercer Island estate property they haven't visited in years, needing comprehensive local assessment and coordination",
        "A Mercer Island estate where the property includes waterfront features, views, or architectural significance that make standard pricing unreliable",
        "Co-executors who need neutral, defensible valuation of a Mercer Island property to support equitable distribution among beneficiaries",
        "An estate property on the island that has been vacant and needs assessment, security, preparation, and sale coordination",
        "An executor navigating Mercer Island's close-knit community dynamics while managing a visible estate sale with discretion",
      ],
      howWeHelp: [
        "Comprehensive island-specific property assessment — evaluating lake access, views, lot positioning, condition, and the unique factors that drive Mercer Island value",
        "Defensible pricing documentation that withstands beneficiary scrutiny and court review in a high-value estate context",
        "Discreet property coordination in a community where estate circumstances are often known to neighbors",
        "Clear, regular communication with executors who may be managing from outside the region",
        "Preparation and presentation management at the standard island buyers expect",
        "End-to-end sale coordination from initial assessment through closing, minimizing the executor's logistical burden",
      ],
      whyLocal: "On Mercer Island, every estate property has distinctive characteristics — lake frontage, east-side versus west-side positioning, view corridors, mature lots, or mid-century architectural features. Generic Eastside comparisons often miss what makes each island property unique. David Stein's on-site evaluation provides the property-specific insight that executors need for defensible pricing — especially important when beneficiaries have strong opinions and the stakes are high.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters on Mercer Island need a real estate partner with specific island-market expertise — not just Eastside generalist knowledge. The island's limited inventory, lakefront premium dynamics, and distinctive buyer pool create valuation challenges that require hands-on assessment. Real Property Planning provides Mercer Island legal professionals with defensible pricing, clear documentation, and discreet coordination.",
      scenarios: [
        "A probate attorney managing a Mercer Island estate where the property's lake access, views, or architectural features make standard market comparisons unreliable",
        "A trustee responsible for a trust-held property on Mercer Island who needs fiduciary-grade valuation in a market with limited comparable sales",
        "A family law attorney handling a Mercer Island divorce where the marital property is high-value and both parties need objective, defensible pricing",
        "An estate planning attorney advising a Mercer Island client on property disposition where the island's limited-inventory dynamics affect strategy",
        "An elder law attorney coordinating a client's property sale on the island alongside a transition to care, where timing and sensitivity are critical",
      ],
      howWeHelp: [
        "Island-specific property assessments that capture the factors general Eastside comparisons miss — lake access type, view quality, lot positioning, and community context",
        "Defensible pricing documentation suitable for court filings, beneficiary communication, and settlement negotiations involving high-value island property",
        "Discreet, professional coordination appropriate for a private island community where legal matters carry social visibility",
        "Responsive communication calibrated to legal timelines and the expectations of attorneys handling premium property matters",
        "Coordination across multiple stakeholders — attorneys, trustees, beneficiaries, and financial advisors — with clear reporting",
        "A reliable Mercer Island real estate resource for ongoing referrals and property-related legal matters",
      ],
      whyLocal: "Mercer Island property matters require a broker who understands the island's distinctive market — not just the Eastside broadly. View premiums, lakefront access variations, lot positioning, and the island's limited-inventory dynamics all affect pricing in ways that broad-market comparisons miss. David Stein's certified appraisal background provides attorneys and fiduciaries with the island-specific analysis their Mercer Island cases require.",
    },
  },

  // ── BAINBRIDGE ISLAND ───────────────────────────────────────────
  // Identity: Ferry-dependent, artistic/creative community, rural-premium
  // hybrid, Winslow village, larger lots, intentional lifestyle
  "bainbridge-island": {
    "probate-estate-sales": {
      intro: "Bainbridge Island blends rural character, artistic community identity, and premium real estate values in a way that's unique in the Puget Sound region. Estate and probate sales on Bainbridge involve properties that range from Winslow village homes to large-lot rural properties to waterfront estates — each requiring a different pricing and preparation approach. Real Property Planning provides the island-specific expertise that executors and families need for Bainbridge estate property.",
      scenarios: [
        "An estate property on Bainbridge Island with acreage, outbuildings, or rural features that add complexity beyond a standard residential sale",
        "An inherited Winslow-area home where walkability to the ferry, shops, and village amenities creates distinct value compared to the island's more rural properties",
        "A longtime family property on Bainbridge where the owners' personal connections to the island community add sensitivity to the sale process",
        "An out-of-state executor managing a Bainbridge estate property who needs a local coordinator who understands the island's ferry-dependent market rhythm",
        "A Bainbridge property where the artistic or custom nature of the home makes standard comparable-sale pricing insufficient",
      ],
      howWeHelp: [
        "Island-specific valuation that distinguishes between Bainbridge's varied submarkets — Winslow village, rural north-end, waterfront, and mid-island properties",
        "Assessment of rural-premium characteristics — acreage, outbuildings, custom construction, and the lifestyle features that Bainbridge buyers value",
        "Coordination with the probate process while accounting for Bainbridge's ferry-dependent market timing and buyer patterns",
        "Sensitive handling appropriate for an island community where estate situations are often known within the neighborhood",
        "Management of preparation logistics across different property types — from village homes to large-lot rural properties",
        "Full-service coordination from initial assessment through closing for executors managing from off-island",
      ],
      whyLocal: "Bainbridge Island's real estate market is shaped by its ferry-dependent geography, rural-premium character, and the intentional lifestyle that draws buyers to the island. A Winslow village property near the ferry operates in a completely different market segment than a large-lot property on the north end. David Stein's on-site assessment accounts for how Bainbridge's unique island characteristics — lot size, location relative to the ferry and village, rural features, and custom construction — affect realistic pricing.",
    },
    "senior-transitions": {
      intro: "Bainbridge Island seniors often have deep roots in the island community — relationships built over decades, homes customized to their lives, and a connection to the island's artistic, natural character. When it's time to transition from a Bainbridge home, the decision involves both practical real estate considerations and the personal weight of leaving an intentionally chosen community. Real Property Planning provides patient, island-informed guidance for families navigating this transition.",
      scenarios: [
        "A longtime Bainbridge resident moving to care or senior living on the Kitsap mainland, needing to sell a home with island-specific features and community significance",
        "An adult child coordinating a parent's transition from Bainbridge Island, managing the sale from across the water or out of state",
        "A senior couple whose Bainbridge home has rural characteristics — larger lot, outbuildings, or custom features — that require specialized pricing",
        "A family navigating the emotional complexity of a parent leaving an island community where they've been deeply connected for decades",
        "A Bainbridge homeowner whose property near Winslow has appreciated based on walkability and ferry proximity, requiring distinct pricing from rural island properties",
      ],
      howWeHelp: [
        "Valuation that accounts for Bainbridge Island's premium-rural hybrid market — from Winslow village proximity to north-end acreage",
        "Understanding of the ferry-dependent logistics that affect showing schedules, buyer access, and seasonal market patterns",
        "Patient coordination with families managing an emotional transition from an intentionally chosen island community",
        "Preparation guidance calibrated to Bainbridge buyer expectations — which improvements matter for island-lifestyle buyers versus general market buyers",
        "Timeline coordination that works with the family's transition plan, including off-island care arrangements",
        "Full-service sale management so the family can focus on the personal aspects of leaving the island",
      ],
      whyLocal: "Bainbridge seniors are often leaving more than a house — they're leaving an island community they chose deliberately. The property itself may have characteristics that don't translate easily into standard valuations: custom construction, artist studios, larger lots with gardens, or proximity to the Winslow ferry terminal. David Stein's property-specific assessment captures what makes each Bainbridge home unique, helping families price accurately while navigating the emotional dimension of an island transition.",
    },
    "executor-support": {
      intro: "Executors managing estate property on Bainbridge Island face a market with unique characteristics — ferry-dependent access, a mix of village and rural property types, and a community where estate situations carry personal visibility. Real Property Planning helps Bainbridge executors navigate the island's distinct market with defensible pricing, practical coordination, and the local knowledge that managing an island estate requires.",
      scenarios: [
        "An off-island executor who needs comprehensive local coordination for a Bainbridge estate property — from initial assessment to closing",
        "A Bainbridge estate property with rural features — acreage, outbuildings, or custom construction — that require hands-on evaluation rather than automated estimates",
        "Co-executors managing a Bainbridge property where the island community's awareness of the situation adds a layer of sensitivity",
        "An estate home near Winslow where ferry-adjacent location creates premium value that needs to be accurately documented for beneficiaries",
        "An executor navigating Bainbridge's seasonal market patterns alongside probate court timelines",
      ],
      howWeHelp: [
        "Island-specific property assessment that accounts for Bainbridge's varied submarkets, rural-premium characteristics, and ferry-dependent market dynamics",
        "Assessment of rural estate features — acreage, outbuildings, custom construction, well/septic — that standard residential analysis doesn't cover",
        "Defensible pricing documentation for beneficiaries and the court, grounded in on-site evaluation of island-specific value factors",
        "Coordination of preparation logistics across Bainbridge's different property types, working with island-based vendors",
        "Clear communication with executors managing from off-island, including regular updates and accessible documentation",
        "Full-service management that accounts for ferry scheduling, seasonal patterns, and the practical realities of island property sales",
      ],
      whyLocal: "Bainbridge estate properties often defy simple market comparisons — the island's mix of Winslow village homes, mid-island neighborhoods, waterfront properties, and large-lot rural estates means every property's value is driven by its specific combination of location, lot characteristics, and construction type. David Stein's on-site assessment provides executors with the property-specific analysis they need for defensible pricing in a market where automated tools consistently miss the mark.",
    },
    "attorney-fiduciary-support": {
      intro: "Legal professionals managing property matters on Bainbridge Island need a broker who understands the island's unique real estate dynamics — not just Kitsap County broadly. The ferry-dependent market, premium-rural hybrid property types, and close-knit community create considerations that standard market analysis doesn't address. Real Property Planning provides Bainbridge-area attorneys and fiduciaries with island-specific expertise, defensible pricing, and responsive coordination.",
      scenarios: [
        "A probate attorney managing a Bainbridge estate where the property's island location, custom features, or rural characteristics complicate standard valuation",
        "A trustee responsible for trust-held property on Bainbridge who needs fiduciary-grade pricing in a market with limited directly comparable sales",
        "A family law attorney handling a Bainbridge divorce where island-specific property features affect fair settlement value",
        "An estate planning attorney advising a Bainbridge client where the property includes acreage, outbuildings, or waterfront access that require specialized assessment",
        "An elder law attorney coordinating a client's property sale on Bainbridge alongside a transition to mainland care facilities",
      ],
      howWeHelp: [
        "Island-specific property assessments that capture Bainbridge's rural-premium hybrid value factors — ferry proximity, acreage, custom construction, and community character",
        "Defensible pricing documentation suitable for court proceedings, trust administration, and settlement discussions involving island property",
        "Understanding of Bainbridge's ferry-dependent market rhythms, seasonal buyer patterns, and limited-inventory dynamics",
        "Professional, discreet coordination in a community where legal matters may be visible within the neighborhood",
        "Responsive communication that works across the water — supporting attorneys based in Seattle, Kitsap, or elsewhere",
        "A reliable Bainbridge Island real estate resource for attorneys with ongoing island property referral needs",
      ],
      whyLocal: "Bainbridge Island property matters require island-specific expertise. The market's ferry-dependent dynamics, premium-rural hybrid pricing, and limited comparable sales create valuation challenges that broad Kitsap County analysis doesn't address. David Stein's on-site assessment and certified appraisal background provide attorneys and fiduciaries with the property-specific documentation that Bainbridge cases require — whether for court filings, settlement negotiations, or fiduciary reporting.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // WATERFRONT TONE GROUP — Edmonds, Gig Harbor, Poulsbo
  // ═══════════════════════════════════════════════════════════════════

  // ── EDMONDS ─────────────────────────────────────────────────────
  // Identity: Walkable downtown, ferry to Kingston, Bowl neighborhood,
  // art galleries, small-city sophistication, Puget Sound views
  edmonds: {
    "probate-estate-sales": {
      intro: "Edmonds combines walkable downtown charm, Puget Sound views, and a ferry connection that shapes the character of the community. Estate and probate properties in Edmonds often carry decades of ownership history — homes in the Bowl, along the waterfront corridor, or in established neighborhoods where views and location create value that automated tools struggle to capture. Real Property Planning provides the Edmonds-specific insight that executors and families need.",
      scenarios: [
        "A longtime family home in the Edmonds Bowl where panoramic Sound and Olympic views create premium value that varies block by block",
        "An estate property near downtown Edmonds where walkability to the ferry, shops, and waterfront adds location-specific value",
        "An inherited home in an established Edmonds neighborhood where decades of personal belongings require professional cleanout coordination",
        "An out-of-state executor managing an Edmonds property who needs someone familiar with the community's seasonal market patterns and buyer expectations",
        "A probate property in Edmonds where the home's view orientation and waterfront proximity create pricing complexity that standard comparisons miss",
      ],
      howWeHelp: [
        "Edmonds-specific valuation distinguishing between the Bowl, downtown-adjacent, waterfront, and established interior neighborhoods",
        "Assessment of how Puget Sound views, Olympic Mountain sightlines, and proximity to the Edmonds ferry and downtown affect property value",
        "Coordination with the probate process while accounting for Edmonds' seasonal market rhythms and small-city buyer dynamics",
        "Management of property preparation appropriate for Edmonds' engaged, quality-conscious buyer pool",
        "Clear communication with executors and family members about Edmonds' specific market conditions and realistic pricing",
        "Full-service sale coordination from assessment through closing, managing the details so the family doesn't have to",
      ],
      whyLocal: "Edmonds' real estate market is defined by its walkable downtown, ferry access, and the dramatic view corridors that define neighborhoods like the Bowl. A home with an unobstructed Sound view commands a very different price than one a few blocks away without it. David Stein's on-site assessment captures these block-by-block differences — providing executors and families with Edmonds-specific pricing that accounts for view quality, downtown proximity, and the community's particular buyer expectations.",
    },
    "senior-transitions": {
      intro: "Many Edmonds seniors chose the community deliberately — for its walkable downtown, ferry access, arts scene, and the small-city character that makes daily life enjoyable. Transitioning from a longtime Edmonds home involves practical real estate decisions and the personal weight of leaving a community where relationships and routines are deeply established. Real Property Planning helps Edmonds families navigate this transition with patience, honest pricing, and experienced coordination.",
      scenarios: [
        "A senior leaving a home in the Edmonds Bowl to move to a senior living community, needing to understand how their view property's value compares to non-view homes",
        "An adult child coordinating a parent's transition from an Edmonds home where decades of community connections make the move emotionally complex",
        "A longtime Edmonds homeowner whose property near downtown and the ferry has location-driven value that needs careful positioning",
        "A family helping a parent move from a larger Edmonds home to a smaller condo or apartment while maximizing the sale proceeds for care funding",
        "A senior whose Edmonds home has deferred maintenance that needs honest assessment before listing in a market where buyers expect well-maintained properties",
      ],
      howWeHelp: [
        "Valuation that captures Edmonds-specific premiums — Sound views, Bowl location, downtown walkability, and ferry proximity",
        "Honest assessment of how deferred maintenance and dated finishes affect value in Edmonds' quality-conscious market",
        "Timeline coordination that aligns the sale with a move to senior living, whether on the Edmonds waterfront or elsewhere",
        "Patient communication with seniors and families navigating both the practical and emotional aspects of leaving Edmonds",
        "Preparation guidance appropriate for Edmonds' buyer expectations — what matters, what doesn't, and where to invest",
        "Referrals to trusted moving and transition professionals familiar with Edmonds and south Snohomish County",
      ],
      whyLocal: "Edmonds seniors often own homes in locations — the Bowl, near the ferry, along the waterfront — where the value is heavily influenced by view quality, walkability, and community character. These aren't factors that automated tools price well. David Stein provides the property-specific assessment that helps families understand exactly what their Edmonds home is worth, which preparation decisions make sense, and how to time the sale alongside the family's transition plan.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Edmonds inherit responsibility for a home in a community where location nuances matter significantly — Sound views, Bowl positioning, ferry proximity, and downtown walkability all affect value in ways that require local expertise. Real Property Planning helps Edmonds executors with property-specific assessment, practical coordination, and the clear communication that estate administration requires.",
      scenarios: [
        "An out-of-state executor who needs a local expert to assess, prepare, and sell an Edmonds estate property they haven't visited recently",
        "An estate home in the Edmonds Bowl where view orientation and exposure create pricing complexity that standard comparables don't address",
        "Co-executors managing an Edmonds property where the family has deep community ties and the sale carries personal visibility",
        "An estate property near the Edmonds waterfront where seasonal market patterns affect optimal listing timing",
        "An executor dealing with an Edmonds home that has accumulated decades of belongings and needs comprehensive cleanout before showing",
      ],
      howWeHelp: [
        "Edmonds-specific property assessment evaluating view quality, downtown proximity, ferry access, and neighborhood positioning",
        "Defensible pricing documentation that accounts for Edmonds' location-driven premiums and condition-specific factors",
        "Coordination of cleanout, preparation, and vendor management with professionals familiar with Edmonds",
        "Clear reporting for executors, beneficiaries, and the estate attorney throughout the process",
        "Strategic listing timing guidance based on Edmonds' seasonal market patterns",
        "End-to-end management from initial assessment through closing for executors managing from outside the area",
      ],
      whyLocal: "Edmonds estate properties are often in locations where block-by-block differences in view quality, walkability, and waterfront proximity create significant pricing variation. An executor unfamiliar with these nuances risks mispricing — especially if relying on automated tools that don't distinguish between a Bowl home with Sound views and one without. David Stein's on-site assessment provides the Edmonds-specific analysis that defensible estate pricing requires.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Edmonds benefit from a broker who understands the community's specific market dynamics — the premium that views, walkability, and ferry access command, and how those factors vary across Edmonds' neighborhoods. Real Property Planning provides Edmonds-area legal professionals with locally grounded property assessments, clear documentation, and responsive coordination.",
      scenarios: [
        "A probate attorney managing an Edmonds estate where view-corridor value creates pricing complexity that requires on-site assessment",
        "A trustee responsible for trust-held property in Edmonds who needs defensible pricing in a market driven by location-specific premiums",
        "An elder law attorney coordinating a client's property sale in Edmonds alongside a transition to care facilities in south Snohomish County",
        "A family law attorney handling an Edmonds divorce where the home's Bowl location or waterfront proximity significantly affects settlement value",
        "An estate planning attorney who needs a reliable Edmonds-area broker for ongoing client referrals involving property transitions",
      ],
      howWeHelp: [
        "Property assessments that capture Edmonds-specific value drivers — Sound views, Olympic sightlines, Bowl positioning, downtown walkability, and ferry proximity",
        "Defensible pricing documentation for court filings, settlement negotiations, and fiduciary reporting involving Edmonds property",
        "Responsive coordination with legal timelines, understanding that attorney-referred matters often have procedural deadlines",
        "Clear communication across multiple stakeholders — attorneys, trustees, beneficiaries, and co-counsel",
        "Strategic guidance on Edmonds-specific market timing and preparation decisions",
        "A reliable south Snohomish County real estate resource for attorneys with ongoing property referral needs",
      ],
      whyLocal: "Edmonds property matters require understanding of the community's specific value dynamics. The premium attached to Sound views, Bowl location, ferry proximity, and walkable downtown access varies substantially across the city's neighborhoods — and these distinctions matter for court filings, settlement discussions, and fiduciary pricing documentation. David Stein provides attorneys and fiduciaries with the Edmonds-specific analysis these situations require.",
    },
  },

  // ── GIG HARBOR ──────────────────────────────────────────────────
  // Identity: Harbor town, Narrows Bridge, maritime character,
  // downtown harbor village, Tacoma access, peninsula living
  "gig-harbor": {
    "probate-estate-sales": {
      intro: "Gig Harbor's maritime character, harbor village atmosphere, and peninsula setting create a real estate market with its own rhythms and pricing dynamics. Estate and probate properties here range from harbor-view homes and downtown waterfront condos to larger peninsula properties with acreage. Real Property Planning provides the Gig Harbor-specific expertise that executors and families need to navigate estate sales in this distinctive community.",
      scenarios: [
        "An estate property overlooking Gig Harbor Bay where the harbor view premium requires specialized local assessment rather than broad Pierce County comparisons",
        "An inherited home on the Gig Harbor peninsula with acreage or rural-adjacent features that standard residential pricing doesn't capture",
        "A longtime family property in downtown Gig Harbor where walkability to the harbor, shops, and restaurants creates location-specific value",
        "An out-of-state executor managing a Gig Harbor estate property who needs coordination from someone who understands the peninsula's market patterns",
        "A probate property in a Gig Harbor neighborhood where Narrows Bridge access and Tacoma proximity influence the buyer pool",
      ],
      howWeHelp: [
        "Gig Harbor-specific valuation distinguishing between harbor-view, downtown, peninsula, and rural-adjacent properties",
        "Assessment of how harbor proximity, waterfront views, and the maritime character of the community affect property value",
        "Understanding of how the Narrows Bridge connection to Tacoma and the broader Puget Sound region affects Gig Harbor's buyer demographics",
        "Coordination with the probate process while accounting for Gig Harbor's seasonal and tourism-influenced market patterns",
        "Management of property preparation appropriate for Gig Harbor's buyer expectations — from harbor-village charm to peninsula living",
        "Full-service estate sale coordination for executors managing from off the peninsula",
      ],
      whyLocal: "Gig Harbor's real estate market reflects its dual identity — a charming harbor village that also serves as a residential peninsula community connected to Tacoma via the Narrows Bridge. Properties with direct harbor views operate in a different market segment than peninsula homes with acreage or Narrows-area properties with bridge proximity. David Stein's on-site assessment accounts for how these Gig Harbor-specific factors affect realistic pricing — especially for estate properties where automated tools miss the community's distinctive value dynamics.",
    },
    "senior-transitions": {
      intro: "Many Gig Harbor seniors chose the peninsula for its harbor village character, maritime atmosphere, and the quality of life that comes with small-town living connected to the broader Puget Sound region via the Narrows Bridge. Transitioning from a longtime Gig Harbor home involves both practical property decisions and the personal significance of leaving a deliberately chosen community. Real Property Planning helps Gig Harbor families approach this transition with experienced guidance and local understanding.",
      scenarios: [
        "A senior couple leaving a harbor-view home in Gig Harbor to move to assisted or independent living on the peninsula or closer to family across the bridge",
        "An adult child coordinating a parent's transition from a Gig Harbor home, managing the sale alongside care planning from across the Narrows or out of state",
        "A longtime peninsula homeowner whose property has rural features — larger lot, outbuildings, or private settings — that require specialized pricing",
        "A Gig Harbor senior whose home near the downtown harbor has appreciated based on walkability and maritime charm, requiring location-specific valuation",
        "A family navigating a parent's move from a Gig Harbor home where decades of maritime living have created both practical preparation needs and emotional attachment",
      ],
      howWeHelp: [
        "Valuation that captures Gig Harbor's location-specific premiums — harbor views, downtown walkability, peninsula privacy, and maritime character",
        "Honest assessment of how property condition and age interact with Gig Harbor's buyer expectations in different neighborhoods",
        "Timeline coordination that works with the family's transition plan, whether moving within the peninsula or across the Narrows",
        "Patient, experienced communication with families navigating a significant life change in a community they chose deliberately",
        "Preparation guidance tailored to Gig Harbor's market — what matters to peninsula buyers and harbor-lifestyle seekers",
        "Referrals to trusted moving and transition professionals on the peninsula and in the broader Tacoma-Pierce County area",
      ],
      whyLocal: "Gig Harbor seniors often own homes that reflect the community's maritime and peninsula character — harbor views, waterfront access, larger lots, or locations that offer the walkable harbor-village lifestyle. These features drive value in ways that generic Pierce County comparisons don't capture. David Stein helps families understand exactly what their Gig Harbor property is worth based on its specific characteristics — not broad-market averages that miss what makes the peninsula unique.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Gig Harbor face a market shaped by the peninsula's distinctive character — harbor village charm, waterfront premiums, Narrows Bridge connectivity, and a mix of urban-village and rural property types. Real Property Planning provides Gig Harbor executors with peninsula-specific assessment, practical coordination, and the clear communication that responsible estate administration requires.",
      scenarios: [
        "An executor managing a Gig Harbor estate property from across the Narrows or out of state, needing comprehensive local coordination",
        "An estate home with harbor views where the view quality and orientation create pricing complexity that requires on-site evaluation",
        "A peninsula estate property with acreage or rural features that standard residential pricing doesn't fully address",
        "Co-executors managing a property in Gig Harbor's downtown harbor area where the community's awareness of the situation adds sensitivity",
        "An estate property in a Narrows-area neighborhood where bridge proximity and Tacoma access affect the buyer pool",
      ],
      howWeHelp: [
        "Gig Harbor-specific property assessment covering harbor views, peninsula positioning, waterfront access, and rural characteristics",
        "Defensible pricing documentation accounting for the value factors unique to Gig Harbor's market segments",
        "Coordination of preparation logistics with peninsula-based vendors who understand Gig Harbor's property types",
        "Clear communication with executors and beneficiaries about Gig Harbor's specific market conditions and sale timeline expectations",
        "Strategic listing timing guidance considering the peninsula's seasonal buyer patterns",
        "End-to-end sale management for executors coordinating from off the peninsula",
      ],
      whyLocal: "Gig Harbor executors need pricing that reflects the peninsula's specific market — not broad Pierce County averages. A harbor-view property near downtown Gig Harbor operates in a completely different market segment than a larger-lot property on the rural side of the peninsula. David Stein's on-site evaluation provides the property-specific analysis that Gig Harbor estate pricing requires — especially important where beneficiaries may have outdated or emotionally influenced expectations of what the property is worth.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries with property matters in Gig Harbor need a broker who understands the peninsula's specific real estate dynamics — harbor-view premiums, the distinction between downtown and rural peninsula properties, and how Narrows Bridge connectivity affects the buyer pool. Real Property Planning provides Gig Harbor-area legal professionals with locally informed assessments, defensible documentation, and professional coordination.",
      scenarios: [
        "A probate attorney managing a Gig Harbor estate where harbor-view value or peninsula-specific features complicate standard valuation",
        "A trustee responsible for trust-held property on the Gig Harbor peninsula who needs defensible pricing reflecting the area's unique market",
        "A family law attorney handling a Gig Harbor divorce where the property's harbor village location or waterfront access affects settlement value",
        "An estate planning attorney advising a Gig Harbor client on property disposition where peninsula-specific buyer dynamics influence strategy",
        "An elder law attorney coordinating a client's transition from a Gig Harbor home to a care facility, with the property sale supporting the move",
      ],
      howWeHelp: [
        "Peninsula-specific property assessments that capture Gig Harbor's unique value drivers — harbor proximity, waterfront access, rural lot features, and maritime character",
        "Defensible pricing documentation for court filings, trust administration, and settlement discussions involving Gig Harbor property",
        "Understanding of how Narrows Bridge access and Tacoma connectivity affect Gig Harbor's buyer demographics and market timing",
        "Professional coordination with legal timelines, understanding that attorney-referred matters have procedural requirements",
        "Clear communication across stakeholders — attorneys, trustees, beneficiaries — with consistent documentation",
        "A reliable Gig Harbor peninsula real estate resource for attorneys with ongoing property referral needs",
      ],
      whyLocal: "Gig Harbor property matters require peninsula-specific expertise. The harbor-village premium, waterfront access variations, rural lot characteristics, and Narrows Bridge buyer dynamics all affect pricing in ways that general Pierce County comparisons miss. David Stein provides attorneys and fiduciaries with the property-specific, on-site analysis that Gig Harbor cases require for defensible documentation.",
    },
  },

  // ── POULSBO ─────────────────────────────────────────────────────
  // Identity: Scandinavian heritage, Liberty Bay, small-town waterfront,
  // Kitsap community, Viking Avenue, intimate harbor
  poulsbo: {
    "probate-estate-sales": {
      intro: "Poulsbo's Scandinavian heritage, Liberty Bay waterfront, and small-town character create a real estate market where community identity and local knowledge matter more than in larger markets. Estate and probate properties in Poulsbo — whether along Liberty Bay, in established neighborhoods near Viking Avenue, or in the more rural areas surrounding town — each require locally specific valuation and coordination. Real Property Planning provides the Poulsbo-focused expertise these situations demand.",
      scenarios: [
        "A longtime family home near Liberty Bay where the water proximity and Poulsbo's charming downtown character create location-driven value",
        "An estate property in Poulsbo's established residential neighborhoods where the Scandinavian-heritage community character adds context to the sale",
        "An inherited property on the outskirts of Poulsbo with rural characteristics — larger lots, privacy, or Kitsap County rural features — alongside proximity to town",
        "An out-of-state executor managing a Poulsbo estate property who needs someone embedded in the community to coordinate the sale effectively",
        "A probate property in Poulsbo where the family's long history in the community means the sale carries personal and social significance",
      ],
      howWeHelp: [
        "Poulsbo-specific valuation that distinguishes between Liberty Bay waterfront, downtown-adjacent, established neighborhood, and rural-adjacent properties",
        "Understanding of how Poulsbo's community character, Scandinavian heritage tourism, and Liberty Bay appeal affect buyer interest and pricing",
        "Coordination with the probate process while being sensitive to a small community where estate circumstances are often known locally",
        "Management of property preparation appropriate for Poulsbo's buyer expectations — from waterfront presentation to rural property assessment",
        "Clear communication with executors and family about Poulsbo's specific market conditions, comparable sales, and realistic pricing",
        "Full-service sale coordination from property assessment through closing",
      ],
      whyLocal: "Poulsbo's real estate market reflects its identity as a Liberty Bay waterfront community with Scandinavian heritage character and a loyal local following. Properties near the bay or within walking distance of downtown operate in a different market than those in the surrounding rural areas. David Stein's on-site assessment captures these Poulsbo-specific distinctions — providing executors and families with pricing that reflects the community's unique character rather than generic Kitsap County averages.",
    },
    "senior-transitions": {
      intro: "Poulsbo seniors often have deep ties to the community — built around Liberty Bay, the Scandinavian character of downtown, and the relationships that come with small-town living in Kitsap County. Transitioning from a Poulsbo home is both a property decision and a personal milestone. Real Property Planning provides patient, locally informed guidance for families navigating this transition in a community where the sale is more than just a transaction.",
      scenarios: [
        "A senior leaving a home near Liberty Bay to move to senior living in Poulsbo, Silverdale, or closer to family elsewhere in Washington",
        "An adult child helping a parent transition from a longtime Poulsbo home, coordinating the sale from across the water or out of state",
        "A Poulsbo homeowner whose property has community-specific appeal — proximity to Viking Avenue, Liberty Bay views, or established neighborhood character — that requires local pricing expertise",
        "A family managing a parent's transition in a community where the family is well-known and the sale carries social visibility",
        "A senior whose Poulsbo home needs preparation tailored to what local buyers expect and value",
      ],
      howWeHelp: [
        "Valuation reflecting Poulsbo's specific market — Liberty Bay proximity, downtown walkability, community character, and how these factors affect realistic pricing",
        "Honest preparation guidance based on what Poulsbo buyers actually value versus improvements that won't deliver return in this market",
        "Patient communication with seniors and families navigating both practical decisions and the emotional weight of leaving a close-knit community",
        "Timeline coordination that respects the family's pace while accounting for Poulsbo's market seasonality",
        "Coordination with Kitsap-area senior living communities and transition professionals",
        "Steady, hands-on management of the sale process from assessment through closing",
      ],
      whyLocal: "Poulsbo seniors often own homes where the value is tied to community-specific factors — Liberty Bay proximity, downtown walkability, neighborhood character — that automated tools don't price accurately. David Stein helps families understand what their Poulsbo home is really worth, which preparation makes sense for the local buyer pool, and how to time the sale to align with both the family's transition and Poulsbo's seasonal market patterns.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Poulsbo enter a market shaped by the community's Liberty Bay waterfront, Scandinavian heritage character, and small-town identity. Real Property Planning helps Poulsbo executors with locally grounded assessment, practical coordination, and the sensitive handling that estate sales require in a community where circumstances are often known within the neighborhood.",
      scenarios: [
        "An out-of-state executor managing a Poulsbo estate property who needs a locally connected coordinator familiar with the community",
        "An estate home near Liberty Bay or downtown Poulsbo where location-specific premiums require hands-on local assessment",
        "A Poulsbo property with rural-adjacent characteristics — larger lot, privacy, Kitsap County features — that add pricing complexity",
        "Co-executors managing an estate sale in a community where the family's local history adds personal significance to the process",
        "An estate property in Poulsbo that needs cleanout and preparation coordinated with local vendors who understand the community",
      ],
      howWeHelp: [
        "Poulsbo-specific property assessment covering Liberty Bay proximity, downtown access, neighborhood character, and rural-adjacent features",
        "Defensible pricing grounded in Poulsbo's actual market activity rather than broader Kitsap County averages",
        "Sensitive coordination in a small community where estate situations carry social awareness",
        "Clear documentation for executors, beneficiaries, and the estate attorney — reflecting Poulsbo's specific market conditions",
        "Coordination with local vendors for cleanout, preparation, and property maintenance",
        "End-to-end management for executors coordinating from outside the Kitsap area",
      ],
      whyLocal: "Poulsbo's market is small enough that comparable sales may be limited, but specific enough that broad-area averages miss the value drivers that matter — Liberty Bay proximity, downtown walkability, lot characteristics, and community character. David Stein provides executors with the property-specific, on-site analysis that Poulsbo estate pricing requires — especially important where beneficiaries may not understand how the local market differs from where they currently live.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries with property matters in Poulsbo benefit from a broker who understands the community's distinctive real estate dynamics — Liberty Bay waterfront premiums, Scandinavian heritage village character, and the pricing nuances of a small Kitsap County market. Real Property Planning provides Poulsbo-area legal professionals with community-specific assessments, defensible pricing, and responsive coordination.",
      scenarios: [
        "A probate attorney managing a Poulsbo estate where Liberty Bay proximity or downtown location creates pricing that differs from general Kitsap comparisons",
        "A trustee responsible for trust-held property in Poulsbo who needs defensible pricing in a small market with limited comparable sales",
        "A family law attorney handling a Poulsbo divorce where the community's close-knit character adds sensitivity to the property sale process",
        "An estate planning attorney who needs a reliable Kitsap-area broker familiar with Poulsbo's specific market for ongoing client referrals",
        "An elder law attorney coordinating a Poulsbo client's property sale alongside a transition to care in the Kitsap area",
      ],
      howWeHelp: [
        "Community-specific property assessments reflecting Poulsbo's Liberty Bay premiums, downtown character, and small-market pricing dynamics",
        "Defensible documentation for court filings, trust records, and settlement discussions involving Poulsbo property",
        "Discreet, professional handling in a small community where legal and estate matters carry social visibility",
        "Responsive communication with attorneys who may be based in Bremerton, Silverdale, or across the water in Seattle",
        "Understanding of Poulsbo's limited comparable sales environment and how to build defensible pricing rationale",
        "A reliable Poulsbo and north Kitsap real estate resource for attorneys with ongoing property referral needs",
      ],
      whyLocal: "Poulsbo property matters require community-specific understanding. Liberty Bay waterfront premiums, downtown Viking Avenue proximity, and the community's distinctive character all affect pricing in ways that broad Kitsap County analysis doesn't capture. David Stein provides attorneys and fiduciaries with the Poulsbo-specific, on-site assessment that defensible pricing documentation in this market requires.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // URBAN TONE GROUP — Seattle, Tacoma
  // ═══════════════════════════════════════════════════════════════════

  // ── SEATTLE ─────────────────────────────────────────────────────
  // Identity: 80+ neighborhoods, tech industry, density, diverse
  // property types, zoning complexity, rapid change
  seattle: {
    "probate-estate-sales": {
      intro: "Seattle's real estate market spans more than 80 distinct neighborhoods — each with its own pricing dynamics, buyer expectations, and property characteristics. A probate sale in Ballard presents entirely different challenges than one in Rainier Beach or on Capitol Hill. Real Property Planning provides the neighborhood-level expertise that Seattle executors, attorneys, and families need to handle estate property in a market where block-by-block analysis matters more than citywide averages.",
      scenarios: [
        "A family estate in a north Seattle neighborhood like Wedgwood, Ravenna, or View Ridge where mid-century homes compete against extensive remodels and new construction",
        "An inherited property in a rapidly gentrifying Seattle neighborhood where the land value may exceed the structure — creating a strategic decision about how to position the sale",
        "A Capitol Hill or Central District estate property — condo, townhome, or vintage home — where neighborhood density and property type add complexity",
        "Multiple inherited properties across different Seattle neighborhoods that must be valued individually as part of one estate settlement",
        "A probate attorney managing a Seattle estate who needs a broker capable of assessing diverse property types across the city's neighborhood landscape",
      ],
      howWeHelp: [
        "Neighborhood-level valuation across Seattle's 80+ neighborhoods — not citywide averages that miss the block-by-block factors driving value",
        "Assessment of highest-and-best-use scenarios: residence, renovation opportunity, lot sale, ADU potential, or redevelopment based on zoning",
        "Coordination with probate attorneys navigating Seattle's active market pace alongside court procedures",
        "Management of cleanout, preparation, and vendor coordination across different property types and Seattle neighborhoods",
        "Clear communication with multiple stakeholders — executors, co-heirs, attorneys, and financial advisors often dispersed nationally",
        "Full-service transaction management calibrated to Seattle's fast-moving, competitive market environment",
      ],
      whyLocal: "Seattle estate properties exist within a market where neighborhood context changes everything. A mid-century rambler in Wedgwood, a craftsman in Wallingford, and a condo in South Lake Union each operate in fundamentally different submarkets with different buyer pools and pricing dynamics. David Stein's neighborhood-level experience across Seattle allows him to assess each estate property on its own terms — evaluating how condition, lot potential, zoning, and neighborhood trajectory affect realistic pricing for executors and attorneys who need defensible analysis, not automated estimates.",
    },
    "senior-transitions": {
      intro: "Seattle seniors have often lived through decades of neighborhood transformation — watching their corner of the city evolve while staying rooted in the home they chose years or decades ago. Transitioning from a longtime Seattle home involves navigating a complex urban market where neighborhood dynamics, property types, and buyer expectations vary dramatically across the city. Real Property Planning helps Seattle families approach this transition with neighborhood-specific pricing, practical coordination, and patient guidance.",
      scenarios: [
        "A senior leaving a Magnolia, Queen Anne, or Ballard home they've owned for decades, needing to understand how their neighborhood's evolution affects current market value",
        "An adult child coordinating a parent's transition from a north Seattle home, managing the sale from out of state while navigating Seattle's fast-paced market",
        "A longtime Seattle homeowner whose property may have ADU potential, lot value, or development interest that affects the optimal sale strategy",
        "A family coordinating a senior parent's move to a Seattle-area care community while selling a home in a neighborhood where buyers expect extensive updates",
        "A senior with a Seattle home that includes a rental unit, mother-in-law apartment, or nonconforming addition that complicates the sale",
      ],
      howWeHelp: [
        "Neighborhood-specific valuation that accounts for how Seattle's diverse submarkets — from Beacon Hill to Greenwood — affect what the family home is actually worth",
        "Assessment of whether the property has value beyond its residential use — ADU potential, lot value, development interest, or rental income considerations",
        "Strategic preparation guidance based on what buyers in the specific Seattle neighborhood expect and where preparation investment delivers return",
        "Patient communication with seniors and adult children who may be navigating the process from different cities",
        "Timeline coordination that aligns the sale with the move to care or a smaller residence within Seattle's active market",
        "Full-service management so the family can focus on the personal aspects of the transition",
      ],
      whyLocal: "Seattle seniors often own properties in neighborhoods that have changed dramatically since they moved in — sometimes in ways that significantly affect their home's value and optimal sale strategy. A Ballard craftsman may attract developer interest; a West Seattle home may face different buyer demographics post-bridge-closure concerns; a Beacon Hill property may benefit from transit-oriented demand. David Stein's experience across Seattle's neighborhoods helps families understand how these dynamics affect their specific property.",
    },
    "executor-support": {
      intro: "Serving as executor for a Seattle estate property means navigating one of the most complex urban real estate markets in the Pacific Northwest. With 80+ neighborhoods, diverse property types, and market dynamics that shift block by block, executors need a broker who can assess the specific property — not just the general market. Real Property Planning provides Seattle executors with neighborhood-level expertise, defensible pricing, and comprehensive coordination.",
      scenarios: [
        "An out-of-state executor managing a Seattle estate property in an unfamiliar neighborhood, needing end-to-end local coordination and honest market guidance",
        "An estate property in a rapidly changing Seattle neighborhood where the lot value, zoning, or development potential affects the optimal sale strategy",
        "A Seattle estate with multiple property types — a single-family home and a condo, or a property with rental units — that require separate assessment",
        "Co-executors who disagree on a Seattle property's value and need neutral, defensible pricing grounded in neighborhood-specific analysis",
        "An estate home with an ADU, nonconforming addition, or rental history that creates complexity beyond a standard residential sale",
      ],
      howWeHelp: [
        "Neighborhood-level property assessment across Seattle's diverse market — evaluating how the specific location, property type, and condition affect realistic value",
        "Analysis of highest-and-best-use: residential sale, lot sale, development, or investment property — based on zoning, lot size, and market demand",
        "Defensible pricing documentation suitable for beneficiary review, court proceedings, and attorney files",
        "Management of cleanout, preparation, and vendor coordination across Seattle's urban logistics environment",
        "Regular communication and status updates for executors managing from outside Seattle or out of state",
        "Full transaction management from initial assessment through closing, navigating Seattle's market pace and competitive dynamics",
      ],
      whyLocal: "Seattle executors face a market where generic pricing can be dangerously inaccurate. A property's value in Fremont may be driven by lot potential; in Magnolia, by view corridors; in Columbia City, by transit proximity and neighborhood trajectory. David Stein's experience across Seattle's neighborhoods provides executors with the property-specific analysis they need — assessing not just what the home is worth as a residence, but whether lot value, zoning, or development interest create alternative strategies that could benefit the estate.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Seattle need a broker who can navigate the city's extraordinary market complexity — 80+ neighborhoods, diverse property types from condos to craftsmans to multifamily, and pricing dynamics that shift within blocks. Real Property Planning works with Seattle-area legal professionals as a responsive, credentialed resource for estate, trust, probate, divorce, and guardianship matters involving Seattle real property.",
      scenarios: [
        "A probate attorney managing a Seattle estate where the property's value depends on neighborhood-specific factors — lot potential, zoning, view corridors, or development interest",
        "A trustee overseeing a trust-held property in Seattle who needs defensible pricing that accounts for the property's specific neighborhood context and property type",
        "A family law attorney handling a Seattle divorce involving property with rental income, ADU potential, or unique characteristics that affect equitable valuation",
        "An elder law attorney coordinating a client's Seattle property sale alongside a care transition, where market pace and timing affect financial outcomes",
        "A guardian managing a Seattle property where tenant considerations, property condition, or zoning create complexity beyond standard residential brokerage",
      ],
      howWeHelp: [
        "Neighborhood-specific property assessments across Seattle's 80+ neighborhoods — not citywide averages that miss the factors driving value in each location",
        "Analysis of complex property situations: rental income, ADU value, lot potential, zoning, and development feasibility",
        "Defensible pricing documentation grounded in appraisal-level methodology for court filings, settlement negotiations, and fiduciary reporting",
        "Responsive communication that matches the pace of Seattle's legal and real estate environments",
        "Coordination across property types — single-family, condo, townhome, multifamily — with appropriate expertise for each",
        "A reliable, credentialed Seattle real estate resource for attorneys with ongoing property-related referral needs",
      ],
      whyLocal: "Seattle's property matters are complicated by the city's market complexity. A property in Ballard raises different questions than one in Rainier Valley or on Capitol Hill — lot potential, neighborhood trajectory, property type, and buyer demographics all vary dramatically. David Stein's experience across Seattle's neighborhoods, combined with his certified appraisal credentials, provides attorneys and fiduciaries with the versatile, defensible analysis that Seattle's diverse property landscape requires.",
    },
  },

  // ── TACOMA ──────────────────────────────────────────────────────
  // Identity: Industrial heritage revitalizing, arts district, more
  // affordable urban, Stadium District, North End, Hilltop, waterfront
  tacoma: {
    "probate-estate-sales": {
      intro: "Tacoma's real estate market reflects a city in transformation — from the revitalized Stadium District and waterfront to the established North End neighborhoods and the evolving communities of Hilltop and South Tacoma. Estate and probate properties in Tacoma require pricing that accounts for this neighborhood-level variation and the city's distinct position as Pierce County's urban center. Real Property Planning provides the Tacoma-specific guidance that executors and families need.",
      scenarios: [
        "An estate property in Tacoma's North End — Stadium District, Old Town, or Proctor — where the neighborhood's established character and walkability create distinct market positioning",
        "An inherited home in a revitalizing Tacoma neighborhood like Hilltop or Lincoln District where rapidly changing values require current, on-the-ground assessment",
        "A probate property in South Tacoma or East Tacoma where affordable housing demand and working-class neighborhood character shape the buyer pool differently than north-end properties",
        "A Tacoma estate that includes multiple property types — a single-family home and a rental duplex, or a property with income-generating potential",
        "An out-of-state executor managing a Tacoma property with limited knowledge of how the city's diverse neighborhoods affect realistic pricing",
      ],
      howWeHelp: [
        "Tacoma-specific valuation that distinguishes between the North End, Stadium District, Hilltop, South Tacoma, and waterfront market segments",
        "Assessment of how Tacoma's revitalization trajectory — arts district growth, light rail expansion, and neighborhood investment — affects estate property value and buyer interest",
        "Analysis of whether the property's best use is residential, rental, or mixed-use — informed by Tacoma's specific zoning and market dynamics",
        "Coordination with the probate process while accounting for Tacoma's market pace and Pierce County court requirements",
        "Management of cleanout, preparation, and vendor coordination using Tacoma-based professionals",
        "Full-service estate sale management for executors navigating Tacoma's evolving market",
      ],
      whyLocal: "Tacoma's real estate market is defined by neighborhood-level variation more than most cities — a property in the Stadium District operates in a fundamentally different market than one in South Tacoma or on Hilltop. Estate properties here face the additional complexity of a city in active transformation, where revitalization can change a neighborhood's pricing dynamics rapidly. David Stein's on-the-ground assessment captures how Tacoma's specific neighborhood context, property condition, and market trajectory affect realistic pricing.",
    },
    "senior-transitions": {
      intro: "Tacoma seniors have watched the city transform — from its industrial past to its current identity as a revitalizing urban center with arts districts, waterfront development, and growing neighborhoods. Transitioning from a longtime Tacoma home means selling in a market where neighborhood trajectory matters as much as current condition. Real Property Planning helps Tacoma families navigate this transition with honest pricing, practical coordination, and an understanding of the city's evolving market.",
      scenarios: [
        "A senior leaving a North End or Proctor home they've owned for decades, needing guidance on how the neighborhood's growth has affected their home's realistic value",
        "An adult child coordinating a parent's transition from a Tacoma home to a senior living community in Pierce County, managing the sale alongside care logistics",
        "A longtime homeowner in a Tacoma neighborhood that has evolved significantly, where the home's value may be affected by redevelopment interest or changing buyer demographics",
        "A senior with a Tacoma home that has rental potential — ADU, basement apartment, or duplex configuration — that affects its optimal sale positioning",
        "A family helping a parent leave a Tacoma waterfront-area home where the view and location create value that requires specialized assessment",
      ],
      howWeHelp: [
        "Tacoma-specific valuation reflecting the city's neighborhood diversity — how North End charm, waterfront access, and neighborhood revitalization affect pricing differently",
        "Assessment of whether the property has value beyond standard residential use — rental potential, ADU feasibility, or lot-based redevelopment interest",
        "Honest preparation guidance based on what Tacoma buyers in each neighborhood segment expect",
        "Patient communication with seniors and families navigating a transition in a city where neighborhoods are changing around them",
        "Timeline coordination that accounts for Tacoma's market conditions and the family's care-planning schedule",
        "Referrals to trusted moving and transition professionals in the Tacoma-Pierce County area",
      ],
      whyLocal: "Tacoma seniors often own homes in neighborhoods that have changed substantially — sometimes in ways that significantly affect value. A North End home may have appreciated dramatically; a Hilltop property may be in the path of revitalization-driven demand; a South Tacoma home may benefit from affordability-seeking buyers. David Stein helps Tacoma families understand how their specific neighborhood's trajectory affects what their home is worth today — not five years ago, and not based on citywide averages.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Tacoma enter a city where neighborhood context drives pricing more than broad market averages suggest. Tacoma's North End, waterfront, Hilltop, and South Tacoma each present different market dynamics, buyer pools, and preparation requirements. Real Property Planning provides Tacoma executors with neighborhood-specific assessment, defensible pricing, and practical coordination across the city's diverse market.",
      scenarios: [
        "An out-of-state executor managing a Tacoma estate property in a neighborhood they're unfamiliar with, needing comprehensive local assessment and coordination",
        "An estate property in a revitalizing Tacoma neighborhood where rapid value changes make current market assessment essential",
        "A Tacoma estate including rental property or a home with income-generating potential that requires different valuation and sale strategy than standard residential",
        "Co-executors who disagree on a Tacoma property's value and need neutral, defensible pricing based on actual neighborhood conditions",
        "An estate home in Tacoma that has significant deferred maintenance and needs honest assessment of preparation options versus selling as-is",
      ],
      howWeHelp: [
        "Tacoma neighborhood-specific property assessment — evaluating how the property's location within the city affects realistic pricing and buyer interest",
        "Analysis of rental, ADU, or redevelopment potential that may affect the property's optimal sale strategy",
        "Defensible pricing documentation reflecting Tacoma's specific market conditions — not broad Pierce County comparisons",
        "Coordination of cleanout, preparation, and vendor management with Tacoma-based professionals",
        "Regular communication and clear reporting for executors managing from outside the Tacoma area",
        "Full transaction management from assessment through closing, navigating Tacoma's market dynamics and Pierce County procedures",
      ],
      whyLocal: "Tacoma executors face a market where the gap between neighborhoods is significant and growing — an estate property's value depends heavily on which part of the city it's in and what's happening in that specific neighborhood. David Stein's Tacoma experience helps executors understand how revitalization trends, rental demand, and neighborhood-specific buyer demographics affect their estate property — providing the defensible, location-specific pricing that responsible estate administration requires.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Tacoma need a broker who understands the city's neighborhood-level market dynamics — the distinction between North End established neighborhoods, waterfront properties, revitalizing areas, and working-class communities. Real Property Planning provides Tacoma-area legal professionals with locally grounded assessments, defensible documentation, and professional coordination tailored to Pierce County's urban center.",
      scenarios: [
        "A probate attorney managing a Tacoma estate where the property's location in a revitalizing neighborhood complicates standard valuation approaches",
        "A trustee responsible for trust-held property in Tacoma who needs defensible pricing reflecting the property's specific neighborhood market dynamics",
        "A family law attorney handling a Tacoma divorce involving a property with rental potential, ADU income, or mixed-use characteristics",
        "An elder law attorney coordinating a Tacoma client's property sale alongside a transition to care, where the home's neighborhood context affects realistic market positioning",
        "A guardian managing a Tacoma property where tenant considerations, property condition, or the neighborhood's changing demographics affect sale strategy",
      ],
      howWeHelp: [
        "Neighborhood-specific property assessments across Tacoma's diverse market segments — not citywide averages that flatten critical pricing distinctions",
        "Analysis of complex property situations: rental income, multi-unit configurations, ADU potential, and redevelopment feasibility in Tacoma's evolving market",
        "Defensible pricing documentation for court filings, settlement negotiations, and fiduciary reporting — grounded in Tacoma's actual market conditions",
        "Responsive coordination with legal timelines and Pierce County court requirements",
        "Clear communication with attorneys, trustees, and beneficiaries who may be located outside the Tacoma area",
        "A reliable Tacoma-Pierce County real estate resource for attorneys with ongoing property-related referral needs",
      ],
      whyLocal: "Tacoma's property matters require understanding of a city where neighborhood dynamics are evolving rapidly. The North End, Stadium District, Hilltop, waterfront, and South Tacoma each present different pricing environments and buyer expectations — and those dynamics are shifting as the city continues to revitalize. David Stein's Tacoma experience provides attorneys and fiduciaries with the current, neighborhood-specific analysis their cases require.",
    },
  },
};

/**
 * Look up a city-specific content override.
 * Returns undefined if no override exists for the city+service combination.
 */
export function getCityServiceOverride(
  citySlug: string,
  serviceSlug: string,
): CityServiceOverride | undefined {
  return cityServiceOverrides[citySlug]?.[serviceSlug];
}
