import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToAFHClub from "@/components/BackToAFHClub";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";

type Tile = {
  to: string;
  img: string;
  alt: string;
  pill: string;
  title: string;
  desc: string;
  accent: "blue" | "green" | "plum";
};

const TILES: Tile[] = [
  {
    to: "/afh-club/afh-property-score",
    img: "/afh-property-score-cover-v2.webp",
    alt: "AFH Property Score: Screen It Before You Tour It. A sample score of 85 out of 100 across bedrooms, bathrooms, access, safety, and site.",
    pill: "Start here: for buyers",
    title: "AFH Property Score",
    desc: "Could this house work as an adult family home? Answer questions from the listing in a few minutes and get a 100-point score for the building, a feasibility check, the likely conversion projects, and a tape-measure checklist for the showing.",
    accent: "plum",
  },
  {
    to: "/afh-club/afh-roi-calculator",
    img: "/afh-roi-calculator-cover-v2.webp",
    alt: "AFH ROI Calculator",
    pill: "For buyers & investors",
    title: "AFH ROI Calculator",
    desc: "Build gross revenue from reviewed private-pay and DSHS Medicaid rates for the home's market and bed mix, then see cash-on-cash return, cap rate, NOI, and monthly cash flow before you buy.",
    accent: "blue",
  },
  {
    to: "/afh-club/afh-valuation-estimator",
    img: "/afh-valuation-estimator-cover-v3.webp",
    alt: "AFH Valuation Estimator",
    pill: "For sellers",
    title: "AFH Valuation Estimator",
    desc: "Estimate your AFH business and property value using income capitalization, with a market-rate revenue builder if you don't have the P&L in front of you — before you call a broker.",
    accent: "green",
  },
  {
    to: "/afh-club/afh-financing-calculator",
    img: "/afh-costs-fees-v2.webp",
    alt: "AFH Occupancy & Financing Calculator — can a buyer get the loan at this price and occupancy?",
    pill: "For sellers & buyers",
    title: "Occupancy & Financing Calculator",
    desc: "At this price, with this many residents, can a buyer get the loan? See how each empty bed changes the lender's answer, with a price-sensitivity chart.",
    accent: "blue",
  },
];

const accentMap = {
  blue: {
    pillBg: "#dbeafe",
    pillText: "#0047ab",
    link: "#0047ab",
    shadow: "0 24px 48px -16px rgba(29, 78, 216, 0.45)",
  },
  plum: {
    pillBg: "#ede4f7",
    pillText: "#4c2a78",
    link: "#4c2a78",
    shadow: "0 24px 48px -16px rgba(107, 63, 160, 0.45)",
  },
  green: {
    pillBg: "#dcfce7",
    pillText: "#15803d",
    link: "#15803d",
    shadow: "0 24px 48px -16px rgba(21, 128, 61, 0.45)",
  },
};

const CalcTile: React.FC<{ tile: Tile }> = ({ tile }) => {
  const a = accentMap[tile.accent];
  return (
    <Link
      to={tile.to}
      className="marquee-hover group block bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-1"
      style={{ ["--hover-shadow" as any]: a.shadow }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = a.shadow)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
    >
      <img
        src={tile.img}
        alt={tile.alt}
        className="rpp-cover-edge"
        loading="lazy"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <div className="p-6 md:p-7 bg-white">
        <span
          className="inline-block text-[12px] font-bold uppercase tracking-wide rounded-full px-3 py-1 mb-3"
          style={{ background: a.pillBg, color: a.pillText }}
        >
          {tile.pill}
        </span>
        <h2 className="text-[22px] md:text-[24px] font-bold text-slate-900 mb-2">{tile.title}</h2>
        <p className="text-[16px] text-slate-700 leading-relaxed mb-4">{tile.desc}</p>
        <span className="inline-flex items-center gap-1 font-bold" style={{ color: a.link }}>
          {tile.accent === "plum" ? "Start the score" : "Launch calculator"} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

const AFHCalculators: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AFH Calculators: Property Score, ROI, Valuation & Financing Tools | Real Property Planning"
        description="Tools built for Washington adult family home buyers, operators and investors: a property score that screens a house for AFH use, an ROI calculator, a business and property valuation estimator, and an occupancy and financing calculator."
        canonical="https://realpropertyplanning.com/afh-club/calculators"
      />
      <Header />
      <main id="main-content" className="min-h-screen" style={{ paddingTop: 80, background: "#f0f3f6" }}>
        <section className="bg-white border-b border-slate-200 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <HeroBandTitle as="h1">AFH Calculators</HeroBandTitle>
            <p className="text-[18px] md:text-[19px] text-slate-700 mt-4 leading-relaxed">
              Professional financial tools built exclusively for Washington State Adult Family Homes.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32 }}>
            {TILES.map((t) => (
              <CalcTile key={t.to} tile={t} />
            ))}
          </div>
        </section>

        <section style={{ background: "#39332d" }} className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[15px] md:text-[16px] text-white leading-relaxed text-center">
              These calculators are for informational purposes only and do not constitute a certified appraisal, broker opinion of value, or financial advice.{" "}
              <Link to="/contact" className="underline font-semibold">Contact our team</Link> for a professional analysis.
            </p>
          </div>
        </section>
        <BackToAFHClub />
      </main>
      <Footer />
    </>
  );
};

export default AFHCalculators;
