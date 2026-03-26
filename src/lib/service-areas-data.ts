// Central data layer for all counties, cities, and services
// This powers templates, routing, navigation, and internal linking

/** Community tone classification — shapes connecting language throughout templates */
export type CommunityTone = 
  | "premium"      // upscale, established, high-value (Mercer Island, Bellevue, Bainbridge)
  | "urban"        // complex, fast-paced, diverse neighborhoods (Seattle, Tacoma, Everett)
  | "suburban"     // family-oriented, practical, approachable (Kirkland, Redmond, Mill Creek)
  | "waterfront"   // locally grounded, nuanced, community-rooted (Edmonds, Mukilteo, Poulsbo)
  | "smalltown"    // personal, steady, relationship-oriented (Duvall, Snohomish, Gold Bar)
  | "military"     // practical, respectful, community-aware (Lakewood, Silverdale, Bremerton)
  | "rural";       // grounded, honest, property-specific (Graham, Eatonville, Seabeck)

export interface CityData {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  /** Community tone — drives template language variation */
  tone?: CommunityTone;
  /** Short unique descriptor for meta/intro variation */
  descriptor?: string;
  /** Unique hero intro paragraph for the city page */
  heroIntro?: string;
  /** Unique "why local knowledge matters" paragraph */
  localKnowledge?: string;
  /** Unique "why broker/appraiser" paragraph */
  brokerAppraiserValue?: string;
  /** City-specific situations clients face */
  localSituations?: string[];
  /** City-specific client types */
  localClientTypes?: string[];
}

export interface CountyData {
  name: string;
  slug: string;
  cities: CityData[];
}

export interface ServiceData {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  /** Used in city+service page intros */
  cityIntroTemplate: string;
  /** Who this service is designed for */
  targetAudience: string[];
  /** Why valuation and market guidance matter for this service */
  whyValuationMatters: string;
}

// ─── City-specific content for all cities ──────────────────────────────
// Keyed by slug for easy lookup

const cityContent: Record<string, Omit<CityData, "name" | "slug" | "county" | "countySlug">> = {
  // ── KING COUNTY ─────────────────────────────────────────────
  bellevue: {
    tone: "premium",
    descriptor: "Eastside luxury and established neighborhoods",
    heroIntro: "Bellevue is one of the most dynamic real estate markets in Washington State — a mix of established neighborhoods, high-value estates, and rapid new development. For families managing a probate sale, trust property, or senior transition in Bellevue, the stakes are often significant. Real Property Planning provides valuation-informed guidance that accounts for Bellevue's premium market positioning, neighborhood-level pricing differences, and the unique challenges of selling estate or inherited property in a competitive environment.",
    localKnowledge: "Bellevue's real estate market spans a wide spectrum — from mid-century ramblers in Crossroads to multimillion-dollar estates in West Bellevue, Meydenbauer, and Vuecrest. Accurate pricing requires understanding how neighborhood, lot size, views, and condition interact in a market where buyer expectations are high. David Stein's dual credentials as a licensed broker and state-certified appraiser provide the local depth needed to position estate and transition properties effectively in Bellevue's competitive landscape.",
    brokerAppraiserValue: "In a high-value market like Bellevue, the difference between accurate pricing and a missed opportunity can be substantial. David Stein's combination of licensed brokerage experience and certified appraisal expertise means clients receive guidance grounded in actual property analysis — not automated estimates that may not account for the condition, lot characteristics, or neighborhood nuances that drive value on the Eastside.",
    localSituations: [
      "A longtime family home in a Bellevue neighborhood that has appreciated significantly and needs careful market positioning",
      "An inherited property on the Eastside where multiple heirs need objective valuation and clear communication",
      "A senior parent transitioning from a large Bellevue home to assisted or independent living",
      "A trust-owned property in Bellevue that requires fiduciary-appropriate sale coordination",
      "An out-of-state executor managing a high-value Bellevue estate property",
      "A divorce-related sale in Bellevue where both parties need a neutral, experienced broker",
    ],
  },
  kirkland: {
    tone: "suburban",
    descriptor: "Waterfront charm and growing neighborhoods",
    heroIntro: "Kirkland combines waterfront living, walkable neighborhoods, and a strong sense of community — qualities that make it one of the most desirable cities on the Eastside. When a property transition involves probate, an estate sale, a senior move, or an inherited home in Kirkland, the process benefits from someone who understands how Kirkland's distinct neighborhoods and buyer expectations affect pricing and preparation strategy.",
    localKnowledge: "Kirkland's neighborhoods range from the boutique waterfront of Moss Bay and Houghton to the larger-lot homes of Juanita, Finn Hill, and Totem Lake. Each area attracts different buyers with different expectations. Selling an estate or inherited property in Kirkland requires understanding which improvements matter, how waterfront proximity affects value, and how to position a home that may not be in move-in condition against newer or recently updated listings.",
    brokerAppraiserValue: "Kirkland's appeal lies in its location, walkability, and neighborhood character — but those qualities can be difficult to quantify with automated tools. David Stein evaluates each property based on its actual condition, lot characteristics, and realistic buyer demand in Kirkland. His appraisal background provides an analytical foundation that supports confident pricing decisions, especially for properties that need preparation or have deferred maintenance.",
  },
  redmond: {
    tone: "suburban",
    descriptor: "Technology corridor with diverse housing stock",
    heroIntro: "Redmond has grown from a quiet suburb into one of the most sought-after cities in King County, driven by its proximity to major employers and strong school districts. Families and fiduciaries managing estate, probate, or transition-related property in Redmond need guidance that reflects the city's evolving market dynamics and the wide range of housing — from original ramblers to newer planned communities like Trilogy and Redmond Ridge.",
    localKnowledge: "Redmond's housing stock includes everything from older homes in downtown Redmond and Education Hill to newer construction in Redmond Ridge, Trilogy, and the Overlake area. These submarkets behave differently, and an estate or inherited property may need very different preparation and pricing strategies depending on location. David Stein's familiarity with Redmond's micro-markets helps clients avoid the common mistake of applying a one-size-fits-all approach.",
  },
  bothell: {
    tone: "suburban",
    descriptor: "Cross-county community bridging King and Snohomish",
    heroIntro: "Bothell straddles the King and Snohomish County line, offering a mix of established neighborhoods, newer developments near Canyon Park, and properties along the Sammamish River corridor. For families navigating estate sales, probate, or senior transitions in Bothell, understanding how the city's dual-county location and neighborhood variety affect value is essential for making sound decisions.",
    localKnowledge: "Bothell's real estate spans mid-century homes in the original downtown core, newer construction near Canyon Park and the University of Washington Bothell campus, and properties along the river corridor. The city's position across two counties means comparable sales may come from either side of the boundary, and buyer demographics can shift meaningfully between neighborhoods. David Stein's experience with Bothell's specific market dynamics helps clients price and position properties accurately.",
  },
  issaquah: {
    tone: "suburban",
    descriptor: "Foothills communities and family neighborhoods",
    heroIntro: "Nestled against the Cascade foothills, Issaquah offers a blend of established neighborhoods, newer planned communities, and rural-adjacent properties. For families navigating a probate sale, senior transition, or inherited property situation in Issaquah, the process requires someone who understands the area's unique mix of housing types, lot sizes, and buyer expectations — from the Highlands and Talus to Olde Town Issaquah and surrounding areas.",
    localKnowledge: "Issaquah's real estate landscape includes master-planned communities like Issaquah Highlands and Talus, established neighborhoods near Olde Town, and properties in more rural settings toward the foothills. Each segment has its own pricing dynamics and buyer pool. Estate and inherited properties in Issaquah often require thoughtful preparation to compete effectively, especially when they differ from the newer construction that dominates parts of the market.",
  },
  sammamish: {
    tone: "premium",
    descriptor: "Plateau living with strong family appeal",
    heroIntro: "Sammamish is known for its spacious lots, top-rated schools, and family-oriented character on the Eastside plateau. Properties here tend to hold strong value, but estate and inherited homes — particularly those with deferred maintenance or dated finishes — require careful positioning in a market where buyers often expect move-in condition. Real Property Planning provides the valuation-informed guidance Sammamish families and fiduciaries need during important property transitions.",
    localKnowledge: "Sammamish properties range from well-maintained homes in Pine Lake, Beaver Lake, and Klahanie to larger custom homes throughout the plateau. The market can be competitive for updated properties but challenging for homes that need work. David Stein's understanding of how condition, lot size, and school proximity affect value in Sammamish helps clients set realistic expectations and develop preparation strategies that make sense for their specific situation.",
  },
  "mercer-island": {
    tone: "premium",
    descriptor: "Exclusive island community with premium waterfront",
    heroIntro: "Mercer Island is one of the most exclusive residential communities in the Pacific Northwest, with homes ranging from mid-century estates to modern waterfront properties. Managing an estate sale, trust property disposition, or senior transition on Mercer Island requires an understanding of the island's premium market positioning, limited inventory dynamics, and the high expectations of both sellers and buyers in this market.",
    localKnowledge: "Mercer Island's housing market includes waterfront estates, established homes on the east and west sides of the island, and condos near the town center. The island's limited land area, access via I-90, and strong school district create pricing dynamics that differ significantly from other Eastside communities. David Stein's appraisal credentials help clients understand how lot size, waterfront access, views, and condition interact in a market where generic pricing tools frequently miss the mark.",
    brokerAppraiserValue: "On Mercer Island, every property has distinctive characteristics — lake access, views, mature landscaping, or architectural significance — that standard market comparisons may undervalue or overestimate. David Stein's certified appraisal background provides the property-specific analysis that Mercer Island families and fiduciaries need for confident decision-making.",
    localSituations: [
      "A longtime family estate on Mercer Island that has appreciated significantly over decades",
      "A waterfront or view property where valuation requires nuanced understanding of island premiums",
      "A senior couple transitioning off the island to be closer to family or care resources",
      "An inherited property where multiple beneficiaries need objective valuation guidance",
      "A trust-owned home on Mercer Island that requires fiduciary-level sale coordination",
    ],
  },
  newcastle: {
    tone: "premium",
    descriptor: "Hillside community with Lake Washington views",
    heroIntro: "Newcastle offers hillside living with striking views of Lake Washington, the Seattle skyline, and the Cascades. For families managing property transitions in Newcastle — whether probate, estate, or senior-related — the community's view-oriented market and newer construction create specific pricing considerations that benefit from experienced, valuation-informed guidance.",
    localKnowledge: "Newcastle's housing stock is predominantly newer, with many homes built in the 1990s and 2000s in planned communities like Newcastle Highlands and the Golf Club at Newcastle area. Views are a primary value driver here, and the difference between a property with a panoramic view and one without can be substantial. David Stein helps clients understand how view corridors, lot positioning, and condition affect market value in Newcastle's hillside environment.",
  },
  seattle: {
    tone: "urban",
    descriptor: "Urban diversity across dozens of distinct neighborhoods",
    heroIntro: "Seattle's real estate market is as diverse as the city itself — from Capitol Hill condos to Magnolia estates, Ballard craftsmans to West Seattle view properties. Managing a probate sale, inherited home, or senior transition in Seattle means navigating a market where neighborhood context, zoning, and property type can dramatically affect both value and sale strategy. Real Property Planning provides the localized, valuation-informed guidance that Seattle's complex market demands.",
    localKnowledge: "Seattle encompasses over 80 distinct neighborhoods, each with its own character, pricing trends, and buyer expectations. A mid-century rambler in Wedgwood presents a very different sale scenario than a Capitol Hill condo or a Craftsman in Wallingford. David Stein's appraisal background and broker experience across Seattle's neighborhoods allow him to develop pricing and preparation strategies that reflect actual local conditions rather than citywide averages.",
    brokerAppraiserValue: "Seattle's market complexity makes generic pricing approaches especially risky for estate and inherited properties. Automated estimates often miss critical factors like lot potential, view corridors, ADU feasibility, and condition-based adjustments that vary block by block. David Stein's certified appraisal credentials and hands-on broker experience provide the granular analysis Seattle properties require for confident decision-making.",
    localSituations: [
      "An inherited craftsman in a rapidly changing Seattle neighborhood that may have significant lot value",
      "A senior parent selling a longtime home in North Seattle or West Seattle to move to a care community",
      "A probate property in Seattle requiring coordination across multiple out-of-state family members",
      "A trust-owned condo or townhome in Seattle's urban core that needs sale coordination",
      "A family home with rental history or ADU potential that requires nuanced valuation",
      "A divorce-related property sale in Seattle where neighborhood-level market knowledge is critical",
    ],
  },
  renton: {
    tone: "urban",
    descriptor: "South King County hub with evolving neighborhoods",
    heroIntro: "Renton has experienced significant growth and transformation, with neighborhoods ranging from the waterfront areas along Lake Washington to the established communities of Kennydale, the Highlands, and Benson Hill. For families and executors managing property transitions in Renton, understanding how the city's evolving market affects valuation and sale timing is essential. Real Property Planning provides clear, practical guidance for Renton property situations.",
    localKnowledge: "Renton's market includes everything from lakefront properties and Kennydale mid-century homes to newer developments in the Highlands and established neighborhoods in Benson Hill. The city's proximity to major employers and ongoing development make it a dynamic market where pricing accuracy is especially important. David Stein's appraiser credentials help clients understand how Renton's different submarkets and the city's growth trajectory affect their specific property.",
  },
  kent: {
    tone: "suburban",
    descriptor: "South King County's largest city with diverse housing",
    heroIntro: "Kent is one of the largest cities in King County, with a housing market that ranges from established neighborhoods on the East Hill to properties in the valley and the West Hill areas. For families and executors managing estate, probate, or transition properties in Kent, the city's diverse housing stock and wide price range require an approach that accounts for neighborhood-specific conditions rather than broad market averages.",
    localKnowledge: "Kent's real estate includes everything from 1960s and '70s ramblers on East Hill to newer construction, townhomes, and condos throughout the city. The valley areas, West Hill, and the Panther Lake neighborhood each attract different buyers. David Stein's appraisal credentials help clients in Kent understand how location within the city, property condition, and lot characteristics affect realistic pricing for estate and transition properties.",
  },
  auburn: {
    tone: "suburban",
    descriptor: "Valley community with established neighborhoods and rural edges",
    heroIntro: "Auburn offers a blend of established valley neighborhoods, hillside properties with views, and rural-adjacent areas toward the city's southeastern edge. Managing an estate sale, senior transition, or inherited property in Auburn requires practical guidance that accounts for the city's range of property types and the specific buyer demographics active in each area of the market.",
    localKnowledge: "Auburn's housing market includes mid-century homes in the valley, newer developments on the hillside areas, and properties with larger lots along the rural edges. The city's proximity to major employers and transportation corridors influences buyer demand in ways that vary by neighborhood. David Stein helps Auburn clients understand these dynamics and position estate or transition properties effectively based on their specific location and condition.",
  },
  "federal-way": {
    tone: "suburban",
    descriptor: "South King gateway with lake-adjacent communities",
    heroIntro: "Federal Way sits at the southern edge of King County, offering established neighborhoods, newer developments, and properties near Steel Lake, North Lake, and the Federal Way town center. For families managing estate or transition-related property sales in Federal Way, understanding how the city's diverse housing stock and competitive pricing environment affect sale strategy is key to a good outcome.",
    localKnowledge: "Federal Way's housing ranges from established ramblers and split-levels to newer townhomes and condos near the city center. Properties near the lakes, those on larger lots, and those with mountain views each appeal to different buyer segments. David Stein's dual credentials help clients understand how condition, location, and property type affect realistic pricing in Federal Way's market, where accurate positioning is essential for attracting the right buyers.",
  },
  shoreline: {
    tone: "suburban",
    descriptor: "North Seattle gateway with light rail transformation",
    heroIntro: "Shoreline is being reshaped by light rail expansion, bringing new development and shifting buyer interest throughout the city. For families managing estate sales, senior transitions, or inherited properties in Shoreline, the city's evolving market creates both opportunities and considerations that require experienced, locally informed guidance.",
    localKnowledge: "Shoreline's housing stock is primarily mid-century ramblers and split-levels, many of which have been updated over the decades, alongside newer infill development near the light rail stations. The city's proximity to Seattle, strong school district, and evolving transit access all influence value. David Stein helps clients understand how Shoreline's transformation affects their specific property — whether it's near a station area or in one of the city's quieter residential pockets.",
  },
  burien: {
    tone: "suburban",
    descriptor: "South Seattle neighbor with walkable downtown revival",
    heroIntro: "Burien has evolved from a quiet suburb into a community with a revitalized downtown core and diverse neighborhoods ranging from Three Tree Point's waterfront to Seahurst's hillside homes. For families navigating estate, probate, or transition property sales in Burien, the city's range of housing types and price points requires guidance that reflects actual neighborhood-level conditions.",
    localKnowledge: "Burien's neighborhoods include the waterfront enclave of Three Tree Point, the hillside homes of Seahurst with sound views, established residential areas near downtown, and properties along the 1st Avenue corridor. Each area carries different value drivers and buyer expectations. David Stein's appraisal background helps clients understand how these micro-market differences affect realistic pricing for estate and transition properties in Burien.",
  },
  "des-moines": {
    tone: "waterfront",
    descriptor: "Waterfront community along the Puget Sound",
    heroIntro: "Des Moines offers waterfront living, marina access, and established neighborhoods with sound and mountain views along the Puget Sound coastline. For families handling estate sales or senior transitions in Des Moines, the community's view-oriented market and range of property ages create pricing considerations that benefit from experienced, condition-based analysis.",
    localKnowledge: "Des Moines' housing market includes waterfront properties along the sound, hillside homes with varying degrees of view, and established inland neighborhoods. The marina, Saltwater State Park, and waterfront character all contribute to the community's appeal. David Stein helps clients understand how proximity to the water, view quality, and property condition affect value in Des Moines — factors that automated estimates frequently misjudge.",
  },
  seatac: {
    tone: "suburban",
    descriptor: "Airport-adjacent community with practical appeal",
    heroIntro: "SeaTac's proximity to Seattle-Tacoma International Airport creates a unique real estate environment where noise considerations, commercial zoning, and residential neighborhoods all coexist. For families managing estate or transition-related property in SeaTac, understanding how the airport's influence and the city's specific zoning affect property values is essential for realistic expectations and effective sale strategy.",
    localKnowledge: "SeaTac's housing market is compact and influenced by its airport-adjacent location. Properties vary significantly in value based on their proximity to flight paths, commercial zones, and the quieter residential pockets of the city. David Stein helps clients navigate SeaTac's unique market dynamics with honest, condition-based guidance that accounts for the factors specific to this community.",
  },
  tukwila: {
    tone: "urban",
    descriptor: "Urban crossroads with commercial and residential diversity",
    heroIntro: "Tukwila sits at a crossroads of major highways and commercial districts while maintaining established residential neighborhoods that many families have called home for decades. For executors, heirs, and families managing property transitions in Tukwila, the city's commercial adjacency and diverse housing stock create specific valuation and positioning considerations.",
    localKnowledge: "Tukwila's residential areas include neighborhoods near Foster Point, Riverton Heights, and the hillside areas with views toward the Cascades. The city's commercial centers, light rail access, and proximity to major employers all influence buyer demographics. David Stein helps clients understand how Tukwila's unique position as both a commercial hub and residential community affects realistic property values.",
  },
  woodinville: {
    tone: "rural",
    descriptor: "Wine country character with estate-style properties",
    heroIntro: "Woodinville is known for its wine country character, rural-residential neighborhoods, and properties that range from established homes near town to larger estate-style lots in the surrounding areas. For families navigating estate sales, senior transitions, or inherited property in Woodinville, the community's mix of suburban and rural-adjacent housing requires locally informed pricing and preparation guidance.",
    localKnowledge: "Woodinville's housing market includes everything from newer townhomes and condos near the town center to larger-lot properties and homes with acreage in the surrounding areas. The Sammamish River corridor, wine district proximity, and equestrian properties all create niche market segments. David Stein's appraisal credentials are especially valuable here, where property characteristics like land area, outbuildings, and rural features can meaningfully affect value.",
  },
  kenmore: {
    tone: "waterfront",
    descriptor: "Lakeside community at the north end of Lake Washington",
    heroIntro: "Kenmore sits at the northern tip of Lake Washington, offering waterfront access, established neighborhoods, and the natural appeal of the Burke-Gilman Trail and Log Boom Park. For families managing estate or transition-related property in Kenmore, the community's lake-adjacent market and range of housing types require guidance that reflects local pricing dynamics.",
    localKnowledge: "Kenmore's housing includes waterfront and water-view properties along Lake Washington, established mid-century homes in the hillside neighborhoods, and newer developments near the city center. Proximity to the lake, trail access, and views all significantly influence value. David Stein helps Kenmore clients understand how these factors — combined with property condition — affect realistic market positioning.",
  },
  "maple-valley": {
    tone: "suburban",
    descriptor: "Growing foothills community with family appeal",
    heroIntro: "Maple Valley has grown from a rural crossroads into a well-regarded family community in the foothills southeast of Renton. For families managing estate, probate, or transition properties in Maple Valley, the community's mix of newer planned developments and older established homes requires an approach that accounts for how location within the area and property characteristics affect value.",
    localKnowledge: "Maple Valley's housing ranges from newer construction in communities like Lakeland Hills to established homes on larger lots in the surrounding areas. The community's family-oriented character, proximity to trails and parks, and growing amenities all contribute to its appeal. David Stein helps clients understand how Maple Valley's growth trajectory and neighborhood differences affect realistic pricing for estate and transition properties.",
  },
  covington: {
    tone: "suburban",
    descriptor: "Family-focused community in southeast King County",
    heroIntro: "Covington is a growing community in southeast King County known for its family-friendly neighborhoods, newer construction, and proximity to the Cascade foothills. For families handling estate or transition-related property in Covington, understanding how the city's predominantly newer housing stock and buyer expectations affect sale strategy is important for realistic positioning.",
    localKnowledge: "Covington's housing market is largely composed of homes built since the 1990s, many in planned subdivisions with HOA structures. The community's newer housing stock means estate and inherited properties may face different competitive dynamics than in older, more established neighborhoods. David Stein helps clients understand how condition, age, and community amenities affect value within Covington's specific market context.",
  },
  "black-diamond": {
    tone: "smalltown",
    descriptor: "Small-town character with rural and master-planned living",
    heroIntro: "Black Diamond is a small community at the rural edge of southeast King County, combining historic small-town character with newer master-planned developments. For families managing estate or transition properties in Black Diamond, the community's mix of older homes, rural properties, and new construction creates a market where local knowledge is essential for accurate pricing.",
    localKnowledge: "Black Diamond's housing ranges from historic properties in the original town core to large-lot rural homes and newer construction in the Ten Trails master-planned community. The wide variety of property types — and the significant price differences between them — makes generic pricing tools unreliable. David Stein's appraisal credentials help clients understand how property type, lot size, and location within Black Diamond affect realistic market value.",
  },
  enumclaw: {
    tone: "smalltown",
    descriptor: "Plateau community with mountain views and rural character",
    heroIntro: "Enumclaw sits on a plateau with striking views of Mount Rainier, combining small-town character with rural properties and established neighborhoods. For families managing estate or transition-related property in Enumclaw, the community's distinct market — influenced by its rural character, agricultural heritage, and distance from major employment centers — requires guidance grounded in local understanding.",
    localKnowledge: "Enumclaw's housing market includes homes in the walkable downtown area, established neighborhoods, and properties with acreage and mountain views in the surrounding plateau. The community's agricultural heritage means some properties include outbuildings, livestock facilities, or unique lot configurations. David Stein helps clients understand how these property characteristics and Enumclaw's specific buyer demographics affect realistic pricing.",
  },
  "north-bend": {
    tone: "smalltown",
    descriptor: "Mountain gateway community along I-90",
    heroIntro: "North Bend is a gateway community to the Cascades, known for its mountain views, outdoor recreation access, and small-town character along the I-90 corridor. Estate, probate, and transition properties in North Bend often include unique features — mountain views, larger lots, or proximity to wilderness — that require locally informed valuation guidance.",
    localKnowledge: "North Bend's housing ranges from established homes near downtown and the historic area to newer developments and properties with mountain views and larger lots. The community's appeal to outdoor enthusiasts and those seeking a mountain-adjacent lifestyle creates specific buyer expectations. David Stein helps clients understand how North Bend's location, property characteristics, and niche buyer pool affect realistic pricing for estate and transition sales.",
  },
  snoqualmie: {
    tone: "suburban",
    descriptor: "Falls community with planned neighborhoods and natural beauty",
    heroIntro: "Snoqualmie combines natural beauty — anchored by the iconic Snoqualmie Falls — with well-planned residential communities and strong family appeal. For families handling estate or transition-related property in Snoqualmie, the community's newer housing stock and specific buyer expectations require pricing and preparation strategies informed by local market conditions.",
    localKnowledge: "Snoqualmie's housing is predominantly newer, with many homes in master-planned communities like Snoqualmie Ridge. The community's reputation for natural beauty, family-friendly amenities, and outdoor access drives buyer interest. For estate and inherited properties, understanding how condition and age compare to the area's well-maintained housing stock is essential for realistic positioning. David Stein helps clients navigate these dynamics with clear, condition-based guidance.",
  },
  duvall: {
    tone: "smalltown",
    descriptor: "Small-town riverside community in the Snoqualmie Valley",
    heroIntro: "Duvall is a small, tight-knit community along the Snoqualmie River, offering a rural-residential character that distinguishes it from more suburban Eastside cities. For families managing estate, probate, or transition properties in Duvall, the community's limited inventory, smaller-town dynamics, and range of property types — from modest homes to properties with acreage — require locally grounded guidance.",
    localKnowledge: "Duvall's housing market includes homes in the walkable town center, newer subdivisions, and larger rural properties along the valley. The community's small-town identity and agricultural surroundings create a market where buyer expectations differ from more urban areas. David Stein's appraisal background helps clients in Duvall understand how property size, rural features, and community character affect realistic valuation.",
  },

  // ── SNOHOMISH COUNTY ────────────────────────────────────────
  lynnwood: {
    tone: "urban",
    descriptor: "Rapidly evolving with new light rail access",
    heroIntro: "Lynnwood is in the middle of a significant transformation, with light rail expansion bringing new development and shifting market dynamics. For families managing estate, probate, or senior transition properties in Lynnwood, this changing landscape creates both opportunities and challenges. Real Property Planning helps clients in Lynnwood understand how the city's evolution affects property values and develop sale strategies that reflect current and realistic market conditions.",
    localKnowledge: "Lynnwood's housing stock includes established ramblers and split-levels from the 1960s–80s, newer townhomes and condos near the city center, and properties in neighborhoods like Alderwood, Martha Lake, and North Lynnwood. The arrival of light rail is reshaping buyer interest in certain areas while leaving others relatively unchanged. David Stein's understanding of these micro-market shifts helps clients position estate and transition properties effectively.",
  },
  edmonds: {
    tone: "waterfront",
    descriptor: "Charming waterfront community with historic character",
    heroIntro: "Edmonds is a waterfront community known for its walkable downtown, ferry access, and strong neighborhood character. Properties in Edmonds — from bowl-area homes with sound views to hillside residences and properties near Highway 99 — require locally informed guidance when the sale involves estate, probate, or transition circumstances. Real Property Planning understands the nuances that affect value throughout Edmonds.",
    localKnowledge: "Edmonds offers a wide range of property types and price points, from the desirable bowl area near downtown to Perrinville, Westgate, and Firdale. Waterfront proximity, views, walkability, and lot size all play meaningful roles in Edmonds pricing. David Stein's dual credentials help families selling estate or inherited property in Edmonds understand exactly where their home fits in this layered market and how to position it for the best possible outcome.",
    brokerAppraiserValue: "In Edmonds, view corridors, walking distance to the ferry and downtown, and neighborhood character can create wide value differences within a small geographic area. David Stein's appraisal background allows him to account for these micro-factors rather than relying on broad market comparisons that may miss what makes a specific Edmonds property more — or less — valuable.",
  },
  "mountlake-terrace": {
    tone: "suburban",
    descriptor: "Light rail-connected community with lake recreation",
    heroIntro: "Mountlake Terrace is a compact residential community centered around its recreational lake and pool facility, with newer light rail service enhancing its appeal to commuters. For families managing estate or transition properties in Mountlake Terrace, the community's strong neighborhood identity and evolving transit-oriented development create specific market considerations that benefit from experienced guidance.",
    localKnowledge: "Mountlake Terrace's housing is predominantly mid-century — ramblers and split-levels from the 1960s and '70s — along with some newer construction near the town center and light rail station. The community's recreational facilities and tight-knit character drive consistent buyer interest. David Stein helps clients understand how condition, proximity to amenities, and the light rail's influence affect property values throughout the community.",
  },
  brier: {
    tone: "suburban",
    descriptor: "Wooded residential enclave with larger lots",
    heroIntro: "Brier is a small, wooded residential community known for its larger lot sizes, privacy, and semi-rural character despite its proximity to Lynnwood, Mountlake Terrace, and Bothell. Estate and transition properties in Brier often feature mature landscaping, older construction, and lot sizes that distinguish them from surrounding areas — all factors that require careful, condition-based valuation.",
    localKnowledge: "Brier's housing stock tends toward older single-family homes on lots that are significantly larger than those in neighboring communities. The community's zoning protects its semi-rural character, which appeals to buyers seeking privacy and space. David Stein helps clients understand how Brier's unique lot sizes, mature landscaping, and residential character affect property values — factors that automated estimates often misjudge in a community this small.",
  },
  mukilteo: {
    tone: "waterfront",
    descriptor: "Coastal community with Boeing and ferry influences",
    heroIntro: "Mukilteo is a small, close-knit community with waterfront appeal, ferry access to Whidbey Island, and a housing market influenced by its proximity to Boeing and Paine Field. For families handling estate or transition-related property in Mukilteo, the community's character and relatively limited housing inventory create specific market dynamics that benefit from experienced, local guidance.",
    localKnowledge: "Mukilteo's housing market is relatively compact, with established neighborhoods near the waterfront, properties in the Harbour Pointe master-planned community, and homes along the hillside with varying degrees of sound and mountain views. Because inventory is limited, positioning and pricing accuracy are especially important. David Stein helps clients understand how Mukilteo's unique characteristics affect value and buyer interest.",
  },
  everett: {
    tone: "urban",
    descriptor: "County seat with waterfront revival and diverse neighborhoods",
    heroIntro: "As Snohomish County's largest city, Everett offers a diverse housing landscape — from the revitalizing waterfront and Port Gardner district to established neighborhoods in North Everett, Silver Lake, and Lowell. Families and executors managing property transitions in Everett need guidance that accounts for the city's wide range of property types, price points, and neighborhood trajectories.",
    localKnowledge: "Everett's neighborhoods vary significantly in character and value — from the grand historic homes on Grand and Rucker to mid-century ramblers, newer developments near Silver Lake, and waterfront condos on the Port Gardner peninsula. David Stein's experience across Everett's submarkets helps clients understand which areas are appreciating, where buyer demand is strongest, and how to position an estate or inherited property given its specific location and condition.",
  },
  "mill-creek": {
    tone: "suburban",
    descriptor: "Master-planned community with strong family appeal",
    heroIntro: "Mill Creek is a well-regarded master-planned community known for its maintained common areas, strong schools, and family-friendly character. Estate, probate, and senior transition properties in Mill Creek benefit from guidance that understands the community's HOA considerations, buyer expectations, and how condition affects value within a market that tends to attract families seeking move-in-ready homes.",
    localKnowledge: "Mill Creek's housing includes a range of single-family homes, townhomes, and condos within its planned community framework. The town center, country club, and trail system all contribute to Mill Creek's appeal. When selling an estate or inherited property here, understanding HOA requirements and how the property compares to recently updated homes in the community is essential for realistic pricing.",
  },
  "bothell-snohomish": {
    tone: "suburban",
    descriptor: "Snohomish County side of the Bothell community",
    heroIntro: "The Snohomish County portion of Bothell includes neighborhoods near Canyon Park, the University of Washington Bothell campus, and established residential areas along the city's northern edge. For families managing estate or transition-related property in this area, understanding how the Snohomish County side of Bothell differs in market dynamics from the King County side is important for accurate positioning.",
    localKnowledge: "Bothell's Snohomish County neighborhoods include Canyon Park, North Creek, and areas near the UW Bothell campus, with housing ranging from older ramblers to newer townhome and condo developments. The area's proximity to the Mill Creek community and its commercial corridors influence buyer interest and demographics. David Stein helps clients understand these local dynamics for estate and transition properties.",
  },
  "woodinville-snohomish": {
    tone: "rural",
    descriptor: "Wine country living in Snohomish County",
    heroIntro: "The Snohomish County portion of the Woodinville area includes properties near the wine district, rural-residential neighborhoods, and newer developments. For families managing estate or transition-related property in this area, understanding how wine country proximity, lot sizes, and rural character affect value is important for realistic pricing.",
    localKnowledge: "Properties in the Snohomish County Woodinville area range from estate-style homes near the wine district to rural properties with acreage and newer suburban developments. David Stein's appraisal background helps clients in this area understand how the blend of rural, suburban, and wine-country characteristics affects property values.",
  },
  snohomish: {
    tone: "smalltown",
    descriptor: "Historic small-town character with rural and estate properties",
    heroIntro: "The city of Snohomish — often called the 'Antique Capital of the Northwest' — combines historic small-town character with larger-lot properties and rural-adjacent living. Estate, inherited, and transition properties in Snohomish often include unique features like acreage, older construction, or outbuildings that require specialized pricing and preparation knowledge.",
    localKnowledge: "Snohomish's housing market includes historic homes in the walkable downtown, newer subdivisions, and larger properties with acreage on the outskirts. The rural and semi-rural character of many Snohomish properties means that standard urban comparisons often fall short. David Stein's appraisal background is especially valuable here, where property features like land, outbuildings, and access can meaningfully affect value.",
  },
  "lake-stevens": {
    tone: "suburban",
    descriptor: "Lakeside community with rapid residential growth",
    heroIntro: "Lake Stevens has experienced significant growth in recent years, transforming from a rural lake community into one of Snohomish County's most active residential markets. For families managing estate or transition-related property in Lake Stevens, the community's rapid evolution means property values and buyer expectations may have shifted significantly from when the home was originally purchased.",
    localKnowledge: "Lake Stevens' housing ranges from established homes near the lake and the original town center to newer construction in rapidly developing subdivisions throughout the community. The lake itself remains a major amenity and value driver, but distance from the water creates meaningful price variations. David Stein helps clients understand how Lake Stevens' growth trajectory and property-specific characteristics affect realistic market positioning.",
  },
  marysville: {
    tone: "suburban",
    descriptor: "Growing north Snohomish County community",
    heroIntro: "Marysville has grown into one of the largest and most active communities in northern Snohomish County, with established neighborhoods near downtown and newer developments extending toward the surrounding rural areas. For families managing estate, probate, or transition properties in Marysville, the city's range of housing types and price points requires practical, locally informed guidance.",
    localKnowledge: "Marysville's housing market includes older homes in the Ebey Waterfront and downtown areas, mid-range suburban developments, and newer construction on the city's expanding edges. The I-5 corridor's accessibility and the community's affordability relative to the Eastside and Seattle drive buyer interest. David Stein helps clients navigate Marysville's market dynamics and position estate or transition properties realistically.",
  },
  arlington: {
    tone: "smalltown",
    descriptor: "Small-city character where suburban meets rural",
    heroIntro: "Arlington combines small-city amenities with proximity to rural Snohomish County and the Cascade foothills. Estate, inherited, and transition properties in Arlington often feature larger lots, older construction, or rural characteristics that require specialized understanding for accurate pricing and effective sale coordination.",
    localKnowledge: "Arlington's housing includes established homes in the downtown area, suburban developments, and properties with acreage in the surrounding areas toward Darrington and the foothills. The community's balance of small-city accessibility and rural character creates a market where property features like land size, outbuildings, and road access meaningfully affect value. David Stein's appraisal credentials help Arlington clients understand these dynamics.",
  },
  monroe: {
    tone: "smalltown",
    descriptor: "Gateway to the Skykomish Valley with diverse housing",
    heroIntro: "Monroe serves as a gateway between the suburban communities of Snohomish County and the Skykomish Valley, offering a mix of established neighborhoods, newer developments, and rural properties. For families managing estate or transition properties in Monroe, the community's position along the US-2 corridor and its range of housing types create specific market considerations.",
    localKnowledge: "Monroe's housing ranges from homes near the historic downtown and fairgrounds to newer subdivisions and larger rural properties along the valley. The community's accessibility via US-2, its proximity to both employment centers and outdoor recreation, and its range of property sizes all influence buyer demographics. David Stein helps Monroe clients understand how these factors affect value for estate and transition properties.",
  },
  stanwood: {
    tone: "smalltown",
    descriptor: "Stillaguamish delta community near Camano Island",
    heroIntro: "Stanwood is a small, welcoming community near the Stillaguamish River delta and Camano Island, known for its rural character, farmland views, and proximity to the coast. Estate and transition properties in Stanwood often feature larger lots, agricultural connections, or older construction that benefits from valuation guidance grounded in the area's specific market.",
    localKnowledge: "Stanwood's housing market includes established homes near downtown, rural properties with acreage and farmland views, and newer developments. The community's proximity to Camano Island and its agricultural heritage create a niche market where standard suburban comparisons may not apply. David Stein helps clients understand how Stanwood's rural character and limited inventory affect realistic property pricing.",
  },
  sultan: {
    tone: "smalltown",
    descriptor: "Sky Valley community with mountain access",
    heroIntro: "Sultan is a small community along the Skykomish River in the Sky Valley, offering affordable housing, mountain access, and a rural character that appeals to buyers seeking distance from urban density. For families managing estate or transition properties in Sultan, the community's smaller market and unique property types require locally informed guidance.",
    localKnowledge: "Sultan's housing includes established homes near town, properties with acreage along the river corridor, and newer construction. The community's position along US-2 and its proximity to both Stevens Pass recreation and Snohomish County employment centers influence buyer interest. David Stein helps Sultan clients understand how the community's niche market dynamics affect realistic property values.",
  },
  "gold-bar": {
    tone: "rural",
    descriptor: "Rural mountain community along the Skykomish River",
    heroIntro: "Gold Bar is a small rural community along the Skykomish River, known for its proximity to Wallace Falls State Park and the Cascade foothills. Estate and transition properties in Gold Bar often include unique characteristics — river access, mountain views, larger acreage, or rustic construction — that require specialized valuation understanding.",
    localKnowledge: "Gold Bar's housing market is limited in inventory and includes a mix of older cabins, established homes, and newer construction, many with larger lots or river proximity. The community's rural character and distance from major employment centers create specific buyer demographics. David Stein's appraisal credentials help clients understand how Gold Bar's unique property types and small-market dynamics affect realistic pricing.",
  },
  "granite-falls": {
    tone: "rural",
    descriptor: "Cascade foothills community with natural surroundings",
    heroIntro: "Granite Falls is a small community at the edge of the Cascade foothills in eastern Snohomish County, offering an affordable, nature-oriented lifestyle. For families managing estate or transition properties in Granite Falls, the community's rural character, limited comparable sales, and range of property types require experienced, condition-based valuation guidance.",
    localKnowledge: "Granite Falls' housing includes homes in the established town center, rural properties with acreage, and homes near the Mountain Loop Highway corridor. The community's small size means limited comparable sales, making professional valuation especially important. David Stein helps Granite Falls clients navigate pricing with the careful, property-specific analysis that this unique market requires.",
  },

  // ── PIERCE COUNTY ───────────────────────────────────────────
  tacoma: {
    tone: "urban",
    descriptor: "Growing urban market with neighborhood diversity",
    heroIntro: "Tacoma has emerged as one of the most dynamic real estate markets in Pierce County, with neighborhoods ranging from the historic Stadium District and North End to the waterfront communities of Ruston and Point Defiance. For families and fiduciaries navigating estate, probate, or senior transition sales in Tacoma, the city's neighborhood diversity and growth trajectory make experienced, local guidance essential.",
    localKnowledge: "Tacoma's neighborhoods each carry distinct market dynamics — the North End's established homes, Stadium District's architectural character, South Tacoma's affordability, and the waterfront communities' premium positioning. David Stein's understanding of how these submarkets behave helps clients avoid the mistake of treating Tacoma as a single market. For estate and inherited properties, knowing which neighborhood factors drive — or limit — buyer interest is critical to realistic pricing.",
    localSituations: [
      "An inherited craftsman or Tudor in Tacoma's historic North End or Stadium District",
      "A senior parent leaving a longtime family home in Tacoma for assisted living",
      "A probate property in South Tacoma or Eastside that needs preparation and realistic market positioning",
      "A trust-owned property near Point Defiance or the waterfront where value depends heavily on location specifics",
      "An out-of-state executor managing a Tacoma estate sale remotely",
    ],
  },
  "university-place": {
    tone: "suburban",
    descriptor: "Established residential community near Tacoma",
    heroIntro: "University Place is a well-maintained residential community adjacent to Tacoma, known for its quality neighborhoods, Chambers Bay golf course, and access to Puget Sound waterfront. Families and fiduciaries managing property transitions in University Place benefit from guidance that reflects the community's strong neighborhood character and the specific expectations of buyers drawn to this area.",
    localKnowledge: "University Place offers a mix of established single-family homes, newer developments, and properties near Chambers Bay and the waterfront. The community's appeal lies in its combination of residential character, proximity to Tacoma's amenities, and access to outdoor recreation. For estate and transition properties, understanding how condition compares to the area's well-maintained housing stock is key to effective pricing.",
  },
  lakewood: {
    tone: "military",
    descriptor: "Diverse community near Joint Base Lewis-McChord",
    heroIntro: "Lakewood's proximity to Joint Base Lewis-McChord, its diverse neighborhoods, and its range of housing types — from lakefront properties to established suburban homes — create a real estate market with specific dynamics. For families and executors managing estate or transition-related property in Lakewood, understanding how military influence, neighborhood differences, and property condition affect value is essential.",
    localKnowledge: "Lakewood's housing market includes lakefront properties on American Lake and Gravelly Lake, established neighborhoods in the Tillicum and Springbrook areas, and a range of housing types throughout the city. The military presence at JBLM affects buyer demographics and rental demand in ways that influence both pricing strategy and marketing approach. David Stein's experience helps clients navigate these considerations with clarity.",
  },
  puyallup: {
    tone: "suburban",
    descriptor: "Established family community in the valley",
    heroIntro: "Puyallup is a well-established community in the Puyallup Valley, known for its historic downtown, family neighborhoods, and strong sense of community. For families managing estate sales, senior transitions, or inherited property in Puyallup, the process benefits from a broker who understands the valley's housing stock, buyer demographics, and how condition and location affect value in this market.",
    localKnowledge: "Puyallup's housing ranges from older homes near downtown and South Hill to newer developments in the surrounding areas. The valley's agricultural heritage means some properties come with unique lot characteristics, outbuildings, or zoning considerations. David Stein helps clients in Puyallup understand how these factors — along with condition, school proximity, and neighborhood context — affect realistic pricing and buyer interest.",
  },
  "gig-harbor": {
    tone: "waterfront",
    descriptor: "Waterfront peninsula community with premium appeal",
    heroIntro: "Gig Harbor's waterfront charm, small-town atmosphere, and proximity to Tacoma and the Narrows Bridge have made it one of Pierce County's most desirable communities. Estate and transition properties in Gig Harbor — whether on the harbor itself, in the established neighborhoods of the peninsula, or in newer developments like Gig Harbor North — require pricing and preparation strategies informed by the area's unique buyer expectations.",
    localKnowledge: "Gig Harbor's market ranges from waterfront properties and historic harbor-area homes to newer construction in master-planned communities. The distinction between 'Gig Harbor proper' and surrounding unincorporated areas matters to buyers, and view properties, waterfront access, and proximity to downtown all significantly affect value. David Stein's appraisal credentials help clients understand these nuances rather than relying on broad averages.",
  },
  fircrest: {
    tone: "suburban",
    descriptor: "Small residential enclave near Tacoma",
    heroIntro: "Fircrest is a small, well-maintained residential community surrounded by Tacoma and University Place, known for its tree-lined streets, community parks, and quiet, family-oriented character. Estate and transition properties in Fircrest benefit from its strong neighborhood identity, but accurate pricing requires understanding how this compact community's specific appeal affects buyer demand.",
    localKnowledge: "Fircrest's housing is predominantly mid-century single-family homes on well-maintained lots. The community's small size and consistent character mean that property condition and updates are especially visible factors in pricing. David Stein helps Fircrest clients understand how their property compares within this tight-knit community and how to position it effectively for the local buyer pool.",
  },
  steilacoom: {
    tone: "waterfront",
    descriptor: "Historic waterfront town with military proximity",
    heroIntro: "Steilacoom is Washington's oldest incorporated town, offering historic charm, Puget Sound waterfront, and a quiet residential character near Joint Base Lewis-McChord. For families managing estate or transition properties in Steilacoom, the town's historic significance, waterfront access, and small-market dynamics create pricing considerations that benefit from experienced, locally informed guidance.",
    localKnowledge: "Steilacoom's housing includes historic homes near downtown and the waterfront, established mid-century properties, and homes with sound views. The town's historic character and proximity to JBLM influence both buyer demographics and property regulations. David Stein helps clients navigate Steilacoom's unique market with the property-specific analysis this historic community requires.",
  },
  "bonney-lake": {
    tone: "suburban",
    descriptor: "Growing plateau community east of Tacoma",
    heroIntro: "Bonney Lake is a growing community on the plateau east of Tacoma and Puyallup, with newer developments, mountain views, and an expanding commercial center. For families managing estate or transition-related property in Bonney Lake, the community's newer housing stock and growing buyer interest create specific market dynamics that require practical, informed guidance.",
    localKnowledge: "Bonney Lake's housing is predominantly newer, with many homes built since the 1990s in planned subdivisions. The community's mountain views, growing amenities, and relative affordability compared to west-side communities drive buyer interest. David Stein helps clients understand how property age, condition, and location within Bonney Lake's expanding boundaries affect realistic market value.",
  },
  sumner: {
    tone: "smalltown",
    descriptor: "Valley community with historic downtown character",
    heroIntro: "Sumner is a small community in the Puyallup Valley known for its historic downtown, residential neighborhoods, and connection to the valley's agricultural heritage. For families managing estate or transition properties in Sumner, the community's compact market and range of property ages require locally grounded pricing and preparation guidance.",
    localKnowledge: "Sumner's housing includes established homes near downtown, newer construction on the edges of the city, and properties influenced by the valley's agricultural context. The community's small-town character and proximity to Puyallup and Auburn create a buyer pool with specific expectations. David Stein helps Sumner clients position estate and transition properties realistically within this local context.",
  },
  orting: {
    tone: "smalltown",
    descriptor: "Small valley town with mountain views and rural charm",
    heroIntro: "Orting is a small town in the Carbon River valley, offering mountain views, rural charm, and affordable housing relative to other Pierce County communities. For families managing estate or transition properties in Orting, the community's smaller market, lahar zone considerations, and range of property types require honest, condition-based guidance.",
    localKnowledge: "Orting's housing ranges from established homes near the town center to newer developments and properties with rural characteristics. The community's position in the Carbon River valley and its relationship to Mount Rainier lahar zones are factors that informed buyers consider. David Stein helps Orting clients understand how these unique local factors affect realistic property values and buyer interest.",
  },
  spanaway: {
    tone: "military",
    descriptor: "Unincorporated community with military influence",
    heroIntro: "Spanaway is an unincorporated community south of Tacoma near Joint Base Lewis-McChord, offering affordable housing and access to Spanaway Lake Park. For families managing estate or transition-related property in Spanaway, understanding how the area's military-influenced buyer demographics and diverse housing stock affect value is important for realistic expectations.",
    localKnowledge: "Spanaway's housing includes established ramblers, manufactured homes, newer construction, and properties near Spanaway Lake. The community's proximity to JBLM significantly influences buyer demographics and rental demand. David Stein helps clients understand how Spanaway's specific market dynamics — including military-related demand and the area's range of property types — affect realistic pricing for estate and transition properties.",
  },
  graham: {
    tone: "rural",
    descriptor: "Rural-suburban community in eastern Pierce County",
    heroIntro: "Graham is an unincorporated community in eastern Pierce County, offering rural-suburban living with larger lots, mountain views, and agricultural character. For families managing estate or transition properties in Graham, the community's rural property types and distance from urban centers create specific valuation considerations.",
    localKnowledge: "Graham's housing ranges from established homes on larger lots to newer subdivisions and properties with acreage, outbuildings, and agricultural uses. The community's rural character means property features like land area, well and septic systems, and road access meaningfully affect value. David Stein's appraisal credentials help Graham clients understand how these rural-specific factors influence realistic property pricing.",
  },
  dupont: {
    tone: "military",
    descriptor: "Master-planned community near JBLM with historic roots",
    heroIntro: "DuPont is a distinctive master-planned community near Joint Base Lewis-McChord, built around a historic village core and designed with traditional neighborhood principles. For families managing estate or transition properties in DuPont, the community's HOA structure, planned character, and military-adjacent buyer demographics create specific market considerations.",
    localKnowledge: "DuPont's housing is predominantly within its master-planned community framework, with a range of home sizes and styles designed around the historic village core. The community's HOA requirements, proximity to JBLM and I-5, and planned amenities all influence buyer expectations. David Stein helps DuPont clients understand how the community's structured environment affects pricing and sale strategy for estate and transition properties.",
  },
  fife: {
    tone: "suburban",
    descriptor: "Compact community at the I-5 and Port of Tacoma crossroads",
    heroIntro: "Fife is a compact community situated at the intersection of I-5 and the Port of Tacoma, with a mix of residential neighborhoods and commercial development. For families managing estate or transition-related property in Fife, the community's unique position and relatively limited residential inventory create market dynamics that benefit from honest, experienced guidance.",
    localKnowledge: "Fife's residential areas are relatively compact, with established neighborhoods surrounded by commercial and industrial zones. The community's location along major transportation corridors and proximity to Tacoma and Federal Way influence buyer demographics. David Stein helps Fife clients navigate the community's specific market dynamics with clear, condition-based guidance.",
  },
  milton: {
    tone: "suburban",
    descriptor: "Small residential community spanning King and Pierce Counties",
    heroIntro: "Milton is a small residential community that spans the King-Pierce County line, offering quiet neighborhoods and a community-oriented character. For families managing estate or transition properties in Milton, the community's compact size and cross-county position create specific market considerations that benefit from locally informed pricing guidance.",
    localKnowledge: "Milton's housing is primarily established single-family homes in a compact residential setting. The community's position across two counties and its proximity to Edgewood, Federal Way, and Fife influence comparable sales and buyer demographics. David Stein helps Milton clients understand how these cross-boundary dynamics and the community's small-market character affect realistic property values.",
  },
  edgewood: {
    tone: "rural",
    descriptor: "Semi-rural community with larger lots and valley views",
    heroIntro: "Edgewood is a semi-rural residential community east of Milton and south of Puyallup, known for its larger lots, valley views, and quiet character. Estate and transition properties in Edgewood often feature acreage or larger-lot characteristics that distinguish them from more suburban communities in the area.",
    localKnowledge: "Edgewood's housing tends toward larger-lot single-family homes with a rural-residential feel, along with some newer development. The community's zoning protects its semi-rural character, which appeals to buyers seeking space and privacy. David Stein helps clients understand how Edgewood's distinctive lot sizes and residential character affect property values — factors that generic pricing tools often undervalue.",
  },
  buckley: {
    tone: "smalltown",
    descriptor: "Foothills town near Mount Rainier corridor",
    heroIntro: "Buckley is a small community at the gateway to the Mount Rainier corridor, combining small-town character with proximity to the Cascades. For families managing estate or transition-related property in Buckley, the community's smaller market, rural characteristics, and specific buyer demographics require experienced, locally grounded guidance.",
    localKnowledge: "Buckley's housing includes established homes near the town center, newer developments, and properties with rural features including larger lots and mountain proximity. The community's position along the SR-410 corridor toward Mount Rainier influences buyer interest and demographics. David Stein helps Buckley clients understand how these local factors affect realistic property pricing.",
  },
  eatonville: {
    tone: "rural",
    descriptor: "Rural gateway to Mount Rainier National Park",
    heroIntro: "Eatonville is a small, rural community that serves as one of the gateways to Mount Rainier National Park. For families managing estate or transition properties in Eatonville, the community's remote character, limited comparable sales, and range of rural property types require honest, condition-based valuation that accounts for the area's specific market dynamics.",
    localKnowledge: "Eatonville's housing ranges from established homes near the compact town center to rural properties with acreage and mountain access. The community's tourism connection to Mount Rainier and its agricultural character create a niche buyer pool. David Stein helps Eatonville clients understand how the community's rural character and limited market activity affect realistic property values.",
  },

  // ── KITSAP COUNTY ───────────────────────────────────────────
  bremerton: {
    tone: "military",
    descriptor: "Naval city with revitalizing waterfront and diverse housing",
    heroIntro: "Bremerton is experiencing a notable revitalization, with its waterfront, ferry terminal, and downtown district attracting renewed interest. The city's housing market — from historic homes in Manette to newer waterfront condos and established neighborhoods throughout — offers a wide range of price points and property types. For families managing estate, probate, or transition sales in Bremerton, understanding the city's evolving market is key to making well-informed decisions.",
    localKnowledge: "Bremerton's neighborhoods range from the revitalizing downtown and waterfront to Manette's established community character, the Naval Avenue area, and surrounding residential neighborhoods. The city's connection to Seattle via Washington State Ferries and the presence of Puget Sound Naval Shipyard both influence buyer demographics and market activity. David Stein's experience helps clients understand how Bremerton's ongoing transformation affects property values and sale strategy.",
  },
  silverdale: {
    tone: "military",
    descriptor: "Central Kitsap's commercial and residential hub",
    heroIntro: "Silverdale serves as Central Kitsap's primary commercial and residential center, with housing that ranges from newer developments in Ridgetop and Clear Creek to established neighborhoods throughout the community. For families managing estate, probate, or transition properties in Silverdale, understanding how this unincorporated community's market dynamics and proximity to Naval Base Kitsap affect value is important for making sound decisions.",
    localKnowledge: "Silverdale's housing market includes newer construction in planned communities, established ramblers and split-levels, and properties with varying degrees of access to waterfront and natural areas. The community's role as Central Kitsap's hub and the influence of nearby military installations create a buyer pool with specific characteristics. David Stein helps clients understand how these factors affect realistic pricing for estate and inherited properties.",
  },
  poulsbo: {
    tone: "waterfront",
    descriptor: "Scandinavian-influenced waterfront community",
    heroIntro: "Poulsbo's Scandinavian heritage, Liberty Bay waterfront, and small-town charm create a distinctive community with strong appeal for families and retirees. Estate and transition properties in Poulsbo — whether in the historic waterfront area, nearby established neighborhoods, or outlying rural properties — benefit from guidance that reflects the community's unique character and the expectations of buyers drawn to this area.",
    localKnowledge: "Poulsbo's housing ranges from historic homes near the waterfront and downtown to newer developments and larger rural properties in the surrounding area. Waterfront access, Liberty Bay views, and proximity to downtown all significantly influence value. David Stein's appraisal credentials are particularly valuable in Poulsbo, where the range of property types and the community's distinctive character make generic pricing approaches unreliable.",
  },
  "bainbridge-island": {
    tone: "premium",
    descriptor: "Island community with Seattle ferry access and premium values",
    heroIntro: "Bainbridge Island offers a rare combination of island living, artistic community character, and daily ferry access to downtown Seattle. The island's real estate market is premium and distinctive — estate, probate, and transition properties here involve specific considerations around island logistics, waterfront valuation, and the expectations of a buyer pool that prioritizes lifestyle and community over conventional suburban amenities.",
    localKnowledge: "Bainbridge Island's housing market includes everything from modest cottages and island-style homes to waterfront estates and rural acreage. The island's limited inventory, ferry-dependent access, and strong community identity create pricing dynamics unlike any other market in the Puget Sound region. David Stein's appraisal background is especially valuable here, where automated estimates frequently miss the premium that island location, waterfront access, and community character command.",
    brokerAppraiserValue: "Bainbridge Island properties are notoriously difficult to price with automated tools. The island's limited comparable sales, wide range of property types, and premium positioning require hands-on evaluation. David Stein's certified appraisal credentials — combined with his understanding of how island logistics affect sale coordination and buyer behavior — provide the kind of informed guidance that Bainbridge families and fiduciaries need.",
    localSituations: [
      "A longtime island family home being sold as part of an estate or trust",
      "A waterfront or view property on Bainbridge that requires specialized valuation",
      "A senior islander transitioning to care on the mainland who needs coordinated sale support",
      "An inherited property on Bainbridge where out-of-state heirs need local management",
      "A divorce-related sale where both parties want an objective, island-knowledgeable broker",
    ],
  },
  "port-orchard": {
    tone: "waterfront",
    descriptor: "South Kitsap community with waterfront and established neighborhoods",
    heroIntro: "Port Orchard's combination of Sinclair Inlet waterfront, established residential neighborhoods, and proximity to Naval Base Kitsap creates a real estate market with specific local dynamics. Families and executors managing property transitions in Port Orchard benefit from guidance that accounts for the community's diverse housing stock and the factors that drive value in South Kitsap.",
    localKnowledge: "Port Orchard includes waterfront properties along Sinclair Inlet, established neighborhoods in the city center, and newer developments in surrounding South Kitsap. The area's military influence, ferry access to Bremerton and beyond, and range of property types create a market where local knowledge is essential for accurate pricing. David Stein helps clients understand how these Port Orchard-specific factors affect their property's realistic market position.",
  },
  kingston: {
    tone: "waterfront",
    descriptor: "Ferry-served community on the north Kitsap Peninsula",
    heroIntro: "Kingston is a small community on the northern tip of the Kitsap Peninsula, served by the Kingston-Edmonds ferry and known for its village character and waterfront access. For families managing estate or transition-related property in Kingston, the community's ferry-dependent connectivity, limited inventory, and range of waterfront to inland properties create specific valuation considerations.",
    localKnowledge: "Kingston's housing includes properties near the ferry terminal and village center, waterfront homes along Appletree Cove, and established residential areas extending into the surrounding hills. The community's ferry connection to Edmonds and its small-town character attract a specific buyer demographic. David Stein helps Kingston clients understand how ferry access, waterfront proximity, and the community's limited market size affect realistic property pricing.",
  },
  suquamish: {
    tone: "smalltown",
    descriptor: "Tribal community with waterfront character on Agate Passage",
    heroIntro: "Suquamish is a small community on Agate Passage with deep historical roots, waterfront access, and a quiet residential character. For families managing estate or transition properties in Suquamish, the community's compact size, waterfront dynamics, and specific local considerations require experienced, condition-based guidance.",
    localKnowledge: "Suquamish's housing includes waterfront and water-view properties along Agate Passage and Port Madison, along with established homes in the community's residential areas. The community's historical significance, proximity to Bainbridge Island and Poulsbo, and limited inventory create a niche market. David Stein helps Suquamish clients navigate these local factors with honest, property-specific pricing guidance.",
  },
  manchester: {
    tone: "waterfront",
    descriptor: "Quiet waterfront community on Rich Passage",
    heroIntro: "Manchester is a small, unincorporated waterfront community on Rich Passage in South Kitsap, offering quiet residential living, waterfront access, and proximity to the Manchester State Park. For families managing estate or transition properties in Manchester, the community's limited inventory and waterfront-influenced market create specific pricing dynamics.",
    localKnowledge: "Manchester's housing includes waterfront and water-view properties along Rich Passage, along with established homes in the hillside residential areas. The community's small size, state park proximity, and ferry-accessible location between Bremerton and Southworth influence buyer interest. David Stein helps Manchester clients understand how waterfront access, community character, and limited comparable sales affect realistic property values.",
  },
  seabeck: {
    tone: "rural",
    descriptor: "Rural waterfront community on Hood Canal",
    heroIntro: "Seabeck is a small, rural community on Hood Canal in western Kitsap County, known for its waterfront setting, natural surroundings, and distance from urban centers. Estate and transition properties in Seabeck often feature waterfront access, larger lots, or rustic construction that require specialized valuation understanding for this unique market.",
    localKnowledge: "Seabeck's housing ranges from waterfront cabins and homes along Hood Canal to rural residential properties in the surrounding wooded areas. The community's remote character and limited comparable sales make professional valuation especially important. David Stein's appraisal credentials help Seabeck clients understand how waterfront access, property condition, and the area's niche buyer pool affect realistic market value.",
  },
  hansville: {
    tone: "rural",
    descriptor: "Remote peninsula tip with lighthouse and waterfront appeal",
    heroIntro: "Hansville is a small, secluded community at the northern tip of the Kitsap Peninsula, known for Point No Point Lighthouse and its quiet, waterfront-oriented character. For families managing estate or transition properties in Hansville, the community's remote location, limited inventory, and waterfront-driven market create valuation considerations that require experienced, locally informed guidance.",
    localKnowledge: "Hansville's housing includes waterfront and water-view properties overlooking Puget Sound and Admiralty Inlet, along with established homes and cabins in the wooded areas of the community. The area's remote character and seasonal appeal create a buyer pool with specific expectations. David Stein helps Hansville clients understand how the community's unique location and limited market activity affect realistic property pricing.",
  },
};

// ─── Services ───────────────────────────────────────────────────────────
export const services: ServiceData[] = [
  {
    name: "Probate & Estate Sales",
    slug: "probate-estate-sales",
    shortName: "Probate & Estate Sales",
    description: "Guiding executors, attorneys, and families through the sale of probate and estate-owned property with valuation expertise and practical coordination.",
    cityIntroTemplate: "Selling a probate or estate property in {city} takes local market knowledge, realistic pricing, and experienced coordination. Real Property Planning guides executors, attorneys, and families through the sale of estate-owned real estate in {city} and {county}.",
    targetAudience: [
      "Executors and personal representatives appointed by the court",
      "Probate attorneys who need a reliable real estate partner",
      "Families managing the sale of a deceased loved one's home",
      "Co-heirs who need objective guidance and clear communication",
      "Out-of-state family members who need local coordination",
    ],
    whyValuationMatters: "Estate properties often present in non-standard condition — deferred maintenance, accumulated belongings, outdated finishes. Automated valuations and generic market comparisons frequently miss the mark. David's dual credentials as a licensed broker and certified appraiser allow him to assess actual condition, identify realistic value ranges, and develop pricing strategies that protect estate interests while attracting qualified buyers.",
  },
  {
    name: "Senior Transitions",
    slug: "senior-transitions",
    shortName: "Senior Transitions",
    description: "Supporting seniors and their families through the sale of a longtime home, including preparation, pricing, and coordinating the transition timeline.",
    cityIntroTemplate: "Selling a longtime family home in {city} involves more than listing a property. Real Property Planning helps families plan and coordinate the transition — from preparation and pricing to vendor coordination and sale timing.",
    targetAudience: [
      "Seniors preparing to move to assisted living, independent living, or memory care",
      "Adult children coordinating a parent's housing transition",
      "Families managing a move from a longtime family home",
      "Seniors downsizing to a smaller, more manageable home",
      "Families who need help coordinating the sale timeline with a move-in date",
    ],
    whyValuationMatters: "A longtime family home may need significant preparation before it is ready for market. Understanding the realistic value — accounting for condition, deferred maintenance, and neighborhood trends — helps families make informed decisions about which improvements are worth the investment and which are not.",
  },
  {
    name: "Downsizing Services",
    slug: "downsizing-services",
    shortName: "Downsizing",
    description: "Helping homeowners who are ready to simplify — whether moving to a smaller home, a retirement community, or closer to family.",
    cityIntroTemplate: "Downsizing from a family home in {city} is a major decision. Real Property Planning helps homeowners evaluate their options, prepare the property, and manage the sale with clarity and realistic expectations.",
    targetAudience: [
      "Homeowners ready to move to a smaller, more manageable home",
      "Retirees relocating closer to family or to a warmer climate",
      "Couples whose children have moved out and who no longer need the space",
      "Homeowners who want to simplify their living situation and reduce maintenance",
    ],
    whyValuationMatters: "Homeowners who have lived in a property for many years often have an emotional attachment that can make objective pricing difficult. A valuation-informed approach provides a realistic market perspective, helping sellers understand what their home is actually worth in its current condition and how preparation decisions affect the final outcome.",
  },
  {
    name: "Executor Real Estate Support",
    slug: "executor-support",
    shortName: "Executor Support",
    description: "Providing executors and personal representatives with clear guidance on managing and selling estate real property.",
    cityIntroTemplate: "As an executor or personal representative managing property in {city}, you face real responsibility and often unfamiliar decisions. Real Property Planning provides experienced guidance for executors in {city} — from initial property assessment through sale and closing.",
    targetAudience: [
      "Executors named in a will who are responsible for selling real property",
      "Personal representatives appointed by the court",
      "Co-executors who need a neutral, experienced real estate resource",
      "Out-of-state executors who need local property management and sale coordination",
      "Attorneys advising executors on real estate matters",
    ],
    whyValuationMatters: "Executors have a fiduciary duty to act in the best interest of the estate. Mispricing a property — whether too high or too low — can delay the process, reduce net proceeds, or expose the executor to questions from beneficiaries or the court. David's appraisal background provides the kind of pricing clarity executors need to fulfill their responsibilities with confidence.",
  },
  {
    name: "Attorney & Fiduciary Real Estate Support",
    slug: "attorney-fiduciary-support",
    shortName: "Attorney & Fiduciary Support",
    description: "A reliable real estate resource for attorneys and fiduciaries who need experienced, communicative support on estate and trust property matters.",
    cityIntroTemplate: "Attorneys and fiduciaries managing property in {city} need a real estate partner who understands legal timelines, fiduciary obligations, and clear communication. Real Property Planning works with legal and fiduciary professionals across {city} and {county}.",
    targetAudience: [
      "Probate and estate planning attorneys",
      "Elder law attorneys coordinating property transitions",
      "Family law attorneys handling divorce-related property matters",
      "Trustees managing trust-owned real estate",
      "Guardians and conservators with real property responsibilities",
    ],
    whyValuationMatters: "Legal professionals need a real estate partner who can provide defensible pricing opinions, clear documentation, and reliable communication. David's appraiser credentials and broker experience create a combination that supports legal and fiduciary decision-making with objective, market-grounded information.",
  },
  {
    name: "Valuation Guidance",
    slug: "valuation-guidance",
    shortName: "Valuation Guidance",
    description: "Providing valuation-informed insight for inherited, estate, and transition-related property decisions where pricing accuracy is critical.",
    cityIntroTemplate: "Accurate property valuation in {city} matters for estate settlements, trust administration, and transition planning. David Stein combines licensed broker and certified appraiser credentials to provide clear, condition-based guidance for properties in {city} and {county}.",
    targetAudience: [
      "Executors and trustees who need an accurate understanding of property value",
      "Attorneys who need reliable real estate valuation support for legal proceedings",
      "Families settling estates where multiple parties need to agree on value",
      "Homeowners who want an honest, condition-based assessment before listing",
      "Financial advisors helping clients make property-related decisions",
    ],
    whyValuationMatters: "Many property decisions — from estate distribution to sale pricing — depend on an accurate understanding of value. Online estimates and automated tools often fail to account for condition, deferred maintenance, or unique property characteristics. David's state-certified appraisal background provides a level of valuation insight that goes well beyond what a typical broker can offer.",
  },
  {
    name: "Preparing a Home for Sale",
    slug: "preparing-home-for-sale",
    shortName: "Home Preparation",
    description: "Coordinating property preparation — from cleanout and repairs to staging and presentation — so the home is positioned for the best possible outcome.",
    cityIntroTemplate: "Preparing a home for sale in {city} often involves more than cosmetic updates — especially for estate, inherited, or longtime family properties. Real Property Planning coordinates cleanout, repairs, and presentation strategy for properties in {city} so sellers can focus on the bigger picture.",
    targetAudience: [
      "Executors managing a property that needs cleanout and preparation",
      "Families preparing a longtime home for sale after a senior transition",
      "Homeowners who need guidance on which repairs and updates are worth the investment",
      "Out-of-area property owners who need someone to coordinate preparation locally",
    ],
    whyValuationMatters: "Not every repair or update delivers a return. David's appraisal background helps clients understand which improvements are likely to affect value and which are not — avoiding unnecessary spending while focusing preparation efforts where they matter most.",
  },
  {
    name: "Divorce-Related Home Sales",
    slug: "divorce-related-home-sales",
    shortName: "Divorce Sales",
    description: "Assisting with the sale of marital property during divorce proceedings with discretion, objectivity, and clear communication.",
    cityIntroTemplate: "Selling a home during a divorce in {city} requires discretion, objectivity, and an understanding of how legal timelines affect the sale process. Real Property Planning provides experienced guidance for divorce-related property sales in {city} and throughout {county}.",
    targetAudience: [
      "Divorcing couples who need to sell a shared home",
      "Family law attorneys seeking a neutral, experienced real estate partner",
      "Mediators coordinating property-related settlement terms",
      "Individuals who need an objective property valuation during proceedings",
    ],
    whyValuationMatters: "Divorce-related sales often involve disagreements about value. David's appraiser credentials provide an objective, defensible basis for pricing discussions — helping both parties and their attorneys move forward with confidence rather than speculation.",
  },
  {
    name: "Trust & Estate Property Sales",
    slug: "trust-estate-property-sales",
    shortName: "Trust Property Sales",
    description: "Assisting trustees and fiduciaries with the valuation, preparation, and sale of trust-owned residential real estate.",
    cityIntroTemplate: "Managing a trust-owned property sale in {city} involves specific fiduciary responsibilities and practical coordination. Real Property Planning assists trustees and fiduciaries with trust property sales in {city}, providing clear communication and valuation-informed strategy.",
    targetAudience: [
      "Trustees managing trust-owned residential real estate",
      "Successor trustees who have recently assumed responsibility",
      "Estate planning attorneys advising clients on trust property matters",
      "Beneficiaries of a trust that holds real property",
      "Corporate trustees and trust departments",
    ],
    whyValuationMatters: "Trust property sales carry fiduciary obligations. Trustees need defensible pricing, clear documentation, and a transparent process. David's combined broker and appraiser credentials provide the kind of objective, well-supported guidance that meets fiduciary standards.",
  },
];

// ─── Helper to build city entries ────────────────────────────────────────
function city(name: string, county: string, countySlug: string, slugOverride?: string): CityData {
  const slug = slugOverride || name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const content = cityContent[slug];
  return { name, slug, county, countySlug, ...content };
}

// ─── Counties & Cities ──────────────────────────────────────────────────
export const counties: CountyData[] = [
  {
    name: "King County",
    slug: "king-county",
    cities: [
      city("Seattle", "King County", "king-county"),
      city("Bellevue", "King County", "king-county"),
      city("Kirkland", "King County", "king-county"),
      city("Redmond", "King County", "king-county"),
      city("Bothell", "King County", "king-county"),
      city("Issaquah", "King County", "king-county"),
      city("Sammamish", "King County", "king-county"),
      city("Mercer Island", "King County", "king-county"),
      city("Newcastle", "King County", "king-county"),
      city("Renton", "King County", "king-county"),
      city("Kent", "King County", "king-county"),
      city("Auburn", "King County", "king-county"),
      city("Federal Way", "King County", "king-county"),
      city("Shoreline", "King County", "king-county"),
      city("Burien", "King County", "king-county"),
      city("Des Moines", "King County", "king-county"),
      city("SeaTac", "King County", "king-county", "seatac"),
      city("Tukwila", "King County", "king-county"),
      city("Woodinville", "King County", "king-county"),
      city("Kenmore", "King County", "king-county"),
      city("Maple Valley", "King County", "king-county"),
      city("Covington", "King County", "king-county"),
      city("Black Diamond", "King County", "king-county"),
      city("Enumclaw", "King County", "king-county"),
      city("North Bend", "King County", "king-county"),
      city("Snoqualmie", "King County", "king-county"),
      city("Duvall", "King County", "king-county"),
    ],
  },
  {
    name: "Snohomish County",
    slug: "snohomish-county",
    cities: [
      city("Lynnwood", "Snohomish County", "snohomish-county"),
      city("Edmonds", "Snohomish County", "snohomish-county"),
      city("Mountlake Terrace", "Snohomish County", "snohomish-county"),
      city("Brier", "Snohomish County", "snohomish-county"),
      city("Mukilteo", "Snohomish County", "snohomish-county"),
      city("Everett", "Snohomish County", "snohomish-county"),
      city("Mill Creek", "Snohomish County", "snohomish-county"),
      city("Bothell", "Snohomish County", "snohomish-county", "bothell-snohomish"),
      city("Woodinville", "Snohomish County", "snohomish-county", "woodinville-snohomish"),
      city("Snohomish", "Snohomish County", "snohomish-county"),
      city("Lake Stevens", "Snohomish County", "snohomish-county"),
      city("Marysville", "Snohomish County", "snohomish-county"),
      city("Arlington", "Snohomish County", "snohomish-county"),
      city("Monroe", "Snohomish County", "snohomish-county"),
      city("Stanwood", "Snohomish County", "snohomish-county"),
      city("Sultan", "Snohomish County", "snohomish-county"),
      city("Gold Bar", "Snohomish County", "snohomish-county"),
      city("Granite Falls", "Snohomish County", "snohomish-county"),
    ],
  },
  {
    name: "Pierce County",
    slug: "pierce-county",
    cities: [
      city("Tacoma", "Pierce County", "pierce-county"),
      city("University Place", "Pierce County", "pierce-county"),
      city("Lakewood", "Pierce County", "pierce-county"),
      city("Puyallup", "Pierce County", "pierce-county"),
      city("Gig Harbor", "Pierce County", "pierce-county"),
      city("Fircrest", "Pierce County", "pierce-county"),
      city("Steilacoom", "Pierce County", "pierce-county"),
      city("Bonney Lake", "Pierce County", "pierce-county"),
      city("Sumner", "Pierce County", "pierce-county"),
      city("Orting", "Pierce County", "pierce-county"),
      city("Spanaway", "Pierce County", "pierce-county"),
      city("Graham", "Pierce County", "pierce-county"),
      city("DuPont", "Pierce County", "pierce-county", "dupont"),
      city("Fife", "Pierce County", "pierce-county"),
      city("Milton", "Pierce County", "pierce-county"),
      city("Edgewood", "Pierce County", "pierce-county"),
      city("Buckley", "Pierce County", "pierce-county"),
      city("Eatonville", "Pierce County", "pierce-county"),
    ],
  },
  {
    name: "Kitsap County",
    slug: "kitsap-county",
    cities: [
      city("Bremerton", "Kitsap County", "kitsap-county"),
      city("Silverdale", "Kitsap County", "kitsap-county"),
      city("Poulsbo", "Kitsap County", "kitsap-county"),
      city("Port Orchard", "Kitsap County", "kitsap-county"),
      city("Bainbridge Island", "Kitsap County", "kitsap-county"),
      city("Kingston", "Kitsap County", "kitsap-county"),
      city("Suquamish", "Kitsap County", "kitsap-county"),
      city("Manchester", "Kitsap County", "kitsap-county"),
      city("Seabeck", "Kitsap County", "kitsap-county"),
      city("Hansville", "Kitsap County", "kitsap-county"),
    ],
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────

/** Get all cities flat */
export function getAllCities(): CityData[] {
  return counties.flatMap((c) => c.cities);
}

/** Find city data by slug */
export function getCityBySlug(slug: string): CityData | undefined {
  return getAllCities().find((c) => c.slug === slug);
}

/** Find county data by slug */
export function getCountyBySlug(slug: string): CountyData | undefined {
  return counties.find((c) => c.slug === slug);
}

/** Find service by slug */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

/** Generate intro text for city+service page */
export function getCityServiceIntro(service: ServiceData, cityData: CityData): string {
  return service.cityIntroTemplate
    .replace(/\{city\}/g, cityData.name)
    .replace(/\{county\}/g, cityData.county);
}

/** Common situations — uses city-specific if available, otherwise generic */
export function getCommonSituations(cityName: string, cityData?: CityData): string[] {
  if (cityData?.localSituations) return cityData.localSituations;
  return [
    `An inherited home in ${cityName} that needs assessment, preparation, and sale`,
    `A probate property requiring court-compliant sale coordination`,
    `A senior family member transitioning from a longtime ${cityName} home`,
    `A trust-owned property that needs to be sold as part of estate administration`,
    `An executor managing property from out of state who needs local coordination`,
    `A divorce-related home sale requiring objectivity and clear communication`,
    `A family home that needs significant preparation before listing`,
  ];
}

/** Why local matters — uses city-specific if available */
export function getWhyLocalMatters(cityName: string, countyName: string, cityData?: CityData): string {
  if (cityData?.localKnowledge) return cityData.localKnowledge;
  return `Every neighborhood in ${cityName} has its own pricing dynamics, buyer expectations, and property characteristics. A valuation-informed approach — one that accounts for condition, location, and realistic market positioning — helps clients avoid costly mispricing and unnecessary delays. David Stein's dual credentials as a licensed Washington real estate broker and state-certified residential appraiser provide a level of market insight that benefits clients throughout ${countyName}.`;
}

/** Why broker/appraiser — uses city-specific if available */
export function getWhyBrokerAppraiser(cityName: string, cityData?: CityData): string {
  if (cityData?.brokerAppraiserValue) return cityData.brokerAppraiserValue;
  return `Most real estate brokers can list a property. What sets Real Property Planning apart is the combination of licensed brokerage experience and state-certified appraisal expertise. For clients in ${cityName} managing estate, probate, trust, or transition-related property decisions, this dual perspective means more accurate pricing, better preparation decisions, and a clearer understanding of what drives value in the local market. David Stein does not rely on automated estimates — he assesses each property based on its actual condition, location, and realistic buyer demand.`;
}

/** Service-specific how-we-help items for city+service pages */
export function getCityServiceHowWeHelp(cityName: string, serviceSlug?: string): string[] {
  const base = [
    `Honest assessment of the property's condition, market position, and realistic value range in ${cityName}`,
    "Clear communication with all parties — attorneys, co-executors, family members, and financial advisors",
    "Full-service sale management from listing through closing",
    "Regular updates and transparent guidance throughout the process",
  ];

  switch (serviceSlug) {
    case "probate-estate-sales":
      return [
        `Property-specific valuation analysis that accounts for condition and ${cityName} neighborhood context`,
        "Coordination with the probate attorney and court timeline requirements",
        "Management of property cleanout, preparation, and vendor coordination",
        "Clear documentation and communication with all parties involved in the estate",
        "Guidance on court confirmation procedures when required",
        "Full-service sale coordination from initial assessment through closing",
      ];
    case "senior-transitions":
      return [
        `Careful assessment of the family home's condition and realistic market value in ${cityName}`,
        "Coordination of the sale timeline with the move date and new living arrangements",
        "Vendor coordination for cleanout, repairs, and preparation as needed",
        "Patient, compassionate communication with seniors and their adult children",
        "Guidance on which home improvements are worth the investment before listing",
        "Support coordinating with senior move managers and transition resources",
      ];
    case "downsizing-services":
      return [
        `Realistic valuation of your current ${cityName} home based on actual condition and market position`,
        "Guidance on which updates and preparations will provide the best return",
        "Coordination of cleanout, sorting, and donation logistics",
        "Timeline planning that aligns the sale with your move to a new living situation",
        "Honest counsel on market timing and pricing strategy",
        "Referrals to trusted moving companies and transition resources",
      ];
    case "executor-support":
      return [
        `Property assessment and realistic valuation for the estate property in ${cityName}`,
        "Clear guidance on the executor's real estate responsibilities and timeline",
        "Coordination of property access, cleanout, and preparation",
        "Regular updates and documentation suitable for estate records and beneficiary communication",
        "Management of the sale process from listing through closing and distribution",
        "Coordination with the estate attorney, accountant, and other professionals",
      ];
    case "attorney-fiduciary-support":
      return [
        `Reliable property assessments and market analysis for ${cityName} properties`,
        "Clear, professional communication tailored to legal and fiduciary timelines",
        "Defensible pricing opinions supported by appraisal-level property analysis",
        "Coordination with legal proceedings, court requirements, and settlement timelines",
        "Documentation and reporting that meets fiduciary standards",
        "A consistent, communicative point of contact for all property-related matters",
      ];
    case "valuation-guidance":
      return [
        `Condition-based property analysis specific to the ${cityName} market`,
        "Valuation insight informed by state-certified appraisal credentials",
        "Comparison to relevant recent sales in the property's specific neighborhood",
        "Assessment of how deferred maintenance, updates, and lot characteristics affect value",
        "Clear, defensible pricing guidance for estate, legal, and family decision-making",
        "Written valuation summaries available for professional use",
      ];
    case "preparing-home-for-sale":
      return [
        `Assessment of which repairs and improvements will affect value in ${cityName}'s market`,
        "Coordination of cleanout, hauling, and donation services with trusted local vendors",
        "Guidance on staging, presentation, and photography strategy",
        "Management of contractor work including repairs, painting, and landscaping",
        "Budget-conscious recommendations that focus on return rather than perfection",
        "Timeline coordination so preparation aligns with listing and market timing goals",
      ];
    case "divorce-related-home-sales":
      return [
        `Objective, condition-based valuation of the marital property in ${cityName}`,
        "Neutral, professional communication with both parties and their attorneys",
        "Coordination with legal timelines and settlement requirements",
        "Discretion and sensitivity throughout the sale process",
        "Clear documentation of pricing rationale and sale terms",
        "Full-service sale management that minimizes stress for both parties",
      ];
    case "trust-estate-property-sales":
      return [
        `Fiduciary-appropriate property assessment and market analysis for ${cityName}`,
        "Clear communication with trustees, beneficiaries, and estate attorneys",
        "Documentation and pricing transparency that meets trust administration standards",
        "Coordination of property preparation, vendor management, and sale logistics",
        "Guidance on trust-specific sale requirements and timelines",
        "Regular reporting and updates throughout the sale process",
      ];
    default:
      return base;
  }
}

/** Service-specific scenarios for city+service pages */
export function getCityServiceScenarios(cityName: string, serviceName: string, serviceSlug?: string): string[] {
  switch (serviceSlug) {
    case "probate-estate-sales":
      return [
        `A family home in ${cityName} where the owner has passed away and the property must be sold as part of probate`,
        `Multiple heirs who disagree on the property's value or the right time to sell`,
        `An estate property in ${cityName} with deferred maintenance, accumulated belongings, or outdated condition`,
        `An out-of-state executor who needs a local broker to manage the entire sale process`,
        `A probate attorney in ${cityName} who needs a reliable, communicative real estate partner`,
      ];
    case "senior-transitions":
      return [
        `A senior parent in ${cityName} who is moving to assisted living or memory care and needs to sell the family home`,
        `Adult children coordinating a parent's transition from a longtime ${cityName} home`,
        `A family home with decades of belongings that needs careful sorting, cleanout, and preparation`,
        `A senior who needs the sale proceeds to fund their next living arrangement`,
        `A family that wants patient, experienced guidance through an emotional property transition`,
      ];
    case "downsizing-services":
      return [
        `A homeowner in ${cityName} whose children have moved out and who no longer needs a large family home`,
        `A retired couple ready to simplify and move closer to family or to a retirement community`,
        `A ${cityName} homeowner who needs guidance on preparing a well-loved home for sale`,
        `A property owner who has lived in the same home for decades and wants honest pricing guidance`,
        `A family coordinating a parent's move to a smaller, more manageable home in or near ${cityName}`,
      ];
    case "executor-support":
      return [
        `A newly appointed executor in ${cityName} who is unfamiliar with the real estate sale process`,
        `An out-of-state executor responsible for a property in ${cityName} who needs local coordination`,
        `Co-executors who need a neutral real estate professional to manage the sale objectively`,
        `An executor who needs clear documentation and communication for beneficiaries and the court`,
        `A property in ${cityName} that requires assessment, cleanout, and preparation before listing`,
      ];
    case "attorney-fiduciary-support":
      return [
        `A probate attorney in ${cityName} who needs a responsive real estate partner for estate property matters`,
        `A trustee managing trust-owned property in ${cityName} who needs defensible valuation guidance`,
        `An elder law attorney coordinating a client's property transition alongside care planning`,
        `A guardian or conservator with real property responsibilities who needs experienced sale coordination`,
        `A family law attorney who needs an objective broker for a divorce-related property matter in ${cityName}`,
      ];
    case "valuation-guidance":
      return [
        `An estate in ${cityName} where beneficiaries need to agree on the property's fair market value`,
        `A trust requiring an accurate property assessment for distribution or sale planning`,
        `A homeowner in ${cityName} who wants an honest, condition-based value opinion before listing`,
        `An attorney who needs a reliable valuation perspective for legal proceedings involving ${cityName} property`,
        `A family that needs to understand how deferred maintenance and condition affect their ${cityName} property's value`,
      ];
    case "preparing-home-for-sale":
      return [
        `An estate property in ${cityName} that needs cleanout, repairs, and preparation before listing`,
        `A longtime family home with decades of accumulated belongings that must be sorted and removed`,
        `A ${cityName} property where the owner is unsure which repairs and updates are worth the investment`,
        `An inherited home that needs coordination with contractors, cleanout services, and staging professionals`,
        `A property where the seller lives out of area and needs someone local to manage preparation in ${cityName}`,
      ];
    case "divorce-related-home-sales":
      return [
        `A divorcing couple in ${cityName} who need to sell their shared home as part of the settlement`,
        `A family law attorney who needs a neutral, experienced broker for a ${cityName} property matter`,
        `A marital property in ${cityName} where both parties disagree on value and need objective guidance`,
        `A divorce timeline that requires careful coordination between legal proceedings and the sale process`,
        `A situation where discretion, professionalism, and clear communication are essential throughout the sale`,
      ];
    case "trust-estate-property-sales":
      return [
        `A successor trustee in ${cityName} who has recently assumed responsibility for trust-held real estate`,
        `A trust-owned property in ${cityName} that needs preparation, pricing, and sale coordination`,
        `Beneficiaries who need transparent communication and defensible pricing for a trust property sale`,
        `An estate planning attorney advising a client on the sale of trust-owned property in ${cityName}`,
        `A corporate trustee or trust department that needs a reliable local real estate resource in ${cityName}`,
      ];
    default:
      return [
        `A property in ${cityName} that requires experienced guidance and realistic market positioning`,
        `Multiple decision-makers who need clear, objective information about the property and the process`,
        `Deferred maintenance, accumulated belongings, or condition issues that affect value and marketability`,
        `Legal, fiduciary, or family timelines that require thoughtful coordination`,
        `Out-of-area family members who need someone local to manage the ${serviceName.toLowerCase()} process on their behalf`,
      ];
  }
}

// ─── Tone-aware template language ──────────────────────────────────────

/** Tone-aware section heading for scenarios */
export function getToneScenariosHeading(cityName: string, serviceName: string, tone?: CommunityTone): string {
  switch (tone) {
    case "premium":
    case "waterfront":
      return `When ${cityName} Clients Need ${serviceName}`;
    case "urban":
      return `Common ${serviceName} Situations in ${cityName}`;
    case "smalltown":
    case "rural":
      return `${serviceName} in ${cityName}`;
    case "military":
      return `${serviceName} Situations in ${cityName}`;
    default:
      return `When Clients in ${cityName} Need ${serviceName}`;
  }
}

/** Tone-aware lead-in paragraph for scenarios section */
export function getToneScenariosLead(cityName: string, serviceName: string, tone?: CommunityTone): string {
  switch (tone) {
    case "premium":
      return `${serviceName} situations in ${cityName} often involve higher property values and multiple decision-makers. Clients typically reach out when facing:`;
    case "urban":
      return `${cityName}'s range of neighborhoods and property types means ${serviceName.toLowerCase()} situations vary widely. Common scenarios include:`;
    case "waterfront":
      return `Property transitions in ${cityName} often involve longtime family homes and specific local market factors. Clients seek ${serviceName.toLowerCase()} guidance when facing:`;
    case "smalltown":
      return `In ${cityName}, property decisions tend to be personal and practical. Clients reach out for ${serviceName.toLowerCase()} support when facing:`;
    case "military":
      return `Families in ${cityName} often need ${serviceName.toLowerCase()} guidance when circumstances change. Common situations include:`;
    case "rural":
      return `Properties in ${cityName} often have features — acreage, outbuildings, or rural character — that add complexity. Clients typically reach out when facing:`;
    default:
      return `Clients in ${cityName} seek ${serviceName.toLowerCase()} guidance in situations such as:`;
  }
}

/** Tone-aware heading for how-we-help section */
export function getToneHowWeHelpHeading(tone?: CommunityTone): string {
  switch (tone) {
    case "smalltown":
    case "rural":
      return "How David Stein Helps";
    default:
      return "How Real Property Planning Helps";
  }
}

/** Tone-aware lead-in for how-we-help section */
export function getToneHowWeHelpLead(cityName: string, serviceName: string, tone?: CommunityTone): string {
  switch (tone) {
    case "premium":
      return `David Stein's dual credentials as a licensed broker and certified appraiser inform every step of the ${serviceName.toLowerCase()} process in ${cityName}:`;
    case "urban":
      return `David Stein provides experienced guidance tailored to ${cityName}'s market:`;
    case "waterfront":
      return `David Stein brings locally informed guidance to ${serviceName.toLowerCase()} in ${cityName}:`;
    case "smalltown":
    case "rural":
      return `David Stein provides steady, hands-on guidance through the ${serviceName.toLowerCase()} process:`;
    case "military":
      return `David Stein provides clear, practical guidance for ${serviceName.toLowerCase()} in ${cityName}:`;
    default:
      return `David Stein provides valuation-informed guidance for every ${serviceName.toLowerCase()} engagement:`;
  }
}

/** Tone-aware CTA heading */
export function getToneCTAHeading(cityName: string, serviceName: string, tone?: CommunityTone): string {
  switch (tone) {
    case "premium":
      return `Discuss Your ${cityName} Property`;
    case "smalltown":
    case "rural":
      return `Ready to Take the Next Step?`;
    case "waterfront":
      return `Talk with David About Your Property`;
    default:
      return `Need ${serviceName} Help in ${cityName}?`;
  }
}

/** Tone-aware CTA body */
export function getToneCTABody(cityName: string, tone?: CommunityTone): string {
  switch (tone) {
    case "premium":
      return `Schedule a confidential consultation to discuss your ${cityName} property and your options.`;
    case "waterfront":
      return `Reach out to discuss your property and what the process looks like from here.`;
    case "smalltown":
    case "rural":
      return `Contact David to discuss your situation — no pressure, no obligation.`;
    default:
      return `Schedule a consultation to discuss your ${cityName} property situation.`;
  }
}
