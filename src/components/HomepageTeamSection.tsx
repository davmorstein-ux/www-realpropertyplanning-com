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

const ServiceTile = ({ image, label, alt }: { image: string; label: string; alt: string }) => (
  <div style={{
    width: "220px",
    height: "280px",
    backgroundColor: "#faf8f4",
    borderRadius: "16px",
    border: "2px solid rgba(180, 140, 50, 0.4)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 12px 12px 12px",
    gap: "16px",
  }}>
    <div style={{
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "4px solid #b8962e",
      flexShrink: 0,
    }}>
      <img src={image} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
    </div>
    <div style={{
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <p style={{
        fontFamily: "serif",
        fontSize: "1.1rem",
        fontWeight: 600,
        textAlign: "center",
        color: "#1a2744",
        margin: 0,
        lineHeight: 1.3,
      }}>
        {label}
      </p>
    </div>
  </div>
);

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

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          maxWidth: "1060px",
          margin: "0 auto",
        }}>
          {tiles.map((tile) => (
            <ServiceTile key={tile.label} image={tile.img} label={tile.label} alt={tile.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeamSection;
