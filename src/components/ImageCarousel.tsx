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
        <section id="temoignages" className="py-16 pb-8 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Visual Content (Left) */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition duration-500"></div>

                            <div className="relative bg-white rounded-[2.5rem] shadow-strong p-8 md:p-12 border border-slate-50 flex flex-col items-center">
                                {/* Doughnut Chart */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                                        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f8fafc" strokeWidth="8" />
                                        {ratings.map((rating) => (
                                            <circle
                                                key={rating.id}
                                                cx="50" cy="50" r="40"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeWidth={hoveredIndex === rating.id ? "11" : "8"}
                                                strokeDasharray={rating.dashArray}
                                                strokeDashoffset={rating.dashOffset}
                                                strokeLinecap="round"
                                                className={`transition-all duration-300 cursor-pointer ${rating.color} ${hoveredIndex !== null && hoveredIndex !== rating.id ? 'opacity-20' : 'opacity-100'
                                                    }`}
                                                onMouseEnter={() => setHoveredIndex(rating.id)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            />
                                        ))}
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        {activeRating ? (
                                            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                                                <span className="text-5xl mb-2 drop-shadow-sm">{activeRating.emoji}</span>
                                                <span className={`text-4xl font-black ${activeRating.color}`}>{activeRating.percent}%</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{activeRating.label}</span>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center animate-in fade-in duration-500">
                                                <span className="text-6xl font-black text-slate-900 leading-none">73%</span>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-3">Excellence Score</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content (Right) */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-block px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider">Engagement Client</span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                                    Indicateurs de <br />
                                    <span className="text-primary italic">Performance</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-accent rounded-full"></div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                    La satisfaction de nos clients est au cœur de notre stratégie.
                                    Nous analysons chaque retour pour perfectionner nos interventions et vous offrir un service d'excellence.
                                </p>
                            </div>

                            {/* Stats List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors border border-slate-100/50 shadow-sm">
                                            {stat.icon}
                                        </div>
                                        <div className="space-y-0.5">
                                            <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Minimal Call to action */}
                            <div className="flex items-center gap-2 text-primary font-bold text-sm pt-6 group cursor-default">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Données certifiées basées sur 134 retours récents</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageCarousel;
