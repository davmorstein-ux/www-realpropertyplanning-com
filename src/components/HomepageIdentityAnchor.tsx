const HomepageIdentityAnchor = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="container px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-gold mb-8"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          A Trusted Guide Through Life&rsquo;s Hardest Moments
        </p>
        <h2
          className="font-serif text-navy mb-10"
          style={{
            fontSize: "clamp(28px, 3.4vw, 44px)",
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: "-0.005em",
          }}
        >
          Real Property Planning helps families navigate some of life&rsquo;s
          most difficult moments &mdash; caring for an aging parent, settling
          a loved one&rsquo;s estate, and deciding what to do with the family
          home.
        </h2>
        <p
          className="text-foreground mx-auto"
          style={{
            fontSize: "20px",
            lineHeight: 1.75,
            maxWidth: 760,
          }}
        >
          Whether you&rsquo;re an adult child trying to do the right thing for
          a parent, an executor stepping into a role you never expected, or a
          family member just trying to figure out what comes next &mdash;
          you&rsquo;re in the right place. We&rsquo;ll walk you through it,
          one step at a time.
        </p>
      </div>
    </div>
  </section>
);

export default HomepageIdentityAnchor;
