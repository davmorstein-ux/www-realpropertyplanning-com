import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import dominikPhoto from "@/assets/dominik-musafia-divorce-attorney-seattle.avif";
import seattleDivorceLogo from "@/assets/seattle-divorce-options-logo.avif";

interface Attorney {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  href: string;
  specialty: string;
  phone?: string;
  email?: string;
  logo?: string;
  logoAlt?: string;
}

const attorneys: Attorney[] = [
  {
    name: "Dominik Musafia",
    title: "Divorce & Family Law Attorney",
    company: "Seattle Divorce Options, PLLC",
    photo: dominikPhoto,
    alt: "Photo of Dominik Musafia",
    href: "https://www.seattledivorceoptions.com",
    specialty: "Collaborative divorce and family law, with additional expertise in business and real property matters",
    logo: seattleDivorceLogo,
    logoAlt: "Seattle Divorce Options logo",
  },
];


const ForDivorceAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Divorce Attorneys in Washington State | Real Property Planning"
      description="A divorce attorney helps individuals and couples navigate the legal process of ending a marriage, including asset division and real property matters."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Divorce Attorneys", url: "/for-divorce-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <HeroBandTitle compact>Divorce Attorney</HeroBandTitle>
      </section>

      {/* Featured Attorneys */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {attorneys.map((a) => (
              <a
                key={a.name}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${a.name}, ${a.title} at ${a.company} — Learn more`}
                className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col items-center text-center p-6">
                      <img
                        src={a.photo}
                        alt={a.alt}
                        className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                        loading="lazy"
                      />
                      <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                        {a.name}
                      </h2>
                      <p className="text-foreground text-sm mb-1">{a.title}</p>
                      <p className="text-foreground text-sm font-semibold mb-3">{a.company}</p>
                      {a.logo && (
                        <img
                          src={a.logo}
                          alt={a.logoAlt || `${a.company} logo`}
                          className="h-12 w-auto max-w-[180px] object-contain mb-4"
                          loading="lazy"
                        />
                      )}
                      <p className="text-muted-foreground text-sm italic mb-5">{a.specialty}</p>

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

      <p className="attorney-role-description">
        A divorce attorney helps individuals and couples navigate the legal process of ending a marriage. They handle asset division, spousal support, parenting plans, and court filings. When the family home or other real property is involved, a divorce attorney works to ensure it is fairly addressed as part of the overall settlement.
      </p>

      <div className="flex justify-center my-8">
        <Link to="/professionals/attorneys">
          <Button variant="gold" size="lg">Back to Attorneys</Button>
        </Link>
      </div>

      <BackToProfessionalsButton />
      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default ForDivorceAttorneys;
