import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AFHROICalculator = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Dot matrix ──────────────────────────────────────────
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
    // ── Calculator logic ────────────────────────────────────
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
              <div class="roi-bar-fill" data-pct="${Math.max(0, b.pct)}" style="height:100%;width:0%;border-radius:4px;background:linear-gradient(90deg,#1e90ff,#4db8ff);box-shadow:0 0 10px rgba(30,144,255,0.6);transition:width .9s ease"></div>
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

    // Wire up events
    document.getElementById("btn-pct")?.addEventListener("click", () => setMode("pct"));
    document.getElementById("btn-dollar")?.addEventListener("click", () => setMode("dollar"));
    document.getElementById("r-price")?.addEventListener("input", updateDerived);
    document.getElementById("r-down")?.addEventListener("input", updateDerived);
    document.getElementById("calc-roi-btn")?.addEventListener("click", calcROI);
    document.getElementById("contact-btn-roi")?.addEventListener("click", () => (window.location.href = "/contact"));
  }, []);

  // Shared styles
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(0,10,28,0.8)",
    border: "2px solid #1e90ff",
    borderRadius: 6,
    color: "#fff",
    fontSize: 15,
    padding: "11px 14px",
    fontFamily: "'Raleway',sans-serif",
    boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#1e90ff",
    marginBottom: 8,
    fontWeight: 700,
  };
  const panelStyle: React.CSSProperties = {
    border: "2px solid #1e90ff",
    borderRadius: 10,
    padding: "1.4rem 1.6rem",
    marginBottom: 14,
    background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
    position: "relative",
  };
  const panelTitleStyle: React.CSSProperties = {
    fontSize: 17,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "#1e90ff",
    marginBottom: 16,
    fontWeight: 700,
  };
  const dividerStyle: React.CSSProperties = {
    height: 1,
    background: "linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)",
    marginBottom: 18,
  };
  const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 };

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

        {/* ── Calculator ── */}
        <div ref={calcRef} style={{ background: "#000510", padding: "2.5rem 1.5rem 3rem", position: "relative" }}>
          <canvas
            id="roi-canvas"
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
            {/* Title */}
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

            {/* Acquisition */}
            <div style={panelStyle}>
              <div style={panelTitleStyle}>Acquisition</div>
              <div style={dividerStyle} />
              <div style={grid2}>
                <div>
                  <label style={labelStyle}>Purchase price ($)</label>
                  <input type="number" id="r-price" placeholder="850000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Interest rate (%)</label>
                  <input type="number" id="r-rate" placeholder="7.25" step="0.01" style={inputStyle} />
                </div>
              </div>
              <div style={grid2}>
                <div>
                  <label style={labelStyle}>Loan term (years)</label>
                  <select id="r-term" style={inputStyle}>
                    <option value="30">30 years</option>
                    <option value="25">25 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                  </select>
                </div>
                <div />
              </div>
              {/* Toggle */}
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
                    style={{ display: "inline-flex", borderRadius: 6, overflow: "hidden", border: "2px solid #1e90ff" }}
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
                  <input type="number" id="r-down" placeholder="25" style={{ ...inputStyle, flex: 1, width: "auto" }} />
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

            {/* Revenue */}
            <div style={panelStyle}>
              <div style={panelTitleStyle}>Revenue &amp; Operations</div>
              <div style={dividerStyle} />
              <div style={grid2}>
                <div>
                  <label style={labelStyle}>Annual gross revenue ($)</label>
                  <input type="number" id="r-rev" placeholder="288000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Annual operating expenses ($)</label>
                  <input type="number" id="r-exp" placeholder="164000" style={inputStyle} />
                </div>
              </div>
              <div style={grid2}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>Licensed capacity</label>
                  <select id="r-cap" style={inputStyle}>
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
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>Current occupancy (%)</label>
                  <input type="number" id="r-occ" placeholder="83" style={inputStyle} />
                </div>
              </div>
            </div>

            {/* Calculate */}
            <button
              id="calc-roi-btn"
              data-nav-button="true"
              style={{
                width: "100%",
                padding: 16,
                borderRadius: 8,
                background: "#ffffff",
                color: "#003380",
                border: "2px solid #003380",
                fontSize: 22,
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

            {/* Results */}
            <div id="roi-results" style={{ display: "none", marginTop: 14 }}>
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
              <div style={{ ...panelStyle, marginBottom: 14 }}>
                <div style={panelTitleStyle}>Return Breakdown</div>
                <div style={dividerStyle} />
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
                    textTransform: "uppercase",
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
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;
