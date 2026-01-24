import { Github, ExternalLink, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Quantum HHL Simulator",
    description:
      "Simulations of the HHL algorithm using Qiskit for solving linear systems of equations on quantum computers.",
    tech: ["Python", "Qiskit", "NumPy"],
    github: "https://github.com/Ameya28Bhave/Quantum_HHL_SIM_EM",
    demo: null,
    featured: true,
  },
  {
    title: "Chat with PDF",
    description:
      "A Generative AI application enabling intelligent conversations with PDF documents using LangChain and vector embeddings.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone"],
    github: "https://github.com/Ameya28Bhave",
    demo: null,
    featured: true,
  },
  {
    title: "Ticketing App",
    description:
      "Full-stack microservices application with React, Next.js, Node.js featuring async event handling and Kubernetes deployment.",
    tech: ["React", "Next.js", "Node.js", "Kubernetes", "Docker"],
    github: "https://github.com/Ameya28Bhave/TICKETING_APP",
    demo: null,
    featured: true,
  },
  {
    title: "MERN Real Estate",
    description:
      "Full-featured real estate application with OAuth authentication, CRUD operations, and Firebase image storage.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
    github: "https://github.com/Ameya28Bhave/MERN-ESTATE-PROJECT",
    demo: null,
    featured: false,
  },
  {
    title: "Go OS Projects",
    description:
      "Implementation of client-server architecture with token passing algorithms in Go for distributed systems.",
    tech: ["Go", "Distributed Systems", "Networking"],
    github: "https://github.com/Ameya28Bhave/Go_OS_PROJECTS",
    demo: null,
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-soft">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of quantum computing research and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group bg-card rounded-xl p-6 shadow-card card-hover border border-border/50 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-all">
                  <Folder size={24} />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-center mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherProjects.map((project) => (
                <article
                  key={project.title}
                  className="group bg-card rounded-xl p-5 shadow-card card-hover border border-border/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
