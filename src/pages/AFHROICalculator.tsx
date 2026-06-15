import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AFHROICalculator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dot matrix canvas
    const canvas = document.getElementById("dot-matrix-roi") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      let t = 0;
      const spacing = 28;
      let animId: number;
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);
      const draw = () => {
        const cols = Math.ceil(canvas.width / spacing) + 1;
        const rows = Math.ceil(canvas.height / spacing) + 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const wave = Math.sin(i * 0.4 + j * 0.3 + t) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(i * spacing, j * spacing, 2 + wave * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(30,144,255,${0.3 + wave * 0.7})`;
            ctx.fill();
          }
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

  // Toggle handler
  const setDPMode = (mode: string) => {
    const btnPct = document.getElementById("btn-pct") as HTMLButtonElement;
    const btnDollar = document.getElementById("btn-dollar") as HTMLButtonElement;
    const downInput = document.getElementById("r-down") as HTMLInputElement;
    const hint = document.getElementById("dp-hint")!;
    const price = parseFloat((document.getElementById("r-price") as HTMLInputElement).value) || 0;
    const cur = parseFloat(downInput.value) || 0;

    (window as any).dpMode = mode;

    if (mode === "pct") {
      btnPct.style.background = "#ffffff";
      btnPct.style.color = "#003380";
      btnPct.style.fontSize = "18px";
      btnDollar.style.background = "#003380";
      btnDollar.style.color = "#ffffff";
      btnDollar.style.fontSize = "14px";
      downInput.placeholder = "25";
      hint.textContent = "Enter percentage of purchase price";
      if (price > 0 && cur > 0) downInput.value = String(Math.round((cur / price) * 100));
      else downInput.value = "";
    } else {
      btnDollar.style.background = "#ffffff";
      btnDollar.style.color = "#003380";
      btnDollar.style.fontSize = "18px";
      btnPct.style.background = "#003380";
      btnPct.style.color = "#ffffff";
      btnPct.style.fontSize = "14px";
      downInput.placeholder = "212500";
      hint.textContent = "Enter dollar amount of down payment";
      if (price > 0 && cur > 0) downInput.value = String(Math.round(price * (cur / 100)));
      else downInput.value = "";
    }
    (window as any).updateDerived();
  };

  useEffect(() => {
    (window as any).dpMode = "pct";

    (window as any).updateDerived = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement)?.value) || 0;
      const val = parseFloat((document.getElementById("r-down") as HTMLInputElement)?.value) || 0;
      const derived = document.getElementById("dp-derived")!;
      if (!derived) return;
      if ((window as any).dpMode === "pct") {
        derived.textContent = price > 0 && val > 0 ? "= $" + Math.round(price * (val / 100)).toLocaleString() : "= —";
      } else {
        const p = price > 0 ? (val / price) * 100 : 0;
        derived.textContent = price > 0 && val > 0 ? "= " + Math.round(p * 10) / 10 + "%" : "= —";
      }
    };

    (window as any).getDownAmt = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement)?.value) || 0;
      const val = parseFloat((document.getElementById("r-down") as HTMLInputElement)?.value) || 0;
      return (window as any).dpMode === "pct" ? price * (val / 100) : val;
    };

    const fmtD = (n: number) => {
      if (Math.abs(n) >= 1000000) return "$" + (n / 1000000).toFixed(2) + "M";
      if (Math.abs(n) >= 1000) return "$" + (n / 1000).toFixed(0) + "K";
      return "$" + Math.round(n).toLocaleString();
    };
    const fmtP = (n: number) => Math.round(n * 10) / 10 + "%";

    const odometer = (el: HTMLElement, finalStr: string, duration: number) => {
      const start = Date.now();
      const isMoney = finalStr.startsWith("$");
      const isPct = finalStr.endsWith("%");
      const tick = () => {
        const elapsed = Date.now() - start;
        if (elapsed < duration) {
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

    (window as any).calcROI = () => {
      const price = parseFloat((document.getElementById("r-price") as HTMLInputElement).value) || 0;
      const rate = parseFloat((document.getElementById("r-rate") as HTMLInputElement).value) || 7.25;
      const term = parseInt((document.getElementById("r-term") as HTMLSelectElement).value) || 30;
      const rev = parseFloat((document.getElementById("r-rev") as HTMLInputElement).value) || 0;
      const exp = parseFloat((document.getElementById("r-exp") as HTMLInputElement).value) || 0;
      const occ = parseFloat((document.getElementById("r-occ") as HTMLInputElement).value) || 83;
      const downAmt = (window as any).getDownAmt();
      if (!price || !rev || !downAmt) {
        alert("Please enter purchase price, down payment, and annual gross revenue.");
        return;
      }
      const loanAmt = price - downAmt;
      const mr = rate / 100 / 12;
      const np = term * 12;
      const mortgage = (loanAmt * (mr * Math.pow(1 + mr, np))) / (Math.pow(1 + mr, np) - 1);
      const annMort = mortgage * 12;
      const adjRev = rev * (occ / 100);
      const noi = adjRev - exp;
      const annCF = noi - annMort;
      const roi = (annCF / downAmt) * 100;
      const capRate = (noi / price) * 100;
      const margin = (noi / adjRev) * 100;
      const results = document.getElementById("roi-results")!;
      results.classList.add("visible");
      results.scrollIntoView({ behavior: "smooth", block: "start" });
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
        document.getElementById("r-bars")!.innerHTML = bars
          .map(
            (b) =>
              `<div class="br"><span class="bl">${b.label}</span><div class="bt"><div class="bf" style="width:0%" data-pct="${Math.max(0, b.pct)}"></div></div><span class="bv">${b.val}</span></div>`,
          )
          .join("");
        setTimeout(() => {
          document.querySelectorAll("#r-bars .bf").forEach((el: any) => {
            el.style.width = el.dataset.pct + "%";
          });
        }, 50);
      }, DUR + 200);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Dot matrix canvas */}
        <canvas id="dot-matrix-roi" className="dot-matrix-canvas" />

        {/* Hero */}
        <section
          style={{
            background: "rgba(20,32,48,0.7)",
            padding: "48px 24px 40px",
            color: "#ffffff",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Link to="/afh-club/calculators" style={{ display: "inline-block", marginBottom: 24 }}>
              <img
                src="/back-to-calculators-blue.webp"
                alt="Back to Calculators"
                style={{ height: 52, width: "auto", display: "block", cursor: "pointer" }}
              />
            </Link>
            <p
              className="calc-hero-eyebrow"
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                marginBottom: 10,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              For buyers &amp; investors
            </p>
            <h1
              className="calc-hero-text"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 700,
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              AFH ROI Calculator
            </h1>
            <p
              className="calc-hero-subtitle"
              style={{
                fontFamily: "'Raleway', sans-serif",
                maxWidth: 600,
              }}
            >
              Know your numbers before you commit. Analyze cash-on-cash return, cap rate, NOI, and monthly cash flow.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <div
          ref={containerRef}
          style={{
            background: "rgba(0,5,16,0.75)",
            padding: "2.5rem 1.5rem 3rem",
            fontFamily: "'Raleway',sans-serif",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: "linear-gradient(170deg,#071830 0%,#030d1e 60%,#050f22 100%)",
              border: "2px solid #1e90ff",
              borderRadius: 14,
              padding: "2rem",
              position: "relative",
              transform: "rotateX(2deg)",
              transformOrigin: "top center",
              boxShadow:
                "0 2px 0 rgba(30,144,255,0.4),0 4px 0 #030d1e,0 6px 0 rgba(30,144,255,0.2),0 20px 40px rgba(0,0,0,0.8),inset 0 1px 0 rgba(30,144,255,0.3)",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {/* Header */}
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
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: ".05em",
                  textShadow: "0 0 30px rgba(30,144,255,0.5)",
                }}
              >
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

            {/* Acquisition Panel */}
            <div
              style={{
                border: "2px solid #1e90ff",
                borderRadius: 10,
                padding: "1.4rem 1.6rem",
                marginBottom: 14,
                background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#1e90ff",
                  marginBottom: 16,
                  fontWeight: 700,
                }}
              >
                Acquisition
              </div>
              <div
                style={{
                  height: 1,
                  background: "linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)",
                  marginBottom: 18,
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Purchase price ($)
                  </label>
                  <input
                    type="number"
                    id="r-price"
                    placeholder="850000"
                    onInput={(window as any).updateDerived}
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Interest rate (%)
                  </label>
                  <input
                    type="number"
                    id="r-rate"
                    placeholder="7.25"
                    step="0.01"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Loan term (years)
                  </label>
                  <select
                    id="r-term"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  >
                    <option value="30">30 years</option>
                    <option value="25">25 years</option>
                    <option value="20">20 years</option>
                    <option value="15">15 years</option>
                  </select>
                </div>
                <div />
              </div>

              {/* Down payment toggle */}
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
                      onClick={() => setDPMode("pct")}
                      style={{
                        padding: "10px 28px",
                        fontSize: 18,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "'Raleway',sans-serif",
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
                      onClick={() => setDPMode("dollar")}
                      style={{
                        padding: "10px 28px",
                        fontSize: 14,
                        fontWeight: 700,
                        cursor: "pointer",
                        fontFamily: "'Raleway',sans-serif",
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
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
                  <input
                    type="number"
                    id="r-down"
                    placeholder="25"
                    onChange={(e) => (window as any).updateDerived()}
                    style={{
                      flex: 1,
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
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

            {/* Revenue Panel */}
            <div
              style={{
                border: "2px solid #1e90ff",
                borderRadius: 10,
                padding: "1.4rem 1.6rem",
                marginBottom: 14,
                background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#1e90ff",
                  marginBottom: 16,
                  fontWeight: 700,
                }}
              >
                Revenue & Operations
              </div>
              <div
                style={{
                  height: 1,
                  background: "linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)",
                  marginBottom: 18,
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 16 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Annual gross revenue ($)
                  </label>
                  <input
                    type="number"
                    id="r-rev"
                    placeholder="288000"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Annual operating expenses ($)
                  </label>
                  <input
                    type="number"
                    id="r-exp"
                    placeholder="164000"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Licensed capacity
                  </label>
                  <select
                    id="r-cap"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  >
                    <option value="2">2 beds</option>
                    <option value="4">4 beds</option>
                    <option value="6">6 beds</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#1e90ff",
                      marginBottom: 8,
                      fontWeight: 700,
                    }}
                  >
                    Current occupancy (%)
                  </label>
                  <input
                    type="number"
                    id="r-occ"
                    placeholder="83"
                    style={{
                      width: "100%",
                      background: "rgba(0,10,28,0.8)",
                      border: "2px solid #1e90ff",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      padding: "11px 14px",
                      fontFamily: "'Raleway',sans-serif",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Calculate button */}
            <button
              style={{
                width: "100%",
                padding: 16,
                borderRadius: 8,
                background: "#ffffff",
                color: "#003380",
                border: "2px solid #003380",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: 4,
                fontFamily: "'Raleway',sans-serif",
                transition: "background 0.2s,color 0.2s,border-color 0.2s",
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
              onClick={() => (window as any).calcROI()}
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
                  boxShadow: "0 0 40px rgba(30,144,255,0.2)",
                  marginTop: 16,
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
                ].map(([label, id]) => (
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
                      {label}
                    </div>
                    <div id={id} style={{ fontSize: 19, fontWeight: 700, color: "#fff", minHeight: 28 }}>
                      —
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  border: "2px solid #1e90ff",
                  borderRadius: 10,
                  padding: "1.4rem 1.6rem",
                  marginBottom: 14,
                  background: "linear-gradient(135deg,rgba(255,255,255,0.03),rgba(0,0,0,0.3))",
                }}
              >
                <div
                  style={{
                    fontSize: 17,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#1e90ff",
                    marginBottom: 16,
                    fontWeight: 700,
                  }}
                >
                  Return Breakdown
                </div>
                <div
                  style={{
                    height: 1,
                    background: "linear-gradient(90deg,transparent,rgba(30,144,255,0.25),transparent)",
                    marginBottom: 18,
                  }}
                />
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
                    transition: "background 0.2s,color 0.2s,border-color 0.2s",
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
                  onClick={() => (window.location.href = "/contact")}
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
                textShadow: "0 0 12px rgba(30,144,255,0.5)",
              }}
            >
              Courtesy of Real Property Planning
            </div>
          </div>
        </div>

        {/* Bar styles injected */}
        <style>{`
          #r-bars .br{display:flex;align-items:center;gap:14px;margin-bottom:12px}
          #r-bars .bl{font-size:13px;color:#fff;width:150px;flex-shrink:0;font-weight:600}
          #r-bars .bt{flex:1;height:7px;background:rgba(0,0,0,0.5);border-radius:4px;overflow:hidden;border:2px solid #1e90ff;box-shadow:0 0 8px rgba(30,144,255,0.4)}
          #r-bars .bf{height:100%;border-radius:4px;background:linear-gradient(90deg,#1e90ff,#4db8ff);box-shadow:0 0 10px rgba(30,144,255,0.6);transition:width .9s ease}
          #r-bars .bv{font-size:13px;color:#1e90ff;width:70px;text-align:right;flex-shrink:0;font-weight:700}
          #roi-results.visible{display:block!important}
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default AFHROICalculator;
