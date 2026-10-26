import BackLink from "@/components/BackLink";

/* Oct 26, 2026: the site's one back button (BackLink). `accent` kept so the
   calculator pages that pass it need no change; the back button no longer
   takes the page colour, so every back button looks the same. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BackToCalculators = ({ accent }: { accent?: string }) => <BackLink to="/afh-club/calculators" label="Calculators" />;

export default BackToCalculators;
