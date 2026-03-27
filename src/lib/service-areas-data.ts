// Central data layer for all counties, cities, and services
// This powers templates, routing, navigation, and internal linking
import { getCityServiceOverride } from "@/lib/city-service-overrides";

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
    localClientTypes: [
      "Executors and personal representatives managing high-value Bellevue estate property on the Eastside",
      "Families coordinating senior transitions from established Bellevue neighborhoods to care communities or smaller residences",
      "Attorneys handling probate or divorce cases involving Bellevue property where significant value makes pricing accuracy critical",
      "Trustees managing trust-owned homes across Bellevue's wide spectrum — from Crossroads to West Bellevue to Somerset",
      "Out-of-state heirs who need local coordination for an inherited Eastside property",
      "Financial advisors needing defensible Bellevue property valuations for estate planning or settlement",
    ],
  },
  kirkland: {
    tone: "suburban",
    descriptor: "Waterfront charm and growing neighborhoods",
    heroIntro: "Kirkland combines waterfront living, walkable neighborhoods, and a strong sense of community — qualities that make it one of the most desirable cities on the Eastside. When a property transition involves probate, an estate sale, a senior move, or an inherited home in Kirkland, the process benefits from someone who understands how Kirkland's distinct neighborhoods and buyer expectations affect pricing and preparation strategy.",
    localKnowledge: "Kirkland's neighborhoods range from the boutique waterfront of Moss Bay and Houghton to the larger-lot homes of Juanita, Finn Hill, and Totem Lake. Each area attracts different buyers with different expectations. Selling an estate or inherited property in Kirkland requires understanding which improvements matter, how waterfront proximity affects value, and how to position a home that may not be in move-in condition against newer or recently updated listings.",
    brokerAppraiserValue: "Kirkland's appeal lies in its location, walkability, and neighborhood character — but those qualities can be difficult to quantify with automated tools. David Stein evaluates each property based on its actual condition, lot characteristics, and realistic buyer demand in Kirkland. His appraisal background provides an analytical foundation that supports confident pricing decisions, especially for properties that need preparation or have deferred maintenance.",
    localSituations: [
      "An inherited waterfront-area home in Moss Bay or Houghton where the premium location requires nuanced, condition-based pricing",
      "A longtime family home in Juanita or Finn Hill where the established neighborhood character appeals to specific buyer demographics",
      "A senior parent transitioning from a Kirkland home to assisted or independent living while the family coordinates the sale",
      "A trust-owned property near Totem Lake where recent development activity changes comparable selection and buyer expectations",
      "An executor managing a Kirkland estate property while living out of state, unfamiliar with the Eastside waterfront community's pricing dynamics",
      "A divorce-related sale in Kirkland where walkability, waterfront proximity, and neighborhood character complicate objective valuation",
    ],
    localClientTypes: [
      "Executors managing estate property across Kirkland's diverse neighborhoods — Moss Bay, Houghton, Juanita, Finn Hill, Totem Lake",
      "Families coordinating senior transitions from waterfront-area and established Kirkland homes",
      "Attorneys handling probate or divorce cases involving Kirkland property where waterfront proximity complicates valuation",
      "Trustees responsible for trust-owned homes in Kirkland's varied neighborhoods with different buyer expectations",
      "Adult children managing a parent's Kirkland home sale from out of state",
      "Financial advisors needing Kirkland property valuations that account for the city's walkability and waterfront premiums",
    ],
  },
  redmond: {
    tone: "suburban",
    descriptor: "Technology corridor with diverse housing stock",
    heroIntro: "Redmond has grown from a quiet suburb into one of the most sought-after cities in King County, driven by its proximity to major employers and strong school districts. Families and fiduciaries managing estate, probate, or transition-related property in Redmond need guidance that reflects the city's evolving market dynamics and the wide range of housing — from original ramblers to newer planned communities like Trilogy and Redmond Ridge.",
    localKnowledge: "Redmond's housing stock includes everything from older homes in downtown Redmond and Education Hill to newer construction in Redmond Ridge, Trilogy, and the Overlake area. These submarkets behave differently, and an estate or inherited property may need very different preparation and pricing strategies depending on location. David Stein's familiarity with Redmond's micro-markets helps clients avoid the common mistake of applying a one-size-fits-all approach.",
    brokerAppraiserValue: "Redmond's tech-driven market creates wide value spreads between neighborhoods — an Education Hill rambler, an Overlake townhome near transit, and a Trilogy active-adult property each serve fundamentally different buyer pools. David Stein's certified appraisal credentials allow him to evaluate which comparables truly apply based on a property's specific location, age, and condition, providing the defensible analysis that Redmond estate and transition situations require.",
    localSituations: [
      "A longtime family home on Education Hill where the neighborhood's proximity to tech campuses has driven significant appreciation but the home needs updates",
      "An inherited property in the Overlake area where light rail expansion and development activity create both residential and redevelopment-potential value questions",
      "A Trilogy or Redmond Ridge home where HOA considerations and active-adult community dynamics affect buyer pool and pricing strategy",
      "An executor managing a Redmond property while living out of state, unfamiliar with the Eastside's tech-influenced market dynamics",
      "A senior couple in downtown Redmond transitioning from a home they've owned since before the city's tech-driven transformation",
      "A divorce-related sale involving a Redmond home where rapid appreciation creates disagreement about current value",
    ],
    localClientTypes: [
      "Executors managing estate property in Redmond's tech-influenced, multi-submarket landscape",
      "Families coordinating senior transitions from longtime Redmond homes in neighborhoods that have transformed around them",
      "Attorneys handling probate or divorce cases involving Redmond residential property where tech-driven appreciation complicates valuation",
      "Trustees responsible for trust-owned homes across Redmond's distinct submarkets — Education Hill, Overlake, Trilogy, Redmond Ridge",
      "Adult children managing a parent's Redmond home sale from out of state during a period of significant market evolution",
      "Financial advisors needing current Redmond property valuations for estate planning in a rapidly appreciating market",
    ],
  },
  bothell: {
    tone: "suburban",
    descriptor: "Cross-county community bridging King and Snohomish",
    heroIntro: "Bothell straddles the King and Snohomish County line, offering a mix of established neighborhoods, newer developments near Canyon Park, and properties along the Sammamish River corridor. For families navigating estate sales, probate, or senior transitions in Bothell, understanding how the city's dual-county location and neighborhood variety affect value is essential for making sound decisions.",
    localKnowledge: "Bothell's real estate spans mid-century homes in the original downtown core, newer construction near Canyon Park and the University of Washington Bothell campus, and properties along the river corridor. The city's position across two counties means comparable sales may come from either side of the boundary, and buyer demographics can shift meaningfully between neighborhoods. David Stein's experience with Bothell's specific market dynamics helps clients price and position properties accurately.",
    brokerAppraiserValue: "Bothell's dual-county position creates a valuation challenge that most brokers don't encounter — comparable sales from King County and Snohomish County may support different pricing conclusions for the same property. David Stein's certified appraisal credentials allow him to evaluate which comparables truly apply based on the property's specific location, buyer pool, and neighborhood context. This cross-county analytical foundation is especially valuable for estate and transition properties where defensible pricing is essential.",
    localSituations: [
      "An inherited property near the King-Snohomish County line where comparable sales from either county support different pricing conclusions",
      "A senior parent in original downtown Bothell transitioning to assisted living while the family coordinates the sale from out of state",
      "An estate home near Canyon Park where rapid commercial development is changing the neighborhood's buyer profile and competitive landscape",
      "A trust-owned property along the Sammamish River corridor where trail access and natural setting add value that automated tools miss",
      "A divorce-related sale in Bothell where the dual-county market creates disagreement about which comparable sales are most relevant",
      "An executor managing a Bothell property near UW Bothell where the university's growth raises questions about residential versus development potential",
    ],
    localClientTypes: [
      "Executors and personal representatives managing estate property in Bothell's dual-county market",
      "Attorneys and fiduciaries who need cross-county valuation expertise for Bothell property matters",
      "Seniors and families preparing to transition from a longtime Bothell home to a care community or smaller residence",
      "Trustees managing trust-owned property in Bothell where defensible pricing requires understanding both county markets",
      "Out-of-state heirs who need local coordination for an inherited property in a city that straddles two counties",
      "CPAs and financial planners advising clients on property decisions involving Bothell's evolving neighborhoods",
    ],
  },
  issaquah: {
    tone: "suburban",
    descriptor: "Foothills communities and family neighborhoods",
    heroIntro: "Nestled against the Cascade foothills, Issaquah offers a blend of established neighborhoods, newer planned communities, and rural-adjacent properties. For families navigating a probate sale, senior transition, or inherited property situation in Issaquah, the process requires someone who understands the area's unique mix of housing types, lot sizes, and buyer expectations — from the Highlands and Talus to Olde Town Issaquah and surrounding areas.",
    localKnowledge: "Issaquah's real estate landscape includes master-planned communities like Issaquah Highlands and Talus, established neighborhoods near Olde Town, and properties in more rural settings toward the foothills. Each segment has its own pricing dynamics and buyer pool. Estate and inherited properties in Issaquah often require thoughtful preparation to compete effectively, especially when they differ from the newer construction that dominates parts of the market.",
    brokerAppraiserValue: "Issaquah's market is segmented by elevation, community type, and proximity to the foothills — Highlands properties, Talus townhomes, Olde Town homes, and rural-adjacent lots each serve different buyer pools with different expectations. David Stein's certified appraisal credentials provide the segment-specific analysis that Issaquah estate and transition clients need, especially when deferred-maintenance properties compete against the newer construction that dominates the Highlands and Talus.",
    localSituations: [
      "An estate property in Olde Town Issaquah where the older housing stock and walkable location create different buyer appeal than the Highlands developments",
      "An inherited home in Issaquah Highlands where HOA standards and newer-construction competition set expectations the estate property may not meet",
      "A senior couple in Talus transitioning to a smaller home or care community while managing the sale of a townhome with specific community rules",
      "A probate property near the foothills where the rural-adjacent lot characteristics complicate standard suburban comparable selection",
      "An executor managing an Issaquah property from out of state, unfamiliar with how the Highlands versus Olde Town distinction affects pricing",
      "A trust-owned home in Issaquah where the trustee needs defensible valuation accounting for the property's specific community and price tier",
    ],
    localClientTypes: [
      "Executors managing estate property across Issaquah's segmented market — Highlands, Talus, Olde Town, foothills-adjacent",
      "Families coordinating senior transitions from longtime Issaquah homes in communities with distinct buyer expectations",
      "Attorneys handling probate or divorce cases involving Issaquah property where community-specific dynamics affect valuation",
      "Trustees responsible for trust-owned homes in Issaquah's varied communities with different HOA structures and pricing patterns",
      "Adult children managing a parent's Issaquah home sale from out of the area",
      "Financial advisors needing Issaquah property valuations that account for the wide spread between community segments",
    ],
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
      "A divorce-related sale on Mercer Island where the island's premium positioning and limited inventory complicate pricing",
    ],
    localClientTypes: [
      "Executors managing high-value estate property on Mercer Island's exclusive residential market",
      "Families coordinating senior transitions from longtime island homes to mainland care communities",
      "Attorneys handling probate or divorce cases involving Mercer Island property where premium valuations carry significant legal consequences",
      "Trustees responsible for trust-owned homes on Mercer Island where waterfront access and island premiums require specialized assessment",
      "Out-of-state heirs who need local coordination for an inherited Mercer Island property",
      "Financial advisors needing Mercer Island property valuations for estate planning in one of the region's most exclusive markets",
    ],
  },
  newcastle: {
    tone: "premium",
    descriptor: "Hillside community with Lake Washington views",
    heroIntro: "Newcastle offers hillside living with striking views of Lake Washington, the Seattle skyline, and the Cascades. For families managing property transitions in Newcastle — whether probate, estate, or senior-related — the community's view-oriented market and newer construction mean accurate pricing requires hands-on evaluation.",
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
    localClientTypes: [
      "Executors managing estate property across Seattle's 80+ distinct neighborhoods",
      "Families coordinating senior transitions from longtime Seattle homes in neighborhoods with rapidly changing demographics",
      "Attorneys handling probate or divorce cases involving Seattle property where neighborhood context dramatically affects value",
      "Trustees responsible for trust-owned homes and condos across Seattle's diverse urban submarkets",
      "Out-of-state heirs who need comprehensive local coordination for an inherited Seattle property",
      "Financial advisors needing Seattle property valuations that go beyond citywide averages to reflect actual neighborhood conditions",
    ],
  },
  renton: {
    tone: "urban",
    descriptor: "South King County hub with evolving neighborhoods",
    heroIntro: "Renton has experienced significant growth and transformation, with neighborhoods ranging from the waterfront areas along Lake Washington to the established communities of Kennydale, the Highlands, and Benson Hill. For families and executors managing property transitions in Renton, understanding how the city's evolving market affects valuation and sale timing is essential. Real Property Planning provides clear, practical guidance for Renton property situations.",
    localKnowledge: "Renton's market includes everything from lakefront properties and Kennydale mid-century homes to newer developments in the Highlands and established neighborhoods in Benson Hill. The city's proximity to major employers and ongoing development make it a dynamic market where pricing accuracy is especially important. David Stein's appraiser credentials help clients understand how Renton's different submarkets and the city's growth trajectory affect their specific property.",
    brokerAppraiserValue: "Renton's rapid transformation means neighborhood-level pricing shifts faster here than in more stable markets. A Kennydale lakefront home, a Highlands rambler, and a Benson Hill split-level each operate in different micro-markets despite sharing a city name. David Stein's appraisal credentials and familiarity with Renton's evolving landscape provide the condition-specific, neighborhood-aware analysis that estate, probate, and transition clients need in a city where yesterday's comparables may already be outdated.",
    localSituations: [
      "A longtime family home in Kennydale where Lake Washington proximity creates a significant premium that generic tools may understate or overstate",
      "An estate property in the Highlands where the neighborhood's transformation and new construction affect how older homes are valued",
      "A senior parent's Benson Hill home where the established neighborhood character and school proximity drive specific buyer interest",
      "An inherited property near Renton's downtown where redevelopment activity creates both opportunity and complexity for estate sales",
      "A probate property in the Landing area where commercial adjacency and newer development change buyer expectations",
      "A divorce-related sale involving a Renton home where the city's rapid appreciation creates disagreement about current value",
    ],
    localClientTypes: [
      "Executors managing estate property in Renton's diverse and rapidly changing market",
      "Families coordinating senior transitions from established Renton neighborhoods to care communities",
      "Attorneys handling probate or divorce cases involving Renton residential property where market evolution complicates valuation",
      "Trustees responsible for trust-owned homes across Renton's distinct submarkets — lakefront, Highlands, Benson Hill",
      "Adult children managing a parent's Renton home sale from out of state during a period of rapid market change",
      "Financial advisors needing current Renton property valuations for estate planning or settlement in a shifting market",
    ],
  },
  kent: {
    tone: "suburban",
    descriptor: "South King County's largest city with diverse housing",
    heroIntro: "Kent is one of the largest cities in King County, with a housing market that ranges from established neighborhoods on the East Hill to properties in the valley and the West Hill areas. For families and executors managing estate, probate, or transition properties in Kent, the city's diverse housing stock and wide price range require an approach that accounts for neighborhood-specific conditions rather than broad market averages.",
    localKnowledge: "Kent's real estate includes everything from 1960s and '70s ramblers on East Hill to newer construction, townhomes, and condos throughout the city. The valley areas, West Hill, and the Panther Lake neighborhood each attract different buyers. David Stein's appraisal credentials help clients in Kent understand how location within the city, property condition, and lot characteristics affect realistic pricing for estate and transition properties.",
    brokerAppraiserValue: "Kent's wide price range and geographic diversity make accurate pricing especially important — and especially difficult without local expertise. The difference between an East Hill rambler, a valley-floor property near industrial corridors, and a West Hill view home can be substantial, yet automated tools often average them together. David Stein's certified appraisal background provides the neighborhood-specific analysis that Kent's segmented market requires, ensuring estate and transition properties are priced based on their actual location, condition, and competitive context rather than citywide averages.",
    localSituations: [
      "An inherited rambler on East Hill where the neighborhood has changed significantly and the home needs honest assessment against updated competition",
      "A senior parent on West Hill transitioning to assisted living while the family navigates a property with views that command a location premium",
      "A probate sale involving a valley-area property where commercial and industrial adjacency affects buyer perception and realistic pricing",
      "An estate home near Panther Lake where recent development has created new comparable sales that change the competitive landscape",
      "A trust-owned property in Kent where the trustee needs defensible pricing that reflects the specific submarket rather than a broad Kent average",
      "A divorce-related sale where the spouses disagree on value because each references sales from a different Kent neighborhood",
    ],
    localClientTypes: [
      "Executors and personal representatives managing estate property across Kent's diverse East Hill, West Hill, and valley submarkets",
      "Attorneys and fiduciaries who need neighborhood-level pricing analysis for Kent property matters",
      "Seniors and families preparing to sell a longtime Kent home and transition to a care community or smaller residence",
      "Trustees managing trust-owned Kent property where submarket-specific pricing protects fiduciary interests",
      "Out-of-state heirs who need local coordination for an inherited property in South King County's largest city",
      "CPAs and financial planners advising clients on property decisions involving Kent's wide-ranging housing market",
    ],
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
    brokerAppraiserValue: "Federal Way's market includes a broad range of housing from lakefront properties to highway-adjacent condos — and automated tools struggle to capture the neighborhood-level differences that matter. David Stein's appraisal credentials and South King County experience provide the property-specific analysis that Federal Way clients need, especially for estate, probate, and transition situations where accurate pricing affects legal and financial outcomes.",
    localSituations: [
      "A longtime family home near Steel Lake that has appreciated but needs updates to compete with newer listings in the area",
      "An inherited property near the Federal Way town center where zoning changes create questions about highest and best use",
      "A senior parent's home in a Federal Way neighborhood where the housing stock varies significantly from block to block",
      "An estate property with mountain views that may carry a premium — but only if marketed to the right buyer segment",
      "A family navigating probate on a Federal Way home while coordinating with out-of-state heirs who have different expectations",
      "A divorce-related sale in Federal Way where the home's location near transit and commercial areas complicates comparable selection",
    ],
    localClientTypes: [
      "Executors managing estate property in Federal Way's diverse South King County market",
      "Families coordinating senior transitions from established Federal Way neighborhoods to care communities",
      "Attorneys handling probate or divorce cases involving Federal Way residential property",
      "Trustees responsible for trust-owned homes in Federal Way's lake-adjacent and residential areas",
      "Adult children managing a parent's Federal Way home sale from out of state",
      "Financial advisors helping clients understand Federal Way property values for estate or retirement planning",
    ],
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
    brokerAppraiserValue: "Burien's micro-markets are so varied — from Three Tree Point waterfront to Seahurst hillside to downtown-adjacent corridors — that citywide averages are unreliable for estate and transition pricing. David Stein's certified appraisal background provides the neighborhood-specific analysis Burien clients need, especially when property type, views, and walkability create wide value differences within short distances.",
    localSituations: [
      "A waterfront or view property in Three Tree Point where estate sale pricing requires understanding the enclave's unique buyer pool",
      "A Seahurst hillside home where sound views and steep terrain create valuation complexity for estate or trust sales",
      "An older rambler near downtown Burien where the walkable location adds value but the home needs significant preparation",
      "A family managing a parent's transition from a longtime Burien home to a senior living community in the south Seattle area",
      "An inherited property along the 1st Avenue corridor where commercial adjacency complicates residential comparable selection",
      "A divorce-related sale involving a Burien home where the neighborhood's rapid evolution makes recent comparable sales essential",
    ],
    localClientTypes: [
      "Executors managing estate property in Burien's diverse neighborhood landscape",
      "Families coordinating senior transitions from Burien homes to nearby care communities",
      "Attorneys handling probate or family law cases involving Burien residential property",
      "Trustees responsible for trust-owned homes in Three Tree Point, Seahurst, or downtown-adjacent Burien",
      "Homeowners preparing a longtime Burien property for sale after a life transition",
      "Financial advisors needing accurate Burien property valuations for estate planning or divorce proceedings",
    ],
  },
  "des-moines": {
    tone: "waterfront",
    descriptor: "Waterfront community along the Puget Sound",
    heroIntro: "Des Moines offers waterfront living, marina access, and established neighborhoods with sound and mountain views along the Puget Sound coastline. For families handling estate sales or senior transitions in Des Moines, the community's view-oriented market and range of property ages make condition-based pricing especially important.",
    localKnowledge: "Des Moines' housing market includes waterfront properties along the sound, hillside homes with varying degrees of view, and established inland neighborhoods. The marina, Saltwater State Park, and waterfront character all contribute to the community's appeal. David Stein helps clients understand how proximity to the water, view quality, and property condition affect value in Des Moines — factors that automated estimates frequently misjudge.",
  },
  seatac: {
    tone: "suburban",
    descriptor: "Airport-adjacent community with practical appeal",
    heroIntro: "SeaTac's proximity to Seattle-Tacoma International Airport creates a unique real estate environment where noise considerations, commercial zoning, and residential neighborhoods all coexist. When selling estate or transition property in SeaTac, understanding how the airport's influence and the city's specific zoning affect property values is essential for realistic expectations and effective sale strategy.",
    localKnowledge: "SeaTac's housing market is compact and influenced by its airport-adjacent location. Properties vary significantly in value based on their proximity to flight paths, commercial zones, and the quieter residential pockets of the city. David Stein helps clients navigate SeaTac's unique market dynamics with honest, condition-based guidance that accounts for the factors specific to this community.",
  },
  tukwila: {
    tone: "urban",
    descriptor: "Urban crossroads with commercial and residential diversity",
    heroIntro: "Tukwila sits at a crossroads of major highways and commercial districts while maintaining established residential neighborhoods that many families have called home for decades. For executors, heirs, and families managing property transitions in Tukwila, the city's commercial adjacency and diverse housing stock affect both valuation and positioning.",
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
    heroIntro: "Kenmore sits at the northern tip of Lake Washington, offering waterfront access, established neighborhoods, and the natural appeal of the Burke-Gilman Trail and Log Boom Park. When selling estate or transition property in Kenmore, the community's lake-adjacent market and range of housing types require guidance that reflects local pricing dynamics.",
    localKnowledge: "Kenmore's housing includes waterfront and water-view properties along Lake Washington, established mid-century homes in the hillside neighborhoods, and newer developments near the city center. Proximity to the lake, trail access, and views all significantly influence value. David Stein helps Kenmore clients understand how these factors — combined with property condition — affect realistic market positioning.",
  },
  "maple-valley": {
    tone: "suburban",
    descriptor: "Growing foothills community with family appeal",
    heroIntro: "Maple Valley has grown from a rural crossroads into a well-regarded family community in the foothills southeast of Renton. When managing estate or transition property in Maple Valley, the community's mix of newer planned developments and older established homes requires an approach that accounts for how location within the area and property characteristics affect value.",
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
    heroIntro: "Black Diamond is a small community at the rural edge of southeast King County, combining historic small-town character with newer master-planned developments. When selling estate or transition property in Black Diamond, the community's mix of older homes, rural properties, and new construction creates a market where local knowledge is essential for accurate pricing.",
    localKnowledge: "Black Diamond's housing ranges from historic properties in the original town core to large-lot rural homes and newer construction in the Ten Trails master-planned community. The wide variety of property types — and the significant price differences between them — makes generic pricing tools unreliable. David Stein's appraisal credentials help clients understand how property type, lot size, and location within Black Diamond affect realistic market value.",
  },
  enumclaw: {
    tone: "smalltown",
    descriptor: "Plateau community with mountain views and rural character",
    heroIntro: "Enumclaw sits on a plateau with striking views of Mount Rainier, combining small-town character with rural properties and established neighborhoods. When selling estate or transition property in Enumclaw, the community's distinct market — influenced by its rural character, agricultural heritage, and distance from major employment centers — requires guidance grounded in local understanding.",
    localKnowledge: "Enumclaw's housing market includes homes in the walkable downtown area, established neighborhoods, and properties with acreage and mountain views in the surrounding plateau. The community's agricultural heritage means some properties include outbuildings, livestock facilities, or unique lot configurations. David Stein helps clients understand how these property characteristics and Enumclaw's specific buyer demographics affect realistic pricing.",
    brokerAppraiserValue: "Enumclaw's plateau location and rural-residential character mean many properties have features — acreage, outbuildings, livestock facilities, mountain views — that automated pricing tools handle poorly. David Stein's certified appraisal background and experience with properties that blend residential and agricultural characteristics provide the kind of property-specific analysis that Enumclaw clients need, especially when estate or trust situations require defensible pricing for unique plateau homes.",
    localSituations: [
      "A family estate on acreage outside Enumclaw where outbuildings, pasture, and mountain views create valuation complexity beyond standard residential analysis",
      "An inherited home in Enumclaw's walkable downtown area where the small-town character and community charm appeal to a specific buyer demographic",
      "A senior couple's plateau home with Rainier views and shop buildings that require experienced evaluation of how these features affect market value",
      "An executor managing an Enumclaw property with agricultural-heritage characteristics while living in the Seattle metro area",
      "A trust-owned property near Enumclaw where the rural-residential zoning and lot size create unique fiduciary considerations",
      "A probate property on the plateau where distance from employment centers and the community's specific buyer pool affect realistic pricing and timeline",
    ],
    localClientTypes: [
      "Executors managing estate property on the Enumclaw plateau where rural-residential characteristics complicate standard valuation",
      "Families coordinating senior transitions from longtime Enumclaw homes with acreage or agricultural features",
      "Attorneys handling probate or estate cases involving Enumclaw properties where outbuildings and land use affect value",
      "Trustees responsible for trust-owned plateau homes where mountain views and lot characteristics need on-site assessment",
      "Adult children managing a parent's Enumclaw home sale from the Seattle metro area",
      "Financial advisors helping clients understand Enumclaw property values for estate settlement where rural-residential features create pricing complexity",
    ],
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
    heroIntro: "Duvall is a small, tight-knit community along the Snoqualmie River, offering a rural-residential character that distinguishes it from more suburban Eastside cities. When managing estate or transition property in Duvall, the community's limited inventory, smaller-town dynamics, and range of property types — from modest homes to properties with acreage — require locally grounded guidance.",
    localKnowledge: "Duvall's housing market includes homes in the walkable town center, newer subdivisions, and larger rural properties along the valley. The community's small-town identity and agricultural surroundings create a market where buyer expectations differ from more urban areas. David Stein's appraisal background helps clients in Duvall understand how property size, rural features, and community character affect realistic valuation.",
    brokerAppraiserValue: "Duvall's Snoqualmie Valley location means many properties have features — river proximity, acreage, agricultural outbuildings, equestrian facilities — that automated tools trained on suburban data consistently misjudge. David Stein's certified appraisal background provides the property-specific analysis Duvall clients need, especially when estate or trust situations require defensible pricing for homes that don't fit standard residential comparable patterns.",
    localSituations: [
      "An inherited property on acreage outside Duvall where river proximity, outbuildings, and valley views create valuation complexity beyond standard residential analysis",
      "A longtime family home in Duvall's walkable town center where the small-town character and community appeal attract a specific buyer demographic",
      "A senior couple's valley property with equestrian facilities or agricultural features that require experienced evaluation",
      "An executor managing a Duvall property from the Seattle metro area, unfamiliar with the valley's distinct market dynamics",
      "A trust-owned rural-residential property where the trustee needs defensible pricing that accounts for acreage and improvements beyond the home",
      "A probate property in Duvall where the community's limited inventory and specific buyer pool affect realistic timeline and pricing expectations",
    ],
    localClientTypes: [
      "Executors managing estate property in Duvall's small-town valley market where rural-residential features complicate valuation",
      "Families coordinating senior transitions from longtime Duvall homes with acreage or agricultural characteristics",
      "Attorneys handling probate or estate cases involving Duvall properties where outbuildings, land, and river proximity affect value",
      "Trustees responsible for trust-owned valley properties where defensible pricing requires understanding rural-residential markets",
      "Adult children managing a parent's Duvall home sale from the Seattle metro area",
      "Financial advisors needing Duvall property valuations for estate settlement where rural features create pricing complexity",
    ],
  },

  // ── SNOHOMISH COUNTY ────────────────────────────────────────
  lynnwood: {
    tone: "urban",
    descriptor: "Rapidly evolving with new light rail access",
    heroIntro: "Lynnwood is in the middle of a significant transformation, with light rail expansion bringing new development and shifting market dynamics. For families managing estate, probate, or senior transition properties in Lynnwood, this changing landscape creates both opportunities and challenges. Real Property Planning helps clients in Lynnwood understand how the city's evolution affects property values and develop sale strategies that reflect current and realistic market conditions.",
    localKnowledge: "Lynnwood's housing stock includes established ramblers and split-levels from the 1960s–80s, newer townhomes and condos near the city center, and properties in neighborhoods like Alderwood, Martha Lake, and North Lynnwood. The arrival of light rail is reshaping buyer interest in certain areas while leaving others relatively unchanged. David Stein's understanding of these micro-market shifts helps clients position estate and transition properties effectively.",
    brokerAppraiserValue: "Lynnwood's light rail transformation is creating a two-speed market — properties near station areas are appreciating on a different trajectory than those in quieter residential neighborhoods. David Stein's certified appraisal credentials provide the neighborhood-specific analysis that Lynnwood clients need when the city's transit-driven evolution makes comparable selection and pricing strategy especially consequential for estate and transition properties.",
    localSituations: [
      "An estate property near the Lynnwood City Center light rail station where transit-oriented development has changed buyer expectations and comparable selection",
      "A longtime family rambler in Alderwood where the established neighborhood character and school proximity drive value differently than transit-adjacent areas",
      "A senior parent's Martha Lake home where the quiet residential character appeals to different buyers than city-center adjacent properties",
      "An inherited property in North Lynnwood where proximity to Edmonds and Mountlake Terrace creates cross-community comparable questions",
      "An executor managing a Lynnwood property while living out of state, unfamiliar with how the light rail is reshaping different neighborhoods",
      "A divorce-related sale in Lynnwood where the transit-driven appreciation in some areas but not others creates disagreement about value",
    ],
    localClientTypes: [
      "Executors managing estate property in Lynnwood's evolving, transit-influenced market",
      "Families coordinating senior transitions from established Lynnwood neighborhoods during a period of significant city transformation",
      "Attorneys handling probate or divorce cases involving Lynnwood property where light rail impact varies by neighborhood",
      "Trustees responsible for trust-owned homes in Lynnwood where transit proximity may or may not affect the specific property's value",
      "Adult children managing a parent's Lynnwood home sale from out of state",
      "Financial advisors needing Lynnwood property valuations that account for the city's uneven transformation",
    ],
  },
  edmonds: {
    tone: "waterfront",
    descriptor: "Charming waterfront community with historic character",
    heroIntro: "Edmonds is a waterfront community known for its walkable downtown, ferry access, and strong neighborhood character. Properties in Edmonds — from bowl-area homes with sound views to hillside residences and properties near Highway 99 — require locally informed guidance when the sale involves estate, probate, or transition circumstances. Real Property Planning understands the nuances that affect value throughout Edmonds.",
    localKnowledge: "Edmonds offers a wide range of property types and price points, from the desirable bowl area near downtown to Perrinville, Westgate, and Firdale. Waterfront proximity, views, walkability, and lot size all play meaningful roles in Edmonds pricing. David Stein's dual credentials help families selling estate or inherited property in Edmonds understand exactly where their home fits in this layered market and how to position it for the best possible outcome.",
    brokerAppraiserValue: "In Edmonds, view corridors, walking distance to the ferry and downtown, and neighborhood character can create wide value differences within a small geographic area. David Stein's appraisal background allows him to account for these micro-factors rather than relying on broad market comparisons that may miss what makes a specific Edmonds property more — or less — valuable.",
    localSituations: [
      "A longtime family home in the Edmonds bowl that needs careful pricing given its sound views and walkability premium",
      "An inherited property near downtown Edmonds where heirs need objective valuation and sale coordination",
      "A senior parent leaving a Perrinville or Westgate home for assisted living closer to family",
      "A trust-owned property in Edmonds where the trustee needs a broker who understands waterfront-area valuations",
      "An out-of-state executor managing a hillside home with partial sound views that are difficult to price remotely",
      "A divorce-related sale in Edmonds where waterfront proximity complicates the valuation discussion",
    ],
    localClientTypes: [
      "Executors managing estate property in Edmonds' layered waterfront-to-highway market",
      "Families coordinating senior transitions from longtime Edmonds bowl or Perrinville homes",
      "Attorneys handling probate or divorce cases involving Edmonds property where view corridors and ferry proximity affect valuation",
      "Trustees responsible for trust-owned homes in Edmonds where waterfront premiums require specialized assessment",
      "Adult children managing a parent's Edmonds home sale from out of state",
      "Financial advisors needing Edmonds property valuations that account for the community's micro-location value differences",
    ],
  },
  "mountlake-terrace": {
    tone: "suburban",
    descriptor: "Light rail-connected community with lake recreation",
    heroIntro: "Mountlake Terrace is a compact residential community centered around its recreational lake and pool facility, with newer light rail service enhancing its appeal to commuters. When selling estate or transition property in Mountlake Terrace, the community's strong neighborhood identity and evolving transit-oriented development mean pricing accuracy matters.",
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
    heroIntro: "Mukilteo is a small, close-knit community with waterfront appeal, ferry access to Whidbey Island, and a housing market influenced by its proximity to Boeing and Paine Field. For families handling estate or transition-related property in Mukilteo, the community's character and relatively limited housing inventory make experienced local guidance valuable.",
    localKnowledge: "Mukilteo's housing market is relatively compact, with established neighborhoods near the waterfront, properties in the Harbour Pointe master-planned community, and homes along the hillside with varying degrees of sound and mountain views. Because inventory is limited, positioning and pricing accuracy are especially important. David Stein helps clients understand how Mukilteo's unique characteristics affect value and buyer interest.",
  },
  everett: {
    tone: "urban",
    descriptor: "County seat with waterfront revival and diverse neighborhoods",
    heroIntro: "As Snohomish County's largest city, Everett offers a diverse housing landscape — from the revitalizing waterfront and Port Gardner district to established neighborhoods in North Everett, Silver Lake, and Lowell. Families and executors managing property transitions in Everett need guidance that accounts for the city's wide range of property types, price points, and neighborhood trajectories.",
    localKnowledge: "Everett's neighborhoods vary significantly in character and value — from the grand historic homes on Grand and Rucker to mid-century ramblers, newer developments near Silver Lake, and waterfront condos on the Port Gardner peninsula. David Stein's experience across Everett's submarkets helps clients understand which areas are appreciating, where buyer demand is strongest, and how to position an estate or inherited property given its specific location and condition.",
    brokerAppraiserValue: "Everett's market spans a wider price range than most Snohomish County cities — from historic Grand Avenue homes and Port Gardner waterfront condos to modest ramblers in South Everett. David Stein's certified appraisal credentials allow him to evaluate where a specific property falls within this range based on condition, neighborhood trajectory, and realistic buyer demand, providing the defensible analysis that Everett estate and transition situations require.",
    localSituations: [
      "A historic home on Grand or Rucker Avenue where architectural significance and neighborhood character carry premiums that automated tools may miss",
      "An inherited property near the Port Gardner waterfront where the revitalization has changed buyer expectations and comparable selection",
      "A senior parent's longtime home in North Everett or Silver Lake where the established neighborhood character needs to be positioned against newer inventory",
      "A probate property in South Everett or Lowell where the price point and neighborhood trajectory require honest, condition-based pricing",
      "An executor managing an Everett property while living outside Snohomish County, unfamiliar with the city's wide neighborhood variation",
      "A divorce-related sale involving an Everett home where the city's internal price spread creates genuine disagreement about value",
    ],
    localClientTypes: [
      "Executors managing estate property across Everett's diverse neighborhoods — from historic Grand Avenue to Port Gardner to Silver Lake",
      "Families coordinating senior transitions from longtime Everett homes in neighborhoods with varying market trajectories",
      "Attorneys handling probate or divorce cases involving Everett property where the city's wide price range complicates valuation",
      "Trustees responsible for trust-owned homes in Everett where the neighborhood's specific trajectory affects fiduciary pricing decisions",
      "Adult children managing a parent's Everett home sale from out of the area",
      "Financial advisors needing Everett property valuations that account for the county seat's diverse submarkets",
    ],
  },
  "mill-creek": {
    tone: "suburban",
    descriptor: "Master-planned community with strong family appeal",
    heroIntro: "Mill Creek is a well-regarded master-planned community known for its maintained common areas, strong schools, and family-friendly character. Estate, probate, and senior transition properties in Mill Creek need to be priced with HOA considerations, buyer expectations, and condition in mind — since most buyers here are looking for move-in-ready homes.",
    localKnowledge: "Mill Creek's housing includes a range of single-family homes, townhomes, and condos within its planned community framework. The town center, country club, and trail system all contribute to Mill Creek's appeal. When selling an estate or inherited property here, understanding HOA requirements and how the property compares to recently updated homes in the community is essential for realistic pricing.",
  },
  "bothell-snohomish": {
    tone: "suburban",
    descriptor: "Snohomish County side of the Bothell community",
    heroIntro: "The Snohomish County portion of Bothell includes neighborhoods near Canyon Park, the University of Washington Bothell campus, and established residential areas along the city's northern edge. When selling estate or transition property in this area, understanding how the Snohomish County side of Bothell differs in market dynamics from the King County side is important for accurate positioning.",
    localKnowledge: "Bothell's Snohomish County neighborhoods include Canyon Park, North Creek, and areas near the UW Bothell campus, with housing ranging from older ramblers to newer townhome and condo developments. The area's proximity to the Mill Creek community and its commercial corridors influence buyer interest and demographics. David Stein helps clients understand these local dynamics for estate and transition properties.",
  },
  "woodinville-snohomish": {
    tone: "rural",
    descriptor: "Wine country living in Snohomish County",
    heroIntro: "The Snohomish County portion of the Woodinville area includes properties near the wine district, rural-residential neighborhoods, and newer developments. When selling estate or transition property in this area, understanding how wine country proximity, lot sizes, and rural character affect value is important for realistic pricing.",
    localKnowledge: "Properties in the Snohomish County Woodinville area range from estate-style homes near the wine district to rural properties with acreage and newer suburban developments. David Stein's appraisal background helps clients in this area understand how the blend of rural, suburban, and wine-country characteristics affects property values.",
  },
  snohomish: {
    tone: "smalltown",
    descriptor: "Historic small-town character with rural and estate properties",
    heroIntro: "The city of Snohomish — often called the 'Antique Capital of the Northwest' — combines historic small-town character with larger-lot properties and rural-adjacent living. Estate, inherited, and transition properties in Snohomish often include unique features like acreage, older construction, or outbuildings that require specialized pricing and preparation knowledge.",
    localKnowledge: "Snohomish's housing market includes historic homes in the walkable downtown, newer subdivisions, and larger properties with acreage on the outskirts. The rural and semi-rural character of many Snohomish properties means that standard urban comparisons often fall short. David Stein's appraisal background is especially valuable here, where property features like land, outbuildings, and access can meaningfully affect value.",
    brokerAppraiserValue: "Snohomish's historic downtown homes, river-corridor properties, and rural acreage parcels each require fundamentally different valuation approaches — and automated tools trained on suburban patterns consistently misjudge them. David Stein's certified appraisal credentials provide the property-type-specific analysis that Snohomish clients need, whether the property is a historic Victorian near First Street or a farmstead with outbuildings on the valley edge.",
    localSituations: [
      "A historic home near Snohomish's First Street antique district where architectural character and downtown walkability create buyer appeal beyond standard residential metrics",
      "An inherited property with acreage on the outskirts of Snohomish where outbuildings, pasture, and rural character complicate standard comparable selection",
      "A senior couple's longtime Snohomish home where the property's historic features and community connections carry value that automated tools miss",
      "An executor managing a Snohomish estate property from the Seattle metro area, unfamiliar with how the small-town market differs from suburban Eastside dynamics",
      "A trust-owned property near the Snohomish River where the rural-residential setting and flood-zone considerations affect valuation",
      "A probate property in a newer Snohomish subdivision where the home's condition relative to surrounding newer construction affects competitive positioning",
    ],
    localClientTypes: [
      "Executors managing estate property in Snohomish's mix of historic downtown, newer suburban, and rural-acreage markets",
      "Families coordinating senior transitions from longtime Snohomish homes with historic or rural character",
      "Attorneys handling probate or estate cases involving Snohomish properties where property type diversity complicates valuation",
      "Trustees responsible for trust-owned properties in Snohomish where historic homes, acreage, or river proximity require specialized assessment",
      "Adult children managing a parent's Snohomish home sale from the metro area",
      "Financial advisors needing Snohomish property valuations for estate settlement where small-town and rural features create pricing complexity",
    ],
  },
  "lake-stevens": {
    tone: "suburban",
    descriptor: "Lakeside community with rapid residential growth",
    heroIntro: "Lake Stevens has experienced significant growth in recent years, transforming from a rural lake community into one of Snohomish County's most active residential markets. When selling estate or transition property in Lake Stevens, the community's rapid evolution means property values and buyer expectations may have shifted significantly from when the home was originally purchased.",
    localKnowledge: "Lake Stevens' housing ranges from established homes near the lake and the original town center to newer construction in rapidly developing subdivisions throughout the community. The lake itself remains a major amenity and value driver, but distance from the water creates meaningful price variations. David Stein helps clients understand how Lake Stevens' growth trajectory and property-specific characteristics affect realistic market positioning.",
  },
  marysville: {
    tone: "suburban",
    descriptor: "Growing north Snohomish County community",
    heroIntro: "Marysville has grown into one of the largest and most active communities in northern Snohomish County, with established neighborhoods near downtown and newer developments extending toward the surrounding rural areas. When managing estate or transition property in Marysville, the city's range of housing types and price points requires practical, locally informed guidance.",
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
    heroIntro: "Monroe serves as a gateway between the suburban communities of Snohomish County and the Skykomish Valley, offering a mix of established neighborhoods, newer developments, and rural properties. When selling estate or transition property in Monroe, the community's position along the US-2 corridor and its range of housing types affect how properties should be priced and positioned.",
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
    heroIntro: "Sultan is a small community along the Skykomish River in the Sky Valley, offering affordable housing, mountain access, and a rural character that appeals to buyers seeking distance from urban density. When selling estate or transition property in Sultan, the community's smaller market and unique property types require locally informed guidance.",
    localKnowledge: "Sultan's housing includes established homes near town, properties with acreage along the river corridor, and newer construction. The community's position along US-2 and its proximity to both Stevens Pass recreation and Snohomish County employment centers influence buyer interest. David Stein helps Sultan clients understand how the community's niche market dynamics affect realistic property values.",
  },
  "gold-bar": {
    tone: "rural",
    descriptor: "Rural mountain community along the Skykomish River",
    heroIntro: "Gold Bar is a small rural community along the Skykomish River, known for its proximity to Wallace Falls State Park and the Cascade foothills. Estate and transition properties in Gold Bar often include unique characteristics — river access, mountain views, larger acreage, or rustic construction — that require specialized valuation understanding.",
    localKnowledge: "Gold Bar's housing market is limited in inventory and includes a mix of older cabins, established homes, and newer construction, many with larger lots or river proximity. The community's rural character and distance from major employment centers shape the local buyer pool. David Stein's appraisal credentials help clients understand how Gold Bar's unique property types and small-market dynamics affect realistic pricing.",
  },
  "granite-falls": {
    tone: "rural",
    descriptor: "Cascade foothills community with natural surroundings",
    heroIntro: "Granite Falls is a small community at the edge of the Cascade foothills in eastern Snohomish County, offering an affordable, nature-oriented lifestyle. When selling estate or transition property in Granite Falls, the community's rural character, limited comparable sales, and range of property types call for honest, condition-based pricing.",
    localKnowledge: "Granite Falls' housing includes homes in the established town center, rural properties with acreage, and homes near the Mountain Loop Highway corridor. The community's small size means limited comparable sales, making professional valuation especially important. David Stein helps Granite Falls clients navigate pricing with the careful, property-specific analysis that this unique market requires.",
  },

  // ── PIERCE COUNTY ───────────────────────────────────────────
  tacoma: {
    tone: "urban",
    descriptor: "Growing urban market with neighborhood diversity",
    heroIntro: "Tacoma has emerged as one of the most dynamic real estate markets in Pierce County, with neighborhoods ranging from the historic Stadium District and North End to the waterfront communities of Ruston and Point Defiance. For families and fiduciaries navigating estate, probate, or senior transition sales in Tacoma, the city's neighborhood diversity and growth trajectory make experienced, local guidance essential.",
    localKnowledge: "Tacoma's neighborhoods each carry distinct market dynamics — the North End's established homes, Stadium District's architectural character, South Tacoma's affordability, and the waterfront communities' premium positioning. David Stein's understanding of how these submarkets behave helps clients avoid the mistake of treating Tacoma as a single market. For estate and inherited properties, knowing which neighborhood factors drive — or limit — buyer interest is critical to realistic pricing.",
    brokerAppraiserValue: "Tacoma's neighborhood diversity creates one of the widest value spreads in Pierce County — a Stadium District Tudor, a North End craftsman, a Ruston waterfront condo, and a South Tacoma rambler each require fundamentally different pricing approaches. David Stein's certified appraisal credentials provide the neighborhood-specific analysis Tacoma clients need, especially for estate and transition properties where the gap between automated estimates and actual market position can be significant.",
    localSituations: [
      "An inherited craftsman or Tudor in Tacoma's historic North End or Stadium District where architectural significance carries premiums that generic tools miss",
      "A senior parent leaving a longtime family home in Tacoma for assisted living while the family coordinates from out of state",
      "A probate property in South Tacoma or Eastside that needs preparation and realistic market positioning at a specific price tier",
      "A trust-owned property near Point Defiance or the Ruston waterfront where view and location premiums need on-site verification",
      "An out-of-state executor managing a Tacoma estate sale in a city where neighborhood trajectory varies dramatically",
      "A divorce-related sale involving a Tacoma home where the city's internal diversity creates genuine disagreement about comparable selection",
    ],
    localClientTypes: [
      "Executors managing estate property across Tacoma's diverse neighborhoods — Stadium District, North End, South Tacoma, Ruston, Point Defiance",
      "Families coordinating senior transitions from longtime Tacoma homes in neighborhoods with varying market trajectories",
      "Attorneys handling probate or divorce cases involving Tacoma property where the city's wide price range complicates valuation",
      "Trustees responsible for trust-owned homes in Tacoma where neighborhood-level pricing dynamics affect fiduciary decisions",
      "Adult children managing a parent's Tacoma home sale from outside Pierce County",
      "Financial advisors needing Tacoma property valuations that distinguish between the city's dramatically different submarkets",
    ],
  },
  "university-place": {
    tone: "suburban",
    descriptor: "Established residential community near Tacoma",
    heroIntro: "University Place is a well-maintained residential community adjacent to Tacoma, known for its quality neighborhoods, Chambers Bay golf course, and access to Puget Sound waterfront. Families and fiduciaries managing property transitions in University Place benefit from guidance grounded in local neighborhood character and buyer expectations.",
    localKnowledge: "University Place offers a mix of established single-family homes, newer developments, and properties near Chambers Bay and the waterfront. The community's appeal lies in its combination of residential character, proximity to Tacoma's amenities, and access to outdoor recreation. For estate and transition properties, understanding how condition compares to the area's well-maintained housing stock is key to effective pricing.",
  },
  lakewood: {
    tone: "military",
    descriptor: "Diverse community near Joint Base Lewis-McChord",
    heroIntro: "Lakewood's proximity to Joint Base Lewis-McChord, its diverse neighborhoods, and its range of housing types — from lakefront properties to established suburban homes — create a real estate market with specific dynamics. For families and executors managing estate or transition-related property in Lakewood, understanding how military influence, neighborhood differences, and property condition affect value is essential.",
    localKnowledge: "Lakewood's housing market includes lakefront properties on American Lake and Gravelly Lake, established neighborhoods in the Tillicum and Springbrook areas, and a range of housing types throughout the city. The military presence at JBLM affects buyer demographics and rental demand in ways that influence both pricing strategy and marketing approach. David Stein's experience helps clients navigate these considerations with clarity.",
    brokerAppraiserValue: "Lakewood's market is shaped by forces that generic pricing tools don't account for — military PCS cycles that create seasonal buyer fluctuations, lakefront premiums that apply only in specific enclaves, and rental demand near JBLM that affects whether a property's highest value is as an owner-occupied home or an investment. David Stein's certified appraisal credentials provide the property-specific analysis needed to navigate Lakewood's segmented market, ensuring estate and transition properties are priced based on their actual position rather than broad Pierce County averages.",
    localSituations: [
      "An estate property on American Lake where the waterfront location carries a significant premium but the home's age and condition create pricing complexity",
      "A retired military family in Tillicum transitioning to a smaller home or care community while navigating JBLM-influenced buyer demographics",
      "A probate sale near Gravelly Lake where the exclusive enclave character creates a limited comparable-sales environment",
      "An inherited property near JBLM that has been used as a rental — requiring transition from investment presentation to owner-occupied sale strategy",
      "A senior couple with deep roots in the Lakewood community whose large home no longer fits their needs but carries significant emotional attachment",
      "An out-of-state executor managing a Lakewood estate property — unfamiliar with how military buyer cycles and lakefront premiums affect timing and pricing",
    ],
    localClientTypes: [
      "Executors and personal representatives managing estate property in Lakewood's JBLM-influenced market",
      "Attorneys and fiduciaries who need defensible pricing that accounts for Lakewood's lakefront and military-adjacent submarkets",
      "Seniors and military retirees preparing to transition from a longtime Lakewood home",
      "Trustees managing trust-owned property in Lakewood where lakefront premiums or military rental dynamics affect fiduciary decisions",
      "Out-of-state heirs who need local coordination for an inherited property in a market shaped by JBLM",
      "CPAs and financial planners advising clients on property decisions involving Lakewood's segmented housing market",
    ],
  },
  puyallup: {
    tone: "suburban",
    descriptor: "Established family community in the valley",
    heroIntro: "Puyallup is a well-established community in the Puyallup Valley, known for its historic downtown, family neighborhoods, and strong sense of community. For families managing estate sales, senior transitions, or inherited property in Puyallup, the process benefits from a broker who understands the valley's housing stock, buyer demographics, and how condition and location affect value in this market.",
    localKnowledge: "Puyallup's housing ranges from older homes near downtown and South Hill to newer developments in the surrounding areas. The valley's agricultural heritage means some properties come with unique lot characteristics, outbuildings, or zoning considerations. David Stein helps clients in Puyallup understand how these factors — along with condition, school proximity, and neighborhood context — affect realistic pricing and buyer interest.",
    brokerAppraiserValue: "Puyallup's valley location creates distinct valuation dynamics — South Hill properties command different premiums than downtown-area homes, and agricultural-heritage lots with outbuildings or acreage require appraisal experience to price accurately. David Stein's dual credentials help Puyallup clients understand how these valley-specific factors affect realistic market value for estate, probate, and transition properties.",
    localSituations: [
      "A family estate on South Hill where the larger lot and established landscaping carry value that automated tools may not capture",
      "An inherited home near downtown Puyallup where the older housing stock and walkable location create unique buyer appeal",
      "A senior couple's longtime valley home with outbuildings or shop space that complicates standard residential comparisons",
      "An executor managing a Puyallup property while living outside the area and unfamiliar with the valley's neighborhood differences",
      "A trust-owned property near the fairgrounds where seasonal buyer interest and location-specific factors affect timing and pricing",
      "A divorce-related sale involving a Puyallup home where the South Hill premium versus valley-floor pricing creates disagreement on value",
    ],
    localClientTypes: [
      "Executors managing estate property in the Puyallup Valley's established neighborhoods",
      "Families coordinating senior transitions from longtime South Hill or downtown-area homes",
      "Attorneys handling probate or divorce cases involving Puyallup residential property",
      "Trustees responsible for trust-owned homes in Puyallup's varied residential areas",
      "Adult children managing a parent's Puyallup home sale from outside the valley",
      "Financial advisors helping clients understand Puyallup property values for estate settlement or retirement planning",
    ],
  },
  "gig-harbor": {
    tone: "waterfront",
    descriptor: "Waterfront peninsula community with premium appeal",
    heroIntro: "Gig Harbor's waterfront charm, small-town atmosphere, and proximity to Tacoma and the Narrows Bridge have made it one of Pierce County's most desirable communities. Estate and transition properties in Gig Harbor — whether on the harbor itself, in the established neighborhoods of the peninsula, or in newer developments like Gig Harbor North — require pricing and preparation strategies informed by the area's unique buyer expectations.",
    localKnowledge: "Gig Harbor's market ranges from waterfront properties and historic harbor-area homes to newer construction in master-planned communities. The distinction between 'Gig Harbor proper' and surrounding unincorporated areas matters to buyers, and view properties, waterfront access, and proximity to downtown all significantly affect value. David Stein's appraisal credentials help clients understand these nuances rather than relying on broad averages.",
    brokerAppraiserValue: "Gig Harbor properties — particularly those near the harbor, on the bluff, or with water views — carry premiums that automated tools consistently misjudge. David Stein's certified appraisal background provides the property-specific analysis Gig Harbor sellers need, accounting for view quality, waterfront proximity, lot orientation, and the meaningful price differences between 'Gig Harbor address' and actual Gig Harbor proper.",
    localSituations: [
      "A waterfront or harbor-view home in Gig Harbor where the estate needs accurate valuation that reflects view premiums",
      "An inherited property on the Gig Harbor peninsula where out-of-state heirs need local coordination and honest pricing",
      "A senior couple leaving a longtime Gig Harbor home for a retirement community closer to medical services",
      "A trust-owned property in Gig Harbor North or the surrounding peninsula that needs fiduciary-appropriate sale coordination",
      "An executor managing a Gig Harbor estate where the property's waterfront character complicates standard pricing approaches",
      "A divorce-related sale involving a Gig Harbor home where both parties need an objective, locally knowledgeable broker",
    ],
  },
  fircrest: {
    tone: "suburban",
    descriptor: "Small residential enclave near Tacoma",
    heroIntro: "Fircrest is a small, well-maintained residential community surrounded by Tacoma and University Place, known for its tree-lined streets, community parks, and quiet, family-oriented character. Estate and transition properties in Fircrest carry a strong neighborhood identity — but accurate pricing still requires understanding what drives demand in this compact community.",
    localKnowledge: "Fircrest's housing is predominantly mid-century single-family homes on well-maintained lots. The community's small size and consistent character mean that property condition and updates are especially visible factors in pricing. David Stein helps Fircrest clients understand how their property compares within this tight-knit community and how to position it effectively for the local buyer pool.",
  },
  steilacoom: {
    tone: "waterfront",
    descriptor: "Historic waterfront town with military proximity",
    heroIntro: "Steilacoom is Washington's oldest incorporated town, offering historic charm, Puget Sound waterfront, and a quiet residential character near Joint Base Lewis-McChord. When selling estate or transition property in Steilacoom, the town's historic significance, waterfront access, and small-market dynamics make experienced local guidance especially valuable.",
    localKnowledge: "Steilacoom's housing includes historic homes near downtown and the waterfront, established mid-century properties, and homes with sound views. The town's historic character and proximity to JBLM influence both buyer demographics and property regulations. David Stein helps clients navigate Steilacoom's unique market with the property-specific analysis this historic community requires.",
  },
  "bonney-lake": {
    tone: "suburban",
    descriptor: "Growing plateau community east of Tacoma",
    heroIntro: "Bonney Lake is a growing community on the plateau east of Tacoma and Puyallup, with newer developments, mountain views, and an expanding commercial center. When selling estate or transition property in Bonney Lake, the community's newer housing stock and growing buyer interest call for practical, informed guidance.",
    localKnowledge: "Bonney Lake's housing is predominantly newer, with many homes built since the 1990s in planned subdivisions. The community's mountain views, growing amenities, and relative affordability compared to west-side communities drive buyer interest. David Stein helps clients understand how property age, condition, and location within Bonney Lake's expanding boundaries affect realistic market value.",
  },
  sumner: {
    tone: "smalltown",
    descriptor: "Valley community with historic downtown character",
    heroIntro: "Sumner is a small community in the Puyallup Valley known for its historic downtown, residential neighborhoods, and connection to the valley's agricultural heritage. When selling estate or transition property in Sumner, the community's compact market and range of property ages require locally grounded pricing and preparation guidance.",
    localKnowledge: "Sumner's housing includes established homes near downtown, newer construction on the edges of the city, and properties influenced by the valley's agricultural context. The community's small-town character and proximity to Puyallup and Auburn create a buyer pool with specific expectations. David Stein helps Sumner clients position estate and transition properties realistically within this local context.",
  },
  orting: {
    tone: "smalltown",
    descriptor: "Small valley town with mountain views and rural charm",
    heroIntro: "Orting is a small town in the Carbon River valley, offering mountain views, rural charm, and affordable housing relative to other Pierce County communities. When selling estate or transition property in Orting, the community's smaller market, lahar zone considerations, and range of property types require honest, condition-based guidance.",
    localKnowledge: "Orting's housing ranges from established homes near the town center to newer developments and properties with rural characteristics. The community's position in the Carbon River valley and its relationship to Mount Rainier lahar zones are factors that informed buyers consider. David Stein helps Orting clients understand how these unique local factors affect realistic property values and buyer interest.",
  },
  spanaway: {
    tone: "military",
    descriptor: "Unincorporated community with military influence",
    heroIntro: "Spanaway is an unincorporated community south of Tacoma near Joint Base Lewis-McChord, offering affordable housing and access to Spanaway Lake Park. When selling estate or transition property in Spanaway, understanding how the area's military-influenced buyer demographics and diverse housing stock affect value is important for realistic expectations.",
    localKnowledge: "Spanaway's housing includes established ramblers, manufactured homes, newer construction, and properties near Spanaway Lake. The community's proximity to JBLM significantly influences buyer demographics and rental demand. David Stein helps clients understand how Spanaway's specific market dynamics — including military-related demand and the area's range of property types — affect realistic pricing for estate and transition properties.",
  },
  graham: {
    tone: "rural",
    descriptor: "Rural-suburban community in eastern Pierce County",
    heroIntro: "Graham is an unincorporated community in eastern Pierce County, offering rural-suburban living with larger lots, mountain views, and agricultural character. When selling estate or transition property in Graham, the community's rural property types and distance from urban centers affect how properties are valued.",
    localKnowledge: "Graham's housing ranges from established homes on larger lots to newer subdivisions and properties with acreage, outbuildings, and agricultural uses. The community's rural character means property features like land area, well and septic systems, and road access meaningfully affect value. David Stein's appraisal credentials help Graham clients understand how these rural-specific factors influence realistic property pricing.",
  },
  dupont: {
    tone: "military",
    descriptor: "Master-planned community near JBLM with historic roots",
    heroIntro: "DuPont is a distinctive master-planned community near Joint Base Lewis-McChord, built around a historic village core and designed with traditional neighborhood principles. When selling estate or transition property in DuPont, the community's HOA structure, planned character, and military-adjacent buyer demographics affect how properties should be priced and positioned.",
    localKnowledge: "DuPont's housing is predominantly within its master-planned community framework, with a range of home sizes and styles designed around the historic village core. The community's HOA requirements, proximity to JBLM and I-5, and planned amenities all influence buyer expectations. David Stein helps DuPont clients understand how the community's structured environment affects pricing and sale strategy for estate and transition properties.",
  },
  fife: {
    tone: "suburban",
    descriptor: "Compact community at the I-5 and Port of Tacoma crossroads",
    heroIntro: "Fife is a compact community situated at the intersection of I-5 and the Port of Tacoma, with a mix of residential neighborhoods and commercial development. When selling estate or transition property in Fife, the community's unique position and relatively limited residential inventory make honest, experienced guidance especially useful.",
    localKnowledge: "Fife's residential areas are relatively compact, with established neighborhoods surrounded by commercial and industrial zones. The community's location along major transportation corridors and proximity to Tacoma and Federal Way influence buyer demographics. David Stein helps Fife clients navigate the community's specific market dynamics with clear, condition-based guidance.",
  },
  milton: {
    tone: "suburban",
    descriptor: "Small residential community spanning King and Pierce Counties",
    heroIntro: "Milton is a small residential community that spans the King-Pierce County line, offering quiet neighborhoods and a community-oriented character. When selling estate or transition property in Milton, the community's compact size and cross-county position create specific market considerations that benefit from locally informed pricing guidance.",
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
    heroIntro: "Buckley is a small community at the gateway to the Mount Rainier corridor, combining small-town character with proximity to the Cascades. When selling estate or transition property in Buckley, the community's smaller market, rural characteristics, and specific buyer demographics call for locally grounded guidance.",
    localKnowledge: "Buckley's housing includes established homes near the town center, newer developments, and properties with rural features including larger lots and mountain proximity. The community's position along the SR-410 corridor toward Mount Rainier influences buyer interest and demographics. David Stein helps Buckley clients understand how these local factors affect realistic property pricing.",
  },
  eatonville: {
    tone: "rural",
    descriptor: "Rural gateway to Mount Rainier National Park",
    heroIntro: "Eatonville is a small, rural community that serves as one of the gateways to Mount Rainier National Park. When selling estate or transition property in Eatonville, the community's remote character, limited comparable sales, and range of rural property types require honest, condition-based valuation that accounts for the area's specific market dynamics.",
    localKnowledge: "Eatonville's housing ranges from established homes near the compact town center to rural properties with acreage and mountain access. The community's tourism connection to Mount Rainier and its agricultural character create a niche buyer pool. David Stein helps Eatonville clients understand how the community's rural character and limited market activity affect realistic property values.",
  },

  // ── KITSAP COUNTY ───────────────────────────────────────────
  bremerton: {
    tone: "military",
    descriptor: "Naval city with revitalizing waterfront and diverse housing",
    heroIntro: "Bremerton is experiencing a notable revitalization, with its waterfront, ferry terminal, and downtown district attracting renewed interest. The city's housing market — from historic homes in Manette to newer waterfront condos and established neighborhoods throughout — offers a wide range of price points and property types. For families managing estate, probate, or transition sales in Bremerton, understanding the city's evolving market is key to making well-informed decisions.",
    localKnowledge: "Bremerton's neighborhoods range from the revitalizing downtown and waterfront to Manette's established community character, the Naval Avenue area, and surrounding residential neighborhoods. The city's connection to Seattle via Washington State Ferries and the presence of Puget Sound Naval Shipyard both influence buyer demographics and market activity. David Stein's experience helps clients understand how Bremerton's ongoing transformation affects property values and sale strategy.",
    brokerAppraiserValue: "Bremerton's revitalization means property values are shifting at different rates across the city — waterfront condos and downtown-adjacent homes are appreciating faster than outlying neighborhoods, and the Naval Shipyard's influence on buyer demographics creates patterns that automated tools miss. David Stein's appraisal credentials and Kitsap County experience provide the neighborhood-specific analysis that Bremerton clients need, especially for estate and transition properties where the revitalization's uneven impact makes accurate pricing critical.",
    localSituations: [
      "A family estate in Manette where the neighborhood's growing appeal and proximity to the ferry create value that older comparables may understate",
      "An inherited property near the Naval Shipyard where military buyer demographics and VA loan eligibility affect marketing and pricing strategy",
      "A senior couple's longtime home in an established Bremerton neighborhood where the city's revitalization hasn't yet reached their area",
      "A probate property downtown where the waterfront transformation has changed buyer expectations and comparable selection",
      "An executor managing a Bremerton home while living on the Seattle side, unfamiliar with Kitsap's distinct market dynamics",
      "A divorce-related sale involving a Bremerton property where the city's uneven revitalization creates disagreement about current and future value",
    ],
    localClientTypes: [
      "Executors managing estate property in Bremerton's revitalizing but unevenly evolving market",
      "Military families and retirees navigating property transitions connected to Puget Sound Naval Shipyard",
      "Attorneys handling probate or divorce cases involving Bremerton residential property where revitalization affects valuation",
      "Trustees responsible for trust-owned homes across Bremerton's diverse neighborhoods — waterfront, Manette, Naval Avenue, outlying areas",
      "Families coordinating senior transitions from longtime Bremerton homes during a period of significant city transformation",
      "Financial advisors needing Bremerton property valuations for estate planning in a market where revitalization creates pricing uncertainty",
    ],
  },
  silverdale: {
    tone: "military",
    descriptor: "Central Kitsap's commercial and residential hub",
    heroIntro: "Silverdale serves as Central Kitsap's primary commercial and residential center, with housing that ranges from newer developments in Ridgetop and Clear Creek to established neighborhoods throughout the community. When managing estate or transition property in Silverdale, understanding how this unincorporated community's market dynamics and proximity to Naval Base Kitsap affect value is important for making sound decisions.",
    localKnowledge: "Silverdale's housing market includes newer construction in planned communities, established ramblers and split-levels, and properties with varying degrees of access to waterfront and natural areas. The community's role as Central Kitsap's hub and the influence of nearby military installations create a buyer pool with specific characteristics. David Stein helps clients understand how these factors affect realistic pricing for estate and inherited properties.",
    brokerAppraiserValue: "Silverdale's unincorporated status and Central Kitsap hub role create a market where property types range from Ridgetop's newer planned developments to established neighborhoods with very different buyer pools. David Stein's certified appraisal credentials help Silverdale clients understand how the Naval Base influence, the community's commercial-hub character, and the wide range of housing ages and styles affect defensible pricing for estate and transition properties.",
    localSituations: [
      "An estate property in Ridgetop or Clear Creek where the planned-community setting and newer construction create specific buyer expectations",
      "An inherited home in an established Silverdale neighborhood where proximity to Naval Base Kitsap influences buyer demographics and demand patterns",
      "A senior couple's longtime Silverdale home near the waterfront or natural areas where location-specific premiums need on-site verification",
      "A probate property in Central Kitsap where the unincorporated community's market dynamics differ from nearby incorporated cities",
      "An executor managing a Silverdale property from across the Sound, unfamiliar with Kitsap's military-influenced market",
      "A military retiree's home where the buyer pool includes both military and civilian purchasers with different financing and timeline expectations",
    ],
    localClientTypes: [
      "Executors managing estate property in Silverdale's military-influenced Central Kitsap market",
      "Military families and retirees navigating property transitions near Naval Base Kitsap",
      "Attorneys handling probate or estate cases involving Silverdale property where military buyer demographics affect strategy",
      "Trustees responsible for trust-owned homes in Silverdale's mix of planned communities and established neighborhoods",
      "Families coordinating senior transitions from longtime Silverdale homes",
      "Financial advisors needing Silverdale property valuations that account for the community's military-adjacent market dynamics",
    ],
  },
  poulsbo: {
    tone: "waterfront",
    descriptor: "Scandinavian-influenced waterfront community",
    heroIntro: "Poulsbo's Scandinavian heritage, Liberty Bay waterfront, and small-town charm create a distinctive community with strong appeal for families and retirees. Estate and transition properties in Poulsbo — whether in the historic waterfront area, nearby established neighborhoods, or outlying rural properties — benefit from guidance that reflects the community's unique character and the expectations of buyers drawn to this area.",
    localKnowledge: "Poulsbo's housing ranges from historic homes near the waterfront and downtown to newer developments and larger rural properties in the surrounding area. Waterfront access, Liberty Bay views, and proximity to downtown all significantly influence value. David Stein's appraisal credentials are particularly valuable in Poulsbo, where the range of property types and the community's distinctive character make generic pricing approaches unreliable.",
    brokerAppraiserValue: "Poulsbo's mix of waterfront homes, village-adjacent properties, and rural-residential lots creates a market where automated pricing tools fall short. David Stein evaluates each property on its actual characteristics — Liberty Bay proximity, view corridors, lot topography, and condition — providing the kind of grounded analysis that Poulsbo sellers and their advisors need for confident decisions.",
    localSituations: [
      "A longtime family home near Poulsbo's downtown waterfront where the Liberty Bay premium needs accurate evaluation",
      "An inherited property in Poulsbo where multiple heirs need objective pricing and clear communication",
      "A senior transitioning from a Poulsbo home to assisted living on the peninsula or the mainland",
      "A trust-owned property in the Poulsbo area where the trustee needs a broker experienced with Kitsap waterfront markets",
      "An out-of-state executor managing a Poulsbo property with rural or semi-rural characteristics",
      "A family navigating a property decision in Poulsbo where community relationships and discretion matter",
    ],
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
    heroIntro: "Kingston is a small community on the northern tip of the Kitsap Peninsula, served by the Kingston-Edmonds ferry and known for its village character and waterfront access. When selling estate or transition property in Kingston, the community's ferry-dependent connectivity, limited inventory, and range of waterfront to inland properties affect how properties are valued.",
    localKnowledge: "Kingston's housing includes properties near the ferry terminal and village center, waterfront homes along Appletree Cove, and established residential areas extending into the surrounding hills. The community's ferry connection to Edmonds and its small-town character attract a specific buyer demographic. David Stein helps Kingston clients understand how ferry access, waterfront proximity, and the community's limited market size affect realistic property pricing.",
  },
  suquamish: {
    tone: "smalltown",
    descriptor: "Tribal community with waterfront character on Agate Passage",
    heroIntro: "Suquamish is a small community on Agate Passage with deep historical roots, waterfront access, and a quiet residential character. When selling estate or transition property in Suquamish, the community's compact size, waterfront dynamics, and specific local considerations require experienced, condition-based guidance.",
    localKnowledge: "Suquamish's housing includes waterfront and water-view properties along Agate Passage and Port Madison, along with established homes in the community's residential areas. The community's historical significance, proximity to Bainbridge Island and Poulsbo, and limited inventory create a niche market. David Stein helps Suquamish clients navigate these local factors with honest, property-specific pricing guidance.",
  },
  manchester: {
    tone: "waterfront",
    descriptor: "Quiet waterfront community on Rich Passage",
    heroIntro: "Manchester is a small, unincorporated waterfront community on Rich Passage in South Kitsap, offering quiet residential living, waterfront access, and proximity to the Manchester State Park. When selling estate or transition property in Manchester, the community's limited inventory and waterfront-influenced market create specific pricing dynamics.",
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
    heroIntro: "Hansville is a small, secluded community at the northern tip of the Kitsap Peninsula, known for Point No Point Lighthouse and its quiet, waterfront-oriented character. When selling estate or transition property in Hansville, the community's remote location, limited inventory, and waterfront-driven market create valuation considerations that require experienced, locally informed guidance.",
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

// ─── Tier Classification ────────────────────────────────────────────────

/** Tier 1 cities — fully enriched, ready for indexation */
const TIER_1_SLUGS = new Set([
  "bellevue", "seattle", "kirkland", "mercer-island",
  "edmonds", "tacoma", "bainbridge-island",
  "gig-harbor", "poulsbo",
  "snohomish", "silverdale",
  "lynnwood", "woodinville", "issaquah",
  "redmond", "everett", "duvall",
  "lakewood", "bothell", "kent",
  "puyallup", "federal-way", "burien",
  "bremerton", "renton", "enumclaw",
]);

/** Check whether a city is Tier 1 (fully enriched content) */
export function isTier1City(slug: string): boolean {
  return TIER_1_SLUGS.has(slug);
}

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

/** Tone × service–aware heading for how-we-help section */
export function getToneHowWeHelpHeading(tone?: CommunityTone, serviceSlug?: string): string {
  const t = tone || "suburban";
  const s = serviceSlug || "";

  // Service-specific heading variants by tone
  switch (s) {
    case "probate-estate-sales":
      switch (t) {
        case "premium": return "How David Guides Estate Property Sales";
        case "urban": return "Experienced Probate Sale Support";
        case "waterfront": return "How David Helps With Estate Property";
        case "smalltown": return "Guiding Your Estate Sale, Step by Step";
        case "military": return "Practical Probate Sale Guidance";
        case "rural": return "How David Helps With Estate Property Sales";
        default: return "How Real Property Planning Supports Estate Sales";
      }
    case "senior-transitions":
      switch (t) {
        case "premium": return "Supporting Your Family's Transition";
        case "urban": return "Experienced Senior Transition Support";
        case "waterfront": return "How David Supports Senior Moves";
        case "smalltown": return "Walking With You Through the Transition";
        case "military": return "Practical Senior Transition Guidance";
        case "rural": return "How David Helps Families in Transition";
        default: return "How Real Property Planning Supports Senior Transitions";
      }
    case "downsizing-services":
      switch (t) {
        case "premium": return "How David Supports Your Downsizing Plan";
        case "urban": return "Practical Downsizing Guidance";
        case "waterfront": return "How David Helps With Downsizing";
        case "smalltown": return "Steady Guidance for Your Next Chapter";
        case "military": return "Clear, Practical Downsizing Support";
        case "rural": return "How David Helps You Downsize";
        default: return "How Real Property Planning Helps With Downsizing";
      }
    case "executor-support":
      switch (t) {
        case "premium": return "How David Supports Executors";
        case "urban": return "Experienced Executor Real Estate Support";
        case "waterfront": return "How David Helps Executors Navigate the Process";
        case "smalltown": return "Guiding Executors Through Each Step";
        case "military": return "Clear Guidance for Executor Responsibilities";
        case "rural": return "How David Helps With Executor Duties";
        default: return "How Real Property Planning Supports Executors";
      }
    case "attorney-fiduciary-support":
      switch (t) {
        case "premium": return "How David Works With Legal Professionals";
        case "urban": return "A Reliable Resource for Attorneys and Fiduciaries";
        case "waterfront": return "How David Supports Attorneys and Fiduciaries";
        case "smalltown": return "Working With Your Legal Team";
        case "military": return "Practical Support for Legal Professionals";
        case "rural": return "How David Partners With Attorneys";
        default: return "How Real Property Planning Works With Legal Professionals";
      }
    case "valuation-guidance":
      switch (t) {
        case "premium": return "How David Provides Valuation Clarity";
        case "urban": return "Experienced Valuation Support";
        case "waterfront": return "How David Brings Valuation Insight";
        case "smalltown": return "Honest, Grounded Valuation Guidance";
        case "military": return "Clear Property Valuation Support";
        case "rural": return "How David Provides Honest Valuation";
        default: return "How Real Property Planning Delivers Valuation Insight";
      }
    case "preparing-home-for-sale":
      switch (t) {
        case "premium": return "How David Manages Property Preparation";
        case "urban": return "Coordinated Home Preparation Support";
        case "waterfront": return "How David Helps Prepare Your Home";
        case "smalltown": return "Getting Your Home Ready, Practically";
        case "military": return "Efficient Home Preparation Guidance";
        case "rural": return "How David Coordinates Property Preparation";
        default: return "How Real Property Planning Prepares Homes for Sale";
      }
    case "divorce-related-home-sales":
      switch (t) {
        case "premium": return "How David Handles Divorce-Related Sales";
        case "urban": return "Objective Support for Divorce Property Sales";
        case "waterfront": return "How David Helps With Divorce-Related Property";
        case "smalltown": return "Discreet, Professional Sale Guidance";
        case "military": return "Clear Guidance for Divorce-Related Sales";
        case "rural": return "How David Manages Divorce Property Sales";
        default: return "How Real Property Planning Supports Divorce Sales";
      }
    case "trust-estate-property-sales":
      switch (t) {
        case "premium": return "How David Supports Trust Property Sales";
        case "urban": return "Experienced Trust Property Sale Guidance";
        case "waterfront": return "How David Helps With Trust-Owned Property";
        case "smalltown": return "Guiding Trustees Through the Sale Process";
        case "military": return "Practical Trust Property Sale Support";
        case "rural": return "How David Helps Sell Trust-Owned Property";
        default: return "How Real Property Planning Supports Trust Sales";
      }
    default:
      // Fallback by tone only
      switch (t) {
        case "smalltown":
        case "rural":
          return "How David Stein Helps";
        default:
          return "How Real Property Planning Helps";
      }
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

// ═══════════════════════════════════════════════════════════════════════
// DEEP CONTENT VARIATION SYSTEM
// Replaces near-identical city-name-swap templates with tone×service
// paragraph banks for Tier 2-3 cities
// ═══════════════════════════════════════════════════════════════════════

type ToneServiceKey = `${CommunityTone}:${string}`;

// ─── Deep Intro Paragraphs ─────────────────────────────────────────────
// Unique opening paragraph by tone × service — never just a city-name swap

const deepIntroBank: Record<string, Record<CommunityTone, string>> = {
  "probate-estate-sales": {
    premium: `In established, higher-value communities, probate and estate sales carry added complexity — from navigating multiple interested parties to pricing homes that reflect both premium location and real-world condition. In {city}, {county}, Real Property Planning provides the valuation-informed guidance that executors, attorneys, and families need to handle estate property with clarity and confidence.`,
    urban: `Urban estate sales move quickly and involve diverse property types — condos, townhomes, multifamily, and single-family homes across distinct neighborhoods. In {city}, the pace and complexity of the market make experienced guidance essential. Real Property Planning works with executors and attorneys who need a broker who understands city-market dynamics and can price estate property based on actual condition and realistic demand.`,
    suburban: `In family-oriented communities like {city}, estate and probate properties are often longtime family homes — well-loved but showing their age. Selling them effectively means understanding what buyers in {city} expect and how to position a home that may not match the newer construction nearby. Real Property Planning provides practical guidance grounded in local market knowledge and condition-based pricing.`,
    waterfront: `Waterfront and water-influenced communities present distinct challenges for estate sales — from view-driven premiums to properties with aging bulkheads, marine exposure, or unique lot configurations. In {city}, Real Property Planning helps executors and families price and prepare estate property with the local insight that waterfront markets require.`,
    smalltown: `In smaller communities like {city}, estate sales are personal — the family is often well-known, and the property may have been in the family for decades. Real Property Planning brings respectful, experienced guidance to probate and estate property sales in {city}, providing honest pricing and clear coordination without the pressure of a high-volume brokerage.`,
    military: `Military-connected communities like {city} experience frequent relocations, PCS-related sales, and estate transitions that may involve service members or their families. Real Property Planning provides steady, practical guidance for probate and estate sales in {city}, working within the timelines and constraints that military families often face.`,
    rural: `Rural and semi-rural estate properties in {city} often include features that standard market tools overlook — acreage, outbuildings, well and septic systems, or mixed-use potential. Real Property Planning provides condition-based pricing and hands-on coordination for estate sales in {city} where property characteristics require experienced, on-the-ground evaluation.`,
  },
  "senior-transitions": {
    premium: `Senior transitions in established communities like {city} often involve homes with significant value and decades of memories. The sale needs to be handled with care — for the family and for the asset. Real Property Planning guides {city} families through the process with experienced pricing, vendor coordination, and a pace that respects both the market opportunity and the human reality of the move.`,
    urban: `In {city}'s urban environment, senior transitions can involve everything from condos in walkable neighborhoods to mid-century homes in established residential areas. The range of options — and the pace of the market — make experienced guidance essential. Real Property Planning helps families coordinate the sale of a longtime home alongside the logistics of a move to assisted or independent living.`,
    suburban: `Many families in {city} reach out when a parent is ready to transition from the family home — a home they may have lived in for 20 or 30 years. Real Property Planning helps suburban families in {city} navigate the sale timeline, property preparation, and pricing decisions that come with this important life change.`,
    waterfront: `Senior transitions from waterfront or water-view homes in {city} carry unique considerations — from the premium that water access commands to the specialized maintenance these properties require. Real Property Planning helps families approach the sale with honest pricing and thoughtful coordination.`,
    smalltown: `In a close-knit community like {city}, a senior's decision to leave the family home is both practical and personal. Real Property Planning provides patient, clear guidance — helping families understand the property's realistic value, coordinate preparation, and manage the sale at a pace that works.`,
    military: `In {city}, senior transitions often intersect with military retirement or the needs of veteran families. Real Property Planning provides practical, respectful guidance for families coordinating a move from a longtime home to a more manageable living situation.`,
    rural: `Rural properties in {city} often present unique preparation challenges during a senior transition — deferred maintenance on larger lots, outbuildings, or systems that need evaluation. Real Property Planning provides honest, condition-based guidance for families managing these transitions.`,
  },
  "downsizing-services": {
    premium: `Downsizing from a premium home in {city} is a significant financial decision — the home may have appreciated substantially, and getting the pricing right matters. Real Property Planning helps {city} homeowners approach downsizing with a realistic understanding of their home's current value, the preparation that makes sense, and the timing that aligns with their next chapter.`,
    urban: `In {city}'s urban market, downsizing often means moving from a single-family home to a condo, townhome, or smaller residence in a different neighborhood. Real Property Planning helps homeowners in {city} navigate the transition with clear pricing guidance and practical coordination.`,
    suburban: `For homeowners in {city} whose children have moved out and who no longer need the space, downsizing is a practical decision that deserves experienced guidance. Real Property Planning works with families in {city} to assess their home's condition, understand realistic market value, and plan a sale that aligns with their next living arrangement.`,
    waterfront: `Downsizing from a waterfront property in {city} involves specific market considerations — waterfront premiums, specialized property features, and a buyer pool with distinct expectations. Real Property Planning provides valuation-informed guidance for homeowners ready to simplify.`,
    smalltown: `In {city}, downsizing often means leaving a home where the family has deep roots. Real Property Planning provides honest, practical guidance for homeowners who are ready to simplify — helping them understand what their property is worth and how to prepare it for sale.`,
    military: `Military families in {city} who are downsizing after retirement or a change in duty status benefit from a broker who understands the practical realities of military transitions. Real Property Planning provides clear, efficient guidance for the sale process.`,
    rural: `Downsizing from a rural property in {city} often involves considerations that standard downsizing guides don't address — acreage, outbuildings, septic systems, and rural buyer expectations. Real Property Planning provides on-the-ground assessment and honest pricing guidance.`,
  },
  "executor-support": {
    premium: `Executors managing estate property in {city}'s premium market face significant responsibility — the property may be high-value, the beneficiaries may have strong opinions, and the stakes of mispricing are real. Real Property Planning provides the valuation expertise and steady communication that executors in {city} need to fulfill their duties with confidence.`,
    urban: `Serving as executor for a property in {city}'s urban market can be overwhelming — especially for out-of-area executors who need local coordination. Real Property Planning provides experienced guidance for executors in {city}, managing the property assessment, preparation, and sale process from start to finish.`,
    suburban: `In family-oriented communities like {city}, executors often inherit a home that was the center of family life for decades. Real Property Planning helps executors in {city} navigate property assessment, preparation decisions, and the sale process with practical guidance and clear communication.`,
    waterfront: `Managing estate property in a waterfront community like {city} adds specific complexity — waterfront valuations, specialized property features, and a buyer market with particular expectations. Real Property Planning provides the locally informed guidance executors need.`,
    smalltown: `In {city}, executors often manage property in a community where the family is known and the situation is personal. Real Property Planning provides respectful, experienced support — handling property assessment, preparation, and sale coordination with the care the situation requires.`,
    military: `Executors in military-connected communities like {city} may be managing estate property while also navigating service-related obligations. Real Property Planning provides efficient, clear guidance that works within the executor's timeline and circumstances.`,
    rural: `Estate properties in rural areas like {city} often include features that complicate the executor's job — acreage, outbuildings, deferred maintenance, or systems that need inspection. Real Property Planning helps executors assess, prepare, and sell rural estate property with locally grounded expertise.`,
  },
  "attorney-fiduciary-support": {
    premium: `Attorneys and fiduciaries working with property in {city}'s premium market need a real estate partner who understands both the financial stakes and the professional standards involved. Real Property Planning works with legal professionals in {city} to provide defensible pricing, clear documentation, and responsive communication throughout the engagement.`,
    urban: `In {city}'s diverse urban market, attorneys and fiduciaries need a broker who can handle a wide range of property types and neighborhood contexts. Real Property Planning provides experienced support for legal professionals managing estate, trust, and guardianship property matters across {city}.`,
    suburban: `Legal professionals referring clients with property in {city} need a broker who communicates clearly, prices accurately, and follows through. Real Property Planning works with attorneys and fiduciaries in {city} as a reliable partner for estate, trust, and transition-related property matters.`,
    waterfront: `Waterfront property valuations in {city} require more than standard market comparisons. Real Property Planning provides attorneys and fiduciaries with condition-based assessments that account for the specific factors that drive value in waterfront and water-influenced markets.`,
    smalltown: `In a community like {city}, the relationship between legal professionals and their real estate partners matters. Real Property Planning provides attorneys and fiduciaries with dependable, locally informed guidance — the kind of support that earns ongoing referrals.`,
    military: `Attorneys serving military families in {city} need a real estate resource who understands PCS timelines, VA considerations, and the practical realities of service-connected property transitions. Real Property Planning provides clear, professional support for these situations.`,
    rural: `Rural property matters in {city} often involve unique characteristics — acreage, easements, water rights, or mixed-use zoning. Real Property Planning provides attorneys and fiduciaries with the property-specific analysis that rural markets require.`,
  },
  "valuation-guidance": {
    premium: `In {city}'s premium market, accurate valuation is the foundation of sound property decisions. Whether for estate settlement, trust administration, or pre-listing strategy, Real Property Planning provides valuation insight grounded in David Stein's dual credentials as a licensed broker and state-certified appraiser.`,
    urban: `Property values in {city} can vary dramatically from block to block. Real Property Planning provides condition-based valuation guidance that reflects {city}'s neighborhood-level market dynamics — not citywide averages or automated estimates.`,
    suburban: `For families and professionals in {city} who need a clear understanding of what a property is worth, Real Property Planning provides valuation guidance based on actual condition, comparable sales, and realistic market positioning — not automated tools that miss the details that matter.`,
    waterfront: `Waterfront and water-view properties in {city} are notoriously difficult to value with automated tools. Real Property Planning provides hands-on valuation guidance that accounts for view quality, waterfront access, marine exposure, and the specific buyer expectations of {city}'s market.`,
    smalltown: `In {city}'s smaller market, comparable sales may be limited and property characteristics can vary widely. Real Property Planning provides honest, condition-based valuation guidance that reflects the realities of {city}'s specific market — not a one-size-fits-all estimate.`,
    military: `Property valuations in military-connected communities like {city} are influenced by base proximity, PCS cycles, and VA-related buyer activity. Real Property Planning accounts for these local dynamics to provide accurate, defensible valuation guidance.`,
    rural: `Rural properties in {city} often have features — acreage, outbuildings, well/septic systems, or mixed-use potential — that automated valuation tools cannot evaluate. Real Property Planning provides in-person, condition-based assessment for properties that require local expertise.`,
  },
  "preparing-home-for-sale": {
    premium: `In {city}'s premium market, property presentation can significantly affect final sale price. Real Property Planning helps homeowners, executors, and families determine which preparations are worth the investment — balancing cost against realistic return in {city}'s competitive buyer environment.`,
    urban: `Preparing an estate or transition property for sale in {city}'s urban market often involves managing cleanout, vendor coordination, and presentation strategy across different property types. Real Property Planning handles the logistics so sellers can focus on the bigger picture.`,
    suburban: `Many homes in {city} need practical preparation before listing — cleanout of decades of belongings, minor repairs, or cosmetic updates. Real Property Planning helps families and executors in {city} make smart preparation decisions based on which improvements actually affect the sale outcome.`,
    waterfront: `Waterfront properties in {city} may require specialized preparation — addressing marine exposure, moisture concerns, or presentation that highlights water views and access. Real Property Planning coordinates preparation strategy that accounts for {city}'s waterfront buyer expectations.`,
    smalltown: `In {city}, preparing a longtime family home for sale is often more than a logistics challenge — it's personal. Real Property Planning provides practical guidance on what preparation makes sense, coordinating vendors and managing the process with care and efficiency.`,
    military: `Preparing a home for sale during a military transition in {city} often needs to happen on a compressed timeline. Real Property Planning provides efficient preparation coordination — cleanout, repairs, and presentation strategy managed within the seller's schedule.`,
    rural: `Rural properties in {city} may need preparation that goes beyond standard residential concerns — outbuilding maintenance, land clearing, septic inspection, or well certification. Real Property Planning coordinates all aspects of rural property preparation.`,
  },
  "divorce-related-home-sales": {
    premium: `Divorce-related property sales in {city} often involve homes with significant value, making accurate pricing essential for a fair settlement. Real Property Planning provides objective, valuation-informed guidance with the discretion and professionalism that {city} clients and their attorneys expect.`,
    urban: `In {city}'s urban market, divorce-related sales can involve a range of property types and complex neighborhood dynamics. Real Property Planning provides neutral, experienced guidance — working with both parties and their attorneys to manage the sale process fairly and efficiently.`,
    suburban: `Divorce-related home sales in {city} benefit from a broker who can remain objective while maintaining clear communication with both parties. Real Property Planning provides condition-based pricing, neutral coordination, and a professional process that reduces friction.`,
    waterfront: `Selling a waterfront property in {city} during a divorce requires specialized valuation — waterfront premiums, view corridors, and marine-related condition factors all affect fair pricing. Real Property Planning provides the objective, defensible guidance this situation demands.`,
    smalltown: `In a community like {city}, divorce-related sales require particular discretion and sensitivity. Real Property Planning provides professional, neutral coordination — honest pricing, clear communication, and a process focused on fair outcomes for both parties.`,
    military: `Divorce-related property sales in military communities like {city} may involve deployment timelines, VA loan considerations, or service-related constraints. Real Property Planning provides practical, neutral guidance that accommodates these realities.`,
    rural: `Rural divorce-related sales in {city} often involve properties with unique characteristics — acreage, outbuildings, or features that complicate standard valuation. Real Property Planning provides objective, property-specific assessment for fair settlement outcomes.`,
  },
  "trust-estate-property-sales": {
    premium: `Trust property sales in {city}'s premium market require transparency, defensible pricing, and clear communication with beneficiaries. Real Property Planning works with trustees and estate attorneys to manage trust-owned property sales in {city} with the professionalism and documentation that fiduciary standards demand.`,
    urban: `Managing trust property in {city}'s urban environment requires a broker who understands both the real estate market and the fiduciary obligations involved. Real Property Planning provides trustees with experienced guidance — from property assessment through closing.`,
    suburban: `For trustees managing property in {city}, the sale process needs to be transparent, well-documented, and defensible. Real Property Planning provides the clear communication and valuation-informed pricing that trust administration requires.`,
    waterfront: `Trust-owned waterfront properties in {city} require specialized valuation that accounts for premium features, limited comparable sales, and the specific documentation standards of trust administration. Real Property Planning provides the expertise trustees need.`,
    smalltown: `In {city}, trust property sales are often handled within a community context where reputation and integrity matter. Real Property Planning provides trustees with professional, well-documented sale coordination that meets fiduciary standards.`,
    military: `Trustees managing trust property in {city}'s military-connected market benefit from a broker who understands the local buyer demographics and can coordinate the sale efficiently within trust administration timelines.`,
    rural: `Trust-owned rural properties in {city} may involve unique features — acreage, outbuildings, easements — that require specialized assessment. Real Property Planning provides trustees with the property-specific evaluation and clear documentation that fiduciary standards require.`,
  },
};

/** Get a deeply varied intro paragraph for city+service pages */
export function getDeepCityServiceIntro(service: ServiceData, cityData: CityData): string {
  // City-specific override layer — eliminates same-tone duplication
  const override = getCityServiceOverride(cityData.slug, service.slug);
  if (override?.intro) {
    return override.intro;
  }
  // Tone-based variation
  const tone = cityData.tone || "suburban";
  const bank = deepIntroBank[service.slug];
  if (bank && bank[tone]) {
    return bank[tone]
      .replace(/\{city\}/g, cityData.name)
      .replace(/\{county\}/g, cityData.county);
  }
  // Fallback to original template
  return getCityServiceIntro(service, cityData);
}

// ─── Deep Scenario Variations ──────────────────────────────────────────
// Service × Tone scenario sets — different bullets for different community types

const deepScenarioBank: Record<string, Partial<Record<CommunityTone, string[]>>> = {
  "probate-estate-sales": {
    premium: [
      "A high-value estate property in {city} where accurate pricing protects significant family assets",
      "Multiple heirs with different perspectives on what the property is worth and when to sell",
      "An estate home in {city} that has appreciated substantially and needs careful market positioning",
      "An out-of-state executor managing a property in an unfamiliar premium market",
      "A trust-to-probate transition where legal and real estate timelines must be coordinated",
    ],
    urban: [
      "A rental property or multi-unit building in {city} that is part of an estate",
      "A condo or townhome in {city} with HOA considerations that affect the estate sale timeline",
      "An estate property in a rapidly changing {city} neighborhood where lot value may exceed structure value",
      "Multiple properties across different {city} neighborhoods that must be sold as part of one estate",
      "A probate attorney who needs a responsive broker familiar with {city}'s market pace",
    ],
    suburban: [
      "A family home in {city} where the owner lived for decades and the property needs updating before sale",
      "Co-heirs who live in different states and need someone local to manage the sale in {city}",
      "An estate property competing against newer construction in a {city} neighborhood",
      "A probate sale in {city} where the court requires property valuation documentation",
      "A family home with accumulated belongings that needs cleanout before the property can be shown",
    ],
    waterfront: [
      "A waterfront estate property in {city} where view premiums and marine-related condition affect value",
      "An inherited home near the water in {city} with deferred maintenance on a waterfront lot",
      "A longtime waterfront home in {city} being sold as part of an estate settlement",
      "A property in {city} where ferry access and seasonal market patterns influence sale timing",
      "An estate property with water views in {city} that automated valuation tools consistently misjudge",
    ],
    smalltown: [
      "A longtime family property in {city} where the community knows the family and discretion matters",
      "An estate property in {city} with a larger lot, older construction, or nonstandard features",
      "An out-of-town executor who needs trusted local coordination for a property in {city}",
      "A family home in {city} where limited comparable sales make pricing more nuanced",
      "A probate property in {city} that needs practical preparation before it can be listed",
    ],
    military: [
      "An estate property in {city} where a service member's family needs efficient sale coordination",
      "A probate sale in {city} complicated by a PCS timeline or deployment obligations",
      "An inherited home near a military installation in {city} with specific buyer demographics",
      "A property in {city} where VA loan eligibility of prospective buyers affects sale strategy",
      "An executor in {city} managing estate property while also navigating service-related responsibilities",
    ],
    rural: [
      "An estate property in {city} with acreage, outbuildings, or agricultural features",
      "A rural home in {city} where well and septic systems require inspection before sale",
      "A property in {city} with limited comparable sales and unique land characteristics",
      "An inherited rural property in {city} where the heirs are unfamiliar with the local market",
      "An estate property in {city} where road access, easements, or zoning affect value",
    ],
  },
  "senior-transitions": {
    premium: [
      "A senior couple in {city} moving from a large estate home to a luxury retirement community",
      "An adult child coordinating a parent's transition from a high-value {city} property",
      "A longtime homeowner in {city} who wants to understand the home's current market value before deciding to sell",
      "A family coordinating the sale of a premium {city} home while also managing care arrangements",
      "A senior in {city} whose home needs strategic preparation to compete in the premium market",
    ],
    suburban: [
      "A parent in {city} whose children have moved away and who is ready for a more manageable home",
      "An adult child helping coordinate a parent's move from a {city} home to assisted living nearby",
      "A longtime homeowner in {city} who needs honest guidance on preparing a well-loved home for sale",
      "A family in {city} coordinating a sale timeline with a move-in date at a senior community",
      "A {city} homeowner who needs help deciding which home improvements are worth doing before listing",
    ],
    waterfront: [
      "A senior leaving a waterfront home in {city} who wants to understand the property's true market value",
      "A family coordinating a parent's move from a water-view property in {city} to a care community",
      "A longtime waterfront homeowner in {city} whose property has specialized maintenance needs before sale",
      "A senior couple in {city} moving closer to family on the mainland after decades on the water",
      "A family managing the sale of a {city} waterfront home with view-driven value considerations",
    ],
    military: [
      "A retired service member in {city} transitioning from the family home to a smaller residence",
      "A military spouse in {city} coordinating a parent's housing transition alongside family obligations",
      "A veteran family in {city} selling the family home after the passing of a service-connected parent",
      "A retired military family in {city} downsizing as part of retirement planning",
      "A family in {city} managing a senior transition while also coordinating VA benefit considerations",
    ],
    rural: [
      "A senior in {city} leaving a rural property with acreage and outbuildings that need assessment",
      "A family coordinating a parent's move from a remote {city} property to care closer to services",
      "A rural homeowner in {city} whose property has deferred maintenance on land-related systems",
      "A longtime {city} property where the land and structures must be evaluated separately",
      "A senior in {city} who needs help coordinating the sale of a property with unique rural features",
    ],
    smalltown: [
      "A senior in {city} who has lived in the same home for decades and is ready for a smaller space",
      "A family in {city} helping a parent transition while maintaining community connections",
      "A longtime {city} homeowner who needs practical guidance on property preparation",
      "A senior in {city} whose home has sentimental value and whose family wants the sale handled with care",
      "A {city} family coordinating the sale with a transition to senior living in a nearby community",
    ],
  },
  "downsizing-services": {
    premium: [
      "A homeowner in {city} whose children have moved out and whose home has appreciated significantly",
      "A couple in {city} planning a move to a luxury retirement community and needing to maximize sale proceeds",
      "A longtime homeowner in {city} uncertain about the true value of a home they've owned for decades",
      "A {city} homeowner weighing whether to renovate or sell and move to something more manageable",
      "A family coordinating a parent's downsizing from a large {city} estate to a smaller residence",
    ],
    urban: [
      "A homeowner in {city} moving from a single-family home to a condo or townhome in a different neighborhood",
      "A couple downsizing in {city} who need to coordinate the sale with a tight timeline for their new residence",
      "A {city} homeowner in a rapidly appreciating neighborhood uncertain about pricing strategy",
      "A long-term {city} resident ready to simplify but overwhelmed by the logistics of selling and moving",
      "A homeowner in {city} whose property has rental potential or ADU value that complicates the sale decision",
    ],
    suburban: [
      "A family in {city} whose children have moved away and who no longer need a four-bedroom home",
      "A retired couple in {city} ready to move closer to grandchildren or to a retirement community",
      "A {city} homeowner who has maintained the same home for 25+ years and needs honest pricing guidance",
      "A homeowner in {city} unsure which updates would actually improve the sale price before listing",
      "A family coordinating a move from {city} to a smaller home or senior-friendly community nearby",
    ],
    waterfront: [
      "A homeowner leaving a waterfront property in {city} who wants to understand the true premium their location commands",
      "A couple downsizing from a water-view home in {city} after decades of ownership",
      "A {city} waterfront homeowner whose property has specialized maintenance that buyers will scrutinize",
      "A family moving from a larger waterfront home in {city} to a more manageable property nearby",
      "A {city} homeowner whose waterfront lot characteristics make automated pricing unreliable",
    ],
    smalltown: [
      "A longtime homeowner in {city} ready to move to a smaller, more manageable property",
      "A retired couple in {city} simplifying their living situation after years in the same home",
      "A {city} homeowner who needs honest guidance on a home with sentimental value and practical needs",
      "A family helping a parent in {city} plan a move to a more accessible living arrangement",
      "A homeowner in {city} whose property has unique features that complicate standard pricing",
    ],
    military: [
      "A retiring service member in {city} downsizing from a family home near base",
      "A military family in {city} transitioning to civilian life and moving to a different region",
      "A veteran couple in {city} ready to simplify after years of service-related relocations",
      "A military spouse in {city} coordinating a downsizing move while managing family logistics",
      "A {city} homeowner near a military installation whose buyer pool has specific characteristics",
    ],
    rural: [
      "A homeowner in {city} leaving a larger rural property with acreage and outbuildings",
      "A retired couple in {city} moving from a rural home to something closer to services and family",
      "A {city} property owner whose rural lot features make standard pricing models unreliable",
      "A family coordinating a parent's move from a rural {city} property to a more accessible home",
      "A homeowner in {city} with a property that includes land, well/septic, or agricultural features",
    ],
  },
  "executor-support": {
    premium: [
      "A newly appointed executor managing a high-value estate property in {city}",
      "An out-of-state executor responsible for a premium {city} property who needs trusted local coordination",
      "Co-executors in {city} who need a neutral real estate professional to guide the sale objectively",
      "An executor who needs defensible valuation documentation for beneficiaries and the court",
      "A {city} estate where the property has appreciated substantially and pricing accuracy carries high stakes",
    ],
    urban: [
      "An executor in {city} managing a property in an unfamiliar neighborhood with complex market dynamics",
      "An out-of-state executor responsible for a {city} property who needs end-to-end local management",
      "An executor handling multiple property types in {city} — a home, a condo, or a rental unit — as part of one estate",
      "A {city} executor who needs clear communication and documentation for multiple beneficiaries",
      "An executor dealing with a {city} property that has tenant, zoning, or lot-value considerations",
    ],
    suburban: [
      "A first-time executor in {city} unsure of the steps involved in selling estate property",
      "An executor managing a longtime family home in {city} that needs cleanout and preparation before sale",
      "Co-executors who disagree on timing or pricing and need a neutral {city} broker to advise",
      "An out-of-area executor who needs reliable local coordination for a {city} property",
      "An executor in {city} whose estate property competes against newer construction in the neighborhood",
    ],
    waterfront: [
      "An executor managing a waterfront estate property in {city} with view-driven valuation complexity",
      "An out-of-state executor responsible for a water-view home in {city} with specialized maintenance needs",
      "An executor in {city} navigating a probate timeline alongside seasonal waterfront market dynamics",
      "Co-executors who need objective valuation guidance for a waterfront property in {city}",
      "An executor whose {city} waterfront estate property requires hands-on assessment rather than automated pricing",
    ],
    smalltown: [
      "An executor in {city} managing a property in a community where the family is well-known",
      "An out-of-town executor who needs someone local and trustworthy to manage the sale in {city}",
      "An executor dealing with a {city} property that has a larger lot, older construction, or nonstandard features",
      "A first-time executor in {city} who needs clear, step-by-step guidance through the sale process",
      "An executor in {city} where limited local market activity makes pricing more nuanced",
    ],
    military: [
      "An executor in {city} balancing estate responsibilities with active service obligations",
      "A military family executor managing a property near a {city} installation with specific buyer demographics",
      "An executor handling a {city} estate sale on a compressed timeline due to service-related constraints",
      "Co-executors in {city} who need efficient, clear coordination from a locally experienced broker",
      "An executor whose {city} property may attract VA-eligible buyers with specific financing considerations",
    ],
    rural: [
      "An executor managing a rural estate property in {city} with acreage, outbuildings, or land features",
      "An out-of-area executor responsible for a {city} property with well/septic systems that need inspection",
      "An executor in {city} where limited comparable sales make professional valuation essential",
      "An executor dealing with a rural {city} property that has access, easement, or zoning considerations",
      "A first-time executor managing a property in {city}'s rural market with unfamiliar local dynamics",
    ],
  },
  "attorney-fiduciary-support": {
    premium: [
      "A probate attorney in {city} whose client's estate includes a high-value residential property",
      "A trustee managing trust-owned property in {city}'s premium market who needs defensible pricing",
      "An estate planning attorney in {city} advising a client on property disposition strategy",
      "A fiduciary in {city} who needs documentation that meets court and beneficiary standards",
      "A family law attorney handling a {city} divorce involving significant real property assets",
    ],
    urban: [
      "A probate attorney in {city} who needs a responsive broker familiar with the city's diverse neighborhoods",
      "A trustee managing urban property in {city} — condo, townhome, or single-family — who needs market-specific guidance",
      "An elder law attorney in {city} coordinating a client's property transition alongside care planning",
      "A guardian managing a {city} property where tenant or rental considerations affect the sale approach",
      "A family law attorney who needs objective pricing for a {city} property in a contested proceeding",
    ],
    suburban: [
      "A probate attorney in {city} who needs a communicative, reliable broker for an estate property matter",
      "A trustee in {city} responsible for selling a trust-held home in a competitive suburban market",
      "An estate planning attorney in {city} who refers clients and needs a partner they can count on",
      "A fiduciary managing a {city} property where family dynamics require neutral, professional coordination",
      "An attorney in {city} who needs clear documentation and defensible pricing for legal proceedings",
    ],
    waterfront: [
      "A probate attorney managing an estate that includes waterfront property in {city} requiring specialized valuation",
      "A trustee in {city} responsible for a water-view property where automated pricing tools consistently miss the mark",
      "An attorney in {city} who needs defensible waterfront property valuation for court proceedings",
      "A fiduciary managing waterfront property in {city} where seasonal market timing affects sale strategy",
      "An elder law attorney in {city} coordinating a waterfront property sale alongside a client's care transition",
    ],
    smalltown: [
      "A local attorney in {city} who values a dependable, communicative real estate partner for client referrals",
      "A trustee managing property in {city}'s smaller market where discretion and local knowledge matter",
      "An estate attorney in {city} whose client's property has nonstandard features that complicate valuation",
      "A fiduciary in {city} who needs steady, professional coordination on a property with personal significance",
      "An attorney in {city} managing a property matter where the community context adds sensitivity",
    ],
    military: [
      "An attorney in {city} serving military families who need efficient real estate coordination",
      "A trustee managing property near a {city} military installation with specific buyer demographics",
      "A JAG-referred matter in {city} involving property disposition during or after service",
      "A family law attorney handling a {city} case involving military service members and shared property",
      "A fiduciary in {city} whose timeline is constrained by service-related obligations",
    ],
    rural: [
      "An attorney in {city} managing estate or trust property with rural characteristics — acreage, outbuildings, or easements",
      "A trustee responsible for a rural property in {city} where limited comparable sales make valuation complex",
      "An estate attorney in {city} whose client's property has water rights, zoning, or access considerations",
      "A fiduciary in {city} managing rural property that requires on-the-ground evaluation rather than desk-based analysis",
      "An attorney in {city} who needs a broker experienced with the practical realities of selling rural property",
    ],
  },
  "valuation-guidance": {
    premium: [
      "An estate in {city} where beneficiaries need a defensible opinion of value for a high-value property",
      "A trustee in {city} requiring accurate valuation to support trust distribution or sale decisions",
      "A {city} homeowner considering a sale who wants a clear, condition-based assessment before listing",
      "An attorney in {city} who needs reliable valuation support for proceedings involving premium property",
      "A family in {city} navigating a property decision where multiple parties need to agree on value",
    ],
    urban: [
      "An estate in {city} with a property in a rapidly changing neighborhood where value depends on highest-and-best use",
      "A trustee needing valuation guidance for an urban property in {city} with rental income or development potential",
      "A {city} homeowner who wants to understand the gap between automated estimates and actual condition-based value",
      "An attorney in {city} who needs neighborhood-specific valuation insight for legal proceedings",
      "A family in {city} where the property's lot value, ADU potential, or zoning affect its true worth",
    ],
    suburban: [
      "An estate in {city} where the family home needs a realistic assessment that accounts for age and condition",
      "A trustee managing a suburban property in {city} where automated tools may overstate value given deferred maintenance",
      "A homeowner in {city} seeking honest pricing guidance before committing to repairs or updates",
      "An attorney in {city} who needs a clear, defensible property assessment for estate or family proceedings",
      "A family in {city} where siblings disagree about what a property is actually worth",
    ],
    waterfront: [
      "A waterfront property in {city} where view quality, shoreline access, and marine exposure all affect value",
      "A trust or estate in {city} requiring valuation of a water-view property that automated tools consistently misjudge",
      "A homeowner in {city} considering selling a waterfront home who needs to understand the real premium their location commands",
      "An attorney in {city} managing a proceeding where waterfront property valuation is central to the case",
      "A family in {city} where a waterfront property's unique characteristics make fair-market value difficult to determine",
    ],
    smalltown: [
      "An estate in {city} where limited comparable sales make professional valuation especially important",
      "A trustee managing property in {city}'s smaller market where property characteristics vary widely",
      "A homeowner in {city} who wants an honest assessment that reflects the local market — not a national algorithm",
      "An attorney in {city} who needs reliable, locally grounded valuation support for proceedings",
      "A family in {city} where the property has unique features — lot size, age, or condition — that affect value",
    ],
    military: [
      "An estate near a {city} military installation where buyer demographics affect realistic property value",
      "A trustee managing property in {city} where PCS cycles and VA buyer activity influence market demand",
      "A homeowner in {city} preparing to sell who needs valuation that accounts for military-market factors",
      "An attorney in {city} who needs defensible valuation for proceedings involving a military family's property",
      "A family in {city} where base proximity and buyer pool characteristics affect what the property is actually worth",
    ],
    rural: [
      "A rural property in {city} with acreage, outbuildings, or agricultural features that standard tools can't evaluate",
      "An estate in {city} where the property includes well/septic systems, easements, or road access limitations that affect value",
      "A homeowner in {city} whose rural property characteristics make online estimates particularly unreliable",
      "An attorney in {city} who needs on-the-ground valuation support for a property with unique rural features",
      "A family in {city} where the land itself — not just the structure — represents a meaningful portion of total value",
    ],
  },
  "preparing-home-for-sale": {
    premium: [
      "An estate property in {city} where strategic preparation could significantly affect the sale price in this premium market",
      "A {city} home with dated finishes where the family needs guidance on which upgrades deliver real return",
      "A high-value property in {city} that needs staging and presentation strategy aligned with buyer expectations",
      "An inherited home in {city} with decades of accumulation that requires professional cleanout coordination",
      "A trust-owned property in {city} where the trustee needs cost-effective preparation recommendations",
    ],
    urban: [
      "An estate property in {city} that needs cleanout, repairs, and preparation across a complex urban logistics environment",
      "A {city} home where tenant history or rental use has created specific preparation requirements",
      "A property in {city} where the highest value may be as a lot or redevelopment site — affecting preparation strategy",
      "A {city} condo or townhome estate property with HOA-specific preparation considerations",
      "An inherited home in {city} where the property needs practical, budget-conscious preparation to compete in a fast market",
    ],
    suburban: [
      "A longtime family home in {city} with decades of belongings that need sorting, donation, and removal",
      "A {city} property where dated kitchens, bathrooms, or flooring raise questions about pre-sale investment",
      "An estate property in {city} competing against recently updated homes in the same neighborhood",
      "An inherited home in {city} where the family lives out of area and needs local preparation management",
      "A {city} property where deferred maintenance — roof, furnace, paint — needs assessment before listing",
    ],
    waterfront: [
      "A waterfront property in {city} with marine exposure wear, dock maintenance, or bulkhead concerns",
      "A water-view home in {city} where presentation strategy should highlight views and waterfront access",
      "A longtime waterfront home in {city} with moisture-related maintenance needs that buyers will inspect",
      "An inherited waterfront property in {city} needing coordination of specialized vendors for coastal preparation",
      "A {city} waterfront home where landscaping, deck condition, and access paths affect buyer first impressions",
    ],
    smalltown: [
      "A family home in {city} where decades of ownership means significant cleanout before the property can be shown",
      "A {city} property where the family needs practical guidance on which repairs matter in this local market",
      "An inherited home in {city} that needs honest assessment of what preparation is worth the investment",
      "A property in {city} with unique features — older construction, larger lot — that require thoughtful preparation",
      "A {city} home where the family wants the preparation handled with care given the home's personal significance",
    ],
    military: [
      "A property in {city} that needs quick, efficient preparation due to a compressed military timeline",
      "A {city} home near base that needs preparation aligned with the expectations of military and VA buyers",
      "An estate property in {city} where the executor has limited availability due to service obligations",
      "A home in {city} that has been tenant-occupied and needs transition preparation before listing",
      "A {city} property where practical, efficient preparation is more important than cosmetic perfection",
    ],
    rural: [
      "A rural property in {city} where preparation extends to outbuildings, land, and site access",
      "An estate property in {city} that needs septic inspection, well testing, or land assessment before listing",
      "A {city} property where overgrown landscaping, deferred land maintenance, or fencing needs attention",
      "A rural home in {city} where cleanout includes shop buildings, storage structures, or agricultural equipment",
      "A {city} property where preparation must account for buyer expectations about rural infrastructure and systems",
    ],
  },
  "divorce-related-home-sales": {
    premium: [
      "A divorcing couple in {city} whose home has appreciated significantly and accurate pricing is essential for fair settlement",
      "A family law attorney in {city} who needs a neutral broker with defensible valuation credentials for a high-value property",
      "A {city} property where both parties disagree on value and need objective, appraisal-informed guidance",
      "A high-value marital home in {city} where discretion and professional handling are paramount",
      "A divorce proceeding in {city} where the property sale needs careful coordination with legal timelines",
    ],
    urban: [
      "A divorcing couple in {city} selling a home in a neighborhood with complex, rapidly shifting market dynamics",
      "A family law attorney in {city} managing a case involving a condo, townhome, or mixed-use property",
      "A {city} divorce where the property has rental income or ADU considerations that affect valuation",
      "A contested property value in {city} where neighborhood-level market data is needed for settlement discussions",
      "A {city} divorce sale where both parties need a broker who can remain neutral and professional under pressure",
    ],
    suburban: [
      "A divorcing couple in {city} who need to sell the family home as part of their settlement agreement",
      "A family law attorney in {city} seeking a broker who can provide objective guidance without taking sides",
      "A marital property in {city} where one party believes the home is worth more than the market supports",
      "A {city} divorce where the sale timeline needs to align with school-year considerations or custody arrangements",
      "A contested home sale in {city} where clear documentation and defensible pricing reduce friction",
    ],
    waterfront: [
      "A divorcing couple in {city} whose waterfront property has view-driven premiums that complicate fair pricing",
      "A family law attorney needing a broker who can provide defensible valuation for a waterfront property in {city}",
      "A waterfront marital home in {city} where both parties have different opinions on the water premium's value",
      "A {city} divorce sale where waterfront-specific conditions and seasonal timing affect sale strategy",
      "A contested waterfront property in {city} requiring objective assessment from a broker with appraisal credentials",
    ],
    smalltown: [
      "A divorcing couple in {city} who need a discreet, professional sale process in a community where privacy matters",
      "A family law attorney in {city} seeking a neutral broker who can handle the local sensitivities of a small-community divorce",
      "A marital property in {city} with limited comparable sales that makes fair pricing more challenging",
      "A {city} divorce where both parties want the sale handled respectfully and without unnecessary public attention",
      "A contested property in {city} where the broker's objectivity and community reputation carry additional weight",
    ],
    military: [
      "A military divorce in {city} where PCS orders, deployment, or service timelines affect the sale process",
      "A family law attorney handling a {city} case involving military BAH considerations and property value",
      "A marital home near a {city} installation where VA loan assumptions or buyer eligibility affect strategy",
      "A {city} military divorce where one party is deployed and the sale must proceed with power-of-attorney coordination",
      "A property in {city} where both parties are service members and need efficient, clear coordination",
    ],
    rural: [
      "A divorcing couple in {city} whose rural property includes acreage, outbuildings, or mixed-use elements that complicate valuation",
      "A family law attorney in {city} managing a case where rural property characteristics affect fair-market determination",
      "A marital property in {city} with well/septic, easements, or road access issues that both parties need to understand",
      "A {city} divorce where the rural property's land value represents a significant portion of the total asset",
      "A contested rural property in {city} where on-the-ground evaluation is essential for fair settlement terms",
    ],
  },
  "trust-estate-property-sales": {
    premium: [
      "A successor trustee in {city} managing a high-value trust property where pricing accuracy protects beneficiary interests",
      "A trust-owned home in {city}'s premium market that requires fiduciary-appropriate documentation and sale coordination",
      "A corporate trustee managing property in {city} who needs a locally knowledgeable real estate partner",
      "Beneficiaries of a {city} trust who need transparent communication about the property's value and sale process",
      "An estate planning attorney in {city} advising on trust property disposition strategy for a premium asset",
    ],
    urban: [
      "A successor trustee managing trust property in {city} across multiple neighborhoods with different market dynamics",
      "A trust-owned condo or townhome in {city} with HOA considerations that affect the sale timeline and process",
      "A corporate trustee in {city} who needs efficient, well-documented sale coordination in a fast-paced urban market",
      "Beneficiaries dispersed across different states who need clear updates on a {city} trust property sale",
      "A trust property in {city} where lot value, rental history, or redevelopment potential must be factored into the sale approach",
    ],
    suburban: [
      "A successor trustee in {city} who has recently assumed responsibility and needs step-by-step guidance",
      "A trust-owned family home in {city} that requires preparation, pricing, and coordination on the trustee's behalf",
      "A trustee managing a {city} property where multiple beneficiaries have different expectations about timing and price",
      "A trust property in {city} competing with updated homes where strategic preparation may improve the sale outcome",
      "An estate planning attorney in {city} who needs a reliable broker partner for trust property referrals",
    ],
    waterfront: [
      "A trustee managing a waterfront trust property in {city} where specialized valuation is essential for fiduciary compliance",
      "A trust-owned water-view home in {city} requiring assessment of waterfront premiums, condition, and seasonal timing",
      "Beneficiaries of a {city} trust who need transparent, defensible pricing for a waterfront property they've never visited",
      "A successor trustee in {city} navigating the sale of a waterfront property with specialized maintenance requirements",
      "A trust property on the water in {city} where automated pricing tools consistently miss the property's true value",
    ],
    smalltown: [
      "A successor trustee in {city} managing a property in a community where trust and reputation matter",
      "A trust-owned home in {city} where the family's connection to the community adds personal significance to the sale",
      "A trustee in {city} managing property with limited comparable sales who needs condition-based valuation guidance",
      "An attorney in {city} advising a trustee who needs a dependable local broker for a trust property matter",
      "A trust property in {city} with nonstandard features that require hands-on assessment for fair market pricing",
    ],
    military: [
      "A trustee managing trust property in {city} where military buyer demographics influence the realistic buyer pool",
      "A trust-owned home near a {city} installation where PCS cycles affect market timing and buyer interest",
      "A successor trustee in {city} balancing trust administration with service-related time constraints",
      "A trust property in {city} where VA-eligible buyer considerations affect sale strategy and pricing",
      "An attorney advising a military-connected trustee in {city} who needs efficient, professional real estate coordination",
    ],
    rural: [
      "A trustee managing a rural trust property in {city} with acreage, outbuildings, or agricultural features",
      "A trust-owned property in {city} where well/septic, easements, or road access affect both value and sale logistics",
      "A successor trustee responsible for rural property in {city} who needs on-the-ground assessment and local market guidance",
      "Beneficiaries of a {city} trust whose rural property requires specialized evaluation beyond standard residential comparisons",
      "A trust property in {city} where the land characteristics represent a significant portion of the total asset value",
    ],
  },
};

/** Get deeply varied scenarios for city+service pages */
export function getDeepCityServiceScenarios(cityName: string, serviceName: string, serviceSlug: string, tone?: CommunityTone, citySlug?: string): string[] {
  // City-specific override layer
  if (citySlug) {
    const override = getCityServiceOverride(citySlug, serviceSlug);
    if (override?.scenarios) return override.scenarios;
  }
  const effectiveTone = tone || "suburban";
  const serviceBank = deepScenarioBank[serviceSlug];
  if (serviceBank) {
    const toneScenarios = serviceBank[effectiveTone];
    if (toneScenarios) {
      return toneScenarios.map(s => s.replace(/\{city\}/g, cityName));
    }
  }
  // Fallback to original system
  return getCityServiceScenarios(cityName, serviceName, serviceSlug);
}

// ─── Deep How-We-Help Variations ───────────────────────────────────────

const deepHowWeHelpBank: Record<string, Partial<Record<CommunityTone, string[]>>> = {
  "probate-estate-sales": {
    premium: [
      "Condition-based valuation that accounts for the premium market positioning of {city} properties",
      "Coordination with the probate attorney on court timelines and documentation requirements",
      "Management of high-end property preparation — staging, vendor coordination, and presentation strategy",
      "Clear communication with multiple heirs, attorneys, and financial professionals involved in the estate",
      "Strategic market positioning that reflects actual condition rather than automated high-end estimates",
      "Full-service transaction management from initial consultation through closing",
    ],
    urban: [
      "Neighborhood-level pricing analysis — not citywide averages — for the estate property in {city}",
      "Coordination with the probate attorney and court on required timelines and sale procedures",
      "Assessment of whether the property's highest value is as a residence, a lot, or a redevelopment opportunity",
      "Management of cleanout, preparation, and vendor coordination for occupied or accumulated properties",
      "Clear reporting to executors, co-heirs, and attorneys with regular status updates",
      "Transaction management across the full sale process in {city}'s pace of market",
    ],
    suburban: [
      "Honest assessment of what the home is worth in its current condition in {city}'s market",
      "Guidance on which repairs and updates will actually affect the sale price versus which to skip",
      "Coordination of property cleanout, preparation vendors, and staging if appropriate",
      "Communication with co-executors, family members, and the estate attorney throughout",
      "Pricing strategy that accounts for competition from newer homes in {city}",
      "Full-service coordination from property assessment through successful closing",
    ],
    waterfront: [
      "Valuation that accounts for waterfront access, view quality, and marine-related condition factors",
      "Coordination with the probate process alongside seasonal waterfront market considerations",
      "Assessment of waterfront-specific maintenance needs — bulkheads, docks, drainage, and exposure",
      "Communication with attorneys, executors, and beneficiaries about waterfront-specific pricing dynamics",
      "Strategic timing recommendations based on waterfront buyer seasonal patterns",
      "Full-service sale management for waterfront estate properties in {city}",
    ],
    military: [
      "Practical property assessment that accounts for {city}'s military-influenced buyer demographics",
      "Coordination with probate proceedings on timelines that accommodate service-related schedules",
      "Management of cleanout and preparation for properties that may have been tenant-occupied",
      "Clear communication with executors who may be balancing estate duties with service obligations",
      "Pricing strategy informed by VA-eligible buyer expectations and local market conditions",
      "Efficient transaction management that respects the executor's time constraints",
    ],
  },
  "senior-transitions": {
    premium: [
      "Thorough property assessment reflecting {city}'s premium market standards and buyer expectations",
      "Strategic preparation recommendations — which investments maximize return in this price range",
      "Sale timeline coordination aligned with the move to a new living arrangement",
      "Sensitive, experienced communication with seniors and their adult children",
      "Vendor coordination for high-standard property presentation and staging",
      "Full-service management of the sale so the family can focus on the transition itself",
    ],
    suburban: [
      "Realistic assessment of the home's value based on its current condition in {city}",
      "Practical guidance on which updates make financial sense before listing",
      "Coordination of cleanout, repairs, and presentation within the family's budget and timeline",
      "Patient communication with seniors and adult children who may have different perspectives",
      "Timeline planning that aligns the sale closing with the move to a new living situation",
      "Referrals to trusted move managers and transition professionals in {city}",
    ],
    waterfront: [
      "Valuation guidance that captures the waterfront premium while reflecting actual property condition",
      "Assessment of waterfront-specific preparation needs before listing in {city}",
      "Coordination with senior living communities regarding move-in timelines and sale proceeds",
      "Understanding of how seasonal buyer patterns affect timing for waterfront homes in {city}",
      "Patient guidance for families navigating an emotional transition from a meaningful waterfront home",
      "Full-service coordination of the sale process alongside the family's transition timeline",
    ],
  },
  "downsizing-services": {
    premium: [
      "Thorough valuation analysis reflecting {city}'s premium market and how condition affects realistic pricing",
      "Guidance on which updates and improvements deliver measurable return in this price range",
      "Coordination of cleanout, sorting, and donation logistics with trusted professionals",
      "Timeline planning that aligns the sale with your move to a new living arrangement",
      "Honest counsel on market timing, pricing strategy, and realistic buyer expectations in {city}",
      "Full-service transaction management so you can focus on your next chapter",
    ],
    urban: [
      "Realistic pricing guidance based on {city}'s neighborhood-level market conditions and your property's actual condition",
      "Assessment of whether your property's lot, location, or ADU potential affects its highest-value strategy",
      "Coordination of cleanout and preparation within urban logistics constraints",
      "Timeline planning that accounts for {city}'s market pace and your move schedule",
      "Clear guidance on which improvements matter in {city}'s competitive environment",
      "Full-service management from preparation through closing",
    ],
    suburban: [
      "Honest, condition-based assessment of what your {city} home is worth in today's market",
      "Practical guidance on which repairs and updates will affect the sale price — and which to skip",
      "Coordination of cleanout, donation, and move logistics with trusted local vendors",
      "Patient communication throughout a process that involves emotional decisions",
      "Timeline coordination so the sale aligns with your move to a new home or community",
      "Referrals to trusted moving companies and transition resources in {city}",
    ],
    waterfront: [
      "Valuation guidance that captures the waterfront premium while honestly reflecting property condition",
      "Assessment of waterfront-specific preparation needs before listing",
      "Coordination with moving and transition resources familiar with waterfront property logistics",
      "Understanding of how seasonal buyer patterns affect timing for waterfront properties in {city}",
      "Guidance on which waterfront-specific improvements are worth the investment before listing",
      "Full-service coordination from initial assessment through closing and transition",
    ],
    smalltown: [
      "Honest assessment of your home's value in {city}'s specific local market",
      "Practical guidance on preparation that makes sense given local buyer expectations",
      "Patient, relationship-oriented coordination throughout the process",
      "Timeline planning that works with your pace and personal priorities",
      "Vendor coordination for cleanout, repairs, and presentation",
      "Steady support from someone who understands {city}'s community and market",
    ],
    military: [
      "Efficient property assessment and pricing guidance that works within your timeline",
      "Coordination of preparation and sale logistics around service-related schedules",
      "Understanding of how military buyer demographics in {city} affect sale strategy",
      "Clear communication and regular updates — no wasted time, no ambiguity",
      "Timeline management that accommodates PCS, retirement, or transition deadlines",
      "Full-service coordination designed for efficiency and clarity",
    ],
    rural: [
      "On-the-ground assessment that accounts for rural property features — acreage, outbuildings, land, and systems",
      "Guidance on rural-specific preparation: well testing, septic inspection, land clearing, and outbuilding maintenance",
      "Realistic pricing based on actual comparable sales and property-specific evaluation",
      "Vendor coordination for rural property preparation and cleanout",
      "Understanding of {city}'s rural buyer pool and what they expect",
      "Practical, hands-on management of the sale from assessment through closing",
    ],
  },
  "executor-support": {
    premium: [
      "Comprehensive property assessment reflecting {city}'s premium market conditions and the estate property's actual condition",
      "Clear guidance on the executor's real estate responsibilities and recommended timeline",
      "Coordination of property preparation, staging, and presentation appropriate for {city}'s buyer expectations",
      "Regular documentation and communication suitable for beneficiary reporting and court records",
      "Defensible pricing rationale supported by appraisal-level property analysis",
      "Full-service management from initial property assessment through closing and distribution coordination",
    ],
    urban: [
      "Neighborhood-level property assessment and pricing strategy for the estate property in {city}",
      "Guidance on whether the property's highest value is as a residence, a lot, or a development opportunity",
      "Coordination of cleanout, preparation, and vendor management in {city}'s urban environment",
      "Regular updates and clear documentation for beneficiaries, attorneys, and the court",
      "Practical logistics management for executors who may not be local to {city}",
      "Full transaction coordination from first contact through closing",
    ],
    suburban: [
      "Honest assessment of the estate property's condition and realistic value in {city}'s suburban market",
      "Step-by-step guidance on the executor's responsibilities related to the property sale",
      "Coordination of cleanout, repairs, and preparation with trusted {city}-area vendors",
      "Clear communication with co-executors, beneficiaries, and the estate attorney",
      "Pricing strategy that accounts for how the property compares to updated homes in {city}",
      "Full-service sale management from assessment through closing and proceeds distribution",
    ],
    waterfront: [
      "Waterfront-specific property assessment that accounts for views, access, marine condition, and seasonal market factors",
      "Clear explanation of how waterfront pricing dynamics in {city} affect the estate property's realistic value",
      "Coordination of specialized preparation for waterfront properties — decks, docks, moisture, landscaping",
      "Communication with attorneys, beneficiaries, and co-executors about waterfront-specific considerations",
      "Strategic timing guidance based on waterfront buyer patterns in {city}",
      "Full-service coordination of the sale process for waterfront estate properties",
    ],
    smalltown: [
      "Respectful, property-specific assessment that reflects {city}'s local market and community context",
      "Clear, patient guidance through each step of the executor's real estate responsibilities",
      "Coordination of cleanout and preparation with local vendors who know {city}",
      "Communication that is honest, regular, and adapted to the executor's experience level",
      "Realistic pricing based on {city}'s specific market activity and comparable sales",
      "Steady, hands-on management of the sale from start to finish",
    ],
    military: [
      "Efficient property assessment and pricing guidance designed for executors with service-related time constraints",
      "Clear documentation that meets both fiduciary standards and military-family expectations",
      "Coordination of property preparation and sale logistics within compressed timelines when needed",
      "Understanding of how {city}'s military buyer demographics affect pricing and marketing strategy",
      "Communication that respects the executor's schedule and service commitments",
      "Full-service coordination that minimizes the executor's logistical burden",
    ],
    rural: [
      "On-the-ground assessment of rural estate property — including acreage, outbuildings, systems, and access",
      "Guidance on rural-specific sale requirements: well/septic inspections, surveys, and easement verification",
      "Realistic pricing based on comparable sales analysis in {city}'s limited rural market",
      "Coordination of rural property preparation — land maintenance, structure assessment, and cleanout",
      "Clear communication with executors who may be unfamiliar with rural property considerations",
      "Full-service management of the rural estate sale from initial assessment through closing",
    ],
  },
  "attorney-fiduciary-support": {
    premium: [
      "Defensible property assessments grounded in certified appraisal methodology for {city}'s premium market",
      "Responsive communication tailored to legal timelines and professional expectations",
      "Pricing documentation suitable for court proceedings, beneficiary review, and fiduciary records",
      "Strategic counsel on property preparation and positioning appropriate for {city}'s competitive environment",
      "Coordination with legal proceedings, court requirements, and settlement negotiations",
      "A consistent, professional point of contact for ongoing property-related matters in {city}",
    ],
    urban: [
      "Neighborhood-specific property analysis across {city}'s diverse urban market",
      "Responsive communication that matches the pace of legal proceedings and client expectations",
      "Assessment of properties with rental, redevelopment, or mixed-use potential",
      "Clear documentation and pricing rationale for legal files and court submissions",
      "Coordination across property types — condos, townhomes, single-family, and multi-unit",
      "A reliable real estate resource for attorneys with ongoing property-related referral needs in {city}",
    ],
    suburban: [
      "Condition-based property assessments reflecting {city}'s specific suburban market dynamics",
      "Clear, professional communication with attorneys, trustees, and their clients",
      "Pricing guidance that accounts for competition from newer or updated properties in {city}",
      "Documentation that meets fiduciary and legal standards for court and beneficiary review",
      "Reliable follow-through — the kind of consistent execution that earns repeat referrals",
      "Full-service coordination managed with the professionalism that legal partners expect",
    ],
    waterfront: [
      "Specialized waterfront property assessments that account for view, access, marine condition, and seasonal demand",
      "Defensible pricing opinions for waterfront properties where standard comparisons fall short",
      "Clear documentation of waterfront-specific valuation factors for legal proceedings",
      "Coordination with legal timelines alongside seasonal waterfront market considerations",
      "Understanding of how {city}'s waterfront market dynamics affect sale strategy and timing",
      "A dependable waterfront-market resource for attorneys with property-related client matters",
    ],
    smalltown: [
      "Locally grounded property assessments that reflect {city}'s specific market and community context",
      "Dependable, communicative partnership built on professional integrity and local knowledge",
      "Realistic pricing guidance in a market where comparable sales may be limited",
      "Sensitive handling of property matters where community visibility adds complexity",
      "Clear documentation that meets fiduciary standards while respecting local relationships",
      "A consistent, trustworthy real estate resource for attorneys practicing in {city}",
    ],
    military: [
      "Efficient property assessments and clear communication that work within service-related timelines",
      "Understanding of military-market factors — VA buyers, PCS timing, and installation-influenced demand",
      "Documentation that supports legal proceedings involving military families and their property",
      "Coordination of property matters that accommodates deployment, transition, and service obligations",
      "Practical guidance on how {city}'s military community characteristics affect property strategy",
      "A reliable partner for attorneys serving military families in {city}",
    ],
    rural: [
      "On-the-ground rural property assessments covering acreage, structures, systems, access, and land features",
      "Clear documentation of rural-specific valuation factors for legal and fiduciary proceedings",
      "Understanding of how easements, water rights, zoning, and road access affect rural property value in {city}",
      "Coordination with attorneys on the practical realities of selling property in rural markets",
      "Realistic comparable sales analysis in {city}'s limited rural transaction environment",
      "A reliable rural-market resource for attorneys and fiduciaries with property matters in {city}",
    ],
  },
  "valuation-guidance": {
    premium: [
      "Condition-based property assessment reflecting {city}'s premium market standards",
      "Valuation insight informed by state-certified appraisal credentials — not automated models",
      "Analysis of how neighborhood positioning, lot characteristics, and views affect value in {city}",
      "Assessment of deferred maintenance impact on premium properties where buyer expectations are high",
      "Clear, defensible valuation documentation suitable for estate, legal, and fiduciary use",
      "Written assessment summaries available for professional and institutional review",
    ],
    urban: [
      "Neighborhood-level valuation analysis — not citywide averages — for properties in {city}",
      "Assessment of highest-and-best-use considerations including lot value, ADU potential, and redevelopment",
      "Condition-based analysis that accounts for the specific factors driving value block by block in {city}",
      "Evaluation of how rental history, tenant status, or income potential affect property value",
      "Defensible pricing guidance for legal proceedings, estate settlements, and fiduciary decisions",
      "Written valuation summaries tailored to the client's specific decision-making needs",
    ],
    suburban: [
      "Honest, condition-based property assessment for homes in {city}'s suburban market",
      "Comparison to relevant recent sales in the property's specific neighborhood — not across the whole city",
      "Assessment of how deferred maintenance, age, and dated finishes affect realistic market value",
      "Guidance on the gap between automated estimates and actual condition-adjusted value",
      "Clear pricing documentation for estate settlements, trust decisions, and family discussions",
      "Written valuation summaries available for professional and family use",
    ],
    waterfront: [
      "Waterfront-specific valuation that accounts for view quality, shoreline access, and marine exposure",
      "Analysis of how waterfront premiums in {city} affect the property versus non-waterfront comparisons",
      "Assessment of marine-related condition factors — docks, bulkheads, drainage, and moisture",
      "Evaluation of seasonal demand patterns and how they affect realistic pricing in {city}",
      "Defensible valuation documentation for waterfront properties where standard comparisons fall short",
      "Written assessment summaries reflecting the specialized factors that drive waterfront value",
    ],
    smalltown: [
      "Honest property assessment grounded in {city}'s specific local market conditions",
      "Analysis using locally relevant comparable sales — not algorithm-generated estimates from distant markets",
      "Assessment of how property-specific features affect value in a market with limited transaction volume",
      "Guidance that accounts for {city}'s unique community characteristics and buyer demographics",
      "Clear valuation documentation suitable for estate, legal, or family decision-making",
      "Written summaries that provide practical, usable pricing guidance for {city} properties",
    ],
    military: [
      "Property assessment that accounts for {city}'s military-influenced buyer demographics and demand patterns",
      "Analysis of how base proximity, PCS cycles, and VA buyer activity affect realistic property value",
      "Evaluation of condition-based factors alongside military-market considerations in {city}",
      "Defensible valuation guidance for estate, divorce, or legal proceedings involving military families",
      "Clear documentation of pricing rationale tailored to the specific decision being made",
      "Written assessments available for legal, fiduciary, and family use",
    ],
    rural: [
      "On-the-ground property assessment that includes land, structures, outbuildings, and rural systems",
      "Valuation analysis that separately evaluates land and improvements for rural properties in {city}",
      "Assessment of how well/septic condition, easements, road access, and zoning affect total property value",
      "Locally grounded comparable sales analysis in {city}'s limited rural transaction environment",
      "Clear documentation of rural-specific valuation factors for legal, estate, or family purposes",
      "Written assessment summaries that capture the unique characteristics of rural property in {city}",
    ],
  },
  "preparing-home-for-sale": {
    premium: [
      "Assessment of which preparations will deliver measurable return in {city}'s premium buyer environment",
      "Coordination of high-standard staging, photography, and presentation strategy",
      "Vendor management for repairs, painting, landscaping, and cosmetic updates aligned with premium expectations",
      "Budget analysis comparing preparation costs against realistic value impact in {city}'s market",
      "Cleanout and sorting coordination — including estate items, accumulated belongings, and specialty disposals",
      "Full coordination of preparation timeline aligned with target listing date and market conditions",
    ],
    urban: [
      "Assessment of preparation priorities for {city}'s pace of market and buyer expectations",
      "Vendor coordination managing repairs, cleanout, and presentation within urban logistics constraints",
      "Guidance on whether the property is best positioned as move-in ready, a renovation opportunity, or a lot sale",
      "Coordination of access, scheduling, and preparation logistics in {city}'s urban environment",
      "Budget-conscious preparation strategy focused on what actually affects sale price in this market",
      "Full preparation management from initial assessment through listing-ready completion",
    ],
    suburban: [
      "Honest assessment of which updates and repairs will affect the sale price in {city}'s neighborhood context",
      "Coordination of cleanout, hauling, and donation services for accumulated belongings",
      "Vendor management for practical repairs — paint, carpet, landscaping, and minor fixtures",
      "Guidance on presentation and staging strategy appropriate for {city}'s buyer expectations",
      "Budget-focused recommendations that avoid unnecessary spending on updates that won't deliver return",
      "Timeline coordination so preparation aligns with listing goals and the family's overall schedule",
    ],
    waterfront: [
      "Assessment of waterfront-specific preparation needs — deck condition, dock maintenance, drainage, and moisture",
      "Presentation strategy that highlights water views, access, and outdoor living spaces",
      "Vendor coordination for specialized waterfront maintenance and cosmetic preparation",
      "Guidance on which waterfront-specific improvements actually affect buyer decisions and sale price",
      "Coordination of preparation logistics for properties with waterfront access challenges",
      "Full preparation management accounting for {city}'s waterfront market buyer expectations",
    ],
    smalltown: [
      "Practical assessment of which repairs and improvements matter most in {city}'s local market",
      "Coordination of cleanout and preparation with trusted local vendors",
      "Honest guidance on what to fix, what to leave, and what buyers in {city} actually care about",
      "Sensitive handling of preparation for homes with personal significance to the family",
      "Budget-conscious approach focused on practical improvements rather than cosmetic perfection",
      "Steady, hands-on management of the preparation process from start to listing-ready",
    ],
    military: [
      "Efficient preparation coordination designed for compressed military timelines",
      "Vendor management focused on practical, impactful improvements — not unnecessary extras",
      "Preparation strategy aligned with {city}'s military and VA buyer expectations",
      "Clear timeline management that accommodates service-related scheduling constraints",
      "Coordination of cleanout and repairs for properties that may have been tenant-occupied",
      "Quick-turnaround preparation management without sacrificing quality",
    ],
    rural: [
      "Assessment of rural preparation needs — outbuildings, land maintenance, septic/well, and access",
      "Coordination of specialized rural vendors for land clearing, fencing, and structure maintenance",
      "Guidance on which rural property features buyers care about and which to deprioritize",
      "Management of preparation logistics for properties with larger lots and multiple structures",
      "Assessment of septic, well, and other rural system conditions that buyers will inspect",
      "Full rural property preparation management from initial assessment through listing-ready status",
    ],
  },
  "divorce-related-home-sales": {
    premium: [
      "Objective, condition-based valuation of the marital property using appraisal-level analysis in {city}",
      "Neutral, professional communication with both parties, their attorneys, and mediators",
      "Defensible pricing documentation suitable for settlement negotiations and court review",
      "Discretion and confidentiality appropriate for high-value divorce proceedings in {city}",
      "Coordination with legal timelines, settlement terms, and court requirements",
      "Full-service sale management that minimizes conflict and friction for both parties",
    ],
    urban: [
      "Objective property assessment using neighborhood-level market data in {city}",
      "Neutral coordination between both parties and their legal teams in a fast-paced market",
      "Assessment of complex property situations — rental income, ADU value, or lot potential",
      "Clear documentation of pricing rationale for settlement discussions",
      "Coordination with legal timelines alongside {city}'s active market dynamics",
      "Professional, efficient transaction management through closing",
    ],
    suburban: [
      "Fair, condition-based property assessment reflecting {city}'s specific suburban market",
      "Neutral communication with both parties — consistent, professional, and without favoritism",
      "Clear documentation of pricing rationale and comparable sales analysis",
      "Coordination of preparation and showing logistics while respecting both parties' needs",
      "Timeline management that aligns the sale with legal settlement requirements",
      "Calm, steady transaction management that reduces unnecessary stress for both sides",
    ],
    waterfront: [
      "Specialized waterfront property valuation that provides defensible, fair pricing in {city}",
      "Objective assessment of waterfront-specific factors — views, access, condition — that affect settlement value",
      "Neutral communication with both parties about waterfront-specific pricing dynamics",
      "Coordination of waterfront property presentation while maintaining fairness to both parties",
      "Clear documentation of how waterfront factors affect the property's fair-market value",
      "Professional sale management for a sensitive waterfront property transaction",
    ],
    smalltown: [
      "Objective valuation in a market where limited sales make fair pricing more nuanced",
      "Discreet, professional handling in a community where privacy may be a particular concern",
      "Neutral communication that maintains both parties' dignity throughout the process",
      "Clear documentation and pricing transparency for settlement discussions",
      "Coordination that is sensitive to the community context while remaining professionally objective",
      "Steady, neutral management of the sale process from assessment through closing",
    ],
    military: [
      "Practical property assessment that accounts for {city}'s military-influenced market dynamics",
      "Coordination that accommodates deployment, PCS, or service-related scheduling constraints",
      "Understanding of military-specific considerations — BAH, VA assumptions, and base-proximity effects on value",
      "Neutral communication between parties who may be in different locations or time zones",
      "Efficient documentation and clear timeline management for service-connected proceedings",
      "Professional, no-friction sale coordination designed for military family realities",
    ],
    rural: [
      "Objective assessment of rural property value — including land, structures, and rural features — for fair settlement",
      "Evaluation of rural-specific factors that affect division discussions — acreage, outbuildings, water rights",
      "Clear documentation of how rural property characteristics contribute to total assessed value",
      "Neutral coordination that accounts for the practical complexities of selling rural property",
      "Comparable sales analysis grounded in {city}'s specific rural market activity",
      "Professional, fair management of the rural property sale through closing",
    ],
  },
  "trust-estate-property-sales": {
    premium: [
      "Fiduciary-grade property assessment reflecting {city}'s premium market conditions and buyer expectations",
      "Documentation and pricing transparency that meets trust administration and court standards",
      "Strategic preparation and presentation recommendations for premium trust-held property",
      "Clear communication with trustees, beneficiaries, estate attorneys, and financial advisors",
      "Defensible pricing rationale supported by certified appraisal methodology",
      "Full-service coordination of the trust property sale from assessment through distribution",
    ],
    urban: [
      "Property assessment tailored to {city}'s diverse urban market — condos, townhomes, single-family, and multifamily",
      "Clear communication with trustees and beneficiaries about neighborhood-specific market dynamics",
      "Documentation and reporting that meets trust administration requirements",
      "Assessment of whether the property's highest value is as a residence, rental, or redevelopment opportunity",
      "Coordination of preparation and sale logistics in {city}'s urban environment",
      "Efficient transaction management from initial assessment through closing and proceeds distribution",
    ],
    suburban: [
      "Condition-based assessment of the trust property's value in {city}'s suburban market",
      "Transparent communication with trustees and beneficiaries throughout the sale process",
      "Guidance on preparation decisions that are appropriate for the trust's budget and timeline",
      "Documentation suitable for trust accounting, beneficiary review, and attorney files",
      "Pricing strategy that accounts for how the property compares to recent sales in {city}",
      "Full-service coordination managed with the consistency that trust administration requires",
    ],
    waterfront: [
      "Specialized waterfront property assessment for trust-owned property in {city}",
      "Valuation guidance that captures waterfront premiums while reflecting actual condition",
      "Documentation of waterfront-specific pricing factors for trust records and beneficiary communication",
      "Coordination of waterfront property preparation — decks, docks, landscaping, and marine condition",
      "Strategic timing recommendations based on {city}'s seasonal waterfront market patterns",
      "Professional sale management that meets fiduciary standards for waterfront trust property",
    ],
    smalltown: [
      "Locally grounded property assessment reflecting {city}'s specific market conditions",
      "Trustworthy, relationship-oriented coordination in a community where reputation matters",
      "Clear documentation and communication that meets fiduciary standards",
      "Realistic pricing guidance in a market where comparable sales may be limited",
      "Respectful handling of a property that may carry personal significance for the family and community",
      "Steady, professional management of the trust property sale from start to finish",
    ],
    military: [
      "Property assessment that accounts for {city}'s military buyer demographics and market timing",
      "Efficient coordination designed for trustees who may have service-related time constraints",
      "Understanding of how VA buyer considerations and PCS cycles affect sale strategy",
      "Clear documentation and communication that meets both trust and military-family expectations",
      "Timeline management that accommodates the practical realities of military-connected trust administration",
      "Full-service coordination that minimizes the trustee's logistical burden",
    ],
    rural: [
      "Comprehensive rural property assessment — land, structures, outbuildings, systems, and access",
      "Documentation of rural-specific factors — acreage, easements, well/septic, zoning — for trust records",
      "Realistic comparable sales analysis in {city}'s limited rural transaction environment",
      "Coordination of rural property preparation and vendor management",
      "Clear communication with trustees and beneficiaries about rural-specific valuation considerations",
      "Full-service management of the rural trust property sale from assessment through closing",
    ],
  },
};

/** Get deeply varied how-we-help bullets for city+service pages */
export function getDeepCityServiceHowWeHelp(cityName: string, serviceSlug: string, tone?: CommunityTone, citySlug?: string): string[] {
  // City-specific override layer
  if (citySlug) {
    const override = getCityServiceOverride(citySlug, serviceSlug);
    if (override?.howWeHelp) return override.howWeHelp;
  }
  const effectiveTone = tone || "suburban";
  const serviceBank = deepHowWeHelpBank[serviceSlug];
  if (serviceBank) {
    const toneHelp = serviceBank[effectiveTone];
    if (toneHelp) {
      return toneHelp.map(s => s.replace(/\{city\}/g, cityName));
    }
  }
  // Fallback to original
  return getCityServiceHowWeHelp(cityName, serviceSlug);
}

// ─── Deep "Why Local Context" — Service-Specific ───────────────────────

const deepWhyLocalBank: Record<string, Partial<Record<CommunityTone, string>>> = {
  "probate-estate-sales": {
    premium: `Probate properties in premium markets like {city} often appear to be worth more than their actual condition supports — or less, if unique features are overlooked. David Stein's on-site evaluation accounts for the specific factors that drive value in {city}: neighborhood positioning, lot characteristics, view quality, and the realistic cost of bringing deferred-maintenance properties to market standard. This is valuation guidance built on local knowledge, not automated assumptions.`,
    urban: `Estate properties in {city} exist within a complex urban market where neighborhood, zoning, and property type all affect value. A probate property in one part of {city} may be best positioned as a renovation opportunity; in another area, it may attract developers. David Stein's familiarity with {city}'s neighborhood-level dynamics allows him to advise executors and attorneys on the most realistic path to a successful sale.`,
    suburban: `In {city}'s suburban market, estate properties often compete against newer construction and recently updated homes. Buyers have expectations shaped by move-in-ready listings, which means a probate property with deferred maintenance or dated finishes needs careful pricing and preparation strategy. David Stein helps families and executors understand how their specific property fits within {city}'s competitive landscape.`,
    waterfront: `Waterfront estate properties in {city} require specialized local knowledge — view premiums, waterfront access quality, marine exposure, and seasonal market patterns all affect how these properties should be priced and presented. Generic comparable sales from non-waterfront areas are unreliable guides. David Stein's appraisal credentials and local experience provide the waterfront-specific insight that estate sales in {city} require.`,
    smalltown: `In {city}'s smaller market, comparable sales may be limited and market timing can matter more than in larger communities. Estate properties here often have unique features — larger lots, older construction, or characteristics that don't fit neatly into automated valuation models. David Stein provides the in-person, condition-based analysis that probate sales in {city}'s market require.`,
    military: `{city}'s real estate market is influenced by military presence — PCS cycles, VA-eligible buyer demographics, and proximity to installations all affect property demand and pricing. For estate sales in {city}, understanding these dynamics helps executors price accurately and reach the right buyer pool. David Stein's local knowledge accounts for the military-market factors that generic pricing tools miss.`,
    rural: `Rural estate properties in {city} often include features that standard market analysis doesn't cover — acreage, outbuildings, septic and well systems, or road access limitations. These characteristics can significantly affect value, and they require on-the-ground evaluation rather than desk-based estimates. David Stein provides the hands-on assessment that rural probate and estate sales in {city} demand.`,
  },
  "senior-transitions": {
    premium: `Senior transition properties in {city} are often well-maintained but may show their age in ways that affect premium-market buyer expectations. Understanding how kitchen vintage, systems age, and cosmetic updates affect value in {city}'s competitive market helps families make smart preparation decisions. David Stein's appraisal background provides the condition-specific insight these decisions require.`,
    urban: `In {city}'s urban environment, a senior selling a longtime home may be leaving a neighborhood that has changed dramatically since they moved in. Understanding how urban redevelopment, shifting demographics, and neighborhood trajectory affect value helps families make informed decisions. David Stein's experience across {city}'s neighborhoods provides the local context these transitions require.`,
    suburban: `In {city}, longtime family homes being sold during a senior transition often have a character that newer homes lack — but they may also need updates to meet current buyer expectations. David Stein helps families understand the balance: which improvements will affect the sale price, which won't, and how to prepare the home in a way that makes financial sense without unnecessary stress or expense.`,
    waterfront: `Waterfront homes in {city} that have been in the same family for years may have specialized maintenance needs — marine exposure wear, dock conditions, or drainage systems — that affect both value and buyer interest. David Stein provides families with a realistic assessment of what these properties are worth and what preparation makes sense given {city}'s waterfront market dynamics.`,
    smalltown: `Senior transitions in {city} are often deeply personal — the family has lived in the same home for decades, and the community knows them. David Stein brings local understanding and patience to these situations, helping families navigate the sale at a pace that works while providing honest guidance on what the home is worth in {city}'s specific market.`,
    military: `In {city}, many senior transitions involve veteran families whose property decisions intersect with retirement planning and military benefit considerations. David Stein's practical, locally grounded approach helps these families understand their property's realistic value and coordinate the sale alongside their broader transition planning.`,
    rural: `Rural senior transitions in {city} often involve properties with features that standard market analysis doesn't address — larger lots, outbuildings, deferred land maintenance, or systems like well and septic that need assessment. David Stein provides the on-the-ground evaluation these properties need, helping families understand the full picture before making decisions.`,
  },
  "downsizing-services": {
    premium: `Homeowners downsizing from premium properties in {city} often face a tension between their home's emotional value and its market value. A home that has been well-loved for decades may not show as well as a recently updated property. David Stein's appraisal perspective helps owners see their home through the market's eyes — understanding exactly where their property stands and which preparation decisions make financial sense.`,
    urban: `Downsizing in {city}'s urban market involves specific considerations — the property's neighborhood trajectory, density changes, transit development, and competition from new construction all influence realistic pricing. David Stein's neighborhood-level market knowledge helps homeowners in {city} make clear-eyed decisions about timing, preparation, and pricing strategy.`,
    suburban: `For suburban homeowners in {city}, downsizing from a family home raises practical questions about value, preparation, and timing. The home may have been a perfect fit for a growing family but now competes against newer, more efficient construction. David Stein helps {city} homeowners understand how condition, age, and neighborhood context affect what their home is actually worth.`,
    waterfront: `Downsizing from a waterfront property in {city} carries unique valuation considerations. The water premium is real, but it depends on specific factors — view quality, access type, shoreline condition — that vary property by property. David Stein's appraisal credentials provide the precise, waterfront-specific analysis that {city} homeowners need for confident pricing decisions.`,
    smalltown: `In {city}, homeowners who have lived in the same home for decades may have a strong sense of their property's value — but the market may see it differently. David Stein provides honest, condition-based guidance that helps homeowners in {city}'s smaller market understand realistic pricing without the uncomfortable surprise that sometimes comes with listing a well-loved but dated home.`,
    military: `Military families downsizing in {city} often have practical, timeline-driven priorities. The sale needs to happen efficiently, pricing needs to be realistic, and the process needs to work within the constraints of a military transition. David Stein's practical approach to valuation and sale coordination aligns well with the no-nonsense expectations of military-connected homeowners.`,
    rural: `Rural downsizing in {city} often means selling a property with characteristics that standard pricing models can't evaluate — acreage, outbuildings, septic systems, or mixed-use potential. David Stein's on-the-ground assessment accounts for the full scope of a rural property's features, providing the honest valuation guidance that {city} homeowners need for this important decision.`,
  },
  "executor-support": {
    premium: `Executors managing property in {city}'s premium market face heightened responsibility — the property's value is often significant, beneficiaries may have strong opinions, and mispricing can have real financial consequences. David Stein's dual credentials as a broker and certified appraiser provide executors with the defensible, property-specific pricing guidance that high-value estate situations require.`,
    urban: `Managing estate property in {city}'s urban market can be complex — the property's neighborhood context, zoning, and condition all affect strategy. An executor may need guidance on whether the property's best use is as a residence, a renovation opportunity, or a lot sale. David Stein's familiarity with {city}'s neighborhood dynamics helps executors make these decisions with confidence.`,
    suburban: `Executors in {city} often manage a home that was the center of family life — well-loved but possibly showing its age. Understanding how that property competes in {city}'s suburban market, where buyers often expect updated or move-in-ready homes, is critical for realistic pricing and smart preparation decisions. David Stein provides this context through condition-based analysis, not guesswork.`,
    waterfront: `Waterfront estate properties in {city} present specific challenges for executors — view premiums, marine condition factors, seasonal market timing, and limited comparable sales all complicate pricing. David Stein's appraisal credentials and waterfront experience help executors navigate these factors with clarity and defensible pricing documentation.`,
    smalltown: `In {city}'s smaller market, executors benefit from working with someone who knows the community and understands the local dynamics. Comparable sales may be limited, and the property may have features that don't fit standard valuation models. David Stein provides the hands-on, locally grounded guidance that executor responsibilities in {city} require.`,
    military: `Executors in {city}'s military-connected market need a broker who understands how base proximity, PCS cycles, and VA buyer demographics affect realistic property demand and pricing. David Stein accounts for these military-market factors to help executors price estate property accurately and reach the right buyer pool efficiently.`,
    rural: `Rural estate properties in {city} often include features that complicate an executor's job — acreage, outbuildings, well/septic systems, easements, or mixed-use zoning. Standard desktop valuations miss these factors. David Stein provides the on-the-ground evaluation that rural estate property in {city} requires for responsible pricing and sale coordination.`,
  },
  "attorney-fiduciary-support": {
    premium: `Attorneys and fiduciaries managing property matters in {city}'s premium market need a real estate partner who provides defensible pricing opinions, not aspirational estimates. David Stein's certified appraisal background produces documentation that withstands court scrutiny and beneficiary challenge — the kind of property-specific analysis that premium estate and trust situations demand.`,
    urban: `Legal professionals with property matters in {city}'s diverse urban market need a broker who can navigate different property types, neighborhood contexts, and market dynamics. David Stein's experience across {city}'s neighborhoods — combined with his appraisal credentials — provides the versatile, defensible real estate support that attorneys and fiduciaries need for their client matters.`,
    suburban: `In {city}'s suburban market, attorneys and fiduciaries need a broker who delivers consistent, reliable service — clear communication, defensible pricing, and professional follow-through on every engagement. David Stein's practice is built on exactly this kind of dependability, which is why legal professionals in {city} refer clients with confidence.`,
    waterfront: `Waterfront property matters in {city} require specialized valuation knowledge that most brokers don't have. View premiums, shoreline access quality, marine condition factors, and seasonal demand patterns all affect defensible pricing. David Stein's appraisal background provides attorneys and fiduciaries with the waterfront-specific analysis these situations require.`,
    smalltown: `In {city}'s smaller market, the relationship between legal professionals and their real estate partners carries weight — both professionally and within the community. David Stein provides the kind of dependable, locally informed service that earns trust over time, handling property matters with the care and discretion that {city}'s community context requires.`,
    military: `Attorneys serving military families in {city} need a real estate partner who understands PCS timelines, VA loan considerations, and the practical realities of military-connected property transitions. David Stein's familiarity with {city}'s military-influenced market dynamics allows him to provide the efficient, knowledgeable support these situations require.`,
    rural: `Rural property matters in {city} often involve characteristics that standard market analysis doesn't address — acreage valuations, easement questions, water rights, septic/well conditions, and access issues. David Stein provides attorneys and fiduciaries with the hands-on, rural-specific property analysis that these matters require for defensible decision-making.`,
  },
  "valuation-guidance": {
    premium: `Accurate valuation in {city}'s premium market requires more than pulling comparable sales — it demands understanding how specific property characteristics interact with premium buyer expectations. David Stein's dual credentials as a broker and certified appraiser provide the granular, condition-based analysis that premium property valuation requires — whether for estate settlement, pre-listing strategy, or fiduciary reporting.`,
    urban: `Property values in {city} can shift dramatically across neighborhoods, blocks, and even individual properties based on lot potential, zoning, and use. David Stein's familiarity with {city}'s urban market allows him to provide valuation guidance that reflects real neighborhood-level dynamics rather than citywide averages or algorithm-generated estimates.`,
    suburban: `Suburban property valuation in {city} often comes down to condition — how a home compares to the recently updated homes that buyers are using as benchmarks. Automated tools frequently overstate value for properties with deferred maintenance or dated finishes. David Stein's appraisal-informed assessment accounts for the gap between algorithm output and actual market reality.`,
    waterfront: `Waterfront valuations in {city} are among the most complex in residential real estate. View quality, shoreline type, access, marine exposure, and dock condition all affect value in ways that automated tools can't capture. David Stein's certified appraisal credentials provide the property-specific analysis that waterfront valuation in {city} demands.`,
    smalltown: `In {city}'s smaller market, valuation guidance needs to account for limited comparable sales and the wide variation in property characteristics. Standard automated tools trained on larger markets often misjudge properties in communities like {city}. David Stein provides locally grounded, condition-based analysis that reflects what properties actually sell for in this specific market.`,
    military: `Property valuation in {city} is influenced by military-market factors that generic tools don't consider — base proximity, PCS-driven demand cycles, and VA buyer expectations all affect what properties are actually worth. David Stein accounts for these dynamics to provide valuation guidance that is both accurate and defensible.`,
    rural: `Rural property valuation in {city} requires on-the-ground assessment — acreage, outbuildings, septic/well systems, road access, and land characteristics all contribute to value in ways that desktop analysis cannot capture. David Stein's hands-on approach provides the property-specific evaluation that rural valuation decisions in {city} require.`,
  },
  "preparing-home-for-sale": {
    premium: `In {city}'s premium market, the gap between an underprepared property and a properly presented one can represent a significant dollar difference. David Stein's appraisal-informed perspective helps owners, executors, and trustees understand which preparations actually affect premium-market buyers' decisions — avoiding both over-investment in cosmetic upgrades and under-investment that leaves value on the table.`,
    urban: `Preparing estate and transition properties for sale in {city}'s urban market often involves navigating access logistics, vendor coordination in dense neighborhoods, and strategic decisions about property positioning. David Stein's experience with {city}'s urban market helps sellers focus preparation efforts where they'll have the most impact on the final outcome.`,
    suburban: `In {city}'s suburban market, preparation strategy is about understanding buyer expectations. Homes competing against recently updated listings need to present well — but not every update delivers return. David Stein helps families and executors in {city} make practical, budget-conscious preparation decisions based on what actually affects sale price in their specific neighborhood.`,
    waterfront: `Waterfront property preparation in {city} extends beyond standard residential concerns — marine exposure wear, deck and dock condition, moisture management, and view presentation all matter to waterfront buyers. David Stein helps sellers understand which waterfront-specific preparations are worth the investment given {city}'s buyer expectations and seasonal market patterns.`,
    smalltown: `Preparing a home for sale in {city} is often deeply personal — the home may have been in the family for decades. David Stein helps families approach preparation practically: which improvements matter in {city}'s local market, which are not worth the investment, and how to manage the cleanout and vendor coordination with care and efficiency.`,
    military: `Preparing a home for sale in {city} on a military timeline requires efficiency and clear priorities. David Stein helps military families and executors focus preparation on the improvements that actually affect sale outcomes — not cosmetic perfection, but practical preparation that positions the property well for {city}'s buyer pool within the available timeframe.`,
    rural: `Rural property preparation in {city} often extends well beyond the house — outbuildings, land maintenance, fencing, well/septic condition, and access paths all need assessment. David Stein coordinates all aspects of rural preparation, helping sellers understand which investments matter and which are not worth the expense given {city}'s rural buyer expectations.`,
  },
  "divorce-related-home-sales": {
    premium: `Divorce-related sales in {city}'s premium market carry high financial stakes — accurate pricing is essential for a fair settlement, and both parties typically want defensible numbers. David Stein's certified appraisal background provides the objective, property-specific analysis that premium divorce sales require — pricing grounded in actual condition and market positioning, not automated estimates that miss critical factors.`,
    urban: `In {city}'s diverse urban market, divorce-related property valuations are complicated by neighborhood dynamics, property type variations, and rapidly shifting market conditions. David Stein's neighborhood-level expertise provides both parties and their attorneys with pricing guidance that reflects the property's specific location and condition — not citywide averages.`,
    suburban: `Divorce-related home sales in {city}'s suburban market require objective guidance from a broker who won't take sides. David Stein provides condition-based pricing that both parties can rely on — grounded in local comparable sales and honest assessment of the property's condition, not emotional attachment or aspirational estimates.`,
    waterfront: `Waterfront divorce sales in {city} are inherently complex — the water premium is real but varies significantly by specific view, access, and condition. Both parties need defensible pricing that accurately reflects these factors. David Stein's appraisal credentials provide the objective, waterfront-specific analysis that fair settlement requires.`,
    smalltown: `Divorce-related property sales in {city} add a layer of community sensitivity. Both parties benefit from a broker who can handle the situation with discretion and professionalism while providing honest, defensible pricing in a market where comparable sales may be limited. David Stein brings that combination of objectivity and local understanding.`,
    military: `Military divorce sales in {city} may involve unique considerations — BAH calculations, PCS timing, VA loan assumptions, and service-related scheduling constraints. David Stein's familiarity with {city}'s military-connected market dynamics helps both parties and their attorneys navigate these factors alongside the standard property sale process.`,
    rural: `Rural divorce sales in {city} often involve properties with features that make standard valuation complicated — acreage, outbuildings, water rights, or mixed-use potential. David Stein's on-the-ground assessment captures these rural-specific factors, providing both parties with the defensible, comprehensive property analysis that fair settlement requires.`,
  },
  "trust-estate-property-sales": {
    premium: `Trust property sales in {city}'s premium market require pricing that meets fiduciary standards — defensible, well-documented, and grounded in actual property analysis. David Stein's dual credentials provide trustees with the professional-grade valuation and sale coordination that premium trust properties require, supporting both sound decision-making and clear beneficiary communication.`,
    urban: `Managing trust property in {city}'s urban market requires understanding how diverse property types, neighborhood dynamics, and market pace affect sale strategy. David Stein's experience across {city}'s neighborhoods helps trustees navigate these considerations while maintaining the documentation and communication standards that trust administration demands.`,
    suburban: `Trust property sales in {city}'s suburban market benefit from a broker who combines reliable execution with transparent pricing documentation. David Stein's approach — condition-based assessment, clear communication, and consistent follow-through — provides the professional partnership that trustees and their attorneys need for fiduciary-appropriate property disposition.`,
    waterfront: `Trust-owned waterfront properties in {city} present specialized valuation challenges — view premiums, marine condition factors, and seasonal market patterns all affect pricing in ways that standard comparisons don't capture. David Stein's appraisal credentials provide the property-specific analysis that waterfront trust property sales require for defensible, fiduciary-appropriate pricing.`,
    smalltown: `Trust property sales in {city}'s smaller market require a broker who combines local market knowledge with the documentation standards that fiduciary responsibilities demand. David Stein provides that combination — locally grounded assessment, clear pricing rationale, and communication that keeps trustees, beneficiaries, and attorneys informed throughout the process.`,
    military: `Trust property in {city}'s military-connected market requires understanding how base proximity, PCS cycles, and VA buyer activity affect realistic pricing and market timing. David Stein accounts for these local dynamics while maintaining the professional documentation and communication standards that trust administration requires.`,
    rural: `Rural trust properties in {city} often include characteristics — acreage, outbuildings, land features, access considerations — that standard market analysis doesn't address. David Stein provides the hands-on evaluation and clear documentation that trustees need for defensible pricing and responsible sale coordination of rural trust-held property.`,
  },
};

/** Get service-specific "Why Local Context Matters" text instead of reusing city-page paragraph */
export function getDeepWhyLocalServiceMatters(cityName: string, countyName: string, serviceSlug: string, cityData?: CityData): string {
  // City-specific override layer
  if (cityData?.slug) {
    const override = getCityServiceOverride(cityData.slug, serviceSlug);
    if (override?.whyLocal) return override.whyLocal;
  }
  const tone = cityData?.tone || "suburban";
  const serviceBank = deepWhyLocalBank[serviceSlug];
  if (serviceBank) {
    const toneText = serviceBank[tone];
    if (toneText) {
      return toneText
        .replace(/\{city\}/g, cityName)
        .replace(/\{county\}/g, countyName);
    }
  }
  // Fallback to generic local knowledge
  return getWhyLocalMatters(cityName, countyName, cityData);
}

// ─── Deep CTA Variations ──────────────────────────────────────────────

const deepCTAHeadings: Record<CommunityTone, string[]> = {
  premium: [
    "Discuss Your {city} Property",
    "Ready to Explore Your Options?",
    "Schedule a Confidential Conversation",
    "Let's Talk About Your {city} Property Goals",
    "Get Trusted Guidance for Your {city} Property",
    "Your {city} Property Deserves Expert Attention",
  ],
  urban: [
    "Let's Talk About Your {city} Property",
    "Get Experienced Guidance in {city}",
    "Start the Conversation",
    "Need Practical Help in {city}?",
    "Ready for Expert Guidance in {city}?",
    "Take the First Step on Your {city} Property",
  ],
  suburban: [
    "Need Help With a Property in {city}?",
    "Ready to Take the Next Step?",
    "Talk With David About Your {city} Home",
    "Get Clear Guidance for Your {city} Property",
    "Let's Talk About Your {city} Property",
    "Your {city} Home Deserves Experienced Guidance",
  ],
  waterfront: [
    "Discuss Your {city} Property",
    "Ready to Talk About Next Steps?",
    "Let's Discuss Your Options",
    "Get Locally Informed Guidance in {city}",
    "Talk With David About Your {city} Home",
    "Ready to Move Forward on Your {city} Property?",
  ],
  smalltown: [
    "Ready to Take the Next Step?",
    "Let's Talk About Your Property",
    "Get in Touch",
    "Ready for Honest, Local Guidance?",
    "Let David Help With Your {city} Property",
    "Take the Next Step With Confidence",
  ],
  military: [
    "Ready to Discuss Your Property?",
    "Let's Get Started",
    "Schedule a Conversation",
    "Get Straightforward Guidance in {city}",
    "Ready to Take Action on Your Property?",
    "Talk With David About Your {city} Home",
  ],
  rural: [
    "Ready to Discuss Your Property?",
    "Let's Talk About Your {city} Property",
    "Get Honest, Local Guidance",
    "Take the Next Step on Your {city} Property",
    "Ready for Grounded, Practical Advice?",
    "Let David Help With Your Property",
  ],
};

const deepCTABodies: Record<CommunityTone, string[]> = {
  premium: [
    "Schedule a confidential consultation to discuss your {city} property, your timeline, and your options.",
    "David Stein provides experienced, discreet guidance for clients and professionals in {city}.",
    "Reach out for a conversation about your property and what the path forward looks like.",
  ],
  urban: [
    "Contact David to discuss your {city} property situation — no obligation, no pressure.",
    "Schedule a consultation to get clear, practical guidance for your property decision.",
    "Reach out to discuss your situation and learn how David can help.",
  ],
  suburban: [
    "David Stein provides clear, experienced guidance for families and professionals in {city}.",
    "Schedule a consultation to discuss your property, your timeline, and your questions.",
    "Contact David for an honest conversation about your {city} property and your options.",
  ],
  waterfront: [
    "Reach out to discuss your {city} waterfront or water-view property and your options.",
    "David Stein provides locally informed guidance for property transitions in {city}.",
    "Schedule a conversation about your property and what the process looks like from here.",
  ],
  smalltown: [
    "Contact David to discuss your situation — no pressure, no obligation.",
    "Reach out for an honest conversation about your property and your options.",
    "David provides steady, experienced guidance for families in {city}.",
  ],
  military: [
    "Schedule a consultation to discuss your property situation and timeline.",
    "David provides clear, practical guidance that works within your schedule.",
    "Contact David to discuss your property — straightforward guidance, no pressure.",
  ],
  rural: [
    "Contact David to discuss your property — honest guidance based on actual property evaluation.",
    "Schedule a consultation to talk about your rural property and your options.",
    "Reach out for practical, locally grounded guidance on your property decision.",
  ],
};

const deepCTAButtons: string[] = [
  "Schedule a Consultation",
  "Get in Touch",
  "Start a Conversation",
  "Request a Consultation",
  "Contact David",
];

/** Deterministically pick a CTA heading variant based on city+service combination */
function hashPick<T>(items: T[], citySlug: string, serviceSlug: string): T {
  let hash = 0;
  const key = `${citySlug}:${serviceSlug}`;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0;
  }
  return items[Math.abs(hash) % items.length];
}

export function getDeepCTAHeading(cityName: string, citySlug: string, serviceSlug: string, tone?: CommunityTone): string {
  const effectiveTone = tone || "suburban";
  const options = deepCTAHeadings[effectiveTone];
  return hashPick(options, citySlug, serviceSlug).replace(/\{city\}/g, cityName);
}

export function getDeepCTABody(cityName: string, citySlug: string, serviceSlug: string, tone?: CommunityTone): string {
  const effectiveTone = tone || "suburban";
  const options = deepCTABodies[effectiveTone];
  return hashPick(options, citySlug, serviceSlug).replace(/\{city\}/g, cityName);
}

export function getDeepCTAButton(citySlug: string, serviceSlug: string): string {
  return hashPick(deepCTAButtons, citySlug, serviceSlug);
}
