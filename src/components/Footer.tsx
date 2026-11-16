import { motion } from "framer-motion";
import { Terminal, Mail } from "lucide-react";
import { personalInfo } from "@/data/personalData";
import { scrollToSection } from "@/lib/utils";

const footerLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/70 bg-card/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-sm">
              Chetan<span className="gradient-text">.dev</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-muted-foreground">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-muted-foreground">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              {personalInfo.email}
            </a>
            <span className="hidden sm:inline">•</span>
            <span>© {new Date().getFullYear()} Chetan Chopade</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
