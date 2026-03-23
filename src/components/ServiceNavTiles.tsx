import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useCallback } from "react";
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

  // attach listener
  if (emblaApi) {
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // figure out which slides are "adjacent" to center
  const getSlideState = (index: number): "center" | "adjacent" | "far" => {
    const total = tiles.length;
    const diff = Math.abs(index - selectedIndex);
    const wrappedDiff = Math.min(diff, total - diff);
    if (wrappedDiff === 0) return "center";
    if (wrappedDiff === 1) return "adjacent";
    return "far";
  };

  return (
    <section className="py-16 lg:py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Select a topic below to learn more about how we can assist you.
          </p>
        </div>

        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden mx-8 lg:mx-10" style={{ perspective: "1200px" }}>
            <div className="flex">
              {tiles.map((tile, i) => {
                const state = getSlideState(i);
                return (
                  <div
                    key={tile.href + tile.title}
                    className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%] px-3 transition-all duration-500 ease-out"
                    style={{
                      transform:
                        state === "center"
                          ? "scale(1) rotateY(0deg)"
                          : state === "adjacent"
                            ? "scale(0.92) rotateY(0deg)"
                            : "scale(0.85) rotateY(0deg)",
                      opacity: state === "center" ? 1 : state === "adjacent" ? 0.7 : 0.45,
                      zIndex: state === "center" ? 2 : state === "adjacent" ? 1 : 0,
                    }}
                  >
                    <Link
                      to={tile.href}
                      className={cn(
                        "group flex flex-col items-center text-center rounded-2xl p-7 lg:p-9 h-full transition-all duration-300",
                        "bg-card border border-border",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        state === "center"
                          ? "shadow-lg shadow-foreground/5 border-gold/20 hover:shadow-xl hover:-translate-y-1"
                          : "shadow-md shadow-foreground/5 hover:shadow-lg hover:-translate-y-0.5"
                      )}
                    >
                      <div className={cn(
                        "rounded-full flex items-center justify-center mb-5 transition-colors",
                        state === "center" ? "w-[72px] h-[72px] bg-gold/10" : "w-16 h-16 bg-secondary"
                      )}>
                        <tile.icon className={cn(
                          "transition-colors",
                          state === "center" ? "w-9 h-9 text-gold" : "w-8 h-8 text-accent group-hover:text-gold"
                        )} />
                      </div>
                      <h3 className={cn(
                        "font-serif text-foreground font-semibold leading-snug mb-1.5",
                        state === "center" ? "text-lg lg:text-xl" : "text-base lg:text-lg"
                      )}>
                        {tile.title}
                      </h3>
                      <p className={cn(
                        "leading-snug text-muted-foreground",
                        state === "center" ? "text-sm lg:text-[15px]" : "text-sm"
                      )}>
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
            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {tiles.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-border hover:bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
