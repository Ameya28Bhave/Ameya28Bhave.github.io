import { ExternalLink, FileText, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "ZXNet: ZX Calculus-Driven Graph Neural Network Framework for Quantum Circuit Equivalence Checking",
    venue: "DAC 2025",
    year: "2025",
    type: "Conference",
    description: "A novel GNN framework leveraging ZX calculus for efficient quantum circuit verification.",
    link: "#",
  },
  {
    title: "HyperNQ: A Hypergraph Neural Network Decoder for Quantum LDPC Codes",
    venue: "arXiv",
    year: "2025",
    type: "Preprint",
    description: "Hypergraph neural networks for decoding quantum low-density parity-check codes with improved error rates.",
    link: "#",
  },
  {
    title: "Biclustering a dataset using photonic quantum computing",
    venue: "Frontiers in Computer Science",
    year: "2024",
    type: "Journal",
    description: "Novel approach to biclustering using photonic quantum computing for enhanced data analysis.",
    link: "#",
  },
  {
    title: "On quantum annealing without a physical quantum annealer",
    venue: "QET Conference",
    year: "2023",
    type: "Conference",
    description: "Exploring quantum annealing simulation techniques without dedicated quantum hardware.",
    link: "#",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research in quantum computing and machine learning
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <article
              key={pub.title}
              className="group bg-card rounded-xl p-6 shadow-card card-hover border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="hidden md:flex p-3 rounded-lg bg-secondary text-secondary-foreground group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-all">
                  <FileText size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {pub.type}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-3">
                    {pub.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">
                      {pub.venue}
                    </span>
                    <a
                      href={pub.link}
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Paper <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
