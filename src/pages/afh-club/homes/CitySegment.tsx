import { useParams } from "react-router-dom";
import { isFilterSlug } from "@/data/afh/directory";
import CityDirectory from "./CityDirectory";
import FacilityDetail from "./FacilityDetail";

/**
 * Resolves /afh-club/homes/:citySlug/:segment.
 *
 * The segment is either a filter ("private-pay") or a facility slug
 * ("amen-adult-family-home-755603"). Facility slugs always end in the DSHS
 * license number; filter slugs never do, so the two share a path position
 * without needing an extra segment in the URL.
 */
const CitySegment = () => {
  const { segment = "" } = useParams();
  return isFilterSlug(segment) ? <CityDirectory /> : <FacilityDetail />;
};

export default CitySegment;
