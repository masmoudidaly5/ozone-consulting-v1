import { useNavigate } from "react-router-dom";
import { formations } from "@/data/formations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";
import { useEffect } from "react";
import { useLoader } from "@/hooks/useLoader";
import { useTranslation } from "react-i18next";

const AllFormations = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { triggerLoader } = useLoader();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-16">
                    {/* Centered Title & Description - Now at the Top */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                            {t("formations_page.title")}
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                            {t("formations_page.description")}
                        </p>
                    </div>

                    {/* Navigation Buttons Row - Pushed to extremities */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/20 pb-8">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/")}
                            className="hover:bg-secondary/50 group flex items-center gap-3 px-4 py-6"
                        >
                            <ArrowLeft className="h-5 w-5 text-white transition-transform group-hover:-translate-x-1" />
                            <span className="text-lg font-medium text-white">{t("about_page.back_home")}</span>
                        </Button>

                        <Button
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[300px]"
                            onClick={() => {
                                triggerLoader(2000);
                                setTimeout(() => {
                                    window.open('/catalogue-formations.pdf', '_blank');
                                }, 1000);
                            }}
                        >
                            <span className="text-base">{t("formations_page.download_pdf")}</span>
                            <Download className="ml-3 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Formations List - Flex layout to center orphans */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-7xl mx-auto">
                    {formations.map((formation) => {
                        return (
                            <div key={formation.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] min-w-[280px] max-w-[320px] lg:max-w-none">
                                <Card
                                    className="shadow-md hover:shadow-lg transition-all duration-300 border-none group overflow-hidden h-full flex flex-col bg-card"
                                >
                                    {/* Image Section - Even more compact */}
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <img
                                            src={formation.image}
                                            alt={formation.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <CardContent className="p-4 flex-1 flex flex-col text-center">
                                        {/* Technical Info Section - Centered */}
                                        <div className="flex flex-wrap items-center justify-center gap-1 mb-3 text-[10px]">
                                            <Badge variant="secondary" className="px-1.5 py-0">
                                                Réf: {formation.reference}
                                            </Badge>
                                            <Badge variant="outline" className="bg-background border-primary/10 text-primary px-1.5 py-0">
                                                {t(`formations.${formation.id}.duration`, { defaultValue: formation.duration })}
                                            </Badge>
                                        </div>

                                        {/* Title - Centered and fully visible */}
                                        <div className="mb-4 flex-1 flex flex-col justify-center py-4 min-h-[80px]">
                                            <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug text-center whitespace-pre-line">
                                                {t(`formations.${formation.id}.title`, { defaultValue: formation.title })}
                                            </h3>
                                        </div>

                                        {/* Action Button - Minimal */}
                                        <Button
                                            size="sm"
                                            className="w-full bg-primary hover:bg-primary/90 text-white mt-auto py-4"
                                            onClick={() => {
                                                navigate(`/formation/${formation.id}`);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            <span className="text-xs">{t("formations_page.details")}</span>
                                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                {/* Sur Mesure Section */}
                <div className="text-center">
                    <div className="bg-accent/10 rounded-2xl p-8 max-w-3xl mx-auto border border-accent/20">
                        <h3 className="text-2xl font-display font-bold mb-4 text-white">
                            {t("formations_page.custom_title")}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            {t("formations_page.custom_desc")}
                        </p>
                        <div className="mt-6">
                            <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                size="lg"
                                onClick={() => {
                                    navigate("/#contact");
                                    // Small delay to allow navigation to happen if we were on a different page
                                    setTimeout(() => {
                                        const contactSection = document.getElementById("contact");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }, 100);
                                }}
                            >
                                {t("formations_page.custom_cta")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFormations;
