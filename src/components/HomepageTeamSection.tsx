import ProfessionalImageTile, { type ProfessionalImageTileData } from "./ProfessionalImageTile";

import imgAttorneys from "@/assets/Attorneys_ring_webP.webp";
import imgCPAs from "@/assets/CPAs_ring_webP.webp";
import imgBroker from "@/assets/Real_Estate_Broker_webP.png";
import imgAppraiser from "@/assets/Real_Estate_Apppraiser_webP.png";
import imgFinancial from "@/assets/professionals/financial-planning-professional-washington.webp";
import imgMortgage from "@/assets/Mortgage_Lender_webP.webp";
import imgSeniorLiving from "@/assets/Senior_Living_ring_webP.webp";
import imgSeniorMove from "@/assets/SEnior_Move_Managers_ring_webP.png";
import imgEstateLiquidation from "@/assets/Estate_Liquidation_webP.png";

const tiles: ProfessionalImageTileData[] = [
  { src: imgAttorneys, alt: "Attorneys", label: "Attorneys", href: "/for-attorneys" },
  { src: imgCPAs, alt: "CPAs", label: "CPAs", href: "/for-cpas" },
  { src: imgBroker, alt: "Real Estate Broker", label: "Real Estate Broker", href: "/realtor" },
  { src: imgAppraiser, alt: "Real Estate Appraiser", label: "Real Estate Appraiser", href: "/real-estate-appraiser" },
  { src: imgFinancial, alt: "Financial Planning", label: "Financial Planning", href: "/for-financial-planners" },
  { src: imgMortgage, alt: "Mortgage Lending", label: "Mortgage Lending", href: "/lenders-and-financing-specialists" },
  { src: imgSeniorLiving, alt: "Senior Living", label: "Senior Living", href: "/senior-living-and-relocation" },
  { src: imgSeniorMove, alt: "Senior Move Managers", label: "Senior Move Managers", href: "/senior-move-managers" },
  { src: imgEstateLiquidation, alt: "Estate Liquidation", label: "Estate Liquidation", href: "/estate-liquidation" },
];

const HomepageTeamSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[680px] mx-auto text-center mb-12">
          <h2 className="font-serif text-[hsl(0,70%,30%)] font-semibold mb-6 text-xl">
            You Do Not Have To Navigate This Alone
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Families dealing with inherited property, probate, or a senior housing transition rarely need just one kind of help. They need a coordinated team — a real estate professional, an attorney, a care advisor, a financial planner — all working together. Real Property Planning connects families with the right professionals for their situation, across Western Washington. Real Property Planning is a Corporate Partner of the Aging Life Care Association, a recognized member of the National Association of Senior Advocates, and a member of the National Association of Estate Planners & Councils — professional affiliations that reflect a commitment to this work that goes beyond real estate.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center" style={{
          gap: "32px",
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "960px",
        }}>
          {tiles.map((tile) => (
            <ProfessionalImageTile key={tile.href} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeamSection;
