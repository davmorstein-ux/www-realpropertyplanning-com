import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-3">
            How Can I Help You Today?
          </h2>
           <p className="text-muted-foreground text-base max-w-xl mx-auto mb-2">
             You don't need to figure out the whole process right now.
           </p>
           <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
             Choose the path that sounds most like your situation, or type a question below.
           </p>
          <SmartSearchBar />
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-7">
          {serviceTiles.map((tile) => (
            <div key={tile.href + tile.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.17rem)] flex">
              <ServiceNavTileCard tile={tile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
