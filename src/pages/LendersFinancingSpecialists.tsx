import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import lendersIcon from "@/assets/icons/real-estate-lenders-3d-icon-washington.webp";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import c2FinancialLogo from "@/assets/providers/real-estate-lenders-c2financial-logo-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import crossCountryLogo from "@/assets/providers/real-estate-lenders-crosscountry-logo-washington.webp";
import hansWestermarkPhoto from "@/assets/providers/real-estate-lenders-hans-westermark-washington.webp";
import familyFirstLogo from "@/assets/providers/real-estate-lenders-family-first-mortgage-logo-washington.webp";
import equalHousingIcon from "@/assets/providers/equal-housing-lender-icon-washington.webp";
import CTASection from "@/components/CTASection";

const LendersFinancingSpecialists = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Lenders & Financing Specialists | Real Property Planning"
      description="Supporting clients with financing options and long-term planning. Connect with trusted lending professionals who help you explore reverse mortgage and retirement strategies."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Professionals", url: "/for-professionals" },
        { name: "Lenders & Financing Specialists", url: "/lenders-and-financing-specialists" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero — Icon + faded intro */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={lendersIcon}
            alt="Lenders & Financing"
            className="block w-full max-w-[15rem] h-auto mx-auto mb-3 md:mb-4"
           loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            Mortgage Lending
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-5">
            Supporting Clients with Financing Options and Long-Term Planning
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3" style={{ color: '#e5e7eb', opacity: 1 }}>
            Connecting clients with trusted professionals who provide clarity around financing, retirement planning, and long-term strategy.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/retirement-reverse-mortgage" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Lenders & Financing →
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Providers */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            Featured Providers
          </h2>

          {/* Dan Bartel */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img src={danBartelPhoto} alt="Photo of Daniel Bartel" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"  loading="lazy"/>
              </div>
              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" className="sm:self-start sm:ml-[58px]">
                  <img src={c2FinancialLogo} alt="C2 Financial logo" className="h-[84px] w-auto object-contain mx-auto sm:mx-0 block"  loading="lazy"/>
                </a>
                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Daniel Bartel <span className="text-muted-foreground text-sm font-normal">· NMLS 110735</span></p>
                  <p className="text-muted-foreground text-sm mb-1.5">Retirement Mortgage Specialist · Reverse Mortgage Lender · C2 Financial</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Daniel specializes in helping seniors evaluate reverse mortgage options as part of a larger retirement plan. His approach is educational and consultative — focused on helping clients understand their options so they can make informed decisions. As a Registered Social Security Analyst, he also helps clients consider how real estate and financing decisions fit into their broader retirement strategy.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1721 Hewitt Ave Ste. 612, Everett, WA 98201</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start pl-6">
                      <span className="text-muted-foreground">NMLS 135622</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12063105766" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 310-5766</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:santadan@c2financial.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">santadan@c2financial.com</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Daniel Bartel's website at santadanmortgage.com" className="text-accent hover:text-gold underline-offset-4 hover:underline">www.santadanmortgage.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jeff McGinnis */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img src={jeffMcGinnisPhoto} alt="Photo of Jeff McGinnis" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"  loading="lazy"/>
              </div>
              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" className="sm:self-start sm:ml-[58px]">
                  <img src={crossCountryLogo} alt="CrossCountry Mortgage logo" className="h-[180px] w-auto object-contain mx-auto sm:mx-0 block scale-[2.5] origin-left sm:-ml-[36px] sm:-mt-[16px]"  loading="lazy"/>
                </a>
                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Jeff McGinnis <span className="text-muted-foreground text-sm font-normal">· NMLS 279369</span></p>
                  <p className="text-muted-foreground text-sm mb-1.5">Senior Loan Officer · CrossCountry Mortgage</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    I'm a seasoned mortgage lending professional with over 25 years of experience in the industry. I have a proven track record of success and am known as one of the top producers in my field. With a deep understanding of the lending landscape and a passion for helping clients achieve their homeownership goals, I've established myself as a trusted and knowledgeable resource for borrowers.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1000 Dexter Ave N, Suite 310, Seattle, WA 98109</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start pl-6">
                      <span className="text-muted-foreground">NMLS 1958276</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12062835626" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 283-5626</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:jejj.mcginnis@ccm.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">jejj.mcginnis@ccm.com</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" aria-label="Visit Jeff McGinnis's profile at crosscountrymortgage.com" className="text-accent hover:text-gold underline-offset-4 hover:underline">crosscountrymortgage.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hans Westermark */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img src={hansWestermarkPhoto} alt="Photo of Hans Westermark" className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm" loading="lazy"/>
              </div>
              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="https://www.familyfirstmortgagegroup.com/loan-officer/hans-westermark" target="_blank" rel="noopener noreferrer" className="sm:self-start sm:ml-[58px]">
                  <img src={familyFirstLogo} alt="Family First Mortgage logo" className="h-[126px] w-auto object-contain mx-auto sm:mx-0 block" loading="lazy"/>
                </a>
                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Hans Westermark</p>
                  <p className="text-muted-foreground text-sm mb-1.5">President of Family First Mortgage · Senior Loan Officer · NMLS 1053094</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Hans Westermark is an experienced mortgage advisor specializing in home loans, refinancing, and real estate transitions. With a background in finance, accounting, and homebuilding, he brings a well-rounded perspective to helping clients make confident, informed decisions—especially during major life changes such as downsizing, relocating, or planning for retirement. Hans takes a consultative, client-first approach, focusing on understanding each individual's goals and providing tailored mortgage solutions that support both immediate needs and long-term financial stability. He is known for simplifying complex loan options, offering clear guidance, and creating a smooth, approachable experience. Through Family First Mortgage, Hans provides access to a wide range of loan programs, allowing him to deliver flexible financing strategies designed around each client's unique situation. His clients value his expertise, transparency, and commitment to helping them move forward with clarity and confidence.
                  </p>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">20806 Bothell Everett Hwy, Suite 102, Bothell, WA 98021</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12063909915" className="text-accent hover:text-gold underline-offset-4 hover:underline">(206) 390-9915</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:Hans.Westermark@famfirstmtg.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">Hans.Westermark@famfirstmtg.com</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="https://www.familyfirstmortgagegroup.com/loan-officer/hans-westermark" target="_blank" rel="noopener noreferrer" aria-label="Visit Hans Westermark's website at familyfirstmortgagegroup.com" className="text-accent hover:text-gold underline-offset-4 hover:underline">familyfirstmortgagegroup.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4 justify-center sm:justify-start">
                    <img src={equalHousingIcon} alt="Equal Housing Lender" className="h-8 w-auto object-contain opacity-70" loading="lazy"/>
                    <span className="text-muted-foreground text-xs">Family First Mortgage LLC · NMLS 2546884</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
    <RelatedServices currentPath="/lenders-and-financing-specialists" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default LendersFinancingSpecialists;
