import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles, Star, Zap, Trophy, GraduationCap, Briefcase, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "/lovable-uploads/4a5a130e-84f6-44fb-a610-2c9aea1c6ba1.png";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-hero-bg via-background to-muted/20"
    >
      {/* Clean Modern Background */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      {/* Refined Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Minimal Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-primary/6 to-accent/4 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-secondary/4 to-primary/5 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Clean Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:gap-20 gap-16 items-center">
            
            {/* Left Side - Profile & Intro */}
            <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
               {/* Clean Modern Profile Photo */}
               <div className="relative mx-auto lg:mx-0 w-fit">
                 <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
                   {/* Elegant Profile Ring */}
                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full p-4 shadow-elegant">
                     <div className="w-full h-full bg-background rounded-full p-3 shadow-inner">
                       <div className="relative w-full h-full rounded-full overflow-hidden group">
                         <img 
                           src={profilePhoto}
                           alt="Badr Moutaouakil - Profile" 
                           className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Clean Achievement Badges */}
                   <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                     <GraduationCap className="w-8 h-8 text-white" />
                   </div>
                   
                   <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                     <Trophy className="w-7 h-7 text-white" />
                   </div>
                 </div>
               </div>

               {/* Modern Status Badge */}
               <div className="text-center lg:text-left">
                 <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-soft hover:shadow-card transition-all duration-300">
                   <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                   <span className="text-sm font-medium text-foreground">{t('hero.status')}</span>
                   <Heart className="w-4 h-4 text-primary" />
                 </div>
               </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
               {/* Enhanced Greeting */}
               <div className="space-y-6">
                 <div className="group inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-accent/20 via-secondary/15 to-primary/20 rounded-full backdrop-blur-sm shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-105">
                   <Sparkles className="w-6 h-6 text-accent animate-spin group-hover:text-primary transition-colors duration-500" style={{ animationDuration: '3s' }} />
                   <span className="text-sm font-bold tracking-wider text-accent group-hover:text-primary transition-colors duration-300">{t('hero.greeting')}</span>
                   <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                 </div>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-foreground">{t('hero.name.first')}</span>
                  <span className="block gradient-text">{t('hero.name.last')}</span>
                </h1>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground leading-tight">
                  {t('hero.title')}
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex justify-center lg:justify-start items-center gap-6 py-6">
                <div className="group relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-soft cursor-pointer">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
                <div className="group relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-soft cursor-pointer">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
                <div className="group relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-soft cursor-pointer">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  variant="premium" 
                  size="xl"
                  onClick={() => scrollToSection('projects')}
                  className="group shadow-glow hover:shadow-elegant transform hover:scale-105"
                >
                  <Star className="w-6 h-6 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  {t('hero.cta.work')}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm shadow-soft hover:shadow-elegant"
                >
                  <Sparkles className="w-6 h-6 mr-2 group-hover:scale-125 transition-transform duration-300" />
                  {t('hero.cta.connect')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground group cursor-pointer" onClick={() => scrollToSection('about')}>
            <span className="text-xs font-medium tracking-widest uppercase group-hover:text-primary transition-colors duration-300">{t('hero.scroll')}</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;