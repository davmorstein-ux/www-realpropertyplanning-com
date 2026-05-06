import { useState } from "react";
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

const professionOptions = [
  "Attorney",
  "CPA / Tax Advisor",
  "Financial Planner",
  "Senior Move Manager",
  "Senior Housing Advisor",
  "Estate Liquidator",
  "Real Estate Appraiser",
  "Lender / Financing Specialist",
  "Other",
];

const countyOptions = [
  "King",
  "Snohomish",
  "Pierce",
  "Kitsap",
  "Skagit",
  "Thurston",
  "Whatcom",
  "Clark",
  "Spokane",
  "Benton",
];

const ProfessionalSignupForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [counties, setCounties] = useState<string[]>([]);

  const toggleCounty = (county: string) => {
    setCounties((prev) =>
      prev.includes(county) ? prev.filter((c) => c !== county) : [...prev, county]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl border border-border shadow-sm p-10 md:p-14 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
          Thank You
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          Thank you for submitting your information. We review all applications and will be in touch within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Full Name *</label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Company / Business Name *</label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Profession */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Profession / Service Type *</label>
          <select
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>Select one…</option>
            {professionOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Phone Number *</label>
          <input
            type="tel"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Email Address *</label>
          <input
            type="email"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Website */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Website URL</label>
          <input
            type="url"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="https://"
          />
        </div>

        {/* Counties - full width */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-foreground font-medium text-[18px]">Counties Served *</label>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {countyOptions.map((county) => (
              <label key={county} className="flex items-center gap-2 cursor-pointer text-foreground text-base">
                <input
                  type="checkbox"
                  checked={counties.includes(county)}
                  onChange={() => toggleCounty(county)}
                  className="w-5 h-5 rounded border-border accent-[hsl(var(--gold))]"
                />
                {county}
              </label>
            ))}
          </div>
        </div>

        {/* About - full width */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-foreground font-medium text-[18px]">About You / Your Services *</label>
          <textarea
            required
            rows={4}
            placeholder="Briefly describe your background, services, and why families and executors choose to work with you."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring resize-y"
          />
        </div>

        {/* Headshot */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Headshot</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="w-full text-foreground text-base file:mr-3 file:rounded-lg file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-foreground file:font-medium file:cursor-pointer"
          />
        </div>

        {/* Company Logo */}
        <div className="flex flex-col gap-2">
          <label className="text-foreground font-medium text-[18px]">Company Logo</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="w-full text-foreground text-base file:mr-3 file:rounded-lg file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-foreground file:font-medium file:cursor-pointer"
          />
        </div>

        {/* How did you hear */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-foreground font-medium text-[18px]">How did you hear about Real Property Planning?</label>
          <input
            type="text"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button type="submit" variant="gold" size="lg" className="px-8 py-4 h-auto text-lg">
          Submit My Information
        </Button>
      </div>
    </form>
  );
};

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
      <section className="bg-primary pt-12 md:pt-16 pb-14 md:pb-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[700px] mx-auto text-center">
            <h1 className="font-serif text-[2.5rem] text-primary-foreground font-semibold leading-tight mb-6">
              The Right Team Makes All the Difference
            </h1>
            <p className="text-xl text-primary-foreground leading-relaxed">
              Navigating a probate sale, inherited home, or senior housing transition often means working with several professionals at once. This page highlights experienced specialists across Western Washington who families trust during these transitions.
            </p>
            <p className="text-xl text-primary-foreground leading-relaxed mt-4">
              Each professional listed here works in areas that commonly intersect with real estate — so families can find the right help in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Join the Real Property Planning Network
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Complete the form below to be considered as a featured service provider for families, executors, and seniors across Western Washington.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ProfessionalSignupForm />
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
