import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface WorkshopIdea {
  title: string;
  description: string;
}

export const WorkshopIdeas = () => {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState<WorkshopIdea[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateIdeas = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic to generate ideas.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setIdeas([]);

    // Simulate AI generation - in a real app, this would call the Gemini API
    setTimeout(() => {
      const generatedIdeas: WorkshopIdea[] = [
        {
          title: `Mastering ${topic}: A Confidence Journey`,
          description: `Build unshakeable confidence in ${topic.toLowerCase()} through practical exercises and peer support.`
        },
        {
          title: `${topic} & Self-Care Balance`,
          description: `Learn to excel in ${topic.toLowerCase()} while maintaining your mental health and well-being.`
        },
        {
          title: `Breaking Barriers in ${topic}`,
          description: `Overcome common obstacles and limiting beliefs that prevent success in ${topic.toLowerCase()}.`
        }
      ];

      setIdeas(generatedIdeas);
      setIsGenerating(false);
      
      toast({
        title: "Ideas Generated!",
        description: "Here are some creative workshop ideas for you.",
      });
    }, 3000);
  };

  return (
    <section id="workshop-ideas" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Need Workshop Ideas?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Tell us a topic you're interested in, and our AI will brainstorm some creative workshop ideas for you!
        </p>
        
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="e.g., career growth, self-care, confidence"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1"
            />
            <Button 
              variant="gemini"
              onClick={handleGenerateIdeas}
              disabled={isGenerating}
            >
              {isGenerating ? "..." : "✨ Generate"}
            </Button>
          </div>
        </div>

        {isGenerating && (
          <div className="flex justify-center mt-6">
            <div className="loader"></div>
          </div>
        )}

        {ideas.length > 0 && (
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            {ideas.map((idea, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-secondary">
                <h4 className="font-bold text-lg text-primary">{idea.title}</h4>
                <p className="text-muted-foreground mt-2">{idea.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};