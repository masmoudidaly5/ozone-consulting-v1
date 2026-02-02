import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import consultingImage from "@/assets/consulting.jpg";
import heroImage from "@/assets/hero-safety.jpg";
import cnfcppLogo from "@/assets/logo/cnfcpp-logo.png";
import o3Logo from "@/assets/O3.png";
import { useEffect } from "react";

const AboutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-24 pb-20">
                <section className="relative py-20 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 gradient-hero"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/")}
                            className="mb-8 text-white hover:bg-white/10 hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour à l'accueil
                        </Button>

                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                                À Propos d'OZONE CONSULTING
                            </h1>
                            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                                Un cabinet de consulting et de formation avec une expertise reconnue dans le domaine de la santé et sécurité au travail
                            </p>
                        </div>

                        {/* Rotating O3 Logo */}
                        <div className="flex justify-center mb-12 animate-fade-in group">
                            <div className="relative cursor-pointer">
                                <img
                                    src={o3Logo}
                                    alt="O3"
                                    className="h-48 md:h-64 w-auto drop-shadow-2xl transition-all duration-500 ease-out group-hover:scale-125 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] group-hover:brightness-110 animate-spin-slow"
                                    style={{ animationDuration: '20s' }}
                                />
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 blur-xl transition-all duration-500"></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            <Card className="shadow-soft hover:shadow-medium transition-smooth border-none bg-white/95 backdrop-blur-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Building2 className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">Notre histoire</h3>
                                    <p className="text-muted-foreground">
                                        Fondé en 2020, OZONE CONSULTING est un leader en consulting et formation SST pour l'industrie.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-soft hover:shadow-medium transition-smooth border-none bg-white/95 backdrop-blur-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                                        <img src={o3Logo} alt="O3" className="w-10 h-10 object-contain" style={{ transform: 'scale(0.8)' }} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">Notre expertise</h3>
                                    <p className="text-muted-foreground">
                                        Solutions sur mesure et expertise technique conforme aux normes internationales (ISO 45001).
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-soft hover:shadow-medium transition-smooth border-none bg-white/95 backdrop-blur-sm">
                                <CardContent className="pt-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden p-2">
                                        <img src={cnfcppLogo} alt="CNFCPP" className="w-full h-full object-contain" style={{ transform: 'scale(1.8)' }} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">Agréé par l'Etat</h3>
                                    <p className="text-muted-foreground">
                                        Cabinet de formation agréé par le Centre National de Formation Continue et de Promotion Professionnelle sous le Numéro d'enregistrement: 61-455-24.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    L'Excellence au Service de la Sécurité
                                </h3>
                                <div className="w-24 h-1 bg-accent mx-auto"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                {/* First Column - Image + Text */}
                                <div className="space-y-6">
                                    <div className="relative rounded-2xl overflow-hidden shadow-strong h-64">
                                        <img
                                            src={consultingImage}
                                            alt="Consulting OZONE"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-display font-bold text-white">
                                            Notre Approche
                                        </h4>
                                        <p className="text-gray-200 leading-relaxed">
                                            OZONE CONSULTING s'est imposé comme un acteur majeur dans le domaine du consulting et de la formation en santé-sécurité au travail.
                                        </p>
                                        <p className="text-gray-200 leading-relaxed">
                                            Fort d'une expérience significative auprès d'entreprises industrielles, notre cabinet combine expertise technique et approche pédagogique.
                                        </p>
                                    </div>
                                </div>

                                {/* Second Column - Image + Text */}
                                <div className="space-y-6">
                                    <div className="relative rounded-2xl overflow-hidden shadow-strong h-64">
                                        <img
                                            src={heroImage}
                                            alt="Engagement OZONE"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-display font-bold text-white">
                                            Notre Engagement
                                        </h4>
                                        <p className="text-gray-200 leading-relaxed">
                                            Notre équipe de consultants et formateurs qualifiés accompagne les organisations dans leur démarche d'amélioration continue.
                                        </p>
                                        <p className="text-gray-200 leading-relaxed">
                                            De la conception d'études de dangers à la mise en place de systèmes de management conformes aux normes internationales, nous vous guidons à chaque étape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
