import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import { Phone, Mail, Globe } from "lucide-react";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import expRealtyLogo from "@/assets/providers/exp-realty-logo-large.png";
import ehoLogo from "@/assets/providers/equal-housing-opportunity.png";

const Realtor = () => (
  <>
    <SEOHead
      title="Realtor | Real Property Planning"
      description="Experienced real estate guidance for seniors, families, executors, and professionals navigating important property decisions in Washington State."
      canonical="https://www.realpropertyplanning.com/realtor"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Realtor", url: "https://www.realpropertyplanning.com/realtor" },
      ]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Real Estate</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Realtor</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Experienced real estate representation and guidance for seniors, families, executors, trustees, and professionals navigating important property decisions throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">How I Help</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Navigating a property decision during a life transition requires more than a standard real estate transaction. Whether you're selling a family home after a loss, helping a parent move into care, or managing inherited property from out of state, the process calls for patience, experience, and coordination.
            </p>
            <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-gold-dark mt-1">✦</span>
                <span>Pricing strategy grounded in certified appraisal experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-dark mt-1">✦</span>
                <span>Property preparation and clean-out coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-dark mt-1">✦</span>
                <span>Support for out-of-state families managing property remotely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-dark mt-1">✦</span>
                <span>Coordination with attorneys, CPAs, and fiduciaries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-dark mt-1">✦</span>
                <span>Guidance through probate, trust, and estate property sales</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Realtor — Maria Corbu layout */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8 text-lime-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              Featured Realtor
            </h2>

            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img
                    src={davidSteinPhoto}
                    alt="David Stein — Real Estate Broker, Real Property Planning"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                  />
                </div>

                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img
                      src={expRealtyLogo}
                      alt="eXp Realty logo"
                      className="h-[120px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[10px] block"
                    />
                  </a>

                  <div className="w-full mt-1 text-center sm:text-left">
                    <p className="text-foreground font-semibold text-base">David Stein</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Real Estate Broker</p>
                    <p className="text-muted-foreground text-sm mb-1.5">Real Property Planning</p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Specializing in senior transitions, probate and estate property sales, and trust-held real estate throughout Washington State. Combining real estate brokerage with certified residential appraisal experience to provide families, executors, and professionals with informed, reliable property guidance.
                    </p>

                    <div className="text-muted-foreground text-xs leading-relaxed mb-3 space-y-0.5">
                      <p>Real Estate Broker — License #113972</p>
                      <p>WA Certified Residential Appraiser — #1702080</p>
                    </div>

                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <a href="tel:+12069003015" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                          (206) 900-3015
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a href="mailto:david@realpropertyplanning.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                          david@realpropertyplanning.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Globe className="w-4 h-4 text-accent shrink-0" />
                        <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                          davestein.exprealty.com
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-foreground font-semibold text-xs uppercase tracking-widest mb-2">Proud member of the:</p>
                      <ul className="space-y-1 text-[#1c825e] text-sm">
                        <li>ALCA — Aging Life Care Association</li>
                        <li>NAOSA — National Association of Senior Advocates</li>
                        <li>NAEPC — National Association of Estate Planners &amp; Councils</li>
                        <li>NAR — National Association of Realtors®</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                      <img
                        src={ehoLogo}
                        alt="Equal Housing Opportunity"
                        className="h-10 w-auto object-contain opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">Who This Helps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Seniors transitioning to a new living situation",
                "Families helping aging parents with property decisions",
                "Executors managing estate property sales",
                "Trustees overseeing trust-held real estate",
                "Out-of-state owners managing Washington property",
                "Professionals needing a trusted real estate resource",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                  <span className="text-gold-dark mt-0.5 shrink-0">✦</span>
                  <span className="text-foreground text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Realtor;
