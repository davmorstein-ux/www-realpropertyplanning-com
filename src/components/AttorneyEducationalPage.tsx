import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import PageFAQ from "@/components/PageFAQ";
import FeaturedProviderPlaceholder from "@/components/FeaturedProviderPlaceholder";
import SiteDisclaimerBlock from "@/components/SiteDisclaimerBlock";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

export interface AttorneyEducationalPageProps {
  title: string;
  path: string;
  seoTitle: string;
  seoDescription: string;
  featuredHeading: string;
  altLabel: string;
  opening: string[];
  intersectionsHeading: string;
  intersectionsIntro: string;
  intersections: string[];
  servicesIntro: string;
  services: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  ctaIntro: string;
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
          <HeroBandTitle>{p.title}</HeroBandTitle>
        </section>
      )}
      {!p.heroImage && <HeroBandTitle>{p.title}</HeroBandTitle>}


      <FeaturedProviderPlaceholder heading={p.featuredHeading} altLabel={p.altLabel} />

      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {p.opening.map((para, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {p.intersectionsHeading}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {p.intersectionsIntro}
            </p>
            <div className="grid gap-4">
              {p.intersections.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How David Stein Supports Your Clients
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {p.servicesIntro}
            </p>
            <div className="grid gap-5">
              {p.services.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl px-7 py-6">
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={p.faqs} heading="Common Questions" />

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Discuss a Client Situation
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              {p.ctaIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12069003015">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/for-divorce-attorneys" />
      <SiteDisclaimerBlock />
    </main>
    <Footer />
  </div>
);

export default AttorneyEducationalPage;
