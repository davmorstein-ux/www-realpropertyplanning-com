import { CheckCircle } from "lucide-react";

interface GoldCheckItemProps {
  children: React.ReactNode;
  className?: string;
}

const GoldCheckItem = ({ children, className = "" }: GoldCheckItemProps) => (
  <li className={`flex items-start gap-3 ${className}`}>
    <CheckCircle className="w-5 h-5 min-w-5 text-gold mt-0.5 shrink-0" />
    <span className="text-foreground leading-relaxed">{children}</span>
  </li>
);

export default GoldCheckItem;
