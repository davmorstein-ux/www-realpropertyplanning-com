import { useState } from "react";
import { useNavigate } from "react-router-dom";
import steeringWheelImg from "@/assets/steering-wheel-transparent.png";
import gearStickImg from "@/assets/gear_stick_only.png";
import gearBootImg from "@/assets/gear_boot_only.png";
import coupleChatImg from "@/assets/chat-couple.png";

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
  homeImage   = steeringWheelImg,
  stickImage  = gearStickImg,
  bootImage   = gearBootImg,
  coupleImage = coupleChatImg,
  onBack      = () => window.history.back(),
  onForward   = () => window.history.forward(),
  onChat      = () => {},
}) {
  const navigate = useNavigate();

  // Inject wiggle keyframe once into the document
  if (typeof document !== "undefined" && !document.getElementById("mg-nav-styles")) {
    const style = document.createElement("style");
    style.id = "mg-nav-styles";
    style.textContent = `
      @keyframes wheelWiggle {
        0%   { transform: rotate(0deg); }
        20%  { transform: rotate(-28deg); }
        50%  { transform: rotate(28deg); }
        80%  { transform: rotate(-18deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
  }

  // Steering wheel: 'none' | 'hovering'
  const [wheelDir, setWheelDir] = useState("none");

  // Gear shifter: 'none' | 'R' | 'F'
  const [gearDir, setGearDir] = useState("none");

  // Chat button hover
  const [chatHovered, setChatHovered] = useState(false);

  // ── Stick tilt (single image, deep pivot keeps boot planted) ─
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
    gap:             "12px",
    padding:         "12px 24px",
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
    width:           "116px",
    height:          "116px",
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
    width:      "72px",
    height:     "72px",
    objectFit:  "contain",
    display:    "block",
    animation:  wheelDir === "hovering" ? "wheelWiggle 0.4s ease-in-out infinite" : "none",
    transform:  "rotate(0deg)",
  };

  const homeLabelStyle = {
    fontSize:    "15px",
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
    width:           "130px",
    height:          "116px",
    borderRadius:    "90px 90px 40px 40px",
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

  // Shifter container — wide enough for boot, tall enough for full stack
  const shifterStackStyle = {
    position:   "relative",
    width:      "44px",
    height:     "72px",
    flexShrink: 0,
    overflow:   "visible",
  };

  // Boot — absolutely positioned at bottom, NEVER transforms
  const bootImgStyle = {
    position:       "absolute",
    bottom:         0,
    left:           "50%",
    transform:      "translateX(-50%)",
    width:          "60px",
    height:         "44px",
    objectFit:      "contain",
    objectPosition: "bottom center",
    display:        "block",
    zIndex:         1,
  };

  // Stick — positioned so its bottom aligns with boot top, rotates from bottom
  const stickImgStyle = {
    position:        "absolute",
    bottom:          "34px",
    left:            "50%",
    transform:       `translateX(-50%) ${stickRotation}`,
    transformOrigin: "bottom center",
    width:           "36px",
    height:          "62px",
    objectFit:       "contain",
    objectPosition:  "bottom center",
    display:         "block",
    transition:      "transform 0.2s ease",
    zIndex:          2,
  };

  // R label
  const rLabelStyle = {
    fontSize:   "22px",
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
    fontSize:   "22px",
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
    position:        "relative",
    width:           "116px",
    height:          "116px",
    minWidth:        "116px",
    minHeight:       "116px",
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
    overflow:        "visible",
    boxSizing:       "border-box",
    transform:       chatHovered ? "scale(1.18)" : "scale(1)",
    transition:      "transform 0.2s ease, box-shadow 0.15s ease",
  };

  const chatLabelStyle = {
    position:        "absolute",
    right:           "-110px",
    top:             "50%",
    transform:       "translateY(-50%)",
    backgroundColor: "#1e3355",
    borderRadius:    "6px",
    padding:         "5px 10px",
    fontSize:        "15px",
    fontWeight:      700,
    color:           "#ffffff",
    whiteSpace:      "nowrap",
    pointerEvents:   "none",
    opacity:         chatHovered ? 1 : 0,
    transition:      "opacity 0.2s ease",
    userSelect:      "none",
  };

  const chatLabelArrowStyle = {
    position:    "absolute",
    left:        "-6px",
    top:         "50%",
    transform:   "translateY(-50%)",
    width:       0,
    height:      0,
    borderTop:    "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRight:  "6px solid #1e3355",
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
        onMouseEnter={() => setWheelDir("hovering")}
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

        {/* Gear shifter — boot fixed, stick tilts independently */}
        <div style={shifterStackStyle}>
          {/* Boot — never moves */}
          <img src={bootImage} alt="" aria-hidden="true" style={bootImgStyle} />
          {/* Stick + knob — tilts on hover */}
          <img src={stickImage} alt="Gear shifter" style={stickImgStyle} />
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
        onMouseEnter={() => setChatHovered(true)}
        onMouseLeave={() => setChatHovered(false)}
        aria-label="Open chat"
        title="Chat with us"
      >
        <span style={chatLabelStyle}><span style={chatLabelArrowStyle} aria-hidden="true" />Chat With Us</span>
        <img src={coupleImage} alt="Chat with us" style={{ ...chatImgStyle, overflow: "hidden" }} />
      </button>


    </nav>
  );
}
