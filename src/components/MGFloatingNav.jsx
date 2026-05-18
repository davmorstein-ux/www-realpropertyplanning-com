import { useState } from "react";
import { useNavigate } from "react-router-dom";
import steeringWheelImg from "@/assets/steering-wheel-transparent.png";
import gearTopImg from "@/assets/gear_shifter_top.png";
import gearBaseImg from "@/assets/gear_shifter_base.png";
import coupleChatImg from "@/assets/chat-couple.png";

export default function MGFloatingNav({
  homeImage = steeringWheelImg,
  gearTopImage = gearTopImg,
  gearBaseImage = gearBaseImg,
  coupleImage = coupleChatImg,
  onBack,
  onForward,
  onChat = () => {},
}) {
  const navigate = useNavigate();
  const [tilt, setTilt] = useState(0); // -1 left, 0 center, +1 right

  const handleBack = () => {
    setTilt(-1);
    setTimeout(() => setTilt(0), 320);
    if (onBack) onBack();
    else window.history.back();
  };
  const handleForward = () => {
    setTilt(1);
    setTimeout(() => setTilt(0), 320);
    if (onForward) onForward();
    else window.history.forward();
  };

  const barStyle = {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 99999,
    backgroundColor: "#1e3355",
    opacity: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "10px 20px",
    borderRadius: "999px",
    boxShadow: "0 6px 28px rgba(0,0,0,0.6)",
    isolation: "isolate",
    overflow: "visible",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    mixBlendMode: "normal",
  };

  const homeBtnStyle = {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    backgroundColor: "#f0ebe0",
    opacity: 1,
    border: "2.5px solid #7a1a1a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    padding: "4px",
    boxSizing: "border-box",
    overflow: "visible",
  };

  const homeLabelStyle = {
    fontSize: "11px",
    fontWeight: "800",
    color: "#1e3355",
    marginTop: "2px",
    letterSpacing: "0.05em",
    lineHeight: 1,
    display: "block",
    visibility: "visible",
    opacity: 1,
  };

  const gearBtnStyle = {
    width: "100px",
    height: "76px",
    borderRadius: "38px",
    backgroundColor: "#f0ebe0",
    opacity: 1,
    border: "2.5px solid #7a1a1a",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    flexShrink: 0,
    padding: "0 8px",
    boxSizing: "border-box",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
  };

  const gearLetterStyle = {
    fontSize: "16px",
    fontWeight: "900",
    color: "#1e3355",
    lineHeight: 1,
    cursor: "pointer",
    userSelect: "none",
    display: "block",
    visibility: "visible",
    opacity: 1,
    flexShrink: 0,
  };

  // Wrapper holding the two stacked layers of the shifter
  const gearStackStyle = {
    position: "relative",
    width: "32px",
    height: "64px",
    flexShrink: 0,
  };

  // Boot + base plate — stationary
  const gearBaseStyle = {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    width: "32px",
    height: "24px",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
  };

  // Stick + knob — tilts on click, pivots from bottom where it meets the boot
  const tiltDeg = tilt * 22;
  const gearTopStyle = {
    position: "absolute",
    left: "50%",
    bottom: "18px",
    width: "26px",
    height: "46px",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
    transformOrigin: "50% 100%",
    transform: `translateX(-50%) rotate(${tiltDeg}deg)`,
    transition: "transform 0.25s ease",
  };

  const chatBtnStyle = {
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    backgroundColor: "#1e3355",
    opacity: 1,
    border: "3px solid #7a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    padding: 0,
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const chatImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
  };

  const homeImgStyle = {
    width: "44px",
    height: "44px",
    objectFit: "contain",
    display: "block",
  };

  return (
    <nav style={barStyle} aria-label="Quick navigation">

      {/* Button 1: Steering Wheel — Home */}
      <button
        style={homeBtnStyle}
        onClick={() => navigate("/")}
        aria-label="Go to Home"
        title="Home"
      >
        <img src={homeImage} alt="Steering wheel" style={homeImgStyle} />
        <span style={homeLabelStyle}>Home</span>
      </button>

      {/* Button 2: Gear Shifter — R (back) and F (forward) */}
      <div style={gearBtnStyle} aria-label="Page navigation">
        <span
          style={gearLetterStyle}
          onClick={handleBack}
          title="Go back"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleBack()}
          aria-label="Go back"
        >
          R
        </span>
        <div style={gearStackStyle}>
          {/* Boot + base plate — stationary */}
          <img src={gearBaseImage} alt="" aria-hidden="true" style={gearBaseStyle} />
          {/* Stick + knob — tilts */}
          <img src={gearTopImage} alt="Gear shifter" style={gearTopStyle} />
        </div>
        <span
          style={gearLetterStyle}
          onClick={handleForward}
          title="Go forward"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleForward()}
          aria-label="Go forward"
        >
          F
        </span>
      </div>

      {/* Button 3: Couple Photo — Chat */}
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
