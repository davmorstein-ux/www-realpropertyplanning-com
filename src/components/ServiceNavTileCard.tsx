import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-6 text-center shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-px active:scale-[0.98] active:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
        <tile.icon className="h-6 w-6 text-foreground/70" strokeWidth={1.8} />
      </div>

      <h3 className="font-serif text-xl font-bold leading-tight tracking-tight text-foreground lg:text-2xl">
        {tile.title}
      </h3>

      <p className="text-sm font-medium leading-snug text-muted-foreground">
        {tile.subtitle}
      </p>
    </Link>
  );
};

export default ServiceNavTileCard;
