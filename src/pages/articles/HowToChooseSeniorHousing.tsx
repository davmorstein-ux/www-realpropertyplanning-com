import Header from "@/components/Header";
import BackToArticles from "@/components/BackToArticles";
import heroImage from "@/assets/articles-hero-banner.png";
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
const leadClass = "text-foreground text-[19px] md:text-xl leading-[1.75] mb-6 font-medium";
const hrClass = "my-10 border-border/60";
const inlineLink = "text-gold font-semibold underline underline-offset-2 hover:text-gold/80 transition-colors";

const relatedResources = [
  { title: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
  { title: "Senior Housing Options", href: "/articles/senior-housing-options" },
  { title: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
  { title: "Independent Living Costs", href: "/articles/independent-living-costs" },
  { title: "Memory Care Costs", href: "/articles/memory-care-costs" },
  { title: "CCRC Costs", href: "/articles/ccrc-costs" },
  { title: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
  { title: "Aging in Place With Support", href: "/articles/aging-in-place" },
  { title: "Senior Living Advisors", href: "/senior-living-advisors" },
  { title: "Aging Life Care Managers", href: "/aging-life-care-managers" },
  { title: "Senior Move Managers", href: "/senior-move-managers" },
  { title: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
  { title: "Building Your Trusted Professional Team", href: "/building-your-trusted-professional-team" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Choose Senior Housing: A Step-by-Step Guide for Families",
  description:
    "A step-by-step guide to help families choose senior housing by assessing needs, determining budget, identifying options, researching communities, visiting, reviewing contracts, and planning the move.",
  url: "https://realpropertyplanning.com/articles/how-to-choose-senior-housing",
};

const HowToChooseSeniorHousing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Choose Senior Housing: A Step-by-Step Guide for Families"
        description="A practical step-by-step guide to help families choose senior housing by assessing needs, budget, options, visits, contracts, and moving."
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
          <HeroBandTitle>{"How to Choose Senior Housing"}</HeroBandTitle>
        </>

        {/* Article */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <article className={proseWrap}>
              <h2 className={h2Class + " mt-0"}>How to Choose Senior Housing</h2>
              <p className="text-muted-foreground text-lg md:text-xl italic mb-8">
                A step-by-step guide for families navigating one of life's most important decisions
              </p>
              <hr className={hrClass} />

              <p className={leadClass}>
                There is a particular kind of paralysis that sets in when a family starts researching senior housing.
              </p>
              <p className={pClass}>
                The options multiply. The terminology blurs. Every community website looks professionally warm and impossibly similar. The costs are hard to compare because nothing is ever quite apples to apples. And beneath all of it runs an undercurrent that nobody names out loud: the weight of getting this wrong.
              </p>
              <p className={pClass}>
                The good news is that this decision, like most important ones, becomes far more manageable when it's broken into steps. Not because the steps eliminate the difficulty — they don't — but because they give a family somewhere to put their feet.
              </p>
              <p className={pClass}>Here is a process that works.</p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step One: Get Honest About What's Actually Needed</h2>
              <p className={pClass}>
                Before looking at a single community, the most valuable thing a family can do is take a clear-eyed look at where things stand today — and where they might reasonably stand in two or five years.
              </p>
              <p className={pClass}>This means asking questions that are sometimes uncomfortable:</p>
              <ul className="list-disc pl-6 mb-5 text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-2">
                <li>Is the current home genuinely safe, or just familiar?</li>
                <li>Is help needed with daily tasks — bathing, dressing, medications?</li>
                <li>Are there memory concerns that are growing, not stable?</li>
                <li>Is the older adult isolated? Is loneliness becoming a health issue in itself?</li>
                <li>What happens if there's a fall, a hospitalization, a sudden change?</li>
              </ul>
              <p className={pClass}>
                Being realistic at this stage is an act of love, not defeat. It's what allows a family to match the right option to the right person — rather than choosing whatever feels least disruptive in the moment.
              </p>
              <p className={pClass}>
                An <Link to="/aging-life-care-managers" className={inlineLink}>Aging Life Care Manager</Link> can help families complete a thorough, professional assessment and translate it into a clear picture of appropriate care levels.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Two: Build a Real Budget</h2>
              <p className={pClass}>
                Senior housing costs vary widely, and the advertised monthly rate is rarely the whole story. What looks affordable on the surface can carry significant additional costs for care, meals, medication management, or services that didn't seem necessary at first but become essential quickly.
              </p>
              <p className={pClass}>A complete financial review should cover:</p>
              <ul className="list-disc pl-6 mb-5 text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-2">
                <li>Income from all sources — Social Security, pensions, investments</li>
                <li>Savings and retirement accounts</li>
                <li>Home equity that may be available if the family home is sold</li>
                <li>VA benefits, long-term care insurance, or other resources</li>
                <li>How expenses might change if care needs increase over time</li>
              </ul>
              <p className={pClass}>
                The goal is not just to afford the first month. It's to build a picture that holds up over five or ten years — because senior housing decisions made today often shape financial reality for a long time.
              </p>
              <p className={pClass}>
                A <Link to="/professionals/financial-planners" className={inlineLink}>financial planner</Link> who understands senior housing can be invaluable here, helping families map realistic scenarios before they commit to a community.
              </p>
              <p className={pClass}>
                <em><Link to="/articles/senior-housing-costs" className={inlineLink}>See our full guide to senior housing costs →</Link></em>
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Three: Match Needs to Options</h2>
              <p className={pClass}>
                With a clear picture of care needs and budget, the list of realistic options becomes much shorter. The main categories of senior housing each serve a different situation:
              </p>
              <p className={pClass}>
                <strong>Independent living</strong> — for active older adults who want a simpler, more connected lifestyle without daily personal care.
              </p>
              <p className={pClass}>
                <strong>Assisted living</strong> — for those who need help with daily activities but not full-time medical care.
              </p>
              <p className={pClass}>
                <strong>Memory care</strong> — for individuals living with Alzheimer's or dementia who require a secure, specialized environment.
              </p>
              <p className={pClass}>
                <strong>CCRCs</strong> — for those who want a single community that can support every stage of aging, from independent to skilled nursing.
              </p>
              <p className={pClass}>
                <strong>Affordable senior housing</strong> — for older adults with limited income who need subsidized or income-based options.
              </p>
              <p className={pClass}>
                <strong>Aging in place</strong> — for those who want to stay home, supported by in-home care and services.
              </p>
              <p className={pClass}>
                Most families find that once needs and budget are clearly defined, two or three options rise to the top naturally.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Four: Research Before You Visit</h2>
              <p className={pClass}>
                A community visit is an investment of time and emotional energy. Before making them, do the groundwork.
              </p>
              <p className={pClass}>
                Check availability and waitlists — some communities, particularly memory care and affordable housing, book months or years in advance. Gather basic information about monthly fees, included services, and care levels. Read reviews and ask for recommendations from people who have been through this process recently.
              </p>
              <p className={pClass}>
                A <Link to="/senior-living-advisors" className={inlineLink}>senior living advisor</Link> can compress this research significantly, providing vetted shortlists of communities that match specific needs and budgets — and saving families from hours of calls and website searches that all start to look the same.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Five: Visit With a Plan</h2>
              <p className={pClass}>
                Visiting senior housing communities in person is irreplaceable. No website, brochure, or phone call can substitute for walking through the door and paying attention.
              </p>
              <p className={pClass}>
                Bring a list of questions and ask the same ones at every community — it makes comparison far easier afterward. While you're there, notice what the marketing materials won't tell you:
              </p>
              <ul className="list-disc pl-6 mb-5 text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-2">
                <li>How does the staff interact with residents when they don't know you're watching?</li>
                <li>What does the dining room feel like at a meal?</li>
                <li>Are residents engaged and moving around, or sitting quietly in hallways?</li>
                <li>Does the building smell clean — genuinely clean, not just masked?</li>
                <li>Can you imagine your person feeling at home here?</li>
              </ul>
              <p className={pClass}>
                That last question matters more than most checklists acknowledge. Data and amenities can be compared on a spreadsheet. Whether a place <em>feels right</em> can only be known in person.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Six: Read the Contract. All of It.</h2>
              <p className={pClass}>
                Before signing anything, understand exactly what you're agreeing to. Senior housing contracts can be complex, and the details matter enormously.
              </p>
              <p className={pClass}>Ask specifically:</p>
              <ul className="list-disc pl-6 mb-5 text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-2">
                <li>What is the base monthly rate and what does it include?</li>
                <li>What services trigger additional charges?</li>
                <li>How is pricing structured if care needs increase?</li>
                <li>How often do rates increase, and by how much?</li>
                <li>What is the policy if the community is no longer the right fit?</li>
                <li>What happens to deposits or entrance fees if the resident leaves?</li>
              </ul>
              <p className={pClass}>
                There should be no surprises after move-in. The contract review is the moment to make sure there won't be.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>Step Seven: Plan the Move Itself</h2>
              <p className={pClass}>
                Once the decision is made, the logistics begin — and they are considerable. Downsizing decades of accumulated life. Coordinating the sale of a family home. Arranging the physical move. Setting up a new space that feels like home, not a hotel room.
              </p>
              <p className={pClass}>
                This is where many families hit a wall. The emotional weight of the decision has already been enormous, and now there's a mountain of practical work on top of it.
              </p>
              <p className={pClass}>
                A <Link to="/senior-move-managers" className={inlineLink}>senior move manager</Link> exists precisely for this moment. These professionals specialize in coordinating every aspect of senior transitions — from helping sort and donate belongings to setting up the new residence so that it feels familiar and welcoming from day one. Their involvement typically reduces stress dramatically for both the older adult and the family.
              </p>

              <hr className={hrClass} />

              <h2 className={h2Class}>The Underlying Truth About This Process</h2>
              <p className={pClass}>
                Choosing senior housing is hard not because the steps are complicated, but because of what the decision represents — an acknowledgment that life is changing, that the way things have been is giving way to something new.
              </p>
              <p className={pClass}>
                The families who do this best are the ones who hold that truth gently, without rushing past it or getting stuck in it. Who involve the older adult in every step they're able to participate in. Who ask the hard questions early, when there's still time to get them right.
              </p>
              <p className={pClass}>
                The goal, in the end, is not just to find a place to live. It's to find a place where someone can continue to live <em>well</em> — with safety, with support, with dignity, and with as much of their own life intact as possible.
              </p>
              <p className={pClass}>
                That goal is achievable. It just takes the willingness to begin.
              </p>

              <hr className={hrClass} />

              <p className={pClass}>
                <em>Real Property Planning helps families navigate senior housing decisions with clarity and confidence. <Link to="/guides-and-resources" className={inlineLink}>Explore our full library of resources →</Link></em>
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

export default HowToChooseSeniorHousing;
