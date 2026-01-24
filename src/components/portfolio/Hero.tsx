import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="heading-display text-5xl md:text-7xl mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            <span className="text-foreground">Ameya </span>
            <span className="text-gradient">Bhave</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            PhD Student in Computer Engineering at UT Dallas
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Researching <span className="text-foreground font-medium">Quantum Error Correction</span>, 
            <span className="text-foreground font-medium"> Quantum Algorithms</span>, and 
            <span className="text-foreground font-medium"> Machine Learning</span>. 
            Building the future of computing, one qubit at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <Button 
              size="lg" 
              className="bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-secondary/50"
              asChild
            >
              <a href="#publications">View Publications</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <a
              href="https://github.com/Ameya28Bhave"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors card-hover"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/ameya-bhave"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors card-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ameya.bhave@utdallas.edu"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors card-hover"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors card-hover"
              aria-label="Google Scholar"
            >
              <FileText size={22} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
