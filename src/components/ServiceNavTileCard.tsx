import { Link } from "react-router-dom";
import type { ServiceTile } from "./service-nav-tiles-data";
import tileShell from "@/assets/property-services-tile-shell-washington.webp";

/* SEO-enriched alt text for each tile */
const tileAltText: Record<string, string> = {
  "Attorneys": "Probate and estate attorneys real estate support Washington State",
  "CPAs": "CPA estate and probate real estate guidance Washington State",
  "Financial\nPlanning": "Financial planning real estate coordination estate transitions",
  "Mortgage\nLending": "Mortgage lending guidance estate and inherited property Washington State",
  "Estate\nLiquidation": "Estate liquidation services Puget Sound Washington State",
  "Realtor": "Real estate broker probate and senior transition sales Washington State",
  "Real Estate\nAppraiser": "Certified residential appraiser estate and probate valuations Washington State",
  "Senior Living": "Senior living placement and transition guidance Puget Sound Washington",
  "Executors": "Executor and personal representative real estate guidance Washington State",
  "Trustees": "Trustee estate property guidance Washington State",
  "Wills": "Wills and estate planning real estate Washington State",
  "Power of\nAttorney": "Power of attorney real estate guidance Washington State",
  "Probate Terms": "Probate terminology glossary Washington State",
  "Probate Sales": "Probate real estate sales Washington State King County Snohomish",
  "The Process": "How probate real estate sales work Washington State",
  "Home Values\n& Pricing": "Estate home valuation and pricing Puget Sound Washington",
  "Senior\nTransitions": "Senior housing transition home sale Puget Sound Washington State",
  "Service Areas": "Real estate service areas King Snohomish Pierce Kitsap County Washington",
  "Guides &\nResources": "Probate estate and senior transition guides Washington State",
};

const ServiceNavTileCard = ({ tile, index, columns = 3 }: { tile: ServiceTile; index: number; columns?: number }) => {
  const contentStyle: React.CSSProperties = {};
  if (tile.contentOffsetY) {
    contentStyle['--tw-translate-y' as string] = `calc(-10.2% + ${tile.contentOffsetY})`;
  }
  if (tile.mobileContentOffsetY) {
    contentStyle['--mobile-offset' as string] = tile.mobileContentOffsetY;
  }

  const totalRows = Math.ceil(18 / columns);
  const row = Math.floor(index / columns);
  const baseZIndex = (totalRows - row) * 2;

  const tileName =
    tile.title === "Wills"
      ? "wills"
      : tile.title === "Senior Moves"
        ? "senior-moves"
        : tile.title === "Probate Sales"
          ? "probate-sales"
          : tile.title === "The Process"
            ? "the-process"
            : tile.title === "Home Value"
              ? "home-value"
              : tile.title === "Lending"
                ? "lending"
                : tile.title === "CPAs"
                  ? "cpas"
                  : tile.title === "Realtor"
                    ? "realtor"
                    : tile.title.includes("Appraiser")
                      ? "appraiser"
                      : tile.title === "Probate Terms"
                        ? "probate-terms"
                         : tile.title === "Senior Living"
                           ? "senior-living"
                           : tile.title === "Service Areas"
                             ? "service-areas"
                              : tile.title.includes("Liquidation")
                                ? "estate-liquidation"
                                : tile.title.includes("Power of")
                                  ? "power-of-attorney"
                                  : undefined;

  const iconAlt = tileAltText[tile.title] || tile.title.replace(/\n/g, " ");

  const tileVisual = (
    <>
      <img
        src={tileShell}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full pointer-events-none select-none drop-shadow-[0_12px_24px_hsl(220_18%_20%/0.16)]"
        draggable={false}
       loading="lazy"/>

      <span
        className={`absolute inset-[12%] flex flex-col items-center justify-center px-[6px] py-[4px] pointer-events-none sm:px-[10px] sm:py-[6px] ${tile.contentOffsetY ? '' : '-translate-y-[10.2%]'} ${tile.mobileContentOffsetY ? 'has-mobile-offset' : ''}`}
        style={Object.keys(contentStyle).length > 0 ? contentStyle : undefined}
      >
        <img
          src={tile.iconSrc}
          alt={iconAlt}
          className={`tile-icon mx-auto w-[45%] max-h-[38%] object-contain drop-shadow-lg ${tile.mobileIconDown ? 'mobile-icon-down' : ''}`}
          style={{
            ...(tile.iconOffsetY ? { transform: `translateY(${tile.iconOffsetY})` } : {}),
            ...(tile.iconScale && !tile.iconOffsetY ? { transform: `scale(${tile.iconScale})` } : {}),
            ...(tile.iconScale && tile.iconOffsetY ? { transform: `translateY(${tile.iconOffsetY}) scale(${tile.iconScale})` } : {}),
            ...(tile.mobileIconOffsetY ? { '--mobile-icon-mt': tile.mobileIconOffsetY } as React.CSSProperties : {}),
          }}
          loading="lazy"
        />
        <h3
          className={`-mt-6 max-w-[92%] text-center font-serif text-[0.8rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] whitespace-pre-line ${tile.labelSpacing ? 'tile-label-tight' : ''} ${tile.mobileTextDown ? 'mobile-text-down' : ''}`}
          data-mobile-tight={tile.labelSpacing ? "true" : undefined}
          data-tile-id={tile.title === "CPAs" ? "cpas" : tile.title.includes("Senior Living") ? "senior-living" : tile.title.includes("Financial") ? "financial-planning" : tile.title === "Senior Moves" ? "senior-moves" : tile.title === "Probate Sales" ? "probate-sales" : tile.title === "The Process" ? "the-process" : tile.title === "Home Value" ? "home-value" : tile.title === "Lending" ? "lending" : tile.title === "Wills" ? "wills" : tile.title === "Realtor" ? "realtor" : tile.title.includes("Appraiser") ? "appraiser" : tile.title.includes("Liquidation") ? "estate-liquidation" : tile.title.includes("Power of") ? "power-of-attorney" : undefined}
          style={tile.textOffsetY ? { transform: `translateY(${tile.textOffsetY})` } : undefined}
        >
          {tile.title}
        </h3>
      </span>
    </>
  );

  return (
    <div
      data-tile-name={tileName}
      className="premium-tile relative block w-full text-center -my-[22%] -mx-[4%] scale-[1.45] sm:-my-[22%] sm:-mx-[6%] sm:scale-[1.588] pointer-events-none hover:!z-[100]"
      style={{ zIndex: baseZIndex }}
    >
      <div aria-hidden="true" className="relative block w-full h-full pointer-events-none">
        {tileVisual}
      </div>

      <Link
        to={tile.href}
        aria-label={iconAlt}
        className="service-nav-tile-mobile-hitbox absolute block pointer-events-auto sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />

      <Link
        to={tile.href}
        aria-label={iconAlt}
        className="service-nav-tile-link absolute hidden pointer-events-auto sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  );
};

export default ServiceNavTileCard;
