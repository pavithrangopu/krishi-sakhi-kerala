import HeroSection from "@/components/HeroSection";
import FarmerDashboard from "@/components/FarmerDashboard";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FarmerDashboard />
      <ProfileSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">കൃഷി സഖി | Krishi Sakhi</h3>
          <p className="text-primary-foreground/80 mb-4">
            Kerala's AI-Powered Farming Companion for Prosperous Agriculture
          </p>
          <p className="text-sm text-primary-foreground/60">
            Supporting Kerala farmers with voice-first AI guidance • സ്മാർട് ഇന്ത്യ ഹാക്കത്തൺ 2025
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;