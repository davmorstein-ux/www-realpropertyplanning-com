import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
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

  // Duplicate the list so the marquee can loop seamlessly:
  // animating from 0 to -50% lands exactly on the start of the second copy.
  const loop = [...badges, ...badges];
  const trackRef = useRef<HTMLDivElement | null>(null);

  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // Pause the animation briefly while we nudge, then resume.
    track.style.animationPlayState = "paused";
    track.scrollBy?.({ left: dir * 240, behavior: "smooth" });
    window.setTimeout(() => {
      if (trackRef.current) trackRef.current.style.animationPlayState = "running";
    }, 1200);
  };

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div className="relative mx-auto max-w-[760px] group">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        {/* Viewport */}
        <div className="overflow-hidden px-12 py-4">
          <div
            ref={trackRef}
            className="flex items-center gap-12 w-max affiliation-marquee-track"
            aria-label="Professional memberships and affiliations"
          >
            {loop.map((b, i) => {
              const img = (
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  aria-hidden={i >= badges.length ? true : undefined}
                  className={`max-h-full max-w-full object-contain ${b.blend ? "mix-blend-multiply" : ""}`}
                />
              );
              return (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center w-[240px] h-[240px] md:w-[270px] md:h-[270px] p-3"
                >
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full"
                      tabIndex={i >= badges.length ? -1 : 0}
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
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Previous affiliation"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground/70 hover:text-foreground hover:bg-background shadow-sm transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
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
