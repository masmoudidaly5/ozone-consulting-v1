import { useNavigate } from "react-router-dom";
import { formations } from "@/data/formations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";
import { useEffect } from "react";
import { useLoader } from "@/hooks/useLoader";

const AllFormations = () => {
    const navigate = useNavigate();
    const { triggerLoader } = useLoader();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/")}
                            className="hover:bg-secondary/50"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour à l'accueil
                        </Button>

                        <Button
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
                            onClick={() => {
                                triggerLoader(2000);
                                setTimeout(() => {
                                    window.open('/catalogue-formations.pdf', '_blank');
                                }, 1000);
                            }}
                        >
                            Télécharger le catalogue de formations
                            <Download className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
                            Catalogue Complet des Formations
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Découvrez l'ensemble de nos programmes de formation conçus pour renforcer la sécurité et les compétences de vos équipes.
                        </p>
                    </div>
                </div>

                {/* Formations Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
                    {formations.map((formation) => {
                        return (
                            <Card
                                key={formation.id}
                                className="shadow-lg hover:shadow-xl transition-all duration-300 border-none group overflow-hidden h-full flex flex-col bg-card"
                            >
                                {/* Image Section - Always visible, no blur overlay */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <img
                                        src={formation.image}
                                        alt={formation.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Badge Icon overlay on image */}
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary shadow-sm">
                                        {formation.icon}
                                    </div>
                                </div>

                                <CardContent className="p-6 flex-1 flex flex-col">
                                    {/* Technical Info Section (Ref, Duration, Level) */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-sm">
                                        <Badge variant="secondary" className="px-3 py-1">
                                            Réf: {formation.reference}
                                        </Badge>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-background">
                                                {formation.duration}
                                            </Badge>
                                            <Badge variant="outline" className="bg-background border-primary/20 text-primary">
                                                {formation.level}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    <div className="w-full h-px bg-border mb-6"></div>

                                    {/* Title & Description */}
                                    <div className="mb-6 flex-1">
                                        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {formation.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {formation.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <Button
                                        className="w-full bg-primary hover:bg-primary/90 text-white mt-auto group-hover:translate-x-1 transition-all"
                                        onClick={() => {
                                            navigate(`/formation/${formation.id}`);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        En savoir plus
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Sur Mesure Section */}
                <div className="text-center">
                    <div className="bg-accent/10 rounded-2xl p-8 max-w-3xl mx-auto border border-accent/20">
                        <h3 className="text-2xl font-display font-bold mb-4 text-primary">
                            Formations Sur Mesure
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Toutes nos formations peuvent être adaptées aux besoins spécifiques de votre entreprise.
                            Nous proposons également des programmes sur mesure en fonction de vos contraintes opérationnelles
                            et de votre secteur d'activité.
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
                                Personnaliser votre pack de formation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFormations;
