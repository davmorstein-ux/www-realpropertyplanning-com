import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import SmartSearchBar from "./SmartSearchBar";

interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  /** HSL hue for the subtle per-tile tint */
  hue: number;
}

const tiles: ServiceTile[] = [
  { title: "For Attorneys", subtitle: "Estate & Probate Support", href: "/for-attorneys", icon: Scale, hue: 220 },
  { title: "Personal Representatives", subtitle: "Guidance for Executors", href: "/executors", icon: FileText, hue: 210 },
  { title: "Trustees & Fiduciaries", subtitle: "Property Decision Support", href: "/executors", icon: ShieldCheck, hue: 200 },
  { title: "CPAs", subtitle: "Coordinating Real Estate Decisions", href: "/for-cpas", icon: Briefcase, hue: 215 },
  { title: "Financial Planners", subtitle: "Property & Wealth Strategy", href: "/for-financial-planners", icon: TrendingUp, hue: 185 },
  { title: "Senior Transitions", subtitle: "Downsizing & Housing Changes", href: "/senior-transitions", icon: Users, hue: 195 },
  { title: "Probate & Estate Sales", subtitle: "Selling Inherited Property", href: "/probate-estate-sales", icon: Home, hue: 205 },
  { title: "How the Process Works", subtitle: "Step-by-Step Overview", href: "/how-the-process-works", icon: ClipboardList, hue: 190 },
  { title: "Why Valuation Matters", subtitle: "Understanding Property Value", href: "/why-valuation-matters", icon: BarChart3, hue: 175 },
  { title: "Probate Terminology", subtitle: "Simple Definitions & Guidance", href: "/terminology", icon: BookOpen, hue: 225 },
  { title: "Service Areas", subtitle: "Western Washington Coverage", href: "/counties", icon: MapPin, hue: 170 },
  { title: "Professional Resources", subtitle: "Trusted Network & Partners", href: "/professional-referral-resource", icon: Handshake, hue: 200 },
];

const ServiceNavTiles = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useIsMobile();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
    dragFree: false,
    duration: 35, // slower scroll
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

  /** Returns -1 (left neighbor), 0 (center), 1 (right neighbor), or null (far) */
  const getPosition = (index: number): number | null => {
    const total = tiles.length;
    const rawDiff = index - selectedIndex;

    // normalize to range [-total/2 … +total/2]
    let diff = rawDiff;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === -1) return -1;
    return null;
  };

  const getSlideStyle = (index: number) => {
    const pos = getPosition(index);

    if (isMobile) {
      // Flat on mobile — no 3D
      return {
        transform: "none",
        opacity: pos === 0 ? 1 : 0.6,
        zIndex: pos === 0 ? 5 : 1,
      };
    }

    if (pos === 0) {
      // Center
      return {
        transform: "scale(1) rotateY(0deg) translateZ(0px)",
        opacity: 1,
        zIndex: 10,
      };
    }

    if (pos === -1) {
      // Left neighbor
      return {
        transform: "scale(0.88) rotateY(18deg) translateZ(-40px)",
        opacity: 0.85,
        zIndex: 5,
      };
    }

    if (pos === 1) {
      // Right neighbor
      return {
        transform: "scale(0.88) rotateY(-18deg) translateZ(-40px)",
        opacity: 0.85,
        zIndex: 5,
      };
    }

    // Far tiles
    return {
      transform: "scale(0.8) rotateY(0deg) translateZ(-60px)",
      opacity: 0.4,
      zIndex: 1,
    };
  };

  return (
    <section className="py-16 lg:py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
            Type a question, tap a suggestion, or browse the topics below.
          </p>
          <SmartSearchBar />
        </div>

        <div
          className="relative"
          style={isMobile ? undefined : { perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center"
            style={{
              boxShadow: "0 4px 12px -2px hsl(220 35% 15% / 0.1), 0 2px 4px -1px hsl(220 35% 15% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.06)";
              e.currentTarget.style.boxShadow = "0 6px 16px -2px hsl(220 35% 15% / 0.12), 0 3px 6px -1px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%)";
              e.currentTarget.style.boxShadow = "0 4px 12px -2px hsl(220 35% 15% / 0.1), 0 2px 4px -1px hsl(220 35% 15% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.8)";
              e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(0.93) translateY(2px)";
              e.currentTarget.style.boxShadow = "0 1px 4px -1px hsl(220 35% 15% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.6)";
              e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.06)";
              e.currentTarget.style.boxShadow = "0 6px 16px -2px hsl(220 35% 15% / 0.12), 0 3px 6px -1px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.9)";
              e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
            }}
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden mx-14">
            <div className="flex" style={isMobile ? undefined : { transformStyle: "preserve-3d" }}>
              {tiles.map((tile, i) => {
                const pos = getPosition(i);
                const isCenter = pos === 0;
                const isNear = pos === -1 || pos === 1;
                const slideStyle = getSlideStyle(i);

                return (
                  <div
                    key={tile.href + tile.title}
                    className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
                    style={{
                      ...slideStyle,
                      transition: "transform 0.55s ease-in-out, opacity 0.5s ease-in-out",
                      transformStyle: isMobile ? undefined : "preserve-3d",
                    }}
                  >
                    <div className="flex justify-center px-4 sm:px-3">
                      <Link
                        to={tile.href}
                        className={cn(
                          "group relative flex w-full mx-auto flex-col items-center justify-center text-center",
                          "aspect-square",
                          "rounded-[28px]",
                          "transition-[transform,box-shadow] duration-300 ease-in-out",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isCenter
                            ? "max-w-[280px] lg:max-w-[300px]"
                            : isNear
                              ? "max-w-[260px] lg:max-w-[280px]"
                              : "max-w-[240px] lg:max-w-[260px]"
                        )}
                        style={{
                          border: `3px solid hsl(${tile.hue} 25% 86%)`,
                          background: `linear-gradient(145deg, hsl(${tile.hue} 30% 96%) 0%, hsl(${tile.hue} 25% 92%) 45%, hsl(${tile.hue} 20% 89%) 100%)`,
                          boxShadow: isCenter
                            ? [
                                `0 12px 40px -8px hsl(${tile.hue} 35% 25% / 0.18)`,
                                `0 6px 16px -4px hsl(${tile.hue} 35% 25% / 0.1)`,
                                "inset 0 2px 4px 0 hsl(0 0% 100% / 0.7)",
                                `inset 0 -3px 8px -2px hsl(${tile.hue} 25% 78% / 0.5)`,
                                "inset 2px 0 6px -2px hsl(0 0% 100% / 0.3)",
                                `inset -2px 0 6px -2px hsl(${tile.hue} 20% 80% / 0.3)`,
                              ].join(", ")
                            : isNear
                              ? [
                                  `0 6px 20px -4px hsl(${tile.hue} 35% 25% / 0.12)`,
                                  `0 3px 8px -2px hsl(${tile.hue} 35% 25% / 0.06)`,
                                  "inset 0 2px 3px 0 hsl(0 0% 100% / 0.6)",
                                  `inset 0 -2px 6px -2px hsl(${tile.hue} 25% 78% / 0.4)`,
                                ].join(", ")
                              : [
                                  `0 3px 10px -2px hsl(${tile.hue} 35% 25% / 0.08)`,
                                  "inset 0 1px 2px 0 hsl(0 0% 100% / 0.5)",
                                  `inset 0 -1px 4px -1px hsl(${tile.hue} 25% 78% / 0.3)`,
                                ].join(", "),
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.boxShadow = [
                            `0 16px 48px -8px hsl(${tile.hue} 35% 25% / 0.22)`,
                            `0 8px 20px -4px hsl(${tile.hue} 35% 25% / 0.12)`,
                            "inset 0 2px 4px 0 hsl(0 0% 100% / 0.8)",
                            `inset 0 -3px 8px -2px hsl(${tile.hue} 25% 78% / 0.5)`,
                            "inset 2px 0 6px -2px hsl(0 0% 100% / 0.35)",
                            `inset -2px 0 6px -2px hsl(${tile.hue} 20% 80% / 0.35)`,
                          ].join(", ");
                          e.currentTarget.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
                        }}
                        onMouseDown={(e) => {
                          e.currentTarget.style.transform = "translateY(2px) scale(0.97)";
                          e.currentTarget.style.boxShadow = [
                            `0 3px 10px -4px hsl(${tile.hue} 35% 25% / 0.2)`,
                            `0 1px 4px -1px hsl(${tile.hue} 35% 25% / 0.1)`,
                            `inset 0 2px 6px 0 hsl(${tile.hue} 25% 78% / 0.4)`,
                            "inset 0 -1px 2px 0 hsl(0 0% 100% / 0.5)",
                          ].join(", ");
                          e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out";
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
                        }}
                      >
                        {/* Top-left light reflection */}
                        <div
                          className="absolute top-3 left-3 right-[40%] h-[40%] rounded-tl-[24px] rounded-br-[60%] pointer-events-none"
                          style={{
                            background: "linear-gradient(135deg, hsl(0 0% 100% / 0.5) 0%, hsl(0 0% 100% / 0.08) 60%, transparent 100%)",
                          }}
                        />

                        {/* Rim highlight — top edge */}
                        <div
                          className="absolute inset-x-3 top-0 h-[1px] pointer-events-none"
                          style={{ background: "linear-gradient(90deg, transparent 5%, hsl(0 0% 100% / 0.75) 50%, transparent 95%)" }}
                        />

                        {/* Left edge highlight */}
                        <div
                          className="absolute left-0 inset-y-4 w-[1px] pointer-events-none"
                          style={{ background: "linear-gradient(180deg, transparent 5%, hsl(0 0% 100% / 0.5) 30%, hsl(0 0% 100% / 0.3) 70%, transparent 95%)" }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center px-5">
                          <div
                            className={cn(
                              "rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                              isCenter ? "w-[60px] h-[60px]" : isNear ? "w-[52px] h-[52px]" : "w-[46px] h-[46px]"
                            )}
                            style={{
                              background: `linear-gradient(145deg, hsl(${tile.hue} 25% 90%) 0%, hsl(${tile.hue} 20% 85%) 100%)`,
                              boxShadow: `inset 0 1px 2px hsl(0 0% 100% / 0.5), inset 0 -1px 2px hsl(${tile.hue} 20% 75% / 0.3), 0 2px 6px -2px hsl(${tile.hue} 30% 30% / 0.1)`,
                            }}
                          >
                            <tile.icon
                              className={cn(
                                "transition-colors duration-300",
                                isCenter
                                  ? "w-8 h-8 text-navy"
                                  : isNear
                                    ? "w-7 h-7 text-navy/80 group-hover:text-navy"
                                    : "w-6 h-6 text-navy/60"
                              )}
                              strokeWidth={1.8}
                            />
                          </div>
                          <h3
                            className={cn(
                              "font-serif font-semibold leading-snug mb-1",
                              isCenter
                                ? "text-lg lg:text-xl text-navy"
                                : "text-base lg:text-lg text-navy/90"
                            )}
                          >
                            {tile.title}
                          </h3>
                          <p
                            className={cn(
                              "leading-snug",
                              isCenter
                                ? "text-sm lg:text-[15px] text-navy/55"
                                : "text-xs lg:text-sm text-navy/45"
                            )}
                          >
                            {tile.subtitle}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center"
            style={{
              boxShadow: "0 4px 12px -2px hsl(220 35% 15% / 0.1), 0 2px 4px -1px hsl(220 35% 15% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
              transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.06)";
              e.currentTarget.style.boxShadow = "0 6px 16px -2px hsl(220 35% 15% / 0.12), 0 3px 6px -1px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%)";
              e.currentTarget.style.boxShadow = "0 4px 12px -2px hsl(220 35% 15% / 0.1), 0 2px 4px -1px hsl(220 35% 15% / 0.06), inset 0 1px 0 hsl(0 0% 100% / 0.8)";
              e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(0.93) translateY(2px)";
              e.currentTarget.style.boxShadow = "0 1px 4px -1px hsl(220 35% 15% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.6)";
              e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.06)";
              e.currentTarget.style.boxShadow = "0 6px 16px -2px hsl(220 35% 15% / 0.12), 0 3px 6px -1px hsl(220 35% 15% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.9)";
              e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
            }}
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
