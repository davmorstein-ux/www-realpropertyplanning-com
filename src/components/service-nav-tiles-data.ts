import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconExecutors from "@/assets/icons/probate-executors-services-icon-washington.webp";
import iconTrustees from "@/assets/icons/estate-trustees-services-icon-washington.webp";
import iconCpas from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import iconFinancialPlanning from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconSeniorMoves from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconProbateSales from "@/assets/icons/probate-property-sales-icon-washington.webp";
import iconTheProcess from "@/assets/icons/probate-sales-process-icon-washington.webp";
import iconHomeValue from "@/assets/icons/real-estate-property-value-icon-washington.webp";
import iconProbateTerms from "@/assets/icons/probate-property-sales-alt-icon-washington.webp";
import iconServiceAreas from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";
import iconResources from "@/assets/icons/probate-estate-resources-icon-washington.webp";
import iconSeniorLiving from "@/assets/icons/senior-living-placement-icon-washington.webp";
import iconLending from "@/assets/icons/real-estate-lending-services-icon-washington.webp";
import iconWills from "@/assets/icons/estate-wills-planning-icon-washington.webp";
import iconEstateLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import iconPowerOfAttorney from "@/assets/icons/power-of-attorney-icon-washington.webp";
import iconRealtor from "@/assets/icons/realtor-real-estate-agent-icon-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-icon-washington.webp";

export interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  iconSrc: string;
  iconOffsetY?: string;
  labelSpacing?: "tight";
  contentOffsetY?: string;
  mobileContentOffsetY?: string;
  mobileTextDown?: boolean;
  mobileIconDown?: boolean;
  mobileIconOffsetY?: string;
  iconScale?: number;
  textOffsetY?: string;
}

export interface TileCategory {
  label: string;
  tiles: ServiceTile[];
}

export const tileCategories: TileCategory[] = [
  {
    label: "Professionals & Services",
    tiles: [
      { title: "Attorneys", subtitle: "", href: "/for-attorneys", iconSrc: iconAttorneys, mobileTextDown: true, mobileIconDown: true, textOffsetY: "6px" },
      { title: "CPAs", subtitle: "", href: "/for-cpas", iconSrc: iconCpas, iconOffsetY: "-4%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "12%" },
      { title: "Financial\nPlanning", subtitle: "", href: "/for-financial-planners", iconSrc: iconFinancialPlanning, labelSpacing: "tight", iconOffsetY: "4%", mobileContentOffsetY: "-1%", mobileIconDown: true, mobileIconOffsetY: "0%" },
      { title: "Mortgage\nLending", subtitle: "", href: "/lenders-and-financing-specialists", iconSrc: iconLending, labelSpacing: "tight", mobileContentOffsetY: "-2%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "14%" },
      { title: "Estate\nLiquidation", subtitle: "", href: "/estate-liquidation", iconSrc: iconEstateLiquidation, labelSpacing: "tight", mobileTextDown: true, mobileIconDown: true },
      { title: "Realtor", subtitle: "", href: "/realtor", iconSrc: iconRealtor, contentOffsetY: "0.5%", mobileContentOffsetY: "-0.5%", iconScale: 1.1, mobileTextDown: true, mobileIconDown: true },
      { title: "Real Estate\nAppraiser", subtitle: "", href: "/real-estate-appraiser", iconSrc: iconAppraiser, labelSpacing: "tight", mobileTextDown: true, mobileIconDown: true, iconScale: 1.21, textOffsetY: "20px" },
      { title: "Senior Living", subtitle: "", href: "/senior-living-and-relocation", iconSrc: iconSeniorLiving, mobileTextDown: true, mobileIconDown: true },
    ],
  },
  {
    label: "Roles & Responsibilities",
    tiles: [
      { title: "Executors", subtitle: "", href: "/executors", iconSrc: iconExecutors, iconOffsetY: "-2%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "6%" },
      { title: "Trustees", subtitle: "", href: "/trustees", iconSrc: iconTrustees, mobileTextDown: true, mobileIconDown: true },
      { title: "Wills", subtitle: "", href: "/wills", iconSrc: iconWills, mobileTextDown: true, mobileIconDown: true },
      { title: "Power of\nAttorney", subtitle: "", href: "/power-of-attorney", iconSrc: iconPowerOfAttorney, labelSpacing: "tight", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "-6%" },
      { title: "Probate Terms", subtitle: "", href: "/terminology", iconSrc: iconProbateTerms, iconOffsetY: "-9%", mobileTextDown: true, mobileIconDown: true },
    ],
  },
  {
    label: "Planning & Next Steps",
    tiles: [
      { title: "Probate Sales", subtitle: "", href: "/probate-estate-sales", iconSrc: iconProbateSales, iconOffsetY: "-4%", mobileContentOffsetY: "-2%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "19%" },
      { title: "The Process", subtitle: "", href: "/how-the-process-works", iconSrc: iconTheProcess, mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "14%" },
      { title: "Home Values\n& Pricing", subtitle: "", href: "/why-valuation-matters", iconSrc: iconHomeValue, labelSpacing: "tight", iconOffsetY: "4%", mobileContentOffsetY: "-1.5%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "12%" },
      { title: "Senior\nTransitions", subtitle: "", href: "/senior-move-managers", iconSrc: iconSeniorMoves, labelSpacing: "tight", iconOffsetY: "4%", mobileContentOffsetY: "-3%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "10%" },
      { title: "Service Areas", subtitle: "", href: "/counties", iconSrc: iconServiceAreas, iconOffsetY: "4%", iconScale: 1.1, mobileTextDown: true, mobileIconDown: true },
      { title: "Guides &\nResources", subtitle: "", href: "/guides-and-resources", iconSrc: iconResources, labelSpacing: "tight", iconOffsetY: "12%", mobileTextDown: true, mobileIconDown: true },
    ],
  },
];

// Flat list for backward compatibility
export const serviceTiles: ServiceTile[] = tileCategories.flatMap(cat => cat.tiles);
