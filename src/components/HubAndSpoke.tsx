import { Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";

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
  { label: "Real Estate Brokers", to: "/realtor", icon: iconRealtor, dx: 260, dy: -240 },
  { label: "Appraisers", to: "/real-estate-appraiser", icon: iconAppraiser, dx: 340, dy: -120 },
  { label: "CPAs", to: "/for-cpas", icon: iconCPA, dx: 400, dy: 0 },
  { label: "Financial Planners", to: "/for-financial-planners", icon: iconFinancial, dx: 340, dy: 120 },
  { label: "Estate Liquidators", to: "/estate-liquidation", icon: iconLiquidation, dx: 260, dy: 240 },
];

const allNodes = [...leftNodes, ...rightNodes];

const NODE_SIZE = 90;
const CONTAINER_HEIGHT = 680;
const NODE_PULSE_MS = 2200;
const HUB_PULSE_MS = 2500;

const SpokeNode = ({
  node, cx, cy, isPulsing, onMouseEnter, onMouseLeave,
}: {
  node: SpokeNodeData; cx: number; cy: number;
  isPulsing: boolean; onMouseEnter: () => void; onMouseLeave: () => void;
}) => (
  <Link
    to={node.to}
    className="absolute flex flex-col items-center gap-2 group"
    style={{
      left: cx,
      top: cy - NODE_SIZE / 2,
      transform: "translateX(-50%)",
    }}
    aria-label={node.label}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {/* Electric blue glow behind the node */}
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
      width: 126,
        height: 126,
        top: -18,
        left: "50%",
        transform: "translateX(-50%)",
        background: "radial-gradient(circle, rgba(56,142,240,0.55) 0%, rgba(56,142,240,0.22) 45%, rgba(56,142,240,0.06) 70%, transparent 85%)",
        opacity: isPulsing ? 1 : 0,
        transition: `opacity ${NODE_PULSE_MS / 2}ms ease-in-out`,
        zIndex: 0,
      }}
    />
    <div
      className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FAF8F4] flex items-center justify-center group-hover:scale-[1.08] group-hover:border-[#E8C96A] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.3)]"
      style={{
        transition: `transform ${NODE_PULSE_MS / 2}ms ease-in-out, border-color ${NODE_PULSE_MS / 2}ms ease-in-out, box-shadow ${NODE_PULSE_MS / 2}ms ease-in-out`,
        position: "relative",
        zIndex: 1,
        ...(isPulsing ? {
          transform: "scale(1.18)",
          borderColor: "#E8C96A",
          boxShadow: "0 0 18px rgba(201,168,76,0.45)",
        } : {}),
      }}
    >
      <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" loading="lazy" />
    </div>
    <span className="text-[12px] text-[#FAF8F4] text-center leading-tight font-medium whitespace-nowrap" style={{ position: "relative", zIndex: 1 }}>
      {node.label}
    </span>
  </Link>
);

const MobileSpokeNode = ({ node }: { node: SpokeNodeData }) => (
  <Link to={node.to} className="flex flex-col items-center gap-2 group" aria-label={node.label}>
    <div className="w-[90px] h-[90px] rounded-full border-[3px] border-[#C9A84C] bg-[#FAF8F4] flex items-center justify-center transition-all duration-200 group-hover:scale-[1.08] group-hover:border-[#E8C96A] group-hover:shadow-[0_0_12px_rgba(201,168,76,0.3)]">
      <img src={node.icon} alt="" aria-hidden="true" className="w-[72px] h-[72px] object-contain" loading="lazy" />
    </div>
    <span className="text-[12px] text-[#FAF8F4] text-center leading-tight max-w-[100px] font-medium">{node.label}</span>
  </Link>
);

const HubAndSpoke = () => {
  const centerX = 500;
  const centerY = CONTAINER_HEIGHT / 2;
  const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);
  const [hubPulsing, setHubPulsing] = useState(false);
  const hoveredRef = useRef<Set<number>>(new Set());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmountedRef = useRef(false);
  const queueRef = useRef<number[]>([]);

  const getNextNode = useCallback((): number => {
    // If queue is empty or exhausted, reshuffle all 10
    if (queueRef.current.length === 0) {
      const arr = Array.from({ length: 10 }, (_, i) => i);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      queueRef.current = arr;
    }
    // Skip hovered nodes — put them back at the end
    let attempts = 0;
    while (queueRef.current.length > 0 && attempts < 10) {
      const next = queueRef.current[0];
      if (!hoveredRef.current.has(next)) {
        queueRef.current.shift();
        return next;
      }
      // Move hovered node to end of queue
      queueRef.current.push(queueRef.current.shift()!);
      attempts++;
    }
    // All remaining are hovered — just take the first
    return queueRef.current.shift()!;
  }, []);

  const scheduleNext = useCallback(() => {
    const delay = 1200 + Math.random() * 800;
    timeoutRef.current = setTimeout(() => {
      if (unmountedRef.current) return;
      const pick = getNextNode();

      // Phase 1: node pulse on
      setPulsingIndex(pick);

      setTimeout(() => {
        if (unmountedRef.current) return;
        setPulsingIndex(null);

        // Phase 2: hub glow after node fade-out
        setTimeout(() => {
          if (unmountedRef.current) return;
          setHubPulsing(true);

          setTimeout(() => {
            if (unmountedRef.current) return;
            setHubPulsing(false);

            setTimeout(() => {
              if (!unmountedRef.current) scheduleNext();
            }, HUB_PULSE_MS / 2);
          }, HUB_PULSE_MS / 2);
        }, NODE_PULSE_MS / 2);
      }, NODE_PULSE_MS / 2);
    }, delay);
  }, [getNextNode]);

  useEffect(() => {
    unmountedRef.current = false;
    scheduleNext();
    return () => {
      unmountedRef.current = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scheduleNext]);

  const handleMouseEnter = useCallback((i: number) => {
    hoveredRef.current.add(i);
    setPulsingIndex(prev => prev === i ? null : prev);
  }, []);

  const handleMouseLeave = useCallback((i: number) => {
    hoveredRef.current.delete(i);
  }, []);

  return (
    <section
      className="bg-[#1B2A4A] pt-6 pb-2"
      aria-label="Real Property Planning professional ecosystem hub connecting families with attorneys, appraisers, real estate brokers, CPAs, financial planners, estate liquidators, adult family homes, senior living placement, senior move managers, and mortgage and lending specialists throughout Washington State"
    >
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="relative mx-auto" style={{ width: 1000, height: CONTAINER_HEIGHT }}>
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
                stroke={pulsingIndex === i ? "#FFFDE8" : "#C9A84C"}
                strokeWidth={pulsingIndex === i ? 5 : 2}
                filter={pulsingIndex === i ? "drop-shadow(0 0 6px rgba(255,250,200,0.6))" : "none"}
                style={{ transition: `stroke ${NODE_PULSE_MS / 2}ms ease-in-out, stroke-width ${NODE_PULSE_MS / 2}ms ease-in-out, filter ${NODE_PULSE_MS / 2}ms ease-in-out` }}
              />
            ))}
          </svg>

          {/* Center hub glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: centerX - 140,
              top: centerY - 140,
              width: 280,
              height: 280,
              background: "radial-gradient(circle, rgba(56,142,240,0.6) 0%, rgba(56,142,240,0.3) 35%, rgba(56,142,240,0.1) 60%, transparent 82%)",
              opacity: hubPulsing ? 1 : 0,
              transition: `opacity ${HUB_PULSE_MS / 2}ms ease-in-out`,
              zIndex: 0,
            }}
          />

          {/* Center logo */}
          <div
            className="absolute"
            style={{
              left: centerX - 180,
              top: centerY - 360,
              width: 360,
              height: 720,
            }}
          >
            <Link
              to="/"
              className="flex items-center justify-center w-full h-full"
              aria-label="Real Property Planning — return to homepage"
            >
              <img
                src={logo}
                alt="Real Property Planning — return to homepage"
                className="max-h-[720px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
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
              isPulsing={pulsingIndex === i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
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
