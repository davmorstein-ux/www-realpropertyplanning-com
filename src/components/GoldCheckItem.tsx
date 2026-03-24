import GoldCheck3D from "@/components/GoldCheck3D";

interface GoldCheckItemProps {
  children: React.ReactNode;
  className?: string;
}

const GoldCheckItem = ({ children, className = "" }: GoldCheckItemProps) => (
  <li className={`flex items-start gap-3 ${className}`}>
    <GoldCheck3D size={20} className="mt-0.5" />
    <span className="text-foreground leading-relaxed">{children}</span>
  </li>
);

export default GoldCheckItem;
