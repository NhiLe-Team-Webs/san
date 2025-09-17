import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onSubscribe: () => void;
}

export const CTASection = ({ onSubscribe }: CTASectionProps) => {
  return (
    <section id="join-us" className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold">Your Welcome Gift Awaits!</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive mailing list to get early access to workshops, 
            receive content made just for you, and truly become part of the sisterhood.
          </p>
          <div className="mt-8">
            <Button 
              variant="cta" 
              size="xl"
              onClick={onSubscribe}
              className="w-full sm:w-auto hover-lift"
            >
              Subscribe & Get My Gift
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};