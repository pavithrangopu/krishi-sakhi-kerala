import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  User, 
  MapPin, 
  Sprout, 
  Droplets, 
  Calendar,
  FileText,
  Award,
  Edit
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import farmerImage from "@/assets/farmer-with-phone.jpg";
import cropsImage from "@/assets/kerala-crops.jpg";

const ProfileSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('profile.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('profile.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {t('profile.personalInfo')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <img
                    src={farmerImage}
                    alt="Farmer profile"
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20"
                  />
                  <h3 className="font-semibold text-lg">രാജൻ കുമാർ</h3>
                  <p className="text-sm text-muted-foreground">Rajan Kumar</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm">കൊച്ചി, കേരളം</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-sm">15 years experience</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Certified Organic
                    </Badge>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      KCC Member
                    </Badge>
                  </div>
                </div>

                <Link to="/edit-profile">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Edit className="w-4 h-4" />
                    {t('profile.editProfile')}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Land & Crop Details */}
            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-primary" />
                  {t('profile.landCrops')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-primary">2.5</p>
                    <p className="text-xs text-muted-foreground">{t('profile.acres')}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-secondary">3</p>
                    <p className="text-xs text-muted-foreground">{t('profile.crops')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t('profile.rice')}</span>
                    <span className="text-sm text-muted-foreground">1.5 acres</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t('profile.coconut')}</span>
                    <span className="text-sm text-muted-foreground">0.8 acres</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{t('profile.spices')}</span>
                    <span className="text-sm text-muted-foreground">0.2 acres</span>
                  </div>
                </div>

                <div className="pt-2">
                  <img
                    src={cropsImage}
                    alt="Kerala crops and spices"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Digital Records */}
            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t('profile.digitalRecords')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-accent/10">
                    <Droplets className="w-6 h-6 text-accent mx-auto mb-1" />
                    <p className="text-sm font-medium">{t('profile.irrigation')}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/10">
                    <Award className="w-6 h-6 text-secondary mx-auto mb-1" />
                    <p className="text-sm font-medium">{t('profile.certification')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/loan-records">
                    <Button variant="nature" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      {t('page.loanRecords')}
                    </Button>
                  </Link>
                  <Link to="/activity-log">
                    <Button variant="nature" size="sm" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t('page.activityLog')}
                    </Button>
                  </Link>
                  <Link to="/schemes-applied">
                    <Button variant="nature" size="sm" className="w-full justify-start">
                      <Award className="w-4 h-4 mr-2" />
                      {t('page.schemesApplied')}
                    </Button>
                  </Link>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Digital records help with loans & government schemes
                  </p>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    ✓ Verified Profile
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;