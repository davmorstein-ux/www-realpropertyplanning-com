import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const getSlideState = (index: number): "center" | "near" | "far" => {
    const total = tiles.length;
    const diff = Math.abs(index - selectedIndex);
    const wrappedDiff = Math.min(diff, total - diff);
    if (wrappedDiff === 0) return "center";
    if (wrappedDiff === 1) return "near";
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

        <div className="relative" style={{ perspective: "1400px" }}>
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden mx-10 lg:mx-12">
            <div className="flex" style={{ transformStyle: "preserve-3d" }}>
              {tiles.map((tile, i) => {
                const state = getSlideState(i);

                // Determine rotation direction for near tiles
                let rotateY = 0;
                if (state === "near") {
                  const total = tiles.length;
                  const rawDiff = i - selectedIndex;
                  const isRight =
                    rawDiff === 1 ||
                    rawDiff === -(total - 1) ||
                    (rawDiff > 1 && rawDiff < total / 2);
                  rotateY = isRight ? -6 : 6;
                }

                const transform =
                  state === "center"
                    ? "scale(1.12) rotateY(0deg) translateZ(30px)"
                    : state === "near"
                      ? `scale(0.94) rotateY(${rotateY}deg) translateZ(-10px)`
                      : "scale(0.82) rotateY(0deg) translateZ(-40px)";

                const opacity = state === "center" ? 1 : state === "near" ? 0.78 : 0.4;
                const zIndex = state === "center" ? 10 : state === "near" ? 5 : 1;

                return (
                  <div
                    key={tile.href + tile.title}
                    className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%] px-3"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Link
                      to={tile.href}
                      className={cn(
                        "group flex flex-col items-center text-center rounded-2xl h-full transition-all duration-300",
                        "bg-card border border-border",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        state === "center"
                          ? "p-8 lg:p-10 shadow-[0_16px_48px_-12px_hsl(var(--foreground)/0.12),0_4px_16px_-4px_hsl(var(--foreground)/0.08)] border-gold/25 hover:shadow-[0_20px_56px_-12px_hsl(var(--foreground)/0.16),0_6px_20px_-4px_hsl(var(--foreground)/0.1)] hover:-translate-y-1.5"
                          : state === "near"
                            ? "p-7 lg:p-8 shadow-[0_8px_24px_-8px_hsl(var(--foreground)/0.08),0_2px_8px_-2px_hsl(var(--foreground)/0.04)] hover:shadow-[0_12px_32px_-8px_hsl(var(--foreground)/0.1)] hover:-translate-y-1"
                            : "p-6 lg:p-7 shadow-[0_4px_12px_-4px_hsl(var(--foreground)/0.06)]"
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
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-accent/10 transition-colors"
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
