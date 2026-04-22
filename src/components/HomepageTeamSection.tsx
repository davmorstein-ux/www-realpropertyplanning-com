import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconFinancialPlanning from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconSeniorMoves from "@/assets/icons/senior-movers-relocation-hero-washington.webp";
import iconAppraiser from "@/assets/icons/real-estate-appraiser-icon-washington.webp";
import iconRealtor from "@/assets/icons/realtor-real-estate-agent-icon-washington.webp";
import iconExecutors from "@/assets/icons/probate-executors-services-icon-washington.webp";

const tiles = [
  { icon: iconRealtor, label: "Real Estate Broker" },
  { icon: iconAppraiser, label: "Certified Appraiser" },
  { icon: iconAttorneys, label: "Estate Attorney" },
  { icon: iconFinancialPlanning, label: "Financial Planner" },
  { icon: iconSeniorMoves, label: "Senior Move Manager" },
  { icon: iconExecutors, label: "Executor Advisor" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {tiles.map((tile) => (
            <div
              key={tile.label}
              className="bg-card rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center text-center"
            >
              <img
                src={tile.icon}
                alt={tile.label}
                className="w-36 h-36 object-contain mb-3"
                loading="lazy"
              />
              <span className="font-semibold text-base text-foreground">{tile.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeamSection;
