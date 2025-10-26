"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

const Slide = ({
  slide,
  index,
  current,
}: {
  slide: SlideData;
  index: number;
  current: number;
}) => {
  return (
    <div
      className={`relative w-full flex-shrink-0 transition-transform duration-700 ease-in-out ${
        current === index ? "scale-100" : "scale-95 opacity-70"
      }`}
    >
      {/* Glass-style border */}
      <div className="relative rounded-[2rem] overflow-hidden border-[5px] border-white/40 backdrop-blur-2xl bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
        <img
          src={slide.src}
          alt={slide.title}
          className="w-full h-[520px] object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: current === index ? "scale(1)" : "scale(1.05)",
          }}
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent" />

        <div className="absolute bottom-8 left-8 text-gray-900 drop-shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 max-w-[80%] leading-snug">
            {slide.title}
          </h2>
          <button className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
            {slide.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setProgress(0);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setProgress(0);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  return (
    <div
      className="
        relative 
        mx-[160px]
        overflow-hidden 
        rounded-[2rem] 
        backdrop-blur-2xl 
        border-[5px] border-white/40 
        shadow-[0_6px_25px_rgba(0,0,0,0.1)]
      "
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} index={i} current={current} />
        ))}
      </div>

      {/* Arrows + progress rectangles */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-gray-700 shadow transition"
        >
          <IconArrowNarrowRight className="rotate-180 w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className="relative w-16 h-[5px] rounded-full overflow-hidden bg-gray-300"
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-gray-900 rounded-full"
                animate={{
                  width:
                    current === i
                      ? `${progress}%`
                      : current > i
                      ? "100%"
                      : "0%",
                  opacity: current === i ? 1 : 0.5,
                }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/70 hover:bg-white text-gray-700 shadow transition"
        >
          <IconArrowNarrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
