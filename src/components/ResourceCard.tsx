import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  <Link to={linkTo} className="group block">
    <div className="card-3d p-6 h-full">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 mt-0.5">
          {icon || <FileText className="h-5 w-5 text-gold" />}
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
          <span className="inline-flex items-center gap-1 text-accent/60 group-hover:text-gold transition-colors text-sm">
            Read more <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default ResourceCard;
