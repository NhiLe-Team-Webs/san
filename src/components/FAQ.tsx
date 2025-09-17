import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How can I join the private community group?",
      answer: "Once you subscribe to our mailing list, you'll receive a welcome email with an exclusive link to join our private Facebook group and Discord server."
    },
    {
      question: "Are the workshops free?",
      answer: "We offer a mix of free and paid workshops. All details are announced first to our mailing list subscribers, who often get early-bird discounts!"
    },
    {
      question: "When is the next livestream?",
      answer: "Our livestream schedule is sent out every Monday via our newsletter. Subscribe so you don't miss it!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
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