import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Sprout, Droplets, Sun, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const CropCalendar = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">കൃഷി കലണ്ടർ | Crop Calendar</h1>
            <p className="text-muted-foreground">Season-wise farming activities and recommendations for Kerala</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Current Season Activities */}
          <Card className="shadow-soft border-border bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                This Month - December 2024
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Sprout className="w-5 h-5 text-green-600" />
                    <h3 className="font-medium">പുതിയ വിത്ത് | New Sowing</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• റാബി നെൽ (Rabi Rice)</li>
                    <li>• സുഗന്ധവ്യഞ്ജനങ്ങൾ (Spices)</li>
                    <li>• പഞ്ചസാര (Sugarcane)</li>
                  </ul>
                </div>

                <div className="p-4 bg-card rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium">ജലസേചനം | Irrigation</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• തേങ്ങാ തോട്ടങ്ങൾ (Coconut)</li>
                    <li>• പച്ചക്കറി തോട്ടങ്ങൾ (Vegetables)</li>
                    <li>• പഴവൃക്ഷങ്ങൾ (Fruit trees)</li>
                  </ul>
                </div>

                <div className="p-4 bg-card rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-5 h-5 text-orange-600" />
                    <h3 className="font-medium">വിളവെടുപ്പ് | Harvesting</h3>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• അരി (Rice - Virippu)</li>
                    <li>• കുരുമുളക് (Black Pepper)</li>
                    <li>• ഏലം (Cardamom)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Calendar */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                month: "ജനുവരി | January",
                activities: ["Rice harvesting", "Pepper harvesting", "Vegetable sowing"],
                priority: "high"
              },
              {
                month: "ഫെബ്രുവരി | February", 
                activities: ["Land preparation", "Coconut cultivation", "Spice harvesting"],
                priority: "medium"
              },
              {
                month: "മാർച്ച് | March",
                activities: ["Summer crop sowing", "Irrigation planning", "Soil testing"],
                priority: "high"
              },
              {
                month: "ഏപ്രിൽ | April",
                activities: ["Pre-monsoon activities", "Nursery preparation", "Equipment maintenance"],
                priority: "medium"
              },
              {
                month: "മെയ് | May",
                activities: ["Monsoon preparation", "Drainage cleaning", "Seed procurement"],
                priority: "high"
              },
              {
                month: "ജൂൺ | June",
                activities: ["Kharif sowing", "Paddy transplanting", "Pest monitoring"],
                priority: "high"
              }
            ].map((item, index) => (
              <Card key={index} className="shadow-soft border-border hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.month}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={item.priority === "high" ? "bg-red-50 text-red-700 border-red-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}
                    >
                      {item.priority === "high" ? "High Priority" : "Medium Priority"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Weather Alert */}
          <Card className="shadow-soft border-border border-l-4 border-l-orange-500 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-orange-900 mb-1">Weather Advisory</h3>
                  <p className="text-sm text-orange-800">
                    Light to moderate rainfall expected this week. Ideal time for transplanting rice seedlings. 
                    Avoid spraying pesticides during rainy periods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium mb-2">Customize Calendar</h3>
                <p className="text-sm text-muted-foreground mb-4">Set personalized reminders for your crops</p>
                <Button variant="nature" className="w-full">Setup Reminders</Button>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium mb-2">Download Calendar</h3>
                <p className="text-sm text-muted-foreground mb-4">Get printable version for offline use</p>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CropCalendar;