import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  return (
    <Link
      to={tile.href}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-border/80 bg-card px-6 py-8 sm:py-9 text-center shadow-[0_4px_20px_-4px_hsl(var(--foreground)/0.08)] transition-all duration-[120ms] ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_28px_-6px_hsl(var(--foreground)/0.13)] active:translate-y-px active:scale-[0.97] active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {/* Top inner highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.07] to-transparent" />
      {/* Bottom edge depth line */}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/[0.10] to-transparent" />

      <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
        <tile.icon className="h-6 w-6 text-foreground/70" strokeWidth={1.8} />
      </div>

      <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight text-foreground lg:text-[1.65rem]">
        {tile.title}
      </h3>

      <p className="text-[0.85rem] font-medium leading-snug text-muted-foreground">
        {tile.subtitle}
      </p>
    </Link>
  );
};

export default ServiceNavTileCard;
