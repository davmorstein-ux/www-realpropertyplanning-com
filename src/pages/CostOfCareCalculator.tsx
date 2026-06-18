import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AFHROICalculator = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = document.getElementById("roi-canvas") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      let t = 0,
        animId: number;
      const sp = 28;
      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resize();
      window.addEventListener("resize", resize);
      const draw = () => {
        const cols = Math.ceil(canvas.width / sp) + 1;
        const rows = Math.ceil(canvas.height / sp) + 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < cols; i++)
          for (let j = 0; j < rows; j++) {
            const w = Math.sin(i * 0.4 + j * 0.3 + t) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(i * sp, j * sp, 2 + w * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(30,144,255,${0.3 + w * 0.7})`;
            ctx.fill();
          }
        t += 0.012;
        animId = requestAnimationFrame(draw);
      };
      draw();
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

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
          "padding:10px 28px;font-size:20px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#ffffff;color:#003380;outline:none";
        dBtn.style.cssText =
          "padding:10px 28px;font-size:15px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#003380;color:#ffffff;outline:none";
        if (inp) inp.placeholder = "25";
        if (hint) hint.textContent = "Enter percentage of purchase price";
        if (price > 0 && cur > 0 && inp) inp.value = String(Math.round((cur / price) * 100));
        else if (inp) inp.value = "";
      } else {
        dBtn.style.cssText =
          "padding:10px 28px;font-size:20px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#ffffff;color:#003380;outline:none";
        pBtn.style.cssText =
          "padding:10px 28px;font-size:15px;font-weight:700;cursor:pointer;font-family:Raleway,sans-serif;border:none;background:#003380;color:#ffffff;outline:none";
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
            <span style="font-size:13px;color:#fff;width:150px;flex-shrink:0;font-weight:600">${b.label}</span>
            <div style="flex:1;height:7px;background:rgba(0,0,0,0.5);border-radius:4px;overflow:hidden;border:2px solid #1e90ff;box-shadow:0 0 8px rgba(30,144,255,0.4)">
              <div class="roi-bar-fill" data-pct="${Math.max(0, b.pct)}" style="height:100%;width:0%;border-radius:4px;background:linear-gradient(90deg,#1e90ff,#4db8ff);transition:width .9s ease"></div>
            </div>
            <span style="font-size:13px;color:#1e90ff;width:70px;text-align:right;flex-shrink:0;font-weight:700">${b.val}</span>
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
    background: "rgba(0,10,28,0.8)",
    border: "2px solid #1e90ff",
    borderRadius: 6,
    color: "#fff",
    fontSize: 15,
    padding: "11px 14px",
    fontFamily: "'Raleway',sans-serif",
    boxSizing: "border-box",
    display: "block",
  };
  const LS: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#1e90ff",
    marginBottom: 8,
    fontWeight: 700,
  };
  const PS: React.CSSProperties = {
    border: "2px solid #1e90ff",
    borderRadius: 10,
    padding: "1.4rem 1.6rem",
    marginBottom: 14,
    background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
    position: "relative",
  };
  const PT: React.CSSProperties = {
    fontSize: 17,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "#1e90ff",
    marginBottom: 16,
    fontWeight: 700,
  };
  const DV: React.CSSProperties = {
    height: 1,
    background: "linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)",
    marginBottom: 18,
  };
  // KEY: both fields in bottom row use identical wrapper — plain div, no flex
  const FW: React.CSSProperties = {};

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <div className="calc-page-hero" style={{ background: "#1e2a38", padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-blue.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
            <p
              className="eyebrow-label"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "#c8b98a",
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
                color: "#ffffff",
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
                color: "#ffffff",
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
        <div
          ref={calcRef}
          className="roi-print-section"
          style={{ background: "#000510", padding: "2.5rem 1.5rem 3rem", position: "relative" }}
        >
          <canvas
            id="roi-canvas"
            className="roi-no-print"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.3,
            }}
          />
          <div
            className="roi-card"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
              background: "linear-gradient(170deg,#071830,#030d1e)",
              border: "2px solid #1e90ff",
              borderRadius: 14,
              padding: "2rem",
              boxShadow: "0 2px 0 rgba(30,144,255,0.4),0 20px 40px rgba(0,0,0,0.8),inset 0 1px 0 rgba(30,144,255,0.3)",
              transform: "rotateX(2deg)",
              transformOrigin: "top center",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "#1e90ff",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                Adult Family Home
              </div>
              <h2 style={{ fontSize: 30, fontWeight: 700, color: "#fff", textShadow: "0 0 30px rgba(30,144,255,0.5)" }}>
                AFH <span style={{ color: "#1e90ff" }}>ROI</span> Calculator
              </h2>
              <div
                style={{
                  fontSize: 13,
                  color: "#1e90ff",
                  marginTop: 6,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Know your numbers · Grow with confidence
              </div>
            </div>

            <div className="roi-no-print">
              {/* Acquisition */}
              <div style={PS}>
                <div style={PT}>Acquisition</div>
                <div style={DV} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                  <div style={FW}>
                    <label style={LS}>Purchase price ($)</label>
                    <input type="number" id="r-price" placeholder="850000" style={IS} />
                  </div>
                  <div style={FW}>
                    <label style={LS}>Interest rate (%)</label>
                    <input type="number" id="r-rate" placeholder="7.25" step="0.01" style={IS} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                  <div style={FW}>
                    <label style={LS}>Loan term (years)</label>
                    <select id="r-term" style={IS}>
                      <option value="30">30 years</option>
                      <option value="25">25 years</option>
                      <option value="20">20 years</option>
                      <option value="15">15 years</option>
                    </select>
                  </div>
                  <div style={FW} />
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
                        color: "#1e90ff",
                        fontWeight: 700,
                      }}
                    >
                      Down payment
                    </span>
                    <div
                      style={{
                        display: "inline-flex",
                        borderRadius: 6,
                        overflow: "hidden",
                        border: "2px solid #1e90ff",
                      }}
                    >
                      <button
                        id="btn-pct"
                        style={{
                          padding: "10px 28px",
                          fontSize: 20,
                          fontWeight: 700,
                          cursor: "pointer",
                          fontFamily: "Raleway,sans-serif",
                          border: "none",
                          background: "#ffffff",
                          color: "#003380",
                          outline: "none",
                        }}
                      >
                        %
                      </button>
                      <button
                        id="btn-dollar"
                        style={{
                          padding: "10px 28px",
                          fontSize: 15,
                          fontWeight: 700,
                          cursor: "pointer",
                          fontFamily: "Raleway,sans-serif",
                          border: "none",
                          background: "#003380",
                          color: "#ffffff",
                          outline: "none",
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
                        color: "#1e90ff",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        minWidth: 120,
                        textAlign: "right",
                      }}
                    >
                      = —
                    </span>
                  </div>
                  <div id="dp-hint" style={{ fontSize: 12, color: "#7ab8ff", marginTop: 6 }}>
                    Enter percentage of purchase price
                  </div>
                </div>
              </div>

              {/* Revenue — KEY FIX: both bottom fields are plain divs, no flex wrapper */}
              <div style={PS}>
                <div style={PT}>Revenue &amp; Operations</div>
                <div style={DV} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                  <div>
                    <label style={LS}>Annual gross revenue ($)</label>
                    <input type="number" id="r-rev" placeholder="288000" style={IS} />
                  </div>
                  <div>
                    <label style={LS}>Annual operating expenses ($)</label>
                    <input type="number" id="r-exp" placeholder="164000" style={IS} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
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

              {/* Calculate button — font-size and font-weight as inline style strings to beat CSS specificity */}
              <button
                id="calc-roi-btn"
                style={{
                  width: "100%",
                  padding: "18px 16px",
                  borderRadius: 8,
                  background: "#ffffff",
                  color: "#003380",
                  border: "2px solid #003380",
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: ".2em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  marginTop: 4,
                  fontFamily: "'Raleway',sans-serif",
                  transition: "all 0.2s",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#003380";
                  el.style.color = "#ffffff";
                  el.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#ffffff";
                  el.style.color = "#003380";
                  el.style.borderColor = "#003380";
                }}
              >
                Calculate ROI
              </button>
            </div>

            {/* Results */}
            <div id="roi-results" style={{ display: "none", marginTop: 14 }}>
              <div className="roi-no-print" style={{ textAlign: "center", marginBottom: 16 }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 22px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "'Raleway',sans-serif",
                    color: "#ffffff",
                    background: "#1e90ff",
                    border: "1px solid #1e90ff",
                    cursor: "pointer",
                  }}
                >
                  🖨 Print or Save as PDF
                </button>
              </div>
              <div
                style={{
                  border: "1px solid #1e90ff",
                  borderRadius: 12,
                  padding: "1.6rem",
                  textAlign: "center",
                  marginBottom: 14,
                  marginTop: 16,
                  boxShadow: "0 0 40px rgba(30,144,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#1e90ff",
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
                    color: "#1e90ff",
                    lineHeight: 1,
                    textShadow: "0 0 30px rgba(30,144,255,0.8)",
                    minHeight: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  —
                </div>
                <div style={{ fontSize: 14, color: "#fff", marginTop: 8 }}>cash-on-cash return</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
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
                      background: "rgba(0,10,28,0.6)",
                      border: "1px solid rgba(30,144,255,0.3)",
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
                        color: "#1e90ff",
                        marginBottom: 7,
                        fontWeight: 700,
                      }}
                    >
                      {lbl}
                    </div>
                    <div id={id} style={{ fontSize: 19, fontWeight: 700, color: "#fff", minHeight: 28 }}>
                      —
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ ...PS, marginBottom: 14 }}>
                <div style={PT}>Return Breakdown</div>
                <div style={DV} />
                <div id="r-bars" />
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  padding: "12px 16px",
                  border: "1px solid rgba(30,144,255,0.2)",
                  borderRadius: 8,
                  background: "rgba(0,10,28,0.5)",
                }}
              >
                Estimates are for informational purposes only. Actual returns depend on financing terms, occupancy,
                staffing costs, regulatory changes, and market conditions. Consult David Stein for a professional
                investment analysis.
              </div>
              <div
                style={{
                  border: "1px solid #1e90ff",
                  borderRadius: 10,
                  padding: "1.2rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 12,
                  background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
                }}
              >
                <div>
                  <strong style={{ color: "#1e90ff", fontSize: 15, display: "block" }}>
                    Ready to analyze a specific deal?
                  </strong>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 3 }}>
                    David Stein — Licensed Broker &amp; Certified Appraiser · eXp Realty · 20+ years AFH experience
                  </p>
                </div>
                <button
                  id="contact-btn-roi"
                  style={{
                    fontSize: 12,
                    padding: "10px 22px",
                    borderRadius: 6,
                    background: "#ffffff",
                    color: "#003380",
                    border: "2px solid #003380",
                    cursor: "pointer",
                    letterSpacing: ".12em",
                    textTransform: "uppercase" as const,
                    fontFamily: "'Raleway',sans-serif",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#003380";
                    el.style.color = "#ffffff";
                    el.style.borderColor = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#ffffff";
                    el.style.color = "#003380";
                    el.style.borderColor = "#003380";
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
                color: "#1e90ff",
                letterSpacing: ".15em",
                textTransform: "uppercase",
                marginTop: "1.75rem",
                fontWeight: 700,
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(30,144,255,0.2)",
              }}
            >
              Courtesy of Real Property Planning
            </div>
          </div>
        </div>

        {/* Inject styles that beat index.css for this page only */}
        <style>{`
          #calc-roi-btn { font-size: 22px !important; font-weight: 900 !important; }
          #r-occ, #r-cap { box-sizing: border-box !important; padding: 11px 14px !important; }
          .calc-roi-hero p, .calc-roi-hero span { color: #ffffff !important; opacity: 1 !important; }
          @media print {
            header, footer, nav {
              display: none !important;
            }
            .roi-no-print {
              display: none !important;
            }
            .roi-print-section {
              background: #ffffff !important;
            }
            .roi-card {
              background: #ffffff !important;
              border: 1px solid #999999 !important;
              box-shadow: none !important;
              transform: none !important;
            }
            .roi-card, .roi-card * {
              color: #111111 !important;
              text-shadow: none !important;
              border-color: #999999 !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AFHValuationEstimator = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Dot matrix ──────────────────────────────────────────
    const canvas = document.getElementById("val-canvas") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      let t = 0,
        animId: number;
      const sp = 28;
      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resize();
      window.addEventListener("resize", resize);
      const draw = () => {
        const cols = Math.ceil(canvas.width / sp) + 1;
        const rows = Math.ceil(canvas.height / sp) + 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < cols; i++)
          for (let j = 0; j < rows; j++) {
            const w = Math.sin(i * 0.4 + j * 0.3 + t) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(i * sp, j * sp, 2 + w * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,230,118,${0.3 + w * 0.7})`;
            ctx.fill();
          }
        t += 0.012;
        animId = requestAnimationFrame(draw);
      };
      draw();
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", resize);
      };
    }
  }, []);

  useEffect(() => {
    // ── Calculator logic ────────────────────────────────────
    const fmtV = (n: number) => {
      if (!n || isNaN(n)) return "—";
      if (Math.abs(n) >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
      if (Math.abs(n) >= 1000) return "$" + (n / 1000).toFixed(0) + "K";
      return "$" + Math.round(n).toLocaleString();
    };
    const fmtPV = (n: number) => Math.round(n * 10) / 10 + "%";

    const odometerV = (el: HTMLElement, finalStr: string, duration: number) => {
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

    const calcVal = () => {
      const net = parseFloat((document.getElementById("v-net") as HTMLInputElement).value) || 0;
      const rev = parseFloat((document.getElementById("v-rev") as HTMLInputElement).value) || 0;
      const cap = parseInt((document.getElementById("v-cap") as HTMLSelectElement).value) || 0;
      const occ = parseFloat((document.getElementById("v-occ") as HTMLSelectElement).value) / 100;
      const yrs = parseInt((document.getElementById("v-yrs") as HTMLSelectElement).value) || 3;
      const payer = (document.getElementById("v-payer") as HTMLSelectElement).value;
      const staff = (document.getElementById("v-staff") as HTMLSelectElement).value;
      const propval = parseFloat((document.getElementById("v-prop") as HTMLInputElement).value) || 0;
      const dshs = (document.getElementById("v-dshs") as HTMLSelectElement).value;
      if (!net) {
        alert("Please enter annual net income to calculate.");
        return;
      }
      let capAdj = 0;
      if (payer === "private") capAdj -= 0.02;
      else if (payer === "medicaid") capAdj += 0.02;
      if (yrs >= 7) capAdj -= 0.015;
      else if (yrs <= 1) capAdj += 0.025;
      if (occ >= 1.0) capAdj -= 0.01;
      else if (occ <= 0.5) capAdj += 0.02;
      if (staff === "full") capAdj -= 0.01;
      else if (staff === "none") capAdj += 0.015;
      if (dshs === "active") capAdj -= 0.005;
      else if (dshs === "conditions" || dshs === "expired") capAdj += 0.03;
      const lowCap = Math.max(0.1, 0.15 + capAdj - 0.02);
      const highCap = Math.min(0.25, 0.15 + capAdj + 0.02);
      const midCap = (lowCap + highCap) / 2;
      const bizMid = Math.round(net / midCap),
        bizLow = Math.round(net / highCap),
        bizHigh = Math.round(net / lowCap);
      const totalMid = bizMid + propval,
        totalLow = bizLow + propval,
        totalHigh = bizHigh + propval;
      const margin = rev > 0 ? Math.round((net / rev) * 100) : 0;
      const perBed = cap > 0 ? Math.round(totalMid / cap) : 0;
      const grm = rev > 0 ? Math.round((totalMid / rev) * 10) / 10 : 0;
      const res = document.getElementById("val-results")!;
      res.style.display = "block";
      res.scrollIntoView({ behavior: "smooth", block: "start" });
      const DUR = 2000;
      odometerV(document.getElementById("v-mid")!, fmtV(totalMid), DUR);
      document.getElementById("v-range")!.textContent = "Range: " + fmtV(totalLow) + " — " + fmtV(totalHigh);
      setTimeout(() => {
        odometerV(document.getElementById("v-biz")!, fmtV(bizMid), DUR * 0.7);
        odometerV(document.getElementById("v-propout")!, propval > 0 ? fmtV(propval) : "Not included", DUR * 0.7);
        odometerV(document.getElementById("v-caprate")!, fmtPV(midCap * 100), DUR * 0.7);
        odometerV(document.getElementById("v-margin")!, rev > 0 ? fmtPV(margin) : "—", DUR * 0.7);
        odometerV(document.getElementById("v-perbed")!, cap > 0 ? fmtV(perBed) : "—", DUR * 0.7);
        odometerV(document.getElementById("v-grm")!, rev > 0 ? grm + "x" : "—", DUR * 0.7);
      }, 300);
      setTimeout(() => {
        const bars = [
          {
            label: "Payer mix quality",
            pct: payer === "private" ? 90 : payer === "mixed" ? 65 : 40,
            val: payer === "private" ? "Private pay" : payer === "mixed" ? "Mixed" : "Medicaid",
          },
          { label: "Occupancy strength", pct: Math.round(occ * 100), val: Math.round(occ * 100) + "%" },
          {
            label: "Operating tenure",
            pct: yrs >= 7 ? 90 : yrs >= 3 ? 65 : 30,
            val: yrs >= 7 ? "10+ yrs" : yrs >= 3 ? "2–5 yrs" : "<2 yrs",
          },
          {
            label: "Staffing continuity",
            pct: staff === "full" ? 90 : staff === "partial" ? 55 : 25,
            val: staff === "full" ? "Full" : staff === "partial" ? "Partial" : "None",
          },
          {
            label: "License standing",
            pct: dshs === "active" ? 95 : dshs === "conditions" ? 50 : 10,
            val: dshs === "active" ? "Active" : "Issues",
          },
        ];
        const barsEl = document.getElementById("v-bars")!;
        barsEl.innerHTML = bars
          .map(
            (b) =>
              `<div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
            <span style="font-size:13px;color:#fff;width:160px;flex-shrink:0;font-weight:600">${b.label}</span>
            <div style="flex:1;height:7px;background:rgba(0,0,0,0.5);border-radius:4px;overflow:hidden;border:2px solid #00e676;box-shadow:0 0 8px rgba(0,230,118,0.4)">
              <div class="val-bar-fill" data-pct="${b.pct}" style="height:100%;width:0%;border-radius:4px;background:linear-gradient(90deg,#00e676,#4dffaa);box-shadow:0 0 10px rgba(0,230,118,0.6);transition:width .9s ease"></div>
            </div>
            <span style="font-size:13px;color:#00e676;width:80px;text-align:right;flex-shrink:0;font-weight:700">${b.val}</span>
          </div>`,
          )
          .join("");
        setTimeout(() => {
          document.querySelectorAll(".val-bar-fill").forEach((el: any) => {
            el.style.width = el.dataset.pct + "%";
          });
        }, 50);
        let notes: string[] = [];
        if (payer === "private")
          notes.push("<strong>Private pay mix</strong> — reduces risk premium, favorable to value");
        if (payer === "medicaid") notes.push("<strong>Medicaid-heavy</strong> — reimbursement risk increases cap rate");
        if (yrs >= 7) notes.push("<strong>Established operation</strong> — tenure signals stability, lowers cap rate");
        if (occ >= 1.0) notes.push("<strong>Full occupancy</strong> — maximum revenue demonstrates demand");
        if (occ <= 0.5) notes.push("<strong>Low occupancy</strong> — buyer will price in stabilization risk");
        if (staff === "full") notes.push("<strong>Full staff retained</strong> — reduces transition risk for buyer");
        if (dshs === "conditions" || dshs === "expired")
          notes.push("<strong>License issues</strong> — significantly impacts marketability");
        if (rev > 0 && margin > 40)
          notes.push(`<strong>Strong operating margin (${margin}%)</strong> — well-positioned for market`);
        else if (rev > 0 && margin <= 30)
          notes.push(`<strong>Thin margin (${margin}%)</strong> — review expenses before listing`);
        document.getElementById("v-assumptions")!.innerHTML =
          notes.join("<br>") || "No significant risk factors detected.";
      }, DUR + 200);
    };

    document.getElementById("calc-val-btn")?.addEventListener("click", calcVal);
    document.getElementById("contact-btn-val")?.addEventListener("click", () => (window.location.href = "/contact"));
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(0,15,5,0.8)",
    border: "2px solid #00e676",
    borderRadius: 6,
    color: "#fff",
    fontSize: 15,
    padding: "11px 14px",
    fontFamily: "'Raleway',sans-serif",
    boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Raleway',sans-serif",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#00e676",
    marginBottom: 8,
    fontWeight: 700,
    minHeight: 32,
    display: "flex",
    alignItems: "flex-end",
    lineHeight: 1.3,
  } as React.CSSProperties;
  const panelStyle: React.CSSProperties = {
    border: "2px solid #00e676",
    borderRadius: 10,
    padding: "1.4rem 1.6rem",
    marginBottom: 14,
    background: "linear-gradient(135deg,rgba(255,255,255,0.02),rgba(0,0,0,0.3))",
    position: "relative",
  };
  const panelTitleStyle: React.CSSProperties = {
    fontSize: 17,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "#00e676",
    marginBottom: 16,
    fontWeight: 700,
  };
  const dividerStyle: React.CSSProperties = {
    height: 1,
    background: "linear-gradient(90deg,transparent,rgba(0,230,118,0.25),transparent)",
    marginBottom: 18,
  };
  const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 };
  const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 16 };

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <div className="calc-page-hero" style={{ background: "#1e2a38", padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-green.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
            <p
              className="eyebrow-label"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "#c8b98a",
                marginBottom: 10,
                fontFamily: "'Raleway',sans-serif",
              }}
            >
              For sellers
            </p>
            <h1
              style={{
                fontSize: "clamp(28px,4vw,42px)",
                fontFamily: "'Raleway',sans-serif",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              AFH Valuation Estimator
            </h1>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway',sans-serif",
                color: "#ffffff",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: 0,
              }}
            >
              Know what your AFH is worth before you list. Estimate business and property value using income
              capitalization.
            </p>
          </div>
        </div>

        {/* ── Calculator ── */}
        <div
          ref={calcRef}
          className="val-print-section"
          style={{ background: "#000a02", padding: "2.5rem 1.5rem 3rem", position: "relative" }}
        >
          <canvas
            id="val-canvas"
            className="val-no-print"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.3,
            }}
          />
          <div
            className="val-card"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
              background: "linear-gradient(170deg,#041808,#020d04)",
              border: "2px solid #00e676",
              borderRadius: 14,
              padding: "2rem",
              boxShadow: "0 2px 0 rgba(0,230,118,0.4),0 20px 40px rgba(0,0,0,0.8),inset 0 1px 0 rgba(0,230,118,0.3)",
              transform: "rotateX(2deg)",
              transformOrigin: "top center",
            }}
          >
            {/* Title */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "#00e676",
                  marginBottom: 8,
                  fontWeight: 700,
                }}
              >
                Adult Family Home
              </div>
              <h2 style={{ fontSize: 30, fontWeight: 700, color: "#fff", textShadow: "0 0 30px rgba(0,230,118,0.5)" }}>
                AFH <span style={{ color: "#00e676" }}>Valuation</span> Estimator
              </h2>
              <div
                style={{
                  fontSize: 13,
                  color: "#00e676",
                  marginTop: 6,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Know your value · Plan your next move
              </div>
            </div>

            <div className="val-no-print">
              {/* Business Financials */}
              <div style={panelStyle}>
                <div style={panelTitleStyle}>Business Financials</div>
                <div style={dividerStyle} />
                <div style={grid2}>
                  <div>
                    <label style={labelStyle}>Annual net income ($)</label>
                    <input type="number" id="v-net" placeholder="124000" style={inputStyle} />
                    <div style={{ fontSize: 12, color: "#4dffaa", marginTop: 6 }}>
                      After expenses, before owner salary
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Annual gross revenue ($)</label>
                    <input type="number" id="v-rev" placeholder="288000" style={inputStyle} />
                  </div>
                </div>
                <div style={grid3}>
                  <div>
                    <label style={labelStyle}>Licensed capacity</label>
                    <select id="v-cap" style={inputStyle}>
                      <option value="">Select...</option>
                      <option value="3">3 beds</option>
                      <option value="4">4 beds</option>
                      <option value="5">5 beds</option>
                      <option value="6">6 beds</option>
                      <option value="7">7 beds</option>
                      <option value="8">8 beds</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Occupancy</label>
                    <select id="v-occ" style={inputStyle}>
                      <option value="100">100% full</option>
                      <option value="83">83% (5/6)</option>
                      <option value="67">67% (4/6)</option>
                      <option value="75">75% (3/4)</option>
                      <option value="50">50% half</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Years operating</label>
                    <select id="v-yrs" style={inputStyle}>
                      <option value="1">Under 2 yrs</option>
                      <option value="3">2–5 years</option>
                      <option value="7">5–10 years</option>
                      <option value="12">10+ years</option>
                    </select>
                  </div>
                </div>
                <div style={grid2}>
                  <div>
                    <label style={labelStyle}>Payer mix</label>
                    <select id="v-payer" style={inputStyle}>
                      <option value="private">Primarily private pay</option>
                      <option value="mixed">Mixed private / Medicaid</option>
                      <option value="medicaid">Primarily Medicaid</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Staffing</label>
                    <select id="v-staff" style={inputStyle}>
                      <option value="full">Full staff in place</option>
                      <option value="partial">Partial staff available</option>
                      <option value="none">No staff included</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Property */}
              <div style={panelStyle}>
                <div style={panelTitleStyle}>Property (if included)</div>
                <div style={dividerStyle} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 14,
                    marginBottom: 16,
                    alignItems: "start",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Property value est.</label>
                    <input type="number" id="v-prop" placeholder="650000" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>DSHS license status</label>
                    <select id="v-dshs" style={inputStyle}>
                      <option value="active">Active — good standing</option>
                      <option value="conditions">Active — with conditions</option>
                      <option value="expired">Expired</option>
                      <option value="none">Never licensed</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>County</label>
                    <select id="v-county" style={inputStyle}>
                      <option value="king">King</option>
                      <option value="snohomish">Snohomish</option>
                      <option value="pierce">Pierce</option>
                      <option value="kitsap">Kitsap</option>
                      <option value="thurston">Thurston</option>
                      <option value="other">Other WA county</option>
                    </select>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#4dffaa", marginTop: -10, marginBottom: 8 }}>
                  Property value est. — leave blank if selling business only
                </div>
              </div>

              {/* Calculate */}
              <button
                id="calc-val-btn"
                style={{
                  width: "100%",
                  padding: 16,
                  borderRadius: 8,
                  background: "#ffffff",
                  color: "#004d1a",
                  border: "2px solid #004d1a",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  marginTop: 4,
                  fontFamily: "'Raleway',sans-serif",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#004d1a";
                  el.style.color = "#ffffff";
                  el.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#ffffff";
                  el.style.color = "#004d1a";
                  el.style.borderColor = "#004d1a";
                }}
              >
                Calculate Estimated Value
              </button>
            </div>

            {/* Results */}
            <div id="val-results" style={{ display: "none", marginTop: 14 }}>
              <div className="val-no-print" style={{ textAlign: "center", marginBottom: 16 }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 22px",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "'Raleway',sans-serif",
                    color: "#ffffff",
                    background: "#00a352",
                    border: "1px solid #00e676",
                    cursor: "pointer",
                  }}
                >
                  🖨 Print or Save as PDF
                </button>
              </div>
              <div
                style={{
                  border: "1px solid #00e676",
                  borderRadius: 12,
                  padding: "1.6rem",
                  textAlign: "center",
                  marginBottom: 14,
                  marginTop: 16,
                  boxShadow: "0 0 40px rgba(0,230,118,0.18)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#00e676",
                    marginBottom: 10,
                    fontWeight: 700,
                  }}
                >
                  Estimated total value
                </div>
                <div
                  id="v-mid"
                  style={{
                    fontSize: 50,
                    fontWeight: 700,
                    color: "#00e676",
                    lineHeight: 1,
                    textShadow: "0 0 30px rgba(0,230,118,0.8)",
                    minHeight: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  —
                </div>
                <div id="v-range" style={{ fontSize: 14, color: "#fff", marginTop: 8 }}>
                  Range: — to —
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
                {[
                  ["Business value", "v-biz", "Income approach"],
                  ["Property value", "v-propout", "As entered"],
                  ["Implied cap rate", "v-caprate", "Risk-adjusted"],
                  ["Operating margin", "v-margin", ""],
                  ["Value per bed", "v-perbed", ""],
                  ["Gross rent multiplier", "v-grm", ""],
                ].map(([lbl, id, sub]) => (
                  <div
                    key={id}
                    style={{
                      background: "rgba(0,15,5,0.6)",
                      border: "1px solid rgba(0,230,118,0.25)",
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
                        color: "#00e676",
                        marginBottom: 7,
                        fontWeight: 700,
                      }}
                    >
                      {lbl}
                    </div>
                    <div id={id} style={{ fontSize: 19, fontWeight: 700, color: "#fff", minHeight: 28 }}>
                      —
                    </div>
                    {sub && <div style={{ fontSize: 11, color: "rgba(0,230,118,0.65)", marginTop: 3 }}>{sub}</div>}
                  </div>
                ))}
              </div>
              <div style={{ ...panelStyle, marginBottom: 14 }}>
                <div style={panelTitleStyle}>Value Factors</div>
                <div style={dividerStyle} />
                <div id="v-bars" />
              </div>
              <div
                id="v-assumptions"
                style={{
                  background: "rgba(0,15,5,0.5)",
                  border: "1px solid rgba(0,230,118,0.25)",
                  borderRadius: 8,
                  padding: "1rem 1.25rem",
                  marginBottom: 12,
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: 2,
                }}
              />
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                  padding: "12px 16px",
                  border: "1px solid rgba(0,230,118,0.18)",
                  borderRadius: 8,
                  background: "rgba(0,15,5,0.5)",
                }}
              >
                This estimate uses income capitalization methodology and Washington AFH market data. It is for
                informational purposes only and does not constitute a certified appraisal or broker opinion of value.
                Contact David Stein for a professional certified valuation.
              </div>
              <div
                style={{
                  border: "1px solid #00e676",
                  borderRadius: 10,
                  padding: "1.2rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 12,
                  background: "linear-gradient(135deg,rgba(255,255,255,0.02),rgba(0,0,0,0.3))",
                }}
              >
                <div>
                  <strong style={{ color: "#00e676", fontSize: 15, display: "block" }}>
                    Get a certified professional valuation
                  </strong>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 3 }}>
                    David Stein · Licensed Broker &amp; Certified Appraiser · eXp Realty · 20+ years AFH experience
                  </p>
                </div>
                <button
                  id="contact-btn-val"
                  style={{
                    fontSize: 12,
                    padding: "10px 22px",
                    borderRadius: 6,
                    background: "#ffffff",
                    color: "#004d1a",
                    border: "2px solid #004d1a",
                    cursor: "pointer",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    fontFamily: "'Raleway',sans-serif",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#004d1a";
                    el.style.color = "#ffffff";
                    el.style.borderColor = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#ffffff";
                    el.style.color = "#004d1a";
                    el.style.borderColor = "#004d1a";
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
                color: "#00e676",
                letterSpacing: ".15em",
                textTransform: "uppercase",
                marginTop: "1.75rem",
                fontWeight: 700,
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(0,230,118,0.2)",
              }}
            >
              Courtesy of Real Property Planning
            </div>
          </div>
        </div>

        <style>{`
          @media print {
            header, footer, nav {
              display: none !important;
            }
            .val-no-print {
              display: none !important;
            }
            .val-print-section {
              background: #ffffff !important;
            }
            .val-card {
              background: #ffffff !important;
              border: 1px solid #999999 !important;
              box-shadow: none !important;
              transform: none !important;
            }
            .val-card, .val-card * {
              color: #111111 !important;
              text-shadow: none !important;
              border-color: #999999 !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default AFHValuationEstimator;

import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";

interface CareType {
  id: string;
  label: string;
  waMonthly: number;
  nationalMonthly: number;
  unit: string;
  note: string;
}

const CARE_TYPES: CareType[] = [
  {
    id: "in-home",
    label: "In-Home Care (Non-Medical)",
    waMonthly: 8580,
    nationalMonthly: 6717,
    unit: "~44 hrs/week",
    note: "Washington averages $45/hour versus the national median of about $35/hour.",
  },
  {
    id: "adult-day",
    label: "Adult Day Care",
    waMonthly: 5395,
    nationalMonthly: 2057,
    unit: "5 days/week",
    note: "The most affordable long-term care option, providing daytime supervision and activities.",
  },
  {
    id: "adult-family-home",
    label: "Adult Family Home",
    waMonthly: 6500,
    nationalMonthly: 5500,
    unit: "monthly fee",
    note: "Often a more affordable, home-like alternative to assisted living, with 24/7 care bundled into one rate. Compared here against the national median for residential care/board-and-care homes, the closest national equivalent.",
  },
  {
    id: "assisted-living",
    label: "Assisted Living Community",
    waMonthly: 7600,
    nationalMonthly: 6200,
    unit: "monthly fee",
    note: "Washington runs about 23% above the national median.",
  },
  {
    id: "memory-care",
    label: "Memory Care",
    waMonthly: 9500,
    nationalMonthly: 7750,
    unit: "monthly fee",
    note: "Typically runs about 25% above standard assisted living rates.",
  },
  {
    id: "nursing-semi",
    label: "Nursing Home — Semi-Private Room",
    waMonthly: 13155,
    nationalMonthly: 9581,
    unit: "monthly",
    note: "Washington runs about 37% above the national median.",
  },
  {
    id: "nursing-private",
    label: "Nursing Home — Private Room",
    waMonthly: 14800,
    nationalMonthly: 10798,
    unit: "monthly",
    note: "Private rooms carry a premium over semi-private accommodations.",
  },
  {
    id: "ccrc",
    label: "Continuing Care Retirement Community (CCRC)",
    waMonthly: 3353,
    nationalMonthly: 3353,
    unit: "monthly service fee",
    note: "Washington-specific monthly-fee data is limited, so this uses the national figure for both columns. CCRCs also require a separate one-time entrance fee — commonly $400,000 or more nationally — that secures access to future care levels and is not included in this monthly figure.",
  },
];

const CARE_TYPE_COLORS: Record<string, { base: string; light: string; text: string }> = {
  "in-home": { base: "#3f7690", light: "#6fa5bd", text: "#ffffff" },
  "adult-day": { base: "#4f8268", light: "#7eac90", text: "#ffffff" },
  "adult-family-home": { base: "#1c9e90", light: "#3dd9c7", text: "#06231f" },
  "assisted-living": { base: "#535f8c", light: "#7e8cc0", text: "#ffffff" },
  "memory-care": { base: "#73567a", light: "#a07da0", text: "#ffffff" },
  "nursing-semi": { base: "#54616c", light: "#7d8f9c", text: "#ffffff" },
  "nursing-private": { base: "#723a48", light: "#a35d6f", text: "#ffffff" },
  ccrc: { base: "#7c6840", light: "#b3946a", text: "#ffffff" },
};

// Most recent published U.S. CPI-U year-over-year figure (BLS releases on a
// ~6-week lag; update when a newer report is published at bls.gov/cpi).
const ACTUAL_US_INFLATION_RATE = 4.2;
const ACTUAL_INFLATION_AS_OF = "May 2026 report";

const YEARS_OUT_OPTIONS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const INFLATION_OPTIONS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
const YEARS_OF_CARE_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SHORT_CARE_LABELS: Record<string, string> = {
  "in-home": "In-Home Care",
  "adult-day": "Adult Day Care",
  "adult-family-home": "Adult Family Home",
  "assisted-living": "Assisted Living",
  "memory-care": "Memory Care",
  "nursing-semi": "Nursing — Semi",
  "nursing-private": "Nursing — Private",
  ccrc: "CCRC",
};

const PLANNING_FOR_OPTIONS = [
  { id: "self", label: "Myself", phrase: "your" },
  { id: "parent", label: "A Parent", phrase: "your parent's" },
  { id: "spouse", label: "Partner/Spouse", phrase: "your partner's" },
  { id: "family", label: "Family Member", phrase: "your family member's" },
] as const;

const MARITAL_STATUS_OPTIONS = [
  { id: "single", label: "Single" },
  { id: "married", label: "Married" },
  { id: "divorced", label: "Divorced" },
  { id: "widowed", label: "Widowed" },
] as const;

const MARITAL_STATUS_NOTES: Record<string, string> = {
  single:
    "As a single applicant, Medicaid asset and income limits apply directly to one person's finances — an elder law attorney can walk through eligibility and planning options.",
  married:
    "Married couples often have additional Medicaid planning options, such as spousal asset protections, worth discussing with an elder law attorney.",
  divorced:
    "Divorce settlements and any spousal support can affect countable assets for Medicaid planning — worth reviewing with an elder law attorney.",
  widowed:
    "Losing a spouse often changes income and asset eligibility for benefit programs — an elder law attorney can help reassess the picture.",
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

const AMBER = "#14b8a8";
const AMBER_LIGHT = "#2dd9c4";
const SILVER = "#c9ced4";
const TEAL_RGB = "45,217,196";
const ELECTRIC_BLUE = "#2979ff";
const ELECTRIC_BLUE_LIGHT = "#7eb6ff";
const ELECTRIC_BLUE_RGB = "41,121,255";

const AnimatedValue = ({ value, formatter }: { value: number; formatter: (n: number) => string }) => {
  const [display, setDisplay] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    if (Math.abs(end - start) < 0.5) {
      setDisplay(end);
      prevValue.current = end;
      return;
    }
    const startTime = performance.now();
    const duration = 600;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + (end - start) * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevValue.current = end;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return <>{formatter(display)}</>;
};

const CostOfCareCalculator = () => {
  const [careTypeId, setCareTypeId] = useState("assisted-living");
  const [yearsOut, setYearsOut] = useState(0);
  const [inflationRate, setInflationRate] = useState(3);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let t = 0;
    let animId: number;
    const sp = 30;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      const cols = Math.ceil(canvas.width / sp) + 1;
      const rows = Math.ceil(canvas.height / sp) + 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const w = Math.sin(i * 0.4 + j * 0.3 + t) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(i * sp, j * sp, 1.5 + w * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${TEAL_RGB},${0.12 + w * 0.4})`;
          ctx.fill();
        }
      }
      t += 0.01;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const careType = useMemo(() => CARE_TYPES.find((c) => c.id === careTypeId) ?? CARE_TYPES[0], [careTypeId]);

  const [unit, setUnit] = useState<"monthly" | "annual">("monthly");

  const sortedByCost = useMemo(() => [...CARE_TYPES].sort((a, b) => a.waMonthly - b.waMonthly), []);
  const minCost = sortedByCost[0].waMonthly;
  const maxCost = sortedByCost[sortedByCost.length - 1].waMonthly;
  const gaugePct = useMemo(() => (careType.waMonthly - minCost) / (maxCost - minCost), [careType, minCost, maxCost]);
  const gaugeLabel = useMemo(() => {
    const rank = sortedByCost.findIndex((c) => c.id === careType.id);
    const total = sortedByCost.length;
    if (rank === 0) return "Lowest-cost option in Washington";
    if (rank === total - 1) return "Highest-cost option in Washington";
    const frac = rank / (total - 1);
    if (frac < 0.4) return "Below-average cost in Washington";
    if (frac < 0.6) return "Mid-range cost in Washington";
    return "Above-average cost in Washington";
  }, [careType, sortedByCost]);

  const currentYear = new Date().getFullYear();
  const yearsOutIndex = YEARS_OUT_OPTIONS.indexOf(yearsOut);
  const inflationIndex = INFLATION_OPTIONS.indexOf(inflationRate);

  const knobRef = useRef<HTMLDivElement>(null);

  // Tick angles in degrees, clockwise from 12 o'clock (top = 0deg).
  // 1% sits at 7 o'clock (210deg) and the dial sweeps clockwise through the
  // top (3% at 12 o'clock) to 5% at 5 o'clock (150deg), like a real dial.
  // 9 ticks (0.5% steps) spaced evenly across the same 300deg sweep.
  const KNOB_TICK_ANGLES = [210, 247.5, 285, 322.5, 360, 397.5, 435, 472.5, 510];

  const setInflationFromPointer = (clientX: number, clientY: number) => {
    const rect = knobRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const raw = (((Math.atan2(dx, -dy) * (180 / Math.PI)) % 360) + 360) % 360;
    const circDist = (a: number, b: number) => {
      const d = Math.abs(a - (b % 360)) % 360;
      return Math.min(d, 360 - d);
    };
    let bestIdx = 0;
    let bestDist = Infinity;
    KNOB_TICK_ANGLES.forEach((angle, i) => {
      const d = circDist(raw, angle);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    setInflationRate(INFLATION_OPTIONS[bestIdx]);
  };

  const handleKnobPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setInflationFromPointer(e.clientX, e.clientY);
  };

  const handleKnobPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    setInflationFromPointer(e.clientX, e.clientY);
  };

  const projectedWaMonthly = useMemo(() => {
    return careType.waMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedNationalMonthly = useMemo(() => {
    return careType.nationalMonthly * Math.pow(1 + inflationRate / 100, yearsOut);
  }, [careType, yearsOut, inflationRate]);

  const projectedWaAnnual = projectedWaMonthly * 12;
  const projectedNationalAnnual = projectedNationalMonthly * 12;
  const percentAboveNational = Math.round(
    ((careType.waMonthly - careType.nationalMonthly) / careType.nationalMonthly) * 100,
  );

  const [planningFor, setPlanningFor] = useState<(typeof PLANNING_FOR_OPTIONS)[number]["id"]>("self");
  const [maritalStatus, setMaritalStatus] = useState<(typeof MARITAL_STATUS_OPTIONS)[number]["id"]>("married");
  const [currentAge, setCurrentAge] = useState(75);
  const [yearsOfCareNeeded, setYearsOfCareNeeded] = useState(3);
  const yearsOfCareIndex = YEARS_OF_CARE_OPTIONS.indexOf(yearsOfCareNeeded);

  const planningPhrase = PLANNING_FOR_OPTIONS.find((p) => p.id === planningFor)?.phrase ?? "your";
  const planningLabel = PLANNING_FOR_OPTIONS.find((p) => p.id === planningFor)?.label ?? "Myself";
  const maritalLabel = MARITAL_STATUS_OPTIONS.find((m) => m.id === maritalStatus)?.label ?? "Married";
  const ageAtCareStart = currentAge + yearsOut;
  const ageAtCareEnd = ageAtCareStart + yearsOfCareNeeded;

  const totalWaCost = projectedWaMonthly * 12 * yearsOfCareNeeded;
  const totalNationalCost = projectedNationalMonthly * 12 * yearsOfCareNeeded;

  return (
    <>
      <SEOHead
        title="Cost of Care Calculator | Washington State Long-Term Care Costs"
        description="Compare the cost of in-home care, assisted living, memory care, and nursing homes in Washington State versus national averages, with future cost projections based on inflation."
        canonical="https://realpropertyplanning.com/cost-of-care-calculator"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Cost of Care Calculator", url: "https://realpropertyplanning.com/cost-of-care-calculator" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b87333" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5a3200",
                margin: "0 0 14px",
              }}
            >
              Senior Transitions · Cost of Care
            </p>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 50px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#1a2530",
                lineHeight: 1.15,
                margin: "0 0 20px",
              }}
            >
              Cost of Care Calculator
            </h1>
            <div style={{ width: 48, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: "#1e2e3e",
                lineHeight: 1.85,
                margin: "0 0 16px",
                maxWidth: 680,
              }}
            >
              Compare the cost of senior care in Washington State against national averages, and see how those costs may
              grow over time. Use this as a starting point for planning — actual costs vary by location, provider, and
              level of care needed.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section
          style={{
            background: "linear-gradient(180deg,#0d0e10,#040506)",
            padding: "60px 24px 90px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <canvas
            ref={canvasRef}
            className="coc-no-print"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div
              className="coc-chassis"
              style={{
                position: "relative",
                background: "linear-gradient(165deg,#2a2d32,#1a1c1f 40%,#15161a)",
                borderRadius: 22,
                padding: "2.4rem 2.2rem 2.6rem",
                border: "2px solid #2dd9c4",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.6) inset, 0 0 40px rgba(45,217,196,0.25), 0 40px 80px rgba(0,0,0,0.65)",
                overflow: "hidden",
              }}
            >
              {/* brushed-metal diagonal texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 5px)",
                  pointerEvents: "none",
                }}
              />

              {/* corner bolts */}
              {[
                { top: 16, left: 16 },
                { top: 16, right: 16 },
                { bottom: 16, left: 16 },
                { bottom: 16, right: 16 },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 35% 30%, #8a8e95, #2c2f34 65%, #111214)",
                    boxShadow: "0 2px 3px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.5)",
                    zIndex: 3,
                    ...pos,
                  }}
                />
              ))}

              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative", zIndex: 3 }}>
                <h2
                  style={{
                    fontSize: "clamp(22px, 4vw, 30px)",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#f0f0f0",
                    margin: 0,
                    textShadow: "0 2px 0 rgba(0,0,0,0.6)",
                  }}
                >
                  Senior Living{" "}
                  <span style={{ color: AMBER_LIGHT, textShadow: "0 0 24px rgba(45,217,196,0.6)" }}>Cost</span>{" "}
                  Calculator
                </h2>
                <div
                  style={{
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Live projection instrument · WA vs. national
                </div>
              </div>

              {/* Planning profile */}
              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  background: "linear-gradient(160deg,#1d1f23,#141517)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "1.4rem 1.5rem 1.5rem",
                  marginBottom: 16,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px !important",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 14,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Planning Profile
                  <span
                    style={{
                      flex: 1,
                      height: 1,
                      background: "linear-gradient(90deg, rgba(45,217,196,0.4), transparent)",
                    }}
                  />
                </div>

                <label
                  style={{
                    display: "block",
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 9,
                  }}
                >
                  Planning For
                </label>
                <div
                  className="coc-pill-grid"
                  style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 18 }}
                >
                  {PLANNING_FOR_OPTIONS.map((p) => {
                    const active = p.id === planningFor;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPlanningFor(p.id)}
                        style={{
                          padding: "10px 12px",
                          borderRadius: 8,
                          fontSize: "16px !important",
                          fontWeight: 700,
                          fontFamily: "'Raleway', sans-serif",
                          color: active ? "#062420" : "rgba(255,255,255,0.78)",
                          background: active
                            ? "linear-gradient(180deg,#5ce8d9,#0d9488)"
                            : "linear-gradient(180deg,#23262a,#181a1d)",
                          border: active ? "1px solid #2dd9c4" : "1px solid rgba(0,0,0,0.6)",
                          boxShadow: active
                            ? "0 0 14px rgba(45,217,196,0.55)"
                            : "0 2px 0 rgba(255,255,255,0.04) inset, 0 2px 5px rgba(0,0,0,0.5)",
                          cursor: "pointer",
                        }}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>

                <label
                  style={{
                    display: "block",
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 9,
                  }}
                >
                  Marital Status
                </label>
                <div
                  className="coc-pill-grid"
                  style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 18 }}
                >
                  {MARITAL_STATUS_OPTIONS.map((m) => {
                    const active = m.id === maritalStatus;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setMaritalStatus(m.id)}
                        style={{
                          padding: "10px 12px",
                          borderRadius: 8,
                          fontSize: "16px !important",
                          fontWeight: 700,
                          fontFamily: "'Raleway', sans-serif",
                          color: active ? "#062420" : "rgba(255,255,255,0.78)",
                          background: active
                            ? "linear-gradient(180deg,#5ce8d9,#0d9488)"
                            : "linear-gradient(180deg,#23262a,#181a1d)",
                          border: active ? "1px solid #2dd9c4" : "1px solid rgba(0,0,0,0.6)",
                          boxShadow: active
                            ? "0 0 14px rgba(45,217,196,0.55)"
                            : "0 2px 0 rgba(255,255,255,0.04) inset, 0 2px 5px rgba(0,0,0,0.5)",
                          cursor: "pointer",
                        }}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>

                <label
                  style={{
                    display: "block",
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 9,
                  }}
                >
                  Current Age
                </label>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                  <button
                    onClick={() => setCurrentAge((a) => Math.max(18, a - 1))}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      fontSize: "18px !important",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.85)",
                      background: "linear-gradient(180deg,#23262a,#181a1d)",
                      border: "1px solid rgba(0,0,0,0.6)",
                      boxShadow: "0 2px 0 rgba(255,255,255,0.04) inset, 0 2px 5px rgba(0,0,0,0.5)",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>
                  <div
                    style={{
                      background: "linear-gradient(180deg,#050605,#0a0c0a)",
                      borderRadius: 9,
                      border: "1px solid rgba(0,0,0,0.7)",
                      boxShadow: "inset 0 0 18px rgba(0,0,0,0.85), inset 0 2px 4px rgba(0,0,0,0.9)",
                      padding: "10px 28px",
                      textAlign: "center",
                      minWidth: 120,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "24px !important",
                        letterSpacing: "0.06em",
                        color: "#5ce8d9",
                        textShadow: "0 0 10px rgba(45,217,196,0.85)",
                      }}
                    >
                      {currentAge}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "16px !important",
                        color: "#5ce8d9",
                        marginLeft: 8,
                      }}
                    >
                      yrs old
                    </span>
                  </div>
                  <button
                    onClick={() => setCurrentAge((a) => Math.min(105, a + 1))}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      fontSize: "18px !important",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.85)",
                      background: "linear-gradient(180deg,#23262a,#181a1d)",
                      border: "1px solid rgba(0,0,0,0.6)",
                      boxShadow: "0 2px 0 rgba(255,255,255,0.04) inset, 0 2px 5px rgba(0,0,0,0.5)",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Care type toggle grid */}
              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  background: "linear-gradient(160deg,#1d1f23,#141517)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "1.4rem 1.5rem 1.5rem",
                  marginBottom: 16,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px !important",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 14,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Select Care Type
                  <span
                    style={{
                      flex: 1,
                      height: 1,
                      background: "linear-gradient(90deg, rgba(45,217,196,0.4), transparent)",
                    }}
                  />
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}
                  className="coc-toggle-grid"
                >
                  {CARE_TYPES.map((c) => {
                    const active = c.id === careTypeId;
                    const colors = CARE_TYPE_COLORS[c.id] ?? { base: "#3f7690", light: "#6fa5bd", text: "#ffffff" };
                    return (
                      <button
                        key={c.id}
                        onClick={() => setCareTypeId(c.id)}
                        style={{
                          position: "relative",
                          padding: "13px 10px",
                          borderRadius: 9,
                          textAlign: "center",
                          fontSize: "16px !important",
                          fontWeight: 700,
                          fontFamily: "'Raleway', sans-serif",
                          color: active ? colors.text : "rgba(255,255,255,0.85)",
                          background: active
                            ? `linear-gradient(180deg,${colors.light},${colors.base})`
                            : `linear-gradient(160deg,${colors.base}33,#181a1d)`,
                          border: active ? `1px solid ${colors.light}` : `1px solid ${colors.base}66`,
                          boxShadow: active
                            ? `0 0 0 1px ${colors.light}80, 0 0 22px ${colors.base}90, 0 1px 0 rgba(255,255,255,0.35) inset, 0 2px 6px rgba(0,0,0,0.5)`
                            : "0 2px 0 rgba(255,255,255,0.04) inset, 0 3px 6px rgba(0,0,0,0.5)",
                          cursor: "pointer",
                          transition: "all .15s ease",
                        }}
                      >
                        {SHORT_CARE_LABELS[c.id] ?? c.label}
                        <span
                          style={{
                            position: "absolute",
                            top: 6,
                            right: 7,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: colors.light,
                            boxShadow: active ? `0 0 6px ${colors.light}` : "none",
                            opacity: active ? 1 : 0.85,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Care Timeline — standalone, full width */}
              <div
                style={{
                  background: "linear-gradient(160deg,#1d1f23,#141517)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "1.4rem 1.5rem 1.5rem",
                  marginBottom: 16,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px !important",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    marginBottom: 18,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Care Timeline
                  <span
                    style={{
                      flex: 1,
                      height: 1,
                      background: "linear-gradient(90deg, rgba(45,217,196,0.4), transparent)",
                    }}
                  />
                </div>

                <div className="coc-timeline-split" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
                  {/* Left: visual timeline — vertical stepper, safe at any screen width */}
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {[
                      { label: "TODAY", sub: `Age ${currentAge}` },
                      { label: "CARE BEGINS", sub: `Age ${ageAtCareStart} · Year ${currentYear + yearsOut}` },
                      { label: "CARE ENDS", sub: `Age ${ageAtCareEnd}` },
                    ].map((m, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 16 }}>
                          <div
                            style={{
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              flexShrink: 0,
                              background: i === 1 ? "#2dd9c4" : "#5a5f66",
                              boxShadow: i === 1 ? "0 0 10px rgba(45,217,196,0.9)" : "none",
                              border: "2px solid #141517",
                            }}
                          />
                          {i < 2 && (
                            <div
                              style={{
                                width: 4,
                                flex: 1,
                                minHeight: 32,
                                background: i === 0 ? "linear-gradient(180deg,#0d9488,#2dd9c4)" : "#2a2d32",
                                borderRadius: 2,
                                margin: "4px 0",
                              }}
                            />
                          )}
                        </div>
                        <div style={{ paddingBottom: i < 2 ? 18 : 0 }}>
                          <div
                            style={{
                              fontSize: "17px !important",
                              fontWeight: 800,
                              letterSpacing: "0.04em",
                              color: i === 1 ? "#2dd9c4" : "rgba(255,255,255,0.9)",
                              fontFamily: "'Raleway', sans-serif",
                              marginBottom: 3,
                            }}
                          >
                            {m.label}
                          </div>
                          <div
                            style={{
                              fontSize: "16px !important",
                              color: "rgba(255,255,255,0.78)",
                              fontFamily: "'Raleway', sans-serif",
                            }}
                          >
                            {m.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right: the two sliders, stacked */}
                  <div>
                    {/* When will care begin */}
                    <label
                      style={{
                        display: "block",
                        fontSize: "16px !important",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 12,
                      }}
                    >
                      When will care begin?
                    </label>
                    <div
                      style={{
                        background: "linear-gradient(180deg,#050605,#0a0c0a)",
                        borderRadius: 9,
                        border: "1px solid rgba(0,0,0,0.7)",
                        boxShadow: "inset 0 0 18px rgba(0,0,0,0.85), inset 0 2px 4px rgba(0,0,0,0.9)",
                        padding: "14px 16px",
                        textAlign: "center",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontWeight: 700,
                          fontSize: "28px !important",
                          letterSpacing: "0.06em",
                          color: "#5ce8d9",
                          textShadow: "0 0 10px rgba(45,217,196,0.85), 0 0 24px rgba(45,217,196,0.45)",
                        }}
                      >
                        {yearsOut === 0 ? "TODAY" : `IN ${yearsOut} YEARS`}
                      </div>
                      <div
                        style={{
                          fontSize: "16px !important",
                          color: "#9ff7ec",
                          marginTop: 6,
                          fontWeight: 600,
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Age {ageAtCareStart} · Year {currentYear + yearsOut}
                      </div>
                    </div>
                    <input
                      type="range"
                      className="coc-range"
                      min={0}
                      max={YEARS_OUT_OPTIONS.length - 1}
                      step={1}
                      value={yearsOutIndex}
                      onChange={(e) => setYearsOut(YEARS_OUT_OPTIONS[Number(e.target.value)])}
                      style={{ width: "100%", marginBottom: 8 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "16px !important",
                        fontFamily: "'Raleway', sans-serif",
                        color: "rgba(255,255,255,0.85)",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                        marginBottom: 24,
                      }}
                    >
                      <span>Today</span>
                      <span>50 yrs</span>
                    </div>

                    {/* How long will care be needed */}
                    <label
                      style={{
                        display: "block",
                        fontSize: "16px !important",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 12,
                      }}
                    >
                      How long will care be needed?
                    </label>
                    <div
                      style={{
                        background: "linear-gradient(180deg,#050605,#0a0c0a)",
                        borderRadius: 9,
                        border: "1px solid rgba(0,0,0,0.7)",
                        boxShadow: "inset 0 0 18px rgba(0,0,0,0.85), inset 0 2px 4px rgba(0,0,0,0.9)",
                        padding: "14px 16px",
                        textAlign: "center",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontWeight: 700,
                          fontSize: "28px !important",
                          letterSpacing: "0.06em",
                          color: "#5ce8d9",
                          textShadow: "0 0 10px rgba(45,217,196,0.85), 0 0 24px rgba(45,217,196,0.45)",
                        }}
                      >
                        {yearsOfCareNeeded} {yearsOfCareNeeded === 1 ? "YEAR" : "YEARS"}
                      </div>
                      <div
                        style={{
                          fontSize: "16px !important",
                          color: "#9ff7ec",
                          marginTop: 6,
                          fontWeight: 600,
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Through age {ageAtCareEnd}
                      </div>
                    </div>
                    <input
                      type="range"
                      className="coc-range"
                      min={0}
                      max={YEARS_OF_CARE_OPTIONS.length - 1}
                      step={1}
                      value={yearsOfCareIndex}
                      onChange={(e) => setYearsOfCareNeeded(YEARS_OF_CARE_OPTIONS[Number(e.target.value)])}
                      style={{ width: "100%", marginBottom: 8 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "16px !important",
                        fontFamily: "'Raleway', sans-serif",
                        color: "rgba(255,255,255,0.85)",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                      }}
                    >
                      <span>1 yr</span>
                      <span>10 yrs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Intensity Gauge + Inflation Rate, side by side on wider screens */}
              <div
                className="coc-two-col"
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 16 }}
              >
                {/* Cost intensity gauge */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 3,
                    background: "linear-gradient(160deg,#1d1f23,#141517)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "1.4rem 1.5rem 0.6rem",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px !important",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: ELECTRIC_BLUE_LIGHT,
                      marginBottom: 4,
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Cost Intensity Gauge
                    <span
                      style={{
                        flex: 1,
                        height: 1,
                        background: `linear-gradient(90deg, rgba(${ELECTRIC_BLUE_RGB},0.4), transparent)`,
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 0 2px" }}>
                    <svg width="260" height="168" viewBox="0 0 260 168">
                      {Array.from({ length: 48 }).map((_, i) => {
                        const t0 = 180 - (i / 48) * 180;
                        const t1 = 180 - ((i + 1) / 48) * 180;
                        const rad0 = (t0 * Math.PI) / 180;
                        const rad1 = (t1 * Math.PI) / 180;
                        const x0 = 130 + 110 * Math.cos(rad0);
                        const y0 = 140 - 110 * Math.sin(rad0);
                        const x1 = 130 + 110 * Math.cos(rad1);
                        const y1 = 140 - 110 * Math.sin(rad1);
                        const progress = i / 47;
                        const width = 5 + progress * 21;
                        const filled = i / 48 < Math.max(0, Math.min(1, gaugePct));
                        return (
                          <path
                            key={i}
                            d={`M ${x0.toFixed(2)} ${y0.toFixed(2)} A 110 110 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`}
                            stroke={filled ? ELECTRIC_BLUE : "#2a2d32"}
                            strokeWidth={width}
                            fill="none"
                            strokeLinecap="round"
                            style={{ transition: "stroke 0.4s ease" }}
                          />
                        );
                      })}
                      <g
                        style={{ transition: "transform 0.6s ease" }}
                        transform={`translate(130,140) rotate(${-90 + Math.max(0, Math.min(1, gaugePct)) * 180})`}
                      >
                        <polygon
                          points="0,-86 4,0 -4,0"
                          fill={ELECTRIC_BLUE_LIGHT}
                          style={{ filter: `drop-shadow(0 0 6px rgba(${ELECTRIC_BLUE_RGB},0.9))` }}
                        />
                      </g>
                      <circle cx={130} cy={140} r={9} fill="#2a2c2f" stroke="#444" strokeWidth={2} />
                      <text
                        x={10}
                        y={162}
                        textAnchor="start"
                        fill={ELECTRIC_BLUE_LIGHT}
                        fontWeight={700}
                        fontFamily="Raleway"
                        style={{ fontSize: "16px !important" }}
                      >
                        LOW
                      </text>
                      <text
                        x={250}
                        y={162}
                        textAnchor="end"
                        fill={ELECTRIC_BLUE_LIGHT}
                        fontWeight={700}
                        fontFamily="Raleway"
                        style={{ fontSize: "16px !important" }}
                      >
                        HIGH
                      </text>
                    </svg>
                    <div
                      style={{
                        fontSize: "16px !important",
                        color: ELECTRIC_BLUE_LIGHT,
                        marginTop: 2,
                        marginBottom: 14,
                        letterSpacing: "0.04em",
                        textAlign: "center",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      <strong style={{ color: ELECTRIC_BLUE }}>{careType.label}</strong> is a{" "}
                      <strong style={{ color: ELECTRIC_BLUE }}>{gaugeLabel.toLowerCase()}</strong>
                    </div>
                  </div>
                </div>

                {/* Inflation rate */}
                <div
                  style={{
                    background: "linear-gradient(160deg,#1d1f23,#141517)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14,
                    padding: "1.4rem 1.5rem 1.5rem",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px !important",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: AMBER_LIGHT,
                      marginBottom: 14,
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    Inflation Rate
                    <span
                      style={{
                        flex: 1,
                        height: 1,
                        background: "linear-gradient(90deg, rgba(45,217,196,0.4), transparent)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      background: "linear-gradient(180deg,#050605,#0a0c0a)",
                      borderRadius: 9,
                      border: "1px solid rgba(0,0,0,0.7)",
                      boxShadow: "inset 0 0 18px rgba(0,0,0,0.85), inset 0 2px 4px rgba(0,0,0,0.9)",
                      padding: "12px 16px",
                      textAlign: "center",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "38px !important",
                        letterSpacing: "0.04em",
                        color: ELECTRIC_BLUE_LIGHT,
                        textShadow: `0 0 12px rgba(${ELECTRIC_BLUE_RGB},0.85)`,
                      }}
                    >
                      {ACTUAL_US_INFLATION_RATE.toFixed(1)}%
                    </div>
                    <div
                      style={{
                        fontSize: "16px !important",
                        color: ELECTRIC_BLUE_LIGHT,
                        marginTop: 4,
                        fontWeight: 600,
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      Actual U.S. inflation (CPI) · {ACTUAL_INFLATION_AS_OF}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "14px !important",
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "'Raleway', sans-serif",
                      textAlign: "center",
                      marginBottom: 18,
                      lineHeight: 1.5,
                    }}
                  >
                    Use this as a reference, then pick the rate below to project your own care costs forward.
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div
                      ref={knobRef}
                      onPointerDown={handleKnobPointerDown}
                      onPointerMove={handleKnobPointerMove}
                      style={{
                        width: 110,
                        height: 110,
                        borderRadius: "50%",
                        position: "relative",
                        marginTop: 22,
                        marginBottom: 46,
                        cursor: "grab",
                        touchAction: "none",
                        background: "radial-gradient(circle at 32% 28%, #4a4d52, #23262a 55%, #141517 80%)",
                        boxShadow:
                          "0 6px 14px rgba(0,0,0,0.6), 0 0 0 4px #0e0f11, 0 0 0 5px rgba(255,255,255,0.04), 0 0 22px rgba(45,217,196,0.25)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 6,
                          borderRadius: "50%",
                          background:
                            "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.05) 0deg 3deg, transparent 3deg 9deg)",
                          pointerEvents: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "8%",
                          left: "50%",
                          width: 4,
                          height: "32%",
                          background: "linear-gradient(180deg,#9ff7ec,#14b8a8)",
                          borderRadius: 3,
                          transformOrigin: "50% 90%",
                          boxShadow: "0 0 8px rgba(45,217,196,0.9)",
                          transform: `translateX(-50%) rotate(${KNOB_TICK_ANGLES[inflationIndex]}deg)`,
                          pointerEvents: "none",
                        }}
                      />
                      {INFLATION_OPTIONS.map((rate, i) => {
                        if (rate % 1 !== 0) return null;
                        const angle = KNOB_TICK_ANGLES[i];
                        const rad = (angle * Math.PI) / 180;
                        const r = 60;
                        const x = r * Math.sin(rad);
                        const y = -r * Math.cos(rad);
                        const active = inflationRate === rate;
                        return (
                          <button
                            key={rate}
                            onClick={() => setInflationRate(rate)}
                            aria-label={`Set inflation rate to ${rate}%`}
                            style={{
                              position: "absolute",
                              top: `calc(50% + ${y}px)`,
                              left: `calc(50% + ${x}px)`,
                              transform: "translate(-50%,-50%)",
                              fontSize: "16px !important",
                              fontWeight: 800,
                              fontFamily: "'Raleway', sans-serif",
                              color: active ? "#2dd9c4" : "rgba(255,255,255,0.8)",
                              textShadow: active ? "0 0 10px rgba(45,217,196,0.8)" : "none",
                              background: "none",
                              border: "none",
                              padding: 8,
                              margin: -8,
                              cursor: "pointer",
                              lineHeight: 1,
                            }}
                          >
                            {rate}%
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 50 }}>
                      {INFLATION_OPTIONS.map((rate, i) => {
                        const active = inflationRate === rate;
                        const isWhole = rate % 1 === 0;
                        const barHeight = 14 + (i / (INFLATION_OPTIONS.length - 1)) * 36;
                        return (
                          <button
                            key={rate}
                            onClick={() => setInflationRate(rate)}
                            aria-label={`Set inflation rate to ${rate}%`}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 6,
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: 0,
                            }}
                          >
                            <div
                              style={{
                                width: 14,
                                height: barHeight,
                                borderRadius: 4,
                                background: active
                                  ? "linear-gradient(180deg,#ff7a6e,#d62828)"
                                  : "linear-gradient(180deg,#7a2c2c,#4a1414)",
                                boxShadow: active ? "0 0 14px rgba(214,40,40,0.7)" : "none",
                                transition: "all 0.2s ease",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "13px !important",
                                fontWeight: 700,
                                fontFamily: "'Raleway', sans-serif",
                                color: active ? "#2dd9c4" : "rgba(255,255,255,0.8)",
                                visibility: isWhole ? "visible" : "hidden",
                              }}
                            >
                              {isWhole ? `${rate}%` : "•"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Unit toggle + results */}
              <div
                style={{
                  background: "linear-gradient(160deg,#1d1f23,#141517)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "1.4rem 1.5rem 1.5rem",
                  marginBottom: 16,
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px !important",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: unit === "monthly" ? AMBER_LIGHT : "rgba(255,255,255,0.8)",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Monthly
                  </span>
                  <div
                    onClick={() => setUnit(unit === "monthly" ? "annual" : "monthly")}
                    style={{
                      width: 84,
                      height: 30,
                      borderRadius: 16,
                      position: "relative",
                      cursor: "pointer",
                      background: "linear-gradient(180deg,#0a0a0a,#1c1d1f)",
                      boxShadow: "inset 0 2px 5px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 3,
                        left: unit === "monthly" ? 3 : 43,
                        width: 38,
                        height: 24,
                        borderRadius: 13,
                        transition: "left .2s ease",
                        background: "linear-gradient(180deg,#9ff7ec,#14b8a8)",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(45,217,196,0.6)",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "16px !important",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: unit === "annual" ? AMBER_LIGHT : "rgba(255,255,255,0.8)",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Annual
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div
                    style={{
                      borderRadius: 12,
                      padding: "18px 14px",
                      textAlign: "center",
                      background: "linear-gradient(180deg,#091713,#081512)",
                      border: "1px solid rgba(45,217,196,0.5)",
                      boxShadow: "0 0 26px rgba(45,217,196,0.22), inset 0 0 18px rgba(0,0,0,0.7)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px !important",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: 8,
                        color: AMBER_LIGHT,
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      Washington State
                    </div>
                    <div
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "clamp(22px,4vw,28px)",
                        marginBottom: 4,
                        color: "#5ce8d9",
                        textShadow: "0 0 10px rgba(45,217,196,0.85)",
                      }}
                    >
                      <AnimatedValue
                        value={unit === "monthly" ? projectedWaMonthly : projectedWaAnnual}
                        formatter={formatCurrency}
                      />
                    </div>
                    <div style={{ fontSize: "16px !important", color: "#9ff7ec", fontFamily: "'Raleway', sans-serif" }}>
                      per {unit === "monthly" ? "month" : "year"}
                    </div>
                  </div>

                  <div
                    style={{
                      borderRadius: 12,
                      padding: "18px 14px",
                      textAlign: "center",
                      background: "linear-gradient(180deg,#0a0a0a,#111213)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "inset 0 0 18px rgba(0,0,0,0.7)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px !important",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: 8,
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      National Median
                    </div>
                    <div
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "clamp(22px,4vw,28px)",
                        marginBottom: 4,
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      <AnimatedValue
                        value={unit === "monthly" ? projectedNationalMonthly : projectedNationalAnnual}
                        formatter={formatCurrency}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "16px !important",
                        color: "rgba(255,255,255,0.8)",
                        fontFamily: "'Raleway', sans-serif",
                      }}
                    >
                      per {unit === "monthly" ? "month" : "year"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total cost of care over the planned duration */}
              <div
                style={{
                  background: "linear-gradient(160deg,#1d1f23,#141517)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "1.2rem 1.5rem",
                  marginBottom: 16,
                  textAlign: "center",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset, 0 10px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px !important",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: AMBER_LIGHT,
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    marginBottom: 8,
                  }}
                >
                  Total Estimated Cost — {planningPhrase} {yearsOfCareNeeded}-Year Care Plan
                </div>
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 700,
                    fontSize: "clamp(24px,4vw,32px)",
                    color: "#5ce8d9",
                    textShadow: "0 0 10px rgba(45,217,196,0.85)",
                  }}
                >
                  <AnimatedValue value={totalWaCost} formatter={formatCurrency} />
                </div>
                <div
                  style={{
                    fontSize: "16px !important",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "'Raleway', sans-serif",
                    marginTop: 4,
                  }}
                >
                  in Washington · vs. <AnimatedValue value={totalNationalCost} formatter={formatCurrency} /> nationally
                </div>
                <div
                  style={{
                    fontSize: "16px !important",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "'Raleway', sans-serif",
                    marginTop: 8,
                  }}
                >
                  Approximate, based on the projected rate at the start of care held flat across the {yearsOfCareNeeded}
                  -year period — actual costs will continue rising during care.
                </div>
              </div>

              <div
                style={{
                  background: "rgba(45,217,196,0.07)",
                  border: "1px solid rgba(45,217,196,0.3)",
                  borderLeft: "4px solid #14b8a8",
                  borderRadius: 9,
                  padding: "15px 18px",
                  marginBottom: 22,
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <p
                  style={{
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: AMBER_LIGHT }}>{careType.label}</strong> for {planningPhrase} care in
                  Washington currently runs about{" "}
                  <strong style={{ color: AMBER_LIGHT }}>
                    {percentAboveNational > 0
                      ? `${percentAboveNational}% above`
                      : `${Math.abs(percentAboveNational)}% below`}
                  </strong>{" "}
                  the national median. {careType.note}
                </p>
                <p
                  style={{
                    fontSize: "16px !important",
                    fontFamily: "'Raleway', sans-serif",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    margin: "12px 0 0",
                    paddingTop: 12,
                    borderTop: "1px solid rgba(45,217,196,0.2)",
                  }}
                >
                  {MARITAL_STATUS_NOTES[maritalStatus]}
                </p>
              </div>

              <p
                style={{
                  fontSize: "16px !important",
                  fontFamily: "'Raleway', sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  textAlign: "center",
                  margin: 0,
                  position: "relative",
                  zIndex: 3,
                }}
              >
                Figures based on the CareScout/Genworth Cost of Care Survey and related industry sources. Actual costs
                vary by region, provider, and level of care. This tool is for general planning purposes only.
              </p>

              {/* Print button — hidden when printing */}
              <div className="coc-no-print" style={{ textAlign: "center", marginTop: 24 }}>
                <button
                  onClick={() => window.print()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 26px",
                    borderRadius: 9,
                    fontSize: "16px !important",
                    fontWeight: 700,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#062420",
                    background: "linear-gradient(180deg,#5ce8d9,#0d9488)",
                    border: "1px solid #2dd9c4",
                    boxShadow: "0 0 18px rgba(45,217,196,0.45)",
                    cursor: "pointer",
                  }}
                >
                  <Printer size={20} />
                  Print or Save as PDF
                </button>
              </div>

              {/* Print-only summary — invisible on screen, shown only in the print stylesheet */}
              <div className="coc-print-summary">
                <h2 style={{ fontSize: "22px", margin: "0 0 4px", color: "#111" }}>
                  Senior Living Cost Calculator — Results Summary
                </h2>
                <p style={{ fontSize: "12px", color: "#555", margin: "0 0 18px" }}>
                  Prepared via realpropertyplanning.com on{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    margin: "16px 0 6px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 4,
                  }}
                >
                  Planning Profile
                </h3>
                <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Planning for: {planningLabel}</p>
                <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Marital status: {maritalLabel}</p>
                <p style={{ fontSize: "14px", color: "#222", margin: "0" }}>Current age: {currentAge}</p>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    margin: "16px 0 6px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 4,
                  }}
                >
                  Care Type
                </h3>
                <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>{careType.label}</p>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    margin: "16px 0 6px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 4,
                  }}
                >
                  Care Timeline
                </h3>
                <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>Today: age {currentAge}</p>
                <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>
                  Care begins: {yearsOut === 0 ? "today" : `in ${yearsOut} years`} (age {ageAtCareStart}, year{" "}
                  {currentYear + yearsOut})
                </p>
                <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
                  Care ends: after {yearsOfCareNeeded} {yearsOfCareNeeded === 1 ? "year" : "years"} (age {ageAtCareEnd})
                </p>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    margin: "16px 0 6px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 4,
                  }}
                >
                  Inflation Assumption
                </h3>
                <p style={{ fontSize: "14px", color: "#222", margin: "0 0 4px" }}>
                  Rate used for this projection: {inflationRate}% per year
                </p>
                <p style={{ fontSize: "14px", color: "#222", margin: 0 }}>
                  Reference — actual U.S. inflation (CPI): {ACTUAL_US_INFLATION_RATE.toFixed(1)}% (
                  {ACTUAL_INFLATION_AS_OF})
                </p>

                <h3
                  style={{
                    fontSize: "16px",
                    color: "#111",
                    margin: "16px 0 6px",
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 4,
                  }}
                >
                  Projected Cost — {currentYear + yearsOut}
                </h3>
                <table
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    color: "#222",
                    borderCollapse: "collapse",
                    marginBottom: 8,
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", borderBottom: "1px solid #999", paddingBottom: 4 }}></th>
                      <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>
                        Washington
                      </th>
                      <th style={{ textAlign: "right", borderBottom: "1px solid #999", paddingBottom: 4 }}>National</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "4px 0" }}>Per month</td>
                      <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaMonthly)}</td>
                      <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalMonthly)}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 0" }}>Per year</td>
                      <td style={{ textAlign: "right" }}>{formatCurrency(projectedWaAnnual)}</td>
                      <td style={{ textAlign: "right" }}>{formatCurrency(projectedNationalAnnual)}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "4px 0", fontWeight: 700 }}>Total over {yearsOfCareNeeded}-year plan</td>
                      <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalWaCost)}</td>
                      <td style={{ textAlign: "right", fontWeight: 700 }}>{formatCurrency(totalNationalCost)}</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ fontSize: "13px", color: "#444", margin: "8px 0 0" }}>
                  {careType.label} for {planningPhrase} care in Washington runs about{" "}
                  {percentAboveNational > 0
                    ? `${percentAboveNational}% above`
                    : `${Math.abs(percentAboveNational)}% below`}{" "}
                  the national median. {careType.note}
                </p>
                <p style={{ fontSize: "13px", color: "#444", margin: "8px 0 0" }}>
                  {MARITAL_STATUS_NOTES[maritalStatus]}
                </p>

                <p
                  style={{
                    fontSize: "11px",
                    color: "#777",
                    margin: "20px 0 0",
                    borderTop: "1px solid #ccc",
                    paddingTop: 8,
                  }}
                >
                  Figures based on the CareScout/Genworth Cost of Care Survey and related industry sources. Actual costs
                  vary by region, provider, and level of care. This tool is for general planning purposes only and is
                  not financial, legal, or medical advice. Prepared as a courtesy of Real Property Planning —
                  realpropertyplanning.com.
                </p>
              </div>
            </div>

            {/* Power cord */}
            <svg
              className="coc-no-print"
              viewBox="0 0 860 64"
              width="100%"
              height="64"
              style={{ overflow: "visible", marginTop: -6 }}
            >
              <path
                d="M 120 0 C 120 30, 60 20, 60 50"
                stroke="#2a2c2f"
                strokeWidth={6}
                fill="none"
                strokeLinecap="round"
              />
              <circle r={4} fill="#9ff7ec" className="coc-cord-spark" />
              <g transform="translate(40,46)">
                <rect x={0} y={0} width={40} height={18} rx={3} fill="#1c1d1f" stroke="#3a3c40" />
                <rect x={10} y={-4} width={3} height={6} fill="#888" />
                <rect x={20} y={-4} width={3} height={6} fill="#888" />
              </g>
            </svg>
          </div>

          <style>{`
            @media (min-width: 560px) {
              .coc-toggle-grid { grid-template-columns: repeat(4,1fr) !important; }
              .coc-pill-grid { grid-template-columns: repeat(4,1fr) !important; }
            }
            @media (min-width: 640px) {
              .coc-two-col { grid-template-columns: 1.15fr 0.85fr !important; }
              .coc-timeline-split { grid-template-columns: 0.85fr 1.15fr !important; }
            }
            .coc-print-summary {
              display: none;
            }
            @media print {
              header, footer, nav {
                display: none !important;
              }
              .coc-no-print {
                display: none !important;
              }
              .coc-chassis > *:not(.coc-print-summary) {
                display: none !important;
              }
              .coc-chassis {
                background: #fff !important;
                border: none !important;
                box-shadow: none !important;
                padding: 0 !important;
                border-radius: 0 !important;
              }
              .coc-print-summary {
                display: block !important;
                font-family: Arial, Helvetica, sans-serif;
                color: #111;
                background: #fff;
              }
            }
            .coc-range {
              -webkit-appearance: none;
              appearance: none;
              height: 8px;
              border-radius: 5px;
              background: linear-gradient(90deg,#0d9488,#5ce8d9);
              outline: none;
            }
            .coc-range::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: radial-gradient(circle at 35% 30%, #fff, #d9d9d9 30%, #8a8d92 70%, #4a4d52);
              box-shadow: 0 3px 6px rgba(0,0,0,0.6), 0 0 0 3px rgba(45,217,196,0.25), 0 0 14px rgba(45,217,196,0.5);
              cursor: pointer;
            }
            .coc-range::-moz-range-thumb {
              width: 26px;
              height: 26px;
              border-radius: 50%;
              background: radial-gradient(circle at 35% 30%, #fff, #d9d9d9 30%, #8a8d92 70%, #4a4d52);
              box-shadow: 0 3px 6px rgba(0,0,0,0.6), 0 0 0 3px rgba(45,217,196,0.25), 0 0 14px rgba(45,217,196,0.5);
              cursor: pointer;
              border: none;
            }
            .coc-range::-moz-range-track {
              background: linear-gradient(90deg,#0d9488,#5ce8d9);
              height: 8px;
              border-radius: 5px;
            }
            .coc-cord-spark {
              offset-path: path('M 120 0 C 120 30, 60 20, 60 50');
              animation: coc-travel 2.4s linear infinite;
            }
            @keyframes coc-travel {
              0% { offset-distance: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { offset-distance: 100%; opacity: 0; }
            }
          `}</style>
        </section>

        {/* Why costs vary */}
        <section style={{ background: "#edf0f3", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5a3200",
                margin: "0 0 14px",
              }}
            >
              Key Concept
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#0a1628",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              Why Washington Costs More Than the National Average
            </h2>
            <div style={{ width: 40, height: 3, background: "#b87333", marginBottom: 28, borderRadius: 1 }} />
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
                lineHeight: 1.85,
                margin: "0 0 20px",
              }}
            >
              Washington State consistently ranks above the national median across nearly every category of senior care.
              Higher regional labor costs, a competitive caregiving job market, and higher costs of living in
              metropolitan areas like Seattle, Bellevue, and Bellingham all contribute to this gap.
            </p>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'Raleway', sans-serif",
                color: "#1e2a38",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              Costs also vary significantly within the state itself. Families in lower-cost areas such as Walla Walla or
              Yakima often find meaningfully lower rates than those in the Puget Sound region. An Adult Family Home is
              frequently a more affordable alternative to assisted living or nursing home care while still providing a
              high level of personalized support — worth exploring through our{" "}
              <Link to="/afh-club" style={{ color: "#2c6e9e" }}>
                AFH Club
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#2c3a48", padding: "64px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontSize: 15,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#b87333",
                margin: "0 0 16px",
              }}
            >
              Plan Ahead
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 34px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#e8e2d9",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              Need Help Planning for Care Costs?
            </h2>
            <div style={{ width: 40, height: 2, background: "#b87333", margin: "0 auto 24px", borderRadius: 1 }} />
            <p
              style={{
                fontSize: 17,
                fontFamily: "'Raleway', sans-serif",
                color: "#e8e2d9",
                lineHeight: 1.85,
                margin: "0 0 32px",
              }}
            >
              Real Property Planning connects families with senior living advisors, financial planners, and resources to
              help fund the cost of care — including options like selling a home to fund senior living.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/senior-living-advisors"
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#e8e2d9",
                  background: "#b87333",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Talk to a Senior Living Advisor
              </Link>
              <Link
                to="/sell-house-fund-senior-living"
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#e8e2d9",
                  background: "transparent",
                  padding: "14px 28px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "1px solid #4a5a6a",
                }}
              >
                Funding Care With Home Equity
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default CostOfCareCalculator;
