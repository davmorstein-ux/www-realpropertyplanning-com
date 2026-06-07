import { useState } from "react";
import { Link } from "react-router-dom";

const TOPICS = [
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
const CARD_W = 304;
const PX_PER_SEC = 60;

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
  const ITEMS = categories || TOPICS;
  const TRACK = [...ITEMS, ...ITEMS];
  const [hovered, setHovered] = useState<number | null>(null);

  // Duration so a full loop = total width of one ITEMS set
  const loopWidth = ITEMS.length * (CARD_W + CARD_GAP);
  const duration = `${loopWidth / PX_PER_SEC}s`;

  return (
    <section
      style={{ background: "#f0f3f6", padding: "64px 24px 72px", fontFamily: "Georgia, serif" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            display: "block",
            fontSize: 16,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#5a3200",
            marginBottom: 12,
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
            fontSize: 20,
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

      {/* Marquee viewport */}
      <div
        className="afh-marquee-viewport"
        style={{ overflow: "hidden", padding: "8px 0 16px" }}
      >
        <div
          className="afh-marquee-track"
          style={
            {
              display: "flex",
              gap: CARD_GAP,
              width: "max-content",
              willChange: "transform",
              "--afh-marquee-duration": duration,
            } as React.CSSProperties
          }
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
                boxShadow: hovered === i ? "0 20px 60px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.15)",
                transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
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
                  background: "rgba(10,18,26,0.3)",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "rgba(184,115,51,0.92)",
                    padding: "10px 20px",
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
    </section>
  );
}
