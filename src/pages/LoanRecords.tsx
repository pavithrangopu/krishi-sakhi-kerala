import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, CreditCard, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const LoanRecords = () => {
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
            <h1 className="text-3xl font-bold text-foreground">ലോൺ രേഖകൾ | Loan Records</h1>
            <p className="text-muted-foreground">Track your agricultural loans and repayment history</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Loan Summary */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Active Loans</h3>
                <p className="text-2xl font-bold text-primary">2</p>
                <p className="text-xs text-muted-foreground">Total amount: ₹3,50,000</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Next EMI Due</h3>
                <p className="text-2xl font-bold text-orange-600">₹28,500</p>
                <p className="text-xs text-muted-foreground">Due: Jan 15, 2025</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Credit Score</h3>
                <p className="text-2xl font-bold text-green-600">750</p>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Loans */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Active Loans
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">കിസാൻ ക്രെഡിറ്റ് കാർഡ് | Kisan Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Bank: State Bank of India</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Loan Amount</p>
                      <p className="font-medium">₹2,00,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Outstanding</p>
                      <p className="font-medium">₹1,45,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">4% per annum</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next EMI</p>
                      <p className="font-medium">₹15,500</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">സോളാർ പമ്പ് സെറ്റ് ലോൺ | Solar Pump Loan</h3>
                      <p className="text-sm text-muted-foreground">Bank: Kerala Gramin Bank</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Loan Amount</p>
                      <p className="font-medium">₹1,50,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Outstanding</p>
                      <p className="font-medium">₹87,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">6% per annum</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next EMI</p>
                      <p className="font-medium">₹13,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan History */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Loan History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/20">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">ട്രാക്ടർ ലോൺ | Tractor Loan</h3>
                      <p className="text-sm text-muted-foreground">Bank: Canara Bank</p>
                    </div>
                    <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Closed</Badge>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Loan Amount</p>
                      <p className="font-medium">₹8,50,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Repaid</p>
                      <p className="font-medium">₹8,50,000</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Closure Date</p>
                      <p className="font-medium">March 2024</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium text-green-600">✓ Fully Repaid</p>
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
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Apply for New Loan</h3>
                <p className="text-sm text-muted-foreground mb-4">Get pre-approved loans at competitive rates</p>
                <Button variant="nature" className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-medium mb-2">Payment History</h3>
                <p className="text-sm text-muted-foreground mb-4">View detailed payment records and receipts</p>
                <Button variant="outline" className="w-full">View History</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoanRecords;