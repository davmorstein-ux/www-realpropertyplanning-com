import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import ResourceDownloadCard from "@/components/ResourceDownloadCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    href: "/resources/senior-move-managers",
    title: "Senior Move Managers",
    description:
      "Professionals who coordinate and manage the physical and emotional aspects of relocating seniors.",
  },
  {
    href: "/resources/estate-sale-companies",
    title: "Estate Sale Companies",
    description:
      "Companies that organize, price, and conduct estate sales for personal property and household contents.",
  },
  {
    href: "/resources/probate-estate-attorneys",
    title: "Probate & Estate Attorneys",
    description:
      "Attorneys who guide families and fiduciaries through the probate process and estate administration.",
  },
  {
    href: "/resources/cpas-financial-advisors",
    title: "CPAs & Financial Advisors",
    description:
      "Tax and financial professionals who help with estate tax, capital gains, and financial planning related to inherited property.",
  },
  {
    href: "/resources/senior-living-communities",
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
  {
    href: "/lenders-and-financing-specialists",
    title: "Lenders & Financing Specialists",
    description:
      "Trusted lending professionals who help clients explore reverse mortgage, retirement financing, and long-term planning options.",
  },
];

const Resources = () => {
  return (
    <>
      <SEOHead
        title="Resources | Real Property Planning"
        description="Trusted professionals and service providers for probate, estate, and senior transition needs throughout Washington State."
        canonical="https://www.realpropertyplanning.com/resources"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Trusted Partners
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
                Resources
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Resources and service connections for property preparation, senior transitions, and estate-related real estate needs throughout Washington State, with particularly strong familiarity in Western Washington.
              </p>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid gap-4 md:gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="card-3d group flex items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6"
                >
                  <div>
                    <h2 className="font-serif text-lg md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                      {cat.title}
                    </h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-gold shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadable Guides */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Downloadable Guides
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Practical Checklists and Decision Guides
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl">
                Free resources designed for executors, heirs, trustees, families, and professionals navigating property transitions in Washington State.
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                <ResourceDownloadCard
                  title="Inherited House Decision Guide"
                  description="A structured framework for heirs deciding whether to sell, keep, rent, or buy out co-inheritors — with key financial and legal considerations."
                  audience="Heirs, beneficiaries, co-inheritors"
                  guideLink="/guides/inherited-house-washington"
                  guideLinkLabel="Read the full guide"
                />
                <ResourceDownloadCard
                  title="Senior Transition Planning Checklist"
                  description="Step-by-step planning guide for families coordinating a move from a longtime home to assisted living, independent living, or a smaller residence."
                  audience="Adult children, caregivers, seniors"
                  guideLink="/senior-transitions"
                  guideLinkLabel="Learn about senior transitions"
                />
                <ResourceDownloadCard
                  title="Appraisal vs. CMA Quick Guide"
                  description="Understand the difference between a formal appraisal and a comparative market analysis — and which one your situation requires."
                  audience="Executors, attorneys, trustees"
                  guideLink="/guides/appraisal-vs-cma"
                  guideLinkLabel="Read the full comparison"
                />
                <ResourceDownloadCard
                  title="Out-of-State Property Sale Checklist"
                  description="Essential steps for managing, preparing, and selling a Washington property when you live in another state."
                  audience="Out-of-state heirs, executors, trustees"
                  guideLink="/guides/out-of-state-families"
                  guideLinkLabel="Read the full guide"
                />
                <ResourceDownloadCard
                  title="Estate Property Preparation Checklist"
                  description="A practical guide to evaluating, cleaning, and preparing an estate or inherited property for sale — including which improvements are worth the investment."
                  audience="Executors, personal representatives, families"
                  guideLink="/how-the-process-works"
                  guideLinkLabel="See how the process works"
                />
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/resources" />
          <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default Resources;
