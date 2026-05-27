import { useState, useEffect } from "react";
import steeringWheelImg from "@/assets/steering-wheel-transparent.webp";
import gearStickImg from "@/assets/gear_stick_only.webp";
import gearBootImg from "@/assets/gear_boot_only.webp";
import coupleChatImg from "@/assets/chat-couple.webp";

const MGFloatingNav = ({
  homeImage = steeringWheelImg,
  stickImage = gearStickImg,
  bootImage = gearBootImg,
  coupleImage = coupleChatImg,
  onHome = () => window.location.href = "/",
  onBack = () => window.history.back(),
  onForward = () => window.history.forward(),
  onChat = () => window.dispatchEvent(new CustomEvent("rpp-open-chat")),
}) => {
  const [wheelHovered, setWheelHovered] = useState(false);
  const [gearSide, setGearSide] = useState("none"); // 'none' | 'R' | 'F'
  const [chatHovered, setChatHovered] = useState(false);

  // Wheel wiggle animation via CSS injected once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes wheelWiggle {
        0%   { transform: rotate(0deg); }
        25%  { transform: rotate(-25deg); }
        75%  { transform: rotate(25deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  /* ─── STYLES ─── */
  const barStyle = {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
    backgroundColor: "#1e3a5f",
    opacity: 1,
    borderRadius: "60px",
    padding: "9px 18px",
    display: "flex",
    alignItems: "center",
    gap: "9px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    overflow: "visible",
  };

  const circleBase = {
    width: "87px",
    height: "87px",
    borderRadius: "50%",
    backgroundColor: "#f5f0e8",
    opacity: 1,
    border: "3px solid #8b1a1a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    overflow: "visible",
    position: "relative",
  };

  const gearCircleStyle = {
    ...circleBase,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "6px",
    paddingRight: "6px",
  };

  const wheelImgStyle = {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    display: "block",
    animation: wheelHovered ? "wheelWiggle 0.35s ease-in-out infinite" : "none",
    marginBottom: "2px",
    marginTop: "-4px",
  };

  const homeLabelStyle = {
    fontSize: "13px",
    fontWeight: "900",
    color: "#1e3355",
    marginTop: "2px",
    letterSpacing: "0.05em",
    lineHeight: 1,
    display: "block",
  };

  // R label — bright red on hover
  const rLabelStyle = {
    fontSize: "25px",
    fontWeight: "900",
    color: gearSide === "R" ? "#cc0000" : "#1e3355",
    lineHeight: 1,
    userSelect: "none",
    width: "21px",
    textAlign: "center",
    flexShrink: 0,
    cursor: "pointer",
    transition: "color 0.15s ease",
  };

  // F label — bright green on hover
  const fLabelStyle = {
    fontSize: "25px",
    fontWeight: "900",
    color: gearSide === "F" ? "#00cc00" : "#1e3355",
    lineHeight: 1,
    userSelect: "none",
    width: "21px",
    textAlign: "center",
    flexShrink: 0,
    cursor: "pointer",
    transition: "color 0.15s ease",
  };

  const shifterContainerStyle = {
    position: "relative",
    width: "30px",
    height: "68px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    flexShrink: 0,
  };

  const stickStyle = {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: `translateX(-50%) rotate(${gearSide === "R" ? -22 : gearSide === "F" ? 22 : 0}deg)`,
    transformOrigin: "bottom center",
    width: "24px",
    height: "40px",
    objectFit: "contain",
    transition: "transform 0.2s ease",
    zIndex: 2,
  };

  const bootStyle = {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "40px",
    height: "30px",
    objectFit: "contain",
    zIndex: 1,
  };

  const coupleImgStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    transform: chatHovered ? "scale(1.18)" : "scale(1)",
    transition: "transform 0.2s ease",
  };

  const chatLabelStyle = {
    position: "absolute",
    right: "-90px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#1e3355",
    color: "white",
    fontSize: "11px",
    fontWeight: "700",
    padding: "4px 8px",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    opacity: chatHovered ? 1 : 0,
    transition: "opacity 0.2s ease",
    pointerEvents: "none",
  };

  return (
    <div style={barStyle}>

      {/* Steering Wheel — Home */}
      <div
        style={circleBase}
        onClick={onHome}
        onMouseEnter={() => setWheelHovered(true)}
        onMouseLeave={() => setWheelHovered(false)}
      >
        <img src={homeImage} alt="Home" style={wheelImgStyle} />
        <span style={homeLabelStyle}>Home</span>
      </div>

      {/* Gear Shifter — R / F */}
      <div style={gearCircleStyle}>
        {/* R — left half hover zone */}
        <span
          style={rLabelStyle}
          onMouseEnter={() => setGearSide("R")}
          onMouseLeave={() => setGearSide("none")}
          onClick={onBack}
        >
          R
        </span>

        <div style={shifterContainerStyle}>
          <img src={stickImage} alt="gear stick" style={stickStyle} />
          <img src={bootImage} alt="gear boot" style={bootStyle} />
        </div>

        {/* F — right half hover zone */}
        <span
          style={fLabelStyle}
          onMouseEnter={() => setGearSide("F")}
          onMouseLeave={() => setGearSide("none")}
          onClick={onForward}
        >
          F
        </span>
      </div>

      {/* Couple Photo — Chat */}
      <div
        style={{ ...circleBase, overflow: "visible" }}
        onClick={onChat}
        onMouseEnter={() => setChatHovered(true)}
        onMouseLeave={() => setChatHovered(false)}
      >
        <img src={coupleImage} alt="Chat" style={coupleImgStyle} />
        <span style={chatLabelStyle}>Chat With Us</span>
      </div>

    </div>
  );
};

export default MGFloatingNav;
