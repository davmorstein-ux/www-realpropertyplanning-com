import Header from "@/components/Header";
import BackToArticles from "@/components/BackToArticles";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import RelatedResourcesSection from "@/components/RelatedResourcesSection";
import PageFAQ from "@/components/PageFAQ";
import { Link } from "react-router-dom";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mt-10 mb-5";
const h3Class = "font-serif text-xl md:text-2xl font-semibold text-foreground mt-8 mb-3";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";
const leadClass = "font-serif text-xl md:text-2xl text-foreground/90 leading-[1.6] mb-8 italic";
const hrClass = "my-10 border-t border-border";
const inlineLink = "text-gold font-semibold underline underline-offset-2 hover:text-gold/80 transition-colors";
const liClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-2";

const CANONICAL = "https://realpropertyplanning.com/articles/hospice-care-washington";

const relatedResources = [
  { title: "Adult Family Homes", href: "/senior-living/adult-family-homes" },
  { title: "Licensed Adult Family Home Directory", href: "/afh-club/homes" },
  { title: "AFH Cost by City & County", href: "/afh-club/cost-by-location" },
  { title: "Cost of Care Calculators", href: "/cost-of-care-calculator" },
  { title: "Assisted Living", href: "/senior-living/assisted-living" },
  { title: "Memory Care", href: "/senior-living/memory-care" },
  { title: "Aging in Place", href: "/aging-in-place-staying-home-safely" },
  { title: "Senior Living Advisors", href: "/senior-living-advisors" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hospice Care in Washington: Where It Can Come, Who Pays, and How It Fits With an Adult Family Home",
  description:
    "Hospice is end-of-life care that comes to where a person lives, not a place to live. What Medicare covers, what it doesn't (room and board), what '24-hour hospice' actually means, and how hospice works inside an adult family home, assisted living, or your own home in Washington.",
  url: CANONICAL,
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  image: "https://realpropertyplanning.com/hospice-care-cover.webp",
};

const FAQS = [
  {
    question: "Is hospice a place you move to?",
    answer:
      "Usually not. In Washington, hospice is a service delivered by a licensed in-home services agency to wherever the person already lives: their own home, an adult family home, assisted living, memory care, or a nursing facility. Free-standing hospice care centers exist for short stays when symptoms can't be managed at home, but most hospice care happens in the patient's residence.",
  },
  {
    question: "Does Medicare pay for hospice?",
    answer:
      "Yes. For a Medicare beneficiary certified as terminally ill (a life expectancy of six months or less if the illness runs its course) who elects comfort care over curative treatment, Medicare Part A covers the hospice benefit: the hospice team, medications for pain and symptom control, equipment and supplies related to the terminal illness, and short-term inpatient or respite care the hospice arranges. Out-of-pocket is limited to a copayment of up to $5 per prescription and 5% of the Medicare-approved amount for inpatient respite care.",
  },
  {
    question: "What does Medicare not pay for under hospice?",
    answer:
      "Room and board. Medicare's own guidance says it does not cover room and board when hospice is received at home, in a nursing home, or in a hospice inpatient facility. So a resident of an adult family home or assisted living on hospice still pays the home's monthly rate (or continues under Medicaid, long-term care insurance, or whatever was paying before). Hospice pays for the hospice; the residence is separate.",
  },
  {
    question: "Does '24-hour hospice' mean someone is there around the clock?",
    answer:
      "No, and this is the misunderstanding that causes the most trouble. Washington's Medicaid rule describes hospice as a twenty-four-hour program coordinated by a hospice interdisciplinary team, meaning the team is on call and visits are scheduled as needed, not that a hospice worker stays in the home. Continuous care is available only during short crises. Day-to-day supervision and personal care still come from family, private caregivers, or the staff of the adult family home or facility where the person lives.",
  },
  {
    question: "Can an adult family home take a hospice resident?",
    answer:
      "Most can, and many do; a large share of adult family homes in Washington care for hospice residents, with the hospice agency's nurses, aides, and social worker visiting the home. Ask the provider directly which hospice agencies they work with, whether they've cared for residents through end of life before, and how they handle medications supplied by the hospice.",
  },
];

const HospiceCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        ogType="article"
        title="Hospice Care in Washington: Where It Can Come, Who Pays, and How It Fits With an Adult Family Home"
        description="Hospice is end-of-life care that comes to where a person lives, not a place to live. What Medicare covers, what it doesn't (room and board), what '24-hour hospice' means, and how hospice works inside an adult family home, assisted living, or your own home in Washington."
        canonical={CANONICAL}
        ogImage="https://realpropertyplanning.com/hospice-care-cover.webp"
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">Hospice Care in Washington</HeroBandTitle>

        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <article className={proseWrap}>
              <div className="mb-6">
                <ArticleAudioPlayer audioSrc="/audio/hospice-care.mp3" />
              </div>

              <div className="text-center mb-8">
                <img
                  src="/hospice-care-cover.webp"
                  alt="Hospice care: a nurse holding the hand of an older woman resting at home — coordinated medical, personal, emotional and spiritual support when an illness is no longer being treated for cure"
                  style={{ maxWidth: 340, width: "100%", height: "auto", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                  width={1024}
                  height={1365}
                  decoding="async"
                />
              </div>

              <p className={leadClass}>
                Hospice is not a place. It is care that comes to you, wherever you live, when the goal has changed from
                curing an illness to comfort. Families choosing between staying home, an adult family home, assisted
                living, or memory care need to know one thing before anything else: hospice can usually be added to any
                of those, and it does not replace them.
              </p>

              <div className="rounded-xl border border-border bg-cream p-5 md:p-6 mb-8">
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Quick Answer</p>
                <h2 className="font-serif text-[22px] md:text-[26px] font-semibold text-navy leading-tight mb-2 mt-0">
                  Where can my parent receive hospice care in Washington?
                </h2>
                <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed">
                  Almost anywhere they already live: their own home, an adult family home, assisted living, memory care, or a
                  nursing facility, plus short stays in a hospice care center or hospital when symptoms can't be managed at
                  home. Medicare covers the hospice services for eligible patients at little or no cost; it does not cover room
                  and board, so the home or facility is paid for the way it was before. "24-hour hospice" means a team on
                  call around the clock with scheduled visits, not a worker in the house all day and night.
                </p>
              </div>

              <hr className={hrClass} />

              <h2 className={h2Class}>What hospice is, and what it isn't</h2>
              <p className={pClass}>
                Hospice is a coordinated program of medical, nursing, personal, emotional, and spiritual support for
                someone whose illness is no longer being treated for cure. In Washington it is delivered by an in-home
                services agency licensed by the Department of Health under chapter 246-335 WAC, and it is built around an
                interdisciplinary team: a hospice physician, nurses, aides, a social worker, a chaplain, and volunteers.
              </p>
              <p className={pClass}>
                What it is not: a building you move into, a replacement for the people who care for someone day to day,
                or a way to make the cost of a residence disappear. Each of those misunderstandings shows up in family
                conversations every week, so the rest of this guide takes them one at a time.
              </p>

              <h2 className={h2Class}>Where hospice can come</h2>
              <p className={pClass}>
                Washington's Medicaid rule states it plainly: hospice care may be in a client's temporary or permanent
                place of residence. Medicare says the same. The table below is the practical version.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-[16px] md:text-[17px]">
                  <thead>
                    <tr className="text-left border-b-2 border-border">
                      <th className="py-2 pr-3">Where they live</th>
                      <th className="py-2 pr-3">Hospice can come there?</th>
                      <th className="py-2 pr-3">Who generally pays for the residence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Own home", "Yes", "Nobody extra: the family keeps paying for the home as before. Personal care between hospice visits is family, private caregivers, or in-home care."],
                      ["Adult family home", "Yes", "The resident (private pay), Medicaid, long-term care insurance, or VA benefits, exactly as before hospice began. The hospice agency's team visits the home."],
                      ["Assisted living or memory care", "Yes", "The resident or their existing coverage. The community's staff continue daily care; hospice adds to it."],
                      ["Nursing facility", "Yes", "Depends on coverage. Medicare's skilled-nursing benefit and the hospice benefit interact; Medicaid often pays room and board for eligible residents."],
                      ["Hospice care center or hospital", "Yes, short term", "Medicare covers qualifying short-term inpatient care and respite stays arranged by the hospice; these are not long-term residences."],
                    ].map(([a, b, c]) => (
                      <tr key={a} className="border-b border-border align-top">
                        <td className="py-2 pr-3 font-semibold">{a}</td>
                        <td className="py-2 pr-3 whitespace-nowrap">{b}</td>
                        <td className="py-2 pr-3 text-muted-foreground">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className={h2Class}>Who pays for what</h2>
              <h3 className={h3Class}>Medicare pays for the hospice</h3>
              <p className={pClass}>
                For a Medicare beneficiary, hospice is covered under Part A once a physician certifies a terminal illness
                with a life expectancy of six months or less and the patient elects comfort care in place of curative
                treatment. The benefit covers the hospice team's visits, medications for pain and symptom control,
                medical equipment and supplies related to the terminal illness, short-term inpatient care, and respite
                care the hospice arranges. According to Medicare's own guidance, the patient pays nothing for covered
                hospice services except a copayment of up to $5 per prescription for symptom-management drugs and 5% of
                the Medicare-approved amount for inpatient respite care. Original Medicare keeps covering health problems
                unrelated to the terminal illness.
              </p>
              <h3 className={h3Class}>Medicare does not pay for the residence</h3>
              <p className={pClass}>
                Medicare states that it does not cover room and board when hospice is received at home, in a nursing
                home, or in a hospice inpatient facility. This is the sentence families most need. If Mom lives in an
                adult family home at $7,000 a month and goes on hospice, the home still costs $7,000 a month. Hospice
                does not lower it, and it does not become "free care." What changes is that a nurse, an aide, a social
                worker, and a chaplain now come to the home, and the medications and equipment for her comfort are
                supplied by the hospice at no charge.
              </p>
              <h3 className={h3Class}>Medicaid (Apple Health)</h3>
              <p className={pClass}>
                Washington Medicaid also covers hospice for eligible clients, under WAC 388-551. A Medicaid resident of
                an adult family home who elects hospice keeps their residential coverage; the home continues to be paid
                its DSHS daily rate for the resident's care level, and the hospice agency bills Medicaid for the hospice
                services. Nothing about the placement has to change.
              </p>

              <h2 className={h2Class}>What "24-hour hospice" actually means</h2>
              <p className={pClass}>
                Washington's Medicaid rule describes hospice as a twenty-four-hour program coordinated by a hospice
                interdisciplinary team. Read that carefully: the program is available around the clock, meaning a nurse
                is reachable at 3 a.m. and will come if needed. It does not mean a hospice worker stays in the home.
                Routine hospice care is intermittent: scheduled visits, typically several a week, of varying length.
                Continuous around-the-clock care exists as a distinct level for short crises, and it ends when the crisis
                does.
              </p>
              <p className={pClass}>
                The practical consequence is the one families underestimate. Someone still has to be there for the
                hours between visits: to help with the bathroom, meals, turning, medications at the right time, and the
                night. At home that is family or hired caregivers. In an adult family home or assisted living it is the
                staff who were already caring for the resident, which is exactly why hospice layers so well onto those
                settings rather than replacing them.
              </p>

              <h2 className={h2Class}>Hospice inside an adult family home</h2>
              <p className={pClass}>
                Adult family homes are, by design, a good fit for hospice: a household of up to six residents, a
                provider or caregivers present around the clock, and rooms built to Washington's accessibility standards.
                Many of the operating homes in Washington care for hospice residents as a matter of course; several of
                the homes that sold in the last year described hospice residents in their listings. The hospice agency's
                team visits the home, coordinates with the provider on medications and the plan of care, and supplies
                the equipment.
              </p>
              <p className={pClass}>Questions worth asking a provider before placing a parent who is, or may soon be, on hospice:</p>
              <ul className="list-disc pl-6 mb-6">
                <li className={liClass}>Which hospice agencies have you worked with, and can I speak with one of them?</li>
                <li className={liClass}>Have you cared for residents through the end of life in this home before?</li>
                <li className={liClass}>How do you handle medications the hospice supplies, including comfort medications at night?</li>
                <li className={liClass}>What does your rate cover if care needs rise near the end, and what would change it?</li>
                <li className={liClass}>How do you support the family during and after?</li>
              </ul>
              <p className={pClass}>
                Every licensed home in the state is in the{" "}
                <Link to="/afh-club/homes" className={inlineLink}>
                  AFH Club directory
                </Link>
                , by city and county, with capacity, specialty designations, and Medicaid status. For what a home costs in
                a given place, the{" "}
                <Link to="/afh-club/cost-by-location" className={inlineLink}>
                  cost-by-location lookup
                </Link>{" "}
                shows the Medicaid rate range and licensed-home counts for any Washington city or county.
              </p>

              <h2 className={h2Class}>Hospice versus palliative care</h2>
              <p className={pClass}>
                Palliative care is comfort-focused care that can run alongside curative treatment at any stage of a
                serious illness. Hospice is palliative care for someone who has chosen comfort in place of cure, with a
                prognosis of six months or less. A person can receive palliative care for years; hospice is elected when
                treatment aimed at cure has stopped. Both can be delivered in the same settings.
              </p>

              <h2 className={h2Class}>How to start</h2>
              <ol className="list-decimal pl-6 mb-6">
                <li className={liClass}>Ask the treating physician whether hospice is appropriate; a physician's certification is required.</li>
                <li className={liClass}>Choose a Medicare-certified hospice agency. If your parent lives in an adult family home or facility, ask which agencies already serve it.</li>
                <li className={liClass}>Confirm the residence arrangement stays as it is: same room, same rate, same payer.</li>
                <li className={liClass}>Ask the hospice for its visit schedule and its after-hours number, and put both where every family member can find them.</li>
              </ol>

              <p className="text-muted-foreground text-[15px] leading-relaxed mt-8">
                Sources: Medicare.gov, "Hospice care" coverage page; CMS hospice payment guidance (FY2026); WAC 388-551
                (Washington Medicaid hospice program); chapter 246-335 WAC (in-home services agencies and hospice care
                centers); RCW 70.127. Rules and copayment amounts change; confirm current figures with Medicare and the
                hospice agency. This guide is educational and is not medical, legal, or financial advice.
              </p>
            </article>
          </div>
        </section>

        <PageFAQ faqs={FAQS} heading="Hospice Care: Common Questions" eyebrow="Frequently Asked Questions" id="hospice" />
        <BackToArticles />
        <RelatedResourcesSection resources={relatedResources} />
      </main>
      <BackToResources />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default HospiceCare;
