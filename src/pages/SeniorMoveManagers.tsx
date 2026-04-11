import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ericRovnerPhoto from "@/assets/providers/eric-rovner-hbmovemanagement.png";
import hbmmLogo from "@/assets/providers/hbmovemanagement-logo.png";
import iconSeniorMoves from "@/assets/icons/icon-senior-moves.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const SeniorMoveManagers = () => (
  <>
    <SEOHead
      title="Senior Move Managers | Real Property Planning"
      description="Senior Move Managers help older adults and families with downsizing, sorting, packing, organizing, move coordination, unpacking, and settling into a new home throughout Washington State."
      canonical="https://www.realpropertyplanning.com/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Move Managers", url: "https://www.realpropertyplanning.com/senior-move-managers" },
      ]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8 md:mb-10">
              <img src={iconSeniorMoves} alt="Senior Move Managers" className="block w-full max-w-[23rem] h-auto object-contain"  loading="lazy"/>
            </div>
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              Senior Transitions
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
              Senior Move Managers
            </h1>
            <p className="text-muted-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
              Practical, compassionate help for older adults and families preparing to downsize, organize, pack, relocate, or settle into a new home.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Senior Move Manager */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
              Featured Senior Move Manager
            </h2>
            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img src={ericRovnerPhoto} alt="Eric Rovner — HB Move Management" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"  loading="lazy"/>
                </div>
                <div className="w-full flex flex-col items-center sm:flex-1 sm:items-start">
                  <div className="w-full mt-1 text-center sm:text-left">
                    <a href="https://www.hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src={hbmmLogo} alt="HB Move Management logo" className="h-[240px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[70px] block"  loading="lazy"/>
                    </a>
                    <p className="text-foreground font-semibold text-base">Eric Rovner</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Vice President of Marketing</p>
                    <p className="text-muted-foreground text-sm mb-1.5">HB Move Management · Hansen Bros. Moving</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      HB Move Management is a proud division of Hansen Bros. Moving &amp; Storage, one of the oldest and most respected service providers in the Puget Sound region. Their services go far beyond traditional moving — helping people prepare, survive the move, and get settled in their new home.
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2 justify-center sm:justify-start">
                        <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">10750 Aurora Ave N, Seattle, WA 98133</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <a href="tel:+12062574314" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 257-4314</a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a href="mailto:info@hbmovemanagement.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">info@hbmovemanagement.com</a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Globe className="w-4 h-4 text-accent shrink-0" />
                        <a href="https://www.hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">www.hbmovemanagement.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More information link */}
      <section className="py-6 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/senior-move-managers/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              More information about Senior Move Managers →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagers;
