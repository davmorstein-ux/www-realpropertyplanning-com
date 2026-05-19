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
          A Trusted Guide Through Life&rsquo;s Major Transitions
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
          Real Property Planning helps seniors, families, executors, and
          professionals navigate complex decisions involving aging, estates,
          housing, and property transitions.
        </h2>
        <p
          className="text-foreground mx-auto"
          style={{
            fontSize: "20px",
            lineHeight: 1.75,
            maxWidth: 760,
          }}
        >
          From helping aging parents and coordinating senior moves to probate
          guidance and trusted professional connections, our platform was
          designed to simplify difficult transitions with clarity and
          compassion.
        </p>
      </div>
    </div>
  </section>
);

export default HomepageIdentityAnchor;
