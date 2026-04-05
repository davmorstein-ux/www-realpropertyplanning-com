import ListenButton from "@/components/ListenButton";

const steps = [
  {
    number: "1",
    title: "Initial Conversation",
    description:
      "It usually starts with a phone call. You tell David what's going on — whether it's a probate situation, an inherited home, or a parent who needs to move — and he listens before offering any direction.",
  },
  {
    number: "2",
    title: "Property Review & Assessment",
    description:
      "David visits the property and looks at it with fresh eyes — condition, deferred maintenance, what the market is doing nearby. Because he's both a broker and a certified appraiser, the assessment goes deeper than a typical walkthrough.",
  },
  {
    number: "3",
    title: "Strategy & Pricing",
    description:
      "Based on what he's found, David puts together a plan — realistic pricing backed by valuation data, what preparation makes sense (if any), and a timeline that fits your situation. No surprises.",
  },
  {
    number: "4",
    title: "Execution & Coordination",
    description:
      "From here, David handles the day-to-day — coordinating vendors, managing the listing, communicating with attorneys and family members, and keeping things moving. You stay informed without having to manage every detail.",
  },
];

const WhatToExpect = () => (
  <section className="py-16 lg:py-24 bg-secondary">
    <div className="container px-6 lg:px-8" id="what-to-expect-section">
      <div className="text-center mb-14">
        <div className="flex justify-center mb-5">
          <ListenButton targetId="what-to-expect-section" />
        </div>
        <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
          The Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
          What to Expect When You Reach Out
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Most people aren't sure what to expect when they first reach out. Here's how things typically unfold — at a pace that fits your situation, not someone else's timeline.
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
            <p className="text-muted-foreground text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatToExpect;
