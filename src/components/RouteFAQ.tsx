import { useLocation } from "react-router-dom";
import PageFAQ from "@/components/PageFAQ";
import { ROUTE_FAQS } from "@/data/routeFaqs";

/**
 * Shows the questions in src/data/routeFaqs.ts for the current page, in the
 * site's usual FAQ style (Nov 2, 2026). Renders nothing on a page without a
 * list. See routeFaqs.ts for why these exist.
 */
export default function RouteFAQ() {
  const { pathname } = useLocation();
  const faqs = ROUTE_FAQS[pathname.replace(/\/+$/, "") || "/"];
  if (!faqs?.length) return null;
  return <PageFAQ faqs={faqs} heading="Common Questions" eyebrow="Frequently Asked Questions" id="route" />;
}
