import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface CTASectionProps {
  onSubscribe: () => void;
}

export const CTASection = ({ onSubscribe }: CTASectionProps) => {
  const { t } = useLanguage();
  return (
    <section id="join-us" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold">{t('welcomeGiftAwaits')}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t('ctaGiftDescription')}
          </p>
          <div className="mt-8">
            <Button 
              variant="cta" 
              size="xl"
              onClick={onSubscribe}
              className="w-full sm:w-auto hover-lift"
            >
              {t('subscribeAndGetGift')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};