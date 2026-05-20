import Header from "@/components/Header";
import HousingOptionDetail from "@/components/HousingOptionDetail";

const AssistedLiving = () => (
  <>
    <Header />
    <HousingOptionDetail
      title="Assisted Living"
      slug="assisted-living"
      metaDescription="Assisted Living communities in Washington State — licensed residential care with help for daily activities, medication management, and 24-hour staff."
      whatItIs="Licensed residential communities where staff assist with daily activities including bathing, dressing, medication management, and meals. Staff available around the clock."
      bestFor="Seniors who need some level of daily support but do not require 24-hour skilled medical care."
      typicalCosts="$4,000–$8,000/month in Washington State. Usually private pay; some long-term care insurance may apply."
      whatsIncluded="Private or semi-private room, meals, personal care assistance, medication management, activities, and transportation."
    />
  </>
);

export default AssistedLiving;
