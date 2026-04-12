import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "@/assets/Consulting1.png";

const AboutBrief = () => {
    const navigate = useNavigate();

    return (
        <section id="about-brief" className="py-24 bg-white relative">
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


                        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-display font-bold text-white mb-4">Welcome to Ozone,</h3>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Bienvenue chez Ozone. Nous sommes un cabinet de conseil et de formation tunisien fondé en 2020.
                                Nous proposons des solutions innovantes et personnalisées, adaptées aux besoins de nos clients.
                                Notre expertise couvre un large éventail de services, de la formation professionnelle au conseil stratégique
                                en passant par le Management HSE. Nos experts accompagnent les entreprises vers une croissance durable
                                et l'excellence opérationnelle.
                            </p>
                        </div>

                        {/* Core Values Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: "Conformité", desc: "Respect strict des normes ISO et réglementations locales." },
                                { icon: Zap, title: "Innovation", desc: "Utilisation de la VR pour des formations immersives." },
                                { icon: Users, title: "Coaching", desc: "Accompagnement terrain personnalisé pour vos équipes." },
                                { icon: Trophy, title: "Résultats", desc: "Réduction drastique des incidents et optimisation QHSE." }
                            ].map((value, idx) => (
                                <div key={idx} className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-accent/40 hover:shadow-medium transition-all duration-300 flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm group-hover:bg-accent/10 transition-colors">
                                        <value.icon className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">{value.title}</h4>
                                        <p className="text-xs text-slate-500 leading-normal">{value.desc}</p>
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
                                Découvrir notre ADN
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
