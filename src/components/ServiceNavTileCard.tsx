import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group relative block w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style={{ aspectRatio: "1 / 1.15" }}
    >
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-active:brightness-[0.98] drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
      />
      {/* Blue ring on active/click */}
      <span className="pointer-events-none absolute inset-0 rounded-[18%] border-[2.5px] border-transparent transition-all duration-150 group-active:border-[hsl(215_65%_55%/0.7)] group-active:shadow-[0_0_12px_hsl(215_65%_55%/0.3)]" />

      {/* Icon + label centered together inside the gold trim ring */}
      <span className="absolute inset-[12%] bottom-[20%] flex flex-col items-center justify-center">
        <img
          src={tile.iconSrc}
          alt={tile.title}
          className="mx-auto w-[58%] max-h-[45%] object-contain mix-blend-multiply [background:transparent]"
          loading="lazy"
        />
        <h3 className="mt-1 max-w-[92%] text-center font-serif text-[1.1rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.2rem]">
          {tile.title}
        </h3>
      </span>
    </Link>
  );
};

export default ServiceNavTileCard;
