const testimonials = [
  {
    quote:
      "Real Property Planning helped our family navigate a very emotional and complicated estate sale. We felt guided every step of the way.",
    name: "Margaret L.",
    role: "Family Member",
  },
  {
    quote:
      "I refer probate clients here with confidence. The resources and connections are exactly what families need during a difficult time.",
    name: "Robert K.",
    role: "Estate Attorney",
  },
  {
    quote:
      "As a senior figuring out my next chapter, this site gave me clarity and connected me to exactly the right people.",
    name: "Dorothy S.",
    role: "Senior Homeowner",
  },
];

const HomepageTestimonials = () => (
  <section className="bg-secondary py-16 md:py-20 lg:py-24">
    <div className="container px-6 lg:px-8">
      <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold text-center mb-12">
        What People Are Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map(({ quote, name, role }) => (
          <figure
            key={name}
            className="flex flex-col h-full bg-white rounded-2xl p-8 lg:p-10 shadow-[0_12px_32px_-18px_hsl(var(--navy)/0.45)] border-t-4 border-navy"
          >
            <blockquote
              className="italic text-[#4B5563] flex-1"
              style={{ fontSize: "18px", lineHeight: 1.7 }}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-navy font-bold" style={{ fontSize: "16px" }}>
              — {name}, <span className="font-medium text-[#374151]">{role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageTestimonials;
