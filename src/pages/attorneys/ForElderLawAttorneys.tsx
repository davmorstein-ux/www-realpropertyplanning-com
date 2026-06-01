import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ProviderTile from "@/components/ProviderTile";
import scottPhoto from "@/assets/providers/elder-law-scott-schill-mercer-island.webp";
import schillLogo from "@/assets/providers/elder-law-sr-schill-associates-logo.webp";

const SCOTT_BIO = `Scott Schill serves as Director of Longevity Planning at S.R. Schill & Associates and founder of Thrive Longevity Law. In collaboration with Certified Financial Planners®, he delivers integrated, fiduciary guidance bringing together wealth management, retirement strategy, estate planning, elder law, housing, and care planning. Scott's commitment to this work was shaped by personal experience advocating for his mother. Before entering longevity law, he practiced complex commercial litigation at Yarmuth Wilsdon Calfo PLLC and Perkins Coie LLP in Seattle. A graduate of UC Berkeley and The George Washington University Law School, Scott is a committed advocate for proactive planning and helping people live longer, healthier, and more fulfilling lives.`;

const ForElderLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Elder Law Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning helps elder law attorneys and their clients navigate senior home sales, Medicaid planning property decisions, and estate transitions in Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Elder Law Attorneys", url: "/for-elder-law-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
            Elder Law Attorneys
          </h1>
        </div>
      </div>
    </section>

    {/* What Is an Elder Law Attorney? */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
            What Is an Elder Law Attorney?
          </h2>
          <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Elder law attorneys specialize in the legal needs of older adults and their families. Their practice covers a wide range of issues that arise as people age — from planning ahead for incapacity and long-term care to navigating Medicaid eligibility, guardianship, and the management of assets when someone can no longer make decisions for themselves.
            </p>
            <p>
              Common areas of elder law practice include estate planning, powers of attorney, advance directives, Medicaid planning and spend-down strategies, conservatorship and guardianship, veterans' benefits, and the legal aspects of transitioning to assisted living or memory care.
            </p>
            <p>
              Elder law attorneys often work closely with financial advisors, care managers, and real estate professionals to coordinate the full picture of a client's transition — ensuring that legal, financial, and housing decisions are aligned and made in the right sequence.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Elder Law Attorney */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-3">
            Featured Elder Law Attorney
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ​
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <ProviderTile
            name="Scott R. Schill"
            title="Elder Law Attorney"
            company="S.R. Schill & Associates — Financial and Longevity Advisors"
            photo={scottPhoto}
            photoAlt="Photo of Scott R. Schill, Elder Law Attorney at S.R. Schill & Associates on Mercer Island"
            logo={schillLogo}
            logoAlt="S.R. Schill & Associates logo"
            website="https://www.srschill.com"
            bio={SCOTT_BIO}
            specialty="Longevity planning, elder law, estate planning, retirement strategy, and care planning on Mercer Island and throughout Washington State."
          />
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForElderLawAttorneys;
