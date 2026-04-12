import alcaLogo from "@/assets/senior-advocates-alca-partner-washington.webp";
import naosaBadge from "@/assets/senior-advocates-naosa-badge-washington.webp";
import naepcLogo from "@/assets/estate-planners-naepc-logo-washington.webp";

interface AffiliationBadgeGridProps {
  naepcAlt?: boolean;
  className?: string;
}

const AffiliationBadgeGrid = ({ naepcAlt, className }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt ? "/assets/naepc-logo.png" : naepcLogo;

  return (
    <div className={`mx-auto w-full ${className || ""}`}>
      <div className="grid grid-cols-2 gap-4 px-4 mx-auto max-w-[480px]">
        <div className="flex items-center justify-center aspect-square p-4">
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="max-h-full max-w-full object-contain"  loading="lazy"/>
          </a>
        </div>
        <div className="flex items-center justify-center aspect-square p-4">
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="max-h-full max-w-full object-contain"  loading="lazy"/>
          </a>
        </div>
        <div className="flex items-center justify-center aspect-square p-4">
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="max-h-full max-w-full object-contain"  loading="lazy"/>
          </a>
        </div>
        <div className="flex items-center justify-center aspect-square p-4">
          <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="max-h-full max-w-full object-contain"  loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
