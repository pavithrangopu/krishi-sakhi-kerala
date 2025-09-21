import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Community = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-nature">
      <Header title={t('feature.farmerCommunity')} subtitle="Connect with fellow farmers" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Discussion Forum</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Join discussions about crop management, pest control, and farming techniques.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• Ask questions & get answers</p>
                  <p>• Share farming experiences</p>
                  <p>• Learn from experts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Local Groups</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connect with farmers in your district and village for local insights.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• District-wise groups</p>
                  <p>• Crop-specific communities</p>
                  <p>• Local market updates</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Events & Workshops</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Attend workshops, training sessions, and agricultural events.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• Technical training</p>
                  <p>• Government schemes info</p>
                  <p>• Expert sessions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Success Stories</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Learn from successful farming practices and inspiring stories.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>• Farmer success stories</p>
                  <p>• Best practices sharing</p>
                  <p>• Innovation showcases</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Message */}
          <Card className="text-center py-12 bg-card/80 backdrop-blur-sm">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{t('common.comingSoon')}</h3>
              <p className="text-muted-foreground">
                {t('common.placeholder')}
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
};

export default Community;