import { useEffect, useState } from "react";
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

  const count = badges.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slow, continuous auto-rotation
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  // Compute the shortest signed offset (-N/2 .. +N/2) so the carousel
  // rotates the short way around the loop.
  const signedOffset = (i: number) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div
        className="relative mx-auto w-[90%] max-w-[1400px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="relative h-[320px] md:h-[360px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
          aria-label="Professional memberships and affiliations"
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {badges.map((b, i) => {
              const offset = signedOffset(i);
              const abs = Math.abs(offset);
              const isCenter = offset === 0;

              // 3D placement
              const translateX = offset * 360; // wider horizontal spread to prevent overlap
              const translateZ = isCenter ? 0 : -260 * Math.min(abs, 2);
              const rotateY = Math.max(-60, Math.min(60, offset * -38));
              const scale = isCenter ? 1 : Math.max(0.45, 0.7 - (abs - 1) * 0.18);
              const opacity = abs >= 3 ? 0 : isCenter ? 1 : Math.max(0.3, 0.85 - (abs - 1) * 0.3);
              const zIndex = 100 - abs;

              const img = (
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain ${b.blend ? "mix-blend-multiply" : ""}`}
                />
              );

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${b.alt}`}
                  aria-current={isCenter ? "true" : undefined}
                  className="absolute left-1/2 top-1/2 flex items-center justify-center w-[260px] h-[260px] md:w-[300px] md:h-[300px] p-3 outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition:
                      "transform 1100ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    pointerEvents: abs > 2 ? "none" : "auto",
                  }}
                >
                  {b.href && isCenter ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
