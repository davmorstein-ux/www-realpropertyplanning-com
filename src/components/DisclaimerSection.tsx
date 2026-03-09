const DisclaimerSection = () => {
  return (
    <section className="pt-7 pb-14 md:pt-10 md:pb-14 lg:pt-14 lg:pb-14 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="bg-card border border-border rounded-2xl px-5 py-5 md:px-9 md:py-9">
            <p className="text-muted-foreground/60 font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Professional Disclosure
            </p>
            <h2 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-[18px]">
              Professional Disclaimer
            </h2>
            <div className="space-y-[14px] text-muted-foreground text-[15px] leading-[1.8]">
              <p>
                David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser. He is not an attorney, CPA, or tax advisor, and does not provide legal, tax, or accounting advice.
              </p>
              <p>
                Any information presented on this website, in related materials, or in communications regarding probate, estate property, inherited real estate, trust-owned property, or other real property matters is provided for general informational purposes and for matters related to real estate brokerage, market guidance, and valuation-related services only.
              </p>
              <p>
                Probate, trust administration, estate settlement, inheritance, taxation, title matters, and related legal or financial issues often require guidance from qualified attorneys, CPAs, tax professionals, or other licensed advisors. Visitors, clients, executors, trustees, fiduciaries, personal representatives, heirs, and family members should consult the appropriate professionals regarding matters outside the scope of David Stein's real estate brokerage and appraisal-related services.
              </p>
              <p>
                David Stein's professional services are limited to those within the scope of his licensure and certification in the State of Washington.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
