import { Shield, FileText, Users, CheckCircle, BarChart, Activity, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import isoImage from "@/assets/iso-45001.jpg";
import consultingImage from "@/assets/consulting.jpg";
import ergoImage from "@/assets/ergo.jpg";
import eddImage from "@/assets/EDD2.jpg";
import poiImage from "@/assets/plan-operations-interne.jpg";
import evalRisquesImage from "@/assets/Formation-evaluation-des-risques.jpg";
import accConsultingImage from "@/assets/accompagnement et consulting.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AllServices = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            icon: BarChart,
            title: "Études de dangers",
            description: "Identification et évaluation complète des risques pour prévenir les accidents et améliorer la sécurité de vos installations.",
            image: eddImage,
            features: [
                "Identification des risques majeurs",
                "Analyse de scénarios d'accidents",
                "Mesures de prévention",
                "Amélioration de la sécurité",
            ],
        },
        {
            icon: FileText,
            title: "Dossier de classement",
            description: "Accompagnement complet pour le classement de vos établissements (ICPE) et la conformité réglementaire.",
            image: poiImage,
            features: [
                "Analyse de conformité",
                "Constitution du dossier",
                "Relations avec l'administration",
                "Suivi des procédures",
            ],
        },
        {
            icon: Users,
            title: "Étude ergonomique",
            description: "Analyse approfondie des postes de travail pour prévenir les TMS et optimiser le confort et la productivité.",
            image: ergoImage,
            features: [
                "Analyse de l'activité",
                "Aménagement de postes",
                "Prévention des TMS",
                "Bien-être au travail",
            ],
        },
        {
            icon: Shield,
            title: "Système ISO 45001",
            description: "Mise en place et certification du système de management de la santé sécurité au travail selon la norme ISO 45001.",
            image: isoImage,
            features: [
                "Diagnostic initial",
                "Mise en place ISO 45001",
                "Audit interne",
                "Accompagnement certification",
            ],
        },
        {
            icon: ClipboardList,
            title: "Évaluation des risques",
            description: "Identification et évaluation méthodique des risques professionnels pour l'élaboration de votre Document Unique.",
            image: evalRisquesImage,
            features: [
                "Inventaire des risques",
                "Cotation et hiérarchisation",
                "Plan d'action de prévention",
                "Mise à jour du DUER",
            ],
        },
        {
            icon: Activity,
            title: "Consulting stratégique",
            description: "Accompagnement personnalisé pour optimiser vos processus et améliorer votre performance en matière de sécurité.",
            image: accConsultingImage,
            features: [
                "Optimisation des processus",
                "Performance sécurité",
                "Conseil sur mesure",
                "Suivi et évaluation",
            ],
        },
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
                        Retour à l'accueil
                    </Button>

                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
                            Nos Services
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Des solutions complètes pour accompagner vos projets en santé-sécurité au travail.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="shadow-soft hover:shadow-strong transition-smooth border-2 border-primary/10 hover:border-primary overflow-hidden group h-full flex flex-col relative bg-white"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary shadow-sm">
                                    <service.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <CardHeader className="pt-6 pb-4">
                                <CardTitle className="text-2xl font-display mb-2">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto bg-secondary/20 rounded-xl p-6 mb-6">
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    className="w-full bg-primary hover:bg-primary/90 text-white group-hover:translate-x-1 transition-all"
                                    onClick={() => {
                                        navigate("/#contact");
                                        setTimeout(() => {
                                            const contactSection = document.getElementById("contact");
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }, 100);
                                    }}
                                >
                                    En savoir plus
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllServices;
