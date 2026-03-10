import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GlossaryTerm {
  term: string;
  definition: string;
}

interface GlossaryCategory {
  title: string;
  terms: GlossaryTerm[];
}

const glossaryData: GlossaryCategory[] = [
  {
    title: "Core Probate Terms",
    terms: [
      { term: "Administrator", definition: "A person appointed by the court to manage a deceased person's estate when there is no valid will naming an executor, or when no named executor is available to serve." },
      { term: "Beneficiary", definition: "A person or entity entitled to receive money, property, or another benefit from a will, trust, insurance policy, or estate." },
      { term: "Creditor", definition: "A person or company to whom the deceased or the estate owes money. Valid creditor claims may need to be addressed before heirs or beneficiaries receive property." },
      { term: "Decedent", definition: "The person who has died." },
      { term: "Distribution", definition: "The process of transferring estate assets to the people entitled to receive them after debts, expenses, taxes, and court requirements have been addressed." },
      { term: "Estate", definition: "All property and interests owned by a person at death, including real property and personal property, to the extent they are part of the estate." },
      { term: "Estate Administration", definition: "The overall process of collecting assets, paying debts and expenses, handling court requirements, and distributing property after death." },
      { term: "Executor", definition: "The person named in a will to carry out its instructions and administer the estate." },
      { term: "Fiduciary", definition: "A person who has a legal duty to act in the best interests of another. Executors, administrators, trustees, and personal representatives typically serve in a fiduciary capacity." },
      { term: "Heir", definition: "A person entitled by law to inherit property when someone dies without a valid will." },
      { term: "Intestate", definition: "Dying without a valid will." },
      { term: "Intestate Succession", definition: "The legal order of inheritance that applies when someone dies without a valid will." },
      { term: "Inventory", definition: "A list of estate assets and, in many cases, their values." },
      { term: "Letters of Administration", definition: "Court-issued authority allowing an administrator to act on behalf of an estate when there is no executor with valid authority under a will." },
      { term: "Letters Testamentary", definition: "Court-issued authority confirming that an executor has legal power to act for the estate." },
      { term: "Personal Representative", definition: "A general term for the person legally responsible for administering an estate. Depending on the situation, that person may be an executor or administrator." },
      { term: "Probate", definition: "The legal court-supervised process used to determine the validity of a will, appoint the person with authority to act, and oversee administration of the estate." },
      { term: "Probate Estate", definition: "The assets that are subject to probate administration, generally including property held in the deceased person's individual name without a built-in transfer method." },
      { term: "Testate", definition: "Dying with a valid will." },
      { term: "Testator", definition: "A person who makes a will." },
      { term: "Will", definition: "A legal document stating how a person wants their property distributed at death and often naming the executor who will administer the estate." },
      { term: "Will Contest", definition: "A legal challenge to the validity of a will." },
    ],
  },
  {
    title: "Wills and Inheritance Terms",
    terms: [
      { term: "Bequest", definition: "A gift made by will, traditionally referring to personal property rather than real estate." },
      { term: "Devise", definition: "A gift of property made through a will." },
      { term: "Devisee", definition: "A person or entity receiving property under a will." },
      { term: "Heirship", definition: "The legal status of being an heir." },
      { term: "Non-Probate Asset", definition: "An asset that passes outside probate because it has its own transfer mechanism, such as joint tenancy, beneficiary designation, or trust ownership." },
      { term: "Residuary Estate", definition: "The portion of an estate remaining after specific gifts, debts, taxes, and expenses have been handled." },
      { term: "Testamentary Capacity", definition: "The legal mental ability required to make a valid will." },
      { term: "Trust", definition: "A legal arrangement in which one person or institution holds and manages property for the benefit of another." },
      { term: "Trustee", definition: "The person or institution responsible for managing trust property according to the trust terms and fiduciary duties." },
      { term: "Undue Influence", definition: "Improper pressure that overcomes a person's free will and causes them to sign a will or transfer property in a way they otherwise would not have chosen." },
    ],
  },
  {
    title: "Real Property and Title Terms",
    terms: [
      { term: "Clear Title", definition: "Title to real property that is free from unresolved ownership disputes, undisclosed heirs, major lien issues, or other defects that could interfere with a sale or transfer." },
      { term: "Deed", definition: "A written legal instrument used to transfer ownership of real property from one party to another." },
      { term: "Encumbrance", definition: "A claim, restriction, or burden affecting title or use of real property, such as a lien, easement, deed restriction, or court order." },
      { term: "Joint Tenancy", definition: "A form of co-ownership in which surviving owners usually receive the deceased owner's interest automatically by right of survivorship, outside of probate." },
      { term: "Life Estate", definition: "An ownership interest that lasts for the life of a specified person. When that person dies, the property passes to the person or persons holding the remainder interest." },
      { term: "Lien", definition: "A legal claim against real property to secure payment of a debt or obligation." },
      { term: "Marketable Title", definition: "Title that is reasonably free from serious defects and can generally be accepted by a buyer or title company." },
      { term: "Personal Property", definition: "Property that is not real property, such as cash, jewelry, furniture, vehicles, and other movable items." },
      { term: "Quitclaim Deed", definition: "A deed that transfers whatever ownership interest the grantor has, if any, without warranties about title." },
      { term: "Real Property", definition: "Land and things permanently attached to the land, such as a home, garage, structures, and improvements." },
      { term: "Remainderman", definition: "A person entitled to receive property after the end of a life estate or similar prior interest." },
      { term: "Right of Survivorship", definition: "The legal feature of certain forms of co-ownership that allows the surviving owner to automatically receive the deceased owner's interest." },
      { term: "Tenancy in Common", definition: "A form of co-ownership in which each owner holds a separate share that can pass by will or intestacy instead of automatically going to the other owner." },
      { term: "Title", definition: "The legal ownership interest in property." },
      { term: "Title Report", definition: "A report that identifies the current record owner and lists liens, encumbrances, easements, or other matters affecting title." },
    ],
  },
  {
    title: "Probate Sale and Estate Property Terms",
    terms: [
      { term: "Ancillary Probate", definition: "A secondary probate proceeding opened in another state when the deceased owned real property outside their home state." },
      { term: "Appraised Value", definition: "The value conclusion developed by a licensed or certified appraiser based on recognized valuation methods." },
      { term: "As-Is Sale", definition: "A sale in which the property is offered in its present condition." },
      { term: "Court Confirmation", definition: "A court approval process sometimes required before the sale or transfer of estate real property can be completed." },
      { term: "Estate Property", definition: "Real property that is part of the deceased person's estate and subject to administration, sale, or transfer through the estate process." },
      { term: "Heirs' Property", definition: "Real property inherited by multiple heirs, often without a clear written agreement or completed estate administration." },
      { term: "Homestead", definition: "A legal concept that may protect a primary residence in certain ways under state law, such as creditor protection, tax treatment, or rights of a surviving spouse or family member." },
      { term: "Partition", definition: "A legal process used to divide co-owned property or force its sale when the owners cannot agree." },
      { term: "Probate Listing", definition: "A real estate listing involving property that is subject to probate or estate administration." },
      { term: "Probate Sale", definition: "A sale of real property that is part of a deceased person's estate and is being transferred through probate procedures." },
      { term: "Quiet Title", definition: "A legal action used to resolve competing claims, clarify ownership, or remove clouds on title." },
      { term: "Transfer on Death Deed", definition: "A deed allowed in some states that names a beneficiary to receive real property automatically at death without probate." },
    ],
  },
  {
    title: "Helpful Supporting Legal Terms",
    terms: [
      { term: "Affidavit", definition: "A written statement made under oath. In probate and real-property matters, affidavits are often used to confirm facts, heirship, title history, or exemption status." },
      { term: "Community Property", definition: "Property acquired by spouses during marriage in states that follow community-property rules." },
      { term: "Fraud", definition: "An intentional misrepresentation or deceit that may affect the validity of a will, transfer, or legal claim." },
      { term: "Sale Authority", definition: "The legal authority granted to a personal representative, executor, administrator, or trustee to market and sell property." },
      { term: "Successor Trustee", definition: "The person named to take over management of a trust when the original trustee can no longer serve." },
    ],
  },
];

const Terminology = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Wills, Probate & Real Property Glossary | David Stein"
        description="A clear glossary of wills, probate, inheritance, and real property terms to help attorneys, executors, trustees, and families understand the process of managing and selling estate-related real estate."
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 md:pt-32 md:pb-20 lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Probate Real Estate Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Wills, Probate, and Real Property Glossary
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Understanding wills, probate, inheritance, and real property terms can make an important difference when attorneys, executors, trustees, personal representatives, and families are making decisions about a home or other real estate. This glossary is designed to explain common probate and property-related terms in clear language so visitors can better understand the process of managing, transferring, preparing, and selling real property after a death or major life transition.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary Accordion Section */}
      <section className="pt-14 pb-16 md:pt-[72px] md:pb-20 lg:pt-24 lg:pb-[104px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <Accordion type="single" collapsible className="space-y-3.5">
              {glossaryData.map((category, catIndex) => (
                <AccordionItem
                  key={catIndex}
                  value={`category-${catIndex}`}
                  className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-[22px] md:px-6 md:py-[22px]">
                    <h3 className="pr-4">{category.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 md:px-6 md:pb-6 pt-0">
                    <div className="space-y-5">
                      {category.terms.map((item, termIndex) => (
                        <div key={termIndex}>
                          <h4 className="font-sans text-base font-semibold text-foreground mb-1.5">
                            {item.term}
                          </h4>
                          <p className="text-muted-foreground leading-[1.75] text-[15px]">
                            {item.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Disclaimer */}
            <div className="mt-14 md:mt-16">
              <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-4xl">
                This glossary is provided for general informational purposes only and is not legal advice. Probate, inheritance, trust, and real-property laws vary by state and by the facts of each estate. Anyone dealing with a will, probate matter, inherited property, or trust-owned real estate should consult a qualified attorney, tax professional, or other appropriate advisor for advice specific to their situation.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-16 bg-card border border-border rounded-2xl px-7 py-9 md:px-10 md:py-11 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Need Guidance With Inherited Property or a Probate Home Sale?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are navigating the sale of inherited property, a probate home, trust-owned real estate, or a property transition involving an executor, trustee, attorney, or family estate, experienced guidance can help bring clarity, order, and confidence to the process.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss a Probate Property
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

export default Terminology;
