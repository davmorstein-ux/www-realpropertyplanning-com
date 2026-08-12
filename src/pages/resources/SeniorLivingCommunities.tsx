import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/icons/probate-estate-resources-icon-washington.webp";

const SeniorLivingCommunities = () => (
  <>
    <SEOHead
      title="Senior Living Communities | Resources | Real Property Planning"
      description="Assisted living, independent living, and memory care communities throughout Washington State for families navigating senior housing transitions."
      canonical="https://realpropertyplanning.com/resources/senior-living-communities"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Resources", url: "https://realpropertyplanning.com/resources" },
        { name: "Senior Living Communities", url: "https://realpropertyplanning.com/resources/senior-living-communities" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Senior Living Communities</HeroBandTitle>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Finding the Right Senior Living Community
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              When a senior is transitioning from a longtime family home, finding the right assisted living, independent living, or memory care community is one of the most important decisions a family makes. The right fit depends on care needs, location preferences, budget, and the level of independence desired.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with families navigating <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transitions</Link> and often coordinates the home sale alongside a move into a senior living community. Real Property Planning helps align the property timeline with the transition plan so families aren't managing both at once without support.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Communities
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                We are currently compiling a list of recommended senior living communities throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact us</Link> for a current referral.
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
      <RelatedServices currentPath="/resources/senior-living-communities" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorLivingCommunities;
