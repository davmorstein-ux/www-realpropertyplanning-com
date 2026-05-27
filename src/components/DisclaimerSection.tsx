const DisclaimerSection = () => {
  return (
    <section data-nosnippet="true" className="pt-8 pb-16 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="bg-card border-[1.5px] border-border/80 rounded-2xl px-6 py-6 md:px-10 md:py-10"
            style={{
              boxShadow: '0 4px 14px -2px rgba(0,0,0,0.06), 0 2px 6px -1px rgba(0,0,0,0.04), inset 0 1px 0 0 rgba(255,255,255,0.6)',
            }}
          >
            <p className="section-eyebrow">
              Professional Disclosure
            </p>
            <h2 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-5">
              Professional Disclaimer
            </h2>
            <div className="space-y-4 text-foreground text-[18px] md:text-[19px] leading-[1.75] font-medium">
              <p>
                Real Property Planning is an educational and connection hub. The site helps visitors understand important senior transition, estate, probate, and property-related decisions, and may connect visitors with appropriately licensed professionals when needed.
              </p>
              <p>
                Real Property Planning does not provide legal, tax, accounting, financial, brokerage, or appraisal services directly. Visitors should consult qualified, appropriately licensed professionals regarding their specific situation.  The professionals listed here are independent and are not employees, partners, or affiliates of Real Property Planning. This directory is provided for educational and informational purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
