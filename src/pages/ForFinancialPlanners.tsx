import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionals from "@/components/BackToProfessionals";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import { articleSchema } from "@/lib/schema";
import heroImage from "@/assets/financial-planners-hero-washington.webp";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import nyLifeLogo from "@/assets/new-york-life-logo.webp";

const TIFFANY_BIO = `With a deep personal understanding of how life transitions impact families, I focus on guiding retirees and their loved ones through every step of their financial journey. After witnessing my own family navigate the complexities of Alzheimer's and elder care, I've dedicated my career to helping others plan with confidence. I work closely with retirees and their adult children, offering guidance so families can navigate estate planning, downsizing, and legacy protection together. For over 180 years, New York Life has existed for one purpose: to help families and businesses achieve financial security and peace of mind. When you need us, we are there.`;

    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Guidance for Financial Planners | Real Property Planning"
        description="Real Property Planning supports financial planners whose clients face inherited property, trust-owned homes, or senior housing transitions in Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Financial Planners", url: "/for-financial-planners" }]} />
      <Header />
      <main id="main-content">
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={heroImage}
              alt="Financial planners guidance — estate and senior transition real estate in Washington State"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle as="div">Guidance for Financial Planning</HeroBandTitle>
          </div>
        </section>

        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              <ProviderTile
                name="Tiffany Lane"
                title="Financial Professional"
                company="New York Life — Seattle General Office"
                photo={tiffanyPhoto}
                photoAlt="Photo of Tiffany Lane, Financial Planner at New York Life"
                logo={nyLifeLogo}
                logoAlt="New York Life logo"
                phone="(206) 999-2116"
                phone2="(206) 888-4960"
                email="tcford@ft.newyorklife.com"
                website="https://www.newyorklife.com"
                bio={TIFFANY_BIO}
                specialty="Retirement planning, estate planning, downsizing guidance, and legacy protection for retirees and their families."
              />
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
                About Financial Planners
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Financial planners help individuals and families build strategies for long-term financial security. For
                older adults navigating inherited property, trust-owned homes, or senior housing transitions, a
                financial planner's guidance can be essential to making sound, well-timed decisions.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                Real Property Planning works alongside financial planners to provide coordinated support — ensuring that
                real estate decisions align with each client's broader financial plan, estate goals, and family
                circumstances.
              </p>
            </div>
          </div>
        </section>

        <BackToProfessionals />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ForFinancialPlanners;
