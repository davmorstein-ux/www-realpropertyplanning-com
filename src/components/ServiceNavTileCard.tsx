import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group relative block w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 -my-[8%] -mx-[2%] scale-[1.35] sm:-my-[22%] sm:-mx-[6%] sm:scale-[1.588]"
    >
      {/* Shell image flows naturally — defines the tile size */}
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full pointer-events-none select-none drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
      />
      {/* Blue ring on hover, stronger on active */}
      {/* Electric blue glow on hover */}
      <span className="pointer-events-none absolute inset-[4%] rounded-[6%] border-[3px] border-transparent transition-all duration-300 group-hover:border-[hsl(210_100%_55%)] group-hover:shadow-[0_0_18px_hsl(210_100%_55%/0.5),inset_0_0_12px_hsl(210_100%_55%/0.15)] group-active:border-[hsl(210_100%_60%)] group-active:shadow-[0_0_24px_hsl(210_100%_55%/0.65),inset_0_0_16px_hsl(210_100%_55%/0.25)]" />

      {/* Icon + label centered together inside the gold trim ring */}
      <span className="absolute inset-[10%] sm:inset-[12%] flex flex-col items-center justify-center px-[6px] py-[4px] sm:px-[10px] sm:py-[6px] -translate-y-[7%]">
        <img
          src={tile.iconSrc}
          alt={tile.title}
          className="mx-auto w-[48%] sm:w-[45%] max-h-[38%] object-contain drop-shadow-lg"
          loading="lazy"
        />
        <h3 className="-mt-1 sm:-mt-4 max-w-[92%] text-center font-serif text-[0.8rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem]">
          {tile.title}
        </h3>
      </span>
    </Link>
  );
};

export default ServiceNavTileCard;
