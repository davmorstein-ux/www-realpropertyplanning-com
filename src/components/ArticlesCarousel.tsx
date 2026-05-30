import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const ARTICLES = [
  {
    title: "The Silver Tsunami",
    href: "/articles/silver-tsunami",
    img: "/articles/images/The_Silver_Tsunami.png",
    category: "Demographics",
    summary: "The surge of seniors is reshaping housing, care, and the future of our communities.",
  },
  {
    title: "The Senior Housing Guide",
    href: "/articles/senior-housing-guide",
    img: "/articles/images/The_Senior_Housing_Guide.png",
    category: "Senior Housing",
    summary: "Your roadmap to finding the right place, the right care, and peace of mind.",
  },
  {
    title: "Senior Housing Options",
    href: "/articles/senior-housing-options",
    img: "/articles/images/Senior_Housing_Options.png",
    category: "Senior Housing",
    summary: "Your roadmap to informed housing and care decisions.",
  },
  {
    title: "Senior Housing Costs",
    href: "/articles/senior-housing-costs",
    img: "/articles/images/Senior_Housing_Costs.png",
    category: "Cost Guide",
    summary: "Affordability is slipping away — understand the real costs before making a decision.",
  },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    img: "/articles/images/How_to_Choose_Senior_Housing.png",
    category: "Planning",
    summary: "A step-by-step guide to finding the right home, care, and lifestyle.",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    img: "/articles/images/Independent_Living_Costs.png",
    category: "Cost Guide",
    summary: "Understand the expenses, plan wisely, and enjoy the freedom you've earned.",
  },
  {
    title: "Memory Care Costs",
    href: "/articles/memory-care-costs",
    img: "/articles/images/Memory_Care_Costs.png",
    category: "Cost Guide",
    summary: "Understand the costs, plan ahead, and invest in your loved one's future.",
  },
  {
    title: "CCRC Costs",
    href: "/articles/ccrc-costs",
    img: "/articles/images/CCRC_Costs.png",
    category: "Cost Guide",
    summary: "Understand today. Plan wisely. Live well tomorrow.",
  },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    img: "/articles/images/Affordable_Senior_Housing.png",
    category: "Affordability",
    summary: "Smart choices. Stable costs. Better living for tomorrow.",
  },
  {
    title: "Aging in Place With Support",
    href: "/articles/aging-in-place",
    img: "/articles/images/Aging_in_Place_With_Support.png",
    category: "Care Options",
    summary: "Live where you love. Get the support you need. Enjoy peace of mind.",
  },
];

const AUTO_ADVANCE_MS = 5000;
// Triple the articles for seamless infinite loop
const INFINITE = [...ARTICLES, ...ARTICLES, ...ARTICLES];
const OFFSET = ARTICLES.length; // start in the middle copy

export default function ArticlesCarousel() {
  const [current, setCurrent] = useState(OFFSET);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const jumpTo = (index: number, animate: boolean) => {
    setAnimated(animate);
    setCurrent(index);
  };

  const advance = useCallback(() => {
    setCurrent((prev) => {
      const next = prev + 1;
      // If we've scrolled into the last copy, silently jump back to middle copy
      if (next >= OFFSET + ARTICLES.length) {
        setTimeout(() => jumpTo(OFFSET, false), 0);
      }
      return next;
    });
  }, []);

  const prev = () => {
    setCurrent((prev) => {
      const next = prev - 1;
      // If we've scrolled into the first copy, silently jump forward to middle copy
      if (next < OFFSET) {
        setTimeout(() => jumpTo(OFFSET + ARTICLES.length - 1, false), 0);
      }
      return next;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(advance, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, isPaused]);

  return (
    <section
      style={{
        background: "#f7f4ef",
        padding: "64px 0 72px",
        fontFamily: "Georgia, serif",
      }}
    >
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
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#0a1628",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Featured Articles
        </h2>
        <div style={{ width: 48, height: 2, background: "#8B6914", margin: "16px auto 0", borderRadius: 1 }} />
      </div>

      {/* Carousel */}
      <div
        style={{ maxWidth: 960, margin: "0 auto", padding: "8px 24px 16px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              transform: `translateX(calc(-${current} * (calc((100% - 48px) / 3) + 24px)))`,
              transition: animated ? "transform 0.7s cubic-bezier(0.22,1,0.36,1)" : "none",
              willChange: "transform",
            }}
          >
            {INFINITE.map((article, i) => (
              <Link
                key={i}
                to={article.href}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  flexShrink: 0,
                  width: "calc((100% - 48px) / 3)",
                  aspectRatio: "3 / 4",
                  boxShadow: hoveredCard === i ? "0 20px 60px rgba(10,22,40,0.22)" : "0 4px 20px rgba(10,22,40,0.10)",
                  transform: hoveredCard === i ? "translateY(-6px)" : "translateY(0)",
                  transition: "box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
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
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                    transform: hoveredCard === i ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.75) 55%, rgba(10,22,40,0.15) 100%)",
                    opacity: hoveredCard === i ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "28px 20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#E8C97A",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    {article.category}
                  </span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 10px", lineHeight: 1.25 }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", margin: "0 0 16px", lineHeight: 1.55 }}>
                    {article.summary}
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#E8C97A",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Read Article
                    <svg
                      width="12"
                      height="12"
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
            const dotActive = (((current - OFFSET) % ARTICLES.length) + ARTICLES.length) % ARTICLES.length === i;
            return (
              <button
                key={i}
                onClick={() => jumpTo(OFFSET + i, true)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  background: dotActive ? "#8B6914" : "#d4c9b0",
                  border: "none",
                  borderRadius: 2,
                  width: dotActive ? 24 : 8,
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
          onClick={advance}
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
