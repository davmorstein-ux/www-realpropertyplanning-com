import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import anthonyUpchurchPhoto from "@/assets/providers/anthony-upchurch-legal-plans-legalshield.webp";
import legalShieldLogo from "@/assets/providers/legalshield-logo.webp";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import ProviderHoverPanel from "@/components/ProviderHoverPanel";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Provider {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  href: string;
  specialty: string;
  phone?: string;
  email?: string;
  logo?: string;
  logoAlt?: string;
  bio?: string;
  videoUrl?: string;
}

const providers: Provider[] = [
  {
    name: "Anthony Upchurch",
    title: "Legal and Privacy Manager",
    company: "LegalShield",
    photo: anthonyUpchurchPhoto,
    alt: "Photo of Anthony Upchurch, Legal and Privacy Manager with LegalShield",
    href: "https://anthonyjupchurch.legalshieldassociate.com/",
    phone: "(425) 315-6673",
    email: "aupchurchsecurity@gmail.com",
    logo: legalShieldLogo,
    logoAlt: "LegalShield logo",
    specialty:
      "Legal service plans covering attorney-prepared wills, will reviews and updates, document review, and identity theft monitoring for individuals, families, and small business owners in Washington State",
    bio: "Anthony Upchurch is an independent associate with LegalShield, where he has spent 14 years helping individuals, families, and small business owners understand and enroll in legal service plans and identity protection.\n\nLegalShield plans connect members with a provider law firm in their state. Attorneys at that firm prepare wills for members, review and update existing wills, and handle related documents. Plans also cover consultations on personal legal matters, review of contracts and other documents, and letters or phone calls made on a member's behalf. For families who have been putting off getting a will in place, this is often the most immediately useful part of a membership.\n\nThe company's IDShield service monitors members' personal information and alerts them to suspicious activity, including activity detected on the dark web, and assigns a specialist to help restore a member's identity if it is misused.\n\nLegalShield has operated for 54 years and now serves members across the United States, Canada, and Puerto Rico. Its Access for All program provides translation and support in more than 250 languages.\n\nA United States military veteran, Anthony describes his approach as bringing a servant's heart to the people his clients know, love, and trust.\n\nLegalShield is a legal service plan provider, not a law firm. Legal work, including will preparation, is performed by independent provider law firms. Anthony Upchurch is not an attorney and does not provide legal advice, prepare documents, or represent members.",
    // Not a YouTube URL. ProviderVideoTrigger detects this and renders an
    // external link to LegalShield's hosted page rather than an empty modal.
    videoUrl: "https://anthonyjupchurch.prospectbylegalshield.com/v2_a4a0df7145ae21f141f3ee8ede811473",
  },
];

const faqs = [
  {
    q: "What is a legal service plan?",
    a: "A legal service plan is a membership, paid monthly or annually, that gives members access to a law firm for certain everyday legal needs. Depending on the plan, that can include preparation of a will, review and updating of an existing will, phone consultations on personal legal questions, review of contracts and other documents, and letters or calls made on the member's behalf. Plans are not insurance and they do not cover every legal matter — coverage, exclusions, and fees vary by plan and by state, so ask for the plan documents before enrolling.",
  },
  {
    q: "Does a legal plan actually write my will?",
    a: "Yes. Will preparation is a standard benefit of most legal service plans, and the will is drafted by attorneys at the plan's provider law firm — licensed lawyers, not the representative who sold you the plan. Most plans also cover reviewing and updating an existing will, often annually. Confirm the specifics before enrolling: whether the will is included at no extra charge or discounted, whether a spouse is covered, and whether related documents such as a durable power of attorney and a healthcare directive are included, since those two matter enormously for aging families and are not always part of the same benefit.",
  },
  {
    q: "Is a plan will the same as hiring an estate planning attorney?",
    a: "Not quite, though the gap is narrower than people assume — a real attorney does draft the document. The difference is scope. A plan will is generally a straightforward will, prepared efficiently. An estate planning attorney engaged directly will look at the whole picture: whether a trust would serve you better than a will, how Washington's community property rules affect your assets, incapacity and long-term care planning, Medicaid exposure, business succession, property held in more than one state, and estate tax questions. Families with a blended family, a business, a special-needs beneficiary, or a larger estate should work with a dedicated estate planning or elder law attorney. For a household whose main problem is that nobody has a will at all, a plan will is a substantial improvement over nothing.",
  },
  {
    q: "What is identity theft protection and why does it matter for seniors?",
    a: "Identity protection services monitor personal information — Social Security number, credit and financial accounts, medical identifiers — and alert you when that information appears somewhere it should not, including on the dark web. Most services also assign a specialist to help restore your identity if it is misused. Older adults are targeted disproportionately in identity and financial exploitation schemes, and the risk rises during exactly the transitions this site addresses: a move to senior living, settling an estate, or a period when several new people gain access to a household's paperwork.",
  },
  {
    q: "Is LegalShield a law firm?",
    a: "No. LegalShield is a legal service plan provider. It contracts with independent provider law firms, and those firms — not LegalShield — deliver the legal services to members. Associates who sell the plans, including Anthony Upchurch, are not attorneys and do not give legal advice. If you enroll, ask which provider law firm covers Washington State so you know who you would actually be speaking with.",
  },
  {
    q: "How does this fit alongside the other professionals on this site?",
    a: "A plan covers the ground floor: getting a will in place, keeping it current, looking over documents before they are signed, and answering the smaller questions that come up constantly during a transition. The more complex matters still route to the specialists — an elder law attorney for Medicaid and long-term care planning, an estate planning attorney for trusts and multi-state or blended-family estates, a CPA for estate and trust taxation, a real estate broker for the property itself.",
  },
  {
    q: "What should I ask before enrolling in any legal plan?",
    a: "Ask for the plan's written summary of covered and excluded services, the monthly or annual cost and the minimum commitment, how to cancel, which provider law firm serves your state, what happens if you need a matter the plan does not cover and whether members receive a discounted hourly rate for it, and whether pre-existing legal matters are excluded. Read the plan documents rather than relying on a verbal summary, and take the time you need to decide — a legitimate representative will not press you to enroll on the spot.",
  },
];

const LegalPlansIdentityProtection = () => (
  <>
    <SEOHead
      title="Legal Plans & Identity Protection in Washington State | Real Property Planning"
      description="How legal service plans cover attorney-prepared wills, will reviews, document review, and identity theft monitoring — where a plan is enough, where a Washington estate planning attorney is needed, and what to ask before enrolling."
      canonical="https://realpropertyplanning.com/legal-plans-identity-protection"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        {
          name: "Legal Plans & Identity Protection",
          url: "https://realpropertyplanning.com/legal-plans-identity-protection",
        },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle as="h1">Legal Plans &amp; Identity Protection</HeroBandTitle>
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed mb-6">
              Legal service plans cover attorney-prepared wills, document review, everyday legal questions, and identity
              theft monitoring. They handle a great deal — but not everything an estate requires. This page explains
              where the line falls.
            </p>
          </div>
        </div>
      </section>

      {/*
        Featured provider.

        flex + justify-center rather than MedicareProviders' three-column grid:
        a single card in a grid pins to the left column and reads like a
        rendering error. This layout centers one card and flows naturally to a
        row as more representatives are added.
      */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-stretch">
              {providers.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more (opens in a new tab)`}
                  className="interior-tile tile-white group block h-full no-underline w-full sm:w-[340px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        {/* Hover trigger covers photo/name/title/company only —
                            deliberately NOT the contact links below, so reaching
                            for a phone number does not open the bio panel. */}
                        <ProviderHoverPanel
                          name={p.name}
                          title={p.title}
                          company={p.company}
                          photo={p.photo}
                          photoAlt={p.alt}
                          logo={p.logo}
                          logoAlt={p.logoAlt}
                          bio={p.bio}
                          specialty={p.specialty}
                          videoUrl={p.videoUrl}
                          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                          <img
                            src={p.photo}
                            alt={p.alt}
                            className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                          <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">{p.name}</h2>
                          <p className="text-foreground text-sm mb-1">{p.title}</p>
                          <p className="text-foreground text-sm font-semibold mb-3">{p.company}</p>
                        </ProviderHoverPanel>
                        <ProviderContact phone={p.phone} email={p.email} providerName={p.name} providerCompany={p.company} />
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={p.logoAlt || `${p.company} logo`}
                            className="h-auto max-h-24 w-auto max-w-full object-contain mb-4"
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                        )}
                        <p className="text-muted-foreground text-sm italic mb-5">{p.specialty}</p>

                        <span className="gold-cta mt-auto">
                          Learn More
                          <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/*
              This notice is on the page itself, not only inside the hover bio
              panel. The panel opens on mouse hover, which means touch users —
              a large share of this site's audience — would never see it. The
              "not a law firm" point is exactly the kind of thing that must not
              depend on having a mouse.
            */}
            <div
              className="max-w-3xl mx-auto mt-10 rounded-lg p-6"
              style={{ background: "#ffffff", borderLeft: "4px solid #7f2028" }}
            >
              <p className="text-foreground text-base leading-relaxed m-0">
                <strong>Please note:</strong> LegalShield is a legal service plan provider, not a law firm. Its
                associates, including the representative above, are not attorneys and cannot give legal advice or represent you.
                Legal services under a plan — including preparing and reviewing wills — are performed by attorneys at
                independent provider law firms. For trusts, probate, elder law, or Medicaid matters, work directly with
                a licensed Washington State attorney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What these plans are */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Legal Plans and Identity Protection Cover
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              These are two different products, usually sold together. Understanding what each one does — and does not
              do — makes it much easier to judge whether either is worth the monthly cost for your situation.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Wills and Document Preparation</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Attorneys at the plan's provider law firm prepare a will for the member, and review or update an
                  existing one. Many plans include an annual review, which matters more than people expect — a will
                  written before a move, a remarriage, a death in the family, or the sale of a home may no longer say
                  what its author intended. For a household that has never gotten a will in place, this is usually the
                  reason to consider a plan at all.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Everyday Legal Support</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Consultations on personal legal questions, review of contracts and other documents before you sign,
                  and letters or phone calls made on your behalf. Plans are not insurance. Coverage, exclusions, and
                  fees vary by plan and by state, so read the plan documents before enrolling.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Identity Theft Monitoring</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Ongoing monitoring of your personal and financial information, with alerts when that information
                  surfaces where it should not — including on the dark web. Most services also assign a specialist to
                  help restore your identity if it is misused, which is often the more valuable half of the product.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Where a Plan Stops</h3>
                <p className="text-foreground text-base leading-relaxed">
                  A plan will is generally a straightforward will. Trust drafting, probate administration, Medicaid and
                  long-term care planning, incapacity planning, business succession, and litigation call for an attorney
                  engaged directly on your matter. Washington's community property rules and the state's TEDRA
                  procedures also make some estates more complicated than a standard will can address well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this belongs in a transition */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why This Comes Up During a Transition
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              A senior transition generates paperwork and exposure at the same time. A house goes on the market, a
              community contract needs signing, a moving company sends terms, a bank wants documentation, and a
              household's records pass through more hands in six months than in the previous twenty years. Small legal
              questions surface constantly, and most of them are too small to justify an hourly engagement but too
              important to guess at.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              The same period raises identity risk. Older adults are targeted disproportionately in financial
              exploitation schemes, and the window around a move, a hospitalization, or an estate settlement is when
              families are least able to notice something wrong. Monitoring and a restoration specialist are worth
              considering for that reason alone.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Real Property Planning is a neutral educational hub. It does not sell legal plans, receive legal fees, or
              provide legal services, and featuring a representative here is not an endorsement or a recommendation to
              enroll. Compare more than one option, read the plan documents, and take whatever time you need to decide.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-secondary">
                  <AccordionTrigger
                    className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5"
                    style={{ fontSize: "20px", fontWeight: "700" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
      <BackToProfessionalsButton />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default LegalPlansIdentityProtection;
