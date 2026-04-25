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
  const step = 360 / count; // angle between badges around the ring
  const radius = 520; // ring radius in px

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div className="relative mx-auto w-[90%] max-w-[1400px]">
        {/* Stage with perspective; mask fades the side/edges for depth */}
        <div
          className="relative h-[360px] md:h-[400px] mx-auto"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "50% 50%",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
          aria-label="Professional memberships and affiliations"
        >
          {/* Rotating ring — pure CSS, constant linear infinite spin */}
          <div
            className="absolute left-1/2 top-1/2 affiliation-ring-spin"
            style={{
              transformStyle: "preserve-3d",
              width: 0,
              height: 0,
            }}
          >
            {badges.map((b, i) => {
              const angle = i * step;
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
                  className="absolute affiliation-ring-item"
                  style={{
                    // Position around the ring, then counter-rotate the
                    // badge so it always faces the viewer at its ring slot.
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) rotateY(${-angle}deg)`,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex items-center justify-center w-[260px] h-[260px] md:w-[300px] md:h-[300px] p-3">
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
