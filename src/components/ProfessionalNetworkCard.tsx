import { Link } from "react-router-dom";
import type { ProfessionalNetworkTile } from "./professional-network-tiles-data";

/**
 * Finalized premium professional-network tile.
 * Uses the newest cinematic tile imagery only — no legacy icon generations.
 */
const ProfessionalNetworkCard = ({ tile }: { tile: ProfessionalNetworkTile }) => {
  return (
    <Link
      to={tile.href}
      aria-label={tile.altText}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-gold/30 shadow-[0_12px_32px_-18px_hsl(var(--navy)/0.55)] hover:border-gold hover:shadow-[0_22px_46px_-22px_hsl(var(--navy)/0.7)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] w-full bg-cream">
        <img
          src={tile.imageSrc}
          alt={tile.altText}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          loading="lazy"
        />
      </div>
      <h3 className="flex min-h-[74px] w-full items-center justify-center px-3 py-3 text-center font-serif font-semibold text-navy text-[18px] md:text-[19px] leading-tight bg-card">
        {tile.title}
      </h3>
    </Link>
  );
};

export default ProfessionalNetworkCard;
