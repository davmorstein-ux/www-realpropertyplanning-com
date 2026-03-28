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
  <div className="flex h-[100px] items-center justify-center md:h-[120px]">
    {children}
  </div>
);

const AffiliationBadgeGrid = ({ naepcAlt }: AffiliationBadgeGridProps = {}) => {
  const naepcSrc = naepcAlt
    ? "/assets/naepc-logo.png"
    : naepcLogo;

  return (
    <div className="mx-auto w-full overflow-x-auto">
      <div className="mx-auto flex w-max min-w-fit translate-x-5 items-center justify-center gap-4 px-1 md:translate-x-8 md:gap-6 lg:gap-8">
        <BadgeCell>
          <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="h-[66px] w-auto object-contain" />
          </a>
        </BadgeCell>
        <BadgeCell>
          <a href="https://www.naosa.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="h-[115px] w-auto object-contain" />
          </a>
        </BadgeCell>
        <BadgeCell>
          <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img src={naepcSrc} alt="National Association of Estate Planners & Councils" className="h-[62px] w-auto object-contain" />
          </a>
        </BadgeCell>
        <BadgeCell>
          <img src="/badges/realtor-badge.png" alt="REALTOR® badge" className="h-[130px] w-auto object-contain" />
        </BadgeCell>
      </div>
    </div>
  );
};

export default AffiliationBadgeGrid;
