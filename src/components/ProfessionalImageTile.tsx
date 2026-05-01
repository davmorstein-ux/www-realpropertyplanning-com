import { Link } from "react-router-dom";

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
      justifyContent: "flex-start",
      width: "220px",
      height: "280px",
      backgroundColor: "#faf8f4",
      borderRadius: "16px",
      border: "2px solid rgba(180,140,50,0.5)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      padding: "20px 12px 12px 12px",
      gap: "16px",
      textDecoration: "none",
    }}>
      <div style={{
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid #b8962e",
        flexShrink: 0,
      }}>
        <img src={tile.src} alt={tile.alt} style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }} loading="lazy" />
      </div>
      <div style={{
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
        <span style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          textAlign: "center",
          color: "#1a2744",
          lineHeight: 1.3,
        }}>
          {tile.label}
        </span>
      </div>
    </Link>
  );
};

export default ProfessionalImageTile;
