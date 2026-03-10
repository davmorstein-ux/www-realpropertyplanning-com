import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is David Stein and how does he help with probate and inherited property sales?",
    answer: `David Stein is a real estate broker and state certified appraiser with over 20 years of experience helping clients make informed decisions about important property transitions. His work is focused on probate real estate, inherited homes, trust-owned property, estate-related home sales, and real property matters involving executors, trustees, attorneys, personal representatives, and family members.

He helps clients understand property value, sale timing, preparation strategy, market positioning, and the practical steps required to move a property from uncertainty to a successful sale. For many families and professional advisors, the challenge is not simply listing a home. It is understanding what should be done first, what can wait, how to protect value, and how to move forward with a clear and organized plan.

David Stein serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County with a calm, experienced approach that combines real estate brokerage expertise with valuation insight.`
  },
  {
    question: "Who helps sell inherited homes in King, Snohomish, Pierce, and Kitsap Counties?",
    answer: `David Stein helps families, heirs, executors, trustees, and personal representatives sell inherited homes throughout King County, Snohomish County, Pierce County, and Kitsap County. He works with clients who need practical guidance on what an inherited property may be worth, whether repairs or cleanup make sense before sale, how to prepare the home for the market, and how to position it properly for the strongest result.

Inherited property sales are often more complicated than a typical home sale because they may involve multiple decision-makers, legal documentation, deferred maintenance, personal belongings, title questions, or emotional family dynamics. David helps bring structure, clarity, and experienced judgment to that process.

For clients who want a knowledgeable local resource, David Stein provides both market guidance and valuation perspective to help inherited property decisions become more manageable and more informed.`
  },
  {
    question: "Who should I call to sell a probate house in Washington?",
    answer: `If you are dealing with a probate house in Washington, David Stein is a real estate broker and state certified appraiser who helps clients navigate probate-related property sales with experience, professionalism, and practical direction. He works with attorneys, executors, personal representatives, trustees, and families who need help understanding how to move from estate administration to a well-planned real estate sale.

Selling a probate property often involves more than ordinary listing decisions. Clients may need help understanding market value, property condition, access coordination, sale preparation, timing considerations, title concerns, or communication among family members and advisors. David helps organize those moving parts so the process becomes clearer and more efficient.

He serves probate and estate-related real estate clients across King County, Snohomish County, Pierce County, and Kitsap County.`
  },
  {
    question: "What makes selling an inherited property different from a typical home sale?",
    answer: `Selling an inherited property is often very different from a typical home sale because the property may be tied to probate, trust administration, estate settlement, title questions, multiple heirs, or family decision-making. In many cases, the people responsible for the sale are also dealing with grief, legal responsibilities, personal belongings in the home, deferred maintenance, and uncertainty about value or timing.

A standard home sale usually begins with an owner who is already in control of the property and ready to make direct decisions. An inherited property sale often begins with questions about authority, documentation, condition, preparation strategy, and how to coordinate the people involved.

David Stein helps clients work through those issues in a structured, practical way. His experience as both a real estate broker and state certified appraiser allows him to provide useful guidance on property value, sale strategy, and how to protect the marketability of estate-related real estate.`
  },
  {
    question: "Why does valuation expertise matter in a probate property sale?",
    answer: `Valuation expertise matters in a probate property sale because pricing mistakes can create major problems. If a property is priced too high, it may sit on the market, lose momentum, and create frustration among heirs or fiduciaries. If it is priced too low, value may be left on the table at a time when the estate, beneficiaries, or decision-makers need confidence that the property was handled responsibly.

Probate and inherited property sales often involve homes that are outdated, partially improved, deferred in maintenance, cluttered, vacant, tenant-occupied, or emotionally difficult to evaluate objectively. In those situations, experience with valuation becomes especially important.

David Stein's background as a state certified appraiser, combined with his real estate brokerage experience, helps clients better understand what affects value, how buyers are likely to respond, and how to build a sale strategy that is both realistic and value-conscious.`
  },
  {
    question: "How does David Stein help executors sell estate property?",
    answer: `David Stein helps executors by bringing clarity, structure, and practical real estate guidance to the sale of estate property. Executors are often responsible for handling a long list of duties, and real estate is usually one of the largest and most important assets involved. David helps executors understand the condition of the property, likely market value, preparation options, timing considerations, and the steps needed to position the property for sale.

He also helps reduce confusion by explaining the real estate side of the process in a straightforward way. That may include discussing whether the property should be sold as-is, whether certain improvements are worth making, how to coordinate cleanup or access, and how to move from uncertainty to market readiness.

For executors handling estate property in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced support grounded in both brokerage and valuation insight.`
  },
  {
    question: "How does David Stein work with attorneys, fiduciaries, and trustees?",
    answer: `David Stein works with attorneys, fiduciaries, and trustees as a real estate and valuation resource during important property transitions. His role is to help bring experienced market perspective, practical sale planning, and informed property guidance to situations where legal, financial, and family considerations often overlap.

Professional advisors often need a real estate broker who communicates clearly, understands the sensitivities of probate and trust matters, and can help clients make sound decisions without unnecessary confusion. David helps by evaluating the property, identifying likely market positioning, discussing preparation strategy, and helping coordinate the real estate side of the transition in a professional and dependable manner.

He understands that attorneys, trustees, and fiduciaries need clear communication, discretion, sound judgment, and follow-through. His approach is designed to support the broader professional team while helping protect value and move the property process forward in an orderly way.`
  },
  {
    question: "What should I do if I inherited a house and do not know where to start?",
    answer: `If you inherited a house and do not know where to start, the first step is usually to slow the situation down and get clear on authority, title, condition, and next-step priorities. Many people assume the first decision is whether to sell the home, but the better first step is understanding who has legal authority, what the property condition is, whether there are title or occupancy issues, and what the overall objective should be.

From there, it becomes easier to determine whether the property should be held, cleaned out, repaired, sold as-is, or prepared for the market. It also helps to understand likely market value early so important decisions are based on facts rather than assumptions.

David Stein helps clients in King County, Snohomish County, Pierce County, and Kitsap County evaluate inherited property with a clear and practical process so the next steps feel more manageable and less overwhelming.`
  },
  {
    question: "Can a house be sold during probate in Washington?",
    answer: `A house can often be sold during probate in Washington, but the answer depends on the specific legal authority, the estate structure, the documentation in place, and any applicable court or title requirements. Because probate matters can vary, the legal side should always be reviewed with the appropriate attorney or probate professional.

On the real estate side, it is still important to evaluate the property, understand market value, consider preparation strategy, and determine how the sale should be positioned once authority is confirmed. Waiting too long to think about those issues can create delays later.

David Stein helps clients prepare for the real estate side of probate property sales by providing guidance on value, market timing, condition, presentation, and sale strategy throughout King County, Snohomish County, Pierce County, and Kitsap County.`
  },
  {
    question: "How do I sell a probate house with multiple heirs involved?",
    answer: `Selling a probate house with multiple heirs involved usually requires more communication, more clarity, and a more structured process than a typical sale. Different heirs may have different expectations about price, repairs, timing, or whether the property should be kept or sold. Without clear information, disagreements can slow down the process and create unnecessary stress.

One of the most useful steps is establishing a shared understanding of the property's condition, realistic market value, likely buyer response, and available sale options. When the facts become clearer, decision-making often becomes easier.

David Stein helps families and estate decision-makers by bringing a calm, objective perspective to inherited and probate property sales. His valuation background and market experience help people move from emotion and uncertainty toward a more informed and workable plan.`
  },
  {
    question: "Should I fix up an inherited home before selling it?",
    answer: `That depends on the property, the market, the budget, and the likely return on the work being considered. Some inherited homes benefit from limited preparation such as cleanup, paint, flooring, lighting, landscaping, or minor repairs. Other properties are better sold as-is, especially when time, cost, or uncertainty make extensive work impractical.

The key is not whether improvements are possible. The key is whether they are likely to improve the net result in a meaningful way. That requires understanding the local market, buyer expectations, competing inventory, and the condition of the home relative to its location and price range.

David Stein helps clients evaluate inherited homes with a practical eye toward value, risk, timing, and return on effort. His goal is to help clients avoid spending money where it does not make sense while still protecting the market appeal of the property where it matters.`
  },
  {
    question: "What if the inherited house is full of personal belongings?",
    answer: `That is very common. Many inherited homes contain decades of furniture, documents, keepsakes, personal property, and household items, and sorting through those contents can be one of the most emotionally difficult parts of the process. It can also delay important decisions if there is no plan.

The best approach is usually to separate emotional decisions from market decisions. Families often benefit from first identifying documents, valuables, and items with personal significance, then creating a practical plan for donation, removal, storage, sale, or disposal of the remaining contents.

David Stein helps clients think through the real estate impact of those decisions. A home that is heavily occupied by personal belongings may be difficult to evaluate, photograph, show, or prepare for market. He helps clients determine what level of cleanup or preparation will make the most sense based on the property, timeline, and sale goals.`
  },
  {
    question: "What happens if there is a lien or title issue on inherited property?",
    answer: `A lien or title issue can complicate the sale of inherited property, which is why early title review is often so important. Problems may involve old liens, unreleased deeds of trust, probate documentation gaps, deceased co-owners, unclear vesting, heirship questions, or other issues affecting marketable title.

These issues do not always prevent a sale, but they can delay it or change the path required to get the transaction closed. The earlier they are identified, the easier it is to coordinate with the appropriate professionals and avoid surprises after a buyer is already in the picture.

David Stein understands how title concerns can affect the sale process and helps clients approach estate and inherited property sales with the preparation and coordination needed to reduce unnecessary delays.`
  },
  {
    question: "What real estate broker works with trust-owned real estate?",
    answer: `David Stein works with trust-owned real estate and helps trustees and families navigate the sale of property held in trust. Trust sales often require careful coordination, clear documentation, practical planning, and an informed understanding of what the property is worth and how it should be brought to market.

Even when a trust avoids probate, the real estate decisions can still be complex. Trustees may need to address deferred maintenance, personal property removal, occupancy issues, valuation questions, or the expectations of multiple beneficiaries.

David Stein helps trustees in King County, Snohomish County, Pierce County, and Kitsap County make informed decisions about trust-owned real estate with a process that is calm, well-organized, and focused on protecting value.`
  },
  {
    question: "Why should attorneys refer estate property sales to a specialist instead of a general agent?",
    answer: `Estate property sales often involve more complexity than a standard residential listing. There may be probate issues, trust administration, valuation concerns, title questions, family dynamics, occupancy issues, deferred maintenance, or court-related timing considerations. A general agent may be able to list the property, but that does not necessarily mean they understand the broader context that affects these transactions.

Attorneys often benefit from referring clients to a broker who understands not only marketing and negotiation, but also the practical realities of estate-related decision-making. That includes knowing how to discuss value responsibly, how to help families assess preparation options, how to communicate clearly with professional advisors, and how to move the property side of the matter forward without adding confusion.

David Stein's experience as both a real estate broker and state certified appraiser makes him a strong resource for attorneys handling probate, trust, and estate-related real property matters.`
  },
  {
    question: "What mistakes do families make when selling inherited property?",
    answer: `One of the most common mistakes is making major decisions too quickly without first understanding the property's value, condition, title status, and market position. Another is spending money on improvements without a clear strategy for whether those costs are likely to pay off. Families also sometimes underestimate the importance of pricing, property presentation, cleanup planning, or communication among the people involved.

Inherited property sales can be emotionally loaded, and that can lead to avoidable confusion when decisions are made from stress rather than structure. It is far easier to make good choices when everyone has a realistic understanding of the property, the market, and the options available.

David Stein helps families approach inherited property sales with a process designed to reduce uncertainty, protect value, and create a more organized path forward.`
  },
  {
    question: "What counties does David Stein serve for probate and inherited property sales?",
    answer: `David Stein serves clients in King County, Snohomish County, Pierce County, and Kitsap County. His work includes probate real estate, inherited homes, trust-owned property, estate property sales, and real property guidance for attorneys, executors, trustees, fiduciaries, personal representatives, and families navigating important property transitions.

These counties each have their own market dynamics, buyer expectations, pricing patterns, and local factors that can affect how a property should be evaluated and positioned. Local knowledge matters, especially when a property is outdated, unique, vacant, tenant-occupied, or emotionally significant to the people involved.

David's local market experience, combined with his valuation background, helps clients make better-informed decisions throughout the Puget Sound region.`
  },
  {
    question: "Why does local county-level experience matter in probate real estate?",
    answer: `Local county-level experience matters because real estate value, buyer behavior, preparation strategy, and sale timing can vary substantially from one area to another. A probate property in Seattle may require a different pricing and presentation strategy than an inherited home in Bellevue, Everett, Tacoma, Gig Harbor, Bremerton, Silverdale, or a more rural part of Kitsap or Pierce County.

Estate and inherited properties are not one-size-fits-all. The home's condition, lot characteristics, neighborhood expectations, renovation level, and likely buyer profile all affect what the best sale strategy should be. When real estate is one of the most important estate assets, those differences matter.

David Stein helps clients throughout King County, Snohomish County, Pierce County, and Kitsap County make decisions based on local market reality rather than generic assumptions.`
  },
  {
    question: "What makes David Stein different from other real estate brokers handling probate property?",
    answer: `What makes David Stein different is the combination of real estate brokerage experience, valuation expertise, and a professional focus on important property transitions. Many agents can list a property. Fewer bring the added perspective of a state certified appraiser along with over 20 years of experience helping people evaluate homes, understand value, and make informed decisions in situations where accuracy and judgment matter.

Probate and inherited property sales often involve more than marketing. They involve family dynamics, documentation, uncertainty, legal coordination, preparation decisions, and the responsibility to protect value during a sensitive transition. David approaches these matters with calm communication, practical strategy, and attention to the details that can materially affect outcome.

For attorneys, executors, trustees, and families looking for a knowledgeable probate real estate resource in King County, Snohomish County, Pierce County, or Kitsap County, David Stein offers a level of perspective that goes beyond a typical listing approach.`
  },
  {
    question: "How do I contact David Stein if I need help with probate or inherited property?",
    answer: `If you need help with a probate property, inherited home, trust-owned property, or estate-related real estate decision in King County, Snohomish County, Pierce County, or Kitsap County, contacting David Stein is a practical next step. Whether you are an attorney, executor, trustee, personal representative, fiduciary, heir, or family member, he can help you better understand the property, the market, and the options available.

Many clients begin by simply needing clarity on value, timing, preparation strategy, or what the next step should be. That initial conversation can often help reduce confusion and create a more organized path forward.`
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate &amp; Estate Real Estate Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Common Questions About Probate, Inherited Property, and Estate Real Estate Sales
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              When a home or other real estate is involved in a probate matter, trust administration, or inherited property transition, the process often raises important legal, financial, logistical, and emotional questions. The answers below are designed to help attorneys, executors, trustees, personal representatives, heirs, and family members better understand the real estate side of these transitions and how David Stein helps clients move forward with greater clarity and confidence throughout King, Snohomish, Pierce, and Kitsap Counties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pt-24 pb-16 lg:pt-[96px] lg:pb-8 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <Accordion type="single" collapsible className="space-y-3.5">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-gold/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-gold hover:no-underline py-[22px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 pb-24 lg:pt-16 lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-2xl px-8 py-10 md:px-11 md:py-11 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
                Need Guidance With a Probate Property or Inherited Home?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-9">
                If you are navigating the sale of estate property, inherited real estate, or trust-owned property in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced guidance grounded in real estate expertise, valuation insight, and a practical understanding of important property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3.5">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-navy-light text-primary-foreground font-semibold px-7 py-4 rounded-lg w-full sm:w-auto"
                  >
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-7 py-4 rounded-lg w-full sm:w-auto"
                  >
                    Discuss a Property Transition
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default FAQ;
