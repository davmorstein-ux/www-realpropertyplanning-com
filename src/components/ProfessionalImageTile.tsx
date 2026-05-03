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
      }}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className="block w-full h-auto select-none"
        draggable={false}
        loading="lazy"
      />
    </Link>
  );
};

export default ProfessionalImageTile;
