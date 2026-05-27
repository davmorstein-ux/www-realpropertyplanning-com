interface ProviderContactProps {
  phone?: string;
  email?: string;
  className?: string;
}

const stripPhone = (p: string) => p.replace(/[^\d+]/g, "");

/**
 * Renders clickable phone and email links for a featured provider tile.
 * Uses onClick stopPropagation so clicks don't trigger an enclosing tile link.
 */
const ProviderContact = ({ phone, email, className = "" }: ProviderContactProps) => {
  if (!phone && !email) return null;
  return (
    <div className={`flex flex-col items-center gap-1 mb-4 text-sm ${className}`}>
      {phone && (
        <a
          href={`tel:${stripPhone(phone)}`}
          onClick={(e) => e.stopPropagation()}
          className="text-navy font-semibold hover:text-gold underline-offset-2 hover:underline"
          aria-label={`Call ${phone}`}
        >
          {phone}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          onClick={(e) => e.stopPropagation()}
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
