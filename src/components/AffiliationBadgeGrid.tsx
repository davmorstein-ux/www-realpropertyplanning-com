import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge-clean.png";
import naepcLogo from "@/assets/naepc-logo-2.png";

interface AffiliationBadgeGridProps {
  /** Use the alt naepc logo (naepc-logo.png) instead of naepc-logo-2.png */
  naepcAlt?: boolean;
  /** Additional className for the outer wrapper */
  className?: string;
}

const AffiliationBadgeGrid = ({ naepcAlt, className }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt
    ? "/assets/naepc-logo.png"
    : naepcLogo;

  return (
    <div className={`mx-auto w-full ${className || ''}`}>
      {/* Mobile: 2x2 grid | Desktop: single row */}
      <div className="grid grid-cols-2 gap-4 px-4 md:hidden">
        <div className="flex items-center justify-center h-[90px]">
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="h-[56px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex items-center justify-center h-[90px]">
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="h-[90px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex items-center justify-center h-[90px]">
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="h-[50px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex items-center justify-center h-[90px]">
          <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="h-[100px] w-auto object-contain" />
        </div>
      </div>

      {/* Desktop: single row */}
      <div className="hidden md:flex mx-auto w-max min-w-fit translate-x-8 items-center justify-center gap-6 px-1 lg:gap-8">
        <div className="flex h-[120px] items-center justify-center">
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="h-[66px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex h-[120px] items-center justify-center">
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="h-[115px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex h-[120px] items-center justify-center">
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="h-[62px] w-auto object-contain" />
          </a>
        </div>
        <div className="flex h-[120px] items-center justify-center">
          <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="h-[130px] w-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
