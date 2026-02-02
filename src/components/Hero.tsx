import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselSlides } from "@/data/carouselSlides";
import heroImage from "@/assets/hero-safety.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sécurité industrielle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Carousel Content */}
      <div className="w-full h-full z-10">
        {/* Carousel Container */}
        <div
          className="relative overflow-hidden w-full h-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div className="relative h-full">
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                  }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient - 10% opacity */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-10`}></div>
                </div>

                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="w-full max-w-lg bg-black/60 p-8 rounded-2xl border-l-4 border-accent shadow-2xl animate-fade-in-up">
                      <div className="mb-4">
                        <span className="inline-block bg-accent px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest shadow-sm">
                          {slide.subtitle}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-base text-gray-100 mb-8 leading-relaxed max-w-md drop-shadow-md">
                        {slide.description}
                      </p>
                      <button
                        onClick={() => {
                          const contactSection = document.querySelector('#contact');
                          contactSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-accent text-white hover:bg-white hover:text-accent font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-wider"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-all duration-300 hover:scale-125"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-all duration-300 hover:scale-125"
            aria-label="Next slide"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? "bg-accent w-10 h-2"
                  : "bg-white/40 hover:bg-white/60 w-2 h-2"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
