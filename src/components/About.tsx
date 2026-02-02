import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import consultingImage from "@/assets/consulting.jpg";
import isoImage from "@/assets/iso-45001.jpg";
import heroImage from "@/assets/hero-safety.jpg";
import cnfcppLogo from "@/assets/logo/cnfcpp-logo.png";
import o3Logo from "@/assets/O3.png";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
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
  );
};

export default About;
