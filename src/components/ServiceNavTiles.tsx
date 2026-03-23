import { Link } from "react-router-dom";
import {
  Scale, FileText, Home, MapPin, Handshake, Users, BarChart3,
  ShieldCheck, BookOpen, Briefcase, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import SmartSearchBar from "./SmartSearchBar";

interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
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

/* ── shared shadow strings ── */
const arrowShadow = "0 4px 14px -3px hsl(220 30% 20% / 0.12), 0 2px 4px -1px hsl(220 30% 20% / 0.06)";
const arrowShadowHover = "0 6px 18px -3px hsl(220 30% 20% / 0.15), 0 3px 6px -1px hsl(220 30% 20% / 0.08)";
const arrowShadowPress = "0 1px 4px -1px hsl(220 30% 20% / 0.18)";

const cardShadow = (hue: number) =>
  `0 8px 30px -6px hsl(${hue} 25% 30% / 0.12), 0 4px 10px -4px hsl(${hue} 25% 30% / 0.08), 0 1px 0 0 hsl(${hue} 20% 82% / 0.6)`;
const cardShadowHover = (hue: number) =>
  `0 14px 40px -8px hsl(${hue} 25% 30% / 0.16), 0 6px 14px -4px hsl(${hue} 25% 30% / 0.1), 0 1px 0 0 hsl(${hue} 20% 80% / 0.7)`;
const cardShadowPress = (hue: number) =>
  `0 2px 8px -2px hsl(${hue} 25% 30% / 0.18), 0 1px 3px -1px hsl(${hue} 25% 30% / 0.1)`;

const ServiceNavTiles = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
    dragFree: false,
    duration: 30,
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

        {/* Carousel wrapper — arrows sit inside, carousel is full-width for true centering */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center"
            style={{ boxShadow: arrowShadow, transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; e.currentTarget.style.boxShadow = arrowShadow; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(0.93)"; e.currentTarget.style.boxShadow = arrowShadowPress; e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
          >
            <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Embla viewport — symmetric padding so Embla measures a centered container */}
          <div ref={emblaRef} className="overflow-hidden mx-14">
            <div className="flex">
              {tiles.map((tile, i) => {
                const isActive = i === selectedIndex;

                return (
                  <div
                    key={tile.href + tile.title}
                    className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                  >
                    <div className="flex justify-center">
                      <Link
                        to={tile.href}
                        className={cn(
                          "group relative flex flex-col items-center justify-center text-center",
                          "w-full max-w-[280px] aspect-square",
                          "rounded-2xl border",
                          "transition-[transform,box-shadow,opacity] duration-300 ease-in-out",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isActive ? "opacity-100" : "opacity-70"
                        )}
                        style={{
                          borderColor: `hsl(${tile.hue} 18% 86%)`,
                          background: `linear-gradient(to bottom, hsl(${tile.hue} 20% 98%) 0%, hsl(${tile.hue} 16% 94%) 100%)`,
                          boxShadow: cardShadow(tile.hue),
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.boxShadow = cardShadowHover(tile.hue);
                          e.currentTarget.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = cardShadow(tile.hue);
                          e.currentTarget.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
                        }}
                        onMouseDown={(e) => {
                          e.currentTarget.style.transform = "translateY(2px) scale(0.97)";
                          e.currentTarget.style.boxShadow = cardShadowPress(tile.hue);
                          e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out";
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                          e.currentTarget.style.boxShadow = cardShadowHover(tile.hue);
                          e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out";
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                          style={{
                            background: `linear-gradient(to bottom, hsl(${tile.hue} 22% 93%) 0%, hsl(${tile.hue} 18% 88%) 100%)`,
                            boxShadow: `0 2px 6px -2px hsl(${tile.hue} 25% 30% / 0.1)`,
                          }}
                        >
                          <tile.icon className="w-7 h-7 text-foreground" strokeWidth={1.8} />
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg lg:text-xl font-semibold leading-snug mb-1 text-foreground">
                          {tile.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-sm text-muted-foreground leading-snug px-4">
                          {tile.subtitle}
                        </p>

                        {/* Bottom edge depth line */}
                        <div
                          className="absolute bottom-0 inset-x-4 h-[1px] rounded-full pointer-events-none"
                          style={{ background: `hsl(${tile.hue} 15% 82%)` }}
                        />
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center"
            style={{ boxShadow: arrowShadow, transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%)"; e.currentTarget.style.boxShadow = arrowShadow; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(0.93)"; e.currentTarget.style.boxShadow = arrowShadowPress; e.currentTarget.style.transition = "transform 0.12s ease-out, box-shadow 0.12s ease-out"; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.06)"; e.currentTarget.style.boxShadow = arrowShadowHover; e.currentTarget.style.transition = "transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out"; }}
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
