import React from "react";
import heroImage from "@/assets/hero-safety.jpg";
import serioplast from "@/assets/Logo/01_SERIOPLAST_Green_Rgb.jpg";
import agroliva from "@/assets/Logo/AGroliva.png";
import alco from "@/assets/Logo/ALCO.jpg";
import elAmen from "@/assets/Logo/El AMen.jpg";
import universePack from "@/assets/Logo/niverse-Pack.png";
import newpark from "@/assets/Logo/Newpark_logo-web-2020.jpg";
import socobat from "@/assets/Logo/SOCOBAT.png";
import actpharma from "@/assets/Logo/actpharma-sa-200x200.png";
import cogitel from "@/assets/Logo/cogitel.jpg";
import hutchinson from "@/assets/Logo/hutchinson-logo.png";
import iit from "@/assets/Logo/iit-1536x970-1.png";
import kifBiscuit from "@/assets/Logo/kif-biscuit.png";
import isb from "@/assets/Logo/ISB.png";
import lumiere from "@/assets/Logo/Lumiere.jpg";
import optylab from "@/assets/Logo/Optylab.png";
import italfluid from "@/assets/Logo/italfluid.png";
import newfood from "@/assets/Logo/newfood.jpeg";
import sidilec from "@/assets/Logo/sidilec.jpg";
import sumitomo from "@/assets/Logo/sumitomo_e_bordnetze_tunisia_logo.jpeg";
import tads from "@/assets/Logo/TADS.jpg";
import ansaldo from "@/assets/Logo/Ansaldo.jpg";

import { useTranslation } from "react-i18next";

const Partners = () => {
    const { t } = useTranslation();
    const partners = [
        { name: "Sumitomo", logo: sumitomo, scale: 0.8 },
        { name: "Agroliva", logo: agroliva, scale: 1.4 },
        { name: "IIT", logo: iit, scale: 0.8 },
        { name: "Cogitel", logo: cogitel, scale: 1.4 },
        { name: "Hutchinson", logo: hutchinson, scale: 1 },
        { name: "SOCOBAT", logo: socobat, scale: 1.4 },
        { name: "Newfood", logo: newfood, scale: 1.2 },
        { name: "Serioplast", logo: serioplast, scale: 0.8 },
        { name: "ISB", logo: isb, scale: 0.8 },
        { name: "Actpharma", logo: actpharma, scale: 1.4 },
        { name: "Kif Biscuit", logo: kifBiscuit },
        { name: "Universe Pack", logo: universePack, scale: 0.8 },
        { name: "Lumière", logo: lumiere, scale: 0.8 },
        { name: "Sidilec", logo: sidilec, scale: 1.4 },
        { name: "ALCO", logo: alco },
        { name: "Italfluid", logo: italfluid },
        { name: "El Amen", logo: elAmen, scale: 1.2 },
        { name: "Newpark", logo: newpark },
        { name: "Optylab", logo: optylab },
        { name: "TADS", logo: tads },
        { name: "Ansaldo", logo: ansaldo },
    ];

    return (
        <>
            {/* Title Section with Hero Background */}
            <section className="relative pt-4 pb-12 bg-background">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                        {t("partners.title")}
                    </h3>
                    <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                </div>
            </section>

            {/* Carousel Section with White Background */}
            <section className="py-6 bg-background overflow-hidden">
                <div className="relative w-full overflow-hidden">
                    {/* Gradient masks for smooth fade effect on edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

                    <div className="flex animate-scroll whitespace-nowrap hover:pause-animation w-max">
                        {/* Double the list for seamless infinite scrolling */}
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="mx-6 md:mx-10 flex items-center justify-center min-w-[200px] h-32 bg-white rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-soft transition-all duration-300 group p-2"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    style={{ transform: `scale(${partner.scale || 1})` }}
                                    className="max-h-full max-w-full object-contain transition-all duration-300 mix-blend-multiply"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
