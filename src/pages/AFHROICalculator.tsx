import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BLUE = "#1e6fbf";
const BLUE_LIGHT = "#4da3e8";

const AFHROICalculator = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dpMode = "pct";

    const fmtD = (n: number) => {
      if (Math.abs(n) >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
      if (Math.abs(n) >= 1000) return "$" + (n / 1000).toFixed(0) + "K";
      return "$" + Math.round(n).toLocaleString();
    };
    const fmtP = (n: number) => Math.round(n * 10) / 10 + "%";

    const updateDerived = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement)?.value) || 0;
      const val = parseFloat((document.getElementById("r-down") as HTMLInputElement)?.value) || 0;
      const el = document.getElementById("dp-derived");
      if (!el) return;
      if (dpMode === "pct")
        el.textContent = price > 0 && val > 0 ? "= $" + Math.round(price * (val / 100)).toLocaleString() : "= —";
      else {
        const p = price > 0 ? (val / price) * 100 : 0;
        el.textContent = price > 0 && val > 0 ? "= " + Math.round(p * 10) / 10 + "%" : "= —";
      }
    };

    const setMode = (mode: string) => {
      dpMode = mode;
      const pBtn = document.getElementById("btn-pct") as HTMLButtonElement;
      const dBtn = document.getElementById("btn-dollar") as HTMLButtonElement;
      const inp = document.getElementById("r-down") as HTMLInputElement;
      const hint = document.getElementById("dp-hint");
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement)?.value) || 0;
      const cur = parseFloat(inp?.value) || 0;
      if (!pBtn || !dBtn) return;
      if (mode === "pct") {
        pBtn.style.cssText =
          "padding:9px 22px;font-size:18px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#1e6fbf;color:#ffffff;outline:none;border-radius:6px 0 0 6px";
        dBtn.style.cssText =
          "padding:9px 22px;font-size:15px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#f5f2ec;color:#1a2744;outline:none;border-radius:0 6px 6px 0";
        if (inp) inp.placeholder = "25";
        if (hint) hint.textContent = "Enter percentage of purchase price";
        if (price > 0 && cur > 0 && inp) inp.value = String(Math.round((cur / price) * 100));
        else if (inp) inp.value = "";
      } else {
        dBtn.style.cssText =
          "padding:9px 22px;font-size:18px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#1e6fbf;color:#ffffff;outline:none;border-radius:0 6px 6px 0";
        pBtn.style.cssText =
          "padding:9px 22px;font-size:15px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#f5f2ec;color:#1a2744;outline:none;border-radius:6px 0 0 6px";
        if (inp) inp.placeholder = "212500";
        if (hint) hint.textContent = "Enter dollar amount of down payment";
        if (price > 0 && cur > 0 && inp) inp.value = String(Math.round(price * (cur / 100)));
        else if (inp) inp.value = "";
      }
      updateDerived();
    };

    const odometer = (el: HTMLElement, finalStr: string, duration: number) => {
      const start = Date.now();
      const isMoney = finalStr.startsWith("$"),
        isPct = finalStr.endsWith("%");
      const tick = () => {
        if (Date.now() - start < duration) {
          if (isMoney) {
            const r = Math.round(Math.random() * 2000000);
            el.textContent = r >= 1000000 ? "$" + (r / 1000000).toFixed(2) + "M" : "$" + (r / 1000).toFixed(0) + "K";
          } else if (isPct) el.textContent = (Math.random() * 30).toFixed(1) + "%";
          else el.textContent = (Math.random() * 10).toFixed(2) + "x";
          requestAnimationFrame(tick);
        } else el.textContent = finalStr;
      };
      requestAnimationFrame(tick);
    };

    const getDown = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement)?.value) || 0;
      const val = parseFloat((document.getElementById("r-down") as HTMLInputElement)?.value) || 0;
      return dpMode === "pct" ? price * (val / 100) : val;
    };

    const calcROI = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement).value) || 0;
      const rate = parseFloat((document.getElementById("r-rate") as HTMLInputElement).value) || 7.25;
      const term = parseInt((document.getElementById("r-term") as HTMLSelectElement).value) || 30;
      const rev = parseFloat((document.getElementById("r-rev") as HTMLInputElement).value) || 0;
      const exp = parseFloat((document.getElementById("r-exp") as HTMLInputElement).value) || 0;
      const occ = parseFloat((document.getElementById("r-occ") as HTMLInputElement).value) || 83;
      const downAmt = getDown();
      if (!price || !rev || !downAmt) {
        alert("Please enter purchase price, down payment, and annual gross revenue.");
        return;
      }
      const mr = rate / 100 / 12,
        np = term * 12;
      const mortgage = ((price - downAmt) * (mr * Math.pow(1 + mr, np))) / (Math.pow(1 + mr, np) - 1);
      const annMort = mortgage * 12,
        adjRev = rev * (occ / 100),
        noi = adjRev - exp;
      const annCF = noi - annMort,
        roi = (annCF / downAmt) * 100;
      const capRate = (noi / price) * 100,
        margin = (noi / adjRev) * 100;
      const res = document.getElementById("roi-results")!;
      res.style.display = "block";
      res.scrollIntoView({ behavior: "smooth", block: "start" });
      const DUR = 2000;
      odometer(document.getElementById("r-roi")!, fmtP(roi), DUR);
      setTimeout(() => {
        odometer(document.getElementById("r-cf")!, fmtD(annCF / 12) + "/mo", DUR * 0.6);
        odometer(document.getElementById("r-noi")!, fmtD(noi), DUR * 0.6);
        odometer(document.getElementById("r-caprate")!, fmtP(capRate), DUR * 0.6);
        odometer(document.getElementById("r-mort")!, fmtD(mortgage) + "/mo", DUR * 0.6);
        odometer(document.getElementById("r-invested")!, fmtD(downAmt), DUR * 0.6);
        odometer(document.getElementById("r-margin")!, fmtP(margin), DUR * 0.6);
      }, 300);
      setTimeout(() => {
        const bars = [
          { label: "Cash-on-cash ROI", pct: Math.min(100, Math.max(0, (roi / 30) * 100)), val: fmtP(Math.max(0, roi)) },
          { label: "Cap rate", pct: Math.min(100, (capRate / 20) * 100), val: fmtP(capRate) },
          { label: "Operating margin", pct: Math.min(100, Math.max(0, margin)), val: fmtP(margin) },
          {
            label: "Debt coverage",
            pct: Math.min(100, (noi / annMort / 2) * 100),
            val: Math.round((noi / annMort) * 100) / 100 + "x",
          },
        ];
        const barsEl = document.getElementById("r-bars")!;
        barsEl.innerHTML = bars
          .map(
            (b) =>
              `<div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
            <span style="font-size:13px;color:#1a2744;width:150px;flex-shrink:0;font-weight:600">${b.label}</span>
            <div style="flex:1;height:7px;background:#e0d8c8;border-radius:4px;overflow:hidden">
              <div class="roi-bar-fill" data-pct="${Math.max(0, b.pct)}" style="height:100%;width:0%;border-radius:4px;background:linear-gradient(90deg,#1e6fbf,#4da3e8);transition:width .9s ease"></div>
            </div>
            <span style="font-size:13px;color:#1e6fbf;width:70px;text-align:right;flex-shrink:0;font-weight:700">${b.val}</span>
          </div>`,
          )
          .join("");
        setTimeout(() => {
          document.querySelectorAll(".roi-bar-fill").forEach((el: any) => {
            el.style.width = el.dataset.pct + "%";
          });
        }, 50);
      }, DUR + 200);
    };

    document.getElementById("btn-pct")?.addEventListener("click", () => setMode("pct"));
    document.getElementById("btn-dollar")?.addEventListener("click", () => setMode("dollar"));
    document.getElementById("r-price")?.addEventListener("input", updateDerived);
    document.getElementById("r-down")?.addEventListener("input", updateDerived);
    document.getElementById("calc-roi-btn")?.addEventListener("click", calcROI);
    document.getElementById("contact-btn-roi")?.addEventListener("click", () => (window.location.href = "/contact"));
  }, []);

  const IS: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: `1.5px solid #c8d8e8`,
    borderRadius: 6,
    color: "#1a2744",
    fontSize: 15,
    padding: "10px 13px",
    fontFamily: "'Raleway',sans-serif",
    boxSizing: "border-box",
    display: "block",
  };
  const LS: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: BLUE,
    marginBottom: 7,
    fontWeight: 700,
  };
  const PS: React.CSSProperties = {
    border: `1px solid #c8d8e8`,
    borderRadius: 10,
    padding: "1.25rem 1.4rem",
    marginBottom: 14,
    background: "#ffffff",
  };
  const PT: React.CSSProperties = {
    fontSize: 14,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: BLUE,
    marginBottom: 14,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8,
  };
  const DV: React.CSSProperties = {
    height: 1,
    background: `linear-gradient(90deg,transparent,${BLUE}30,transparent)`,
    marginBottom: 16,
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div style={{ background: "#f5f2ec", padding: "48px 24px 40px", borderBottom: `3px solid ${BLUE}` }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-blue.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "#b8963e",
                marginBottom: 10,
                fontFamily: "'Raleway',sans-serif",
              }}
            >
              For buyers &amp; investors
            </p>
            <h1
              style={{
                fontSize: "clamp(28px,4vw,42px)",
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 700,
                color: "#1a2744",
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              AFH ROI Calculator
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway',sans-serif",
                color: "#1e2a38",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: 0,
              }}
            >
              Know your numbers before you commit. Analyze cash-on-cash return, cap rate, NOI, and monthly cash flow.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div ref={calcRef} style={{ background: "#f5f2ec", padding: "2.5rem 1rem 3rem" }}>
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              background: "#ffffff",
              border: `2px solid ${BLUE}40`,
              borderRadius: 14,
              padding: "1.5rem 1.25rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: BLUE,
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                Adult Family Home
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1a2744" }}>
                AFH <span style={{ color: BLUE }}>ROI</span> Calculator
              </h2>
              <div
                style={{
                  fontSize: 13,
                  color: "#5a6a7a",
                  marginTop: 6,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Know your numbers · Grow with confidence
              </div>
            </div>

            {/* Acquisition */}
            <div style={PS}>
              <div style={PT}>
                Acquisition{" "}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${BLUE}30,transparent)` }} />
              </div>
              <div style={DV} />
              {/* 2-col grid — stacks on mobile */}
              <div
                className="roi-grid2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}
              >
                <div>
                  <label style={LS}>Purchase price ($)</label>
                  <input type="number" id="r-price" placeholder="850000" style={IS} />
                </div>
                <div>
                  <label style={LS}>Interest rate (%)</label>
                  <input type="number" id="r-rate" placeholder="7.25" step="0.01" style={IS} />
                </div>
              </div>
              {/* Loan term — full width on mobile, half on desktop */}
              <div
                className="roi-grid2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}
              >
                <div>
                  <label style={LS}>Loan term (years)</label>
                  <select id="r-term" style={IS}>
                    <option value="30">30 years</option>
                    <option value="25">25 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                  </select>
                </div>
                <div />
              </div>
              <div style={{ marginTop: 18 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: BLUE,
                      fontWeight: 700,
                    }}
                  >
                    Down payment
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      borderRadius: 8,
                      overflow: "hidden",
                      border: `1.5px solid ${BLUE}`,
                    }}
                  >
                    <button
                      id="btn-pct"
                      style={{
                        padding: "9px 22px",
                        fontSize: 18,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "Raleway,sans-serif",
                        border: "none",
                        background: BLUE,
                        color: "#ffffff",
                        outline: "none",
                        borderRadius: "6px 0 0 6px",
                      }}
                    >
                      %
                    </button>
                    <button
                      id="btn-dollar"
                      style={{
                        padding: "9px 22px",
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "Raleway,sans-serif",
                        border: "none",
                        background: "#f5f2ec",
                        color: "#1a2744",
                        outline: "none",
                        borderRadius: "0 6px 6px 0",
                      }}
                    >
                      $
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <input type="number" id="r-down" placeholder="25" style={{ ...IS, flex: 1, width: "auto" }} />
                  <span
                    id="dp-derived"
                    style={{
                      fontSize: 14,
                      color: BLUE,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      minWidth: 90,
                      textAlign: "right",
                    }}
                  >
                    = —
                  </span>
                </div>
                <div id="dp-hint" style={{ fontSize: 12, color: "#5a6a7a", marginTop: 6 }}>
                  Enter percentage of purchase price
                </div>
              </div>
            </div>

            {/* Revenue */}
            <div style={PS}>
              <div style={PT}>
                Revenue &amp; Operations{" "}
                <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${BLUE}30,transparent)` }} />
              </div>
              <div style={DV} />
              <div
                className="roi-grid2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}
              >
                <div>
                  <label style={LS}>Annual gross revenue ($)</label>
                  <input type="number" id="r-rev" placeholder="288000" style={IS} />
                </div>
                <div>
                  <label style={LS}>Annual operating expenses ($)</label>
                  <input type="number" id="r-exp" placeholder="164000" style={IS} />
                </div>
              </div>
              <div className="roi-grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div>
                  <label style={LS}>Licensed capacity</label>
                  <select id="r-cap" style={IS}>
                    <option value="1">1 bed</option>
                    <option value="2">2 beds</option>
                    <option value="3">3 beds</option>
                    <option value="4">4 beds</option>
                    <option value="5">5 beds</option>
                    <option value="6">6 beds</option>
                    <option value="7">7 beds</option>
                    <option value="8">8 beds</option>
                  </select>
                </div>
                <div>
                  <label style={LS}>Current occupancy (%)</label>
                  <input type="number" id="r-occ" placeholder="83" style={IS} />
                </div>
              </div>
            </div>

            {/* Calculate button */}
            <button
              id="calc-roi-btn"
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: 8,
                background: BLUE,
                color: "#ffffff",
                border: `2px solid ${BLUE}`,
                fontSize: "20px",
                fontWeight: 900,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: 4,
                fontFamily: "'Raleway',sans-serif",
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#1a2744";
                el.style.borderColor = "#1a2744";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = BLUE;
                el.style.borderColor = BLUE;
              }}
            >
              Calculate ROI
            </button>

            {/* Results */}
            <div id="roi-results" style={{ display: "none", marginTop: 14 }}>
              <div
                style={{
                  border: `2px solid ${BLUE}40`,
                  borderRadius: 12,
                  padding: "1.6rem",
                  textAlign: "center",
                  marginBottom: 14,
                  marginTop: 16,
                  background: "#f5f2ec",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: BLUE,
                    marginBottom: 10,
                    fontWeight: 700,
                  }}
                >
                  Estimated annual ROI
                </div>
                <div
                  id="r-roi"
                  style={{
                    fontSize: 50,
                    fontWeight: 700,
                    color: BLUE,
                    lineHeight: 1,
                    minHeight: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  —
                </div>
                <div style={{ fontSize: 14, color: "#1a2744", marginTop: 8 }}>cash-on-cash return</div>
              </div>
              {/* Results metric tiles — 3-col desktop, 2-col mobile */}
              <div
                className="roi-results-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}
              >
                {[
                  ["Monthly cash flow", "r-cf"],
                  ["Annual NOI", "r-noi"],
                  ["Cap rate", "r-caprate"],
                  ["Monthly mortgage", "r-mort"],
                  ["Cash invested", "r-invested"],
                  ["Operating margin", "r-margin"],
                ].map(([lbl, id]) => (
                  <div
                    key={id}
                    style={{
                      background: "#f5f2ec",
                      border: `1px solid ${BLUE}30`,
                      borderRadius: 8,
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: BLUE,
                        marginBottom: 7,
                        fontWeight: 700,
                      }}
                    >
                      {lbl}
                    </div>
                    <div id={id} style={{ fontSize: 18, fontWeight: 700, color: "#1a2744", minHeight: 28 }}>
                      —
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ ...PS, marginBottom: 14 }}>
                <div style={PT}>
                  Return Breakdown{" "}
                  <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${BLUE}30,transparent)` }} />
                </div>
                <div style={DV} />
                <div id="r-bars" />
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#5a6a7a",
                  lineHeight: 1.8,
                  padding: "12px 16px",
                  border: `1px solid ${BLUE}20`,
                  borderRadius: 8,
                  background: "#f5f2ec",
                }}
              >
                Estimates are for informational purposes only. Actual returns depend on financing terms, occupancy,
                staffing costs, regulatory changes, and market conditions. Consult David Stein for a professional
                investment analysis.
              </div>
              <div
                style={{
                  border: `1px solid ${BLUE}40`,
                  borderRadius: 10,
                  padding: "1.2rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 12,
                  background: "#f5f2ec",
                }}
              >
                <div>
                  <strong style={{ color: BLUE, fontSize: 15, display: "block" }}>
                    Ready to analyze a specific deal?
                  </strong>
                  <p style={{ fontSize: 13, color: "#1a2744", marginTop: 3 }}>
                    David Stein — Licensed Broker &amp; Certified Appraiser · eXp Realty · 20+ years AFH experience
                  </p>
                </div>
                <button
                  id="contact-btn-roi"
                  style={{
                    fontSize: 12,
                    padding: "10px 22px",
                    borderRadius: 6,
                    background: BLUE,
                    color: "#ffffff",
                    border: `2px solid ${BLUE}`,
                    cursor: "pointer",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    fontFamily: "'Raleway',sans-serif",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                >
                  Contact David ↗
                </button>
              </div>
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "#5a6a7a",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginTop: "1.75rem",
                fontWeight: 600,
                paddingTop: "1.25rem",
                borderTop: `1px solid ${BLUE}20`,
              }}
            >
              Courtesy of Real Property Planning
            </div>
          </div>
        </div>

        <style>{`
          /* Input grids: 2-col desktop → 1-col mobile */
          .roi-grid2 { grid-template-columns: 1fr !important; }
          @media (min-width: 520px) {
            .roi-grid2 { grid-template-columns: 1fr 1fr !important; }
          }

          /* Results metric tiles: 3-col desktop → 2-col mobile */
          .roi-results-grid { grid-template-columns: repeat(2, 1fr) !important; }
          @media (min-width: 560px) {
            .roi-results-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }

          #calc-roi-btn { font-size: 20px !important; font-weight: 900 !important; }
          #r-occ, #r-cap { box-sizing: border-box !important; padding: 10px 13px !important; }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;
