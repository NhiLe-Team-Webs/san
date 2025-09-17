import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinCommunity: () => void;
}

export const HeroSection = ({ onJoinCommunity }: HeroSectionProps) => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary font-semibold tracking-wider uppercase">
          WELCOME TO THE SISTERHOOD
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          You Found Your{" "}
          <span className="gradient-text">
            Tribe.
          </span>
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We saw you on YouTube, TikTok, and Instagram. We're so glad you're here. 
          This is more than a channel; it's a community where you are heard, 
          understood, and empowered.
        </p>
        
        <div className="mt-10">
          <Button 
            variant="cta" 
            size="xl"
            onClick={onJoinCommunity}
            className="hover-lift"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};