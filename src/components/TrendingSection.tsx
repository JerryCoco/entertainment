import { TrendingUp, Eye, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrendingSection = () => {
  const trendingItems = [
    {
      rank: 1,
      title: "Marvel's Next Phase Revealed",
      category: "Movies",
      views: "2.1M",
      comments: "8.5K",
      timeAgo: "2 hours ago",
      trend: "+15%"
    },
    {
      rank: 2,
      title: "Gaming Awards 2024 Winners",
      category: "Gaming",
      views: "1.8M",
      comments: "12.3K",
      timeAgo: "4 hours ago",
      trend: "+23%"
    },
    {
      rank: 3,
      title: "Billboard Chart Breakdown",
      category: "Music",
      views: "1.5M",
      comments: "6.7K",
      timeAgo: "6 hours ago",
      trend: "+8%"
    },
    {
      rank: 4,
      title: "Netflix's Biggest Series Finale",
      category: "TV Shows",
      views: "1.2M",
      comments: "9.1K",
      timeAgo: "8 hours ago",
      trend: "+31%"
    },
    {
      rank: 5,
      title: "Celebrity Power Couple Split",
      category: "Celebrity",
      views: "987K",
      comments: "15.2K",
      timeAgo: "12 hours ago",
      trend: "+45%"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-4xl font-bold">
                Trending <span className="gradient-text">Now</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              The hottest entertainment stories everyone's talking about
            </p>
          </div>

          <Button variant="outline" className="hidden md:flex">
            View All Trends
          </Button>
        </div>

        {/* Trending List */}
        <div className="space-y-4">
          {trendingItems.map((item, index) => (
            <div
              key={item.rank}
              className="glow-card rounded-xl p-6 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                {/* Rank */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {item.rank}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
                          {item.category}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {item.timeAgo}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200 line-clamp-1">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Trend Indicator and Actions */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-cyber-green text-sm font-medium">
                        <TrendingUp className="h-4 w-4" />
                        <span>{item.trend}</span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline">
            View All Trends
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;