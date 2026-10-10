import { REDIRECTS } from "./data/redirects";
import { Suspense } from "react";
import { lazy } from "@/lib/chunkRecovery";
import { BrowserRouter, StaticRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import ScrollToTop from "./components/ScrollToTop";
import RPPHomeV3 from "./pages/RPPHomeV3";
import LanguageRoute from "./components/LanguageRoute";

// All other routes are lazy-loaded so the homepage bundle stays small.
const ProbateEstateSales = lazy(() => import("./pages/ProbateEstateSales"));
const ClientStories = lazy(() => import("./pages/ClientStories"));
const SeniorTransitions = lazy(() => import("./pages/SeniorTransitions"));
const ChoiceFlowPage = lazy(() => import("./components/ChoiceFlowPage"));
const EstateProbateInheritedProperty = lazy(() => import("./pages/EstateProbateInheritedProperty"));
const EPIPFirstSteps = lazy(() => import("./pages/estate-probate-inherited-property/FirstSteps"));
const EPIPProbateAuthority = lazy(() => import("./pages/estate-probate-inherited-property/ProbateAndLegalAuthority"));
const EPIPPropertyValue = lazy(() => import("./pages/estate-probate-inherited-property/PropertyValue"));
const EPIPWhatToDo = lazy(() => import("./pages/estate-probate-inherited-property/WhatToDoWithTheProperty"));
const EPIPPreparing = lazy(() => import("./pages/estate-probate-inherited-property/PreparingTheProperty"));
const EPIPProfessionalTeam = lazy(() => import("./pages/estate-probate-inherited-property/ProfessionalTeam"));
const WhatShouldWeDoFirst = lazy(() => import("./pages/WhatShouldWeDoFirst"));
const WhatToDoWithTheHouse = lazy(() => import("./pages/WhatToDoWithTheHouse"));
const UnderstandingHousingCareOptions = lazy(() => import("./pages/UnderstandingHousingCareOptions"));
const UnderstandingSeniorTransitions = lazy(() => import("./pages/UnderstandingSeniorTransitions"));
const EstatePlanningPowersOfAttorney = lazy(() => import("./pages/EstatePlanningPowersOfAttorney"));
const PlanningBeforeACrisis = lazy(() => import("./pages/PlanningBeforeACrisis"));
const PBCWhyPlanningEarly = lazy(() => import("./pages/planning-before-a-crisis/WhyPlanningEarly"));
const PBCConversationsToHave = lazy(() => import("./pages/planning-before-a-crisis/ConversationsToHave"));
const PBCLegalDocuments = lazy(() => import("./pages/planning-before-a-crisis/LegalDocuments"));
const PBCPropertyQuestions = lazy(() => import("./pages/planning-before-a-crisis/PropertyQuestions"));
const PBCWhenAMoveIsComing = lazy(() => import("./pages/planning-before-a-crisis/WhenAMoveIsComing"));
const PBCHowWeCanHelp = lazy(() => import("./pages/planning-before-a-crisis/HowWeCanHelp"));
const BuildingYourTrustedProfessionalTeam = lazy(() => import("./pages/BuildingYourTrustedProfessionalTeam"));
const AgingLifeCareManagers = lazy(() => import("./pages/AgingLifeCareManagers"));
const DownsizingPreparingForTransition = lazy(() => import("./pages/DownsizingPreparingForTransition"));
const ExecutorResponsibilitiesFirstSteps = lazy(() => import("./pages/ExecutorResponsibilitiesFirstSteps"));
const ERFFirst30Days = lazy(() => import("./pages/executor-responsibilities-first-steps/First30Days"));
const ERFLegalDuties = lazy(() => import("./pages/executor-responsibilities-first-steps/LegalDuties"));
const ERFPropertyDecisions = lazy(() => import("./pages/executor-responsibilities-first-steps/PropertyDecisions"));
const ERFWorkingWithProfessionals = lazy(
  () => import("./pages/executor-responsibilities-first-steps/WorkingWithProfessionals"),
);
const ERFCommonMistakes = lazy(() => import("./pages/executor-responsibilities-first-steps/CommonMistakes"));
const ERFWhenYouNeedExtraHelp = lazy(
  () => import("./pages/executor-responsibilities-first-steps/WhenYouNeedExtraHelp"),
);
const PreparingHomeForSaleDuringTransition = lazy(() => import("./pages/PreparingHomeForSaleDuringTransition"));
const SellingAnInheritedHome = lazy(() => import("./pages/SellingAnInheritedHome"));
const AgingInPlaceStayingHomeSafely = lazy(() => import("./pages/AgingInPlaceStayingHomeSafely"));
const DateOfDeathValuationPropertyAppraisals = lazy(() => import("./pages/DateOfDeathValuationPropertyAppraisals"));
const SeniorLivingAdvisors = lazy(() => import("./pages/SeniorLivingAdvisors"));
const SellHouseFundSeniorLiving = lazy(() => import("./pages/SellHouseFundSeniorLiving"));
const ForAttorneys = lazy(() => import("./pages/ForAttorneys"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const ForAttorneysHowItWorks = lazy(() => import("./pages/attorneys/ForAttorneysHowItWorks"));
const ForProbateAttorneys = lazy(() => import("./pages/attorneys/ForProbateAttorneys"));
const ForEstatePlanningAttorneys = lazy(() => import("./pages/attorneys/ForEstatePlanningAttorneys"));
const ForElderLawAttorneys = lazy(() => import("./pages/attorneys/ForElderLawAttorneys"));
const ForFamilyLawAttorneys = lazy(() => import("./pages/attorneys/ForFamilyLawAttorneys"));
const ForDivorceAttorneys = lazy(() => import("./pages/attorneys/ForDivorceAttorneys"));
const ForRealEstateAttorneys = lazy(() => import("./pages/attorneys/ForRealEstateAttorneys"));
const AttorneysForElderLawAttorneys = lazy(() => import("./pages/attorneys/AttorneysForElderLawAttorneys"));
const AttorneysForRealEstateAttorney = lazy(() => import("./pages/attorneys/AttorneysForRealEstateAttorney"));
const AttorneysForFamilyLawAttorneys = lazy(() => import("./pages/attorneys/AttorneysForFamilyLawAttorneys"));
const HowTheProcessWorks = lazy(() => import("./pages/HowTheProcessWorks"));
const WhyValuationMatters = lazy(() => import("./pages/WhyValuationMatters"));
const Executors = lazy(() => import("./pages/Executors"));
const ExecutorsGuide = lazy(() => import("./pages/executors/ExecutorsGuide"));
const Trustees = lazy(() => import("./pages/Trustees"));
const ForCPAs = lazy(() => import("./pages/ForCPAs"));
const ForFinancialPlanners = lazy(() => import("./pages/ForFinancialPlanners"));
const About = lazy(() => import("./pages/About"));
const JoinTheNetwork = lazy(() => import("./pages/JoinTheNetwork"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Counties = lazy(() => import("./pages/Counties"));
const KingCounty = lazy(() => import("./pages/counties/KingCounty"));
const SnohomishCounty = lazy(() => import("./pages/counties/SnohomishCounty"));
const PierceCounty = lazy(() => import("./pages/counties/PierceCounty"));
const KitsapCounty = lazy(() => import("./pages/counties/KitsapCounty"));
const SkagitCounty = lazy(() => import("./pages/counties/SkagitCounty"));
const ClarkCounty = lazy(() => import("./pages/counties/ClarkCounty"));
const SpokaneCounty = lazy(() => import("./pages/counties/SpokaneCounty"));
const ThurstonCounty = lazy(() => import("./pages/counties/ThurstonCounty"));
const WhatcomCounty = lazy(() => import("./pages/counties/WhatcomCounty"));
const BentonCounty = lazy(() => import("./pages/counties/BentonCounty"));
const YakimaCounty = lazy(() => import("./pages/counties/YakimaCounty"));
const FranklinCounty = lazy(() => import("./pages/counties/FranklinCounty"));
const CowlitzCounty = lazy(() => import("./pages/counties/CowlitzCounty"));
const GraysHarborCounty = lazy(() => import("./pages/counties/GraysHarborCounty"));
const IslandCounty = lazy(() => import("./pages/counties/IslandCounty"));
const JeffersonCounty = lazy(() => import("./pages/counties/JeffersonCounty"));
const LewisCounty = lazy(() => import("./pages/counties/LewisCounty"));
const MasonCounty = lazy(() => import("./pages/counties/MasonCounty"));
const PacificCounty = lazy(() => import("./pages/counties/PacificCounty"));
const SanJuanCounty = lazy(() => import("./pages/counties/SanJuanCounty"));
const SkamaniaCounty = lazy(() => import("./pages/counties/SkamaniaCounty"));
const WahkiakumCounty = lazy(() => import("./pages/counties/WahkiakumCounty"));
const Resources = lazy(() => import("./pages/Resources"));
const SeniorMoveManagersFull = lazy(() => import("./pages/SeniorMoveManagers"));
const EstateSaleCompanies = lazy(() => import("./pages/resources/EstateSaleCompanies"));
const ProbateEstateAttorneys = lazy(() => import("./pages/resources/ProbateEstateAttorneys"));
const CPAsFinancialAdvisors = lazy(() => import("./pages/resources/CPAsFinancialAdvisors"));
const SeniorLivingCommunities = lazy(() => import("./pages/resources/SeniorLivingCommunities"));
const PropertyPreparationServices = lazy(() => import("./pages/resources/PropertyPreparationServices"));
const MovingRelocationServices = lazy(() => import("./pages/resources/MovingRelocationServices"));
const WashingtonExecutorsChecklist = lazy(() => import("./pages/resources/WashingtonExecutorsChecklist"));
const LendersFinancingSpecialists = lazy(() => import("./pages/LendersFinancingSpecialists"));
const MortgageLenders = lazy(() => import("./pages/MortgageLenders"));
const FeaturedSeniorMoveManagers = lazy(() => import("./pages/FeaturedSeniorMoveManagers"));
const FeaturedProfessionals = lazy(() => import("./pages/FeaturedProfessionals"));
const RetirementReverseMortgage = lazy(() => import("./pages/RetirementReverseMortgage"));
const SeniorLivingAndRelocation = lazy(() => import("./pages/SeniorLivingAndRelocation"));
const AdultFamilyHomes = lazy(() => import("./pages/senior-living/AdultFamilyHomes"));
const MemoryCare = lazy(() => import("./pages/senior-living/MemoryCare"));
const NursingAndSkilledCare = lazy(() => import("./pages/senior-living/NursingAndSkilledCare"));
const IndependentLiving = lazy(() => import("./pages/senior-living/IndependentLiving"));
const AssistedLiving = lazy(() => import("./pages/senior-living/AssistedLiving"));
const SkilledNursing = lazy(() => import("./pages/senior-living/SkilledNursing"));
const AgingInPlace = lazy(() => import("./pages/senior-living/AgingInPlace"));
const HowProbateRealEstateWorks = lazy(() => import("./pages/guides/HowProbateRealEstateWorks"));
const WhatExecutorsShouldDo = lazy(() => import("./pages/guides/WhatExecutorsShouldDo"));
const AppraisalVsCma = lazy(() => import("./pages/guides/AppraisalVsCma"));
const OutOfStateFamilies = lazy(() => import("./pages/guides/OutOfStateFamilies"));
const SeniorTransitionDifferences = lazy(() => import("./pages/guides/SeniorTransitionDifferences"));
const InheritedHouseWashington = lazy(() => import("./pages/guides/InheritedHouseWashington"));
const ExecutorSellBeforeProbate = lazy(() => import("./pages/guides/ExecutorSellBeforeProbate"));
const AppraisalBeforeSelling = lazy(() => import("./pages/guides/AppraisalBeforeSelling"));
const HeirsDisagreeSelling = lazy(() => import("./pages/guides/HeirsDisagreeSelling"));
const PricingHouseTrustEstate = lazy(() => import("./pages/guides/PricingHouseTrustEstate"));
const SellHouseDuringProbateWashington = lazy(() => import("./pages/guides/SellHouseDuringProbateWashington"));
const TaxesSellingInheritedHouseWashington = lazy(() => import("./pages/guides/TaxesSellingInheritedHouseWashington"));
const PropertyTaxesAfterDeath = lazy(() => import("./pages/guides/PropertyTaxesAfterDeath"));
const MortgageAfterDeath = lazy(() => import("./pages/guides/MortgageAfterDeath"));
const FamilySaleEstate = lazy(() => import("./pages/guides/FamilySaleEstate"));
const StayHomeCost = lazy(() => import("./pages/senior-transitions/StayHomeCost"));
const FiftyFivePlusCommunities = lazy(() => import("./pages/senior-transitions/FiftyFivePlusCommunities"));
const HowLongSellProbateProperty = lazy(() => import("./pages/guides/HowLongSellProbateProperty"));
const ExecutorFirstStepsHouse = lazy(() => import("./pages/guides/ExecutorFirstStepsHouse"));
const SellInheritedHouseAsIsOrFix = lazy(() => import("./pages/guides/SellInheritedHouseAsIsOrFix"));
const ProbateVsTrustSaleWashington = lazy(() => import("./pages/guides/ProbateVsTrustSaleWashington"));
const WhoHasAuthoritySellProbateProperty = lazy(() => import("./pages/guides/WhoHasAuthoritySellProbateProperty"));
const RepairsBeforeSellingProbateHomeWashington = lazy(
  () => import("./pages/guides/RepairsBeforeSellingProbateHomeWashington"),
);
const SeattleProbateEstate = lazy(() => import("./pages/SeattleProbateEstate"));
const BellevueProbateEstate = lazy(() => import("./pages/BellevueProbateEstate"));
const TacomaProbateEstate = lazy(() => import("./pages/TacomaProbateEstate"));
const SpokaneProbateEstate = lazy(() => import("./pages/SpokaneProbateEstate"));
const VancouverWaProbateEstate = lazy(() => import("./pages/VancouverWaProbateEstate"));
const EverettProbateEstate = lazy(() => import("./pages/EverettProbateEstate"));
const OlympiaProbateEstate = lazy(() => import("./pages/OlympiaProbateEstate"));
const BellinghamProbateEstate = lazy(() => import("./pages/BellinghamProbateEstate"));
const GuidesAndResources = lazy(() => import("./pages/GuidesAndResources"));
const Calculators = lazy(() => import("./pages/Calculators"));
const Privacy = lazy(() => import("./pages/Privacy"));
const EmbedCalculators = lazy(() => import("./pages/EmbedCalculators"));
const CostOfCareEmbedPage = lazy(() => import("./pages/embed/CostOfCareEmbedPage"));
const PowerOfAttorney = lazy(() => import("./pages/PowerOfAttorney"));
const GrayDivorce = lazy(() => import("./pages/GrayDivorce"));
const BookkeepingServices = lazy(() => import("./pages/BookkeepingServices"));
const MedicareProviders = lazy(() => import("./pages/MedicareProviders"));
const LegalPlansIdentityProtection = lazy(() => import("./pages/LegalPlansIdentityProtection"));
const TitleAndEscrow = lazy(() => import("./pages/TitleAndEscrow"));
const Wills = lazy(() => import("./pages/Wills"));
const EstateLiquidation = lazy(() => import("./pages/EstateLiquidation"));
const EstateLiquidationLearnMore = lazy(() => import("./pages/EstateLiquidationLearnMore"));
const EstateLiquidators = lazy(() => import("./pages/EstateLiquidators"));
const Realtor = lazy(() => import("./pages/Realtor"));
const RealEstateAppraiser = lazy(() => import("./pages/RealEstateAppraiser"));
const Professionals = lazy(() => import("./pages/Professionals"));
const ProbateAttorneys = lazy(() => import("./pages/professionals/ProbateAttorneys"));
const AttorneysDirectory = lazy(() => import("./pages/professionals/Attorneys"));
const SeniorHousingAdvisors = lazy(() => import("./pages/professionals/SeniorHousingAdvisors"));
const FinancialPlanners = lazy(() => import("./pages/professionals/FinancialPlanners"));
const EstateSale = lazy(() => import("./pages/professionals/EstateSale"));
const HomePreparation = lazy(() => import("./pages/professionals/HomePreparation"));
const CareManagers = lazy(() => import("./pages/professionals/CareManagers"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const ShareYourExperience = lazy(() => import("./pages/ShareYourExperience"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Roles = lazy(() => import("./pages/Roles"));
const Planning = lazy(() => import("./pages/Planning"));
const ProfessionalsPage = lazy(() => import("./pages/ProfessionalsPage"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Search = lazy(() => import("./pages/Search"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const SilverTsunami = lazy(() => import("./pages/articles/SilverTsunami"));
const SeniorHousingOptions = lazy(() => import("./pages/articles/SeniorHousingOptions"));
const IndependentLivingCosts = lazy(() => import("./pages/articles/IndependentLivingCosts"));
const MemoryCareCosts = lazy(() => import("./pages/articles/MemoryCareCosts"));
const CcrcCosts = lazy(() => import("./pages/articles/CcrcCosts"));
const AffordableSeniorHousing = lazy(() => import("./pages/articles/AffordableSeniorHousing"));
const HospiceCare = lazy(() => import("./pages/articles/HospiceCare"));
const AgingInPlaceArticle = lazy(() => import("./pages/articles/AgingInPlace"));
const SeniorHousingCosts = lazy(() => import("./pages/articles/SeniorHousingCosts"));
const SeniorHousingGuide = lazy(() => import("./pages/articles/SeniorHousingGuide"));
const HowToChooseSeniorHousing = lazy(() => import("./pages/articles/HowToChooseSeniorHousing"));
const WillsTrustsOtherOptions = lazy(() => import("./pages/articles/WillsTrustsOtherOptions"));
const ArticlesIndex = lazy(() => import("./pages/Articles"));
const AFHClub = lazy(() => import("./pages/AFHClub"));
const AFHGettingStarted = lazy(() => import("./pages/AFHGettingStarted"));
const AFHLicensingCertification = lazy(() => import("./pages/AFHLicensingCertification"));
const AFHTrainingEducation = lazy(() => import("./pages/AFHTrainingEducation"));
const AFHBuildingInspection = lazy(() => import("./pages/AFHBuildingInspection"));
const AFHWaboGuide = lazy(() => import("./pages/AFHWaboGuide"));
const AFHWaboTechnicalGuide = lazy(() => import("./pages/AFHWaboTechnicalGuide"));
const AFHPropertyClassifications = lazy(() => import("./pages/AFHPropertyClassifications"));
const AFHDosAndDonts = lazy(() => import("./pages/AFHDosAndDonts"));
const AFHWashingtonData = lazy(() => import("./pages/AFHWashingtonData"));
const AFHPillarGuide = lazy(() => import("./pages/AFHPillarGuide"));
const AFHFlowPage = lazy(() => import("./pages/afh/AFHFlowPage"));
const AFHRulesAndFigures = lazy(() => import("./pages/afh/AFHRulesAndFigures"));
const AFHGlossary = lazy(() => import("./pages/AFHGlossary"));
const ProbatePillarGuide = lazy(() => import("./pages/ProbatePillarGuide"));
const ProbateFlowPage = lazy(() => import("./pages/probate/ProbateFlowPage"));
const ProbateDeadlines = lazy(() => import("./pages/probate/ProbateDeadlines"));
const ProbateGlossary = lazy(() => import("./pages/ProbateGlossary"));
const AFHRuleChanges = lazy(() => import("./pages/AFHRuleChanges"));
const AFHViolationHistory = lazy(() => import("./pages/AFHViolationHistory"));
const AFHChoosingAnAdultFamilyHome = lazy(() => import("./pages/senior-living/ChoosingAnAdultFamilyHome"));
const AFHCostsFees = lazy(() => import("./pages/AFHCostsFees"));
const AFHBuyingSelling = lazy(() => import("./pages/AFHBuyingSelling"));
const AFHRegulationsCompliance = lazy(() => import("./pages/AFHRegulationsCompliance"));
const AFHMarketReportHub = lazy(() => import("./pages/afh-club/MarketReportHub"));
const AFHMarketReportEdition = lazy(() => import("./pages/afh-club/MarketReportEdition"));
const AFHNewLicenses = lazy(() => import("./pages/afh-club/NewLicenses"));
const AFHCaregiverBoard = lazy(() => import("./pages/afh-club/CaregiverBoard"));
const AFHFindProfessional = lazy(() => import("./pages/AFHFindProfessional"));

const AFHCalculators = lazy(() => import("./pages/AFHCalculators"));
const AFHROICalculator = lazy(() => import("./pages/AFHROICalculator"));
const AFHFinancingCalculator = lazy(() => import("./pages/AFHFinancingCalculator"));
const HowToFinanceAnAFH = lazy(() => import("./pages/HowToFinanceAnAFH"));
const AFHDscrLoans = lazy(() => import("./pages/AFHDscrLoans"));
const AFHPropertyScore = lazy(() => import("./pages/AFHPropertyScore"));
const AFHPaymentFieldGuide = lazy(() => import("./pages/AFHPaymentFieldGuide"));
const AFHBeforeYouBuy = lazy(() => import("./pages/afh/AFHBeforeYouBuy"));
const AFHCareClassifications = lazy(() => import("./pages/AFHCareClassifications"));
const AFHCBHSTiers = lazy(() => import("./pages/AFHCBHSTiers"));
const AFHValuationEstimator = lazy(() => import("./pages/AFHValuationEstimator"));
const AFHCostByLocation = lazy(() => import("./pages/AFHCostByLocation"));
const AFHResources = lazy(() => import("./pages/AFHResources"));
const AFHSiteMap = lazy(() => import("./pages/AFHSiteMap"));
const AFHOwnershipStructure = lazy(() => import("./pages/AFHOwnershipStructure"));
const AFHWhatIsAnAFH = lazy(() => import("./pages/senior-living/WhatIsAnAdultFamilyHome"));
const AFHListings = lazy(() => import("./pages/AFHListings"));
const AFHForSaleTacoma = lazy(() => import("./pages/AFHForSaleTacoma"));
const AFHForSaleKent = lazy(() => import("./pages/AFHForSaleKent"));
const AFHForSaleFederalWay = lazy(() => import("./pages/AFHForSaleFederalWay"));
const AFHForSaleKennewick = lazy(() => import("./pages/AFHForSaleKennewick"));
const AFHListingDetail = lazy(() => import("./pages/AFHListingDetail"));
const AFHSold = lazy(() => import("./pages/AFHSold"));
const AFHRealEstateBroker = lazy(() => import("./pages/AFHRealEstateBroker"));
const AFHSubmit = lazy(() => import("./pages/AFHSubmit"));
const AFHForSaleSeattle = lazy(() => import("./pages/AFHForSaleSeattle"));
const AFHForSaleKirkland = lazy(() => import("./pages/AFHForSaleKirkland"));
const AFHForSaleRenton = lazy(() => import("./pages/AFHForSaleRenton"));
const AFHForSaleLynnwood = lazy(() => import("./pages/AFHForSaleLynnwood"));
const AFHForSaleEdmonds = lazy(() => import("./pages/AFHForSaleEdmonds"));
const AFHForSalePuyallup = lazy(() => import("./pages/AFHForSalePuyallup"));
const AFHForSaleMarysville = lazy(() => import("./pages/AFHForSaleMarysville"));
const AFHForSaleAuburn = lazy(() => import("./pages/AFHForSaleAuburn"));
const AFHForSaleEverett = lazy(() => import("./pages/AFHForSaleEverett"));
const AFHForSaleBellevue = lazy(() => import("./pages/AFHForSaleBellevue"));
const AFHForSaleLakewood = lazy(() => import("./pages/AFHForSaleLakewood"));
const AFHForSaleBonneyLake = lazy(() => import("./pages/AFHForSaleBonneyLake"));
const AFHForSaleMukilteo = lazy(() => import("./pages/AFHForSaleMukilteo"));
const AFHSellingBusinessAtRetirement = lazy(() => import("./pages/AFHSellingBusinessAtRetirement"));
const AFHCountyHomes = lazy(() => import("./pages/afh-club/homes/CountyHomes"));
const AFHCountyDirectory = lazy(() => import("./pages/afh-club/homes/CountyDirectory"));
const AFHCityDirectory = lazy(() => import("./pages/afh-club/homes/CityDirectory"));
const AFHCitySegment = lazy(() => import("./pages/afh-club/homes/CitySegment"));
const LongTermCareOptions = lazy(() => import("./pages/LongTermCareOptions"));
const LTCNursingHomes = lazy(() => import("./pages/long-term-care/NursingHomes"));
const LTCShortTermNursingHomeStays = lazy(() => import("./pages/long-term-care/ShortTermNursingHomeStays"));
const LTCNurseDelegation = lazy(() => import("./pages/long-term-care/NurseDelegation"));
const LTCMedicaidAndLongTermCare = lazy(() => import("./pages/long-term-care/MedicaidAndLongTermCare"));
const LTCMedicaidAndTheHome = lazy(() => import("./pages/long-term-care/MedicaidAndTheHome"));
const SellParentsHouseDementia = lazy(() => import("./pages/guides/SellParentsHouseDementia"));
const LTCWaCares = lazy(() => import("./pages/long-term-care/WaCares"));
const LTCHowToChooseCareSettings = lazy(() => import("./pages/long-term-care/HowToChooseCareSettings"));
const LTCHospitalDischargePlanning = lazy(() => import("./pages/long-term-care/HospitalDischargePlanning"));
const CostOfCareHub = lazy(() => import("./pages/CostOfCareHub"));
const CostOfCareDetail = lazy(() => import("./pages/CostOfCareDetail"));
// Minimal full-viewport fallback in brand cream — no spinner, no layout shift,
// matches the page background so navigation feels instant on fast chunks.
const RouteFallback = () => <div className="min-h-screen bg-cream" aria-hidden="true" />;

/** Every route. Shared by the browser (BrowserRouter, below) and the build-time
 * page renderer (src/entry-server.tsx, StaticRouter), so both render the same page. */
export const AppRoutes = () => (
  <Suspense fallback={<RouteFallback />}>
    <Routes>
      {/* ─── Homepage ─────────────────────────────────────────── */}
      <Route
        path="/"
        element={
          <LanguageRoute lang="en">
            <RPPHomeV3 />
          </LanguageRoute>
        }
      />
      {/* /home-new and /hero-test removed. Both were development
          scratch pages — an old homepage draft and a hero experiment —
          left publicly routed since July, listed in sitemap.xml at
          priority 0.75, and crawlable: robots.txt allows everything,
          including GPTBot, ClaudeBot and PerplexityBot.

          /home-new was the damaging one. It was a near-duplicate of the
          real homepage, so search engines were being handed two versions
          of the same page and invited to choose. The components survive
          in git history if either is ever wanted again. */}

      {/* ─── Core commercial pages ────────────────────────────── */}
      <Route
        path="/probate-estate-sales"
        element={
          <LanguageRoute lang="en">
            <ProbateEstateSales />
          </LanguageRoute>
        }
      />
      <Route
        path="/senior-transitions"
        element={
          <LanguageRoute lang="en">
            <SeniorTransitions />
          </LanguageRoute>
        }
      />
      <Route path="/senior-transitions/can-parent-afford-to-stay-home" element={<StayHomeCost />} />
      <Route path="/senior-transitions/55-plus-communities-washington" element={<FiftyFivePlusCommunities />} />
      <Route path="/helping-an-aging-parent" element={<ChoiceFlowPage />} />
      <Route path="/helping-an-aging-parent/*" element={<ChoiceFlowPage />} />
      <Route path="/washington-probate-guide" element={<ProbatePillarGuide />} />
      <Route path="/washington-probate-guide/house-in-a-trust" element={<ProbateFlowPage slug="house-in-a-trust" />} />
      <Route path="/washington-probate-guide/no-probate-needed" element={<ProbateFlowPage slug="no-probate-needed" />} />
      <Route path="/washington-probate-guide/executor" element={<ProbateFlowPage slug="executor" />} />
      <Route path="/washington-probate-guide/heir" element={<ProbateFlowPage slug="heir" />} />
      <Route path="/washington-probate-guide/selling-the-house" element={<ProbateFlowPage slug="selling-the-house" />} />
      <Route path="/washington-probate-guide/deadlines-and-key-rules" element={<ProbateDeadlines />} />
      <Route path="/probate-glossary" element={<ProbateGlossary />} />
      <Route path="/estate-probate-inherited-property" element={<EstateProbateInheritedProperty />} />
      <Route path="/estate-probate-inherited-property/first-steps" element={<EPIPFirstSteps />} />
      <Route
        path="/estate-probate-inherited-property/probate-and-legal-authority"
        element={<EPIPProbateAuthority />}
      />
      <Route path="/estate-probate-inherited-property/property-value" element={<EPIPPropertyValue />} />
      <Route path="/estate-probate-inherited-property/what-to-do-with-the-property" element={<EPIPWhatToDo />} />
      <Route path="/estate-probate-inherited-property/preparing-the-property" element={<EPIPPreparing />} />
      <Route path="/estate-probate-inherited-property/professional-team" element={<EPIPProfessionalTeam />} />
      <Route path="/what-should-we-do-first" element={<WhatShouldWeDoFirst />} />
      <Route path="/what-to-do-with-the-house" element={<WhatToDoWithTheHouse />} />
      <Route path="/understanding-housing-care-options" element={<UnderstandingHousingCareOptions />} />
      <Route path="/understanding-senior-transitions" element={<UnderstandingSeniorTransitions />} />
      <Route path="/estate-planning-powers-of-attorney" element={<EstatePlanningPowersOfAttorney />} />
      <Route path="/planning-before-a-crisis" element={<PlanningBeforeACrisis />} />
      <Route path="/planning-before-a-crisis/why-planning-early" element={<PBCWhyPlanningEarly />} />
      <Route path="/planning-before-a-crisis/conversations-to-have" element={<PBCConversationsToHave />} />
      <Route path="/planning-before-a-crisis/legal-documents" element={<PBCLegalDocuments />} />
      <Route path="/planning-before-a-crisis/property-questions" element={<PBCPropertyQuestions />} />
      <Route path="/planning-before-a-crisis/when-a-move-is-coming" element={<PBCWhenAMoveIsComing />} />
      <Route path="/planning-before-a-crisis/how-we-can-help" element={<PBCHowWeCanHelp />} />
      <Route path="/building-your-professional-team" element={<BuildingYourTrustedProfessionalTeam />} />
      <Route path="/aging-life-care-managers" element={<AgingLifeCareManagers />} />
      <Route path="/downsizing-preparing-for-transition" element={<DownsizingPreparingForTransition />} />
      <Route path="/executor-responsibilities-first-steps" element={<ExecutorResponsibilitiesFirstSteps />} />
      <Route path="/executor-responsibilities-first-steps/first-30-days" element={<ERFFirst30Days />} />
      <Route path="/executor-responsibilities-first-steps/legal-duties" element={<ERFLegalDuties />} />
      <Route path="/executor-responsibilities-first-steps/property-decisions" element={<ERFPropertyDecisions />} />
      <Route
        path="/executor-responsibilities-first-steps/working-with-professionals"
        element={<ERFWorkingWithProfessionals />}
      />
      <Route path="/executor-responsibilities-first-steps/common-mistakes" element={<ERFCommonMistakes />} />
      <Route
        path="/executor-responsibilities-first-steps/when-you-need-extra-help"
        element={<ERFWhenYouNeedExtraHelp />}
      />
      <Route path="/preparing-home-for-sale-during-transition" element={<PreparingHomeForSaleDuringTransition />} />
      <Route path="/selling-an-inherited-home" element={<SellingAnInheritedHome />} />
      <Route path="/aging-in-place-staying-home-safely" element={<AgingInPlaceStayingHomeSafely />} />
      <Route
        path="/date-of-death-valuation-property-appraisals"
        element={<DateOfDeathValuationPropertyAppraisals />}
      />

      <Route path="/senior-living-advisors" element={<SeniorLivingAdvisors />} />
      <Route path="/sell-house-fund-senior-living" element={<SellHouseFundSeniorLiving />} />
      <Route path="/privacy" element={<Privacy />} />
     <Route
        path="/cost-of-care-calculator"
        element={
          <LanguageRoute lang="en">
            <CostOfCareHub />
          </LanguageRoute>
        }
      />
      {/* One route serves all six housing options; the slug picks the care
          type. An unknown slug redirects to the hub from inside the page.
          The seven locale paths above mirror this pair exactly. They spent
          months pointing at a bare figures fragment with no header or
          footer; content is still English until i18n keys exist, but a
          working English page beats a broken one. */}
      <Route
        path="/cost-of-care-calculator/:careSlug"
        element={
          <LanguageRoute lang="en">
            <CostOfCareDetail />
          </LanguageRoute>
        }
      />
      <Route path="/why-valuation-matters" element={<WhyValuationMatters />} />
      <Route path="/how-the-process-works" element={<HowTheProcessWorks />} />
      <Route path="/executors" element={<Executors />} />
      <Route path="/executors/executors-guide" element={<ExecutorsGuide />} />
      <Route path="/trustees" element={<Trustees />} />
      <Route path="/estate-liquidation" element={<EstateLiquidation />} />
      <Route path="/estate-liquidation/learn-more" element={<EstateLiquidationLearnMore />} />
      <Route path="/real-estate-appraiser" element={<RealEstateAppraiser />} />
      <Route path="/realtor" element={<Realtor />} />
      <Route path="/wills" element={<Wills />} />
      <Route path="/power-of-attorney" element={<PowerOfAttorney />} />
      <Route path="/gray-divorce" element={<GrayDivorce />} />
      <Route path="/bookkeeping-services" element={<BookkeepingServices />} />
      <Route path="/medicare-providers" element={<MedicareProviders />} />
      <Route path="/legal-plans-identity-protection" element={<LegalPlansIdentityProtection />} />
      <Route path="/title-and-escrow" element={<TitleAndEscrow />} />

      {/* ─── Audience hubs ────────────────────────────────────── */}
      <Route path="/for-attorneys" element={<ForAttorneys />} />
      <Route path="/for-attorneys/how-it-works" element={<ForAttorneysHowItWorks />} />
      <Route path="/for-probate-attorneys" element={<ForProbateAttorneys />} />
      <Route path="/for-estate-planning-attorneys" element={<ForEstatePlanningAttorneys />} />
      <Route path="/for-elder-law-attorneys" element={<ForElderLawAttorneys />} />
      <Route path="/for-family-law-attorneys" element={<ForFamilyLawAttorneys />} />
      <Route path="/for-divorce-attorneys" element={<ForDivorceAttorneys />} />
      <Route path="/real-estate-attorneys" element={<ForRealEstateAttorneys />} />
      <Route path="/attorneys/for-elder-law-attorneys" element={<AttorneysForElderLawAttorneys />} />
      <Route path="/attorneys/for-real-estate-attorney" element={<AttorneysForRealEstateAttorney />} />
      <Route path="/attorneys/for-family-law-attorneys" element={<AttorneysForFamilyLawAttorneys />} />
      <Route path="/for-cpas" element={<ForCPAs />} />
      <Route path="/for-financial-planners" element={<ForFinancialPlanners />} />
      <Route path="/join-the-network" element={<JoinTheNetwork />} />

      {/* ─── County hubs ─────────────────────────────────────── */}
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
      {/* Twenty pages live under /guides/..., so a trimmed URL should land on the library, not a 404. */}
      {/* Every calculator on the site, in two groups. Destination of the homepage "10+ calculators" figure. */}
      <Route path="/calculators" element={<Calculators />} />
      {/* Embeddable Cost of Care calculator (Oct 6, 2026): the share page, and the
          noindex pages other websites frame. See src/lib/calculatorEmbed.ts. */}
      <Route path="/calculators/embed" element={<EmbedCalculators />} />
      <Route path="/embed/cost-of-care" element={<CostOfCareEmbedPage />} />
      <Route path="/embed/cost-of-care/:careSlug" element={<CostOfCareEmbedPage />} />
      <Route path="/guides/how-probate-real-estate-works" element={<HowProbateRealEstateWorks />} />
      <Route path="/guides/what-executors-should-do" element={<WhatExecutorsShouldDo />} />
      <Route path="/guides/appraisal-vs-cma" element={<AppraisalVsCma />} />
      <Route path="/guides/out-of-state-families" element={<OutOfStateFamilies />} />
      <Route path="/guides/senior-transition-differences" element={<SeniorTransitionDifferences />} />
      <Route path="/guides/inherited-house-washington" element={<InheritedHouseWashington />} />
      <Route path="/guides/executor-sell-house-before-probate-washington" element={<ExecutorSellBeforeProbate />} />
      <Route path="/guides/appraisal-before-selling-inherited-property" element={<AppraisalBeforeSelling />} />
      <Route path="/guides/heirs-disagree-selling-house" element={<HeirsDisagreeSelling />} />
      <Route path="/guides/pricing-house-trust-estate" element={<PricingHouseTrustEstate />} />
      <Route path="/guides/sell-house-during-probate-washington" element={<SellHouseDuringProbateWashington />} />
      <Route
        path="/guides/taxes-selling-inherited-house-washington"
        element={<TaxesSellingInheritedHouseWashington />}
      />
      <Route path="/guides/property-taxes-after-death-washington" element={<PropertyTaxesAfterDeath />} />
      <Route path="/guides/mortgage-after-death-washington" element={<MortgageAfterDeath />} />
      <Route path="/guides/executor-buy-or-sell-estate-house-to-family-washington" element={<FamilySaleEstate />} />
      <Route path="/guides/how-long-sell-probate-property" element={<HowLongSellProbateProperty />} />
      <Route path="/guides/executor-first-steps-house" element={<ExecutorFirstStepsHouse />} />
      <Route path="/guides/sell-inherited-house-as-is-or-fix" element={<SellInheritedHouseAsIsOrFix />} />
      <Route path="/guides/probate-vs-trust-sale-washington" element={<ProbateVsTrustSaleWashington />} />
      <Route
        path="/guides/who-has-authority-sell-probate-property-washington"
        element={<WhoHasAuthoritySellProbateProperty />}
      />
      <Route
        path="/guides/repairs-before-selling-probate-home-washington"
        element={<RepairsBeforeSellingProbateHomeWashington />}
      />

      {/* ─── Professionals directory (for families) ───────────── */}
      <Route path="/professionals" element={<Professionals />} />
      <Route path="/roles" element={<Roles />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/professionals-services" element={<ProfessionalsPage />} />
      <Route path="/professionals/attorneys" element={<AttorneysDirectory />} />
      <Route path="/professionals/probate-attorneys" element={<ProbateAttorneys />} />
      <Route path="/professionals/senior-housing-advisors" element={<SeniorHousingAdvisors />} />
      <Route path="/professionals/financial-planners" element={<FinancialPlanners />} />
      <Route path="/professionals/estate-sale" element={<EstateSale />} />
      <Route path="/professionals/home-preparation" element={<HomePreparation />} />
      <Route path="/professionals/care-managers" element={<CareManagers />} />

      {/* ─── Senior living reference ──────────────────────────── */}
      <Route path="/senior-living-and-relocation" element={<SeniorLivingAndRelocation />} />
      <Route path="/senior-living/adult-family-homes" element={<AdultFamilyHomes />} />
      <Route path="/senior-living/memory-care" element={<MemoryCare />} />
      <Route path="/senior-living/nursing-and-skilled-care" element={<NursingAndSkilledCare />} />
      <Route path="/senior-living/independent-living" element={<IndependentLiving />} />
      <Route path="/senior-living/assisted-living" element={<AssistedLiving />} />
      <Route path="/senior-living/skilled-nursing" element={<SkilledNursing />} />
      <Route path="/senior-living/aging-in-place" element={<AgingInPlace />} />

      {/* ─── Lending ──────────────────────────────────────────── */}
      <Route path="/lenders-and-financing-specialists" element={<LendersFinancingSpecialists />} />
      <Route path="/mortgage-lenders" element={<MortgageLenders />} />
      <Route path="/retirement-reverse-mortgage" element={<RetirementReverseMortgage />} />

      {/* ─── Resources directory ──────────────────────────────── */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/estate-sale-companies" element={<EstateSaleCompanies />} />
      <Route path="/resources/probate-estate-attorneys" element={<ProbateEstateAttorneys />} />
      <Route path="/resources/cpas-financial-advisors" element={<CPAsFinancialAdvisors />} />
      <Route path="/resources/senior-living-communities" element={<SeniorLivingCommunities />} />
      <Route path="/resources/property-preparation-services" element={<PropertyPreparationServices />} />
      <Route path="/resources/moving-relocation-services" element={<MovingRelocationServices />} />
      <Route path="/resources/washington-executors-10-step-checklist" element={<WashingtonExecutorsChecklist />} />

      {/* ─── Supporting ───────────────────────────────────────── */}
      {/* /about is the single canonical About page (brand-neutral About page) */}
      <Route path="/about" element={<About />} />
      {/* Legacy routes → redirect to /about */}
      <Route
        path="/contact"
        element={
          <LanguageRoute lang="en">
            <Contact />
          </LanguageRoute>
        }
      />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/share-your-experience" element={<ShareYourExperience />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/search" element={<Search />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      {/* Standards pages (Sept 27, 2026); paths and words in src/data/policyPages.ts */}
      <Route path="/editorial-standards" element={<PolicyPage />} />
      <Route path="/research-methodology" element={<PolicyPage />} />
      <Route path="/corrections-policy" element={<PolicyPage />} />
      <Route path="/professional-inclusion-standards" element={<PolicyPage />} />
      <Route path="/compensation-disclosure" element={<PolicyPage />} />
      <Route path="/authors" element={<PolicyPage />} />
      <Route path="/articles" element={<ArticlesIndex />} />
      <Route path="/articles/silver-tsunami" element={<SilverTsunami />} />
      <Route path="/articles/senior-housing-options" element={<SeniorHousingOptions />} />
      <Route path="/articles/independent-living-costs" element={<IndependentLivingCosts />} />
      <Route path="/articles/memory-care-costs" element={<MemoryCareCosts />} />
      <Route path="/articles/ccrc-costs" element={<CcrcCosts />} />
      <Route path="/articles/affordable-senior-housing" element={<AffordableSeniorHousing />} />
      <Route path="/articles/hospice-care-washington" element={<HospiceCare />} />
      <Route path="/articles/aging-in-place" element={<AgingInPlaceArticle />} />
      <Route path="/articles/senior-housing-costs" element={<SeniorHousingCosts />} />
      <Route path="/articles/senior-housing-guide" element={<SeniorHousingGuide />} />
      <Route path="/articles/how-to-choose-senior-housing" element={<HowToChooseSeniorHousing />} />
      <Route path="/articles/wills-trusts-other-options" element={<WillsTrustsOtherOptions />} />

      {/* ══════════════════════════════════════════════════════════
          REDIRECTS — Phase 2a SEO consolidation
          All deprecated URLs redirect to the canonical equivalent.
          Implemented as React Router Navigate (client-side 301 equivalent).
      ══════════════════════════════════════════════════════════ */}

      {/* Every redirect on the site lives in src/data/redirects.ts (Sept 27, 2026).
          The build writes the same list to dist/_redirects, so the host answers
          with a real 301 before any JavaScript runs; this route is the fallback
          for in-app navigation. Add or change redirects there, not here. */}
      {REDIRECTS.map((r) => (
        <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
      ))}

      {/* Tier-2 cities → their county hub */}

      {/* Old "cities" hub & dynamic city pages → counties hub */}

      {/* Dynamic /services/:slug → canonical service pages */}

      {/* /insights and /insights-guidance → /guides */}

      {/* /learn-more pages → fold into parent (Phase 2c will merge content) */}
      <Route path="/estate-liquidators" element={<EstateLiquidators />} />

      {/* Redundant professional / referral pages → consolidated targets */}

      {/* Redundant senior pages → /senior-transitions */}
      <Route path="/senior-move-managers" element={<SeniorMoveManagersFull />} />
      <Route path="/featured-senior-move-managers" element={<FeaturedSeniorMoveManagers />} />
      <Route path="/featured-professionals" element={<FeaturedProfessionals />} />

      {/* Misc legacy */}
      <Route
        path="/afh-club"
        element={
          <LanguageRoute lang="en">
            <AFHClub />
          </LanguageRoute>
        }
      />
      <Route path="/afh-club/getting-started" element={<AFHGettingStarted />} />
      <Route path="/afh-club/licensing-certification" element={<AFHLicensingCertification />} />
      <Route path="/afh-club/training-education" element={<AFHTrainingEducation />} />
      <Route path="/afh-club/building-inspection" element={<AFHBuildingInspection />} />
      <Route path="/afh-club/wabo-inspection-guide" element={<AFHWaboGuide />} />
      <Route path="/afh-club/wabo-technical-guide" element={<AFHWaboTechnicalGuide />} />
      <Route path="/afh-club/afh-property-classifications" element={<AFHPropertyClassifications />} />
      <Route path="/afh-club/dos-and-donts-operating-adult-family-home" element={<AFHDosAndDonts />} />
      <Route path="/afh-club/washington-afh-data" element={<AFHWashingtonData />} />
      <Route path="/afh-club/washington-adult-family-home-guide" element={<AFHPillarGuide />} />
      <Route path="/afh-club/washington-adult-family-home-guide/opening" element={<AFHFlowPage slug="opening" />} />
      <Route path="/afh-club/washington-adult-family-home-guide/buying" element={<AFHFlowPage slug="buying" />} />
      <Route path="/afh-club/washington-adult-family-home-guide/selling" element={<AFHFlowPage slug="selling" />} />
      <Route path="/afh-club/washington-adult-family-home-guide/running" element={<AFHFlowPage slug="running" />} />
      <Route path="/afh-club/washington-adult-family-home-guide/evaluating" element={<AFHFlowPage slug="evaluating" />} />
      <Route path="/afh-club/washington-adult-family-home-guide/rules-and-key-figures" element={<AFHRulesAndFigures />} />
      <Route path="/afh-club/glossary" element={<AFHGlossary />} />
      <Route path="/afh-club/washington-afh-rule-changes" element={<AFHRuleChanges />} />
      <Route path="/afh-club/violation-history-lookup" element={<AFHViolationHistory />} />
      <Route path="/senior-living/choosing-an-adult-family-home" element={<AFHChoosingAnAdultFamilyHome />} />
      <Route path="/afh-club/costs-fees" element={<AFHCostsFees />} />
      <Route path="/afh-club/buying-selling" element={<AFHBuyingSelling />} />
      <Route path="/afh-club/regulations-compliance" element={<AFHRegulationsCompliance />} />
      <Route path="/afh-club/find-a-professional" element={<AFHFindProfessional />} />
      <Route path="/afh-club/caregivers" element={<AFHCaregiverBoard />} />
      <Route path="/afh-club/market-report" element={<AFHMarketReportHub />} />
      <Route path="/afh-club/market-report/:edition" element={<AFHMarketReportEdition />} />
      <Route path="/afh-club/new-licenses" element={<AFHNewLicenses />} />
      <Route path="/afh-club/calculators" element={<AFHCalculators />} />
      <Route path="/afh-club/afh-roi-calculator" element={<AFHROICalculator />} />
      <Route path="/afh-club/afh-valuation-estimator" element={<AFHValuationEstimator />} />
      <Route path="/afh-club/afh-financing-calculator" element={<AFHFinancingCalculator />} />
      <Route path="/afh-club/how-to-finance-an-afh" element={<HowToFinanceAnAFH />} />
      <Route path="/afh-club/dscr-loans-adult-family-homes" element={<AFHDscrLoans />} />
      {/* How AFHs get paid: three-part series (Sept 2026). Hub + two deep dives. */}
      <Route path="/afh-club/afh-property-score" element={<AFHPropertyScore />} />
      <Route path="/afh-club/afh-payment-field-guide" element={<AFHPaymentFieldGuide />} />
      <Route path="/afh-club/before-you-buy-an-adult-family-home" element={<AFHBeforeYouBuy />} />
      <Route path="/afh-club/care-classifications-a-through-e" element={<AFHCareClassifications />} />
      <Route path="/afh-club/cbhs-tiers" element={<AFHCBHSTiers />} />
      {/* Family-facing tool: lives on the senior-housing side, not AFH Club (moved Sept 2026). */}
      <Route path="/adult-family-home-costs" element={<AFHCostByLocation />} />
      <Route path="/afh-club/resources" element={<AFHResources />} />
      <Route path="/afh-club/site-map" element={<AFHSiteMap />} />
      <Route path="/afh-club/ownership-structure" element={<AFHOwnershipStructure />} />
      <Route path="/senior-living/what-is-an-adult-family-home" element={<AFHWhatIsAnAFH />} />
      <Route path="/afh-club/listings" element={<AFHListings />} />
      <Route path="/afh-club/listings/properties" element={<AFHListings view="realEstate" />} />
      <Route path="/afh-club/listings/businesses" element={<AFHListings view="business" />} />
      <Route path="/afh-club/listings/for-lease" element={<AFHListings view="lease" />} />
      <Route path="/afh-club/sold" element={<AFHSold />} />
      {/* Permanent per-listing pages (/afh-club/listings/<city>-<source>-<number>). Static siblings above must stay above this. */}
      <Route path="/afh-club/listings/:slug" element={<AFHListingDetail />} />
      {/* Adult family home directory. The :segment route resolves to either a
          filter view or a facility page — facility slugs end in the DSHS
          license number, filter slugs never do. */}
      {/* Retired hand-built facility page. The home it covered is now in the
          directory under DSHS license 755603. Redirect rather than fall through
          to the city route, which would render a soft 404. Must precede
          the :citySlug route. */}
      <Route path="/afh-club/homes" element={<AFHCountyDirectory />} />
      <Route path="/afh-club/homes/county/:countySlug" element={<AFHCountyHomes />} />
      <Route path="/afh-club/homes/:citySlug" element={<AFHCityDirectory />} />
      <Route path="/afh-club/homes/:citySlug/:segment" element={<AFHCitySegment />} />
      <Route path="/afh-club/real-estate-broker" element={<AFHRealEstateBroker />} />
      <Route path="/afh-submit" element={<AFHSubmit />} />
      <Route path="/afh-club/for-sale/seattle-wa" element={<AFHForSaleSeattle />} />
      <Route path="/afh-club/for-sale/tacoma-wa" element={<AFHForSaleTacoma />} />
      <Route path="/afh-club/for-sale/kent-wa" element={<AFHForSaleKent />} />
      <Route path="/afh-club/for-sale/federal-way-wa" element={<AFHForSaleFederalWay />} />
      <Route path="/afh-club/for-sale/kennewick-wa" element={<AFHForSaleKennewick />} />
      <Route path="/afh-club/for-sale/kirkland-wa" element={<AFHForSaleKirkland />} />
      <Route path="/afh-club/for-sale/renton-wa" element={<AFHForSaleRenton />} />
      <Route path="/afh-club/for-sale/lynnwood-wa" element={<AFHForSaleLynnwood />} />
      <Route path="/afh-club/for-sale/edmonds-wa" element={<AFHForSaleEdmonds />} />
      <Route path="/afh-club/for-sale/puyallup-wa" element={<AFHForSalePuyallup />} />
      <Route path="/afh-club/for-sale/marysville-wa" element={<AFHForSaleMarysville />} />
      <Route path="/afh-club/for-sale/auburn-wa" element={<AFHForSaleAuburn />} />
      <Route path="/afh-club/for-sale/everett-wa" element={<AFHForSaleEverett />} />
      <Route path="/afh-club/for-sale/bellevue-wa" element={<AFHForSaleBellevue />} />
      <Route path="/afh-club/for-sale/lakewood-wa" element={<AFHForSaleLakewood />} />
      <Route path="/afh-club/for-sale/bonney-lake-wa" element={<AFHForSaleBonneyLake />} />
      <Route path="/afh-club/for-sale/mukilteo-wa" element={<AFHForSaleMukilteo />} />
      <Route path="/afh-club/selling-your-business-at-retirement" element={<AFHSellingBusinessAtRetirement />} />
      <Route path="/long-term-care" element={<LongTermCareOptions />} />
      <Route path="/long-term-care/nursing-homes" element={<LTCNursingHomes />} />
      <Route path="/long-term-care/short-term-nursing-home-stays" element={<LTCShortTermNursingHomeStays />} />
      <Route path="/long-term-care/nurse-delegation" element={<LTCNurseDelegation />} />
      <Route path="/long-term-care/medicaid-and-long-term-care" element={<LTCMedicaidAndLongTermCare />} />
      <Route path="/long-term-care/medicaid-and-the-family-home" element={<LTCMedicaidAndTheHome />} />
      <Route path="/guides/sell-parents-house-dementia-washington" element={<SellParentsHouseDementia />} />
      <Route path="/long-term-care/wa-cares" element={<LTCWaCares />} />
      <Route path="/long-term-care/how-to-choose-care-settings" element={<LTCHowToChooseCareSettings />} />
      <Route path="/long-term-care/hospital-discharge-planning" element={<LTCHospitalDischargePlanning />} />
      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

/** `location` is set only by the build-time renderer (src/entry-server.tsx); the
 * browser uses BrowserRouter. Both render the same tree, so the browser can
 * hydrate the prerendered HTML instead of replacing it. */
const Router = ({ location, children }: { location?: string; children: ReactNode }) =>
  location ? <StaticRouter location={location}>{children}</StaticRouter> : <BrowserRouter>{children}</BrowserRouter>;

/** Toast containers render differently on the server, so they mount after the
 * first browser render; until then there are no toasts to show anyway. Loaded
 * as their own file (Oct 6, 2026) so the toast libraries are not in the first
 * download of every page. */
const ToastContainers = lazy(() => import("./components/ToastContainers"));
const Toasters = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? (
    <Suspense fallback={null}>
      <ToastContainers />
    </Suspense>
  ) : null;
};

/* No QueryClientProvider (removed Oct 6, 2026): nothing on the site uses
   react-query, and the provider put its library in every page's first download.
   If a page ever needs it, add the provider back around that page. */
const App = ({ location }: { location?: string } = {}) => (
  <>
    <Toasters />
    <Router location={location}>
      <ScrollToTop />

      {/* SiteChatWidget removed. It was not a chat widget — handleSubmit
          cleared the input and showed a confirmation, and the component made
          no network call of any kind in 581 lines. A reader could type a
          question about a parent's care, be told it was received, and have it
          go nowhere. On a site whose visitors are often mid-crisis that is
          worse than having no widget at all.

          It also floated at z-index 99999 over page content on mobile, which
          is what prompted the look. Deleted rather than hidden; if a real chat
          is wanted later it should be built against a live endpoint. */}

      <AppRoutes />
    </Router>
  </>
);

export default App;
