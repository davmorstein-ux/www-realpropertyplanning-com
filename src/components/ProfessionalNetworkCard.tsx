import { Link } from "react-router-dom";
import type { ProfessionalNetworkTile } from "./professional-network-tiles-data";

/**
 * Finalized premium professional-network tile.
 * Uses the newest cinematic tile imagery only — no legacy icon generations.
 * Cards in a grid row share one height (h-full / flex-1, Oct 23, 2026), so a
 * two-line title no longer makes its card taller than its neighbour.
 */
const ProfessionalNetworkCard = ({ tile }: { tile: ProfessionalNetworkTile }) => {
  return (
    <Link
      to={tile.href}
      aria-label={tile.altText}
      className="marquee-hover group relative flex h-full flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-card border border-gold/30 shadow-[0_12px_32px_-18px_hsl(var(--navy)/0.55)] group-hover:shadow-[0_22px_46px_-22px_hsl(var(--navy)/0.7)] transition-shadow duration-300">
        {/* Photo box is fixed at 5:4 (the tile images are 1402x1122) and the image
            fills it absolutely: a sitewide rule gives images their natural
            height, so a wider photo (probate attorneys, 912x569) made its
            tile shorter than the rest (Oct 23, 2026). */}
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-cream">
          <img
            src={tile.imageSrc}
            alt={tile.altText}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            sizes="100vw"
            decoding="async"
          />
        </div>
        <h3 className="flex min-h-[74px] w-full flex-1 items-center justify-center px-3 py-3 text-center font-serif font-semibold text-navy text-[18px] md:text-[19px] leading-tight bg-card">
          {tile.title}
        </h3>
      </div>
    </Link>
  );
};

export default ProfessionalNetworkCard;
