/**
 * An article's cover artwork, shown on the article itself (Sept 29, 2026).
 *
 * The owner: the same artwork a visitor clicked on a library tile should greet
 * them on the page, "so the user knows they landed on the correct page."
 * Placed at the top of the article's text column: floats right beside the title
 * and lead at every width. On phones it used to sit centered above the title at
 * 170px, which filled the first screen before the reader saw what the page was
 * (phone audit, Oct 7, 2026); it is now a small cover beside the title.
 * The parent gets display: flow-root (via :has) so the float never spills into
 * the next section.
 *
 * Covers are tall (3:4 or 2:3). Pass the file's real width and height so the
 * browser reserves the right space before the image loads.
 */

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CSS = `
*:has(> .rpp-article-cover) { display: flow-root; }
img.rpp-article-cover {
  display: block;
  float: right;
  width: 108px;
  max-width: 32%;
  height: auto;
  margin: 4px 0 12px 16px;
  border-radius: 5px;
  box-shadow: 0 8px 20px rgba(20, 16, 12, 0.26);
}
@media (min-width: 760px) {
  img.rpp-article-cover { float: right; width: 210px; max-width: 34%; margin: 4px 0 18px 28px; }
}
`;

export default function ArticleCover({ src, alt, width, height }: Props) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <img src={src} alt={alt} width={width} height={height} className="rpp-article-cover" loading="eager" decoding="async" />
    </>
  );
}
