import { Link } from "react-router-dom";
import shellBg from "@/assets/professionals/clean-button-tile-shell.webp";

export interface ProfessionalImageTileData {
  src: string;
  alt: string;
  label: string;
  href: string;
}

const ProfessionalImageTile = ({ tile }: { tile: ProfessionalImageTileData }) => {
  return (
    <Link to={tile.href} aria-label={tile.alt} style={{
      display: "block",
      position: "relative",
      width: "220px",
      height: "280px",
      textDecoration: "none",
    }}>
      <img src={shellBg} alt="" aria-hidden="true" style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        pointerEvents: "none",
      }} loading="lazy" />

      {/* Circular photo with gold ring — masks baked-in rings */}
      <div style={{
        position: "absolute",
        top: "6%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "62%",
        aspectRatio: "1",
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid #b8962e",
      }}>
        <img src={tile.src} alt={tile.alt} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }} loading="lazy" />
      </div>

      {/* Label */}
      <span style={{
        position: "absolute",
        bottom: "7%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        fontFamily: "Georgia, serif",
        fontSize: "1.1rem",
        fontWeight: 700,
        textAlign: "center",
        color: "#1a2744",
        lineHeight: 1.3,
      }}>
        {tile.label}
      </span>
    </Link>
  );
};

export default ProfessionalImageTile;
