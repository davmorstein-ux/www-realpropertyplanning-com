import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
}

const tiles: ServiceTile[] = [
  { title: "For Attorneys", subtitle: "Estate & Probate Support", href: "/for-attorneys", icon: Scale },
  { title: "Personal Representatives", subtitle: "Guidance for Executors", href: "/executors", icon: FileText },
  { title: "Trustees & Fiduciaries", subtitle: "Property Decision Support", href: "/executors", icon: ShieldCheck },
  { title: "CPAs", subtitle: "Coordinating Real Estate Decisions", href: "/for-cpas", icon: Briefcase },
  { title: "Financial Planners", subtitle: "Property & Wealth Strategy", href: "/for-financial-planners", icon: TrendingUp },
  { title: "Senior Transitions", subtitle: "Downsizing & Housing Changes", href: "/senior-transitions", icon: Users },
  { title: "Probate & Estate Sales", subtitle: "Selling Inherited Property", href: "/probate-estate-sales", icon: Home },
  { title: "How the Process Works", subtitle: "Step-by-Step Overview", href: "/how-the-process-works", icon: ClipboardList },
  { title: "Why Valuation Matters", subtitle: "Understanding Property Value", href: "/why-valuation-matters", icon: BarChart3 },
  { title: "Probate Terminology", subtitle: "Simple Definitions & Guidance", href: "/terminology", icon: BookOpen },
  { title: "Service Areas", subtitle: "Western Washington Coverage", href: "/counties", icon: MapPin },
  { title: "Professional Resources", subtitle: "Trusted Network & Partners", href: "/professional-referral-resource", icon: Handshake },
];

const ServiceNavTiles = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
  });

  const updateTransforms = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollSnaps = emblaApi.scrollSnapList();
    const scrollPosition = engine.location.get();

    const progress = scrollSnaps.map((snap, idx) => {
      let diff = snap - scrollPosition;

      // Handle loop wrapping
      const loopPoints = engine.slideLooper.loopPoints;
      if (loopPoints && loopPoints[idx]) {
        const loopTarget = loopPoints[idx].target();
        if (Math.abs(loopTarget - scrollPosition) < Math.abs(diff)) {
          diff = loopTarget - scrollPosition;
        }
      }

      return diff;
    });

    setScrollProgress(progress);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", updateTransforms);
    emblaApi.on("reInit", updateTransforms);
    onSelect();
    updateTransforms();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("scroll", updateTransforms);
      emblaApi.off("reInit", updateTransforms);
    };
  }, [emblaApi, onSelect, updateTransforms]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const getTransformStyle = useMemo(() => {
    return (index: number) => {
      if (scrollProgress.length === 0) {
        return {
          transform: "scale(0.85) rotateY(0deg) translateZ(-60px)",
          opacity: 0.5,
          zIndex: 1,
        };
      }

      // progress value: 0 = center, negative = left, positive = right
      const p = scrollProgress[index] ?? 0;
      const absDist = Math.min(Math.abs(p), 1.5);

      // Scale: center=1.15, edges=0.82
      const scale = 1.15 - absDist * 0.22;

      // RotateY: smooth rotation based on position, max ±35deg
      const rotateY = p * -25;
      const clampedRotateY = Math.max(-35, Math.min(35, rotateY));

      // TranslateZ: center comes forward, sides recede
      const translateZ = 50 - absDist * 90;

      // TranslateX: pull side tiles slightly inward
      const translateX = p * -15;

      // Opacity: center=1, fades out
      const opacity = Math.max(0.35, 1 - absDist * 0.45);

      // Z-index based on distance
      const zIndex = Math.round((1.5 - absDist) * 10);

      return {
        transform: `translateX(${translateX}px) scale(${scale.toFixed(3)}) rotateY(${clampedRotateY.toFixed(1)}deg) translateZ(${translateZ.toFixed(0)}px)`,
        opacity,
        zIndex: Math.max(1, zIndex),
      };
    };
  }, [scrollProgress]);

  const getSlideState = (index: number): "center" | "near" | "far" => {
    if (scrollProgress.length === 0) return "far";
    const absDist = Math.abs(scrollProgress[index] ?? 2);
    if (absDist < 0.15) return "center";
    if (absDist < 0.8) return "near";
    return "far";
  };

  return (
    <section className="py-16 lg:py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Select a topic below to learn more about how we can assist you.
          </p>
        </div>

        <div className="relative" style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}>
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden mx-10 lg:mx-12">
            <div className="flex" style={{ transformStyle: "preserve-3d" }}>
              {tiles.map((tile, i) => {
                const style = getTransformStyle(i);
                const state = getSlideState(i);

                return (
                  <div
                    key={tile.href + tile.title}
                    className="flex-[0_0_80%] sm:flex-[0_0_42%] lg:flex-[0_0_33.333%] px-2"
                    style={{
                      ...style,
                      transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1), opacity 0.4s ease",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Link
                      to={tile.href}
                      className={cn(
                        "group flex flex-col items-center text-center rounded-2xl h-full transition-shadow duration-300",
                        "bg-card border border-border",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        state === "center"
                          ? "p-8 lg:p-10 shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.15),0_8px_24px_-8px_hsl(var(--foreground)/0.1)] border-gold/30 hover:shadow-[0_24px_64px_-12px_hsl(var(--foreground)/0.2)]"
                          : state === "near"
                            ? "p-7 lg:p-8 shadow-[0_8px_28px_-8px_hsl(var(--foreground)/0.08)] hover:shadow-[0_12px_36px_-8px_hsl(var(--foreground)/0.12)]"
                            : "p-6 lg:p-7 shadow-[0_4px_12px_-4px_hsl(var(--foreground)/0.05)]"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-full flex items-center justify-center mb-5 transition-all duration-300",
                          state === "center"
                            ? "w-[76px] h-[76px] bg-gold/12"
                            : state === "near"
                              ? "w-16 h-16 bg-secondary"
                              : "w-14 h-14 bg-secondary"
                        )}
                      >
                        <tile.icon
                          className={cn(
                            "transition-colors duration-300",
                            state === "center"
                              ? "w-9 h-9 text-gold-dark"
                              : state === "near"
                                ? "w-7 h-7 text-accent group-hover:text-gold-dark"
                                : "w-6 h-6 text-muted-foreground"
                          )}
                        />
                      </div>
                      <h3
                        className={cn(
                          "font-serif text-foreground font-semibold leading-snug mb-1.5",
                          state === "center"
                            ? "text-lg lg:text-xl"
                            : state === "near"
                              ? "text-base lg:text-lg"
                              : "text-sm lg:text-base"
                        )}
                      >
                        {tile.title}
                      </h3>
                      <p
                        className={cn(
                          "leading-snug text-muted-foreground",
                          state === "center"
                            ? "text-sm lg:text-[15px]"
                            : "text-xs lg:text-sm"
                        )}
                      >
                        {tile.subtitle}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-10">
          {tiles.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
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
