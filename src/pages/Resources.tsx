import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Link } from "react-router-dom";

const categories = [
  {
    href: "/senior-move-managers",
    title: "Senior Move Managers",
    description:
      "Professionals who coordinate and manage the physical and emotional aspects of relocating seniors.",
  },
  {
    href: "/estate-liquidators",
    title: "Estate Sale Companies",
    description:
      "Companies that organize, price, and conduct estate sales for personal property and household contents.",
  },
  {
    href: "/professionals/probate-attorneys",
    title: "Probate & Estate Attorneys",
    description:
      "Attorneys who guide families and fiduciaries through the probate process and estate administration.",
  },
  {
    href: "/professionals/cpas",
    title: "CPAs & Financial Advisors",
    description:
      "Tax and financial professionals who help with estate tax, capital gains, and financial planning related to inherited property.",
  },
  {
    href: "/senior-living-advisors",
    title: "Senior Living Communities",
    description:
      "Assisted living, independent living, and memory care communities throughout Washington State.",
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
        {/* Hero */}
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Trusted Partners
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
                Resources
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Resources and service connections for property preparation, senior transitions, and estate-related real estate needs throughout Washington State, with particularly strong familiarity in Western Washington.
              </p>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="py-10 md:py-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="group block px-4 py-1.5 md:px-5 md:py-2 rounded-md border border-border/60 bg-cream/40 hover:border-gold/60 hover:bg-cream/70 transition-colors"
                >
                  <h2 className="font-serif text-[15px] md:text-base font-semibold text-foreground group-hover:text-navy transition-colors leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-muted-foreground text-[13px] md:text-[14px] leading-snug mt-0">
                    {cat.description}
                  </p>
                </Link>
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
