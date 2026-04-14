import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/icons/probate-estate-resources-icon-washington.webp";

const MovingRelocationServices = () => (
  <>
    <SEOHead
      title="Moving & Relocation Services | Resources | Real Property Planning"
      description="Moving companies and relocation specialists experienced with estate and senior transitions throughout Washington State."
      canonical="https://www.realpropertyplanning.com/resources/moving-relocation-services"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Moving & Relocation Services", url: "https://www.realpropertyplanning.com/resources/moving-relocation-services" },
      ]}
    />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3 md:mb-4">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy" />
            </div>

            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">Moving & Relocation Services</h1>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Moving & Relocation Services Provide
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Moving and relocation specialists experienced with estate and senior transitions understand the sensitivity and complexity involved. They handle packing, transport, storage, and delivery with care — especially when families are managing a move under emotional or time-sensitive circumstances.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with movers and relocation services to coordinate timing between a <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link> or estate property sale and the physical move, ensuring the process stays on track.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                David is currently compiling a list of recommended moving and relocation services throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David</Link> for a current referral.
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

      <CTASection />
      <RelatedServices currentPath="/resources/moving-relocation-services" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default MovingRelocationServices;
