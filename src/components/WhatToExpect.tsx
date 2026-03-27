import { Phone, ClipboardList, Target, Handshake } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Initial Conversation",
    description:
      "A brief, no-pressure call to understand your situation, answer questions, and discuss what you're facing — whether it's a probate sale, an inherited home, or a senior transition.",
  },
  {
    icon: ClipboardList,
    number: "2",
    title: "Property Review & Assessment",
    description:
      "David evaluates the property's condition, location, and market position — drawing on his dual expertise as a broker and certified appraiser to give you an honest, informed picture.",
  },
  {
    icon: Target,
    number: "3",
    title: "Strategy & Pricing",
    description:
      "Together, we build a plan: realistic pricing grounded in valuation data, preparation recommendations, timeline expectations, and clear next steps tailored to your goals.",
  },
  {
    icon: Handshake,
    number: "4",
    title: "Execution & Coordination",
    description:
      "David manages the details — vendor coordination, listing, marketing, negotiations, and communication with attorneys, co-executors, and family members — so you don't have to carry the burden alone.",
  },
];

const WhatToExpect = () => (
  <section className="py-16 lg:py-24 bg-secondary">
    <div className="container px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
          The Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
          What to Expect When You Reach Out
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          You don't need to have everything figured out. Here's how a typical engagement unfolds — calmly, clearly, and at a pace that works for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="relative text-center">
            {/* Step number badge */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-2xl font-bold shadow-md">
              {step.number}
            </div>
            <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatToExpect;
