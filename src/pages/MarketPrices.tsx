import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const MarketPrices = () => {
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
            <h1 className="text-3xl font-bold text-foreground">വിപണി വില | Market Prices</h1>
            <p className="text-muted-foreground">Today's agricultural commodity prices in Kerala</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Price Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Today's High</h3>
                <p className="text-2xl font-bold text-green-600">₹2,850</p>
                <p className="text-xs text-muted-foreground">Cardamom (per kg)</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Most Traded</h3>
                <p className="text-2xl font-bold text-primary">Rice</p>
                <p className="text-xs text-muted-foreground">Volume: 145 tons</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Best Margin</h3>
                <p className="text-2xl font-bold text-accent">Pepper</p>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Current Prices */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Current Market Prices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "നെൽ | Rice", price: "₹28/kg", change: "+2%", trend: "up", location: "കൊച്ചി മാർക്കറ്റ്" },
                  { name: "തേങ്ങ | Coconut", price: "₹35/piece", change: "0%", trend: "stable", location: "എറണാകുളം" },
                  { name: "കുരുമുളക് | Pepper", price: "₹650/kg", change: "+12%", trend: "up", location: "ഇടുക്കി" },
                  { name: "ഏലം | Cardamom", price: "₹2,850/kg", change: "+8%", trend: "up", location: "തേക്കടി" },
                  { name: "വാഴപ്പഴം | Banana", price: "₹45/kg", change: "-3%", trend: "down", location: "പാലക്കാട്" },
                  { name: "അരി | Processed Rice", price: "₹65/kg", change: "+1%", trend: "up", location: "തിരുവനന്തപുരം" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{item.price}</p>
                      <div className="flex items-center gap-1">
                        {item.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : item.trend === "down" ? (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-500" />
                        )}
                        <Badge 
                          variant="outline" 
                          className={`
                            ${item.trend === "up" ? "text-green-700 bg-green-50 border-green-200" : ""}
                            ${item.trend === "down" ? "text-red-700 bg-red-50 border-red-200" : ""}
                            ${item.trend === "stable" ? "text-gray-700 bg-gray-50 border-gray-200" : ""}
                          `}
                        >
                          {item.change}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium mb-2">Set Price Alerts</h3>
                <p className="text-sm text-muted-foreground mb-4">Get notified when prices reach your target</p>
                <Button variant="nature" className="w-full">Setup Alerts</Button>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium mb-2">Price History</h3>
                <p className="text-sm text-muted-foreground mb-4">View detailed price trends and analysis</p>
                <Button variant="outline" className="w-full">View Trends</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MarketPrices;