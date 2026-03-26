import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="group relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border-[3px] border-[hsl(215_20%_72%)] bg-card px-8 py-10 text-center shadow-[0_4px_20px_-4px_hsl(var(--foreground)/0.10)] transition-all duration-[120ms] ease-out hover:-translate-y-0.5 hover:border-[hsl(215_30%_55%)] hover:shadow-[0_8px_28px_-6px_hsl(var(--foreground)/0.15)] active:translate-y-px active:scale-[0.97] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.07] to-transparent" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/[0.10] to-transparent" />

      <img
        src={tile.iconSrc}
        alt={tile.title}
        className="h-48 w-48 sm:h-52 sm:w-52 object-contain mix-blend-multiply"
        loading="lazy"
      />

      <h3 className="font-serif text-[2.25rem] font-bold leading-[1.15] tracking-tight text-foreground lg:text-[2.5rem]">
        {tile.title}
      </h3>
    </Link>
  );
};

export default ServiceNavTileCard;
