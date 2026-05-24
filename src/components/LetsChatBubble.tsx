import { useEffect, useState } from "react";
import bubble from "@/assets/thought_bubble_transparent.png";

const LetsChatBubble = () => {
  const [visible, setVisible] = useState(false);
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let growTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      nextTimer = setTimeout(show, 30000);
    };

    const hide = () => {
      clearTimeout(hideTimer);
      setScaled(false);
      setVisible(false);
      scheduleNext();
    };

    function show() {
      setVisible(true);
      setScaled(false);
      growTimer = setTimeout(() => setScaled(true), 20);
      hideTimer = setTimeout(() => hide(), 1500);
    }

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
        bottom: 90,
        right: 20,
        width: 92,
        height: 66,
        zIndex: 10001,
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        transform: scaled ? "scale(1)" : "scale(0)",
        transformOrigin: "bottom right",
        transition: "transform 1.1s ease-out",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={bubble}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 8,
            left: 8,
            width: "calc(100% + 16px)",
            height: "calc(100% + 16px)",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          padding: 0,
          margin: 0,
          color: "#1B2B4B",
          fontWeight: 800,
          fontSize: 13,
          lineHeight: 1.1,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span>Let's</span>
        <span>Chat!</span>
      </span>
    </button>
  );
};

export default LetsChatBubble;
