import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Clock, CheckCircle, XCircle, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SchemesApplied = () => {
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
            <h1 className="text-3xl font-bold text-foreground">അപ്ലിക്കേഷൻ സ്റ്റാറ്റസ് | Schemes Applied</h1>
            <p className="text-muted-foreground">Track status of your government scheme applications</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Application Summary */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Total Applied</h3>
                <p className="text-2xl font-bold text-primary">7</p>
                <p className="text-xs text-muted-foreground">Applications</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Approved</h3>
                <p className="text-2xl font-bold text-green-600">4</p>
                <p className="text-xs text-muted-foreground">₹2,15,000 total</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Pending</h3>
                <p className="text-2xl font-bold text-yellow-600">2</p>
                <p className="text-xs text-muted-foreground">Under review</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Success Rate</h3>
                <p className="text-2xl font-bold text-accent">80%</p>
                <p className="text-xs text-muted-foreground">Approval rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Applications */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Current Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">മണ്ണിന്റെ ആരോഗ്യ കാർഡ് | Soil Health Card</h3>
                      <p className="text-sm text-muted-foreground">Application ID: SHC-2024-001234</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Clock className="w-3 h-3 mr-1" />
                        Processing
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Applied Date</p>
                      <p className="font-medium">Nov 28, 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected Completion</p>
                      <p className="font-medium">Dec 20, 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium text-yellow-600">Document Verification</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">സൂക്ഷ്മ ജലസേചനം | Micro Irrigation Subsidy</h3>
                      <p className="text-sm text-muted-foreground">Application ID: MIS-2024-005678</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                        <FileText className="w-3 h-3 mr-1" />
                        Field Inspection
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Applied Date</p>
                      <p className="font-medium">Dec 5, 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Subsidy Amount</p>
                      <p className="font-medium">₹67,500 (90%)</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Inspection Date</p>
                      <p className="font-medium text-blue-600">Dec 18, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Approved Applications */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Approved Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">കിസാൻ സമ്മാൻ നിധി | PM-KISAN</h3>
                      <p className="text-sm text-muted-foreground">Application ID: PMK-2024-112233</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Approved
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Approval Date</p>
                      <p className="font-medium">Oct 15, 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Benefit Amount</p>
                      <p className="font-medium">₹6,000/year</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Payment Status</p>
                      <p className="font-medium text-green-600">₹4,000 Received</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next Installment</p>
                      <p className="font-medium">Dec 31, 2024</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">കിസാൻ ക്രെഡിറ്റ് കാർഡ് | Kisan Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Application ID: KCC-2024-445566</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Active
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Approval Date</p>
                      <p className="font-medium">Sep 20, 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Credit Limit</p>
                      <p className="font-medium">₹2,00,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Utilized</p>
                      <p className="font-medium">₹1,45,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">4% per annum</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Apply for New Scheme</h3>
                <p className="text-sm text-muted-foreground mb-4">Browse available government schemes and apply</p>
                <Link to="/subsidies">
                  <Button variant="nature" className="w-full">Browse Schemes</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium mb-2">Download Reports</h3>
                <p className="text-sm text-muted-foreground mb-4">Get detailed application and payment reports</p>
                <Button variant="outline" className="w-full">Download PDF</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SchemesApplied;