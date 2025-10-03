import { Clock, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentCardProps {
  title: string;
  category: string;
  image: string;
  rating?: number;
  duration?: string;
  description: string;
  size?: "small" | "medium" | "large";
  featured?: boolean;
}

const ContentCard = ({ 
  title, 
  category, 
  image, 
  rating, 
  duration, 
  description, 
  size = "medium",
  featured = false 
}: ContentCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 md:col-span-2",
    large: "col-span-1 row-span-2 md:col-span-2 lg:col-span-3"
  };

  return (
    <div className={`group glow-card rounded-xl overflow-hidden relative ${sizeClasses[size]} ${featured ? 'neon-glow' : ''}`}>
      {/* Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="icon" 
            className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm"
          >
            <Play className="h-6 w-6" fill="currentColor" />
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Rating */}
        {rating && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            {duration && (
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="h-3 w-3" />
                <span>{duration}</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>

          {featured && (
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;