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
      {/* Bold Industrial Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/8 rounded-none blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/8 rounded-none blur-2xl"></div>
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
