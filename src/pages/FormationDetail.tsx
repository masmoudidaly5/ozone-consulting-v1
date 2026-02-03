import { useParams, useNavigate } from "react-router-dom";
import { formations } from "@/data/formations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Award, CheckCircle, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FormationDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const formation = formations.find((f) => f.id === id);

    if (!formation) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Formation non trouvée</h1>
                    <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white pt-32 pb-20">
                <div className="container mx-auto">
                    <Button
                        variant="ghost"
                        className="mb-6 text-white hover:bg-white/20"
                        onClick={() => navigate("/#formations")}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour aux formations
                    </Button>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* Icon and Reference */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
                                    {formation.icon}
                                </div>
                                <Badge className="bg-secondary text-foreground text-sm px-4 py-2">
                                    Réf: {formation.reference}
                                </Badge>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                {formation.title}
                            </h1>

                            {/* Subtitle and Badges */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                <p className="text-lg text-white/90 leading-relaxed flex-1">
                                    {formation.description}
                                </p>
                                <div className="flex gap-3 flex-shrink-0">
                                    <Badge className="bg-accent text-accent-foreground">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {formation.duration}
                                    </Badge>
                                    <Badge className="bg-white/20 text-white">
                                        {formation.level}
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-strong h-64 md:h-80">
                            <img
                                src={formation.image}
                                alt={formation.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Objectives */}
                            <Card className="shadow-soft border-none">
                                <CardContent className="pt-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Target className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-display font-bold text-primary">
                                            Objectifs de la formation
                                        </h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {formation.objectives.map((objective, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{objective}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Program */}
                            <div>
                                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                                    Programme détaillé
                                </h2>
                                <div className="space-y-6">
                                    {formation.program.map((section, index) => (
                                        <Card key={index} className="shadow-soft border-none overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-accent h-1"></div>
                                            <CardContent className="pt-6">
                                                <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                                                    {section.title}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="text-muted-foreground">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Info Card */}
                            <Card className="shadow-medium border-none sticky top-24">
                                <CardContent className="pt-6 space-y-6">
                                    <div>
                                        <h3 className="font-display font-bold text-lg mb-4 text-primary">
                                            Informations pratiques
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Award className="h-4 w-4 text-accent" />
                                                    <span className="font-medium text-sm">Référence</span>
                                                </div>
                                                <p className="text-muted-foreground text-sm pl-6">
                                                    Réf: {formation.reference}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className="h-4 w-4 text-accent" />
                                                    <span className="font-medium text-sm">Durée</span>
                                                </div>
                                                <p className="text-muted-foreground text-sm pl-6">
                                                    {formation.duration}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Users className="h-4 w-4 text-accent" />
                                                    <span className="font-medium text-sm">Public cible</span>
                                                </div>
                                                <ul className="text-muted-foreground text-sm pl-6 space-y-1">
                                                    {formation.targetAudience.map((audience, index) => (
                                                        <li key={index}>• {audience}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {formation.prerequisites && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <CheckCircle className="h-4 w-4 text-accent" />
                                                        <span className="font-medium text-sm">Prérequis</span>
                                                    </div>
                                                    <p className="text-muted-foreground text-sm pl-6">
                                                        {formation.prerequisites}
                                                    </p>
                                                </div>
                                            )}

                                            {formation.certification && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Award className="h-4 w-4 text-accent" />
                                                        <span className="font-medium text-sm">Certification</span>
                                                    </div>
                                                    <p className="text-muted-foreground text-sm pl-6">
                                                        {formation.certification}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-border">
                                        <Button
                                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                                            size="lg"
                                            onClick={() => {
                                                const contactSection = document.getElementById("contact");
                                                if (contactSection) {
                                                    navigate("/");
                                                    setTimeout(() => {
                                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                                    }, 100);
                                                } else {
                                                    navigate("/#contact");
                                                }
                                            }}
                                        >
                                            Demander un devis
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FormationDetail;
