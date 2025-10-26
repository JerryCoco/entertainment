"use client";
import { Carousel } from "@/components/ui/carousel";

const slides = [
  {
    title: "Breaking News: Global Events Update",
    button: "Read More",
    src: "/images/slide1.jpg",
  },
  {
    title: "Entertainment: Top Stories in Music & Film",
    button: "Explore",
    src: "/images/slide2.jpg",
  },
  {
    title: "Sports: Major Highlights of the Week",
    button: "Watch Highlights",
    src: "/images/slide3.jpg",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-16 bg-white text-gray-900">
      <Carousel slides={slides} />
    </section>
  );
};

export default HeroSection;
