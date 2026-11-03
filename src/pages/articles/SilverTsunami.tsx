import Header from "@/components/Header";
import BackToArticles from "@/components/BackToArticles";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import RelatedResourcesSection from "@/components/RelatedResourcesSection";
import { Link } from "react-router-dom";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/the-silver-tsunami.mp3.asset.json";
import ArticleCover from "@/components/ArticleCover";

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
  { title: "Building Your Professional Team", href: "/building-your-professional-team" },
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
        ogType="article"
        title="The Silver Tsunami: Aging America's Housing & Care Shift"
        description="How the Silver Tsunami — millions of Baby Boomers turning 65 — is reshaping housing, retirement, caregiving, and senior support across America."
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">{"The Silver Tsunami"}</HeroBandTitle>

        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <article className={proseWrap}>
              <div className="mb-8">
                <ArticleAudioPlayer audioSrc={audioAsset.url} />
              </div>
              <ArticleCover src="/The_Silver_Tsunami.webp" alt="Cover art: The Silver Tsunami" width={1086} height={1448} />

              {/* One H1 per page (the hero band); this subtitle is a level-2 heading. */}
              <div role="heading" aria-level={2} className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-0 mb-3">
                The Silver Tsunami Is Here
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 italic">
                How America's aging population is reshaping housing, care and communities
              </h3>

              <hr className="my-8 border-border" />

              <p className={pClass}>
                "Silver Tsunami" is the name demographers give to the Baby Boom generation reaching retirement age, and
                to the pressure that puts on housing, retirement savings and care.
              </p>
              <p className={pClass}>
                It began in 2011, when the first Baby Boomers turned 65. More than a decade later, the number of
                Americans turning 65 each year is at its highest.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>More Than 11,000 Americans Turn 65 Every Day</h2>
              <p className={pClass}>
                Every day from 2024 through 2027, more than 11,000 Americans turn 65, or more than 4.1 million a year,
                according to the Alliance for Lifetime Income's Peak 65 research. That age is still called "retirement
                age," though it says little about the decades that follow.
              </p>
              <p className={pClass}>
                The wave began in 2011, when the oldest Boomers first hit 65, at roughly 10,000 a day. It will continue
                until about 2030, when the youngest members of that generation follow. The stretch from 2024 through 2027
                has been dubbed <strong>"Peak 65"</strong>: the most concentrated period of aging in American history.
              </p>
              <p className={pClass}>
                By 2030, when all Boomers will be older than 65, about 1 in 5 Americans will be 65 or older, according
                to the U.S. Census Bureau. That is a lasting change in the makeup of the country, not a temporary surge.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Wave Nobody Was Ready For</h2>
              <p className={pClass}>
                The Silver Tsunami means millions of people facing the same decisions at the same time: where to live,
                how to pay for care, and what to do when the family home no longer fits the person living in it.
              </p>
              <p className={pClass}>
                Families often make those decisions without a plan. The trigger is usually a parent who can no longer
                drive, a spouse whose memory is slipping, or a sibling who lives alone three states away. The options
                are complicated, and most people put off the conversation until circumstances force it. With so many
                people needing housing and care at once, waiting costs more than it used to.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>Where Will Everyone Live?</h2>
              <p className={pClass}>
                Housing is the most pressing question the Silver Tsunami raises. Most older adults, when asked, say they
                want to stay home. Aging in place is the preferred option for the vast majority of seniors, because home
                is familiar.
              </p>
              <p className={pClass}>
                Staying home has a price. As care needs grow, so do the hours of support required. Home modifications,
                in-home aides, transportation help and meal delivery add up, and families often don't see the total
                until the bills arrive.
              </p>
              <p className={pClass}>
                When a move becomes necessary, the options aren't always there. Many regions are short of senior
                housing: independent living communities, assisted living beds and memory care. In high-cost areas, the
                gap between what's available and what's affordable can be wide.
              </p>
              <p className={pClass}>
                A family can have significant home equity and still struggle to find a suitable, affordable place to
                move.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Financial Fault Line</h2>
              <p className={pClass}>
                Many older adults have not saved enough for a long retirement. According to a 2024 AARP survey, one in
                five Americans age 50 and older has no retirement savings, and more than half worry they will not have
                enough money to last in retirement. Even people who have saved face longevity risk that most financial
                plans weren't built to handle.
              </p>
              <p className={pClass}>
                A person who retires at 65 today might reasonably expect to live another 20 or 25 years, and those years
                may include periods of significant care need. The longer retirement lasts, the more can go wrong.
              </p>
              <p className={pClass}>
                Rising property taxes, insurance premiums, utilities, maintenance and healthcare costs put steady
                pressure on fixed incomes. Some older adults put off a needed move because they can't see how the
                numbers will work.
              </p>
              <p className={pClass}>
                Planning early doesn't remove the uncertainty, but it keeps more choices open. A financial planner who
                understands senior housing costs can help a family build a realistic long-term budget before a crisis
                narrows their options to one.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>The Caregiver Shortage</h2>
              <p className={pClass}>
                There aren't enough people to care for everyone who will need care.
              </p>
              <p className={pClass}>
                Demand for professional caregivers (home health aides, memory care staff, geriatric nurses) is growing
                faster than the workforce to fill those roles. Facilities face staffing shortages. Families looking for
                in-home care face waitlists and high costs.
              </p>
              <p className={pClass}>
                The shortage is expected to get worse as the decade goes on, and it gets less attention than housing or
                retirement savings.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>Planning Is the Best Defense</h2>
              <p className={pClass}>
                Families who start the conversation before they have to keep more options open. The conversation is
                rarely easy, but having it early means a parent can choose their next home instead of having one chosen
                for them in a crisis, and money can be spent according to a plan instead of in a rush.
              </p>
              <p className={pClass}>
                Planning means assessing future housing needs honestly, learning the full cost of senior living options,
                reviewing financial resources, and building a team of professionals: an estate planning attorney, a
                financial advisor, a senior living advisor, and possibly an Aging Life Care Manager who can coordinate
                support services before a medical crisis.
              </p>
              <p className={pClass}>
                When a move does happen, a{" "}
                <Link to="/senior-move-managers" className={inlineLink}>
                  senior move manager
                </Link>{" "}
                can organize the sorting, packing and setup so the family doesn't have to manage it alone.
              </p>

              <hr className="my-8 border-border" />

              <h2 className={h2Class}>A Transition to Plan For</h2>
              <p className={pClass}>
                The Silver Tsunami is often described as a looming catastrophe, and the challenges are real: housing
                supply, caregiving capacity, retirement security, and communities that weren't designed for a
                population this old.
              </p>
              <p className={pClass}>
                It is also predictable. It began in 2011 and is still building, which gives families and communities
                time to plan for it.
              </p>

              <hr className="my-8 border-border" />

              <p className={pClass + " italic"}>
                These guides explain senior housing and transition decisions in plain language.{" "}
                <Link to="/guides-and-resources" className={inlineLink}>
                  Explore the resources
                </Link>{" "}
                or{" "}
                <Link to="/senior-living-advisors" className={inlineLink}>
                  read what a senior living advisor does
                </Link>{" "}
                before you start the conversation.
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
