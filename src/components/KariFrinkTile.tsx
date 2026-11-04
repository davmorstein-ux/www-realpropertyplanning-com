import ProviderTile from "@/components/ProviderTile";
import lnwLogo from "@/assets/providers/lnw-logo.webp";

/**
 * Kari Frink, CFP®, LNW (added Nov 2, 2026). One tile, shown in two places as
 * the owner asked: financial planning (/for-financial-planners and
 * /professionals/financial-planners) and the trust company side (/trustees).
 * The directory entries are in src/data/familyProfessionals.ts.
 *
 * Headshot removed Nov 3, 2026 at David's request until LNW sends an updated
 * one. To restore: add the new file under src/assets/providers/, import it
 * here as kariPhoto, and pass photo/photoAlt again (and in familyProfessionals.ts).
 */
export const KARI_FRINK = {
  name: "Kari Frink, CFP®",
  title: "Wealth Advisor & Trust Services",
  company: "LNW",
  phone: "(206) 464-5265",
  phone2: "(800) 475-9159",
  website: "https://lnwadvisors.com",
} as const;

const KariFrinkTile = ({ specialty }: { specialty: string }) => (
  <ProviderTile
    name={KARI_FRINK.name}
    title={KARI_FRINK.title}
    company={KARI_FRINK.company}
    logo={lnwLogo}
    logoAlt="LNW logo"
    phone={KARI_FRINK.phone}
    phone2={KARI_FRINK.phone2}
    website={KARI_FRINK.website}
    specialty={specialty}
  />
);

export const KARI_FINANCIAL_SPECIALTY =
  "Wealth management and financial planning for individuals and families, with trust services through LNW.";
export const KARI_TRUST_SPECIALTY =
  "Trust services through LNW, for families weighing a professional or co-trustee alongside a family member.";

export default KariFrinkTile;
