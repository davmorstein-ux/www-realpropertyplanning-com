import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import mariaCorbuPhoto from "@/assets/providers/maria-corbu-victoria1afh.jpg";
import victoria1Logo from "@/assets/providers/victoria1afh-logo.png";

const AdultFamilyHomes = () => (
  <>
    <SEOHead
      title="Adult Family Homes | Senior Living | Real Property Planning"
      description="Learn about adult family homes — smaller, home-like settings offering personalized care for seniors throughout Washington State."
      canonical="https://www.realpropertyplanning.com/senior-living/adult-family-homes"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Adult Family Homes", url: "https://www.realpropertyplanning.com/senior-living/adult-family-homes" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Senior Living</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Adult Family Homes</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Smaller, home-like settings that offer personalized care for a limited number of residents. Often a good fit for seniors who prefer a quieter, more intimate environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              Featured Providers
            </h2>

            {/* Victoria 1 AFH */}
            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center sm:flex-row sm:items-start gap-5">
                {/* Left: Headshot */}
                <div className="shrink-0">
                  <img
                    src={mariaCorbuPhoto}
                    alt="Maria Corbu — Owner of Victoria 1 AFH"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                  />
                </div>

                {/* Right: Info */}
                <div className="flex-1 text-center sm:text-left">
                  <a href="https://www.victoria1afh.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src={victoria1Logo}
                      alt="Victoria 1 AFH logo"
                      className="h-[140px] w-auto object-contain mx-auto sm:mx-0 mb-1"
                    />
                  </a>
                  <p className="text-muted-foreground text-sm mb-3">Owner: Maria Corbu</p>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">13321 31st Ave NE, Seattle, WA 98125</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+14255033808" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        (425) 503-3808
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:maria610unz@yahoo.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        maria610unz@yahoo.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="https://www.victoria1afh.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        www.victoria1afh.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/senior-living-and-relocation" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium">
                ← Back to Senior Living & Relocation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/senior-living/adult-family-homes" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AdultFamilyHomes;
