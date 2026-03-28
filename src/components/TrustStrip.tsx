import GoldCheck3D from "@/components/GoldCheck3D";

const trustIndicators = [
  "David Stein — WA Real Estate Broker #113972",
  "WA Certified Residential Appraiser #1702080",
  "20+ Years of Experience",
  "Serving clients throughout Washington State",
];

const TrustStrip = () => (
  <section data-nosnippet className="bg-secondary border-y border-border py-6">
    <div className="container px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex w-full items-center gap-2.5 text-base font-medium text-muted-foreground">
            <GoldCheck3D size={20} />
            <span>{indicator}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
