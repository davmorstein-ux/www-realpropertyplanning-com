import { Link } from "react-router-dom";

import imgAttorneys from "@/assets/Attorneys_Trans.png";
import imgCPAs from "@/assets/CPAs_trans.png";
import imgBroker from "@/assets/Real_Estate_Broker_Trans.png";
import imgAppraiser from "@/assets/Real_Estate_Appraiser_trans.png";
import imgFinancial from "@/assets/Financial_Planning_trans.png";
import imgMortgage from "@/assets/Mortgage_Lenders_Trans.png";
import imgSeniorLiving from "@/assets/Senior_Living_Trans.png";
import imgSeniorMove from "@/assets/Senior_Move_Managers_Trans.png";
import imgEstateLiquidation from "@/assets/Estate_Liquidations_Trans.png";

const tiles = [
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

const HomepageTeamSection = () => {
  return (
    <section style={{ background: "transparent", padding: "64px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto 48px auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              color: "hsl(0,70%,30%)",
              fontWeight: 600,
              marginBottom: "24px",
              fontSize: "1.25rem",
            }}
          >
            You Do Not Have To Navigate This Alone
          </h2>
          <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            Families dealing with inherited property, probate, or a senior housing transition rarely need just one kind
            of help. They need a coordinated team — a real estate professional, an attorney, a care advisor, a financial
            planner — all working together. Real Property Planning connects families with the right professionals for
            their situation, across Western Washington.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
          {tiles.map((tile) => (
            <Link
              key={tile.href}
              to={tile.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                padding: "0",
                width: "200px",
                flexShrink: 0,
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={tile.src}
                alt={tile.label}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                  display: "block",
                  backgroundColor: "rgb(249, 246, 241)",
                }}
                loading="lazy"
              />
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1a2744",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {tile.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTeamSection;
