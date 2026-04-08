import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/tile-shell.png";

const ServiceNavTileCard = ({ tile }: { tile: ServiceTile }) => {
  // Build the inline style for the content container
  const contentStyle: React.CSSProperties = {};
  if (tile.contentOffsetY) {
    contentStyle['--tw-translate-y' as string] = `calc(-10.2% + ${tile.contentOffsetY})`;
  }
  if (tile.mobileContentOffsetY) {
    contentStyle['--mobile-offset' as string] = tile.mobileContentOffsetY;
  }

  return (
    <Link
      to={tile.href}
      data-tile-name={tile.title === "Wills" ? "wills" : tile.title === "Senior Moves" ? "senior-moves" : tile.title === "Probate Sales" ? "probate-sales" : tile.title === "The Process" ? "the-process" : tile.title === "Home Value" ? "home-value" : tile.title === "Lending" ? "lending" : tile.title === "CPAs" ? "cpas" : tile.title === "Realtor" ? "realtor" : undefined}
      className="premium-tile group relative block w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 -my-[22%] -mx-[4%] scale-[1.45] sm:-my-[22%] sm:-mx-[6%] sm:scale-[1.588]"
    >
      {/* Shell image flows naturally — defines the tile size */}
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full pointer-events-none select-none drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
      />

      {/* Icon + label centered together inside the gold trim ring */}
      <span
        className={`absolute inset-[12%] flex flex-col items-center justify-center px-[6px] py-[4px] sm:px-[10px] sm:py-[6px] ${tile.contentOffsetY ? '' : '-translate-y-[10.2%]'} ${tile.mobileContentOffsetY ? 'has-mobile-offset' : ''}`}
        style={Object.keys(contentStyle).length > 0 ? contentStyle : undefined}
      >
        <img
          src={tile.iconSrc}
          alt={tile.title}
          className={`tile-icon mx-auto w-[45%] max-h-[38%] object-contain drop-shadow-lg sm:transition-transform sm:duration-300 sm:ease-out ${tile.iconOffsetY ? '' : 'sm:group-hover:scale-110'} ${tile.mobileIconDown ? 'mobile-icon-down' : ''}`}
          style={{
            ...(tile.iconOffsetY ? { transform: `translateY(${tile.iconOffsetY})`, transition: 'transform 0.3s ease-out' } : {}),
            ...(tile.iconScale && !tile.iconOffsetY ? { transform: `scale(${tile.iconScale})`, transition: 'transform 0.3s ease-out' } : {}),
            ...(tile.iconScale && tile.iconOffsetY ? { transform: `translateY(${tile.iconOffsetY}) scale(${tile.iconScale})`, transition: 'transform 0.3s ease-out' } : {}),
            ...(tile.mobileIconOffsetY ? { '--mobile-icon-mt': tile.mobileIconOffsetY } as React.CSSProperties : {}),
          }}
          onMouseEnter={tile.iconOffsetY || tile.iconScale ? (e) => {
            if (window.innerWidth >= 640) {
              const yPart = tile.iconOffsetY ? `translateY(${tile.iconOffsetY})` : '';
              const baseScale = tile.iconScale || 1;
              (e.target as HTMLElement).style.transform = `${yPart} scale(${baseScale * 1.1})`;
            }
          } : undefined}
          onMouseLeave={tile.iconOffsetY || tile.iconScale ? (e) => {
            if (window.innerWidth >= 640) {
              const yPart = tile.iconOffsetY ? `translateY(${tile.iconOffsetY})` : '';
              const baseScale = tile.iconScale || 1;
              (e.target as HTMLElement).style.transform = `${yPart} scale(${baseScale})`;
            }
          } : undefined}
          loading="lazy"
        />
        <h3
          className={`-mt-6 max-w-[92%] text-center font-serif text-[0.8rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] whitespace-pre-line ${tile.labelSpacing ? 'tile-label-tight' : ''} ${tile.mobileTextDown ? 'mobile-text-down' : ''}`}
          data-mobile-tight={tile.labelSpacing ? "true" : undefined}
          data-tile-id={tile.title === "CPAs" ? "cpas" : tile.title.includes("Senior Living") ? "senior-living" : tile.title.includes("Financial") ? "financial-planning" : tile.title === "Senior Moves" ? "senior-moves" : tile.title === "Probate Sales" ? "probate-sales" : tile.title === "The Process" ? "the-process" : tile.title === "Home Value" ? "home-value" : tile.title === "Lending" ? "lending" : tile.title === "Wills" ? "wills" : tile.title === "Realtor" ? "realtor" : tile.title.includes("Appraiser") ? "appraiser" : undefined}
          style={tile.textOffsetY ? { transform: `translateY(${tile.textOffsetY})` } : undefined}
        >
          {tile.title}
        </h3>
      </span>
    </Link>
  );
};

export default ServiceNavTileCard;
