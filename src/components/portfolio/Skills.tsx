import { Code2, Database, Cloud, Cpu, Layers, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "Rust", "C", "SQL", "JavaScript", "TypeScript"],
  },
  {
    icon: Cpu,
    title: "Quantum & QEC",
    skills: [
      "Quantum Error Correction (QEC)",
      "QLDPC (BB, HGP)",
      "Decoding: BP, BP+OSD, ML-based",
      "Erasure-aware fault tolerance",
      "Circuit-to-decoder workflows",
    ],
  },
  {
    icon: Layers,
    title: "ML & Scientific Computing",
    skills: ["PyTorch", "PyTorch Geometric", "NumPy", "SciPy", "Matplotlib"],
  },
  {
    icon: Terminal,
    title: "Quantum Tooling",
    skills: ["Qiskit", "Stim", "sinter", "ZX-calculus (basics)"],
  },
  {
    icon: Cloud,
    title: "Engineering & DevOps",
    skills: ["Git", "Linux", "Docker", "GitHub Actions (CI/CD)", "Kubernetes (basics)"],
  },
  {
    icon: Database,
    title: "Data & Storage",
    skills: ["PostgreSQL", "MongoDB", "Oracle (enterprise)", "Vector DBs (Pinecone)"],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From quantum circuits to full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 shadow-card card-hover border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-warm text-primary-foreground">
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
