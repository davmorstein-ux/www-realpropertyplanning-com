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
      className="block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style={{ background: 'transparent', backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}
    >
      <img
        src={tile.src}
        alt={tile.alt}
        className="block w-full h-auto select-none scale-[1.3]"
        draggable={false}
        loading="lazy"
        style={{ background: 'transparent' }}
      />
    </Link>
  );
};

const alt = (s: string) => s;

export default ProfessionalImageTile;
