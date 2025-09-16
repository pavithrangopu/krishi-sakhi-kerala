import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, User, Save } from "lucide-react";
import { Link } from "react-router-dom";

const EditProfile = () => {
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
            <h1 className="text-3xl font-bold text-foreground">പ്രൊഫൈൽ എഡിറ്റ് ചെയ്യുക | Edit Profile</h1>
            <p className="text-muted-foreground">Update your personal and farming information</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="malayalamName">മലയാളം പേര് | Malayalam Name</Label>
                    <Input id="malayalamName" defaultValue="രാജൻ കുമാർ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="englishName">English Name</Label>
                    <Input id="englishName" defaultValue="Rajan Kumar" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" type="email" defaultValue="rajan@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">വിലാസം | Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="കൊച്ചി, എറണാകുളം ജില്ല, കേരളം 682001"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience (Years)</Label>
                    <Input id="experience" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmerId">Farmer ID</Label>
                    <Input id="farmerId" defaultValue="KL-ER-2024-001234" disabled />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border mt-6">
            <CardHeader>
              <CardTitle>Land & Crop Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalLand">Total Land (Acres)</Label>
                  <Input id="totalLand" type="number" step="0.1" defaultValue="2.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="irrigatedLand">Irrigated Land (Acres)</Label>
                  <Input id="irrigatedLand" type="number" step="0.1" defaultValue="2.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soilType">Soil Type</Label>
                  <Input id="soilType" defaultValue="Alluvial" />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-medium">Main Crops</Label>
                <div className="space-y-3">
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder="Crop name" defaultValue="നെൽ | Rice" />
                    <Input placeholder="Area (acres)" type="number" step="0.1" defaultValue="1.5" />
                    <Input placeholder="Season" defaultValue="Kharif" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder="Crop name" defaultValue="തേങ്ങ | Coconut" />
                    <Input placeholder="Area (acres)" type="number" step="0.1" defaultValue="0.8" />
                    <Input placeholder="Season" defaultValue="Perennial" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder="Crop name" defaultValue="സുഗന്ധവ്യഞ്ജനങ്ങൾ | Spices" />
                    <Input placeholder="Area (acres)" type="number" step="0.1" defaultValue="0.2" />
                    <Input placeholder="Season" defaultValue="Year-round" />
                  </div>
                </div>
                <Button variant="outline" size="sm">Add Another Crop</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4 mt-8">
            <Link to="/dashboard">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button variant="nature" className="gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;