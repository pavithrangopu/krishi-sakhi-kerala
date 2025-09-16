import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Activity, Calendar, Sprout, Droplets, Bug, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ActivityLog = () => {
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
            <h1 className="text-3xl font-bold text-foreground">പ്രവർത്തന രേഖ | Activity Log</h1>
            <p className="text-muted-foreground">Track all your farming activities and operations</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Activity Summary */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">This Month</h3>
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground">Activities logged</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Last Activity</h3>
                <p className="text-lg font-bold text-secondary">Irrigation</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Crops Monitored</h3>
                <p className="text-2xl font-bold text-accent">3</p>
                <p className="text-xs text-muted-foreground">Rice, Coconut, Spices</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Completion Rate</h3>
                <p className="text-2xl font-bold text-green-600">92%</p>
                <p className="text-xs text-muted-foreground">Planned activities</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    date: "Dec 14, 2024",
                    activity: "ജലസേചനം | Irrigation",
                    crop: "Rice Field A",
                    icon: Droplets,
                    status: "Completed",
                    details: "Applied 2 hours of drip irrigation",
                    color: "blue"
                  },
                  {
                    date: "Dec 12, 2024",
                    activity: "കീടനാശിനി | Pest Control",
                    crop: "Coconut Grove",
                    icon: Bug,
                    status: "Completed",
                    details: "Applied organic neem spray for red palm weevil",
                    color: "red"
                  },
                  {
                    date: "Dec 10, 2024",
                    activity: "വളം പ്രയോഗിക്കൽ | Fertilizer Application",
                    crop: "Spice Garden",
                    icon: Sprout,
                    status: "Completed",
                    details: "Applied organic compost 50kg",
                    color: "green"
                  },
                  {
                    date: "Dec 8, 2024",
                    activity: "വിത്ത് വിതയ്ക്കൽ | Sowing",
                    crop: "Rice Field B",
                    icon: Sprout,
                    status: "Completed",
                    details: "Sowed Jyothi variety paddy seeds",
                    color: "green"
                  },
                  {
                    date: "Dec 6, 2024",
                    activity: "വിള നിരീക്ഷണം | Crop Monitoring",
                    crop: "All Fields",
                    icon: TrendingUp,
                    status: "Completed",
                    details: "Weekly health assessment and growth tracking",
                    color: "purple"
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

          {/* Upcoming Activities */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Irrigation - Rice Field A</p>
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
        </div>
      </div>
    </main>
  );
};

export default ActivityLog;