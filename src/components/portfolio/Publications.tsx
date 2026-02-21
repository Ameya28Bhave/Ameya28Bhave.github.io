import { ExternalLink, FileText, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title: "BiBiEQ : Bivariate Bicycle Codes on Erasure Qubits",
    authors: "Ameya S Bhave, Navnil Choudhury, Andrew Nemec, Kanad Basu",
    venue: "IEEE QCNC",
    year: "2026",
    type: "Conference",
    description: "Assesing the performance of bivariate bicycle codes on erasure qubits based on the Exact and Approximate conversion engines to convert erasure circuits to stabilizer circuits.",
    link: "https://arxiv.org/abs/2602.07578",
  },
  {
    title: "HyperNQ: A Hypergraph Neural Network Decoder for Quantum LDPC Codes",
    authors: "Ameya S Bhave, Navnil Choudhury, Kanad Basu",
    venue: "IEEE ICC",
    year: "2026",
    type: "Conference",
    description: "Hypergraph neural networks for decoding quantum low-density parity-check codes with improved error rates.",
    link: "https://arxiv.org/abs/2511.01741",
  },
  {
    title: "QUARTET: Quantum Utilization and Adaptation via Resource-Tuned Execution Techniques",
    authors: "Navnil Choudhury, Ameya S Bhave, Kanad Basu",
    venue: "2025 IEEE International Conference on Quantum Computing and Engineering (QCE)",
    year: "2025",
    type: "Conference",
    description: "Resource-aware techniques for optimizing quantum program execution on constrained hardware.",
    link: "https://ieeexplore.ieee.org/abstract/document/11250316",
  },
  {
    title: "ZXNet: ZX Calculus-Driven Graph Neural Network Framework for Quantum Circuit Equivalence Checking",
    authors: "Navnil Choudhury, Ameya S Bhave, Kanad Basu",
    venue: "DAC 2025",
    year: "2025",
    type: "Conference",
    description: "A novel GNN framework leveraging ZX calculus for efficient quantum circuit verification.",
    link: "https://ieeexplore.ieee.org/document/11133226",
  },
  {
    title: "Biclustering a dataset using photonic quantum computing",
    authors: "Ajinkya Borle, Ameya S Bhave",
    venue: "Frontiers in Computer Science",
    year: "2024",
    type: "Journal",
    description: "Novel approach to biclustering using photonic quantum computing for enhanced data analysis.",
    link: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2024.1441879/full",
  },
  {
    title: "On Quantum Annealing Without a Physical Quantum Annealer",
    authors: "Ameya Bhave, Ajinkya Borle",
    venue: "QET Conference",
    year: "2023",
    type: "Conference",
    description: "Exploring quantum annealing simulation techniques without dedicated quantum hardware.",
    link: "https://arxiv.org/pdf/2307.09695",
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
                  <p className="text-xs text-muted-foreground mb-2">
                    {pub.authors}
                  </p>

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
