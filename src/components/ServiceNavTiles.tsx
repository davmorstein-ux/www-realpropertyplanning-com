import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

/* ── shared shadow strings ── */
const arrowShadow = "0 4px 14px -3px hsl(220 30% 20% / 0.12), 0 2px 4px -1px hsl(220 30% 20% / 0.06)";
const arrowShadowHover = "0 6px 18px -3px hsl(220 30% 20% / 0.15), 0 3px 6px -1px hsl(220 30% 20% / 0.08)";
const arrowShadowPress = "0 1px 4px -1px hsl(220 30% 20% / 0.18)";

const SCROLL_SETTLE_MS = 140;

const getSlidesPerView = (width: number) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const getGap = (width: number) => {
  if (width >= 1024) return 24;
  if (width >= 640) return 20;
  return 16;
};

const ServiceNavTiles = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const settleTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const gap = useMemo(() => getGap(viewportWidth), [viewportWidth]);
  const slidesPerView = useMemo(() => getSlidesPerView(viewportWidth), [viewportWidth]);
  const slideWidth = useMemo(() => {
    if (!viewportWidth) return 0;
    return (viewportWidth - gap * (slidesPerView - 1)) / slidesPerView;
  }, [gap, slidesPerView, viewportWidth]);
  const edgePadding = useMemo(() => {
    if (!viewportWidth || !slideWidth) return 0;
    return (viewportWidth - slideWidth) / 2;
  }, [slideWidth, viewportWidth]);

  const getTargetLeft = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const slide = slideRefs.current[index];

    if (!viewport || !slide) return null;

    return slide.offsetLeft + slide.offsetWidth / 2 - viewport.clientWidth / 2;
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current;
      const targetLeft = getTargetLeft(index);

      if (!viewport || targetLeft === null) return;
      if (Math.abs(viewport.scrollLeft - targetLeft) < 0.5) return;

      viewport.scrollTo({ left: targetLeft, behavior });
    },
    [getTargetLeft],
  );

  const getNearestIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }, []);

  const syncSelectedIndex = useCallback(() => {
    const nearestIndex = getNearestIndex();
    setSelectedIndex((currentIndex) => (currentIndex === nearestIndex ? currentIndex : nearestIndex));
    return nearestIndex;
  }, [getNearestIndex]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      syncSelectedIndex();
    });

    if (settleTimerRef.current) {
      window.clearTimeout(settleTimerRef.current);
    }

    settleTimerRef.current = window.setTimeout(() => {
      const nearestIndex = syncSelectedIndex();
      scrollToIndex(nearestIndex, "smooth");
    }, SCROLL_SETTLE_MS);
  }, [scrollToIndex, syncSelectedIndex]);

  const scrollPrev = useCallback(() => {
    const nextIndex = Math.max(selectedIndex - 1, 0);
    setSelectedIndex(nextIndex);
    scrollToIndex(nextIndex);
  }, [scrollToIndex, selectedIndex]);

  const scrollNext = useCallback(() => {
    const nextIndex = Math.min(selectedIndex + 1, serviceTiles.length - 1);
    setSelectedIndex(nextIndex);
    scrollToIndex(nextIndex);
  }, [scrollToIndex, selectedIndex]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      setViewportWidth(viewport.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!viewportWidth || !slideWidth) return;
    scrollToIndex(selectedIndex, "auto");
  }, [scrollToIndex, selectedIndex, slideWidth, viewportWidth]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current) {
        window.clearTimeout(settleTimerRef.current);
      }
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Heading + search */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
            Type a question, tap a suggestion, or browse the topics below.
          </p>
          <SmartSearchBar />
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            disabled={selectedIndex === 0}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card disabled:pointer-events-none disabled:opacity-40"
            style={{ boxShadow: arrowShadow, transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; e.currentTarget.style.boxShadow = arrowShadow; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(0.93)"; e.currentTarget.style.boxShadow = arrowShadowPress; e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <div
            ref={viewportRef}
            onScroll={handleScroll}
            className="mx-14 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex items-stretch" style={{ columnGap: `${gap}px` }}>
              <div aria-hidden="true" style={{ width: `${edgePadding}px`, flex: `0 0 ${edgePadding}px` }} />
              {serviceTiles.map((tile, index) => (
                <div
                  key={tile.href + tile.title}
                  ref={(node) => {
                    slideRefs.current[index] = node;
                  }}
                  className="shrink-0 snap-center"
                  style={{ width: `${slideWidth}px`, flex: `0 0 ${slideWidth}px` }}
                >
                  <ServiceNavTileCard tile={tile} isActive={index === selectedIndex} />
                </div>
              ))}
              <div aria-hidden="true" style={{ width: `${edgePadding}px`, flex: `0 0 ${edgePadding}px` }} />
            </div>
          </div>

          <button
            onClick={scrollNext}
            aria-label="Next"
            disabled={selectedIndex === serviceTiles.length - 1}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card disabled:pointer-events-none disabled:opacity-40"
            style={{ boxShadow: arrowShadow, transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; e.currentTarget.style.boxShadow = arrowShadow; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(0.93)"; e.currentTarget.style.boxShadow = arrowShadowPress; e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-10">
          {serviceTiles.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setSelectedIndex(i);
                scrollToIndex(i);
              }}
              className={cn(
                "rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-7 h-2.5 bg-gold"
                  : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
