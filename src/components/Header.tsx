import { Button } from "@/components/ui/button";
import logoImage from "@/assets/spice-nice-logo.jpg";

export const Header = () => {
  const handleGoogleLogin = () => {
    alert("Redirecting to Google Login...");
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
            Services
          </a>
          <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
            Community
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        
        <Button 
          variant="google" 
          size="sm"
          onClick={handleGoogleLogin}
          className="rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.94 11c-.1-2.5-1-4.8-2.7-6.5S14.6 2.1 12 2C7 2 3 6 3 11s4 9 9 9c2.4 0 4.7-.9 6.4-2.6.2-.2.2-.5.1-.7l-1-1.6c-.1-.2-.4-.2-.6-.1-1.5.9-3.2 1.4-5 1.4-3.9 0-7-3.1-7-7s3.1-7 7-7c2.1 0 4 1 5.3 2.6l-1.9 1.9c-.3.3-.1.8.4.8H21c.6 0 1-.4 1-1v-5.8c0-.5-.5-.7-.8-.4l-1.8 1.8z"/>
          </svg>
          Login with Google
        </Button>
      </div>
    </header>
  );
};