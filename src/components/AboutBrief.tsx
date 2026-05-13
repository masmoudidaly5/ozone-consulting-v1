import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "@/assets/Consulting1.png";
import { useTranslation } from "react-i18next";

const AboutBrief = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <section id="about-brief" className="py-24 bg-[#033853] relative">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Visual Experience */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-strong transition-all duration-500">
                            <img
                                src={aboutImage}
                                alt="Expertise OZONE"
                                className="w-full h-[550px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Decorative Background Dots */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-10 order-1 lg:order-2">


                        <div className="bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{t("about_brief.welcome")}</h3>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                {t("about_brief.description")}
                            </p>
                        </div>

                        {/* Core Values Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: t("about_brief.compliance_title"), desc: t("about_brief.compliance_desc") },
                                { icon: Zap, title: t("about_brief.innovation_title"), desc: t("about_brief.innovation_desc") },
                                { icon: Users, title: t("about_brief.coaching_title"), desc: t("about_brief.coaching_desc") },
                                { icon: Trophy, title: t("about_brief.results_title"), desc: t("about_brief.results_desc") }
                            ].map((value, idx) => (
                                <div key={idx} className="group p-5 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-accent/40 hover:shadow-medium transition-all duration-300 flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg shadow-sm group-hover:bg-accent/10 transition-colors">
                                        <value.icon className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{value.title}</h4>
                                        <p className="text-xs text-white/70 leading-normal">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button
                                className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                onClick={() => {
                                    navigate('/about');
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {t("about_brief.cta")}
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBrief;
