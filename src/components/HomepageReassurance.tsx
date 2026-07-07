const HomepageReassurance = () => (
  <section className="bg-cream py-20 md:py-28">
    <style>{`
      .rpp-reassurance-heading {
        font-family: Georgia, 'Cormorant Garamond', serif !important;
        font-size: clamp(32px, 4.5vw, 44px) !important;
        line-height: 1.3 !important;
        font-weight: 700 !important;
        letter-spacing: 0.01em !important;
        color: #1a2744 !important;
        margin: 0 0 20px 0 !important;
      }
      .rpp-reassurance-text {
        font-size: 22px !important;
        line-height: 1.8 !important;
        color: #1a2744 !important;
        font-weight: 500 !important;
        margin: 0 !important;
      }
    `}</style>
    <div className="container px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="rpp-reassurance-heading">You Don&rsquo;t Have To Figure This Out Alone</h2>
        <p className="rpp-reassurance-text">
          Most families come to us unsure where to start &mdash; and that&rsquo;s okay. A short, honest conversation is
          often the calmest first step.
        </p>
      </div>
    </div>
  </section>
);

export default HomepageReassurance;
