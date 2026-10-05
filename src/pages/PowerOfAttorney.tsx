import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home, Heart, Globe, ShieldCheck, FileText, Users, Briefcase } from "lucide-react";
import poaIcon from "@/assets/icons/power-of-attorney-icon-washington.webp";
import { FEATURED_APPRAISER, FEATURED_BROKER } from "@/data/featuredProfessionals";
import IntentCTA from "@/components/IntentCTA";
import QuickAnswers from "@/components/QuickAnswers";
import PageFAQ from "@/components/PageFAQ";
import PoaLimits from "@/components/guides/PoaLimits";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const whenCards = [
  {
    icon: <Home className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Senior Housing Transitions",
    text: "When an aging parent can no longer manage their own affairs, the agent holding Power of Attorney often becomes responsible for selling the family home and coordinating the move to assisted living or senior care.",
  },
  {
    icon: <Heart className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Medical Situations",
    text: "When a loved one becomes suddenly incapacitated due to illness or injury, the agent may need to act quickly on real estate matters — including selling a home to fund care.",
  },
  {
    icon: <Globe className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Out-of-State Families",
    text: "When a family member lives far away and cannot manage a Washington State property in person, a Power of Attorney allows a local agent to act on their behalf.",
  },
  {
    icon: <FileText className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Estate Planning",
    text: "Some families establish Power of Attorney proactively as part of a broader estate plan, ensuring that real estate decisions can be made smoothly if the need arises.",
  },
];

const howWeHelpCards = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Certified Home Valuation",
    text: "A court-acceptable appraisal that establishes fair market value and protects the agent's decision-making.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Real Estate Brokerage",
    text: "Experienced representation for the sale of the property — from preparation through closing.",
  },
  {
    icon: <Heart className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Calm Guidance",
    text: "Patient, clear communication that respects both the agent's responsibility and the principal's dignity.",
  },
  {
    icon: <Users className="h-6 w-6 text-gold" aria-hidden="true" />,
    title: "Working Alongside Your Advisors",
    text: "Communication with the attorney, senior move manager, and other professionals you have chosen, so the sale fits the rest of the plan.",
  },
];

const relatedPages = [
  { title: "Senior Transitions", href: "/senior-transitions" },
  { title: "Real Estate Appraiser", href: "/real-estate-appraiser" },
  { title: "For Attorneys", href: "/for-attorneys" },
  { title: "How to Move Elderly Parents", href: "/guides/senior-transition-differences" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Power of Attorney & Real Estate in Washington State",
  description: "If you hold Power of Attorney for an aging parent or loved one in Washington State, this resource can help you navigate real estate decisions, home sales, and certified appraisals with confidence.",
  url: "https://realpropertyplanning.com/power-of-attorney",
};

const PowerOfAttorney = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Power of Attorney & Real Estate in Washington"
        description="Holding Power of Attorney for an aging parent in Washington? Guidance for real estate decisions, home sales, and certified appraisals."
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">

        {/* Hero */}
        <HeroBandTitle as="h1">Helping Those Who Hold Power of Attorney Navigate Real Estate in Washington State</HeroBandTitle>

        {/* Intro — relocated out of the title band. The band carries the
            page title and nothing else, sitewide. */}
        <section className="py-10 md:py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              If you have been granted Power of Attorney for an aging parent, spouse, or loved one, you may find yourself responsible for making real estate decisions on their behalf.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              That is a significant responsibility. This guide explains what the document usually allows, what to confirm before acting, and which independent professionals handle each part of a sale.
            </p>
            </div>
          </div>
        </section>
        <QuickAnswers />

        {/* What Is POA */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>What Is Power of Attorney?</h2>
              <p className={pClass}>
                Power of Attorney is a legal document that grants one person — the agent — the authority to make decisions on behalf of another person — the principal. In the context of real estate, a Power of Attorney may allow the agent to sell, manage, or make decisions about property owned by the principal when they are no longer able to do so themselves.
              </p>
              <p className={pClass}>
                In Washington State, a power of attorney ends if the principal becomes incapacitated unless the document says it survives incapacity (RCW 11.125.040). A power of attorney that does say so — a durable power of attorney — remains in effect, which makes it one of the most important legal tools in senior transition and estate planning. To be valid, it must be signed and dated, and either notarized or signed by two qualified witnesses (RCW 11.125.050). For real estate, have it notarized: title companies usually record the power of attorney with the deed, and the statute's rules requiring banks and others to accept a power of attorney apply to notarized ones. A power of attorney ends at the principal's death; after that, only a court-appointed personal representative or a trustee can sell.
              </p>
            </div>
          </div>
        </section>

        {/* When Does POA Come Into Play */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className="max-w-4xl mx-auto">
              <h2 className={h2Class + " text-center"}>When Does Power of Attorney Come Into Play With Real Estate?</h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {whenCards.map((card) => (
                  <div key={card.title} className="bg-card rounded-2xl shadow-sm border border-border p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">{card.icon}</div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-[16px] leading-[1.75]">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Can an Agent Do */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>What Can an Agent Under Power of Attorney Do With Real Estate?</h2>
              <p className={pClass}>
                The specific powers granted depend on the language of the Power of Attorney document itself. In many cases an agent can list and sell real property, sign contracts and closing documents, hire real estate professionals and appraisers, manage and maintain the property, and make decisions about repairs and preparation for sale.
              </p>
              <p className={pClass}>
                It is always important to work with an attorney to confirm the scope of authority granted before taking any action on behalf of the principal.
              </p>
            </div>
          </div>
        </section>

        {/* Why Certified Appraisal Matters */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>Why a Certified Appraisal Matters When Acting Under Power of Attorney</h2>
              <p className={pClass}>
                When selling a property on behalf of someone else, an agent under Power of Attorney has a legal duty to act in the principal's best interests. A certified appraisal from a Washington State licensed appraiser establishes defensible fair market value — protecting the agent from any future questions about whether the property was sold fairly.
              </p>
              <p className={pClass}>
                It also provides documentation that courts, family members, and financial institutions may require. {FEATURED_APPRAISER.name}, the featured appraiser on this site ({FEATURED_APPRAISER.firm}, WA #{FEATURED_APPRAISER.licenseNumber}), provides certified residential appraisals that meet this standard throughout Washington State — independently of Real Property Planning, which holds no licenses.
              </p>
            </div>
          </div>
        </section>

        <PoaLimits />

        {/* How We Help */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className="max-w-4xl mx-auto">
              <h2 className={h2Class + " text-center"}>How a Featured Broker and Appraiser Work With Agents Under Power of Attorney</h2>
              <p className={pClass + " text-center max-w-3xl mx-auto mb-10"}>
                {FEATURED_BROKER.Role}, working through {FEATURED_BROKER.pronoun.possessive} own brokerage, understands the unique position agents find themselves in — responsible for someone else's most valuable asset, often during a stressful and emotional time.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {howWeHelpCards.map((card) => (
                  <div key={card.title} className="bg-card rounded-2xl shadow-sm border border-border p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">{card.icon}</div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-[16px] leading-[1.75]">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ merged from the retired /senior-living/power-of-attorneys page
            (Oct 4, 2026, Question Map step 8). */}
        <PageFAQ
          eyebrow="Power of Attorney FAQ"
          heading="Power of Attorney and Real Estate: More Questions"
          id="poa-faq"
          faqs={[
            {
              question: "Can a power of attorney be used to sell a house?",
              answer:
                "Yes. A properly executed power of attorney can authorize an agent to list, negotiate, and close the sale of real property on behalf of the principal. The document must give the agent authority over real property, and the title company handling the closing will review it before the sale closes.",
            },
            {
              question: "Does a power of attorney need to be recorded with the county?",
              answer:
                "Washington law does not require a power of attorney to be recorded. In practice, title companies usually require a POA used to sell real estate to be recorded with the county auditor's office where the property is located, along with the deed. Recording puts the document in the public record, and a recorded POA is not treated as revoked until a revocation is also recorded there (RCW 65.08.130).",
            },
            {
              question: "Will title companies accept any power of attorney?",
              answer:
                "Title companies review every POA, but Washington limits when a notarized one can be refused. Under RCW 11.125.200, a person asked to accept a notarized power of attorney must accept it, or request an agent's certification or a translation, within seven business days, and may refuse only for reasons the statute lists, such as a good-faith belief that the POA is not valid or that the agent lacks authority. A POA that was only witnessed, not notarized, does not get this protection, so notarization is the safer choice for real estate. A qualified attorney can review the document before a sale.",
            },
            {
              question: "What happens if the power of attorney document is outdated?",
              answer:
                "An outdated POA may not meet current legal standards or may lack the specific language required by title companies and lenders. If the document was created years ago, it's worth having an attorney review and update it before beginning a real estate transaction. Addressing this early prevents delays later.",
            },
            {
              question: "Can a power of attorney sign listing agreements and purchase contracts?",
              answer:
                "Yes, as long as the POA gives the agent authority over real property. The agent acting under the POA signs on behalf of the principal, and the listing agreement and purchase contract should clearly reflect this arrangement.",
            },
            {
              question: "What documentation is required to use a POA in a property sale?",
              answer:
                "At minimum, you'll need the power of attorney itself (title companies usually ask for the original or a certified copy), valid identification for the agent, and, in most cases, recording of the POA with the county, which title companies usually require even though state law does not. The title company may also ask the agent to sign a certification that the POA is still in effect. Title companies and lenders may request additional documentation depending on the specifics of the transaction.",
            },
            {
              question: "Can multiple people act as agents under a power of attorney?",
              answer:
                "Yes, a power of attorney can name more than one agent. Unless the document says otherwise, Washington requires co-agents to act jointly (RCW 11.125.110), so every named agent may need to sign the listing agreement, purchase contract, and closing documents. A document that lets each agent act alone avoids this.",
            },
            {
              question: "What's the difference between a general and durable power of attorney?",
              answer:
                "In Washington, a power of attorney ends when the principal becomes incapacitated unless it says it survives incapacity (RCW 11.125.040); a document with that wording is a durable power of attorney. Every power of attorney ends at the principal's death (RCW 11.125.100). For real estate situations involving aging or illness, a durable POA is usually the more appropriate and practical option.",
            },
          ]}
        />

        {/* Legal Authority Note */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>Important Note About Legal Authority</h2>
              <p className={pClass}>
                Real Property Planning is a free educational resource and does not provide legal advice. Before taking any real estate action under Power of Attorney, {FEATURED_BROKER.role} strongly recommends consulting with a qualified Washington State attorney to confirm the scope and validity of your authority.
              </p>
              <p className={pClass}>
                Real Property Planning does not refer clients to attorneys; choose a Washington-licensed elder law attorney and confirm their license with the Washington State Bar Association (wsba.org).
              </p>
            </div>
          </div>
        </section>

        {/* Serving Statewide */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>Serving Power of Attorney Agents Throughout Washington State</h2>
              <p className={pClass}>
                From Seattle and King County to Spokane, Bellingham, Tacoma, Olympia, and every community in between — {FEATURED_BROKER.Role} works with agents under Power of Attorney throughout Washington State.
              </p>
              <p className={pClass}>
                Whether the situation is straightforward or complex, {FEATURED_BROKER.role} is here to help you move forward with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-navy">
          <div className={contentWrap}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
                Not Sure Where to Start? That's Exactly Where Most People Are.
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                A short conversation is usually the fastest way to get clarity. There is no obligation — just a practical talk about your situation and what makes sense next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2069003015" className="rpp-dark-surface inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Call (206) 900-3015
                </a>
                <Link to="/contact" className="rpp-dark-surface inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/20">
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className="max-w-3xl mx-auto">
              <h2 className={h2Class + " text-center"}>Related Pages</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="marquee-hover bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow group"
                  >
                    <span className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                      {page.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <IntentCTA
          heading="Acting under a power of attorney for a property?"
          body="What the document lets you do, what a title company will accept, and how to document the value are questions to settle before listing. Ask about the property."
          buttonText="Ask about selling under a power of attorney"
          reason="estate-property"
          professional="broker"
        />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default PowerOfAttorney;
