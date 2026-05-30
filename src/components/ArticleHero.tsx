import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/articles-hero-banner.png";

interface ArticleHeroProps {
  title: string;
}

/**
 * Standard hero used on every /articles/* page:
 * - Parallax sticky hero image (background-attachment: fixed on desktop)
 * - 50vh tall desktop, 40vh static on mobile/tablet (no parallax)
 * - Cream "peel" overlay so following content slides over the fixed image
 */
const ArticleHero = ({ title }: ArticleHeroProps) => {
  return (
    <>
      <style>{`
        .rpp-article-hero {
          display: block;
          position: relative;
          width: 100%;
          height: 50vh;
          background-image: url('${heroImage}');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 1024px) {
          .rpp-article-hero {
            background-attachment: scroll;
            height: 40vh;
          }
        }
      `}</style>
      <div
        className="rpp-article-hero"
        role="img"
        aria-label="Older couple on a bench overlooking a scenic river valley with a vintage car nearby — senior housing and life-transition resources"
      />
      <HeroBandTitle>{title}</HeroBandTitle>
    </>
  );
};

export default ArticleHero;
