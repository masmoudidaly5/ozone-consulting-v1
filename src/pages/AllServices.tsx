import { Shield, FileText, Users, CheckCircle, BarChart, Activity, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import isoImage from "@/assets/iso-45001.jpg";
import iso9001Image from "@/assets/ISO9001 2.jpg";
import iso14001Image from "@/assets/ISO 14001.jpg";
import iso22000Image from "@/assets/ISO 22000.jpg";
import consultingImage from "@/assets/consulting.jpg";
import ergoImage from "@/assets/ergo.jpg";
import eddImage from "@/assets/EDD2.jpg";
import poiImage from "@/assets/plan-operations-interne.jpg";
import evalRisquesImage from "@/assets/Formation-evaluation-des-risques.jpg";
import accConsultingImage from "@/assets/accompagnement et consulting.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AllServices = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

    const toggleExpand = (index: number) => {
        setExpandedIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const services = [
        {
            icon: BarChart,
            title: t("all_services.services_list.hazards.title"),
            description: t("all_services.services_list.hazards.desc"),
            image: eddImage,
            features: [
                t("all_services.services_list.hazards.feat1"),
                t("all_services.services_list.hazards.feat2"),
                t("all_services.services_list.hazards.feat3"),
                t("all_services.services_list.hazards.feat4"),
            ],
        },
        {
            icon: FileText,
            title: t("all_services.services_list.classification.title"),
            description: t("all_services.services_list.classification.desc"),
            image: poiImage,
            features: [
                t("all_services.services_list.classification.feat1"),
                t("all_services.services_list.classification.feat2"),
                t("all_services.services_list.classification.feat3"),
                t("all_services.services_list.classification.feat4"),
            ],
        },
        {
            icon: Users,
            title: t("all_services.services_list.ergo.title"),
            description: t("all_services.services_list.ergo.desc"),
            image: ergoImage,
            features: [
                t("all_services.services_list.ergo.feat1"),
                t("all_services.services_list.ergo.feat2"),
                t("all_services.services_list.ergo.feat3"),
                t("all_services.services_list.ergo.feat4"),
            ],
        },
        {
            icon: Shield,
            title: t("all_services.services_list.iso.title"),
            description: t("all_services.services_list.iso.desc"),
            image: isoImage,
            features: [
                t("all_services.services_list.iso.feat1"),
                t("all_services.services_list.iso.feat2"),
                t("all_services.services_list.iso.feat3"),
                t("all_services.services_list.iso.feat4"),
            ],
        },
        {
            icon: Shield,
            title: t("all_services.services_list.iso9001.title"),
            description: t("all_services.services_list.iso9001.desc"),
            image: iso9001Image,
            features: [
                t("all_services.services_list.iso9001.feat1"),
                t("all_services.services_list.iso9001.feat2"),
                t("all_services.services_list.iso9001.feat3"),
                t("all_services.services_list.iso9001.feat4"),
            ],
        },
        {
            icon: Shield,
            title: t("all_services.services_list.iso14001.title"),
            description: t("all_services.services_list.iso14001.desc"),
            image: iso14001Image,
            features: [
                t("all_services.services_list.iso14001.feat1"),
                t("all_services.services_list.iso14001.feat2"),
                t("all_services.services_list.iso14001.feat3"),
                t("all_services.services_list.iso14001.feat4"),
            ],
        },
        {
            icon: Shield,
            title: t("all_services.services_list.iso22000.title"),
            description: t("all_services.services_list.iso22000.desc"),
            image: iso22000Image,
            features: [
                t("all_services.services_list.iso22000.feat1"),
                t("all_services.services_list.iso22000.feat2"),
                t("all_services.services_list.iso22000.feat3"),
                t("all_services.services_list.iso22000.feat4"),
            ],
        },
        {
            icon: ClipboardList,
            title: t("all_services.services_list.risk.title"),
            description: t("all_services.services_list.risk.desc"),
            image: evalRisquesImage,
            features: [
                t("all_services.services_list.risk.feat1"),
                t("all_services.services_list.risk.feat2"),
                t("all_services.services_list.risk.feat3"),
            ],
        },
        {
            icon: Activity,
            title: t("all_services.services_list.strategy.title"),
            description: t("all_services.services_list.strategy.desc"),
            image: accConsultingImage,
            features: [
                t("all_services.services_list.strategy.feat1"),
                t("all_services.services_list.strategy.feat2"),
                t("all_services.services_list.strategy.feat3"),
                t("all_services.services_list.strategy.feat4"),
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
                        {t("about_page.back_home")}
                    </Button>

                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                            {t("all_services.title")}
                        </h1>
                        <p className="text-lg text-white/70">
                            {t("all_services.description")}
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

                            </div>
                            <CardHeader className="pt-6 pb-4">
                                <CardTitle
                                    className="text-2xl font-display mb-2 text-center"
                                    dangerouslySetInnerHTML={{ __html: service.title }}
                                />
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="flex items-center justify-center w-full mb-4 text-primary font-semibold hover:text-primary/80 transition-colors"
                                    >
                                        {expandedIndices.includes(index) ? t("common.show_less") || "Voir moins" : t("common.show_more") || "Voir plus"}
                                        {expandedIndices.includes(index) ? (
                                            <ChevronUp className="ml-1 h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        )}
                                    </button>

                                    {expandedIndices.includes(index) && (
                                        <div className="bg-secondary/20 rounded-xl p-6 mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                            <ul className="space-y-3">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
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
                                    {t("common.learn_more")}
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
