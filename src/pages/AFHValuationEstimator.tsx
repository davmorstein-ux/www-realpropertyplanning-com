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
    display: "block",
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
        <div style={{ background: "#1e2a38", padding: "48px 24px 40px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-green.webp"
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
        <div ref={calcRef} style={{ background: "#000a02", padding: "2.5rem 1.5rem 3rem", position: "relative" }}>
          <canvas
            id="val-canvas"
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
              <div style={grid3}>
                <div>
                  <label style={labelStyle}>Property value est.</label>
                  <input type="number" id="v-prop" placeholder="650000" style={inputStyle} />
                  <div style={{ fontSize: 12, color: "#4dffaa", marginTop: 6 }}>Leave blank if business only</div>
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

            {/* Results */}
            <div id="val-results" style={{ display: "none", marginTop: 14 }}>
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
      </main>
      <Footer />
    </>
  );
};

export default AFHValuationEstimator;
