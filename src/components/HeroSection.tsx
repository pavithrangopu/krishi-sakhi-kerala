import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Smartphone, Users, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/kerala-farming-hero.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-nature">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kerala farming landscape with lush green fields"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('app.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t('app.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('app.description')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/voice-chat">
              <Button variant="hero" size="xl" className="gap-3">
                <Mic className="w-5 h-5" />
                {t('header.startVoiceChat')}
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="harvest" size="xl" className="gap-3">
                <Smartphone className="w-5 h-5" />
                {t('header.getStarted')}
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{t('feature.voiceInMalayalam')}</h3>
                <p className="text-muted-foreground">{t('feature.voiceDescription')}</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">{t('feature.farmingGuidance')}</h3>
                <p className="text-muted-foreground">{t('feature.guidanceDescription')}</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-soft hover:shadow-glow transition-smooth">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{t('feature.farmerCommunity')}</h3>
                <p className="text-muted-foreground">{t('feature.communityDescription')}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;