import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const ARTICLES = [
  {
    title: "The Silver Tsunami",
    href: "/articles/silver-tsunami",
    img: "/The_Silver_Tsunami.png",
    category: "Demographics",
    summary: "The surge of seniors is reshaping housing, care, and the future of our communities.",
  },
  {
    title: "The Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    img: "/The_Senior_Housing_Guide.png",
    category: "Senior Housing",
    summary: "Your roadmap to finding the right place, the right care, and peace of mind.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    img: "/Senior_Housing_Options.png",
    category: "Senior Housing",
    summary: "Your roadmap to informed housing and care decisions.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    img: "/Senior_Housing_Costs.png",
    category: "Cost Guide",
    summary: "Understand the real costs before making a decision.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    img: "/How_to_Choose_Senior_Housing.png",
    category: "Planning",
    summary: "A step-by-step guide to finding the right home, care, and lifestyle.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    img: "/Independent_Living_Costs.png",
    category: "Cost Guide",
    summary: "Understand the expenses, plan wisely, and enjoy the freedom you've earned.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    img: "/Memory_Care_Costs.png",
    category: "Cost Guide",
    summary: "Understand the costs, plan ahead, and invest in your loved one's future.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    img: "/CCRC_Costs.png",
    category: "Cost Guide",
    summary: "Understand today. Plan wisely. Live well tomorrow.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    img: "/Affordable_Senior_Housing.png",
    category: "Affordability",
    summary: "Smart choices. Stable costs. Better living for tomorrow.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    img: "/Aging_in_Place_With_Support.png",
    category: "Care Options",
    summary: "Live where you love. Get the support you need. Enjoy peace of mind.",
  },
];

const AUTO_MS = 7000;
const TRANS_MS = 2200;

export default function ArticlesCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % ARTICLES.length), []);
  const prev = () => setIndex((i) => (i - 1 + ARTICLES.length) % ARTICLES.length);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, AUTO_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next, paused]);

  // Build visible indices: always show 3 cards centered on index
  const indices = [index % ARTICLES.length, (index + 1) % ARTICLES.length, (index + 2) % ARTICLES.length];

  return (
    <section style={{ background: "#f7f4ef", padding: "64px 0 72px", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            display: "block",
            fontSize: 11,
            fontFamily: "'Raleway', 'Gill Sans', sans-serif",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B6914",
            marginBottom: 12,
          }}
        >
          Real Property Planning
        </span>
        <h2
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#0a1628", margin: 0, lineHeight: 1.15 }}
        >
          Featured Articles
        </h2>
        <div style={{ width: 48, height: 2, background: "#8B6914", margin: "16px auto 0", borderRadius: 1 }} />
      </div>

      {/* Cards — no sliding track, just fade/swap 3 cards */}
      <div
        style={{ maxWidth: 960, margin: "0 auto", padding: "8px 24px 16px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{ display: "flex", gap: 24 }}>
          {indices.map((artIndex, slot) => {
            const article = ARTICLES[artIndex];
            return (
              <Link
                key={`${slot}-${artIndex}`}
                to={article.href}
                onMouseEnter={() => setHovered(slot)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  flex: 1,
                  aspectRatio: "3 / 4",
                  boxShadow: hovered === slot ? "0 20px 60px rgba(10,22,40,0.22)" : "0 4px 20px rgba(10,22,40,0.10)",
                  transform: hovered === slot ? "translateY(-6px)" : "translateY(0)",
                  transition: `box-shadow 0.4s ease, transform 0.4s ease`,
                  background: "#ddd",
                }}
              >
                <img
                  src={article.img}
                  alt={article.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    transition: `transform ${TRANS_MS}ms cubic-bezier(0.16,1,0.3,1)`,
                    transform: hovered === slot ? "scale(1.04)" : "scale(1)",
                  }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,22,40,0.18)",
                    opacity: hovered === slot ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "rgba(139,105,20,0.92)",
                      padding: "8px 18px",
                      borderRadius: 2,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Read Article
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 36 }}>
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            background: "none",
            border: "1px solid #c8b98a",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#8B6914",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {ARTICLES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                background: index === i ? "#8B6914" : "#d4c9b0",
                border: "none",
                borderRadius: 2,
                width: index === i ? 24 : 8,
                height: 4,
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          style={{
            background: "none",
            border: "1px solid #c8b98a",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#8B6914",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
