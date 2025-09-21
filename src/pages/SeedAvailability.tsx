import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sprout, MapPin, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const SeedAvailability = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background">
      <Header title={t('page.seedAvailability')} subtitle="Real-time seed stock information" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Available Seeds */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                Available Seeds Near You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">നെൽ വിത്ത് | Rice Seeds</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Premium quality paddy seeds</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>കൊച്ചി കൃഷി ഓഫീസ് | Kochi Agri Office</span>
                  </div>
                  <p className="text-sm font-medium mt-2">₹45/kg</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">തേങ്ങാ തൈകൾ | Coconut Saplings</h3>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      Limited
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Hybrid coconut saplings</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>എറണാകുളം നഴ്സറി | Ernakulam Nursery</span>
                  </div>
                  <p className="text-sm font-medium mt-2">₹25/sapling</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">വാഴ തൈകൾ | Banana Plants</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Nendran variety banana plants</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>അലുവ ഹോർട്ടികൾച്ചർ | Aluva Horticulture</span>
                  </div>
                  <p className="text-sm font-medium mt-2">₹15/plant</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">സുഗന്ധവ്യഞ്ജന വിത്തുകൾ | Spice Seeds</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Cardamom, pepper, ginger</p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>ഇടുക്കി സ്പൈസ് ബോർഡ് | Idukki Spice Board</span>
                  </div>
                  <p className="text-sm font-medium mt-2">₹200-500/kg</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Contact for Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="nature" className="h-auto p-4 justify-start">
                  <div className="text-left">
                    <p className="font-medium">കൃഷി ഓഫീസ് | Agriculture Office</p>
                    <p className="text-sm text-muted-foreground">+91 484 123 4567</p>
                  </div>
                </Button>
                <Button variant="nature" className="h-auto p-4 justify-start">
                  <div className="text-left">
                    <p className="font-medium">കർഷക സേവന കേന്ദ്രം | Farmer Service Center</p>
                    <p className="text-sm text-muted-foreground">+91 484 765 4321</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon Message */}
          <Card className="text-center py-6 bg-card/80 backdrop-blur-sm">
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{t('common.comingSoon')}</h3>
              <p className="text-muted-foreground">
                Advanced features for seed booking and delivery tracking {t('common.placeholder')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default SeedAvailability;