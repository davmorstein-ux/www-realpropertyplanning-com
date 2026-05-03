import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import ProfessionalImageTile, { type ProfessionalImageTileData } from "./ProfessionalImageTile";
import { tileCategories } from "./service-nav-tiles-data";

import imgAttorneys from "@/assets/professionals/attorneys-tile-washington-v4.png";
import imgCpas from "@/assets/professionals/cpas-tile-washington-v5.png";
import imgBroker from "@/assets/professionals/real-estate-broker-tile-washington-v3.png";
import imgAppraiser from "@/assets/professionals/real-estate-appraiser-tile-washington-v3.png";
import imgFinancial from "@/assets/professionals/financial-planning-tile-washington-v3.png";
import imgLending from "@/assets/professionals/mortgage-lending-tile-washington-v3.png";
import imgSeniorLiving from "@/assets/professionals/senior-living-tile-washington-v3.png";
import imgSeniorMove from "@/assets/professionals/senior-move-managers-tile-washington-v3.png";

import imgExecutors from "@/assets/roles/executors-tile-washington-v2.webp";
import imgTrustees from "@/assets/roles/trustees-tile-washington.webp";
import imgWills from "@/assets/roles/wills-tile-washington-v2.webp";
import imgPowerOfAttorney from "@/assets/roles/power-of-attorney-tile-washington.webp";
import imgProbateTerms from "@/assets/roles/probate-terms-tile-washington.webp";
import imgTheProcess from "@/assets/roles/the-probate-process-tile-washington.webp";

import imgProbateSales from "@/assets/planning/probate-sales-tile-washington.webp";
import imgSeniorPlacement from "@/assets/planning/senior-placement-tile-washington.webp";
import imgHomeValues from "@/assets/planning/home-values-pricing-tile-washington.webp";
import imgSeniorHomeSales from "@/assets/planning/senior-home-sales-tile-washington.webp";
import imgPayingSeniorLiving from "@/assets/planning/paying-for-senior-living-tile-washington.webp";
import imgServiceAreas from "@/assets/planning/service-areas-tile-washington.webp";
import imgGuidesResources from "@/assets/planning/guides-resources-tile-washington.webp";
import imgGrayDivorce from "@/assets/planning/gray-divorce-tile-washington.webp";

const professionalImageTiles: ProfessionalImageTileData[] = [
  { alt: "Probate and estate attorneys real estate support Washington State", href: "/for-attorneys", src: imgAttorneys },
  { alt: "CPA estate and probate real estate guidance Washington State", href: "/for-cpas", src: imgCpas },
  { alt: "Real estate broker probate and senior transition sales Washington State", href: "/realtor", src: imgBroker },
  { alt: "Certified residential appraiser estate and probate valuations Washington State", href: "/real-estate-appraiser", src: imgAppraiser },
  { alt: "Financial planning real estate coordination estate transitions", href: "/for-financial-planners", src: imgFinancial },
  { alt: "Mortgage lending guidance estate and inherited property Washington State", href: "/lenders-and-financing-specialists", src: imgLending },
  { alt: "Senior living advisor placement and transition guidance Washington State", href: "/senior-living-and-relocation", src: imgSeniorLiving },
  { alt: "Senior move managers relocation services Washington State", href: "/senior-move-managers", src: imgSeniorMove },
  { alt: "Estate liquidation services Puget Sound Washington State", href: "/estate-liquidation", src: imgEstateLiquidation },
  { alt: "Medicare providers guidance and support Washington State", href: "/medicare-providers", src: imgMedicare },
];

const rolesImageTiles: ProfessionalImageTileData[] = [
  { alt: "Executors roles and responsibilities probate Washington State", href: "/executors", src: imgExecutors },
  { alt: "Trustees roles and responsibilities estate Washington State", href: "/trustees", src: imgTrustees },
  { alt: "Wills last will and testament guidance Washington State", href: "/wills", src: imgWills },
  { alt: "Power of Attorney roles and responsibilities Washington State", href: "/power-of-attorney", src: imgPowerOfAttorney },
  { alt: "Probate terms and terminology glossary Washington State", href: "/terminology", src: imgProbateTerms },
  { alt: "The probate process steps overview Washington State", href: "/how-the-process-works", src: imgTheProcess },
];

const planningImageTiles: ProfessionalImageTileData[] = [
  { alt: "Probate sales estate inventory Washington State", href: "/probate-estate-sales", src: imgProbateSales },
  { alt: "Senior placement advisor housing transition Washington State", href: "/senior-placement", src: imgSeniorPlacement },
  { alt: "Home values and pricing estate property Washington State", href: "/why-valuation-matters", src: imgHomeValues },
  { alt: "Senior home sales transition Washington State", href: "/senior-transitions", src: imgSeniorHomeSales },
  { alt: "Paying for senior living costs guidance Washington State", href: "/sell-house-fund-senior-living", src: imgPayingSeniorLiving },
  { alt: "Service areas Washington State counties coverage", href: "/counties", src: imgServiceAreas },
  { alt: "Guides and resources estate planning Washington State", href: "/guides-and-resources", src: imgGuidesResources },
  { alt: "Gray divorce family home guidance Washington State", href: "/gray-divorce", src: imgGrayDivorce },
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
          const isRoles = category.label === "Roles & Responsibilities";
          const isPlanning = category.label === "Planning & Next Steps";
          const imageTiles = isProfessionals
            ? professionalImageTiles
            : isRoles
              ? rolesImageTiles
              : isPlanning
                ? planningImageTiles
                : null;
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
              {imageTiles ? (
                <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 px-2 sm:px-0">
                  {imageTiles.map((tile) => (
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
