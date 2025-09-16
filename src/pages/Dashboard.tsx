import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import FarmerDashboard from "@/components/FarmerDashboard";
import ProfileSection from "@/components/ProfileSection";

const Dashboard = () => {
  return (
    <main className="min-h-screen">
      {/* Header with back button */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">ഡാഷ്‌ബോർഡ് | Dashboard</h1>
              <p className="text-primary-foreground/80">Complete farming management system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <FarmerDashboard />
      <ProfileSection />

      {/* Quick Actions */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/market-prices">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Market Prices</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/crop-calendar">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Calendar className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-medium">Crop Calendar</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/subsidies">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-medium">Subsidies</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/community">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Community</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;