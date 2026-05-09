import { Link } from "react-router-dom";
import type { ProfessionalNetworkTile } from "./professional-network-tiles-data";

/**
 * Premium professional-network tile.
 * Navy gradient card with 3D icon centered + serif label below.
 * Used in the homepage preview and the full Professional Network grid.
 */
const ProfessionalNetworkCard = ({ tile }: { tile: ProfessionalNetworkTile }) => {
  return (
    <Link
      to={tile.href}
      aria-label={tile.altText}
      className="group relative flex flex-col items-center justify-start text-center rounded-2xl bg-gradient-to-b from-navy to-navy-dark border-2 border-gold/30 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.45)] hover:border-gold hover:shadow-[0_18px_40px_-16px_rgba(27,43,75,0.65)] hover:-translate-y-1 transition-all duration-300 px-4 pt-6 pb-5 min-h-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-cream/95 shadow-inner mb-4">
        <img
          src={tile.iconSrc}
          alt=""
          aria-hidden="true"
          className="w-14 h-14 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="font-serif font-semibold text-primary-foreground text-[17px] md:text-[18px] leading-tight">
        {tile.title}
      </h3>
    </Link>
  );
};

export default ProfessionalNetworkCard;
