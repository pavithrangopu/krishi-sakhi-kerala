import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import VoiceChat from "./pages/VoiceChat";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import SeedAvailability from "./pages/SeedAvailability";
import MarketPrices from "./pages/MarketPrices";
import Subsidies from "./pages/Subsidies";
import CropCalendar from "./pages/CropCalendar";
import EditProfile from "./pages/EditProfile";
import LoanRecords from "./pages/LoanRecords";
import ActivityLog from "./pages/ActivityLog";
import SchemesApplied from "./pages/SchemesApplied";
import Chat from "./pages/Chat";
import Weather from "./pages/Weather";

const queryClient = new QueryClient();

// Protected Route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

// Public Route wrapper (redirect to dashboard if already logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }
  
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <PublicRoute>
                <Index />
              </PublicRoute>
            } />
            <Route path="/auth" element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } />
            <Route path="/weather" element={
              <ProtectedRoute>
                <Weather />
              </ProtectedRoute>
            } />
            <Route path="/voice-chat" element={
              <ProtectedRoute>
                <VoiceChat />
              </ProtectedRoute>
            } />
            <Route path="/seed-availability" element={
              <ProtectedRoute>
                <SeedAvailability />
              </ProtectedRoute>
            } />
            <Route path="/market-prices" element={
              <ProtectedRoute>
                <MarketPrices />
              </ProtectedRoute>
            } />
            <Route path="/subsidies" element={
              <ProtectedRoute>
                <Subsidies />
              </ProtectedRoute>
            } />
            <Route path="/crop-calendar" element={
              <ProtectedRoute>
                <CropCalendar />
              </ProtectedRoute>
            } />
            <Route path="/edit-profile" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/loan-records" element={
              <ProtectedRoute>
                <LoanRecords />
              </ProtectedRoute>
            } />
            <Route path="/activity-log" element={
              <ProtectedRoute>
                <ActivityLog />
              </ProtectedRoute>
            } />
            <Route path="/schemes-applied" element={
              <ProtectedRoute>
                <SchemesApplied />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
