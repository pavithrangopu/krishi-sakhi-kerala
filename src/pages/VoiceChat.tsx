import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Phone } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const VoiceChat = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-nature">
      <Header title={t('page.voiceChat')} subtitle="AI-powered farming assistant" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft border-border">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Mic className="w-6 h-6 text-primary" />
                AI വോയ്സ് അസിസ്റ്റന്റ്
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-12">
                <Button variant="voice" size="lg" className="w-24 h-24 rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </Button>
                <p className="text-lg font-medium mb-2">സംസാരിക്കാൻ ടച്ച് ചെയ്ത് പിടിക്കുക</p>
                <p className="text-muted-foreground">Touch and hold to speak</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-center mb-4">സാമ്പിൾ ചോദ്യങ്ങൾ | Sample Questions:</h3>
                <Button variant="outline" className="w-full justify-start text-left">
                  "എന്റെ വയലിലെ വിള എങ്ങനെയുണ്ട്?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയാണ്?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "വിത്ത് എവിടെ കിട്ടും?"
                </Button>
                <Button variant="outline" className="w-full justify-start text-left">
                  "സബ്സിഡി എങ്ങനെ ലഭിക്കും?"
                </Button>
              </div>
              
              {/* Coming Soon Message */}
              <Card className="text-center py-6 bg-card/80 backdrop-blur-sm">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">{t('common.comingSoon')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('common.placeholder')}
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default VoiceChat;