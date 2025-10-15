import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Absolutely phenomenal work! The motion graphics brought our brand campaign to life in ways we never imagined. The attention to detail and creative vision exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "Creative Studios",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Working with this editor was a game-changer for our business. Fast turnaround, exceptional quality, and a true understanding of our vision. Highly recommend for any video project!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Manager",
    company: "SocialBuzz Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "Our social media engagement skyrocketed after implementing the video content. The edits are trendy, professional, and perfectly optimized for each platform. Worth every penny!",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Product Manager",
    company: "InnovateCo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "The product launch video was stunning! The cinematography, color grading, and storytelling were all top-notch. This is the kind of quality that makes brands stand out.",
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Brand Director",
    company: "Lifestyle Co.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    rating: 5,
    text: "Professional, creative, and incredibly talented. The brand video perfectly captured our essence and has been instrumental in our recent growth. Can't wait to work together again!",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-4">
              Testimonials
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700" }}>
              What <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-primary/30 mb-6" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground mb-8 leading-relaxed" style={{ fontSize: "1.125rem" }}>
                    "{currentTestimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: "600" }}>{currentTestimonial.name}</h4>
                      <p className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-border hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl opacity-30 -z-10" />
          </div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "5.0", label: "Average Rating" },
              { value: "250+", label: "Projects Done" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                  style={{ fontSize: "2rem", fontWeight: "700" }}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
