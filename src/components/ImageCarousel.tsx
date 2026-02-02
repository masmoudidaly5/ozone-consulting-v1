import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselSlides } from "@/data/carouselSlides";

const ImageCarousel = () => {
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
        <section className="py-2">
            <div className="container mx-auto px-4 md:px-8">
                {/* Carousel Container */}
                <div
                    className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl scale-[0.8] origin-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Slides */}
                    <div className="relative h-[400px] md:h-[480px]">
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

                                <div className="relative h-full flex items-end justify-center pb-16 md:pb-20">
                                    <div className="px-6 md:px-8 w-full flex justify-center">
                                        <div className="w-full max-w-md bg-black/15 backdrop-blur-sm p-4 md:p-5 rounded-xl">
                                            <div className="mb-1.5">
                                                <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/25 rounded-full px-3 py-1 text-white text-xs font-semibold shadow-sm">
                                                    {slide.subtitle}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">
                                                {slide.title}
                                            </h2>
                                            <p className="text-xs md:text-sm text-white/95 mb-3 leading-relaxed drop-shadow-sm">
                                                {slide.description}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    const contactSection = document.querySelector('#contact');
                                                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="bg-white text-foreground hover:bg-white/90 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xs md:text-sm"
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {carouselSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                    ? "bg-white w-12 h-3"
                                    : "bg-white/50 hover:bg-white/70 w-3 h-3"
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

export default ImageCarousel;
