import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

const Realtor = () => (
  <>
    <SEOHead
      title="Real Estate Broker | Real Property Planning"
      description="Washington State licensed real estate broker serving the Puget Sound region — residential, multi-family, investment, and specialty properties."
      canonical="https://realpropertyplanning.com/realtor"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Real Estate Broker", url: "https://realpropertyplanning.com/realtor" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle>Real Estate Broker</HeroBandTitle>

      {/* Featured provider */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ProviderTile
              name="David Stein"
              title="President, Real Property Planning"
              company="eXp Realty"
              photo={davidSteinPhoto}
              photoAlt="Photo of David Stein"
              logo={expRealtyLogo}
              logoAlt="eXp Realty logo"
              phone="(206) 900-3015"
              email="dave.stein@exprealty.com"
              website="https://davestein.exprealty.com"
              specialty="Probate, estate, and trust property sales across Washington State — working with executors, trustees, and families navigating inherited real estate."
              bio="David Stein is a Washington State licensed real estate broker specializing in probate, estate, and trust property sales across the Puget Sound region. With over 20 years of experience, he works with executors, personal representatives, trustees, and agents under power of attorney navigating the sale of inherited and estate-owned real property — bringing calm, practical guidance to one of the most complex transactions a family can face. His property experience spans single family homes, multi-family properties, condominiums, investment properties, new construction, renovations, mobile homes, manufactured homes, houseboats, floating homes, and vacant land throughout Western Washington. As a broker with eXp Realty — the largest independent real estate brokerage in the world with over 83,000 agents across 28 countries — David combines deep local knowledge with a powerful nationwide network."
            />
          </div>
        </div>
      </section>

      {/* Explanatory content */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-muted-foreground text-base leading-relaxed mb-5 space-y-1">
              <p>Washington State Licensed Real Estate Broker — David Stein's real estate license is held under eXp Realty</p>
              <p>Washington State Certified Residential Appraiser — Stein Appraisal</p>
              <p>Real Estate License #113972</p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-2">Proud Member of the:</p>
              <ul className="text-muted-foreground text-base leading-relaxed list-disc pl-6 space-y-1">
                <li>ALCA — Aging Life Care Association</li>
                <li>NAOSA — National Association of Senior Advocates</li>
                <li>NAEPC — National Association of Estate Planners &amp; Councils</li>
                <li>NAR — National Association of Realtors®</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BackToProfessionalsButton />
    </main>
    <Footer />
  </>
);

export default Realtor;