import { Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-entertainment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                What's Trending Now
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Ultimate
              <span className="gradient-text block">
                Entertainment Hub
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Discover the latest in movies, TV shows, music, gaming, and celebrity news. 
              Stay ahead of the entertainment curve with our curated content and exclusive insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="hero-gradient hover:scale-105 transition-transform duration-200 neon-glow"
              >
                <Play className="h-5 w-5 mr-2" />
                Explore Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10"
              >
                Watch Trailers
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;

/*

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Breaking: Global Tech Conference 2025 Opens in Accra",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
  },
  {
    id: 2,
    title: "Music Awards 2025 – All the Big Winners!",
    image: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?w=1600",
  },
  {
    id: 3,
    title: "Premier League: Shocking Last-Minute Goals this Weekend",
    image: "https://images.unsplash.com/photo-1508264165352-258859e62245?w=1600",
  },
  {
    id: 4,
    title: "New AI Regulation Bill Sparks Debate",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600",
  },
];

export default function NewsSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 s
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden rounded-[500px] shadow-2xl">
      <div className="relative h-[400px] bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center rounded-[500px]">
              <h2 className="text-white text-xl md:text-2xl font-bold mb-8 text-center px-4">
                {slides[index].title}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}/*
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-sky-400 w-6"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
*/