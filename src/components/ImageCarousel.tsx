import { useState } from "react";
import { Share2, Users, MessageSquare, Star, TrendingUp, CheckCircle2 } from "lucide-react";

const ImageCarousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const ratings = [
        { id: 4, emoji: "😄", percent: 30, label: "Très satisfait", color: "text-green-600", bgColor: "bg-green-600", dashArray: "75.40 251.32", dashOffset: "0" },
        { id: 3, emoji: "🙂", percent: 43, label: "Satisfait", color: "text-green-400", bgColor: "bg-green-400", dashArray: "108.07 251.32", dashOffset: "-75.40" },
        { id: 2, emoji: "😐", percent: 23, label: "Neutre", color: "text-yellow-400", bgColor: "bg-yellow-400", dashArray: "57.80 251.32", dashOffset: "-183.47" },
        { id: 1, emoji: "☹️", percent: 4, label: "Insatisfait", color: "text-orange-400", bgColor: "bg-orange-400", dashArray: "10.05 251.32", dashOffset: "-241.27" },
    ];

    const stats = [
        { value: "72%", label: "Taux de réponse", icon: <Share2 className="w-4 h-4 text-primary" /> },
        { value: "185", label: "Total invitations", icon: <Users className="w-4 h-4 text-primary" /> },
        { value: "134", label: "Réponses totales", icon: <MessageSquare className="w-4 h-4 text-primary" /> },
        { value: "73%", label: "Score CSAT Global", icon: <Star className="w-4 h-4 text-primary" /> },
    ];

    const activeRating = hoveredIndex !== null ? ratings.find(r => r.id === hoveredIndex) : null;

    return (
        <section id="temoignages" className="py-16 pb-8 bg-primary relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Content has been removed as per user request */}
            </div>
        </section>
    );
};

export default ImageCarousel;
