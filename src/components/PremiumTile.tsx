import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * PremiumTile — the approved site-wide tile style.
 * Matches the "Related Resources" cards (tile-white): white face, gold trim,
 * soft multi-layer shadow, generous padding, hover lift.
 *
 * Use this component for ANY tile/card across the site to keep visuals consistent.
 */
interface PremiumTileProps {
  to: string;
  title: ReactNode;
  description?: ReactNode;
  /** Optional small badge above the title (e.g. "FREE RESOURCE"). */
  badge?: string;
  /** Optional icon node rendered above the title. */
  icon?: ReactNode;
  /** CTA label at the bottom. Defaults to "Learn more". */
  cta?: string;
  /** Min height — keeps a tidy grid. */
  minHeight?: string;
  className?: string;
}

const PremiumTile = ({
  to,
  title,
  description,
  badge,
  icon,
  cta = "Learn more",
  minHeight = "min-h-[252px] sm:min-h-[280px]",
  className = "",
}: PremiumTileProps) => (
  <Link
    to={to}
    className={`tile-white group block h-full ${minHeight} ${className}`}
  >
    <div className="tile-white__inner h-full">
      <div className="tile-white__face h-full">
        <div className="flex h-full flex-col justify-between px-6 pb-6 pt-8 sm:px-7 sm:pb-7 sm:pt-9">
          <div>
            {icon && <div className="mb-4">{icon}</div>}
            {badge && (
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2">
                {badge}
              </span>
            )}
            <h3
              className="mb-3 font-serif text-xl sm:text-[1.38rem] font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent"
              style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
            >
              {title}
            </h3>
            {description && (
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors duration-300 group-hover:text-[hsl(var(--gold-dark))]">
            <span>{cta}</span>
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default PremiumTile;
