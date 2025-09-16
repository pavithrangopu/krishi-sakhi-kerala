import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VoiceChat from "./pages/VoiceChat";
import Dashboard from "./pages/Dashboard";
import SeedAvailability from "./pages/SeedAvailability";
import MarketPrices from "./pages/MarketPrices";
import Subsidies from "./pages/Subsidies";
import CropCalendar from "./pages/CropCalendar";
import EditProfile from "./pages/EditProfile";
import LoanRecords from "./pages/LoanRecords";
import ActivityLog from "./pages/ActivityLog";
import SchemesApplied from "./pages/SchemesApplied";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/voice-chat" element={<VoiceChat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/seed-availability" element={<SeedAvailability />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/crop-calendar" element={<CropCalendar />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/loan-records" element={<LoanRecords />} />
          <Route path="/activity-log" element={<ActivityLog />} />
          <Route path="/schemes-applied" element={<SchemesApplied />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
