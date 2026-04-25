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
    },
  ];

  // Duplicate so the marquee loops seamlessly: animating the track
  // from 0 to -50% lands exactly on the start of the second copy.
  const loop = [...badges, ...badges];

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div className="relative mx-auto w-[90%] max-w-[1400px]">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Viewport */}
        <div className="overflow-hidden py-4">
          <div
            className="flex items-center gap-16 w-max affiliation-marquee-track"
            aria-label="Professional memberships and affiliations"
          >
            {loop.map((b, i) => {
              const isRealtor = b.alt === "REALTOR® badge";
              const badgeHeight = isRealtor ? "220px" : "150px";
              const img = (
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  aria-hidden={i >= badges.length ? true : undefined}
                  style={{
                    height: badgeHeight,
                    width: "auto",
                    mixBlendMode: isRealtor ? "screen" : "multiply",
                  }}
                  className="max-w-none object-contain"
                />
              );
              return (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center h-[150px]"
                >
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-full"
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
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
