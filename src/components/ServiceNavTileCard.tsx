import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="premium-tile group flex w-full flex-col items-center justify-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative mx-auto w-full max-w-[520px]" style={{ aspectRatio: "1 / 1.18" }}>
        <img
          src={tileShell}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.18] object-contain pointer-events-none select-none transition-all duration-200 group-hover:brightness-[1.04] group-active:brightness-[0.98] drop-shadow-[0_18px_34px_hsl(220_18%_20%/0.18)]"
          draggable={false}
        />
        {/* Blue ring on active/click */}
        <span className="pointer-events-none absolute left-[14%] right-[14%] top-[11%] bottom-[11%] rounded-[18%] border-[2.5px] border-transparent transition-all duration-150 group-active:border-[hsl(215_65%_55%/0.7)] group-active:shadow-[0_0_12px_hsl(215_65%_55%/0.3)]" />

        {/* Icon + label centered together inside the gold trim ring */}
        <span className="absolute left-[17%] right-[17%] top-[14%] bottom-[22%] flex items-center justify-center px-[6%]">
          <span className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5">
            <img
              src={tile.iconSrc}
              alt={tile.title}
              className="max-h-[126px] w-[52%] object-contain mix-blend-multiply sm:max-h-[144px] lg:max-h-[160px]"
              loading="lazy"
            />
          </span>
          <h3 className="max-w-[96%] text-center font-serif text-[1.18rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-[1.42rem] lg:text-[1.62rem] xl:text-[1.72rem]">
            {tile.title}
          </h3>
        </span>
      </div>
    </Link>
  );
};

export default ServiceNavTileCard;
