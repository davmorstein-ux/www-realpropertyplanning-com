import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

const DEFAULT_TOPICS = [
  {
    title: "Getting Started",
    description: "Is an Adult Family Home the right business for you?",
    href: "/afh-club/getting-started",
    img: "/afh-getting-started.webp",
    placeholder: "#2c3a48",
  },
  {
    title: "Licensing & Certification",
    description: "DSHS license application & HCA certification",
    href: "/afh-club/licensing-certification",
    img: "/afh-licensing-certification.webp",
    placeholder: "#2c3e4e",
  },
  {
    title: "Training & Education",
    description: "75-hour training, administrator course & more",
    href: "/afh-club/training-education",
    img: "/afh-training-education.webp",
    placeholder: "#354555",
  },
  {
    title: "Building & Inspection",
    description: "Building codes, WABO, permits & septic",
    href: "/afh-club/building-inspection",
    img: "/afh-building-inspection.webp",
    placeholder: "#2e3d4d",
  },
  {
    title: "Costs & Fees",
    description: "Licensing fees, insurance & Medicaid rates",
    href: "/afh-club/costs-fees",
    img: "/afh-costs-fees.webp",
    placeholder: "#384858",
  },
  {
    title: "Buying or Selling an AFH",
    description: "CHOW process, listings & real estate",
    href: "/afh-club/buying-selling",
    img: "/afh-buying-selling.webp",
    placeholder: "#2a3a4a",
  },
  {
    title: "Regulations & Compliance",
    description: "WACs, RCWs, violations & inspections",
    href: "/afh-club/regulations-compliance",
    img: "/afh-regulations-compliance.webp",
    placeholder: "#334353",
  },
  {
    title: "Find a Professional",
    description: "Management companies, inspectors & advisors",
    href: "/afh-club/find-a-professional",
    img: "/afh-find-professional.webp",
    placeholder: "#3c4c5c",
  },
];

const CARD_GAP = 24;
const AUTO_MS = 7000;
const SLIDE_MS = 4400;
const CARD_W = 304;

interface Category {
  title: string;
  description: string;
  href: string;
  img: string;
  placeholder: string;
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
    <section style={{ background: "#f0f3f6", padding: "64px 24px 72px", fontFamily: "Georgia, serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            display: "block",
            fontSize: "18px",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#5a3200",
            marginBottom: 14,
          }}
        >
          AFH Club
        </span>
        <h2
          style={{ fontSize: "clamp(34px, 4vw, 50px)", fontWeight: 700, color: "#0a1628", margin: 0, lineHeight: 1.15 }}
        >
          Resource Network
        </h2>
        <div style={{ width: 48, height: 3, background: "#b87333", margin: "16px auto 0", borderRadius: 1 }} />
        <p
          style={{
            marginTop: 20,
            fontSize: "clamp(19px, 2vw, 22px)",
            color: "#1e2a38",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.75,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 400,
          }}
        >
          A curated hub of resources for Adult Family Home owners, prospective providers, buyers, and the professionals
          who serve them throughout Washington State.
        </p>
      </div>

      {/* Carousel viewport */}
      <div
        style={{ maxWidth: 960, margin: "0 auto", padding: "8px 0 16px", overflow: "hidden", boxSizing: "content-box" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: "flex",
            gap: CARD_GAP,
            transform: `translateX(calc(-${pos} * ${CARD_W + CARD_GAP}px))`,
            transition: transitioning ? `transform ${SLIDE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
            willChange: "transform",
          }}
        >
          {TRACK.map((item, i) => (
            <Link
              key={i}
              to={item.href}
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
                boxShadow: hovered === i ? "0 32px 80px rgba(10,22,40,0.4)" : "0 4px 20px rgba(10,22,40,0.10)",
                transform: hovered === i ? "translateY(-20px)" : "translateY(0)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
                background: item.placeholder,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                width={CARD_W}
                height={Math.round((CARD_W * 4) / 3)}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                loading="lazy"
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
                  paddingBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "rgba(184,115,51,0.92)",
                    padding: "8px 18px",
                    borderRadius: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Explore
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

      {/* Controls — identical pattern to ArticlesCarousel */}
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
            color: "#5a3200",
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
            color: "#5a3200",
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
