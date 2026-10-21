/**
 * "People who help with this" on the guides outside the three homepage paths
 * (Oct 20, 2026, David's go): a guide that names a kind of professional now
 * shows who is listed for it. Which categories go on which page:
 * src/data/topicProfessionals.ts (the one map, same rules as the paths).
 *
 * Placed once in the shared DisclaimerSection and ExecutorSubPageLayout, so a
 * page gets the box by being listed in the map, not by importing anything.
 * The three homepage paths place TopicProfessionals inside their own layouts
 * (ChoiceFlowPage, EstateSubPageLayout, PlanningSubPageLayout), so they are
 * skipped here to avoid showing the box twice.
 */
import { useLocation } from "react-router-dom";
import TopicProfessionals from "@/components/TopicProfessionals";
import { professionalsForTopic } from "@/data/topicProfessionals";

const OWN_PLACEMENT = ["/helping-an-aging-parent", "/planning-before-a-crisis/", "/estate-probate-inherited-property/"];

export default function GuideProfessionals() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  if (OWN_PLACEMENT.some((p) => path.startsWith(p))) return null;
  if (professionalsForTopic(path).length === 0) return null;
  return (
    <div className="container px-6 lg:px-8" style={{ paddingTop: 8 }}>
      <TopicProfessionals path={path} style={{ maxWidth: 768, margin: "0 auto" }} />
    </div>
  );
}
