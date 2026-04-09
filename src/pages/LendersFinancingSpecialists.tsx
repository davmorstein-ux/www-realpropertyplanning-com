import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import danBartelPhoto from "@/assets/providers/dan-bartel-c2financial.png";
import c2FinancialLogo from "@/assets/providers/c2financial-logo.png";
import jeffMcGinnisPhoto from "@/assets/providers/jeff-mcginnis-crosscountry.webp";
import crossCountryLogo from "@/assets/providers/crosscountry-mortgage-logo.png";

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

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            Lenders & Financing Specialists
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Supporting Clients with Financing Options and Long-Term Planning
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Connecting clients with trusted professionals who provide clarity around financing, retirement planning, and long-term strategy.
          </p>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real estate decisions are often closely tied to financing, retirement planning, and long-term financial strategy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            In some situations, selling a home is the right decision. In others, financing solutions may provide flexibility and allow clients to remain in their home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work with trusted lending professionals who help clients explore their options clearly and without pressure.
          </p>
        </div>
      </div>
    </section>

    {/* Reverse Mortgage & Retirement Planning */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
            Reverse Mortgage & Retirement Planning
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            For seniors, reverse mortgage solutions can be part of a broader financial strategy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            These conversations should be approached carefully, with a clear understanding of both benefits and considerations.
          </p>
        </div>
      </div>
    </section>

    {/* Featured Provider — mirrors AdultFamilyHomes provider card */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            Featured Providers
          </h2>

          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img
                  src={danBartelPhoto}
                  alt="Daniel Bartel — Retirement Mortgage Specialist, C2 Financial"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                />
              </div>

              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" className="sm:self-start">
                  <img
                    src={c2FinancialLogo}
                    alt="C2 Financial logo"
                    className="h-[42px] w-auto object-contain mx-auto sm:mx-0 block"
                  />
                </a>

                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Daniel Bartel</p>
                  <p className="text-muted-foreground text-sm mb-1.5">Retirement Mortgage Specialist · Reverse Mortgage Lender · C2 Financial</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Daniel specializes in helping seniors evaluate reverse mortgage options as part of a larger retirement plan. His approach is educational and consultative — focused on helping clients understand their options so they can make informed decisions. As a Registered Social Security Analyst, he also helps clients consider how real estate and financing decisions fit into their broader retirement strategy.
                  </p>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1721 Hewitt Ave Ste. 612, Everett, WA 98201</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12063105766" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        (206) 310-5766
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:santadan@c2financial.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        santadan@c2financial.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        www.santadanmortgage.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          {/* Jeff McGinnis — CrossCountry Mortgage */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img
                  src={jeffMcGinnisPhoto}
                  alt="Jeff McGinnis — Senior Loan Officer, CrossCountry Mortgage"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                />
              </div>

              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" className="sm:self-start sm:ml-[58px]">
                  <img
                    src={crossCountryLogo}
                    alt="CrossCountry Mortgage logo"
                    className="h-[120px] w-auto object-contain mx-auto sm:mx-0 block scale-[2.5] origin-left sm:-ml-[36px] sm:-mt-[16px]"
                  />
                </a>

                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Jeff McGinnis</p>
                  <p className="text-muted-foreground text-sm mb-1.5">Senior Loan Officer · CrossCountry Mortgage</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    I'm a seasoned mortgage lending professional with over 25 years of experience in the industry. I have a proven track record of success and am known as one of the top producers in my field. With a deep understanding of the lending landscape and a passion for helping clients achieve their homeownership goals, I've established myself as a trusted and knowledgeable resource for borrowers.
                  </p>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1000 Dexter Ave N, Suite 310, Seattle, WA 98109</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href="tel:+12062835626" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        (206) 283-5626
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a href="mailto:jejj.mcginnis@ccm.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        jejj.mcginnis@ccm.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Globe className="w-4 h-4 text-accent shrink-0" />
                      <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        crosscountrymortgage.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* How This Fits In */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            How This Fits Into the Bigger Picture
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every client's situation is different.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Some choose to sell. Others explore financing options. Some do both as part of a long-term plan.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The goal is to provide clarity — not push a specific path.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If you're exploring whether selling, staying, or financing options make the most sense, I'm happy to help you evaluate your situation and connect you with the right professionals.
          </p>
          <Link to="/contact">
 <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/lenders-and-financing-specialists" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default LendersFinancingSpecialists;
