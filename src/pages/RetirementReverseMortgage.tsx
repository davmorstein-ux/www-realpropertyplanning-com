import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconEmail3d from "@/assets/icons/real-estate-email-envelope-3d-icon-washington.webp";
import iconGlobe3d from "@/assets/icons/real-estate-website-globe-3d-icon-washington.webp";
import iconMapPin3d from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import c2FinancialLogo from "@/assets/providers/real-estate-lenders-c2financial-logo-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import crossCountryLogo from "@/assets/providers/real-estate-lenders-crosscountry-logo-washington.webp";

const RetirementReverseMortgage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Retirement & Reverse Mortgage Guidance | Real Property Planning"
      description="Reverse mortgage and retirement financing guidance for Washington seniors and families. Independent lending professionals supporting long-term housing and estate planning decisions."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Professionals", url: "/professionals" },
        { name: "Lenders & Financing Specialists", url: "/retirement-reverse-mortgage" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <HeroBandTitle as="h1">Reverse Mortgages and Retirement in Washington</HeroBandTitle>

    {/* Intro — relocated out of the title band. The band carries the
        page title and nothing else, sitewide. */}
    <section className="py-10 md:py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
          Independent professionals who provide clarity around financing, retirement planning, and long-term strategy.
        </p>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real estate decisions are often closely tied to financing, retirement planning, and long-term financial strategy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            In some situations, selling a home is the right decision. In others, financing solutions may provide flexibility and allow clients to remain in their home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning lists independent lending professionals who can help clients explore their options clearly and without pressure.
          </p>
        </div>
      </div>
    </section>

    {/* Moved from /lenders-and-financing-specialists (Oct 4, 2026, Question Map step 8). */}
    <section className="py-12 md:py-16 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            One of the most important — and least understood — applications of a reverse mortgage is helping families manage the cost of senior care when one spouse needs to move into a memory care facility, skilled nursing home, or assisted living community while the other remains at home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For many retired couples, the family home represents their largest financial asset. A reverse mortgage allows the spouse remaining at home to convert a portion of that home equity into tax-free funds — without making monthly mortgage payments — while continuing to live in the home. Those funds can then be used to cover the cost of the other spouse's care facility, property taxes, homeowner's insurance, and everyday living expenses.
          </p>
        </div>
      </div>
    </section>

    {/* Using a Reverse Mortgage to Fund Senior Care */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
            Using a Reverse Mortgage to Fund Senior Care
          </h2>

          <div className="mb-10">
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
              How It Works for Couples
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A common reason seniors seek reverse mortgages is when one spouse requires care and needs to move into a skilled nursing or assisted living community. When both spouses are included on the reverse mortgage agreement and one moves into a care facility, the spouse remaining at home can continue to access the funds. Should the spouse receiving care pass away, the remaining spouse continues to live in the home undisturbed.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
              Flexible Payment Options
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Reverse mortgage proceeds can be structured in several ways. Monthly payments create a steady income stream that can cover the monthly cost of a care facility. A line of credit can be particularly useful for unpredictable long-term care needs — and under many plans, unused credit grows over time, giving families more flexibility as needs change.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
              Important Considerations
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If a borrower is away from the home for more than 12 consecutive months in a healthcare facility and there is no co-borrower living in the home, the loan may become due. This is why it is critical to structure the reverse mortgage correctly — with both spouses as co-borrowers whenever possible — before a care need arises. Medicaid eligibility rules for reverse mortgage borrowers are also complex and families should consult with a financial planner and elder law attorney before proceeding.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
              When the Loan Comes Due
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A reverse mortgage generally becomes due when the last borrower dies or moves out, and the house is then
              often sold to repay it. Heirs can also pay it off and keep the house, and if the house is worth less than
              the loan, selling it for at least 95 percent of the appraised value settles a federally insured loan. See{" "}
              <Link to="/guides/mortgage-after-death-washington#reverse-mortgage" className="text-accent hover:text-gold underline underline-offset-4">
                what happens to a reverse mortgage after a death
              </Link>
              , and for a parent who is staying put,{" "}
              <Link to="/senior-transitions/can-parent-afford-to-stay-home" className="text-accent hover:text-gold underline underline-offset-4">
                whether they can afford to stay home
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Professional — mirrors AdultFamilyHomes provider card */}
    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            Featured Providers
          </h2>

          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img
                  src={danBartelPhoto}
                  alt="Daniel Bartel — Retirement Mortgage Specialist, C2 Financial"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                 loading="lazy" sizes="100vw" decoding="async" width={1536} height={1024} />
              </div>

              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" className="sm:self-start">
                  <img
                    src={c2FinancialLogo}
                    alt="C2 Financial logo"
                    className="h-[42px] w-auto object-contain mx-auto sm:mx-0 block"
                   loading="lazy" sizes="100vw" decoding="async" width={1220} height={286} />
                </a>

                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Daniel Bartel</p>
                  <p className="text-muted-foreground text-sm mb-1.5">Retirement Mortgage Specialist · Reverse Mortgage Lender · C2 Financial</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Daniel specializes in helping seniors evaluate reverse mortgage options as part of a larger retirement plan. His approach is educational and consultative — focused on helping clients understand their options so they can make informed decisions. As a Registered Social Security Analyst, he also helps clients consider how real estate and financing decisions fit into their broader retirement strategy.
                  </p>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" sizes="100vw" decoding="async" width={512} height={512} />
                      <span className="text-muted-foreground">1721 Hewitt Ave Ste. 612, Everett, WA 98201</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <a href="tel:+12063105766" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        (206) 310-5766
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" sizes="100vw" decoding="async" width={1254} height={1254} />
                      <a href="mailto:santadan@c2financial.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        santadan@c2financial.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" sizes="100vw" decoding="async" width={976} height={859} />
                      <a href="http://www.santadanmortgage.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        www.santadanmortgage.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          {/* Jeff McGinnis — CrossCountry Mortgage */}
          <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
              <div className="shrink-0">
                <img
                  src={jeffMcGinnisPhoto}
                  alt="Jeff McGinnis — Senior Loan Officer, CrossCountry Mortgage"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                 loading="lazy" sizes="100vw" decoding="async" width={350} height={433} />
              </div>

              <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" className="sm:self-start">
                  <img
                    src={crossCountryLogo}
                    alt="CrossCountry Mortgage logo"
                    className="h-[42px] w-auto object-contain mx-auto sm:mx-0 block"
                   loading="lazy" sizes="100vw" decoding="async" width={1536} height={1024} />
                </a>

                <div className="w-full mt-1 text-center sm:pl-[58px] sm:text-left">
                  <p className="text-foreground font-semibold text-lg">Jeff McGinnis</p>
                  <p className="text-muted-foreground text-sm mb-1.5">Senior Loan Officer · CrossCountry Mortgage</p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    I'm a seasoned mortgage lending professional with over 25 years of experience in the industry. I have a proven track record of success and am known as one of the top producers in my field. With a deep understanding of the lending landscape and a passion for helping clients achieve their homeownership goals, I've established myself as a trusted and knowledgeable resource for borrowers.
                  </p>

                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <img src={iconMapPin3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0 mt-0.5" loading="lazy" sizes="100vw" decoding="async" width={512} height={512} />
                      <span className="text-muted-foreground">1000 Dexter Ave N, Suite 310, Seattle, WA 98109</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <a href="tel:+12062835626" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        (206) 283-5626
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <img src={iconEmail3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" sizes="100vw" decoding="async" width={1254} height={1254} />
                      <a href="mailto:jejj.mcginnis@ccm.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                        jejj.mcginnis@ccm.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <img src={iconGlobe3d} alt="" aria-hidden="true" className="w-4 h-4 object-contain shrink-0" loading="lazy" sizes="100vw" decoding="async" width={976} height={859} />
                      <a href="https://crosscountrymortgage.com/seattle-wa-5531/jeffrey-mcginnis/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                        crosscountrymortgage.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* How This Fits In */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            How This Fits Into the Bigger Picture
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every client's situation is different.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Some choose to sell. Others explore financing options. Some do both as part of a long-term plan.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The goal is to provide clarity — not push a specific path.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If you're exploring whether selling, staying, or financing options make the most sense, Real Property Planning's Find a Professional page lists independent professionals you can contact directly to evaluate your situation.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/retirement-reverse-mortgage" />
    <DisclaimerSection />
      <BackToProfessionals />
    </main>
    <Footer />
  </div>
);

export default RetirementReverseMortgage;
