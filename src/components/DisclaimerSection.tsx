const DisclaimerSection = () => {
  return (
    <section data-nosnippet className="pt-8 pb-16 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 bg-secondary">
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
            <div className="space-y-4 text-muted-foreground text-base leading-[1.8]">
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
