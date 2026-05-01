import { Link } from "react-router-dom";
import tileShell from "@/assets/professionals/clean-button-tile-shell.webp";
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
      display: "block",
      position: "relative",
      width: "300px",
      height: "360px",
      textDecoration: "none",
    }}>
      {/* Layer 1: tile shell background */}
      <img src={tileShell} alt="" aria-hidden="true" style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "fill",
      }} loading="lazy" />

      {/* Layer 2: circular photo, clipped to circle via wrapper div */}
      <div style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "75%",
        aspectRatio: "1",
        borderRadius: "50%",
        overflow: "hidden",
      }}>
        <img src={tile.src} alt={tile.alt} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }} loading="lazy" />
      </div>

      {/* Layer 3: gold ring overlay */}
      <img src={goldRing} alt="" aria-hidden="true" style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "75%",
        aspectRatio: "1",
        pointerEvents: "none",
      }} loading="lazy" />

      {/* Layer 4: label text */}
      <span style={{
        position: "absolute",
        bottom: "6%",
        width: "100%",
        textAlign: "center",
        fontFamily: "Georgia, serif",
        fontSize: "1.2rem",
        fontWeight: 700,
        color: "#1a2744",
        lineHeight: 1.3,
      }}>
        {tile.label}
      </span>
    </Link>
  );
};

export default ProfessionalImageTile;
