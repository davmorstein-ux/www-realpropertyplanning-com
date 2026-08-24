import { trackProviderClick } from "@/lib/providerTracking";

interface ProviderContactProps {
  phone?: string;
  email?: string;
  className?: string;
  /* Provider identity, used only to label the GA4 referral event so a click can
     be attributed to a listing. Optional: cards that do not pass them still
     render and still work, they just are not attributed. */
  providerName?: string;
  providerCompany?: string;
}

const stripPhone = (p: string) => p.replace(/[^\d+]/g, "");

/**
 * Renders clickable phone and email links for a featured provider tile.
 * Uses onClick stopPropagation so clicks don't trigger an enclosing tile link.
 *
 * The same handlers fire a GA4 provider_contact_click event. GA4's enhanced
 * measurement cannot see tel: or mailto: clicks — they never navigate — so
 * without this the phone taps, which are the strongest referral signal on a
 * site aimed at older visitors, would be missing from every report.
 * See src/lib/providerTracking.ts.
 */
const ProviderContact = ({
  phone,
  email,
  className = "",
  providerName,
  providerCompany,
}: ProviderContactProps) => {
  if (!phone && !email) return null;
  return (
    <div className={`flex flex-col items-center gap-1 mb-4 text-sm ${className}`}>
      {phone && (
        <a
          href={`tel:${stripPhone(phone)}`}
          onClick={(e) => {
            e.stopPropagation();
            if (providerName) {
              trackProviderClick({ provider: providerName, company: providerCompany, kind: "phone" });
            }
          }}
          className="text-navy font-semibold hover:text-gold underline-offset-2 hover:underline"
          aria-label={`Call ${phone}`}
        >
          {phone}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          onClick={(e) => {
            e.stopPropagation();
            if (providerName) {
              trackProviderClick({ provider: providerName, company: providerCompany, kind: "email" });
            }
          }}
          className="text-navy hover:text-gold underline-offset-2 hover:underline break-all"
          aria-label={`Email ${email}`}
        >
          {email}
        </a>
      )}
    </div>
  );
};

export default ProviderContact;
