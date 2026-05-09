// Finalized professional-network tile data.
// Uses only the newest cinematic 560×420 premium tile ecosystem in /public/tiles.
// Do not mix these with older icon-only or earlier 3D generations.

export interface ProfessionalNetworkTile {
  title: string;
  href: string;
  imageSrc: string;
  altText: string;
}

export interface ProfessionalNetworkCategory {
  label: string;
  tagline: string;
  tiles: ProfessionalNetworkTile[];
}

export const professionalNetworkCategories: ProfessionalNetworkCategory[] = [
  {
    label: "Attorney Guidance",
    tagline: "Legal professionals for estate planning, probate, family transitions, and property-related decisions.",
    tiles: [
      { title: "Attorneys", href: "/for-attorneys", imageSrc: "/tiles/set1/attorneys.webp", altText: "Attorneys supporting estate and property transitions in Washington State" },
      { title: "Estate Planning Attorneys", href: "/for-estate-planning-attorneys", imageSrc: "/tiles/attorneys/estate-planning-attorneys.webp", altText: "Estate planning attorneys Washington State" },
      { title: "Probate Attorneys", href: "/for-probate-attorneys", imageSrc: "/tiles/attorneys/probate-attorneys.webp", altText: "Probate attorneys Washington State" },
      { title: "Elder Law Attorneys", href: "/for-elder-law-attorneys", imageSrc: "/tiles/attorneys/elder-law-attorneys.webp", altText: "Elder law attorneys Washington State" },
      { title: "Family Law Attorneys", href: "/for-family-law-attorneys", imageSrc: "/tiles/attorneys/family-law-attorneys.webp", altText: "Family law attorneys Washington State" },
      { title: "Divorce Attorneys", href: "/for-divorce-attorneys", imageSrc: "/tiles/attorneys/divorce-attorneys.webp", altText: "Divorce attorneys real estate Washington State" },
      { title: "Real Estate Attorneys", href: "/real-estate-attorneys", imageSrc: "/tiles/attorneys/real-estate-attorneys.webp", altText: "Real estate attorneys Washington State" },
    ],
  },
  {
    label: "Financial, Lending & Valuation",
    tagline: "Professional guidance for tax questions, planning decisions, financing, and credible property value.",
    tiles: [
      { title: "CPAs", href: "/for-cpas", imageSrc: "/tiles/set1/certified-public-accountants.webp", altText: "CPAs supporting estate transitions in Washington State" },
      { title: "Financial Planners", href: "/for-financial-planners", imageSrc: "/tiles/set1/financial-planners.webp", altText: "Financial planners for estate and senior transitions in Washington State" },
      { title: "Mortgage Lenders", href: "/lenders-and-financing-specialists", imageSrc: "/tiles/set1/mortgage-lenders.webp", altText: "Mortgage lenders and financing specialists Washington State" },
      { title: "Real Estate Appraisers", href: "/real-estate-appraiser", imageSrc: "/tiles/set1/real-estate-appraisers.webp", altText: "Certified real estate appraisers Washington State" },
      { title: "Home Values & Pricing", href: "/why-valuation-matters", imageSrc: "/tiles/set3/home-values-pricing.webp", altText: "Home values and pricing guidance Washington State" },
    ],
  },
  {
    label: "Senior Housing & Care Decisions",
    tagline: "Calm support for families comparing care options, living arrangements, and senior housing transitions.",
    tiles: [
      { title: "Senior Living Advisors", href: "/senior-living-and-relocation", imageSrc: "/tiles/set1/senior-living-advisors.webp", altText: "Senior living advisors Washington State" },
      { title: "Senior Living Options", href: "/understanding-housing-care-options", imageSrc: "/tiles/set3/senior-living-options.webp", altText: "Senior living options Washington State" },
      { title: "Medicare Providers", href: "/medicare-providers", imageSrc: "/tiles/set3/medicare-providers.webp", altText: "Medicare providers Washington State" },
      { title: "Paying for Senior Living", href: "/sell-house-fund-senior-living", imageSrc: "/tiles/set3/paying-for-senior-living.webp", altText: "Paying for senior living guidance Washington State" },
      { title: "Senior Home Sales", href: "/senior-transitions", imageSrc: "/tiles/set3/senior-home-sales.webp", altText: "Senior home sales Washington State" },
    ],
  },
  {
    label: "Property, Sale & Transition Support",
    tagline: "Hands-on property support for preparing, valuing, selling, and coordinating the home side of a transition.",
    tiles: [
      { title: "Real Estate Brokers", href: "/realtor", imageSrc: "/tiles/set1/real-estate-brokers.webp", altText: "Real estate brokers Washington State" },
      { title: "Senior Move Managers", href: "/senior-move-managers", imageSrc: "/tiles/set1/senior-move-managers.webp", altText: "Senior move managers Washington State" },
      { title: "Probate & Estate Sales", href: "/probate-estate-sales", imageSrc: "/tiles/set2/probate-estate-sales.webp", altText: "Probate and estate sales Washington State" },
      { title: "Title & Escrow", href: "/title-and-escrow", imageSrc: "/tiles/set2/title-escrow.webp", altText: "Title and escrow services Washington State" },
      { title: "Service Areas", href: "/counties", imageSrc: "/tiles/set3/service-areas.webp", altText: "Washington State service areas" },
    ],
  },
  {
    label: "Estate Roles, Guides & Planning",
    tagline: "Fiduciary roles and educational resources that help families understand what happens next.",
    tiles: [
      { title: "Executors", href: "/executors", imageSrc: "/tiles/set2/executors.webp", altText: "Executor guidance Washington State" },
      { title: "Trustees", href: "/trustees", imageSrc: "/tiles/set2/trustees.webp", altText: "Trustee guidance Washington State" },
      { title: "Power of Attorney", href: "/power-of-attorney", imageSrc: "/tiles/set2/power-of-attorney.webp", altText: "Power of attorney guidance Washington State" },
      { title: "Wills & Estate Docs", href: "/wills", imageSrc: "/tiles/set2/wills.webp", altText: "Wills and estate documents Washington State" },
      { title: "The Probate Process", href: "/how-the-process-works", imageSrc: "/tiles/set2/the-probate-process.webp", altText: "Probate process guidance Washington State" },
      { title: "Probate Terms", href: "/terminology", imageSrc: "/tiles/set2/probate-terms.webp", altText: "Probate terminology guidance Washington State" },
      { title: "Guides & Resources", href: "/guides-and-resources", imageSrc: "/tiles/set3/guides-resources.webp", altText: "Guides and resources Washington State" },
      { title: "Gray Divorce", href: "/gray-divorce", imageSrc: "/tiles/set3/grey-divorce.webp", altText: "Gray divorce real estate guidance Washington State" },
    ],
  },
];

// Curated 6-tile homepage preview only. The full 30-tile ecosystem remains on
// the trusted professional team page.
export const featuredHomepageTiles: ProfessionalNetworkTile[] = [
  professionalNetworkCategories[0].tiles[2], // Probate Attorneys
  professionalNetworkCategories[1].tiles[0], // CPAs
  professionalNetworkCategories[1].tiles[3], // Real Estate Appraisers
  professionalNetworkCategories[2].tiles[0], // Senior Living Advisors
  professionalNetworkCategories[3].tiles[0], // Real Estate Brokers
  professionalNetworkCategories[3].tiles[1], // Senior Move Managers
];
