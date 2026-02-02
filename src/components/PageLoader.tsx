import { useEffect, useState } from "react";

const PageLoader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleLoaderTrigger = (event: CustomEvent<{ duration?: number }>) => {
            setIsVisible(true);
            setProgress(0);

            const duration = event.detail?.duration || 2000; // Default 2s if not specified
            const intervalTime = 50;
            const steps = duration / intervalTime;
            const increment = 100 / steps;

            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return Math.min(prev + increment, 100);
                });
            }, intervalTime);

            // Hide loader after animation completes
            const timeout = setTimeout(() => {
                setIsVisible(false);
                setProgress(0);
            }, duration + 500);

            // Cleanup function for this specific trigger
            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        };

        // Add event listener
        window.addEventListener('trigger-loader', handleLoaderTrigger as EventListener);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('trigger-loader', handleLoaderTrigger as EventListener);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md transition-all duration-500">
            <div className="w-full max-w-md px-6 flex flex-col items-center gap-4">
                {/* Percentage Text */}
                <div className="text-4xl md:text-6xl font-bold text-primary animate-pulse">
                    {Math.round(progress)}%
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden relative">
                    {/* Progress Bar Fill */}
                    <div
                        className="h-full bg-primary transition-all duration-200 ease-out rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-muted-foreground text-sm animate-pulse">
                    Téléchargement en cours...
                </p>
            </div>
        </div>
    );
};

export default PageLoader;
