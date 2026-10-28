import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useIsVisible } from "@/hooks/use-is-visible";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import RppArrow, { RppChevron } from "@/components/RppArrow";
const ARTICLES = [
  { title: "The Silver Tsunami", href: "/articles/silver-tsunami", img: "/The_Silver_Tsunami.webp" },
  { title: "The Senior Housing Guide", href: "/articles/senior-housing-guide", img: "/The_Senior_Housing_Guide.webp" },
  { title: "Senior Housing Options", href: "/articles/senior-housing-options", img: "/Senior_Housing_Options.webp" },
  { title: "Senior Housing Costs", href: "/articles/senior-housing-costs", img: "/Senior_Housing_Costs.webp" },
  {
    title: "How to Choose Senior Housing",
    href: "/articles/how-to-choose-senior-housing",
    img: "/How_to_Choose_Senior_Housing.webp",
  },
  {
    title: "Independent Living Costs",
    href: "/articles/independent-living-costs",
    img: "/Independent_Living_Costs.webp",
  },
  { title: "Memory Care Costs", href: "/articles/memory-care-costs", img: "/Memory_Care_Costs.webp" },
  { title: "CCRC Costs", href: "/articles/ccrc-costs", img: "/CCRC_Costs.webp" },
  {
    title: "Affordable Senior Housing",
    href: "/articles/affordable-senior-housing",
    img: "/Affordable_Senior_Housing.webp",
  },
  { title: "Aging in Place With Support", href: "/articles/aging-in-place", img: "/Aging_in_Place_With_Support.webp" },
  { title: "Wills, Trusts, and Other Options", href: "/articles/wills-trusts-other-options", img: "/Wills_Trusts_Other_Options.webp" },
  // Hospice Care is deliberately NOT in this carousel. The loop puts every
  // cover in the lead position at some point, and David does not want older
  // visitors greeted by a hospice cover. It stays in the articles grid (last).
];

// Duplicate articles so we always have enough cards ahead to slide into
const TRACK = [...ARTICLES, ...ARTICLES, ...ARTICLES];
const START = ARTICLES.length; // begin in the middle copy
const CARD_GAP = 24;
const AUTO_MS = 7000;
const CLICK_MS = 650; // a click should feel immediate
const AUTO_MS_SLIDE = 2600; // the timer's own slides glide slowly


function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous articles" : "Next articles"}
      className={`rpp-car-arrow is-${dir}`}
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#ffffff",
        border: "2px solid #1B3A6B",
        color: "#1B3A6B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 14px rgba(10,22,40,0.18)",
        padding: 0,
      }}
    >
      <RppChevron size={30} direction={dir === "prev" ? "left" : "right"} />
    </button>
  );
}

/** showHeading=false drops the "Real Property Planning / Featured Articles" heading, for a page
 *  whose title band already says it (Guides & Featured Articles, Oct 28, 2026, David). */
export default function ArticlesCarousel({ showHeading = true }: { showHeading?: boolean } = {}) {
  const [pos, setPos] = useState(START);
  const [transitioning, setTransitioning] = useState(false);
  const [slideMs, setSlideMs] = useState(AUTO_MS_SLIDE);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIsVisible(sectionRef, "0px");
  const prefersReducedMotion = useReducedMotion();

  const slideTo = useCallback(
    (newPos: number, ms: number = CLICK_MS) => {
      if (transitioning) return;
      setSlideMs(ms);
      setTransitioning(true);
      setPos(newPos);
      setTimeout(() => setTransitioning(false), ms + 60);
    },
    [transitioning],
  );

  const next = useCallback(() => slideTo(pos + 1), [pos, slideTo]);
  const prev = () => slideTo(pos - 1);
  const autoNext = useCallback(() => slideTo(pos + 1, AUTO_MS_SLIDE), [pos, slideTo]);

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
    if (paused || !isVisible || prefersReducedMotion) return;
    timerRef.current = setInterval(autoNext, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoNext, paused, isVisible, prefersReducedMotion]);

  // Card width. Was 304px (three across); reduced Oct 28, 2026 (David: only the cover titles
  // are readable, so the covers can be smaller and free up space). Four across in 960px.
  const CARD_W = 220;

  return (
    <section ref={sectionRef} className={showHeading ? "rpp-car-section" : "rpp-car-section is-bare"} aria-label={showHeading ? undefined : "Featured articles"} style={{ background: "#f7f4ef", padding: showHeading ? "64px 24px 72px" : "40px 24px 44px", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", minHeight: showHeading ? 560 : 0 }}>
      {/* Header */}
      {showHeading && <div className="rpp-car-head" style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            display: "block",
            fontSize: 11,
            fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
            fontWeight: 400,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1B3A6B",
            marginBottom: 12,
          }}
        >
          Real Property Planning
        </span>
        <h2
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#142c52", margin: 0, lineHeight: 1.15 }}
        >
          Featured Articles
        </h2>
        <div style={{ width: 48, height: 2, background: "#1B3A6B", margin: "16px auto 0", borderRadius: 1 }} />
      </div>}

      {/* Carousel viewport with arrows on either side */}
      <div className="rpp-car-view" style={{ position: "relative", maxWidth: 960, margin: "0 auto" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .rpp-car-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; }
          .rpp-car-arrow.is-prev { left: -72px; }
          .rpp-car-arrow.is-next { right: -72px; }
          /* Card size and spacing as variables so phones can centre one cover with a slice of
             its neighbours either side (Oct 28, 2026, David: carousel not centred on mobile).
             Laptops keep three covers from the left edge. */
          .rpp-car-view { --cw: ${CARD_W}px; --cg: ${CARD_GAP}px; --lead: 0px; }
          @media (max-width: 700px) {
            /* Less air around the carousel on phones so the guide list starts sooner. */
            section.rpp-car-section.rpp-car-section { padding: 30px 16px 26px !important; min-height: 0 !important; }
            section.rpp-car-section.is-bare.is-bare { padding-top: 22px !important; }
            .rpp-car-section .rpp-car-head.rpp-car-head { margin-bottom: 22px !important; }
            .rpp-car-view { --cw: min(${CARD_W}px, 52vw); --cg: 14px; --lead: calc(50% - var(--cw) / 2); }
          }
          @media (max-width: 1120px) {
            .rpp-car-arrow.is-prev { left: 8px; }
            .rpp-car-arrow.is-next { right: 8px; }
          }
        ` }} />
        <ArrowButton dir="prev" onClick={prev} />
        <ArrowButton dir="next" onClick={next} />
      <div
        style={{ padding: "8px 0 16px", overflow: "hidden", boxSizing: "content-box" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Sliding track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "var(--cg)",
            marginLeft: "var(--lead)",
            transform: `translateX(calc(-${pos} * (var(--cw) + var(--cg))))`,
            transition: transitioning ? `transform ${slideMs}ms ${slideMs > 1000 ? "cubic-bezier(0.45, 0.05, 0.25, 1)" : "cubic-bezier(0.16, 1, 0.3, 1)"}` : "none",
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
                width: "var(--cw)",
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
                width={CARD_W}
                height={Math.round((CARD_W * 4) / 3)}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }} sizes="(max-width: 700px) 52vw, 220px"/>

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
                    fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
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
                  <RppArrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>

      {/* Position dots */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 28 }}>
        {ARTICLES.map((_, i) => {
          const normalizedPos = (((pos - START) % ARTICLES.length) + ARTICLES.length) % ARTICLES.length;
          return (
            <button
              key={i}
              onClick={() => slideTo(START + i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                background: normalizedPos === i ? "#1B3A6B" : "#c9cfd9",
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
    </section>
  );
}
