import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Phone, Home, Heart, Globe, ShieldCheck, FileText, Users, Briefcase, Scale } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import poaIcon from "@/assets/icons/power-of-attorney-icon-washington.webp";

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
    title: "Professional Coordination",
    text: "Connection to elder law attorneys, senior move managers, and other professionals who support families in these situations.",
  },
];

const relatedPages = [
  { title: "Senior Transitions", href: "/senior-transitions" },
  { title: "Real Estate Appraiser", href: "/real-estate-appraiser" },
  { title: "For Attorneys", href: "/for-attorneys" },
  { title: "How to Move Elderly Parents", href: "/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Power of Attorney & Real Estate in Washington State",
  description: "If you hold Power of Attorney for an aging parent or loved one in Washington State, we can help you navigate real estate decisions, home sales, and certified appraisals with confidence.",
  url: "https://www.realpropertyplanning.com/power-of-attorney",
};

const PowerOfAttorney = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Power of Attorney & Real Estate in Washington State | Real Property Planning"
        description="If you hold Power of Attorney for an aging parent or loved one in Washington State, we can help you navigate real estate decisions, home sales, and certified appraisals with confidence."
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">

        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className={contentWrap}>
            <div className={proseWrap + " text-center"}>
              <div className="flex justify-center mb-8 md:mb-10">
                <img src={poaIcon} alt="Power of Attorney real estate guidance in Washington State" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-foreground leading-tight mb-6">
                Helping Those Who Hold Power of Attorney Navigate Real Estate in Washington State
              </h1>
              <p className={pClass}>
                If you have been granted Power of Attorney for an aging parent, spouse, or loved one, you may find yourself responsible for making real estate decisions on their behalf.
              </p>
              <p className={pClass}>
                That is a significant responsibility — and one that Real Property Planning is uniquely equipped to help you navigate with confidence, care, and the right professional expertise.
              </p>
              <Link to="/contact" className="inline-block mt-6">
                <button className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  Talk to Us About Your Situation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* What Is POA */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>What Is Power of Attorney?</h2>
              <p className={pClass}>
                Power of Attorney is a legal document that grants one person — the agent — the authority to make decisions on behalf of another person — the principal. In the context of real estate, a Power of Attorney may allow the agent to sell, manage, or make decisions about property owned by the principal when they are no longer able to do so themselves.
              </p>
              <p className={pClass}>
                In Washington State, a Durable Power of Attorney remains in effect even if the principal becomes incapacitated — making it one of the most important legal tools in senior transition and estate planning.
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
                It also provides documentation that courts, family members, and financial institutions may require. Real Property Planning provides certified residential appraisals (WA #1702080) that meet this standard throughout Washington State.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <div className="max-w-4xl mx-auto">
              <h2 className={h2Class + " text-center"}>How Real Property Planning Helps Agents Under Power of Attorney</h2>
              <p className={pClass + " text-center max-w-3xl mx-auto mb-10"}>
                We understand the unique position agents find themselves in — responsible for someone else's most valuable asset, often during a stressful and emotional time.
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

        {/* Legal Authority Note */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className={proseWrap}>
              <h2 className={h2Class}>Important Note About Legal Authority</h2>
              <p className={pClass}>
                Real Property Planning provides real estate brokerage and certified appraisal services. We do not provide legal advice. Before taking any real estate action under Power of Attorney, we strongly recommend consulting with a qualified Washington State attorney to confirm the scope and validity of your authority.
              </p>
              <p className={pClass}>
                If you need a referral to an elder law attorney in Washington State, we are happy to help connect you with a trusted professional.
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
                From Seattle and King County to Spokane, Bellingham, Tacoma, Olympia, and every community in between — Real Property Planning works with agents under Power of Attorney throughout Washington State.
              </p>
              <p className={pClass}>
                Whether the situation is straightforward or complex, we are here to help you move forward with confidence.
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
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                A short conversation is usually the fastest way to get clarity. There is no obligation — just a practical talk about your situation and what makes sense next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2069003015" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain" />
                  Call (206) 900-3015
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/20">
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
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow group"
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

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default PowerOfAttorney;
