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

interface SpokeNodeData {
  label: string;
  to: string;
  icon: string;
  dx: number;
  dy: number;
}

const leftNodes: SpokeNodeData[] = [
  { label: "Attorneys", to: "/for-attorneys", icon: iconAttorney, dx: -260, dy: -240 },
  { label: "Senior Move Managers", to: "/senior-move-managers", icon: iconMovers, dx: -340, dy: -120 },
  { label: "Adult Family Homes", to: "/senior-living-and-relocation", icon: iconAdultFamily, dx: -400, dy: 0 },
  { label: "Senior Living Placement", to: "/senior-living-and-relocation", icon: iconPlacement, dx: -340, dy: 120 },
  { label: "Mortgage & Lending", to: "/lenders-and-financing-specialists", icon: iconLending, dx: -260, dy: 240 },
];

const rightNodes: SpokeNodeData[] = [
  { label: "Real Estate Brokers", to: "/realtor", icon: iconRealtor, dx: 300, dy: -240 },
  { label: "Appraisers", to: "/real-estate-appraiser", icon: iconAppraiser, dx: 340, dy: -120 },
  { label: "CPAs", to: "/for-cpas", icon: iconCPA, dx: 400, dy: 0 },
  { label: "Financial Planners", to: "/for-financial-planners", icon: iconFinancial, dx: 340, dy: 120 },
  { label: "Estate Liquidators", to: "/estate-liquidation", icon: iconLiquidation, dx: 260, dy: 240 },
];

const allNodes = [...leftNodes, ...rightNodes];

const NODE_SIZE = 90;
const CONTAINER_HEIGHT = 650;

const SpokeNode = ({ node, cx, cy }: { node: SpokeNodeData; cx: number; cy: number }) => (
  <Link
    to={node.to}
    className="absolute flex flex-col items-center gap-2 group"
    style={{
      left: cx - NODE_SIZE / 2,
      top: cy - NODE_SIZE / 2,
    }}
    aria-label={node.label}
  >
    <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FAF8F4] flex items-center justify-center transition-all duration-200 group-hover:scale-[1.08] group-hover:border-[#E8C96A] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.3)]">
      <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" loading="lazy" />
    </div>
    <span className="text-[12px] text-[#FAF8F4] text-center leading-tight max-w-[100px] font-medium whitespace-nowrap">
      {node.label}
    </span>
  </Link>
);

const MobileSpokeNode = ({ node }: { node: SpokeNodeData }) => (
  <Link to={node.to} className="flex flex-col items-center gap-2 group" aria-label={node.label}>
    <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FAF8F4] flex items-center justify-center transition-all duration-200 group-hover:scale-[1.08] group-hover:border-[#E8C96A] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.3)]">
      <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" loading="lazy" />
    </div>
    <span className="text-[12px] text-[#FAF8F4] text-center leading-tight max-w-[100px] font-medium">
      {node.label}
    </span>
  </Link>
);

const HubAndSpoke = () => {
  const centerX = 500;
  const centerY = CONTAINER_HEIGHT / 2;

  return (
    <section
      className="bg-[#1B2A4A] py-16 lg:py-20"
      aria-label="Real Property Planning professional ecosystem hub connecting families with attorneys, appraisers, real estate brokers, CPAs, financial planners, estate liquidators, adult family homes, senior living placement, senior move managers, and mortgage and lending specialists throughout Washington State"
    >
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div
          className="relative mx-auto"
          style={{ width: 1000, height: CONTAINER_HEIGHT }}
        >
          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={1000}
            height={CONTAINER_HEIGHT}
            aria-hidden="true"
          >
            {allNodes.map((node, i) => (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={centerX + node.dx}
                y2={centerY + node.dy}
                stroke="#C9A84C"
                strokeWidth={2}
              />
            ))}
          </svg>

          {/* Center logo */}
          <div
            className="absolute"
            style={{
              left: centerX - 90,
              top: centerY - 180,
              width: 180,
              height: 360,
            }}
          >
            <Link to="/" className="flex items-center justify-center w-full h-full" aria-label="Real Property Planning — return to homepage">
              <img
                src={logo}
                alt="Real Property Planning — return to homepage"
                className="max-h-[360px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Spoke nodes */}
          {allNodes.map((node, i) => (
            <SpokeNode
              key={i}
              node={node}
              cx={centerX + node.dx}
              cy={centerY + node.dy}
            />
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden container px-6">
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img
              src={logo}
              alt="Real Property Planning — return to homepage"
              className="w-[150px] h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {allNodes.map((node, i) => (
            <MobileSpokeNode key={i} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubAndSpoke;
