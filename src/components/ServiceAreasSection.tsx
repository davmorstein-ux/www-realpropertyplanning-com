import mappin3d from "@/assets/mappin-3d.webp";

const areas = [
  {
    county: "King County",
    cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Federal Way, and more"
  },
  {
    county: "Snohomish County", 
    cities: "Everett, Edmonds, Lynnwood, Marysville, Lake Stevens, Mukilteo, and more"
  },
  {
    county: "Pierce County",
    cities: "Tacoma, Puyallup, Lakewood, University Place, Bonney Lake, and more"
  },
  {
    county: "Kitsap County",
    cities: "Bremerton, Silverdale, Poulsbo, Bainbridge Island, Port Orchard, and more"
  }
];

const ServiceAreasSection = () => {
  return (
    <section data-nosnippet className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-bold tracking-wider uppercase mb-3 text-base">
            Service Areas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-medium mb-4">
            Serving Clients Throughout Washington State
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            With a strong focus in Western Washington and the Puget Sound region, and referral connections available across the U.S. and internationally through eXp Realty.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="rounded-[18px] p-8 transition-all duration-200 bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] border-[1.5px] border-[rgba(255,255,255,0.12)] shadow-[0_4px_0_rgba(0,0,0,0.15),0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:border-gold/30 hover:shadow-[0_6px_0_rgba(0,0,0,0.15),0_12px_28px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0 transition-transform duration-300 ease-out group-hover:scale-110"  loading="lazy"/>
                <h3 className="font-serif text-xl text-primary-foreground font-medium">
                  {area.county}
                </h3>
              </div>
              <p className="text-primary-foreground/70">
                {area.cities}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
