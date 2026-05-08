import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-logo-washington.webp";
import kccLogo from "@/assets/king-county-collaborative-law-logo.webp";

interface AffiliationBadgeGridProps {
  naepcAlt?: boolean;
  className?: string;
}

const AffiliationBadgeGrid = ({ naepcAlt, className }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt ? "/assets/naepc-logo.webp" : naepcLogo;

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
      src: "/badges/nar-logo.webp",
      alt: "REALTOR® badge",
    },
    {
      href: "https://www.kingcountycollaborativelaw.org",
      src: kccLogo,
      alt: "Friends of King County Collaborative Law",
    },
  ];

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <ul
        className="mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 max-w-5xl"
        aria-label="Professional memberships and affiliations"
      >
        {badges.map((b, i) => {
          const isRealtor = b.alt === "REALTOR® badge";
          const img = (
            <img
              src={b.src}
              alt={b.alt}
              loading="lazy"
              style={{
                height: "110px",
                width: "auto",
                mixBlendMode: isRealtor ? "screen" : "multiply",
              }}
              className="max-w-full object-contain"
            />
          );
          return (
            <li key={i} className="flex items-center justify-center">
              {b.href ? (
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AffiliationBadgeGrid;
