import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AskBox from "@/components/AskBox";
import {
  ALL_LIBRARY_ENTRIES,
  JOURNEYS,
  QUESTIONS_PATH,
  journeyPath,
  libraryFor,
  topicAnchor,
  topicsFor,
  type Journey,
} from "@/data/questionLibrary";

/**
 * /questions and /questions/<journey> (Oct 11, 2026): the question library.
 * Every entry is in src/data/questionLibrary.json; see the header of
 * src/data/questionLibrary.ts for where the answers came from and the rule for
 * editing them (an answer says only what its linked page says).
 *
 * Shown in full, not collapsed: readers (and search and AI tools) see every
 * answer, and each one links to the guide it came from.
 *
 * CSS traps (src/AGENTS.md): class names avoid "card", "tile", "btn", "cta" and
 * "section"; headings and paragraphs get their sizes with !important because
 * index.css forces main h2/h3 sizes and p margins; no uppercase or
 * letter-spacing on anything that must stay full size.
 */

const SITE = "https://realpropertyplanning.com";
const NAVY = "#1B3A6B";
const INK = "#141210";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const PAGE_CSS = `
  .rpp-qa { font-family: ${FONT}; color: ${INK}; }
  .rpp-qa-wrap { max-width: 900px; margin: 0 auto; padding: 40px 20px 56px; }
  .rpp-qa h1.rpp-qa-h1 { font-family: ${FONT} !important; font-size: clamp(30px, 4.2vw, 42px) !important; line-height: 1.15 !important; margin: 0 0 12px !important; color: ${INK} !important; }
  .rpp-qa .rpp-qa-intro { font-size: 19px !important; line-height: 1.6; margin: 0 0 24px; max-width: 760px; }
  .rpp-qa .rpp-qa-intro a { font-size: 19px !important; }
  /* index.css colours every link in main and forces it to 16px; these keep each journey's colour and the 18px floor. */
  .rpp-qa a.rpp-qa-back { display: inline-block; font-size: 17px !important; font-weight: 700; color: ${NAVY} !important; margin: 0 0 14px; text-decoration: underline; text-underline-offset: 3px; }
  .rpp-qa h2.rpp-qa-h2 { font-family: ${FONT} !important; font-size: clamp(24px, 2.8vw, 30px) !important; line-height: 1.25 !important; margin: 40px 0 14px !important; color: var(--j) !important; padding-bottom: 8px; border-bottom: 3px solid var(--j); }
  .rpp-qa h3.rpp-qa-q { font-family: ${FONT} !important; font-size: 21px !important; line-height: 1.35 !important; font-weight: 700 !important; margin: 0 0 8px !important; color: ${INK} !important; }
  .rpp-qa .rpp-qa-entry { padding: 18px 0; border-bottom: 1px solid #e5e0d6; }
  .rpp-qa .rpp-qa-a { font-size: 18px !important; line-height: 1.65 !important; margin: 0 0 8px; color: ${INK} !important; }
  .rpp-qa a.rpp-qa-more { font-size: 17px !important; font-weight: 700; color: var(--j) !important; text-decoration: underline; text-underline-offset: 3px; }
  .rpp-qa .rpp-qa-jump { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 8px; padding: 0; list-style: none; }
  .rpp-qa .rpp-qa-jump li { list-style: none; }
  .rpp-qa .rpp-qa-jump a { display: inline-block; font-size: 16px !important; font-weight: 600; color: var(--j) !important; border: 1.5px solid var(--j); border-radius: 999px; padding: 6px 14px; text-decoration: none !important; background: #fff; }
  @media (hover: hover) { .rpp-qa .rpp-qa-jump a:hover { background: var(--j); color: #fff !important; } }
  .rpp-qa .rpp-qa-ask { margin: 8px 0 28px; }
  .rpp-qa .rpp-qa-journeys { display: grid; gap: 16px; grid-template-columns: 1fr; margin: 8px 0 0; }
  @media (min-width: 720px) { .rpp-qa .rpp-qa-journeys { grid-template-columns: 1fr 1fr; } }
  .rpp-qa a.rpp-qa-journey { display: block; background: #fff; border: 1px solid #e5e0d6; border-top: 6px solid var(--j); border-radius: 12px; padding: 18px 20px; text-decoration: none !important; color: ${INK} !important; }
  @media (hover: hover) { .rpp-qa a.rpp-qa-journey:hover { box-shadow: 0 10px 24px -14px rgba(0,0,0,.35); border-color: var(--j); } }
  .rpp-qa .rpp-qa-jt { display: block; font-size: 22px !important; font-weight: 700 !important; color: var(--j) !important; line-height: 1.25; margin-bottom: 6px; }
  .rpp-qa .rpp-qa-jn { display: block; font-size: 16px !important; font-weight: 700 !important; color: ${INK} !important; margin-bottom: 6px; }
  .rpp-qa .rpp-qa-jb { display: block; font-size: 17px !important; font-weight: 400 !important; line-height: 1.55; color: ${INK} !important; }
  .rpp-qa .rpp-qa-note { font-size: 17px !important; line-height: 1.6; color: #2b2825; margin: 32px 0 0; }
  .rpp-qa .rpp-qa-others { display: flex; flex-wrap: wrap; gap: 10px 18px; margin: 10px 0 0; }
  .rpp-qa a.rpp-qa-start { color: var(--j) !important; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
  .rpp-qa a.rpp-qa-other { color: var(--j) !important; }
  .rpp-qa .rpp-qa-others a { font-size: 17px !important; font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
`;

const NOTE =
  "These are short answers to help you get oriented. Each one comes from one of our guides; follow the link for the full explanation and its sources. This is general information for Washington families, not legal, tax, financial or medical advice.";

function Hub() {
  return (
    <>
      <SEOHead
        title="Questions & Answers: Short Answers for Washington Families | Real Property Planning"
        description={`${ALL_LIBRARY_ENTRIES.length} short answers to the questions Washington families ask about planning ahead, helping an aging parent, handling an estate, and finding the right professional. Each answer links to the guide that covers it in full.`}
        canonical={`${SITE}${QUESTIONS_PATH}`}
      />
      <div className="rpp-qa-wrap">
        <h1 className="rpp-qa-h1">Questions &amp; Answers</h1>
        <div className="rpp-qa-intro">
          Short answers to the questions families ask most, grouped the same way as the rest of the site. Every answer comes from one of our guides and links to it, so you can read the full explanation and its sources.
        </div>
        <div className="rpp-qa-ask">
          <AskBox />
        </div>
        <div className="rpp-qa-journeys">
          {JOURNEYS.map((j) => (
            <Link key={j.slug} to={journeyPath(j.slug)} className="rpp-qa-journey" style={{ ["--j" as string]: j.color }}>
              <span className="rpp-qa-jt">{j.title}</span>
              <span className="rpp-qa-jn">{libraryFor(j.slug).length} questions</span>
              <span className="rpp-qa-jb">{j.blurb}</span>
            </Link>
          ))}
        </div>
        <div className="rpp-qa-note">{NOTE}</div>
      </div>
    </>
  );
}

function JourneyPage({ journey }: { journey: Journey }) {
  const entries = libraryFor(journey.slug);
  const topics = topicsFor(journey.slug);
  const url = `${SITE}${journeyPath(journey.slug)}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.q,
      acceptedAnswer: { "@type": "Answer", text: e.a, url: `${SITE}${e.path}` },
    })),
  };
  return (
    <>
      <SEOHead
        title={`${journey.title}: Questions & Answers | Real Property Planning`}
        description={`Short answers to ${entries.length} common questions from Washington families. ${journey.blurb} Each answer links to the guide that covers it in full.`}
        canonical={url}
        schemaJson={faqSchema}
      />
      <div className="rpp-qa-wrap" style={{ ["--j" as string]: journey.color }}>
        <Link to={QUESTIONS_PATH} className="rpp-qa-back">← All questions &amp; answers</Link>
        <h1 className="rpp-qa-h1">{journey.title}: Questions &amp; Answers</h1>
        <div className="rpp-qa-intro">
          Short answers to {entries.length} common questions, each from one of our guides and linked to it. {journey.blurb}{" "}
          Prefer the step-by-step guide? Start at <Link to={journey.start} className="rpp-qa-start">{journey.title}</Link>.
        </div>
        <div className="rpp-qa-ask">
          <AskBox />
        </div>
        <nav aria-label="Topics on this page">
          <ul className="rpp-qa-jump">
            {topics.map((t) => (
              <li key={t.topic}>
                <a href={`#${topicAnchor(t.topic)}`}>{t.topic}</a>
              </li>
            ))}
          </ul>
        </nav>
        {topics.map((t) => (
          <div key={t.topic}>
            <h2 className="rpp-qa-h2" id={topicAnchor(t.topic)}>{t.topic}</h2>
            {t.entries.map((e) => (
              <div className="rpp-qa-entry" key={e.id} id={e.id.toLowerCase()}>
                <h3 className="rpp-qa-q">{e.q}</h3>
                <div className="rpp-qa-a">{e.a}</div>
                <Link to={e.path} className="rpp-qa-more">Read more: {e.pathTitle} →</Link>
              </div>
            ))}
          </div>
        ))}
        <div className="rpp-qa-note">{NOTE}</div>
        <div className="rpp-qa-note" style={{ marginTop: 18 }}>
          <strong>More questions &amp; answers:</strong>
          <div className="rpp-qa-others">
            {JOURNEYS.filter((j) => j.slug !== journey.slug).map((j) => (
              <Link key={j.slug} to={journeyPath(j.slug)} className="rpp-qa-other" style={{ ["--j" as string]: j.color }}>{j.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function QuestionLibrary({ slug }: { slug?: Journey["slug"] }) {
  const journey = slug ? JOURNEYS.find((j) => j.slug === slug) : undefined;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <Header />
      <main className="rpp-qa">{journey ? <JourneyPage journey={journey} /> : <Hub />}</main>
      <Footer />
    </>
  );
}
