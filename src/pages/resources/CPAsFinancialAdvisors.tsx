import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";

const CPAsFinancialAdvisors = () => (
  <>
    <SEOHead
      title="CPAs & Financial Advisors | Resources | Real Property Planning"
      description="CPAs and financial advisors in Western Washington for estate tax, capital gains, and inherited property planning."
      canonicalUrl="https://www.realpropertyplanning.com/resources/cpas-financial-advisors"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "CPAs & Financial Advisors", url: "https://www.realpropertyplanning.com/resources/cpas-financial-advisors" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">CPAs & Financial Advisors</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Tax and financial professionals who help with estate tax, capital gains, and financial planning related to inherited property. Coming soon — David's recommended CPAs and financial advisors.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
      <RelatedServices currentPath="/resources/cpas-financial-advisors" />
    </main>
    <Footer />
  </>
);

export default CPAsFinancialAdvisors;
