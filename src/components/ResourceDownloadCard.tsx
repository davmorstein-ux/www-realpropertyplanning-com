import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ResourceDownloadCardProps {
  title: string;
  description: string;
  audience: string;
  guideLink?: string;
  guideLinkLabel?: string;
  variant?: "light" | "dark";
}

const ResourceDownloadCard = ({
  title,
  description,
  audience,
  guideLink,
  guideLinkLabel = "Read the full guide",
  variant = "light",
}: ResourceDownloadCardProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-xl border p-6 md:p-8 ${
        isDark
          ? "bg-primary border-primary-foreground/10"
          : "bg-card border-border"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg shrink-0 ${
            isDark ? "bg-gold/20" : "bg-gold/10"
          }`}
        >
          <FileText className="h-5 w-5 text-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-serif text-lg font-semibold mb-1.5 ${
              isDark ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-2 ${
              isDark ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {description}
          </p>
          <p
            className={`text-xs font-medium ${
              isDark ? "text-gold/70" : "text-gold-dark"
            }`}
          >
            For: {audience}
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button
              variant="gold"
              size="sm"
              className="h-9 px-4 text-sm"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download
            </Button>
            {guideLink && (
              <Link to={guideLink}>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 px-4 text-sm border-border"
                >
                  {guideLinkLabel}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDownloadCard;
