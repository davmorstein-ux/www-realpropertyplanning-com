import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

interface RoadmapTopic {
  title: string;
  href: string;
}

interface RoadmapDropdownProps {
  topics: RoadmapTopic[];
  itemLabel?: string;
  accentColor?: string;
  /** Current page's path (e.g. canonicalPath). Used to determine the active
   *  topic for blue highlighting, and (in "current" mode) which single
   *  topic to display. */
  currentPath?: string;
  /** "dropdown" (default) shows the full collapsible list of every topic.
   *  "current" shows only the active topic as a static, non-expandable
   *  indicator — no list, no toggle, nothing else to read. */
  mode?: "dropdown" | "current";
}

const ACTIVE_COLOR = "#1f6fb2";

/**
 * "dropdown" mode: shows an upfront count of how many topics/pages a guide
 * covers, with an expandable list of every topic as a direct jump-link.
 * "current" mode: shows just the active topic's number (in blue) and title,
 * as a lightweight "you are here" indicator with no list to scan through.
 */
const RoadmapDropdown = ({
  topics,
  itemLabel = "topics",
  accentColor = "#721d24",
  currentPath,
  mode = "dropdown",
}: RoadmapDropdownProps) => {
  const [open, setOpen] = useState(false);

  if (mode === "current") {
    const activeIndex = topics.findIndex((t) => t.href === currentPath);
    if (activeIndex === -1) return null;
    const activeTopic = topics[activeIndex];
    return (
      <div
        style={{
          maxWidth: 680,
          margin: "0 auto 40px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: "#ffffff",
          border: `2px solid ${accentColor}`,
          borderRadius: 12,
          padding: "18px 22px",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: ACTIVE_COLOR,
            color: "#ffffff",
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {activeIndex + 1}
        </span>
        <span
          style={{ fontSize: 17, fontWeight: 700, color: "#280a0c", lineHeight: 1.4, fontFamily: "Georgia, serif" }}
        >
          {activeTopic.title}
        </span>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 680, margin: "0 auto 40px" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          background: "#ffffff",
          border: `2px solid ${accentColor}`,
          borderRadius: 12,
          padding: "18px 22px",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 700, color: "#280a0c", lineHeight: 1.4 }}>
          This guide covers {topics.length} {itemLabel} — tap to jump to any of them
        </span>
        <span
          aria-hidden="true"
          style={{
            fontSize: 16,
            color: accentColor,
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.25s ease",
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 8,
            background: "#ffffff",
            border: "1px solid #dfc9cb",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {topics.map((topic, i) => {
            const isAnchor = topic.href.startsWith("#");
            const isActive = currentPath === topic.href;
            const itemStyle: CSSProperties = {
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 22px",
              textDecoration: "none",
              borderTop: i > 0 ? "1px solid #f0e8e5" : "none",
              background: isActive ? "#eaf2fa" : "transparent",
            };
            const numberBadge = (
              <span
                aria-hidden="true"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: isActive ? ACTIVE_COLOR : accentColor,
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
            );
            const label = (
              <span style={{ fontSize: 16, fontWeight: 600, color: "#280a0c", lineHeight: 1.4 }}>{topic.title}</span>
            );
            return isAnchor ? (
              <a key={topic.href} href={topic.href} style={itemStyle} onClick={() => setOpen(false)}>
                {numberBadge}
                {label}
              </a>
            ) : (
              <Link key={topic.href} to={topic.href} style={itemStyle}>
                {numberBadge}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoadmapDropdown;
