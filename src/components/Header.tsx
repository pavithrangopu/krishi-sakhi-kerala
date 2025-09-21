import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
}

const Header = ({ title, subtitle, showBack = true }: HeaderProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && !isHome && (
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            )}
            <div>
              <h1 className="text-2xl font-bold">
                {title || t('app.title')}
              </h1>
              {subtitle && (
                <p className="text-primary-foreground/80">{subtitle}</p>
              )}
            </div>
          </div>
          
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Header;