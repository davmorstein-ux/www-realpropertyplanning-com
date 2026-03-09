import { Award, Users, MapPin, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: Award,
    stat: "15+",
    label: "Years of Specialized Experience"
  },
  {
    icon: Users,
    stat: "500+",
    label: "Families Served"
  },
  {
    icon: MapPin,
    stat: "4",
    label: "Counties Covered"
  },
  {
    icon: BookOpen,
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
            <p className="text-gold font-medium tracking-wider uppercase mb-3 text-sm">
              Why Work With Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-6">
              The Authority on Probate & Estate Real Estate
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              When families face the complex intersection of real estate and estate administration, they need more than a real estate agent—they need a specialist who understands both the legal intricacies and the emotional journey.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I've dedicated my career to becoming the Puget Sound region's most trusted expert in probate and estate property transactions. My deep relationships with attorneys, title companies, and the court system ensure your transaction proceeds smoothly.
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
                <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <div className="font-serif text-3xl text-foreground font-medium mb-2">
                  {item.stat}
                </div>
                <p className="text-muted-foreground text-sm">
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
