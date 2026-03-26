import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="card-3d group flex w-full flex-col items-center justify-center gap-5 overflow-hidden px-8 py-10 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
