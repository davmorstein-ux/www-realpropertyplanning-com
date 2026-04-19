import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import ProbateEstateSales from "./pages/ProbateEstateSales";
import SeniorTransitions from "./pages/SeniorTransitions";
import ForAttorneys from "./pages/ForAttorneys";
import ForAttorneysHowItWorks from "./pages/attorneys/ForAttorneysHowItWorks";
import ForProbateAttorneys from "./pages/attorneys/ForProbateAttorneys";
import ForEstatePlanningAttorneys from "./pages/attorneys/ForEstatePlanningAttorneys";
import ForElderLawAttorneys from "./pages/attorneys/ForElderLawAttorneys";
import ForFamilyLawAttorneys from "./pages/attorneys/ForFamilyLawAttorneys";
import ForDivorceAttorneys from "./pages/attorneys/ForDivorceAttorneys";
import ForRealEstateAttorneys from "./pages/attorneys/ForRealEstateAttorneys";
import HowTheProcessWorks from "./pages/HowTheProcessWorks";
import WhyValuationMatters from "./pages/WhyValuationMatters";
import Executors from "./pages/Executors";
import Trustees from "./pages/Trustees";
import ForCPAs from "./pages/ForCPAs";
import ForFinancialPlanners from "./pages/ForFinancialPlanners";
import About from "./pages/About";
import JoinTheNetwork from "./pages/JoinTheNetwork";
import FAQ from "./pages/FAQ";
import Terminology from "./pages/Terminology";
import Contact from "./pages/Contact";
import Counties from "./pages/Counties";
import KingCounty from "./pages/counties/KingCounty";
import SnohomishCounty from "./pages/counties/SnohomishCounty";
import PierceCounty from "./pages/counties/PierceCounty";
import KitsapCounty from "./pages/counties/KitsapCounty";
import SkagitCounty from "./pages/counties/SkagitCounty";
import ClarkCounty from "./pages/counties/ClarkCounty";
import SpokaneCounty from "./pages/counties/SpokaneCounty";
import ThurstonCounty from "./pages/counties/ThurstonCounty";
import WhatcomCounty from "./pages/counties/WhatcomCounty";
import BentonCounty from "./pages/counties/BentonCounty";
import YakimaCounty from "./pages/counties/YakimaCounty";
import FranklinCounty from "./pages/counties/FranklinCounty";
import CowlitzCounty from "./pages/counties/CowlitzCounty";
import GraysHarborCounty from "./pages/counties/GraysHarborCounty";
import IslandCounty from "./pages/counties/IslandCounty";
import JeffersonCounty from "./pages/counties/JeffersonCounty";
import LewisCounty from "./pages/counties/LewisCounty";
import MasonCounty from "./pages/counties/MasonCounty";
import PacificCounty from "./pages/counties/PacificCounty";
import SanJuanCounty from "./pages/counties/SanJuanCounty";
import SkamaniaCounty from "./pages/counties/SkamaniaCounty";
import WahkiakumCounty from "./pages/counties/WahkiakumCounty";
import Resources from "./pages/Resources";
import SeniorMoveManagers from "./pages/resources/SeniorMoveManagers";
import EstateSaleCompanies from "./pages/resources/EstateSaleCompanies";
import ProbateEstateAttorneys from "./pages/resources/ProbateEstateAttorneys";
import CPAsFinancialAdvisors from "./pages/resources/CPAsFinancialAdvisors";
import SeniorLivingCommunities from "./pages/resources/SeniorLivingCommunities";
import PropertyPreparationServices from "./pages/resources/PropertyPreparationServices";
import MovingRelocationServices from "./pages/resources/MovingRelocationServices";
import WashingtonExecutorsChecklist from "./pages/resources/WashingtonExecutorsChecklist";
import LendersFinancingSpecialists from "./pages/LendersFinancingSpecialists";
import RetirementReverseMortgage from "./pages/RetirementReverseMortgage";
import SeniorLivingAndRelocation from "./pages/SeniorLivingAndRelocation";
import AdultFamilyHomes from "./pages/senior-living/AdultFamilyHomes";
import AssistedLivingCommunities from "./pages/senior-living/AssistedLivingCommunities";
import MemoryCare from "./pages/senior-living/MemoryCare";
import NursingAndSkilledCare from "./pages/senior-living/NursingAndSkilledCare";
import IndependentLiving from "./pages/senior-living/IndependentLiving";
import PowerOfAttorneys from "./pages/senior-living/PowerOfAttorneys";
import HowProbateRealEstateWorks from "./pages/guides/HowProbateRealEstateWorks";
import WhatExecutorsShouldDo from "./pages/guides/WhatExecutorsShouldDo";
import AppraisalVsCma from "./pages/guides/AppraisalVsCma";
import OutOfStateFamilies from "./pages/guides/OutOfStateFamilies";
import SeniorTransitionDifferences from "./pages/guides/SeniorTransitionDifferences";
import InheritedHouseWashington from "./pages/guides/InheritedHouseWashington";
import ExecutorSellBeforeProbate from "./pages/guides/ExecutorSellBeforeProbate";
import AppraisalBeforeSelling from "./pages/guides/AppraisalBeforeSelling";
import EstatePropertyRepairs from "./pages/guides/EstatePropertyRepairs";
import HeirsDisagreeSelling from "./pages/guides/HeirsDisagreeSelling";
import PricingHouseTrustEstate from "./pages/guides/PricingHouseTrustEstate";
import SellHouseDuringProbateWashington from "./pages/guides/SellHouseDuringProbateWashington";
import TaxesSellingInheritedHouseWashington from "./pages/guides/TaxesSellingInheritedHouseWashington";
import HowLongSellProbateProperty from "./pages/guides/HowLongSellProbateProperty";
import ExecutorFirstStepsHouse from "./pages/guides/ExecutorFirstStepsHouse";
import SellInheritedHouseAsIsOrFix from "./pages/guides/SellInheritedHouseAsIsOrFix";
import SeattleProbateEstate from "./pages/SeattleProbateEstate";
import BellevueProbateEstate from "./pages/BellevueProbateEstate";
import TacomaProbateEstate from "./pages/TacomaProbateEstate";
import SpokaneProbateEstate from "./pages/SpokaneProbateEstate";
import VancouverWaProbateEstate from "./pages/VancouverWaProbateEstate";
import EverettProbateEstate from "./pages/EverettProbateEstate";
import OlympiaProbateEstate from "./pages/OlympiaProbateEstate";
import BellinghamProbateEstate from "./pages/BellinghamProbateEstate";
import GuidesAndResources from "./pages/GuidesAndResources";
import PowerOfAttorney from "./pages/PowerOfAttorney";
import Wills from "./pages/Wills";
import EstateLiquidation from "./pages/EstateLiquidation";
import Realtor from "./pages/Realtor";
import RealEstateAppraiser from "./pages/RealEstateAppraiser";
import Professionals from "./pages/Professionals";
import ProbateAttorneys from "./pages/professionals/ProbateAttorneys";
import SeniorHousingAdvisors from "./pages/professionals/SeniorHousingAdvisors";
import FinancialPlanners from "./pages/professionals/FinancialPlanners";
import EstateSale from "./pages/professionals/EstateSale";
import HomePreparation from "./pages/professionals/HomePreparation";
import CareManagers from "./pages/professionals/CareManagers";
import Testimonials from "./pages/Testimonials";
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
          {/* ─── Homepage ─────────────────────────────────────────── */}
          <Route path="/" element={<Index />} />

          {/* ─── Core commercial pages ────────────────────────────── */}
          <Route path="/probate-estate-sales" element={<ProbateEstateSales />} />
          <Route path="/senior-transitions" element={<SeniorTransitions />} />
          <Route path="/why-valuation-matters" element={<WhyValuationMatters />} />
          <Route path="/how-the-process-works" element={<HowTheProcessWorks />} />
          <Route path="/executors" element={<Executors />} />
          <Route path="/trustees" element={<Trustees />} />
          <Route path="/estate-liquidation" element={<EstateLiquidation />} />
          <Route path="/real-estate-appraiser" element={<RealEstateAppraiser />} />
          <Route path="/realtor" element={<Realtor />} />
          <Route path="/wills" element={<Wills />} />
          <Route path="/power-of-attorney" element={<PowerOfAttorney />} />

          {/* ─── Audience hubs ────────────────────────────────────── */}
          <Route path="/for-attorneys" element={<ForAttorneys />} />
          <Route path="/for-attorneys/how-it-works" element={<ForAttorneysHowItWorks />} />
          <Route path="/for-probate-attorneys" element={<ForProbateAttorneys />} />
          <Route path="/for-estate-planning-attorneys" element={<ForEstatePlanningAttorneys />} />
          <Route path="/for-elder-law-attorneys" element={<ForElderLawAttorneys />} />
          <Route path="/for-family-law-attorneys" element={<ForFamilyLawAttorneys />} />
          <Route path="/for-divorce-attorneys" element={<ForDivorceAttorneys />} />
          <Route path="/real-estate-attorneys" element={<ForRealEstateAttorneys />} />
          <Route path="/for-cpas" element={<ForCPAs />} />
          <Route path="/for-financial-planners" element={<ForFinancialPlanners />} />
          <Route path="/join-the-network" element={<JoinTheNetwork />} />

          {/* ─── County hubs (canonical: /{county}-county) ────────── */}
          <Route path="/counties" element={<Counties />} />
          <Route path="/king-county" element={<KingCounty />} />
          <Route path="/snohomish-county" element={<SnohomishCounty />} />
          <Route path="/pierce-county" element={<PierceCounty />} />
          <Route path="/kitsap-county" element={<KitsapCounty />} />
          <Route path="/skagit-county" element={<SkagitCounty />} />
          <Route path="/thurston-county" element={<ThurstonCounty />} />
          <Route path="/whatcom-county" element={<WhatcomCounty />} />
          <Route path="/clark-county" element={<ClarkCounty />} />
          <Route path="/spokane-county" element={<SpokaneCounty />} />
          <Route path="/benton-county" element={<BentonCounty />} />
          <Route path="/yakima-county" element={<YakimaCounty />} />
          <Route path="/franklin-county" element={<FranklinCounty />} />
          <Route path="/cowlitz-county" element={<CowlitzCounty />} />
          <Route path="/grays-harbor-county" element={<GraysHarborCounty />} />
          <Route path="/island-county" element={<IslandCounty />} />
          <Route path="/jefferson-county" element={<JeffersonCounty />} />
          <Route path="/lewis-county" element={<LewisCounty />} />
          <Route path="/mason-county" element={<MasonCounty />} />
          <Route path="/pacific-county" element={<PacificCounty />} />
          <Route path="/san-juan-county" element={<SanJuanCounty />} />
          <Route path="/skamania-county" element={<SkamaniaCounty />} />
          <Route path="/wahkiakum-county" element={<WahkiakumCounty />} />

          {/* ─── Tier-1 city pages (only) ─────────────────────────── */}
          <Route path="/seattle-probate-estate-real-estate" element={<SeattleProbateEstate />} />
          <Route path="/bellevue-probate-estate-real-estate" element={<BellevueProbateEstate />} />
          <Route path="/tacoma-probate-estate-real-estate" element={<TacomaProbateEstate />} />
          <Route path="/spokane-probate-estate-real-estate" element={<SpokaneProbateEstate />} />
          <Route path="/vancouver-wa-probate-estate-real-estate" element={<VancouverWaProbateEstate />} />
          <Route path="/everett-probate-estate-real-estate" element={<EverettProbateEstate />} />
          <Route path="/bellingham-probate-estate-real-estate" element={<BellinghamProbateEstate />} />
          <Route path="/olympia-probate-estate-real-estate" element={<OlympiaProbateEstate />} />

          {/* ─── Educational guides (canonical: /guides/*) ────────── */}
          <Route path="/guides-and-resources" element={<GuidesAndResources />} />
          <Route path="/guides/how-probate-real-estate-works" element={<HowProbateRealEstateWorks />} />
          <Route path="/guides/what-executors-should-do" element={<WhatExecutorsShouldDo />} />
          <Route path="/guides/appraisal-vs-cma" element={<AppraisalVsCma />} />
          <Route path="/guides/out-of-state-families" element={<OutOfStateFamilies />} />
          <Route path="/guides/senior-transition-differences" element={<SeniorTransitionDifferences />} />
          <Route path="/guides/inherited-house-washington" element={<InheritedHouseWashington />} />
          <Route path="/guides/executor-sell-house-before-probate-washington" element={<ExecutorSellBeforeProbate />} />
          <Route path="/guides/appraisal-before-selling-inherited-property" element={<AppraisalBeforeSelling />} />
          <Route path="/guides/estate-property-repairs-before-sale" element={<EstatePropertyRepairs />} />
          <Route path="/guides/heirs-disagree-selling-house" element={<HeirsDisagreeSelling />} />
          <Route path="/guides/pricing-house-trust-estate" element={<PricingHouseTrustEstate />} />
          <Route path="/guides/sell-house-during-probate-washington" element={<SellHouseDuringProbateWashington />} />
          <Route path="/guides/taxes-selling-inherited-house-washington" element={<TaxesSellingInheritedHouseWashington />} />
          <Route path="/guides/how-long-sell-probate-property" element={<HowLongSellProbateProperty />} />
          <Route path="/guides/executor-first-steps-house" element={<ExecutorFirstStepsHouse />} />
          <Route path="/guides/sell-inherited-house-as-is-or-fix" element={<SellInheritedHouseAsIsOrFix />} />

          {/* ─── Professionals directory (for families) ───────────── */}
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/professionals/probate-attorneys" element={<ProbateAttorneys />} />
          <Route path="/professionals/senior-housing-advisors" element={<SeniorHousingAdvisors />} />
          <Route path="/professionals/financial-planners" element={<FinancialPlanners />} />
          <Route path="/professionals/estate-sale" element={<EstateSale />} />
          <Route path="/professionals/home-preparation" element={<HomePreparation />} />
          <Route path="/professionals/care-managers" element={<CareManagers />} />

          {/* ─── Senior living reference ──────────────────────────── */}
          <Route path="/senior-living-and-relocation" element={<SeniorLivingAndRelocation />} />
          <Route path="/senior-living/adult-family-homes" element={<AdultFamilyHomes />} />
          <Route path="/senior-living/assisted-living-communities" element={<AssistedLivingCommunities />} />
          <Route path="/senior-living/memory-care" element={<MemoryCare />} />
          <Route path="/senior-living/nursing-and-skilled-care" element={<NursingAndSkilledCare />} />
          <Route path="/senior-living/independent-living" element={<IndependentLiving />} />
          <Route path="/senior-living/power-of-attorneys" element={<PowerOfAttorneys />} />

          {/* ─── Lending ──────────────────────────────────────────── */}
          <Route path="/lenders-and-financing-specialists" element={<LendersFinancingSpecialists />} />
          <Route path="/retirement-reverse-mortgage" element={<RetirementReverseMortgage />} />

          {/* ─── Resources directory ──────────────────────────────── */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/senior-move-managers" element={<SeniorMoveManagers />} />
          <Route path="/resources/estate-sale-companies" element={<EstateSaleCompanies />} />
          <Route path="/resources/probate-estate-attorneys" element={<ProbateEstateAttorneys />} />
          <Route path="/resources/cpas-financial-advisors" element={<CPAsFinancialAdvisors />} />
          <Route path="/resources/senior-living-communities" element={<SeniorLivingCommunities />} />
          <Route path="/resources/property-preparation-services" element={<PropertyPreparationServices />} />
          <Route path="/resources/moving-relocation-services" element={<MovingRelocationServices />} />
          <Route path="/resources/washington-executors-10-step-checklist" element={<WashingtonExecutorsChecklist />} />

          {/* ─── Supporting ───────────────────────────────────────── */}
          {/* /about is the single canonical About page (David Stein leadership/founder) */}
          <Route path="/about" element={<About />} />
          {/* Legacy routes → redirect to /about */}
          <Route path="/about-david-stein" element={<Navigate to="/about" replace />} />
          <Route path="/about-platform" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terminology" element={<Terminology />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* ══════════════════════════════════════════════════════════
              REDIRECTS — Phase 2a SEO consolidation
              All deprecated URLs redirect to the canonical equivalent.
              Implemented as React Router Navigate (client-side 301 equivalent).
          ══════════════════════════════════════════════════════════ */}

          {/* Counties — old URL families → /{county}-county
              Covers: /counties/{slug}, /counties/{slug}-county,
                      /service-areas/{slug}-county, and *-probate-estate-real-estate */}
          {[
            "king", "snohomish", "pierce", "kitsap", "skagit", "thurston", "whatcom",
            "clark", "spokane", "benton", "yakima", "franklin", "cowlitz",
            "grays-harbor", "island", "jefferson", "lewis", "mason", "pacific",
            "san-juan", "skamania", "wahkiakum",
          ].flatMap((slug) => [
            <Route key={`c1-${slug}`} path={`/counties/${slug}`} element={<Navigate to={`/${slug}-county`} replace />} />,
            <Route key={`c2-${slug}`} path={`/counties/${slug}-county`} element={<Navigate to={`/${slug}-county`} replace />} />,
            <Route key={`sa-${slug}`} path={`/service-areas/${slug}-county`} element={<Navigate to={`/${slug}-county`} replace />} />,
            <Route key={`pe-${slug}`} path={`/${slug}-county-probate-estate-real-estate`} element={<Navigate to={`/${slug}-county`} replace />} />,
          ])}

          {/* Tier-2 cities → their county hub */}
          <Route path="/kirkland-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/redmond-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/renton-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/kent-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/federal-way-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/auburn-probate-estate-real-estate" element={<Navigate to="/king-county" replace />} />
          <Route path="/marysville-probate-estate-real-estate" element={<Navigate to="/snohomish-county" replace />} />
          <Route path="/yakima-probate-estate-real-estate" element={<Navigate to="/yakima-county" replace />} />
          <Route path="/kennewick-probate-estate-real-estate" element={<Navigate to="/benton-county" replace />} />
          <Route path="/richland-probate-estate-real-estate" element={<Navigate to="/benton-county" replace />} />
          <Route path="/pasco-probate-estate-real-estate" element={<Navigate to="/franklin-county" replace />} />

          {/* Old "cities" hub & dynamic city pages → counties hub */}
          <Route path="/cities-we-serve" element={<Navigate to="/counties" replace />} />
          <Route path="/cities/:citySlug" element={<Navigate to="/counties" replace />} />
          <Route path="/cities/:citySlug/:serviceSlug" element={<Navigate to="/counties" replace />} />

          {/* Dynamic /services/:slug → canonical service pages */}
          <Route path="/services" element={<Navigate to="/probate-estate-sales" replace />} />
          <Route path="/services/probate-estate-sales" element={<Navigate to="/probate-estate-sales" replace />} />
          <Route path="/services/senior-transitions" element={<Navigate to="/senior-transitions" replace />} />
          <Route path="/services/downsizing-services" element={<Navigate to="/senior-transitions" replace />} />
          <Route path="/services/executor-support" element={<Navigate to="/executors" replace />} />
          <Route path="/services/attorney-fiduciary-support" element={<Navigate to="/for-attorneys" replace />} />
          <Route path="/services/valuation-guidance" element={<Navigate to="/why-valuation-matters" replace />} />
          <Route path="/services/preparing-home-for-sale" element={<Navigate to="/probate-estate-sales" replace />} />
          <Route path="/services/divorce-related-home-sales" element={<Navigate to="/for-divorce-attorneys" replace />} />
          <Route path="/services/trust-estate-property-sales" element={<Navigate to="/trustees" replace />} />

          {/* /insights and /insights-guidance → /guides */}
          <Route path="/insights" element={<Navigate to="/guides-and-resources" replace />} />
          <Route path="/insights/first-steps-inherited-house-washington" element={<Navigate to="/guides/executor-first-steps-house" replace />} />
          <Route path="/insights/out-of-state-inherited-house-help" element={<Navigate to="/guides/out-of-state-families" replace />} />
          <Route path="/insights/out-of-state-executor-case-study" element={<Navigate to="/guides/out-of-state-families" replace />} />
          <Route path="/insights/estate-property-sale-timeline" element={<Navigate to="/guides/how-long-sell-probate-property" replace />} />
          <Route path="/insights/estate-property-cleanout-before-sale" element={<Navigate to="/guides/estate-property-repairs-before-sale" replace />} />
          <Route path="/insights/empty-house-before-selling" element={<Navigate to="/guides/estate-property-repairs-before-sale" replace />} />
          <Route path="/insights/pricing-inherited-property-differences" element={<Navigate to="/guides/pricing-house-trust-estate" replace />} />
          <Route path="/insights/sell-inherited-house-without-repairs" element={<Navigate to="/guides/sell-inherited-house-as-is-or-fix" replace />} />
          <Route path="/insights/family-disagreement-selling-house" element={<Navigate to="/guides/heirs-disagree-selling-house" replace />} />
          <Route path="/insights/sell-or-keep-inherited-property" element={<Navigate to="/guides/sell-inherited-house-as-is-or-fix" replace />} />
          <Route path="/insights/estate-property-mistakes" element={<Navigate to="/guides/what-executors-should-do" replace />} />
          <Route path="/insights-guidance/how-does-probate-real-estate-work-in-washington" element={<Navigate to="/guides/how-probate-real-estate-works" replace />} />
          <Route path="/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully" element={<Navigate to="/guides/senior-transition-differences" replace />} />
          <Route path="/how-to-move-elderly-parents" element={<Navigate to="/guides/senior-transition-differences" replace />} />

          {/* /learn-more pages → fold into parent (Phase 2c will merge content) */}
          <Route path="/executors/learn-more" element={<Navigate to="/executors" replace />} />
          <Route path="/trustees/learn-more" element={<Navigate to="/trustees" replace />} />
          <Route path="/for-attorneys/learn-more" element={<Navigate to="/for-attorneys" replace />} />
          <Route path="/for-cpas/learn-more" element={<Navigate to="/for-cpas" replace />} />
          <Route path="/for-financial-planners/learn-more" element={<Navigate to="/for-financial-planners" replace />} />
          <Route path="/realtor/learn-more" element={<Navigate to="/realtor" replace />} />
          <Route path="/real-estate-appraiser/learn-more" element={<Navigate to="/real-estate-appraiser" replace />} />
          <Route path="/senior-move-managers/learn-more" element={<Navigate to="/senior-transitions" replace />} />
          <Route path="/estate-liquidation/learn-more" element={<Navigate to="/estate-liquidation" replace />} />

          {/* Redundant professional / referral pages → consolidated targets */}
          <Route path="/professional-referral-resource" element={<Navigate to="/join-the-network" replace />} />
          <Route path="/professional-network" element={<Navigate to="/join-the-network" replace />} />
          <Route path="/attorney-referral" element={<Navigate to="/for-attorneys" replace />} />
          <Route path="/for-referral-partners" element={<Navigate to="/join-the-network" replace />} />
          <Route path="/for-professionals" element={<Navigate to="/professionals" replace />} />
          <Route path="/for-senior-living-professionals" element={<Navigate to="/professionals/senior-housing-advisors" replace />} />

          {/* Redundant senior pages → /senior-transitions */}
          <Route path="/senior-estate-services" element={<Navigate to="/senior-transitions" replace />} />
          <Route path="/senior-move-managers" element={<Navigate to="/senior-transitions" replace />} />
          <Route path="/transition-resources" element={<Navigate to="/senior-transitions" replace />} />

          {/* Misc legacy */}
          <Route path="/how-we-work" element={<Navigate to="/how-the-process-works" replace />} />
          <Route path="/cpas" element={<Navigate to="/for-cpas" replace />} />
          <Route path="/financial-planning" element={<Navigate to="/for-financial-planners" replace />} />
          <Route path="/senior-living" element={<Navigate to="/senior-living-and-relocation" replace />} />
          <Route path="/lenders-financing" element={<Navigate to="/lenders-and-financing-specialists" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
