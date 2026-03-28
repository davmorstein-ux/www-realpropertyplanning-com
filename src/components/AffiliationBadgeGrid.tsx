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
  <div className="flex items-center justify-center w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
    {children}
  </div>
);

const AffiliationBadgeGrid = ({ naepcAlt }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt
    ? "/assets/naepc-logo.png"
    : naepcLogo;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
      <BadgeCell>
        <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
          <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain" />
        </a>
      </BadgeCell>
      <BadgeCell>
        <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
          <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="max-w-[95%] max-h-[95%] w-auto h-auto object-contain" />
        </a>
      </BadgeCell>
      <BadgeCell>
        <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
          <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain" />
        </a>
      </BadgeCell>
      <BadgeCell>
        <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain" />
      </BadgeCell>
      <BadgeCell>
        <img src="/badges/equal-housing-badge.png" alt="Equal Housing Opportunity badge" className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain" />
      </BadgeCell>
    </div>
  );
};

export default AffiliationBadgeGrid;
