import heroSafety from "@/assets/hero-safety.jpg";
import evaluationDangers from "@/assets/evaluation-dangers.jpg";
import premiersSecours from "@/assets/premiers-secours.jpg";
import accompagnementConsulting from "@/assets/accompagnement et consulting.jpg";
import sstTrainingImage from "@/assets/SST training.jpg";
import consultingImage from "@/assets/Consulting1.png";
import socobatImage from "@/assets/Photos/SOCOBAT.jpg";
import lumiereImage from "@/assets/Photos/Lumière.jpg";

export interface CarouselSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    video?: string;
    color: string;
}

import underConstructionVideo from "@/assets/Under construction.webm";

export const carouselSlides: CarouselSlide[] = [
    {
        id: 0,
        title: "E-Platform",
        subtitle: "Innovation Digitale",
        description: "Découvrez notre nouvelle plateforme d'e-learning pour une formation moderne et interactive.",
        video: underConstructionVideo,
        color: "from-primary to-accent"
    },
    {
        id: 1,
        title: "HSSE",
        subtitle: "Hygiène, Santé, Sécurité et Environnement",
        description: "Solutions complètes pour la gestion de la santé, sécurité et environnement en entreprise",
        image: sstTrainingImage,
        color: "from-blue-600 to-green-600"
    },
    {
        id: 2,
        title: "Études",
        subtitle: "Études et Ingénierie",
        description: "Expertise technique et études approfondies pour vos projets industriels",
        image: consultingImage,
        color: "from-blue-600 to-gray-600"
    },
    {
        id: 3,
        title: "Formations Professionnelles",
        subtitle: "Développement des Compétences",
        description: "Programmes de formation certifiants adaptés à vos besoins",
        image: socobatImage,
        color: "from-orange-600 to-blue-600"
    },
    {
        id: 4,
        title: "Conseil & Accompagnement",
        subtitle: "Expertise et Solutions",
        description: "Accompagnement personnalisé pour optimiser vos performances",
        image: lumiereImage,
        color: "from-purple-600 to-blue-600"
    }
];
