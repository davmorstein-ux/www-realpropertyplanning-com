import { useEffect, useState } from "react";
import bubble from "@/assets/thought_bubble_transparent.png";

const LetsChatBubble = () => {
  const [visible, setVisible] = useState(false);
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let growTimer: ReturnType<typeof setTimeout>;

    const show = () => {
      setVisible(true);
      setScaled(false);
      growTimer = setTimeout(() => setScaled(true), 20);
      hideTimer = setTimeout(() => hide(), 4000);
    };

    const hide = () => {
      clearTimeout(hideTimer);
      setScaled(false);
      setVisible(false);
      scheduleNext();
    };

    let nextTimer: ReturnType<typeof setTimeout>;
    const scheduleNext = () => {
      nextTimer = setTimeout(show, 30000);
    };

    const dismiss = () => hide();
    window.addEventListener("rpp-open-chat", dismiss);

    const initial = setTimeout(show, 2500);

    return () => {
      clearTimeout(initial);
      clearTimeout(hideTimer);
      clearTimeout(growTimer);
      clearTimeout(nextTimer);
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
        bottom: 160,
        right: 80,
        width: 160,
        height: 115,
        zIndex: 10001,
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        transform: scaled ? "scale(1)" : "scale(0)",
        transformOrigin: "bottom right",
        transition: "transform 0.5s ease-out",
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
          top: "34%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffff",
          fontWeight: 800,
          fontSize: 15,
          lineHeight: 1.1,
          textAlign: "center",
          whiteSpace: "nowrap",
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Let's
        <br />
        Chat!
      </span>
    </button>
  );
};

export default LetsChatBubble;
