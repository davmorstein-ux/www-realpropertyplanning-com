import imgAttorneys from "@/assets/professionals/attorneys-professional-washington.webp";
import imgCPAs from "@/assets/professionals/cpas-professional-washington.webp";
import imgBroker from "@/assets/professionals/real-estate-broker-professional-washington.webp";
import imgAppraiser from "@/assets/professionals/real-estate-appraiser-professional-washington.webp";
import imgFinancial from "@/assets/professionals/financial-planning-professional-washington.webp";
import imgMortgage from "@/assets/professionals/mortgage-lender-professional-washington.webp";
import imgSeniorLiving from "@/assets/professionals/senior-living-professional-washington.webp";
import imgSeniorMove from "@/assets/professionals/senior-move-managers-professional-washington.webp";
import imgEstateLiquidation from "@/assets/professionals/estate-liquidation-professional-washington.webp";

const tiles = [
  { img: imgAttorneys, label: "Attorneys" },
  { img: imgCPAs, label: "CPAs" },
  { img: imgBroker, label: "Real Estate Broker" },
  { img: imgAppraiser, label: "Real Estate Appraiser" },
  { img: imgFinancial, label: "Financial Planning" },
  { img: imgMortgage, label: "Mortgage Lending" },
  { img: imgSeniorLiving, label: "Senior Living" },
  { img: imgSeniorMove, label: "Senior Move Managers" },
  { img: imgEstateLiquidation, label: "Estate Liquidation" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto justify-items-center">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className="w-56 h-72 bg-[#faf8f4] rounded-2xl border-2 border-yellow-700/40 shadow-md flex flex-col items-center justify-start p-4 gap-3"
            >
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-yellow-600 shrink-0">
                <img
                  src={tile.img}
                  alt={tile.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="h-12 flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-center text-primary leading-tight">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeamSection;
