import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const QuestionSection = () => {
  const [question, setQuestion] = useState("");
  const [isRefining, setIsRefining] = useState(false);
  const { toast } = useToast();

  const handleSubmitQuestion = () => {
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question first.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: "Thank you! Your question has been submitted to the hosts.",
    });
    setQuestion("");
  };

  const handleRefineWithAI = async () => {
    if (!question.trim()) {
      toast({
        title: "Error", 
        description: "Please enter a question first.",
        variant: "destructive",
      });
      return;
    }

    setIsRefining(true);
    
    // Simulate AI refinement - in a real app, this would call an API
    setTimeout(() => {
      const refinedQuestion = `How can I effectively ${question.toLowerCase().replace(/[?.]$/, "")} while maintaining my authentic self and building meaningful connections with other women in my community?`;
      setQuestion(refinedQuestion);
      setIsRefining(false);
      
      toast({
        title: "Question Refined!",
        description: "Your question has been enhanced with AI assistance.",
      });
    }, 2000);
  };

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Got a Question for the Hosts?</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Submit your questions for our next livestream or podcast episode. We love hearing from you!
        </p>
        
        <div className="mt-8 max-w-xl mx-auto">
          <Textarea
            placeholder="Type your question here..."
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full"
          />
          
          {isRefining && (
            <div className="flex justify-center mt-4">
              <div className="loader"></div>
            </div>
          )}
          
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              onClick={handleSubmitQuestion}
              className="w-full sm:w-auto bg-foreground hover:bg-foreground/90"
            >
              Submit Question
            </Button>
            
            <Button 
              variant="gemini"
              size="lg"
              onClick={handleRefineWithAI}
              disabled={isRefining}
              className="w-full sm:w-auto"
            >
              {isRefining ? "Refining..." : "✨ Refine with AI"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};