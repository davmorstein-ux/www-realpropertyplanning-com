import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-gold/30 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 mt-0.5">
          {icon || <FileText className="h-5 w-5 text-gold" />}
        </div>
        <div className="min-w-0">
          {badge && (
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold mb-1.5">
              {badge}
            </span>
          )}
          <h3 className="font-serif text-lg text-foreground font-semibold leading-snug group-hover:text-gold transition-colors mb-1.5">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default ResourceCard;
