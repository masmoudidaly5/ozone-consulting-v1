import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutBrief from "@/components/AboutBrief";
import { Building2, ArrowLeft, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import consultingImage from "@/assets/consulting.jpg";
import heroImage from "@/assets/hero-safety.jpg";
import cnfcppLogo from "@/assets/logo/cnfcpp-logo.png";
import o3Logo from "@/assets/O3.png";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 pb-20">
                <section className="relative py-12 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 gradient-hero"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/")}
                            className="mb-8 text-white hover:bg-white/10 hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {t("about_page.back_home")}
                        </Button>

                        <div className="text-center mb-8">

                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                                {t("about_page.title_part1")} <span className="text-accent">{t("about_page.title_part2")}</span>
                            </h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                        </div>
                    </div>
                </section>

                <AboutBrief />

                <section className="relative py-20 overflow-hidden bg-[#033853]">
                    <div className="container mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                {t("about.title")}
                            </h3>
                            <div className="w-24 h-1 bg-accent mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            {/* First Column - Image + Text */}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-display font-bold text-white">
                                        {t("about.approach_title")}
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">
                                        {t("about.approach_p1")}
                                    </p>
                                    <p className="text-gray-200 leading-relaxed">
                                        {t("about.approach_p2")}
                                    </p>
                                </div>
                            </div>

                            {/* Second Column - Image + Text */}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-display font-bold text-white">
                                        {t("about.engagement_title")}
                                    </h4>
                                    <p className="text-gray-200 leading-relaxed">
                                        {t("about.engagement_p1")}
                                    </p>
                                    <p className="text-gray-200 leading-relaxed">
                                        {t("about.engagement_p2")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Agréé par l'État - Wider and Thinner */}
                        <div className="mt-12 max-w-4xl mx-auto">
                            <Card className="shadow-soft hover:shadow-medium transition-smooth border-none bg-white/95 backdrop-blur-sm">
                                <CardContent className="py-4">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                                            <img src={cnfcppLogo} alt="CNFCPP" className="w-full h-full object-contain" style={{ transform: 'scale(1.8)' }} />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h3 className="text-lg font-display font-bold mb-1 text-foreground">{t("about_page.accreditation_title")}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {t("about_page.accreditation_desc")}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default AboutPage;
