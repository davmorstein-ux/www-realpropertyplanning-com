import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group flex w-full flex-col items-center justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative mx-auto w-full max-w-[440px]" style={{ aspectRatio: "1 / 1.08" }}>
        <img
          src={tileShell}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.18] object-contain pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-active:brightness-[0.98] drop-shadow-[0_18px_34px_hsl(220_18%_20%/0.18)]"
          draggable={false}
        />
        {/* Blue ring on active/click */}
        <span className="pointer-events-none absolute left-[14%] right-[14%] top-[11%] bottom-[11%] rounded-[18%] border-[2.5px] border-transparent transition-all duration-150 group-active:border-[hsl(215_65%_55%/0.7)] group-active:shadow-[0_0_12px_hsl(215_65%_55%/0.3)]" />

        {/* Icon + label centered as one composition */}
        <span className="absolute left-[14%] right-[14%] top-[11%] bottom-[11%] flex flex-col items-center justify-center px-[10%] pt-[8%] pb-[10%]">
          <span className="flex min-h-0 w-full flex-[0_0_52%] items-center justify-center">
            <img
              src={tile.iconSrc}
              alt={tile.title}
              className="h-[64%] w-[64%] object-contain mix-blend-multiply"
              loading="lazy"
            />
          </span>
          <h3 className="mt-4 flex min-h-[3.3em] max-w-[92%] items-center justify-center text-center font-serif text-[1.28rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[1.55rem] lg:text-[1.8rem]">
            {tile.title}
          </h3>
        </span>
      </div>
    </Link>
  );
};

export default ServiceNavTileCard;
