import { useNavigate } from "react-router-dom";
import steeringWheelImg from "@/assets/steering-wheel-transparent.png";
import gearShifterImg from "@/assets/gear_shifter_top.png";
import coupleChatImg from "@/assets/chat-couple.png";

export default function MGFloatingNav({
  homeImage = steeringWheelImg,
  gearImage = gearShifterImg,
  coupleImage = coupleChatImg,
  onBack = () => window.history.back(),
  onForward = () => window.history.forward(),
  onChat = () => {},
}) {
  const navigate = useNavigate();

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

  const gearImgStyle = {
    width: "34px",
    height: "50px",
    objectFit: "contain",
    display: "block",
    flexShrink: 0,
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
          onClick={onBack}
          title="Go back"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onBack()}
          aria-label="Go back"
        >
          R
        </span>
        <img src={gearImage} alt="Gear shifter" style={gearImgStyle} />
        <span
          style={gearLetterStyle}
          onClick={onForward}
          title="Go forward"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onForward()}
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
