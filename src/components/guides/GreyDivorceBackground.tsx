/**
 * Background sections merged in from the retired /grey-divorce page (Oct 4,
 * 2026, Question Map step 8: /gray-divorce and /grey-divorce were near
 * duplicates; /grey-divorce now redirects here). Rendered inside
 * src/pages/GrayDivorce.tsx in two parts. The statistics carry their sources
 * as they did on the old page.
 */
const h2 = "font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight";

const whyReasons = [
  { title: "Empty Nest Transitions", body: "When children leave home, couples may realize they've grown apart. The shared purpose of parenting no longer masks deeper incompatibilities." },
  { title: "Longer Life Expectancy", body: "People are living longer and healthier lives. A 60-year-old today may have 25+ years ahead — too long to spend in an unhappy marriage." },
  { title: "Greater Financial Independence", body: "More women have independent careers and retirement savings, making divorce a financially viable option later in life." },
  { title: "Retirement Stress", body: "The transition to retirement can expose differences in lifestyle goals, spending habits, and how couples want to spend their time." },
  { title: "Caregiving Pressure", body: "Caring for aging parents or a spouse with health issues can create strain that becomes unsustainable over time." },
  { title: "Blended Families and Adult Children", body: "Second or third marriages involving stepchildren and complex family dynamics often face unique tensions that intensify with age." },
  { title: "Different Visions for Later Life", body: "One spouse may want to travel and downsize while the other wants to stay in the family home. These fundamental disagreements can become deal-breakers." },
];

const keyDifferences = [
  { title: "Retirement assets may be hard to rebuild", body: "Dividing 401(k)s, pensions, and Social Security benefits at 55 or 65 leaves less time to recover financially." },
  { title: "Income may be fixed or reduced", body: "Post-retirement income is often limited. Supporting two households on one retirement plan is a significant challenge." },
  { title: "Health insurance and medical costs matter more", body: "Losing spousal health coverage before Medicare eligibility can create a costly gap. Medical expenses increase with age." },
  { title: "The home may be the largest asset", body: "For many older couples, the family home represents the majority of their net worth — making its disposition the most critical financial decision." },
  { title: "Estate plans may become outdated immediately", body: "Wills, trusts, beneficiary designations, and powers of attorney all need immediate revision after a grey divorce." },
];

const mistakes = [
  "Assuming home value without market support — online estimates are not appraisals and rarely hold up in legal proceedings.",
  "Keeping the home for emotional reasons only — attachment to the house can lead to financial overextension.",
  "Waiting too long to prepare the property — deferred maintenance and market timing can cost tens of thousands.",
  "Ignoring tax and retirement consequences — capital gains, stepped-up basis rules, and QDRO requirements all matter.",
  "Leaving estate documents unchanged — failing to update wills, trusts, and beneficiaries can create unintended consequences.",
];


const Sec = ({ alt, children, wide }: { alt?: boolean; wide?: boolean; children: React.ReactNode }) => (
  <section className={`py-14 lg:py-20 ${alt ? "bg-secondary" : "bg-background"}`}>
    <div className="container px-6 lg:px-8">
      <div className={wide ? "max-w-5xl mx-auto" : "max-w-3xl mx-auto"}>{children}</div>
    </div>
  </section>
);

/** part "why": why it is more common, the gray tsunami, why couples divorce. */
/** part "different": why it differs from divorce earlier in life, and common mistakes. */
const GreyDivorceBackground = ({ part }: { part: "why" | "different" }) =>
  part === "why" ? (
    <>
      <Sec alt>
        <h2 className={h2}>Why Gray Divorce Is Becoming More Common</h2>
        <p className="text-foreground text-lg leading-[1.7]">
          Research from Bowling Green State University&apos;s National Center for Family &amp; Marriage Research found the
          divorce rate for adults 50 and older doubled between 1990 and 2010. Pew Research Center reported that by 2023,
          the divorce rate among married women 50 and older remained nearly three times higher than in 1990. Gray (or
          grey) divorce is no longer a rare exception; it is now a meaningful part of the aging and housing conversation.
        </p>
      </Sec>
      <Sec>
        <h2 className={h2}>What Is the &ldquo;Gray Tsunami&rdquo;?</h2>
        <p className="text-foreground text-lg leading-[1.7]">
          The gray tsunami (also called the silver tsunami) is the demographic wave of the aging Baby Boomer generation,
          born 1946 to 1964. By 2030, every Baby Boomer will be 65 or older. The U.S. Census Bureau projects that by 2030
          older Americans will make up about 21% of the population, and by 2060 nearly one in four Americans will be 65 or
          older. That shapes housing, health care, estate planning, retirement, probate and the transfer of wealth
          between generations, and it is part of why more couples face divorce later in life.
        </p>
      </Sec>
      <Sec alt wide>
        <h2 className={h2 + " text-center"}>Why Older Couples Divorce After Decades of Marriage</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((r) => (
            <div key={r.title} className="card-3d p-6 flex flex-col">
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{r.title}</h3>
              <p className="text-foreground text-base leading-[1.6]">{r.body}</p>
            </div>
          ))}
        </div>
      </Sec>
    </>
  ) : (
    <>
      <Sec>
        <h2 className={h2}>Why Gray Divorce Is Different From Divorce Earlier in Life</h2>
        <div className="space-y-4">
          {keyDifferences.map((d) => (
            <div key={d.title} className="card-3d p-6">
              <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{d.title}</h3>
              <p className="text-foreground text-base leading-[1.6]">{d.body}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec alt>
        <h2 className={h2}>Common Mistakes to Avoid</h2>
        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <div key={i} className="card-3d p-5 flex items-start gap-4 border-l-4 border-gold">
              <span className="text-gold font-bold text-lg shrink-0" aria-hidden="true">⚠</span>
              <p className="text-foreground text-base leading-[1.6]">{m}</p>
            </div>
          ))}
        </div>
      </Sec>
    </>
  );

export default GreyDivorceBackground;
