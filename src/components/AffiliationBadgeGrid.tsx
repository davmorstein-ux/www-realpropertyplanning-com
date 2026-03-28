import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge-clean.png";
import naepcLogo from "@/assets/naepc-logo-2.png";

interface AffiliationBadgeGridProps {
  /** Use the alt naepc logo (naepc-logo.png) instead of naepc-logo-2.png */
  naepcAlt?: boolean;
}

const BadgeCell = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-center w-[180px] h-[180px] md:w-[200px] md:h-[200px]">
    {children}
  </div>
);

const AffiliationBadgeGrid = ({ naepcAlt }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt
    ? "/assets/naepc-logo.png"
    : naepcLogo;

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      {/* Top row: 3 badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <BadgeCell>
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain" />
          </a>
        </BadgeCell>
        <BadgeCell>
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain" />
          </a>
        </BadgeCell>
        <BadgeCell>
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain" />
          </a>
        </BadgeCell>
      </div>
      {/* Bottom row: 2 badges, centered */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <BadgeCell>
          <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain" />
        </BadgeCell>
        <BadgeCell>
          <img src="/badges/equal-housing-badge.png" alt="Equal Housing Opportunity badge" className="max-w-[75%] max-h-[75%] w-auto h-auto object-contain" />
        </BadgeCell>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
