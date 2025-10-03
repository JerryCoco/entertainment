import { useState } from "react";
import { Tv, Star, Clock, Play, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import moviesImage from "@/assets/movies-featured.jpg";

const TVShows = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Drama", "Comedy", "Thriller", "Reality", "Documentary"];

  const showsList = [
    {
      title: "Digital Dynasty",
      category: "Tech Drama",
      image: moviesImage,
      rating: 9.2,
      duration: "8 Episodes",
      description: "A gripping series about the rise and fall of a tech empire.",
      size: "large" as const,
      featured: true
    },
    {
      title: "Midnight Detective",
      category: "Crime Thriller",
      image: moviesImage,
      rating: 8.8,
      duration: "12 Episodes",
      description: "Dark mysteries solved in the city that never sleeps.",
      size: "medium" as const
    },
    {
      title: "The Comedy Club",
      category: "Comedy",
      image: moviesImage,
      rating: 8.5,
      duration: "20 Episodes",
      description: "Behind-the-scenes laughs at a struggling comedy venue.",
      size: "medium" as const
    },
    {
      title: "Ocean Depths",
      category: "Documentary",
      image: moviesImage,
      rating: 9.0,
      duration: "6 Episodes",
      description: "Explore the mysterious world beneath the waves.",
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
              <Tv className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">TV Shows</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Binge-worthy series, compelling dramas, and must-watch episodes. 
              Your next obsession awaits.
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
                placeholder="Search TV shows..."
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "hero-gradient" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shows Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {showsList.map((show, index) => (
              <ContentCard
                key={index}
                {...show}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Shows
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TVShows;