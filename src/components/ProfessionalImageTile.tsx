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
        border: "none",
        boxShadow: "none",
        padding: 0,
        margin: 0,
        display: "block",
      }}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className="select-none"
        style={{ width: "100%", height: "100%", display: "block" }}
        draggable={false}
        loading="lazy"
      />
    </Link>
  );
};

export default ProfessionalImageTile;
