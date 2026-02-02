import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
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
                {/* Overlay gradient for better text readability - Reduced opacity */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Navigation Header */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
                <Button
                    variant="ghost"
                    onClick={() => navigate("/")}
                    className="text-white hover:bg-white/20 hover:text-white drop-shadow-md"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                </Button>

                <Button
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg animate-pulse"
                    onClick={() => navigate("/#contact")}
                >
                    <Bell className="mr-2 h-4 w-4" />
                    Être notifié du lancement
                </Button>
            </div>

            {/* Content - Moved to top and smaller text */}
            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 pt-32">
                <div className="max-w-4xl space-y-6 animate-fade-in">
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
