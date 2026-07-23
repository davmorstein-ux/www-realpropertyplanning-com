import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";

const GREEN = "#0a5648";

const topics = [
  {
    title: "Selling the Business and the Building Together",
    description:
      "Why most retiring AFH owners sell both as a single transaction — and what buyers are actually paying for in each piece.",
  },
  {
    title: "Transferring Your DSHS License",
    description: "What happens to your license when you sell, and what the new owner needs to have approved.",
  },
  {
    title: "Valuing the Business Separately From the Real Estate",
    description: "Goodwill, occupancy history, and staff continuity all carry value beyond the property itself.",
  },
  {
    title: "Protecting Your Residents Through the Transition",
    description: "Washington State requirements around resident notice and continuity of care during a change of ownership.",
  },
  {
    title: "Timing Your Exit",
    description: "Why AFH sales often take longer than a typical home sale — and how to plan your retirement timeline around it.",
  },
  {
    title: "Getting an Accurate Valuation",
    description: "Why a residential appraisal alone usually understates what an operating AFH business is actually worth.",
  },
];

const faqs = [
  {
    question: "I'm planning to retire from running my AFH — should I sell the business and the building together, or separately?",
    answer:
      "Most retiring owners sell both together, and most buyers prefer it that way — it lets them step directly into an operating home with residents, staff, and licensing already in place, rather than assembling those pieces separately. Selling the business and building as a single transaction is usually simpler and often nets more than selling them apart, though there are situations (like keeping the real estate as an investment while transferring just the operations) where separating them makes sense. It depends on your specific goals for retirement.",
  },
  {
    question: "What happens to my DSHS license when I sell my Adult Family Home?",
    answer:
      "Your DSHS license doesn't automatically transfer to a new owner — the buyer must go through their own licensee approval process, including background checks, training, and a home study, before they can legally operate the home. This is one of the biggest differences between selling an AFH and selling a typical small business, and it's worth planning for early, since it affects your closing timeline.",
  },
  {
    question: "How do I value my AFH business separately from the real estate?",
    answer:
      "A business's value comes from factors beyond the physical property — occupancy history, revenue and profitability, staff retention, Medicaid certification status if applicable, and the reputation you've built with families and referral sources. A straightforward residential appraisal captures the real estate value, but it doesn't capture any of that operational value. Getting both pieces valued properly — the real estate and the operating business — gives you a realistic picture of what you're actually selling.",
  },
  {
    question: "What are my residents entitled to when I sell my AFH?",
    answer:
      "Washington State has specific notice and transition requirements to protect residents during a change of ownership, since a sudden disruption in their care setting can be genuinely harmful to people who may be medically fragile or have limited ability to relocate easily. Planning your sale timeline with these requirements in mind — rather than treating resident transition as an afterthought — is both a legal obligation and, for most owners who've built real relationships with their residents, simply the right way to handle it.",
  },
  {
    question: "How long does it typically take to sell an AFH business and building?",
    answer:
      "AFH sales generally take longer than a typical residential sale, largely because of the DSHS licensee approval timeline for the buyer. Depending on how prepared your buyer is and how quickly DSHS processes their application, the full process — from accepted offer to closing and the buyer's license transfer — can take several months. Building that timeline into your retirement planning, rather than assuming it'll move at typical real estate speed, avoids unwelcome surprises.",
  },
  {
    question: "Do I need a real estate broker who specializes in AFH transactions?",
    answer:
      "It genuinely helps. An AFH sale involves real estate valuation, business valuation, DSHS licensing logistics, and resident-transition considerations all at once — a broker without specific AFH experience may handle the real estate side competently but miss the licensing and operational pieces that determine whether the transaction actually closes smoothly. David Stein, a Washington State licensed broker and certified appraiser with AFH-specific experience, can walk you through what a realistic sale looks like for your specific home.",
  },
];

const AFHSellingBusinessAtRetirement = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Selling Your Adult Family Home Business at Retirement | Real Property Planning"
      description="Planning to retire from operating your Adult Family Home? Learn how to sell the business and building together, transfer your DSHS license, and value your AFH accurately."
      canonical="https://realpropertyplanning.com/afh-club/selling-your-business-at-retirement"
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
              transfer of your DSHS operating license to a new, DSHS-approved owner. Getting both right — and valued
              accurately — is what separates a well-planned exit from a rushed one.
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

          <p className="max-w-3xl mx-auto text-center text-navy/70 text-base leading-relaxed mb-8">
            Not sure where to start?{" "}
            <Link
              to="/contact"
              className="text-gold font-bold underline underline-offset-2 hover:text-[hsl(var(--gold-dark))]"
            >
              Reach out and we'll help you figure out the right first step.
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

      <PageFAQ
        faqs={faqs}
        heading="Selling Your AFH at Retirement: Common Questions"
        eyebrow="Frequently Asked Questions"
        id="afh-selling-business-retirement"
      />
    </main>
    <DisclaimerSection />
    <Footer />
  </div>
);

export default AFHSellingBusinessAtRetirement;
