import { useCallback } from 'react';

export const useLoader = () => {
    const triggerLoader = useCallback((duration: number = 2000) => {
        const event = new CustomEvent('trigger-loader', {
            detail: { duration }
        });
        window.dispatchEvent(event);
    }, []);

    return { triggerLoader };
};
