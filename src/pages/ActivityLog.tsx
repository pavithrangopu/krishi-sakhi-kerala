import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Activity, Calendar, Sprout, Droplets, Bug, TrendingUp, CloudRain, Thermometer, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivityLog = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-nature">
      <Header title={t('activity.title')} subtitle={t('activity.subtitle')} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Weather Alerts Section */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="shadow-soft border-border bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <CloudRain className="w-5 h-5 text-blue-600" />
                  <h3 className="font-medium text-blue-800 dark:text-blue-200">{t('activity.rainExpected')}</h3>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">80% chance tomorrow</p>
                <Badge variant="outline" className="mt-2 bg-blue-100 text-blue-800 border-blue-200">
                  {t('activity.noWateringNeeded')}
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border bg-orange-50 dark:bg-orange-950/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-5 h-5 text-orange-600" />
                  <h3 className="font-medium text-orange-800 dark:text-orange-200">{t('activity.temperatureAlert')}</h3>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300">35°C expected</p>
                <Badge variant="outline" className="mt-2 bg-orange-100 text-orange-800 border-orange-200">
                  {t('activity.highTemp')}
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-border bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-5 h-5 text-green-600" />
                  <h3 className="font-medium text-green-800 dark:text-green-200">{t('activity.soilMoisture')}</h3>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">65% moisture level</p>
                <Badge variant="outline" className="mt-2 bg-green-100 text-green-800 border-green-200">
                  {t('activity.optimal')}
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Activity Summary */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">{t('activity.thisMonth')}</h3>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground">{t('activity.activitiesLogged')}</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">{t('activity.lastActivity')}</h3>
                <p className="text-lg font-bold text-secondary">{t('activity.irrigation')}</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">{t('activity.cropsMonitored')}</h3>
                <p className="text-2xl font-bold text-accent">3</p>
                <p className="text-xs text-muted-foreground">{t('profile.rice')}, {t('profile.coconut')}, {t('profile.spices')}</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">{t('activity.completionRate')}</h3>
                <p className="text-2xl font-bold text-green-600">92%</p>
                <p className="text-xs text-muted-foreground">Planned activities</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                {t('activity.recentActivities')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    date: "Dec 14, 2024",
                    activity: t('activity.irrigation'),
                    crop: "Rice Field A",
                    icon: Droplets,
                    status: t('common.completed'),
                    details: "Applied 2 hours of drip irrigation",
                    color: "blue"
                  },
                  {
                    date: "Dec 12, 2024",
                    activity: t('activity.pestControl'),
                    crop: "Coconut Grove",
                    icon: Bug,
                    status: t('common.completed'),
                    details: "Applied organic neem spray for red palm weevil",
                    color: "red"
                  },
                  {
                    date: "Dec 10, 2024",
                    activity: t('activity.fertilizer'),
                    crop: "Spice Garden",
                    icon: Sprout,
                    status: t('common.completed'),
                    details: "Applied organic compost 50kg",
                    color: "green"
                  },
                  {
                    date: "Dec 8, 2024",
                    activity: t('activity.sowing'),
                    crop: "Rice Field B",
                    icon: Sprout,
                    status: t('common.completed'),
                    details: "Sowed Jyothi variety paddy seeds",
                    color: "green"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/20 transition-colors">
                    <div className={`p-2 rounded-lg ${
                      item.color === "blue" ? "bg-blue-100 text-blue-600" :
                      item.color === "red" ? "bg-red-100 text-red-600" :
                      item.color === "green" ? "bg-green-100 text-green-600" :
                      "bg-purple-100 text-purple-600"
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{item.activity}</h3>
                          <p className="text-sm text-muted-foreground">{item.crop}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 mb-1">
                            {item.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Filter and Actions */}
          <Card className="shadow-soft border-border">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="font-medium mb-2">Filter Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">All</Button>
                    <Button variant="outline" size="sm">Irrigation</Button>
                    <Button variant="outline" size="sm">Fertilization</Button>
                    <Button variant="outline" size="sm">Pest Control</Button>
                    <Button variant="outline" size="sm">Harvesting</Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="nature">Add Activity</Button>
                  <Button variant="outline">Export Report</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {t('activity.upcomingActivities')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{t('activity.irrigation')} - Rice Field A</p>
                      <p className="text-sm text-muted-foreground">Due: Tomorrow</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Mark Complete</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bug className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-medium">Pest Monitoring - All Crops</p>
                      <p className="text-sm text-muted-foreground">Due: Dec 18, 2024</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Schedule</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Crop Suggestions */}
          <Card className="shadow-soft border-border bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                {t('ai.cropSuggestions')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Sprout className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-green-800">{t('ai.schemeBasedSuggestion')}</h4>
                    <p className="text-sm text-green-700 mt-1">{t('ai.groundnutSubsidy')}</p>
                    <Badge variant="outline" className="mt-2 bg-green-100 text-green-800 border-green-200">
                      Government Scheme Available
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">{t('ai.soilQuality')}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('ai.soilHealth')}</span>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    {t('ai.excellent')}
                  </Badge>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  pH: 6.8 | Organic Matter: 3.2% | NPK: 280-45-180
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ActivityLog;