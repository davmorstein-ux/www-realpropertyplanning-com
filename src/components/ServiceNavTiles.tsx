import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import ProfessionalImageTile, { type ProfessionalImageTileData } from "./ProfessionalImageTile";
import { tileCategories } from "./service-nav-tiles-data";

import imgAttorneys from "@/assets/professionals/attorneys-tile-washington.webp";
import imgCpas from "@/assets/professionals/cpas-tile-washington.webp";
import imgBroker from "@/assets/professionals/real-estate-broker-tile-washington.webp";
import imgAppraiser from "@/assets/professionals/real-estate-appraiser-tile-washington.webp";
import imgFinancial from "@/assets/professionals/financial-planning-tile-washington.webp";
import imgLending from "@/assets/professionals/mortgage-lending-tile-washington.webp";
import imgSeniorLiving from "@/assets/professionals/senior-living-tile-washington.webp";
import imgSeniorMove from "@/assets/professionals/senior-move-managers-tile-washington.webp";
import imgEstateLiquidation from "@/assets/professionals/estate-liquidation-tile-washington.webp";

const professionalImageTiles: ProfessionalImageTileData[] = [
  { alt: "Probate and estate attorneys real estate support Washington State", href: "/for-attorneys", src: imgAttorneys },
  { alt: "CPA estate and probate real estate guidance Washington State", href: "/for-cpas", src: imgCpas },
  { alt: "Real estate broker probate and senior transition sales Washington State", href: "/realtor", src: imgBroker },
  { alt: "Certified residential appraiser estate and probate valuations Washington State", href: "/real-estate-appraiser", src: imgAppraiser },
  { alt: "Financial planning real estate coordination estate transitions", href: "/for-financial-planners", src: imgFinancial },
  { alt: "Mortgage lending guidance estate and inherited property Washington State", href: "/lenders-and-financing-specialists", src: imgLending },
  { alt: "Senior living placement and transition guidance Puget Sound Washington", href: "/senior-living-and-relocation", src: imgSeniorLiving },
  { alt: "Senior move managers relocation services Washington State", href: "/senior-move-managers", src: imgSeniorMove },
  { alt: "Estate liquidation services Puget Sound Washington State", href: "/estate-liquidation", src: imgEstateLiquidation },
];

const ServiceNavTiles = () => {
  return (
    <section className="pt-3 pb-20 lg:pt-4 lg:pb-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-0 sm:px-1 lg:px-2">
        {/* 1. Heading */}
        <h2
          className="text-center font-serif text-red-900 tracking-tight mb-3"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          How can we help today?
        </h2>

        {/* 2. Search bar */}
        <div className="text-center mb-4">
          <SmartSearchBar searchOnly />
        </div>

        {/* 3. Oval prompt buttons — 2 rows of 2 */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <SmartSearchBar pillsOnly />
        </div>

        {tileCategories.map((category) => {
          const isProfessionals = category.label === "Professionals & Services";
          return (
            <div key={category.label} className="mb-20 last:mb-0">
              <div className="mx-auto max-w-[1200px] mb-10 mt-8">
                <div className="bg-navy rounded-lg px-6 py-4">
                  <h3
                    className="text-center text-primary-foreground tracking-[0.12em] uppercase leading-none font-bold text-3xl"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.5rem)" }}
                  >
                    {category.label}
                  </h3>
                </div>
              </div>
              {isProfessionals ? (
                <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                  {professionalImageTiles.map((tile) => (
                    <ProfessionalImageTile key={tile.href} tile={tile} />
                  ))}
                </div>
              ) : (
                <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start justify-items-center gap-0 sm:grid-cols-4 isolate">
                  {category.tiles.map((tile, i) => (
                    <ServiceNavTileCard key={tile.href + tile.title} tile={tile} index={i} />
                  ))}
                  {category.tiles.length % 4 !== 0 &&
                    Array.from({ length: 4 - (category.tiles.length % 4) }).map((_, i) => (
                      <div key={`placeholder-${i}`} className="invisible pointer-events-none" aria-hidden="true">
                        <ServiceNavTileCard tile={category.tiles[0]} index={category.tiles.length + i} />
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceNavTiles;
