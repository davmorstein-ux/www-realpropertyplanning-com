import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group relative block w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 -my-[22%] -mx-[6%] scale-[1.588]"
    >
      {/* Shell image flows naturally — defines the tile size */}
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_16px_28px_hsl(220_18%_20%/0.22)] group-active:translate-y-[1px] group-active:brightness-[0.98] drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
      />
      {/* Blue ring on hover, stronger on active */}
      <span className="pointer-events-none absolute inset-[2%] rounded-none border-[2.5px] border-transparent transition-all duration-200 group-hover:border-[hsl(215_65%_55%/0.6)] group-hover:shadow-[0_0_10px_hsl(215_65%_55%/0.2)] group-active:border-[hsl(215_65%_55%/0.85)] group-active:shadow-[0_0_14px_hsl(215_65%_55%/0.35)]" />

      {/* Icon + label centered together inside the gold trim ring */}
      <span className="absolute inset-[12%] flex flex-col items-center justify-center px-[10px] py-[6px] -translate-y-[7%]">
        <img
          src={tile.iconSrc}
          alt={tile.title}
          className="mx-auto w-[45%] max-h-[36%] object-contain"
          loading="lazy"
        />
        <h3 className="-mt-4 max-w-[92%] text-center font-serif text-[0.9rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem]">
          {tile.title}
        </h3>
      </span>
    </Link>
  );
};

export default ServiceNavTileCard;
