import expRealtyLogo from "@/assets/exp-realty-logo.webp";

const AgentCredentialBlock = () => (
  <div className="mt-4 text-center">
    <p className="font-serif text-[22px] text-foreground font-extrabold leading-snug tracking-[-0.01em]">David Stein</p>
    <p className="text-foreground/80 text-lg font-semibold leading-snug mt-1">President, Real Property Planning</p>
    <p className="text-muted-foreground text-base leading-snug mt-1">Real Estate Broker — License #113972</p>
    <p className="text-muted-foreground text-sm leading-snug mt-1">WA Certified Residential Appraiser — #1702080</p>
    <div className="flex items-center justify-center gap-4 mt-3">
      <img
        src={expRealtyLogo}
        alt="eXp Realty — David Stein's brokerage"
        className="h-6 w-auto opacity-70"
        loading="lazy"
      />
    </div>
  </div>
);

export default AgentCredentialBlock;
