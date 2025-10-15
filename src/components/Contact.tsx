import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const contactInfo = [
  { icon: Mail, label: "Email", value: "gokultbn@gmail.com", href: "mailto:gokul.editor@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 848913096", href: "tel:+918489130096" },
  { icon: MapPin, label: "Location", value: "India", href: "#" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "from-pink-500 to-purple-500" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "from-red-500 to-red-600" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "from-blue-500 to-blue-600" },
  { icon: Globe, label: "Behance", href: "https://behance.net", color: "from-blue-400 to-blue-500" },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thanks for reaching out! This is a demo form.");
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-4">
              Get In Touch
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700" }}>
              Let's Create Something{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Drop me a message and let's discuss how I can help bring your vision to life
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6" style={{ fontWeight: "600" }}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
                        {info.label}
                      </div>
                      <div className="group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-6" style={{ fontWeight: "600" }}>Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center group transition-all"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="mb-2" style={{ fontWeight: "600" }}>Quick Response?</h4>
              <p className="text-muted-foreground mb-4" style={{ fontSize: "0.875rem" }}>
                For urgent projects, reach out via WhatsApp for faster communication
              </p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() => window.open("https://wa.me/918489130096", "_blank")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Message on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-border shadow-xl space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="mt-2 bg-input-background border-border focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="mt-2 bg-input-background border-border focus:border-primary"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 8489130096"
                    className="mt-2 bg-input-background border-border focus:border-primary"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <Label htmlFor="project">Project Type</Label>
                  <select
                    id="project"
                    className="mt-2 w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="motion-graphics">Motion Graphics</option>
                    <option value="branding">Branding Videos</option>
                    <option value="social-media">Social Media Ads</option>
                    <option value="commercial">Commercial Production</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, timeline, and vision..."
                    rows={5}
                    required
                    className="mt-2 bg-input-background border-border focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
