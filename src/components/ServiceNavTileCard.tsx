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
    "--tile-top": `${tile.hue} 20% 97%`,
    "--tile-bottom": `${tile.hue} 14% 92%`,
    "--tile-edge": `${tile.hue} 16% 78%`,
    "--tile-icon-top": `${tile.hue} 20% 92%`,
    "--tile-icon-bottom": `${tile.hue} 16% 86%`,
    "--tile-shadow": `0 12px 28px -12px hsl(${tile.hue} 25% 24% / 0.18), 0 6px 14px -8px hsl(${tile.hue} 20% 22% / 0.12), 0 1px 0 hsl(0 0% 100% / 0.8) inset`,
    "--tile-shadow-hover": `0 18px 36px -14px hsl(${tile.hue} 25% 24% / 0.22), 0 8px 18px -10px hsl(${tile.hue} 20% 22% / 0.14), 0 1px 0 hsl(0 0% 100% / 0.84) inset`,
    "--tile-shadow-press": `0 6px 14px -8px hsl(${tile.hue} 25% 22% / 0.28), 0 3px 8px -4px hsl(${tile.hue} 20% 20% / 0.16), 0 1px 0 hsl(0 0% 100% / 0.7) inset`,
  } as CSSProperties;

  return (
    <Link
      to={tile.href}
      className={cn(
        "group relative flex aspect-square w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-[1.75rem] border text-center",
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

      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(180deg,hsl(var(--tile-icon-top))_0%,hsl(var(--tile-icon-bottom))_100%)] shadow-[0_6px_12px_-8px_hsl(var(--foreground)/0.25)]">
        <tile.icon className="h-6 w-6 text-foreground/80" strokeWidth={1.8} />
      </div>

      <h3 className="px-4 font-serif text-[1.65rem] font-bold leading-none tracking-tight text-foreground lg:text-[1.85rem]">
        {tile.title}
      </h3>

      <p className="mt-1 max-w-[14rem] px-4 text-[0.85rem] font-medium leading-snug text-muted-foreground/90 lg:text-[0.9rem]">
        {tile.subtitle}
      </p>
    </Link>
  );
};

export default ServiceNavTileCard;