/**
 * An article's cover artwork, shown on the article itself (Sept 29, 2026).
 *
 * The owner: the same artwork a visitor clicked on a library tile should greet
 * them on the page, "so the user knows they landed on the correct page."
 * Placed at the top of the article's text column: floats right beside the title
 * and lead on screens 760px and wider, and sits centered above them on phones.
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
  width: 170px;
  max-width: 55%;
  height: auto;
  margin: 18px auto 22px;
  border-radius: 6px;
  box-shadow: 0 10px 26px rgba(20, 16, 12, 0.28);
}
@media (min-width: 760px) {
  img.rpp-article-cover { float: right; width: 210px; max-width: 34%; margin: 4px 0 18px 28px; }
}
`;

export default function ArticleCover({ src, alt, width, height }: Props) {
  return (
    <>
      <style>{CSS}</style>
      <img src={src} alt={alt} width={width} height={height} className="rpp-article-cover" loading="eager" decoding="async" />
    </>
  );
}
