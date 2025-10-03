import { useState } from "react";
import { Star, Heart, MessageCircle, Share2, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import moviesImage from "@/assets/movies-featured.jpg";

const Celebrity = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Actors", "Musicians", "Directors", "Athletes", "Influencers"];

  const celebrityNews = [
    {
      title: "Hollywood's Rising Star Takes on Challenging Role",
      category: "Movies",
      image: moviesImage,
      likes: "45.2K",
      comments: "2.1K",
      shares: "890",
      timeAgo: "2 hours ago",
      excerpt: "Exclusive interview about their upcoming dramatic performance that's already generating Oscar buzz."
    },
    {
      title: "Music Icon Announces World Tour Dates",
      category: "Music",
      image: moviesImage,
      likes: "78.5K",
      comments: "5.3K",
      shares: "12.1K",
      timeAgo: "4 hours ago",
      excerpt: "The legendary artist will visit 50 cities across six continents in this massive comeback tour."
    },
    {
      title: "Behind the Scenes: Director's Vision",
      category: "Movies",
      image: moviesImage,
      likes: "23.7K",
      comments: "1.8K",
      shares: "456",
      timeAgo: "6 hours ago",
      excerpt: "An intimate look at the creative process behind this year's most anticipated blockbuster."
    },
    {
      title: "Power Couple's Red Carpet Moment",
      category: "Fashion",
      image: moviesImage,
      likes: "92.3K",
      comments: "8.7K",
      shares: "15.2K",
      timeAgo: "8 hours ago",
      excerpt: "Stunning fashion choices and sweet moments from last night's prestigious awards ceremony."
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
              <Star className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">Celebrity</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive interviews, behind-the-scenes content, and breaking celebrity news. 
              Get closer to your favorite stars.
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
                placeholder="Search celebrities..."
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

      {/* Celebrity News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {celebrityNews.map((news, index) => (
              <div
                key={index}
                className="glow-card rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                      {news.category}
                    </span>
                  </div>

                  {/* Time */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                      {news.timeAgo}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {news.excerpt}
                  </p>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{news.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{news.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span>{news.shares}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="text-primary">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Sparkles className="h-4 w-4 mr-2" />
              Load More Celebrity News
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Celebrity;