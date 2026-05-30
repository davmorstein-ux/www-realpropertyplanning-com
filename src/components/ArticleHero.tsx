import HeroBandTitle from "@/components/HeroBandTitle";
import ParallaxHero from "@/components/ParallaxHero";
import heroImage from "@/assets/articles-hero-banner.png";

interface ArticleHeroProps {
  title: string;
}

const ArticleHero = ({ title }: ArticleHeroProps) => {
  return (
    <>
      <ParallaxHero
        src={heroImage}
        alt="Older couple on a bench overlooking a scenic river valley with a vintage car nearby — senior housing and life-transition resources"
      />
      <HeroBandTitle>{title}</HeroBandTitle>
    </>
  );
};

export default ArticleHero;
