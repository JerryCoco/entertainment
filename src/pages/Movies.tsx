import { useState } from "react";
import { Film, Star, Clock, Play, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import moviesImage from "@/assets/movies-featured.jpg";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", "Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

  const moviesList = [
    {
      title: "Cosmic Warriors: Dawn",
      category: "Action/Sci-Fi",
      image: moviesImage,
      rating: 8.7,
      duration: "2h 28m",
      description: "An epic space adventure featuring stunning visuals and heart-pounding action sequences.",
      size: "large" as const,
      featured: true
    },
    {
      title: "The Silent Echo",
      category: "Drama",
      image: moviesImage,
      rating: 9.1,
      duration: "1h 54m",
      description: "A powerful story of redemption and human connection.",
      size: "medium" as const
    },
    {
      title: "Midnight Laughs",
      category: "Comedy",
      image: moviesImage,
      rating: 7.8,
      duration: "1h 42m",
      description: "A hilarious journey through modern relationships.",
      size: "medium" as const
    },
    {
      title: "Quantum Shift",
      category: "Sci-Fi",
      image: moviesImage,
      rating: 8.3,
      duration: "2h 15m",
      description: "Reality bends in this mind-bending thriller.",
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
              <Film className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">Movies</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the latest blockbusters, indie gems, and timeless classics. 
              Your gateway to cinematic excellence.
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
                placeholder="Search movies..."
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedGenre(genre)}
                  className={selectedGenre === genre ? "hero-gradient" : ""}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {moviesList.map((movie, index) => (
              <ContentCard
                key={index}
                {...movie}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Movies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Movies;