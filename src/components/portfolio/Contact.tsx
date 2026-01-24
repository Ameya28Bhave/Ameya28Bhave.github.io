import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    const mailtoLink = `mailto:ameya.bhave@utdallas.edu?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-soft">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing quantum computing? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're interested in quantum computing research, full-stack development, 
                or just want to chat about the future of technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:ameya.bhave@utdallas.edu"
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card card-hover group"
              >
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">ameya.bhave@utdallas.edu</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card">
                <div className="p-3 rounded-lg bg-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Dallas, Texas</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ameya28Bhave"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-xl shadow-card card-hover"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ameya-bhave"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-xl shadow-card card-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-semibold text-xl mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-warm text-primary-foreground shadow-warm hover:opacity-90 transition-opacity"
                size="lg"
              >
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
