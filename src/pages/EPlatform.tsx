import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import o3Logo from "@/assets/O3.png";
import underConstructionVideo from "@/assets/Under construction.webm";

const EPlatform = () => {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    src={underConstructionVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover contrast-110 brightness-105"
                />
                {/* Darker Vignette & Overlay gradients for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.95)_100%)]"></div>
            </div>

            {/* Content - Moved to top and smaller text */}
            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 pt-32">
                <div className="max-w-4xl space-y-6 animate-fade-in">
                    {/* Rotating O3 Logo */}
                    <div className="flex justify-center mb-8 animate-fade-in group">
                        <div className="relative cursor-pointer">
                            <img
                                src={o3Logo}
                                alt="O3"
                                className="h-32 md:h-40 w-auto drop-shadow-2xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover:brightness-110 animate-spin-slow"
                                style={{ animationDuration: '20s' }}
                            />
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500"></div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-2xl">
                        E-Platform
                    </h1>
                    <div className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold text-white/95 drop-shadow-xl">
                            Page en cours de construction
                        </h2>
                        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-xl font-medium">
                            Nous travaillons activement sur notre nouvelle plateforme d'e-learning.
                            Elle sera bientôt disponible pour vous offrir la meilleure expérience de formation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EPlatform;
