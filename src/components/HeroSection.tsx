import { Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-entertainment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Entertainment Hub Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

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