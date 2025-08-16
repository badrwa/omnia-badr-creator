import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VersionInfo from "@/components/VersionInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-bg relative overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-secondary/4 to-primary/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Minimal Geometric Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-2 h-2 bg-secondary/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <VersionInfo />
    </div>
  );
};

export default Index;
