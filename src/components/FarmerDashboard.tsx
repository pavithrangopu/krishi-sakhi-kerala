import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Droplets, 
  Thermometer, 
  Bug, 
  Calendar, 
  TrendingUp,
  AlertTriangle,
  Phone
} from "lucide-react";

const FarmerDashboard = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              കർഷക ഡാഷ്‌ബോർഡ് | Farmer Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time updates and AI-powered insights for your farming needs
            </p>
          </div>

          {/* Weather & Alerts Row */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-soft border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cloud className="w-5 h-5 text-accent" />
                  കാലാവസ്ഥ | Weather Today
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Temperature</span>
                  </div>
                  <span className="text-lg font-semibold">28°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-accent" />
                    <span className="font-medium">Humidity</span>
                  </div>
                  <span className="text-lg font-semibold">78%</span>
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Good for irrigation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  മുന്നറിയിപ്പുകൾ | Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <Bug className="w-4 h-4 text-destructive mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-destructive">Pest Alert</p>
                      <p className="text-xs text-muted-foreground">Brown plant hopper spotted in nearby farms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Calendar className="w-4 h-4 text-secondary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-secondary">Sowing Reminder</p>
                      <p className="text-xs text-muted-foreground">Optimal time for planting paddy seeds</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Guidance & Voice Assistant */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  AI മാർഗ്ഗദർശനം | AI Guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="nature" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <p className="font-medium">വിത്ത് വിതരണം</p> 
                      <p className="text-sm text-muted-foreground">Seed availability updates</p>
                    </div>
                  </Button>
                  <Button variant="nature" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <p className="font-medium">വിപണി വില</p>
                      <p className="text-sm text-muted-foreground">Current market prices</p>
                    </div>
                  </Button>
                  <Button variant="nature" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <p className="font-medium">സബ്സിഡി സ്കീമുകൾ</p>
                      <p className="text-sm text-muted-foreground">Government schemes</p>
                    </div>
                  </Button>
                  <Button variant="nature" className="justify-start h-auto p-4">
                    <div className="text-left">
                      <p className="font-medium">കൃഷി കലണ്ടർ</p>
                      <p className="text-sm text-muted-foreground">Crop calendar</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  വോയ്സ് അസിസ്റ്റന്റ് | Voice Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <Button variant="voice" size="icon-lg" className="mb-4">
                    <Phone className="w-6 h-6" />
                  </Button>
                  <p className="text-sm text-muted-foreground mb-2">സംസാരിക്കാൻ ടാപ് ചെയ്യുക</p>
                  <p className="text-xs text-muted-foreground">Tap to speak in Malayalam</p>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    "എന്റെ വയലിലെ വിള എങ്ങനെയുണ്ട്?"
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    "ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയാണ്?"
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    "വിത്ത് എവിടെ കിട്ടും?"
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerDashboard;