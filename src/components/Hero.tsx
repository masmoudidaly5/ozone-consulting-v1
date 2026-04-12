import { useRef, useEffect } from "react";
import underConstructionVideo from "@/assets/Under construction.webm";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          src={underConstructionVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover contrast-110 brightness-105"
        />
        {/* Darker Vignette & Overlay gradients for high-impact contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.95)_100%)]"></div>
        <div className="absolute inset-0 gradient-hero opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <div className="max-w-5xl space-y-10 animate-fade-in-up">
          <div className="flex flex-col items-center">
            <h1 className="text-7xl md:text-[11rem] font-display font-black leading-none tracking-tighter bg-gradient-to-r from-white/5 via-white/95 to-white/5 bg-clip-text text-transparent select-none drop-shadow-sm">
              OZONE
            </h1>
            <div className="text-sm md:text-2xl font-display font-light tracking-[1.2em] md:tracking-[1.45em] text-white/40 uppercase mt-2 md:-mt-4 mr-[-1.2em] md:mr-[-1.45em] transition-colors duration-500 hover:text-accent/60">
              CONSULTING
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light tracking-wide">
            Expertise et solutions innovantes pour la santé, la sécurité au travail
            et la gestion environnementale de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent text-white hover:bg-white hover:text-accent font-bold px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(26,161,161,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-base uppercase tracking-wider"
            >
              En savoir plus
            </button>
            <button
              onClick={() => {
                const servicesSection = document.querySelector('#services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-base uppercase tracking-wider"
            >
              Nos Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
