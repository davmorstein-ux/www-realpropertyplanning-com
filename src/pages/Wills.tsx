import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import SecureWillSection from "@/components/SecureWillSection";
import PageFAQ from "@/components/PageFAQ";
import GoldCheck3D from "@/components/GoldCheck3D";
import MidPageCTA from "@/components/MidPageCTA";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconWills from "@/assets/icons/icon-wills.png";

const willsFaqs = [
  {
    question: "Does Real Property Planning write or review wills?",
    answer:
      "No. We are not attorneys and do not provide legal advice. We focus exclusively on the real estate side — helping families, executors, and trustees understand property value and navigate the sale or transfer of real property referenced in a will.",
  },
  {
    question: "Why does a will matter when selling a house?",
    answer:
      "A will determines who has legal authority to act on behalf of the estate, which directly affects how and when a property can be listed, priced, and sold. Without a clear will, the probate process can become more complicated and time-consuming.",
  },
  {
    question: "What if there is no will?",
    answer:
      "When someone passes without a will (intestate), Washington State law determines how property is distributed. The probate court appoints a personal representative. We work with families in these situations regularly and can help coordinate with your attorney on the real estate side.",
  },
  {
    question: "Can an executor sell a house before probate is complete?",
    answer:
      "In some cases, yes — but it depends on the terms of the will, the type of probate, and court approval. We help executors understand timing, pricing, and preparation so the property is ready when the time comes.",
  },
  {
    question: "How does a will affect property valuation?",
    answer:
      "The terms of a will can influence whether a property needs a formal appraisal for estate tax purposes, equitable distribution among heirs, or establishing a stepped-up cost basis. Real Property Planning provides valuations informed by certified appraisal expertise that hold up to legal and financial scrutiny.",
  },
];

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <GoldCheck3D size={22} className="mt-0.5 shrink-0" />
    <span className="text-foreground text-[15px] leading-relaxed">{children}</span>
  </li>
);

const Wills = () => {
  const schemaData = articleSchema({
    headline: "Wills and Real Estate — What Families and Executors Need to Know",
    description:
      "Understand how wills affect real property decisions. Learn what executors, heirs, and families should know about selling or transferring a home during estate administration in Washington State.",
    url: "https://www.realpropertyplanning.com/wills",
    about: ["Wills", "Real Estate", "Estate Administration", "Probate", "Executors"],
  });

  return (
    <>
      <SEOHead
        title="Wills & Real Estate | What Families Need to Know | Real Property Planning"
        description="Learn how wills affect real property decisions in Washington State. Understand what executors, heirs, and families should know about selling or transferring a home during estate administration."
        canonical="https://www.realpropertyplanning.com/wills"
        jsonLd={schemaData}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com" },
          { name: "Wills", url: "https://www.realpropertyplanning.com/wills" },
        ]}
      />
      <div className="min-h-screen flex flex-col" data-nosnippet>
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="pt-20 pb-10 sm:pt-28 sm:pb-14 bg-gradient-to-b from-secondary to-background">
            <div className="mx-auto max-w-3xl px-6 text-center">
              <img src={iconWills} alt="" aria-hidden="true" className="mx-auto w-60 h-auto object-contain mb-8"  loading="lazy"/>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wills &amp; Real Estate
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                A will is one of the most important documents in estate planning — and when real
                property is involved, the decisions it guides can shape a family's financial future
                for years to come.
              </p>
              <button
                onClick={() => {
                  const target = document.getElementById("secure-will-section");
                  if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
                  }
                }}
                className="group relative inline-flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-y-[2px]"
                style={{ padding: 0 }}
              >
                {/* Outer white body/shell — premium keycap base */}
                <div
                  className="absolute inset-0 rounded-[22px]"
                  style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #f5f2ec 60%, #e8e4dc 100%)',
                    boxShadow: '0 8px 0 #d5d0c6, 0 10px 0 #c4bfb4, 0 14px 30px rgba(0,0,0,0.22), 0 4px 8px rgba(0,0,0,0.12)',
                  }}
                />
                {/* Gold trim ring */}
                <div
                  className="absolute rounded-[17px]"
                  style={{
                    inset: '5px',
                    border: '2px solid hsl(42 55% 62% / 0.5)',
                    boxShadow: 'inset 0 0 4px rgba(201,168,76,0.12), 0 0 3px rgba(201,168,76,0.1)',
                  }}
                />
                {/* Teal inner face */}
                <div
                  className="relative rounded-[13px] px-12 py-7 flex flex-col items-center justify-center"
                  style={{
                    margin: '8px 8px 14px 8px',
                    background: 'linear-gradient(180deg, #28918f 0%, #1d7372 30%, #166060 70%, #134e4d 100%)',
                    boxShadow: `
                      inset 0 2px 2px rgba(255,255,255,0.25),
                      inset 0 -2px 4px rgba(0,0,0,0.15),
                      inset 1px 0 2px rgba(255,255,255,0.08),
                      inset -1px 0 2px rgba(255,255,255,0.08)
                    `,
                    borderTop: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <span className="font-bold text-lg sm:text-xl leading-snug text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>Do you know where your will is?</span>
                  <span className="text-base sm:text-lg font-semibold leading-snug mt-1.5 text-white/95" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>Save a secure copy here.</span>
                </div>
              </button>
            </div>
          </section>

          {/* What Is a Will */}
          <section className="py-16 sm:py-20 bg-background">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                What Is a Will?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A will — sometimes called a "last will and testament" — is a legal document that
                outlines how a person wants their assets distributed after they pass away. It names
                beneficiaries, designates an executor (or personal representative) to carry out
                those wishes, and can include specific instructions about property, personal items,
                guardianship of minor children, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In Washington State, a valid will must be in writing, signed by the person making
                it (the testator), and witnessed by at least two competent individuals. While a will
                does not avoid probate, it provides the court with a clear roadmap for how the estate
                should be administered.
              </p>
            </div>
          </section>

          {/* What a Will Does */}
          <section className="py-16 sm:py-20 bg-secondary">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                What a Will Does
              </h2>
              <ul className="space-y-4">
                <CheckItem>Names who inherits specific assets — including real property</CheckItem>
                <CheckItem>Designates an executor or personal representative to manage the estate</CheckItem>
                <CheckItem>Provides instructions for how property should be sold, transferred, or distributed</CheckItem>
                <CheckItem>Can specify whether a home should be kept in the family or listed for sale</CheckItem>
                <CheckItem>Establishes a framework that guides the probate court's decisions</CheckItem>
                <CheckItem>May include conditions — such as a right of first refusal for a family member</CheckItem>
              </ul>
            </div>
          </section>

          {/* Why Wills Matter for Real Estate */}
          <section className="py-16 sm:py-20 bg-background">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                Why Wills Matter When Real Estate Is Involved
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For many families, a home is the most valuable asset in the estate. The will
                determines who has the authority to make decisions about that property — and those
                decisions carry real financial consequences.
              </p>
              <ul className="space-y-4">
                <CheckItem>The executor named in the will is the only person authorized to list and sell estate property</CheckItem>
                <CheckItem>Without a will, the court must appoint a personal representative — which can delay the sale by months</CheckItem>
                <CheckItem>A will may require an appraisal for equitable distribution among multiple heirs</CheckItem>
                <CheckItem>Tax obligations — including stepped-up basis calculations — depend on accurate property valuation at the date of death</CheckItem>
                <CheckItem>Disagreements between heirs about whether to sell or keep a property are more easily resolved when a will provides clear direction</CheckItem>
              </ul>
            </div>
          </section>

          <MidPageCTA />

          {/* Common Situations */}
          <section className="py-16 sm:py-20 bg-secondary">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                Common Family &amp; Executor Situations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most people in these situations didn't plan for this. Whether you're a first-time
                executor, an heir who lives out of state, or a family trying to figure out what
                comes next — the real estate side of a will can feel overwhelming.
              </p>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    First-Time Executor
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You've been named in a will as the executor — but you've never done this before.
                    You're not sure what to do with the house, whether to clean it out, when you can
                    sell, or how to price it. We walk executors through the real estate side step by
                    step.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Multiple Heirs With Different Opinions
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    One sibling wants to sell. Another wants to keep the house. A third lives across
                    the country. When a will divides property among multiple beneficiaries, an
                    independent, certified appraisal can provide the neutral ground everyone needs to
                    move forward.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Out-of-State Family Members
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Managing estate property from a distance is one of the most stressful situations
                    we see. We coordinate with attorneys, manage property access, and handle the
                    preparation and sale — so you don't have to fly back and forth.
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    No Will (Intestate)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When someone passes without a will, the process becomes more complex — but it
                    doesn't have to be chaotic. We work with families and their attorneys to navigate
                    the real estate side of intestate estates with the same care and precision.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Disclosure */}
          <section className="py-16 sm:py-20 bg-background">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                We Don't Provide Legal Advice — And Here's Why That Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                David Stein is a licensed real estate broker and Washington State certified real
                estate appraiser. He is not an attorney, CPA, or tax advisor — and does not provide
                legal, tax, or accounting advice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That distinction is important. When families are navigating a will, they need
                professionals who stay in their lane. We focus on what we do best — accurate property
                valuation, thoughtful preparation, and steady guidance through the real estate side
                of estate transitions — while working alongside the attorneys and advisors who handle
                the legal and financial dimensions.
              </p>
            </div>
          </section>

          {/* How We Help */}
          <section className="py-16 sm:py-20 bg-secondary">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                How Real Property Planning Helps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 20 years of experience as both a certified appraiser and a licensed real
                estate broker, David Stein works with families, executors, and attorneys to handle
                the real property side of estate administration — from the first conversation to the
                closing table.
              </p>
              <ul className="space-y-4">
                <CheckItem>Certified appraisals for estate tax, equitable distribution, and stepped-up basis documentation</CheckItem>
                <CheckItem>Market analysis and pricing strategy tailored to estate timelines</CheckItem>
                <CheckItem>Property preparation — cleanout, repairs, staging — coordinated on your behalf</CheckItem>
                <CheckItem>Steady communication with executors, heirs, and attorneys throughout the process</CheckItem>
                <CheckItem>Support for out-of-state families who can't be on-site</CheckItem>
                <CheckItem>A calm, experienced presence during one of the most difficult transitions a family can face</CheckItem>
              </ul>

              <div className="mt-10 text-center">
                <Link to="/contact" className="inline-block group">
                  <div className="relative inline-flex items-center justify-center cursor-pointer transition-all duration-200 group-hover:-translate-y-1 active:translate-y-[2px]">
                    {/* White outer shell */}
                    <div className="absolute inset-0 rounded-[20px]" style={{
                      background: 'linear-gradient(180deg, #ffffff 0%, #f5f2ec 60%, #e8e4dc 100%)',
                      boxShadow: '0 7px 0 #d5d0c6, 0 9px 0 #c4bfb4, 0 12px 26px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.1)',
                    }} />
                    {/* Gold trim */}
                    <div className="absolute rounded-[16px]" style={{
                      inset: '5px',
                      border: '2px solid hsl(42 55% 62% / 0.5)',
                      boxShadow: 'inset 0 0 4px rgba(201,168,76,0.12)',
                    }} />
                    {/* Teal inner face */}
                    <div className="relative rounded-[12px] inline-flex items-center gap-3 px-10 py-5" style={{
                      margin: '8px 8px 14px 8px',
                      background: 'linear-gradient(180deg, #28918f 0%, #1d7372 30%, #166060 70%, #134e4d 100%)',
                      boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.25), inset 0 -2px 4px rgba(0,0,0,0.15)',
                      borderTop: '1px solid rgba(255,255,255,0.3)',
                    }}>
                      <img src={iconPhone3d} alt="" className="w-7 h-7" aria-hidden="true"  loading="lazy"/>
                      <span className="font-bold text-lg text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>Schedule a Conversation</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>


          {/* Secure Will Vault */}
          <SecureWillSection />

          {/* FAQ */}
          <section className="py-16 sm:py-20 bg-background">
            <div className="mx-auto max-w-3xl px-6">
              <PageFAQ faqs={willsFaqs} heading="Frequently Asked Questions About Wills & Real Estate" />
            </div>
          </section>

          {/* Related Services */}
          <RelatedServices currentPath="/wills" />

              <DisclaimerSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Wills;
