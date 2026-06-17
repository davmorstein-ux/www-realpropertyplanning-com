import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const RPPHomeV2 = () => {
  return (
    <>
      <SEOHead
        title="Real Property Planning | Estate & Senior Resources"
        description="Washington resource hub for probate real estate, inherited property, senior transitions, and trusted professional guidance."
        canonical="https://realpropertyplanning.com"
      />
      <Header />
      <main id="main-content">
        {/* RPPHomeV2 content goes here */}
        <section className="py-12 md:py-16 lg:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-[820px] mx-auto text-center">
              <h1 className="font-serif text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-red-900 leading-tight mb-4">
                RPPHome V2
              </h1>
              <p className="text-[19px] md:text-[22px] lg:text-[24px] text-navy font-medium leading-[1.55]">
                New homepage layout version 2.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV2;
