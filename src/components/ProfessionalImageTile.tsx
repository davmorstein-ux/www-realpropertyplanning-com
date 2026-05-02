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
      aria-label={alt(tile.alt)}
      className="tile-hover block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-[8px]"
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

const alt = (s: string) => s;

export default ProfessionalImageTile;
