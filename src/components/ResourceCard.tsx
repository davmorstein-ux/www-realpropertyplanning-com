import { Link } from "react-router-dom";
import iconDocument3d from "@/assets/icons/probate-document-icon-washington.webp";

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
  <Link to={linkTo} className="card-3d-blue group block h-full min-h-[220px]">
    <div className="card-3d-blue__inner h-full">
      <div className="card-3d-blue__face h-full">
        <div className="flex h-full flex-col justify-between px-7 pb-7 pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center mt-0.5">
              {icon || (
                <img
                  src={iconDocument3d}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              {badge && (
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2">
                  {badge}
                </span>
              )}
              <h3
                className="font-serif text-xl font-extrabold text-foreground leading-snug group-hover:text-accent transition-colors mb-2"
                style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
              >
                {title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:text-[hsl(var(--gold-dark))] transition-colors">
            <span>Learn more</span>
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ResourceCard;
