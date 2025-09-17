import { MessageSquare, HeartHandshake, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: MessageSquare,
      title: t('beHeard'),
      description: t('beHeardDescription'),
      bgColor: "bg-secondary",
      iconColor: "text-primary"
    },
    {
      icon: HeartHandshake,
      title: t('beUnderstood'), 
      description: t('beUnderstoodDescription'),
      bgColor: "bg-red-50",
      iconColor: "text-accent"
    },
    {
      icon: Sparkles,
      title: t('beEmpowered'),
      description: t('beEmpoweredDescription'),
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t('whatYouGetHere')}</h2>
          <p className="mt-4 text-muted-foreground">
            {t('safeSpaceDescription')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`${service.bgColor} p-8 rounded-2xl text-center`}>
                <div className="inline-block bg-white p-4 rounded-full shadow-md mb-4">
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};