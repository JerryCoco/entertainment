import { Film, Tv, Music, Gamepad2, Star, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategorySection = () => {
  const categories = [
    {
      name: "Movies",
      icon: Film,
      count: "12.5K+",
      description: "Latest releases and timeless classics",
      color: "from-entertainment-neon-pink/20 to-entertainment-electric-purple/20",
      borderColor: "border-entertainment-neon-pink/30"
    },
    {
      name: "TV Shows",
      icon: Tv,
      count: "8.2K+",
      description: "Binge-worthy series and episodes",
      color: "from-entertainment-neon-blue/20 to-entertainment-cyber-green/20",
      borderColor: "border-entertainment-neon-blue/30"
    },
    {
      name: "Music",
      icon: Music,
      count: "50K+",
      description: "Albums, singles, and live performances",
      color: "from-entertainment-electric-purple/20 to-primary/20",
      borderColor: "border-entertainment-electric-purple/30"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: "3.7K+",
      description: "Reviews, news, and gameplay guides",
      color: "from-entertainment-cyber-green/20 to-entertainment-neon-pink/20",
      borderColor: "border-entertainment-cyber-green/30"
    },
    {
      name: "Celebrity",
      icon: Star,
      count: "2.1K+",
      description: "Latest news and exclusive interviews",
      color: "from-primary/20 to-entertainment-neon-blue/20",
      borderColor: "border-primary/30"
    },
    {
      name: "News",
      icon: Newspaper,
      count: "Daily",
      description: "Breaking entertainment industry news",
      color: "from-entertainment-neon-pink/20 to-entertainment-electric-purple/20",
      borderColor: "border-entertainment-neon-pink/30"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">
            Explore by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive deep into your favorite entertainment categories with curated content and expert insights
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className={`glow-card rounded-xl p-6 border-2 ${category.borderColor} bg-gradient-to-br ${category.color} group cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Icon and Count */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-card/50 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {category.count}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-border/50 hover:border-primary/50 hover:bg-primary/10"
                  >
                    Explore {category.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;