import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Calendar, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Subsidies = () => {
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
            <h1 className="text-3xl font-bold text-foreground">സബ്സിഡി സ്കീമുകൾ | Government Subsidies</h1>
            <p className="text-muted-foreground">Available government schemes and subsidies for Kerala farmers</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Active Schemes */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Active Subsidy Schemes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">കിസാൻ സമ്മാൻ നിധി | PM-KISAN</h3>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">₹6,000 per year direct income support</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>Next installment: Dec 2024</span>
                    </div>
                    <Button size="sm" variant="nature">Apply Now</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">കർഷക ക്രെഡിറ്റ് കാർഡ് | Kisan Credit Card</h3>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      <Clock className="w-3 h-3 mr-1" />
                      Pending
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Crop loans at 4% interest rate</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-accent" />
                      <span>Documents submitted</span>
                    </div>
                    <Button size="sm" variant="outline">Track Status</Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">മണ്ണിന്റെ ആരോഗ്യ കാർഡ് | Soil Health Card</h3>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Action Needed
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Free soil testing and recommendations</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>Sample collection due</span>
                    </div>
                    <Button size="sm" variant="secondary">Schedule Test</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Schemes */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                New Schemes Available
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">ജൈവകൃഷി പ്രോത്സാഹനം | Organic Farming</h3>
                  <p className="text-sm text-muted-foreground mb-3">₹50,000 subsidy for organic certification</p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Eligibility:</strong> 2+ acres, no chemical use for 3 years</p>
                    <p className="text-xs"><strong>Deadline:</strong> March 31, 2025</p>
                  </div>
                  <Button size="sm" variant="nature" className="w-full mt-3">Learn More</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">സോളാർ പവർ സബ്സിഡി | Solar Power</h3>
                  <p className="text-sm text-muted-foreground mb-3">40% subsidy on solar irrigation systems</p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Eligibility:</strong> All farmers with electricity connection</p>
                    <p className="text-xs"><strong>Deadline:</strong> June 30, 2025</p>
                  </div>
                  <Button size="sm" variant="nature" className="w-full mt-3">Learn More</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">സൂക്ഷ്മ ജലസേചനം | Micro Irrigation</h3>
                  <p className="text-sm text-muted-foreground mb-3">90% subsidy for drip irrigation systems</p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Eligibility:</strong> Small and marginal farmers</p>
                    <p className="text-xs"><strong>Deadline:</strong> December 31, 2024</p>
                  </div>
                  <Button size="sm" variant="nature" className="w-full mt-3">Learn More</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">കിടാ ധന സബ്സിഡി | Compost Subsidy</h3>
                  <p className="text-sm text-muted-foreground mb-3">₹10,000 for vermi-compost units</p>
                  <div className="space-y-2">
                    <p className="text-xs"><strong>Eligibility:</strong> Women farmers groups priority</p>
                    <p className="text-xs"><strong>Deadline:</strong> January 15, 2025</p>
                  </div>
                  <Button size="sm" variant="nature" className="w-full mt-3">Learn More</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="shadow-soft border-border">
            <CardContent className="p-6 text-center">
              <h3 className="font-medium mb-2">Need Help with Applications?</h3>
              <p className="text-sm text-muted-foreground mb-4">Contact our support team for assistance with subsidy applications</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="nature">Call Support</Button>
                <Link to="/voice-chat">
                  <Button variant="outline">Voice Assistant Help</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Subsidies;