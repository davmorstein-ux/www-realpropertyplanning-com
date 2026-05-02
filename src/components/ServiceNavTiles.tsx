import { Link } from "react-router-dom";
import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import ProfessionalImageTile, { type ProfessionalImageTileData } from "./ProfessionalImageTile";
import { tileCategories } from "./service-nav-tiles-data";

import imgAttorneys from "@/assets/Atorneys_webP.webp";
import imgCPAs from "@/assets/CPAs_webP.webp";
import imgBroker from "@/assets/Real_Estate_Broker_webP.webp";
import imgAppraiser from "@/assets/Real_Estate_Appraiser_webP.webp";
import imgFinancial from "@/assets/Financial_Planning_webP.webp";
import imgMortgage from "@/assets/Mortgage_Lending_webP.webp";
import imgSeniorLiving from "@/assets/Senior_Living_webP.webp";
import imgSeniorMove from "@/assets/SEnior_Move_Managers_webP.webp";
import imgEstateLiquidation from "@/assets/Estate_Liquidation_webP.webp";

const professionalTiles = [
  { src: imgAttorneys, label: "Attorneys", href: "/for-attorneys" },
  { src: imgCPAs, label: "CPAs", href: "/for-cpas" },
  { src: imgBroker, label: "Real Estate Broker", href: "/realtor" },
  { src: imgAppraiser, label: "Real Estate Appraiser", href: "/real-estate-appraiser" },
  { src: imgFinancial, label: "Financial Planning", href: "/for-financial-planners" },
  { src: imgMortgage, label: "Mortgage Lending", href: "/lenders-and-financing-specialists" },
  { src: imgSeniorLiving, label: "Senior Living", href: "/senior-living-and-relocation" },
  { src: imgSeniorMove, label: "Senior Move Managers", href: "/senior-move-managers" },
  { src: imgEstateLiquidation, label: "Estate Liquidation", href: "/estate-liquidation" },
];

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

const rolesImageTiles: ProfessionalImageTileData[] = [
  { alt: "Executors roles and responsibilities probate Washington State", href: "/executors", src: imgExecutors, label: "Executors" },
  { alt: "Trustees roles and responsibilities estate Washington State", href: "/trustees", src: imgTrustees, label: "Trustees" },
  { alt: "Wills last will and testament guidance Washington State", href: "/wills", src: imgWills, label: "Wills" },
  { alt: "Power of Attorney roles and responsibilities Washington State", href: "/power-of-attorney", src: imgPowerOfAttorney, label: "Power of Attorney" },
  { alt: "Probate terms and terminology glossary Washington State", href: "/terminology", src: imgProbateTerms, label: "Probate Terms" },
  { alt: "The probate process steps overview Washington State", href: "/how-the-process-works", src: imgTheProcess, label: "The Process" },
];

const planningImageTiles: ProfessionalImageTileData[] = [
  { alt: "Probate sales estate inventory Washington State", href: "/probate-estate-sales", src: imgProbateSales, label: "Probate Sales" },
  { alt: "Senior placement advisor housing transition Washington State", href: "/senior-placement", src: imgSeniorPlacement, label: "Senior Placement" },
  { alt: "Home values and pricing estate property Washington State", href: "/why-valuation-matters", src: imgHomeValues, label: "Home Values" },
  { alt: "Senior home sales transition Washington State", href: "/senior-transitions", src: imgSeniorHomeSales, label: "Senior Home Sales" },
  { alt: "Paying for senior living costs guidance Washington State", href: "/sell-house-fund-senior-living", src: imgPayingSeniorLiving, label: "Paying for Senior Living" },
  { alt: "Service areas Washington State counties coverage", href: "/counties", src: imgServiceAreas, label: "Service Areas" },
  { alt: "Guides and resources estate planning Washington State", href: "/guides-and-resources", src: imgGuidesResources, label: "Guides & Resources" },
  { alt: "Gray divorce family home guidance Washington State", href: "/gray-divorce", src: imgGrayDivorce, label: "Gray Divorce" },
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
            ? null
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
              {isProfessionals ? (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "24px",
                  padding: "32px",
                  justifyItems: "center",
                  maxWidth: "960px",
                  margin: "0 auto",
                }} className="!grid-cols-2 sm:!grid-cols-4">
                  {professionalTiles.map((tile) => (
                    <Link
                      key={tile.label}
                      to={tile.href}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <img
                        src={tile.src}
                        alt={tile.label}
                        style={{ width: "180px", height: "180px", objectFit: "contain" }}
                        loading="lazy"
                      />
                      <span style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#1a2744",
                        textAlign: "center",
                      }}>
                        {tile.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : imageTiles ? (
                <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
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
