import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MidPageCTA from "@/components/MidPageCTA";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";


const SeniorEstateServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior & Estate Real Estate Services | Real Property Planning | Washington State"
        description="Real Property Planning specializes in senior relocation, estate and inherited property sales, and probate and trust real estate throughout Washington State, with deep experience across King, Snohomish, and Pierce counties."
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Services", url: "https://www.realpropertyplanning.com/services" },
          { name: "Senior & Estate Services", url: "https://www.realpropertyplanning.com/senior-estate-services" },
        ]}
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Senior &amp; Estate Real Estate Services in Washington State
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">
              Real Property Planning specializes in senior relocation, estate and inherited property sales, and probate and trust real estate throughout Washington State, with deep experience across King, Snohomish, and Pierce counties. Whether you are a senior planning a move, an adult child helping a parent, an executor settling an estate, or an attorney advising a client, Real Property Planning coordinates the real estate side so you can focus on the decisions that matter — not the logistics. Every engagement begins with a clear plan, honest communication, and a calm, professional approach.
            </p>
          </div>
        </div>
      </section>

      {/* Senior Relocation Home Sales */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Senior Relocation Home Sales
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            Selling a home after 20, 30, or 40 years is one of the biggest transitions a family can face. Real Property Planning works with seniors and their families to plan and complete the sale of a long‑time home — including timing, preparation, and coordination with trusted local vendors and senior communities — so the process feels manageable rather than overwhelming.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Step‑by‑step plan for selling and moving on your timeline",
              "Coordination with downsizing, clean‑out, and moving services",
              "Guidance on preparing the home for market without unnecessary expense",
              "Clear communication with all family decision makers throughout",
              "Connections to senior living communities and transition professionals",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Estate and Inherited Property Sales */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-secondary">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Estate and Inherited Property Sales
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            When a family inherits a home, the path forward is rarely straightforward. Real Property Planning guides executors and heirs through pricing, preparation, and sale of inherited homes so the estate can be settled with clarity and minimal stress — whether the property is down the street or across the state.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Clear explanation of selling options for the inherited property",
              "Market analysis and data‑driven pricing strategy",
              "Vendor coordination for clean‑out, haul‑away, and basic repairs",
              "Regular updates for out‑of‑area family members and decision makers",
              "Support navigating disagreements among multiple heirs",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Probate Real Estate Sales */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Probate Real Estate Sales
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            Probate property sales involve court timelines, legal documentation, and coordination with attorneys and personal representatives. Real Property Planning works alongside probate attorneys and personal representatives to market and sell property within court and estate timelines, while respecting legal requirements at every stage.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Familiarity with Washington probate timelines and documentation requirements",
              "Coordination with attorneys, personal representatives, and the court",
              "Marketing strategy tailored to estate and probate properties",
              "Support for required valuations and documentation for the court",
              "Clear communication with all parties throughout the process",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust and Fiduciary Property Sales */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-secondary">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Trust and Fiduciary Property Sales
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            Trustees and fiduciaries have legal responsibilities to beneficiaries that extend to how real estate is valued, marketed, and sold. Real Property Planning assists trustees and fiduciaries with valuation, marketing, and sale of residential real estate while honoring their obligations and providing the documentation needed to support sound decision‑making.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Clear, written pricing and marketing plan for the property",
              "Documentation to support fiduciary decision‑making and accountability",
              "Regular reporting on showings, feedback, and offers",
              "Coordination with financial advisors, attorneys, and other stakeholders",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clean‑Out and Preparation Coordination */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Clean‑Out and Preparation Coordination
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            Most estate and senior properties need some level of preparation before going to market — from clearing personal belongings to handling basic repairs. Real Property Planning coordinates clean‑out, haul‑away, basic repairs, and staging resources so the property is ready for market without the family managing every detail.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Referrals to trusted local clean‑out and haul‑away partners",
              "Help prioritizing repairs versus selling as‑is",
              "Guidance on staging or simple presentation improvements",
              "Vendor scheduling and oversight so you don't have to be on‑site",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MidPageCTA
        heading="Have Questions About a Senior or Estate Property?"
        body="Whether you are a senior planning a move, a family member coordinating a sale, or an attorney advising a client — Real Property Planning welcomes a confidential conversation."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your situation."
      />

      {/* Home Value and Market Analysis */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-secondary">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Home Value and Market Analysis
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-6 max-w-3xl">
            Before making any decision about selling, you need to understand what the property is worth and what your options look like. Real Property Planning provides clear, data‑driven opinions of value and market conditions for seniors, executors, and attorneys who need to understand their options before committing to a sale.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Comparative market analysis tailored to estate and senior moves",
              "Scenario planning — as‑is value versus improved condition value",
              "Guidance on timing the market in Washington State",
              "Written analysis to support estate, trust, or family decision‑making",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground text-[15px]">
                <GoldCheck3D size={18} className="mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Areas I Serve */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Areas I Serve
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed mb-4 max-w-3xl">
            Real Property Planning serves clients throughout Washington State, with a strong focus across Western Washington and the Puget Sound region. Whether the property is in a dense urban neighborhood or a quieter suburban community, local market knowledge and hands‑on coordination are brought to every engagement.
          </p>
          <p className="text-foreground text-[15px] font-medium">
            Seattle, Bellevue, Tacoma, Everett, Kirkland, Redmond, Bothell, and communities throughout Washington State.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/counties/king">
              <Button variant="outline3d" size="sm" className="border-border text-foreground hover:bg-muted rounded-[14px]">
                King County
              </Button>
            </Link>
            <Link to="/counties/snohomish">
              <Button variant="outline3d" size="sm" className="border-border text-foreground hover:bg-muted rounded-[14px]">
                Snohomish County
              </Button>
            </Link>
            <Link to="/counties/pierce">
              <Button variant="outline3d" size="sm" className="border-border text-foreground hover:bg-muted rounded-[14px]">
                Pierce County
              </Button>
            </Link>
            <Link to="/counties/kitsap">
              <Button variant="outline3d" size="sm" className="border-border text-foreground hover:bg-muted rounded-[14px]">
                Kitsap County
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-secondary">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="bg-card border border-border rounded-[16px] p-7 md:p-9 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Real Property Planning is a licensed real estate brokerage in Washington State with state-certified residential appraisal expertise. We are not attorneys, CPAs, or tax advisors, and do not provide legal, tax, or accounting advice. Legal, tax, and probate-specific questions should be directed to qualified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-[84px] bg-primary">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Schedule a No‑Pressure Consultation
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
              Whether you are a senior planning a move, a family member coordinating a sale, an executor managing an estate, or an attorney advising a client — Real Property Planning welcomes a confidential conversation about your situation. There is no obligation and no sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold"
                  size="lg"
 className="hover:-light px-8 rounded-[14px] text-base h-[52px] w-full sm:w-auto"
                >
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline3d"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-[14px] text-base h-[52px] w-full sm:w-auto"
                >
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeniorEstateServices;
