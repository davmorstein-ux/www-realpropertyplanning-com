import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProbateEstateSales from "./pages/ProbateEstateSales";
import SeniorTransitions from "./pages/SeniorTransitions";
import ForAttorneys from "./pages/ForAttorneys";
import ForProbateAttorneys from "./pages/attorneys/ForProbateAttorneys";
import ForEstatePlanningAttorneys from "./pages/attorneys/ForEstatePlanningAttorneys";
import ForElderLawAttorneys from "./pages/attorneys/ForElderLawAttorneys";
import ForFamilyLawAttorneys from "./pages/attorneys/ForFamilyLawAttorneys";
import ForDivorceAttorneys from "./pages/attorneys/ForDivorceAttorneys";
import HowWeWork from "./pages/HowWeWork";
import HowTheProcessWorks from "./pages/HowTheProcessWorks";
import WhyValuationMatters from "./pages/WhyValuationMatters";
import AttorneyReferral from "./pages/AttorneyReferral";
import Executors from "./pages/Executors";
import ForCPAs from "./pages/ForCPAs";
import ForFinancialPlanners from "./pages/ForFinancialPlanners";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terminology from "./pages/Terminology";
import Contact from "./pages/Contact";
import Counties from "./pages/Counties";
import CitiesWeServe from "./pages/CitiesWeServe";
import KingCounty from "./pages/counties/KingCounty";
import SnohomishCounty from "./pages/counties/SnohomishCounty";
import PierceCounty from "./pages/counties/PierceCounty";
import KitsapCounty from "./pages/counties/KitsapCounty";
import SkagitCounty from "./pages/counties/SkagitCounty";
import Resources from "./pages/Resources";
import SeniorMoveManagers from "./pages/resources/SeniorMoveManagers";
import EstateSaleCompanies from "./pages/resources/EstateSaleCompanies";
import ProbateEstateAttorneys from "./pages/resources/ProbateEstateAttorneys";
import CPAsFinancialAdvisors from "./pages/resources/CPAsFinancialAdvisors";
import SeniorLivingCommunities from "./pages/resources/SeniorLivingCommunities";
import PropertyPreparationServices from "./pages/resources/PropertyPreparationServices";
import MovingRelocationServices from "./pages/resources/MovingRelocationServices";
import HowToMoveElderlyParents from "./pages/HowToMoveElderlyParents";
import ForReferralPartners from "./pages/ForReferralPartners";
import ForProfessionals from "./pages/ForProfessionals";
import ForSeniorLivingProfessionals from "./pages/ForSeniorLivingProfessionals";
import TransitionResources from "./pages/TransitionResources";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import ProfessionalReferralResource from "./pages/ProfessionalReferralResource";
import ProfessionalNetwork from "./pages/ProfessionalNetwork";
import SeniorEstateServices from "./pages/SeniorEstateServices";
import RetirementReverseMortgage from "./pages/RetirementReverseMortgage";
import LendersFinancingSpecialists from "./pages/LendersFinancingSpecialists";
import SeniorLivingAndRelocation from "./pages/SeniorLivingAndRelocation";
import AdultFamilyHomes from "./pages/senior-living/AdultFamilyHomes";
import AssistedLivingCommunities from "./pages/senior-living/AssistedLivingCommunities";
import MemoryCare from "./pages/senior-living/MemoryCare";
import NursingAndSkilledCare from "./pages/senior-living/NursingAndSkilledCare";
import IndependentLiving from "./pages/senior-living/IndependentLiving";
import CityPage from "./pages/CityPage";
import CityServicePage from "./pages/CityServicePage";
import ServicePage from "./pages/ServicePage";
import HowProbateRealEstateWorks from "./pages/guides/HowProbateRealEstateWorks";
import WhatExecutorsShouldDo from "./pages/guides/WhatExecutorsShouldDo";
import AppraisalVsCma from "./pages/guides/AppraisalVsCma";
import OutOfStateFamilies from "./pages/guides/OutOfStateFamilies";
import SeniorTransitionDifferences from "./pages/guides/SeniorTransitionDifferences";
import InheritedHouseWashington from "./pages/guides/InheritedHouseWashington";
import SeattleProbateEstate from "./pages/SeattleProbateEstate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/probate-estate-sales" element={<ProbateEstateSales />} />
          <Route path="/senior-transitions" element={<SeniorTransitions />} />
          <Route path="/for-attorneys" element={<ForAttorneys />} />
          <Route path="/for-probate-attorneys" element={<ForProbateAttorneys />} />
          <Route path="/for-estate-planning-attorneys" element={<ForEstatePlanningAttorneys />} />
          <Route path="/for-elder-law-attorneys" element={<ForElderLawAttorneys />} />
          <Route path="/for-family-law-attorneys" element={<ForFamilyLawAttorneys />} />
          <Route path="/for-divorce-attorneys" element={<ForDivorceAttorneys />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/how-the-process-works" element={<HowTheProcessWorks />} />
          <Route path="/why-valuation-matters" element={<WhyValuationMatters />} />
          <Route path="/attorney-referral" element={<AttorneyReferral />} />
          <Route path="/executors" element={<Executors />} />
          <Route path="/for-cpas" element={<ForCPAs />} />
          <Route path="/for-financial-planners" element={<ForFinancialPlanners />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terminology" element={<Terminology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counties" element={<Counties />} />
          <Route path="/cities-we-serve" element={<CitiesWeServe />} />
          {/* County hub pages — new URL structure */}
          <Route path="/king-county" element={<KingCounty />} />
          <Route path="/snohomish-county" element={<SnohomishCounty />} />
          <Route path="/pierce-county" element={<PierceCounty />} />
          <Route path="/kitsap-county" element={<KitsapCounty />} />
          {/* Legacy county URLs — keep for backward compatibility */}
          <Route path="/counties/king" element={<KingCounty />} />
          <Route path="/counties/snohomish" element={<SnohomishCounty />} />
          <Route path="/counties/pierce" element={<PierceCounty />} />
          <Route path="/counties/kitsap" element={<KitsapCounty />} />
          <Route path="/counties/skagit" element={<SkagitCounty />} />
          {/* Dynamic city pages */}
          <Route path="/cities/:citySlug" element={<CityPage />} />
          {/* Dynamic city + service pages */}
          <Route path="/cities/:citySlug/:serviceSlug" element={<CityServicePage />} />
          {/* Dynamic service pages */}
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/senior-move-managers" element={<SeniorMoveManagers />} />
          <Route path="/resources/estate-sale-companies" element={<EstateSaleCompanies />} />
          <Route path="/resources/probate-estate-attorneys" element={<ProbateEstateAttorneys />} />
          <Route path="/resources/cpas-financial-advisors" element={<CPAsFinancialAdvisors />} />
          <Route path="/resources/senior-living-communities" element={<SeniorLivingCommunities />} />
          <Route path="/resources/property-preparation-services" element={<PropertyPreparationServices />} />
          <Route path="/resources/moving-relocation-services" element={<MovingRelocationServices />} />
          <Route path="/how-to-move-elderly-parents" element={<HowToMoveElderlyParents />} />
          <Route path="/for-referral-partners" element={<ForReferralPartners />} />
          <Route path="/for-professionals" element={<ForProfessionals />} />
          <Route path="/for-senior-living-professionals" element={<ForSeniorLivingProfessionals />} />
          <Route path="/transition-resources" element={<TransitionResources />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/professional-referral-resource" element={<ProfessionalReferralResource />} />
          <Route path="/professional-network" element={<ProfessionalNetwork />} />
          <Route path="/senior-estate-services" element={<SeniorEstateServices />} />
          <Route path="/retirement-reverse-mortgage" element={<RetirementReverseMortgage />} />
          <Route path="/lenders-and-financing-specialists" element={<LendersFinancingSpecialists />} />
          <Route path="/senior-living-and-relocation" element={<SeniorLivingAndRelocation />} />
          <Route path="/senior-living/adult-family-homes" element={<AdultFamilyHomes />} />
          <Route path="/senior-living/assisted-living-communities" element={<AssistedLivingCommunities />} />
          <Route path="/senior-living/memory-care" element={<MemoryCare />} />
          <Route path="/senior-living/nursing-and-skilled-care" element={<NursingAndSkilledCare />} />
          <Route path="/senior-living/independent-living" element={<IndependentLiving />} />
          {/* Custom city pages */}
          <Route path="/seattle-probate-estate-real-estate" element={<SeattleProbateEstate />} />
          {/* Cornerstone guide pages */}
          <Route path="/guides/how-probate-real-estate-works" element={<HowProbateRealEstateWorks />} />
          <Route path="/guides/what-executors-should-do" element={<WhatExecutorsShouldDo />} />
          <Route path="/guides/appraisal-vs-cma" element={<AppraisalVsCma />} />
          <Route path="/guides/out-of-state-families" element={<OutOfStateFamilies />} />
          <Route path="/guides/senior-transition-differences" element={<SeniorTransitionDifferences />} />
          <Route path="/guides/inherited-house-washington" element={<InheritedHouseWashington />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
