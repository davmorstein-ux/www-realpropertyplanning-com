import { Link } from "react-router-dom";

export interface ProfessionalImageTileData {
  alt: string;
  href: string;
  src: string;
}

const ProfessionalImageTile = ({ tile }: { tile: ProfessionalImageTileData }) => {
  return (
    <Link
      to={tile.href}
      aria-label={tile.alt}
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "none",
        padding: 0,
        margin: 0,
        display: "block",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        borderRadius: "0.5rem",
      }}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:scale-105 hover:shadow-lg active:scale-105 active:shadow-lg"
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className="block w-full h-auto select-none"
        style={{ background: "transparent", backgroundColor: "transparent" }}
        draggable={false}
        loading="lazy"
      />
    </Link>
  );
};

export default ProfessionalImageTile;
