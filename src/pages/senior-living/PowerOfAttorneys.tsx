import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import redSphere from "@/assets/red-sphere-accent.png";
import ServicePageNav from "@/components/ServicePageNav";

const poaTiles = [
  { title: "Aging Parents", description: "A parent begins to need help with daily decisions, and the family home needs to be sold to fund care or simplify the estate. Someone needs to be authorized to act." },
  { title: "Medical Events", description: "A sudden illness, stroke, or hospitalization creates an urgent need for someone to manage property matters while the homeowner is unable to participate." },
  { title: "Out-of-State Families", description: "When the person managing the property lives in a different state, a POA allows them to authorize someone local to handle the day-to-day coordination and sale process." },
  { title: "Urgent Decisions", description: "Sometimes a property needs to be listed or sold quickly — for financial, legal, or practical reasons — and the owner isn't available or able to be directly involved." },
];

const PowerOfAttorneys = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [spherePositions, setSpherePositions] = useState<{ key: string; left: number; top: number; row: number; col: number }[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [colCount, setColCount] = useState(2);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let frameId = 0;
    const measure = () => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>(".card-3d-blue"));
      if (cards.length < 4) { setSpherePositions([]); return; }
      const gridRect = grid.getBoundingClientRect();
      const rows: Array<{ top: number; items: Array<{ rect: DOMRect }> }> = [];
      const sorted = cards.map(c => ({ rect: c.getBoundingClientRect() })).sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left);
      sorted.forEach(card => {
        const last = rows[rows.length - 1];
        if (!last || Math.abs(card.rect.top - last.top) > 8) { rows.push({ top: card.rect.top, items: [card] }); return; }
        last.items.push(card);
      });
      rows.forEach(r => r.items.sort((a, b) => a.rect.left - b.rect.left));
      if (rows.length > 0) setColCount(rows[0].items.length);
      const pos: typeof spherePositions = [];
      rows.forEach((row, ri) => {
        const next = rows[ri + 1];
        if (!next) return;
        const n = Math.min(row.items.length, next.items.length) - 1;
        for (let ci = 0; ci < n; ci++) {
          const ul = row.items[ci], ur = row.items[ci + 1], ll = next.items[ci], lr = next.items[ci + 1];
          pos.push({
            key: `${ri}-${ci}`,
            left: (ul.rect.right + ur.rect.left) / 2 - gridRect.left,
            top: (Math.max(ul.rect.bottom, ur.rect.bottom) + Math.min(ll.rect.top, lr.rect.top)) / 2 - gridRect.top,
            row: ri, col: ci,
          });
        }
      });
      setSpherePositions(pos);
    };
    const schedule = () => { window.cancelAnimationFrame(frameId); frameId = window.requestAnimationFrame(measure); };
    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(grid);
    Array.from(grid.querySelectorAll<HTMLElement>(".card-3d-blue")).forEach(c => ro.observe(c));
    window.addEventListener("resize", schedule);
    return () => { window.cancelAnimationFrame(frameId); window.removeEventListener("resize", schedule); ro.disconnect(); };
  }, []);

  const isSphereNearTile = useCallback((sphere: { row: number; col: number }, tileIndex: number) => {
    const tileRow = Math.floor(tileIndex / colCount);
    const tileCol = tileIndex % colCount;
    return (sphere.row === tileRow || sphere.row === tileRow - 1) && (sphere.col === tileCol || sphere.col === tileCol - 1);
  }, [colCount]);

  return (
  <>
    <SEOHead
      title="Power of Attorney & Real Estate Decisions | Real Property Planning"
      description="Understanding how a power of attorney works in real estate — for families, executors, and professionals navigating property decisions in Washington State."
      canonical="https://www.realpropertyplanning.com/senior-living/power-of-attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Power of Attorneys", url: "https://www.realpropertyplanning.com/senior-living/power-of-attorneys" },
      ]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              Guidance for Families & Professionals
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-5">
              Power of Attorney &amp; Real Estate Decisions
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
              When someone needs help managing property, a properly structured power of attorney can make all the difference.
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed max-w-2xl mx-auto">
              Whether you're planning ahead or stepping in to help a loved one, understanding how a power of attorney works in real estate is critical. This page explains what you need to know — and how to move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: What Is a POA? */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              What Is a Power of Attorney?
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
              <p>
                A power of attorney is a legal document that allows one person — the "agent" or "attorney-in-fact" — to act on behalf of another person, known as the "principal." It's one of the most important planning tools available, especially when someone may not be able to manage their own affairs in the future.
              </p>
              <p>
                Powers of attorney are commonly used in situations involving aging, illness, or incapacity. They allow a trusted family member or professional to step in and handle financial decisions, legal matters, and real estate transactions when the principal cannot do so themselves.
              </p>
              <p>
                In real estate, a power of attorney can authorize an agent to list a property, sign contracts, coordinate with title and escrow, and close a sale — all on behalf of the homeowner. It's a practical tool that keeps things moving when life circumstances make direct involvement difficult or impossible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: When It Becomes Important — Premium Tiles */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              When It Becomes Important
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Most people don't think about a power of attorney until they need one. But in practice, these situations come up more often than families expect — and they usually arrive under pressure.
            </p>
            <div className="relative">
              <div ref={gridRef} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {poaTiles.map((tile, index) => (
                  <div
                    key={tile.title}
                    className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="card-3d-blue__inner h-full">
                      <div className="card-3d-blue__face h-full">
                        <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                          <div>
                            <h3
                              className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]"
                              style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}
                            >
                              {tile.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {tile.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {spherePositions.map((sphere) => {
                const isActive = hoveredIndex !== null && isSphereNearTile(sphere, hoveredIndex);
                return (
                  <img
                    key={sphere.key}
                    src={redSphere}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute z-10 hidden sm:block w-[44px] h-[44px] lg:w-[52px] lg:h-[52px]"
                    style={{
                      left: sphere.left,
                      top: sphere.top,
                      transform: "translate(-50%, -50%)",
                      filter: isActive
                        ? "brightness(1.18) drop-shadow(0 0 6px hsla(0, 75%, 50%, 0.35))"
                        : "brightness(1) drop-shadow(0 0 0px transparent)",
                      transition: "filter 0.5s ease",
                    }}
                    draggable={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Impacts Real Estate */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              How It Impacts Real Estate
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Selling a property under a power of attorney isn't the same as a standard sale. There are additional documentation requirements, coordination steps, and potential complications that require experience and attention to detail.
            </p>
            <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
              <p>
                <strong className="text-foreground">Listing and contracts.</strong> The agent acting under the POA signs listing agreements, reviews offers, and executes purchase and sale agreements on behalf of the principal. The document must clearly grant this authority.
              </p>
              <p>
                <strong className="text-foreground">Title and escrow.</strong> Title companies will review the POA before allowing a closing to proceed. Not every document is accepted — it must meet specific legal standards and be recorded with the county auditor's office where the property is located.
              </p>
              <p>
                <strong className="text-foreground">Lender and underwriting considerations.</strong> If the buyer is financing the purchase, the lender's underwriting team may also need to review and approve the POA before the loan can close. This can add time to the process.
              </p>
              <p>
                <strong className="text-foreground">Proper documentation.</strong> The POA must be current, properly executed, and specific enough to cover real estate transactions. Vague or outdated documents are one of the most common reasons for delays or rejected closings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Common Challenges */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Common Challenges to Be Aware Of
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              These situations are manageable — but only when you know what to expect. Here are the challenges families and agents encounter most often.
            </p>
            <div className="relative grid gap-3 sm:grid-cols-2">
              <div className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]">
                <div className="card-3d-blue__inner h-full">
                  <div className="card-3d-blue__face h-full">
                    <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}>
                          Outdated or Incomplete Documents
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          A POA created years ago may not meet current legal standards or may lack the specific language needed for real estate transactions. Reviewing and updating the document early can prevent delays later.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]">
                <div className="card-3d-blue__inner h-full">
                  <div className="card-3d-blue__face h-full">
                    <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}>
                          Institutional Rejection
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          Title companies, lenders, and other institutions may refuse to accept a POA if it doesn't meet their internal requirements — even if it's technically valid. Working with experienced professionals helps navigate this.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]">
                <div className="card-3d-blue__inner h-full">
                  <div className="card-3d-blue__face h-full">
                    <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}>
                          Unclear Authority Language
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          If the POA doesn't explicitly authorize real estate transactions — or doesn't name the specific property — it may not be sufficient. Clarity in the document is essential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]">
                <div className="card-3d-blue__inner h-full">
                  <div className="card-3d-blue__face h-full">
                    <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}>
                          Timing Issues During a Sale
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          Delays in obtaining, recording, or verifying a POA can stall a transaction. In time-sensitive situations, getting the document in order early is critical to keeping everything on track.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Red 3D sphere at center intersection */}
              <img
                src={redSphere}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 sm:h-9 sm:w-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How I Help */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              How I Help
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              I don't provide legal advice — and I'll always recommend working with a qualified attorney for the legal side of a power of attorney. But when it comes to the real estate process, I bring experience and structure to situations that often feel uncertain.
            </p>
            <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
              <p>
                <strong className="text-foreground">Coordination with attorneys, title, and escrow.</strong> I work alongside your legal team to make sure the real estate side of things moves smoothly. That includes verifying documentation requirements, communicating with title companies, and keeping everyone aligned.
              </p>
              <p>
                <strong className="text-foreground">Understanding documentation requirements.</strong> With more than 20 years of experience as both a licensed broker and a certified appraiser, I know what title companies, lenders, and underwriters expect — and I can help you prepare before issues arise.
              </p>
              <p>
                <strong className="text-foreground">Helping families move forward with clarity.</strong> Many families come to me feeling overwhelmed. My role is to provide a steady, calm presence — someone who can explain the process, answer questions, and help the family make informed decisions about the property.
              </p>
              <p>
                <strong className="text-foreground">Experience with sensitive situations.</strong> These are rarely simple transactions. They involve aging parents, family dynamics, and high-stakes decisions. I approach every situation with the patience and professionalism it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: For Families, Executors & Professionals */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              For Families, Executors &amp; Professionals
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card-3d px-6 py-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Families</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-3">
                  If you're helping a loved one who can no longer manage their property, you're not alone. Many families face this situation — and having the right guidance makes it less stressful.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  I'll help you understand the process, coordinate with your team, and take care of the property details so you can focus on what matters most.
                </p>
              </div>
              <div className="card-3d px-6 py-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Executors &amp; Trustees</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-3">
                  If you've been named as an agent under a power of attorney — or you're serving as executor or trustee — you likely have property responsibilities that require careful handling.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  I work with fiduciaries regularly and understand the documentation, timing, and coordination involved in selling property under legal authority.
                </p>
              </div>
              <div className="card-3d px-6 py-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Attorneys &amp; Advisors</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-3">
                  If you represent clients who need to sell property under a POA, I can serve as a reliable point of coordination on the real estate side.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  I communicate clearly, respect timelines, and understand the standards your clients' transactions need to meet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              Practical Guidance
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Real-World Situations We Help Navigate
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Aging Parent Needs Help Selling Their Home
                </h3>
                <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  A parent's health has changed, and the family home needs to be sold to fund care or simplify the estate. A properly executed power of attorney allows a trusted family member to list the property, review offers, and coordinate with title and escrow — without the parent needing to be directly involved. I work alongside families in these situations to keep the process organized, reduce stress, and make sure the real estate side moves forward smoothly. If you're also managing <Link to="/senior-transitions" className="text-primary underline underline-offset-4 hover:text-accent transition-colors">a senior transition</Link>, I can help coordinate both the property sale and the move.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Medical Event Creates Urgent Decisions
                </h3>
                <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  A sudden illness, stroke, or hospitalization can create an immediate need to manage property matters — from listing a home to handling offers and closing. When a power of attorney is already in place, these decisions can move forward without delay. When it isn't, families often face difficult legal hurdles. I bring experience and structure to these time-sensitive situations, coordinating with attorneys and title companies to keep things on track. Families managing an estate alongside these decisions may also benefit from our <Link to="/probate-estate-sales" className="text-primary underline underline-offset-4 hover:text-accent transition-colors">Probate &amp; Estate Sales</Link> guidance.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Out-of-State Family Managing Property Remotely
                </h3>
                <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  When the person responsible for managing a property lives in another state, a power of attorney enables them to authorize someone local to handle the coordination and sale. I work with out-of-state families regularly — handling inspections, appraisals, contractor access, and buyer negotiations so the family doesn't need to travel back and forth. Clear communication and reliable coordination are essential, and that's exactly what I provide. If you're serving as <Link to="/executors" className="text-primary underline underline-offset-4 hover:text-accent transition-colors">executor of an estate</Link>, I understand the additional responsibilities you're managing.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Time-Sensitive Property Sale
                </h3>
                <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                  Financial pressures, pending offers, or legal timelines sometimes mean a property needs to move quickly. A properly documented power of attorney allows the transaction to proceed without unnecessary delays — but the documentation must be current, specific, and accepted by all parties involved. I help families and <Link to="/for-attorneys" className="text-primary underline underline-offset-4 hover:text-accent transition-colors">attorneys</Link> prepare ahead of time so the closing process stays on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Experience Matters */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Why Experience Matters in Power of Attorney Situations
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
              <p>
                Selling property under a power of attorney isn't a routine transaction. It requires careful coordination between attorneys, title companies, escrow officers, lenders, and sometimes the courts. Every party involved has documentation standards — and if any of them reject the POA or require additional verification, the sale can stall.
              </p>
              <p>
                With more than 20 years of experience as both a licensed real estate broker and a certified appraiser, I've worked through these situations many times. I know what title companies look for, how lenders evaluate POA documents during underwriting, and how to prepare families before problems arise — not after.
              </p>
              <p>
                Most people in these situations didn't plan for this. They're stepping into unfamiliar territory during a stressful time. My role is to provide a calm, experienced presence — someone who can explain the process clearly, anticipate challenges, and keep the transaction moving forward. That kind of guidance makes a real difference when the stakes are high and the timeline is tight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ
        eyebrow="Power of Attorney FAQ"
        heading="Frequently Asked Questions About Power of Attorney & Real Estate"
        faqs={[
          {
            question: "Can a power of attorney be used to sell a house?",
            answer: "Yes. A properly executed power of attorney can authorize an agent to list, negotiate, and close the sale of real property on behalf of the principal. The document must specifically grant authority over real estate transactions, and it must be accepted by the title company handling the closing.",
          },
          {
            question: "Does a power of attorney need to be recorded with the county?",
            answer: "In Washington State, a power of attorney used in a real estate transaction typically needs to be recorded with the county auditor's office where the property is located. Recording ensures the document is part of the public record and gives title companies the verification they need to proceed with a closing.",
          },
          {
            question: "Will title companies accept any power of attorney?",
            answer: "Not necessarily. Title companies have their own internal review standards. Some may reject a POA that is outdated, too vague, or doesn't meet specific formatting or notarization requirements. Working with an experienced broker and a qualified attorney helps ensure the document meets the standards needed for a smooth closing.",
          },
          {
            question: "What happens if the power of attorney document is outdated?",
            answer: "An outdated POA may not meet current legal standards or may lack the specific language required by title companies and lenders. If the document was created years ago, it's worth having an attorney review and update it before beginning a real estate transaction. Addressing this early prevents delays later.",
          },
          {
            question: "Can a power of attorney sign listing agreements and purchase contracts?",
            answer: "Yes, as long as the POA document explicitly grants authority to handle real estate transactions. The agent acting under the POA signs on behalf of the principal, and the listing agreement and purchase contract should clearly reflect this arrangement.",
          },
          {
            question: "What documentation is required to use a POA in a property sale?",
            answer: "At minimum, you'll need the original or certified copy of the power of attorney document, valid identification for the agent, and in most cases, the document must be recorded with the county. Title companies and lenders may request additional documentation depending on the specifics of the transaction.",
          },
          {
            question: "Can multiple people act as agents under a power of attorney?",
            answer: "Yes, a power of attorney can name more than one agent. However, the document must specify whether the agents can act independently or must act together. In real estate, having multiple agents can sometimes add complexity to the signing and closing process, so clarity in the document is important.",
          },
          {
            question: "What's the difference between a general and durable power of attorney?",
            answer: "A general power of attorney grants broad authority but typically becomes invalid if the principal becomes incapacitated. A durable power of attorney remains in effect even if the principal can no longer make decisions. For real estate situations involving aging or illness, a durable POA is usually the more appropriate and practical option.",
          },
        ]}
      />

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-5">
              Have Questions About a Power of Attorney and Real Estate?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
              Every situation is different. I'm here to help you understand your options and move forward with clarity.
            </p>
            <p className="text-primary-foreground/65 text-[15px] leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you're a family member stepping in to help, an executor managing property, or a professional coordinating on behalf of a client — a conversation is the best place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href="tel:+12069003015"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-primary font-semibold rounded-lg hover:bg-gold/90 transition-colors text-base"
              >
                <Phone className="w-4 h-4" />
                Call (206) 900-3015
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors text-base"
              >
                <Mail className="w-4 h-4" />
                Send a Message
              </Link>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              No pressure. Just practical guidance.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/senior-living/power-of-attorneys" />
      <ServicePageNav />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);
};

export default PowerOfAttorneys;
