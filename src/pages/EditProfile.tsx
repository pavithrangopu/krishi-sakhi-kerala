import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Save } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const EditProfile = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-nature">
      <Header title={t('editProfile.title')} subtitle={t('editProfile.subtitle')} />
      
      <div className="container mx-auto px-4 py-8">        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-soft border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                {t('editProfile.personalInfo')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="malayalamName">{t('editProfile.malayalamName')}</Label>
                    <Input id="malayalamName" defaultValue="രാജൻ കുമാർ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="englishName">{t('editProfile.englishName')}</Label>
                    <Input id="englishName" defaultValue="Rajan Kumar" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('editProfile.phoneNumber')}</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('editProfile.email')}</Label>
                    <Input id="email" type="email" defaultValue="rajan@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">{t('editProfile.address')}</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="കൊച്ചി, എറണാകുളം ജില്ല, കേരളം 682001"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">{t('editProfile.experience')}</Label>
                    <Input id="experience" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmerId">{t('editProfile.farmerId')}</Label>
                    <Input id="farmerId" defaultValue="KL-ER-2024-001234" disabled />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-border mt-6">
            <CardHeader>
              <CardTitle>{t('editProfile.landCropDetails')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalLand">{t('editProfile.totalLand')}</Label>
                  <Input id="totalLand" type="number" step="0.1" defaultValue="2.5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="irrigatedLand">{t('editProfile.irrigatedLand')}</Label>
                  <Input id="irrigatedLand" type="number" step="0.1" defaultValue="2.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="soilType">{t('editProfile.soilType')}</Label>
                  <Input id="soilType" defaultValue="Alluvial" />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-medium">{t('editProfile.mainCrops')}</Label>
                <div className="space-y-3">
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder={t('editProfile.cropName')} defaultValue={t('profile.rice')} />
                    <Input placeholder={t('editProfile.area')} type="number" step="0.1" defaultValue="1.5" />
                    <Input placeholder={t('editProfile.season')} defaultValue="Kharif" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder={t('editProfile.cropName')} defaultValue={t('profile.coconut')} />
                    <Input placeholder={t('editProfile.area')} type="number" step="0.1" defaultValue="0.8" />
                    <Input placeholder={t('editProfile.season')} defaultValue="Perennial" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 p-4 border rounded-lg">
                    <Input placeholder={t('editProfile.cropName')} defaultValue={t('profile.spices')} />
                    <Input placeholder={t('editProfile.area')} type="number" step="0.1" defaultValue="0.2" />
                    <Input placeholder={t('editProfile.season')} defaultValue="Year-round" />
                  </div>
                </div>
                <Button variant="outline" size="sm">{t('editProfile.addCrop')}</Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4 mt-8">
            <Link to="/dashboard">
              <Button variant="outline">{t('editProfile.cancel')}</Button>
            </Link>
            <Button variant="nature" className="gap-2">
              <Save className="w-4 h-4" />
              {t('editProfile.saveChanges')}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;