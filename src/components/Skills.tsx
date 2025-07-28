import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Database, 
  GitBranch,
  Palette,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "bg-gradient-primary",
      skills: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Vite", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      gradient: "bg-gradient-accent",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "PHP", level: "Intermediate" },
        { name: "Laravel", level: "Beginner" },
        { name: "Java", level: "Beginner" },
        { name: "Spring Boot", level: "Beginner" }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-6 w-6" />,
      gradient: "bg-tech-cyan",
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Beginner" }
      ]
    },
    {
      title: "Currently Learning",
      icon: <Globe className="h-6 w-6" />,
      gradient: "bg-tech-purple",
      skills: [
        { name: "TypeScript", level: "Learning" },
        { name: "Next.js", level: "Learning" },
        { name: "MongoDB", level: "Learning" },
        { name: "Docker", level: "Learning" },
        { name: "AWS", level: "Learning" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-tech-cyan/10 text-tech-cyan border-tech-cyan/20";
      case "Intermediate":
        return "bg-tech-blue/10 text-tech-blue border-tech-blue/20";
      case "Beginner":
        return "bg-tech-purple/10 text-tech-purple border-tech-purple/20";
      case "Learning":
        return "bg-tech-pink/10 text-tech-pink border-tech-pink/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Technologies and tools I'm working with and continuously learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${category.gradient} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className="bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      >
                        {skill.name}
                      </Badge>
                      <Badge 
                        variant="outline"
                        className={getLevelColor(skill.level)}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 shadow-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-accent-text">
                Learning Journey
              </h3>
              <p className="text-foreground/80 max-w-2xl">
                As a dedicated student at OSBT, I'm constantly expanding my skillset. 
                While I may not have professional experience yet, I'm committed to 
                mastering these technologies through projects, coursework, and personal learning.
              </p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-foreground/60">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-foreground/60">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">∞</div>
                  <div className="text-sm text-foreground/60">Passion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;