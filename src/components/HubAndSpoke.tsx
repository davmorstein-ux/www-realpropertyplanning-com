import { Link } from "react-router-dom";

import iconAttorney from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";
import iconMovers from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconAdultFamily from "@/assets/icons/senior-adult-family-home-icon-washington.webp";
import iconPlacement from "@/assets/icons/senior-living-placement-icon-washington.webp";
import iconLending from "@/assets/icons/real-estate-lenders-3d-icon-washington.webp";
import iconRealtor from "@/assets/icons/realtor-real-estate-agent-icon-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-3d-icon-washington.webp";
import iconCPA from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import iconFinancial from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import logo from "@/assets/real-property-planning-logo-bright-seattle.webp";

const leftNodes = [
  { label: "Attorneys", to: "/for-attorneys", icon: iconAttorney },
  { label: "Senior Move Managers", to: "/senior-transitions", icon: iconMovers },
  { label: "Adult Family Homes", to: "/senior-living-and-relocation", icon: iconAdultFamily },
  ,
  { label: "Senior Living Placement", to: "/senior-transitions", icon: iconPlacement },
  { label: "Mortgage & Lending", to: "/lenders-and-financing-specialists", icon: iconLending },
];

const rightNodes = [
  { label: "Real Estate Brokers", to: "/realtor", icon: iconRealtor },
  { label: "Appraisers", to: "/real-estate-appraiser", icon: iconAppraiser },
  { label: "CPAs", to: "/for-cpas", icon: iconCPA },
  { label: "Financial Planners", to: "/for-financial-planners", icon: iconFinancial },
  { label: "Estate Liquidators", to: "/estate-liquidation", icon: iconLiquidation },
];

const allNodes = [...leftNodes, ...rightNodes];

const SpokeNode = ({ node }: { node: (typeof leftNodes)[0] }) => (
  <Link to={node.to} className="flex flex-col items-center gap-2 group" aria-label={node.label}>
    <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FAF8F4] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 group-hover:border-[#D4B85C] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.3)]">
      <img src={node.icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain" loading="lazy" />
    </div>
    <span className="text-[12px] text-[#FAF8F4] text-center leading-tight max-w-[100px] font-medium">{node.label}</span>
  </Link>
);

const HubAndSpoke = () => {
  return (
    <section className="bg-[#1B2A4A] py-16 lg:py-20" aria-label="Professional network">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-center container px-6 lg:px-8">
        {/* Left column */}
        <div className="flex flex-col items-center gap-6">
          {leftNodes.map((node, i) => (
            <SpokeNode key={i} node={node} />
          ))}
        </div>

        {/* Left lines */}
        <div className="flex flex-col justify-center gap-[42px] py-[18px]">
          {leftNodes.map((_, i) => (
            <div key={i} className="w-16 lg:w-24 h-[2px] bg-[#C9A84C]" />
          ))}
        </div>

        {/* Center logo */}
        <div className="shrink-0 mx-4">
          <img src={logo} alt="Real Property Planning" className="w-[180px] h-auto" />
        </div>

        {/* Right lines */}
        <div className="flex flex-col justify-center gap-[42px] py-[18px]">
          {rightNodes.map((_, i) => (
            <div key={i} className="w-16 lg:w-24 h-[2px] bg-[#C9A84C]" />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center gap-6">
          {rightNodes.map((node, i) => (
            <SpokeNode key={i} node={node} />
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden container px-6">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Real Property Planning" className="w-[150px] h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {allNodes.map((node, i) => (
            <SpokeNode key={i} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubAndSpoke;
