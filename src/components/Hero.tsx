import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Modern Living Spaces",
    subtitle: "Designs that Inspire Everyday Life",
    buttonText: "Explore Designs",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Elegant Interiors",
    subtitle: "Turning your vision into aesthetic reality",
    buttonText: "View Portfolio",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Creative Workspaces",
    subtitle: "Work smart, live beautifully",
    buttonText: "Get Started",
  },
];



const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-slate-50">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-100 mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-800 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all">
                <span>{slide.buttonText}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-blue-600 scale-110" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
