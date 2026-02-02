import { Flame, HeartPulse, Droplet, Mountain } from "lucide-react";

export interface VRFormation {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    videoUrl: string;
    duration: string;
    color: string;
    bgColor: string;
    borderColor: string;
}

export const vrFormationsData: VRFormation[] = [
    {
        id: 1,
        title: "Formation Incendie",
        description: "Apprenez les gestes essentiels pour prévenir et combattre un incendie en réalité virtuelle immersive.",
        icon: Flame,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // À remplacer par votre vidéo
        duration: "15 min",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/30"
    },
    {
        id: 2,
        title: "Premiers Secours",
        description: "Maîtrisez les techniques de premiers secours dans des scénarios réalistes en VR.",
        icon: HeartPulse,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // À remplacer par votre vidéo
        duration: "20 min",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/30"
    },
    {
        id: 3,
        title: "Manipulation de Produits Chimiques",
        description: "Formation complète sur la manipulation sécurisée des produits chimiques en environnement virtuel.",
        icon: Droplet,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // À remplacer par votre vidéo
        duration: "25 min",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/30"
    },
    {
        id: 4,
        title: "Travaux en Hauteur",
        description: "Entraînez-vous aux travaux en hauteur dans un environnement VR sécurisé et réaliste.",
        icon: Mountain,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // À remplacer par votre vidéo
        duration: "18 min",
        color: "from-purple-500 to-indigo-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/30"
    }
];
