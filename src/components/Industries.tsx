import { LayoutGrid } from "lucide-react";
import { useTranslation } from "react-i18next";
import oilGasImg from "@/assets/Oil & gas.avif";
import cablageAutoImg from "@/assets/Cablage auto.png";
import pharmaImg from "@/assets/industrie-pharmaceutique.jpg";
import agroImg from "@/assets/Agroalimentaire.jpg";
import impressionImg from "@/assets/Impression.jpg";
import metallurgiqueImg from "@/assets/Indus Métallique.jpg";
import textileImg from "@/assets/Textile.jpg";
import educationImg from "@/assets/education.jpg";
import itImg from "@/assets/IT.png";

const Industries = () => {
    const { t } = useTranslation();

    const sectors = [
        {
            image: oilGasImg,
            name: t("industries.sectors.oil_gas"),
            gradient: "from-blue-600/20 to-cyan-600/20"
        },
        {
            image: cablageAutoImg,
            name: t("industries.sectors.auto_wiring"),
            gradient: "from-red-600/20 to-blue-600/20"
        },
        {
            image: pharmaImg,
            name: t("industries.sectors.chem_pharma"),
            gradient: "from-emerald-600/20 to-teal-600/20"
        },
        {
            image: agroImg,
            name: t("industries.sectors.agro"),
            gradient: "from-green-600/20 to-lime-600/20"
        },
        {
            image: educationImg,
            name: t("industries.sectors.education"),
            gradient: "from-amber-600/20 to-orange-600/20"
        },
        {
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600&h=600",
            name: t("industries.sectors.tourism"),
            gradient: "from-amber-500/20 to-yellow-500/20"
        },
        {
            image: itImg,
            name: t("industries.sectors.it_dev"),
            gradient: "from-indigo-600/20 to-cyan-600/20"
        },
        {
            image: impressionImg,
            name: t("industries.sectors.printing"),
            gradient: "from-purple-600/20 to-indigo-600/20"
        },
        {
            image: metallurgiqueImg,
            name: t("industries.sectors.metallurgy"),
            gradient: "from-zinc-600/20 to-slate-600/20"
        },
        {
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600&h=600",
            name: t("industries.sectors.energy"),
            gradient: "from-yellow-600/20 to-orange-600/20"
        },
        {
            image: textileImg,
            name: t("industries.sectors.textile"),
            gradient: "from-purple-600/20 to-pink-600/20"
        },
        {
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=600",
            name: t("industries.sectors.health"),
            gradient: "from-rose-500/20 to-red-500/20"
        },
        {
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=600",
            name: t("industries.sectors.construction"),
            gradient: "from-slate-700/20 to-zinc-600/20"
        },
        {
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=600",
            name: t("industries.sectors.logistics"),
            gradient: "from-indigo-600/20 to-blue-600/20"
        }
    ];

    return (
        <section id="industries" className="py-24 bg-[#033853] relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto relative z-10 px-4">
                {/* Rotating O3 Logo */}


                <div className="flex flex-col items-center text-center mb-16 space-y-4">


                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                        {t("industries.subtitle")} <br />
                        <span className="text-primary italic">{t("industries.industries_count")}</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-accent rounded-full mb-8"></div>

                    <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                        {t("industries.description")}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                    {sectors.map((sector, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative p-3 bg-white/10 rounded-2xl border border-white/20 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden w-[45%] md:w-[22%] lg:w-[13%]"
                            >
                                {/* Sector specific gradient background cover on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10 w-full aspect-square max-w-[140px] rounded-xl bg-white/10 flex items-center justify-center mb-2 overflow-hidden group-hover:scale-105 transition-transform duration-500 border-2 border-white/20 group-hover:border-accent/30 shadow-sm">
                                    <img
                                        src={sector.image}
                                        alt={sector.name}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="relative z-10 font-display font-bold text-white text-xs md:text-sm leading-tight group-hover:text-accent transition-colors duration-300 px-1">
                                    {sector.name}
                                </h3>

                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-white/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Industries;
