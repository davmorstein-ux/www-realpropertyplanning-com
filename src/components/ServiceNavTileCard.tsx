import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group flex w-full flex-col items-center justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative mx-auto w-full max-w-[360px]" style={{ aspectRatio: "1 / 1.18" }}>
        <img
          src={tileShell}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-active:brightness-[0.98] drop-shadow-[0_16px_30px_hsl(220_18%_20%/0.18)]"
          draggable={false}
        />
        {/* Blue ring on active/click */}
        <span className="pointer-events-none absolute inset-[6%] rounded-[18%] border-[2.5px] border-transparent transition-all duration-150 group-active:border-[hsl(215_65%_55%/0.7)] group-active:shadow-[0_0_12px_hsl(215_65%_55%/0.3)]" />

        {/* Icon + label centered as one composition */}
        <span className="absolute inset-0 flex flex-col items-center justify-center px-[14%] pt-[12%] pb-[14%]">
          <span className="flex min-h-0 w-full flex-[0_0_56%] items-center justify-center">
            <img
              src={tile.iconSrc}
              alt={tile.title}
              className="h-[78%] w-[78%] object-contain mix-blend-multiply"
              loading="lazy"
            />
          </span>
          <h3 className="mt-2 flex min-h-[3.6em] items-center justify-center font-serif text-[1.1rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-[1.35rem] lg:text-[1.55rem]">
            {tile.title}
          </h3>
        </span>
      </div>
    </Link>
  );
};

export default ServiceNavTileCard;
