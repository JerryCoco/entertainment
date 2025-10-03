import { useState } from "react";
import { Newspaper, Clock, TrendingUp, Search, Filter, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import moviesImage from "@/assets/movies-featured.jpg";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Breaking", "Industry", "Reviews", "Interviews", "Awards"];

  const newsList = [
    {
      title: "Major Studio Announces Revolutionary Streaming Platform",
      category: "Industry",
      image: moviesImage,
      timeAgo: "15 minutes ago",
      author: "Sarah Johnson",
      readTime: "3 min read",
      excerpt: "A game-changing announcement that could reshape the entire entertainment landscape and how we consume media.",
      isBreaking: true
    },
    {
      title: "Exclusive: Director Reveals Secret Behind Box Office Hit",
      category: "Interviews",
      image: moviesImage,
      timeAgo: "1 hour ago",
      author: "Mike Chen",
      readTime: "5 min read",
      excerpt: "Behind-the-scenes insights into the creative process that produced this year's biggest surprise success.",
      isBreaking: false
    },
    {
      title: "Awards Season Predictions: Who Will Take Home the Gold?",
      category: "Awards",
      image: moviesImage,
      timeAgo: "2 hours ago",
      author: "Emma Wilson",
      readTime: "7 min read",
      excerpt: "Our comprehensive analysis of this year's most competitive award categories and frontrunners.",
      isBreaking: false
    },
    {
      title: "Gaming Industry Revenue Reaches Record High",
      category: "Industry",
      image: moviesImage,
      timeAgo: "4 hours ago",
      author: "Alex Rodriguez",
      readTime: "4 min read",
      excerpt: "Latest financial reports show unprecedented growth in the gaming sector, surpassing all entertainment mediums.",
      isBreaking: false
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
              <Newspaper className="h-8 w-8 text-primary" />
              <h1 className="text-5xl font-bold">
                <span className="gradient-text">News</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Breaking entertainment news, industry insights, and exclusive coverage. 
              Stay informed with the latest developments.
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
                placeholder="Search news..."
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

      {/* News List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {newsList.map((news, index) => (
              <article
                key={index}
                className="glow-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Breaking Badge */}
                    {news.isBreaking && (
                      <div className="absolute top-4 left-4">
                        <span className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full animate-pulse">
                          <Zap className="h-3 w-3" />
                          BREAKING
                        </span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{news.timeAgo}</span>
                        </div>
                        <span>•</span>
                        <span>{news.readTime}</span>
                        <span>•</span>
                        <span>By {news.author}</span>
                      </div>

                      <h2 className="text-2xl font-bold line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {news.title}
                      </h2>

                      <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <Button variant="outline" size="sm">
                        Read Full Article
                      </Button>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span>Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Newspaper className="h-4 w-4 mr-2" />
              Load More News
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;