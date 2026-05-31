import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const ARTICLES = [
  { title: "The Silver Tsunami", href: "/articles/silver-tsunami", img: "/The_Silver_Tsunami.png" },
  { title: "The Senior Housing Guide", href: "/articles/senior-housing-guide", img: "/The_Senior_Housing_Guide.png" },
  { title: "Senior Housing Options", href: "/articles/senior-housing-options", img: "/Senior_Housing_Options.png" },
  { title: "Senior Housing Costs", href: "/articles/senior-housing-costs", img: "/Senior_Housing_Costs.png" },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    img: "/How_to_Choose_Senior_Housing.png",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    img: "/Independent_Living_Costs.png",
  },
  { title: "Memory Care Costs", href: "/articles/memory-care-costs", img: "/Memory_Care_Costs.png" },
  { title: "CCRC Costs", href: "/articles/ccrc-costs", img: "/CCRC_Costs.png" },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    img: "/Affordable_Senior_Housing.png",
  },
  { title: "Aging in Place With Support", href: "/articles/aging-in-place", img: "/Aging_in_Place_With_Support.png" },
];

// Duplicate articles so we always have enough cards ahead to slide into
const TRACK = [...ARTICLES, ...ARTICLES, ...ARTICLES];
const START = ARTICLES.length; // begin in the middle copy
const CARD_GAP = 24;
const AUTO_MS = 7000;
const SLIDE_MS = 4400;

export default function ArticlesCarousel() {
  const [pos, setPos] = useState(START);
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const slideTo = useCallback(
    (newPos: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setPos(newPos);
      setTimeout(() => setTransitioning(false), SLIDE_MS + 100);
    },
    [transitioning],
  );

  const next = useCallback(() => {
    slideTo(pos + 1);
  }, [pos, slideTo]);

  const prev = () => slideTo(pos - 1);

  // After sliding to near the edges, silently reset to middle copy
  useEffect(() => {
    if (transitioning) return;
    if (pos >= START + ARTICLES.length) {
      setPos(pos - ARTICLES.length);
    } else if (pos < START) {
      setPos(pos + ARTICLES.length);
    }
  }, [transitioning, pos]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused]);

  // Card width: container is 960px, 3 cards with 2 gaps of 24px each
  // (960 - 48) / 3 = 304px per card
  const CARD_W = 304;

  return (
    <section style={{ background: "#f7f4ef", padding: "64px 24px 72px", fontFamily: "Georgia, serif" }}>
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

      {/* Carousel viewport */}
      <div
        style={{ maxWidth: 960, margin: "0 auto", padding: "8px 0 16px", overflow: "hidden", boxSizing: "content-box" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Sliding track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: CARD_GAP,
            transform: `translateX(calc(-${pos} * ${CARD_W + CARD_GAP}px))`,
            transition: transitioning ? `transform ${SLIDE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            willChange: "transform",
          }}
        >
          {TRACK.map((article, i) => (
            <Link
              key={i}
              to={article.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "block",
                textDecoration: "none",
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                flexShrink: 0,
                width: `${CARD_W}px`,
                aspectRatio: "3 / 4",
                boxShadow: hovered === i ? "0 20px 60px rgba(10,22,40,0.22)" : "0 4px 20px rgba(10,22,40,0.10)",
                transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
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
                }}
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,22,40,0.18)",
                  opacity: hovered === i ? 1 : 0,
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
          ))}
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
          {ARTICLES.map((_, i) => {
            const normalizedPos = (((pos - START) % ARTICLES.length) + ARTICLES.length) % ARTICLES.length;
            return (
              <button
                key={i}
                onClick={() => slideTo(START + i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  background: normalizedPos === i ? "#8B6914" : "#d4c9b0",
                  border: "none",
                  borderRadius: 2,
                  width: normalizedPos === i ? 24 : 8,
                  height: 4,
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            );
          })}
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
