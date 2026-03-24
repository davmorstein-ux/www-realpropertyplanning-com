import { Button } from "@/components/ui/button";

import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import logo from "@/assets/logo-rpp.jpg";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-dark opacity-95" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Hero Logo */}
            <div className="mb-6">
              <img
                src={logo}
                alt="Real Property Planning"
                className="w-[300px] md:w-[560px] lg:w-[800px] h-auto object-contain"
              />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight mb-6">
              Specialized Guidance for Probate & Estate Property Sales
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Helping attorneys, executors, personal administrators, and families navigate real estate transitions with compassion, expertise, and integrity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-light text-primary font-semibold px-8"
              >
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold"
              >
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0 mr-2" />
                Contact Me
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-base mb-3">Proudly Serving</p>
              <div className="flex flex-wrap gap-3">
                {["King County", "Snohomish County", "Pierce County", "Kitsap County"].map((county) => (
                  <span 
                    key={county}
                    className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-base"
                  >
                    {county}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl">
                <img
                  src={daveHeadshot}
                  alt="David Stein, probate real estate specialist and certified appraiser in Western Washington"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-80 h-96 rounded-2xl border-2 border-gold/20 -z-10" />
            </div>
            <AgentCredentialBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;