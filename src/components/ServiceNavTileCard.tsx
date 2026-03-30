import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group relative block w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 -my-[22%] -mx-[4%] scale-[1.45] sm:-my-[22%] sm:-mx-[6%] sm:scale-[1.588]"
    >
      {/* Shell image flows naturally — defines the tile size */}
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full pointer-events-none select-none drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
      />

      {/* Icon + label centered together inside the gold trim ring */}
      <span className="absolute inset-[10%] sm:inset-[12%] flex flex-col items-center justify-center px-[6px] py-[4px] sm:px-[10px] sm:py-[6px] -translate-y-[9%]">
        <img
          src={tile.iconSrc}
          alt={tile.title}
          className="tile-icon mx-auto w-[48%] sm:w-[45%] max-h-[38%] object-contain drop-shadow-lg"
          style={tile.iconOffsetY ? { transform: `translateY(${tile.iconOffsetY})` } : undefined}
          loading="lazy"
        />
        <h3
          className={`-mt-1 sm:-mt-4 max-w-[92%] text-center font-serif text-[0.8rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] whitespace-pre-line ${tile.mobileLeading ? 'sm:leading-[0.95] sm:mt-1' : ''}`}
          data-mobile-tight={tile.mobileLeading ? "true" : undefined}
        >
          {tile.title}
        </h3>
      </span>
    </Link>
  );
};

export default ServiceNavTileCard;
