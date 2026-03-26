import { useParams } from "react-router-dom";
import CityServicePageTemplate from "@/components/CityServicePageTemplate";
import { getCityBySlug, getServiceBySlug } from "@/lib/service-areas-data";
import NotFound from "@/pages/NotFound";

const CityServicePage = () => {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  if (!city || !service) return <NotFound />;

  return <CityServicePageTemplate city={city} service={service} />;
};

export default CityServicePage;
