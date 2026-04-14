import { Link } from "react-router-dom";

import iconAttorney from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";
import iconMovers from "@/assets/icons/senior-movers-relocation-icon-washington.webp";
import iconAdultFamily from "@/assets/icons/senior-adult-family-home-icon-washington.webp";
import iconPlacement from "@/assets/icons/senior-living-placement-icon-washington.webp";
import iconLending from "@/assets/icons/real-estate-lenders-3d-icon-washington.webp";
import iconRealtor from "@/assets/icons/realtor-real-estate-agent-icon-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-icon-washington.webp";
import iconCPA from "@/assets/icons/estate-cpas-financial-icon-washington.webp";
import iconFinancial from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import logo from "@/assets/real-property-planning-logo-transparent-seattle.webp";

interface Node {
  label: string;
  to: string;
  icon: string;
  dx: number;
  dy: number;
  iconStyle?: React.CSSProperties;
}

const forceSize: React.CSSProperties = { width: 72, height: 72, minWidth: 72, minHeight: 72, objectFit: "contain", display: "block", margin: "auto" };

const leftNodes: Node[] = [
  { label: "Attorneys", to: "/for-attorneys", icon: iconAttorney, dx: -260, dy: -240, iconStyle: forceSize },
  { label: "Senior Move Managers", to: "/senior-transitions", icon: iconMovers, dx: -340, dy: -120 },
  { label: "Adult Family Homes", to: "/senior-living", icon: iconAdultFamily, dx: -400, dy: 0, iconStyle: forceSize },
  { label: "Senior Living Placement", to: "/senior-transitions", icon: iconPlacement, dx: -340, dy: 120 },
  { label: "Mortgage & Lending", to: "/lenders-financing", icon: iconLending, dx: -260, dy: 240, iconStyle: forceSize },
];

const rightNodes: Node[] = [
  { label: "Real Estate Brokers", to: "/realtor", icon: iconRealtor, dx: 260, dy: -240, iconStyle: { display: "block", margin: "auto", width: 72, height: 72, objectFit: "contain" as const } },
  { label: "Appraisers", to: "/real-estate-appraiser", icon: iconAppraiser, dx: 340, dy: -120 },
  { label: "CPAs", to: "/cpas", icon: iconCPA, dx: 400, dy: 0 },
  { label: "Financial Planners", to: "/financial-planning", icon: iconFinancial, dx: 340, dy: 120 },
  { label: "Estate Liquidators", to: "/estate-liquidation", icon: iconLiquidation, dx: 260, dy: 240 },
];

const allNodes = [...leftNodes, ...rightNodes];

const LOGO_R = 90; // approximate logo radius for line endpoints
const NODE_R = 45; // node radius (90px / 2)

function edgePoint(cx: number, cy: number, tx: number, ty: number, r: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return { x: cx, y: cy };
  return { x: cx + (dx / len) * r, y: cy + (dy / len) * r };
}

const SpokeNode = ({ node }: { node: Node }) => (
  <Link
    to={node.to}
    className="absolute flex flex-col items-center gap-1.5 group"
    style={{
      left: "50%",
      top: "50%",
      transform: `translate(calc(-50% + ${node.dx}px), calc(-50% + ${node.dy}px))`,
    }}
    aria-label={node.label}
  >
    <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FFFFFF] flex items-center justify-center transition-all duration-200 group-hover:scale-[1.08] group-hover:border-[#E8C96A] group-hover:shadow-[0_0_14px_rgba(201,168,76,0.35)]">
      <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" style={node.iconStyle} loading="lazy" />
    </div>
    <span className="text-[12px] text-white text-center leading-tight max-w-[100px] font-medium whitespace-nowrap">
      {node.label}
    </span>
  </Link>
);

const HubAndSpoke = () => {
  // SVG viewBox matches section size conceptually; we use 50%/50% center
  const svgW = 800;
  const svgH = 650;
  const cx = svgW / 2;
  const cy = svgH / 2;

  return (
    <section className="bg-[#1B2A4A]" aria-label="Professional network">
      {/* Desktop */}
      <div className="hidden md:block relative w-full" style={{ height: 650 }}>
        {/* SVG lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${svgW} ${svgH}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {allNodes.map((node, i) => {
            const nx = cx + node.dx;
            const ny = cy + node.dy;
            const from = edgePoint(cx, cy, nx, ny, LOGO_R);
            const to = edgePoint(nx, ny, cx, cy, NODE_R);
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#C9A84C"
                strokeWidth={2}
              />
            );
          })}
        </svg>

        {/* Center logo */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "transparent",
            border: "none",
            boxShadow: "none",
            borderRadius: 0,
          }}
        >
          <img src={logo} alt="Real Property Planning" className="w-[180px] h-auto" style={{ background: "transparent", border: "none", boxShadow: "none" }} />
        </div>

        {/* Nodes */}
        {allNodes.map((node, i) => (
          <SpokeNode key={i} node={node} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden py-12 px-6">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Real Property Planning" className="w-[150px] h-auto" />
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {allNodes.map((node, i) => (
            <Link
              key={i}
              to={node.to}
              className="flex flex-col items-center gap-1.5 group"
              aria-label={node.label}
            >
              <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FFFFFF] flex items-center justify-center transition-all duration-200 group-hover:scale-[1.08] group-hover:border-[#E8C96A]">
                <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" style={node.iconStyle} loading="lazy" />
              </div>
              <span className="text-[12px] text-white text-center leading-tight max-w-[100px] font-medium">
                {node.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubAndSpoke;
