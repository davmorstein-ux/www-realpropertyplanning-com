import iconAttorneys from "@/assets/icons/icon-attorneys.png";
import iconExecutors from "@/assets/icons/icon-executors.png";
import iconTrustees from "@/assets/icons/icon-trustees.png";
import iconCpas from "@/assets/icons/icon-cpas.png";
import iconFinancialPlanning from "@/assets/icons/icon-financial-planning.png";
import iconSeniorMoves from "@/assets/icons/icon-senior-moves.png";
import iconProbateSales from "@/assets/icons/icon-probate-sales.png";
import iconTheProcess from "@/assets/icons/icon-the-process.png";
import iconHomeValue from "@/assets/icons/icon-home-value.png";
import iconProbateTerms from "@/assets/icons/icon-probate-sales-alt.png";
import iconServiceAreas from "@/assets/icons/icon-service-areas.png";
import iconResources from "@/assets/icons/icon-resources.png";
import iconSeniorLiving from "@/assets/icons/icon-senior-living.png";
import iconLending from "@/assets/icons/icon-lending.png";
import iconWills from "@/assets/icons/icon-wills.png";
import iconEstateLiquidation from "@/assets/icons/icon-estate-liquidation.png";
import iconRealtor from "@/assets/icons/icon-realtor.png";
import iconAppraiser from "@/assets/icons/icon-appraiser.png";

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
      { title: "Realtor", subtitle: "", href: "/realtor", iconSrc: iconRealtor, mobileTextDown: true, mobileIconDown: true },
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
      { title: "Probate Terms", subtitle: "", href: "/terminology", iconSrc: iconProbateTerms, iconOffsetY: "-9%", mobileTextDown: true, mobileIconDown: true },
    ],
  },
  {
    label: "Planning & Next Steps",
    tiles: [
      { title: "Probate Sales", subtitle: "", href: "/probate-estate-sales", iconSrc: iconProbateSales, iconOffsetY: "-4%", mobileContentOffsetY: "-2%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "19%" },
      { title: "The Process", subtitle: "", href: "/how-the-process-works", iconSrc: iconTheProcess, mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "14%" },
      { title: "Home Values\n& Pricing", subtitle: "", href: "/why-valuation-matters", iconSrc: iconHomeValue, labelSpacing: "tight", mobileContentOffsetY: "-1.5%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "12%" },
      { title: "Senior\nTransitions", subtitle: "", href: "/senior-move-managers", iconSrc: iconSeniorMoves, labelSpacing: "tight", mobileContentOffsetY: "-3%", mobileTextDown: true, mobileIconDown: true, mobileIconOffsetY: "10%" },
      { title: "Service Areas", subtitle: "", href: "/counties", iconSrc: iconServiceAreas, iconOffsetY: "4%", mobileTextDown: true, mobileIconDown: true },
      { title: "Guides &\nResources", subtitle: "", href: "/professional-referral-resource", iconSrc: iconResources, labelSpacing: "tight", mobileTextDown: true, mobileIconDown: true },
    ],
  },
];

// Flat list for backward compatibility
export const serviceTiles: ServiceTile[] = tileCategories.flatMap(cat => cat.tiles);
