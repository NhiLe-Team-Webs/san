import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface HeroSectionProps {
  onJoinCommunity: () => void;
}

export const HeroSection = ({ onJoinCommunity }: HeroSectionProps) => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary font-semibold tracking-wider uppercase">
          {t('welcomeToSisterhood')}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          {t('youFoundYourTribe')}{" "}
          <span className="gradient-text">
            {t('tribe')}
          </span>
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('heroDescription')}
        </p>
        
        <div className="mt-10">
          <Button 
            variant="cta" 
            size="xl"
            onClick={onJoinCommunity}
            className="hover-lift"
          >
            {t('joinOurCommunity')}
          </Button>
        </div>
      </div>
    </section>
  );
};