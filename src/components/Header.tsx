import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import logoImage from "@/assets/spice-nice-logo.jpg";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Spice & Nice Logo" 
            className="h-12 w-12 rounded-full border-2 border-primary"
          />
          <span className="font-bold text-xl text-foreground">Spice & Nice</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            {t('services')}
          </a>
          <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
            {t('community')}
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
            {t('faq')}
          </a>
        </nav>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={toggleLanguage}
          className="rounded-full"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language === 'en' ? 'VI' : 'EN'}
        </Button>
      </div>
    </header>
  );
};