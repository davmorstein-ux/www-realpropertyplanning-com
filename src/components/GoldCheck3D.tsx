import goldCheck3d from "@/assets/gold-check-3d.webp";

interface GoldCheck3DProps {
  size?: number;
  className?: string;
}

const GoldCheck3D = ({ size = 20, className = "" }: GoldCheck3DProps) => (
  <img
    src={goldCheck3d}
    alt=""
    aria-hidden="true"
    loading="lazy"
    width={size}
    height={size}
    className={`shrink-0 ${className}`}
    style={{ width: size, height: size, minWidth: size }}
  />
);

export default GoldCheck3D;
