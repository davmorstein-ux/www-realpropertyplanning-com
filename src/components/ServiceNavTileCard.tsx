import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group flex w-full flex-col items-center justify-center gap-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {/* Premium tile shell background */}
      <div className="relative w-full max-w-[220px] mx-auto aspect-square">
        <img
          src={tileShell}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-active:brightness-[0.98] drop-shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
          draggable={false}
        />
        {/* Blue ring on active/click */}
        <span className="pointer-events-none absolute inset-[6%] rounded-[18%] border-[2.5px] border-transparent transition-all duration-150 group-active:border-[hsl(215_65%_55%/0.7)] group-active:shadow-[0_0_12px_hsl(215_65%_55%/0.3)]" />
        {/* Icon centered on tile */}
        <span className="absolute inset-0 flex items-center justify-center p-[22%]">
          <img
            src={tile.iconSrc}
            alt={tile.title}
            className="w-full h-full object-contain mix-blend-multiply"
            loading="lazy"
          />
        </span>
      </div>

      <h3 className="font-serif text-[1.25rem] sm:text-[1.4rem] lg:text-[1.5rem] font-bold leading-[1.15] tracking-tight text-foreground">
        {tile.title}
      </h3>
    </Link>
  );
};

export default ServiceNavTileCard;
