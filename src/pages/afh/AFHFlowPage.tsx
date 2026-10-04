import FlowBranchPage from "@/components/flow/FlowBranchPage";
import AFHFlowChart, { AFH_FLOW_CHART_CSS } from "@/components/afh/AFHFlowChart";
import BackToAFHClub from "@/components/BackToAFHClub";
import CTASection from "@/components/CTASection";
import { AFH_FLOW_BY_SLUG, AFH_FLOW_BASE, AFH_RULES_PATH, AFH_GREEN } from "@/data/afhFlow";

/**
 * One box of the AFH Club flow chart (Oct 1, 2026). Words live in
 * src/data/afhFlow.ts; layout shared with the probate guide
 * (src/components/flow/FlowBranchPage.tsx), in AFH Club green.
 */

export default function AFHFlowPage({ slug }: { slug: string }) {
  return (
    <>
      <style>{AFH_FLOW_CHART_CSS}</style>
      <FlowBranchPage
        bylineContext="afh"
        page={AFH_FLOW_BY_SLUG[slug]}
        base={AFH_FLOW_BASE}
        guideName="Washington AFH Guide"
        chart={<AFHFlowChart current={slug} />}
        reference={{ label: "Rules & key figures", href: AFH_RULES_PATH }}
        glossary={{ label: "AFH glossary", href: "/afh-club/glossary" }}
        accent={AFH_GREEN}
        heroBg="#edf0f3"
        disclaimer="General information, not legal or tax advice."
        after={
          <>
            <BackToAFHClub />
            <CTASection />
          </>
        }
      />
    </>
  );
}
