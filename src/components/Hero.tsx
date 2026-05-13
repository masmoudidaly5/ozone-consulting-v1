import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import underConstructionVideo from "@/assets/Under construction.webm";

const Hero = () => {
  const { t } = useTranslation();
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
              {t("hero.title")}
            </h1>
            <div className="text-sm md:text-2xl font-display font-light tracking-[1.2em] md:tracking-[1.45em] text-white/40 uppercase mt-2 md:-mt-4 mr-[-1.2em] md:mr-[-1.45em] transition-colors duration-500 hover:text-accent/60">
              {t("hero.subtitle")}
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light tracking-wide">
            {t("hero.description")}
          </p>

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
