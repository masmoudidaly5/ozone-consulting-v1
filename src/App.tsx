import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FormationDetail from "./pages/FormationDetail";
import NotFound from "./pages/NotFound";
import AllFormations from "./pages/AllFormations";
import AllServices from "./pages/AllServices";
import AllNouveautes from "./pages/AllNouveautes";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EPlatform from "./pages/EPlatform";
import PageLoader from "./components/PageLoader";
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <IntroAnimation />
        <PageLoader />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/formations" element={<AllFormations />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/nouveautes" element={<AllNouveautes />} />
          <Route path="/e-platform" element={<EPlatform />} />
          <Route path="/formation/:id" element={<FormationDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
