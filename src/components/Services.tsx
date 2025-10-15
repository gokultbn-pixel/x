import { motion } from "motion/react";
import { Scissors, Sparkles, Tv, Smartphone, Film, Palette } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Scissors,
    title: "Video Editing",
    description: "Professional editing for commercials, documentaries, and corporate videos with seamless transitions and storytelling.",
    price: "Starting at $500",
    features: ["Color Grading", "Audio Mixing", "Timeline Optimization"],
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Eye-catching 2D and 3D animations that bring your brand to life with kinetic typography and visual effects.",
    price: "Starting at $800",
    features: ["3D Animation", "Logo Animation", "Kinetic Typography"],
  },
  {
    icon: Tv,
    title: "Branding Videos",
    description: "Complete brand video packages that communicate your story, values, and mission in a compelling way.",
    price: "Starting at $1200",
    features: ["Brand Strategy", "Scriptwriting", "Voiceover"],
  },
  {
    icon: Smartphone,
    title: "Social Media Ads",
    description: "Viral-ready short-form content optimized for Instagram, TikTok, YouTube Shorts, and Facebook.",
    price: "Starting at $300",
    features: ["Platform Optimization", "Trendy Edits", "Captions & Graphics"],
  },
  {
    icon: Film,
    title: "Commercial Production",
    description: "High-end commercial production from concept to delivery with cinematic quality and attention to detail.",
    price: "Custom Quote",
    features: ["Pre-Production", "Filming", "Post-Production"],
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and grading to give your footage that cinematic, polished look.",
    price: "Starting at $400",
    features: ["LUT Creation", "Scene Matching", "Creative Looks"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-4">
              Services
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700" }}>
              What I <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive video production and post-production services tailored to your needs
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3" style={{ fontWeight: "600" }}>{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4" style={{ fontSize: "0.875rem" }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6 pt-6 border-t border-border">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                      {service.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 hover:from-primary hover:to-secondary hover:border-transparent group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/30">
            <h3 className="mb-4" style={{ fontWeight: "600" }}>Need a Custom Package?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Every project is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
