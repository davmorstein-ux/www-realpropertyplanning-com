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
export interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  iconSrc: string;
  iconOffsetY?: string;
  labelSpacing?: "tight";
}

export const serviceTiles: ServiceTile[] = [
  { title: "Attorneys", subtitle: "", href: "/for-attorneys", iconSrc: iconAttorneys },
  { title: "Executors", subtitle: "", href: "/executors", iconSrc: iconExecutors, iconOffsetY: "-2%" },
  { title: "Trustees", subtitle: "", href: "/executors", iconSrc: iconTrustees },
  { title: "CPAs", subtitle: "", href: "/for-cpas", iconSrc: iconCpas, iconOffsetY: "-4%" },
  { title: "Financial\nPlanning", subtitle: "", href: "/for-financial-planners", iconSrc: iconFinancialPlanning, labelSpacing: "tight", iconOffsetY: "4%" },
  { title: "Senior Moves", subtitle: "", href: "/senior-transitions", iconSrc: iconSeniorMoves },
  { title: "Probate Sales", subtitle: "", href: "/probate-estate-sales", iconSrc: iconProbateSales, iconOffsetY: "-4%" },
  { title: "The Process", subtitle: "", href: "/how-the-process-works", iconSrc: iconTheProcess },
  { title: "Home Value", subtitle: "", href: "/why-valuation-matters", iconSrc: iconHomeValue },
  { title: "Probate Terms", subtitle: "", href: "/terminology", iconSrc: iconProbateTerms, iconOffsetY: "-9%" },
  { title: "Service Areas", subtitle: "", href: "/counties", iconSrc: iconServiceAreas, iconOffsetY: "4%" },
  { title: "Resources", subtitle: "", href: "/professional-referral-resource", iconSrc: iconResources },
  { title: "Lending", subtitle: "", href: "/lenders-and-financing-specialists", iconSrc: iconLending },
  { title: "Senior Living\n& Relocation", subtitle: "", href: "/senior-living-and-relocation", iconSrc: iconSeniorLiving, labelSpacing: "tight" },
];
