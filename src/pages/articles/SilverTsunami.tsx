import Header from "@/components/Header";
import BackToArticles from "@/components/BackToArticles";
import heroImage from "@/assets/articles-hero-banner.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import RelatedResourcesSection from "@/components/RelatedResourcesSection";
import { Link } from "react-router-dom";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mt-10 mb-5";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";
const inlineLink = "text-gold font-semibold underline underline-offset-2 hover:text-gold/80 transition-colors";

const relatedResources = [
  { title: "Senior Living Advisors", href: "/senior-living-advisors" },
  { title: "Senior Move Managers", href: "/senior-move-managers" },
  { title: "Aging Life Care Managers", href: "/aging-life-care-managers" },
  { title: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
  { title: "Building Your Trusted Professional Team", href: "/building-your-trusted-professional-team" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is the Silver Tsunami? How Aging in America Is Reshaping Housing, Retirement, and Care",
  description:
    "The Silver Tsunami describes the wave of Baby Boomers reaching retirement age, reshaping housing, retirement, and caregiving across America.",
  url: "https://realpropertyplanning.com/articles/silver-tsunami",
};

const SilverTsunami = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Silver Tsunami: Aging America's Housing & Care Shift"
        description="How the Silver Tsunami — millions of Baby Boomers turning 65 — is reshaping housing, retirement, caregiving, and senior support across America."
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">
        <>
          <div className="bg-white">
            <img
              src={heroImage}
              alt="Older couple on a bench overlooking a scenic river valley with a vintage car nearby — senior housing and life-transition resources"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
              loading="eager"
            />
          </div>
          <HeroBandTitle>{"The Silver Tsunami"}</HeroBandTitle>
        </>

        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <article className={proseWrap}>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-0 mb-3">
                The Silver Tsunami Is Here
              </h1>
              <h3 className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 italic">
                America's aging population is reshaping housing, care, and the future of our communities — ready or not
              </h3>

              <hr className="my-8 border-border" />

              <p className={pClass}>It started quietly, as most demographic shifts do.</p>
              <p className={pClass}>
                In 2011, the first Baby Boomers turned 65. There were no headlines, no emergency summits, no collective
                preparation. Just the steady, inevitable turning of the calendar — and the beginning of what
                demographers had been warning about for decades.
              </p>
              <p className={pClass}>
                They called it the Silver Tsunami. And now, more than a decade in, the wave is at full height.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>11,400 Americans Turn 65 Every Single Day</h2>
              <p className={pClass}>Let that number settle for a moment.</p>
              <p className={pClass}>
                Not 11,400 per week. Not per month. Every day, roughly 11,400 Americans cross the threshold into what we
                still call "retirement age" — a term that increasingly fails to capture the complexity of what follows.
              </p>
              <p className={pClass}>
                This has been happening since 2011, when the oldest Boomers first hit 65. It will continue until
                approximately 2030, when the youngest members of that generation follow. The stretch from 2024 through
                the late 2020s has been dubbed <strong>"Peak 65"</strong> — the most concentrated period of aging in
                American history.
              </p>
              <p className={pClass}>
                By 2050, adults 65 and older are projected to make up more than 20% of the U.S. population. This is not
                a temporary surge. It is a permanent restructuring of who we are as a country.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Wave Nobody Was Ready For</h2>
              <p className={pClass}>
                The Silver Tsunami is not simply about birthdays. It is about what happens when millions of people
                simultaneously begin navigating the same set of decisions — where to live, how to pay for care, what to
                do when the family home no longer fits the life being lived inside it.
              </p>
              <p className={pClass}>And those decisions are being made, in many cases, without a clear roadmap.</p>
              <p className={pClass}>
                Every day, families sit down at kitchen tables and try to figure out what comes next for a parent who
                can no longer drive, a spouse whose memory is slipping, a sibling who lives alone three states away.
                They are not failing to plan because they don't care. They're failing to plan because the landscape is
                genuinely complicated — and because most of us spend our lives avoiding the conversation until
                circumstances force it.
              </p>
              <p className={pClass}>The Silver Tsunami makes that avoidance increasingly costly.</p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>Where Will Everyone Live?</h2>
              <p className={pClass}>
                The most pressing question the Silver Tsunami raises is also the most fundamental:{" "}
                <em>where will everyone live?</em>
              </p>
              <p className={pClass}>
                Most older adults, when asked, say they want to stay home. Aging in place is the preferred option for
                the vast majority of seniors — and for good reason. Home is familiar. Home is where the memories are.
                Home is where a person still feels most like themselves.
              </p>
              <p className={pClass}>
                But staying home has a price. As care needs grow, so do the hours of support required. Home
                modifications, in-home aides, transportation assistance, meal delivery — the costs accumulate, often
                without families recognizing how much until the bills arrive.
              </p>
              <p className={pClass}>
                When a move becomes necessary, the options aren't always there. Many regions face genuine shortages of
                senior housing — not enough independent living communities, not enough assisted living beds, not enough
                memory care facilities. In high-cost areas, the gap between what's available and what's affordable can
                feel insurmountable.
              </p>
              <p className={pClass}>
                A family might have significant home equity and still struggle to find a suitable, affordable place to
                land.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Financial Fault Line</h2>
              <p className={pClass}>
                Beneath the Silver Tsunami runs a financial fault line that rarely gets discussed openly.
              </p>
              <p className={pClass}>
                According to AARP, one in five Americans age 50 and older has no retirement savings. A majority worry
                about outliving their money. And even among those who have saved responsibly, longevity creates risk
                that most financial plans weren't built to handle.
              </p>
              <p className={pClass}>
                A person who retires at 65 today might reasonably expect to live another 20 or 25 years — years that may
                include periods of significant care need. The financial math is unforgiving: the longer the runway, the
                more that can go wrong.
              </p>
              <p className={pClass}>
                Rising property taxes, insurance premiums, utilities, maintenance, and healthcare costs place steady
                pressure on fixed incomes. Many older adults delay necessary moves not because they want to, but because
                the financial picture feels paralyzing.
              </p>
              <p className={pClass}>
                This is exactly where early planning makes the greatest difference — not because planning eliminates
                uncertainty, but because it expands the range of available choices. A financial planner who understands
                senior housing costs can help families build a realistic long-term budget before a crisis narrows their
                options to one.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Caregiver Shortage Nobody Is Talking About</h2>
              <p className={pClass}>
                There is another dimension to the Silver Tsunami that tends to stay in the background: there aren't
                enough people to care for everyone who will need care.
              </p>
              <p className={pClass}>
                The demand for professional caregivers — home health aides, memory care specialists, geriatric nurses —
                is growing faster than the workforce to fill those roles. Facilities face staffing challenges. Families
                seeking in-home care face waitlists and high costs.
              </p>
              <p className={pClass}>
                This shortage will intensify as the decade progresses. It is one of the least visible but most
                consequential aspects of what Peak 65 means in practice.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>Planning Is the Only Antidote</h2>
              <p className={pClass}>
                The families who navigate the Silver Tsunami most successfully share one characteristic: they started
                the conversation before they had to.
              </p>
              <p className={pClass}>
                Not because the conversation is easy — it rarely is. But because doing it early means options remain
                open. It means a parent gets to choose their next home rather than having one chosen for them in a
                moment of crisis. It means financial resources are deployed strategically rather than spent reactively.
              </p>
              <p className={pClass}>
                Effective planning means evaluating future housing needs honestly, understanding the full cost of senior
                living options, reviewing financial resources, and building a team of trusted professionals — an estate
                planning attorney, a financial advisor, a senior living advisor, perhaps an Aging Life Care Manager who
                can help coordinate support services before a medical crisis changes everything.
              </p>
              <p className={pClass}>
                When a transition does happen, a{" "}
                <Link to="/senior-move-managers" className={inlineLink}>
                  senior move manager
                </Link>{" "}
                can make what is often an overwhelming process feel organized, humane, and even — occasionally — like a
                fresh start.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>This Is Not a Crisis. It's a Transition.</h2>
              <p className={pClass}>
                The Silver Tsunami gets framed as a looming catastrophe. And the challenges are real — in housing
                supply, in caregiving capacity, in retirement security, in the infrastructure of communities that
                weren't designed for a population this old.
              </p>
              <p className={pClass}>
                But it is also, at its core, a story about people. About a generation that built a great deal, raised
                families, worked hard, and is now navigating the final chapters of long lives. They deserve housing that
                fits. Care that dignifies. Plans that actually work.
              </p>
              <p className={pClass}>
                The question is not whether the Silver Tsunami is coming. It arrived over a decade ago, and it is still
                rising.
              </p>
              <p className={pClass}>
                The question is whether we are ready — as families, as communities, as a country — to meet it with the
                planning, the resources, and the compassion it demands.
              </p>

              <hr className="my-8 border-border" />

              <p className={pClass + " italic"}>
                Real Property Planning helps families navigate senior housing and transition decisions with clarity and
                confidence.{" "}
                <Link to="/guides-and-resources" className={inlineLink}>
                  Explore our resources
                </Link>{" "}
                or{" "}
                <Link to="/senior-living-advisors" className={inlineLink}>
                  connect with a senior living advisor
                </Link>{" "}
                to start the conversation.
              </p>
            </article>
          </div>
        </section>

        <BackToArticles />
        <RelatedResourcesSection resources={relatedResources} />
        <DisclaimerSection />
      </main>
      <BackToResources />
      <Footer />
    </div>
  );
};

export default SilverTsunami;
