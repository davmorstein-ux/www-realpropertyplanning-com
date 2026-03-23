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
  const isMobile = useIsMobile();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
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
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Select a topic below to learn more about how we can assist you.
          </p>
        </div>

        <div
          className="relative"
          style={isMobile ? undefined : { perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden mx-12 lg:mx-14">
            <div className="flex" style={isMobile ? undefined : { transformStyle: "preserve-3d" }}>
              {tiles.map((tile, i) => {
                const pos = getPosition(i);
                const isCenter = pos === 0;
                const isNear = pos === -1 || pos === 1;
                const slideStyle = getSlideStyle(i);

                return (
                  <div
                    key={tile.href + tile.title}
                    className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                    style={{
                      ...slideStyle,
                      transition: "transform 0.55s ease-in-out, opacity 0.5s ease-in-out",
                      transformStyle: isMobile ? undefined : "preserve-3d",
                    }}
                  >
                    <Link
                      to={tile.href}
                      className={cn(
                        "group flex flex-col items-center text-center rounded-2xl h-full",
                        "bg-card border border-border",
                        "transition-all duration-300 ease-in-out",
                        "hover:scale-[1.03] hover:-translate-y-1",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isCenter
                          ? "p-8 lg:p-10 shadow-[0_12px_40px_-10px_hsl(var(--foreground)/0.12),0_4px_16px_-4px_hsl(var(--foreground)/0.08)] border-gold/25"
                          : isNear
                            ? "p-7 lg:p-8 shadow-[0_6px_20px_-6px_hsl(var(--foreground)/0.07),0_2px_8px_-2px_hsl(var(--foreground)/0.04)]"
                            : "p-6 lg:p-7 shadow-[0_2px_8px_-2px_hsl(var(--foreground)/0.04)]"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-full flex items-center justify-center mb-5 transition-all duration-300",
                          isCenter
                            ? "w-[72px] h-[72px] bg-gold/12"
                            : isNear
                              ? "w-16 h-16 bg-secondary"
                              : "w-14 h-14 bg-secondary"
                        )}
                      >
                        <tile.icon
                          className={cn(
                            "transition-colors duration-300",
                            isCenter
                              ? "w-9 h-9 text-gold-dark"
                              : isNear
                                ? "w-7 h-7 text-accent group-hover:text-gold-dark"
                                : "w-6 h-6 text-muted-foreground"
                          )}
                        />
                      </div>
                      <h3
                        className={cn(
                          "font-serif text-foreground font-semibold leading-snug mb-1.5",
                          isCenter
                            ? "text-lg lg:text-xl"
                            : "text-base lg:text-lg"
                        )}
                      >
                        {tile.title}
                      </h3>
                      <p
                        className={cn(
                          "leading-snug text-muted-foreground",
                          isCenter ? "text-sm lg:text-[15px]" : "text-sm"
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
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors"
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
