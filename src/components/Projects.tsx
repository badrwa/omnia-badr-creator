import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Plus } from "lucide-react";

const Projects = () => {
  // Placeholder projects - ready for when Badr builds real ones
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Laravel. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      status: "Coming Soon",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using the MERN stack with Socket.io for live collaboration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      status: "In Development",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio! A responsive, modern portfolio website built with React, Vite, and Tailwind CSS to showcase my skills and projects.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      status: "Completed",
      gradient: "bg-tech-cyan",
      isLive: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-tech-cyan/10 text-tech-cyan border-tech-cyan/20";
      case "In Development":
        return "bg-tech-blue/10 text-tech-blue border-tech-blue/20";
      case "Coming Soon":
        return "bg-tech-purple/10 text-tech-purple border-tech-purple/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Showcase of my work and upcoming projects as I build my development portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-12 h-12 ${project.gradient} rounded-lg flex items-center justify-center mb-3`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <Badge 
                    variant="outline"
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="bg-muted/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    disabled={!project.isLive}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    disabled={!project.isLive}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 shadow-card inline-block">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 gradient-accent-text">
                More Projects Coming Soon!
              </h3>
              <p className="text-foreground/80 max-w-md mx-auto mb-6">
                I'm actively working on building my portfolio with exciting projects. 
                Each project helps me learn new technologies and improve my skills.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="gradient">
                  <Github className="mr-2 h-4 w-4" />
                  Follow My Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;