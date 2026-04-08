import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-0 sm:px-1 lg:px-2">
        <div className="text-center mb-14">
          <SmartSearchBar />
        </div>

        <p className="text-center text-muted-foreground text-base sm:text-lg font-medium tracking-wide mb-10">
          Choose the path that best fits your situation
        </p>

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-0 sm:grid-cols-3">
          {serviceTiles.map((tile) => (
            <ServiceNavTileCard key={tile.href + tile.title} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
