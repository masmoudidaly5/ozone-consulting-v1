export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jean Dupont",
        role: "Responsable HSE",
        company: "Industries Plus",
        content: "La formation en réalité virtuelle a transformé notre approche de la sécurité. Nos employés sont beaucoup plus engagés et retiennent mieux les consignes de sécurité.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 2,
        name: "Marie Claire",
        role: "Directrice des Ressources Humaines",
        company: "Logistique Express",
        content: "L'expertise d'O3 Consulting dans l'évaluation des risques nous a permis de réduire drastiquement nos accidents du travail en seulement six mois.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 3,
        name: "Ahmed Mansouri",
        role: "Chef de Chantier",
        company: "BTP Construction",
        content: "Les modules de formation sur les travaux en hauteur sont d'un réalisme saisissant. C'est l'outil parfait pour sensibiliser sans mettre personne en danger.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    }
];
