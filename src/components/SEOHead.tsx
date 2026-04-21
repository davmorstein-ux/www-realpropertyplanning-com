import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  /** Set to true to add noindex,follow — keeps links crawlable but page out of index */
  noIndex?: boolean;
  schemaJson?: object | object[];
  /** @deprecated Use schemaJson instead */
  jsonLd?: object;
  /** @deprecated Use noIndex instead */
  noindex?: boolean;
}

const SITE_URL = "https://www.realpropertyplanning.com";
const DEFAULT_OG_IMAGE = "https://www.realpropertyplanning.com/logo.png";

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  noIndex,
  schemaJson,
  jsonLd,
  noindex,
}: SEOHeadProps) => {
  const location = useLocation();
  const stripTrailingSlash = (url: string) => {
    // Preserve root "/" and root of origin; strip trailing slash otherwise
    if (!url) return url;
    if (url === "/" || /^https?:\/\/[^/]+\/?$/.test(url)) return url;
    return url.replace(/\/+$/, "");
  };
  const rawCanonical =
    canonical || `${SITE_URL}${location.pathname === "/" ? "" : location.pathname}`;
  const canonicalUrl = stripTrailingSlash(rawCanonical);
  const image = ogImage || DEFAULT_OG_IMAGE;
  const shouldNoIndex = noIndex ?? noindex ?? false;
  const schema = schemaJson ?? jsonLd;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          shouldNoIndex
            ? "noindex,follow,max-image-preview:large"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Real Property Planning" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
