import HeroSection from "@/components/HeroSection";
import FarmerDashboard from "@/components/FarmerDashboard";
import ProfileSection from "@/components/ProfileSection";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <main className="min-h-screen">
      <Header showBack={false} />
      <HeroSection />
      <FarmerDashboard />
      <ProfileSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">{t('app.title')}</h3>
          <p className="text-primary-foreground/80 mb-4">
            {t('app.subtitle')}
          </p>
          <p className="text-sm text-primary-foreground/60 mb-4">
            Supporting Kerala farmers with voice-first AI guidance • സ്മാർട്ട് ഇന്ത്യ ഹാക്കത്തൺ 2025
          </p>
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-white text-primary hover:bg-white/90"
          >
            {t('header.getStarted')}
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default Index;