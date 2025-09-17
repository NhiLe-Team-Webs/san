import { Youtube, Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/spice-nice-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 text-center">
        <img 
          src={logoImage} 
          alt="Spice & Nice Logo" 
          className="h-16 w-16 rounded-full mx-auto mb-4 border-2 border-primary"
        />
        <p className="font-bold text-xl">Spice & Nice</p>
        <p className="text-background/70 mt-2">
          A community for women to be heard, understood, and empowered.
        </p>
        
        <div className="flex justify-center items-center space-x-6 mt-6">
          <a 
            href="#" 
            className="text-background/70 hover:text-background transition-colors" 
            title="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          
          <a 
            href="https://facebook.com/@SpiceandNice.official/?mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/70 hover:text-background transition-colors" 
            title="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          
          <a 
            href="https://instagram.com/spiceandnice.official" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/70 hover:text-background transition-colors" 
            title="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          
          <a 
            href="https://tiktok.com/@spiceandnice.channel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/70 hover:text-background transition-colors" 
            title="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.63-1.16-6-3.22-1.35-2.03-1.55-4.5-1.1-6.72.31-1.55.9-3.03 1.8-4.32.95-1.34 2.22-2.41 3.65-3.16.13-.07.26-.15.4-.23.01-2.89.01-5.79-.01-8.68-.03-1.41.48-2.82 1.3-3.93 1.16-1.56 2.96-2.49 4.86-2.39Z"/>
            </svg>
          </a>
          
          <a 
            href="https://open.spotify.com/show/5LhV49wIesW78eKeIvrRDa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/70 hover:text-background transition-colors" 
            title="Spotify"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.322-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
            </svg>
          </a>
        </div>
        
        <p className="text-background/50 text-sm mt-8">
          &copy; 2025 Spice & Nice. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};