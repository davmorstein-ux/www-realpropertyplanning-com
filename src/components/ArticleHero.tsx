import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/articles-hero-banner.png";

interface ArticleHeroProps {
  title: string;
}

/**
 * Standard hero used on every /articles/* page:
 * - Full-width panoramic banner image
 * - Sitewide blue band with the article title (matches other hero pages)
 */
const ArticleHero = ({ title }: ArticleHeroProps) => {
  return (
    <>
      <section className="bg-white">
        <img
          src={heroImage}
          alt="Older couple on a bench overlooking a scenic river valley with a vintage car nearby — senior housing and life-transition resources"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
          loading="eager"
        />
      </section>
      <HeroBandTitle>{title}</HeroBandTitle>
    </>
  );
};

export default ArticleHero;
