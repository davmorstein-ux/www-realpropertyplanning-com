import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";

import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconSeniorLiving from "@/assets/icons/senior-living-placement-icon-washington.webp";
import iconFinancialPlanning from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import iconEstateLiquidation from "@/assets/icons/estate-liquidation-services-icon-washington.webp";
import iconHome3d from "@/assets/icons/probate-property-home-icon-washington.webp";
import iconPeople3d from "@/assets/icons/real-estate-people-team-icon-washington.webp";

const categories = [
  {
    icon: iconAttorneys,
    title: "Probate & Estate Attorneys",
    description: "Legal guidance for executors, trustees, and families settling an estate or navigating probate court.",
    href: "/professionals/probate-attorneys",
  },
  {
    icon: iconSeniorLiving,
    title: "Senior Housing Advisors",
    description: "Helping older adults and families find assisted living, memory care, and independent living options across the Puget Sound.",
    href: "/professionals/senior-housing-advisors",
  },
  {
    icon: iconFinancialPlanning,
    title: "Financial Planners & Advisors",
    description: "Guidance on inherited assets, estate tax planning, and managing financial decisions during a transition.",
    href: "/professionals/financial-planners",
  },
  {
    icon: iconEstateLiquidation,
    title: "Estate Sale & Personal Property",
    description: "Specialists who help families sort, value, and sell personal belongings from an estate.",
    href: "/professionals/estate-sale",
  },
  {
    icon: iconHome3d,
    title: "Home Preparation & Staging",
    description: "Contractors, cleaners, and stagers who prepare inherited or longtime homes for a successful sale.",
    href: "/professionals/home-preparation",
  },
  {
    icon: iconPeople3d,
    title: "Care Managers & Social Workers",
    description: "Professionals who coordinate care, assess needs, and support families navigating elder care decisions.",
    href: "/professionals/care-managers",
  },
];

const Professionals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Find a Professional | Real Property Planning | Western Washington"
        description="A resource for families navigating estate settlement, inherited homes, and senior transitions — find trusted probate attorneys, senior housing advisors, financial planners, and more across the Puget Sound region."
      />
      <BreadcrumbSchema items={[{ name: "Professionals", url: "/professionals" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[700px] mx-auto text-center">
            <h1 className="font-serif text-[2.5rem] text-primary-foreground font-semibold leading-tight mb-6">
              The Right Team Makes All the Difference
            </h1>
            <p className="text-xl text-primary-foreground/75 leading-relaxed">
              Navigating a probate sale, inherited home, or senior housing transition often means working with several professionals at once. This page highlights experienced specialists across Western Washington who families trust during these transitions.
            </p>
            <p className="text-xl text-primary-foreground/75 leading-relaxed mt-4">
              Each professional listed here works in areas that commonly intersect with real estate — so families can find the right help in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-card rounded-2xl border border-border shadow-sm p-8 flex flex-col"
              >
                <img
                  src={cat.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 object-contain mb-5"
                  loading="lazy"
                />
                <h2 className="font-serif text-[1.375rem] font-semibold text-foreground mb-2">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-1">
                  {cat.description}
                </p>
                <Link to={cat.href}>
                  <Button variant="gold" className="w-full">
                    See Professionals
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Know a Professional CTA */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Know a Professional Who Should Be Listed?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We welcome referrals from trusted professionals serving families across Western Washington.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Professionals;
