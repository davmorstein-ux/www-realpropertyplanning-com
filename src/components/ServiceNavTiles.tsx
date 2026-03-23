import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-8">
            Type a question, tap a suggestion, or browse the topics below.
          </p>
          <SmartSearchBar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-12">
          {serviceTiles.map((tile) => (
            <ServiceNavTileCard key={tile.href + tile.title} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
