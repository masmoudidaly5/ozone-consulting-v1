import { Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import vrIntro from "@/assets/VR intro.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Nouveautes = () => {
    const navigate = useNavigate();

    return (
        <section id="nouveautes" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition duration-500"></div>
                            <img
                                src={vrIntro}
                                alt="Réalité Virtuelle"
                                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-contain bg-white p-8 transform transition duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full">
                                <div className="flex items-center gap-2">
                                    <Eye className="w-4 h-4 text-accent" />
                                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Innovation & Technologie</span>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                                Formation en <br />
                                <span className="text-accent">Réalité Virtuelle</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-accent rounded-full"></div>

                            <p className="text-lg text-white/80 leading-relaxed">
                                Plongez vos collaborateurs dans des scénarios réalistes sans aucun risque.
                                La réalité virtuelle double le taux de mémorisation et réduit le temps de formation par quatre.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Simulation d'incendie et évacuation",
                                    "Travaux en hauteur et prévention des chutes",
                                    "Sensibilisation au risque chimique",
                                    "Chantiers et environnement industriels"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                                        <span className="text-white/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Button
                                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[250px]"
                                    onClick={() => {
                                        navigate('/nouveautes');
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Explorer nos modules VR
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nouveautes;

// Assuming the Contact component is in a separate file or defined elsewhere.
// The following is an example of how the Contact component might look after the requested changes,
// based on the provided snippet and instructions.
/*
import { Mail, Phone, MapPin } from "lucide-react"; // Assuming these icons are used
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card and CardContent are from shadcn/ui

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                        Contactez-nous
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Nous sommes là pour répondre à vos questions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Email }
                    <a href="mailto:contact.O3consulting@gmail.com" className="cursor-pointer block transition-transform hover:scale-105">
                        <Card className="shadow-soft border-none hover:shadow-medium transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold mb-2">Email</h3>
                                        <p className="text-muted-foreground">contact.O3consulting@gmail.com</p>
                                        <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    {/* Phone (example, if it existed) }
                    <a href="tel:+33123456789" className="cursor-pointer block transition-transform hover:scale-105">
                        <Card className="shadow-soft border-none hover:shadow-medium transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold mb-2">Téléphone</h3>
                                        <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                                        <p className="text-sm text-muted-foreground mt-1">Du lundi au vendredi, 9h-18h</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    {/* Address (example, if it existed) }
                    <a href="https://maps.google.com/?q=Votre+Adresse" target="_blank" rel="noopener noreferrer" className="cursor-pointer block transition-transform hover:scale-105">
                        <Card className="shadow-soft border-none hover:shadow-medium transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold mb-2">Adresse</h3>
                                        <p className="text-muted-foreground">123 Rue de l'Exemple, 75001 Paris</p>
                                        <p className="text-sm text-muted-foreground mt-1">Visite sur rendez-vous</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
*/
