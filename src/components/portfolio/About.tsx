import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "PhD in Computer Engineering — UT Dallas (Current)",
        "MS in Computer Science — UMBC (2024)",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "Graduate Research Assistant — UT Dallas",
        "Application Development Analyst — Accenture (3 years)",
      ],
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Qiskit Global Summer School 2025",
        "Microsoft Azure AI Engineer Associate",
        "IBM Quantum Challenge 2024",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-soft">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between classical computing and quantum technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a PhD student at The University of Texas at Dallas, working at the intersection of 
              <span className="text-foreground font-medium"> quantum computing</span> and 
              <span className="text-foreground font-medium"> machine learning</span>. My research focuses 
              on developing novel approaches to Quantum Error Correction and designing efficient quantum algorithms.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Before diving into academia, I spent over three years at Accenture as an Application Development 
              Analyst, where I honed my skills in building scalable software solutions. This industry experience 
              gives me a unique perspective on translating theoretical advances into practical applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not wrestling with qubits, you'll find me exploring full-stack development, 
              contributing to open-source projects, or diving into the latest advances in AI.
            </p>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-card rounded-xl p-6 shadow-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-warm text-primary-foreground">
                    <highlight.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                    <ul className="space-y-1">
                      {highlight.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
