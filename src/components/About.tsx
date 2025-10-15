import { motion } from "motion/react";
import { Award, Zap, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { icon: Zap, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "100+" },
  { icon: Award, label: "Projects Done", value: "250+" },
];

const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Blender 3D",
  "Cinema 4D",
  "Final Cut Pro",
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-4">
              About Me
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700" }}>
              Bringing <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Vision</span> to Life
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-1 rounded-2xl">
                <div className="w-full h-full bg-card rounded-2xl" />
              </div>
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643324256354-79f75b773709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMGVkaXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDM0NDEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video Editor Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "1.125rem" }}>
              I'm a passionate video editor and motion graphics designer with over 5 years of experience
              turning raw footage into compelling visual stories. From commercial ads to social media
              content, I specialize in creating videos that captivate and convert.
            </p>

            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "1.125rem" }}>
              My approach combines technical expertise with creative storytelling, ensuring every frame
              serves a purpose and every transition enhances the narrative.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div style={{ fontSize: "1.5rem", fontWeight: "700" }} className="text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <h3 className="mb-4" style={{ fontWeight: "600" }}>Tools I Master:</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-foreground"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
