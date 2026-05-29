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
      {/*
        IMPORTANT: This wrapper is a <div>, NOT a <section>.
        A sitewide rule in index.css forces 32px top/bottom padding on every
        <section>, which would create a visible white gap between the hero
        image and the navy band below it. Keeping this a <div> ensures the
        blue band sits flush beneath the hero image on every article page.
      */}
      <div className="bg-white">
        <img
          src={heroImage}
          alt="Older couple on a bench overlooking a scenic river valley with a vintage car nearby — senior housing and life-transition resources"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
          loading="eager"
        />
      </div>
      <HeroBandTitle>{title}</HeroBandTitle>
    </>
  );
};

export default ArticleHero;
