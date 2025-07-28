import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">Badr.dev</div>
            <p className="text-sm text-foreground/60">
              © 2024 Badr Moutaouakil. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-tech-pink fill-current animate-pulse" />
            <span>using React + Vite</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <button 
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground/60 hover:text-tech-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground/60 hover:text-tech-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground/60 hover:text-tech-blue transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 pt-8 border-t border-border/30">
          <p className="text-xs text-foreground/50">
            Full Stack Development Student at OMNIA School of Business and Technology (OSBT) • Had Soualem, Morocco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;