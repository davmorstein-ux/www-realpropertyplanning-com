import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import hansWestermarkPhoto from "@/assets/providers/real-estate-lenders-hans-westermark-washington.webp";
import c2FinancialLogo from "@/assets/providers/real-estate-lenders-c2financial-logo-washington.webp";
import crossCountryLogo from "@/assets/providers/real-estate-lenders-crosscountry-logo-washington.webp";
import familyFirstLogo from "@/assets/providers/real-estate-lenders-family-first-mortgage-logo-washington.webp";


interface Lender {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  href: string;
  specialty: string;
  logo?: string;
  logoAlt?: string;
}

const lenders: Lender[] = [
  {

    name: "Daniel Bartel",
    title: "Retirement Mortgage Specialist · Reverse Mortgage Lender",
    company: "C2 Financial",
    photo: danBartelPhoto,
    alt: "Photo of Daniel Bartel",
    href: "https://www.santadanmortgage.com",
    specialty: "Reverse mortgages and retirement planning for seniors",
    logo: c2FinancialLogo,
    logoAlt: "C2 Financial logo",
  },
  {
    name: "Jeff McGinnis",
    title: "Senior Loan Officer",
    company: "CrossCountry Mortgage",
    photo: jeffMcGinnisPhoto,
    alt: "Photo of Jeff McGinnis",
    href: "https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/",
    specialty: "25+ years of mortgage lending experience",
    logo: crossCountryLogo,
    logoAlt: "CrossCountry Mortgage logo",
  },
  {
    name: "Hans Westermark",
    title: "President & Senior Loan Officer",
    company: "Family First Mortgage",
    photo: hansWestermarkPhoto,
    alt: "Photo of Hans Westermark",
    href: "https://www.familyfirstmortgagegroup.com/loan-officer/hans-westermark",
    specialty: "Home loans, refinancing, and real estate transitions",
    logo: familyFirstLogo,
    logoAlt: "Family First Mortgage logo",
  },

];

const MortgageLenders = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Mortgage Lenders | Real Property Planning"
      description="Featured Washington State mortgage lenders supporting families with reverse mortgages, retirement financing, and home loans."
    />
    <BreadcrumbSchema items={[{ name: "Mortgage Lenders", url: "/mortgage-lenders" }]} />
    <Header />
    <main id="main-content">
      <section className="bg-primary py-12 md:py-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-5">
              Featured Mortgage Lenders
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#e5e7eb" }}>
              
            </p>
          </div>
        </div>
      </section>

      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {lenders.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.name}, ${l.title} at ${l.company} — Learn more`}
                className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={l.photo}
                        alt={l.alt}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                        loading="lazy"
                      />
                      <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                        {l.name}
                      </h2>
                      <p className="text-foreground text-sm mb-1">{l.title}</p>
                      <p className="text-foreground text-sm font-semibold mb-3">{l.company}</p>
                      {l.logo && (
                        <img
                          src={l.logo}
                          alt={l.logoAlt || `${l.company} logo`}
                          className="h-12 w-auto max-w-[180px] object-contain mb-4"
                          loading="lazy"
                        />
                      )}
                      <p className="text-muted-foreground text-sm italic mb-5">{l.specialty}</p>

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

      <BackToProfessionalsButton />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default MortgageLenders;
