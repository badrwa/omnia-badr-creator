import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, User, Target } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Get to know more about who I am and what drives my passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar and Quick Info */}
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-8">
              <img
                src={avatarPlaceholder}
                alt="Badr Moutaouakil"
                className="w-64 h-64 rounded-2xl object-cover shadow-card mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-5 w-5 text-tech-blue" />
                <span className="text-foreground/80">Had Soualem, Morocco</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <GraduationCap className="h-5 w-5 text-tech-cyan" />
                <span className="text-foreground/80">Bachelor's in Full Stack Development</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Target className="h-5 w-5 text-tech-purple" />
                <span className="text-foreground/80">Seeking First Developer Role</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Currently pursuing my Bachelor's degree in Full Stack Development at{' '}
                  <span className="gradient-accent-text font-semibold">
                    OMNIA School of Business and Technology (OSBT)
                  </span>
                  . Learning cutting-edge technologies and best practices in modern web development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">My Journey</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  As a passionate full-stack developer student, I'm dedicated to mastering both frontend and backend technologies. 
                  I love solving complex problems and creating intuitive user experiences that make a difference.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  My goal is to land my first developer role where I can contribute to meaningful projects 
                  while continuing to grow and learn in this ever-evolving field.
                </p>
              </CardContent>
            </Card>

            {/* Current Status */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-tech-blue/10 text-tech-blue border-tech-blue/20">
                🎓 Student
              </Badge>
              <Badge variant="secondary" className="bg-tech-cyan/10 text-tech-cyan border-tech-cyan/20">
                🚀 Job Seeker
              </Badge>
              <Badge variant="secondary" className="bg-tech-purple/10 text-tech-purple border-tech-purple/20">
                💻 Full Stack
              </Badge>
              <Badge variant="secondary" className="bg-tech-pink/10 text-tech-pink border-tech-pink/20">
                🇲🇦 Morocco
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;