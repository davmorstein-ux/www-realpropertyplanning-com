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
             Most people start here — pick whatever feels closest to your situation.
           </p>
           <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-8">
             Not sure? Just type a question below and we'll point you in the right direction.
           </p>
          <SmartSearchBar />
        </div>

        <div className="mx-auto flex max-w-[2600px] flex-wrap justify-center gap-x-14 gap-y-16 sm:gap-x-16 sm:gap-y-18 lg:gap-x-20 lg:gap-y-24">
          {serviceTiles.map((tile) => (
            <div key={tile.href + tile.title} className="w-[min(88vw,380px)] sm:w-[440px] lg:w-[500px] xl:w-[520px]">
              <ServiceNavTileCard tile={tile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
