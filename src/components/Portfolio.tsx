import { useState } from "react";
import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { VideoModal } from "./VideoModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Commercial 2024",
    category: "Ad Film",
    thumbnail: "https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzYwMzQ0MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-1.mp4",
    description: "60-second brand story with dynamic motion graphics",
  },
  {
    id: 2,
    title: "Motion Graphics Showcase",
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NjAyOTE5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-2.mp4",
    description: "Kinetic typography and 3D animation reel",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjAyOTc2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-3.mp4",
    description: "Viral-ready short-form content series",
  },
  {
    id: 4,
    title: "Product Launch Video",
    category: "Ad Film",
    thumbnail: "https://images.unsplash.com/photo-1749321485863-29e9cf0f40c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmclMjB2aWRlb3xlbnwxfHx8fDE3NjAzNDQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-4.mp4",
    description: "Cinematic product reveal with VFX",
  },
  {
    id: 5,
    title: "Corporate Branding",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1683090988500-6ebee3eae187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjAzMjczMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-5.mp4",
    description: "Professional corporate video package",
  },
  {
    id: 6,
    title: "Music Video Edit",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzYwMzQ0MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "demo-video-6.mp4",
    description: "Creative music video with color grading",
  },
];

const categories = ["All", "Ad Film", "Animation", "Social Media", "Branding", "Music Video"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary mb-4">
              Portfolio
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "700" }}>
              Featured <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore my recent projects and see how I bring creative visions to life
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : "border-border hover:border-primary/50"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setSelectedVideo(item)}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Project
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground" style={{ fontSize: "0.75rem" }}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2" style={{ fontWeight: "600" }}>{item.title}</h3>
                  <p className="text-muted-foreground mb-4" style={{ fontSize: "0.875rem" }}>
                    {item.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => setSelectedVideo(item)}
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          videoUrl={selectedVideo.videoUrl}
        />
      )}
    </section>
  );
}
