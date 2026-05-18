import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * MGFloatingNav v3
 * - Steering wheel spins left/right on hover
 * - Gear stick tilts L/R on R/F hover zones (50/50 split)
 * - Boot stays stationary at all times
 * - All backgrounds fully opaque — no transparency
 *
 * Replace these image paths with actual asset paths in your project:
 *   homeImage   → steering wheel PNG
 *   gearImage   → full gear shifter PNG (will be clipped into stick + boot)
 *   coupleImage → couple photo PNG
 */
export default function MGFloatingNav({
  homeImage   = "/images/steering-wheel.png",
  gearImage   = "/images/gear-shifter.png",
  coupleImage = "/images/couple-photo.png",
  onBack      = () => window.history.back(),
  onForward   = () => window.history.forward(),
  onChat      = () => {},
}) {
  const navigate = useNavigate();

  // Steering wheel: 'none' | 'left' | 'right'
  const [wheelDir, setWheelDir] = useState("none");

  // Gear shifter: 'none' | 'R' | 'F'
  const [gearDir, setGearDir] = useState("none");

  // ── Wheel rotation ──────────────────────────────────────────
  const wheelRotation =
    wheelDir === "left"  ? "rotate(-25deg)" :
    wheelDir === "right" ? "rotate(25deg)"  : "rotate(0deg)";

  // ── Stick tilt (boot stays fixed) ───────────────────────────
  const stickRotation =
    gearDir === "R" ? "rotate(-22deg)" :
    gearDir === "F" ? "rotate(22deg)"  : "rotate(0deg)";

  // ────────────────────────────────────────────────────────────
  // STYLES
  // ────────────────────────────────────────────────────────────

  const barStyle = {
    position:        "fixed",
    bottom:          "24px",
    left:            "50%",
    transform:       "translateX(-50%)",
    zIndex:          99999,
    backgroundColor: "#1e3355",
    opacity:         1,
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "center",
    gap:             "10px",
    padding:         "10px 20px",
    borderRadius:    "999px",
    boxShadow:       "0 6px 28px rgba(0,0,0,0.6)",
    isolation:       "isolate",
    backdropFilter:  "none",
    WebkitBackdropFilter: "none",
    mixBlendMode:    "normal",
    overflow:        "visible",
  };

  // ── Steering wheel button ────────────────────────────────────
  const homeBtnStyle = {
    position:        "relative",
    width:           "76px",
    height:          "76px",
    borderRadius:    "50%",
    backgroundColor: "#f0ebe0",
    opacity:         1,
    border:          "2.5px solid #7a1a1a",
    display:         "flex",
    flexDirection:   "column",
    alignItems:      "center",
    justifyContent:  "center",
    cursor:          "pointer",
    flexShrink:      0,
    padding:         "4px",
    boxSizing:       "border-box",
    overflow:        "visible",
    transition:      "box-shadow 0.15s ease",
  };

  const wheelImgStyle = {
    width:      "46px",
    height:     "46px",
    objectFit:  "contain",
    display:    "block",
    transition: "transform 0.25s ease",
    transform:  wheelRotation,
  };

  const homeLabelStyle = {
    fontSize:    "11px",
    fontWeight:  "800",
    color:       "#1e3355",
    marginTop:   "2px",
    letterSpacing: "0.05em",
    lineHeight:  1,
    display:     "block",
    userSelect:  "none",
  };

  // ── Gear oval container ──────────────────────────────────────
  const gearOvalStyle = {
    position:        "relative",
    width:           "104px",
    height:          "80px",
    borderRadius:    "40px",
    backgroundColor: "#f0ebe0",
    opacity:         1,
    border:          "2.5px solid #7a1a1a",
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "space-between",
    flexShrink:      0,
    padding:         "0 8px",
    boxSizing:       "border-box",
    overflow:        "visible",
    backdropFilter:  "none",
    WebkitBackdropFilter: "none",
  };

  // The shifter image stack (stick on top of boot)
  const shifterStackStyle = {
    position:   "relative",
    width:      "36px",
    height:     "64px",
    flexShrink: 0,
    overflow:   "visible",
  };

  // Boot — bottom portion of image, clipped, NEVER moves
  const bootStyle = {
    position:       "absolute",
    bottom:         0,
    left:           "50%",
    transform:      "translateX(-50%)",
    width:          "36px",
    height:         "64px",
    objectFit:      "contain",
    objectPosition: "bottom center",
    display:        "block",
    // Show only bottom 45% of image (the boot + base)
    clipPath:       "inset(55% 0 0 0)",
    zIndex:         1,
  };

  // Stick + knob — top portion, tilts on hover
  const stickStyle = {
    position:        "absolute",
    bottom:          0,
    left:            "50%",
    transform:       `translateX(-50%) ${stickRotation}`,
    transformOrigin: "bottom center",
    width:           "36px",
    height:          "64px",
    objectFit:       "contain",
    objectPosition:  "bottom center",
    display:         "block",
    // Show only top 55% of image (knob + stick)
    clipPath:        "inset(0 0 45% 0)",
    transition:      "transform 0.2s ease",
    zIndex:          2,
  };

  // R label
  const rLabelStyle = {
    fontSize:   "16px",
    fontWeight: "900",
    color:      gearDir === "R" ? "#7a1a1a" : "#1e3355",
    lineHeight: 1,
    userSelect: "none",
    flexShrink: 0,
    transition: "color 0.15s ease",
    cursor:     "pointer",
    zIndex:     3,
  };

  // F label
  const fLabelStyle = {
    fontSize:   "16px",
    fontWeight: "900",
    color:      gearDir === "F" ? "#7a1a1a" : "#1e3355",
    lineHeight: 1,
    userSelect: "none",
    flexShrink: 0,
    transition: "color 0.15s ease",
    cursor:     "pointer",
    zIndex:     3,
  };

  // Invisible 50/50 hover zones overlaid on top of the oval
  const hoverZoneBaseStyle = {
    position: "absolute",
    top:      0,
    height:   "100%",
    width:    "50%",
    zIndex:   10,
    cursor:   "pointer",
    borderRadius: "40px",
  };

  // ── Chat button ──────────────────────────────────────────────
  const chatBtnStyle = {
    width:           "76px",
    height:          "76px",
    borderRadius:    "50%",
    backgroundColor: "#1e3355",
    opacity:         1,
    border:          "3px solid #7a1a1a",
    display:         "flex",
    alignItems:      "center",
    justifyContent:  "center",
    cursor:          "pointer",
    flexShrink:      0,
    padding:         0,
    overflow:        "hidden",
    boxSizing:       "border-box",
    transition:      "box-shadow 0.15s ease",
  };

  const chatImgStyle = {
    width:        "100%",
    height:       "100%",
    objectFit:    "cover",
    borderRadius: "50%",
    display:      "block",
  };

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────
  return (
    <nav style={barStyle} aria-label="Quick navigation">

      {/* ── 1. Steering Wheel — Home ── */}
      <button
        style={homeBtnStyle}
        onClick={() => navigate("/")}
        onMouseEnter={() => setWheelDir("left")}
        onMouseLeave={() => setWheelDir("none")}
        aria-label="Go to Home"
        title="Home"
      >
        <img src={homeImage} alt="Steering wheel" style={wheelImgStyle} />
        <span style={homeLabelStyle}>Home</span>
      </button>

      {/* ── 2. Gear Shifter — R (back) / F (forward) ── */}
      <div style={gearOvalStyle} aria-label="Page navigation">

        {/* R label */}
        <span
          style={rLabelStyle}
          onClick={onBack}
          role="button"
          tabIndex={0}
          aria-label="Go back"
          onKeyDown={(e) => e.key === "Enter" && onBack()}
        >
          R
        </span>

        {/* Gear shifter image stack */}
        <div style={shifterStackStyle}>
          {/* Boot — stationary */}
          <img
            src={gearImage}
            alt=""
            aria-hidden="true"
            style={bootStyle}
          />
          {/* Stick + knob — tilts */}
          <img
            src={gearImage}
            alt="Gear shifter"
            style={stickStyle}
          />
        </div>

        {/* F label */}
        <span
          style={fLabelStyle}
          onClick={onForward}
          role="button"
          tabIndex={0}
          aria-label="Go forward"
          onKeyDown={(e) => e.key === "Enter" && onForward()}
        >
          F
        </span>

        {/* Invisible 50/50 hover zones — left = R, right = F */}
        <div
          style={{ ...hoverZoneBaseStyle, left: 0 }}
          onMouseEnter={() => setGearDir("R")}
          onMouseLeave={() => setGearDir("none")}
          onClick={onBack}
          aria-hidden="true"
        />
        <div
          style={{ ...hoverZoneBaseStyle, right: 0 }}
          onMouseEnter={() => setGearDir("F")}
          onMouseLeave={() => setGearDir("none")}
          onClick={onForward}
          aria-hidden="true"
        />
      </div>

      {/* ── 3. Couple Photo — Chat ── */}
      <button
        style={chatBtnStyle}
        onClick={onChat}
        aria-label="Open chat"
        title="Chat with us"
      >
        <img src={coupleImage} alt="Chat with us" style={chatImgStyle} />
      </button>

    </nav>
  );
}
