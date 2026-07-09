import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const DEFAULT_TOPICS = [
  {
    title: "Getting Started",
    href: "/afh-club/getting-started",
    img: "/afh-getting-started.webp",
    placeholder: "#2c3a48",
  },
  {
    title: "Licensing & Certification",
    href: "/afh-club/licensing-certification",
    img: "/afh-licensing-certification.webp",
    placeholder: "#2c3e4e",
  },
  {
    title: "Training & Education",
    href: "/afh-club/training-education",
    img: "/afh-training-education.webp",
    placeholder: "#354555",
  },
  {
    title: "Building & Inspection",
    href: "/afh-club/building-inspection",
    img: "/afh-building-inspection.webp",
    placeholder: "#2e3d4d",
  },
  { title: "Costs & Fees", href: "/afh-club/costs-fees", img: "/afh-costs-fees.webp", placeholder: "#384858" },
  {
    title: "Buying or Selling an AFH",
    href: "/afh-club/buying-selling",
    img: "/afh-buying-selling.webp",
    placeholder: "#2a3a4a",
  },
  {
    title: "Regulations & Compliance",
    href: "/afh-club/regulations-compliance",
    img: "/afh-regulations-compliance.webp",
    placeholder: "#334353",
  },
  {
    title: "Find a Professional",
    href: "/afh-club/find-a-professional",
    img: "/afh-find-professional.webp",
    placeholder: "#3c4c5c",
  },
  {
    title: "AFH Calculators",
    href: "/afh-club/calculators",
    img: "/__l5e/assets-v1/f6d8b31f-90b0-4639-a379-feeff961e81c/afh-cost-calculator-v2.webp",
    placeholder: "#2c3e4e",
  },
];

const CARD_GAP = 24;
const AUTO_MS = 7000;
const SLIDE_MS = 4400;
const CARD_W = 304;
const CARD_H = Math.round((CARD_W * 4) / 3);

interface Category {
  title: string;
  href: string;
  img: string;
  placeholder: string;
  description?: string;
}

interface AFHCarouselProps {
  categories?: Category[];
}

export default function AFHCarousel({ categories }: AFHCarouselProps) {
  const ITEMS = categories || DEFAULT_TOPICS;
  const TRACK = [...ITEMS, ...ITEMS, ...ITEMS];
  const START = ITEMS.length;

  const [pos, setPos] = useState(START);
  const [transitioning, setTransitioning] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideTo = useCallback((newPos: number) => {
    setTransitioning(true);
    setPos(newPos);
    setTimeout(() => setTransitioning(false), SLIDE_MS + 50);
  }, []);

  const next = useCallback(() => {
    slideTo(pos + 1);
  }, [pos, slideTo]);
  const prev = () => slideTo(pos - 1);

  useEffect(() => {
    if (transitioning) return;
    if (pos >= START + ITEMS.length) setPos(pos - ITEMS.length);
    else if (pos < START) setPos(pos + ITEMS.length);
  }, [transitioning, pos]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused]);

  return (
    <section style={{ background: "#f0f3f6", padding: "48px 24px 64px" }}>
      {/* Carousel viewport */}
      <div
        className="afh-carousel-container"
        style={{ maxWidth: 960, margin: "0 auto", padding: "8px 0 40px", overflow: "hidden" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(null);
        }}
      >
        <div
          className="afh-carousel-track"
          style={{
            display: "flex",
            gap: CARD_GAP,
            // Width never changes on hover — always CARD_W + CARD_GAP per step
            transform: `translateX(calc(-${pos} * ${CARD_W + CARD_GAP}px))`,
            transition: transitioning ? `transform ${SLIDE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            willChange: "transform",
            alignItems: "flex-end",
          }}
        >
          {TRACK.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="afh-carousel-card afh-carousel-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "block",
                textDecoration: "none",
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                flexShrink: 0,
                // WIDTH and HEIGHT are always fixed — hover only affects shadow and lift
                width: `${CARD_W}px`,
                minWidth: `${CARD_W}px`,
                maxWidth: `${CARD_W}px`,
                height: `${CARD_H}px`,
                boxShadow: hovered === i ? "0 20px 60px rgba(10,22,40,0.22)" : "0 4px 20px rgba(10,22,40,0.10)",
                transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
                background: item.placeholder,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                width={CARD_W}
                height={CARD_H}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
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
                  paddingBottom: 28,
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "rgba(184,115,51,0.95)",
                    padding: "10px 22px",
                    borderRadius: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Explore
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

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 12 }}>
        <button
          onClick={prev}
          aria-label="Previous"
          className="rpp-carousel-arrow"
          style={{
            background: "#fff",
            border: "1.5px solid #c8b98a",
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#5a3200",
            opacity: 1,
            transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
            boxShadow: "0 2px 8px rgba(10,22,40,0.08)",
            userSelect: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#b87333";
            el.style.color = "#fff";
            el.style.borderColor = "#b87333";
            el.style.transform = "scale(1.1)";
            el.style.boxShadow = "0 6px 18px rgba(184,115,51,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "#fff";
            el.style.color = "#5a3200";
            el.style.borderColor = "#c8b98a";
            el.style.transform = "scale(1)";
            el.style.boxShadow = "0 2px 8px rgba(10,22,40,0.08)";
          }}
        >
          <svg
            width="18"
            height="18"
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
          {ITEMS.map((_, i) => {
            const normalizedPos = (((pos - START) % ITEMS.length) + ITEMS.length) % ITEMS.length;
            return (
              <button
                key={i}
                onClick={() => slideTo(START + i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  background: normalizedPos === i ? "#b87333" : "#d4c9b0",
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
          className="rpp-carousel-arrow"
          style={{
            background: "#fff",
            border: "1.5px solid #c8b98a",
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#5a3200",
            opacity: 1,
            transition: "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
            boxShadow: "0 2px 8px rgba(10,22,40,0.08)",
            userSelect: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "#b87333";
            el.style.color = "#fff";
            el.style.borderColor = "#b87333";
            el.style.transform = "scale(1.1)";
            el.style.boxShadow = "0 6px 18px rgba(184,115,51,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "#fff";
            el.style.color = "#5a3200";
            el.style.borderColor = "#c8b98a";
            el.style.transform = "scale(1)";
            el.style.boxShadow = "0 2px 8px rgba(10,22,40,0.08)";
          }}
        >
          <svg
            width="18"
            height="18"
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
