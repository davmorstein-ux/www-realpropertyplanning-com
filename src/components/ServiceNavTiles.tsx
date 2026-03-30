import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
           <p className="text-muted-foreground text-base max-w-xl mx-auto mb-2">
             Most people start here — pick whatever feels closest to your situation.
           </p>
           <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
             Not sure? Just type a question below and we'll point you in the right direction.
           </p>
          <SmartSearchBar />
        </div>

        <div className="mx-auto grid max-w-[2000px] grid-cols-2 justify-items-center gap-1 sm:grid-cols-3">
          {serviceTiles.map((tile) => (
            <ServiceNavTileCard key={tile.href + tile.title} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
