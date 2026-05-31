import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import BackToProfessionals from "@/components/BackToProfessionals";

import iconProbate from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import iconEstatePlanning from "@/assets/icons/attorney-estate-planning-icon-washington.webp";
import iconElderLaw from "@/assets/icons/attorney-elder-law-icon-washington.webp";
import iconRealEstate from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";
import iconFamilyLaw from "@/assets/icons/attorney-family-law-property-icon-washington.webp";
import iconDivorce from "@/assets/icons/attorney-divorce-property-icon-washington.webp";

const attorneys = [
  {
    icon: iconProbate,
    title: "Probate Attorney",
    description: "Guides families, executors, and trustees through the legal process of settling an estate in Washington State.",
    href: "/resources/probate-estate-attorneys",
  },
  {
    icon: iconEstatePlanning,
    title: "Estate Planning Attorney",
    description: "Helps individuals and families create wills, trusts, and powers of attorney to protect assets and loved ones.",
    href: "/estate-planning-powers-of-attorney",
  },
  {
    icon: iconElderLaw,
    title: "Elder Law Attorney",
    description: "Specializes in legal issues affecting older adults — Medicaid planning, long-term care, guardianship, and incapacity.",
    href: "/attorneys/for-elder-law-attorneys",
  },
  {
    icon: iconRealEstate,
    title: "Real Estate Attorney",
    description: "Advises on property transactions, title issues, contracts, and disputes involving residential real estate.",
    href: "/attorneys/for-real-estate-attorney",
  },
  {
    icon: iconFamilyLaw,
    title: "Family Law Attorney",
    description: "Handles family-related legal matters including custody, support, marital agreements, and property division.",
    href: "/attorneys/for-family-law-attorneys",
  },
  {
    icon: iconDivorce,
    title: "Divorce Attorney",
    description: "Represents individuals through divorce proceedings, asset division, and post-divorce property transitions.",
    href: "/for-divorce-attorneys",
  },
];

const Attorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Legal Professionals | Attorneys Directory | Real Property Planning"
      description="Find experienced probate, estate planning, elder law, real estate, family law, and divorce attorneys serving Washington families."
      canonical="https://realpropertyplanning.com/professionals/attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Professionals", url: "https://realpropertyplanning.com/professionals" },
        { name: "Attorneys", url: "https://realpropertyplanning.com/professionals/attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14" />
        <HeroBandTitle compact>Legal Professionals</HeroBandTitle>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {attorneys.map((a) => (
              <div
                key={a.title}
                className="bg-card rounded-2xl border border-border shadow-sm p-8 flex flex-col"
              >
                <img
                  src={a.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 object-contain mb-5"
                  loading="lazy"
                />
                <h2 className="font-serif text-[1.375rem] font-semibold text-foreground mb-2">
                  {a.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 flex-1">
                  {a.description}
                </p>
                <Link to={a.href} className="mt-auto no-underline">
                  <span className="gold-cta">
                    Learn More
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <BackToProfessionals />
        </div>
      </section>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default Attorneys;
