// Premium professional-network tile data — full ~30-tile ecosystem grouped
// into five logical categories. Used on the Building Your Trusted Professional
// Team page (full grid) and the homepage (curated preview).

import iconEstatePlanningAttorney from "@/assets/icons/attorney-estate-planning-icon-washington.webp";
import iconProbateAttorney from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconElderLawAttorney from "@/assets/icons/attorney-elder-law-icon-washington.webp";
import iconFamilyLawAttorney from "@/assets/icons/attorney-family-law-property-icon-washington.webp";
import iconDivorceAttorney from "@/assets/icons/attorney-divorce-real-estate-icon-washington.webp";
import iconRealEstateAttorney from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";
import iconPOA from "@/assets/icons/attorney-power-of-attorney-icon-washington.webp";

import iconCPAs from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import iconFinancialPlanner from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconLending from "@/assets/icons/real-estate-lending-services-icon-washington.webp";

import iconSeniorPlacement from "@/assets/icons/senior-placement-advisor-icon-washington.webp";
import iconAdultFamilyHome from "@/assets/icons/senior-adult-family-home-icon-washington.webp";
import iconAssistedLiving from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconMemoryCare from "@/assets/icons/senior-memory-care-balanced-icon-washington.webp";
import iconIndependentLiving from "@/assets/icons/senior-independent-living-icon-washington.webp";
import iconNursingCare from "@/assets/icons/senior-nursing-care-icon-washington.webp";
import iconMedicare from "@/assets/professionals/medicare-providers-tile-washington-v3.webp";

import iconBroker from "@/assets/icons/realtor-real-estate-agent-icon-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-3d-icon-washington.webp";
import iconLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import iconMoveManagers from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconPropertyPrep from "@/assets/icons/real-estate-agent-briefcase-icon-washington.webp";
import iconTitleEscrow from "@/assets/icons/probate-document-icon-washington.webp";

import iconExecutors from "@/assets/icons/executors-clipboard-checklist-icon-washington.webp";
import iconTrustees from "@/assets/icons/estate-trustees-services-icon-washington.webp";
import iconCareManagers from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconWills from "@/assets/icons/estate-wills-planning-icon-washington.webp";
import iconGuides from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

export interface ProfessionalNetworkTile {
  title: string;
  href: string;
  iconSrc: string;
  altText: string;
}

export interface ProfessionalNetworkCategory {
  label: string;
  tagline: string;
  tiles: ProfessionalNetworkTile[];
}

export const professionalNetworkCategories: ProfessionalNetworkCategory[] = [
  {
    label: "Legal Professionals",
    tagline: "Attorneys who guide families through estates, probate, and major life transitions.",
    tiles: [
      { title: "Estate Planning Attorneys", href: "/attorneys/for-estate-planning-attorneys", iconSrc: iconEstatePlanningAttorney, altText: "Estate planning attorneys Washington State" },
      { title: "Probate Attorneys", href: "/attorneys/for-probate-attorneys", iconSrc: iconProbateAttorney, altText: "Probate attorneys Washington State" },
      { title: "Elder Law Attorneys", href: "/attorneys/for-elder-law-attorneys", iconSrc: iconElderLawAttorney, altText: "Elder law attorneys Washington State" },
      { title: "Family Law Attorneys", href: "/attorneys/for-family-law-attorneys", iconSrc: iconFamilyLawAttorney, altText: "Family law attorneys Washington State" },
      { title: "Divorce Attorneys", href: "/attorneys/for-divorce-attorneys", iconSrc: iconDivorceAttorney, altText: "Divorce attorneys real estate Washington State" },
      { title: "Real Estate Attorneys", href: "/attorneys/for-real-estate-attorneys", iconSrc: iconRealEstateAttorney, altText: "Real estate attorneys Washington State" },
      { title: "Power of Attorney", href: "/power-of-attorney", iconSrc: iconPOA, altText: "Power of attorney guidance Washington State" },
    ],
  },
  {
    label: "Financial Professionals",
    tagline: "CPAs, planners, and lenders who help families align money decisions with property decisions.",
    tiles: [
      { title: "CPAs", href: "/for-cpas", iconSrc: iconCPAs, altText: "CPAs estate guidance Washington State" },
      { title: "Financial Planners", href: "/for-financial-planners", iconSrc: iconFinancialPlanner, altText: "Financial planners estate transitions Washington State" },
      { title: "Mortgage & Lending", href: "/lenders-and-financing-specialists", iconSrc: iconLending, altText: "Mortgage and lending specialists Washington State" },
    ],
  },
  {
    label: "Housing & Care Professionals",
    tagline: "Specialists who help seniors and families understand housing and care options.",
    tiles: [
      { title: "Senior Living Advisors", href: "/senior-living-and-relocation", iconSrc: iconSeniorPlacement, altText: "Senior living placement advisors Washington State" },
      { title: "Adult Family Homes", href: "/senior-living/adult-family-homes", iconSrc: iconAdultFamilyHome, altText: "Adult family homes Washington State" },
      { title: "Assisted Living", href: "/senior-living/assisted-living-communities", iconSrc: iconAssistedLiving, altText: "Assisted living communities Washington State" },
      { title: "Memory Care", href: "/senior-living/memory-care", iconSrc: iconMemoryCare, altText: "Memory care communities Washington State" },
      { title: "Independent Living", href: "/senior-living/independent-living", iconSrc: iconIndependentLiving, altText: "Independent living communities Washington State" },
      { title: "Nursing & Skilled Care", href: "/senior-living/nursing-and-skilled-care", iconSrc: iconNursingCare, altText: "Nursing and skilled care Washington State" },
      { title: "Medicare Providers", href: "/medicare-providers", iconSrc: iconMedicare, altText: "Medicare providers Washington State" },
    ],
  },
  {
    label: "Property & Transition Professionals",
    tagline: "The hands-on team that prepares, values, and sells the home with care.",
    tiles: [
      { title: "Real Estate Brokers", href: "/realtor", iconSrc: iconBroker, altText: "Real estate brokers Washington State" },
      { title: "Real Estate Appraisers", href: "/real-estate-appraiser", iconSrc: iconAppraiser, altText: "Certified residential appraisers Washington State" },
      { title: "Estate Liquidators", href: "/resources/estate-sale-companies", iconSrc: iconLiquidation, altText: "Estate liquidation services Washington State" },
      { title: "Senior Move Managers", href: "/senior-move-managers", iconSrc: iconMoveManagers, altText: "Senior move managers Washington State" },
      { title: "Property Preparation", href: "/resources/property-preparation-services", iconSrc: iconPropertyPrep, altText: "Property preparation services Washington State" },
      { title: "Title & Escrow", href: "/title-and-escrow", iconSrc: iconTitleEscrow, altText: "Title and escrow services Washington State" },
    ],
  },
  {
    label: "Support & Coordination Professionals",
    tagline: "The roles, fiduciaries, and resources that hold the whole process together.",
    tiles: [
      { title: "Executors", href: "/executors", iconSrc: iconExecutors, altText: "Executor guidance Washington State" },
      { title: "Trustees", href: "/trustees", iconSrc: iconTrustees, altText: "Trustee guidance Washington State" },
      { title: "Care Managers", href: "/professionals/care-managers", iconSrc: iconCareManagers, altText: "Aging life care managers Washington State" },
      { title: "Wills & Estate Docs", href: "/wills", iconSrc: iconWills, altText: "Wills and estate documents Washington State" },
      { title: "Guides & Resources", href: "/guides-and-resources", iconSrc: iconGuides, altText: "Guides and resources Washington State" },
    ],
  },
];

// Curated 6 tiles for the homepage preview — one strong representative per category,
// plus the two highest-intent picks (Probate Attorneys, Real Estate Brokers).
export const featuredHomepageTiles: ProfessionalNetworkTile[] = [
  professionalNetworkCategories[0].tiles[1], // Probate Attorneys
  professionalNetworkCategories[1].tiles[0], // CPAs
  professionalNetworkCategories[2].tiles[0], // Senior Living Advisors
  professionalNetworkCategories[3].tiles[0], // Real Estate Brokers
  professionalNetworkCategories[3].tiles[1], // Real Estate Appraisers
  professionalNetworkCategories[4].tiles[0], // Executors
];
