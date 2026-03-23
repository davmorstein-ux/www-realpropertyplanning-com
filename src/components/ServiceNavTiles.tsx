import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSnapSlider } from "@/hooks/use-scroll-snap-slider";
import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

/* ── shared shadow strings ── */
const arrowShadow = "0 4px 14px -3px hsl(220 30% 20% / 0.12), 0 2px 4px -1px hsl(220 30% 20% / 0.06)";
const arrowShadowHover = "0 6px 18px -3px hsl(220 30% 20% / 0.15), 0 3px 6px -1px hsl(220 30% 20% / 0.08)";
const arrowShadowPress = "0 1px 4px -1px hsl(220 30% 20% / 0.18)";

const ServiceNavTiles = () => {
  const {
    viewportRef,
    selectedIndex,
    gap,
    slideWidth,
    edgePadding,
    setSlideRef,
    handleScroll,
    goToIndex,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  } = useScrollSnapSlider({ itemCount: serviceTiles.length });

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
            disabled={!canScrollPrev}
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
            className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{
              scrollPaddingInline: `${edgePadding}px`,
            }}
          >
            <div className="flex items-stretch" style={{ gap: `${gap}px` }}>
              <div aria-hidden="true" style={{ width: `${edgePadding}px`, flex: `0 0 ${edgePadding}px` }} />
              {serviceTiles.map((tile, index) => (
                <div
                  key={tile.href + tile.title}
                  ref={setSlideRef(index)}
                  className="shrink-0 snap-center snap-always"
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
            disabled={!canScrollNext}
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
              onClick={() => goToIndex(i)}
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
