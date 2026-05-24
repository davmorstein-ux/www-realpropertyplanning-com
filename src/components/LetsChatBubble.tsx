import { useEffect, useState } from "react";
import bubble from "@/assets/thought_bubble_transparent.png";

const LetsChatBubble = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500);
    const dismiss = () => setVisible(false);
    window.addEventListener("rpp-open-chat", dismiss);
    return () => {
      clearTimeout(t);
      window.removeEventListener("rpp-open-chat", dismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => setVisible(false)}
      aria-label="Dismiss Let's Chat prompt"
      style={{
        position: "fixed",
        bottom: 115,
        right: 80,
        width: 160,
        height: 115,
        zIndex: 10001,
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={bubble}
        alt=""
        aria-hidden="true"
        style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
      />
      <span
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffff",
          fontWeight: 800,
          fontSize: 20,
          whiteSpace: "nowrap",
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Let's Chat!
      </span>
    </button>
  );
};

export default LetsChatBubble;
