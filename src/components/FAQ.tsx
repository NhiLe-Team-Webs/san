import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";

export const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faqJoinCommunity'),
      answer: t('faqJoinCommunityAnswer')
    },
    {
      question: t('faqWorkshopsFree'),
      answer: t('faqWorkshopsFreeAnswer')
    },
    {
      question: t('faqNextLivestream'),
      answer: t('faqNextLivestreamAnswer')
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t('frequentlyAskedQuestions')}</h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-border rounded-lg shadow-sm px-4"
            >
              <AccordionTrigger className="font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};