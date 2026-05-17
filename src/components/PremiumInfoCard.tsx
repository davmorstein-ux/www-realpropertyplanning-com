import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface PremiumInfoCardProps {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

/**
 * Shared compact premium card — no image, gold border, navy title,
 * gray description, gold CTA button pinned to bottom.
 * Used for resource/directory grids across the site.
 */
const PremiumInfoCard = ({
  title,
  description,
  href,
  ctaLabel = "Learn More",
}: PremiumInfoCardProps) => {
  return (
    <Link
      to={href}
      aria-label={title}
      className="group flex h-full flex-col rounded-2xl bg-white border-2 border-gold p-6 shadow-[0_12px_32px_-18px_hsl(var(--navy)/0.55)] hover:border-gold hover:shadow-[0_22px_46px_-22px_hsl(var(--navy)/0.7)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 no-underline"
      style={{ textDecoration: "none" }}
    >
      <h3 className="font-serif text-xl text-navy font-bold mb-3 leading-tight group-hover:text-[hsl(var(--gold-dark))] transition-colors">
        {title}
      </h3>
      <p
        className="text-[#374151] mb-6 flex-1"
        style={{ fontSize: "16px", lineHeight: 1.6, textDecoration: "none" }}
      >
        {description}
      </p>
      <span className="mt-auto inline-flex items-center justify-center gap-2 self-start bg-gold hover:bg-[hsl(var(--gold-dark))] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors no-underline">
        {ctaLabel}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </span>
    </Link>
  );
};

export default PremiumInfoCard;
