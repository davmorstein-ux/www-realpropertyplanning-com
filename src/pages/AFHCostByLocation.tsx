import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import AFHCostByLocationCard from "@/components/AFHCostByLocationCard";
import AFHRunTheNumbers from "@/components/AFHRunTheNumbers";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { AFH_MEDICAID_RATES, AFH_RATE_REGION_LABELS, medicaidRange, monthly } from "@/data/afhMedicaidRates";

const GREEN = "#0a5648";
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const money2 = (n: number) => "$" + n.toFixed(2);

const FAQS = [
  {
    question: "What does a Medicaid resident actually pay?",
    answer:
      "The DSHS daily rate is what the state pays the home. A Medicaid resident contributes most of their own monthly income toward that cost and keeps a small personal needs allowance. So a family's out-of-pocket under Medicaid is usually the resident's income, not the rate shown here; the rate matters because it is what makes a home willing to accept a Medicaid placement at a given care level.",
  },
  {
    question: "Why do King, Pierce, and Snohomish have a higher rate?",
    answer:
      "DSHS pays a 'High Cost' schedule in those three counties and a 'Standard Cost' schedule everywhere else, reflecting labor and housing costs. Within a region the rate depends only on the resident's CARE classification (A Low through E High), which a DSHS case manager assigns after an assessment.",
  },
  {
    question: "Where do the private-pay ranges come from?",
    answer:
      "There is no public dataset of private-pay AFH rates in Washington. The ranges shown are working bands from David Stein's brokerage and appraisal experience with operating homes, reviewed on the date shown, and they are per resident per month, not the home's total revenue. Individual homes quote their own rates, and memory care or heavy-care needs sit above the top of any band.",
  },
  {
    question: "Why does King County show different numbers for different cities?",
    answer:
      "King County has the widest private-pay spread in the state. South King (Kent, Federal Way, Renton, Auburn) sits below the county average, the Eastside (Bellevue, Kirkland, Redmond, Issaquah, Bothell) sits above it, and Mercer Island, Medina, and Clyde Hill are a premium market of their own. Typing a city shows its submarket; typing 'King' shows the countywide band.",
  },
  {
    question: "Does a cheaper county mean a cheaper home?",
    answer:
      "On average, yes, but the spread inside a county is wider than the spread between counties. Care level, private room versus shared, and whether the home has a nurse on staff move the number more than the ZIP code does. Use the county figure to set a budget, then compare specific homes.",
  },
];

const CostByLocation = () => {

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What It Costs to Live in an Adult Family Home, by City and County | AFH Club"
        description="What it costs to live in an adult family home in any Washington city or county: the DSHS Medicaid daily and monthly rate for that county, typical private-pay ranges per resident, and how many licensed homes there accept Medicaid."
        canonical="https://realpropertyplanning.com/afh-club/cost-by-location"
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Calculators", url: "/afh-club/calculators" },
          { name: "Cost by location", url: "/afh-club/cost-by-location" },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">What It Costs to Live in an Adult Family Home, by City and County</HeroBandTitle>

        <div style={{ background: "#f5f2ec", padding: "2rem 1rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto 20px" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block" }}>
              <img
                src="/back-to-calculators-green.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
          </div>
          <AFHCostByLocationCard />
          <div className="container px-5 md:px-8 mt-8">
            <div className="max-w-3xl mx-auto">
              <AFHRunTheNumbers
                county="King"
                heading="Buying or selling a home?"
              />
            </div>
          </div>
        </div>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
                Medicaid rates at a glance
              </h2>
              <p className="text-[17px] md:text-[18px] leading-relaxed mb-4">
                DSHS pays two schedules. The figures are the base adult family home rate per resident, from the lightest
                to the heaviest care level, effective {AFH_MEDICAID_RATES.effective}.
              </p>
              <table className="w-full text-[17px]">
                <thead>
                  <tr className="text-left border-b-2 border-border">
                    <th className="py-2 pr-3">Region</th>
                    <th className="py-2 pr-3">Per day</th>
                    <th className="py-2 pr-3">Per month</th>
                  </tr>
                </thead>
                <tbody>
                  {(["highCost", "standard"] as const).map((r) => {
                    const rg = medicaidRange(r);
                    return (
                      <tr key={r} className="border-b border-border">
                        <td className="py-2 pr-3">{AFH_RATE_REGION_LABELS[r]}</td>
                        <td className="py-2 pr-3 whitespace-nowrap">
                          {money2(rg.minDaily)} – {money2(rg.maxDaily)}
                        </td>
                        <td className="py-2 pr-3 whitespace-nowrap">
                          {money(monthly(rg.minDaily))} – {money(monthly(rg.maxDaily))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <PageFAQ faqs={FAQS} heading="Adult Family Home Costs: Common Questions" eyebrow="Frequently Asked Questions" id="afh-cost-location" />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default CostByLocation;
