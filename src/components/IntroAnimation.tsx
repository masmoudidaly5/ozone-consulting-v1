import { useEffect, useState } from "react";
import o3Logo from "@/assets/O3.png";

const IntroAnimation = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Start fade out after a delay to ensure logo is seen
        const fadeTimer = setTimeout(() => {
            setOpacity(0);
        }, 3000); // Wait 3s before starting fade out

        // Remove component after fade out completes (5s total: 3s wait + 2s fade)
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-background/75 transition-opacity ease-in-out"
            style={{ opacity: opacity, transitionDuration: '2000ms' }}
        >
            <div className="animate-pulse">
                <img
                    src={o3Logo}
                    alt="OZONE CONSULTING"
                    className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
            </div>
        </div>
    );
};

export default IntroAnimation;
