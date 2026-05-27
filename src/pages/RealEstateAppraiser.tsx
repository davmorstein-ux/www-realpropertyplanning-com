import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import steinAppraisalLogo from "@/assets/stein-appraisal-appraiser-logo-washington.webp";

const featuredAppraisers = [
  {
    name: "David Stein",
    title: "Certified Residential Appraiser",
    company: "Stein Appraisal",
    specialty:
      "Estate and date-of-death appraisals, divorce and litigation support, retrospective valuations, and residential appraisals for attorneys, executors, homeowners, and investors throughout the Puget Sound region.",
    photo: davidSteinPhoto,
    alt: "Photo of David Stein",
    href: "https://realpropertyplanning.com/real-estate-appraiser",
    logo: steinAppraisalLogo,
    logoAlt: "Stein Appraisal logo",
  },
];

const RealEstateAppraiser = () => (
  <>
    <SEOHead
      title="Real Estate Appraisers in Washington State"
      description="Washington State Certified Residential Appraisers. Estate, probate, and senior transition appraisals accepted by courts, lenders, and the IRS."
      canonical="https://realpropertyplanning.com/real-estate-appraiser"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Real Estate Appraisers", url: "https://realpropertyplanning.com/real-estate-appraiser" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle>Real Estate Appraisers</HeroBandTitle>

      {/* Featured tiles */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {featuredAppraisers.map((m) => (
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
                      {m.logo && (
                        <img
                          src={m.logo}
                          alt={m.logoAlt || `${m.company} logo`}
                          className="h-12 w-auto max-w-[180px] object-contain mb-4"
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
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Real Estate Appraisers Do
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              A certified real estate appraiser provides an objective, defensible opinion of a property's value, backed by formal methodology and local market data. Their reports are accepted by courts, lenders, and the IRS — and are often required in probate, estate settlement, divorce, tax appeals, and senior housing decisions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Unlike a broker's price opinion, a certified appraisal is built on structured analysis and documented evidence. For families, executors, trustees, and attorneys, that difference can be what prevents a dispute, protects a fiduciary, or keeps a transaction on track.
            </p>
          </div>
        </div>
      </section>

      <BackToProfessionalsButton />
    </main>
    <Footer />
  </>
);

export default RealEstateAppraiser;
