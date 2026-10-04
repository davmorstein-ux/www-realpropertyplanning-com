import { useLocation } from "react-router-dom";
import NextStepBlock from "@/components/NextStepBlock";
import { nextQuestionsFor } from "@/data/nextQuestions";

/**
 * "Your next questions" — decision-path links for the current page, from
 * src/data/nextQuestions.ts. Renders nothing on pages without an entry, so a
 * shared layout can include it safely.
 */
const NextQuestions = () => {
  const { pathname } = useLocation();
  const steps = nextQuestionsFor(pathname);
  if (!steps.length) return null;
  return <NextStepBlock heading="Your next questions" steps={steps} columns={2} />;
};

export default NextQuestions;
