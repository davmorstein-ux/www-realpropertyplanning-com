import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

const featuredBrokers = [
  {
    name: "David Stein",
    title: "President, Real Property Planning",
    company: "eXp Realty",
    specialty:
      "Probate, estate, and trust property sales across Washington State — working with executors, trustees, and families navigating inherited real estate. Also handles residential and investment property sales throughout the Puget Sound region, including single family homes, multi-family, condominiums, investment properties, new construction, mobile homes, houseboats, floating homes, and vacant land.",
    photo: davidSteinPhoto,
    alt: "Photo of David Stein",
    href: "https://davestein.exprealty.com",
    phone: "(206) 900-3015",
    email: "dave.stein@exprealty.com",
    logo: expRealtyLogo,
    logoAlt: "eXp Realty logo",
  },
];

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

      {/* Featured tiles */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {featuredBrokers.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name}, ${m.title} at ${m.company} — Learn more`}
                className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={m.photo}
                        alt={m.alt}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                        loading="lazy"
                      />
                      <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                        {m.name}
                      </h3>
                      <p className="text-foreground text-sm mb-1">{m.title}</p>
                      <p className="text-foreground text-sm font-semibold mb-4">{m.company}</p>
                      <ProviderContact phone={m.phone} email={m.email} />
                      {m.logo && (
                        <img
                          src={m.logo}
                          alt={m.logoAlt || `${m.company} logo`}
                          className="h-24 w-auto max-w-[360px] object-contain mb-4"
                          loading="lazy"
                        />
                      )}
                      {m.specialty && (
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                          {m.specialty}
                        </p>
                      )}

                      <span className="gold-cta mt-auto">
                        Learn More
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Explanatory content */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              David Stein is a Washington State licensed real estate broker specializing in probate, estate, and trust property sales across the Puget Sound region. With over 20 years of experience, he works with executors, personal representatives, trustees, and agents under power of attorney navigating the sale of inherited and estate-owned real property — bringing calm, practical guidance to one of the most complex transactions a family can face. His property experience spans single family homes, multi-family properties, condominiums, investment properties, new construction, renovations, mobile homes, manufactured homes, houseboats, floating homes, and vacant land throughout Western Washington. As a broker with eXp Realty — the largest independent real estate brokerage in the world with over 83,000 agents across 28 countries — David combines deep local knowledge with a powerful nationwide network.
            </p>
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
