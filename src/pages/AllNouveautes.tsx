import { Play, Eye, Flame, HeartPulse, Droplet, Mountain, ArrowLeft } from "lucide-react";
import vrFire from "@/assets/VR Fire.jpeg";
import vrIntro from "@/assets/VR intro.png";
import vrCpr from "@/assets/VR CPR1.png";
import vrChemical from "@/assets/Chemical VR.jpg";
import vrChemicalHandling from "@/assets/vr-chemical-handling-training.jpg";
import vrScaffolding from "@/assets/vr-scaffolding-training-high.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AllNouveautes = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const vrFormations = [
        {
            id: "fire",
            title: t("nouveautes_page.vr_formations.fire.title"),
            description: t("nouveautes_page.vr_formations.fire.desc"),
            icon: Flame,
            image: vrFire,
            duration: "15 min",
            color: "from-red-500 to-orange-500",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/30"
        },
        {
            id: "first_aid",
            title: t("nouveautes_page.vr_formations.first_aid.title"),
            description: t("nouveautes_page.vr_formations.first_aid.desc"),
            icon: HeartPulse,
            image: vrCpr,
            duration: "20 min",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-500/10",
            borderColor: "border-pink-500/30"
        },
        {
            id: "chemical",
            title: t("nouveautes_page.vr_formations.chemical.title"),
            description: t("nouveautes_page.vr_formations.chemical.desc"),
            icon: Droplet,
            image: vrChemicalHandling,
            duration: "25 min",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30"
        },
        {
            id: "height",
            title: t("nouveautes_page.vr_formations.height.title"),
            description: t("nouveautes_page.vr_formations.height.desc"),
            icon: Mountain,
            image: vrScaffolding,
            duration: "18 min",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-12">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/")}
                        className="mb-6 hover:bg-secondary/50"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t("formation_detail.back_to_formations")}
                    </Button>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
                            <Eye className="w-5 h-5 text-accent" />
                            <span className="text-accent font-semibold text-sm">{t("nouveautes_page.badge")}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {t("nouveautes_page.title")}
                        </h1>

                        {/* VR Intro Image */}
                        <div className="flex justify-center mb-10">
                            <img
                                src={vrIntro}
                                alt="VR Introduction"
                                className="h-80 w-auto object-cover rounded-[2rem] shadow-2xl animate-float hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            {t("nouveautes_page.description")}
                        </p>
                    </div>
                </div>

                {/* VR Formations Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {vrFormations.map((formation) => {
                        const IconComponent = formation.icon;
                        return (
                            <div
                                key={formation.id}
                                className={`group relative overflow-hidden rounded-2xl border ${formation.borderColor} ${formation.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                            >
                                {/* Media Container (Image only now) */}
                                <div className="relative aspect-video bg-[#033853] overflow-hidden">
                                    <img
                                        src={formation.image}
                                        alt={formation.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay with Play Icon */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <div className={`bg-gradient-to-r ${formation.color} rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300`}>
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`bg-gradient-to-r ${formation.color} rounded-xl p-3 shadow-lg`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-sm font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                            {formation.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                                        {formation.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {formation.description}
                                    </p>

                                    {/* VR Badge */}
                                    <div className="flex items-center gap-2">
                                        <div className={`bg-gradient-to-r ${formation.color} rounded-lg px-3 py-1.5 flex items-center gap-2`}>
                                            <Eye className="w-4 h-4 text-white" />
                                            <span className="text-white text-xs font-bold">{t("nouveautes_page.vr_badge")}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Border Effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${formation.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 max-w-2xl">
                        <Eye className="w-12 h-12 text-accent" />
                        <h3 className="text-2xl font-bold text-foreground">
                            {t("nouveautes_page.cta_title")}
                        </h3>
                        <p className="text-muted-foreground">
                            {t("nouveautes_page.cta_desc")}
                        </p>
                        <button
                            onClick={() => {
                                navigate("/#contact");
                                setTimeout(() => {
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }, 100);
                            }}
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            {t("nouveautes_page.cta_button")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllNouveautes;
