import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";

const AFHValuationEstimator: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AFH Valuation Estimator | Real Property Planning"
        description="Valuation estimator for Washington State Adult Family Homes — for sellers."
        canonical="https://realpropertyplanning.com/afh-club/afh-valuation-estimator"
      />
      <Header />
      <main id="main-content" className="min-h-screen" style={{ paddingTop: 80, background: "#f0f3f6" }}>
        <div className="max-w-3xl mx-auto px-6 pt-6">
          <Link to="/afh-club/calculators" className="text-[15px] font-semibold text-slate-700 hover:text-slate-900">
            ← Back to Calculators
          </Link>
        </div>

        <section className="bg-white border-b border-slate-200 py-10 md:py-14 mt-4">
          <div className="max-w-3xl mx-auto px-6">
            <HeroBandTitle>AFH Valuation Estimator</HeroBandTitle>
            <p className="text-[18px] md:text-[19px] text-slate-700 mt-4 leading-relaxed">
              For sellers — know what your AFH is worth before you list.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
            <h2 className="text-[24px] font-bold text-slate-900">Valuation Estimator coming soon</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AFHValuationEstimator;
