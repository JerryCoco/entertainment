import { Play, TrendingUp } from "lucide-react";
import CarouselDemo from "@/components/ui/CarouselDemo";

const HeroSection = () => {
  return (
   <section className="relative min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-4">
    {/* Hero text */}
    <h1 className="text-4xl font-bold text-center mb-8">
      Welcome to Our Site
    </h1>

    {/* Carousel section */}
    <CarouselDemo />
  </div>
</section>
  );
};

export default HeroSection;