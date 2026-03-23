import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import type { ServiceTile } from "./service-nav-tiles-data";

interface ServiceNavTileCardProps {
  tile: ServiceTile;
  isActive: boolean;
}

const ServiceNavTileCard = ({ tile, isActive }: ServiceNavTileCardProps) => {
  const cssVars = {
    "--tile-border": `${tile.hue} 18% 84%`,
    "--tile-top": `${tile.hue} 28% 98%`,
    "--tile-bottom": `${tile.hue} 18% 93%`,
    "--tile-edge": `${tile.hue} 18% 78%`,
    "--tile-icon-top": `${tile.hue} 24% 94%`,
    "--tile-icon-bottom": `${tile.hue} 18% 88%`,
    "--tile-shadow": `0 16px 36px -20px hsl(${tile.hue} 25% 24% / 0.22), 0 8px 18px -14px hsl(${tile.hue} 20% 22% / 0.14), 0 1px 0 hsl(0 0% 100% / 0.82) inset`,
    "--tile-shadow-hover": `0 24px 44px -22px hsl(${tile.hue} 25% 24% / 0.26), 0 12px 20px -14px hsl(${tile.hue} 20% 22% / 0.16), 0 1px 0 hsl(0 0% 100% / 0.84) inset`,
    "--tile-shadow-press": `0 10px 20px -16px hsl(${tile.hue} 25% 22% / 0.32), 0 4px 10px -8px hsl(${tile.hue} 20% 20% / 0.18), 0 1px 0 hsl(0 0% 100% / 0.74) inset`,
  } as CSSProperties;

  return (
    <Link
      to={tile.href}
      className={cn(
        "group relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border text-center",
        "bg-[linear-gradient(180deg,hsl(var(--tile-top))_0%,hsl(var(--tile-bottom))_100%)]",
        "border-[hsl(var(--tile-border))] shadow-[var(--tile-shadow)]",
        "transition-[transform,box-shadow,opacity] duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--tile-shadow-hover)]",
        "active:translate-y-[2px] active:scale-[0.97] active:shadow-[var(--tile-shadow-press)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive ? "opacity-100" : "opacity-72",
      )}
      style={cssVars}
    >
      <div className="absolute inset-x-5 bottom-0 h-px rounded-full bg-[hsl(var(--tile-edge))]" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,hsl(var(--tile-icon-top))_0%,hsl(var(--tile-icon-bottom))_100%)] shadow-[0_10px_18px_-14px_hsl(var(--foreground)/0.3)]">
        <tile.icon className="h-7 w-7 text-foreground" strokeWidth={1.85} />
      </div>

      <h3 className="px-5 font-serif text-[1.35rem] font-semibold leading-tight text-foreground lg:text-[1.5rem]">
        {tile.title}
      </h3>

      <p className="mt-2 max-w-[16rem] px-5 text-[0.98rem] leading-snug text-muted-foreground lg:text-[1rem]">
        {tile.subtitle}
      </p>
    </Link>
  );
};

export default ServiceNavTileCard;