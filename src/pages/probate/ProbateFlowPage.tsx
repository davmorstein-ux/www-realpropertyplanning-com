import FlowBranchPage from "@/components/flow/FlowBranchPage";
import ProbateFlowChart from "@/components/probate/ProbateFlowChart";
import { FLOW_BY_SLUG, FLOW_BASE, DEADLINES_PATH } from "@/data/probateFlow";
import ExecutorNotActing from "@/components/guides/ExecutorNotActing";

/**
 * One box of the probate flow chart (Oct 1, 2026). Words live in
 * src/data/probateFlow.ts; the layout is shared with the AFH guide
 * (src/components/flow/FlowBranchPage.tsx).
 */
export default function ProbateFlowPage({ slug }: { slug: string }) {
  return (
    <FlowBranchPage
        bylineContext="estate"
      page={FLOW_BY_SLUG[slug]}
      base={FLOW_BASE}
      guideName="Washington Probate Guide"
      chart={<ProbateFlowChart current={slug} />}
      reference={{ label: "Deadlines & key rules", href: DEADLINES_PATH }}
      glossary={{ label: "glossary", href: "/probate-glossary" }}
      accent="#25597e"
      heroBg="#eef3f7"
      extra={slug === "heir" ? <ExecutorNotActing /> : undefined}
      disclaimer="General information, not legal advice; Real Property Planning does not refer clients to attorneys."
    />
  );
}
