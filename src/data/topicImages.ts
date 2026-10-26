/**
 * One picture per topic (Oct 26, 2026). David's realistic objects, made in
 * ChatGPT on plain white and cut out to public/. Every tile about a topic uses
 * its picture, on every page, so visitors learn them. Add new topics here and
 * nowhere else. Sizes are the files' own, so ImageTile reserves the space.
 *
 * Materials are mixed on purpose (painted metal, plastic, wood, leather,
 * fabric) so a row of tiles does not turn into a row of brass objects.
 */
export type TopicImage = { src: string; w: number; h: number };

export const TOPIC_IMAGES = {
  independentLiving: { src: "/care-mailbox-v1.webp", w: 429, h: 440 },
  assistedLiving: { src: "/care-pills-v1.webp", w: 440, h: 265 },
  adultFamilyHome: { src: "/care-table-v1.webp", w: 440, h: 315 },
  /* Open, with photos showing: closed, it read as a ledger or court binder. */
  memoryCare: { src: "/care-album-v2.webp", w: 440, h: 301 },
  inHomeCare: { src: "/care-armchair-v1.webp", w: 440, h: 416 },
  temporaryCare: { src: "/care-hourglass-v1.webp", w: 251, h: 440 },
} satisfies Record<string, TopicImage>;
