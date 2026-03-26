import { useParams } from "react-router-dom";
import CityPageTemplate from "@/components/CityPageTemplate";
import { getCityBySlug } from "@/lib/service-areas-data";
import NotFound from "@/pages/NotFound";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) return <NotFound />;

  return <CityPageTemplate city={city} />;
};

export default CityPage;
