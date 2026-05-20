import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import HeroBandTitle from "@/components/HeroBandTitle";

export interface AttorneyEducationalPageProps {
  title: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  featuredHeading: string;
  altLabel: string;
  roleDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
}

const AttorneyEducationalPage = (p: AttorneyEducationalPageProps) => (
  <div className="min-h-screen bg-background">
    <SEOHead title={p.seoTitle} description={p.seoDescription} />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: p.title, url: p.path },
      ]}
    />
    <Header />
    <main id="main-content">
      {p.heroImage && (
        <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
          <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
            <img
              src={p.heroImage}
              alt={p.heroImageAlt || ""}
              className="max-w-full h-auto max-h-[420px] object-contain"
              loading="eager"
            />
          </div>
          <HeroBandTitle compact>{p.title}</HeroBandTitle>
        </section>
      )}
      {!p.heroImage && <HeroBandTitle compact>{p.title}</HeroBandTitle>}

      <FeaturedProviderPlaceholder heading={p.featuredHeading} altLabel={p.altLabel} />

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground text-lg leading-relaxed">
              {p.roleDescription}
            </p>
          </div>
        </div>
      </section>

      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default AttorneyEducationalPage;
