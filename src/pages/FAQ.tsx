import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    question: "What is probate real estate?",
    answer: "Probate real estate refers to property that is part of the estate administration process after someone has passed away. The property may need to be managed, evaluated, prepared, and sold as part of settling the estate."
  },
  {
    question: "Who do you work with during an estate property sale?",
    answer: "David Stein works with attorneys, executors, personal representatives, trustees, fiduciaries, family members, seniors, and adult children helping parents through a housing transition."
  },
  {
    question: "Can a home be sold as-is?",
    answer: "Yes. In many situations, selling as-is is a practical option. In other cases, selective improvements may help improve marketability or net proceeds. David helps evaluate the likely pros and cons of each approach."
  },
  {
    question: "Do you help with clean-out and preparation?",
    answer: "Yes. David can help coordinate clean-out, repairs, landscaping, staging, hauling, and other services needed to prepare a property for sale."
  },
  {
    question: "Can you help determine what a property is worth?",
    answer: "Yes. As a professional real estate broker and state certified appraiser, David brings valuable insight into property value, pricing strategy, market conditions, and overall sale positioning."
  },
  {
    question: "Do you work with attorneys and fiduciaries?",
    answer: "Yes. David is a real estate resource for attorneys, trustees, fiduciaries, executors, and other professionals who need experienced support for clients dealing with property transitions."
  },
  {
    question: "What types of properties do you help sell?",
    answer: "David helps with houses, condominiums, townhomes, land, and other residential real property tied to estate, probate, trust, or senior-transition matters."
  },
  {
    question: "Why is it helpful to work with someone experienced in these situations?",
    answer: "Estate and senior-transition property sales often involve legal, logistical, emotional, and financial complexity. Experience helps reduce confusion, improve decision-making, and create a smoother process."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4 text-xs">
              Estate, Probate & Senior Real Estate FAQ
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Answers to common questions from attorneys, executors, trustees, families, and seniors navigating estate, probate, trust, and transition-related real estate decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-gold/30"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-gold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Have Another Question?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein is happy to discuss your specific situation and answer any questions you may have.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Contact David Stein
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
