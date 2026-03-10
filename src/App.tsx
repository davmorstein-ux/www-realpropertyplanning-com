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
import HowWeWork from "./pages/HowWeWork";
import HowTheProcessWorks from "./pages/HowTheProcessWorks";
import WhyValuationMatters from "./pages/WhyValuationMatters";
import AttorneyReferral from "./pages/AttorneyReferral";
import Executors from "./pages/Executors";
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
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/how-the-process-works" element={<HowTheProcessWorks />} />
          <Route path="/why-valuation-matters" element={<WhyValuationMatters />} />
          <Route path="/attorney-referral" element={<AttorneyReferral />} />
          <Route path="/executors" element={<Executors />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terminology" element={<Terminology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counties" element={<Counties />} />
          <Route path="/cities-we-serve" element={<CitiesWeServe />} />
          <Route path="/counties/king" element={<KingCounty />} />
          <Route path="/counties/snohomish" element={<SnohomishCounty />} />
          <Route path="/counties/pierce" element={<PierceCounty />} />
          <Route path="/counties/kitsap" element={<KitsapCounty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
