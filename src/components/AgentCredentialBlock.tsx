import expRealtyLogo from "@/assets/exp-realty-logo.png";

const AgentCredentialBlock = () => (
  <div className="mt-4 text-center">
    <p className="font-serif text-xl text-foreground font-bold leading-snug">David Stein</p>
    <p className="text-muted-foreground text-base leading-snug mt-1">Real Estate Broker</p>
    <p className="text-muted-foreground text-sm leading-snug mt-1">License #: 113972</p>
    <img
      src={expRealtyLogo}
      alt="eXp Realty — David Stein's brokerage"
      className="h-6 w-auto mx-auto mt-2 opacity-70"
      loading="lazy"
    />
  </div>
);

export default AgentCredentialBlock;
