import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";

const groups = [
  {
    label: "Senior Housing & Care",
    items: [
      {
        href: "/senior-living-advisors",
        title: "Senior Living Advisors",
        description:
          "Help evaluating assisted living, memory care, and housing options.",
      },
      {
        href: "/medicare-providers",
        title: "Medicare & Benefits Advisors",
        description:
          "Navigating Medicare, Medicaid, and care funding options.",
      },
      {
        href: "/aging-life-care-managers",
        title: "Aging Life Care Managers",
        description:
          "Expert guidance and advocacy for older adults navigating care decisions.",
      },
      {
        href: "/senior-move-managers",
        title: "Senior Move Managers",
        description:
          "Professionals who coordinate and manage the physical and emotional aspects of relocating seniors.",
      },
    ],
  },
  {
    label: "Property, Legal & Financial",
    items: [
      {
        href: "/mortgage-lenders",
        title: "Mortgage Lenders",
        description:
          "Trusted mortgage professionals specializing in estate, senior transition, and residential financing.",
      },
      {
        href: "/professionals/financial-planners",
        title: "Financial Planners & Advisors",
        description:
          "Long-term financial planning for seniors, families, and estate matters.",
      },
      {
        href: "/professionals/cpas",
        title: "CPAs & Accountants",
        description:
          "Tax guidance, estate coordination, and financial planning for inherited property.",
      },
      {
        href: "/real-estate-appraiser",
        title: "Real Estate Appraisers",
        description:
          "Independent property valuation for estate, divorce, and legal matters.",
      },
      {
        href: "/realtor",
        title: "Real Estate Brokers",
        description:
          "Probate, estate, and senior transition property sales throughout Washington State.",
      },
      {
        href: "/professionals/probate-attorneys",
        title: "Probate & Estate Attorneys",
        description:
          "Attorneys who guide families and fiduciaries through the probate process and estate administration.",
      },
      {
        href: "/attorneys/for-divorce-attorneys",
        title: "Divorce Attorneys",
        description:
          "Collaborative divorce and family law with expertise in property division.",
      },
      {
        href: "/estate-liquidators",
        title: "Estate Sale Companies",
        description:
          "Companies that organize, price, and conduct estate sales for personal property and household contents.",
      },
      {
        href: "/estate-liquidators",
        title: "Estate Liquidators",
        description:
          "Companies that organize and conduct estate sales and residential clear outs.",
      },
      {
        href: "/resources/property-preparation-services",
        title: "Property Preparation Services",
        description:
          "Cleanout, staging, repair, and preparation services to get estate and transition properties market-ready.",
      },
      {
        href: "/resources/moving-relocation-services",
        title: "Moving & Relocation Services",
        description:
          "Moving companies and relocation specialists experienced with estate and senior transitions.",
      },
      {
        href: "/senior-living-advisors",
        title: "Senior Living Communities",
        description:
          "Assisted living, independent living, and memory care communities throughout Washington State.",
      },
    ],
  },
];

const Resources = () => {
  return (
    <>
      <SEOHead
        title="Resources | Real Property Planning"
        description="Trusted professionals and service providers for probate, estate, and senior transition needs throughout Washington State."
        canonical="https://realpropertyplanning.com/resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Resources", url: "https://realpropertyplanning.com/resources" },
        ]}
      />
      <Header />

      <main id="main-content">
        <HeroBandTitle>Resources</HeroBandTitle>

        {/* Category Pills */}
        <section className="py-10 md:py-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {groups.map((group) => (
                <div key={group.label}>
                  <h2 className="font-serif text-lg md:text-xl font-semibold text-navy mb-3">
                    {group.label}
                  </h2>
                  <div className="grid gap-2">
                    {group.items.map((cat) => (
                      <Link
                        key={`${group.label}-${cat.title}`}
                        to={cat.href}
                        className="group block px-4 py-1.5 md:px-5 md:py-2 rounded-md border border-border/60 bg-cream/40 hover:border-gold/60 hover:bg-cream/70 transition-colors"
                      >
                        <h3 className="font-serif text-[15px] md:text-base font-semibold text-foreground group-hover:text-navy transition-colors leading-tight">
                          {cat.title}
                        </h3>
                        <p className="text-muted-foreground text-[13px] md:text-[14px] leading-snug mt-0">
                          {cat.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resources;
