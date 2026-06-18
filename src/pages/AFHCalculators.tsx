import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import roiAsset from "@/assets/afh/afh-roi-calculator.webp.asset.json";
import valuationAsset from "@/assets/afh/afh-valuation-estimator.webp.asset.json";

type Tile = {
  to: string;
  img: string;
  alt: string;
  pill: string;
  title: string;
  desc: string;
  accent: "blue" | "green";
};

const TILES: Tile[] = [
  {
    to: "/afh-club/afh-roi-calculator",
    img: roiAsset.url,
    alt: "AFH ROI Calculator",
    pill: "For buyers & investors",
    title: "AFH ROI Calculator",
    desc: "Analyze your cash-on-cash return, cap rate, NOI, and monthly cash flow before you buy.",
    accent: "blue",
  },
  {
    to: "/afh-club/afh-valuation-estimator",
    img: valuationAsset.url,
    alt: "AFH Valuation Estimator",
    pill: "For sellers",
    title: "AFH Valuation Estimator",
    desc: "Estimate your AFH business and property value using income capitalization — before you call a broker.",
    accent: "green",
  },
];

const accentMap = {
  blue: {
    pillBg: "#dbeafe",
    pillText: "#1d4ed8",
    link: "#1d4ed8",
    shadow: "0 24px 48px -16px rgba(29, 78, 216, 0.45)",
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
      className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-1"
      style={{ ["--hover-shadow" as any]: a.shadow }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = a.shadow)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
    >
      <img
        src={tile.img}
        alt={tile.alt}
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
          Launch calculator <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
};

const AFHCalculators: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AFH Calculators — ROI & Valuation Tools | Real Property Planning"
        description="Professional financial tools built exclusively for Washington State Adult Family Homes — ROI calculator and valuation estimator."
        canonical="https://realpropertyplanning.com/afh-club/calculators"
      />
      <Header />
      <main id="main-content" className="min-h-screen" style={{ paddingTop: 80, background: "#f0f3f6" }}>
        <section className="bg-white border-b border-slate-200 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-6">
            <HeroBandTitle>AFH Calculators</HeroBandTitle>
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

        <section style={{ background: "#1B2B4B" }} className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-[15px] md:text-[16px] text-white leading-relaxed text-center">
              These calculators are for informational purposes only and do not constitute a certified appraisal, broker opinion of value, or financial advice.{" "}
              <Link to="/contact" className="underline font-semibold">Contact David Stein</Link> for a professional analysis.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AFHCalculators;
