import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToAFHClub from "@/components/BackToAFHClub";

const pageStyles = `
  .afh-calc-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }
  .afh-calc-intro {
    font-size: 17px;
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 720px;
  }
  .calc-section {
    background: #ffffff;
    border: 0.5px solid #e2ddd6;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1rem;
  }
  .calc-section-title {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: #6b7280;
    margin: 0 0 1rem;
  }
  .calc-field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 12px;
  }
  .calc-field-row.three {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 640px) {
    .calc-field-row, .calc-field-row.three {
      grid-template-columns: 1fr;
    }
  }
  .calc-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .calc-field label {
    font-size: 13px;
    color: #6b7280;
  }
  .calc-field input[type=range] {
    width: 100%;
    margin: 4px 0;
  }
  .calc-field.navy input[type=range] { accent-color: #1a2744; }
  .calc-field.green input[type=range] { accent-color: #2d6a4f; }
  .calc-field.burgundy input[type=range] { accent-color: #7b2d42; }
  .calc-field-val {
    font-size: 15px;
    font-weight: 600;
  }
  .calc-field.navy .calc-field-val { color: #1a2744; }
  .calc-field.green .calc-field-val { color: #2d6a4f; }
  .calc-field.burgundy .calc-field-val { color: #7b2d42; }
  .calc-metric-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 1rem;
  }
  @media (max-width: 640px) {
    .calc-metric-grid { grid-template-columns: 1fr 1fr; }
  }
  .calc-metric {
    background: #f5f2ec;
    border-radius: 8px;
    padding: .9rem 1rem;
  }
  .calc-metric-label {
    font-size: 12px;
    color: #6b7280;
    margin-bottom: 4px;
  }
  .calc-metric-value {
    font-size: 22px;
    font-weight: 600;
    color: #1a2744;
  }
  .calc-metric-value.green { color: #27500a; }
  .calc-metric-value.red { color: #a32d2d; }
  .calc-metric-value.blue { color: #185fa5; }
  .calc-verdict {
    border-radius: 8px;
    padding: .85rem 1.25rem;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  .calc-verdict.good { background: #eaf3de; color: #27500a; }
  .calc-verdict.caution { background: #faeeda; color: #633806; }
  .calc-verdict.poor { background: #fcebeb; color: #a32d2d; }
  .calc-breakdown-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 640px) {
    .calc-breakdown-grid { grid-template-columns: 1fr; }
  }
  .calc-breakdown-col h4 {
    font-size: 12px;
    font-weight: 700;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin: 0 0 .6rem;
  }
  .calc-breakdown-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 5px 0;
    border-bottom: 0.5px solid #e2ddd6;
    color: #374151;
  }
  .calc-breakdown-row:last-child {
    border-bottom: none;
    font-weight: 600;
    color: #1a2744;
  }
  .calc-chart-wrap {
    position: relative;
    width: 100%;
    height: 220px;
    margin-top: .5rem;
  }
  .calc-disclaimer {
    font-size: 13px;
    color: #9ca3af;
    margin-top: 1.5rem;
    line-height: 1.7;
    font-style: italic;
  }
`;

const AFHCostCalculator = () => {
  const chartRef = useRef<any>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.onload = () => initCalc();
    document.head.appendChild(script);
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  const initCalc = () => {
    const $ = (id: string) => document.getElementById(id) as HTMLElement;
    const fmt = (n: number) => "$" + Math.round(n).toLocaleString();
    const fmtPct = (n: number) => n.toFixed(1) + "%";

    const calcMortgage = (principal: number, annualRate: number, years: number) => {
      const r = annualRate / 100 / 12;
      const n = years * 12;
      return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    };

    const calc = () => {
      const purchase = +($("purchase") as HTMLInputElement).value;
      const downPct = +($("down") as HTMLInputElement).value / 100;
      const reno = +($("reno") as HTMLInputElement).value;
      const mortRate = +($("mort-rate") as HTMLInputElement).value;
      const beds = +($("beds") as HTMLInputElement).value;
      const resRate = +($("rate-res") as HTMLInputElement).value;
      const occ = +($("occ") as HTMLInputElement).value / 100;
      const staff = +($("staff") as HTMLInputElement).value;
      const supplies = +($("supplies") as HTMLInputElement).value;
      const other = +($("other") as HTMLInputElement).value;

      const loanAmt = purchase * (1 - downPct);
      const mortgage = calcMortgage(loanAmt, mortRate, 30);
      const occupiedBeds = beds * occ;
      const grossRevenue = occupiedBeds * resRate;
      const totalExp = mortgage + staff + supplies + other;
      const netCashFlow = grossRevenue - totalExp;
      const totalCashInvested = purchase * downPct + reno;
      const annualNet = netCashFlow * 12;
      const cocRoi = (annualNet / totalCashInvested) * 100;

      $("purchase-out").textContent = fmt(purchase);
      $("down-out").textContent = ($("down") as HTMLInputElement).value + "%";
      $("reno-out").textContent = fmt(reno);
      $("rate-out").textContent = parseFloat(($("mort-rate") as HTMLInputElement).value).toFixed(2) + "%";
      $("beds-out").textContent = beds + " beds";
      $("rate-res-out").textContent = fmt(resRate);
      $("occ-out").textContent = ($("occ") as HTMLInputElement).value + "%";
      $("staff-out").textContent = fmt(staff);
      $("supplies-out").textContent = fmt(supplies);
      $("other-out").textContent = fmt(other);

      $("m-gross").textContent = fmt(grossRevenue);
      $("m-net").textContent = fmt(netCashFlow);
      $("m-net").className = "calc-metric-value " + (netCashFlow >= 0 ? "green" : "red");
      $("m-annual").textContent = fmt(annualNet);
      $("m-annual").className = "calc-metric-value " + (annualNet >= 0 ? "green" : "red");
      $("m-roi").textContent = fmtPct(cocRoi);
      $("m-roi").className = "calc-metric-value " + (cocRoi >= 10 ? "green" : cocRoi >= 5 ? "blue" : "red");

      $("b-beds").textContent = occupiedBeds.toFixed(1);
      $("b-rate").textContent = fmt(resRate);
      $("b-gross").textContent = fmt(grossRevenue);
      $("b-mort").textContent = fmt(mortgage);
      $("b-staff").textContent = fmt(staff);
      $("b-supplies").textContent = fmt(supplies);
      $("b-other").textContent = fmt(other);
      $("b-total-exp").textContent = fmt(totalExp);

      const verdict = $("calc-verdict");
      if (cocRoi >= 12) {
        verdict.className = "calc-verdict good";
        verdict.textContent = "✓ Strong investment — cash-on-cash ROI of " + fmtPct(cocRoi) + " exceeds typical AFH benchmarks. These inputs suggest a financially viable operation.";
      } else if (cocRoi >= 6) {
        verdict.className = "calc-verdict caution";
        verdict.textContent = "⚠ Moderate returns — cash-on-cash ROI of " + fmtPct(cocRoi) + ". Consider adjusting occupancy, resident rates, or staffing to improve margins.";
      } else if (netCashFlow >= 0) {
        verdict.className = "calc-verdict caution";
        verdict.textContent = "⚠ Cash flow positive but ROI of " + fmtPct(cocRoi) + " is below typical targets. Review purchase price, down payment, and operating costs.";
      } else {
        verdict.className = "calc-verdict poor";
        verdict.textContent = "✗ Negative cash flow at these inputs — losing " + fmt(Math.abs(netCashFlow)) + "/month. Increase occupancy or resident rates, reduce costs, or reconsider purchase price.";
      }

      const years = ["Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5"];
      const data = years.map((_, i) => Math.round(annualNet * Math.pow(1.03, i)));
      const colors = data.map((v) => (v >= 0 ? "#3B6D11" : "#A32D2D"));

      if (chartInstance.current) chartInstance.current.destroy();
      const canvas = document.getElementById("cashflow-chart") as HTMLCanvasElement;
      if (canvas && (window as any).Chart) {
        chartInstance.current = new (window as any).Chart(canvas, {
          type: "bar",
          data: {
            labels: years,
            datasets: [{ label: "Annual net cash flow", data, backgroundColor: colors, borderRadius: 4 }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: (ctx: any) => " " + fmt(ctx.raw) } },
            },
            scales: {
              y: {
                ticks: { callback: (v: number) => "$" + (Math.abs(v) >= 1000 ? (v / 1000).toFixed(0) + "k" : v), font: { size: 12 } },
                grid: { color: "rgba(0,0,0,0.06)" },
              },
              x: { ticks: { font: { size: 12 } }, grid: { display: false } },
            },
          },
        });
      }
    };

    ["purchase", "down", "reno", "mort-rate", "beds", "rate-res", "occ", "staff", "supplies", "other"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", calc);
    });

    calc();
  };

  return (
    <div className="min-h-screen bg-cream">
      <style>{pageStyles}</style>
      <SEOHead
        title="AFH Cost & ROI Calculator | Real Property Planning"
        description="Estimate your Adult Family Home startup costs, monthly cash flow, and projected return on investment with this free interactive calculator for Washington State."
        canonical="https://realpropertyplanning.com/afh-club/afh-cost-calculator"
      />
      <Header />
      <main id="main-content">
        <div className="afh-calc-wrap">
          <BackToAFHClub />

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1a2744", margin: "1.5rem 0 0.5rem" }}>
            AFH Cost & ROI Calculator
          </h1>
          <p className="afh-calc-intro">
            Thinking about buying or opening an Adult Family Home in Washington State? Use this calculator to estimate your startup investment, monthly operating costs, net cash flow, and projected return on investment. Adjust the sliders to match your scenario.
          </p>

          <div className="calc-section">
            <p className="calc-section-title">Property & acquisition</p>
            <div className="calc-field-row">
              <div className="calc-field navy">
                <label htmlFor="purchase">Purchase price</label>
                <input type="range" id="purchase" min="300000" max="1500000" step="10000" defaultValue="650000" />
                <span className="calc-field-val" id="purchase-out">$650,000</span>
              </div>
              <div className="calc-field navy">
                <label htmlFor="down">Down payment</label>
                <input type="range" id="down" min="10" max="40" step="1" defaultValue="25" />
                <span className="calc-field-val" id="down-out">25%</span>
              </div>
            </div>
            <div className="calc-field-row">
              <div className="calc-field navy">
                <label htmlFor="reno">Renovation / startup costs</label>
                <input type="range" id="reno" min="0" max="200000" step="5000" defaultValue="50000" />
                <span className="calc-field-val" id="reno-out">$50,000</span>
              </div>
              <div className="calc-field navy">
                <label htmlFor="mort-rate">Mortgage rate</label>
                <input type="range" id="mort-rate" min="5" max="10" step="0.25" defaultValue="7" />
                <span className="calc-field-val" id="rate-out">7.00%</span>
              </div>
            </div>
          </div>

          <div className="calc-section">
            <p className="calc-section-title">Operations & revenue</p>
            <div className="calc-field-row three">
              <div className="calc-field green">
                <label htmlFor="beds">Licensed beds</label>
                <input type="range" id="beds" min="2" max="6" step="1" defaultValue="6" />
                <span className="calc-field-val" id="beds-out">6 beds</span>
              </div>
              <div className="calc-field green">
                <label htmlFor="rate-res">Monthly rate per resident</label>
                <input type="range" id="rate-res" min="3000" max="9000" step="250" defaultValue="5500" />
                <span className="calc-field-val" id="rate-res-out">$5,500</span>
              </div>
              <div className="calc-field green">
                <label htmlFor="occ">Occupancy rate</label>
                <input type="range" id="occ" min="50" max="100" step="5" defaultValue="85" />
                <span className="calc-field-val" id="occ-out">85%</span>
              </div>
            </div>
            <div className="calc-field-row three">
              <div className="calc-field burgundy">
                <label htmlFor="staff">Staff cost / month</label>
                <input type="range" id="staff" min="5000" max="30000" step="500" defaultValue="14000" />
                <span className="calc-field-val" id="staff-out">$14,000</span>
              </div>
              <div className="calc-field burgundy">
                <label htmlFor="supplies">Supplies & food / month</label>
                <input type="range" id="supplies" min="1000" max="8000" step="250" defaultValue="3000" />
                <span className="calc-field-val" id="supplies-out">$3,000</span>
              </div>
              <div className="calc-field burgundy">
                <label htmlFor="other">Insurance & other / month</label>
                <input type="range" id="other" min="500" max="4000" step="100" defaultValue="1500" />
                <span className="calc-field-val" id="other-out">$1,500</span>
              </div>
            </div>
          </div>

          <div id="calc-verdict" className="calc-verdict good">Calculating...</div>

          <div className="calc-metric-grid">
            <div className="calc-metric"><div className="calc-metric-label">Gross monthly revenue</div><div className="calc-metric-value blue" id="m-gross">—</div></div>
            <div className="calc-metric"><div className="calc-metric-label">Net monthly cash flow</div><div className="calc-metric-value" id="m-net">—</div></div>
            <div className="calc-metric"><div className="calc-metric-label">Annual net income</div><div className="calc-metric-value" id="m-annual">—</div></div>
            <div className="calc-metric"><div className="calc-metric-label">Cash-on-cash ROI</div><div className="calc-metric-value" id="m-roi">—</div></div>
          </div>

          <div className="calc-section">
            <p className="calc-section-title">Monthly breakdown</p>
            <div className="calc-breakdown-grid">
              <div className="calc-breakdown-col">
                <h4>Revenue</h4>
                <div className="calc-breakdown-row"><span>Occupied beds</span><span id="b-beds">—</span></div>
                <div className="calc-breakdown-row"><span>Rate per resident</span><span id="b-rate">—</span></div>
                <div className="calc-breakdown-row"><span>Gross revenue</span><span id="b-gross">—</span></div>
              </div>
              <div className="calc-breakdown-col">
                <h4>Expenses</h4>
                <div className="calc-breakdown-row"><span>Mortgage (P&I)</span><span id="b-mort">—</span></div>
                <div className="calc-breakdown-row"><span>Staffing</span><span id="b-staff">—</span></div>
                <div className="calc-breakdown-row"><span>Supplies & food</span><span id="b-supplies">—</span></div>
                <div className="calc-breakdown-row"><span>Insurance & other</span><span id="b-other">—</span></div>
                <div className="calc-breakdown-row"><span>Total expenses</span><span id="b-total-exp">—</span></div>
              </div>
            </div>
          </div>

          <div className="calc-section">
            <p className="calc-section-title">5-year cash flow projection</p>
            <div className="calc-chart-wrap">
              <canvas id="cashflow-chart" role="img" aria-label="5-year annual net cash flow projection">Cash flow projections will appear here.</canvas>
            </div>
          </div>

          <p className="calc-disclaimer">
            This calculator provides estimates for planning purposes only. Actual costs and revenues vary significantly based on location, staffing model, resident acuity, licensing category, and market conditions. Consult a licensed AFH consultant, accountant, and attorney before making investment decisions. Washington State AFH licensing requirements apply.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AFHCostCalculator;
