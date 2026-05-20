import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/probate-attorney-hero.png";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.webp";

const ProbateEstateAttorneys = () => (
  <>
    <SEOHead
      title="Probate & Estate Attorneys | Resources | Real Property Planning"
      description="Probate and estate attorneys throughout Washington State who guide families, executors, and fiduciaries through estate administration and property-related legal matters."
      canonical="https://realpropertyplanning.com/resources/probate-estate-attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Resources", url: "https://realpropertyplanning.com/resources" },
        { name: "Probate & Estate Attorneys", url: "https://realpropertyplanning.com/resources/probate-estate-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="w-full bg-secondary" style={{ marginTop: 0, paddingTop: 0 }}>
        <div className="container px-6 lg:px-8 py-10 md:py-14 flex justify-center">
          <img
            src={heroIcon}
            alt="Probate attorney at desk reviewing estate plan documents"
            className="max-w-full h-auto max-h-[420px] object-contain"
            loading="eager"
          />
        </div>
        <HeroBandTitle compact>Probate Attorney</HeroBandTitle>
      </section>

      {/* Featured Provider */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
              Featured Provider
            </p>
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
              Featured Probate Attorney — Coming Soon
            </h2>

            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img
                    src="/placeholder.svg"
                    alt="Photo placeholder for featured probate attorney"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                    loading="lazy"
                  />
                </div>
                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <div className="w-full mt-2 text-center sm:text-left">
                    <p className="text-foreground font-semibold text-lg">Name</p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Title · Firm Name
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Bio will appear here.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      <span className="font-semibold text-foreground">Memberships:</span> Pending
                    </p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2 justify-center sm:justify-start">
                        <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" />
                        <span className="text-muted-foreground">Address</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                        <span className="text-accent">Phone</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                        <span className="text-accent">Email</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                        <span className="text-accent">Website</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              The Role of Probate & Estate Attorneys
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Probate and estate attorneys guide families, <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link>, trustees, and fiduciaries through the legal process of estate administration. They handle court filings, interpret wills and trust documents, resolve disputes, and ensure the estate is settled according to Washington State law.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              David Stein works with probate and estate attorneys regularly, providing real estate brokerage and appraisal guidance on the property side of estate matters. He coordinates with the legal team to align timing, pricing, and sale strategy with the overall estate administration process. Learn more about <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">how David Stein works with attorneys</Link>.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-background border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                David Stein is currently compiling a list of recommended probate and estate attorneys throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David Stein</Link> for a current referral.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground/60 text-[15px] leading-relaxed italic">
                These professionals are listed as informational resources for visitors navigating senior transitions and estate property matters. Real Property Planning does not receive compensation for these listings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        body="David Stein works with families throughout Washington State and can connect you with a trusted broker in another state if needed."
      />
      <RelatedServices currentPath="/resources/probate-estate-attorneys" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default ProbateEstateAttorneys;
