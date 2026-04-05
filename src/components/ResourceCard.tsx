import { Link } from "react-router-dom";
import iconDocument3d from "@/assets/icons/icon-document-3d.png";
import iconArrowRight3d from "@/assets/icons/icon-arrow-right-3d.png";

interface ResourceCardProps {
  title: string;
  description: string;
  linkTo: string;
  badge?: string;
  icon?: React.ReactNode;
}

const ResourceCard = ({
  title,
  description,
  linkTo,
  badge,
  icon,
}: ResourceCardProps) => (
  <Link to={linkTo} className="card-3d group block">
    <div className="p-6 h-full">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center mt-0.5">
          {icon || <img src={iconDocument3d} alt="" aria-hidden="true" className="h-7 w-7 object-contain" loading="lazy" />}
        </div>
        <div className="min-w-0 flex-1">
          {badge && (
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
              {badge}
            </span>
          )}
          <h3 className="font-serif text-lg text-foreground font-semibold leading-snug group-hover:text-gold transition-colors mb-1.5">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-accent/60 group-hover:text-gold transition-colors text-sm">
            Read more <img src={iconArrowRight3d} alt="" aria-hidden="true" className="w-3.5 h-3.5 object-contain" loading="lazy" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default ResourceCard;
