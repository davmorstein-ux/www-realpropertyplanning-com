export type Testimonial = {
  id: string;
  quote: string;
  credit: string;
  context?: string;
  sourceNote?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "theron",
    quote:
      "Dave was extremely helpful in the purchase of our new house. He was always available for whenever your time schedule worked. I would recommend Dave to anyone buying or selling.",
    credit: "Theron",
    sourceNote: "Zillow review",
  },
  {
    id: "darrien",
    quote:
      "I had an awesome experience with Dave and his team! We were first time home buyers so we really enjoyed that they really had our back, especially when things got a bit tricky. Super grateful for his help throughout our journey.",
    credit: "Darrien",
    sourceNote: "Zillow review",
  },
  {
    id: "cameron",
    quote:
      "Dave did an outstanding job helping me with the purchase of my property. Very knowledgeable and very involved in all aspects of the purchasing process. Very friendly and always gave great advice.",
    credit: "Cameron",
    sourceNote: "Zillow review",
  },
];

export const featuredTestimonials = (count = 3): Testimonial[] => TESTIMONIALS.slice(0, count);