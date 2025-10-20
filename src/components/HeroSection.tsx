"use client";

import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Latest Blockbuster Movies",
    button: "Watch Now",
    src: "/images/slide1.jpg",
  },
  {
    title: "Trending Music Hits",
    button: "Listen",
    src: "/images/slide2.jpg",
  },
  {
    title: "Celebrity Gossip & News",
    button: "Read More",
    src: "/images/slide3.jpg",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white" />
        
      {/* Content */}
      
      {/* Carousel */}
      <div className="relative z-10 mt-12">
        <Carousel slides={slides} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;
