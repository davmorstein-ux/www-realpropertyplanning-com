import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import NextStepBlock from "@/components/NextStepBlock";
import wtdwHeroImage from "@/assets/what-to-do-with-the-house-hero-washington.webp";
import HeroBandTitle from "@/components/HeroBandTitle";

const tiles = [
  {
    title: "Your Options",
    text: "Sell and distribute proceeds, keep it as a rental or residence, rent while deciding, or buy out other heirs. Each path has different cost, tax, and management implications.",
  },
  {
    title: "Key Factors to Consider",
    text: "Evaluate the property's condition and market value, the estate's timeline flexibility, ongoing carrying costs (taxes, insurance, utilities), and the financial needs of all beneficiaries.",
  },
  {
    title: "Tax Implications",
    text: "Inherited property typically receives a stepped-up basis, which can significantly reduce capital gains if sold. Consult a CPA early to understand your specific situation before making any decisions.",
  },
  {
    title: "Get Guidance Early",
    text: "Delays cost money. Carrying costs accumulate, conditions can deteriorate, and tax planning opportunities can be lost. An early no-pressure consultation helps everyone make better decisions.",
  },
];

const faqs = [
  { question: "What is a stepped-up basis and why does it matter?", answer: "When you inherit property, the tax basis is generally 'stepped up' to the property's fair market value at the date of death. This means if you sell soon after inheritance, you may owe little or no capital gains tax. The longer you hold the property, the more potential appreciation may become taxable. Consult a CPA or tax advisor for guidance specific to your situation." },
  { question: "Should I sell an inherited house as-is?", answer: "It depends on the property's condition, your timeline, and the likely return on preparation investment. Some properties sell well as-is to investors or renovation buyers. Others benefit significantly from targeted preparation. David Stein evaluates each situation individually and recommends the approach most likely to protect value." },
  { question: "How soon can I sell an inherited house in Washington?", answer: "Once legal authority is established (through probate, trust administration, or other means), the property can be listed for sale. Pre-listing preparation — assessment, cleanout, repairs — can begin earlier. David Stein helps create a realistic timeline aligned with your specific circumstances." },
  { question: "What if there are multiple heirs who cannot agree?", answer: "Disagreements among heirs are common. David Stein provides objective, data-driven market analysis that helps move conversations from opinion to evidence. For legal disputes, the estate attorney should be involved. David Stein's role is to provide clear real estate data and professional guidance." },
  { question: "Do I need to go through probate to sell an inherited house?", answer: "Not always. Property held in a trust, joint tenancy, or with a transfer-on-death deed may pass outside of probate. The estate attorney can clarify the legal requirements. David Stein can begin property assessment and planning regardless of the legal pathway." },
];

const jsonLd = articleSchema({
  headline: "What to Do With an Inherited House in Washington State",
  description: "A comprehensive guide to your options when you inherit property in Washington — including selling, keeping, renting, valuation, preparation, and coordinating with family.",
  url: "/guides/inherited-house-washington",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Inherited property", "Estate real estate", "Washington inheritance", "Heir responsibilities", "Property valuation"],
});

const InheritedHouseWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What to Do With an Inherited House in Washington State | Real Property Planning"
      description="A practical guide to your options when you inherit a house in Washington — including selling, keeping, renting, valuation, preparation, tax considerations, and family coordination."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Inherited House Guide", url: "/guides/inherited-house-washington" },
    ]} />
    <Header />
    <main id="main-content">
      {/* WTDW Shared Hero */}
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
          <img
            src={wtdwHeroImage}
            alt="Quiet Washington street with craftsman homes"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
            loading="eager"
          />
          <HeroBandTitle as="div">Inherited Property</HeroBandTitle>
        </div>
      </section>

      {/* 2x2 Premium Tiles */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tiles.map((t) => (
              <div key={t.title} className="interior-tile tile-white block h-full">
                <div className="tile-white__inner h-full">
                  <div className="tile-white__face h-full">
                    <div className="flex h-full flex-col px-6 pb-6 pt-8 sm:px-7 sm:pb-7 sm:pt-9">
                      <h3
                        className="mb-3 font-serif text-xl sm:text-[1.38rem] font-extrabold leading-snug text-foreground"
                        style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
                      >
                        {t.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-muted-foreground">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <PageFAQ faqs={faqs} heading="Inherited Property FAQs" />

      <NextStepBlock
        heading="Continue Learning"
        steps={[
          { title: "How Probate Real Estate Works in Washington", description: "Understand the legal process, timeline, and key decisions involved in selling property through probate.", href: "/guides/how-probate-real-estate-works" },
          { title: "Appraisal vs. CMA: Which Do You Need?", description: "Learn when a formal appraisal is required and when a market analysis is sufficient for estate property.", href: "/guides/appraisal-vs-cma" },
          { title: "What Executors Should Do First", description: "A step-by-step guide to the first 30 days of managing estate property as a personal representative.", href: "/guides/what-executors-should-do" },
        ]}
      />

      <RelatedServices currentPath="/guides/inherited-house-washington" />

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default InheritedHouseWashington;
