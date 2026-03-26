// Central data layer for all counties, cities, and services
// This powers templates, routing, navigation, and internal linking

export interface CityData {
  name: string;
  slug: string;
  county: string;
  countySlug: string;
  /** Short unique descriptor for meta/intro variation */
  descriptor?: string;
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
}

// ─── Services ───────────────────────────────────────────────────────────
export const services: ServiceData[] = [
  {
    name: "Probate & Estate Sales",
    slug: "probate-estate-sales",
    shortName: "Probate & Estate Sales",
    description: "Guiding executors, attorneys, and families through the sale of probate and estate-owned property with valuation expertise and practical coordination.",
    cityIntroTemplate: "Navigating a probate or estate property sale in {city} requires local market knowledge, realistic pricing, and experienced coordination. Real Property Planning provides practical guidance for executors, attorneys, and families managing estate-owned real estate in {city} and throughout {county}.",
  },
  {
    name: "Senior Transitions",
    slug: "senior-transitions",
    shortName: "Senior Transitions",
    description: "Supporting seniors and their families through the sale of a longtime home, including preparation, pricing, and coordinating the transition timeline.",
    cityIntroTemplate: "When a senior or their family is preparing to sell a longtime home in {city}, the process involves much more than listing a property. Real Property Planning helps families in {city} plan and coordinate the transition — from pricing and preparation to vendor coordination and sale timing.",
  },
  {
    name: "Downsizing Services",
    slug: "downsizing-services",
    shortName: "Downsizing",
    description: "Helping homeowners who are ready to simplify — whether moving to a smaller home, a retirement community, or closer to family.",
    cityIntroTemplate: "Downsizing from a family home in {city} is a significant life decision that benefits from experienced, practical guidance. Real Property Planning helps homeowners in {city} evaluate their options, prepare their property, and navigate the sale with clarity and realistic expectations.",
  },
  {
    name: "Executor Real Estate Support",
    slug: "executor-support",
    shortName: "Executor Support",
    description: "Providing executors and personal representatives with clear guidance on managing and selling estate real property.",
    cityIntroTemplate: "As an executor or personal representative managing property in {city}, you face real responsibility and often unfamiliar decisions. Real Property Planning provides experienced guidance for executors in {city} — from initial property assessment through sale and closing.",
  },
  {
    name: "Attorney & Fiduciary Real Estate Support",
    slug: "attorney-fiduciary-support",
    shortName: "Attorney & Fiduciary Support",
    description: "A reliable real estate resource for attorneys and fiduciaries who need experienced, communicative support on estate and trust property matters.",
    cityIntroTemplate: "Attorneys and fiduciaries managing real property matters in {city} need a real estate partner who understands legal timelines, fiduciary obligations, and the importance of clear communication. Real Property Planning works with legal and fiduciary professionals across {city} and {county}.",
  },
  {
    name: "Valuation Guidance",
    slug: "valuation-guidance",
    shortName: "Valuation Guidance",
    description: "Providing valuation-informed insight for inherited, estate, and transition-related property decisions where pricing accuracy is critical.",
    cityIntroTemplate: "Accurate property valuation in {city} is essential for estate settlements, trust administration, and transition planning. Real Property Planning combines licensed broker and certified appraiser credentials to provide valuation-informed guidance for properties in {city} and throughout {county}.",
  },
  {
    name: "Preparing a Home for Sale",
    slug: "preparing-home-for-sale",
    shortName: "Home Preparation",
    description: "Coordinating property preparation — from cleanout and repairs to staging and presentation — so the home is positioned for the best possible outcome.",
    cityIntroTemplate: "Preparing a home for sale in {city} often involves more than cosmetic updates — especially for estate, inherited, or longtime family properties. Real Property Planning coordinates cleanout, repairs, and presentation strategy for properties in {city} so sellers can focus on the bigger picture.",
  },
  {
    name: "Divorce-Related Home Sales",
    slug: "divorce-related-home-sales",
    shortName: "Divorce Sales",
    description: "Assisting with the sale of marital property during divorce proceedings with discretion, objectivity, and clear communication.",
    cityIntroTemplate: "Selling a home during a divorce in {city} requires discretion, objectivity, and an understanding of how legal timelines affect the sale process. Real Property Planning provides experienced guidance for divorce-related property sales in {city} and throughout {county}.",
  },
  {
    name: "Trust & Estate Property Sales",
    slug: "trust-estate-property-sales",
    shortName: "Trust Property Sales",
    description: "Assisting trustees and fiduciaries with the valuation, preparation, and sale of trust-owned residential real estate.",
    cityIntroTemplate: "Managing a trust-owned property sale in {city} involves specific fiduciary responsibilities and practical coordination. Real Property Planning assists trustees and fiduciaries with trust property sales in {city}, providing clear communication and valuation-informed strategy.",
  },
];

// ─── Helper to build city entries ────────────────────────────────────────
function city(name: string, county: string, countySlug: string, slugOverride?: string): CityData {
  const slug = slugOverride || name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return { name, slug, county, countySlug };
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

/** Common situations that apply broadly */
export function getCommonSituations(cityName: string): string[] {
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

/** Why local matters content */
export function getWhyLocalMatters(cityName: string, countyName: string): string {
  return `Every neighborhood in ${cityName} has its own pricing dynamics, buyer expectations, and property characteristics. A valuation-informed approach — one that accounts for condition, location, and realistic market positioning — helps clients avoid costly mispricing and unnecessary delays. David Stein's dual credentials as a licensed Washington real estate broker and state-certified residential appraiser provide a level of market insight that benefits clients throughout ${countyName}.`;
}
