import mappin3d from "@/assets/mappin-3d.png";
import award3d from "@/assets/award-3d.png";
import people3d from "@/assets/people-3d.png";
import book3d from "@/assets/book-3d.png";

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
              I'm David Stein, and I've dedicated my career to becoming the Puget Sound region's most trusted expert in probate and estate property transactions. As both a licensed real estate broker and a Washington State Certified Real Estate Appraiser, I bring a unique dual perspective that ensures accurate valuations and optimal outcomes. My license is held by eXp Realty.
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
                className="bg-card p-8 rounded-lg border border-border text-center"
              >
                <img src={item.image} alt="" aria-hidden="true" className="w-8 h-8 object-contain mx-auto mb-4" />
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
