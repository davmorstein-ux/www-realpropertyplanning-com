import { Link } from "react-router-dom";
import { useState } from "react";

const StickyContactSidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      style={{ perspective: "800px" }}
    >
      <Link
        to="/join-network"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: hovered ? 260 : 52,
          height: hovered ? 64 : 200,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "linear-gradient(145deg, #1e3a5f 0%, #15304f 40%, #0f2340 80%, #0b1a30 100%)",
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          borderRight: "none",
          textDecoration: "none",
          overflow: "hidden",
          position: "relative",
          boxShadow: `
            inset 1px 1px 2px rgba(232, 200, 74, 0.25),
            inset -1px -1px 3px rgba(0, 0, 0, 0.5),
            4px 4px 16px rgba(0, 0, 0, 0.5),
            2px 0 8px rgba(0, 0, 0, 0.3),
            0 -2px 0 rgba(232, 200, 74, 0.3),
            -1px -1px 0 rgba(232, 200, 74, 0.15),
            0 2px 0 rgba(0, 0, 0, 0.6),
            1px 1px 0 rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        {/* Gold accent strip on right edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 3,
            height: "100%",
            background: "linear-gradient(180deg, #e8c84a 0%, #c9a84c 40%, #a08630 70%, #e8c84a 100%)",
            boxShadow: "inset 0 0 4px rgba(232, 200, 74, 0.5)",
          }}
        />
        {/* Gold accent strip on top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 2,
            background: "linear-gradient(90deg, rgba(232, 200, 74, 0.1) 0%, #e8c84a 30%, #c9a84c 70%, rgba(232, 200, 74, 0.1) 100%)",
          }}
        />
        {/* Subtle shimmer overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(232, 200, 74, 0.06) 0%, transparent 40%, rgba(232, 200, 74, 0.04) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Collapsed: vertical text */}
        <span
          style={{
            position: "absolute",
            color: "#e8c84a",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.25s ease",
            textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(232, 200, 74, 0.15)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          JOIN THE NETWORK
        </span>

        {/* Expanded: horizontal text */}
        <span
          style={{
            color: "#e8c84a",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease 0.1s",
            textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(232, 200, 74, 0.15)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingLeft: 16,
            paddingRight: 12,
          }}
        >
          Join Our Professional Network
          <span style={{ fontSize: 16 }}>→</span>
        </span>
      </Link>
    </div>
  );
};

export default StickyContactSidebar;
