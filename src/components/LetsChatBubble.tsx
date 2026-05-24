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
        bottom: 95,
        right: 90,
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
      <img
        src={bubble}
        alt=""
        aria-hidden="true"
        style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
      />
      <span
        style={{
          position: "absolute",
          top: "36%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          color: "#1B2B4B",
          fontWeight: 800,
          fontSize: 13,
          lineHeight: 1.1,
          textAlign: "center",
          whiteSpace: "nowrap",
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
