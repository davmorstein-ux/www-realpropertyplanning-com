import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import steinAppraisalLogo from "@/assets/stein-appraisal-appraiser-logo-washington.webp";

const RealEstateAppraiser = () => (
  <>
    <SEOHead
      title="Real Estate Appraisers in Washington State"
      description="Washington State Certified Residential Appraisers. Estate, probate, and senior transition appraisals accepted by courts, lenders, and the IRS."
      canonical="https://realpropertyplanning.com/real-estate-appraiser"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Real Estate Appraisers", url: "https://realpropertyplanning.com/real-estate-appraiser" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle>Real Estate Appraisers</HeroBandTitle>

      {/* Featured tile */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ProviderTile
              name="David Stein"
              title="Certified Residential Appraiser"
              company="Stein Appraisal"
              photo={davidSteinPhoto}
              photoAlt="Photo of David Stein"
              logo={steinAppraisalLogo}
              logoAlt="Stein Appraisal logo"
              phone="(206) 900-3015"
              email="dave@steinappraisal.com"
              website="https://realpropertyplanning.com/real-estate-appraiser"
              specialty="Estate and date-of-death appraisals, divorce and litigation support, retrospective valuations, and residential appraisals for attorneys, executors, and trustees throughout the Puget Sound region."
              bio="David Stein is a Washington State Certified Residential Appraiser with over 20 years of experience providing independent property valuations for attorneys, executors, trustees, courts, and families across the Puget Sound region. Through Stein Appraisal, he specializes in the appraisal assignments that require precision, defensibility, and an appraiser who understands the legal and fiduciary context — including date-of-death valuations for estate tax returns and probate, retrospective appraisals for prior tax years, divorce and dissolution appraisals accepted by family law courts, and litigation support for disputed property values. His appraisal reports are prepared to meet IRS, court, and lender standards and are regularly relied upon by probate attorneys, CPAs, and estate planners throughout Western Washington. David also holds a Washington State real estate broker license, giving him an unusually complete understanding of both market value and the transaction process — a combination that is especially valuable when an estate or trust property must be both appraised and sold."
            />
          </div>
        </div>
      </section>

      {/* Explanatory content */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Real Estate Appraisers Do
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              A certified real estate appraiser provides an objective, defensible opinion of a property's value, backed by formal methodology and local market data. Their reports are accepted by courts, lenders, and the IRS — and are often required in probate, estate settlement, divorce, tax appeals, and senior housing decisions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Unlike a broker's price opinion, a certified appraisal is built on structured analysis and documented evidence. For families, executors, trustees, and attorneys, that difference can be what prevents a dispute, protects a fiduciary, or keeps a transaction on track.
            </p>
          </div>
        </div>
      </section>

      <BackToProfessionalsButton />
    </main>
    <Footer />
  </>
);

export default RealEstateAppraiser;
