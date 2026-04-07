import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

const SeniorMoveManagers = () => (
  <>
    <SEOHead
      title="Senior Move Managers | Resources | Real Property Planning"
      description="Senior move management professionals throughout Washington State who coordinate and manage the physical and emotional aspects of relocating seniors."
      canonical="https://www.realpropertyplanning.com/resources/senior-move-managers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Resources", url: "https://www.realpropertyplanning.com/resources" },
        { name: "Senior Move Managers", url: "https://www.realpropertyplanning.com/resources/senior-move-managers" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Resources</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Senior Move Managers</h1>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Senior Move Managers Do
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Senior move managers coordinate and manage the physical and emotional aspects of relocating seniors — whether moving to a smaller home, an assisted living community, or closer to family. They handle sorting, packing, floor-plan design, unpacking, and settling in, so families don't have to manage every detail during an already stressful time.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Real Property Planning works with senior move managers regularly as part of <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition</Link> situations. When a home needs to be sold alongside a move, David Stein coordinates with the move manager to align timelines, property preparation, and the sale process.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-5">
              Recommended Professionals
            </h2>
            <div className="bg-secondary border border-border rounded-xl px-6 py-8 md:px-8 text-center">
              <p className="text-muted-foreground text-base leading-relaxed">
                David is currently compiling a list of recommended senior move managers throughout Washington State. Check back soon, or <Link to="/contact" className="text-accent hover:text-gold underline underline-offset-4">contact David</Link> for a current referral.
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
      <RelatedServices currentPath="/resources/senior-move-managers" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default SeniorMoveManagers;
