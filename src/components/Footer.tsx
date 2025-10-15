import { motion } from "motion/react";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span style={{ fontSize: "1.5rem" }}>🎬</span>
              </div>
              <div>
                <div style={{ fontWeight: "600" }}>GOKUL</div>
                <div className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                  Video Editor & Motion Graphics Designer
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="flex items-center gap-2 justify-center" style={{ fontSize: "0.875rem" }}>
              © 2024 Gokul. Made with <Heart className="h-4 w-4 text-accent fill-accent" /> and creativity
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-primary/30 hover:bg-primary/10 group"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Additional Links (Optional) */}
        <motion.div
          className="mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground" style={{ fontSize: "0.875rem" }}>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
}
