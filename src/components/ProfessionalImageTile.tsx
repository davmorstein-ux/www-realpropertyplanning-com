import { Link } from "react-router-dom";
import goldRing from "@/assets/professionals/gold-ring-overlay.webp";

export interface ProfessionalImageTileData {
  src: string;
  alt: string;
  label: string;
  href: string;
}

const ProfessionalImageTile = ({ tile }: { tile: ProfessionalImageTileData }) => {
  return (
    <Link to={tile.href} aria-label={tile.alt} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      textDecoration: "none",
      width: "200px",
    }}>
      {/* Circle + ring wrapper */}
      <div style={{ position: "relative", width: "180px", height: "180px", background: "transparent" }}>
        {/* Photo clipped to circle */}
        <img src={tile.src} alt={tile.alt} style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center",
        }} loading="lazy" />
        {/* Gold ring overlay */}
        <img src={goldRing} alt="" aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }} loading="lazy" />
      </div>
      {/* Label */}
      <span style={{
        fontFamily: "Georgia, serif",
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "#1a2744",
        textAlign: "center",
        lineHeight: 1.3,
      }}>
        {tile.label}
      </span>
    </Link>
  );
};

export default ProfessionalImageTile;
