import mappin3d from "@/assets/mappin-3d.png";

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
            Serving the Greater Puget Sound Region
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Local expertise across four counties, with deep knowledge of each market and community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={mappin3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" />
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
