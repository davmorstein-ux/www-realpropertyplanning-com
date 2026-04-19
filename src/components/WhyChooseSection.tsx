import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import award3d from "@/assets/real-estate-award-icon-seattle.webp";
import people3d from "@/assets/real-estate-agent-team-icon-washington.webp";
import book3d from "@/assets/probate-guidance-book-icon-washington.webp";

const credentials = [
  {
    image: award3d,
    stat: "15+",
    label: "Years of Specialized Experience"
  },
  {
    image: people3d,
    stat: "500+",
    label: "Families Served"
  },
  {
    icon: null,
    image: mappin3d,
    stat: "4",
    label: "Counties Covered"
  },
  {
    image: book3d,
    stat: "Expert",
    label: "Probate Certification"
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-dark font-bold tracking-wider uppercase mb-3 text-base">
              Why Work With Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-6">
              The Authority on Probate & Estate Real Estate
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              When families face the complex intersection of real estate and estate administration, they need more than a real estate agent — they need a licensed broker and certified appraiser who understands both the legal intricacies and the emotional journey.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Real Property Planning is an independent hub for probate, estate, and senior transition real estate in Washington State. Led by President David Stein — a licensed real estate broker and a Washington State Certified Residential Appraiser — the platform brings a dual perspective that supports accurate valuations and sound outcomes. David Stein's real estate license is held under eXp Realty; appraisal services are provided through Stein Appraisal.
            </p>
            
            <div className="space-y-4">
              {[
                "Court-approved listing procedures",
                "Transparent communication with all parties",
                "Compassionate guidance during difficult times",
                "Maximum value for estate beneficiaries"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {credentials.map((item, index) => (
              <div 
                key={index}
                className="card-3d p-8 text-center"
              >
                <img src={item.image} alt="" aria-hidden="true" className="w-8 h-8 object-contain mx-auto mb-4"  loading="lazy"/>
                <div className="font-serif text-3xl text-foreground font-medium mb-2">
                  {item.stat}
                </div>
                <p className="text-muted-foreground text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
