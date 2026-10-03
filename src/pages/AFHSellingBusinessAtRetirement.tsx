import Header from "@/components/Header";
import { articleAuthor, articlePublisher } from "@/lib/schema";
import AuthorByline from "@/components/AuthorByline";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import IntentCTA from "@/components/IntentCTA";

const GREEN = "#0a5648";

const topics = [
  {
    title: "Selling the Business and the Building Together",
    description:
      "Why many retiring AFH owners sell both as a single transaction — and what buyers are actually paying for in each piece.",
  },
  {
    title: "DSHS Change of Ownership",
    description:
      "Washington AFH licenses do not transfer. What the buyer must do to qualify for their own license, and what that means for your timeline.",
  },
  {
    title: "Valuing the Business Separately From the Real Estate",
    description: "Goodwill, occupancy history, and staff continuity all carry value beyond the property itself.",
  },
  {
    title: "Protecting Your Residents Through the Transition",
    description: "Washington requires 60 days' written notice to DSHS and every resident before a change of ownership, and residents decide whether to stay or move.",
  },
  {
    title: "Timing Your Exit",
    description: "Why AFH sales often take longer than a typical home sale — and how to plan your retirement timeline around it.",
  },
  {
    title: "Getting an Accurate Valuation",
    description: "A residential appraisal values the real estate only. It does not value the operating business.",
  },
];

/* Exit options (Oct 3, 2026, from the owner's AFH Club Handbook draft). */
const EXIT_OPTIONS = [
  {
    title: "Sell the house and the business together",
    text: "The most common exit. The buyer gets an operating home with residents and staff, and applies for its own license.",
  },
  {
    title: "Sell the business and keep the house",
    text: "Lease the house to the buyer of the business. You collect rent instead of a lump sum, and the lease needs to allow adult family home use for the length of the buyer's plans.",
  },
  {
    title: "Lease the house to another operator",
    text: "Another provider can lease the house and run a home there under its own license. Timing matters: DSHS confirmed that a home taken over through a change of ownership keeps the building rules it was first licensed under, while a home whose license lapsed must meet current rules, including 27-inch interior doors. Ask DSHS how your plan will be treated before you close your license.",
  },
  {
    title: "Keep ownership and step back from daily work",
    text: "A resident manager can run the home day to day, but you stay the licensee and responsible for it. The resident manager must meet the same experience and training rules, including 1,000 hours of direct care.",
  },
  {
    title: "Transition gradually",
    text: "Some owners hand over in stages: reduce their own hours first, build a staff that can run the home without them, then sell. A home that runs without its owner is easier for a buyer and a lender to value.",
  },
];

const faqs = [
  {
    question: "Do I have to sell the building when I sell my AFH business?",
    answer:
      "No. The business and the real estate can be separate decisions. You can sell both together, sell the business and lease the house to the buyer, lease the house to another licensed operator, or keep both and hire a resident manager while you stay the licensee. Any new owner of the business applies for its own license through a change of ownership.",
  },
  {
    question: "I'm planning to retire from running my AFH — should I sell the business and the building together, or separately?",
    answer:
      "Many retiring owners sell both together, because a buyer can step into an operating home with residents and staff rather than assembling those pieces separately. The license is the exception: it never transfers, so the buyer still needs a new license of their own. A single transaction is usually simpler. There are situations (like keeping the real estate as an investment while transferring just the operations) where separating them makes sense. It depends on your specific goals for retirement.",
  },
  {
    question: "What happens to my DSHS license when I sell my Adult Family Home?",
    answer:
      "Washington Adult Family Home licenses are not transferable (WAC 388-76-10010). Your license does not pass to the buyer with the business or the real estate — the buyer must file a new license application through the DSHS Change of Ownership process and qualify for a license of their own, including background checks, training, and an on-site DSHS inspection, before they can legally operate the home. If your home is licensed for seven or eight residents, the buyer must already have been a licensed AFH provider for at least 24 months and meet the other conditions in WAC 388-76-10032. Specialty contracts (ECS, SBS) and your Medicaid contract do not transfer either. Plan for this early, since it affects your closing timeline.",
  },
  {
    question: "How do I value my AFH business separately from the real estate?",
    answer:
      "A business's value comes from factors beyond the physical property — occupancy history, revenue and profitability, staff retention, the mix of Medicaid and private-pay residents, and the reputation you've built with families and referral sources. The license and contracts are not part of what transfers, since the buyer must obtain their own. A straightforward residential appraisal captures the real estate value, but it doesn't capture any of that operational value. Getting both pieces valued properly — the real estate and the operating business — gives you a realistic picture of what you're actually selling.",
  },
  {
    question: "What are my residents entitled to when I sell my AFH?",
    answer:
      "You must give DSHS and each resident (or their representative) written notice 60 calendar days before the proposed change of ownership. The notice names you and the buyer, the home, the date, the resident's right to decide whether to stay or move, and any change in policies or operations that could affect them — for example, whether the new owner will serve Medicaid residents (WAC 388-76-10106). If DSHS grants priority processing, which you can request in writing, it may waive the 60 days, but notice is still required as early as possible (WAC 388-76-10107). Medicaid residents who stay need no new assessment, but they need new authorizations under the new owner's ProviderOne number.",
  },
  {
    question: "How long does it typically take to sell an AFH business and building?",
    answer:
      "AFH sales generally take longer than a typical residential sale, largely because of the buyer's DSHS license. DSHS will not estimate how long a change-of-ownership license takes; a complete application avoids delays. Its posted queue showed applications received in May 2026 being processed in late September 2026, processing can take up to 60 days once an application is complete, and most applicants do not pass the first inspection (DSHS allows at most three visits). Add the 60-day resident notice. Note that the buyer is applying for their own license through the Change of Ownership process rather than receiving yours — your license is not transferable. Building that timeline into your retirement planning, rather than assuming it'll move at typical real estate speed, avoids unwelcome surprises.",
  },
  {
    question: "Do I need a real estate broker who specializes in AFH transactions?",
    answer:
      `It genuinely helps. An AFH sale involves real estate valuation, business valuation, DSHS licensing logistics, and resident-transition considerations all at once — a broker without specific AFH experience may handle the real estate side competently but miss the licensing and operational pieces that determine whether the transaction actually closes smoothly. ${FEATURED_BROKER.Role}, a Washington State licensed broker and certified appraiser with AFH-specific experience, can walk you through what a realistic sale looks like for your specific home.`,
  },
];

/* Article schema. AFH guides previously emitted only BreadcrumbSchema, so
   Google had no signal that these are editorial guides rather than agent
   pages. Author/publisher is the Organization — publishing reference material
   is a hub function and makes no claim that RPP provides services. */
const afhArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Selling Your Adult Family Home Business at Retirement",
  description: "Planning to retire from operating your Adult Family Home? Learn how to sell the business and building together, navigate the DSHS Change of Ownership process, and value your AFH accurately.",
  url: "https://realpropertyplanning.com/afh-club/selling-your-business-at-retirement",
  datePublished: "2026-07-22",
  dateModified: "2026-10-03",
  author: articleAuthor,
  publisher: articlePublisher,
  isPartOf: {
    "@type": "WebSite",
    name: "Real Property Planning",
    url: "https://realpropertyplanning.com",
  },
};

const AFHSellingBusinessAtRetirement = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Selling Your Adult Family Home Business at Retirement | Real Property Planning"
      description="Planning to retire from operating your Adult Family Home? Learn how to sell the business and building together, navigate the DSHS Change of Ownership process, and value your AFH accurately."
      canonical="https://realpropertyplanning.com/afh-club/selling-your-business-at-retirement"
      ogType="article"
      schemaJson={afhArticleSchema}
    />
    <BreadcrumbSchema
      items={[
        { name: "AFH Club", url: "/afh-club" },
        {
          name: "Selling Your Business at Retirement",
          url: "/afh-club/selling-your-business-at-retirement",
        },
      ]}
    />
    <Header />
    <main id="main-content">
      <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
      <HeroBandTitle as="h1">Selling Your AFH Business at Retirement</HeroBandTitle>

      <section className="py-14 md:py-20 bg-cream">
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed space-y-4">
            <p>
              Running an Adult Family Home for years — sometimes decades — builds something that's genuinely
              difficult to walk away from: relationships with residents and their families, a trained staff who
              trust your leadership, and a business that, done well, has real value beyond the four walls it sits
              in. When retirement starts to feel real, the question isn't just "what's my house worth" — it's how to
              responsibly transition everything you've built to someone who can carry it forward.
            </p>
            <p>
              Selling an AFH at retirement is meaningfully different from selling a typical home, or even a typical
              small business. It runs on two tracks that have to work together: the real estate transaction, and the
              DSHS Change of Ownership process. Your license does not transfer with the business or the real estate —
              the buyer must complete the Change of Ownership process and qualify for a new Adult Family Home license
              of their own. Getting both tracks right — and valued accurately — is what separates a well-planned exit
              from a rushed one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4">
              Things to Think Through
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[44px] font-semibold text-navy leading-tight">
              Six areas that shape a well-planned AFH exit
            </h2>
          </div>

          <p className="max-w-3xl mx-auto text-center text-navy/90 text-base leading-relaxed mb-8">
            Not sure where to start?{" "}
            <Link
              to="/contact?reason=afh-buy-sell"
              className="text-gold font-bold underline underline-offset-2 hover:text-[hsl(var(--gold-dark))]"
            >
              Send a question about your home and the right first step.
            </Link>
          </p>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-xl p-5"
                style={{ border: `1px solid ${GREEN}55`, background: "#ffffff" }}
              >
                <h3 className="font-serif text-[19px] font-semibold mb-2" style={{ color: GREEN }}>
                  {t.title}
                </h3>
                <p className="text-foreground text-[15px] leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-cream">
        <div className="container px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4 text-center">
              Your Options
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] lg:text-[44px] font-semibold text-navy leading-tight text-center mb-6">
              Selling everything is not the only way out
            </h2>
            <p className="text-foreground mb-6">
              The business and the house can be separate decisions. Which one fits depends on whether you need the
              cash now, how much you still owe on the house, and how involved you want to stay.
            </p>
            <ol className="space-y-4" style={{ listStyle: "decimal", paddingLeft: 22 }}>
              {EXIT_OPTIONS.map((o) => (
                <li key={o.title} className="text-foreground" style={{ listStyle: "decimal" }}>
                  <strong style={{ color: GREEN }}>{o.title}.</strong> {o.text}
                </li>
              ))}
            </ol>
            <p className="text-foreground mt-6">
              Whichever you choose, a new owner of the business, including a new partner or an LLC you form, applies
              for its own license through a change of ownership, and you give DSHS and every resident 60 days&apos;
              written notice first (
              <a href="https://app.leg.wa.gov/WAC/default.aspx?cite=388-76-10106" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: GREEN, fontWeight: 700 }}>WAC 388-76-10106</a>
              ). Buyers will ask for your records whichever way you go:{" "}
              <Link to="/afh-club/before-you-buy-an-adult-family-home" className="underline underline-offset-2" style={{ color: GREEN, fontWeight: 700 }}>
                what a careful buyer will verify
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <PageFAQ
        faqs={faqs}
        heading="Selling Your AFH at Retirement: Common Questions"
        eyebrow="Frequently Asked Questions"
        id="afh-selling-business-retirement"
      />
      <AuthorByline />
    </main>
    <IntentCTA
      heading="Selling the property, the business, or both?"
      body="How the sale is structured changes the price, the taxes, and who the buyer can be. Ask about your home before deciding."
      buttonText="Discuss selling the property, the business, or both"
      reason="afh-buy-sell"
      professional="broker"
    />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHSellingBusinessAtRetirement;
