import { motion } from "motion/react";
import { Play, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1e]/50 to-[#0a0a1e]" />
      
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'top',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/30 bg-primary/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ✨ Available for Projects
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: "1.1", fontWeight: "700" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Gokul
          </motion.h1>

          <motion.h2
            className="mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: "1.2", fontWeight: "600" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Video Editor & Motion Graphics Designer
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-12 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting stories that move hearts through motion and sound
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
              onClick={() => scrollToSection("portfolio")}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 group"
              onClick={() => scrollToSection("contact")}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Let's Collaborate
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-accent/30 rounded-lg rotate-12 animate-pulse" />
      <div className="absolute bottom-32 left-32 w-16 h-16 border-2 border-secondary/30 rounded-full animate-pulse" />
    </section>
  );
}
