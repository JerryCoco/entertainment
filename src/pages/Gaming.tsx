import { useState } from "react";
import { Gamepad2, Star, Clock, Play, Filter, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import gamingImage from "@/assets/gaming-featured.jpg";

const Gaming = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const platforms = ["All", "PC", "PlayStation", "Xbox", "Nintendo", "Mobile"];

  const gamesList = [
    {
      title: "Cyber Nexus 2077",
      category: "Action RPG",
      image: gamingImage,
      rating: 9.4,
      duration: "60+ hours",
      description: "An immersive cyberpunk world where your choices shape the future.",
      size: "large" as const,
      featured: true
    },
    {
      title: "Mystic Realms",
      category: "Fantasy Adventure",
      image: gamingImage,
      rating: 8.9,
      duration: "40 hours",
      description: "Explore magical worlds filled with ancient mysteries.",
      size: "medium" as const
    },
    {
      title: "Speed Racers Elite",
      category: "Racing",
      image: gamingImage,
      rating: 8.6,
      duration: "25 hours",
      description: "High-octane racing with stunning visual effects.",
      size: "medium" as const
    },
    {
      title: "Strategy Empire",
      category: "Strategy",
      image: gamingImage,
      rating: 9.1,
      duration: "100+ hours",
      description: "Build civilizations and conquer the known world.",
      size: "medium" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background via-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">Gaming</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest game reviews, industry news, and exclusive previews. 
              Level up your gaming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search games..."
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>

            {/* Platform Filter */}
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <Button
                  key={platform}
                  variant={selectedPlatform === platform ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPlatform(platform)}
                  className={selectedPlatform === platform ? "hero-gradient" : ""}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gamesList.map((game, index) => (
              <ContentCard
                key={index}
                {...game}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Zap className="h-4 w-4 mr-2" />
              Load More Games
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gaming;