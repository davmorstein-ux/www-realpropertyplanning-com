import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-logo-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";

interface AffiliationBadgeGridProps {
  naepcAlt?: boolean;
  className?: string;
}

const AffiliationBadgeGrid = ({ naepcAlt, className }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt ? "/assets/naepc-logo.png" : naepcLogo;

  const badges = [
    {
      href: "https://www.aginglifecare.org",
      src: alcaLogo,
      alt: "Aging Life Care Association Corporate Partner",
      blend: true,
    },
    {
      href: "https://www.naosa.org",
      src: naosaBadge,
      alt: "National Association of Senior Advocates - Best Real Estate Agent 2026",
    },
    {
      href: "https://www.naepc.org",
      src: naepcSrc,
      alt: "National Association of Estate Planners & Councils",
    },
    {
      href: null as string | null,
      src: "/badges/realtor-badge.png",
      alt: "REALTOR® badge",
    },
    {
      href: "https://www.kingcountycollaborativelaw.org",
      src: kccLogo,
      alt: "Friends of King County Collaborative Law",
      blend: true,
    },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = badges.length;

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  // Smooth scroll to active item
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (!child) return;
    const left = child.offsetLeft - (track.clientWidth - child.clientWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div
        className="relative mx-auto max-w-[640px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-8 overflow-x-hidden scroll-smooth px-12 py-4"
          aria-label="Professional memberships and affiliations"
        >
          {badges.map((b, i) => {
            const img = (
              <img
                src={b.src}
                alt={b.alt}
                loading="lazy"
                className={`max-h-full max-w-full object-contain ${b.blend ? "mix-blend-multiply" : ""}`}
              />
            );
            return (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center w-[160px] h-[160px] md:w-[180px] md:h-[180px] p-3"
              >
                {b.href ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous affiliation"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground/70 hover:text-foreground hover:bg-background shadow-sm transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next affiliation"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground/70 hover:text-foreground hover:bg-background shadow-sm transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
