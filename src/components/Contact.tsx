import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "badr.moutaouakil@gmail.com",
      href: "mailto:badr.moutaouakil@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+212 6XX XXX XXX",
      href: "tel:+212600000000",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Had Soualem, Morocco",
      href: "https://maps.google.com/?q=Had+Soualem,+Morocco",
      gradient: "bg-tech-cyan"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/badrmoutaouakil",
      color: "hover:bg-tech-blue/20"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/badr-moutaouakil",
      color: "hover:bg-tech-cyan/20"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:badr.moutaouakil@gmail.com",
      color: "hover:bg-tech-purple/20"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 gradient-accent-text">
                Let's Connect
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                I'm currently seeking my first role as a full-stack developer. 
                Whether you have a job opportunity, want to collaborate on a project, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <Card 
                  key={contact.label}
                  className="bg-card/30 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${contact.gradient} rounded-lg flex items-center justify-center text-white`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">{contact.label}</div>
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-tech-blue transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Find me online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card/50 backdrop-blur-sm ${social.color} transition-all duration-300 hover:scale-110 glow-button`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 backdrop-blur-sm border-border/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background/50 backdrop-blur-sm border-border/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="bg-background/50 backdrop-blur-sm border-border/50 resize-none"
                />
              </div>
              
              <Button variant="gradient" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;