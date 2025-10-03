import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContentCard from "./ContentCard";
import moviesImage from "@/assets/movies-featured.jpg";
import gamingImage from "@/assets/gaming-featured.jpg";
import musicImage from "@/assets/music-featured.jpg";

const FeaturedSection = () => {
  const featuredContent = [
    {
      title: "The Latest Blockbuster",
      category: "Movies",
      image: moviesImage,
      rating: 8.7,
      duration: "2h 28m",
      description: "An epic adventure that redefines cinema with stunning visuals and compelling storytelling.",
      size: "large" as const,
      featured: true
    },
    {
      title: "Gaming Revolution 2024",
      category: "Gaming",
      image: gamingImage,
      rating: 9.2,
      description: "The most anticipated games launching this year that will change everything.",
      size: "medium" as const
    },
    {
      title: "Chart-Topping Hits",
      category: "Music",
      image: musicImage,
      rating: 8.9,
      description: "Discover the artists and albums dominating the music scene right now.",
      size: "medium" as const
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">
              Featured <span className="gradient-text">Content</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked highlights from across entertainment
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {featuredContent.map((item, index) => (
            <ContentCard
              key={index}
              {...item}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="flex items-center gap-2">
            View All Featured
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;