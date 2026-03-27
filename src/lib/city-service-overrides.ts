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
    "downsizing-services": {
      intro: "Many longtime Bellevue homeowners — especially empty-nesters in Somerset, Bridle Trails, and West Bellevue — reach a point where a 3,500-square-foot home no longer fits their daily life. Downsizing on the Eastside means selling into one of Washington's most competitive markets, where buyer expectations are high and pricing strategy can make a six-figure difference. Real Property Planning helps Bellevue homeowners approach downsizing with clear-eyed market analysis and a preparation plan that reflects what Eastside buyers actually value.",
      scenarios: [
        "A retired couple in Somerset whose large home has appreciated dramatically but needs strategic updates to compete with newer Eastside construction",
        "An empty-nester in Bridle Trails weighing whether to sell the family home or hold it — needing honest guidance on current market positioning versus carrying costs",
        "A Bellevue homeowner relocating out of state for retirement who needs to coordinate sale timing with a cross-country move",
        "A widowed homeowner in West Bellevue whose home is too large to maintain but who wants to stay on the Eastside in a smaller residence",
        "A Crossroads or Wilburton homeowner whose property sits in a redevelopment zone, creating a decision between selling as a residence versus as a development opportunity",
      ],
      howWeHelp: [
        "Condition-based valuation that accounts for how Bellevue's Eastside buyer pool evaluates older homes against the area's extensive new construction",
        "Honest assessment of which updates provide measurable return in Bellevue's price ranges — and which are wasted spending",
        "Sale timeline coordination that aligns with a move to a retirement community, smaller home, or out-of-area relocation",
        "Vendor coordination for cleanout, repairs, staging, and high-standard presentation calibrated to Eastside expectations",
        "Strategic guidance on whether the property's highest value is as a renovated residence or a redevelopment opportunity",
        "Patient communication with homeowners and family members who may be navigating this decision over several months",
      ],
      whyLocal: "Bellevue's downsizing landscape is shaped by the gap between what longtime homeowners remember about the market and what today's Eastside buyers actually pay for. A well-loved Somerset home may need $80,000 in updates to compete with a new-build down the street — or it may be better positioned as a value opportunity. David Stein's appraisal background helps Bellevue homeowners understand exactly where their property stands in a market where pricing precision matters enormously.",
    },
    "valuation-guidance": {
      intro: "In Bellevue's high-value market, accurate property valuation drives every significant decision — from estate settlements and trust distributions to pre-listing pricing strategy. The gap between an automated estimate and a condition-based assessment can be hundreds of thousands of dollars, especially for older Eastside homes competing against extensive new construction. Real Property Planning provides the valuation depth that Bellevue property decisions demand.",
      scenarios: [
        "An estate settlement involving a Bellevue property where beneficiaries need defensible fair market value documentation for distribution calculations",
        "A trust-owned property in West Bellevue or Meydenbauer where the trustee needs valuation guidance that accounts for view premiums and lot value separately from structure value",
        "A Bellevue homeowner considering selling who wants an honest, condition-based assessment before committing to a listing price",
        "A divorce situation involving Eastside property where both parties need a neutral, credentialed valuation perspective",
        "A Crossroads or Wilburton property where redevelopment interest creates a valuation question about highest-and-best use",
      ],
      howWeHelp: [
        "On-site property assessment that evaluates condition, lot characteristics, view factors, and neighborhood context — not just automated comparables",
        "Analysis of Bellevue's submarket pricing differences: how West Bellevue, Bridle Trails, Somerset, and Crossroads each price differently",
        "Written valuation summaries suitable for estate settlement, trust administration, and legal proceedings",
        "Guidance on how deferred maintenance, updates, and property condition affect realistic market positioning on the Eastside",
        "Assessment of redevelopment potential versus residential value for properties in Bellevue's changing neighborhoods",
        "Credentialed perspective that combines licensed broker market knowledge with certified appraiser analytical methodology",
      ],
      whyLocal: "Bellevue's property values are driven by neighborhood-level factors that automated tools consistently miss — the difference between a view lot in Somerset and an interior lot two blocks away, the premium for Bridle Trails equestrian character, the redevelopment pressure in Crossroads and Wilburton. David Stein's dual credentials provide the analytical depth that Bellevue's high-stakes property decisions require.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing an estate, inherited, or longtime home for sale in Bellevue requires understanding what today's Eastside buyers expect — and what they'll actually pay more for. In a market where new construction sets the standard in many neighborhoods, the preparation strategy for an older home can make or break the outcome. Real Property Planning helps Bellevue property owners make smart preparation decisions based on realistic return analysis, not guesswork.",
      scenarios: [
        "A longtime family home in Somerset or Bridle Trails with dated finishes and deferred maintenance that needs strategic preparation to compete with updated Eastside listings",
        "An estate property in West Bellevue where the family needs guidance on whether full renovation, cosmetic updates, or as-is pricing produces the best net outcome",
        "A vacant Bellevue home that requires cleanout of decades of belongings before any preparation work can begin",
        "An inherited home in a redevelopment area where the preparation decision depends on whether the property will sell as a residence or as a lot",
        "A Bellevue property where out-of-state family members need a local coordinator to manage all preparation logistics",
      ],
      howWeHelp: [
        "Return-on-investment analysis for proposed improvements — identifying which updates matter in Bellevue's specific submarket and price range",
        "Coordination of cleanout services, contractor work, landscaping, staging, and photography appropriate for Eastside buyer expectations",
        "Assessment of whether the property should be prepared for residential buyers or positioned for development interest",
        "Management of preparation budgets and timelines to avoid over-investing in updates that won't deliver proportional return",
        "Local vendor coordination with contractors and service providers experienced with Eastside properties and standards",
        "Complete preparation management for out-of-area owners — from initial assessment through listing-ready condition",
      ],
      whyLocal: "Bellevue's buyer expectations are influenced by the extensive new construction and high-end remodels that dominate parts of the Eastside market. Preparing an older home requires understanding which improvements today's Bellevue buyers actually value — updated kitchens and baths matter, but over-improving a $1.2M home with $200K in renovations may not produce proportional return. David Stein's valuation expertise helps sellers invest preparation dollars where they'll have the most impact.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Bellevue often involve significant financial stakes — Eastside home values mean the property is frequently the largest marital asset. Both parties and their attorneys need a broker who can provide objective, defensible valuation and manage the sale with professional discretion in a community where privacy matters. Real Property Planning provides the neutral, credentialed guidance that Bellevue divorce-related sales require.",
      scenarios: [
        "A high-value marital home in West Bellevue or Somerset where the property's worth may be the central financial question in settlement negotiations",
        "A Bellevue property where one spouse wants to sell and the other wants to retain — requiring clear valuation to determine buyout terms",
        "A divorce involving multiple Eastside properties — primary residence and rental or investment property — requiring separate valuation of each",
        "A family law attorney who needs a neutral, credentialed broker to manage a Bellevue property sale with minimal conflict",
        "A situation where the marital home needs preparation and sale during proceedings, with both parties needing regular, transparent communication",
      ],
      howWeHelp: [
        "Objective, condition-based property valuation using certified appraiser methodology — providing a defensible basis for settlement discussions",
        "Neutral communication with both parties and their respective attorneys, maintaining professional boundaries throughout",
        "Sale coordination that works within legal timelines and court requirements for Bellevue properties",
        "Strategic guidance on whether preparation or as-is sale produces the best net outcome for both parties",
        "Discreet marketing and showing management appropriate for Bellevue neighborhoods where privacy is valued",
        "Clear documentation of all pricing rationale, sale terms, and transaction details for legal records",
      ],
      whyLocal: "Bellevue divorce-related sales carry financial stakes that amplify the importance of accurate pricing. A valuation difference of 5% on a $2M Eastside home means $100,000 — enough to meaningfully affect settlement terms. David Stein's certified appraisal credentials provide the objective, analytically rigorous valuation that Bellevue family law cases require, while his brokerage experience ensures the sale itself is managed with the professionalism the situation demands.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property sales in Bellevue carry fiduciary obligations that demand precision — trustees are accountable for demonstrating that the property was sold at fair market value through a reasonable process. In Bellevue's high-value market, this standard requires more than a casual market analysis. Real Property Planning provides the valuation expertise and documented sale process that Bellevue trustees and their advisors need.",
      scenarios: [
        "A successor trustee managing a high-value Bellevue property who needs defensible pricing documentation for beneficiary review",
        "A trust-owned home in Bridle Trails or Somerset where the trustee lives out of state and needs complete local management of the sale",
        "A trust property in a Bellevue redevelopment zone where the trustee must evaluate whether to sell as a residence or pursue development-value pricing",
        "Multiple beneficiaries with different expectations about a Bellevue trust property — requiring transparent, credentialed pricing to establish common ground",
        "A corporate trustee or trust department that needs a reliable Eastside real estate resource with documented methodology",
      ],
      howWeHelp: [
        "Fiduciary-grade property assessment using certified appraisal methodology — providing documentation that meets trust administration standards",
        "Clear analysis of Bellevue's submarket pricing dynamics and how neighborhood, condition, and lot characteristics affect the trust property's realistic value",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the sale process",
        "Preparation and sale coordination that maximizes net proceeds while maintaining fiduciary-appropriate documentation",
        "Regular reporting and status updates that provide trustees with the information they need for trust accounting and beneficiary communication",
        "End-to-end management for out-of-area trustees who need a credentialed local resource on the Eastside",
      ],
      whyLocal: "Trust property sales in Bellevue require pricing that can withstand beneficiary scrutiny and, if necessary, court review. In a market where the difference between neighborhoods can exceed $500,000, generic pricing approaches create fiduciary risk. David Stein's dual credentials provide trustees with the kind of documented, analytically grounded valuation and sale management that Bellevue's high-stakes trust property situations demand.",
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
    "downsizing-services": {
      intro: "Downsizing from a Mercer Island home is a decision shaped by the island's uniquely limited inventory — once you sell, finding another property on the island is difficult. Many island homeowners have lived in their homes for decades, watching values climb while the community around them remained small and private. Real Property Planning helps Mercer Island homeowners evaluate this significant decision with honest valuation, preparation guidance, and a pace that respects the weight of leaving an island home.",
      scenarios: [
        "A longtime Mercer Island homeowner whose lakefront or lake-view property has appreciated enormously but whose maintenance requirements have become unsustainable",
        "An island couple whose children have moved to Seattle or out of state, leaving them in a home designed for a larger family",
        "A Mercer Island homeowner moving to a retirement community on the Eastside who wants to maximize the sale outcome on a home that hasn't been updated in 20 years",
        "A surviving spouse on Mercer Island who needs to transition to a more manageable living situation while navigating the emotional complexity of leaving the family home",
        "An island homeowner considering whether to downsize to a smaller Mercer Island property or leave the island entirely — needing honest analysis of both options",
      ],
      howWeHelp: [
        "Island-specific valuation that accounts for Mercer Island's limited inventory, lakefront premiums, and the unique buyer pool that the island attracts",
        "Honest assessment of preparation decisions — which updates will produce return on an island where buyers expect quality, and which represent over-investment",
        "Coordination with Mercer Island's specific showing and marketing dynamics, including the island's seasonal buyer patterns",
        "Patient guidance for homeowners who may take months to reach a decision about leaving a home with deep personal significance",
        "Sale timeline management that aligns with a move to a smaller residence, Eastside retirement community, or out-of-area relocation",
        "Discreet marketing appropriate for a small community where listing activity is noticed by neighbors",
      ],
      whyLocal: "Mercer Island's downsizing decisions carry a dimension that Eastside mainland properties don't — the island's limited inventory means selling may close the door on island living permanently. David Stein helps Mercer Island homeowners understand their property's realistic market position in a community where every listing is scrutinized, buyer expectations are high, and the emotional stakes of leaving extend beyond the financial transaction.",
    },
    "valuation-guidance": {
      intro: "Mercer Island's limited inventory, lake-influenced premiums, and exclusive residential character make property valuation more nuanced than in most Eastside communities. Whether for estate settlement, trust administration, or a pre-listing assessment, accurate valuation on the island requires on-site evaluation by someone who understands how Mercer Island's specific factors — lake access, view corridors, lot privacy, and I-90 proximity — interact to drive value. Real Property Planning provides this island-level precision.",
      scenarios: [
        "An estate settlement where beneficiaries need defensible fair market value for a Mercer Island property that may include lakefront access or view premiums",
        "A trust administration requiring accurate valuation of an island property with unique characteristics — oversized lot, lake access, or mid-century architectural significance",
        "A Mercer Island homeowner who wants an honest, condition-based assessment before deciding whether to list or hold",
        "A divorce proceeding involving Mercer Island property where both parties need neutral, credentialed valuation",
        "A comparison situation — family members trying to understand whether the island property's value justifies the carrying costs versus selling and reinvesting",
      ],
      howWeHelp: [
        "On-site assessment that evaluates the specific factors driving value on Mercer Island: lake proximity, view quality, lot privacy, mature landscaping, and I-90 access",
        "Analysis of Mercer Island's limited comparable sales — interpreting a small data set accurately rather than extrapolating from broader Eastside trends",
        "Written valuation documentation suitable for estate settlement, trust accounting, and legal proceedings",
        "Guidance on how deferred maintenance and island-specific property characteristics affect realistic market positioning",
        "Credentialed perspective combining island market knowledge with certified appraiser analytical methodology",
        "Confidential communication appropriate for a small community where valuation discussions may have sensitive implications",
      ],
      whyLocal: "Mercer Island's small inventory and island-specific value drivers make automated valuation tools particularly unreliable here. A lakefront property on the east shore may command a different premium than one on the west side — and a home's relationship to I-90 noise, Luther Burbank Park, or the town center affects value in ways that only on-site assessment can capture. David Stein's dual credentials provide the precision that Mercer Island property decisions require.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale on Mercer Island means understanding a buyer pool that expects quality but scrutinizes every listing in a limited-inventory market. Island buyers know the community intimately — they notice condition details that mainland buyers might overlook. Real Property Planning helps Mercer Island homeowners make preparation decisions based on what actually drives value on the island, not generic advice about staging and cosmetic updates.",
      scenarios: [
        "A Mercer Island estate home with deferred maintenance that needs strategic assessment of which improvements are worth the investment for island buyers",
        "A lakefront property requiring specialized preparation — dock assessment, bulkhead evaluation, and waterfront presentation that typical brokers don't coordinate",
        "A longtime island home with decades of accumulated belongings needing professional cleanout before any preparation can begin",
        "An inherited Mercer Island property where the family lives off-island and needs complete local management of preparation logistics",
        "A mid-century home on the island where the decision is whether to update or position as a teardown/renovation opportunity",
      ],
      howWeHelp: [
        "Assessment of which improvements produce measurable return in Mercer Island's specific buyer market — where expectations are high but over-improvement is a real risk",
        "Coordination of cleanout, contractor work, and staging appropriate for the island's discerning buyer pool",
        "Evaluation of lakefront-specific preparation needs: docks, bulkheads, drainage, and waterfront landscaping",
        "Strategic guidance on positioning — renovated residence, value opportunity, or lot-value sale — based on the property's specific characteristics",
        "Management of the full preparation timeline for out-of-area owners with clear progress reporting",
        "Local vendor coordination with contractors experienced on Mercer Island properties",
      ],
      whyLocal: "Mercer Island's preparation decisions are different from mainland Eastside properties. The island's small, scrutinizing buyer pool means presentation matters enormously — but so does the risk of over-investing in updates that don't produce proportional return. David Stein's valuation expertise helps island homeowners invest preparation dollars strategically, understanding which improvements today's island buyers actually value.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales on Mercer Island combine high property values with the privacy considerations of a small, close-knit community. The marital home may be the family's most significant asset, and both parties need a broker who can provide objective, defensible valuation while managing the sale with the discretion that island living demands. Real Property Planning provides the neutral, credentialed approach that Mercer Island divorce situations require.",
      scenarios: [
        "A high-value marital home on Mercer Island where accurate valuation is central to equitable settlement terms",
        "A divorce where one party wants to retain the island home — requiring clear, defensible valuation for buyout calculations",
        "A situation requiring maximum discretion in listing and showing an island property during divorce proceedings",
        "A family law attorney needing a neutral broker with island-specific market knowledge for a Mercer Island property matter",
        "A divorce involving both the island home and other Eastside properties requiring separate, defensible valuations",
      ],
      howWeHelp: [
        "Objective, island-specific property valuation using certified appraiser methodology — defensible for settlement discussions and court review",
        "Neutral communication with both parties and their attorneys, maintaining strict professional boundaries",
        "Discreet marketing and showing management in a small community where listing activity is immediately visible to neighbors",
        "Sale coordination that works within legal timelines while respecting the island's market rhythms",
        "Clear documentation of pricing rationale, comparable analysis, and sale terms for legal records",
        "Professional handling that minimizes community visibility when discretion is a priority",
      ],
      whyLocal: "Mercer Island's small community and high property values create unique dynamics for divorce-related sales. Privacy is difficult to maintain when every new listing is noticed, and valuation accuracy matters enormously when the home may represent $3M or more in marital assets. David Stein's dual credentials provide the objective, defensible pricing that family law cases require, while his experience on the island ensures the sale is managed with appropriate discretion.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property on Mercer Island represents some of the highest-value residential assets in the Pacific Northwest. Trustees managing island property sales face fiduciary obligations that demand precision — defensible pricing, documented process, and transparent communication with beneficiaries who often have strong opinions about property they may have grown up visiting. Real Property Planning provides the island-specific expertise and fiduciary-grade documentation these situations require.",
      scenarios: [
        "A successor trustee managing a high-value Mercer Island property with lakefront access — requiring island-specific valuation that accounts for waterfront premiums",
        "A trust property where multiple beneficiaries have emotional connections to the island home and need transparent, defensible pricing to reach consensus",
        "A corporate trustee managing a Mercer Island asset who needs a credentialed local broker with documented analytical methodology",
        "A trust-owned home that has been vacant or tenant-occupied — requiring assessment, preparation, and sale coordination on the island",
        "A trustee evaluating whether to sell the Mercer Island property now or hold it within the trust — needing honest analysis of current market conditions and carrying costs",
      ],
      howWeHelp: [
        "Fiduciary-appropriate valuation using certified appraisal methodology — producing documentation that meets trust administration standards for island properties",
        "Analysis of Mercer Island's unique pricing factors: lake access, view premiums, lot privacy, limited inventory dynamics",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the process",
        "Preparation coordination appropriate for the island's high-expectation buyer pool",
        "Regular reporting that provides trustees with the documentation they need for trust accounting and beneficiary updates",
        "End-to-end sale management for trustees who may be located off-island or out of state",
      ],
      whyLocal: "Trust property sales on Mercer Island carry elevated scrutiny because the values are significant and the market is small enough that pricing decisions are visible. A trustee who misprices an island property faces questions from beneficiaries who can easily observe comparable sales in a limited-inventory community. David Stein's dual credentials provide the defensible, island-specific analysis that trust administration on Mercer Island requires.",
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
    "downsizing-services": {
      intro: "Downsizing from a Bainbridge Island home means more than selling a house — it means deciding whether to leave an island community with its own rhythm, culture, and lifestyle. Many Bainbridge homeowners chose the island intentionally, and the decision to downsize involves weighing not just property value but ferry-dependent logistics, island community bonds, and the practical realities of maintaining larger rural-premium properties. Real Property Planning helps Bainbridge homeowners navigate this transition with island-specific market insight and patient, thoughtful guidance.",
      scenarios: [
        "A longtime Bainbridge homeowner with acreage near Winslow who wants to simplify but is uncertain whether to downsize on the island or move to the Eastside or Seattle",
        "A retired couple on the island whose waterfront property requires more maintenance than they can manage — but who feel attached to the community and lifestyle",
        "A Bainbridge homeowner whose children have moved to Seattle or the mainland, leaving a large home that no longer serves their daily needs",
        "An island resident moving to a retirement community on the Kitsap Peninsula who needs to coordinate the sale with a ferry-schedule-dependent buyer market",
        "A surviving spouse on Bainbridge who needs to transition from a rural-premium property to something more manageable while maximizing sale proceeds",
      ],
      howWeHelp: [
        "Island-specific valuation that accounts for Bainbridge's premium-rural hybrid market — where acreage, Winslow walkability, and waterfront access create dramatically different value profiles",
        "Assessment of preparation decisions appropriate for Bainbridge's buyer expectations — an audience that values character and community fit alongside condition",
        "Sale timeline coordination that accounts for the island's ferry-dependent showing dynamics and seasonal buyer patterns",
        "Patient communication with homeowners making a difficult lifestyle decision — not just a financial transaction",
        "Coordination of cleanout, preparation, and vendor management for larger island properties with outbuildings, gardens, or acreage",
        "Honest analysis of whether downsizing on the island or relocating to the mainland produces the better financial and lifestyle outcome",
      ],
      whyLocal: "Bainbridge Island downsizing decisions are shaped by the island's unique market dynamics — limited inventory, ferry-dependent buyer traffic, a premium-rural value spectrum, and an intentional community where homes often sell based on lifestyle fit as much as condition. David Stein's island-specific knowledge helps homeowners understand their property's realistic position in this distinctive market, making a difficult transition more manageable.",
    },
    "valuation-guidance": {
      intro: "Bainbridge Island's real estate defies simple valuation — properties range from Winslow village homes to multi-acre rural estates to waterfront properties with private beaches, and automated tools consistently struggle with the island's limited comparable sales and hybrid value drivers. Real Property Planning provides the on-site, island-specific assessment that Bainbridge property decisions require, whether for estate planning, trust administration, or pre-listing strategy.",
      scenarios: [
        "An estate requiring defensible fair market value for a Bainbridge property with acreage, outbuildings, and features that have no close comparables on the island",
        "A trust administration where the trustee needs island-specific valuation that distinguishes between Winslow walkability value and rural-premium lot characteristics",
        "A Bainbridge homeowner considering selling who wants honest, condition-based assessment in a market where online tools are particularly unreliable",
        "A divorce proceeding involving a Bainbridge Island property where the island's limited comparables require credentialed analysis rather than automated estimates",
        "A family evaluating whether to retain or sell a Bainbridge property — needing accurate current value and carrying-cost analysis for the decision",
      ],
      howWeHelp: [
        "On-site property assessment evaluating the factors that drive Bainbridge Island value: ferry proximity, Winslow walkability, acreage, water access, rural character, and views",
        "Analysis of limited comparable sales data — interpreting a small, island-specific data set rather than defaulting to broad Kitsap County averages",
        "Written valuation documentation for estate settlement, trust accounting, legal proceedings, and family decision-making",
        "Assessment of how property condition, deferred maintenance, and island-specific features affect realistic market positioning",
        "Evaluation of highest-and-best-use for properties with acreage, subdivision potential, or mixed-use characteristics",
        "Credentialed perspective that combines island market knowledge with certified appraiser analytical methodology",
      ],
      whyLocal: "Bainbridge Island's limited inventory and premium-rural hybrid character make it one of the most difficult markets in the region for automated valuation. A three-acre property near Battle Point performs differently than a quarter-acre lot in Winslow — and waterfront values vary enormously based on beach access, bulkhead condition, and exposure. David Stein's on-site assessment captures the island-specific details that drive value here.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale on Bainbridge Island means understanding a buyer pool that values the island's character — natural settings, artistic community, rural-premium lifestyle — alongside property condition. Over-preparing for a generic suburban buyer misses what Bainbridge buyers actually want, while under-preparing leaves money on the table. Real Property Planning helps Bainbridge homeowners make smart preparation decisions calibrated to the island's specific market.",
      scenarios: [
        "A larger Bainbridge property with acreage, outbuildings, and gardens that need assessment — some features adding value, others creating maintenance concerns for buyers",
        "An island estate home that's been lovingly maintained but has dated finishes — requiring guidance on which updates matter to today's Bainbridge buyers",
        "An inherited Bainbridge property with decades of accumulated belongings requiring cleanout before any preparation work can begin",
        "A waterfront property needing specialized preparation — dock assessment, bulkhead evaluation, and coastal landscaping considerations",
        "A Winslow-area home where walkability to the ferry and village is a primary value driver — and preparation should emphasize lifestyle rather than just condition",
      ],
      howWeHelp: [
        "Assessment of which improvements serve Bainbridge's specific buyer expectations — buyers drawn to island character rather than cookie-cutter perfection",
        "Coordination of cleanout and preparation for larger island properties including outbuildings, workshops, gardens, and rural features",
        "Evaluation of waterfront-specific preparation needs: docks, bulkheads, shoreline, and marine-exposure considerations",
        "Strategic positioning guidance: character home, updated residence, or rural-premium lifestyle property — based on what the specific property offers",
        "Management of preparation logistics for owners who may be coordinating from Seattle, the Eastside, or out of state",
        "Local vendor coordination with island contractors and service providers who understand Bainbridge's specific property types",
      ],
      whyLocal: "Bainbridge Island buyers choose the island for its character — they're typically not looking for the same finishes as a downtown Bellevue buyer. Preparation decisions need to reflect this: preserving the property's island character while addressing the condition issues that actually affect value. David Stein's experience with Bainbridge properties helps sellers invest in the right improvements rather than generic updates that may not resonate with island buyers.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales on Bainbridge Island involve the additional complexity of a small, close-knit community where privacy is valued and listing activity is immediately visible to neighbors. The island's premium property values mean the marital home often represents a major financial asset, and both parties need a broker who can provide defensible valuation while managing the sale with discretion appropriate for island living. Real Property Planning provides this combination.",
      scenarios: [
        "A divorce involving a significant Bainbridge Island property where the home's value — potentially including waterfront, acreage, or Winslow location premium — is central to settlement terms",
        "A situation where one party wants to remain on the island and needs accurate buyout valuation for a property with limited comparables",
        "A family law attorney who needs a neutral broker with Bainbridge-specific knowledge to manage the property sale alongside ongoing proceedings",
        "A divorce where both parties want maximum discretion in a community where real estate activity is closely observed",
        "A Bainbridge property with unique features — waterfront, acreage, outbuildings — that make valuation more complex than standard residential analysis",
      ],
      howWeHelp: [
        "Island-specific property valuation using certified appraiser methodology — defensible for settlement and court proceedings in a market with limited comparables",
        "Neutral, professional communication with both parties and their attorneys throughout the process",
        "Discreet listing and showing management appropriate for a small island community where privacy matters",
        "Assessment of complex property features — waterfront access, acreage, outbuildings — that affect valuation in divorce settlement calculations",
        "Sale coordination that accounts for Bainbridge's ferry-dependent showing schedules and seasonal market patterns",
        "Clear documentation of all pricing rationale and sale terms for legal records",
      ],
      whyLocal: "Bainbridge Island's small community and limited comparable sales create distinct challenges for divorce-related property valuation. Island properties with unique features — waterfront, acreage, Winslow walkability — require on-site assessment rather than automated estimates, and the small-community dynamics demand a broker who can manage the sale with appropriate discretion. David Stein provides the credentialed objectivity and island familiarity these sensitive situations require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property on Bainbridge Island often represents a significant family asset tied to decades of island living. Trustees managing the sale face fiduciary obligations that demand defensible pricing — challenging in a market with limited comparable sales, premium-rural hybrid values, and property features (acreage, waterfront, outbuildings) that automated tools handle poorly. Real Property Planning provides the island-specific expertise and documented methodology that Bainbridge trust sales require.",
      scenarios: [
        "A successor trustee managing a large Bainbridge property with acreage, waterfront, or rural-premium features that create complex valuation questions",
        "A trust-owned Winslow home where multiple beneficiaries — some with emotional connections to the island — need transparent, defensible pricing to reach agreement",
        "A corporate trustee or trust department needing a credentialed local resource for an island property with no close comparables",
        "A trust property that has been vacant or informally maintained — requiring assessment, preparation, and sale coordination on the island",
        "A trustee evaluating whether the island property's value and carrying costs justify retention versus sale within the trust",
      ],
      howWeHelp: [
        "Fiduciary-grade valuation that accounts for Bainbridge's unique market: limited inventory, ferry-dependent dynamics, and premium-rural value factors",
        "Analysis of complex property characteristics — waterfront access, acreage, outbuildings, subdivision potential — with documented methodology",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the sale process",
        "Preparation coordination appropriate for the island's buyer expectations and property types",
        "Regular reporting for trust accounting and beneficiary communications, with defensible documentation at each stage",
        "Complete sale management for trustees located off-island, on the mainland, or out of state",
      ],
      whyLocal: "Trust property sales on Bainbridge Island require the kind of property-specific analysis that broad market tools cannot provide. The island's limited comparable sales, hybrid value characteristics, and ferry-dependent market rhythms demand on-site assessment by someone with both island knowledge and the analytical credentials that fiduciary documentation requires. David Stein's dual background meets both needs.",
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

    "downsizing-services": {
      intro: "Downsizing from a home in Edmonds means leaving a community defined by walkability, Puget Sound views, and a ferry-connected lifestyle that many residents chose deliberately. Whether leaving a view home in the Bowl, an established neighborhood near the waterfront, or a larger property in the Perrinville or Firdale areas, the sale involves pricing nuances specific to Edmonds. Real Property Planning helps Edmonds homeowners approach this decision with honest market assessment and preparation guidance.",
      scenarios: [
        "A longtime homeowner in the Edmonds Bowl whose Sound and Olympic view home has appreciated significantly but needs preparation to meet current buyer expectations",
        "An empty-nester near downtown Edmonds who wants to stay in south Snohomish County but needs a smaller, more manageable home",
        "A retired couple whose Edmonds home is larger than they need — weighing whether to downsize locally or relocate closer to family in another state",
        "A widowed homeowner in an established Edmonds neighborhood who needs to transition to assisted living while managing the sale of a home with decades of belongings",
        "An Edmonds homeowner whose property includes features — Sound views, ferry proximity, walkable location — that create premium value requiring careful pricing",
      ],
      howWeHelp: [
        "Edmonds-specific valuation accounting for how view quality, Bowl location, ferry proximity, and walkable downtown access affect pricing differently across the city",
        "Honest assessment of which preparation investments produce return in Edmonds' market — where buyers value character and views alongside condition",
        "Sale timeline coordination aligned with a move to a smaller home, retirement community, or out-of-area relocation",
        "Sensitive coordination with homeowners who may need months to sort through decades of belongings and reach a decision",
        "Marketing strategy that emphasizes the lifestyle elements — waterfront walks, ferry access, downtown dining — that make Edmonds properties distinctive",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for Edmonds' buyer expectations",
      ],
      whyLocal: "Edmonds downsizing decisions involve understanding the specific premiums that drive value here — Sound views that vary block by block in the Bowl, walkability to the ferry terminal and downtown, and the small-city sophistication that attracts a buyer pool distinct from nearby Lynnwood or Mountlake Terrace. David Stein's local knowledge helps Edmonds homeowners price accurately in a market where location-specific value drivers make generic comparisons unreliable.",
    },
    "valuation-guidance": {
      intro: "Accurate property valuation in Edmonds requires understanding the city's layered value drivers — Sound and Olympic views that shift dramatically from block to block, the walkability premium near downtown and the ferry terminal, and the community's character as a small coastal city. Real Property Planning provides the on-site, Edmonds-specific assessment these property decisions require.",
      scenarios: [
        "An estate settlement involving an Edmonds view home where the view premium requires on-site assessment rather than automated comparison",
        "A trust-owned property near downtown Edmonds where walkability to the ferry, waterfront, and shops creates location-specific value that generic tools miss",
        "An Edmonds homeowner seeking honest valuation before deciding whether to sell or hold",
        "A divorce proceeding involving Edmonds property where both parties need neutral, defensible valuation of view-driven premiums",
        "A family trying to understand the value difference between two inherited Edmonds properties — one in the Bowl and one in a non-view neighborhood",
      ],
      howWeHelp: [
        "On-site assessment evaluating Edmonds-specific value factors: view quality and orientation, Bowl location, ferry proximity, downtown walkability, and Sound access",
        "Comparison analysis within Edmonds' neighborhoods — understanding why properties three blocks apart may differ by $200,000 or more",
        "Written valuation documentation suitable for estate settlement, trust accounting, and legal proceedings",
        "Assessment of how deferred maintenance and property condition interact with Edmonds' view premiums and location advantages",
        "Credentialed perspective combining Edmonds market knowledge with certified appraiser analytical methodology",
        "Guidance on seasonal market timing and how Edmonds' buyer activity patterns affect optimal listing strategy",
      ],
      whyLocal: "Edmonds is a view-driven market where property values can vary dramatically within a few blocks — a panoramic Sound view in the Bowl commands a substantial premium over an interior lot in the same neighborhood. David Stein's on-site assessment captures the Edmonds-specific factors that actually drive value.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Edmonds means understanding a buyer pool drawn to the city's walkable downtown, Puget Sound views, and small-city character. Edmonds buyers are typically looking for lifestyle — they want the view, the ferry access, the waterfront walks. Real Property Planning helps Edmonds homeowners prepare properties that appeal to what Edmonds buyers actually value.",
      scenarios: [
        "An estate property in the Edmonds Bowl with panoramic views that are its primary selling feature — requiring preparation that showcases views while addressing deferred maintenance",
        "A longtime Edmonds home near the ferry terminal with dated finishes that needs strategic updating for today's buyer expectations",
        "An inherited home with decades of accumulated belongings requiring professional cleanout before the property's character can be properly presented",
        "A waterfront-adjacent property with landscaping, drainage, or marine-exposure considerations that affect preparation priorities",
        "An Edmonds home where the owner lives out of area and needs complete local management of preparation logistics",
      ],
      howWeHelp: [
        "Preparation strategy calibrated to Edmonds' buyer expectations — emphasizing the lifestyle and view elements that draw buyers to the community",
        "Assessment of which updates produce measurable return in Edmonds versus cosmetic changes that don't affect the sale outcome",
        "Coordination of cleanout, contractor work, landscaping, and staging appropriate for Edmonds' market",
        "View optimization — ensuring presentation maximizes the property's Sound, Olympic, and ferry views if applicable",
        "Timeline and budget management that avoids over-investing in improvements that don't produce proportional return in Edmonds' price ranges",
        "Complete preparation management for out-of-area owners with regular progress reporting",
      ],
      whyLocal: "Edmonds properties sell based on a combination of condition, views, and lifestyle proximity — and the relative importance of each factor varies by neighborhood. A Bowl home with a panoramic view can tolerate more deferred maintenance than a non-view property in Firdale. David Stein's Edmonds experience helps sellers invest preparation dollars where they'll actually affect the outcome.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Edmonds combine the financial stakes of a view-driven market with the sensitivity of a small coastal community where listing activity is noticed. Both parties need a broker who can provide objective, defensible valuation — especially for Edmonds properties where view premiums and ferry proximity create value that's difficult to quantify without on-site assessment. Real Property Planning provides the neutral expertise these situations demand.",
      scenarios: [
        "A marital home in the Edmonds Bowl where the Sound view creates premium value that requires credentialed assessment for equitable settlement",
        "A divorce where one party wants to retain the Edmonds home — requiring defensible valuation for buyout calculations in a view-premium market",
        "A family law attorney who needs a neutral broker with Edmonds-specific knowledge for a property where views and location make standard comparisons unreliable",
        "A situation requiring discreet handling in a small coastal community where neighbors quickly notice listing activity",
        "An Edmonds property with mixed features — partial view, walkable location, dated condition — that make valuation more complex than simple comparable analysis",
      ],
      howWeHelp: [
        "Objective, Edmonds-specific property valuation using certified appraiser methodology — defensible for settlement discussions and court proceedings",
        "Assessment of view-driven premiums and location-specific value factors that generic approaches may miss",
        "Neutral communication with both parties and their attorneys, maintaining professional boundaries throughout",
        "Discreet marketing and showing management appropriate for Edmonds' close-knit community",
        "Sale coordination that works within legal timelines while accounting for Edmonds' seasonal buyer patterns",
        "Clear documentation of pricing rationale including view quality, location premiums, and condition analysis",
      ],
      whyLocal: "Edmonds divorce-related valuations are complicated by the city's view-driven market — the difference between a panoramic Sound view and a partial view can represent hundreds of thousands of dollars, and this premium is invisible to automated tools. David Stein provides the defensible, location-specific analysis that Edmonds family law cases require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Edmonds often carries both significant financial value and family significance — many trust properties are longtime homes chosen for their Sound views, walkable downtown access, or ferry-connected lifestyle. Trustees managing the sale need defensible pricing in a market where view premiums require on-site assessment. Real Property Planning provides the Edmonds-specific expertise and documented methodology that trust property sales demand.",
      scenarios: [
        "A successor trustee managing a view home in the Edmonds Bowl where the panoramic Sound views create premium value that standard comparables don't capture",
        "A trust property near downtown Edmonds where walkability to the ferry and waterfront adds location-specific value requiring credentialed assessment",
        "Multiple beneficiaries with different expectations about an Edmonds trust property — needing transparent, defensible pricing to reach consensus",
        "A corporate trustee seeking a credentialed local broker for an Edmonds property with view-driven value characteristics",
        "A trust-owned home that has been vacant or tenant-occupied, requiring assessment and preparation for Edmonds' buyer expectations",
      ],
      howWeHelp: [
        "Fiduciary-appropriate valuation accounting for Edmonds' view premiums, walkability factors, and neighborhood-level pricing differences",
        "Documented analysis methodology suitable for trust accounting, beneficiary review, and fiduciary records",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the process",
        "Preparation coordination that presents the property's Edmonds-specific appeal: views, walkability, community character",
        "Regular reporting providing trustees with documentation for trust administration and beneficiary updates",
        "Complete sale management for trustees located outside the Edmonds area",
      ],
      whyLocal: "Trust property sales in Edmonds require understanding the specific factors that drive value in this view-dependent, walkable coastal market. David Stein's dual credentials provide the defensible, Edmonds-specific analysis that trust administration standards demand.",
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

    "downsizing-services": {
      intro: "Downsizing from a Gig Harbor home means leaving a peninsula lifestyle defined by harbor views, maritime character, and a pace of life that drew many residents here intentionally. Whether moving from a harbor-view home near downtown, a larger property on the peninsula's rural edges, or a waterfront estate along the Narrows, the sale involves Gig Harbor-specific market dynamics that generic approaches miss. Real Property Planning helps peninsula homeowners navigate this transition with locally grounded guidance.",
      scenarios: [
        "A retired couple overlooking Gig Harbor Bay whose waterfront home requires more maintenance than they can manage but whose harbor-view premium demands careful pricing",
        "An empty-nester on the peninsula whose large-lot property is more space than they need — considering whether to stay in Gig Harbor or move closer to family in Tacoma or Seattle",
        "A Gig Harbor homeowner whose property's value is driven by the Narrows Bridge view and proximity to downtown harbor village — features that require local expertise to price accurately",
        "A surviving spouse in a Gig Harbor neighborhood who needs to transition to senior living on the peninsula while coordinating the sale of a home with decades of belongings",
        "A peninsula homeowner with acreage considering whether the property's highest value is as a single-family residence or as a potential subdivision opportunity",
      ],
      howWeHelp: [
        "Peninsula-specific valuation accounting for harbor views, Narrows Bridge proximity, waterfront access, and the distinct pricing differences between Gig Harbor's neighborhoods",
        "Assessment of preparation decisions calibrated to Gig Harbor's buyer expectations — buyers drawn to the peninsula's maritime lifestyle and community character",
        "Sale timeline coordination that accounts for Gig Harbor's seasonal buyer patterns and the Narrows Bridge commuter dynamic",
        "Patient guidance for homeowners making a significant lifestyle decision about leaving the peninsula community",
        "Coordination of cleanout, vendor management, and property preparation for larger peninsula properties",
        "Marketing strategy that emphasizes the peninsula lifestyle elements that make Gig Harbor properties distinctive",
      ],
      whyLocal: "Gig Harbor downsizing decisions involve a market shaped by harbor views, maritime character, and peninsula geography. The value difference between a harbor-view home and an interior-lot property can be dramatic — and the buyer pool for each is distinct. David Stein's peninsula knowledge helps Gig Harbor homeowners understand their property's realistic position in a market that generic Tacoma-area comparisons don't accurately reflect.",
    },
    "valuation-guidance": {
      intro: "Property valuation in Gig Harbor is complicated by the peninsula's maritime character — harbor views, waterfront access, Narrows Bridge proximity, and the distinction between the downtown harbor village and the peninsula's more rural areas all create pricing layers that automated tools handle poorly. Real Property Planning provides the on-site, peninsula-specific assessment that Gig Harbor property decisions require.",
      scenarios: [
        "An estate settlement involving a Gig Harbor harbor-view property where the view premium requires local expertise rather than automated comparison",
        "A trust administration needing accurate valuation of a peninsula property with waterfront access, acreage, or maritime-influenced features",
        "A Gig Harbor homeowner seeking honest, condition-based assessment before deciding whether to list — wanting analysis that reflects the peninsula's specific buyer pool",
        "A divorce proceeding involving a Gig Harbor property where harbor views and waterfront access create valuation complexity",
        "A family evaluating whether to retain or sell an inherited Gig Harbor property — needing current value analysis and carrying-cost perspective",
      ],
      howWeHelp: [
        "On-site assessment evaluating Gig Harbor-specific value factors: harbor views, Narrows proximity, waterfront access, peninsula lot characteristics, and downtown walkability",
        "Analysis of the pricing distinction between Gig Harbor's harbor-village core and the peninsula's more rural properties",
        "Written valuation documentation for estate settlement, trust accounting, and legal proceedings",
        "Assessment of how maritime exposure, bulkhead condition, and waterfront features affect value on the peninsula",
        "Credentialed perspective combining peninsula market knowledge with certified appraiser analytical methodology",
        "Evaluation of seasonal market patterns and optimal timing for peninsula property listings",
      ],
      whyLocal: "Gig Harbor's peninsula geography creates valuation challenges unique to this market — harbor-view premiums, waterfront access variations, and the rural-to-village spectrum within the community. Automated tools consistently miss the distinctions that drive value here. David Stein's on-site assessment captures what peninsula buyers actually pay for.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Gig Harbor means understanding a buyer pool attracted to the peninsula's maritime lifestyle, harbor views, and small-town character. Gig Harbor buyers are looking for community fit and waterfront connection as much as finishes and condition. Real Property Planning helps peninsula homeowners make preparation decisions that reflect what Gig Harbor buyers actually value rather than following a generic suburban preparation playbook.",
      scenarios: [
        "A harbor-view estate property that needs preparation showcasing the view and maritime setting while addressing deferred maintenance from coastal exposure",
        "A larger peninsula property with acreage and outbuildings needing assessment of which features are assets and which create buyer concerns",
        "An inherited Gig Harbor home with decades of belongings requiring professional cleanout before the property's character can be presented",
        "A waterfront property with dock, bulkhead, or shoreline features needing specialized assessment and preparation",
        "A downtown Gig Harbor home where walkability to the harbor, shops, and restaurants is the primary value driver — and preparation should emphasize this lifestyle appeal",
      ],
      howWeHelp: [
        "Preparation strategy calibrated to Gig Harbor's buyer expectations — emphasizing harbor lifestyle, maritime character, and peninsula community appeal",
        "Assessment of which improvements serve the peninsula's buyer pool versus generic updates that may not resonate with harbor-oriented buyers",
        "Coordination of waterfront-specific preparation: dock assessment, bulkhead evaluation, and coastal landscaping",
        "Management of cleanout and contractor coordination for larger peninsula properties with outbuildings and acreage",
        "Budget guidance that focuses preparation investment where it produces measurable return in Gig Harbor's specific market",
        "Complete preparation management for owners coordinating from Tacoma, Seattle, or out of state",
      ],
      whyLocal: "Gig Harbor properties sell based on a combination of harbor character, view quality, and waterfront access — and preparation strategy needs to emphasize these peninsula-specific elements. A harbor-view home with dated finishes may outperform a fully updated interior-lot property if the views are presented well. David Stein's peninsula experience helps sellers invest preparation dollars where they'll actually affect the outcome.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Gig Harbor involve the challenge of valuing peninsula-specific premiums — harbor views, waterfront access, and maritime character — in a market where these features create significant value differences that generic approaches miss. Both parties need a broker who can provide defensible, peninsula-specific valuation while managing the sale with discretion in a community where real estate activity is closely observed. Real Property Planning provides this combination.",
      scenarios: [
        "A marital home overlooking Gig Harbor Bay where the harbor-view premium is central to equitable settlement calculations",
        "A divorce where one spouse wants to remain on the peninsula — requiring defensible valuation for buyout terms in a harbor-view market",
        "A family law attorney needing a neutral broker with peninsula-specific knowledge for a Gig Harbor property matter",
        "A waterfront property with dock and marine features that complicate standard comparable analysis in divorce settlement",
        "A situation requiring discreet handling in a small harbor community where listing activity is immediately noticed",
      ],
      howWeHelp: [
        "Objective, peninsula-specific property valuation using certified appraiser methodology — defensible for settlement discussions and court proceedings",
        "Assessment of harbor-view premiums, waterfront access value, and maritime features that generic approaches may miss",
        "Neutral communication with both parties and their attorneys, maintaining professional boundaries",
        "Discreet marketing and showing management appropriate for Gig Harbor's close-knit harbor community",
        "Sale coordination that works within legal timelines while accounting for the peninsula's seasonal market patterns",
        "Clear documentation of pricing rationale including view quality, waterfront features, and peninsula-specific comparable analysis",
      ],
      whyLocal: "Gig Harbor divorce-related valuations require understanding the peninsula's specific value drivers — harbor views, Narrows Bridge proximity, waterfront access grades, and the maritime lifestyle premium. These factors create valuation complexity that automated tools and broad Pierce County comparisons miss. David Stein provides the peninsula-specific analysis that family law cases involving Gig Harbor property require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Gig Harbor often represents a significant family asset connected to the peninsula's harbor lifestyle. Trustees managing the sale face fiduciary obligations that demand defensible pricing — challenging in a market where harbor views, waterfront access, and maritime character create value premiums that standard tools don't capture. Real Property Planning provides the peninsula-specific expertise and documented methodology that Gig Harbor trust sales require.",
      scenarios: [
        "A successor trustee managing a harbor-view Gig Harbor property where the view premium requires on-site assessment rather than automated comparison",
        "A trust-owned waterfront property with dock, bulkhead, and marine features that create complex valuation questions",
        "Multiple beneficiaries with different expectations about a Gig Harbor trust property — needing transparent, defensible pricing to reach agreement",
        "A corporate trustee seeking a credentialed local resource for a peninsula property with maritime-influenced value characteristics",
        "A trust property that has been vacant or tenant-occupied, requiring assessment and preparation for Gig Harbor's buyer expectations",
      ],
      howWeHelp: [
        "Fiduciary-grade valuation accounting for Gig Harbor's harbor-view premiums, waterfront access, and peninsula-specific pricing dynamics",
        "Analysis of maritime property features — docks, bulkheads, shoreline condition — with documented assessment methodology",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the sale process",
        "Preparation coordination that presents the property's peninsula appeal to Gig Harbor's lifestyle-oriented buyer pool",
        "Regular reporting providing trustees with documentation for trust accounting and beneficiary communications",
        "Complete sale management for trustees located off the peninsula or out of state",
      ],
      whyLocal: "Trust property sales in Gig Harbor require peninsula-specific expertise — harbor-view premiums, waterfront access variations, and maritime features demand on-site assessment by someone with local knowledge and analytical credentials. David Stein's dual background provides the defensible, Gig Harbor-specific documentation that trust administration on the peninsula requires.",
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

    "downsizing-services": {
      intro: "Downsizing from a home in Poulsbo means leaving a community with Scandinavian heritage, Liberty Bay charm, and a small-town waterfront character that many residents value deeply. Whether moving from a home near Viking Avenue, a larger property on the outskirts of town, or a waterfront residence along Liberty Bay, the sale involves Poulsbo-specific market knowledge that broad Kitsap County approaches don't capture. Real Property Planning helps Poulsbo homeowners navigate this decision with community-specific insight.",
      scenarios: [
        "A longtime homeowner near downtown Poulsbo and Viking Avenue whose walkable location and Liberty Bay proximity create distinctive value in the local market",
        "A retired couple on the outskirts of Poulsbo whose larger-lot property with rural characteristics appeals to a different buyer pool than in-town homes",
        "A Poulsbo homeowner moving to a retirement community on the Kitsap Peninsula who wants honest guidance on a home they've lived in for 25+ years",
        "A surviving spouse whose Liberty Bay waterfront property requires specialized valuation that accounts for water access, view quality, and Poulsbo's limited waterfront inventory",
        "An empty-nester weighing whether to downsize within Poulsbo's small-town community or relocate to a larger city with more amenities",
      ],
      howWeHelp: [
        "Community-specific valuation that understands the premiums for Liberty Bay proximity, Viking Avenue walkability, and Poulsbo's Scandinavian-heritage character",
        "Honest assessment of preparation decisions in a market where Poulsbo's buyer pool values community character alongside property condition",
        "Patient guidance for homeowners making a significant decision about leaving a community where personal connections run deep",
        "Sale timeline coordination aligned with a move to senior living, a smaller Kitsap home, or an out-of-area relocation",
        "Coordination of cleanout and preparation for properties that may include rural features, gardens, or outbuildings typical of Poulsbo homes",
        "Marketing that reflects the community appeal — Liberty Bay, Viking Avenue, small-town character — that draws buyers to Poulsbo specifically",
      ],
      whyLocal: "Poulsbo downsizing decisions involve a market driven by community identity — Scandinavian heritage, Liberty Bay waterfront, small-town walkability — factors that create value premiums specific to this community. Broad Kitsap County comparisons undervalue what makes Poulsbo properties distinctive. David Stein's community-specific knowledge helps homeowners understand their property's realistic position in Poulsbo's unique market.",
    },
    "valuation-guidance": {
      intro: "Property valuation in Poulsbo requires understanding a market shaped by community identity — Liberty Bay waterfront premiums, Viking Avenue walkability, Scandinavian-heritage character, and the transition from in-town homes to the more rural properties surrounding the community. Automated tools consistently miss these Poulsbo-specific value drivers. Real Property Planning provides the on-site, community-focused assessment that Poulsbo property decisions require.",
      scenarios: [
        "An estate settlement requiring defensible valuation of a Poulsbo property near Liberty Bay where waterfront proximity drives a significant premium",
        "A trust administration needing assessment of a Poulsbo property with mixed characteristics — walkable location, rural-adjacent lot, or community-specific character features",
        "A homeowner near Viking Avenue who wants honest valuation reflecting the walkability and downtown character premiums specific to Poulsbo",
        "A divorce proceeding involving a Poulsbo property where community-specific value factors require on-site assessment rather than automated estimates",
        "A family evaluating a Poulsbo inheritance — needing to understand how the property's Liberty Bay proximity, lot size, and condition affect realistic market value",
      ],
      howWeHelp: [
        "On-site assessment evaluating Poulsbo-specific value factors: Liberty Bay waterfront proximity, Viking Avenue walkability, community character, and lot characteristics",
        "Analysis of Poulsbo's limited comparable sales — interpreting a small market accurately rather than defaulting to broader Kitsap County averages",
        "Written valuation documentation for estate settlement, trust accounting, and legal proceedings",
        "Assessment of how rural-to-urban transition within the Poulsbo area affects property value and buyer pool",
        "Credentialed perspective combining Poulsbo community knowledge with certified appraiser analytical methodology",
        "Honest guidance on how Poulsbo's seasonal patterns and limited buyer traffic affect timing and pricing strategy",
      ],
      whyLocal: "Poulsbo's small market and community-driven character make automated valuation particularly unreliable. A home near Liberty Bay and Viking Avenue commands a different premium than a similar home on Poulsbo's rural outskirts — and these distinctions require someone who understands the community. David Stein's on-site assessment captures the Poulsbo-specific factors that drive value in this distinctive market.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Poulsbo means understanding a buyer pool drawn to the community's Scandinavian heritage, Liberty Bay charm, and small-town waterfront lifestyle. Poulsbo buyers aren't looking for generic suburban finishes — they want community character, walkability to Viking Avenue, and the quality of life that makes Poulsbo distinctive. Real Property Planning helps Poulsbo homeowners make preparation decisions that align with what local buyers actually value.",
      scenarios: [
        "A longtime Poulsbo home near Viking Avenue with dated finishes but excellent walkability — needing strategic assessment of which updates serve the local buyer pool",
        "A larger property on Poulsbo's rural edges with outbuildings, gardens, or acreage features that may be assets or liabilities depending on buyer preference",
        "An inherited Poulsbo home with decades of accumulated belongings requiring professional cleanout before the property's community charm can be presented",
        "A Liberty Bay waterfront property needing specialized preparation — dock evaluation, shoreline assessment, and presentation that emphasizes the water connection",
        "A Poulsbo home where the family lives out of area and needs a local coordinator to manage all preparation logistics within the community",
      ],
      howWeHelp: [
        "Preparation strategy calibrated to Poulsbo's buyer expectations — emphasizing community character, Liberty Bay lifestyle, and Viking Avenue walkability over generic suburban standards",
        "Assessment of which improvements serve Poulsbo's specific buyer pool versus over-investing in updates that don't resonate with community-oriented buyers",
        "Coordination of cleanout, contractor work, and landscaping for Poulsbo properties that may include rural features alongside in-town character",
        "Waterfront preparation guidance for Liberty Bay properties: dock assessment, shoreline presentation, and marine-exposure considerations",
        "Budget management focused on return — understanding which investments matter in Poulsbo's price ranges and buyer expectations",
        "Complete preparation management for out-of-area owners with local vendor coordination and regular progress updates",
      ],
      whyLocal: "Poulsbo properties sell based on community fit — Scandinavian character, Liberty Bay connection, small-town walkability — and preparation needs to reflect this rather than generic remodeling advice. David Stein's Poulsbo experience helps sellers present their properties in ways that resonate with the buyers specifically drawn to this community.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Poulsbo involve the sensitivity of a small, close-knit community where listing activity is immediately visible to neighbors and friends. Both parties need a broker who can provide objective, defensible valuation of a property whose value may be driven by Poulsbo-specific factors — Liberty Bay proximity, Viking Avenue walkability, community character — while managing the sale with discretion. Real Property Planning provides this locally informed, neutral approach.",
      scenarios: [
        "A marital home near Liberty Bay or downtown Poulsbo where community-specific premiums require local expertise for equitable settlement valuation",
        "A divorce where one party wants to remain in Poulsbo — requiring defensible valuation for buyout calculations in a limited-inventory community",
        "A family law attorney needing a neutral broker who understands Poulsbo's small-market dynamics for a property matter",
        "A situation requiring maximum discretion in a community where neighbors notice every listing and open house",
        "A Poulsbo property with mixed characteristics — in-town walkability combined with rural lot features — that complicate standard valuation approaches",
      ],
      howWeHelp: [
        "Objective, community-specific property valuation using certified appraiser methodology — defensible for settlement discussions and court proceedings",
        "Assessment of Poulsbo-specific value factors that drive premiums: Liberty Bay proximity, Viking Avenue walkability, community character",
        "Neutral communication with both parties and their attorneys, maintaining professional boundaries",
        "Discreet marketing and showing management appropriate for a small community where real estate activity is highly visible",
        "Sale coordination that works within legal timelines while respecting Poulsbo's seasonal buyer patterns",
        "Clear documentation of pricing rationale including community-specific comparable analysis",
      ],
      whyLocal: "Poulsbo divorce-related valuations require someone who understands the community's specific value drivers in a market where comparable sales are limited and every listing is noticed. David Stein provides the defensible, community-specific analysis that family law cases involving Poulsbo property require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Poulsbo often represents a family's deep connection to the Liberty Bay community — a home chosen for Poulsbo's Scandinavian character, waterfront lifestyle, and small-town values. Trustees managing the sale face fiduciary obligations that demand defensible pricing in a limited-inventory market where community-specific value drivers require local expertise. Real Property Planning provides the Poulsbo-focused methodology and documentation these trust sales require.",
      scenarios: [
        "A successor trustee managing a property near Liberty Bay where Poulsbo's waterfront premiums and limited inventory create complex valuation questions",
        "A trust-owned home near Viking Avenue where the community's walkability, character, and Scandinavian heritage contribute to location-specific value",
        "Multiple beneficiaries with emotional connections to a Poulsbo family home who need transparent, defensible pricing to reach consensus",
        "A corporate trustee needing a credentialed local resource in a small market where standard comparable analysis may be insufficient",
        "A trust property on Poulsbo's rural outskirts with acreage and features that require specialized assessment beyond standard residential valuation",
      ],
      howWeHelp: [
        "Fiduciary-appropriate valuation accounting for Poulsbo's community-specific premiums: Liberty Bay proximity, Viking Avenue walkability, Scandinavian heritage character",
        "Analysis of limited comparable sales with documented methodology appropriate for trust administration standards",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the process",
        "Preparation coordination that presents the property's Poulsbo community appeal to the right buyer pool",
        "Regular reporting providing trustees with documentation for trust accounting and beneficiary communications",
        "Complete sale management for trustees located outside the Poulsbo community or out of state",
      ],
      whyLocal: "Trust property sales in Poulsbo require community-specific expertise. Liberty Bay premiums, Viking Avenue walkability, and Poulsbo's distinctive character create value that broad Kitsap County analysis doesn't capture — and trustees need defensible documentation that reflects these local realities. David Stein's dual credentials provide the analytical rigor and community knowledge that Poulsbo trust administration requires.",
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

    "downsizing-services": {
      intro: "Downsizing in Seattle means navigating more than 80 neighborhoods — each with distinct pricing, buyer expectations, and lifestyle character. A longtime home in Wallingford presents entirely different downsizing considerations than one in West Seattle or Beacon Hill. Real Property Planning helps Seattle homeowners evaluate their options with neighborhood-level market insight and honest guidance on preparation, pricing, and timing in the city's complex market.",
      scenarios: [
        "A longtime homeowner in Wedgwood or View Ridge whose mid-century home has appreciated dramatically but competes against extensive remodels and new construction in the same neighborhood",
        "An empty-nester in Queen Anne or Magnolia weighing whether to downsize to a condo in the same neighborhood or leave the city entirely",
        "A Seattle homeowner whose property sits in a neighborhood experiencing rapid zoning changes — creating a decision about whether the home's highest value is as a residence or a development site",
        "A retired couple in West Seattle whose home value is influenced by the neighborhood's bridge-access dynamics and specific buyer pool",
        "A Capitol Hill or Central District homeowner considering downsizing from a vintage home — needing guidance on how neighborhood character and density affect pricing",
      ],
      howWeHelp: [
        "Neighborhood-level valuation across Seattle's diverse market — understanding how Ballard, Beacon Hill, Queen Anne, and West Seattle each price differently for comparable homes",
        "Assessment of whether the property's highest value is as a residence, a renovation opportunity, or a development lot — a common question in Seattle's changing zoning landscape",
        "Honest guidance on which preparation investments produce return in the specific neighborhood and price range",
        "Sale timeline coordination aligned with a move to a smaller home, condo, retirement community, or out-of-area relocation",
        "Vendor coordination for cleanout, contractor work, and presentation across Seattle's varied property types — from vintage homes to mid-century ramblers to condos",
        "Patient communication with homeowners and families navigating an emotional decision in a fast-paced market",
      ],
      whyLocal: "Seattle's downsizing landscape is complicated by the city's neighborhood diversity and rapid change. A home in Wallingford faces different buyer expectations than one in Columbia City — and zoning changes may mean the property's highest value isn't as a residence at all. David Stein's experience across Seattle's 80+ neighborhoods helps homeowners understand their specific situation rather than relying on citywide averages.",
    },
    "valuation-guidance": {
      intro: "Property values in Seattle can vary by hundreds of thousands of dollars within a few blocks — driven by neighborhood trajectory, view corridors, zoning potential, property type, and condition. Automated tools that rely on citywide averages consistently miss these hyperlocal dynamics. Real Property Planning provides the neighborhood-level, condition-based assessment that Seattle property decisions demand, whether for estate settlement, trust administration, or pre-listing strategy.",
      scenarios: [
        "An estate settlement where beneficiaries need defensible fair market value for a Seattle property in a neighborhood with rapid price changes and limited recent comparables",
        "A trust administration requiring valuation of a Seattle property with ADU potential, rental income, or zoning characteristics that affect highest-and-best-use analysis",
        "A Seattle homeowner who wants an honest assessment that accounts for their specific neighborhood's trajectory — not just what Zillow says about the zip code",
        "A divorce proceeding involving Seattle property where the home's value is complicated by ADU income, lot development potential, or neighborhood-specific premiums",
        "A family evaluating an inherited Seattle property — needing to understand whether the structure value or the lot value drives the optimal sale strategy",
      ],
      howWeHelp: [
        "Neighborhood-specific assessment across Seattle's market — evaluating the micro-market dynamics that drive value on a block-by-block basis",
        "Analysis of development potential, zoning implications, and highest-and-best-use for properties in Seattle's changing neighborhoods",
        "Written valuation documentation suitable for estate settlement, trust accounting, and legal proceedings across Seattle's diverse property types",
        "Assessment of rental income, ADU potential, and investment characteristics for properties with income-generating features",
        "Credentialed perspective combining deep Seattle market knowledge with certified appraiser analytical methodology",
        "Property-type versatility: single-family, condo, townhome, duplex, and mixed-use — each requiring different valuation approaches",
      ],
      whyLocal: "Seattle's market complexity makes automated valuation particularly risky. A mid-century rambler in Ravenna may be valued primarily as a lot in one micro-market and primarily as a home in the next — and the difference can exceed $200,000. David Stein's dual credentials and experience across Seattle's neighborhoods provide the property-specific analysis these high-stakes decisions require.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Seattle varies dramatically by neighborhood, property type, and buyer demographic. A vintage Craftsman in Wallingford needs a different preparation approach than a mid-century rambler in Lake City or a condo in Belltown. Real Property Planning helps Seattle homeowners make preparation decisions based on what buyers in their specific neighborhood actually value — not generic staging advice that ignores the city's market diversity.",
      scenarios: [
        "A vintage Seattle home in Ballard or Phinney Ridge where the character is part of the appeal but deferred maintenance needs strategic attention",
        "An estate property in Rainier Beach or South Seattle where the preparation budget needs to be carefully allocated to maximize return in the neighborhood's price range",
        "A Capitol Hill or Central District property where density, property type, and neighborhood trajectory create unique preparation considerations",
        "A Seattle home with ADU or rental potential where preparation strategy needs to account for both owner-occupant and investor buyer pools",
        "A property where the owner lives out of state and needs complete local management of cleanout, vendor coordination, and presentation in Seattle's fast-paced market",
      ],
      howWeHelp: [
        "Neighborhood-calibrated preparation strategy — understanding what Magnolia buyers expect versus what Columbia City buyers value versus what Beacon Hill buyers prioritize",
        "Return-on-investment analysis specific to the property's neighborhood and price range — avoiding over-investment in updates that don't produce proportional return",
        "Coordination of cleanout, contractor work, staging, and photography across Seattle's diverse property types",
        "Assessment of whether the property should be prepared for residential buyers, investors, or development interest — based on specific neighborhood dynamics",
        "Management of Seattle's contractor scheduling and vendor coordination in a market where trades are in high demand",
        "Complete preparation management for out-of-area owners navigating Seattle's fast-moving market remotely",
      ],
      whyLocal: "Seattle's preparation decisions vary enormously by neighborhood — what works in Laurelhurst doesn't necessarily apply in Georgetown. A $30,000 kitchen update in a $600,000 Rainier Valley home has different return implications than the same investment in a $1.5M Magnolia home. David Stein's neighborhood-level expertise helps Seattle sellers invest preparation dollars where they'll actually affect the outcome.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Seattle are complicated by the city's market complexity — the marital home's value may be influenced by neighborhood trajectory, development potential, ADU income, or zoning changes that generic valuation approaches miss entirely. Both parties need a broker who can navigate Seattle's diverse neighborhoods with objective, defensible analysis. Real Property Planning provides the credentialed neutrality and neighborhood expertise that Seattle divorce-related sales demand.",
      scenarios: [
        "A marital home in a rapidly appreciating Seattle neighborhood where the property's current value reflects neighborhood trajectory as much as the home itself",
        "A divorce involving a Seattle property with rental income, ADU, or development potential that complicates standard residential valuation",
        "A Capitol Hill or Queen Anne home where the property type — vintage home, condo, townhome — requires neighborhood-specific comparable analysis",
        "A family law attorney needing a neutral broker who can credibly value Seattle property across the city's diverse neighborhoods and property types",
        "A situation involving multiple Seattle properties — primary residence and investment property — requiring separate, defensible valuations",
      ],
      howWeHelp: [
        "Objective, neighborhood-specific property valuation using certified appraiser methodology — defensible for settlement discussions and court proceedings across Seattle's diverse market",
        "Analysis of development potential, ADU income, and zoning implications that affect property value in divorce settlement calculations",
        "Neutral communication with both parties and their attorneys, maintaining professional boundaries",
        "Property-type expertise spanning single-family homes, condos, townhomes, and mixed-use — each common in Seattle divorce situations",
        "Sale coordination that works within legal timelines while navigating Seattle's fast-paced market dynamics",
        "Clear documentation of pricing rationale including neighborhood analysis, comparable selection methodology, and condition assessment",
      ],
      whyLocal: "Seattle divorce-related valuations are complicated by the city's market diversity — a property in Ballard raises different valuation questions than one in Beacon Hill or West Seattle. Development potential, rental income, ADU capacity, and zoning changes can significantly affect settlement calculations. David Stein provides the versatile, neighborhood-specific analysis that Seattle family law cases require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Seattle spans the city's full range — from vintage homes in established neighborhoods to condos in dense urban areas to properties with development potential in changing markets. Trustees face fiduciary obligations that demand defensible pricing across this diversity. Real Property Planning provides the neighborhood-level expertise and documented methodology that Seattle trust property sales require, regardless of property type or location within the city.",
      scenarios: [
        "A successor trustee managing a Seattle property in a rapidly changing neighborhood where current value may reflect development potential as much as residential use",
        "A trust-owned vintage home in Wallingford or Ravenna where the character of the property requires specialized marketing and pricing approach",
        "Multiple beneficiaries with different expectations about a Seattle trust property — needing transparent, neighborhood-specific pricing to reach consensus",
        "A trust holding multiple Seattle properties of different types — single-family, condo, rental — each requiring separate valuation and sale strategy",
        "A corporate trustee seeking a credentialed Seattle resource capable of handling the city's diverse property types and neighborhood dynamics",
      ],
      howWeHelp: [
        "Fiduciary-grade valuation across Seattle's diverse neighborhoods and property types — with documented methodology suitable for trust administration",
        "Analysis of highest-and-best-use including development potential, zoning implications, and rental income for Seattle trust properties",
        "Transparent communication with trustees, beneficiaries, and estate attorneys across potentially complex multi-property trust situations",
        "Neighborhood-calibrated preparation and marketing strategy — presenting each property to the buyer pool most appropriate for its location and type",
        "Regular reporting and documentation for trust accounting and beneficiary communications",
        "End-to-end management across the city for trustees who may be located anywhere in the country",
      ],
      whyLocal: "Trust property sales in Seattle require versatile expertise — the city's 80+ neighborhoods, diverse property types, and rapidly changing zoning landscape create valuation challenges that demand both local knowledge and analytical rigor. David Stein's dual credentials provide trustees with defensible, neighborhood-specific analysis regardless of where in Seattle the trust property is located.",
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

    "downsizing-services": {
      intro: "Downsizing in Tacoma means navigating a city where neighborhood values are shifting rapidly — the North End, Stadium District, and waterfront have appreciated significantly, while other areas offer different value dynamics. For longtime Tacoma homeowners, understanding where their property sits in this evolving landscape is essential for making sound downsizing decisions. Real Property Planning helps Tacoma homeowners approach this transition with honest, neighborhood-specific guidance.",
      scenarios: [
        "A longtime homeowner in Tacoma's North End — Proctor, Old Town, or Stadium District — whose property has appreciated substantially during the city's revitalization",
        "A retired couple in a Tacoma neighborhood experiencing rapid value changes who want to understand their home's realistic current market position before deciding to sell",
        "A Tacoma homeowner whose property may have mixed-use or rental potential that could affect the optimal strategy — sell as a residence, or position for investor interest",
        "A surviving spouse in an established Tacoma neighborhood who needs to transition to a more manageable living situation while maximizing sale proceeds",
        "An empty-nester in Tacoma weighing whether to downsize within the city — taking advantage of its more affordable options — or move closer to family in Seattle or on the Eastside",
      ],
      howWeHelp: [
        "Neighborhood-level valuation reflecting Tacoma's evolving market — understanding how the North End, Hilltop, waterfront, and South Tacoma each price differently today versus even two years ago",
        "Assessment of whether the property's highest value is as a residence, a rental-income property, or a development opportunity in Tacoma's changing neighborhoods",
        "Honest guidance on preparation decisions calibrated to what Tacoma's buyers in the specific neighborhood and price range actually value",
        "Sale timeline coordination aligned with a move to a smaller home, retirement community, or relocation to another city",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for the specific Tacoma neighborhood's buyer expectations",
        "Patient communication with homeowners navigating an emotional transition in a city where familiar neighborhoods may feel different than they remember",
      ],
      whyLocal: "Tacoma's downsizing landscape is shaped by the city's rapid revitalization — neighborhoods that were stable and affordable five years ago may have appreciated dramatically, while others present different value dynamics. A North End home faces different buyer expectations than one in South Tacoma or Parkland. David Stein's Tacoma-specific experience helps homeowners understand their property's realistic position in this evolving market.",
    },
    "valuation-guidance": {
      intro: "Property valuation in Tacoma reflects a city in transition — neighborhoods like the Stadium District and Hilltop are revitalizing rapidly, while other areas maintain different pricing dynamics. Automated tools that rely on citywide averages miss the neighborhood-level value shifts that define Tacoma's current market. Real Property Planning provides the on-site, neighborhood-specific assessment that Tacoma property decisions require.",
      scenarios: [
        "An estate settlement requiring defensible valuation of a Tacoma property in a revitalizing neighborhood where recent comparables may not reflect the property's specific condition and location",
        "A trust administration needing assessment of a Tacoma property with rental income potential, duplex configuration, or mixed-use characteristics",
        "A Tacoma homeowner who wants honest valuation reflecting their specific neighborhood's trajectory — not just a citywide average that may overstate or understate their property's position",
        "A divorce proceeding involving Tacoma property where neighborhood revitalization trends affect the property's value differently than historical comparisons suggest",
        "A family evaluating an inherited Tacoma property — needing to understand whether the home's value, the lot's development potential, or rental income drives the optimal strategy",
      ],
      howWeHelp: [
        "Neighborhood-specific assessment across Tacoma's diverse market — evaluating how revitalization trends, buyer demographics, and property type affect value in each area",
        "Analysis of rental income potential, duplex or ADU feasibility, and development interest in Tacoma's evolving neighborhoods",
        "Written valuation documentation for estate settlement, trust accounting, and legal proceedings",
        "Assessment of how Tacoma's neighborhood trajectory and revitalization dynamics affect forward-looking pricing strategy",
        "Credentialed perspective combining Tacoma market knowledge with certified appraiser analytical methodology",
        "Evaluation of mixed-use and multi-unit property characteristics common in Tacoma's older neighborhoods",
      ],
      whyLocal: "Tacoma's property values are being reshaped by revitalization — the Stadium District and North End command premiums that didn't exist a decade ago, while Hilltop and other neighborhoods are in different stages of transition. Automated tools struggle with this rate of change. David Stein's on-site assessment captures the neighborhood-level dynamics that actually drive value in Tacoma today.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Tacoma varies significantly by neighborhood — what North End and Stadium District buyers expect differs markedly from buyer expectations in South Tacoma, East Tacoma, or the waterfront areas. Tacoma's diversity of housing stock — Craftsmen, Tudor revivals, mid-century homes, and industrial conversions — means preparation strategy must be calibrated to the specific property and its neighborhood context. Real Property Planning provides this Tacoma-specific preparation guidance.",
      scenarios: [
        "A North End Craftsman with character and charm that's part of the appeal — needing strategic attention to deferred maintenance without losing the historic character that Tacoma buyers value",
        "An estate property in a revitalizing Tacoma neighborhood where preparation decisions depend on whether the target buyer is an owner-occupant, an investor, or a developer",
        "A longtime Tacoma home with decades of accumulated belongings requiring professional cleanout before the property can be assessed and prepared",
        "A Stadium District or Old Town property where proximity to restaurants, waterfront, and cultural amenities is the primary value driver — and preparation should emphasize lifestyle",
        "A Tacoma property where the owner lives in Seattle or out of state and needs complete local management of preparation logistics",
      ],
      howWeHelp: [
        "Neighborhood-calibrated preparation strategy — understanding what North End buyers, waterfront buyers, and emerging-neighborhood buyers each prioritize in Tacoma",
        "Assessment of whether the property should be prepared for owner-occupants, investors, or developers — a common question in Tacoma's transitional neighborhoods",
        "Return-on-investment analysis specific to the property's Tacoma neighborhood and price range — where over-improving is a real risk in some areas and under-preparing a missed opportunity in others",
        "Coordination of cleanout, contractor work, and presentation across Tacoma's varied housing stock",
        "Character preservation for historic Tacoma homes where buyers value original features alongside updated systems",
        "Complete preparation management for out-of-area owners with regular progress reporting",
      ],
      whyLocal: "Tacoma's preparation decisions depend on the neighborhood's current buyer profile — a $40,000 renovation in a North End home has different return implications than the same investment in South Tacoma. David Stein's Tacoma experience helps sellers allocate preparation budgets based on what actually moves the needle in their specific neighborhood and price range.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Tacoma are complicated by the city's rapid neighborhood-level value changes — a property's worth may be significantly affected by revitalization trends, rental income potential, or development interest that standard approaches don't capture. Both parties need a broker who understands Tacoma's evolving market with enough depth to provide defensible, neighborhood-specific valuation. Real Property Planning provides this expertise with professional neutrality.",
      scenarios: [
        "A marital home in Tacoma's North End or Stadium District where recent neighborhood appreciation creates valuation questions about current versus historical value",
        "A divorce involving a Tacoma property with rental income, duplex configuration, or ADU potential that complicates standard residential valuation",
        "A family law attorney needing a neutral broker who can credibly value Tacoma property in neighborhoods where values are shifting rapidly",
        "A situation involving a Tacoma property where one party believes the neighborhood's revitalization trajectory justifies a higher valuation than current comparables support",
        "A divorce-related sale in a Tacoma neighborhood where buyer profile diversity — owner-occupants, investors, developers — affects pricing strategy",
      ],
      howWeHelp: [
        "Objective, neighborhood-specific property valuation using certified appraiser methodology — defensible for settlement discussions and Pierce County court proceedings",
        "Analysis of rental income, development potential, and mixed-use characteristics that may affect Tacoma property value in divorce settlement calculations",
        "Neutral communication with both parties and their attorneys, maintaining professional boundaries",
        "Assessment of how Tacoma's revitalization dynamics affect forward-looking property value for settlement purposes",
        "Sale coordination that works within legal timelines while navigating Tacoma's neighborhood-specific buyer pools",
        "Clear documentation of pricing rationale including neighborhood trajectory analysis and comparable selection methodology",
      ],
      whyLocal: "Tacoma divorce-related valuations are complicated by the city's rapid evolution — a North End property may have appreciated 40% in five years while a South Tacoma home followed a different trajectory. These neighborhood-level dynamics affect settlement calculations significantly. David Stein provides the current, Tacoma-specific analysis that family law cases in Pierce County require.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Tacoma spans the city's full range — from established North End homes to properties in revitalizing neighborhoods to multi-unit or mixed-use assets in the city's diverse housing stock. Trustees face fiduciary obligations that demand defensible pricing in a market where neighborhood-level dynamics are shifting rapidly. Real Property Planning provides the Tacoma-specific expertise and documented methodology that trust property sales in this evolving market require.",
      scenarios: [
        "A successor trustee managing a Tacoma North End property where recent neighborhood appreciation creates questions about appropriate pricing methodology",
        "A trust-owned property in a revitalizing Tacoma neighborhood where the trustee must evaluate whether to sell now or wait — needing current market analysis and trajectory assessment",
        "Multiple beneficiaries with different expectations about a Tacoma trust property — needing transparent, neighborhood-specific pricing to reach agreement",
        "A trust holding a Tacoma property with rental income or development potential that affects the optimal sale strategy and fiduciary pricing approach",
        "A corporate trustee seeking a credentialed Tacoma resource who understands the city's diverse neighborhoods and evolving market dynamics",
      ],
      howWeHelp: [
        "Fiduciary-grade valuation accounting for Tacoma's neighborhood-level market evolution — the North End, waterfront, Hilltop, and South Tacoma each require different analytical approaches",
        "Analysis of rental income, mixed-use potential, and development interest for trust properties in Tacoma's transitional neighborhoods",
        "Transparent communication with trustees, beneficiaries, and estate attorneys throughout the sale process",
        "Neighborhood-appropriate preparation and marketing strategy — presenting the property to the buyer pool most likely to deliver optimal proceeds",
        "Regular reporting and documentation for trust accounting and beneficiary communications",
        "Complete sale management for trustees located outside the Tacoma-Pierce County area",
      ],
      whyLocal: "Trust property sales in Tacoma require understanding of a market in transition. The fiduciary standard demands pricing that reflects current neighborhood dynamics — not historical patterns that may no longer apply. David Stein's Tacoma experience and analytical credentials provide trustees with the defensible, neighborhood-current documentation that Pierce County trust administration requires.",
    },

  },

  // ═══════════════════════════════════════════════════════════════════
  // SMALLTOWN TONE — Snohomish (only smalltown city in Tier 1)
  // Identity: "Antique Capital of the Northwest," historic downtown,
  // acreage properties, outbuildings, rural-adjacent character
  // ═══════════════════════════════════════════════════════════════════

  snohomish: {
    "probate-estate-sales": {
      intro: "Snohomish's real estate includes historic homes near the downtown antique district, farmhouse-style properties with outbuildings, and acreage parcels along the Pilchuck and Snohomish River corridors. Probate and estate sales here often involve properties with features — land, barns, older construction, deferred maintenance — that standard suburban pricing models don't capture well. Real Property Planning brings the property-specific assessment that executors and families need for Snohomish's distinctive inventory.",
      scenarios: [
        "An inherited farmhouse on several acres outside Snohomish where the land, outbuildings, and home each need separate valuation consideration",
        "A probate property in historic downtown Snohomish where the home's character and walkability to First Street create value that standard comparables miss",
        "Multiple heirs disagreeing on whether to sell a Snohomish acreage property as-is or invest in repairs — needing objective guidance on what the market actually rewards",
        "An estate with a Snohomish property that includes shop buildings, fenced pasture, or other rural features that affect both value and buyer pool",
        "A family managing probate from out of state for a longtime Snohomish home that hasn't been updated in decades and contains a lifetime of belongings",
      ],
      whyLocal: "Snohomish properties often include features — acreage, barns, shop buildings, historic construction, river access — that don't appear in standard suburban comparables. The difference between a well-positioned Snohomish estate sale and a poorly priced one often comes down to understanding which rural and historic features add value in this specific market. David Stein's appraisal background and experience with properties across the Snohomish Valley provides the grounded assessment these situations require.",
    },
    "senior-transitions": {
      intro: "Seniors in Snohomish often live in homes they've owned for decades — properties with gardens, workshops, and the kind of accumulated living that comes with longtime small-town homeownership. Transitioning from a Snohomish home involves practical challenges around property preparation, realistic pricing for homes that may not match modern buyer expectations, and the emotional weight of leaving a community where relationships run deep.",
      scenarios: [
        "A longtime Snohomish homeowner moving to assisted living in Everett or Marysville while managing the sale of a home with decades of belongings, workshop items, and garden features",
        "An adult child helping a parent leave a Snohomish acreage property that's become too much to maintain — coordinating the sale from Seattle or out of state",
        "A retired couple in Snohomish whose home needs meaningful updates before it can compete with newer construction — needing guidance on what to fix and what to leave",
        "A senior transitioning from a historic downtown Snohomish home where the property's character is its main asset but deferred maintenance creates pricing questions",
      ],
      whyLocal: "Snohomish seniors often own properties with features — workshops, gardens, acreage, outbuildings — that represent decades of personal investment but don't always translate directly to market value. Understanding which features Snohomish buyers actually pay premiums for helps families set realistic expectations and avoid costly over-improvement before sale.",
    },
    "executor-support": {
      intro: "Executors managing Snohomish estates often face properties with rural characteristics, deferred maintenance, and accumulated belongings that suburban-focused agents aren't equipped to handle. Real Property Planning provides the property-specific guidance executors need for Snohomish's distinctive housing stock — from historic downtown homes to acreage properties with outbuildings.",
      scenarios: [
        "An out-of-state executor managing a Snohomish acreage property with a home, shop buildings, and years of accumulated tools and equipment",
        "An executor dealing with a historic Snohomish home that has character and location appeal but needs assessment of what deferred maintenance items affect value",
        "Multiple co-executors with different opinions about a Snohomish property's value — needing objective, defensible pricing grounded in local market data",
        "An executor responsible for a Snohomish property where the personal property may have significant value requiring separate handling",
      ],
      whyLocal: "Snohomish estates frequently include property types — acreage with outbuildings, historic homes, properties with agricultural features — where the executor's biggest risk is mispricing due to unfamiliarity with how rural and small-town features affect value. David Stein's appraisal credentials and experience with Snohomish Valley properties provide the defensible foundation executors need.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries handling Snohomish property matters need a real estate resource who understands the community's distinctive inventory — historic homes, acreage parcels, properties with outbuildings and rural features that complicate standard valuation. Real Property Planning provides the documentation-grade analysis these situations require.",
      scenarios: [
        "A probate attorney managing a Snohomish estate where acreage, outbuildings, and rural features require specialized valuation beyond standard residential comparables",
        "A trust administrator responsible for Snohomish property where the historic character and small-town location create pricing complexity",
        "An elder law attorney coordinating a client's Snohomish property sale alongside a transition to care facilities in Everett or Marysville",
        "A family law attorney handling a Snohomish divorce where the property includes acreage, shop buildings, or agricultural features that affect equitable distribution",
      ],
      whyLocal: "Snohomish property matters often involve features — land, outbuildings, historic construction, rural zoning — that standard residential valuation approaches handle poorly. Attorneys and fiduciaries need a real estate professional who can provide defensible pricing rationale for properties where the comparable sales pool is limited.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Snohomish home often means leaving a property with space, character, and features — acreage, workshops, gardens — that won't be replicated in a smaller home. Real Property Planning helps Snohomish homeowners understand what their property is actually worth in today's market and make practical decisions about preparation and timing.",
      scenarios: [
        "A Snohomish homeowner with a large shop building and acreage who needs to understand whether those features add enough value to justify the property's maintenance burden",
        "A couple moving from a historic downtown Snohomish home to a smaller place in Marysville or Lake Stevens — needing realistic pricing for a character property",
        "A homeowner whose Snohomish property has extensive gardens and outdoor features that represent personal investment but may not translate to market premium",
        "A family helping a relative downsize from a rural Snohomish property where the cleanout involves workshop equipment, outdoor items, and decades of accumulated belongings",
      ],
      whyLocal: "Snohomish downsizers often overestimate the market value of features they personally invested in — workshops, gardens, outbuildings, fencing — while underestimating the appeal of the property's location and small-town character. David Stein's local knowledge helps set realistic expectations about what Snohomish buyers actually pay for.",
    },
    "valuation-guidance": {
      intro: "Snohomish properties frequently include features — acreage, outbuildings, historic construction, river proximity — that automated valuation tools handle poorly. Real Property Planning provides the property-specific assessment needed when standard comparables don't capture what makes a Snohomish property unique.",
      scenarios: [
        "An inherited property outside Snohomish where the acreage and outbuildings make standard automated valuations unreliable",
        "A historic downtown Snohomish home where the walkability to First Street and architectural character create value that neighborhood averages miss",
        "A property along the Pilchuck or Snohomish River where water proximity, flood zone status, and access all affect valuation differently",
        "A Snohomish property with a large shop building or barn where the improvement's value depends on its condition, permits, and the buyer pool it attracts",
      ],
      whyLocal: "In Snohomish, the difference between accurate and inaccurate property valuation often comes down to understanding rural and small-town features that don't appear in standard comparable analyses. Acreage increments, outbuilding quality, historic designation, and proximity to the downtown antique district all affect value in ways that require local expertise.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Snohomish home for sale often involves challenges that suburban properties don't present — outbuilding cleanouts, acreage maintenance, addressing deferred repairs on older construction, and deciding which character features to preserve versus update.",
      scenarios: [
        "A Snohomish estate property with a large shop building full of tools and equipment that needs organized cleanout before the property can be shown",
        "A historic home near downtown Snohomish where preserving character features matters more than full modernization for the likely buyer pool",
        "An acreage property where the landscaping, fencing, and outbuildings need selective attention — not everything needs to be perfect, but neglect affects first impressions",
        "A longtime family home in Snohomish where decades of accumulation require professional cleanout coordination before any preparation work can begin",
      ],
      whyLocal: "Snohomish buyers often seek the community's character — historic homes, space, rural feeling — but they still expect functional systems and reasonable maintenance. The preparation balance is different here than in suburban markets: preserving authentic character while addressing the maintenance items that actually affect value.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property decisions in Snohomish often involve homes with features — acreage, outbuildings, workshops, historic character — that make equitable valuation more complex than standard residential divisions.",
      scenarios: [
        "A Snohomish property with acreage and outbuildings where each spouse values different features — the shop, the garden, the land — making equitable division complex",
        "A historic downtown Snohomish home where the character and location create value that one spouse may not fully appreciate in settlement discussions",
        "A rural Snohomish property where improvements made during the marriage need objective valuation for fair division",
        "A divorce involving a Snohomish property where one spouse wants to keep the home but needs realistic assessment of buyout costs",
      ],
      whyLocal: "Snohomish divorce property situations often involve features — land, outbuildings, agricultural improvements — where both spouses may have invested significantly but the market values those improvements differently than the personal investment suggests. Objective, locally grounded valuation prevents settlement disputes rooted in emotional attachment.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-held properties in Snohomish often include longtime family homes with acreage, rural features, and deferred maintenance that require careful fiduciary handling. Real Property Planning provides trustees with the property-specific guidance needed to fulfill their obligations in Snohomish's distinctive market.",
      scenarios: [
        "A trustee managing a Snohomish acreage property where the beneficiaries live out of state and have limited understanding of the local market",
        "A trust-held historic home in downtown Snohomish where the property's character and condition create a pricing tension between preservation value and practical marketability",
        "A family trust property outside Snohomish where outbuildings, land features, and rural characteristics require specialized marketing",
        "A successor trustee inheriting responsibility for a Snohomish property they've never visited, needing comprehensive assessment before making disposition decisions",
      ],
      whyLocal: "Trustees managing Snohomish properties face the challenge of making defensible decisions about properties with features — acreage, outbuildings, historic elements — that automated tools price poorly. Snohomish's limited comparable sales pool makes local expertise essential for fiduciary-grade analysis.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // MILITARY TONE — Silverdale (only military city in Tier 1)
  // Identity: Central Kitsap hub, Naval Base Kitsap proximity,
  // unincorporated community, Ridgetop/Clear Creek developments
  // ═══════════════════════════════════════════════════════════════════

  silverdale: {
    "probate-estate-sales": {
      intro: "Silverdale's real estate market reflects its role as Central Kitsap's commercial and residential hub — from newer planned communities in Ridgetop and Clear Creek to established neighborhoods throughout the unincorporated area. Probate and estate sales in Silverdale require understanding how military-adjacent buyer demographics, community growth patterns, and the area's mix of housing types affect pricing and marketing strategy.",
      scenarios: [
        "An estate property in an established Silverdale neighborhood where the home has been in the family since before the area's commercial growth transformed the community",
        "A probate sale involving a Ridgetop or Clear Creek home where newer construction nearby creates competitive pricing pressure for an older estate property",
        "Multiple heirs managing a Silverdale property from different states — needing a local resource to coordinate cleanout, preparation, and sale",
        "An estate with a Silverdale home where the buyer pool includes both military families on assignment and civilian buyers with different priorities and timelines",
        "A family managing probate for a parent's Silverdale home that needs updates to compete with newer inventory dominating the area's listings",
      ],
      whyLocal: "Silverdale's market is shaped by its dual role as a military-adjacent community and Central Kitsap's commercial center. Estate properties here compete with newer construction in planned developments, and the buyer pool includes military families with specific timelines and VA loan requirements alongside civilian buyers. Understanding these dynamics is essential for realistic pricing.",
    },
    "senior-transitions": {
      intro: "Seniors in Silverdale often chose the community for its combination of Kitsap County's natural setting and practical access to shopping, medical services, and community amenities. Transitioning from a Silverdale home involves understanding how the area's growth has changed property values, which preparation steps matter for the current market, and how to coordinate a sale that aligns with the family's transition timeline.",
      scenarios: [
        "A longtime Silverdale homeowner moving to assisted living in Poulsbo or Bremerton while managing the sale of a home in an established neighborhood that has evolved significantly",
        "An adult child helping a parent leave a Silverdale home — coordinating the transition from across the water in Seattle or from out of state",
        "A retired military couple who settled in Silverdale after service and now need to downsize from a home that served a larger family",
        "A senior in a Silverdale home near Clear Creek or Ridgetop whose property competes with newer construction — needing realistic guidance on pricing and preparation",
      ],
      whyLocal: "Silverdale seniors often own homes in established neighborhoods that have been transformed by commercial growth and new residential development around them. Understanding how these changes affect their specific property's value helps families set realistic expectations and avoid preparation decisions based on outdated assumptions.",
    },
    "executor-support": {
      intro: "Executors handling Silverdale estates often manage the process from across Puget Sound or from out of state entirely. Real Property Planning provides the on-the-ground coordination executors need in a market where military buyer demographics and Central Kitsap's growth patterns both influence strategy.",
      scenarios: [
        "An out-of-state executor managing a Silverdale property they haven't visited, needing comprehensive assessment of condition, value, and local market context",
        "An executor coordinating cleanout of a longtime Silverdale home filled with decades of belongings while managing the process remotely from Seattle",
        "Multiple co-executors with different expectations about a Silverdale property's value — needing objective local market analysis to align on pricing",
        "An executor for a military retiree's estate in Silverdale where the buyer pool includes active-duty families with VA financing",
      ],
      whyLocal: "Silverdale executors face unique challenges: the community's unincorporated status means different regulatory considerations, the buyer pool's military component affects showing schedules and financing types, and the area's rapid commercial growth means properties purchased even 15 years ago exist in a very different market context.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries handling Silverdale property matters need a real estate resource who understands Central Kitsap's specific market dynamics — the military buyer influence, the competition between established homes and newer construction, and the unincorporated community's regulatory landscape.",
      scenarios: [
        "A probate attorney managing a Silverdale estate where the property's value has been affected by commercial development growth in the surrounding area",
        "A trust administrator responsible for a Silverdale property where VA loan eligibility and military buyer demographics are relevant to marketing strategy",
        "An elder law attorney coordinating a client's Silverdale property sale alongside transition to care facilities in the Kitsap County area",
        "A family law attorney handling a Silverdale divorce where one spouse is active military and duty station changes affect timeline and strategy",
      ],
      whyLocal: "Silverdale property matters often involve dynamics specific to military-adjacent communities — VA loan considerations, PCS-driven buying and selling cycles, and the impact of base activity on local housing demand. Attorneys and fiduciaries need a real estate professional who understands these factors.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Silverdale home often means recalibrating expectations about what the property is worth in a market that has changed significantly due to commercial growth and new residential development.",
      scenarios: [
        "A retired military couple in Silverdale whose family home is now larger than needed — weighing whether to stay in Kitsap County or relocate closer to adult children",
        "A Silverdale homeowner in an established neighborhood where nearby newer construction has changed the competitive landscape for older homes",
        "A couple moving from a Silverdale home to a condo or smaller property in Poulsbo or Bainbridge Island — needing realistic pricing to fund the transition",
        "A homeowner near Ridgetop whose property has benefited from commercial growth but needs updates to appeal to today's buyer expectations",
      ],
      whyLocal: "Silverdale downsizers often purchased their homes when the community looked very different — before the commercial growth along Silverdale Way and the residential development in Ridgetop and Clear Creek. Understanding how these changes affect their specific property's competitive position helps set realistic pricing expectations.",
    },
    "valuation-guidance": {
      intro: "Silverdale's mix of newer planned communities, established neighborhoods, and military-influenced buyer demographics creates valuation complexity that automated tools don't capture well.",
      scenarios: [
        "An established Silverdale home where nearby newer construction has shifted the comparable sales landscape in ways that affect value in both directions",
        "An inherited property in Silverdale where the family's perception of value is based on the community they remember, not the significantly changed current market",
        "A Silverdale property near commercial development where the location's convenience is offset by traffic and density concerns that affect different buyers differently",
        "A home in the Clear Creek or Ridgetop area where the planned community context and HOA requirements affect value relative to unrestricted Silverdale properties",
      ],
      whyLocal: "Silverdale's valuation landscape is shaped by rapid change — commercial growth, new residential development, and shifts in the military buyer pool all create a market where recent comparable sales may not fully represent current dynamics.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Silverdale home for sale means understanding what today's buyers — a mix of military families, civilian professionals, and retirees — actually prioritize.",
      scenarios: [
        "An established Silverdale home competing with newer Ridgetop and Clear Creek construction — needing strategic updates that close the gap without over-investing",
        "An estate property in Silverdale where decades of deferred maintenance need triage — identifying which repairs affect value and which are cosmetic preferences",
        "A Silverdale home where the yard and outdoor spaces need attention to match the expectations of buyers comparing it to newer homes with professional landscaping",
        "A longtime Silverdale property where the interior finishes are functional but dated — needing guidance on what to update versus price accordingly",
      ],
      whyLocal: "In Silverdale's market, established homes compete directly with newer construction in planned communities. The preparation strategy needs to account for this competitive dynamic — investing enough to be competitive without over-improving for a market where newer alternatives are readily available.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property decisions in Silverdale often include considerations unique to military-connected communities — PCS timelines, VA loan implications, and housing allowance calculations that affect buyout decisions.",
      scenarios: [
        "A Silverdale divorce where one spouse is active military and a potential duty station change affects the timeline for property decisions",
        "A civilian couple in Silverdale divorcing where the home's value has been affected by nearby commercial and residential development since purchase",
        "A military family's Silverdale home purchased with VA financing where the equity position and loan assumptions affect settlement options",
        "A divorce involving a Silverdale property where one spouse wants to retain the home but needs realistic assessment of refinancing feasibility",
      ],
      whyLocal: "Silverdale divorce situations frequently involve military-specific considerations — BAH calculations, VA loan assumptions, PCS-driven timelines — alongside standard property valuation questions. Having a real estate professional who understands both the military community dynamics and Silverdale's specific market provides more complete guidance.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-held properties in Silverdale often reflect an earlier version of the community — homes purchased before the commercial growth and residential development that have transformed Central Kitsap.",
      scenarios: [
        "A trustee managing a Silverdale property purchased decades ago, now surrounded by commercial development that has fundamentally changed the neighborhood's character",
        "A trust-held home in an established Silverdale neighborhood where the beneficiaries expect values based on the newer construction nearby rather than the property's actual competitive position",
        "A family trust property in Silverdale where the trustee is based in Seattle and needs a Kitsap County resource to manage assessment, preparation, and sale",
        "A successor trustee inheriting responsibility for a Silverdale property they've never visited, needing comprehensive local market context before making disposition decisions",
      ],
      whyLocal: "Trustees managing Silverdale properties need to understand how Central Kitsap's transformation affects the specific property they're responsible for. A home in an established neighborhood may benefit from commercial growth, or it may face competitive pressure from newer construction — the answer depends on the specific property's location, condition, and buyer pool.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // URBAN TONE GROUP — Lynnwood (alongside Seattle, Tacoma)
  // ═══════════════════════════════════════════════════════════════════

  // ── LYNNWOOD ────────────────────────────────────────────────────
  // Identity: Light rail transformation, mid-century housing stock
  // evolving rapidly, commercial corridor redevelopment
  lynnwood: {
    "probate-estate-sales": {
      intro: "Lynnwood is in the middle of a once-in-a-generation transformation — light rail has arrived, and the city's real estate market is shifting from a quiet suburban bedroom community into an urban-adjacent hub. When a probate or estate sale involves Lynnwood property, understanding how the city's rapid evolution affects value is essential. A mid-century rambler near a future station area may carry very different potential than a similar home a mile away.",
      scenarios: [
        "A family home near the Lynnwood City Center light rail station where redevelopment potential may exceed the value of the existing structure",
        "An estate property in Alderwood or Martha Lake that has appreciated but needs significant updates to meet evolving buyer expectations",
        "Multiple heirs managing a longtime Lynnwood property where some want to sell quickly and others want to maximize value through preparation",
        "An executor dealing with a 1960s rambler on Highway 99 where commercial and residential interest overlap",
        "A probate property near the light rail corridor where understanding transit-oriented zoning changes is critical for pricing",
      ],
      whyLocal: "Lynnwood's light rail expansion is reshaping buyer interest block by block. Properties near station areas may attract developers or transit-oriented buyers, while homes in neighborhoods like Martha Lake or North Lynnwood retain a more traditional residential market. Estate properties in Lynnwood need pricing that accounts for this neighborhood-by-neighborhood transformation rather than relying on citywide averages that may already be outdated.",
    },
    "senior-transitions": {
      intro: "Many Lynnwood seniors purchased their homes decades ago when the city was a quiet, affordable suburb. Now, with light rail transforming the landscape and property values shifting, families are navigating senior transitions in a market that looks very different from when the home was originally purchased. Real Property Planning helps Lynnwood families understand how the city's evolution affects their property and manage the sale at a pace that respects the family's needs.",
      scenarios: [
        "A senior couple in Alderwood whose mid-century home has appreciated significantly as Lynnwood's light rail corridor develops",
        "An adult child coordinating a parent's move from a longtime Lynnwood home to assisted living while managing property preparation from out of state",
        "A family deciding whether a Lynnwood property near the light rail should be sold to a developer or a traditional buyer",
        "A senior downsizing from a larger Lynnwood lot to a newer condo or townhome closer to transit amenities",
      ],
      whyLocal: "Lynnwood seniors who have lived in their homes for 30 or 40 years are watching their neighborhoods transform around them. Light rail, new apartment construction, and shifting commercial corridors all affect property values — sometimes dramatically. David's on-the-ground assessment helps families understand whether their specific property benefits from these changes or whether a more traditional sale approach is appropriate.",
    },
    "downsizing-services": {
      intro: "Lynnwood's transformation from a traditional suburb into a light rail-connected urban hub creates interesting downsizing possibilities — newer condos near transit, more manageable townhomes, or a move to a quieter community. Real Property Planning helps Lynnwood homeowners evaluate their property in today's shifting market and make informed decisions about timing, preparation, and pricing.",
      scenarios: [
        "A Lynnwood homeowner in a large mid-century rambler whose children have moved out and who wants to simplify near the new transit options",
        "A retiree deciding whether to sell a larger Lynnwood home now — while the market is shifting — or wait for more development to mature",
        "A couple wanting to move from a high-maintenance Lynnwood lot to a newer, low-maintenance townhome or condo in the area",
        "A homeowner near the Highway 99 corridor weighing developer interest against traditional sale options",
      ],
      whyLocal: "Lynnwood's downsizing market is being reshaped by light rail and new construction. Homeowners who have been in their properties for decades may find that their home's highest value comes from redevelopment potential rather than traditional residential sale. David helps clients understand which scenario applies to their specific property and neighborhood within Lynnwood's evolving landscape.",
    },
    "executor-support": {
      intro: "Serving as an executor for a Lynnwood estate property means navigating a market in transition. Light rail, new zoning, and shifting buyer demographics can all affect how an estate property should be priced and positioned. Real Property Planning provides executors with the practical, locally informed guidance needed to manage a Lynnwood estate sale with confidence.",
      scenarios: [
        "An executor managing a mid-century Lynnwood home that has been in the family for decades and may have deferred maintenance",
        "A personal representative dealing with a property near the light rail corridor where both residential buyers and developers may be interested",
        "Co-executors who disagree on whether to invest in preparing a Lynnwood property or sell it as-is",
        "An out-of-state executor who needs a local partner to assess property condition and coordinate sale logistics in Lynnwood",
      ],
      whyLocal: "Executors handling Lynnwood property face a market where values are shifting rapidly in some neighborhoods while remaining stable in others. A property near the City Center station area presents a very different opportunity than one in Martha Lake or north Lynnwood. David's dual credentials help executors understand these distinctions and make decisions that protect the estate's interests.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries working with Lynnwood property need a real estate partner who understands how the city's ongoing transformation affects valuation, sale timelines, and buyer interest. Real Property Planning provides the reliable communication and market-specific insight that legal professionals need when coordinating property matters in a changing market.",
      scenarios: [
        "A probate attorney coordinating the sale of an estate property near Lynnwood's light rail corridor where zoning changes affect value",
        "An elder law attorney helping a client transition from a longtime Lynnwood home while managing the property sale",
        "A trustee overseeing a trust-owned Lynnwood property where the market has shifted significantly since the trust was created",
        "A guardian managing property in a Lynnwood neighborhood where redevelopment interest complicates traditional sale assumptions",
      ],
      whyLocal: "Lynnwood's legal professionals are encountering property situations shaped by the city's transformation — new zoning overlays, transit-oriented development potential, and shifting neighborhood demographics. David provides the kind of current, locally grounded market insight that helps attorneys and fiduciaries make well-informed recommendations in a market that is actively evolving.",
    },
    "valuation-guidance": {
      intro: "Property valuation in Lynnwood requires understanding how the city's light rail expansion, new construction, and evolving zoning are reshaping values neighborhood by neighborhood. Automated tools often lag behind these rapid changes. Real Property Planning provides condition-based, locally informed valuation guidance that reflects Lynnwood's current market reality.",
      scenarios: [
        "An estate settlement where the property's value has shifted substantially due to Lynnwood's light rail development",
        "A trust administration requiring accurate valuation of a Lynnwood property near a transit station area",
        "A family dispute over the value of an inherited Lynnwood home where automated estimates conflict with neighborhood reality",
        "A divorce proceeding involving a Lynnwood property where transit-oriented development potential complicates valuation",
      ],
      whyLocal: "Lynnwood's market is moving faster than most automated tools can track. A property near the City Center station may carry development premium that a standard residential comparison misses entirely. Meanwhile, homes in more established neighborhoods like Alderwood or Martha Lake still trade on traditional residential factors. David's on-site evaluation accounts for these diverging dynamics within the same city.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Lynnwood home for sale — especially an estate or longtime family property — requires understanding which improvements matter in today's shifting market. A mid-century rambler near the light rail corridor may need different preparation than a similar home in a quieter Lynnwood neighborhood. Real Property Planning helps families make practical preparation decisions based on the property's specific location and realistic buyer expectations.",
      scenarios: [
        "A 1960s rambler in Lynnwood that needs strategic updates to compete against newer construction in the area",
        "An estate property with decades of accumulated belongings that needs professional cleanout and basic preparation",
        "A Lynnwood home where the question is whether to invest in preparation or sell as-is to take advantage of current market timing",
        "A property near the light rail where buyer expectations may lean toward developer-ready condition rather than traditional move-in ready",
      ],
      whyLocal: "In Lynnwood's evolving market, preparation strategy depends heavily on where the property sits within the city's transformation. Homes near light rail stations may benefit from minimal preparation if the primary buyer pool is developers, while properties in established residential neighborhoods still need traditional staging and updates to attract homebuyers. David helps families avoid both over-investing and under-preparing.",
    },
    "divorce-related-home-sales": {
      intro: "Selling a shared home during a divorce in Lynnwood requires objectivity, market accuracy, and an understanding of how the city's shifting dynamics affect property value. Real Property Planning provides the neutral, experienced guidance that both parties and their attorneys need to move forward with clarity in Lynnwood's evolving market.",
      scenarios: [
        "A divorcing couple who purchased in Lynnwood years ago and disagree on the current value of their home in the transformed market",
        "A family law attorney who needs a neutral broker opinion on a Lynnwood property where light rail proximity complicates valuation",
        "A mediated settlement requiring an accurate, defensible property valuation in a Lynnwood neighborhood with active development",
        "A divorce-related sale where one party wants to sell quickly and the other believes waiting will increase value due to ongoing development",
      ],
      whyLocal: "Divorce-related sales in Lynnwood often involve disagreements about value that are amplified by the city's rapid transformation. One party may believe the home has development potential while the other sees it as a standard residential property. David's appraisal credentials provide the objective, defensible basis both attorneys and their clients need for productive negotiations.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Lynnwood may have been placed in trust when the city's market looked very different. As light rail reshapes neighborhoods and new construction changes buyer expectations, trustees need current, locally informed guidance to fulfill their fiduciary obligations. Real Property Planning helps trustees navigate Lynnwood's evolving market with clarity and appropriate documentation.",
      scenarios: [
        "A successor trustee managing a trust-owned Lynnwood property where the market has shifted dramatically since the trust was established",
        "A corporate trustee needing a reliable local broker for a Lynnwood property near the light rail corridor",
        "A trustee deciding whether to sell a Lynnwood property now during the market transformation or hold for further appreciation",
        "A beneficiary questioning the value of a trust-owned Lynnwood home based on automated estimates that may not reflect transit-area dynamics",
      ],
      whyLocal: "Trust properties in Lynnwood present a unique challenge: the market has changed so rapidly that the assumptions built into many trust documents may no longer reflect reality. David's on-the-ground assessment helps trustees understand how Lynnwood's transformation affects their specific property and develop a sale strategy that meets fiduciary standards in a changing environment.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // RURAL TONE GROUP — Woodinville
  // ═══════════════════════════════════════════════════════════════════

  // ── WOODINVILLE ────────────────────────────────────────────────
  // Identity: Wine country character, estate-style lots, equestrian
  // properties, blend of suburban center and rural acreage
  woodinville: {
    "probate-estate-sales": {
      intro: "Woodinville's wine country character and varied housing — from estate-style lots and equestrian properties to townhomes near the Sammamish River — make probate and estate sales here more complex than standard suburban transactions. When an estate property includes acreage, outbuildings, or proximity to the wine district, accurate pricing requires hands-on evaluation that accounts for Woodinville's unique niche market.",
      scenarios: [
        "A family estate on a larger Woodinville lot with outbuildings, gardens, or equestrian facilities that don't fit standard comparable sales",
        "An inherited property near the Woodinville wine district where tourism proximity and residential appeal both affect value",
        "Multiple heirs managing a Woodinville property where acreage and rural features make online estimates unreliable",
        "An estate home along the Sammamish River corridor where flood plain considerations and lot characteristics require specialized understanding",
        "A probate sale involving a Woodinville property with unique features — wine storage, workshop buildings, or hobby farm infrastructure",
      ],
      whyLocal: "Woodinville's market doesn't behave like a standard suburban community. Properties with acreage, equestrian facilities, or wine district proximity attract a niche buyer pool with specific expectations. Estate properties here often include features — outbuildings, rural infrastructure, specialty landscaping — that automated tools completely miss. David's appraisal background is especially valuable for Woodinville properties where the land, improvements, and location all contribute to value in ways that require on-site assessment.",
    },
    "senior-transitions": {
      intro: "Many Woodinville seniors chose the community for its space, privacy, and rural character — a lifestyle that can become harder to maintain as needs change. When it's time to transition from a large Woodinville property to a more manageable living situation, the sale involves understanding how the property's unique features — acreage, outbuildings, mature landscaping — affect value and buyer appeal.",
      scenarios: [
        "A senior couple on a multi-acre Woodinville lot whose property includes features like horse facilities, gardens, or workshop buildings that affect marketability",
        "An adult child coordinating a parent's move from a large Woodinville property while managing the complexity of selling rural-adjacent real estate",
        "A longtime Woodinville homeowner whose property requires more maintenance than they can manage and who needs guidance on whether to simplify the lot before selling",
        "A family balancing a parent's preference to stay in Woodinville with the practical need for closer proximity to care resources",
      ],
      whyLocal: "Woodinville seniors who are transitioning often face a challenge that suburban downsizers don't: their property's value may be deeply tied to features — acreage, outbuildings, equestrian facilities — that require specialized marketing and a buyer pool that's smaller and more specific. David helps families understand how to position these unique Woodinville properties effectively rather than treating them like standard residential listings.",
    },
    "downsizing-services": {
      intro: "Downsizing from a larger Woodinville property means understanding what makes the home unique and how to position those features for the right buyer. Whether the property includes acreage, wine country proximity, or rural character, Real Property Planning provides practical guidance on preparing and pricing a Woodinville home so the downsizing process is grounded in realistic market expectations.",
      scenarios: [
        "A Woodinville homeowner on a large lot who wants to move to a smaller, low-maintenance home in town or near the Sammamish River",
        "A retiree whose Woodinville property includes land and outbuildings that need to be marketed to a niche buyer pool",
        "A couple leaving a rural-adjacent Woodinville home for a townhome or condo closer to urban amenities",
        "A homeowner whose property has unique features — wine storage, equestrian facilities — that require specialized sale strategy",
      ],
      whyLocal: "Downsizing from a Woodinville property with rural character, acreage, or specialty features requires a different approach than downsizing from a standard suburban home. The buyer pool is more specific, preparation priorities are different, and pricing accuracy requires understanding how rural-adjacent features contribute to — or complicate — market value. David's dual credentials help Woodinville homeowners navigate these nuances.",
    },
    "executor-support": {
      intro: "Executors managing a Woodinville estate property often inherit unique challenges — larger lots with outbuildings, equestrian infrastructure, mature landscaping, or wine country proximity that affect both valuation and sale logistics. Real Property Planning provides the grounded, locally informed support executors need to manage these distinctive properties responsibly.",
      scenarios: [
        "An executor managing a Woodinville estate that includes acreage, outbuildings, and property features that don't appear in standard comparable sales",
        "A personal representative dealing with a Woodinville property where accumulated belongings, workshop contents, and outdoor infrastructure need coordinated handling",
        "An out-of-state executor who needs a local partner to assess a Woodinville property with unique rural-adjacent features",
        "Co-executors navigating decisions about whether to sell a Woodinville estate property as-is or invest in preparing the land and structures for market",
      ],
      whyLocal: "Estate properties in Woodinville frequently include features that make standard probate sale approaches insufficient. Acreage, outbuildings, equestrian facilities, and proximity to the wine district all affect value and marketability in ways that require on-site, hands-on evaluation. David's appraisal background provides executors with the property-specific insight they need to make confident decisions about unique Woodinville estates.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries working with Woodinville property need a real estate partner who understands rural-adjacent valuation, acreage properties, and the wine country market's unique dynamics. Real Property Planning provides the reliable, well-documented guidance legal professionals need when property characteristics extend well beyond standard residential norms.",
      scenarios: [
        "A probate attorney coordinating the sale of a Woodinville estate with acreage and outbuildings that complicate valuation",
        "An estate planning attorney advising clients on the value of a Woodinville property near the wine district",
        "A trustee overseeing a trust-owned Woodinville property where rural features and niche buyer demand make standard market comparisons unreliable",
        "A family law attorney dealing with a divorce involving a Woodinville property where equestrian facilities or hobby farm features affect the settlement",
      ],
      whyLocal: "Woodinville properties often include features — acreage, outbuildings, specialty improvements — that create valuation complexity for legal proceedings. Standard residential comparisons may miss the value (or limitation) of these features entirely. David's appraisal credentials provide attorneys and fiduciaries with the kind of defensible, property-specific analysis needed for estate settlements, trust administration, and family law proceedings involving non-standard properties.",
    },
    "valuation-guidance": {
      intro: "Valuing property in Woodinville requires understanding how acreage, outbuildings, wine country proximity, and rural character affect market value. Standard automated tools frequently miss these features or misapply suburban comparables to properties that behave more like rural or estate-style real estate. Real Property Planning provides the hands-on, property-specific valuation insight that Woodinville's unique market demands.",
      scenarios: [
        "An estate settlement where the Woodinville property includes acreage and improvements that automated tools significantly undervalue or overvalue",
        "A trust administration requiring defensible valuation of a Woodinville property with equestrian facilities or hobby farm features",
        "A family disagreement over the value of an inherited Woodinville property where the land and improvements create complex value dynamics",
        "A financial advisor helping a client understand the realistic market value of a Woodinville property before making retirement decisions",
      ],
      whyLocal: "Woodinville sits at the intersection of suburban, rural, and wine country real estate — and each category carries different valuation dynamics. A property with a productive vineyard is valued differently from one with equestrian facilities, which is valued differently from a standard suburban lot near the Sammamish River. David's on-site assessment accounts for how Woodinville's specific property characteristics interact with actual buyer demand.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Woodinville home for sale — especially one with acreage, outbuildings, or rural features — requires a different approach than preparing a standard suburban listing. Real Property Planning helps Woodinville property owners focus preparation efforts on the improvements that matter most for their specific buyer pool and avoid spending money on changes that won't affect value.",
      scenarios: [
        "A Woodinville property with acreage that needs land clearing, fence repair, or outbuilding cleanup before it can show well to buyers",
        "An estate property with accumulated tools, equipment, and personal property across multiple outbuildings that needs coordinated cleanout",
        "A Woodinville home near the wine district where staging and presentation need to match the expectations of lifestyle-oriented buyers",
        "A rural-adjacent property where the question is whether to invest in accessory structure repairs or sell as-is to a buyer who plans their own improvements",
      ],
      whyLocal: "Preparation for a Woodinville property often extends beyond the house itself — fencing, outbuildings, land presentation, and accessory structures all contribute to buyer perception. Over-improving features that a specific buyer pool won't pay for wastes money, while under-preparing can cause buyers to discount the property unfairly. David's experience with Woodinville's niche market helps sellers invest preparation dollars where they deliver the most return.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Woodinville can be particularly complex when the marital home includes acreage, outbuildings, or specialty features that make standard valuation approaches unreliable. Real Property Planning provides the objective, property-specific guidance both parties and their attorneys need to reach fair, well-supported conclusions about value.",
      scenarios: [
        "A divorcing couple whose Woodinville home includes acreage and improvements that are difficult to value using standard residential comparables",
        "A family law attorney needing a neutral opinion on a Woodinville property where equestrian facilities or wine-related features affect the asset value",
        "A mediated settlement involving a Woodinville property with unique characteristics that both parties value differently",
        "A divorce-related sale where one party built custom improvements — workshop, barn, gardens — and believes they add more value than the market may support",
      ],
      whyLocal: "Divorce settlements involving Woodinville property are often complicated by the home's unique features. One party may have invested heavily in equestrian facilities, a workshop, or landscaping that they value sentimentally at a different level than the market. David's appraisal credentials provide the objective, defensible valuation that helps attorneys and mediators cut through subjective disagreements and reach fair outcomes.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Woodinville often reflects the original owner's lifestyle choices — larger lots, equestrian facilities, gardens, or wine country character — that create unique sale dynamics. Trustees need a real estate partner who understands how these features affect value and who can manage the sale with appropriate fiduciary care and documentation.",
      scenarios: [
        "A successor trustee managing a Woodinville property with acreage and outbuildings that require specialized marketing",
        "A corporate trustee needing local expertise for a trust-owned Woodinville property where the land itself may be the primary asset",
        "A trustee deciding how to handle a Woodinville property with equestrian or hobby farm features that limit the buyer pool",
        "A beneficiary questioning the value of a trust-owned Woodinville property based on online estimates that don't account for rural features",
      ],
      whyLocal: "Trust properties in Woodinville frequently include features that were meaningful to the original owner — equestrian facilities, gardens, workshops, wine storage — that may appeal to a niche buyer pool. Trustees need to understand which features add market value and which are personal improvements that buyers may not pay for. David's property-specific assessment provides the clarity trustees need to sell responsibly.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SUBURBAN TONE GROUP — Kirkland, Issaquah, Redmond
  // ═══════════════════════════════════════════════════════════════════

  // ── KIRKLAND ──────────────────────────────────────────────────────
  // Identity: Waterfront charm meets suburban growth, Moss Bay/Houghton
  // boutique waterfront, Juanita/Finn Hill family neighborhoods,
  // Totem Lake redevelopment, Google campus, walkable downtown
  kirkland: {
    "probate-estate-sales": {
      intro: "Kirkland's neighborhoods span from the boutique waterfront blocks of Moss Bay and Houghton to the family-oriented hillside communities of Juanita, Finn Hill, and Totem Lake — each with its own buyer profile and pricing dynamics. When a probate or estate sale involves Kirkland property, the home's location relative to the waterfront, its condition compared to the city's increasingly updated housing stock, and the expectations of Kirkland's discerning buyer pool all affect realistic pricing. Real Property Planning brings neighborhood-level Kirkland expertise to estate property sales.",
      scenarios: [
        "A longtime family home in Moss Bay or Houghton where the walkable waterfront location commands a premium but the home's condition may not meet today's buyer expectations",
        "An inherited property in Juanita or Finn Hill where the hilltop views and larger lots add value that automated estimates often understate",
        "An estate home near the Totem Lake redevelopment area where commercial transformation is changing neighborhood dynamics and buyer interest",
        "Multiple heirs managing a Kirkland property where one sibling lives locally and others are out of state — needing objective, defensible valuation",
        "A probate sale involving a Kirkland condo or townhome in one of the city's newer mixed-use developments near downtown",
      ],
      howWeHelp: [
        "Neighborhood-specific valuation that accounts for Kirkland's waterfront premium, hillside view corridors, and the wide pricing gap between locations",
        "Assessment of how the Totem Lake transformation and downtown Kirkland development are affecting nearby residential values",
        "Coordination with probate attorneys on court documentation, timeline requirements, and sale procedures",
        "Property preparation tailored to Kirkland's buyer expectations — which improvements drive return and which don't in each submarket",
        "Clear, regular communication with multiple heirs or parties managing the process from different locations",
        "Full transaction management from initial assessment through closing in Kirkland's competitive market",
      ],
      whyLocal: "Kirkland's market is shaped by its waterfront identity, walkable downtown, and the ongoing transformation of Totem Lake into a mixed-use district. A home in Moss Bay faces entirely different buyer expectations than one on Finn Hill or near the Cross Kirkland Corridor. Automated estimates miss these neighborhood-level distinctions — especially for older estate properties competing against the heavily updated homes that dominate Kirkland's most desirable blocks. David Stein's on-site assessment provides the granular pricing insight that Kirkland estate situations require.",
    },
    "senior-transitions": {
      intro: "Many Kirkland seniors have lived in their homes for decades — watching the city evolve from a quiet lakeside town into one of the Eastside's most desirable communities. When it's time to transition from a longtime Kirkland home, the process involves both significant financial considerations and deeply personal connections to the neighborhood. Real Property Planning helps Kirkland families navigate senior transitions with patient, experienced guidance that respects the family's pace while ensuring the property is positioned accurately in Kirkland's competitive market.",
      scenarios: [
        "A senior couple in Houghton whose midcentury home sits on a premium waterfront-adjacent lot but needs strategic updates for today's buyers",
        "An adult child coordinating a parent's move from a Juanita home to an Eastside senior living community while managing the sale from out of state",
        "A longtime Finn Hill homeowner whose property has panoramic lake views but hasn't been updated in decades — needing honest guidance on preparation priorities",
        "A family balancing a parent's assisted living timeline with the practical requirements of selling a Kirkland home in a market that rewards move-in condition",
        "A senior downsizing from a larger Kirkland home to a condo or townhome within the community — wanting to stay close to familiar amenities",
      ],
      howWeHelp: [
        "Condition-based valuation that reflects how Kirkland's buyer pool evaluates older homes against the updated and newer inventory dominating the market",
        "Strategic preparation guidance specific to Kirkland — which investments matter for waterfront-area homes versus hillside properties",
        "Timeline coordination aligned with the senior's move to a care community, family home, or smaller Kirkland residence",
        "Patient communication with seniors and adult children who may be managing the transition from different locations",
        "Vendor coordination for cleanout, repairs, and staging appropriate for Kirkland's market expectations",
        "Full-service management so the family can focus on their parent's wellbeing rather than transaction logistics",
      ],
      whyLocal: "Kirkland seniors often own homes in locations that have appreciated significantly — but the home itself may not reflect what today's buyers expect in terms of condition and finish. The gap between emotional value and market reality is especially pronounced in Kirkland, where walkability, waterfront proximity, and neighborhood charm drive premiums that only apply when the property is presented effectively. David's appraisal background helps families understand where their home actually stands and what preparation makes financial sense.",
    },
    "downsizing-services": {
      intro: "Downsizing from a longtime Kirkland home means navigating a market where location carries significant premiums and buyer expectations vary dramatically by neighborhood. Whether moving from a larger Juanita home to a Kirkland condo, from Finn Hill to a smaller waterfront-area property, or leaving the community altogether, the process benefits from someone who understands how Kirkland's distinct submarkets affect both the sale of the current home and realistic expectations for the next step.",
      scenarios: [
        "A couple in a large Finn Hill home with lake views who want to downsize to a Kirkland condo but need to understand how their proceeds translate in the current market",
        "A homeowner in Juanita whose children have moved away, considering whether to stay in Kirkland in a smaller home or move to a community with more amenities",
        "A retiree in a Moss Bay home who wants to sell and relocate closer to family — needing accurate pricing for a property in one of Kirkland's most competitive micro-markets",
        "A family helping a parent transition from a Totem Lake area home to a more manageable living situation while the neighborhood undergoes redevelopment",
      ],
      whyLocal: "Downsizing decisions in Kirkland are complicated by the city's wide range of housing options and the significant price differences between neighborhoods. A Finn Hill home with views may sell at a premium, but replacing that square footage in waterfront Kirkland requires understanding exactly how the proceeds translate. David provides the comparative market analysis that helps Kirkland downsizers make realistic plans rather than assumptions.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Kirkland face a market where the city's waterfront charm, walkable downtown, and strong school districts drive demand — but where property condition and neighborhood location create wide pricing variations. Whether the estate property is a midcentury home in Houghton, a split-level in Juanita, or a condo near downtown Kirkland, executors need locally grounded guidance to meet their fiduciary responsibilities while navigating the city's competitive market.",
      scenarios: [
        "A newly appointed executor managing a Kirkland estate property while living out of state — unfamiliar with how waterfront proximity and neighborhood character affect pricing",
        "An estate home in Kirkland's Totem Lake area where ongoing redevelopment creates uncertainty about property positioning and buyer interest",
        "Co-executors who disagree about a Kirkland property's value and need defensible, appraisal-informed pricing to resolve the discussion",
        "An estate property that has been vacant and needs assessment, cleanout, and preparation before it can compete with Kirkland's updated listings",
        "An executor coordinating with a probate attorney and CPA on a Kirkland property where the neighborhood's premium location elevates financial stakes",
      ],
      howWeHelp: [
        "Property-specific assessment accounting for Kirkland's neighborhood-level pricing — from Moss Bay waterfront premiums to Finn Hill view corridors to Totem Lake redevelopment effects",
        "Defensible pricing documentation using appraisal-level methodology suitable for beneficiary review and court records",
        "Guidance on whether the estate property's highest value is as a residence, renovation opportunity, or development potential in evolving areas",
        "Coordination of cleanout, preparation, and staging appropriate for Kirkland's buyer expectations in each submarket",
        "Regular communication and status updates for executors managing remotely",
        "End-to-end transaction management from initial assessment through closing and distribution coordination",
      ],
      whyLocal: "Kirkland executors face a market where mispricing carries real consequences — overprice and the property sits while the estate accumulates carrying costs; underprice and beneficiaries question the executor's judgment. With Kirkland's wide range of neighborhood values and the transformation happening around Totem Lake, accurate pricing requires on-the-ground assessment rather than automated tools. David's dual credentials provide the defensible analysis that Kirkland estate situations demand.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Kirkland need a real estate partner who understands the city's waterfront-driven market premiums, the significant pricing variation between neighborhoods, and the documentation standards that legal proceedings require. Real Property Planning works with Kirkland-area legal professionals as a responsive, credentialed resource for estate, trust, probate, divorce, and guardianship property matters across the city's diverse submarkets.",
      scenarios: [
        "A probate attorney managing a Kirkland estate where the property's waterfront-adjacent location complicates valuation because beneficiaries assume premium pricing regardless of condition",
        "A trustee overseeing trust-held property in Kirkland who needs defensible pricing that accounts for the neighborhood's specific market dynamics",
        "An estate planning attorney advising a Kirkland client on property disposition where the Totem Lake redevelopment creates development-potential questions",
        "A family law attorney handling a divorce involving a Kirkland home where both parties have different expectations based on neighborhood reputation versus actual condition",
        "An elder law attorney coordinating a client's Kirkland property sale alongside a transition to senior living",
      ],
      howWeHelp: [
        "Defensible property assessments that distinguish between Kirkland's waterfront, hillside, and redevelopment-area submarkets",
        "Responsive communication calibrated to legal timelines and the professional expectations of Eastside attorneys",
        "Pricing documentation grounded in appraisal-level methodology — suitable for court proceedings, beneficiary review, and settlement negotiations",
        "Strategic guidance on property preparation and market positioning appropriate for Kirkland's competitive buyer environment",
        "Coordination across legal, financial, and family stakeholders with clear, professional reporting",
        "A consistent, locally expert point of contact for ongoing property-related referrals in Kirkland",
      ],
      whyLocal: "Kirkland's legal professionals deal with property matters where the city's waterfront identity and walkable charm create expectations that may not align with specific property conditions. A home two blocks from the lake in Houghton and one on a busy Juanita arterial represent dramatically different values — yet both carry the 'Kirkland' address. David provides the neighborhood-granular analysis that attorneys and fiduciaries need for defensible opinions in a market where location within the city matters enormously.",
    },
    "valuation-guidance": {
      intro: "Kirkland's real estate market presents valuation challenges that reflect the city's layered geography — waterfront blocks in Moss Bay, hillside view properties on Finn Hill, family neighborhoods in Juanita, and the rapidly evolving Totem Lake corridor. When accurate property valuation matters for estate planning, divorce proceedings, trust administration, or a pending sale, the wide range of Kirkland's submarkets makes generic approaches unreliable. Real Property Planning provides the property-specific valuation insight that Kirkland situations require.",
      scenarios: [
        "An estate planning attorney needing current market valuation for a Kirkland waterfront-area property where the location premium is significant but condition-dependent",
        "Divorcing spouses who disagree on the value of their Kirkland home — each referencing different comparable sales from different neighborhoods",
        "A trustee needing documented valuation for a trust-owned Kirkland property where recent nearby sales may not reflect the subject property's actual condition and features",
        "Heirs questioning an automated estimate for an inherited Kirkland home that doesn't account for view corridors, lot configuration, or deferred maintenance",
      ],
      whyLocal: "Kirkland's valuation landscape is defined by micro-market premiums that automated tools consistently miss. A Houghton home with filtered lake views may be worth significantly more than a similar home two blocks inland — but only if condition meets buyer expectations. David's certified appraisal credentials and hands-on broker experience provide the analytically grounded, property-specific valuation that Kirkland's layered market demands.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Kirkland home for sale requires understanding what the city's buyers expect — and those expectations vary significantly by neighborhood. A waterfront-area home in Moss Bay faces different preparation standards than a family home in Juanita or a property near the Totem Lake redevelopment. Real Property Planning helps Kirkland sellers identify which improvements drive return, which can be skipped, and how to present a property that competes effectively in the city's condition-sensitive market.",
      scenarios: [
        "A Houghton home with original finishes where the walkable location is desirable but the kitchen and bathrooms need updating to meet buyer expectations",
        "A Finn Hill property with panoramic views but dated landscaping and deferred exterior maintenance that undermines curb appeal",
        "An estate property in Juanita that needs cleanout, carpet replacement, and paint to compete with the updated homes that dominate neighborhood listings",
        "A Totem Lake area home where the owner is unsure whether to invest in updates or price for the growing buyer segment interested in renovation opportunities",
      ],
      whyLocal: "Kirkland buyers are condition-conscious — especially in the waterfront-adjacent and downtown-proximate neighborhoods where premiums are highest. Over-improving a Totem Lake property may not yield the same return as targeted updates in Moss Bay. David's experience with Kirkland's neighborhood-specific buyer expectations helps sellers invest preparation dollars where they matter most, avoiding both under-preparation and over-investment.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Kirkland carry the added complexity of a market where neighborhood location creates dramatic value differences — and where both parties may have very different perceptions of what their home is worth based on Kirkland's reputation versus actual property-specific factors. Real Property Planning provides the objective, defensible pricing that divorce situations in Kirkland require, working constructively with both parties and their attorneys.",
      scenarios: [
        "A divorcing couple with a Houghton home where the waterfront-area location creates high value expectations but the home's condition doesn't match premium comps",
        "A family law attorney needing neutral pricing assessment for a Kirkland property where both spouses cite different neighborhood sales to support their position",
        "A mediated divorce involving a Finn Hill home where one party wants to retain the property — needing accurate buyout valuation that accounts for the view premium and deferred maintenance",
        "A contentious divorce where the Kirkland home is the primary asset and both parties need a credentialed broker who can provide court-ready pricing documentation",
      ],
      whyLocal: "Divorce negotiations involving Kirkland property are complicated by the city's wide range of neighborhood values and the emotional premium both parties often attach to the Kirkland address. Automated estimates may validate one party's expectations while contradicting the other's — neither accurately. David's dual broker and appraiser credentials provide the neutral, property-specific analysis that helps Kirkland divorce situations reach fair resolution based on actual market conditions rather than aspirational pricing.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Kirkland requires fiduciary-level care in a market where the city's waterfront charm and Eastside location create significant values — and where trustee decisions are subject to beneficiary scrutiny. Whether the trust property is a longtime family home in Juanita, a condo near downtown Kirkland, or a view property on Finn Hill, Real Property Planning provides trustees with the defensible pricing and professional sale management that trust administration demands.",
      scenarios: [
        "A successor trustee managing a trust-owned Kirkland home where beneficiaries have different expectations about the property's value based on the city's general reputation",
        "A corporate trustee needing local expertise for a Kirkland property where waterfront proximity and condition factors require on-site assessment rather than desktop valuation",
        "A trustee preparing to sell a Finn Hill trust property where the views command a premium but the home needs updating — uncertain how condition affects the view-premium relationship",
        "A trust administration involving a Kirkland condo in a newer mixed-use development where HOA factors and building-specific dynamics affect pricing",
      ],
      whyLocal: "Trust property sales in Kirkland carry elevated scrutiny because the city's values are significant and beneficiaries often have strong opinions based on Kirkland's desirable reputation. A trustee who relies on automated estimates may overprice a dated property or underprice one where location premiums apply — either creating fiduciary exposure. David's dual credentials provide trustees with the defensible, neighborhood-specific analysis that Kirkland trust situations require.",
    },
  },



  // ── ISSAQUAH ──────────────────────────────────────────────────────
  // Identity: Cascade foothills community, master-planned neighborhoods
  // (Highlands, Talus), Olde Town character, trail access, outdoor lifestyle
  issaquah: {
    "probate-estate-sales": {
      intro: "Issaquah's real estate market spans from the walkable streets of Olde Town to master-planned communities in the Highlands and Talus — each segment with its own buyer expectations and pricing dynamics. When a probate or estate sale involves Issaquah property, understanding how the home's location within the city and its condition relative to the heavily updated or newer housing stock affects realistic value is essential for protecting the estate's interests.",
      scenarios: [
        "An estate property in Olde Town Issaquah where the older construction and smaller lot contrast with the newer homes buyers often compare it to",
        "A family home in Issaquah Highlands or Talus where HOA requirements and community standards affect preparation and sale strategy",
        "Multiple heirs managing an inherited property in Issaquah where the home needs significant updates to compete in a market dominated by newer construction",
        "An executor coordinating a probate sale for a foothills-adjacent property with larger lot characteristics that differ from the planned communities",
        "An estate property where the family's emotional attachment to the home's mountain and foothill setting complicates objective pricing decisions",
      ],
      whyLocal: "Issaquah's market is divided between master-planned communities with strict HOA standards and older homes in Olde Town and surrounding areas. An estate property in Olde Town faces very different buyer expectations than one in the Highlands — and pricing either segment incorrectly can delay the sale or leave money on the table. David's on-site evaluation accounts for how Issaquah's foothills geography, community type, and condition factors interact in each submarket.",
    },
    "senior-transitions": {
      intro: "Issaquah seniors who have lived in the community for years — whether in established Olde Town neighborhoods or master-planned communities — face a transition market shaped by newer construction and active outdoor-lifestyle buyers. Real Property Planning helps Issaquah families navigate the sale of a longtime home with practical guidance on preparation, pricing, and timing that reflects the community's specific buyer expectations.",
      scenarios: [
        "A senior couple in Olde Town Issaquah whose longtime home needs updates to compete against newer Highlands or Talus listings",
        "An adult child coordinating a parent's move from an Issaquah Highlands home to a lower-maintenance senior living community",
        "A longtime Issaquah homeowner whose property backs to trails or open space but needs condition-based guidance on realistic value",
        "A family managing a parent's transition from a larger foothills-area home while handling the emotional weight of leaving a community they love",
      ],
      whyLocal: "Issaquah's appeal to active, outdoor-oriented families means buyer expectations tend toward well-maintained, move-in-ready homes. Seniors whose properties have deferred maintenance face a market where preparation decisions directly impact sale outcomes. David helps Issaquah families understand which updates matter most in their specific neighborhood and how to position a longtime home against the newer construction that dominates parts of the market.",
    },
    "downsizing-services": {
      intro: "Downsizing from an Issaquah home often means leaving a community valued for its trails, mountain views, and family-oriented character. Whether the move is to a smaller home nearby, a senior community, or a different city entirely, the sale of the current property requires pricing and preparation strategies tailored to Issaquah's specific buyer expectations and competitive landscape.",
      scenarios: [
        "An Issaquah homeowner in a larger Highlands home whose children have graduated and who wants something smaller and lower-maintenance",
        "A retiree moving from a foothills-area property to be closer to medical facilities and urban conveniences",
        "A couple downsizing from an Olde Town home who want to understand whether their older property's character adds or limits value in today's market",
        "A homeowner in Talus evaluating whether to sell now or wait, given ongoing development in the Issaquah area",
      ],
      whyLocal: "Issaquah downsizers face a specific challenge: the community's newer construction and HOA-maintained neighborhoods set high presentation standards. A home with dated finishes or deferred maintenance may need strategic preparation to compete effectively. David helps Issaquah homeowners determine which improvements deliver meaningful return and which are unnecessary given their property's specific submarket and buyer pool.",
    },
    "executor-support": {
      intro: "Executors handling property in Issaquah need to understand how the city's varied housing landscape — from master-planned communities with HOA requirements to older Olde Town homes with different buyer expectations — affects the sale process. Real Property Planning provides executors with clear, practical guidance tailored to Issaquah's specific market segments.",
      scenarios: [
        "An executor managing an Issaquah Highlands property where HOA compliance, community standards, and condition all affect sale strategy",
        "A personal representative dealing with an Olde Town Issaquah home that needs significant preparation to meet buyer expectations",
        "An out-of-state executor who needs a local partner to assess condition and coordinate the sale of a foothills-area Issaquah property",
        "Co-executors disagreeing on the value of an Issaquah property where automated estimates don't account for condition relative to newer community standards",
      ],
      whyLocal: "Issaquah estates present distinct challenges depending on whether the property is in a master-planned community or the older housing stock near Olde Town. HOA requirements, community architectural standards, and condition relative to the community's newer homes all affect how the property should be priced and prepared. David provides executors with the submarket-specific insight needed to manage these distinctions confidently.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries working with Issaquah property benefit from a real estate partner who understands the city's unique structure — master-planned communities with strict HOA governance alongside older residential areas with different market dynamics. Real Property Planning provides the reliable communication and submarket-specific insight that legal professionals need for property matters in Issaquah.",
      scenarios: [
        "A probate attorney managing the sale of an estate property in Issaquah Highlands where HOA compliance and community standards must be addressed",
        "An estate planning attorney advising clients on the value of Issaquah property across different community types within the city",
        "A trustee overseeing trust-owned property in Issaquah where the master-planned community environment creates specific sale requirements",
        "A family law attorney dealing with a shared home in Issaquah where location within the city significantly affects valuation",
      ],
      whyLocal: "Issaquah's legal professionals encounter property situations where the community structure — HOAs, architectural review boards, trail easements — adds layers of complexity to standard real estate transactions. David's experience across Issaquah's diverse housing segments helps attorneys and fiduciaries navigate these community-specific requirements while providing defensible valuation guidance.",
    },
    "valuation-guidance": {
      intro: "Property valuation in Issaquah requires distinguishing between the city's master-planned communities, its Olde Town core, and its foothills-adjacent properties. Each segment carries different value drivers and buyer expectations that automated tools often conflate. Real Property Planning provides the condition-based, submarket-specific valuation insight that Issaquah's varied landscape demands.",
      scenarios: [
        "An estate settlement requiring accurate valuation of an Issaquah Highlands home where HOA fees and community amenities affect marketability",
        "A trust administration involving an Olde Town Issaquah property where the home's older construction and character differ from the city's newer housing stock",
        "A family dispute over the value of an inherited Issaquah property where mountain views and trail proximity add subjective value that needs objective assessment",
        "A financial advisor helping a client understand how their Issaquah property's specific location and condition affect realistic sale price",
      ],
      whyLocal: "Issaquah's valuation landscape is more segmented than many buyers and sellers realize. A home in the Highlands with mountain views, HOA amenities, and newer construction trades at a fundamentally different level than a similar-sized home in Olde Town with older systems and no HOA. David's on-site evaluation captures these submarket distinctions rather than applying citywide averages that can mislead clients in either direction.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a home for sale in Issaquah means understanding what buyers in each part of the city expect. A Highlands home competes against community standards that emphasize curb appeal and move-in condition, while an Olde Town property may appeal to buyers looking for character and walkability. Real Property Planning helps Issaquah sellers prioritize preparation based on their specific neighborhood and realistic buyer expectations.",
      scenarios: [
        "An Issaquah Highlands home where community presentation standards mean preparation must meet HOA and neighborhood norms",
        "An Olde Town Issaquah property with older systems that needs honest assessment of which updates will deliver meaningful return",
        "A foothills-area home with trail access and natural surroundings where outdoor presentation and landscaping affect first impressions significantly",
        "An estate property in Issaquah where decades of accumulated belongings need coordinated cleanout before the home can be evaluated and prepared",
      ],
      whyLocal: "Issaquah buyers — particularly in the master-planned communities — have high expectations for move-in condition. But not every update delivers proportional value. David helps Issaquah sellers understand which preparation investments matter in their specific submarket and which improvements buyers in their price range won't pay extra for, avoiding both over-spending and under-preparing.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Issaquah require objectivity about a home's value within its specific community context — whether it's a Highlands home with HOA amenities, an Olde Town property with character appeal, or a foothills lot with mountain views. Real Property Planning provides the neutral, submarket-informed guidance both parties need to reach fair, defensible conclusions.",
      scenarios: [
        "A divorcing couple with a home in Issaquah Highlands where HOA fees, community amenities, and market positioning all factor into the valuation discussion",
        "A family law attorney needing an objective property assessment for an Olde Town Issaquah home where the community's walkability and character add subjective value",
        "A mediated settlement involving an Issaquah property where one party believes mountain views add more value than market data supports",
        "A divorce-related sale where the couple purchased during a different market cycle and disagree on how Issaquah's foothills market has shifted",
      ],
      whyLocal: "Divorce negotiations involving Issaquah property are often complicated by the community's varied submarket dynamics. A Highlands home with mountain views may trade at a premium that an Olde Town property with better walkability doesn't command — or vice versa, depending on market conditions. David's appraisal credentials provide the objective, community-specific analysis that helps both parties and their attorneys move forward productively.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Issaquah may be in a master-planned community with HOA requirements, an Olde Town neighborhood with different character and buyer appeal, or a foothills-adjacent lot with unique features. Trustees need a real estate partner who understands how these distinctions affect sale strategy and can manage the process with appropriate fiduciary care.",
      scenarios: [
        "A successor trustee managing a trust-owned home in Issaquah Highlands where community standards and HOA compliance must be addressed before sale",
        "A corporate trustee needing local expertise for an Olde Town Issaquah property where the housing stock differs significantly from the city's newer communities",
        "A trustee deciding how to handle a trust-owned Issaquah property that backs to trails or open space and has features that require specialized marketing",
        "A beneficiary questioning the value of a trust-owned Issaquah home based on automated estimates that don't account for community-specific dynamics",
      ],
      whyLocal: "Trust properties in Issaquah carry community-specific complexities that standard approaches may overlook. HOA requirements, architectural standards, and the distinction between master-planned and non-HOA neighborhoods all affect how a trustee should approach the sale. David's on-the-ground experience across Issaquah's communities provides trustees with the specificity needed to make well-supported, fiduciary-appropriate decisions.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SUBURBAN TONE GROUP — Redmond (alongside Kirkland, Issaquah)
  // ═══════════════════════════════════════════════════════════════════

  // ── REDMOND ──────────────────────────────────────────────────────
  // Identity: Tech-corridor growth, Microsoft/Nintendo campus influence,
  // wide housing range from Education Hill ramblers to Redmond Ridge new builds
  redmond: {
    "probate-estate-sales": {
      intro: "Redmond's housing market has transformed dramatically over two decades — from a quiet Eastside suburb to one of the state's most active tech-driven markets. Probate and estate properties here range from original ramblers near downtown Redmond and Education Hill to newer homes in Redmond Ridge and the Overlake corridor. Executors need guidance that accounts for how proximity to tech campuses, school boundaries, and rapid neighborhood evolution affect realistic estate property pricing.",
      scenarios: [
        "An executor managing a longtime family home on Education Hill where the property has appreciated significantly but needs updates to compete with newer inventory nearby",
        "Heirs inheriting a Redmond property near the Overlake corridor where mixed-use development and light rail access have fundamentally changed the neighborhood's value proposition",
        "A probate property in downtown Redmond where the lot's redevelopment potential may exceed the home's residential value",
        "Multiple beneficiaries disagreeing on the value of a Redmond Ridge home where HOA features and community amenities complicate comparison to older Redmond neighborhoods",
        "An estate property near Marymoor Park where trail access and location appeal create buyer interest but deferred maintenance limits the realistic price range",
      ],
      whyLocal: "Redmond's transformation from bedroom community to tech hub has created dramatic value differences between neighborhoods that are only minutes apart. An estate home on Education Hill faces different buyer dynamics than one in Bear Creek or Redmond Ridge. Automated valuations frequently miss how campus proximity, light rail expansion, and school boundary changes affect specific properties. David's on-the-ground familiarity with Redmond's micro-markets ensures estates are priced based on how today's buyers actually evaluate these neighborhoods.",
    },
    "senior-transitions": {
      intro: "Many Redmond seniors settled here when the city was still primarily agricultural and suburban — long before Microsoft and the tech boom reshaped the landscape. Now facing transitions to smaller homes, assisted living, or moves closer to family, these homeowners often find that their properties have appreciated far beyond expectations while the neighborhoods around them have changed significantly. Real Property Planning helps Redmond seniors and their families navigate these transitions with honest pricing guidance and practical coordination.",
      scenarios: [
        "A retired couple on Education Hill whose home has appreciated substantially but needs strategic preparation to appeal to today's tech-industry buyers",
        "An adult child helping a parent transition from a Redmond home to senior living while managing the sale from out of state",
        "A longtime homeowner near Bear Creek whose large-lot property appeals to families but requires updates the senior can no longer manage",
        "A Redmond senior relocating to be closer to grandchildren in another state — needing help coordinating the sale, preparation, and timeline simultaneously",
      ],
      whyLocal: "Redmond seniors often occupy properties that have appreciated enormously but may not match current buyer expectations without strategic preparation. The city's tech-driven market creates specific buyer profiles that differ from neighboring communities. David understands how Redmond's evolution — from its agricultural roots to today's campus-adjacent housing demand — affects realistic pricing for transition properties that may not have been updated in decades.",
    },
    "downsizing-services": {
      intro: "Downsizing in Redmond often means leaving a home purchased when the city was quieter and more affordable — before campuses, light rail, and rapid development reshaped the community. Whether transitioning to a condo in the Overlake area, a smaller home closer to downtown, or moving out of the region entirely, Redmond homeowners benefit from guidance that accounts for the city's distinctive market dynamics and buyer expectations.",
      scenarios: [
        "A retired tech professional in Redmond Ridge deciding whether to sell the larger home now or wait for light rail completion to potentially increase value",
        "A couple in their 60s downsizing from an Education Hill home to a lower-maintenance condo — needing clarity on how neighborhood differences affect their sale price",
        "A homeowner near Marymoor Park whose property appeals to outdoor-oriented buyers but requires honest assessment of condition-based pricing",
        "A family selling a large Redmond home after the last child has moved out — unsure how to prioritize preparation in a market that moves quickly",
      ],
      whyLocal: "Redmond's downsizing decisions are uniquely influenced by the city's ongoing transformation. Light rail expansion, campus growth, and changing neighborhood demographics mean that the optimal timing and preparation strategy for a downsizing sale depends heavily on the specific submarket. David's local knowledge helps downsizing homeowners avoid the common mistake of applying generic Eastside assumptions to Redmond's rapidly evolving micro-markets.",
    },
    "executor-support": {
      intro: "Executors handling Redmond estate property face a market that has changed dramatically from when the deceased purchased their home. Properties near Microsoft's campus, along the Sammamish River trail, or in newer communities like Redmond Ridge each present different challenges around valuation, preparation, and buyer expectations. Real Property Planning provides executors with the structured, Redmond-specific guidance needed to manage estate real property responsibly.",
      scenarios: [
        "A first-time executor managing an Education Hill estate where the property needs substantial updates to attract Redmond's quality-conscious buyers",
        "An out-of-state executor who needs a local expert to assess, prepare, and manage the sale of a Redmond estate property",
        "An executor working with a probate attorney on a Redmond home where recent tech-sector layoffs have introduced market uncertainty",
        "Multiple executors managing a Redmond property where disagreements about value stem from comparing the home to its neighbors rather than its actual condition",
      ],
      whyLocal: "Redmond executors often inherit responsibility for properties in a market they may not fully understand — especially if they're out of state or haven't tracked how dramatically the city has changed. David's dual broker-appraiser background gives executors a credentialed, locally grounded resource who can provide realistic assessments rather than optimistic estimates based on peak comparable sales.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing Redmond property matters operate in a market shaped by corporate relocations, tech-industry compensation patterns, and rapid neighborhood change. Whether supporting an executor through a probate sale on Education Hill or advising a trustee on an Overlake-area property affected by transit development, these professionals need a real estate partner who understands Redmond's specific dynamics.",
      scenarios: [
        "A probate attorney managing a Redmond estate where the property's proximity to Microsoft campus creates unique buyer dynamics and pricing considerations",
        "A trust administrator needing accurate valuation for a Redmond Ridge property where HOA standards and community-specific features affect market positioning",
        "An elder law attorney coordinating a Redmond property sale alongside a client's transition to care facilities in the Eastside corridor",
        "A family law attorney handling a Redmond divorce where both parties' employment at local tech companies adds financial complexity to the property division",
      ],
      whyLocal: "Redmond's legal and fiduciary property matters are frequently complicated by the city's tech-driven market volatility. Property values can shift meaningfully based on campus expansion plans, light rail station proximity, and corporate hiring cycles. David provides attorneys and fiduciaries with the grounded, credential-backed analysis needed to navigate these Redmond-specific variables.",
    },
    "valuation-guidance": {
      intro: "Valuation in Redmond requires understanding how dramatically different micro-markets coexist within the same city. A modest rambler near downtown Redmond may sit a mile from a Redmond Ridge home worth twice as much — not because of square footage, but because of community standards, school boundaries, and campus proximity. Real Property Planning provides the kind of locally informed, condition-based valuation guidance that automated tools consistently miss in Redmond's complex market.",
      scenarios: [
        "An executor needing accurate valuation for an Education Hill property where the home's condition doesn't match the neighborhood's rising price trajectory",
        "A family questioning an automated estimate for a Redmond home near Marymoor Park where trail access and location create value that algorithms struggle to quantify",
        "A trustee comparing a Redmond Ridge property's value to older Redmond neighborhoods and needing expert guidance on how HOA features and community standards affect pricing",
        "A couple considering a pre-sale valuation of their Redmond home as part of retirement planning — unsure how light rail expansion affects their specific location",
      ],
      whyLocal: "Redmond's valuation landscape is uniquely challenging because the city's rapid development has created adjacent neighborhoods with dramatically different value trajectories. An Education Hill property and an Overlake condo may both carry Redmond addresses but face completely different buyer pools and pricing dynamics. David's certified appraiser background provides the analytical foundation to navigate these distinctions accurately.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Redmond home for sale involves understanding what today's buyers — often tech professionals with specific expectations about finishes, layout, and energy efficiency — actually value. Whether the property is a well-maintained Redmond Ridge home or an older rambler near downtown Redmond that needs meaningful updates, the preparation strategy should reflect the specific neighborhood's buyer profile rather than generic staging advice.",
      scenarios: [
        "An estate property on Education Hill where decades of personal belongings need professional cleanout before the home can be evaluated for strategic updates",
        "A Redmond Ridge home where HOA exterior standards are met but interior updates are needed to compete with newer homes in the community",
        "A property near the Sammamish River trail where outdoor features and landscaping are key selling points but indoor spaces need modernization",
        "A longtime family home in Bear Creek where the property's large lot is an asset but the home itself needs honest assessment of cost-effective preparation priorities",
      ],
      whyLocal: "Redmond's buyer expectations are shaped by the tech industry's influence on the local market. Buyers often compare properties against newer construction with modern layouts and finishes. David helps sellers identify which preparation investments will genuinely affect sale price in Redmond's specific neighborhoods — rather than spending on upgrades that won't move the needle for the property's actual buyer pool.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Redmond carry unique complexity because the city's tech-driven appreciation has created significant equity in many homes — equity that both parties may value differently based on when they purchased and how they perceive the market's trajectory. Real Property Planning provides the objective, credential-backed guidance needed to navigate Redmond marital property sales with clarity and discretion.",
      scenarios: [
        "A divorcing couple with a Redmond home purchased before the most recent tech-boom appreciation cycle — disagreeing significantly on current value",
        "A family law attorney needing objective assessment for an Education Hill property where both parties' emotional attachment complicates negotiations",
        "A mediated settlement involving a Redmond Ridge home where HOA features, community amenities, and school boundaries add complexity to equitable valuation",
        "A divorce-related sale where one party wants to retain the Redmond home and needs accurate buyout valuation that accounts for condition and market position",
      ],
      whyLocal: "Divorce negotiations in Redmond are frequently complicated by the dramatic appreciation many homes have experienced — sometimes doubling or tripling in value during a marriage. Both parties may have very different views of what the property is worth, especially when tech compensation patterns have influenced when improvements were made. David's appraisal credentials provide the objective foundation needed for fair resolution.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Redmond may be in a master-planned community with specific architectural standards, an older neighborhood where the home predates the city's tech-driven transformation, or a transitional area affected by light rail and campus expansion. Trustees need a real estate partner who understands how these Redmond-specific dynamics affect sale strategy and fiduciary responsibility.",
      scenarios: [
        "A successor trustee managing a trust-owned home on Education Hill where the property has appreciated enormously but hasn't been updated in years",
        "A corporate trustee needing local expertise for a Redmond Ridge property where community-specific marketing knowledge affects sale outcome",
        "A trustee deciding how to handle a trust-owned property near the Overlake corridor where transit-oriented development has changed the neighborhood's character",
        "A beneficiary questioning the trustee's pricing approach for a Redmond property based on automated estimates that don't reflect the home's actual condition",
      ],
      whyLocal: "Trust properties in Redmond exist within a market that rewards precision — small differences in location, condition, and neighborhood trajectory can create meaningful value variations. Trustees who rely on generic Eastside data risk either underpricing in strong micro-markets or overpricing in areas where buyer expectations have shifted. David provides the Redmond-specific analysis that supports sound fiduciary decision-making.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // URBAN TONE GROUP — Everett (alongside Seattle, Tacoma, Lynnwood)
  // ═══════════════════════════════════════════════════════════════════

  // ── EVERETT ──────────────────────────────────────────────────────
  // Identity: County seat, waterfront revival, Boeing influence,
  // diverse neighborhoods from Port Gardner to Silver Lake to Lowell
  everett: {
    "probate-estate-sales": {
      intro: "Everett's housing market reflects the city's working-class heritage and ongoing revitalization — from early 20th-century craftsmans in North Everett to mid-century ramblers in Silver Lake and newer developments near the waterfront. Probate properties in Everett often carry decades of deferred maintenance and personal history, and the city's wide range of neighborhood values means generic pricing approaches frequently miss the mark. Real Property Planning helps executors navigate Everett's specific market dynamics with credentialed guidance.",
      scenarios: [
        "An executor managing a longtime family home in North Everett where the property's craftsman character could appeal to renovation buyers but deferred maintenance limits the realistic price range",
        "Heirs inheriting a mid-century home near Silver Lake where the neighborhood's proximity to Boeing and Naval Station Everett creates a specific buyer pool",
        "A probate property in the Port Gardner waterfront district where revitalization has increased surrounding values but the specific home needs significant work",
        "Multiple beneficiaries disagreeing on the value of an Everett property based on their memories of the neighborhood versus its current market trajectory",
        "An estate home in Lowell or Delta where the industrial surroundings and property characteristics require honest assessment rather than aspirational pricing",
      ],
      whyLocal: "Everett's market is defined by dramatic neighborhood-level variation — a craftsman in Norton-Grand has different dynamics than a rambler near Mall Drive or a view property in Bayside. The city's ongoing waterfront revitalization has created pockets of rapid appreciation adjacent to areas where values remain more stable. David's familiarity with Everett's neighborhood trajectories ensures probate properties are priced based on realistic buyer demand rather than citywide averages.",
    },
    "senior-transitions": {
      intro: "Many Everett seniors have deep roots in the community — often in the same home near Boeing, the naval station, or one of the city's established residential neighborhoods for decades. Transitioning from a longtime Everett home involves not just the logistics of selling property but also the emotional weight of leaving a community where military, aerospace, and working-class heritage have shaped daily life for generations.",
      scenarios: [
        "A retired Boeing employee transitioning from a longtime Silver Lake home to assisted living — the property functionally sound but dated compared to current buyer expectations",
        "An adult child helping an Everett parent move closer to family in another city while coordinating the sale of a home with decades of accumulated belongings",
        "A senior couple in North Everett whose craftsman home has character appeal but needs honest assessment of which updates would meaningfully affect sale price",
        "A veteran transitioning from a home near Naval Station Everett to VA-supported housing — needing efficient, straightforward guidance on the property sale",
      ],
      whyLocal: "Everett's senior transitions often involve properties tied to the city's aerospace and military employment history — homes purchased when Boeing hiring was strong or when the naval station was expanding. These properties may have appreciated differently than the revitalizing waterfront district, and understanding which Everett neighborhoods are trending up versus holding steady is essential for realistic pricing. David helps Everett seniors avoid both underpricing in improving areas and overpricing in neighborhoods where buyer demand is more measured.",
    },
    "downsizing-services": {
      intro: "Downsizing in Everett means leaving a home that may have been purchased during a very different phase of the city's evolution — before waterfront revitalization, before the Paine Field passenger terminal, and before the influx of new development that has begun changing the city's character. Whether moving to a more manageable home within Snohomish County or relocating entirely, Everett homeowners need guidance that reflects the city's current trajectory rather than historical assumptions.",
      scenarios: [
        "A longtime homeowner near Paine Field downsizing after retirement — needing clarity on how the area's commercial development affects residential property values",
        "A couple in North Everett selling their craftsman home to move closer to grandchildren in another state — unsure how to position a character home in a market dominated by newer construction",
        "A senior in the Riverside neighborhood whose waterfront-adjacent location creates interest but whose home needs practical assessment of preparation priorities",
        "A downsizing homeowner near Silver Lake whose property's value is complicated by its proximity to both desirable schools and commercial corridors",
      ],
      whyLocal: "Everett's downsizing decisions are shaped by the city's uneven revitalization — some neighborhoods have seen meaningful appreciation while others remain more stable. Homeowners who've watched waterfront condos go up may overestimate their own property's trajectory, while those in steadily appreciating areas may not realize how much equity they've built. David provides the neighborhood-specific perspective that helps Everett downsizers make informed decisions.",
    },
    "executor-support": {
      intro: "Executors handling estate property in Everett often face practical challenges unique to the county seat — properties with deferred maintenance in transitional neighborhoods, homes near industrial areas where environmental factors affect marketability, and a broad spectrum of housing ages and conditions. Real Property Planning provides executors with structured, locally grounded support for managing estate real property in Everett's complex market.",
      scenarios: [
        "A first-time executor managing a North Everett estate where the home's age, systems condition, and neighborhood require careful evaluation before pricing",
        "An out-of-state executor who needs a trusted local resource to assess and manage the sale of an Everett property they've never visited",
        "An executor working with a Snohomish County probate attorney on an Everett property where the estate's complexity requires coordinated professional support",
        "Multiple executors managing an Everett property where the home's condition and the neighborhood's trajectory create different opinions on sale approach",
      ],
      whyLocal: "Executors unfamiliar with Everett may not realize how dramatically the city's neighborhoods differ — or how quickly some areas are changing while others remain stable. David's presence in Snohomish County ensures executors receive Everett-specific guidance rather than generic suburban assumptions that don't reflect the county seat's distinctive character and market dynamics.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Everett work in a market shaped by industrial heritage, military presence, and ongoing urban renewal. Probate estates near the waterfront, trust properties in established residential areas, and divorce-related sales near Boeing or the naval station all carry Everett-specific dynamics that require locally informed real estate guidance.",
      scenarios: [
        "A probate attorney managing an Everett estate where the property's proximity to the waterfront redevelopment area complicates valuation and buyer-pool assessment",
        "A trust administrator needing reliable guidance for a North Everett craftsman where the home's character appeals to a specific buyer demographic",
        "An elder law attorney coordinating an Everett client's property sale alongside a transition to care facilities in Snohomish County",
        "A family law attorney handling an Everett divorce where one party's Boeing employment and the home's proximity to Paine Field affect both timing and value considerations",
      ],
      whyLocal: "Everett's legal property matters frequently involve the city's industrial and military employment dynamics — Boeing shift schedules that affect showing flexibility, naval station transfers that create seasonal buyer patterns, and revitalization timelines that influence neighborhood value trajectories. David provides attorneys and fiduciaries with the grounded, Everett-specific analysis these situations require.",
    },
    "valuation-guidance": {
      intro: "Valuation in Everett is complicated by the city's wide range of housing stock, neighborhood trajectories, and the influence of large employers on local demand. A craftsman in Norton-Grand, a rambler near Silver Lake, and a newer unit in the waterfront district may all carry Everett addresses but face fundamentally different buyer pools and pricing dynamics. Real Property Planning provides condition-based, neighborhood-specific valuation guidance for Everett's diverse market.",
      scenarios: [
        "An executor needing accurate valuation for a North Everett craftsman where character features and location appeal compete with deferred maintenance and age-related concerns",
        "A family questioning an automated estimate for an Everett property near the waterfront where revitalization has created rapid but uneven appreciation",
        "A trustee comparing an Everett property's value to nearby Lynnwood or Mukilteo homes — needing expert guidance on how the county seat's dynamics differ",
        "A divorcing couple whose Silver Lake home has appreciated steadily but where condition issues create disagreement about realistic current value",
      ],
      whyLocal: "Everett's valuation challenges stem from the city's role as a county seat with industrial, military, and revitalization dynamics all operating simultaneously. Properties in the same zip code can face dramatically different market conditions depending on their specific neighborhood, proximity to employers, and the trajectory of surrounding development. David's certified appraiser background provides the analytical framework to navigate these Everett-specific complexities.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing an Everett home for sale requires understanding what the city's buyer pool actually expects — which varies significantly by neighborhood. A North Everett craftsman may benefit from preserving original character while addressing systems and safety, while a Silver Lake rambler might need practical modernization to compete. Real Property Planning helps Everett sellers identify preparation priorities that align with their specific neighborhood's buyer expectations.",
      scenarios: [
        "An estate property in North Everett where decades of personal belongings, workshop materials, and deferred maintenance create a significant cleanout and preparation challenge",
        "A craftsman home where original woodwork and character features should be preserved but dated systems and finishes need strategic updating",
        "A Silver Lake property where basic modernization — kitchen, bathrooms, flooring — would meaningfully affect the sale price versus selling as-is to renovation buyers",
        "A home near the waterfront district where exterior presentation and curb appeal matter more than interior upgrades due to the area's buyer demographic",
      ],
      whyLocal: "Everett's diverse housing stock means preparation strategies vary dramatically by neighborhood and property type. What works for a Bayside view property doesn't apply to a Lowell ranch, and the budget for preparation should reflect the realistic return in each specific micro-market. David helps Everett sellers avoid over-investing in updates that won't move the needle — or under-preparing in neighborhoods where presentation genuinely affects sale price.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Everett often involve homes connected to the city's major employers — Boeing, the naval station, and the healthcare systems that serve as the county seat's employment anchors. These sales carry practical complications around work schedules, potential relocation, and the emotional dynamics of dividing a home in a community where both parties may have deep roots.",
      scenarios: [
        "A divorcing couple with a Silver Lake home purchased during Boeing's expansion — disagreeing on whether the property's value reflects current market conditions or peak-cycle pricing",
        "A family law attorney needing objective assessment for a North Everett property where both parties have different visions for whether to sell or retain",
        "A mediated settlement involving an Everett home where one party's military service creates timeline and relocation complications",
        "A divorce-related sale in a transitional Everett neighborhood where the property's future value trajectory is uncertain and both parties see it differently",
      ],
      whyLocal: "Everett divorces frequently involve employment-related complications — Boeing layoff cycles, naval station transfers, and the financial dynamics of single-income transitions in a county-seat market. David provides the objective, locally informed analysis that helps both parties and their attorneys move forward with realistic expectations about the Everett property's value and marketability.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Everett may range from a well-maintained North Everett craftsman to a mid-century home near Silver Lake or a property in a transitional neighborhood where market dynamics are shifting. Trustees need a real estate partner who understands how Everett's specific neighborhood trajectories, buyer demographics, and property conditions affect sale strategy and fiduciary decision-making.",
      scenarios: [
        "A successor trustee managing a trust-owned craftsman in North Everett where preservation of character features must be balanced against practical sale preparation",
        "A corporate trustee needing local expertise for an Everett property near the waterfront where revitalization complicates the decision between holding and selling",
        "A trustee handling a trust-owned Silver Lake property where the home's condition and neighborhood position require careful analysis of preparation versus as-is sale",
        "A beneficiary questioning the value of a trust-owned Everett property based on automated estimates that don't account for the city's neighborhood-level variation",
      ],
      whyLocal: "Trust properties in Everett require understanding the county seat's distinctive market dynamics — where industrial heritage, military presence, and urban renewal create conditions that standard suburban analysis doesn't capture. David provides trustees with the Everett-specific insight needed to make well-supported fiduciary decisions in a market where neighborhood trajectory matters as much as property condition.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SMALLTOWN TONE GROUP — Duvall (alongside Snohomish, Woodinville)
  // ═══════════════════════════════════════════════════════════════════

  // ── DUVALL ──────────────────────────────────────────────────────
  // Identity: Small riverside community in Snoqualmie Valley,
  // rural-residential character, limited inventory, tight-knit community
  duvall: {
    "probate-estate-sales": {
      intro: "Duvall's small size and rural-residential character create distinctive challenges for probate and estate sales. Properties here range from modest homes in the walkable town core to larger parcels along the Snoqualmie River valley — and the limited inventory means each sale draws from a smaller buyer pool than in nearby Eastside cities. Real Property Planning helps executors and families navigate Duvall's unique dynamics with local knowledge and credentialed valuation guidance.",
      scenarios: [
        "An executor managing a family homestead on the outskirts of Duvall where acreage, outbuildings, and rural features require specialized marketing beyond standard residential approaches",
        "Heirs inheriting a home in Duvall's town center who live out of state and need guidance on a market they may not have tracked since childhood",
        "A probate property on a larger Snoqualmie Valley lot where the land's agricultural or equestrian potential affects value differently than in suburban markets",
        "An estate home where the deceased was well-known in Duvall's tight-knit community — creating both opportunities and sensitivities around the sale process",
        "Multiple beneficiaries disagreeing about a Duvall property's value because online estimates don't account for rural features, lot size, or the town's limited comparable sales",
      ],
      whyLocal: "Duvall's real estate market operates differently than nearby Eastside suburbs because of its small inventory, rural character, and the specific buyer profiles drawn to a town of this size. Automated valuations often miss how acreage, outbuildings, river proximity, and the community's small-town identity affect pricing. David's familiarity with Snoqualmie Valley properties helps executors set realistic expectations in a market where standard suburban comparisons fall short.",
    },
    "senior-transitions": {
      intro: "Seniors in Duvall have often lived in the community for decades — drawn by its quiet pace, natural surroundings, and the kind of small-town relationships that make leaving especially difficult. When it's time to transition to a smaller home, assisted living, or a move closer to family, these homeowners face a market with limited senior housing options locally and properties that may include features — gardens, workshops, acreage — that require thoughtful preparation for sale.",
      scenarios: [
        "A longtime Duvall homeowner moving to assisted living in Redmond or Woodinville while managing the sale of a home with gardens, outbuildings, and years of accumulated belongings",
        "An adult child coordinating a parent's transition from a Duvall property — handling cleanout, preparation, and sale from Seattle or further away",
        "A retired couple whose Duvall home sits on a larger lot that's become too much to maintain — needing guidance on whether to sell the property whole or consider a lot-line approach",
        "A senior in Duvall whose community connections make the transition emotionally complex — needing a patient, relationship-oriented process",
      ],
      whyLocal: "Duvall's limited local senior living options mean most transitions involve relocating to larger nearby communities — Redmond, Woodinville, or Monroe. This creates a two-market challenge: selling a rural-character property in a small market while simultaneously navigating housing options elsewhere. David's valley-wide familiarity helps families coordinate both sides of this transition with realistic expectations and compassionate pacing.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Duvall home often means leaving a property with features that don't exist in more compact markets — a large garden, workshop space, riverside access, or the kind of privacy that attracted the homeowner to this valley community in the first place. The decision to downsize is practical, but in Duvall it carries additional complexity because the buyer who values what you're leaving behind may be a very specific type of buyer.",
      scenarios: [
        "A homeowner in Duvall's town core downsizing to a smaller home in Woodinville or Redmond — needing clarity on how the property's small-town location affects buyer interest compared to Eastside suburbs",
        "A couple on a larger Duvall parcel who want to simplify but aren't sure whether the property's acreage and outbuildings are an asset or a limiting factor for today's buyers",
        "A retiree whose Duvall home has been a hobby property — with workshop, greenhouse, or equestrian features — that needs honest assessment of how these features affect market value",
        "A downsizing homeowner who wants to stay in the Snoqualmie Valley but needs to understand the financial tradeoffs of Duvall versus Carnation or Monroe options",
      ],
      whyLocal: "Duvall's downsizing market is shaped by the town's small inventory and specific buyer appeal. Properties with rural features attract buyers who are intentionally seeking a small-town lifestyle — but this is a narrower pool than suburban downsizing markets serve. David helps Duvall homeowners understand how their specific property features, lot characteristics, and location within the valley affect realistic timeline and pricing expectations.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Duvall face challenges specific to small-town real estate — limited comparable sales data, properties with rural features that complicate standard valuation, and a buyer pool that's smaller and more specialized than in neighboring Eastside cities. Real Property Planning provides executors with the structured, locally informed support needed to navigate Duvall's distinctive market.",
      scenarios: [
        "A first-time executor managing a Duvall estate where the property includes acreage, outbuildings, or agricultural features that standard residential approaches don't adequately address",
        "An out-of-state executor who needs a trusted Snoqualmie Valley contact to assess, prepare, and manage the sale of a Duvall property",
        "An executor working with an attorney on a Duvall estate where the limited local comparable sales make pricing particularly challenging",
        "Multiple executors disagreeing about a Duvall property's value because they're comparing it to Eastside suburban homes rather than recognizing the small-town market's different dynamics",
      ],
      whyLocal: "Duvall's small market means executors can't rely on the volume of comparable sales that larger communities provide. Each property's specific features — lot size, outbuildings, river proximity, and condition — carry more weight in pricing decisions. David's experience with Snoqualmie Valley properties provides executors with the granular, property-specific guidance that automated tools and out-of-area agents consistently miss in communities this size.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing Duvall property matters need a real estate partner who understands small-town market dynamics — where limited inventory means longer exposure times, where rural property features require specialized assessment, and where the community's tight-knit character influences how sales are perceived and received.",
      scenarios: [
        "A probate attorney managing a Duvall estate where acreage and outbuildings require assessment beyond standard residential valuation approaches",
        "A trust administrator needing guidance on a Duvall property where the limited comparable sales make establishing fair market value more complex",
        "An elder law attorney coordinating a Duvall client's property sale alongside a transition to care facilities in Redmond or Woodinville",
        "A family law attorney handling a Duvall divorce where the property's rural features and small-town market dynamics affect equitable distribution calculations",
      ],
      whyLocal: "Legal matters involving Duvall property carry complications that attorneys accustomed to suburban markets may not anticipate — including how limited inventory affects exposure time, how rural features interact with standard appraisal methods, and how the community's character influences buyer behavior. David provides attorneys and fiduciaries with the Snoqualmie Valley-specific analysis these situations demand.",
    },
    "valuation-guidance": {
      intro: "Valuation in Duvall is uniquely challenging because of the town's small inventory, the prevalence of properties with non-standard features, and the limited comparable sales data available. A home in the town core, a property with river frontage, and a parcel with acreage and outbuildings may all carry Duvall addresses but face very different valuation dynamics. Real Property Planning provides the locally grounded, condition-based analysis that Duvall properties require.",
      scenarios: [
        "An executor needing accurate valuation for a Duvall property where limited recent comparable sales make automated estimates unreliable",
        "A family questioning an online estimate for a Duvall home where the lot's size, outbuildings, or river proximity create value that algorithms miss",
        "A trustee needing guidance on a Duvall property with equestrian or agricultural features that standard residential comparisons don't capture",
        "A homeowner seeking pre-sale valuation of a Duvall property as part of retirement planning — unsure how the town's small-market dynamics affect realistic pricing",
      ],
      whyLocal: "Duvall's valuation challenges are fundamentally different from suburban Eastside markets. The small number of annual transactions means each comparable sale carries outsized influence, and properties with acreage, outbuildings, or river features require assessment methods that go beyond standard residential analysis. David's certified appraiser background provides the analytical depth that Duvall's distinctive properties demand.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Duvall home for sale requires understanding what draws buyers to this community — and what they'll accept versus what they won't. Buyers choosing Duvall are typically seeking small-town character, space, and privacy — but they still expect functional systems, clean presentation, and honest disclosure about property condition. The preparation strategy should honor the property's character while addressing the practical concerns that affect sale price in a small market.",
      scenarios: [
        "An estate property in Duvall where years of accumulated belongings, workshop materials, and outdoor equipment require extensive cleanout before the home can be properly assessed",
        "A home in the town core where basic updates — paint, fixtures, landscaping — would meaningfully improve buyer perception without over-investing for the market",
        "A larger Duvall property where outbuildings, fencing, and acreage features need practical attention to present well to the specific buyers drawn to this kind of property",
        "A longtime family home where sentimental features and personal landscaping need sensitive handling during preparation for sale",
      ],
      whyLocal: "Duvall's buyer pool has different expectations than suburban Eastside markets. Over-improving a Duvall home with trendy finishes may not generate the return it would in Redmond or Kirkland, while under-preparing can extend time on market in a community where inventory already moves more slowly. David helps Duvall sellers find the right preparation balance for their specific property and the realistic buyer profile it will attract.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Duvall are complicated by the community's small size, limited inventory, and the fact that rural-character properties don't have the volume of comparable sales that larger communities provide. When both parties need clarity on property value, the small-town dynamics and non-standard property features that make Duvall special also make objective valuation more complex.",
      scenarios: [
        "A divorcing couple with a Duvall home where acreage, outbuildings, or equestrian features make standard comparable-based valuation difficult",
        "A family law attorney needing objective assessment for a Duvall property in a market where limited recent sales create disagreement about current value",
        "A mediated settlement involving a Duvall home where one party wants to retain the property — needing accurate buyout valuation in a small market with few comps",
        "A divorce-related sale where the couple's emotional attachment to Duvall's community character is complicating practical sale decisions",
      ],
      whyLocal: "Divorce negotiations involving Duvall property require understanding that standard suburban valuation methods don't fully apply. The town's limited annual sales volume, the premium or discount that rural features create, and the narrower buyer pool all affect realistic pricing. David's appraisal background provides the objective, locally grounded analysis needed for equitable resolution when Duvall's small-market dynamics make standard approaches insufficient.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Duvall may include features that trustees and corporate trust departments rarely encounter — acreage, outbuildings, agricultural elements, or river-adjacent parcels where standard residential trust administration approaches need adaptation. Real Property Planning provides trustees with the locally informed, property-specific guidance that Duvall's distinctive real estate requires.",
      scenarios: [
        "A successor trustee managing a trust-owned Duvall property with acreage and outbuildings — unsure how these features affect sale strategy and timeline in a small market",
        "A corporate trustee needing local expertise for a Duvall home where the community's limited inventory means standard marketing timelines may not apply",
        "A trustee handling a trust-owned property along the Snoqualmie Valley where river proximity and environmental considerations affect sale preparation",
        "A beneficiary questioning the value of a trust-owned Duvall property because automated estimates don't account for rural features and limited comparable sales",
      ],
      whyLocal: "Trust properties in Duvall require fiduciary guidance that accounts for the community's distinctive market — small inventory, specialized buyer interest, and properties with features that don't fit neatly into standard residential categories. David provides trustees with the Snoqualmie Valley knowledge and appraisal foundation needed to make well-supported decisions in a market where the usual suburban assumptions don't apply.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // MILITARY TONE — Lakewood
  // Identity: JBLM-adjacent, lakefront properties (American Lake,
  // Gravelly Lake), Tillicum, diverse housing, military buyer influence
  // ═══════════════════════════════════════════════════════════════════

  lakewood: {
    "probate-estate-sales": {
      intro: "Lakewood's real estate market is shaped by the proximity of Joint Base Lewis-McChord, lakefront properties on American Lake and Gravelly Lake, and a wide range of housing types across the city's diverse neighborhoods. When a probate or estate sale involves Lakewood property, understanding how military buyer demographics, lakefront premiums, and neighborhood-specific conditions affect pricing is essential. Real Property Planning provides the locally grounded guidance that Lakewood executors and families need.",
      scenarios: [
        "An estate property on or near American Lake where the waterfront location carries a premium but the home's age and condition create pricing complexity",
        "A probate sale in the Tillicum area where JBLM proximity influences the buyer pool and rental-versus-owner-occupied dynamics affect strategy",
        "Multiple heirs managing an inherited Lakewood home where one sibling lives near the base and others are scattered across the country",
        "An estate home near Gravelly Lake where the exclusive enclave character creates a limited comparable-sales environment",
        "A vacant estate property in Lakewood that needs assessment, cleanout, and preparation before it can compete with updated listings in a price-sensitive market",
      ],
      howWeHelp: [
        "Property-specific valuation that distinguishes between Lakewood's lakefront, JBLM-adjacent, and suburban-interior submarkets",
        "Assessment of how military buyer demographics and rental demand affect optimal sale strategy for estate properties",
        "Coordination with probate attorneys on court documentation and timeline requirements",
        "Property preparation guidance calibrated to Lakewood's price-sensitive market — focusing investment where it generates measurable return",
        "Clear communication with multiple heirs or parties managing from different locations, including military relocations",
        "Full transaction management from initial assessment through closing",
      ],
      whyLocal: "Lakewood's market operates differently from neighboring Tacoma or University Place because of JBLM's influence on buyer demographics, the distinct lakefront enclaves, and the city's wide price range. An estate property on American Lake faces a completely different buyer pool than one near the base. David Stein's on-site assessment accounts for these Lakewood-specific dynamics — military influence, lakefront premiums, and the practical realities of selling estate property in a market with diverse buyer expectations.",
    },
    "senior-transitions": {
      intro: "Many Lakewood seniors have deep roots in the community — some connected to decades of military service, others drawn by the lakefront lifestyle or the city's established neighborhoods. When it's time to transition from a longtime Lakewood home, the process involves understanding how the city's unique market dynamics affect the sale while coordinating the move to a senior living community or family home. Real Property Planning helps Lakewood families navigate this transition with patience and practical expertise.",
      scenarios: [
        "A retired military couple on American Lake whose home has been the family gathering place for decades — now transitioning to a community with more support services",
        "An adult child coordinating a parent's move from a Lakewood home to a Pierce County assisted living facility while managing the sale from out of state",
        "A senior in a Tillicum-area home where the property's proximity to JBLM affects buyer demographics and the family needs guidance on realistic timeline expectations",
        "A longtime Lakewood homeowner whose lakefront or lake-view property requires specialized marketing to reach the right buyer pool",
        "A family balancing urgency around a parent's care needs with the practical steps of preparing and selling a Lakewood home",
      ],
      howWeHelp: [
        "Condition-based valuation that accounts for how Lakewood's different buyer segments — military families, lakefront buyers, local families — evaluate properties",
        "Strategic preparation recommendations calibrated to Lakewood's market — identifying which updates matter in each price tier",
        "Timeline coordination aligned with the senior's move to assisted living, a family member's home, or a smaller local residence",
        "Patient, respectful communication with seniors and their families throughout the process",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for the property's submarket",
        "Full-service management so the family can focus on their parent's wellbeing",
      ],
      whyLocal: "Lakewood seniors often own homes in neighborhoods where military-influenced buyer cycles and lakefront dynamics create pricing patterns that differ from the broader Pierce County market. A senior selling a home near American Lake faces different considerations than one in a Tillicum neighborhood. David's experience with Lakewood's specific submarkets helps families set realistic expectations and prepare properties in ways that align with actual buyer demand.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Lakewood home involves navigating a market where lakefront properties, military-adjacent neighborhoods, and established suburban areas each attract different buyers and carry different values. Whether moving to a smaller Lakewood home, a Pierce County senior community, or relocating to be near family elsewhere, the process benefits from someone who understands how Lakewood's distinct submarkets affect both the sale proceeds and realistic next-step options.",
      scenarios: [
        "A retired couple on Gravelly Lake whose large lakefront home no longer fits their lifestyle — needing accurate pricing in a niche market with limited comparable sales",
        "A military retiree in a Tillicum-area home who wants to downsize locally but needs to understand how JBLM-area pricing compares to other Lakewood neighborhoods",
        "A senior whose children have relocated away from the JBLM area, considering whether to stay in Lakewood or move closer to family",
        "A homeowner near American Lake weighing whether to sell and downsize within the lakefront community or transition to a more manageable property type",
      ],
      whyLocal: "Downsizing decisions in Lakewood are complicated by the city's segmented market — lakefront homes, JBLM-adjacent properties, and suburban-interior neighborhoods each have different demand profiles and sale timelines. Understanding how proceeds from one submarket translate into options in another requires the kind of local comparative analysis that David provides.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Lakewood face a market with distinctive dynamics — military buyer influence near JBLM, lakefront premiums on American and Gravelly Lakes, and a diverse range of housing types across the city's neighborhoods. Whether the estate property is a lakefront home, a property near the base, or a home in one of Lakewood's established suburban areas, executors need guidance that accounts for these Lakewood-specific factors.",
      scenarios: [
        "A newly appointed executor managing a Lakewood estate property while stationed elsewhere — unfamiliar with how JBLM proximity and lakefront premiums affect local pricing",
        "An estate home on American Lake where the lakefront location carries significant value but the limited comparable sales make pricing complex",
        "Co-executors who disagree about a Lakewood property's value because one references lakefront sales and the other references nearby suburban comps",
        "An estate property in Tillicum that has been used as a rental and needs transition from investment to owner-occupied sale strategy",
        "An executor coordinating with a probate attorney on a Lakewood property where military PCS cycles affect buyer availability and timing",
      ],
      howWeHelp: [
        "Property-specific assessment that accounts for Lakewood's lakefront premiums, JBLM buyer demographics, and neighborhood-level pricing differences",
        "Defensible pricing documentation suitable for beneficiary review and court records",
        "Guidance on whether the property's optimal strategy targets military buyers, lakefront buyers, or the broader Pierce County market",
        "Coordination of cleanout, preparation, and staging appropriate for the property's specific submarket",
        "Regular communication for executors managing from out of area — including those on military assignments",
        "End-to-end transaction management from assessment through closing",
      ],
      whyLocal: "Lakewood executors face a market where JBLM's PCS (Permanent Change of Station) cycles create seasonal buyer fluctuations, and lakefront properties operate in a niche market with limited inventory. An executor who doesn't account for these Lakewood-specific patterns risks mispricing or mistiming the sale. David's local experience helps executors navigate these dynamics with confidence.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Lakewood need a real estate partner who understands the city's military-influenced market, lakefront property dynamics, and the diverse housing stock across Lakewood's neighborhoods. Real Property Planning works with Lakewood-area legal professionals as a responsive, credentialed resource for estate, trust, probate, divorce, and guardianship property matters.",
      scenarios: [
        "A probate attorney managing a Lakewood estate where the property's lakefront location creates valuation complexity that requires more than automated estimates",
        "A trustee overseeing trust-held property near JBLM who needs guidance on how military buyer demographics affect sale strategy and timing",
        "A family law attorney handling a divorce involving a Lakewood home where the parties disagree on how JBLM proximity affects value",
        "An elder law attorney coordinating a client's lakefront property sale alongside a transition to assisted living in Pierce County",
        "An estate planning attorney advising a Lakewood client on property disposition where rental history and military tenant considerations complicate the analysis",
      ],
      howWeHelp: [
        "Defensible property assessments that account for Lakewood's lakefront, military-adjacent, and suburban submarkets",
        "Responsive communication calibrated to legal timelines and professional documentation standards",
        "Pricing documentation grounded in appraisal-level methodology for court proceedings and settlement negotiations",
        "Strategic guidance on property preparation appropriate for Lakewood's specific buyer demographics",
        "Coordination across legal, financial, and family stakeholders with clear reporting",
        "A consistent local resource for ongoing property-related referrals in the JBLM corridor",
      ],
      whyLocal: "Lakewood's legal professionals encounter property matters where military influence, lakefront premiums, and the city's diverse housing stock create valuation challenges that generic approaches miss. A home on Gravelly Lake and a property in Tillicum represent fundamentally different markets — yet both are 'Lakewood.' David provides the submarket-specific analysis that attorneys and fiduciaries need for defensible opinions.",
    },
    "valuation-guidance": {
      intro: "Lakewood's real estate market presents distinct valuation challenges — lakefront properties on American Lake and Gravelly Lake operate in a niche market, JBLM-adjacent areas are influenced by military buyer cycles, and the city's broader neighborhoods span a wide price range. When accurate property valuation matters for estate planning, divorce, trust administration, or a pending sale, Lakewood's segmented market makes property-specific assessment essential.",
      scenarios: [
        "An estate planning attorney needing current market valuation for a lakefront Lakewood property where limited comparable sales make automated estimates unreliable",
        "Divorcing spouses who disagree on their Lakewood home's value because one cites lakefront sales and the other references more modest nearby neighborhoods",
        "A trustee needing documented valuation for a trust-owned Lakewood property where military rental history complicates the owner-occupied market comparison",
        "Heirs questioning an automated estimate for an inherited Lakewood home that doesn't account for JBLM buyer demographics or the property's specific condition",
      ],
      whyLocal: "Lakewood's valuation landscape is defined by three distinct submarkets — exclusive lakefront, JBLM-influenced, and suburban-general — that automated tools frequently conflate. A property on American Lake may be worth multiples of a similar-sized home near the base, but only if condition and access meet lakefront buyer expectations. David's certified appraisal credentials provide the property-specific analysis that Lakewood's segmented market requires.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Lakewood home for sale requires understanding which buyer segment the property will attract — lakefront buyers expect different presentation than military families or suburban families. Real Property Planning helps Lakewood sellers identify which improvements generate return in their specific submarket, avoiding both under-preparation that leaves value on the table and over-investment that the market won't reward.",
      scenarios: [
        "A lakefront home on American Lake that needs dock assessment, exterior updates, and presentation that highlights the waterfront lifestyle",
        "A Tillicum-area home where targeted, cost-effective preparation can meaningfully improve appeal to military-family buyers without exceeding the neighborhood's price ceiling",
        "An estate property in Lakewood's suburban interior that needs cleanout, paint, and carpet to compete with updated listings in the same price range",
        "A former rental property near JBLM being converted from investment presentation to owner-occupied sale — needing guidance on which tenant-era wear to address",
      ],
      whyLocal: "Preparation strategy in Lakewood depends heavily on which submarket the property serves. Lakefront homes warrant premium staging and exterior investment; JBLM-adjacent homes need practical, cost-conscious improvements that appeal to military-family budgets. David's experience with Lakewood's distinct buyer segments helps sellers invest preparation dollars where they'll generate the strongest return.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Lakewood are complicated by the city's segmented market — lakefront homes, JBLM-adjacent properties, and suburban-interior neighborhoods each have different valuations, and spouses may reference very different comparable sales to support their positions. Real Property Planning provides the objective, property-specific pricing that Lakewood divorce situations require, including situations involving military service members and PCS-related timelines.",
      scenarios: [
        "A military couple divorcing where one spouse is being reassigned and the Lakewood home needs to be sold on a PCS-driven timeline",
        "A family law attorney needing neutral pricing for a Lakewood lakefront property where both parties cite different comparable sales from different submarkets",
        "A mediated divorce involving a Lakewood home where one party wants to retain the property — needing buyout valuation that accounts for JBLM market dynamics",
        "A contentious divorce where the Lakewood home's proximity to the base creates disagreement about whether military rental demand supports a higher or lower valuation",
      ],
      whyLocal: "Divorce negotiations involving Lakewood property often involve military-specific considerations — PCS timelines, BAH (Basic Allowance for Housing) rental dynamics, and the question of whether the home's value reflects its owner-occupied appeal or its rental income potential. David's experience with JBLM-area properties helps both parties and their attorneys arrive at fair, defensible valuations that account for Lakewood's specific market realities.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Lakewood may include lakefront homes on American or Gravelly Lake, established suburban properties, or homes in JBLM-adjacent neighborhoods — each requiring different fiduciary considerations. Real Property Planning provides trustees with the locally informed, defensible guidance that Lakewood's segmented real estate market demands.",
      scenarios: [
        "A successor trustee managing a trust-owned lakefront property on American Lake where the limited comparable sales and premium location require on-site assessment",
        "A corporate trustee needing local expertise for a Lakewood property where JBLM buyer demographics and military rental cycles affect optimal sale timing",
        "A trustee preparing to sell a trust-owned home in Lakewood's suburban interior where the property competes against a range of housing types and price points",
        "A beneficiary questioning the trustee's pricing because automated estimates don't distinguish between Lakewood's lakefront and non-lakefront submarkets",
      ],
      whyLocal: "Trust property sales in Lakewood require fiduciary guidance that accounts for the city's distinct market segments. A trustee who prices a lakefront property based on suburban comps — or vice versa — creates fiduciary exposure. David's dual credentials provide the submarket-specific analysis that Lakewood trust situations demand, ensuring pricing decisions can withstand beneficiary scrutiny.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SUBURBAN TONE — Bothell (cross-county, distinct from Kirkland/
  // Issaquah/Redmond via dual-county identity, Canyon Park growth,
  // UW Bothell campus influence, Sammamish River corridor)
  // ═══════════════════════════════════════════════════════════════════

  bothell: {
    "probate-estate-sales": {
      intro: "Bothell straddles the King and Snohomish County line — a dual-county position that creates unique real estate dynamics for probate and estate sales. Comparable sales may come from either side of the county boundary, buyer demographics shift between the original downtown core and the Canyon Park corridor, and the UW Bothell campus has transformed the city's northern edge. Real Property Planning provides the cross-county expertise that Bothell estate situations require.",
      scenarios: [
        "An estate property in Bothell's original downtown core where the home's mid-century character and walkable location appeal to a different buyer than Canyon Park's newer construction",
        "Multiple heirs managing an inherited home near the King-Snohomish County line where comparable sales from either county support different pricing conclusions",
        "A probate sale involving a property near UW Bothell where the campus's growth has changed the neighborhood's buyer profile and development potential",
        "An estate home along the Sammamish River corridor where the lot characteristics and trail access add value that automated estimates miss",
        "An out-of-state executor unfamiliar with how Bothell's dual-county location affects which comparable sales are most relevant",
      ],
      howWeHelp: [
        "Cross-county valuation analysis that draws comparable sales from both King and Snohomish County neighborhoods as appropriate",
        "Assessment of how Canyon Park redevelopment and UW Bothell campus growth affect nearby residential values",
        "Coordination with probate attorneys on court documentation and timeline requirements",
        "Property preparation guidance that reflects what Bothell's specific buyer segments expect in each submarket",
        "Clear communication with multiple heirs or parties managing the process from different locations",
        "Full transaction management accounting for Bothell's dual-county market dynamics",
      ],
      whyLocal: "Bothell's dual-county position means that a home near the Snohomish County line may compete against Canyon Park listings, while one near downtown Bothell competes with Kenmore or Woodinville. This cross-boundary dynamic makes automated estimates — which typically draw from a single geographic radius — especially unreliable. David Stein's on-site assessment accounts for which comparable sales actually apply to each Bothell property based on its specific location and buyer pool.",
    },
    "senior-transitions": {
      intro: "Many Bothell seniors have lived in the community through decades of transformation — from a quiet crossroads town to a growing city with a university campus, expanding commercial corridors, and evolving neighborhoods. When it's time to transition from a longtime Bothell home, the sale involves understanding how the city's growth has affected property values while coordinating a move that may lead to a nearby senior community, a family member's home, or a smaller local residence.",
      scenarios: [
        "A senior couple in original downtown Bothell whose mid-century home sits in a neighborhood that has changed significantly — needing guidance on how current buyer expectations affect pricing",
        "An adult child coordinating a parent's move from a Bothell home to a Snohomish or King County senior living community while managing the sale remotely",
        "A longtime homeowner near the Sammamish River corridor whose property benefits from trail access and natural setting but hasn't been updated in years",
        "A family balancing a parent's care timeline with the practical requirements of preparing a Bothell home for a market that rewards updated condition",
        "A senior in a Canyon Park area home where newer surrounding development creates both competition and buyer interest",
      ],
      howWeHelp: [
        "Condition-based valuation that reflects how Bothell's evolving buyer pool evaluates older homes against newer Canyon Park construction",
        "Strategic preparation guidance specific to Bothell — which investments matter for original-core homes versus Canyon Park area properties",
        "Timeline coordination aligned with the senior's move to a care community, family home, or smaller residence",
        "Patient communication with seniors and adult children managing the transition from different locations",
        "Vendor coordination for cleanout, repairs, and staging appropriate for Bothell's market expectations",
        "Full-service management so the family can focus on the transition rather than transaction logistics",
      ],
      whyLocal: "Bothell seniors often own homes in the original core or established neighborhoods that have been reshaped by the city's growth. The gap between what these homes meant to the family and what today's market values can be significant — especially when competing against newer construction in Canyon Park. David's appraisal background helps families understand where their Bothell property actually stands and what preparation makes practical sense.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Bothell home means navigating a market that spans two counties and includes everything from mid-century homes in the original downtown to newer condos and townhomes near Canyon Park. Whether staying in the Bothell area or relocating, the process benefits from someone who understands how the city's diverse housing options and dual-county dynamics affect both the sale and realistic next-step planning.",
      scenarios: [
        "A couple in a larger Bothell home near the Snohomish County line who want to downsize to a condo or townhome — needing to understand how their sale proceeds translate in the current market",
        "A retiree in original downtown Bothell considering whether to stay in the community in a smaller home or move closer to family elsewhere",
        "A homeowner near Canyon Park whose property competes with newer construction — uncertain whether the home's strengths offset its age in today's market",
        "A family helping a parent transition from a Sammamish River corridor home to a more manageable living situation",
      ],
      whyLocal: "Downsizing in Bothell is complicated by the city's dual-county housing market and the wide range of replacement options — from established King County neighborhoods to newer Snohomish County developments. Understanding how sale proceeds from one Bothell submarket translate into purchasing power in another requires cross-county market knowledge that David provides.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Bothell face a market where the city's dual-county position, the Canyon Park growth corridor, and the contrast between established neighborhoods and newer development all affect pricing and strategy. Whether the estate property is a mid-century home near downtown, a property near UW Bothell, or a home in the Canyon Park area, executors need guidance that accounts for Bothell's specific cross-county dynamics.",
      scenarios: [
        "A newly appointed executor managing a Bothell estate property while living out of state — unsure whether King County or Snohomish County comparable sales are more relevant",
        "An estate home near UW Bothell where the university's growth has changed the neighborhood — creating questions about development potential versus residential value",
        "Co-executors who disagree about a Bothell property's value because one references Canyon Park sales and the other cites original-core comparables",
        "An estate property along the Sammamish River corridor where trail access and natural setting create value that automated tools don't capture",
        "An executor coordinating with a probate attorney on a Bothell property where the dual-county location creates jurisdictional considerations",
      ],
      howWeHelp: [
        "Cross-county property assessment drawing relevant comparables from both King and Snohomish County as appropriate",
        "Defensible pricing documentation using appraisal-level methodology for beneficiary review and court records",
        "Guidance on whether the estate property's value is driven by residential use, development potential, or lot characteristics",
        "Coordination of cleanout, preparation, and staging appropriate for the property's specific Bothell submarket",
        "Regular communication for executors managing remotely",
        "End-to-end transaction management accounting for Bothell's dual-county dynamics",
      ],
      whyLocal: "Bothell executors face the unusual challenge of a market that straddles two counties — meaning comparable sales, buyer demographics, and even tax implications can vary based on which side of the boundary the property sits. David's experience with Bothell's specific cross-county dynamics helps executors avoid the pricing errors that occur when the wrong comparables are applied.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Bothell need a real estate partner who understands the city's dual-county market dynamics, the contrast between established and newly developed neighborhoods, and the documentation standards that legal proceedings require. Real Property Planning works with Bothell-area legal professionals as a responsive, credentialed resource for property matters that span King and Snohomish County boundaries.",
      scenarios: [
        "A probate attorney managing a Bothell estate where the dual-county location creates questions about which comparable sales are most defensible",
        "A trustee overseeing trust-held property near Canyon Park who needs guidance on how the area's rapid development affects the property's current value",
        "A family law attorney handling a divorce involving a Bothell home where the parties disagree about value based on different county-side comparables",
        "An elder law attorney coordinating a client's Bothell property sale alongside a transition to senior living in the north King or south Snohomish corridor",
        "An estate planning attorney advising a Bothell client where the property's proximity to UW Bothell raises development-potential questions",
      ],
      howWeHelp: [
        "Cross-county property assessments that use appropriate comparables from both King and Snohomish County",
        "Responsive communication calibrated to legal timelines and professional expectations",
        "Pricing documentation grounded in appraisal-level methodology for court proceedings and settlement negotiations",
        "Strategic guidance on property preparation for Bothell's competitive and evolving market",
        "Coordination across legal, financial, and family stakeholders with clear reporting",
        "A consistent locally expert resource for ongoing property-related referrals in the cross-county corridor",
      ],
      whyLocal: "Bothell's dual-county position creates property valuation scenarios that attorneys in single-county markets rarely encounter. A defensible pricing opinion for a Bothell property must account for which county's sales are truly comparable — a distinction that automated tools and distant brokers routinely miss. David provides the cross-boundary analysis that Bothell-area attorneys and fiduciaries need.",
    },
    "valuation-guidance": {
      intro: "Bothell's dual-county position creates valuation complexity that few other cities present — comparable sales from King County and Snohomish County may support different pricing conclusions, and the city's rapid evolution from a quiet crossroads to a growing university-adjacent community has created neighborhoods with very different value trajectories. Real Property Planning provides the property-specific, cross-county valuation insight that Bothell situations require.",
      scenarios: [
        "An estate planning attorney needing current valuation for a Bothell property where King County and Snohomish County comparable sales suggest different price ranges",
        "Divorcing spouses who disagree on their Bothell home's value because each cites sales from a different county or submarket",
        "A trustee needing documented valuation for a trust-owned Bothell property near the Canyon Park growth corridor where development activity is changing comparables",
        "Heirs questioning an automated estimate that averaged incompatible sales from both sides of the county line",
      ],
      whyLocal: "Bothell's valuation challenges stem from its dual-county identity — automated tools that draw comparable sales from a geographic radius inevitably mix King County and Snohomish County markets, producing unreliable estimates. David's certified appraisal credentials and local experience allow him to select the truly relevant comparables for each Bothell property, providing the analytically grounded valuation that cross-county situations demand.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Bothell home for sale requires understanding whether the property competes against Canyon Park's newer construction, established homes in the original downtown core, or properties along the Sammamish River corridor — each segment with different buyer expectations. Real Property Planning helps Bothell sellers identify which improvements generate return in their specific submarket and avoid preparation that exceeds what the market will reward.",
      scenarios: [
        "A mid-century home near downtown Bothell where the walkable character is desirable but the finishes need updating to compete with newer Canyon Park listings",
        "A property along the Sammamish River corridor where outdoor spaces and trail access are selling points but the home's interior needs modernization",
        "An estate property near UW Bothell that needs cleanout and presentation — with questions about whether to target student-rental investors or owner-occupants",
        "A Canyon Park area home where the surrounding newer development sets high buyer expectations for condition and finish",
      ],
      whyLocal: "Preparation strategy in Bothell depends on which submarket the property serves. Downtown-core homes can leverage walkability and character; Canyon Park properties need to match the area's newer construction standards; river corridor homes should highlight their natural setting. David's knowledge of Bothell's distinct buyer expectations in each area helps sellers invest preparation dollars strategically.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Bothell are complicated by the city's dual-county market — spouses and their attorneys may reference comparable sales from different counties, and the wide range of Bothell's neighborhoods means the same city name can encompass very different property values. Real Property Planning provides the objective, cross-county analysis that Bothell divorce situations require.",
      scenarios: [
        "A divorcing couple with a Bothell home near the county line where King County and Snohomish County comparable sales support different valuations",
        "A family law attorney needing neutral pricing for a Bothell property where one spouse cites Canyon Park's newer-construction values and the other references the original-core neighborhood",
        "A mediated divorce involving a home near UW Bothell where development potential creates disagreement about whether the property's value is residential or speculative",
        "A divorce where one party wants to retain the Bothell home — needing buyout valuation that accurately reflects the property's position in the dual-county market",
      ],
      whyLocal: "Divorce negotiations involving Bothell property are uniquely complicated by the dual-county dynamic. Each party's attorney may pull comparables from different sides of the King-Snohomish boundary, reaching different conclusions. David's cross-county experience and appraisal credentials provide the neutral, property-specific analysis needed for equitable resolution.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Bothell presents fiduciary challenges that reflect the city's dual-county position and evolving market — trustees need guidance that accounts for which county's comparables apply, how Canyon Park's growth affects neighboring values, and whether the property's location near UW Bothell creates development considerations. Real Property Planning provides trustees with the cross-county expertise that Bothell trust administration requires.",
      scenarios: [
        "A successor trustee managing a trust-owned Bothell home where the dual-county location creates uncertainty about which comparable sales support defensible pricing",
        "A corporate trustee needing local expertise for a Bothell property near Canyon Park where rapid development is changing the competitive landscape",
        "A trustee preparing to sell a trust-owned home near the Sammamish River corridor where trail access and natural setting create value that desktop valuation tools miss",
        "A beneficiary questioning the trust's pricing because automated estimates mix King County and Snohomish County sales indiscriminately",
      ],
      whyLocal: "Trust property sales in Bothell require fiduciary guidance that navigates the city's dual-county market with precision. A trustee who applies the wrong county's comparables — or blends both without distinction — creates pricing that may not withstand beneficiary challenge. David's cross-county experience and appraisal background provide the defensible, property-specific analysis that Bothell trust situations demand.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // SUBURBAN TONE — Kent (distinct from Kirkland/Issaquah/Redmond via
  // South King County identity, valley/East Hill/West Hill geography,
  // industrial adjacency, diverse housing stock, price-sensitive market)
  // ═══════════════════════════════════════════════════════════════════

  kent: {
    "probate-estate-sales": {
      intro: "Kent is one of the largest cities in King County, with a housing market that spans the East Hill's established ramblers, newer construction throughout the city, West Hill properties, and valley-floor homes adjacent to commercial and industrial corridors. When a probate or estate sale involves Kent property, the wide range of housing types and the significant pricing differences between locations within the city make neighborhood-level guidance essential. Real Property Planning brings the South King County expertise that Kent estate situations require.",
      scenarios: [
        "An estate property on Kent's East Hill where the 1960s-era rambler sits in a neighborhood that has seen significant demographic and market changes",
        "A probate sale involving a West Hill property where views and lot size create value but the home's condition requires honest assessment against updated competition",
        "Multiple heirs managing an inherited Kent home where the property's valley location near industrial areas affects buyer perception and realistic pricing",
        "An estate home near the Panther Lake neighborhood where recent development has created new comparable sales that change the pricing landscape",
        "An out-of-state executor unfamiliar with how Kent's East Hill, West Hill, and valley submarkets produce dramatically different values for similar-sized homes",
      ],
      howWeHelp: [
        "Neighborhood-specific valuation distinguishing between Kent's East Hill, West Hill, valley, and Panther Lake submarkets",
        "Assessment of how industrial adjacency, commercial corridor proximity, and school boundaries affect property values in specific Kent neighborhoods",
        "Coordination with probate attorneys on court documentation and timeline requirements",
        "Property preparation guidance calibrated to Kent's price-sensitive market — focusing investment on improvements that generate measurable return",
        "Clear communication with multiple heirs or parties managing the process from different locations",
        "Full transaction management from initial assessment through closing in Kent's competitive market",
      ],
      whyLocal: "Kent's housing market is shaped by geography — East Hill homes face different buyer expectations than valley-floor properties or West Hill view homes. The city's proximity to major employers, industrial areas, and transportation corridors creates submarket dynamics that automated estimates frequently flatten into a single 'Kent average.' David Stein's on-site assessment accounts for how specific location, condition, and neighborhood context affect realistic pricing.",
    },
    "senior-transitions": {
      intro: "Many Kent seniors have lived on the East Hill or in established valley neighborhoods for decades — watching the city grow from a smaller community into one of South King County's largest cities. When it's time to transition from a longtime Kent home, the process involves understanding how the city's growth and changing demographics have affected property values while coordinating a move that respects the family's pace and priorities.",
      scenarios: [
        "A senior couple on East Hill whose 1970s rambler has been the family home for decades but needs updates to compete with newer construction entering the market",
        "An adult child coordinating a parent's move from a Kent home to a South King County assisted living community while managing the sale from out of state",
        "A longtime homeowner in the Panther Lake area whose neighborhood has evolved — needing guidance on how recent development affects their property's current market position",
        "A family balancing a parent's care needs with the practical requirements of selling a Kent home in a price-sensitive market where preparation significantly affects outcome",
        "A senior in a valley-area Kent home where industrial adjacency affects buyer perception — needing honest guidance on realistic pricing expectations",
      ],
      howWeHelp: [
        "Condition-based valuation that reflects how Kent's different buyer segments evaluate older homes against the city's newer inventory",
        "Strategic preparation recommendations calibrated to Kent's market — identifying which updates matter in the property's specific price tier and location",
        "Timeline coordination aligned with the senior's move to assisted living, a family home, or a smaller local residence",
        "Patient, respectful communication with seniors and their families throughout the process",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for Kent's market",
        "Full-service management so the family can prioritize their parent's transition",
      ],
      whyLocal: "Kent seniors often own homes in neighborhoods where the surrounding community has changed significantly. The East Hill that a senior remembers from the 1970s looks and functions differently today — and the buyer pool has evolved accordingly. David's experience with Kent's specific submarkets helps families set realistic expectations and prepare properties in ways that match what today's buyers are actually looking for.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Kent home involves navigating one of South King County's most diverse housing markets — where East Hill ramblers, valley townhomes, and West Hill view properties each serve different buyer segments and carry different values. Whether staying in Kent or moving to a smaller community, the process benefits from someone who understands how the city's wide range of housing options and price points affects both the sale and realistic next-step planning.",
      scenarios: [
        "A couple on East Hill whose large rambler on a generous lot is more home than they need — wanting to understand how their property's value compares to the condo and townhome options available in South King County",
        "A retiree in a West Hill home with views who wants to downsize but is uncertain how their property's location-based premium translates to purchasing power elsewhere",
        "A homeowner near Panther Lake considering whether to stay in Kent in a smaller home or relocate to a community with more senior-oriented amenities",
        "A family helping a parent transition from a valley-area Kent home where the neighborhood's commercial adjacency affects pricing expectations",
      ],
      whyLocal: "Downsizing decisions in Kent are complicated by the city's wide price range — an East Hill rambler, a valley condo, and a West Hill view home represent very different values and buyer pools. Understanding how proceeds from one Kent submarket translate into options in another (or in neighboring cities) requires the comparative market knowledge that David provides.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Kent face one of South King County's most diverse housing markets — where East Hill, West Hill, valley, and Panther Lake properties each operate in different micro-markets with different buyer expectations. Whether the estate property is a midcentury rambler on the East Hill, a townhome near the valley floor, or a view property on the West Hill, executors need guidance that reflects Kent's neighborhood-level pricing realities.",
      scenarios: [
        "A newly appointed executor managing a Kent estate property while living out of state — unfamiliar with how East Hill pricing differs from valley or West Hill neighborhoods",
        "An estate home on East Hill where the property needs significant updates to compete in a market where buyers increasingly expect move-in condition",
        "Co-executors who disagree about a Kent property's value because one references East Hill sales and the other cites nearby valley-floor comparables",
        "An estate property near the valley floor where commercial and industrial adjacency affects buyer perception and realistic pricing expectations",
        "An executor coordinating with a probate attorney on a Kent property where the city's diverse housing stock makes identifying true comparable sales complex",
      ],
      howWeHelp: [
        "Property-specific assessment accounting for Kent's East Hill, West Hill, valley, and Panther Lake submarket differences",
        "Defensible pricing documentation using appraisal-level methodology for beneficiary review and court records",
        "Guidance on which preparation investments generate return in the property's specific Kent price tier and location",
        "Coordination of cleanout, preparation, and staging appropriate for the property's submarket and buyer expectations",
        "Regular communication for executors managing from out of area",
        "End-to-end transaction management from assessment through closing",
      ],
      whyLocal: "Kent executors face a market where the difference between neighborhoods — East Hill versus valley, Panther Lake versus West Hill — can represent significant pricing variation. An executor who relies on a single 'Kent' average risks either leaving money on the table or overpricing into a stale listing. David's South King County experience helps executors price accurately for their property's specific submarket.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries managing property matters in Kent need a real estate partner who understands South King County's largest city — its diverse housing stock, the geographic divisions that create distinct micro-markets, and the documentation standards that legal proceedings require. Real Property Planning works with Kent-area legal professionals as a responsive, credentialed resource for estate, trust, probate, divorce, and guardianship property matters across the city's varied neighborhoods.",
      scenarios: [
        "A probate attorney managing a Kent estate where beneficiaries disagree about value based on incompatible comparable sales from different Kent neighborhoods",
        "A trustee overseeing trust-held property on Kent's East Hill who needs defensible pricing that reflects the specific neighborhood's current market dynamics",
        "A family law attorney handling a divorce involving a Kent home where the property's location within the city dramatically affects its value",
        "An elder law attorney coordinating a client's Kent property sale alongside a transition to senior living in South King County",
        "An estate planning attorney advising a Kent client on property disposition where the lot size and zoning create development-potential questions",
      ],
      howWeHelp: [
        "Defensible property assessments distinguishing between Kent's East Hill, West Hill, valley, and Panther Lake submarkets",
        "Responsive communication calibrated to legal timelines and professional standards",
        "Pricing documentation grounded in appraisal-level methodology for court proceedings and settlement negotiations",
        "Strategic guidance on property preparation appropriate for the specific Kent neighborhood and price tier",
        "Coordination across legal, financial, and family stakeholders with clear reporting",
        "A consistent South King County resource for ongoing property-related referrals",
      ],
      whyLocal: "Kent's attorneys encounter property matters where the city's geographic diversity creates valuation complexity — an East Hill rambler and a valley townhome both carry a Kent address but serve very different markets. David provides the neighborhood-specific analysis that attorneys and fiduciaries need for defensible pricing opinions in a city where 'Kent' encompasses a wider range of values than most clients expect.",
    },
    "valuation-guidance": {
      intro: "Kent's size and geographic diversity create valuation challenges that simpler markets don't present — East Hill, West Hill, the valley floor, and Panther Lake each have their own comparable-sales patterns, buyer demographics, and pricing dynamics. When accurate property valuation matters for estate planning, divorce, trust administration, or a pending sale, Kent's internal market segmentation makes property-specific assessment essential.",
      scenarios: [
        "An estate planning attorney needing current valuation for a Kent East Hill property where the neighborhood's changing demographics create questions about comparable sales selection",
        "Divorcing spouses who disagree on their Kent home's value because each cites sales from a different Kent submarket to support their position",
        "A trustee needing documented valuation for a trust-owned Kent property where the valley location and commercial adjacency complicate standard residential comparisons",
        "Heirs questioning an automated estimate for an inherited Kent home that doesn't account for the property's specific East Hill or West Hill location premium",
      ],
      whyLocal: "Kent's valuation landscape is complicated by the city's size and the significant pricing differences between its submarkets. Automated tools that average sales across a wide radius produce estimates that don't reflect any specific Kent neighborhood accurately. David's certified appraisal credentials and South King County experience provide the submarket-specific analysis that Kent's diverse housing market requires.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Kent home for sale requires understanding what buyers expect in the property's specific submarket — East Hill buyers have different expectations than those shopping in the valley or on the West Hill. Real Property Planning helps Kent sellers identify which improvements drive return at their price point and location, avoiding both under-preparation that limits buyer interest and over-investment that the local market won't support.",
      scenarios: [
        "An East Hill rambler with original 1960s finishes where targeted updates to the kitchen and bathrooms can meaningfully improve buyer appeal without exceeding the neighborhood's price ceiling",
        "A West Hill property with views where exterior presentation and curb appeal matter because the location premium only applies when the home shows well",
        "An estate property near the valley floor that needs cleanout, paint, and carpet to compete — but where the price point limits how much preparation investment makes financial sense",
        "A Panther Lake area home where newer surrounding construction sets buyer expectations that the older property needs to address strategically",
      ],
      whyLocal: "Preparation strategy in Kent depends heavily on the property's location and price tier. An East Hill home at one price point warrants different investment than a valley-floor property at another. Over-improving a Kent home beyond what the neighborhood supports wastes the seller's money; under-preparing it costs more in sale price than the preparation would have cost. David's experience with Kent's distinct submarkets helps sellers find the right balance.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Kent are complicated by the city's internal market segmentation — spouses and their attorneys may reference comparable sales from different Kent neighborhoods that support very different value conclusions. The East Hill, West Hill, valley, and Panther Lake areas each function as distinct micro-markets, and accurate pricing requires understanding which comparables truly apply. Real Property Planning provides the objective, neighborhood-specific analysis that Kent divorce situations require.",
      scenarios: [
        "A divorcing couple with an East Hill home where one spouse cites recent new-construction sales nearby while the other references the older homes that are more directly comparable",
        "A family law attorney needing neutral pricing for a Kent property where the home's West Hill location and views create a premium that needs objective documentation",
        "A mediated divorce involving a Kent home where one party wants to retain the property — needing buyout valuation that accurately reflects the specific neighborhood's market",
        "A contentious divorce where the Kent home's proximity to commercial areas creates disagreement about whether the location depresses or supports value",
      ],
      whyLocal: "Divorce negotiations involving Kent property are complicated by the city's wide price range and internal diversity. Both parties may be 'right' about Kent values — just referencing different parts of the city. David's experience across Kent's submarkets and his appraisal credentials provide the neutral, property-specific analysis needed for fair resolution when each side's comparable sales tell different stories.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Kent may be located in any of the city's diverse submarkets — from East Hill ramblers to West Hill view homes to valley-floor properties near commercial corridors. Each location creates different fiduciary considerations for trustees responsible for maximizing trust value while managing the sale appropriately. Real Property Planning provides trustees with the South King County expertise that Kent's varied housing market demands.",
      scenarios: [
        "A successor trustee managing a trust-owned East Hill home where the property's age and condition create questions about whether to invest in updates or price as-is",
        "A corporate trustee needing local expertise for a Kent property where the specific neighborhood's market dynamics differ significantly from citywide averages",
        "A trustee preparing to sell a trust-owned West Hill home where the view premium needs on-site verification — not desktop estimation",
        "A beneficiary questioning the trustee's pricing because automated estimates don't distinguish between Kent's dramatically different submarkets",
      ],
      whyLocal: "Trust property sales in Kent require fiduciary guidance that accounts for the city's internal market diversity. A trustee who applies citywide Kent averages to an East Hill property — or uses West Hill view-home comparables for a valley-floor property — creates pricing that may not withstand beneficiary scrutiny. David's South King County experience and appraisal credentials provide the submarket-specific analysis that Kent trust situations demand.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════
  // WAVE 7 — Puyallup, Federal Way, Burien (suburban tone)
  // ═══════════════════════════════════════════════════════════════════

  // ── PUYALLUP ────────────────────────────────────────────────────
  puyallup: {
    "probate-estate-sales": {
      intro: "Puyallup's valley location creates a market where property types range from older homes near the historic downtown to newer South Hill developments and properties with agricultural-heritage lot characteristics. When probate or estate sales involve Puyallup property, understanding how these valley-specific factors affect realistic pricing is essential. Real Property Planning provides the locally grounded guidance that Puyallup executors, attorneys, and families need.",
      scenarios: [
        "A family estate on South Hill where the larger lot, mature landscaping, and elevated position create value that automated estimates consistently miss",
        "An inherited home near downtown Puyallup where the older housing stock competes with walkability and community charm for different buyer segments",
        "A probate property with shop space, outbuildings, or acreage characteristics that complicate standard residential comparable selection",
        "Multiple heirs — some local to Pierce County, some out of state — who need objective valuation of a Puyallup property they remember from childhood",
        "An estate property near the fairgrounds where seasonal activity and location-specific factors create unique timing considerations",
      ],
      howWeHelp: [
        "Neighborhood-level valuation distinguishing South Hill premiums from downtown-area and valley-floor pricing in Puyallup",
        "Assessment of how agricultural-heritage lot features — outbuildings, shop space, larger parcels — affect market value and buyer pool",
        "Coordination with probate attorneys on court documentation, timeline management, and Pierce County procedures",
        "Property preparation strategy appropriate for Puyallup's buyer expectations at each price tier",
        "Clear communication with multiple heirs and professionals across different locations",
        "Full-service transaction management from initial property assessment through closing",
      ],
      whyLocal: "Puyallup's market is shaped by the valley's geography — South Hill properties command different premiums than downtown-area homes, and properties with agricultural-heritage characteristics require specialized understanding. Automated tools that average sales across the area miss the elevation, lot-type, and neighborhood distinctions that materially affect value. David's on-site assessment accounts for these valley-specific dynamics.",
    },
    "senior-transitions": {
      intro: "Many Puyallup seniors have spent decades in their South Hill or downtown-area homes, raising families in the valley community. When it's time to transition to a smaller home, senior living, or a family member's residence, the sale involves both financial considerations and deep personal attachment. Real Property Planning helps Puyallup families navigate this process with experienced pricing and patient coordination.",
      scenarios: [
        "A senior couple on South Hill whose large home with established landscaping has appreciated significantly but may need updates for today's buyers",
        "An adult child coordinating a parent's move from a longtime Puyallup home to a Pierce County senior living community",
        "A longtime homeowner near downtown whose home's charm and walkable location appeal to specific buyers but the property needs preparation",
        "A family balancing a parent's care timeline with preparing and selling a valley home with outbuildings or deferred maintenance",
        "A senior relocating from Puyallup to be closer to family out of state, needing comprehensive sale management",
      ],
      howWeHelp: [
        "Condition-based valuation accounting for how Puyallup's buyer pool evaluates older homes, larger lots, and deferred maintenance",
        "Strategic preparation recommendations tailored to Puyallup's market at each price point and neighborhood",
        "Sale timeline coordination aligned with the move to senior living or a smaller residence",
        "Patient communication with seniors and adult children coordinating from different locations",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for the valley market",
        "Full-service management so the family can focus on the transition",
      ],
      whyLocal: "Puyallup seniors often own homes with features — larger lots, outbuildings, mature landscaping — that automated tools undervalue. The gap between emotional significance and realistic market position requires locally informed analysis. David's appraisal background helps families understand where their property stands in a valley market where neighborhood, elevation, and lot characteristics all influence pricing.",
    },
    "executor-support": {
      intro: "Executors managing estate property in Puyallup face a market where South Hill homes, downtown-area properties, and valley-floor locations each carry different value dynamics. Real Property Planning provides the valley expertise and steady communication that Puyallup executors need to price accurately and manage the sale alongside Pierce County probate requirements.",
      scenarios: [
        "A newly appointed executor managing a South Hill estate property while living outside Pierce County",
        "An estate property with outbuildings or shop space that complicate standard residential valuation",
        "Co-executors who disagree on value because one references South Hill sales while the other cites downtown-area comparables",
        "An estate home that has been vacant and needs assessment, cleanout, and preparation before competing in Puyallup's market",
        "An executor coordinating with multiple professionals on a property where the valley's housing diversity creates pricing complexity",
      ],
      howWeHelp: [
        "Property-specific assessment accounting for Puyallup's neighborhood-level pricing — South Hill, downtown, valley floor, and fairgrounds-area",
        "Clear guidance on how agricultural-heritage features and lot characteristics affect marketability",
        "Defensible pricing documentation suitable for beneficiary review and court records",
        "Coordination of cleanout, preparation, and presentation appropriate for the Puyallup submarket",
        "Regular communication for executors managing from out of area",
        "End-to-end transaction management through closing",
      ],
      whyLocal: "Puyallup executors face a market where the valley's range of property types means comparable selection requires local judgment. David's dual credentials provide the defensible, neighborhood-specific pricing analysis that Puyallup estate situations require.",
    },
    "downsizing-services": {
      intro: "Downsizing from a longtime Puyallup home often means leaving a larger South Hill property or a family home near downtown for something smaller. Real Property Planning helps homeowners manage the sale with clear pricing, practical coordination, and respect for the emotional weight of leaving a home that may hold decades of memories.",
      scenarios: [
        "A couple on South Hill whose children have moved away, leaving them maintaining a home and yard larger than they need",
        "A homeowner near downtown Puyallup moving to a condo or smaller home to simplify daily life",
        "A retiree selling a Puyallup home with valley characteristics — larger lot, shop space — that need correct positioning",
        "A family helping parents transition from a Puyallup home to a smaller property closer to adult children",
      ],
      howWeHelp: [
        "Honest valuation accounting for how lot size, outbuildings, and condition affect buyer interest at each price point",
        "Strategic preparation guidance focused on what delivers return in the valley market",
        "Timeline coordination aligning the sale with the move to a new residence",
        "Cleanout and vendor coordination so the homeowner isn't managing everything simultaneously",
        "Patient communication throughout a personally significant transition",
      ],
      whyLocal: "Downsizing in Puyallup often involves properties with characteristics that don't fit standard comparable analysis neatly. David's valley experience helps downsizing clients understand realistic market value for homes where lot and improvements create unique buyer appeal.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries working on matters involving Puyallup property need a real estate professional who understands the valley's diverse housing stock. Real Property Planning serves as a reliable resource for Pierce County legal professionals handling Puyallup property matters where local expertise affects legal and financial outcomes.",
      scenarios: [
        "A probate attorney managing an estate with a South Hill home where the neighborhood premium needs objective documentation",
        "A family law attorney needing neutral pricing for a Puyallup property where valley-location factors create value disagreements",
        "An elder law attorney coordinating the sale of a client's Puyallup home during a transition to care",
        "A trustee needing fiduciary-grade guidance on a trust-owned property with outbuildings or lot characteristics",
        "An estate planning attorney needing current valuation insight where South Hill versus valley-floor distinction matters",
      ],
      howWeHelp: [
        "Defensible property assessments grounded in on-site inspection and Puyallup-specific comparable analysis",
        "Clear documentation suitable for court proceedings, fiduciary records, and beneficiary communication",
        "Responsive communication with attorneys and fiduciaries throughout the engagement",
        "Experience with Pierce County probate procedures and estate-related timelines",
        "Coordination of property preparation and sale logistics as needed",
        "Objective guidance grounded in appraisal methodology",
      ],
      whyLocal: "Legal professionals handling Puyallup matters need a partner who understands valley-specific valuation factors. David's dual credentials provide the objective foundation that Pierce County legal proceedings and fiduciary situations require.",
    },
    "valuation-guidance": {
      intro: "Accurate property valuation in Puyallup requires understanding the valley's distinct submarkets — South Hill properties carry different premiums than downtown-area homes, and lots with outbuildings or acreage need specialized analysis. Real Property Planning provides the valuation insight Puyallup clients need for estate settlements, trust administration, and informed sale decisions.",
      scenarios: [
        "An executor needing valuation of a South Hill estate property where the larger lot and elevation create a premium automated tools may miss",
        "Divorcing spouses who disagree on their Puyallup home's value because each references sales from different parts of the valley",
        "A trustee needing documented valuation for a trust-owned property with outbuildings that standard comparisons don't address",
        "Heirs questioning an automated estimate that doesn't account for the property's specific neighborhood or lot characteristics",
      ],
      whyLocal: "Puyallup's valuation landscape is complicated by the valley's geography and wide range of property types. Automated tools that average sales produce estimates that don't reflect any specific Puyallup neighborhood accurately. David's credentials provide the property-specific analysis that valley situations require.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Puyallup home for sale requires understanding what buyers expect at the property's specific price point and neighborhood. South Hill buyers have different expectations than those shopping near downtown or in more affordable valley areas. Real Property Planning helps sellers identify which improvements deliver return and which over-invest for their submarket.",
      scenarios: [
        "A South Hill home with quality bones but dated finishes where strategic updates can meaningfully improve buyer appeal",
        "A downtown-area property where charm and walkability are selling points but deferred maintenance needs addressing",
        "An estate property with outbuildings where preparation strategy depends on whether buyers value or see those features as complications",
        "A valley-floor home where practical curb appeal matters more than luxury upgrades at the price point",
      ],
      whyLocal: "Preparation strategy in Puyallup depends on the property's location and price tier. A South Hill home warrants different investment than a valley-floor property. David's valley experience helps sellers find the right balance between under-preparation and over-investment.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Puyallup are complicated by the valley's internal market variation — spouses may reference South Hill, downtown, or valley-floor comparables to support different value conclusions. Real Property Planning provides the objective, neighborhood-specific analysis that Puyallup divorce situations require.",
      scenarios: [
        "A divorcing couple with a South Hill home where one spouse cites premium sales while the other points to valley-floor comparables",
        "A family law attorney needing neutral pricing where outbuildings or extra lot features create disagreement about value",
        "A mediated divorce where one party wants to retain the property and needs fair buyout valuation",
        "A contentious divorce where the property's proximity to commercial areas creates location-value disagreement",
      ],
      whyLocal: "Divorce negotiations involving Puyallup property are complicated by the valley's price range and internal diversity. Both parties may cite 'Puyallup sales' from different neighborhoods. David's valley experience provides the neutral analysis needed for fair resolution.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Puyallup may be located anywhere in the valley — from South Hill view homes to downtown-area older properties to lots with agricultural-heritage characteristics. Each creates different fiduciary considerations for trustees. Real Property Planning provides the Pierce County expertise that Puyallup's varied market demands.",
      scenarios: [
        "A successor trustee managing a trust-owned South Hill home where the larger lot and neighborhood premium need on-site verification",
        "A corporate trustee needing local expertise where outbuildings and lot characteristics complicate standard valuation",
        "A trustee preparing to sell a downtown-area home where charm and walkability appeal to a specific buyer segment",
        "A beneficiary questioning the trustee's pricing because automated estimates don't distinguish South Hill from valley-floor markets",
      ],
      whyLocal: "Trust property sales in Puyallup require fiduciary guidance that accounts for the valley's diverse property types. David's valley experience and appraisal credentials provide the submarket-specific analysis that fiduciary situations demand.",
    },
  },

  // ── FEDERAL WAY ─────────────────────────────────────────────────
  "federal-way": {
    "probate-estate-sales": {
      intro: "Federal Way's position at the southern edge of King County creates a market with wide price variation — from established ramblers to lake-adjacent properties near Steel Lake and North Lake, newer town-center developments, and hillside homes with Rainier views. When probate or estate sales involve Federal Way property, this internal diversity requires pricing guidance that goes beyond citywide averages. Real Property Planning provides the South King expertise that Federal Way executors, attorneys, and families need.",
      scenarios: [
        "A family estate near Steel Lake where the lake-adjacent location creates a premium that standard automated estimates may not capture",
        "An inherited rambler in an established neighborhood where condition varies widely and comparable selection requires local knowledge",
        "A probate property near the town center where newer development and changing demographics affect buyer expectations",
        "Multiple heirs dispersed across states needing objective valuation of a Federal Way home they haven't visited in years",
        "An estate property in the eastern hills with mountain views where the premium needs on-site verification",
      ],
      howWeHelp: [
        "Neighborhood-level valuation distinguishing Federal Way's lake-adjacent, view, town-center, and established-residential submarkets",
        "Assessment of how location-specific factors — lake proximity, mountain views, commercial adjacency — affect realistic value",
        "Coordination with probate attorneys on documentation, timeline management, and King County procedures",
        "Property preparation appropriate for Federal Way's buyer expectations at the specific price point",
        "Clear communication with multiple heirs and professionals across locations",
        "Full-service transaction management from initial assessment through closing",
      ],
      whyLocal: "Federal Way's market is complicated by geographic spread and internal diversity. A lake-adjacent property, a town-center townhome, and a hillside view home operate in effectively different markets despite sharing a Federal Way address. David's South King County experience and appraisal credentials provide the property-specific analysis estate situations require.",
    },
    "senior-transitions": {
      intro: "Many Federal Way seniors have lived in their homes since the city's major growth period — watching neighborhoods develop and the town center evolve. When it's time to transition from a longtime Federal Way home, the sale involves meaningful financial value and personal attachment. Real Property Planning helps families navigate this process with honest pricing, practical coordination, and patience.",
      scenarios: [
        "A senior couple in an established neighborhood whose home has appreciated but shows its age compared to newer listings",
        "An adult child coordinating a parent's move from Federal Way to a South King County senior living community while managing the sale remotely",
        "A longtime homeowner near Steel Lake whose property's location premium requires informed marketing to reach the right buyers",
        "A family balancing a parent's declining health with preparing and selling a home full of accumulated belongings",
        "A senior moving from Federal Way to be closer to family elsewhere, needing local sale management",
      ],
      howWeHelp: [
        "Condition-based valuation accounting for how Federal Way's buyers evaluate older homes against newer inventory",
        "Strategic preparation calibrated to what delivers return at Federal Way's price points and neighborhoods",
        "Sale timeline coordination aligned with the move to senior living or a smaller residence",
        "Patient communication with seniors and adult children managing a stressful transition",
        "Vendor coordination for cleanout, repairs, and presentation",
        "Full-service management from first consultation through closing",
      ],
      whyLocal: "Federal Way seniors often own homes that have appreciated but may not match today's buyer expectations. The gap between emotional and realistic market value requires honest, condition-based analysis. David's appraisal background helps families understand exactly where their property stands in a market with increasing competition from newer construction.",
    },
    "executor-support": {
      intro: "Executors managing Federal Way estate property face a South King County market where values vary significantly by neighborhood, lake proximity, views, and housing age. Real Property Planning provides the local expertise and reliable communication that Federal Way executors need alongside legal responsibilities.",
      scenarios: [
        "A newly appointed executor managing a Federal Way property while living outside King County",
        "An estate property near the town center where newer surrounding development creates competitive-positioning questions",
        "Co-executors who disagree on value because one references lake-adjacent sales while the other cites established-neighborhood comparables",
        "An estate home that has been vacant and needs assessment and preparation before attracting buyer interest",
        "An executor coordinating with multiple professionals where the South King market requires locally specific guidance",
      ],
      howWeHelp: [
        "Property-specific assessment accounting for Federal Way's neighborhood-level dynamics",
        "Defensible pricing documentation suitable for beneficiary review and court records",
        "Coordination of cleanout, preparation, and presentation appropriate for the price point",
        "Regular communication for executors managing from out of area",
        "Guidance on King County probate timelines and market conditions",
        "End-to-end transaction management through closing",
      ],
      whyLocal: "Federal Way executors face a market where comparable selection requires local judgment. Lake-adjacent, view, and established-neighborhood properties operate in different micro-markets. David's credentials provide the defensible pricing analysis that Federal Way estate situations require.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Federal Way home often means leaving a property in an established neighborhood — perhaps near the lakes or in a community where the family has spent decades. Real Property Planning helps homeowners manage the sale with clear pricing and understanding of what the home is worth in today's South King County market.",
      scenarios: [
        "A couple in an established neighborhood maintaining a home and yard larger than they need after children have moved",
        "A homeowner near Steel Lake moving to a condo or smaller home after retirement",
        "A retiree selling a home with mountain views that need to be properly positioned for the right buyers",
        "A family helping parents transition from a longtime home to a smaller property or senior community",
      ],
      howWeHelp: [
        "Honest valuation accounting for neighborhood, condition, and realistic buyer demand",
        "Strategic preparation focused on what delivers return at the specific price point",
        "Timeline coordination aligning the sale with the move",
        "Cleanout and vendor coordination so the homeowner isn't managing everything simultaneously",
        "Patient communication throughout a personally significant transition",
      ],
      whyLocal: "Downsizing in Federal Way involves understanding how the city's range of neighborhoods affects buyer demand for each specific property. David's South King experience helps clients understand realistic value and preparation priorities.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries handling Federal Way property matters need a real estate professional who understands the city's diverse South King County market and can provide defensible guidance. Real Property Planning serves as a reliable resource for legal professionals with Federal Way property matters.",
      scenarios: [
        "A probate attorney managing an estate with a Federal Way home near Steel Lake where the location premium needs documentation",
        "A family law attorney needing neutral pricing during divorce proceedings involving neighborhood-based value disagreement",
        "An elder law attorney coordinating the sale of a client's Federal Way home during a care transition",
        "A trustee needing fiduciary-grade guidance where the specific submarket affects pricing significantly",
        "An estate planning attorney needing current insight where view premium or lake proximity matters",
      ],
      howWeHelp: [
        "Defensible property assessments grounded in on-site inspection and Federal Way-specific comparable analysis",
        "Clear documentation suitable for court proceedings, fiduciary records, and beneficiary communication",
        "Responsive communication throughout the engagement",
        "Experience with King County procedures and estate-related timelines",
        "Coordination of property preparation and sale logistics as needed",
        "Objective guidance grounded in appraisal methodology",
      ],
      whyLocal: "Legal professionals handling Federal Way matters need a partner who can distinguish between the city's meaningfully different neighborhoods. David's dual credentials provide the objective foundation that South King County legal proceedings require.",
    },
    "valuation-guidance": {
      intro: "Accurate property valuation in Federal Way requires understanding the city's internal market diversity — lake-adjacent homes, mountain-view properties, town-center condos, and established ramblers each follow different value patterns. Real Property Planning provides the valuation insight that Federal Way clients need for estate settlements, trust administration, and property decisions.",
      scenarios: [
        "An executor needing valuation of a Federal Way estate property near Steel Lake where the proximity premium needs on-site verification",
        "Divorcing spouses who disagree on their home's value because each references sales from a different part of the city",
        "A trustee needing documented valuation where mountain views or lake adjacency affect value",
        "Heirs questioning an automated estimate that averages Federal Way sales without distinguishing neighborhoods",
      ],
      whyLocal: "Federal Way's valuation landscape is complicated by geographic spread and the wide range of property types. Automated tools produce estimates that don't reflect any specific neighborhood accurately. David's credentials provide the property-specific analysis Federal Way situations demand.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Federal Way home for sale requires understanding buyer expectations at the property's price point and location. A home near Steel Lake faces different preparation priorities than one near the town center or in an established hillside neighborhood. Real Property Planning helps sellers avoid both under-preparation and over-investment.",
      scenarios: [
        "An established rambler where targeted kitchen and bathroom updates can improve buyer appeal without exceeding the area's price ceiling",
        "A lake-adjacent property where exterior presentation matters because the location premium only applies when the home shows its best",
        "An estate property that needs cleanout and basic updates but where the price point limits preparation investment",
        "A home competing against newer Federal Way construction where strategic updates help attract today's buyers",
      ],
      whyLocal: "Preparation strategy in Federal Way depends on location and buyer demographic. Lake-adjacent homes warrant different investment than properties in the city's more affordable segments. David's South King experience helps sellers calibrate preparation to their specific submarket.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Federal Way are complicated by the city's internal diversity — spouses may cite comparable sales from lake-adjacent, view, or established-neighborhood areas to support different value conclusions. Real Property Planning provides the objective, property-specific analysis Federal Way divorce situations require.",
      scenarios: [
        "A divorcing couple whose home is near Steel Lake, where one spouse argues the lake adds premium while the other disputes its magnitude",
        "A family law attorney needing neutral pricing where the specific neighborhood — not the city average — determines fair value",
        "A mediated divorce where one party wants to retain the property and needs accurate buyout valuation",
        "A contentious divorce where the property's age relative to newer construction creates disagreement about competitive positioning",
      ],
      whyLocal: "Divorce negotiations involving Federal Way property are complicated by the city's wide price range. Both parties may cite real sales from different neighborhoods. David's South King experience provides the neutral analysis needed for fair resolution.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Federal Way may be near the lakes, in established residential neighborhoods, or in areas affected by newer development. Each creates different fiduciary considerations. Real Property Planning provides trustees with the South King County expertise that Federal Way's diverse market demands.",
      scenarios: [
        "A successor trustee managing a trust-owned home near Steel Lake where the location premium needs on-site verification",
        "A corporate trustee needing local expertise where specific neighborhood dynamics differ from citywide statistics",
        "A trustee preparing to sell a home in an established neighborhood where newer construction affects positioning",
        "A beneficiary questioning the trustee's pricing because automated estimates don't distinguish Federal Way's varied submarkets",
      ],
      whyLocal: "Trust property sales in Federal Way require fiduciary guidance that accounts for internal market diversity. A trustee who applies citywide averages to a lake-adjacent property creates pricing that may not withstand beneficiary scrutiny. David's credentials provide the submarket analysis fiduciary situations demand.",
    },
  },

  // ── BURIEN ──────────────────────────────────────────────────────
  burien: {
    "probate-estate-sales": {
      intro: "Burien's neighborhoods range from the exclusive waterfront enclave of Three Tree Point to Seahurst's hillside homes to established residential areas near a revitalizing downtown core. When probate or estate sales involve Burien property, understanding these dramatic micro-market differences is essential. Real Property Planning provides the neighborhood-specific guidance that Burien executors, attorneys, and families need in a city where values vary sharply within short distances.",
      scenarios: [
        "A family estate in Three Tree Point where the waterfront location creates pricing dynamics entirely different from the rest of Burien",
        "An inherited hillside home in Seahurst with sound views where the view premium and terrain require on-site assessment",
        "A probate property near downtown Burien where the city's revitalization has changed buyer expectations",
        "Multiple heirs needing objective valuation where the specific micro-neighborhood determines value more than the city address",
        "An estate property along the 1st Avenue corridor where commercial adjacency complicates residential comparable approaches",
      ],
      howWeHelp: [
        "Neighborhood-level valuation distinguishing Three Tree Point waterfront, Seahurst hillside, downtown-adjacent, and corridor-area pricing",
        "Assessment of how views, waterfront access, terrain, and walkability affect value in Burien's varied micro-markets",
        "Coordination with probate attorneys on documentation and King County procedures",
        "Property preparation strategy appropriate for the specific Burien neighborhood and its buyer expectations",
        "Clear communication with multiple heirs and professionals dispersed geographically",
        "Full-service transaction management from initial assessment through closing",
      ],
      whyLocal: "Burien's market is defined by its micro-neighborhoods — Three Tree Point, Seahurst, downtown, and the corridors each operate as distinct markets. A waterfront home and a corridor-area rambler share a city name but nothing else in terms of value drivers. David's on-site assessment and appraisal credentials capture these distinctions that automated tools consistently miss.",
    },
    "senior-transitions": {
      intro: "Many Burien seniors have watched their community evolve from a quiet suburb to a city with a revitalized downtown, diverse neighborhoods, and growing appeal. When it's time to transition from a longtime Burien home, the sale involves meaningful financial considerations and the personal weight of leaving a familiar community. Real Property Planning helps families navigate this with neighborhood-specific pricing and patient coordination.",
      scenarios: [
        "A senior in Seahurst whose hillside home with sound views has appreciated significantly but needs honest condition assessment",
        "An adult child coordinating a parent's move from Three Tree Point while managing a premium-market property sale",
        "A longtime homeowner near downtown whose property benefits from revitalization but needs strategic preparation",
        "A family balancing a parent's care needs with the complexity of selling a longtime Burien home",
        "A senior relocating from Burien to be closer to family, needing comprehensive management",
      ],
      howWeHelp: [
        "Condition-based valuation accounting for how Burien's micro-markets create different buyer expectations",
        "Strategic preparation calibrated to the specific neighborhood and buyer profile",
        "Sale timeline coordination aligned with the transition to senior living or a smaller residence",
        "Patient communication with seniors and adult children managing a significant life change",
        "Vendor coordination for cleanout, repairs, and presentation appropriate for the neighborhood",
        "Full-service management so the family can focus on the transition",
      ],
      whyLocal: "Burien seniors often own homes in neighborhoods where value has shifted meaningfully. David's appraisal background helps families understand where their specific property stands relative to today's market, not general perceptions.",
    },
    "executor-support": {
      intro: "Executors managing Burien estate property face a market where micro-neighborhoods create wide value variation within a compact area. Real Property Planning provides the neighborhood-specific guidance and reliable communication that Burien executors need whether the property is a Three Tree Point waterfront home, a Seahurst hillside property, or a downtown-area rambler.",
      scenarios: [
        "A newly appointed executor managing a Three Tree Point estate property requiring specialized waterfront marketing",
        "An estate property in Seahurst where view quality and terrain affect value in ways needing on-site verification",
        "Co-executors disagreeing on value because one references waterfront sales while the other cites downtown-area comparables",
        "An estate home near the 1st Avenue corridor that needs assessment of how the specific location affects buyer interest",
        "An executor coordinating from out of state where the micro-neighborhood distinction matters more than the city average",
      ],
      howWeHelp: [
        "Property-specific assessment accounting for Burien's dramatically different micro-markets",
        "Defensible pricing documentation suitable for beneficiary review and court records",
        "Coordination of cleanout, preparation, and presentation appropriate for the neighborhood",
        "Regular communication for executors managing from out of area",
        "Guidance on how Burien's revitalization affects realistic pricing for estate properties",
        "End-to-end transaction management through closing",
      ],
      whyLocal: "Burien executors face a market where the difference between neighborhoods can be dramatic — Three Tree Point pricing has virtually nothing in common with 1st Avenue corridor values. David's experience provides the defensible, micro-neighborhood analysis estate situations require when citywide averages are meaningless.",
    },
    "downsizing-services": {
      intro: "Downsizing from a Burien home often means leaving a neighborhood with distinctive character — whether Three Tree Point's exclusivity, Seahurst's hillside views, or downtown's walkable convenience. Real Property Planning helps homeowners manage the sale with pricing that reflects their specific micro-market.",
      scenarios: [
        "A couple in Seahurst whose view home is larger than they need, with maintenance that no longer fits their lifestyle",
        "A homeowner near downtown whose walkable location appeals to specific buyers but the home needs preparation",
        "A retiree in Three Tree Point whose waterfront property requires specialized marketing and buyer qualification",
        "A family helping parents transition from a longtime Burien home to a smaller property or senior community",
      ],
      howWeHelp: [
        "Honest valuation reflecting the specific micro-neighborhood's current market dynamics",
        "Preparation guidance calibrated to what delivers return at the property's price point and location",
        "Timeline coordination aligning the sale with the move",
        "Cleanout and vendor coordination so the homeowner can focus on the transition",
        "Patient communication throughout the process",
      ],
      whyLocal: "Downsizing in Burien requires understanding which micro-market the property belongs to — because Three Tree Point, Seahurst, and downtown attract different buyers with different expectations. David's experience helps clients price and prepare for the right audience.",
    },
    "attorney-fiduciary-support": {
      intro: "Attorneys and fiduciaries handling Burien property matters need a real estate professional who understands how the city's dramatic micro-neighborhood differences affect valuation and sale strategy. Real Property Planning serves as a reliable resource for legal professionals where neighborhood-specific expertise is essential.",
      scenarios: [
        "A probate attorney managing an estate with a Three Tree Point waterfront home requiring specialized valuation",
        "A family law attorney needing neutral pricing where the specific micro-neighborhood determines fair value",
        "An elder law attorney coordinating the sale of a Seahurst home during a care transition",
        "A trustee needing fiduciary-grade guidance where views, terrain, or waterfront access affect value",
        "An estate planning attorney needing current insight where revitalization has changed neighborhood values",
      ],
      howWeHelp: [
        "Defensible property assessments grounded in on-site inspection and micro-neighborhood analysis",
        "Clear documentation suitable for court proceedings, fiduciary records, and beneficiary communication",
        "Responsive communication with attorneys and fiduciaries throughout the engagement",
        "Experience with King County procedures and estate-related timelines",
        "Coordination of property preparation and sale logistics as needed",
        "Objective guidance recognizing how Burien's internal diversity affects valuation",
      ],
      whyLocal: "Legal professionals handling Burien matters need a partner who can distinguish between dramatically different micro-neighborhoods. A Three Tree Point valuation has nothing in common with a corridor-area assessment — and both carry legal consequences if done poorly. David's dual credentials provide the objective foundation Burien proceedings require.",
    },
    "valuation-guidance": {
      intro: "Accurate property valuation in Burien requires neighborhood-level precision — Three Tree Point waterfront, Seahurst hillside views, downtown-adjacent walkability, and corridor-area properties each follow entirely different value patterns. Real Property Planning provides the micro-market insight Burien clients need for estate settlements, trust administration, and informed decisions.",
      scenarios: [
        "An executor needing valuation of a Three Tree Point property where waterfront access and exclusivity create pricing generic tools can't capture",
        "Divorcing spouses who disagree on their Seahurst home's value because view quality and terrain make standard comparisons unreliable",
        "A trustee needing documented valuation where the micro-neighborhood determines value more than the city address",
        "Heirs questioning an automated estimate that doesn't account for the property's specific neighborhood characteristics",
      ],
      whyLocal: "Burien's valuation landscape is complicated by dramatic micro-neighborhood differences within a compact area. Automated tools that average sales produce estimates that don't reflect any specific neighborhood. David's on-site assessment captures the factors that make Burien's neighborhoods so different from each other.",
    },
    "preparing-home-for-sale": {
      intro: "Preparing a Burien home for sale requires understanding the specific micro-neighborhood's buyer expectations. A Three Tree Point waterfront home, a Seahurst view property, and a downtown-adjacent rambler each need different preparation strategies. Real Property Planning helps sellers calibrate to what their submarket rewards.",
      scenarios: [
        "A Seahurst hillside home where exterior presentation and view-framing matter because sound views are the primary value driver",
        "A Three Tree Point property where waterfront lifestyle needs highlighting through preparation showcasing the location premium",
        "A downtown-adjacent rambler where practical updates can meaningfully improve buyer appeal without exceeding the neighborhood's ceiling",
        "An estate property near the 1st Avenue corridor where preparation budget must be calibrated to the realistic price point",
      ],
      whyLocal: "Preparation strategy in Burien depends entirely on which micro-neighborhood the property belongs to. A Seahurst view home warrants different investment than a corridor-area property. David's Burien experience helps sellers calibrate appropriately.",
    },
    "divorce-related-home-sales": {
      intro: "Divorce-related property sales in Burien are complicated by dramatic internal diversity — spouses may cite comparable sales from Three Tree Point, Seahurst, or downtown areas that support wildly different value conclusions. Real Property Planning provides the objective, micro-neighborhood analysis Burien divorce situations require.",
      scenarios: [
        "A divorcing couple with a Seahurst home where view quality creates a premium one spouse emphasizes while the other disputes",
        "A family law attorney needing neutral pricing where the micro-neighborhood determines value more than the city average",
        "A mediated divorce where one party wants to retain the property and needs fair buyout valuation reflecting the actual neighborhood",
        "A contentious divorce where commercial adjacency creates disagreement about residential value impact",
      ],
      whyLocal: "Divorce negotiations involving Burien property are uniquely complicated because micro-neighborhoods create such wide value variation. Both parties may cite real Burien sales from entirely different neighborhoods. David's micro-market expertise provides the neutral analysis needed when each side's comparables tell dramatically different stories.",
    },
    "trust-estate-property-sales": {
      intro: "Trust-owned property in Burien may be a Three Tree Point waterfront home, a Seahurst hillside view property, a downtown-adjacent rambler, or a corridor-area home — each demanding different fiduciary analysis. Real Property Planning provides trustees with the micro-neighborhood expertise that Burien's uniquely varied market demands.",
      scenarios: [
        "A successor trustee managing a trust-owned Three Tree Point home requiring specialized waterfront marketing",
        "A corporate trustee needing local expertise where the specific micro-neighborhood determines pricing strategy",
        "A trustee preparing to sell a Seahurst home where view quality needs on-site assessment for accurate premium determination",
        "A beneficiary questioning the trustee's pricing because automated estimates average across dramatically different neighborhoods",
      ],
      whyLocal: "Trust property sales in Burien require fiduciary guidance accounting for dramatic micro-market differences. A trustee who applies citywide averages to a Three Tree Point property creates pricing that won't withstand scrutiny. David's Burien experience provides the micro-neighborhood analysis fiduciary situations demand.",
    },
  },
};
export function getCityServiceOverride(
  citySlug: string,
  serviceSlug: string,
): CityServiceOverride | undefined {
  return cityServiceOverrides[citySlug]?.[serviceSlug];
}
