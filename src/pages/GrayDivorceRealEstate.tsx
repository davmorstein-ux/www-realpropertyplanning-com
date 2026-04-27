import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import TrustStrip from "@/components/TrustStrip";
import GoldCheck3D from "@/components/GoldCheck3D";
import RelatedServices from "@/components/RelatedServices";
import { articleSchema } from "@/lib/schema";

import grayDivorceIcon from "@/assets/icons/gray-divorce-split-house-couple-washington.png";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const davidServices = [
  "Independent property appraisals for equitable asset division — ordered through your attorney or directly",
  "Honest, objective guidance on whether selling or a buyout makes more financial sense",
  "Professional sale coordination for the family home — handled with sensitivity and without taking sides",
  "Senior transition support — helping the spouse who is moving find appropriate housing, whether that's downsizing, renting, or transitioning into a senior living community",
];

const attorneyServices = [
  "Certified residential appraisals for equitable property valuation",
  "Objective third-party opinions of value that both parties can rely on",
  "Professional sale coordination when the home needs to be sold",
  "Senior housing transition support for clients who need help with their next move",
];

const jsonLd = articleSchema({
  headline: "Gray Divorce & the Silver Tsunami — Real Estate Guidance in Washington State",
  description:
    "Real estate, appraisal, and senior transition guidance for later-life divorce throughout Washington State.",
  url: "/gray-divorce-real-estate",
  datePublished: "2026-04-26",
  dateModified: "2026-04-26",
  about: ["Gray divorce", "Later-life divorce", "Real estate appraisal", "Senior transitions", "Washington State"],
});

const GrayDivorceRealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gray Divorce Real Estate Services in Washington State | Real Property Planning"
        description="Navigating a later-life divorce involves complex real estate decisions. Real Property Planning connects you with experienced real estate and appraisal guidance for gray divorce property transitions throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Gray Divorce & the Silver Tsunami", url: "/gray-divorce-real-estate" }]} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={grayDivorceIcon}
                alt=""
                aria-hidden="true"
                className="mx-auto max-w-[18rem] w-full h-auto object-contain mb-4"
                style={{ backgroundColor: "transparent", mixBlendMode: "normal", filter: "none", opacity: 1 }}
                loading="lazy"
              />
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6 mt-4">
                Gray Divorce &amp; the Silver Tsunami
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                A New Kind of Transition — calm, neutral real estate and appraisal guidance for later-life divorce in Washington State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    Start a Confidential Conversation
                  </Button>
                </Link>
                <a href="tel:2069003015" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg font-bold tracking-wide shadow-lg hover:brightness-110 transition-all min-w-[240px]"
                    style={{
                      height: "54px",
                      fontSize: "18px",
                      padding: "0 2rem",
                      backgroundColor: "#2563eb",
                      color: "#ffffff",
                    }}
                  >
                    Call (206) 900-3015
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Intro */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">A New Kind of Transition</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                America is in the middle of a profound demographic shift. With 4.2 million Baby Boomers turning 65 every year, the decisions being made right now about housing, wealth, and family are unlike anything previous generations have faced. And increasingly, one of those decisions is divorce.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Gray divorce — the dissolution of long-term marriages among adults over 50 — has doubled since 1990. Today, roughly one in three divorces in the United States involves someone over 50. These are not simple separations. They involve decades of accumulated assets, deeply rooted family homes, retirement savings, and far less time to financially recover than younger couples face. Real estate is almost always at the center of it.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Gray Divorce Different */}
        <section className="py-12 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                What Makes Gray Divorce Real Estate Different
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For couples who have owned a home for 20, 30, or even 40 years, the family residence is often the single largest marital asset — and one of the most emotionally charged. Once the legal decisions have been made by your attorney, the real estate questions still remain: Do we sell? Can one spouse afford to buy out the other? What is the home actually worth?
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                That's where David Stein comes in. As a Washington State Licensed Real Estate Broker and Certified Residential Appraiser with over 20 years of experience, David provides:
              </p>
              <ul className="space-y-4">
                {davidServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <GoldCheck3D size={20} className="mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Intersection of Aging and Divorce */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">The Intersection of Aging and Divorce</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Gray divorce doesn't happen in isolation. It often arrives alongside other major life transitions — retirement, health changes, adult children leaving home, or the loss of a parent. For many seniors, a divorce also triggers a housing transition: downsizing, relocating closer to family, or moving into a senior living community.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Real Property Planning was built specifically for these intersecting transitions. Whether you are navigating a divorce, settling an estate, or helping an aging parent find their next chapter, Real Property Planning connects families and professionals with the real estate and housing transition resources they need — all in one place.
              </p>
            </div>
          </div>
        </section>

        {/* For Divorce Attorneys */}
        <section className="py-12 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">For Divorce Attorneys</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If you represent clients over 50, you already know that the family home is rarely a simple asset to divide. Your clients need a real estate professional who is neutral, credentialed, and experienced with the unique complexities of later-life property transitions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                David Stein works as a trusted referral partner for family law and divorce attorneys throughout Washington State, providing:
              </p>
              <ul className="space-y-4 mb-8">
                {attorneyServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <GoldCheck3D size={20} className="mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Real Property Planning does not provide legal or financial advice. David works alongside your legal team — not in place of it. Learn more about{" "}
                <Link to="/for-divorce-attorneys" className="text-accent hover:text-gold underline underline-offset-4">
                  the referral approach for divorce attorneys
                </Link>{" "}
                or{" "}
                <Link to="/for-family-law-attorneys" className="text-accent hover:text-gold underline underline-offset-4">
                  family law attorneys
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-12 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                You Don't Have to Figure This Out Alone
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                Whether you are navigating a gray divorce and need guidance on the real estate side, or you are an attorney looking for a trusted property and appraisal resource for your clients — Real Property Planning is here to help connect you with the right expertise.
              </p>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-10">
                Call (206) 900-3015 or send a message to start a conversation. There is no pressure and no obligation — just calm, honest guidance on the real estate and housing side of one of life's most difficult transitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2069003015">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    Call (206) 900-3015
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/gray-divorce-real-estate" />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default GrayDivorceRealEstate;
