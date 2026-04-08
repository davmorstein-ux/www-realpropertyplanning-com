import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";
import { Phone, Mail } from "lucide-react";

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

      {/* Featured Realtor */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              Featured Realtor
            </h2>

            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                {/* Headshot placeholder area */}
                <div className="shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-muted border-2 border-border shadow-sm flex items-center justify-center">
                    <span className="text-muted-foreground text-xs text-center px-2">Photo</span>
                  </div>
                </div>

                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <AgentCredentialBlock />

                  <div className="w-full mt-3 text-center sm:text-left">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Specializing in senior transitions, probate and estate property sales, and trust-held real estate throughout Washington State. Combining real estate brokerage with certified residential appraisal experience to provide families, executors, and professionals with informed, reliable property guidance.
                    </p>

                    <div className="space-y-1.5 text-sm">
                      <a href="tel:+12533879070" className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4 text-gold-dark shrink-0" />
                        <span>(253) 387-9070</span>
                      </a>
                      <a href="mailto:david@realpropertyplanning.com" className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-primary transition-colors">
                        <Mail className="h-4 w-4 text-gold-dark shrink-0" />
                        <span>david@realpropertyplanning.com</span>
                      </a>
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
      <CTASection
        title="Ready to Discuss Your Property?"
        subtitle="Whether you're planning ahead or navigating a transition now, a conversation is always a good first step."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
    <Footer />
  </>
);

export default Realtor;
